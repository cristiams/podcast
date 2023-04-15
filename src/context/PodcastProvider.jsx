import { useState, useEffect, createContext } from 'react'
import { isOutdated } from '../utils/checkOutTime'

const PodcastsContext = createContext();

const PodcastsProvider = ({children}) => {

    const [podcasts, setPodcasts] = useState([]);
    const [filteredPodcasts, setFilteredPodcasts] = useState([]);
    const [podcast, setPodcast] = useState({});
    const [cargando, setCargando] = useState(false);
    const [filter, setFilter] = useState('')

    useEffect(() => {
        const getPodcasts = async () => {
            const localEntries = localStorage.getItem('entries')
            if (localEntries === null || isOutdated(JSON.parse(localEntries).timestamp)) {
                try {
                    fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
                    .then(response => {
                        if (response.ok) return response.json()
                        throw new Error('Network response was not ok.')
                    })
                    .then(data => {
                        // console.log(data.feed.entry)
                        const entries = data.feed.entry
                        let lsObject = { value: entries, timestamp: new Date().getTime() };
                        localStorage.setItem('entries', JSON.stringify(lsObject))
                        setPodcasts(entries)
                    });
                } catch (error) {
                    console.log('No se pudo solicitar los 100 podcasts mas recientes')
                }
            } else {
                setPodcasts(JSON.parse(localEntries).value)
            }
        }
        getPodcasts()
    }, [])

    // useEffect(() => {
    //     // console.log(1111)
    //     if (filter !== '') {
    //         let filteredData = podcasts.filter(
    //             podcast =>
    //                 podcast['im:artist'].label.toLowerCase().search(filter) !== -1 
    //                 ||
    //                 podcast['im:name'].label.toLowerCase().search(filter) !== -1
    //         );
    //         setPodcasts(filteredData)
    //     }
    //     else {
    //         setPodcasts(podcasts)
    //     }
    // }, [filter])


    const filterPodcasts = (search) => {
        // if (search !== '') {
            let filteredData = podcasts.filter(
                podcast =>
                    podcast['im:artist'].label.toLowerCase().search(search) !== -1 
                    ||
                    podcast['im:name'].label.toLowerCase().search(search) !== -1
            );
            setFilteredPodcasts(filteredData)
        // }
        // else {
        //     setFilteredPodcasts(podcasts)
        // }
    }
    

    const obtenerPodcast = async id => {

        // const localEntries = localStorage.getItem('singlePodcast')
        // if (localEntries === null || isOutdated(JSON.parse(localEntries).timestamp)) {
            try {
                let url = `https://itunes.apple.com/lookup?id=${id}`
                fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
                .then(response => {
                    if (response.ok) return response.json()
                    throw new Error('Network response was not ok.')
                })
                .then(data => {
                    // console.log(data.contents)
                    // console.log(JSON.parse(data.contents))
                    let contents = JSON.parse(data.contents)
                    // console.log(contents.results)
                    // console.log(contents.results[0])
                    localStorage.setItem('singlePodcast', JSON.stringify(contents.results[0]))
                    setPodcast(contents.results[0])
                });
            } catch (error) {
                console.log('No se pudo obtener informacion del podcast')
            }
        // }
        // else {
        //     setPodcasts(JSON.parse(localEntries))
        // }
    }
    
    return (
        <PodcastsContext.Provider
            value={{
                podcasts,
                podcast,
                filteredPodcasts,
                cargando,
                filter,
                obtenerPodcast,
                filterPodcasts,
                setFilter,
            }}
        >{children}
        </PodcastsContext.Provider>
    )
}
export { 
    PodcastsProvider
}
    
export default PodcastsContext