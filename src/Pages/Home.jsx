import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout> {/* Wrap with the Layout component */}
      <div className="container mx-auto px-4 py-12"> {/* Container for centering and padding */}
        <div className="text-center"> {/* Center the text */}
          <h1 className="text-5xl font-bold text-gray-800 mb-4"> {/* Large, bold heading */}
            Welcome to NVC Lounge!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Connect, share, and engage with others.
          </p>
          <NavLink
            to="/post" // Link to the /post route
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            View Posts
          </NavLink>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

