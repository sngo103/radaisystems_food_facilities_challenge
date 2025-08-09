import FoodTrucksGrid from "~/components/FoodTrucksGrid";
import type { Route } from "./+types/home";
import { useEffect, useState } from "react";
import mobileFoodPermits from '~/data/mobile_food_facility_permits.csv?raw'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Food Truck Finder" },
    { name: "description", content: "Satisfy your cravings with a food truck nearby!" },
  ];
}

export default function Home() {
  const [facilitiesData, setFacilitiesData] = useState([]);

  const readInFacilitiesData = () => {
    let data = mobileFoodPermits.split('\n')
    data.forEach(item => console.log("ITEM:", item))
  }

  useEffect(() => {
    readInFacilitiesData()
  }, [])

  return (
    <div>
      <div className="container mx-auto px-4 mt-8">
        <p className="font-sans text-6xl text-center">
        {'Food Truck Finder'}
        </p>
      </div>
      <FoodTrucksGrid />
    </div>
  );
}
