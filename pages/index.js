import { Footer, Navbar, Proud } from "../components";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
     <Proud/>
      <Footer />
    </div>
  );
}
