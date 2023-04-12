import Episodes from "./Episodes"
import Podcastster from "./Podcaster"

const Podcast = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Podcastster/>
        </div>
        <div className="col-8">
          <Episodes/>
        </div>
      </div>
    </div>
  )
}

export default Podcast
