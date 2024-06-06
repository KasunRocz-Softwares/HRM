import { PerformanceGoal as TPerformanceGoal } from "../api/performanceGoal/PerformanceGoal";

export const PERFORMANCEGOAL_TITLE_FIELD = "id";

export const PerformanceGoalTitle = (record: TPerformanceGoal): string => {
  return record.id?.toString() || String(record.id);
};
