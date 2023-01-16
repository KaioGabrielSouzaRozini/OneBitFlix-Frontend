import { GetStaticProps } from "next";
import Head from "next/head";
import { ReactNode } from "react";
import CardSection from "../src/components/homeNoAtuth/cardsSection";
import HeaderNoAuth from "../src/components/homeNoAtuth/headerNoAuth";
import PresentationSection from "../src/components/homeNoAtuth/presentationSection";
import SlideSection from "../src/components/homeNoAtuth/slideSection";
import courseService, { CourseType } from "../src/services/courseService";
import styles from "../styles/HomeNoAuth.module.scss";

interface IndexPageProps {
  children?: ReactNode;
  course: CourseType[];
}

const HomeNoAuth = ({ course }: IndexPageProps) => {
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
        <SlideSection newestCourses={course} />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await courseService.getNewestCourses();
  return {
    props: {
      course: res.data,
    },
    revalidate: 3600 * 24,
  };
};

export default HomeNoAuth;
