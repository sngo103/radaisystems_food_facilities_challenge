import { useState } from "react";
import { PermitStatus } from "~/types/dataTypes";

type FoodTrucksSearchProps = {
  handleSearch: (query: string, keys: string[], status: PermitStatus) => void;
}

export default function FoodTrucksSearch({ handleSearch }: FoodTrucksSearchProps) {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<PermitStatus>(PermitStatus.ALL);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if(query.trim() !== '') {
      handleSearch(query, ["applicant"], statusFilter);
    }
  };

  return (
    <div className="container px-4 mt-8 mx-auto w-full cursor-auto">
      <text className="font-sans text-l m-1">Applicant Search</text>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for applicant..."
        className="border border-gray-300 p-2"
      />
      <text className="font-sans text-l m-1"></text>with status
      <select className="font-sans mx-1 py-1 border-0.5 rounded-sm" name="status" id="status" value={statusFilter} 
      onChange={(e) => setStatusFilter(e.target.value as PermitStatus)}>
        <option className="font-sans m-1 border-none" value={PermitStatus.APPROVED}>{PermitStatus.APPROVED}</option>
        <option value={PermitStatus.EXPIRED}>{PermitStatus.EXPIRED}</option>
        <option value={PermitStatus.REQUESTED}>{PermitStatus.REQUESTED}</option>
        <option value={PermitStatus.SUSPEND}>{PermitStatus.SUSPEND}</option>
        <option value={PermitStatus.ISSUED}>{PermitStatus.ISSUED}</option>
        <option value={PermitStatus.ALL} selected={true}>{PermitStatus.ALL}</option>
      </select>
      <button className="mt-2 rounded-sm bg-yellow-400 text-white m-1 hover:bg-yellow-500 cursor-pointer px-8 py-1" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
}


