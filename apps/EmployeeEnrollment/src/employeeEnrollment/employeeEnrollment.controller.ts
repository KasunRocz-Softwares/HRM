import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeEnrollmentService } from "./employeeEnrollment.service";
import { EmployeeEnrollmentControllerBase } from "./base/employeeEnrollment.controller.base";

@swagger.ApiTags("employeeEnrollments")
@common.Controller("employeeEnrollments")
export class EmployeeEnrollmentController extends EmployeeEnrollmentControllerBase {
  constructor(protected readonly service: EmployeeEnrollmentService) {
    super(service);
  }
}
