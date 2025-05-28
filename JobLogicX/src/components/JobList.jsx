const JobList = ({ jobs, toggleStatus, deleteJobs }) => {
  return (
    <ul className="space-y-4 w-full max-w-md">
      {jobs.length === 0 ? (
        <p className="text-center text-gray-500">No jobs available</p>
      ) : (
        jobs.map((job) => (
          <li
            key={job.id}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold">J{job.position}</h3>
              <p className="text-sm text-gray-600">{job.company}</p>
              <p
                className={`text-sm mt-1 font-meidum ${
                  job.status === "applied"
                    ? "text-green-600"
                    : "text-yellow-600"
                }`}
              >
                Status:{job.status}
              </p>
            </div>
            
          </li>
        ))
      )}
    </ul>
  );
};

export default JobList;
