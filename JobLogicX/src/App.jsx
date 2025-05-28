import { useState } from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";

const App = () => {
  const [jobs, setJobs] = useState([]);

  const addJob = (job) => {
    setJobs((prev) => [...prev, job]);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold text-blue-400 mb-3">Job Tracker App</h1>
      <JobForm onAddJob={addJob} />
   
    </div>
  );
};

export default App;
