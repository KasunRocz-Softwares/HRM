import * as graphql from "@nestjs/graphql";
import { EmployeeFeedbackResolverBase } from "./base/employeeFeedback.resolver.base";
import { EmployeeFeedback } from "./base/EmployeeFeedback";
import { EmployeeFeedbackService } from "./employeeFeedback.service";

@graphql.Resolver(() => EmployeeFeedback)
export class EmployeeFeedbackResolver extends EmployeeFeedbackResolverBase {
  constructor(protected readonly service: EmployeeFeedbackService) {
    super(service);
  }
}
