const PreviewPodcast = ({podcast}) => {
    // console.log(podcast)

    const {title: {label}} = podcast
  return (
    <div className="col-3">
        <div className="card text-center">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-text">{label}</h5>
                <p className="">Author: {podcast['im:name'].label}</p>
            </div>
        </div>
    </div>
  )
}

export default PreviewPodcast