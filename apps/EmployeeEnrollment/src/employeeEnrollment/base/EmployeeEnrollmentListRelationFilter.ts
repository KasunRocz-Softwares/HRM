/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EmployeeEnrollmentWhereInput } from "./EmployeeEnrollmentWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class EmployeeEnrollmentListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => EmployeeEnrollmentWhereInput,
  })
  @ValidateNested()
  @Type(() => EmployeeEnrollmentWhereInput)
  @IsOptional()
  @Field(() => EmployeeEnrollmentWhereInput, {
    nullable: true,
  })
  every?: EmployeeEnrollmentWhereInput;

  @ApiProperty({
    required: false,
    type: () => EmployeeEnrollmentWhereInput,
  })
  @ValidateNested()
  @Type(() => EmployeeEnrollmentWhereInput)
  @IsOptional()
  @Field(() => EmployeeEnrollmentWhereInput, {
    nullable: true,
  })
  some?: EmployeeEnrollmentWhereInput;

  @ApiProperty({
    required: false,
    type: () => EmployeeEnrollmentWhereInput,
  })
  @ValidateNested()
  @Type(() => EmployeeEnrollmentWhereInput)
  @IsOptional()
  @Field(() => EmployeeEnrollmentWhereInput, {
    nullable: true,
  })
  none?: EmployeeEnrollmentWhereInput;
}
export { EmployeeEnrollmentListRelationFilter as EmployeeEnrollmentListRelationFilter };
