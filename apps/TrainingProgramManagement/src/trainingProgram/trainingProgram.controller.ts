import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TrainingProgramService } from "./trainingProgram.service";
import { TrainingProgramControllerBase } from "./base/trainingProgram.controller.base";

@swagger.ApiTags("trainingPrograms")
@common.Controller("trainingPrograms")
export class TrainingProgramController extends TrainingProgramControllerBase {
  constructor(protected readonly service: TrainingProgramService) {
    super(service);
  }
}
