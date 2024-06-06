import * as graphql from "@nestjs/graphql";
import { PerformanceGoalResolverBase } from "./base/performanceGoal.resolver.base";
import { PerformanceGoal } from "./base/PerformanceGoal";
import { PerformanceGoalService } from "./performanceGoal.service";

@graphql.Resolver(() => PerformanceGoal)
export class PerformanceGoalResolver extends PerformanceGoalResolverBase {
  constructor(protected readonly service: PerformanceGoalService) {
    super(service);
  }
}
