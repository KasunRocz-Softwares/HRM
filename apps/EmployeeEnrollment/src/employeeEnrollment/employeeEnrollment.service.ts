import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeeEnrollmentServiceBase } from "./base/employeeEnrollment.service.base";

@Injectable()
export class EmployeeEnrollmentService extends EmployeeEnrollmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
