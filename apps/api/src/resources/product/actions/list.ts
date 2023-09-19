import { z } from 'zod';

import { AppKoaContext, AppRouter } from 'types';
import { validateMiddleware } from 'middlewares';
import { productService } from 'resources/product';

const schema = z.object({
  page: z.string().transform(Number).default('1'),
  perPage: z.string().transform(Number).default('10'),
  sort: z
    .object({
      createdOn: z.enum(['asc', 'desc']),
    })
    .default({ createdOn: 'desc' }),
  searchValue: z.string().default(''),
  type: z.enum(['my', 'all']).default('all'),
});

type ValidatedData = z.infer<typeof schema>;

async function handler(ctx: AppKoaContext<ValidatedData>) {
  const { perPage, page, sort, searchValue, type } = ctx.validatedData;

  const { user } = ctx.state;

  const validatedSearch = searchValue
    .split('\\')
    .join('\\\\')
    .split('.')
    .join('\\.');
  const regExp = new RegExp(validatedSearch, 'gi');

  const products = await productService.find(
    {
      $and: [
        { productName: { $regex: regExp } },
        type === 'my'
          ? {
            userId: user._id,
          }
          : {},
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
