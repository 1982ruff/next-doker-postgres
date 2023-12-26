import RegisterForm from "@/components/Auth/RegisterForm";

export const metadata = {
  title: "Register",
  description: "...",
};

const RegisterPage = () => {
  return (
    <section className="flex items-center justify-center w-full h-screen px-10 lg:px-20">
      <RegisterForm />
    </section>
  );
};

export default RegisterPage;
