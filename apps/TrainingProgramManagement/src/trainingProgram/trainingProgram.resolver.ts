import * as graphql from "@nestjs/graphql";
import { TrainingProgramResolverBase } from "./base/trainingProgram.resolver.base";
import { TrainingProgram } from "./base/TrainingProgram";
import { TrainingProgramService } from "./trainingProgram.service";

@graphql.Resolver(() => TrainingProgram)
export class TrainingProgramResolver extends TrainingProgramResolverBase {
  constructor(protected readonly service: TrainingProgramService) {
    super(service);
  }
}
