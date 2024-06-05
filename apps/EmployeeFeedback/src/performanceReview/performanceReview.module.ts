import { Module } from "@nestjs/common";
import { PerformanceReviewModuleBase } from "./base/performanceReview.module.base";
import { PerformanceReviewService } from "./performanceReview.service";
import { PerformanceReviewController } from "./performanceReview.controller";
import { PerformanceReviewResolver } from "./performanceReview.resolver";

@Module({
  imports: [PerformanceReviewModuleBase],
  controllers: [PerformanceReviewController],
  providers: [PerformanceReviewService, PerformanceReviewResolver],
  exports: [PerformanceReviewService],
})
export class PerformanceReviewModule {}
