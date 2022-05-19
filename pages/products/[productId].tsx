// app.creatorsclub.world/product/[productId]

import { GetServerSideProps } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import { ProductType } from "../../constants/product-items";
import { prisma } from "../../lib/prisma";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Control/Button";
import styles from "../../styles/ProductPage.module.css";
import {
  Delete,
  Edit,
  ArrowCircleRight,
} from "@styled-icons/fluentui-system-filled";

type Props = {
  product: ProductType;
};

function ProductPage(props: Props) {
  const { data: session } = useSession();
  const router = useRouter();

  // CRUD METHODS
  async function deleteProduct(id: string): Promise<void> {
    await fetch(`/api/product/${id}`, {
      method: "DELETE",
    });
    router.push("/products");
  }

  if (session) {
    return (
      <>
        <Layout>
          <div className={styles.container}>
            <div className={styles.grid_1}>
              <ArrowCircleRight
                size={24}
                className={styles.rotate}
                onClick={() => router.back()}
              />
              <h1>{props.product.name}</h1>
            </div>
            <div className={styles.grid_2A}>
              <h3 className={styles.h3}>Product Details</h3>
              <h4 className={styles.item_title}>Type</h4>
              <p className={styles.item_data}>{props.product.type}</p>
              <h4 className={styles.item_title}>Description</h4>
              <p className={styles.item_data}>{props.product.description}</p>
              <h4 className={styles.item_title}>Product Page</h4>
              <p className={styles.item_data}>
                <a
                  href={props.product.productPage}
                  className={styles.item_link}
                >
                  {props.product.productPage}
                </a>
              </p>
              <h4 className={styles.item_title}>Value</h4>
              <p className={styles.item_data}>
                {(Math.round(props.product.value * 100) / 100).toFixed(2)} €
              </p>
            </div>
            <div className={styles.grid_2B}>
              <div className={styles.square_box}>
                <div className={styles.square_content}>
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1652538302725-0ee98032dcad"
                    }
                    layout="fill"
                    objectFit="cover"
                    alt="Product image"
                  />
                </div>
              </div>
            </div>
            <div className={styles.grid_3}>
              <h3>Actions</h3>
              <div className={styles.action_bar}>
                {/*  <Button
                  title="Edit"
                  fullWidth={false}
                  color="black"
                  icon={Edit}
                /> */}
                <Button
                  title="Delete"
                  fullWidth={false}
                  color="black"
                  icon={Delete}
                  handleClick={() => deleteProduct(props.product.id)}
                />
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
  }

  if (!session) {
    router.push("/api/auth/signin");
  }
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // Find the unique product from the open URL
  const singleProduct = await prisma.product.findUnique({
    where: {
      id: String(params?.productId),
    },
  });

  // For some reason we need to stringify and parse before returning
  const product = JSON.parse(JSON.stringify(singleProduct));
  return {
    props: { product, id: params?.productId },
  };
};

export default ProductPage;
