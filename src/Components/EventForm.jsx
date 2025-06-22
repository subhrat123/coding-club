import { useState } from "react";
import PropTypes from "prop-types";

const EventForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
    image: null,
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("title", formData.title);
    payload.append("date", formData.date);
    payload.append("description", formData.description);
    payload.append("image", formData.image); // name must match backend `image`

    onSubmit(payload);
    setFormData({
      title: "",
      date: "",
      description: "",
      image: null,
    });
    setIsOpen(false);
  };

  return (
    <div className="max-w-md mx-auto mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mb-4 bg-purple-700 hover:bg-purple-900 text-white font-semibold px-6 py-3 rounded shadow-md transition"
      >
        {isOpen ? "Close Form ✖️" : "Add Event ➕"}
      </button>

      {isOpen && (
        <form
          onSubmit={handleSubmit}
          className="bg-black bg-opacity-80 p-6 rounded-xl shadow-xl text-white"
          encType="multipart/form-data"
        >
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Event Title"
            className="w-full p-3 mb-4 rounded bg-gray-800 text-white placeholder-gray-400"
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            rows={4}
            className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
            required
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full p-3 mb-6 rounded bg-gray-800 text-white"
            required
          />
          <button
            type="submit"
            className="bg-purple-700 hover:bg-purple-900 text-white font-semibold px-6 py-2 rounded w-full shadow-md transition"
          >
            Add Event
          </button>
        </form>
      )}
    </div>
  );
};
EventForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default EventForm;
