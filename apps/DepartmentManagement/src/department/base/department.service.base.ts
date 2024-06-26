/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Department as PrismaDepartment,
  Employee as PrismaEmployee,
} from "@prisma/client";

export class DepartmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DepartmentCountArgs, "select">
  ): Promise<number> {
    return this.prisma.department.count(args);
  }

  async departments<T extends Prisma.DepartmentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DepartmentFindManyArgs>
  ): Promise<PrismaDepartment[]> {
    return this.prisma.department.findMany<Prisma.DepartmentFindManyArgs>(args);
  }
  async department<T extends Prisma.DepartmentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DepartmentFindUniqueArgs>
  ): Promise<PrismaDepartment | null> {
    return this.prisma.department.findUnique(args);
  }
  async createDepartment<T extends Prisma.DepartmentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DepartmentCreateArgs>
  ): Promise<PrismaDepartment> {
    return this.prisma.department.create<T>(args);
  }
  async updateDepartment<T extends Prisma.DepartmentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DepartmentUpdateArgs>
  ): Promise<PrismaDepartment> {
    return this.prisma.department.update<T>(args);
  }
  async deleteDepartment<T extends Prisma.DepartmentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DepartmentDeleteArgs>
  ): Promise<PrismaDepartment> {
    return this.prisma.department.delete(args);
  }

  async findEmployees(
    parentId: string,
    args: Prisma.EmployeeFindManyArgs
  ): Promise<PrismaEmployee[]> {
    return this.prisma.department
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .employees(args);
  }
}
