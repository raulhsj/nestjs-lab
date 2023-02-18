import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateUserInput {
  @IsNotEmpty()
  userId: string;

  @IsOptional()
  @IsNotEmpty()
  age?: number;

  @IsOptional()
  isSubscribed?: boolean;
}
