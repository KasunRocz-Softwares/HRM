/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Applicant } from "./Applicant";
import { ApplicantCountArgs } from "./ApplicantCountArgs";
import { ApplicantFindManyArgs } from "./ApplicantFindManyArgs";
import { ApplicantFindUniqueArgs } from "./ApplicantFindUniqueArgs";
import { DeleteApplicantArgs } from "./DeleteApplicantArgs";
import { ApplicantService } from "../applicant.service";
@graphql.Resolver(() => Applicant)
export class ApplicantResolverBase {
  constructor(protected readonly service: ApplicantService) {}

  async _applicantsMeta(
    @graphql.Args() args: ApplicantCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Applicant])
  async applicants(
    @graphql.Args() args: ApplicantFindManyArgs
  ): Promise<Applicant[]> {
    return this.service.applicants(args);
  }

  @graphql.Query(() => Applicant, { nullable: true })
  async applicant(
    @graphql.Args() args: ApplicantFindUniqueArgs
  ): Promise<Applicant | null> {
    const result = await this.service.applicant(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Applicant)
  async deleteApplicant(
    @graphql.Args() args: DeleteApplicantArgs
  ): Promise<Applicant | null> {
    try {
      return await this.service.deleteApplicant(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
