import axios from "axios";

const USER_BASE_URL = "https://api.github.com/users";
const SEARCH_BASE_URL = "https://api.github.com/search/users";
const TOKEN = import.meta.env.VITE_APP_GITHUB_API_KEY;

// Task 1: simple fetch by username
export const fetchUserData = async (username) => {
  const response = await axios.get(`${USER_BASE_URL}/${username}`, {
    headers: TOKEN ? { Authorization: `token ${TOKEN}` } : {},
  });
  return response.data;
};

// Task 2: advanced search (keep this)//
export const searchUsersAdvanced = async (username, location, minRepos, page = 1) => {
  let query = `${username}`;
  if (location) query += `+location:${location}`;  
  if (minRepos) query += `+repos:>=${minRepos}`; 

  const response = await axios.get(
    `https://api.github.com/search/users?q=${query}&page=${page}&per_page=10`,
    {
      headers: TOKEN ? { Authorization: `token ${TOKEN}` } : {},
    }
  );

  return response.data;
};


