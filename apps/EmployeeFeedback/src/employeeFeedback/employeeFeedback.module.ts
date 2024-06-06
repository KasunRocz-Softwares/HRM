import { Module } from "@nestjs/common";
import { EmployeeFeedbackModuleBase } from "./base/employeeFeedback.module.base";
import { EmployeeFeedbackService } from "./employeeFeedback.service";
import { EmployeeFeedbackController } from "./employeeFeedback.controller";
import { EmployeeFeedbackResolver } from "./employeeFeedback.resolver";

@Module({
  imports: [EmployeeFeedbackModuleBase],
  controllers: [EmployeeFeedbackController],
  providers: [EmployeeFeedbackService, EmployeeFeedbackResolver],
  exports: [EmployeeFeedbackService],
})
export class EmployeeFeedbackModule {}
