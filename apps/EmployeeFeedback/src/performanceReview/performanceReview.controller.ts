import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PerformanceReviewService } from "./performanceReview.service";
import { PerformanceReviewControllerBase } from "./base/performanceReview.controller.base";

@swagger.ApiTags("performanceReviews")
@common.Controller("performanceReviews")
export class PerformanceReviewController extends PerformanceReviewControllerBase {
  constructor(protected readonly service: PerformanceReviewService) {
    super(service);
  }
}
