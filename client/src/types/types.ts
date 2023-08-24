export type ToggleBarsTypes = {
  value: {
    isBarsOpen: boolean;
  };
};
export type ProductProps = {
  CardSize: string,
  ImageSize:string
  ContentSize?:string
}
export type ProfileState = {
  res: string;
  loading: boolean;
  error: string | unknown;
};
export type UpdateProfileEmailParams = {
  newEmail: string;
  token:string
};
export type UpdateProfilePasswordParams = {
  currentPassword: String;
  newPassword: String;
  token:string
};
export type VerificationLinkParams={
  params:{
    slug:string[]
  }
}
export type FormValidationParams={
  email: string,
  password: string,
  confirmePassword:string,
}
export type FormValidationErrorParams={
  emailMessage?:string,
  passwordMessage?:string,
  confirmePasswordMessage?:string
}
export type OtpTypes = {
  firstDigit: string;
  secondDigit: string;
  thirdDigit: string;
  fourthDigit: string;
};
