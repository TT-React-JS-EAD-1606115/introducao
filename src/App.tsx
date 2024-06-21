import { useState } from "react";
import { Title } from "./components/Title";
import "./App.css";
import { Button } from "./components/Button";
import { Section } from "./components/Section";
import { ExFragment } from "./components/Fragment";

const courses = [
  {
    course: "React JS",
    description: "Curso de React",
    instructor: "Luciel",
  },
];

function App() {
  const [like, setLike] = useState<boolean>(false);

  console.log("🚀 ~ App ~ like:", like);

  const handleClickChangeState = () => {
    console.log("Clicou no botão");

    setLike(!like);
  };

  const handleClickButton = () => {
    console.log("Clicou no botão");
  };

  const handleClickHome = () => {
    alert("Redirecionando para Home");
  };

  return (
    <div>
      <Title course="React JS" />

      <Title course="TS e OO" blue />

      <Title course="JS e CSS Pro" />

      <Section title="Eventos">
        <div className="button-container">
          <Button onClick={handleClickHome}>Home</Button>

          <Button>Novo filme</Button>

          <Button secondary>Ver detalhes</Button>
        </div>

        {/* HTML NORMAL */}
        <button onClick={handleClickButton}>Botão HTML</button>
      </Section>

      <Section title="Hook - useState">
        <Button onClick={handleClickChangeState}>Alterar estado</Button>

        <h1>Valor do state like: {`${like}`}</h1>
      </Section>

      <Section title="Fragment">
        <ExFragment />
      </Section>

      <Section title="Condicionais - ? :">
        <h2>
          O Luciel {like ? "Está gostando" : "Não está gostando"} do curso de
          React JS
        </h2>
      </Section>

      <Section title="Condicionais - &&">
        {like && <Section title="Conteúdo da condicional">Conteúdo</Section>}
      </Section>

      <Section title="Lista">
        <ul>
          {courses.map((course) => {
            return <li>{course.instructor}</li>;
          })}
        </ul>
      </Section>
    </div>
  );
}

export default App;
