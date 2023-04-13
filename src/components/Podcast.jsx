import Episodes from "./Episodes"
import Podcastster from "./Podcaster"

const Podcast = () => {
  return (
    <div className="container bg-light">
      <div className="row py-3">
        <div className="col-4">
          <Podcastster/>
        </div>
        <div className="ms-5 col-6">
          <Episodes/>
        </div>
      </div>
    </div>
  )
}

export default Podcast
