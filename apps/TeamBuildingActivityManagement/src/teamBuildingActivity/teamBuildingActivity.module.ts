import { Module } from "@nestjs/common";
import { TeamBuildingActivityModuleBase } from "./base/teamBuildingActivity.module.base";
import { TeamBuildingActivityService } from "./teamBuildingActivity.service";
import { TeamBuildingActivityController } from "./teamBuildingActivity.controller";
import { TeamBuildingActivityResolver } from "./teamBuildingActivity.resolver";

@Module({
  imports: [TeamBuildingActivityModuleBase],
  controllers: [TeamBuildingActivityController],
  providers: [TeamBuildingActivityService, TeamBuildingActivityResolver],
  exports: [TeamBuildingActivityService],
})
export class TeamBuildingActivityModule {}
