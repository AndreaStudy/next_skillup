import LoginForm from "@/components/login/LoginForm";
import { Input } from "@/components/ui/input";

export default function Page() {
  async function handleLogin(formData: FormData) {
    "use server";
    const payload = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(payload);
  }

  return (
    <main>
      <LoginForm handleLogin={handleLogin} />
    </main>
  );
}
