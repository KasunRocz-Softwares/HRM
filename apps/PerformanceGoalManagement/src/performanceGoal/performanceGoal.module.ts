import { Module } from "@nestjs/common";
import { PerformanceGoalModuleBase } from "./base/performanceGoal.module.base";
import { PerformanceGoalService } from "./performanceGoal.service";
import { PerformanceGoalController } from "./performanceGoal.controller";
import { PerformanceGoalResolver } from "./performanceGoal.resolver";

@Module({
  imports: [PerformanceGoalModuleBase],
  controllers: [PerformanceGoalController],
  providers: [PerformanceGoalService, PerformanceGoalResolver],
  exports: [PerformanceGoalService],
})
export class PerformanceGoalModule {}
