import React, { useRef, useState } from 'react';
import { useFormContext } from './FormContext';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import ImageIcon from '@mui/icons-material/Image';

const BlogForm = () => {
  const { formData, updateFormData } = useFormContext();
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData({
      title: formData.title,
      content: formData.content,
      images: formData.images,
      imagePosition: formData.imagePosition,
      imagesize: formData.imagesize
    });
    setSubmitted(true);
  };
  const formatText = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  const handleImageUpload = (e) => {
    const files = e.target.files;
    const fileArray = Array.from(files).slice(0, 3); // Limit to 3 images
    const imageUrls = fileArray.map((file) => URL.createObjectURL(file));
    updateFormData({ images: [...formData.images, ...imageUrls] }); // Update images in context
  };

  const getimagesizeClass = (size) => {
    switch (size) {
      case "small":
        return "w-24";
      case "medium":
        return "w-48";
      case "large":
        return "w-64";
      default:
        return "w-48";
    }
  };

  return (
    <div className="p-8 bg-white text-black">
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label className="block text-lg mb-2 font-semibold">Blog Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => updateFormData({ title: e.target.value })}
            className="border border-gray-300 p-2 rounded w-full"
            placeholder="Enter blog title"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg mb-2 font-semibold">Blog Content</label>
          <div className="mb-2 flex flex-wrap space-x-2">
            <button
              type="button"
              onClick={() => formatText("bold")}
              className="border px-2 py-1 rounded mr-2 mb-2 flex items-center"
              title="Bold"
            >
              <FormatBoldIcon />
            </button>

            <button
              type="button"
              onClick={() => formatText("italic")}
              className="border px-2 py-1 rounded mr-2 mb-2 flex items-center"
              title="Italic"
            >
              <FormatItalicIcon />
            </button>

            <button
              type="button"
              onClick={() => formatText("underline")}
              className="border px-2 py-1 rounded mr-2 mb-2 flex items-center"
              title="Underline"
            >
              <FormatUnderlinedIcon />
            </button>

            <button
              type="button"
              onClick={() => formatText("justifyLeft")}
              className="border px-2 py-1 rounded mr-2 mb-2 flex items-center"
              title="Align Left"
            >
              <FormatAlignLeftIcon />
            </button>
            <button
              type="button"
              onClick={() => formatText("justifyCenter")}
              className="border px-2 py-1 rounded mr-2 mb-2 flex items-center"
              title="Align Center"
            >
              <FormatAlignCenterIcon />
            </button>
            <button
              type="button"
              onClick={() => formatText("justifyRight")}
              className="border px-2 py-1 rounded mr-2 mb-2 flex items-center"
              title="Align Right"
            >
              <FormatAlignRightIcon />
            </button>

            <button
              type="button"
              className="border px-2 py-1 rounded mr-2 mb-2 flex items-center"
              onClick={() => fileInputRef.current.click()}
              title="Upload Image"
            >
              <ImageIcon />
            </button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleImageUpload}
              multiple
              accept="image/*"
            />

            <select
              onChange={(e) => updateFormData({ imagesize: e.target.value })}
              className="border px-2 py-1 rounded mr-2 mb-2 text-black"
            >
              <option value="small">Small</option>
              <option value="medium" selected>
                Medium
              </option>
              <option value="large">Large</option>
            </select>
          </div>

          <div
            className="border border-gray-300 p-4 rounded h-72 overflow-y-auto"
            contentEditable
            onInput={(e) => updateFormData({ content: e.currentTarget.innerHTML })}
          ></div>

          {formData.images.length > 0 && (
            <div className="mt-4">
              {formData.images.map((img, index) => (
                <div
                  key={index}
                  className={`mb-4 text-${formData.imagePosition}`}
                  style={{ textAlign: formData.imagePosition }}
                >
                  <img
                    src={img}
                    alt={`Uploaded ${index + 1}`}
                    className={`${getimagesizeClass(formData.imagesize)} mx-auto`}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit Blog
        </button>
      </form>

      {submitted && (
        <div className="mt-6 p-4 border border-gray-400 bg-white text-black rounded w-[90vw]">
          <h2 className="text-xl font-bold mb-2">{formData.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: formData.content }}></div>

          {formData.images.length > 0 && (
            <div className="mt-4">
              {formData.images.map((img, index) => (
                <div
                  key={index}
                  className={`mb-4 text-${formData.imagePosition}`}
                  style={{ textAlign: formData.imagePosition }}
                >
                  <img
                    src={img}
                    alt={`Uploaded ${index + 1}`}
                    className={`${getimagesizeClass(formData.imagesize)} mx-auto`}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogForm;
