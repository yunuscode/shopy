import { z } from 'zod';

const schema = z
  .object({
    _id: z.string(),

    productName: z.string(),
    price: z.number(),
    productImageUrl: z.string().nullable().optional(),

    userId: z.string(),

    createdOn: z.date().optional(),
    updatedOn: z.date().optional(),
    deletedOn: z.date().optional().nullable(),
  })
  .strict();

export default schema;
