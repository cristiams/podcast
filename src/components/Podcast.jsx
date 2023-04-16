import { useEffect } from 'react'
import { useParams} from 'react-router-dom'
import usePodcasts from '../hooks/usePodcasts';
import Episodes from "./Episodes"
import Podcastster from "./Podcaster"

const Podcast = () => {

  const params = useParams();
  const {obtenerPodcast, obtenerEpisodios, podcast} = usePodcasts()

  useEffect( () => {
    obtenerPodcast(params.id)
  }, [])

  useEffect( () => {
    if (podcast.hasOwnProperty('feedUrl') && !podcast.hasOwnProperty('episodes')) {
      obtenerEpisodios(podcast.feedUrl)   
    }
  }, [podcast])

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
