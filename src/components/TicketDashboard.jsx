// TicketDashboard.jsx
// React + Tailwind component that reproduces the provided design and implements
// the required functionality:
// - Banner with In-Progress & Resolved counts
// - Left: 2-column grid of ticket cards (10-15 sample tickets in JSON)
// - Right: Task Status (click a card -> adds ticket to Task Status, alert, In-Progress++)
// - Complete button in Task Status (click -> alert, mark Resolved, update counts)
// Usage: drop this file into a Create-React-App / Vite React project with Tailwind configured.
// Import and render: import TicketDashboard from './TicketDashboard'; <TicketDashboard />

import React, { useState } from "react";

const initialTickets = [
  {
    id: 2,
    title: "Payment Failed - Card Declined",
    description:
      "Customer attempted to pay using Visa ending 1234 but the payment keeps failing.",
    customer: "Abidul Islam Abid",
    priority: "HIGH",
    status: "Open",
    createdAt: "2025-09-19",
  },
  {
    id: 3,
    title: "Unable to Download Invoice",
    description:
      "Customer cannot download their January invoice from the billing section.",
    customer: "Abidul Islam Abid",
    priority: "MEDIUM",
    status: "Open",
    createdAt: "2025-09-21",
  },
  {
    id: 4,
    title: "Incorrect Billing Address",
    description: "Billing address shows a different city, needs correction.",
    customer: "Emily Davis",
    priority: "LOW",
    status: "Open",
    createdAt: "2025-09-18",
  },
  {
    id: 5,
    title: "App Crash on Launch",
    description: "App crashes immediately on opening for Android 11 devices.",
    customer: "Abidul Islam Abid",
    priority: "HIGH",
    status: "Open",
    createdAt: "2025-09-15",
  },

  {
    id: 7,
    title: "Two-Factor Authentication Issue",
    description:
      "Customer is not receiving 2FA codes on their registered phone number.",
    customer: "Abidul Islam Abid",
    priority: "HIGH",
    status: "Open",
    createdAt: "2025-09-08",
  },
  {
    id: 8,
    title: "Unable to Update Profile Picture",
    description: "Profile picture upload fails with a 500 error.",
    customer: "Abidul Islam Abid",
    priority: "LOW",
    status: "Open",
    createdAt: "2025-09-14",
  },
  {
    id: 9,
    title: "Subscription Auto-Renewal",
    description:
      "Customer wants to disable auto-renew for their subscription but toggle is disabled.",
    customer: "Abidul Islam Abid",
    priority: "MEDIUM",
    status: "Open",
    createdAt: "2025-09-12",
  },
  {
    id: 10,
    title: "Missing Order Confirmation Email",
    description:
      "Customer placed an order but did not receive an order confirmation email.",
    customer: "Abidul Islam Abid",
    priority: "MEDIUM",
    status: "Open",
    createdAt: "2025-09-16",
  },
  {
    id: 11,
    title: "Feature Request - Dark Mode",
    description: "Customer requests a dark mode for the web dashboard.",
    customer: "Abidul Islam Abid",
    priority: "LOW",
    status: "Open",
    createdAt: "2025-09-11",
  },
  {
    id: 12,
    title: "Incorrect Tax Calculation",
    description:
      "Tax calculated is higher than expected for VAT-registered customers.",
    customer: "Abidul Islam Abid",
    priority: "HIGH",
    status: "Open",
    createdAt: "2025-09-17",
  },
];

