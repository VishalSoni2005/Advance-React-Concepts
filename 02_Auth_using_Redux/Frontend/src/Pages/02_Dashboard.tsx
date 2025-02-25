import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-[calc(100vh-80px)] p-4">
      <div className="container mx-auto my-4">
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Primary Column */}
          <div
            className="bg-white rounded-md shadow-md animate-pulse"
            style={{ height: 'calc(100vh - 80px)' }}
          ></div>

          {/* Secondary Column */}
          <div className="grid gap-4">
            {/* Full-width Section */}
            <div
              className="bg-white rounded-md shadow-md animate-pulse"
              style={{ height: 'calc((100vh - 80px) / 2 - 0.5rem)' }}
            ></div>

            {/* Two Equal-width Sections */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                className="bg-white rounded-md shadow-md animate-pulse"
                style={{ height: 'calc((100vh - 80px) / 2 - 0.5rem)' }}
              ></div>
              <div
                className="bg-white rounded-md shadow-md animate-pulse"
                style={{ height: 'calc((100vh - 80px) / 2 - 0.5rem)' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
