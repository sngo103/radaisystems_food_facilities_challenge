import type { FoodFacility } from "~/types/dataTypes";

type FoodTrucksGridRowProps = {
  facility: FoodFacility;
};

export default function FoodTrucksGridRow({ facility }: FoodTrucksGridRowProps) {
  return (
    <tr className="*:text-gray-900 *:first:font-medium dark:*:text-white">
      <td className="px-3 py-2 whitespace-pre-wrap">{facility.locationId}</td>
      <td className="px-3 py-2 whitespace-pre-wrap">{facility.applicant}</td>
      <td className="px-3 py-2 whitespace-pre-wrap">{facility.facilityType}</td>
      <td className="px-3 py-2 whitespace-pre-wrap">{facility.status}</td>
      <td className="px-3 py-2 whitespace-pre-wrap">{facility.foodItems}</td>
      <td className="px-3 py-2 whitespace-pre-wrap">{facility.address}</td>
      <td className="px-3 py-2 whitespace-pre-wrap">{facility.blockLot}</td>
      <td className="px-3 py-2 whitespace-pre-wrap">{facility.block}</td>
      <td className="px-3 py-2 whitespace-pre-wrap">{facility.lot}</td>
      <td className="px-3 py-2 whitespace-pre-wrap">{facility.cnn}</td>
      <td className="px-3 py-2 whitespace-pre-wrap">{facility.locationDescription}</td>
      <td className="px-3 py-2 whitespace-pre-wrap">{facility.latitudeLongitude}</td>
      <td className="px-3 py-2 whitespace-pre-wrap">{facility.x}</td>
      <td className="px-3 py-2 whitespace-pre-wrap">{facility.y}</td>
      <td className="px-3 py-2 whitespace-pre-wrap">{facility.permit}</td>
      <td className="px-3 py-2 whitespace-pre-wrap text-purple-700 underline">
        <a href={facility.schedule} target="_blank" rel="noopener noreferrer">View</a>
      </td>
      <td className="px-3 py-2 whitespace-pre-wrap text-purple-700 underline">
        <a href={facility.daysHours} target="_blank" rel="noopener noreferrer">View</a>
      </td>
      <td className="px-3 py-2 whitespace-pre-wrap">{facility.noiSent}</td>
      <td className="px-3 py-2 whitespace-pre-wrap">{facility.approved}</td>
      <td className="px-3 py-2 whitespace-pre-wrap">{facility.received}</td>
      <td className="px-3 py-2 whitespace-pre-wrap">{facility.priorPermit}</td>
      <td className="px-3 py-2 whitespace-pre-wrap">{facility.expirationDate}</td>
      <td className="px-3 py-2 whitespace-pre-wrap">{facility.location}</td>
      <td className="px-3 py-2 whitespace-pre-wrap">{facility.firePreventionDistricts}</td>
      <td className="px-3 py-2 whitespace-pre-wrap">{facility.policeDistricts}</td>
      <td className="px-3 py-2 whitespace-pre-wrap">{facility.supervisorDistricts}</td>
      <td className="px-3 py-2 whitespace-pre-wrap">{facility.zipCodes}</td>
      <td className="px-3 py-2 whitespace-pre-wrap">{facility.oldNeighborhoods}</td>
    </tr>
  );
}
