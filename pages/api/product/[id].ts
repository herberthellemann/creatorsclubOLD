// pages/api/product/new.ts

import { Product } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<Product>
) {
  const productId: string = Array.isArray(req.query.id)
    ? req.query.id[0]
    : req.query.id;
  if (req.method === "DELETE") {
    const product = await prisma.product.delete({
      where: { id: productId },
    });
    res.json(product);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
