import type { FoodFacilityList } from "~/types/dataTypes";
import FoodTrucksGridRow from "./FoodTrucksGridRow";

export type FoodTrucksGridProps = {
  facilitiesData: FoodFacilityList;
};

export default function FoodTrucksGrid({ facilitiesData }: FoodTrucksGridProps) {
  return (
      <div className="container mx-auto px-4 mt-8">
      <table className="table-auto border">
        <thead className="ltr:text-left rtl:text-right sticky top-0 bg-opacity-100 bg-yellow-200">
          <tr className="*:font-medium *:text-gray-900 dark:*:text-white">
            <th className="px-3 py-2 whitespace-nowrap">Location ID</th>
            <th className="px-3 py-2 whitespace-nowrap">Applicant</th>
            <th className="px-3 py-2 whitespace-nowrap">Facility Type</th>
            <th className="px-3 py-2 whitespace-nowrap">Status</th>
            <th className="px-3 py-2 whitespace-nowrap">Food Items</th>
            <th className="px-3 py-2 whitespace-nowrap">Address</th>
            <th className="px-3 py-2 whitespace-nowrap">Block Lot #</th>
            <th className="px-3 py-2 whitespace-nowrap">Block #</th>
            <th className="px-3 py-2 whitespace-nowrap">Lot</th>
              <th className="px-3 py-2 whitespace-nowrap">CNN</th>
              <th className="px-3 py-2 whitespace-nowrap">Location Description</th>
              <th className="px-3 py-2 whitespace-nowrap">Latitude & Longitude</th>
              <th className="px-3 py-2 whitespace-nowrap">X</th>
              <th className="px-3 py-2 whitespace-nowrap">Y</th>
              <th className="px-3 py-2 whitespace-nowrap">Permit</th>
              <th className="px-3 py-2 whitespace-nowrap">Schedule</th>
              <th className="px-3 py-2 whitespace-nowrap">Days & Hours</th>
              <th className="px-3 py-2 whitespace-nowrap">NOI Sent</th>
              <th className="px-3 py-2 whitespace-nowrap">Approved</th>
              <th className="px-3 py-2 whitespace-nowrap">Received</th>
              <th className="px-3 py-2 whitespace-nowrap">Prior Permit</th>
              <th className="px-3 py-2 whitespace-nowrap">Expiration Date</th>
              <th className="px-3 py-2 whitespace-nowrap">Location</th>
              <th className="px-3 py-2 whitespace-nowrap">Fire Prevention Districts</th>
              <th className="px-3 py-2 whitespace-nowrap">Police Districts</th>
              <th className="px-3 py-2 whitespace-nowrap">Supervisor Districts</th>
              <th className="px-3 py-2 whitespace-nowrap">Zip Codes</th>
              <th className="px-3 py-2 whitespace-nowrap">Neighborhoods(Old)</th>
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
