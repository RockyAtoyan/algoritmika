import { AuthForm } from "@/features/auth-form";

export const LoginPage = () => {
  return (
    <div className={"p-4"}>
      <div className={"mx-auto max-w-96"}>
        <AuthForm />
      </div>
    </div>
  );
};
