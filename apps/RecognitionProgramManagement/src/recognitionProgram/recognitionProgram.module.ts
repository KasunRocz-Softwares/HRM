import { Module } from "@nestjs/common";
import { RecognitionProgramModuleBase } from "./base/recognitionProgram.module.base";
import { RecognitionProgramService } from "./recognitionProgram.service";
import { RecognitionProgramController } from "./recognitionProgram.controller";
import { RecognitionProgramResolver } from "./recognitionProgram.resolver";

@Module({
  imports: [RecognitionProgramModuleBase],
  controllers: [RecognitionProgramController],
  providers: [RecognitionProgramService, RecognitionProgramResolver],
  exports: [RecognitionProgramService],
})
export class RecognitionProgramModule {}
