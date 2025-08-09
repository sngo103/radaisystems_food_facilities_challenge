import type { FoodFacility } from "~/types/dataTypes";

export function validateFoodFacility(data: FoodFacility): asserts data is FoodFacility {
  const fieldsToCheck = [
    ['locationId', data.locationId],
    ['cnn', data.cnn],
    ['blockLot', data.blockLot],
    ['block', data.block],
    ['lot', data.lot],
    ['received', data.received],
    ['priorPermit', data.priorPermit],
    ['firePreventionDistricts', data.firePreventionDistricts],
    ['policeDistricts', data.policeDistricts],
    ['supervisorDistricts', data.supervisorDistricts],
    ['zipCodes', data.zipCodes],
    ['oldNeighborhoods', data.oldNeighborhoods],
  ] as const;

  for (const [fieldName, value] of fieldsToCheck) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new Error(`Field "${fieldName}" must be a valid number, got: ${value}`);
    }
  }
}

export function buildFoodFacility(foodFacilityData: any): FoodFacility {
  let newFoodFacility: FoodFacility
  try {
    newFoodFacility = {
      locationId: Number(foodFacilityData[0]),
      applicant: foodFacilityData[1],
      facilityType: foodFacilityData[2],
      cnn: Number(foodFacilityData[3]),
      locationDescription: foodFacilityData[4],
      address: foodFacilityData[5],
      blockLot: Number(foodFacilityData[6]),
      block: Number(foodFacilityData[7]),
      lot: Number(foodFacilityData[8]),
      permit: foodFacilityData[9],
      status: foodFacilityData[10],
      foodItems: foodFacilityData[11],
      x: foodFacilityData[12],
      y: foodFacilityData[13],
      latitudeLongitude: foodFacilityData[14] + ',' + foodFacilityData[15],
      schedule: foodFacilityData[16],
      daysHours: foodFacilityData[17],
      noiSent: foodFacilityData[18],
      approved: foodFacilityData[19],
      received: Number(foodFacilityData[20]),
      priorPermit: Number(foodFacilityData[21]),
      expirationDate: foodFacilityData[22],
      location: foodFacilityData[23] + ', ' + foodFacilityData[24],
      firePreventionDistricts: Number(foodFacilityData[25]),
      policeDistricts: Number(foodFacilityData[26]),
      supervisorDistricts: Number(foodFacilityData[27]),
      zipCodes: Number(foodFacilityData[28]),
      oldNeighborhoods: Number(foodFacilityData[29])
    };
    validateFoodFacility(newFoodFacility);
  } catch (error) {
    throw new Error("Error parsing food facility data: " + error);
  }

  return newFoodFacility;
}