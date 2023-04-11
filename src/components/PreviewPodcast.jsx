import styles from '../styles/PreviewPodcast.module.css'

const PreviewPodcast = ({podcast}) => {
  console.log(podcast)
  // console.log(podcast['im:image'][1].label)

  const {title: {label}} = podcast
  return (
    <div className="col-3 mb-5">
        <div className="card text-center">
            <div className="card-body">
              <div className={styles.podcastContainer}>
                <img src={podcast['im:image'][2].label}
                  className={`${styles.podcastImg} rounded-circle`}
                  alt={podcast['im:artist'].label}
                />
              </div>
                <h5 className="card-text">{label}</h5>
                <p className="">Author: {podcast['im:name'].label}</p>
            </div>
        </div>
    </div>
  )
}

export default PreviewPodcast
