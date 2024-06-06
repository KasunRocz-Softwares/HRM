import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RecognitionProgramService } from "./recognitionProgram.service";
import { RecognitionProgramControllerBase } from "./base/recognitionProgram.controller.base";

@swagger.ApiTags("recognitionPrograms")
@common.Controller("recognitionPrograms")
export class RecognitionProgramController extends RecognitionProgramControllerBase {
  constructor(protected readonly service: RecognitionProgramService) {
    super(service);
  }
}
