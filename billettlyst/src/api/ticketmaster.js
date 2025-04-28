const API_KEY = "DIN_API-NØKKEL"; // <- sett inn din faktiske API - nøkkel her 

export async function fetchEventsByKeyword (keyword) {
    const res = await fecth (`https://app.ticketmaster.com/discovery/v2/events.json?&apikey=${API_KEY}}`);
    const data = await res.json();
    return data.embedded?.events || [];
}

export async function fetchEventById(id) {
    const res = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=${API_KEY}`);
    const data = await res.json();
    return data;
}

export async function fetchEventsByCity(city) {
    const res = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&city=${city}`);
    const data = await res.json();
    return data._embedded?.events || [];
}
