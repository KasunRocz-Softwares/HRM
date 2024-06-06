import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RecognitionProgramServiceBase } from "./base/recognitionProgram.service.base";

@Injectable()
export class RecognitionProgramService extends RecognitionProgramServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
