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
  PerformanceGoal as PrismaPerformanceGoal,
} from "@prisma/client";

export class PerformanceGoalServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PerformanceGoalCountArgs, "select">
  ): Promise<number> {
    return this.prisma.performanceGoal.count(args);
  }

  async performanceGoals<T extends Prisma.PerformanceGoalFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PerformanceGoalFindManyArgs>
  ): Promise<PrismaPerformanceGoal[]> {
    return this.prisma.performanceGoal.findMany<Prisma.PerformanceGoalFindManyArgs>(
      args
    );
  }
  async performanceGoal<T extends Prisma.PerformanceGoalFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PerformanceGoalFindUniqueArgs>
  ): Promise<PrismaPerformanceGoal | null> {
    return this.prisma.performanceGoal.findUnique(args);
  }
  async createPerformanceGoal<T extends Prisma.PerformanceGoalCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PerformanceGoalCreateArgs>
  ): Promise<PrismaPerformanceGoal> {
    return this.prisma.performanceGoal.create<T>(args);
  }
  async updatePerformanceGoal<T extends Prisma.PerformanceGoalUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PerformanceGoalUpdateArgs>
  ): Promise<PrismaPerformanceGoal> {
    return this.prisma.performanceGoal.update<T>(args);
  }
  async deletePerformanceGoal<T extends Prisma.PerformanceGoalDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PerformanceGoalDeleteArgs>
  ): Promise<PrismaPerformanceGoal> {
    return this.prisma.performanceGoal.delete(args);
  }
}
