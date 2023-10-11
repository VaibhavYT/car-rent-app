import React from "react";
import Image from "next/image";
import Car from "../public/car.jpg";
import carsData from '../lib/model/car_details.js'; 

const CarCard = ({ carDetails }) => {
  const {car_name, car_year, car_seat, car_fuel, car_speed, car_drive_mode,car_price } = carDetails;

  return (
    <div className="flex-col bg-gray-200 m-3 p-0 w-fit" id="whole div">
      <Image src={Car} alt="Image" width={300} height={200} className="px-4 pt-4 rounded-30" />
      <div id="card heading div" className="mx-4 my-3 flex justify-between">
        <span>{car_name}</span>
        <span className="border border-dashed border-blue-600 rounded-lg pl-1 pr-1">{car_year}</span>
      </div>
      <div id="car detail div" className="mx-4 my-2 flex-col justify-between">
        <div id="car detail 1" className="flex justify-between my-1.5">
          <p>{car_seat}</p>
          <p>{car_fuel}</p>
        </div>
        <div id="car detail 2" className="flex justify-between">
          <p>{car_speed}</p>
          <p>{car_drive_mode}</p>
        </div>
      </div>
      <hr className="border border-black ml-3 mr-3 opacity-50" />
      <div className="mx-4 my-3 flex justify-between">
        <p className="align-bottom py-1.5">{car_price}</p>
        <div>
          <a href="#" className="mr-2">
            fav
          </a>
          <button className="bg-blue-400 text-white rounded-xl py-1.5 px-2.5 font-semibold">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
