import { MasterDataModel } from "src/app/master-data/master-data.model"

export const POSITIONS: MasterDataModel[] = [
  { id: "MANAGER", value: "Manager" },
  { id: "DEVELOPER", value: "Developer" },
  { id: "BUSINESS_ANALYST", value: "Business Analyst" },
  { id: "TESTER", value: "Tester" },
]

export const HOBBIES: MasterDataModel[] = [
    { id: "ARCHERY", value: "Archery" },
    { id: "BOXING", value: "Boxing" },
    { id: "READING", value: "Reading" },
    { id: "GYM", value: "Gym" },
];

export const GENDERS: MasterDataModel[] = [
    { id: "MALE", value: "Male" },
    { id: "FEMALE", value: "Female" },
    { id: "OTHERS", value: "Others" },
];
