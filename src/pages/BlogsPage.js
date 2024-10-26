import React, { useState } from 'react';
import { blogData } from '../data/BlogData';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CommentIcon from '@mui/icons-material/Comment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const getInitials = (name) => {
  if (!name) return '';
  const namesArray = name.split(' ');
  return namesArray.map(n => n[0].toUpperCase()).join('');
};

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const handleReadMore = (blog) => {
    navigate(`/blog/${blog.id}`, { state: { blog } });
  };

  const uniqueCategories = ['All', ...new Set(blogData.map(blog => blog.category))];
  const filteredBlogs = selectedCategory === 'All'
    ? blogData
    : blogData.filter(blog => blog.category === selectedCategory);

  return (
    <div className="flex flex-col items-center mt-20 text-black">
      <div className="w-full">
        <div className="mb-5 flex w-full justify-center space-x-4">
          {uniqueCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${selectedCategory === category
                  ? 'bg-gray-800 text-white text-lg transform scale-105'
                  : 'bg-gray-300 text-gray-700'
                }`}
            >
              {category}
            </button>
          ))}
        </div>


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-x-5 gap-y-8 place-items-center'>
          {filteredBlogs.map((blog, index) => (
            <div
              key={index}
              className='rounded-lg w-[400px] hover:scale-[1.015] transition-all duration-300 cursor-pointer'
              onClick={() => handleReadMore(blog)}
            >
              <div className='bg-white h-[450px] flex flex-col justify-between rounded-lg p-2'>
                <img
                  className="w-full h-[60%] object-cover rounded-t-lg"
                  src={blog.image}
                  alt="Blog cover"
                />
                <div className="flex items-start -mt-5 mx-4">
                  {blog.profileImage ? (
                    <img src={blog.profileImage} alt={`${blog.authorName}'s avatar`} className='h-10 w-10 border-2 border-white rounded-full' />
                  ) : (
                    <div className='bg-[#0060b5] border-2 border-white h-10 w-10 rounded-full flex items-center justify-center'>
                      <span className='text-white font-bold'>{getInitials(blog.authorName)}</span>
                    </div>
                  )}
                  <span className="ml-auto bg-white text-xs text-gray-700 px-2 py-1 rounded-full -mt-3">
                    {blog.readTime || '5 min'}
                  </span>
                </div>

                <div className='h-[40%] flex justify-around rounded-b-lg flex-col w-full px-4'>
                  <div className='flex justify-between  text-gray-700 text-xs'>
                    <span className=" bg-gray-200 px-2 py-1 rounded">
                      {blog.category || 'Lifestyle'}
                    </span>
                    <span>- {blog.authorName}</span>
                  </div>
                  <div className="h-[50%] overflow-y-auto">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {blog.title || 'Streaming video way before it was cool, go dark tomorrow'}
                    </h2>
                  </div>
                  <div className="flex gap-3 items-center text-gray-600 text-sm">
                    <div className="flex items-center gap-1">
                      <VisibilityIcon fontSize="small" /> {blog.views || '6173'}
                    </div>
                    <div className="flex items-center gap-1">
                      <CommentIcon fontSize="small" /> {blog.comments || '3'}
                    </div>
                    <div className="ml-auto flex items-center gap-1">
                      <CalendarMonthIcon fontSize="small" />
                      <small>{blog.date || 'Fri, Oct 11'}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;


