import styles from '../styles/PreviewPodcast.module.css'
import { Link } from 'react-router-dom'

const PreviewPodcast = ({podcast}) => {
  // console.log(podcast)
  // console.log(podcast['im:image'][1].label)

  return (
    <div className={`col-3 mt-5 ${styles.podcastContainer}`}>
        <div className="card text-center">
            <div className="card-body">
              <div className={styles.podcastContainerImg}>
                <Link to={`/podcast/${podcast.id}`} className=''>
                  <img src={podcast.img}
                    className={`${styles.podcastImg} rounded-circle`}
                    alt={podcast.name}
                  />
                </Link>
              </div>
                <h6 className="card-text text-uppercase"><Link to={`/podcast/${podcast.id}`} className='text-decoration-none text-dark'>{podcast.name}</Link></h6>
                <p className="text-secondary">Author: <span className='text-uppercase'>{podcast.author}</span></p>
            </div>
        </div>
    </div>
  )
}

export default PreviewPodcast
