import * as graphql from "@nestjs/graphql";
import { RecognitionProgramResolverBase } from "./base/recognitionProgram.resolver.base";
import { RecognitionProgram } from "./base/RecognitionProgram";
import { RecognitionProgramService } from "./recognitionProgram.service";

@graphql.Resolver(() => RecognitionProgram)
export class RecognitionProgramResolver extends RecognitionProgramResolverBase {
  constructor(protected readonly service: RecognitionProgramService) {
    super(service);
  }
}
