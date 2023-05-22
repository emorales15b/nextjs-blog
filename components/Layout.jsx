import Head from "next/head";
import styles from "../src/styles/Layout.module.css";
import Image from "next/image";
import Link from "next/link";
import utilStyles from "../src/styles/utils.module.css";

const name = "bluuewb";



export default function Layout({ children, title, description, home }) {
  console.log(home);
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/1.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/1.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}22222222
              </Link>
            </h2>
          </>
        )}
      </header>

     <nav>
        <Link href="/">
            Inicio
        </Link>
        <Link href="/blog">
            Blog
        </Link>
        <Link href="/contact">
            Contact
        </Link>
        <Link href="/about">
            About
        </Link>
     </nav>

      <main>{children}</main>

     {!home && (
        <div className={styles.backToHome}>
            <Link href="/">
                Back to home
            </Link>
        </div>
     )
     }
    </div>
  );
}


Layout.defaultProps = {
  title: "Next.js1",
  description: "Next.js is awesome",
};
