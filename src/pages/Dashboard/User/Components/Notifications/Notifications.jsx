import React, { useState, useEffect } from "react";
import "./notifications.css";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setNotifications(data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, []);

  return (
    <div className="notifications">
      <div className="notification-header">
        <h4>Notifications</h4>
      </div>
      <div className="notification-body">
        {notifications.map((notification) => (
          <p key={notification.id}>{notification.title}</p>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
