import { useEffect, useState } from "react";
import { fetchEventsByKeyword, fetchEventsByCity } from "../api/ticketmaster";
import EventCard from "../components/EventCard";

export default function Home() {
  const [festivalEvents, setFestivalEvents] = useState([]);
  const [cityEvents, setCityEvents] = useState([]);
  const [currentCity, setCurrentCity] = useState("");

  useEffect(() => {
    async function getFestivalEvents() {
      const events = await Promise.all([
        fetchEventsByKeyword("Findings"),
        fetchEventsByKeyword("Neon Festival"),
        fetchEventsByKeyword("Skeikampenfestivalen"),
        fetchEventsByKeyword("Tons of Rock"),
      ]);
      setFestivalEvents(events.flat());
    }
    getFestivalEvents();
  }, []);

  async function handleCityClick(city) {
    setCurrentCity(city);
    const events = await fetchEventsByCity(city);
    setCityEvents(events.slice(0, 10));
  }

  return (
    <article>
      <h1>Utvalgte Festivaler</h1>
      <section className="festival-list">
        {festivalEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </section>

      <h2>Velg by:</h2>
      <button onClick={() => handleCityClick("Oslo")}>Oslo</button>
      <button onClick={() => handleCityClick("Berlin")}>Berlin</button>
      <button onClick={() => handleCityClick("London")}>London</button>
      <button onClick={() => handleCityClick("Paris")}>Paris</button>

      {currentCity && <h2>I {currentCity} kan du oppleve:</h2>}
      <section className="city-event-list">
        {cityEvents.map(event => (
          <EventCard key={event.id} event={event} clickable={false} />
        ))}
      </section>
    </article>
  );
}

