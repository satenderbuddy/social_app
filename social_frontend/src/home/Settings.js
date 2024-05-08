import React from 'react';

function Settings() {
  return (
    <div>
      <h2>Settings</h2>
      <p>This is the settings page.</p>
      <div>
        <h3>General Settings</h3>
        <ul>
          <li>Account</li>
          <li>Privacy</li>
          <li>Notifications</li>
          <li>Security</li>
        </ul>
      </div>
      <div>
        <h3>Appearance</h3>
        <ul>
          <li>Theme</li>
          <li>Font Size</li>
          <li>Language</li>
        </ul>
      </div>
    </div>
  );
}

export default Settings;
