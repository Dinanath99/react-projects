import React, { useState } from "react";
import data from "./data";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const SelectedQuestion = (getSelected) => {
    setSelected(getSelected === selected ? null : getSelected);
  };

  const HandleMultiSection = (currentId) => {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(currentId);

    if (findIndexOfCurrentId === -1) {
      // Add the current ID if it's not already in the list
      copyMultiple.push(currentId);
    } else {
      // Remove the current ID if it's already in the list
      copyMultiple.splice(findIndexOfCurrentId, 1);
    }

    setMultiple(copyMultiple);
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-red-400">
      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className="m-4 bg-gray-400 p-4 rounded-md cursor-pointer"
      >
        {enableMultiSelection
          ? "Disable Multi Selection"
          : "Enable Multi Selection"}
      </button>
      <div className="w-full max-w-[600px] bg-blue-400">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div
              className="bg-gray-400 p-4 mb-2 rounded-lg cursor-pointer"
              key={item.id}
              onClick={
                enableMultiSelection
                  ? () => HandleMultiSection(item.id)
                  : () => SelectedQuestion(item.id)
              }
            >
              <div className="flex justify-between items-center">
                <div>{item.question}</div>
                <span className="text-xl">
                  {enableMultiSelection
                    ? multiple.includes(item.id)
                      ? "-"
                      : "+"
                    : selected === item.id
                    ? "-"
                    : "+"}
                </span>
              </div>
              <div>
                {(enableMultiSelection
                  ? multiple.includes(item.id)
                  : selected === item.id) && (
                  <div className="mt-4 p-2 bg-gray-300 rounded-lg">
                    {item.answer}
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <>No data found</>
        )}
      </div>
    </div>
  );
};

export default Accordian;
