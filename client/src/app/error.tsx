"use client";

// import Button from "@/components/UI/Button/Button";

// import styles from "@/styles/pages/notFound.module.sass";

const Error = () => {
  return (
    <div
    // className={styles.container}
    >
      <h1>Схоже сталася помилка :(</h1>

      {/* <Button className="dark" onClick={() => window.location.reload()}>
        Перезавантажити сторінку
      </Button> */}
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Перезавантажити сторінку
      </button>
    </div>
  );
};

export default Error;
