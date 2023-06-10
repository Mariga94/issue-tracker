import { FC, useState } from "react";
import "./Notifications.css";

interface Notification {
  id: string;
  text: string;
  status: "new" | "cleared";
}

const NotificationsPage: FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id:'1',
      text: 'Add button',
      status: "new"
    },
    {
      id:'2',
      text: 'Add Navbar',
      status: "new"
    },
    {
      id:'3',
      text: 'style Footer',
      status: "cleared"
    }
  ]);
  const [selectedTab, setSelectedTab] = useState<"new" | "cleared">("new");


  const handleClickSelectedTab = (tab: "new" | "cleared") => {
    setSelectedTab(tab);
  };

  const filteredNotifications = notifications.filter(
    (notification) => notification.status === selectedTab
  );
  return (
    <div className="container">
      <div className="notifications">
        <div>
          <h2 className="page-title">Notifications</h2>
          <div className="notif-nav">
            <span
              className={`page-title ${
                selectedTab === "new" ? "nav-selected" : ""
              }`}
              onClick={() => handleClickSelectedTab("new")}
            >
              New
            </span>
            <span
              className={`page-title ${
                selectedTab === "cleared" ? "nav-selected" : ""
              }`}
              onClick={() => handleClickSelectedTab("cleared")}
            >
              Cleared
            </span>
          </div>
          <div className="notif-content">
            {filteredNotifications.length === 0 ? (
              <p>No notifications to display.</p>
            ) : (
              <ul>
                {filteredNotifications.map((notification) => (
                  <li key={notification.id}>{notification.text}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
