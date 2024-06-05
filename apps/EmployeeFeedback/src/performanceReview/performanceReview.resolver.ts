import * as graphql from "@nestjs/graphql";
import { PerformanceReviewResolverBase } from "./base/performanceReview.resolver.base";
import { PerformanceReview } from "./base/PerformanceReview";
import { PerformanceReviewService } from "./performanceReview.service";

@graphql.Resolver(() => PerformanceReview)
export class PerformanceReviewResolver extends PerformanceReviewResolverBase {
  constructor(protected readonly service: PerformanceReviewService) {
    super(service);
  }
}
