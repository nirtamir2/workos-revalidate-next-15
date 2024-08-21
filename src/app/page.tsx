import { getUser } from "@workos-inc/authkit-nextjs";
import { LoginForm } from "./LoginForm";
import { LogoutForm } from "./LogoutForm";

export default async function Home() {
  const user = await getUser();
  const isLoggedIn = user.user != null;

  if (isLoggedIn) {
    return <div>
    <div>Logged in as {user.user.email}</div>
    <LogoutForm/>
    </div>
  }

  return <LoginForm />;
}
