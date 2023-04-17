import usePodcasts from '../hooks/usePodcasts';
import { useParams, useHref, useLocation, useSearchParams } from 'react-router-dom'

const Episode = () => {
  const params = useParams()
  const href = useHref()
  console.log(href)
  const location = useLocation()
  console.log(location)
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams)
  const {obtenerPodcast, podcast} = usePodcasts()
  // console.log(params)

  // useEffect( () => {
  //   obtenerPodcast(params.id)
  // }, [])

  return(
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Wilco - Magnetized</h3>
          <div className="card-text">
              <p className="">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <div className="audio">
            <audio
                src="https://play.podtrac.com/npr-510357/edge1.pod.npr.org/anon.npr-mp3/npr/louderthan/2023/04/20230413_louderthan_528ef1d9-bd93-4aeb-bf99-3515865de3b4.mp3?d=100&size=1601246&e=1169733177&t=podcast&p=510357&awEpisodeId=1169733177&awCollectionId=510357"
                preload="none"
                controls
            >
            </audio>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Episode
