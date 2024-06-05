import { Module } from "@nestjs/common";
import { TrainingProgramModuleBase } from "./base/trainingProgram.module.base";
import { TrainingProgramService } from "./trainingProgram.service";
import { TrainingProgramController } from "./trainingProgram.controller";
import { TrainingProgramResolver } from "./trainingProgram.resolver";

@Module({
  imports: [TrainingProgramModuleBase],
  controllers: [TrainingProgramController],
  providers: [TrainingProgramService, TrainingProgramResolver],
  exports: [TrainingProgramService],
})
export class TrainingProgramModule {}
