"use client";

import React from "react";

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <p>Welcome to your dashboard!</p>
      <p>Here you can manage your account, view statistics, and more.</p>
      <ul>
        <li>
          <a href="/profile">Profile Settings</a>
        </li>
        <li>
          <a href="/statistics">View Statistics</a>
        </li>
        <li>
          <a href="/settings">Account Settings</a>
        </li>
      </ul>
      <p>
        <strong>Note:</strong> Your dashboard is personalized to show the most
        relevant information.
      </p>
    </div>
  );
};

export default DashboardPage;
