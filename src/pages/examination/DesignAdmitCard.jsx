// src/pages/examination/DesignAdmitCard.jsx
import React, { useState } from "react";

const DesignAdmitCard = () => {
  const [formData, setFormData] = useState({
    template: "",
    heading: "",
    title: "",
    examName: "",
    schoolName: "",
    examCenter: "",
    footerText: "",

    name: false,
    fatherName: false,
    motherName: false,
    dob: false,
    admissionNo: false,
    rollNumber: false,
    address: false,
    gender: false,
    photo: false,
    class: false,
    section: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    alert("Admit Card Saved Successfully");
  };

  return (
    <div className="p-4 bg-light min-vh-100">
      <div className="row">
        {/* LEFT SIDE */}
        <div className="col-md-5">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h3 className="mb-4">Add Admit Card</h3>

              <form onSubmit={handleSubmit}>
                {/* Template */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Template <span className="text-danger">*</span>
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="template"
                    value={formData.template}
                    onChange={handleChange}
                  />

                  {!formData.template && (
                    <small className="text-danger">
                      The Template field is required.
                    </small>
                  )}
                </div>

                {/* Heading */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Heading</label>

                  <input
                    type="text"
                    className="form-control"
                    name="heading"
                    value={formData.heading}
                    onChange={handleChange}
                  />
                </div>

                {/* Title */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Title</label>

                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>

                {/* Exam Name */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Exam Name</label>

                  <input
                    type="text"
                    className="form-control"
                    name="examName"
                    value={formData.examName}
                    onChange={handleChange}
                  />
                </div>

                {/* School Name */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    School Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleChange}
                  />
                </div>

                {/* Exam Center */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Exam Center
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="examCenter"
                    value={formData.examCenter}
                    onChange={handleChange}
                  />
                </div>

                {/* Footer */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Footer Text
                  </label>

                  <textarea
                    className="form-control"
                    rows="3"
                    name="footerText"
                    value={formData.footerText}
                    onChange={handleChange}
                  />
                </div>

                {/* Uploads */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Left Logo</label>

                  <input type="file" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Right Logo</label>

                  <input type="file" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Sign</label>

                  <input type="file" className="form-control" />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Background Image
                  </label>

                  <input type="file" className="form-control" />
                </div>

                {/* SWITCHES */}
                <div className="row">
                  {[
                    ["name", "Name"],
                    ["fatherName", "Father Name"],
                    ["motherName", "Mother Name"],
                    ["dob", "Date Of Birth"],
                    ["admissionNo", "Admission No"],
                    ["rollNumber", "Roll Number"],
                    ["address", "Address"],
                    ["gender", "Gender"],
                    ["photo", "Photo"],
                    ["class", "Class"],
                    ["section", "Section"],
                  ].map(([key, label]) => (
                    <div
                      className="col-md-6 mb-3 d-flex justify-content-between align-items-center"
                      key={key}
                    >
                      <label className="fw-semibold">{label}</label>

                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name={key}
                          checked={formData[key]}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <button className="btn btn-secondary w-100">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-7">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3>Admit Card List</h3>

                <input
                  type="text"
                  placeholder="Search..."
                  className="form-control w-50"
                />
              </div>

              <div className="table-responsive">
                <table className="table table-bordered align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Certificate Name</th>
                      <th>Background Image</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Sample Admit Card</td>

                      <td>
                        <img
                          src="https://via.placeholder.com/60x40"
                          alt="bg"
                        />
                      </td>

                      <td>
                        <button className="btn btn-sm btn-primary me-2">
                          Edit
                        </button>

                        <button className="btn btn-sm btn-danger">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-muted">Records: 1 to 1 of 1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignAdmitCard;