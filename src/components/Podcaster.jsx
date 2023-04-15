import usePodcasts from '../hooks/usePodcasts';

const Podcastster = ({desc}) => {

  const {podcast} = usePodcasts()

  const {artistName, trackName, artworkUrl600} = podcast

  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div className="p-5">
            <img className="img-fluid rounded mx-auto d-block" src={artworkUrl600} alt={artistName} />
          </div>
        </li>
        <li className="list-group-item">
          <div className="ms-2">
            <h6>{trackName}</h6>
            <p className="fst-italic">by {artistName}</p>
          </div>
        </li>
        <li className="list-group-item">
          <p className="mt-3 mb-1">Description:</p>
          <p className="fst-italic fw-light">{desc}</p>
        </li>
      </ul>
    </div>
  )
}

export default Podcastster
