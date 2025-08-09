import FoodTrucksGridRow from "./FoodTrucksGridRow";

export default function FoodTrucksGrid() {
  return (
      <div className="container mx-auto px-4 mt-8">
  <table className="table-auto border">
    <thead className="ltr:text-left rtl:text-right">
      <tr className="*:font-medium *:text-gray-900 dark:*:text-white">
        <th className="px-3 py-2 whitespace-nowrap">Name</th>
        <th className="px-3 py-2 whitespace-nowrap">DoB</th>
        <th className="px-3 py-2 whitespace-nowrap">Role</th>
        <th className="px-3 py-2 whitespace-nowrap">Salary</th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
      <FoodTrucksGridRow />
    </tbody>
  </table>
</div>
        );
}
