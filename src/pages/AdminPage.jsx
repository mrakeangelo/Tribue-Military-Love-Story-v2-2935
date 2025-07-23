import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowLeft, FiUpload, FiSave, FiTrash2, FiEdit, FiPlus, FiImage, FiMail, FiCalendar } = FiIcons;

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('timeline');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, this would authenticate with Supabase
    if (loginForm.email && loginForm.password) {
      setIsAuthenticated(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-navy-800 flex items-center justify-center px-4">
        <motion.div
          className="bg-seafoam-50 rounded-2xl p-8 max-w-md w-full shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-gold-800 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <SafeIcon icon={FiEdit} className="text-seafoam-50 text-2xl" />
            </div>
            <h1 className="font-serif text-3xl text-navy-800 mb-2">Admin Access</h1>
            <p className="font-body text-ink-600">Login to manage your love story</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block font-body text-sm font-medium text-ink-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={loginForm.email}
                onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                className="w-full px-4 py-3 border border-ink-300 rounded-lg focus:ring-2 focus:ring-gold-800 focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block font-body text-sm font-medium text-ink-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                className="w-full px-4 py-3 border border-ink-300 rounded-lg focus:ring-2 focus:ring-gold-800 focus:border-transparent"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gold-800 to-rose-400 text-seafoam-50 font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Login
            </button>
          </form>

          <div className="mt-8 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-ink-600 hover:text-gold-800 transition-colors"
            >
              <SafeIcon icon={FiArrowLeft} />
              Back to Love Story
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy-800">
      {/* Header */}
      <div className="bg-seafoam-50 border-b border-ink-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-ink-600 hover:text-gold-800 transition-colors"
            >
              <SafeIcon icon={FiArrowLeft} />
              Back to Site
            </Link>
            <h1 className="font-serif text-2xl text-navy-800">Love Story Admin</h1>
          </div>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="bg-rose-400 text-seafoam-50 px-4 py-2 rounded-lg hover:bg-rose-500 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Tab Navigation */}
        <div className="bg-seafoam-50 rounded-2xl p-2 mb-8">
          <div className="flex space-x-2">
            {[
              { id: 'timeline', label: 'Timeline', icon: FiCalendar },
              { id: 'letters', label: 'Letters', icon: FiMail },
              { id: 'photos', label: 'Photos', icon: FiImage },
              { id: 'messages', label: 'Messages', icon: FiEdit }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg font-body transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-gold-800 to-rose-400 text-seafoam-50 shadow-lg'
                    : 'text-ink-600 hover:bg-ink-100'
                }`}
              >
                <SafeIcon icon={tab.icon} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-seafoam-50 rounded-2xl p-8">
          {activeTab === 'timeline' && <TimelineManager />}
          {activeTab === 'letters' && <LettersManager />}
          {activeTab === 'photos' && <PhotosManager />}
          {activeTab === 'messages' && <MessagesManager />}
        </div>
      </div>
    </div>
  );
};

const TimelineManager = () => (
  <div>
    <div className="flex items-center justify-between mb-6">
      <h2 className="font-serif text-2xl text-navy-800">Manage Timeline</h2>
      <button className="bg-gradient-to-r from-gold-800 to-rose-400 text-seafoam-50 px-4 py-2 rounded-lg flex items-center gap-2">
        <SafeIcon icon={FiPlus} />
        Add Story
      </button>
    </div>
    <div className="space-y-4">
      <div className="border border-ink-200 rounded-lg p-4">
        <h3 className="font-serif text-lg text-navy-800 mb-2">How We Met</h3>
        <p className="text-ink-600 text-sm mb-3">Spring 2019</p>
        <div className="flex gap-2">
          <button className="text-gold-800 hover:text-gold-900 p-2">
            <SafeIcon icon={FiEdit} />
          </button>
          <button className="text-rose-500 hover:text-rose-600 p-2">
            <SafeIcon icon={FiTrash2} />
          </button>
        </div>
      </div>
    </div>
  </div>
);

const LettersManager = () => (
  <div>
    <div className="flex items-center justify-between mb-6">
      <h2 className="font-serif text-2xl text-navy-800">Manage Letters</h2>
      <button className="bg-gradient-to-r from-gold-800 to-rose-400 text-seafoam-50 px-4 py-2 rounded-lg flex items-center gap-2">
        <SafeIcon icon={FiPlus} />
        Add Letter
      </button>
    </div>
    <div className="space-y-4">
      <div className="border border-ink-200 rounded-lg p-4">
        <h3 className="font-serif text-lg text-navy-800 mb-2">Missing You Already</h3>
        <p className="text-ink-600 text-sm mb-3">From Sarah • October 15, 2019</p>
        <div className="flex gap-2">
          <button className="text-gold-800 hover:text-gold-900 p-2">
            <SafeIcon icon={FiEdit} />
          </button>
          <button className="text-rose-500 hover:text-rose-600 p-2">
            <SafeIcon icon={FiTrash2} />
          </button>
        </div>
      </div>
    </div>
  </div>
);

const PhotosManager = () => (
  <div>
    <div className="flex items-center justify-between mb-6">
      <h2 className="font-serif text-2xl text-navy-800">Manage Photos</h2>
      <button className="bg-gradient-to-r from-gold-800 to-rose-400 text-seafoam-50 px-4 py-2 rounded-lg flex items-center gap-2">
        <SafeIcon icon={FiUpload} />
        Upload Photos
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="border border-ink-200 rounded-lg p-4">
        <div className="w-full h-32 bg-ink-100 rounded-lg mb-3"></div>
        <h3 className="font-serif text-sm text-navy-800 mb-1">Navy Ball 2020</h3>
        <div className="flex gap-2">
          <button className="text-gold-800 hover:text-gold-900 p-1">
            <SafeIcon icon={FiEdit} />
          </button>
          <button className="text-rose-500 hover:text-rose-600 p-1">
            <SafeIcon icon={FiTrash2} />
          </button>
        </div>
      </div>
    </div>
  </div>
);

const MessagesManager = () => (
  <div>
    <h2 className="font-serif text-2xl text-navy-800 mb-6">Moderate Messages</h2>
    <div className="space-y-4">
      <div className="border border-ink-200 rounded-lg p-4">
        <h3 className="font-serif text-lg text-navy-800 mb-2">Captain Rodriguez</h3>
        <p className="text-ink-600 text-sm mb-3">Watching you two support each other...</p>
        <div className="flex gap-2">
          <button className="bg-green-500 text-white px-3 py-1 rounded text-sm">
            <SafeIcon icon={FiSave} className="inline mr-1" />
            Approve
          </button>
          <button className="bg-rose-500 text-white px-3 py-1 rounded text-sm">
            <SafeIcon icon={FiTrash2} className="inline mr-1" />
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default AdminPage;