import IGreet from "./Greet.interface";

const Greet = (props: IGreet) => {
  return (
    <div>
      <h1>Hello {props.name ? props.name : "World"}</h1>
    </div>
  );
};

export default Greet;
