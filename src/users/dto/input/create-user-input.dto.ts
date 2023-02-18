import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserInput {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  age: number;
}
