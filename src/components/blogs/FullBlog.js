
import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CommentIcon from '@mui/icons-material/Comment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useLocation, useNavigate } from 'react-router-dom';

const FullBlog = () => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { blog } = location.state;

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  if (!blog) return null;

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start py-10 px-5">
      <button onClick={() => navigate(-1)} className="self-start text-blue-500 underline my-5">
        Back to Blogs
      </button>

      <div className={`w-full max-w-5xl rounded-lg shadow-lg p-6 ${darkMode ? 'bg-black/80 border' : 'bg-white'}`}>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            {blog.profileImage ? (
              <img
                src={blog.profileImage}
                alt={blog.authorName}
                className={`h-12 w-12 border-2 rounded-full ${darkMode ? 'border-white' : 'border-black'}`}
              />
            ) : (
              <div
                className={`bg-[#0060b5] border-2 h-12 w-12 rounded-full flex items-center justify-center ${darkMode ? 'border-white' : 'border-black'
                  }`}
              >
                <span className="text-white font-bold">
                  {blog.authorName && blog.authorName.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            )}
            <div className="ml-4">
              <h3 className={`font-semibold text-gray-800 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {blog.authorName}
              </h3>
              <div className={`flex items-center gap-1 ${darkMode ? 'text-white' : 'text-black'}`}>
                <CalendarMonthIcon fontSize="small" />
                <small>{blog.date || 'Fri, Oct 11'}</small>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <span className="text-gray-700 text-sm px-3 flex items-center bg-gray-200 rounded-full">
              <AccessTimeIcon sx={{ marginRight: '5px' }} />
              {blog.readTime || '5 min'}
            </span>
            <IconButton
              sx={{
                ml: 1,
                padding: '4px',
                borderRadius: '30px',
                backgroundColor: darkMode ? 'gray' : '', // Conditionally change the background color
                border: darkMode ? '2px solid white' : '2px solid black',
              }}
              onClick={handleClick}
              color="primary"
            >
              {darkMode ? <LightModeIcon sx={{ color: 'yellow' }} /> : <DarkModeIcon sx={{ color: 'black' }} />}
            </IconButton>
          </div>
        </div>

        <img src={blog.image} alt={blog.title} className="w-full h-[500px] object-cover rounded-lg mb-6" />
        <h1 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{blog.title}</h1>
        <div className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-white/80' : 'text-gray-700'}`}>
          {blog.content}
          <div className={`${darkMode ? 'text-white/90' : 'text-gray-700'}`}>
            <p className="mb-4">
              Today front-end development has changed enormously, and React.js has played an important role in this
              journey. Mostly known as React, it is the JavaScript library for many users opting for single-interface
              applications. Developers use React to make reusable UI components and to control modern web application
              changes easily. For both beginner and seasoned developers, React is an important ingredient in web
              development.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-2">What Exactly is React?</h2>
            <p className="mb-4">
              In 2013, Facebook created React for developers, and ever since then, it has gained massive utility for its
              flexibility and performance. Other web frameworks do not solely focus on the ‘view layer of the
              application’ (the V in MVC = Model Controller), but React.js carries out this function singlehandedly,
              making it an easier pathway to other web frameworks too. When a user interface is divided into small
              components, React follows the component-based architecture. Each component handles its state and can be
              joined with other elements to build complex UIs.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-2">Characteristics of React.js</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Component-based Architecture:</strong> components are the main focus of React and are
                independent and reusable pieces of code to form UIs.
              </li>
              <li>
                <strong>Virtual DOM:</strong> Enhances performance by comparing the new Virtual DOM with the older one
                during state changes.
              </li>
              <li>
                <strong>JSX - JavaScript XML:</strong> A syntax extension that looks similar to HTML, helping visualize
                the formation of React components.
              </li>
              <li>
                <strong>Unidirectional Data Flow:</strong> Data is transferred from parent to child components, making
                debugging easier.
              </li>
              <li>
                <strong>Declarative UI:</strong> Encourages defining UI states, which React handles for rendering
                updates.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between text-gray-600">
          <div className="flex gap-3 items-center text-sm">
            <div className="flex items-center gap-1">
              <VisibilityIcon fontSize="small" /> {blog.views || '6173'}
            </div>
            <div className="flex items-center gap-1">
              <CommentIcon fontSize="small" /> {blog.comments || '3'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;
