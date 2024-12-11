import React from "react";
import View from "./View";

const Card = () => {
  const data = [
    {
      Name: "Canon 200d mark",
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, vero.",
      price : 3.5,
      Available : true  

    },
    {
      Name: "Polaroid Land",
      image:
        "https://images.unsplash.com/photo-1542123720-dce4d1663d89?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, vero.",
        price : 10.4,
        Available : true 
    },
    {
      Name: "BoAt Headset",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, vero.",
        price : 14.3,
        Available : false 
    },
    {
      Name: "Noice Smart Watch",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, vero.",
        price : 2.5,
        Available : true 
    },
    {
      Name: "Apple pad",
      image:
        "https://images.unsplash.com/photo-1525101238777-8878781fc06d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, vero.",
        price : 8.4,
        Available : false
    },
    {
      Name: "Smart Watch ",
      image:
        "https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, vero.",
        price : 73.5, 
        Available : false
    },
    {
      Name: "Air Pots",
      image:
        "https://images.unsplash.com/photo-1565536421961-1f165e0c981e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, vero.",
        price : 56.5, 
        Available : true
    },
    {
      Name: "Adidas ",
      image:
        "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, vero.",
        price : 23.8, 
        Available : false
    },
  ];

  const view =  function(){
    // const [Buy, setBuy] = useState(Done)

    alert("ho rha hai ")
  } 

  return (
    <div className=" h-full w-full flex items-center justify-center gap-4 flex-wrap p-5">
      {data.map((elem,indx)=>(
      <div className="h-[450px] w-[300px] bg-slate-200 rounded-md p-2 overflow-hidden">
        <div className="h-[50%] w-full bg-yellow-300 rounded-md overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={elem.image}
            alt=""
          />
        </div>
        <div className="h-[48%] w-full mt-2 p-2">
          <h1 className="text-2xl font-semibold">{elem.Name}</h1>
          <p className="mt-2">
            {elem.discription}
          </p>
          <div className="flex justify-between items-center mt-2 ">
            <h1 className="font-semibold text-xl">${elem.price}</h1>
            <h1 className={`px-3 py-1.5  font-semibold rounded ${elem.Available?'bg-blue-400 cursor-pointer':'bg-red-400 font-medium opacity-80 pointer-events-none'}`}>{elem.Available?'Available': 'Currently Unavailable'}</h1>
          </div>
          <button onClick={view} className="w-full py-1 bg-green-400 mt-2 rounded font-semibold text-lg hover:bg-green-600 ease-linear duration-150">{elem.Available?'Buy':'Request'}</button>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Card;
