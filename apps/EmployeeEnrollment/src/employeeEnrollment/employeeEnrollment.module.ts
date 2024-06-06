import { Module } from "@nestjs/common";
import { EmployeeEnrollmentModuleBase } from "./base/employeeEnrollment.module.base";
import { EmployeeEnrollmentService } from "./employeeEnrollment.service";
import { EmployeeEnrollmentController } from "./employeeEnrollment.controller";
import { EmployeeEnrollmentResolver } from "./employeeEnrollment.resolver";

@Module({
  imports: [EmployeeEnrollmentModuleBase],
  controllers: [EmployeeEnrollmentController],
  providers: [EmployeeEnrollmentService, EmployeeEnrollmentResolver],
  exports: [EmployeeEnrollmentService],
})
export class EmployeeEnrollmentModule {}
