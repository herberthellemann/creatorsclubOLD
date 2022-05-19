// pages/api/product/new.ts

import { Product } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../../lib/prisma";

type Data = {
  name: string;
  type: string;
  description: string;
  productPage: string;
  value: number;
  imageUrl: string;
};

// PRODUCT /api/product/new
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<Product>
) {
  const { name, type, productPageUrl, value, description, tempImage } =
    req.body;

  const session = await getSession({ req });

  // Fetch the brand from the user
  const user = await prisma.user.findUnique({
    where: {
      email: session?.user!.email!,
    },
    include: {
      brand: true,
    },
  });

  const result = await prisma.product.create({
    data: {
      name: name,
      type: type,
      description: description,
      productPage: productPageUrl,
      value: Number(value),
      imageUrl: tempImage,
      brand: { connect: { id: user?.brand?.id } },
    },
  });
  res.json(result);
}
