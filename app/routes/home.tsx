import FoodTrucksGrid from "~/components/FoodTrucksGrid";
import type { Route } from "./+types/home";
import { useEffect, useState } from "react";
import mobileFoodPermits from '~/data/mobile_food_facility_permits.csv?raw'
import { PermitStatus, type FoodFacility, type FoodFacilityList } from "~/types/dataTypes";
import Fuse from 'fuse.js'
import { buildFoodFacility } from "~/utils/dataUtils";
import FoodTrucksSearch from "~/components/FoodTrucksSearch";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Food Truck Finder" },
    { name: "description", content: "Satisfy your cravings with a food truck nearby!" },
  ];
}

export default function Home() {
  const [facilitiesData, setFacilitiesData] = useState<FoodFacilityList>([]);
  const [searchResults, setSearchResults] = useState<FoodFacilityList>([]);
  const [noSearchResults, setNoSearchResults] = useState(false);

  const readInFacilitiesData = () => {
    let data = mobileFoodPermits.split('\n')
    const headers = data[0].split(',')
    data.shift(); // Remove header row
    let arrangedData: FoodFacilityList = []
    for(const item of data) {
      let foodFacilityData = item.split(',')
      if(foodFacilityData.length > headers.length + 2){
        continue; // Skip rows that do not match the expected number of columns
      }
      try {
        let newFoodFacility = buildFoodFacility(foodFacilityData);
        arrangedData.push(newFoodFacility);
      } catch (error) {
        // console.error("Error parsing food facility data:", error);
        continue;
      }
    }
    setFacilitiesData([...facilitiesData, ...arrangedData]);
  }

  const handleFuzzySearch = (query: string, keys: string[], status: PermitStatus) => {
    let filteredData = facilitiesData;
    if(status != PermitStatus.ALL){
      filteredData = facilitiesData.filter(facility => facility.status === status);
    }

    const fuse = new Fuse(filteredData, {
      keys: keys,
      includeScore: true,
    });
    const results = fuse.search(query);
    // console.log("Search results:", results);
    if (results.length === 0) {
      setNoSearchResults(true);
    } else {
      setNoSearchResults(false);
      setSearchResults(results.map((result) => result.item));
    }
  };

  useEffect(() => {
    readInFacilitiesData() 
  }, [])

  return (
    <div>
      <div className="container mx-auto px-4 mt-8">
        <p className="font-sans text-6xl">
        {'Food Truck Finder'}
        </p>
      </div>
      <FoodTrucksSearch handleSearch={handleFuzzySearch} />
      <div className="container mx-auto px-4 mt-8">
        <p className="font-sans text-xl">
          {noSearchResults ? "No results found. Please try a different search." : ""}
        </p>
      </div>
      <FoodTrucksGrid facilitiesData={searchResults.length > 0 ? searchResults : facilitiesData} />
    </div>
  );
}
