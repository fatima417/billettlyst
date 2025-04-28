function ArtistCard({artist}) {
    return (
        <article className="artist-card">
        <h3>{artist.name}</h3>
        </article>
    );
}

export default ArtistCard;