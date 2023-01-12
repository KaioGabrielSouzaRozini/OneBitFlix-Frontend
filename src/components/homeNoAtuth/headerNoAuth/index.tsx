import Link from "next/link";
import { Container, Button } from "reactstrap";
import styles from "./styles.module.scss";

const HeaderNoAuth = function () {
  return (
    <>
      <>
        <div className={styles.ctaSection}>
          <img
            src="/homeNoAuth/logoCta.png"
            alt="logoCta"
            className={styles.imgCta}
          />
          <p>Se cadastre para ter acesso aos cursos</p>
          <img
            src="/homeNoAuth/logoCta.png"
            alt="logoCta"
            className={styles.imgCta}
          />
        </div>
        <Container className={styles.nav}>
          <img
            src="/logoOnebitflix.svg"
            alt="logoOnebitflix"
            className={styles.imgLogoNav}
          />
          <div>
            <Link href="/login">
              <Button className={styles.navBtn}>Entrar</Button>
            </Link>
            <Link href="/register">
              <Button className={styles.navBtn}>Quero fazer parte</Button>
            </Link>
          </div>
        </Container>
      </>
    </>
  );
};

export default HeaderNoAuth;
