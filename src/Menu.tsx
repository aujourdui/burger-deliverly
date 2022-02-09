import { useState, useEffect, FC } from "react";
import axios from "axios";
import { useSelector } from "./redux/store";
import { useDispatch } from "react-redux";
import { additional } from "./redux/counterSlice";

const Menu: FC = () => {
  const [menus, setMenus] = useState([]);
  const count = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://jsonblob.com/api/940706479976235008").then((res) => {
      setMenus(res.data);
    });
  }, []);

  // const addItem = (id) => {
  //   window.confirm("Are you sure to add this item to cart?");
  //   setItem((prevState) => {
  //     return { ...prevState, id };
  //   });
  //   console.log(item);
  // };

  const addItem = () => {
    window.confirm("Are you sure to add this item to cart?");
    dispatch(additional(1));
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="text-3xl font-bold underline ml-8 h-12">
          <h1>Our menu</h1>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-3 grid-rows-3">
        {menus.map((menu) => (
          <div
            key={menu.id}
            className="ml-8 mr-8 mt-8 hover:opacity-90 hover:cursor-pointer"
            onClick={() => addItem()}
          >
            <img src={menu.image} alt="menu" />
            <p className="text-2xl">{menu.title}</p>
            <p>price: {menu.price}</p>
            <p>{menu.description}</p>
            <p>{count}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
