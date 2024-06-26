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
import { EmployeeFeedback } from "./EmployeeFeedback";
import { EmployeeFeedbackCountArgs } from "./EmployeeFeedbackCountArgs";
import { EmployeeFeedbackFindManyArgs } from "./EmployeeFeedbackFindManyArgs";
import { EmployeeFeedbackFindUniqueArgs } from "./EmployeeFeedbackFindUniqueArgs";
import { DeleteEmployeeFeedbackArgs } from "./DeleteEmployeeFeedbackArgs";
import { EmployeeFeedbackService } from "../employeeFeedback.service";
@graphql.Resolver(() => EmployeeFeedback)
export class EmployeeFeedbackResolverBase {
  constructor(protected readonly service: EmployeeFeedbackService) {}

  async _employeeFeedbacksMeta(
    @graphql.Args() args: EmployeeFeedbackCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [EmployeeFeedback])
  async employeeFeedbacks(
    @graphql.Args() args: EmployeeFeedbackFindManyArgs
  ): Promise<EmployeeFeedback[]> {
    return this.service.employeeFeedbacks(args);
  }

  @graphql.Query(() => EmployeeFeedback, { nullable: true })
  async employeeFeedback(
    @graphql.Args() args: EmployeeFeedbackFindUniqueArgs
  ): Promise<EmployeeFeedback | null> {
    const result = await this.service.employeeFeedback(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => EmployeeFeedback)
  async deleteEmployeeFeedback(
    @graphql.Args() args: DeleteEmployeeFeedbackArgs
  ): Promise<EmployeeFeedback | null> {
    try {
      return await this.service.deleteEmployeeFeedback(args);
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
