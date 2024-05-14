import React from "react";

export function LoginButton(onClick: any) {
  return <button onClick={() => onClick}>Login</button>;
}

export function LogoutButton(onClick: any) {
  return <button onClick={() => onClick}>Logout</button>;
}

export default function LoginControl(props: any) {
  const { isLoggedIn: isLoggedInInit } = props;
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(isLoggedInInit);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const button: any = !isLoggedIn ? (
    <LoginButton onClick={handleLogin} />
  ) : (
    <LogoutButton onClick={handleLogout} />
  );
  console.log({ isLoggedIn });
  return (
    <>
      <div>LoginControl</div>
      <>{button}</>
    </>
  );
}
