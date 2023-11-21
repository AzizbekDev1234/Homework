import { useState } from "react";
const Lesson1 = (data) => {
  console.log(data);
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);
  const toggleClick = () => {
    setActive(!active);
    console.log("clicked");
  };
  // !increment
  const increment = () => {
    setCount(count + 1);
  };
  // !dicrement
  const dicrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Hello{count}</h1>

      <button onClick={increment}>+</button>
      <button onClick={dicrement}>-</button>

      <p className={active ? "text_color" : ""}> Azizbek Abduhakimov </p>

      <button onClick={toggleClick}>Changes Color</button>
    </div>
  );
};

export default Lesson1;
//  ! buni app jsga chaqirish kerak
// ? Hamma narsa srcda bo'ladi app.jsga chaqirilib qoyiladi !!!
