import { useState, useEffect } from "react";

const loadJSON = key =>
  key && JSON.parse(localStorage.getItem(key));

const saveJSON = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));

export default function GitHubUser({ login, children }) {
  const [data, setData] = useState(loadJSON(`user:${login}`));

  useEffect(() => {
  if (!login) return;
  if (data && data.login === login) return;

  fetch(`https://api.github.com/users/${login}`)
    .then(res => res.json())
    .then(setData)
    .catch(console.error);
}, [login, data]);

  useEffect(() => {
    if (!data || !login) return;

    const { name, avatar_url, location } = data;
    saveJSON(`user:${login}`, {
      name,
      login,
      avatar_url,
      location
    });
  }, [data, login]);

  if (!data) return <p>Loading user...</p>;

  return children(data);
}
