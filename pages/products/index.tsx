// app.creatorsclub.world/products

import type { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/react";
import { useState } from "react";
import { ProductType } from "../../constants/product-items";
import { prisma } from "../../lib/prisma";
import taskStyles from "../../styles/Tasks.module.css";
import Layout from "../../components/Layout/Layout";
import ProductsTable from "../../components/Tables/ProductsTable";
import NewProductModal from "../../components/Modals/NewProductModal";

type Props = {
  products: ProductType[];
};

function Products(props: Props) {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  // Render all products table only if the sesion is validated
  if (session) {
    return (
      <Layout>
        <div className={taskStyles.topWrapper}>
          <p>All products</p>
          <div className={taskStyles.buttonWrapper}>
            <button
              className={taskStyles.button}
              onClick={() => setIsOpen(true)}
            >
              New Product
            </button>
          </div>
        </div>
        <div>
          <ProductsTable data={props.products} />
        </div>
        <br></br>
        {isOpen && (
          <NewProductModal
            title={"Add New Product 🙌"}
            buttonLabel={"Create Product"}
            setIsOpen={setIsOpen}
          />
        )}
      </Layout>
    );
  }

  // Push to log in if there is no session active
  /* if (!session) {
    router.push("/api/auth/signin");
  } */

  // Default return if there iss no session active
  return (
    <div>
      <h1>Not signed in</h1>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });

  if (!session) {
    res.statusCode = 403;
    return { props: { products: [] } };
  }

  // Fetch the brand from the user
  const user = await prisma.user.findUnique({
    where: {
      email: session.user!.email!,
    },
    include: {
      brand: true,
    },
  });

  // Fetch all products from the user's brand
  const brandProducts = await prisma.product.findMany({
    where: {
      brand: {
        name: user?.brand?.name,
      },
    },
  });

  // For some reason we need to stringify and parse before returning
  const products = JSON.parse(JSON.stringify(brandProducts));
  return { props: { products } };
};

export default Products;
