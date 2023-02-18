import { IsNotEmpty } from 'class-validator';

export class DeleteUserInput {
  @IsNotEmpty()
  userId: string;
}
