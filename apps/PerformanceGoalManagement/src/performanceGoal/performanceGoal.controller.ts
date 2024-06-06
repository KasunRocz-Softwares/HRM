import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PerformanceGoalService } from "./performanceGoal.service";
import { PerformanceGoalControllerBase } from "./base/performanceGoal.controller.base";

@swagger.ApiTags("performanceGoals")
@common.Controller("performanceGoals")
export class PerformanceGoalController extends PerformanceGoalControllerBase {
  constructor(protected readonly service: PerformanceGoalService) {
    super(service);
  }
}
