import { useState } from "React";
import usePodcasts from "../hooks/usePodcasts"
import PreviewPodcast from "./PreviewPodcast"

const Podcasts = () => {

    const {podcasts, filterPodcasts, filteredPodcasts, filter, setFilter} = usePodcasts()
    const [input, setInput] = useState('')

    const handleFilter = (query) => {
        setInput(query)
        filterPodcasts(query)
    }

    return (
    <div className="container">
        <div className="d-flex justify-content-end align-items-baseline mb-5">
            <span className="badge fs-4 text-bg-primary">
                {filteredPodcasts.length > 0
                    ? filteredPodcasts.length
                    : podcasts.length
                }
            </span>
            <div className="flex-shrink-1">
                <input type="text" className="form-control ms-1" name="filter" placeholder="Filter podcasts..."
                    onChange={(e) => handleFilter(e.target.value)}
                    value={input}
                    // onChange={(e) => setFilter(e.target.value)}
                    // value={filter}
                />
            </div>
        </div>
        <div className="row">
            {filteredPodcasts.length > 0
                ? filteredPodcasts.map((podcast, index) => (
                    <PreviewPodcast
                        key={index}
                        podcast={podcast}
                    />
                ))
                : (
                podcasts.map((podcast, index) => (
                    <PreviewPodcast
                        key={index}
                        podcast={podcast}
                    />
                )))
            }
            {/* {podcasts.map((podcast, index) => (
                <PreviewPodcast
                    key={index}
                    podcast={podcast}
                />
            ))} */}
        </div>
    </div>
    )
}

export default Podcasts
