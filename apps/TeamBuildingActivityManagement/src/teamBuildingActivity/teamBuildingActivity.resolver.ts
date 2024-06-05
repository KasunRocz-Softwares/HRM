import * as graphql from "@nestjs/graphql";
import { TeamBuildingActivityResolverBase } from "./base/teamBuildingActivity.resolver.base";
import { TeamBuildingActivity } from "./base/TeamBuildingActivity";
import { TeamBuildingActivityService } from "./teamBuildingActivity.service";

@graphql.Resolver(() => TeamBuildingActivity)
export class TeamBuildingActivityResolver extends TeamBuildingActivityResolverBase {
  constructor(protected readonly service: TeamBuildingActivityService) {
    super(service);
  }
}
