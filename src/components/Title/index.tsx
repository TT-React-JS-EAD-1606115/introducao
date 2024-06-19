import "./styles.css";

interface TitleProps {
  course: string;
  blue?: boolean;
}

// Desctructuring
export const Title = ({ course, blue }: TitleProps) => {
  return (
    <h1 className={blue ? "title-blue" : ""}>
      Bem vindos ao módulo de {course}!!
    </h1>
  );
};

// export function Title2() {
//   return <h1>Title 2</h1>;
// }

// export const Title3 = () => {
//   return <h1>Title 3</h1>;
// };

// Export Default
// export default Title;

// Named export
// export { Title };
