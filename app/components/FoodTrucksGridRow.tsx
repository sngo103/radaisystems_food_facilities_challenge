import type { FoodFacility } from "~/types/dataTypes";

type FoodTrucksGridRowProps = {
  facility: FoodFacility;
};

export default function FoodTrucksGridRow({ facility }: FoodTrucksGridRowProps) {
  return (
    <tr className="*:text-gray-900 *:first:font-medium dark:*:text-white">
      <td className="px-3 py-2 whitespace-nowrap">{facility.locationId}</td>
      <td className="px-3 py-2 whitespace-nowrap">{facility.applicant}</td>
      <td className="px-3 py-2 whitespace-nowrap">{facility.facilityType}</td>
      <td className="px-3 py-2 whitespace-nowrap">{facility.status}</td>
      <td className="px-3 py-2 whitespace-nowrap">{facility.foodItems}</td>
      <td className="px-3 py-2 whitespace-nowrap">{facility.address}</td>
      <td className="px-3 py-2 whitespace-nowrap">{facility.blockLot}</td>
      <td className="px-3 py-2 whitespace-nowrap">{facility.block}</td>
      <td className="px-3 py-2 whitespace-nowrap">{facility.lot}</td>
      <td className="px-3 py-2 whitespace-nowrap">{facility.cnn}</td>
      <td className="px-3 py-2 whitespace-nowrap">{facility.locationDescription}</td>
      <td className="px-3 py-2 whitespace-nowrap">{facility.latitude}</td>
      <td className="px-3 py-2 whitespace-nowrap">{facility.longitude}</td>
      <td className="px-3 py-2 whitespace-nowrap">{facility.x}</td>
      <td className="px-3 py-2 whitespace-nowrap">{facility.y}</td>
      <td className="px-3 py-2 whitespace-nowrap">{facility.permit}</td>
      <td className="px-3 py-2 whitespace-nowrap">{facility.schedule}</td>
      <td className="px-3 py-2 whitespace-nowrap">{facility.daysHours}</td>
      <td className="px-3 py-2 whitespace-nowrap">{facility.noiSent}</td>
      <td className="px-3 py-2 whitespace-nowrap">{facility.approved}</td>
      <td className="px-3 py-2 whitespace-nowrap">{facility.received}</td>
      <td className="px-3 py-2 whitespace-nowrap">{facility.priorPermit}</td>
      <td className="px-3 py-2 whitespace-nowrap">{facility.expirationDate}</td>
      <td className="px-3 py-2 whitespace-nowrap">{facility.location}</td>
      <td className="px-3 py-2 whitespace-nowrap">{facility.firePreventionDistricts}</td>
      <td className="px-3 py-2 whitespace-nowrap">{facility.policeDistricts}</td>
      <td className="px-3 py-2 whitespace-nowrap">{facility.supervisorDistricts}</td>
      <td className="px-3 py-2 whitespace-nowrap">{facility.zipCodes}</td>
      <td className="px-3 py-2 whitespace-nowrap">{facility.oldNeighborhoods}</td>
    </tr>
  );
}
