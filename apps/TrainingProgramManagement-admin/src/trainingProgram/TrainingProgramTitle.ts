import { TrainingProgram as TTrainingProgram } from "../api/trainingProgram/TrainingProgram";

export const TRAININGPROGRAM_TITLE_FIELD = "id";

export const TrainingProgramTitle = (record: TTrainingProgram): string => {
  return record.id?.toString() || String(record.id);
};
