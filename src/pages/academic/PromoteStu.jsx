// import React, { useState } from "react";
import { useState } from "react";
const sessions = [
  "2016-17","2017-18","2018-19","2019-20",
  "2020-21","2021-22","2022-23","2023-24",
  "2024-25","2025-26","2026-27","2027-28",
  "2028-29","2029-30"
];

const classes = [
  "Nursery","LKG","UKG",
  "1","2","3","4","5","6","7","8","9","10"
];

const sections = ["A", "B", "C", "D"];


// ✅ THIS MUST BE OUTSIDE COMPONENT
const SelectBox = ({ value, onChange, options, placeholder }) => (
  <select
    className="border p-2 rounded w-full"
    value={value}
    onChange={(e) => onChange(e.target.value)}
  >
    <option value="">{placeholder}</option>
    {options.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ))}
  </select>
);


export default function PromoteStu() {
  const [current, setCurrent] = useState({
    session: "",
    class: "",
    section: ""
  });

  const [promoteTo, setPromoteTo] = useState({
    session: "",
    class: "",
    section: ""
  });

  const handleChange = (type, field, value) => {
    if (type === "current") {
      setCurrent({ ...current, [field]: value });
    } else {
      setPromoteTo({ ...promoteTo, [field]: value });
    }
  };

  const handleSubmit = () => {
    if (
      !current.class ||
      !current.section ||
      !current.session ||
      !promoteTo.class ||
      !promoteTo.section ||
      !promoteTo.session
    ) {
      alert("Please fill all fields");
      return;
    }

    console.log({ current, promoteTo });
    alert("Promotion data ready (check console)");
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md space-y-6">

      <h2 className="text-xl font-semibold">
        Promote Students In Next Session
      </h2>

      {/* CURRENT */}
      <div>
        <h3 className="font-medium text-gray-600 mb-2">Current</h3>
        <div className="grid grid-cols-3 gap-4">

          <SelectBox
            value={current.class}
            onChange={(v) => handleChange("current", "class", v)}
            options={classes}
            placeholder="Class"
          />

          <SelectBox
            value={current.section}
            onChange={(v) => handleChange("current", "section", v)}
            options={sections}
            placeholder="Section"
          />

          <SelectBox
            value={current.session}
            onChange={(v) => handleChange("current", "session", v)}
            options={sessions}
            placeholder="Session"
          />
        </div>
      </div>

      {/* PROMOTE TO */}
      <div>
        <h3 className="font-medium text-gray-600 mb-2">Promote To</h3>
        <div className="grid grid-cols-3 gap-4">

          <SelectBox
            value={promoteTo.class}
            onChange={(v) => handleChange("promote", "class", v)}
            options={classes}
            placeholder="Class"
          />

          <SelectBox
            value={promoteTo.section}
            onChange={(v) => handleChange("promote", "section", v)}
            options={sections}
            placeholder="Section"
          />

          <SelectBox
            value={promoteTo.session}
            onChange={(v) => handleChange("promote", "session", v)}
            options={sessions}
            placeholder="Session"
          />

        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded"
      >
        Search / Preview Promotion
      </button>

    </div>
  );
}