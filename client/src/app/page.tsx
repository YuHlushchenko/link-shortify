import Button from "@/shared/UI/Button/Button";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Home</h1>

      <p>Welcome to the Home page</p>

      <Button className="disabled">btn</Button>
    </div>
  );
}
