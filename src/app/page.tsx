import { Button } from "../../components/button/Button";
import { Hteg } from "../../components/hteg/Hteg";
import "../../styles/main.css";
import { P } from "../../components/paragraph/P";
import { Tag } from "../../components/tag/Tag";
import { RaitingComponent } from "../../components/rating/Raiting";
export default function Home(): JSX.Element {
  return (
    <article>
      <Tag size="s" color="default">
        Photoshop
      </Tag>
      <Tag size="m" color="grey">
        10
      </Tag>
      <Tag size="m" color="red">
        hh.ru
      </Tag>
      <Tag size="s" color="primary">
        Подготовка макетов
      </Tag>
      <Tag size="s" color="green">
        10000
      </Tag>
      <Hteg teg="h1">Курсы по фотошоп</Hteg>
      <Button appearence="primary" arrow="none">
        Узнать подробнее
      </Button>
      <Button appearence="secondary" arrow="right">
        Читать отзывы
      </Button>

      <P>
        Студенты освоят не только hard skills, необходимые для работы
        веб-дизайнером, но и soft skills — навыки, которые позволят эффективно
        взаимодействовать в команде с менеджерами, разработчиками и
        маркетологами. Выпускники факультета могут успешно конкурировать с
        веб-дизайнерами уровня middle.
      </P>
      <P fontHeight="14px">
        Напишу сразу в двух курсах, так как проходил оба. Java будет многим
        непросвещённым сложновата в изучении, но здесь перевес из-за лидирующего
        положения языка как самого популярного в программировании. Выбор мой пал
        на эту профессию еще и потому, что Java-разработчики получают самую
        большую зарплату. Хотя Python начинает догонять Java по многим моментам,
        но вот в крупном екоме разработке Джава все-таки остается главенствующей
        сейчас. Скажу так – полнота программы и интенсивность присуща обоим
        курсам GeekBrains. Хочу отметить, что с первого дня занятий вы
        приступаете к практике и получаете опыт коммерческой разработки уже в
        свое резюме. Скажу вам как прошедший это – реально помогло в
        трудоустройстве!
      </P>
      <P fontHeight="18px">
        {" "}
        Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и
        ими можно успешно пользоваться дома или в дороге. Современные ноутбуки
        хорошо справляются с нагрузкой, так зачем загонять специалиста в душный
        офис. В этой профессии важным считается вдохновение, поэтому дизайнеры
        ищут его в разных местах.
      </P>
      <RaitingComponent rating={1} isEditable={false} />
    </article>
  );
}