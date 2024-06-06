import { PerformanceGoalWhereInput } from "./PerformanceGoalWhereInput";
import { PerformanceGoalOrderByInput } from "./PerformanceGoalOrderByInput";

export type PerformanceGoalFindManyArgs = {
  where?: PerformanceGoalWhereInput;
  orderBy?: Array<PerformanceGoalOrderByInput>;
  skip?: number;
  take?: number;
};
