import React from "react";
import CarCard from "@/components/CarCard";
import carData from "../lib/model/car_details"; // Import carData from the correct path

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  pl-52 pb-52 pr-52 pt-24">
      
      <div className="flex flex-wrap justify-center ">
        {carData.map((car, index) => (
          <CarCard key={index} carDetails={car} />
        ))}
      </div>
    </main>
  );
}
