export class UserDetails {
  public id: string;
  public username: string;
  public email: string;
  public firstName: string;
  public lastName: string;

  constructor(args: any) {
    Object.assign(this, args);
  }
}
