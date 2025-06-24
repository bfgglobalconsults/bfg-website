"use client";
import React, { useState } from 'react';
import { FiUser, FiBell, FiShield, FiCreditCard, FiSave, FiUpload } from 'react-icons/fi';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: <FiUser /> },
    { id: 'security', label: 'Security', icon: <FiShield /> },
    { id: 'notifications', label: 'Notifications', icon: <FiBell /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileSettings />;
      case 'security':
        return <SecuritySettings />;
      case 'notifications':
        return <NotificationSettings />;
      default:
        return null;
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Settings</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Tabs */}
        <aside className="w-full lg:w-1/4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <nav className="space-y-1">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition ${
                    activeTab === tab.id
                      ? 'bg-orange-100 text-[#E26015] font-semibold'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <main className="w-full lg:w-3/4">
          <div className="bg-white p-8 rounded-lg shadow-md">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

// --- Profile Settings Component ---
const ProfileSettings = () => {
    const [profile, setProfile] = useState({
        fullName: 'David Ukpo',
        email: 'david@bfg.com',
        jobTitle: 'Lead Developer',
        profilePicture: null
    });
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setProfile(prev => ({ ...prev, profilePicture: e.target.files[0] }));
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Profile Information</h2>
            <div className="flex items-center space-x-6 mb-8">
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                    {/* Placeholder for profile image */}
                    <FiUser size={48} className="text-gray-400" />
                </div>
                <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg text-sm flex items-center space-x-2">
                    <FiUpload />
                    <span>Upload Picture</span>
                    <input type="file" className="hidden" onChange={handleFileChange} />
                </label>
            </div>
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input type="text" name="fullName" value={profile.fullName} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E26015]" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input type="email" name="email" value={profile.email} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E26015]" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                    <input type="text" name="jobTitle" value={profile.jobTitle} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E26015]" />
                </div>
                <div className="flex justify-end pt-4">
                    <button type="submit" className="bg-[#E26015] hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-lg flex items-center space-x-2 transition">
                        <FiSave />
                        <span>Save Changes</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

// --- Security Settings Component ---
const SecuritySettings = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Security</h2>
      <div className="space-y-6">
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
            <input type="password" placeholder="••••••••" className="w-full md:w-2/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E26015]" />
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
            <input type="password" placeholder="••••••••" className="w-full md:w-2/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E26015]" />
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
            <input type="password" placeholder="••••••••" className="w-full md:w-2/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E26015]" />
        </div>
      </div>
      <div className="flex justify-end pt-8">
            <button className="bg-[#E26015] hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-lg flex items-center space-x-2 transition">
                <FiSave />
                <span>Update Password</span>
            </button>
        </div>
    </div>
  );
};

// --- Notification Settings Component ---
const NotificationSettings = () => {
    const [notifications, setNotifications] = useState({
        newLeaveRequest: true,
        statusUpdates: true,
        companyAnnouncements: false,
    });

    const handleToggle = (key) => {
        setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
    };
    
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Notifications</h2>
      <p className="text-gray-600 mb-8">Choose how you want to be notified.</p>
      <div className="space-y-6">
        <Toggle setting={notifications.newLeaveRequest} onToggle={() => handleToggle('newLeaveRequest')} title="New Leave Request" description="Get an email when an employee requests leave." />
        <Toggle setting={notifications.statusUpdates} onToggle={() => handleToggle('statusUpdates')} title="Status Updates" description="Get an email when a leave request is approved or rejected." />
        <Toggle setting={notifications.companyAnnouncements} onToggle={() => handleToggle('companyAnnouncements')} title="Company Announcements" description="Receive company-wide news and updates." />
      </div>
       <div className="flex justify-end pt-8">
            <button className="bg-[#E26015] hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-lg flex items-center space-x-2 transition">
                <FiSave />
                <span>Save Preferences</span>
            </button>
        </div>
    </div>
  );
};

const Toggle = ({ setting, onToggle, title, description }) => (
    <div className="flex items-center justify-between border-b pb-4">
        <div>
            <h3 className="text-lg font-medium text-gray-800">{title}</h3>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
        <button
            onClick={onToggle}
            className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${setting ? 'bg-[#E26015]' : 'bg-gray-200'}`}
        >
            <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${setting ? 'translate-x-6' : 'translate-x-1'}`}/>
        </button>
    </div>
);


export default SettingsPage;