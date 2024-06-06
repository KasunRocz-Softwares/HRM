import { Department } from "../department/Department";

export type Employee = {
  createdAt: Date;
  department?: Department | null;
  email: string | null;
  id: string;
  jobTitle: string | null;
  name: string | null;
  phone: string | null;
  salary: number | null;
  updatedAt: Date;
};
