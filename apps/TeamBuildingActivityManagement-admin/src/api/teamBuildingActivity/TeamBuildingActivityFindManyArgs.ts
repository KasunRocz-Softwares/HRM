import { TeamBuildingActivityWhereInput } from "./TeamBuildingActivityWhereInput";
import { TeamBuildingActivityOrderByInput } from "./TeamBuildingActivityOrderByInput";

export type TeamBuildingActivityFindManyArgs = {
  where?: TeamBuildingActivityWhereInput;
  orderBy?: Array<TeamBuildingActivityOrderByInput>;
  skip?: number;
  take?: number;
};
