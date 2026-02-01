import { useState } from "react";
import { fetchUserData, searchUsersAdvanced } from "../services/githubService";

const Search = () => {
  const [form, setForm] = useState({
    username: "",
    location: "",
    repos: "",
  });

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      let data;
      if (!form.location && !form.repos) {
        // Task 1 path: only username
        data = await fetchUserData(form.username);
        setUsers([data]); // wrap in array to keep rendering consistent
      } else {
        // Task 2 path: advanced search
        data = await searchUsersAdvanced(
          form.username,
          form.location,
          form.repos
        );
        setUsers(data.items);
      }
    } catch {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="grid gap-2 md:grid-cols-3">
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="border p-2"
        />
        <input
          name="location"
          placeholder="Location"
          onChange={handleChange}
          className="border p-2"
        />
        <input
          name="repos"
          placeholder="Min Repos"
          type="number"
          onChange={handleChange}
          className="border p-2"
        />
        <button className="bg-black text-white p-2 md:col-span-3">
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      <div className="grid gap-4 mt-4">
        {users.map((user) => (
          <div key={user.id} className="border p-4 flex gap-4">
            <img src={user.avatar_url} className="w-16 rounded-full" />
            <div>
              <h3 className="font-bold">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;

