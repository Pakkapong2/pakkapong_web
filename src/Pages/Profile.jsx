// Profile.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import Layout from '../components/Layout'; // Import the Layout component

const Profile = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">User Profile</h2>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Name:</label>
            <p className="text-gray-800">John Doe</p> {/* Static name */}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Email:</label>
            <p className="text-gray-800">john.doe@example.com</p> {/* Static email */}
          </div>
          <Link
            to="/change-password" // Link to the change password page
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Change Password
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;