import { Button } from "../../components/button/Button";
import { Hteg } from "../../components/hteg/Hteg";
import "../../styles/main.css";

export default function Home(): JSX.Element {
  return (
    <article>
      <Hteg teg="h1">Курсы по фотошоп</Hteg>
      <Button appearence="primary" arrow="none">
        Узнать подробнее
      </Button>
      <Button appearence="secondary" arrow="right">
        Читать отзывы
      </Button>
    </article>
  );
}
