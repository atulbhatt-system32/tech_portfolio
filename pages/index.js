import { Footer, Navbar } from "../components";
import { Hero } from "../sections/home";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Navbar /> */}
      {/* <h1>Home</h1> */}
      {/* <Hero /> */}
      {/* <Footer /> */}
      <Hero />
    </div>
  );
}
