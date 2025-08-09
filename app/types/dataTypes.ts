export type FoodFacility = {
  locationId: number;
  applicant: string;
  facilityType: string;
  cnn: number;
  locationDescription: string;
  address: string;
  blockLot: number;
  block: number;
  lot: number;
  permit: string;
  status: string;
  foodItems: string;
  x: number | string;
  y: number | string;
  latitudeLongitude: number | string;
  schedule: string;
  daysHours: string;
  noiSent: string;
  approved: string;
  received: number;
  priorPermit: number;
  expirationDate: string;
  location: string;
  firePreventionDistricts: number;
  policeDistricts: number;
  supervisorDistricts: number;
  zipCodes: number;
  oldNeighborhoods: number;
};

export type FoodFacilityList = FoodFacility[];

export enum PermitStatus {
  APPROVED = "APPROVED",
  REQUESTED = "REQUESTED",
  EXPIRED = "EXPIRED",
  SUSPEND = "SUSPEND",
  ISSUED = "ISSUED",
  ALL = "ALL"
}