export default function OtpForm({
  setIsOtpLogin,
  email,
}: {
  setIsOtpLogin: (isOtpLogin: boolean) => void;
  email: string;
}) {
  console.log(setIsOtpLogin, email);

  return <>otp form</>;
}
