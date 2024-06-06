import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TrainingProgramServiceBase } from "./base/trainingProgram.service.base";

@Injectable()
export class TrainingProgramService extends TrainingProgramServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
