import usePodcasts from "../hooks/usePodcasts"
import PreviewPodcast from "./PreviewPodcast"

const Podcasts = () => {

    const {podcasts} = usePodcasts()

    return (
    <div className="container-fluid">
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