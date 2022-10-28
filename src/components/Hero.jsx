import { useState } from "react";

export default function Hero() {
  const [user, setUser] = useState();
  console.log({ user });

  const handleLogin = () => {
    setUser({ firstName: "Cass", email: "cass@bocacode.com", admin: true });
  };

  const handleLogout = () => {
    setUser();
  };

  if (!user) {
    return <button onClick={handleLogin}>Login</button>;
  }
  return (
    <>
      <h1>Hello {user.firstName}</h1>
      <button onClick={handleLogout}>Log out</button>
    </>
  );
}
