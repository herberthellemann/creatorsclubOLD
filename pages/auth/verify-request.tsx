// www.creatorsclub.world/auth/verify-request

import type { NextPage } from "next";
import styles from "../../styles/CheckMagicLink.module.css";

const CheckMagicLink: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1>Check your email ✉️</h1>
          <p>A magic link has been sent to your email address.</p>
          <p>Click on on it to open the app.</p>
        </div>
      </div>
    </>
  );
};

export default CheckMagicLink;
