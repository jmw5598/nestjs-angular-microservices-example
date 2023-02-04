export class ResetPasswordDto {
  public email: string;
  public password: string;
  public confirmPassword: string;
  public resetToken: string;
}