export default function TicketDashboard() {
  const [tickets, setTickets] = useState(initialTickets);

  const inProgressCount = tickets.filter(
    (t) => t.status === "In Progress"
  ).length;
  const resolvedCount = tickets.filter((t) => t.status === "Resolved").length;

  const handleCardClick = (ticketId) => {
    const ticket = tickets.find((t) => t.id === ticketId);
    if (!ticket) return;
    if (ticket.status === "Resolved") {
      window.alert("This Ticket has been already finished.");
      return;
    }
    if (ticket.status === "In Progress") {
      window.alert("This ticket is in Task Status");
      return;
    }

    setTickets((prev) =>
      prev.map((t) => (t.id === ticketId ? { ...t, status: "In Progress" } : t))
    );
    window.alert(`${ticket.title} added to the task section.`);
  };

  const handleComplete = (ticketId) => {
    const ticket = tickets.find((t) => t.id === ticketId);
    if (!ticket) return;
    // Mark resolved
    setTickets((prev) =>
      prev.map((t) => (t.id === ticketId ? { ...t, status: "Resolved" } : t))
    );
    window.alert(`${ticket.title} Done`);
  };

  const inProgressTickets = tickets.filter((t) => t.status === "In Progress");

  const priorityBadge = (p) => {
    if (p === "HIGH") return "bg-red-100 text-red-700";
    if (p === "MEDIUM") return "bg-yellow-100 text-yellow-700";
    return "bg-green-100 text-green-700";
  };

  const statusBadge = (s) => {
    if (s === "Open") return "bg-green-300 text-gray-700";
    if (s === "In Progress") return "bg-indigo-100 text-indigo-700";
    return "bg-green-100 text-green-700";
  };


    return (
  // Outer wrapper: horizontally + vertically center everything
  <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
    {/* Inner container: max width and full width inside it */}
    <div className="w-full max-w-6xl">
      {/* Banner */}
      <div className="rounded-xl overflow-hidden shadow-lg mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className="p-8 text-white flex flex-col items-center justify-center text-center min-h-[140px] rounded"
            style={{
              background: "linear-gradient(90deg,#7c3aed,#6366f1)" // or bg-gradient-to-r from-purple-500 to-indigo-500
            }}
          >
            <div className="text-sm opacity-80">In-Progress</div>
            <div className="text-5xl font-semibold mt-4">{inProgressCount}</div>
          </div>

          <div
            className="p-8 text-white flex flex-col items-center justify-center text-center min-h-[140px] rounded"
            style={{
              background: "linear-gradient(90deg,#34d399,#10b981)" // or bg-gradient-to-r from-green-400 to-emerald-500
            }}
          >
            <div className="text-sm opacity-80">Resolved</div>
            <div className="text-5xl font-semibold mt-4">{resolvedCount}</div>
          </div>
        </div>
      </div>

      {/* Main section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Tickets list (2-column grid inside) */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Customer Tickets</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tickets.map((ticket) => (
                <div
                  key={ticket.id}
                  onClick={() => handleCardClick(ticket.id)}
                  className="cursor-pointer border border-dashed border-blue-100 rounded-lg p-4 hover:shadow-lg transition-shadow bg-white"
                >
                  <div className="flex items-start justify-between">
                    <h4 className="text-sm font-semibold">{ticket.title}</h4>
                    <span
                      className={`text-sm px-2 py-1 rounded-full ${statusBadge(ticket.status)}`}
                    >
                      {ticket.status}
                    </span>
                  </div>

                  <p className="text-xs text-gray-600 mt-2 h-14 overflow-hidden">
                    {ticket.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    {/* ID and customer with gap */}
                    <div className="text-xs text-gray-500 flex items-center gap-4">
                      <span>#{ticket.id}</span>
                      <span>{ticket.customer}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${priorityBadge(ticket.priority)}`}>
                        {ticket.priority}
                      </span>
                      <div className="text-xs text-gray-400">
                        <span className="mr-1">📅</span> {ticket.createdAt}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Task Status */}
        <div>
          <div className="bg-white rounded-xl p-6 shadow-md h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Task Status</h3>
            </div>

            {inProgressTickets.length === 0 ? (
              <div className="text-sm text-gray-500">No tasks in progress yet.</div>
            ) : (
              <div className="space-y-4">
                {inProgressTickets.map((t) => (
                  <div
                    key={t.id}
                    className="p-3 bg-white shadow-2xl rounded-lg flex items-center justify-between"
                  >
                    <div>
                      <div className="text-sm font-medium">{t.title}</div>
                      <div className="text-xs text-gray-500">#{t.id} • {t.customer}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleComplete(t.id)}
                        className="text-sm px-3 py-1 rounded-lg bg-green-600 text-white"
                      >
                        Complete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
)
}
