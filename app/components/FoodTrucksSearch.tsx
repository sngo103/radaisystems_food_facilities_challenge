import { useState } from "react";
import { PermitStatus } from "~/types/dataTypes";

type FoodTrucksSearchProps = {
  handleSearch: (query: string, keys: string[], status: PermitStatus) => void;
}

export default function FoodTrucksSearch({ handleSearch }: FoodTrucksSearchProps) {
  const [addressQuery, setAddressQuery] = useState("");
  const [applicantQuery, setApplicantQuery] = useState("");
  const [applicantStatusFilter, setApplicantStatusFilter] = useState<PermitStatus>(PermitStatus.ALL);
  const [addressStatusFilter, setAddressStatusFilter] = useState<PermitStatus>(PermitStatus.ALL);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApplicantQuery(e.target.value);
  };

  const handleSubmitApplicant = (e: any) => {
    e.preventDefault();
    if(applicantQuery.trim() !== '') {
      handleSearch(applicantQuery, ["applicant"], applicantStatusFilter);
    }
  };

  const handleSubmitAddress = (e: any) => {
    e.preventDefault();
    if(addressQuery.trim() !== '') {
      handleSearch(addressQuery, ["address"], addressStatusFilter);
    }
  };

  return (
    <div>
    <div className="container px-4 mt-8 mx-auto w-full cursor-auto">
      <text className="font-sans text-l m-1">Search by Applicant Name</text>
      <input
        type="text"
        value={applicantQuery}
        onChange={handleChange}
        placeholder="Search by applicant name..."
        className="border border-gray-300 p-2"
      />
      <text className="font-sans text-l m-1"></text>with status
      <select className="font-sans mx-1 py-1 border-0.5 rounded-sm" name="status" id="status" value={applicantStatusFilter} 
      onChange={(e) => setApplicantStatusFilter(e.target.value as PermitStatus)}>
        <option className="font-sans m-1 border-none" value={PermitStatus.APPROVED}>{PermitStatus.APPROVED}</option>
        <option value={PermitStatus.EXPIRED}>{PermitStatus.EXPIRED}</option>
        <option value={PermitStatus.REQUESTED}>{PermitStatus.REQUESTED}</option>
        <option value={PermitStatus.SUSPEND}>{PermitStatus.SUSPEND}</option>
        <option value={PermitStatus.ISSUED}>{PermitStatus.ISSUED}</option>
        <option value={PermitStatus.ALL} selected={true}>{PermitStatus.ALL}</option>
      </select>
      <button className="mt-2 rounded-sm bg-yellow-400 text-white m-1 hover:bg-yellow-500 cursor-pointer px-8 py-1" onClick={handleSubmitApplicant}>
        Search By Applicant Name
      </button>
      </div>
      <div className="container px-4 mt-2 mx-auto w-full cursor-auto">
      <text className="font-sans text-l m-1">Search by Address</text>
      <input
        type="text"
        value={addressQuery}
        onChange={(e) => setAddressQuery(e.target.value)}
        placeholder="Search by address..."
        className="border border-gray-300 p-2"
      />
      <text className="font-sans text-l m-1"></text>with status
      <select className="font-sans mx-1 py-1 border-0.5 rounded-sm" name="status" id="status" value={addressStatusFilter} 
      onChange={(e) => setAddressStatusFilter(e.target.value as PermitStatus)}>
        <option className="font-sans m-1 border-none" value={PermitStatus.APPROVED}>{PermitStatus.APPROVED}</option>
        <option value={PermitStatus.EXPIRED}>{PermitStatus.EXPIRED}</option>
        <option value={PermitStatus.REQUESTED}>{PermitStatus.REQUESTED}</option>
        <option value={PermitStatus.SUSPEND}>{PermitStatus.SUSPEND}</option>
        <option value={PermitStatus.ISSUED}>{PermitStatus.ISSUED}</option>
        <option value={PermitStatus.ALL} selected={true}>{PermitStatus.ALL}</option>
      </select>
      <button className="mt-2 rounded-sm bg-yellow-400 text-white m-1 hover:bg-yellow-500 cursor-pointer px-8 py-1" onClick={handleSubmitAddress}>
        Search By Address
      </button>
    </div>
    </div>
  );
}


