import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TeamBuildingActivityService } from "./teamBuildingActivity.service";
import { TeamBuildingActivityControllerBase } from "./base/teamBuildingActivity.controller.base";

@swagger.ApiTags("teamBuildingActivities")
@common.Controller("teamBuildingActivities")
export class TeamBuildingActivityController extends TeamBuildingActivityControllerBase {
  constructor(protected readonly service: TeamBuildingActivityService) {
    super(service);
  }
}
