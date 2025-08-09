import type { FoodFacilityList } from "~/types/dataTypes";
import FoodTrucksGridRow from "./FoodTrucksGridRow";

export type FoodTrucksGridProps = {
  facilitiesData: FoodFacilityList;
};

export default function FoodTrucksGrid({ facilitiesData }: FoodTrucksGridProps) {
  return (
      <div className="container mx-auto px-4 mt-8">
      <table className="table-auto border">
        <thead className="ltr:text-left rtl:text-right">
          <tr className="*:font-medium *:text-gray-900 dark:*:text-white">
            <th className="px-3 py-2 whitespace-nowrap">LocationId</th>
            <th className="px-3 py-2 whitespace-nowrap">Applicant</th>
            <th className="px-3 py-2 whitespace-nowrap">FacilityType</th>
            <th className="px-3 py-2 whitespace-nowrap">Status</th>
            <th className="px-3 py-2 whitespace-nowrap">FoodItems</th>
            <th className="px-3 py-2 whitespace-nowrap">Address</th>
            <th className="px-3 py-2 whitespace-nowrap">BlockLot</th>
            <th className="px-3 py-2 whitespace-nowrap">Block</th>
            <th className="px-3 py-2 whitespace-nowrap">Lot</th>
              <th className="px-3 py-2 whitespace-nowrap">CNN</th>
              <th className="px-3 py-2 whitespace-nowrap">LocationDescription</th>
              <th className="px-3 py-2 whitespace-nowrap">Latitude</th>
              <th className="px-3 py-2 whitespace-nowrap">Longitude</th>
              <th className="px-3 py-2 whitespace-nowrap">X</th>
              <th className="px-3 py-2 whitespace-nowrap">Y</th>
              <th className="px-3 py-2 whitespace-nowrap">Permit</th>
              <th className="px-3 py-2 whitespace-nowrap">Schedule</th>
              <th className="px-3 py-2 whitespace-nowrap">DaysHours</th>
              <th className="px-3 py-2 whitespace-nowrap">NoiSent</th>
              <th className="px-3 py-2 whitespace-nowrap">Approved</th>
              <th className="px-3 py-2 whitespace-nowrap">Received</th>
              <th className="px-3 py-2 whitespace-nowrap">PriorPermit</th>
              <th className="px-3 py-2 whitespace-nowrap">ExpirationDate</th>
              <th className="px-3 py-2 whitespace-nowrap">Location</th>
              <th className="px-3 py-2 whitespace-nowrap">FirePreventionDistricts</th>
              <th className="px-3 py-2 whitespace-nowrap">PoliceDistricts</th>
              <th className="px-3 py-2 whitespace-nowrap">SupervisorDistricts</th>
              <th className="px-3 py-2 whitespace-nowrap">ZipCodes</th>
              <th className="px-3 py-2 whitespace-nowrap">OldNeighborhoods</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {facilitiesData.map((facility) => (
            <FoodTrucksGridRow key={facility.locationId} facility={facility} />
          ))}
        </tbody>
  </table>
</div>
        );
}
