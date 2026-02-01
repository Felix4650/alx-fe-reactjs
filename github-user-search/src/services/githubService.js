import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";
const TOKEN = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const searchUsersAdvanced = async (
  username,
  location,
  minRepos,
  page = 1
) => {
  let query = `${username}`;

  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const response = await axios.get(
    `${BASE_URL}?q=${query}&page=${page}&per_page=10`,
    {
      headers: TOKEN
        ? { Authorization: `token ${TOKEN}` }
        : {},
    }
  );

  return response.data;
};
