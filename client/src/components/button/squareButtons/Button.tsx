import "./Button.scss";
interface btnTypes {
   text: string;
}
const Button: React.FC<btnTypes> = ({ text }) => {
   return <button className="square-button">{text}</button>;
};

export default Button;
