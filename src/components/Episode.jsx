import { useEffect } from 'react';
import { useParams, useHref, useLocation } from 'react-router-dom'
import usePodcasts from '../hooks/usePodcasts';

const Episode = () => {
  const params = useParams()
  // console.log(params)
  const href = useHref()
  // console.log(href)
  const location = useLocation()
  const {obtenerPodcast, podcast} = usePodcasts()

  useEffect( () => {
    console.log(location)
    console.log(location.pathname.split('/'))
    if (!('episodes' in podcast)) {
      const pathname_partials = location.pathname.split('/')
      const podId = pathname_partials[2]
      obtenerPodcast(podId)
      console.log(podcast)
    }
  }, [])

  const episode = podcast.episodes.find(el => el.id == params.id)
  const {title, url, description} = episode
  // const ctnHtml = dangerouslySetInnerHTML = {__html: content}

  return(
    <>
        {'episodes' in podcast ? (
          <div className="container">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{title}</h3>
                {description && <div className='card-text' dangerouslySetInnerHTML={{__html: description}}></div>}
                <div className="audio">
                  {url ?
                    (
                      <audio
                          src={url}
                          preload="none"
                          controls
                      >
                      </audio>
                    )
                    : null
                  }
                </div>
              </div>
            </div>
          </div>
        ) : (
          null
        )}
    </>
  )
}

export default Episode
