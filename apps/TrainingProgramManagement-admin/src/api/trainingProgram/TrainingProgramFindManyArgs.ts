import { TrainingProgramWhereInput } from "./TrainingProgramWhereInput";
import { TrainingProgramOrderByInput } from "./TrainingProgramOrderByInput";

export type TrainingProgramFindManyArgs = {
  where?: TrainingProgramWhereInput;
  orderBy?: Array<TrainingProgramOrderByInput>;
  skip?: number;
  take?: number;
};
