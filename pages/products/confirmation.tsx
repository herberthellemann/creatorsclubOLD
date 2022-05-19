// www.creatorsclub.world/products/confirmation

import type { NextPage } from "next";
import Router from "next/router";
import Button from "../../components/Control/Button";
import styles from "../../styles/NewProductConfirmation.module.css";

const NewProductConfirmation: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1>Product created 🥳</h1>
          <p>Your new product has been created successfully.</p>
          <p>You can now use it in a task.</p>
          <br />
          <Button
            title={"Take me back"}
            color={"black"}
            handleClick={() => Router.push("/products")}
          />
        </div>
      </div>
    </>
  );
};

export default NewProductConfirmation;
