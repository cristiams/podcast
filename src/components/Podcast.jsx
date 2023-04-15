import { useEffect } from 'react'
import { useParams} from 'react-router-dom'
import usePodcasts from '../hooks/usePodcasts';
import Episodes from "./Episodes"
import Podcastster from "./Podcaster"

const Podcast = () => {

  const params = useParams();
  const {obtenerPodcast, podcasts} = usePodcasts()

  useEffect( () => {
    obtenerPodcast(params.id)
  }, [])

  let description = ''
  podcasts.forEach(pod => {
    if (pod.id.attributes['im:id'] == params.id) {
      description = pod.summary.label
    }
  })

  return (
    <div className="container bg-light">
      <div className="row py-3">
        <div className="col-4">
          <Podcastster desc={description}/>
        </div>
        <div className="ms-4 col-7">
          <Episodes/>
        </div>
      </div>
    </div>
  )
}

export default Podcast
