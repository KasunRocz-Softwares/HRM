import { RecognitionProgram as TRecognitionProgram } from "../api/recognitionProgram/RecognitionProgram";

export const RECOGNITIONPROGRAM_TITLE_FIELD = "id";

export const RecognitionProgramTitle = (
  record: TRecognitionProgram
): string => {
  return record.id?.toString() || String(record.id);
};
