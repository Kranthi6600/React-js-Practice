import React from "react";
import GitHubUser from "./GitHubUser";
import UserDetails from "./UserDetails";

export default function App() {
  const username = "MoonHighway";

  return (
    <GitHubUser login={username}>
      {(data) => <UserDetails data={data} />}
    </GitHubUser>
  );
}
