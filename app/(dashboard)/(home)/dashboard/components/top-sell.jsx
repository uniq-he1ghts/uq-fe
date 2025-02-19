"use client";
import img1 from "@/public/images/home/20Gram.png";
import img2 from "@/public/images/home/20Gram.png";
import img3 from "@/public/images/home/70Gram.png";
import img4 from "@/public/images/home/150Gram.png";
import Image from "next/image";
const data = [
  {
    id: 1,
    name: "PARENT QASILPOWDER QP",
    price: "369.36",
    totalsales: "936",
    image: img1,
  },
  {
    id: 2,
    name: "Qasil Powder 150g",
    price: "369.36",
    totalsales: "936",
    image: img2,
  },
  {
    id: 3,
    name: "Qasil Powder 70g",
    price: "369.36",
    totalsales: "936",
    image: img3,
  },
  {
    id: 4,
    name: "Qasil Powder 20g",
    price: "369.36",
    totalsales: "936",
    image: img4,
  },
  {
    id: 4,
    name: "Qasil Moisturizer 50g",
    price: "369.36",
    totalsales: "936",
    image: img4,
  },
];
const TopSell = () => {
  return (
    <>
      {data.map((item, index) => (
        <li
          className="flex justify-between items-center gap-2 border-b border-default-300 py-3 px-6 hover:bg-default-50"
          key={`top-sell-${index}`}
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-md">
              <Image
                src={item.image}
                alt=""
                className="h-full w-full object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-default-700">
                {" "}
                {item.name}
              </span>
              <span className="text-xs font-medium text-default-600">
                ${item.price}
              </span>
            </div>
          </div>
          <span className="text-xs text-default-600">
            {item.totalsales} sales
          </span>
        </li>
      ))}
    </>
  );
};

export default TopSell;
