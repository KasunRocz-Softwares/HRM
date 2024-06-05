/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  RecognitionProgram as PrismaRecognitionProgram,
} from "@prisma/client";

export class RecognitionProgramServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.RecognitionProgramCountArgs, "select">
  ): Promise<number> {
    return this.prisma.recognitionProgram.count(args);
  }

  async recognitionPrograms<T extends Prisma.RecognitionProgramFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecognitionProgramFindManyArgs>
  ): Promise<PrismaRecognitionProgram[]> {
    return this.prisma.recognitionProgram.findMany<Prisma.RecognitionProgramFindManyArgs>(
      args
    );
  }
  async recognitionProgram<T extends Prisma.RecognitionProgramFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecognitionProgramFindUniqueArgs>
  ): Promise<PrismaRecognitionProgram | null> {
    return this.prisma.recognitionProgram.findUnique(args);
  }
  async createRecognitionProgram<T extends Prisma.RecognitionProgramCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecognitionProgramCreateArgs>
  ): Promise<PrismaRecognitionProgram> {
    return this.prisma.recognitionProgram.create<T>(args);
  }
  async updateRecognitionProgram<T extends Prisma.RecognitionProgramUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecognitionProgramUpdateArgs>
  ): Promise<PrismaRecognitionProgram> {
    return this.prisma.recognitionProgram.update<T>(args);
  }
  async deleteRecognitionProgram<T extends Prisma.RecognitionProgramDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecognitionProgramDeleteArgs>
  ): Promise<PrismaRecognitionProgram> {
    return this.prisma.recognitionProgram.delete(args);
  }
}
