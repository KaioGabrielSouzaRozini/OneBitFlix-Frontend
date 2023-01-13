import Head from "next/head";
import CardSection from "../src/components/homeNoAtuth/cardsSection";
import HeaderNoAuth from "../src/components/homeNoAtuth/headerNoAuth";
import PresentationSection from "../src/components/homeNoAtuth/presentationSection";
import styles from "../styles/HomeNoAuth.module.scss";

const HomeNoAuth = () => {
  return (
    <>
      <Head>
        <title>Onebitflix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:tittle" content="Onebitflix" key="tittle" />
        <meta
          name="description"
          content="Tenha acesso aos melhores conteúdos de programação de uma forma simples e fácil!"
        />
      </Head>
      <main>
        <div className={styles.sectionBackground}>
          <HeaderNoAuth />
          <PresentationSection />
        </div>
        <CardSection />
      </main>
    </>
  );
};

export default HomeNoAuth;
