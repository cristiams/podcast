import usePodcasts from '../hooks/usePodcasts';

const Podcastster = () => {

  const {podcast} = usePodcasts()

  const {artistName, name, artwork, description} = podcast

  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div className="p-5">
            <img className="img-fluid rounded mx-auto d-block" src={artwork} alt={artistName} />
          </div>
        </li>
        <li className="list-group-item">
          <div className="ms-2">
            <h6>{name}</h6>
            <p className="fst-italic">by {artistName}</p>
          </div>
        </li>
        <li className="list-group-item">
          <p className="mt-3 mb-1">Description:</p>
          <p className="fst-italic fw-light">{description}</p>
        </li>
      </ul>
    </div>
  )
}

export default Podcastster
