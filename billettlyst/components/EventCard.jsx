import {Link} from "react-router-dom";

function EventCard({ event, clickable = true}) {
    return (
        <article className="event-card">
            < img src={event.images[0].url} alt={event.name} />
            <h2>{event.name}</h2>
            {clickable && <Link to={`/event/${event.id}`}>Se detalijer</Link>}
        </article>
    );
}

export default EventCard;