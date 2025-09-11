"use client";
import React, { useState, useEffect } from 'react';
import { logUserInfo } from '@/utils/roleUtils';

const DebugUserInfo = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [showDebug, setShowDebug] = useState(false);

  useEffect(() => {
    const info = logUserInfo();
    setUserInfo(info);
  }, []);

  if (!showDebug) {
    return (
      <button
        onClick={() => setShowDebug(true)}
        className="fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-full shadow-lg z-50"
        title="Show Debug Info"
      >
        🐛
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-50 max-w-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-gray-800">Debug Info</h3>
        <button
          onClick={() => setShowDebug(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
      
      {userInfo && (
        <div className="text-sm space-y-1">
          <div><strong>Role:</strong> {userInfo.role}</div>
          <div><strong>Is Admin:</strong> {userInfo.isAdmin ? 'Yes' : 'No'}</div>
          <div><strong>Has Token:</strong> {userInfo.hasToken ? 'Yes' : 'No'}</div>
          <div><strong>User ID:</strong> {userInfo.user?._id || 'N/A'}</div>
          <div><strong>Email:</strong> {userInfo.user?.email || 'N/A'}</div>
        </div>
      )}
      
      <button
        onClick={() => {
          const newInfo = logUserInfo();
          setUserInfo(newInfo);
        }}
        className="mt-2 text-xs bg-blue-500 text-white px-2 py-1 rounded"
      >
        Refresh
      </button>
    </div>
  );
};

export default DebugUserInfo;

