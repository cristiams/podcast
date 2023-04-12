import usePodcasts from "../hooks/usePodcasts"
import PreviewPodcast from "./PreviewPodcast"

const Podcasts = () => {

    const {podcasts} = usePodcasts()

    return (
    <div className="container">
        <div className="row mb-5">
            <div className="col-12">
                <h4><span className="badge text-bg-primary">{podcasts.length}</span></h4>
                <input type="text" className="form-control" placeholder="Filter podcasts..."/>
            </div>
        </div>
        <div className="row">
            {podcasts.map((podcast, index) => (
                <PreviewPodcast
                    key={index}
                    podcast={podcast}
                />
            ))}
        </div>
    </div>
    )
}

export default Podcasts
