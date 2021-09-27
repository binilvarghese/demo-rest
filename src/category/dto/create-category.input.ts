import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCategoryInput {
  @ApiProperty()
  @IsNotEmpty()
  parentId: string;

  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  // @IsOptional()
  imageKey: string;

  @ApiProperty()
  @IsNotEmpty()
  level: number;
}
