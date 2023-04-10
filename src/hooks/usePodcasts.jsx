import { useContext } from 'react'
import PodcastsContext from '../context/PodcastProvider'

const usePodcasts = () => {
    return useContext(PodcastsContext)
}

export default usePodcasts