import React, { useState } from "react";
import { CalendarDays, Plus, Eye, Pencil, Trash2, X } from "lucide-react";

const Events = () => {
  // ================= DUMMY DATA =================
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Annual Function",
      eventFor: "All Alumni",
      classSection: "All",
      passOutSession: "2022",
      from: "10 Jun 2025",
      to: "12 Jun 2025",
      note: "Annual cultural function event.",
      notification: "All alumni are invited to attend the annual function.",
      photo:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=400",
    },
    {
      id: 2,
      title: "Sports Meet",
      eventFor: "Class 10 - A",
      classSection: "10 A",
      passOutSession: "2023",
      from: "15 Jul 2025",
      to: "17 Jul 2025",
      note: "Inter school sports meet.",
      notification: "Students should report by 8 AM in sports uniform.",
      photo:
        "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=400",
    },
  ]);

  // ================= STATES =================
  const [showModal, setShowModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);

  const [selectedEvent, setSelectedEvent] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    eventFor: "all",
    className: "",
    section: "",
    session: "",
    from: "",
    to: "",
    note: "",
    notification: "",
  });

  // ================= ADD EVENT =================
  const addEvent = () => {
    setFormData({
      title: "",
      eventFor: "all",
      className: "",
      section: "",
      session: "",
      from: "",
      to: "",
      note: "",
      notification: "",
    });

    setShowModal(true);
  };

  // ================= SAVE EVENT =================
  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      id: Date.now(),
      title: formData.title,
      eventFor:
        formData.eventFor === "all"
          ? "All Alumni"
          : `${formData.className} ${formData.section}`,
      classSection:
        formData.eventFor === "all"
          ? "All"
          : `${formData.className} ${formData.section}`,
      passOutSession: formData.session,
      from: formData.from,
      to: formData.to,
      note: formData.note,
      notification: formData.notification,
      photo:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=400",
    };

    setEvents([...events, newEvent]);

    setShowModal(false);
  };

  // ================= VIEW EVENT =================
  const viewEvent = (event) => {
    setSelectedEvent(event);
    setViewModal(true);
  };

  // ================= DELETE EVENT =================
  const deleteEvent = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");

    if (confirmDelete) {
      setEvents(events.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Events Management
          </h1>

          <p className="text-slate-500 mt-1">Manage school alumni events</p>
        </div>

        <button
          onClick={addEvent}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl flex items-center gap-2 transition-all"
        >
          <Plus size={18} />
          Add Event
        </button>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* CALENDAR */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-5">
            <CalendarDays className="text-blue-600" />
            <h2 className="text-xl font-semibold text-slate-800">
              Event Calendar
            </h2>
          </div>

          <div className="h-[500px] border-2 border-dashed border-slate-300 rounded-2xl flex items-center justify-center text-slate-400">
            Full Calendar Component Here
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 overflow-hidden">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-semibold text-slate-800">Event List</h2>
          </div>

          <div className="overflow-auto">
            <table className="w-full min-w-[850px]">
              <thead>
                <tr className="border-b border-slate-200 text-left">
                  <th className="pb-4 text-sm font-semibold text-slate-600">
                    Event Title
                  </th>

                  <th className="pb-4 text-sm font-semibold text-slate-600">
                    Class / Section
                  </th>

                  <th className="pb-4 text-sm font-semibold text-slate-600">
                    Pass Out Session
                  </th>

                  <th className="pb-4 text-sm font-semibold text-slate-600">
                    From
                  </th>

                  <th className="pb-4 text-sm font-semibold text-slate-600">
                    To
                  </th>

                  <th className="pb-4 text-sm font-semibold text-slate-600">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {events.map((event) => (
                  <tr
                    key={event.id}
                    className="border-b border-slate-100 hover:bg-slate-50 transition-all"
                  >
                    <td className="py-4 font-medium text-slate-700">
                      {event.title}
                    </td>

                    <td className="py-4 text-slate-600">
                      {event.classSection}
                    </td>

                    <td className="py-4 text-slate-600">
                      {event.passOutSession}
                    </td>

                    <td className="py-4 text-slate-600">{event.from}</td>

                    <td className="py-4 text-slate-600">{event.to}</td>

                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => viewEvent(event)}
                          className="p-2 rounded-lg bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-600 transition-all"
                        >
                          <Eye size={16} />
                        </button>

                        <button className="p-2 rounded-lg bg-slate-100 hover:bg-green-100 text-slate-700 hover:text-green-600 transition-all">
                          <Pencil size={16} />
                        </button>

                        <button
                          onClick={() => deleteEvent(event.id)}
                          className="p-2 rounded-lg bg-slate-100 hover:bg-red-100 text-slate-700 hover:text-red-600 transition-all"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ================= ADD EVENT MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden">
            {/* HEADER */}
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
              <h2 className="text-2xl font-bold text-slate-800">Add Event</h2>

              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-slate-100 rounded-xl"
              >
                <X size={20} />
              </button>
            </div>

            {/* BODY */}
            <form
              onSubmit={handleSubmit}
              className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              {/* EVENT FOR */}
              <div className="md:col-span-2">
                <label className="font-medium text-slate-700">Event For</label>

                <div className="flex gap-6 mt-3">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="eventFor"
                      value="all"
                      checked={formData.eventFor === "all"}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          eventFor: e.target.value,
                        })
                      }
                    />
                    All Alumni
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="eventFor"
                      value="class"
                      checked={formData.eventFor === "class"}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          eventFor: e.target.value,
                        })
                      }
                    />
                    Class
                  </label>
                </div>
              </div>

              {/* CONDITIONAL FIELDS */}
              {formData.eventFor === "class" && (
                <>
                  <div>
                    <label className="text-sm font-medium text-slate-700">
                      Pass Out Session
                    </label>

                    <input
                      type="text"
                      placeholder="2025"
                      className="w-full mt-2 border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                      value={formData.session}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          session: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700">
                      Class
                    </label>

                    <input
                      type="text"
                      placeholder="Class 10"
                      className="w-full mt-2 border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                      value={formData.className}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          className: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700">
                      Section
                    </label>

                    <input
                      type="text"
                      placeholder="A"
                      className="w-full mt-2 border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                      value={formData.section}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          section: e.target.value,
                        })
                      }
                    />
                  </div>
                </>
              )}

              {/* TITLE */}
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-slate-700">
                  Event Title
                </label>

                <input
                  type="text"
                  className="w-full mt-2 border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      title: e.target.value,
                    })
                  }
                />
              </div>

              {/* DATES */}
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Event From Date
                </label>

                <input
                  type="date"
                  className="w-full mt-2 border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                  value={formData.from}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      from: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">
                  Event To Date
                </label>

                <input
                  type="date"
                  className="w-full mt-2 border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                  value={formData.to}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      to: e.target.value,
                    })
                  }
                />
              </div>

              {/* PHOTO */}
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-slate-700">
                  Photo
                </label>

                <input
                  type="file"
                  className="w-full mt-2 border border-slate-300 rounded-xl px-4 py-3"
                />
              </div>

              {/* NOTE */}
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-slate-700">
                  Note
                </label>

                <textarea
                  rows="4"
                  className="w-full mt-2 border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                  value={formData.note}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      note: e.target.value,
                    })
                  }
                ></textarea>
              </div>

              {/* NOTIFICATION */}
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-slate-700">
                  Event Notification Message
                </label>

                <textarea
                  rows="4"
                  className="w-full mt-2 border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                  value={formData.notification}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      notification: e.target.value,
                    })
                  }
                ></textarea>
              </div>

              {/* FOOTER */}
              <div className="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all"
                >
                  Save Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= VIEW MODAL ================= */}
      {viewModal && selectedEvent && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden">
            {/* HEADER */}
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
              <h2 className="text-2xl font-bold text-slate-800">
                Event Description
              </h2>

              <button
                onClick={() => setViewModal(false)}
                className="p-2 hover:bg-slate-100 rounded-xl"
              >
                <X size={20} />
              </button>
            </div>

            {/* BODY */}
            <div className="p-6">
              <div className="flex items-start gap-5">
                <img
                  src={selectedEvent.photo}
                  alt=""
                  className="w-28 h-28 rounded-2xl object-cover"
                />

                <div>
                  <h3 className="text-2xl font-bold text-slate-800">
                    {selectedEvent.title}
                  </h3>

                  <p className="text-slate-500 mt-2">
                    {selectedEvent.from} - {selectedEvent.to}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-slate-800 mb-2">Note</h4>

                <p className="text-slate-600 leading-relaxed">
                  {selectedEvent.note}
                </p>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-slate-800 mb-2">
                  Event Notification Message
                </h4>

                <p className="text-slate-600 leading-relaxed">
                  {selectedEvent.notification}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
