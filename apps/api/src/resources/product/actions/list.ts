import { z } from 'zod';

import { AppKoaContext, AppRouter } from 'types';
import { validateMiddleware } from 'middlewares';
import { productService } from 'resources/product';

const schema = z.object({
  page: z.string().transform(Number).default('1'),
  perPage: z.string().transform(Number).default('6'),
  sort: z
    .object({
      createdOn: z.enum(['asc', 'desc']),
    })
    .default({ createdOn: 'desc' }),
  searchText: z.string().default(''),
  type: z.enum(['my', 'all']).default('all'),
  to: z
    .string()
    .refine((arg: string) => !isNaN(parseInt(arg, 10)), {
      message: 'To must be number',
    })
    .default('0'),
  from: z
    .string()
    .refine((arg: string) => !isNaN(parseInt(arg, 10)), {
      message: 'From must be number',
    })
    .default('0'),
});

type ValidatedData = z.infer<typeof schema>;

async function handler(ctx: AppKoaContext<ValidatedData>) {
  const {
    perPage,
    page,
    sort,
    searchText,
    type,
    to: toString,
    from: fromString,
  } = ctx.validatedData;

  const { user } = ctx.state;

  const from = parseInt(fromString, 10);
  const to = parseInt(toString, 10);

  const validatedSearch = searchText
    .split('\\')
    .join('\\\\')
    .split('.')
    .join('\\.');
  const regExp = new RegExp(validatedSearch, 'gi');

  const fromQuery = from > 0 ? { price: { $gte: from } } : {};
  const toQuery = to > 0 ? { price: { $lte: to } } : {};
  const typeQuery = type === 'my' ? { userId: user._id } : {};

  const products = await productService.find(
    {
      $and: [
        { productName: { $regex: regExp } },
        fromQuery,
        toQuery,
        typeQuery,
      ],
    },
    { page, perPage },
    { sort },
  );

  ctx.body = {
    items: products.results,
    totalPages: products.pagesCount,
    count: products.count,
  };
}

export default (router: AppRouter) => {
  router.get('/', validateMiddleware(schema), handler);
};
