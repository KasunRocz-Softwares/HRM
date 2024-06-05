/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  PerformanceReview as PrismaPerformanceReview,
} from "@prisma/client";

export class PerformanceReviewServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PerformanceReviewCountArgs, "select">
  ): Promise<number> {
    return this.prisma.performanceReview.count(args);
  }

  async performanceReviews<T extends Prisma.PerformanceReviewFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PerformanceReviewFindManyArgs>
  ): Promise<PrismaPerformanceReview[]> {
    return this.prisma.performanceReview.findMany<Prisma.PerformanceReviewFindManyArgs>(
      args
    );
  }
  async performanceReview<T extends Prisma.PerformanceReviewFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PerformanceReviewFindUniqueArgs>
  ): Promise<PrismaPerformanceReview | null> {
    return this.prisma.performanceReview.findUnique(args);
  }
  async createPerformanceReview<T extends Prisma.PerformanceReviewCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PerformanceReviewCreateArgs>
  ): Promise<PrismaPerformanceReview> {
    return this.prisma.performanceReview.create<T>(args);
  }
  async updatePerformanceReview<T extends Prisma.PerformanceReviewUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PerformanceReviewUpdateArgs>
  ): Promise<PrismaPerformanceReview> {
    return this.prisma.performanceReview.update<T>(args);
  }
  async deletePerformanceReview<T extends Prisma.PerformanceReviewDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PerformanceReviewDeleteArgs>
  ): Promise<PrismaPerformanceReview> {
    return this.prisma.performanceReview.delete(args);
  }
}
