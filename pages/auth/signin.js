import {
  getProviders,
  signIn,
  getSession,
  getCsrfToken,
} from "next-auth/react";
import styles from "../../styles/Signin.module.css";
import Image from "next/image";
import LogoSvg from "../../assets/creatorsclubicon.svg";

function signin(props) {
  return (
    <>
      <div className={styles.grid}>
        <div className={styles.column_left}>
          <div className={styles.logo}>
            <LogoSvg />
          </div>
          <form
            method="post"
            action="/api/auth/signin/email"
            className={styles.form}
          >
            <input
              name="csrfToken"
              type="hidden"
              defaultValue={props.csrfToken}
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className={styles.input}
            />
            <button type="submit" className={styles.button}>
              Sign in with a magic link
            </button>
            <p className={styles.small_label}>
              New to Creators Club?{" "}
              <a
                href="mailto:hello@creatorsclub.world"
                className={styles.contact}
              >
                Contact us
              </a>
              .<br></br>
            </p>
          </form>
        </div>
        <div className={styles.column_right}>
          <Image
            src={"/cc_signin_image.jpg"}
            layout="fill"
            objectFit="cover"
            alt="Profile pic"
          />
        </div>
      </div>
      <div>
        {Object.values(props.providers).map((provider) => {
          if (provider.name === "Email") {
            return;
          }
          return (
            <div key={provider.name}>
              <button onClick={() => signIn(provider.id)}>
                Sign in with {provider.name}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });
  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);
  // http://localhost:3000/signin

  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }

  return {
    props: {
      providers: providers,
      csrfToken: csrfToken,
    },
  };
}

export default signin;
