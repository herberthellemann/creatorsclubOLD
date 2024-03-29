// app.creatorsclub.world/

import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Layout from "../components/Layout/Layout";

const Home: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  // Verify session
  if (session) {
    return (
      <Layout>
        <div>
          <h1>Home page</h1>
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

export default Home;
