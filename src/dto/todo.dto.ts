import { IsString, IsNotEmpty, IsOptional, IsEnum, IsDateString, MinLength, MaxLength } from 'class-validator';

export enum TodoStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(50)
  title: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(256)
  content: string;

  @IsEnum(TodoStatus)
  @IsOptional()
  status?: TodoStatus;

  @IsDateString()
  @IsOptional()
  datetime?: string;
}

export class UpdateTodoDto {
  @IsString()
  @IsOptional()
  @MinLength(5)
  @MaxLength(50)
  title?: string;

  @IsString()
  @IsOptional()
  @MinLength(5)
  @MaxLength(256)
  content?: string;

  @IsEnum(TodoStatus)
  @IsOptional()
  status?: TodoStatus;

  @IsDateString()
  @IsOptional()
  datetime?: string;
}