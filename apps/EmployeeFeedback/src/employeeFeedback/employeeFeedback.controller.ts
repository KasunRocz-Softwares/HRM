import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeFeedbackService } from "./employeeFeedback.service";
import { EmployeeFeedbackControllerBase } from "./base/employeeFeedback.controller.base";

@swagger.ApiTags("employeeFeedbacks")
@common.Controller("employeeFeedbacks")
export class EmployeeFeedbackController extends EmployeeFeedbackControllerBase {
  constructor(protected readonly service: EmployeeFeedbackService) {
    super(service);
  }
}
