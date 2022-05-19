// app.creatorsclub.world/shipping

import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Layout from "../components/Layout/Layout";

const Shipping: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Verify session
  if (session) {
    return (
      <Layout>
        <div>
          <h1>Shipping page</h1>
        </div>
      </Layout>
    );
  }

  // Push to log in
  /* if (!session) {
    router.push("/api/auth/signin");
  } */

  // Default return
  return (
    <div>
      <h1>Not signed in</h1>
    </div>
  );
};

export default Shipping;
