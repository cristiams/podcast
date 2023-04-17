import {Outlet} from 'react-router-dom'
import Podcastster from './Podcaster'

const PodcastIndex = () => {
  return (
    <div className="container bg-light">
        <div className="row py-3">
            <div className="col-4">
                <Podcastster/>
            </div>
            <div className="ms-4 col-7">
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default PodcastIndex
