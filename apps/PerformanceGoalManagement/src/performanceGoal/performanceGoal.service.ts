import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PerformanceGoalServiceBase } from "./base/performanceGoal.service.base";

@Injectable()
export class PerformanceGoalService extends PerformanceGoalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
