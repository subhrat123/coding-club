import { useEffect, useState } from "react";
import EventCard from "../Components/EventCard2";
import { fetchEvents } from "../api/eventApi";

const EventPage = () => {
  const [events, setEvents] = useState([]);

  // Fetch events on component mount
  const loadEvents = async () => {
    try {
      const data = await fetchEvents();
      setEvents(data);
    } catch (error) {
      console.error("Failed to load events:", error);
    }
  };

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <div className="mt-24 bg-[#0a0112] min-h-screen text-gray-300 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-xl mx-auto py-1">
        <h3 className="text-center text-4xl md:text-5xl font-extrabold mb-8 mt-12 tracking-wide">
          Our Events
        </h3>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard
            key={event._id}
            title={event.title}
            date={event.date}
            description={event.description}
            imgSrc={event.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default EventPage;
