import { useState } from "react";

const initialEvents = [
  {
    id: 1,
    title: "Independence Day",
    classSection: "All",
    session: "2026",
    from: "2026-08-15",
    to: "2026-08-15",
  },
  {
    id: 2,
    title: "Republic Day",
    classSection: "All",
    session: "2026",
    from: "2026-01-26",
    to: "2026-01-26",
  },
];

export default function Events() {
  const [events, setEvents] = useState(initialEvents);

  const [formData, setFormData] = useState({
    title: "",
    classSection: "",
    session: "",
    from: "",
    to: "",
  });

  const [showModal, setShowModal] = useState(false);

  // Current Date
  const today = new Date();

  const month = today.toLocaleString("default", {
    month: "long",
  });

  const year = today.getFullYear();

  // Total days
  const daysInMonth = new Date(
    year,
    today.getMonth() + 1,
    0
  ).getDate();

  // First day
  const firstDay = new Date(
    year,
    today.getMonth(),
    1
  ).getDay();

  // Change input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Save Event
  const handleSave = () => {
    if (
      !formData.title ||
      !formData.classSection ||
      !formData.session ||
      !formData.from ||
      !formData.to
    ) {
      alert("Please fill all fields");
      return;
    }

    const newEvent = {
      id: Date.now(),
      ...formData,
    };

    setEvents([...events, newEvent]);

    setFormData({
      title: "",
      classSection: "",
      session: "",
      from: "",
      to: "",
    });

    setShowModal(false);
  };

  // Delete
  const handleDelete = (id) => {
    setEvents(events.filter((item) => item.id !== id));
  };

  // Calendar cells
  const calendarCells = [];

  for (let i = 0; i < firstDay; i++) {
    calendarCells.push(
      <div
        key={`empty-${i}`}
        className="h-28 border bg-gray-50"
      />
    );
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarCells.push(
      <div
        key={day}
        className="h-28 border p-2 bg-white hover:bg-yellow-50"
      >
        <div className="text-gray-700 text-sm">
          {day}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* LEFT CALENDAR */}
        <div className="bg-white border rounded shadow">

          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">

            <div className="flex gap-2">
              <button className="bg-gray-600 text-white px-3 py-1 rounded">
                ◀
              </button>

              <button className="bg-gray-600 text-white px-3 py-1 rounded">
                ▶
              </button>
            </div>

            <h2 className="text-3xl font-medium">
              {month} {year}
            </h2>

            <div />
          </div>

          {/* Days */}
          <div className="grid grid-cols-7 text-center bg-gray-100 font-medium">

            <div className="p-3 border">Mon</div>
            <div className="p-3 border">Tue</div>
            <div className="p-3 border">Wed</div>
            <div className="p-3 border">Thu</div>
            <div className="p-3 border">Fri</div>
            <div className="p-3 border">Sat</div>
            <div className="p-3 border">Sun</div>

          </div>

          {/* Calendar */}
          <div className="grid grid-cols-7">
            {calendarCells}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white border rounded shadow overflow-hidden">

          {/* Top */}
          <div className="flex items-center justify-between p-4 border-b">

            <h2 className="text-2xl font-semibold">
              Event List
            </h2>

            <button
              onClick={() => setShowModal(true)}
              className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
            >
              Add Event
            </button>

          </div>

          {/* Search */}
          <div className="p-4 border-b">

            <input
              type="text"
              placeholder="Search..."
              className="w-full border rounded px-3 py-2 outline-none"
            />

          </div>

          {/* Table */}
          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-3 text-left border-b">
                    Event Title
                  </th>

                  <th className="p-3 text-left border-b">
                    Class Section
                  </th>

                  <th className="p-3 text-left border-b">
                    Pass Out Session
                  </th>

                  <th className="p-3 text-left border-b">
                    From
                  </th>

                  <th className="p-3 text-left border-b">
                    To
                  </th>

                  <th className="p-3 text-left border-b">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {events.map((event) => (
                  <tr
                    key={event.id}
                    className="hover:bg-gray-50"
                  >

                    <td className="p-3 border-b">
                      {event.title}
                    </td>

                    <td className="p-3 border-b">
                      {event.classSection}
                    </td>

                    <td className="p-3 border-b">
                      {event.session}
                    </td>

                    <td className="p-3 border-b">
                      {event.from}
                    </td>

                    <td className="p-3 border-b">
                      {event.to}
                    </td>

                    <td className="p-3 border-b">
                      <button
                        onClick={() =>
                          handleDelete(event.id)
                        }
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white rounded-xl w-full max-w-lg p-6 space-y-4">

            <h2 className="text-2xl font-semibold">
              Add Event
            </h2>

            <input
              type="text"
              name="title"
              placeholder="Event Title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />

            <input
              type="text"
              name="classSection"
              placeholder="Class Section"
              value={formData.classSection}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />

            <input
              type="text"
              name="session"
              placeholder="Pass Out Session"
              value={formData.session}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />

            <div className="grid grid-cols-2 gap-4">

              <input
                type="date"
                name="from"
                value={formData.from}
                onChange={handleChange}
                className="border rounded px-3 py-2"
              />

              <input
                type="date"
                name="to"
                value={formData.to}
                onChange={handleChange}
                className="border rounded px-3 py-2"
              />

            </div>

            <div className="flex justify-end gap-3 pt-2">

              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleSave}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded"
              >
                Save Event
              </button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}