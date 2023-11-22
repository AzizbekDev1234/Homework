import { useState } from "react";
const Lesson1 = () => {
  // console.log(data);
  // const [count, setCount] = useState(0);
  // const [active, setActive] = useState(false);
  // const toggleClick = () => {
  //   setActive(!active);
  //   console.log("clicked");
  // };
  // // !increment
  // const increment = () => {
  //   setCount(count + 1);
  // };
  // // !dicrement
  // const dicrement = () => {
  //   setCount(count - 1);
  // };

  const [toggle, setToggle] = useState(false);

  const toogleClicked = () => {
    setToggle(!toggle);
    // console.log("dka");
  };

  const [modal, setModal] = useState(false);

  const modalClicked = () => {
    setModal(!modal);
    console.log("dddd");
  };

  return (
    <div>
      {/* //   <h1>Hello{count}</h1>

    //   <button onClick={increment}>+</button>
    //   <button onClick={dicrement}>-</button>

    //   <p className={active ? "text_color" : ""}> Azizbek Abduhakimov </p>

    //   <button onClick={toggleClick}>Changes Color</button>

    //   <ul className={add ? "respone_list" : ""}>
    //     <li>Home </li>
    //     <li>About </li>
    //     <li>Servervise </li>
    //     <li> Call me </li>
    //   </ul>
    //   <button className="btn" onClick={toogleClicked}>
    //     Click
    //   </button> */}
      <div className="modal modal1">
        <div className="logo">
          <h1>Modal</h1>
        </div>
        <div className="modal_list">
          <button className="btnEl" onClick={toogleClicked}>
            |||
          </button>
          <ul className={toggle ? "" : "list"}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Servise</a>
            </li>
            <li>
              <a href="#">Register</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="modal_wrapper  userModal ">
        <div className="window_modal">
          <button className="btnModal" onClick={modalClicked}>
            Modal
          </button>
        </div>
        <div className={modal ? "classModal" : "modal_card"}>
          <h2>Bu madal oyna</h2>
          <button onClick={modalClicked}>Exit</button>
        </div>
      </div>
    </div>
  );
};

export default Lesson1;
//  ! buni app jsga chaqirish kerak
// ? Hamma narsa srcda bo'ladi app.jsga chaqirilib qoyiladi !!!
