import { Hero, Proud, Testimonial } from "../sections/home";
import { Footer, Navbar } from "../components";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <Navbar />
      <Proud />
      <Testimonial/>
      <Footer />
    </div>
  );
}
