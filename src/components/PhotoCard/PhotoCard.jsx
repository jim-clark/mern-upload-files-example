import './PhotoCard.css';

export default function PhotoCard({ photo }) {
  return (
    <article className="PhotoCard">
      <img src={photo.url} alt={photo.title} />
      <div>{photo.title}</div>
    </article>
  );
}