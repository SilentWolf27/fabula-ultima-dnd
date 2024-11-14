import { loginAction } from "@/actions/auth/auth";

export const LoginForm = () => {
  return (
    <form action={loginAction}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <div>
          <input type="password" id="password" name="password" />
          <button type="button">Show</button>
        </div>
      </div>

      <button type="submit">Login</button>
    </form>
  );
};
