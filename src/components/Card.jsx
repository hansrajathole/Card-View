import React, { useState } from "react";
import View from "./View";
import CardItem from "./CardItem";
import { IoEar } from "react-icons/io5";

const Card = () => {
  const data = [
    {
      Name: "Canon 200d mark",
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription: "A high-quality DSLR camera perfect for photography enthusiasts.",
      price: 3.5,
      Available: false,
      card: true,
      quantity: 1,
    },
    {
      Name: "Polaroid Land",
      image:
        "https://images.unsplash.com/photo-1542123720-dce4d1663d89?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription: "Capture instant memories with this retro-style Polaroid camera.",
      price: 10.4,
      Available: false,
      card: true,
      quantity: 1,
    },
    {
      Name: "BoAt Headset",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription: "Experience superior sound quality with these stylish headphones.",
      price: 14.3,
      Available: false,
      card: false,
      quantity: 1,
    },
    {
      Name: "Noice Smart Watch",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription: "Stay connected and track your fitness with this smart watch.",
      price: 2.5,
      Available: false,
      card: true,
      quantity: 1,
    },
    {
      Name: "Apple pad",
      image:
        "https://images.unsplash.com/photo-1525101238777-8878781fc06d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription: "A sleek and powerful tablet for work and entertainment.",
      price: 8.4,
      Available: false,
      card: false,
      quantity: 1,
    },
    {
      Name: "Smart Watch",
      image:
        "https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription: "Upgrade your lifestyle with this cutting-edge smart watch.",
      price: 73.5,
      Available: false,
      card: false,
      quantity: 1,
    },
    {
      Name: "Air Pods",
      image:
        "https://images.unsplash.com/photo-1565536421961-1f165e0c981e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription: "Enjoy wireless freedom and immersive sound quality.",
      price: 56.5,
      Available: false,
      card: true,
      quantity: 1,
    },
    {
      Name: "Adidas Shoes",
      image:
        "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription: "Comfort and style combined in these trendy Adidas shoes.",
      price: 23.8,
      Available: false,
      card: false,
      quantity: 1,
    },
    {
      Name: "Adidas Shoes",
      image:
        "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription: "Comfort and style combined in these trendy Adidas shoes.",
      price: 23.8,
      Available: false,
      card: false,
      quantity: 1,
    },
  ];
  

  const [realData, setrealData] = useState(data);
  const [cardData, setcardData] = useState([]);

  const HandleClick = (elem, indx) => {
    setrealData((prev) => {
      return prev.map((value, number) => {
        if (number === indx) return { ...value, Available: !value.Available };
        return value;
      });
    });

    setcardData((prev) => {
      if (elem.Available) {
        return prev.filter((item) => item.Name !== elem.Name);
      } else {
        return [...prev, { ...elem, Available: true }];
      }
    });
  };

  const handleRemoveFromCart = (name) => {
    setcardData((prev) => prev.filter((item) => item.Name !== name));

    setrealData((prev) =>
      prev.map((item) =>
        item.Name === name ? { ...item, Available: false } : item
      )
    );
  };

  const totalPrice = cardData.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <View realData={realData} />
      <div className="flex p-4">
        <div className=" h-full w-[70%] flex items-center justify-around gap-2 flex-wrap ">
          {realData.map((elem, indx) => (
            <div
              key={indx}
              className="h-[400px] w-[300px] bg-slate-200 rounded-md p-2 overflow-hidden"
            >
              <div className="h-[50%] w-full bg-yellow-300 rounded-md overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={elem.image}
                  alt=""
                />
              </div>
              <div className=" w-full mt-2 p-2">
                <h1 className="text-2xl font-semibold">{elem.Name}</h1>
                <p className="mt-2">{elem.discription}</p>
                <div className="flex justify-between items-center mt-2 ">
                  <h1 className="font-semibold text-xl">${elem.price}</h1>
                </div>
                <button
                  onClick={() => HandleClick(elem, indx)}
                  className={`w-full py-1 ${
                    elem.Available
                      ? "bg-teal-500 hover:bg-teal-600 ease-linear duration-150"
                      : "bg-green-400 hover:bg-green-600 ease-linear duration-150"
                  } mt-2 rounded font-semibold text-lg active:scale-95`}
                >
                  {elem.Available === false ? "Add to Card" : "Added"}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="min-h-screen w-[30%] bg-slate-200 rounded-md overflow-hidden p-4 flex flex-col gap-3">
          <div>
            <h1 className="text-2xl font-semibold">You Card</h1>
          </div>
          {cardData.map((card, inds) => (
            <div className="w-full h-20 bg-white rounded-lg flex" key={inds}>
              <div className="h-full w-[80%] p-2 rounded-md overflow-hidden flex gap-2">
                <img
                  className="h-full w-[100px] rounded-md"
                  src={card.image}
                  alt=""
                />
                <div>
                  <h1 className="font-semibold text-lg">{card.Name}</h1>
                  <h1 className="font-semibold text-xl">${card.price}</h1>
                </div>
              </div>
              <div className="w-[20%] flex flex-col gap-3 justify-center items-center">
                <button
                  onClick={() => handleRemoveFromCart(card.Name)}
                  className="bg-red-500 text-white rounded-md font-bold px-2 py-1"
                >
                  Remove
                </button>
                <div className="flex gap-3 text-center items-center justify-center">
                  <button className="bg-red-400 rounded-full h-5 w-5">-</button>
                  <p>1</p>
                  <button className="bg-green-400 rounded-full h-5 w-5">
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold ">Total price : $ {totalPrice.toFixed(2)} </h1>
            <button className="bg-blue-500 px-2 py-1 font-semibold rounded">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
