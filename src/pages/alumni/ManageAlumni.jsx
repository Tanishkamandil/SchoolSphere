import { useState } from "react";

export default function ManageAlumni() {

  const [searchAdmission, setSearchAdmission] =
    useState("");

  const [searchPassout, setSearchPassout] =
    useState("");

  const [searchClass, setSearchClass] =
    useState("");

  const [searchSection, setSearchSection] =
    useState("");

  const [searchSession, setSearchSession] =
    useState("");

  const [alumni] = useState([
    {
      id: 1,
      admissionNo: "ADM101",
      name: "Rahul Sharma",
      passoutSession: "2022-23",
      className: "12",
      section: "A",
      session: "2021-22",
    },

    {
      id: 2,
      admissionNo: "ADM102",
      name: "Priya Verma",
      passoutSession: "2023-24",
      className: "10",
      section: "B",
      session: "2022-23",
    },

    {
      id: 3,
      admissionNo: "ADM103",
      name: "Aman Singh",
      passoutSession: "2021-22",
      className: "8",
      section: "C",
      session: "2020-21",
    },
  ]);

  // FILTER
  const filteredAlumni = alumni.filter((item) => {

    return (
      item.admissionNo
        .toLowerCase()
        .includes(searchAdmission.toLowerCase()) &&

      (searchPassout === "" ||
        item.passoutSession === searchPassout) &&

      (searchClass === "" ||
        item.className === searchClass) &&

      (searchSection === "" ||
        item.section === searchSection) &&

      (searchSession === "" ||
        item.session === searchSession)
    );
  });

  return (
    <div className="p-6">

      <div className="bg-white rounded-xl shadow border">

        {/* HEADER */}
        <div className="p-4 border-b">
          <h2 className="text-2xl font-semibold">
            Manage Alumni
          </h2>
        </div>

        {/* FILTERS */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 border-b">

          {/* Admission No */}
          <input
            type="text"
            placeholder="Search Admission No"
            value={searchAdmission}
            onChange={(e) =>
              setSearchAdmission(e.target.value)
            }
            className="border rounded px-3 py-2"
          />

          {/* Passout Session */}
          <select
            value={searchPassout}
            onChange={(e) =>
              setSearchPassout(e.target.value)
            }
            className="border rounded px-3 py-2"
          >
            <option value="">
              Passout Session
            </option>

            <option value="2016-17">2016-17</option>
            <option value="2017-18">2017-18</option>
            <option value="2018-19">2018-19</option>
            <option value="2019-20">2019-20</option>
            <option value="2020-21">2020-21</option>
            <option value="2021-22">2021-22</option>
            <option value="2022-23">2022-23</option>
            <option value="2023-24">2023-24</option>
            <option value="2024-25">2024-25</option>
            <option value="2025-26">2025-26</option>
            <option value="2026-27">2026-27</option>
            <option value="2027-28">2027-28</option>
            <option value="2028-29">2028-29</option>
            <option value="2029-30">2029-30</option>

          </select>

          {/* Class */}
          <select
            value={searchClass}
            onChange={(e) =>
              setSearchClass(e.target.value)
            }
            className="border rounded px-3 py-2"
          >
            <option value="">
              Class
            </option>

            <option value="Nursery">
              Nursery
            </option>

            <option value="LKG">
              LKG
            </option>

            <option value="UKG">
              UKG
            </option>

            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>

          </select>

          {/* Section */}
          <select
            value={searchSection}
            onChange={(e) =>
              setSearchSection(e.target.value)
            }
            className="border rounded px-3 py-2"
          >
            <option value="">
              Section
            </option>

            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>

          </select>

          {/* Session */}
          <select
            value={searchSession}
            onChange={(e) =>
              setSearchSession(e.target.value)
            }
            className="border rounded px-3 py-2"
          >
            <option value="">
              Session
            </option>

            <option value="2016-17">2016-17</option>
            <option value="2017-18">2017-18</option>
            <option value="2018-19">2018-19</option>
            <option value="2019-20">2019-20</option>
            <option value="2020-21">2020-21</option>
            <option value="2021-22">2021-22</option>
            <option value="2022-23">2022-23</option>
            <option value="2023-24">2023-24</option>
            <option value="2024-25">2024-25</option>

          </select>

        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-100">

              <tr>

                <th className="p-3 border-b text-left">
                  Admission No
                </th>

                <th className="p-3 border-b text-left">
                  Name
                </th>

                <th className="p-3 border-b text-left">
                  Passout Session
                </th>

                <th className="p-3 border-b text-left">
                  Class
                </th>

                <th className="p-3 border-b text-left">
                  Section
                </th>

                <th className="p-3 border-b text-left">
                  Session
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredAlumni.length > 0 ? (

                filteredAlumni.map((item) => (

                  <tr key={item.id}>

                    <td className="p-3 border-b">
                      {item.admissionNo}
                    </td>

                    <td className="p-3 border-b">
                      {item.name}
                    </td>

                    <td className="p-3 border-b">
                      {item.passoutSession}
                    </td>

                    <td className="p-3 border-b">
                      {item.className}
                    </td>

                    <td className="p-3 border-b">
                      {item.section}
                    </td>

                    <td className="p-3 border-b">
                      {item.session}
                    </td>

                  </tr>
                ))

              ) : (

                <tr>

                  <td
                    colSpan="6"
                    className="p-4 text-center"
                  >
                    No Alumni Found
                  </td>

                </tr>
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}



