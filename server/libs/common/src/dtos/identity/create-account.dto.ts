export class CreateAccountDto {
  public name: string;

  constructor(args: any) {
    Object.assign(this, args);
  }
}
