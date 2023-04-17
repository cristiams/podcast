import { useEffect } from 'react'
import { useParams} from 'react-router-dom'
import usePodcasts from '../hooks/usePodcasts';
import Episodes from "./Episodes"
import Podcastster from "./Podcaster"

const Podcast = () => {

  const params = useParams();
  const {obtenerPodcast, podcast} = usePodcasts()

  useEffect( () => {
    obtenerPodcast(params.id)
  }, [])

  return (
    // <div className="container bg-light">
    //   <div className="row py-3">
    //     <div className="col-4">
    //       {podcast && <Podcastster/>}
    //     </div>
    //     <div className="ms-4 col-7">
    //       {podcast && 'episodes' in podcast && <Episodes/>}
    //     </div>
    //   </div>
    // </div>
    <>
      {podcast && 'episodes' in podcast && <Episodes/>}
    </>
  )
}

export default Podcast
