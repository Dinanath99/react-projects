import { useState } from "react";

const JobForm = ({ onAddJob }) => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const handleSubmit = (e) => {
    if (!company || !position) return;
    onAddJob({
      id: Date.now(),
      company,
      position,
      status: "pending",
    });
    setCompany("");
    setPosition("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded mb-6 w-full max-w-md"
    >
      <h2 className="text-xl font-semibold mb-4">Add a job</h2>
      <input
        type="text"
        value={company}
        placeholder="Enter company Name"
        onChange={(e) => setCompany(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      />
      <input
        type="text"
        value={position}
        placeholder="Enter job position"
        onChange={(e) => setPosition(e.target.value)}
        className="border p-2 mb-2 rounded w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 cursor-pointer"
      >
        add job
      </button>
    </form>
  );
};

export default JobForm;
