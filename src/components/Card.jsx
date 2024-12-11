import React from "react";

const Card = () => {
  const data = [
    {
      Name: "Canon 200d mark",
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, vero.",
      price : 3.5  
    },
    {
      Name: "Polaroid Land",
      image:
        "https://images.unsplash.com/photo-1542123720-dce4d1663d89?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, vero.",
        price : 10.4 
    },
    {
      Name: "BoAt Headset",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, vero.",
        price : 14.3 
    },
    {
      Name: "Noice Smart Watch",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, vero.",
        price : 2.5 
    },
    {
      Name: "Apple pad",
      image:
        "https://images.unsplash.com/photo-1525101238777-8878781fc06d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, vero.",
        price : 8.4
    },
    {
      Name: "Smart Watch ",
      image:
        "https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, vero.",
        price : 73.5 
    },
    {
      Name: "Air Pots",
      image:
        "https://images.unsplash.com/photo-1565536421961-1f165e0c981e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, vero.",
        price : 56.5 
    },
    {
      Name: "Adidas ",
      image:
        "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, vero.",
        price : 23.8 
    },
  ];

  return (
    <div className=" h-full w-full flex items-center justify-center gap-4 flex-wrap p-5">
      {data.map((elem,indx)=>(
      <div className="h-[400px] w-[300px] bg-slate-200 rounded-md p-2 overflow-hidden">
        <div className="h-[50%] w-full bg-yellow-300 rounded-md overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={elem.image}
            alt=""
          />
        </div>
        <div className="h-[48%] w-full mt-2 p-3">
          <h1 className="text-2xl font-semibold">{elem.Name}</h1>
          <p className="mt-2">
            {elem.discription}
          </p>
          <h1 className="mt-4 font-semibold text-xl">${elem.price}</h1>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Card;
