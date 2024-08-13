import { Button } from "../ui/button";
import { Input } from "../ui/input";

function LoginForm({
  handleLogin,
}: {
  handleLogin: (formData: FormData) => void;
}) {
  return (
    <form action={handleLogin}>
      <Input type="email" name="email" placeholder="이메일" />
      <Input type="password" name="password" placeholder="비밀번호" />
      <Button type="submit"></Button>
    </form>
  );
}

export default LoginForm;
