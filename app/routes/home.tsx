import FoodTrucksGrid from "~/components/FoodTrucksGrid";
import type { Route } from "./+types/home";
import { useEffect, useState } from "react";
import mobileFoodPermits from '~/data/mobile_food_facility_permits.csv?raw'
import type { FoodFacility, FoodFacilityList } from "~/types/dataTypes";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Food Truck Finder" },
    { name: "description", content: "Satisfy your cravings with a food truck nearby!" },
  ];
}

export default function Home() {
  const [facilitiesData, setFacilitiesData] = useState<FoodFacilityList>([]);

  const readInFacilitiesData = () => {
    let data = mobileFoodPermits.split('\n')
    data.shift(); // Remove header row
    let arrangedData: FoodFacilityList = []
    data.forEach(item => {
      let foodFacilityData = item.split(',')
      let newFoodFacility: FoodFacility = {
        locationId: foodFacilityData[0],
        applicant: foodFacilityData[1],
        facilityType: foodFacilityData[2],
        cnn: foodFacilityData[3],
        locationDescription: foodFacilityData[4],
        address: foodFacilityData[5],
        blockLot: foodFacilityData[6],
        block: foodFacilityData[7],
        lot: foodFacilityData[8],
        permit: foodFacilityData[9],
        status: foodFacilityData[10],
        foodItems: foodFacilityData[11],
        x: foodFacilityData[12],
        y: foodFacilityData[13],
        latitude: foodFacilityData[14],
        longitude: foodFacilityData[15],
        schedule: foodFacilityData[16],
        daysHours: foodFacilityData[17],
        noiSent: foodFacilityData[18],
        approved: foodFacilityData[19],
        received: foodFacilityData[20],
        priorPermit: foodFacilityData[21],
        expirationDate: foodFacilityData[22],
        location: foodFacilityData[23],
        firePreventionDistricts: foodFacilityData[24],
        policeDistricts: foodFacilityData[25],
        supervisorDistricts: foodFacilityData[26],
        zipCodes: foodFacilityData[27],
        oldNeighborhoods: foodFacilityData[28]
      }
      arrangedData.push(newFoodFacility)
    })
    setFacilitiesData([...facilitiesData, ...arrangedData]);
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
      <FoodTrucksGrid facilitiesData={facilitiesData} />
    </div>
  );
}
