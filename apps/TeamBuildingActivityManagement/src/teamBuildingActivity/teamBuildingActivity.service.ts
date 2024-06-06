import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TeamBuildingActivityServiceBase } from "./base/teamBuildingActivity.service.base";

@Injectable()
export class TeamBuildingActivityService extends TeamBuildingActivityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
