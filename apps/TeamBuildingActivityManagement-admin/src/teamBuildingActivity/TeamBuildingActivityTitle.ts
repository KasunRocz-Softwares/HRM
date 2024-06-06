import { TeamBuildingActivity as TTeamBuildingActivity } from "../api/teamBuildingActivity/TeamBuildingActivity";

export const TEAMBUILDINGACTIVITY_TITLE_FIELD = "id";

export const TeamBuildingActivityTitle = (
  record: TTeamBuildingActivity
): string => {
  return record.id?.toString() || String(record.id);
};
