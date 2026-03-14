// tutorial :13 props
export const SeriesCard = (props) => {
  return (
    <li key={props.curELem.id}>
      <div>
        <img
          src={props.curELem.img_url}
          alt="qot.jpg"
          width="40%"
          height="40%"
        />
      </div>
      <h2>Name:{props.curELem.name}</h2>
      <h3>Rating: {props.curELem.rating}</h3>
      <p>Description: {props.curELem.description}</p>
      <p>Genre: {props.curELem.genre}</p>
      <p>Cast: {props.curELem.cast}</p>
      <a href={props.curELem.watch_url} target="_blank">
        <button>Watch Now</button>
      </a>
    </li>
  );
};
