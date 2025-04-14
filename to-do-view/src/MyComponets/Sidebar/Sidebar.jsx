import React from "react";

const Sidebar = ({ setSelectedRoute }) => {
  const options = [
    {
      title: "My To-Do List",
      key: "todos",
      icon: "📝",
    },
    {
      title: "My Posts",
      key: "posts",
      icon: "💬",
    },
    {
      title: "My Albums",
      key: "albums",
      icon: "📷",
    },
    {
      title: "My Friends",
      key: "users",
      icon: "👥",
    },
  ];

  return (
    <div
      className="bg-light border-end p-3"
      style={{ width: "240px", minHeight: "100vh" }}
    >
      <h5 className="mb-4">Navigation</h5>
      <ul className="list-unstyled">
        {options.map((opt) => (
          <li key={opt.key} className="mb-3">
            <button
              className="btn btn-outline-primary w-100 text-start"
              onClick={() => setSelectedRoute(opt.key)}
            >
              {opt.icon} {opt.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
