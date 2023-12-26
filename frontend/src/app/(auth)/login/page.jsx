import LoginForm from "@/components/Auth/LoginForm";

export const metadata = {
  title: "Login",
  description: "",
};

const LoginPage = () => {
  return (
    <section className="flex items-center justify-center w-full h-screen px-10 lg:px-20">
      <LoginForm />
    </section>
  );
};

export default LoginPage;
