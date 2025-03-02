import axios from "axios";
import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUserData = async () => {
    if (username.trim() === "") return;

    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setUserData(response.data);
    } catch (err) {
      setError("User not found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-600 via--600 to-gray-600 flex items-center justify-center">
      <div className="max-w-lg w-full p-8 bg-white rounded-2xl shadow-xl">
        <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-6">
          GitHub User Search
        </h1>

        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-4 w-3/4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
          />
          <button
            onClick={fetchUserData}
            className="ml-4 px-6 py-4 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all duration-200"
          >
            Search
          </button>
        </div>

        {loading && (
          <p className="text-center text-gray-500 text-lg">Loading...</p>
        )}

        {error && <p className="text-center text-red-500 text-lg">{error}</p>}

        {userData && (
          <div className="mt-8 text-center">
            <img
              src={userData.avatar_url}
              alt={userData.login}
              className="mx-auto w-40 h-40 rounded-full border-4 border-indigo-600 mb-6"
            />
            <h2 className="text-3xl font-bold text-gray-800">
              {userData.name || "No Name"}
            </h2>
            <p className="text-xl text-gray-600">@{userData.login}</p>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-indigo-600 hover:underline block text-lg"
            >
              View Profile
            </a>
            <p className="mt-4 text-gray-700">
              Followers: {userData.followers}
            </p>
            <p className="text-gray-700">
              Public Repos: {userData.public_repos}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
