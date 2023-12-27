import Header from "../components/Header.js";
import ForgotPassword from "../components/ForgotPassword.js";

export default function ForgotPasswordPage() {
  return (
    <>
      <Header
        heading="Forgot password?"
        paragraph="provide your email to reset password or "
        linkName="Login"
        linkUrl="/"
      />
      <ForgotPassword />
    </>
  );
}
