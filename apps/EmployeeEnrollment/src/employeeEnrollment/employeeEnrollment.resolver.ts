import * as graphql from "@nestjs/graphql";
import { EmployeeEnrollmentResolverBase } from "./base/employeeEnrollment.resolver.base";
import { EmployeeEnrollment } from "./base/EmployeeEnrollment";
import { EmployeeEnrollmentService } from "./employeeEnrollment.service";

@graphql.Resolver(() => EmployeeEnrollment)
export class EmployeeEnrollmentResolver extends EmployeeEnrollmentResolverBase {
  constructor(protected readonly service: EmployeeEnrollmentService) {
    super(service);
  }
}
