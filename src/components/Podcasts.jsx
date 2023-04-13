import usePodcasts from "../hooks/usePodcasts"
import PreviewPodcast from "./PreviewPodcast"

const Podcasts = () => {

    const {podcasts} = usePodcasts()

    return (
    <div className="container">
        <div className="d-flex justify-content-end align-items-baseline mb-5">
            <span className="badge fs-4 text-bg-primary">{podcasts.length}</span>
            <div className="flex-shrink-1">
                <input type="text" className="form-control ms-1" placeholder="Filter podcasts..."/>
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
