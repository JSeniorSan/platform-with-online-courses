import "../../styles/main.scss";

export default function Home() {
  return (
    <article
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "30px",
        fontWeight: "bold",
        color: "var( --background--primary)",
      }}
    >
      Начни прокачку с нами!
    </article>
  );
}
