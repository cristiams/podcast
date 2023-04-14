import Episodes from "./Episodes"
import Podcastster from "./Podcaster"

const Podcast = () => {
  return (
    <div className="container bg-light">
      <div className="row py-3">
        <div className="col-4">
          <Podcastster/>
        </div>
        <div className="ms-4 col-7">
          <Episodes/>
        </div>
      </div>
    </div>
  )
}

export default Podcast
