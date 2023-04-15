import styles from '../styles/PreviewPodcast.module.css'
import { Link } from 'react-router-dom'

const PreviewPodcast = ({podcast}) => {
  // console.log(podcast)
  // console.log(podcast['im:image'][1].label)

  const {title: {label}} = podcast
  return (
    <div className={`col-3 mt-5 ${styles.podcastContainer}`}>
        <div className="card text-center">
            <div className="card-body">
              <div className={styles.podcastContainerImg}>
                <Link to={`/podcast/${podcast.id.attributes['im:id']}`} className=''>
                  <img src={podcast['im:image'][2].label}
                    className={`${styles.podcastImg} rounded-circle`}
                    alt={podcast['im:artist'].label}
                  />
                </Link>
              </div>
                <h6 className="card-text text-uppercase"><Link to={`/podcast/${podcast.id.attributes['im:id']}`} className='text-decoration-none text-dark'>{podcast['im:name'].label}</Link></h6>
                <p className="text-secondary">Author: <span className='text-uppercase'>{podcast['im:artist'].label}</span></p>
            </div>
        </div>
    </div>
  )
}

export default PreviewPodcast
