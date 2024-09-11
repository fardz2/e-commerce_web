import LoginForm from "./_components/login";
import GoogleLogin from "./_components/google-login";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <LoginForm />
        <GoogleLogin />
      </div>
    </div>
  );
}
