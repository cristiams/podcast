import { useState, useEffect, createContext } from 'react'
import { isOutdated } from '../utils/checkOutTime'
// import Parser from 'rss-parser';
const PodcastsContext = createContext();

const PodcastsProvider = ({children}) => {

    const [podcasts, setPodcasts] = useState([]);
    const [filteredPodcasts, setFilteredPodcasts] = useState([]);
    const [podcast, setPodcast] = useState({});
    const [episodes, setEpisodes] = useState([])
    const [episode, setEpisode] = useState({})
    const [cargando, setCargando] = useState(false);
    
    useEffect(() => {
        const getPodcasts = () => {
            const localEntries = localStorage.getItem('entries')
            if (localEntries === null || isOutdated(JSON.parse(localEntries).timestamp)) {
                fetchPodcasts()
            } else {
                setPodcasts(JSON.parse(localEntries).value)
            }
        }
        getPodcasts()
    }, [])
    
    const fetchPodcasts = async () => {
        
        const response = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
        if (!response.ok) {
            console.log('No se pudo solicitar los 100 podcasts mas recientes')
            return
        }
        
        const data = await response.json();
        const entries = data.feed.entry
        let podcasts = entries.map((p, index) => {
            return {
                id: p.id.attributes["im:id"],
                img: p["im:image"][2].label,
                name: p["im:name"].label,
                author: p["im:artist"].label,
                summary: p.summary.label
            }
        })
        console.log(podcasts)
        let lsObject = { value: podcasts, timestamp: new Date().getTime() };
        localStorage.setItem('entries', JSON.stringify(lsObject))
        setPodcasts(podcasts)
    }
        
    const filterPodcasts = (search) => {
        // if (search !== '') {
            let filteredData = podcasts.filter(
                podcast =>
                    podcast.author.toLowerCase().search(search) !== -1 
                    ||
                    podcast.name.toLowerCase().search(search) !== -1
            );
            setFilteredPodcasts(filteredData)
        // }
        // else {
        //     setFilteredPodcasts(podcasts)
        // }
    }
    

    const obtenerPodcast = async id => {

        const localEntry = localStorage.getItem(`podcast_${id}`)
        if (localEntry === null || isOutdated(JSON.parse(localEntry).timestamp)) {
            let url = `https://itunes.apple.com/lookup?id=${id}`
            const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
            if (!response.ok) {
                console.log('No se pudo obtener informacion del podcast')
                return
            }
            const data = await response.json()
            console.log(data)
            // console.log(data.contents)
            console.log(JSON.parse(data.contents))
            let contents = JSON.parse(data.contents)
            // console.log(contents.results)
            // console.log(contents.results[0])
            const p = contents.results[0]
            // localStorage.setItem('singlePodcast', JSON.stringify(contents.results[0]))
            let description = ''
            podcasts.forEach(pod => {
                if (pod.id == id) {
                    description = pod.summary
                }
            })

            let podcast = {
                id: p.trackId,
                artwork: p.artworkUrl600,
                name: p.trackName,
                feedUrl: p.feedUrl,
                artistName: p.artistName,
                description
            };
            setPodcast(podcast)
            let lsObject = { value: podcast, timestamp: new Date().getTime() }
            localStorage.setItem(`podcast_${id}`, JSON.stringify(lsObject));
        }
        else {
            setPodcast(JSON.parse(localEntry).value)
        }

        // obtenerEpisodios(podcast.feedUrl)
    }

    const obtenerEpisodios = url => {
        let episodes = [];
        console.log(url)
        fetch(url)
            .then(response => response.text())
            .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
            .then(data => {
            console.log(data);
            const items = data.querySelectorAll("item");
                items.forEach(episode => {
                    // console.log(episode)
                    // console.log(episode.querySelector('guid').textContent)
                    // console.log(episode.querySelector('title').textContent)
                    // console.log(episode.querySelector('pubDate').textContent)
                    // console.log(episode.getElementsByTagName('itunes:duration')[0].textContent)
                    // console.log(episode.getElementsByTagName('content:encoded')[0].textContent)
                    // console.log(episode.querySelector('enclosure').getAttribute('url'))
                    // ALGUNOS NO EXISTEN, VALIDARLOS



                    // episodes = [... episodes,
                    //     {
                    //         id: episode.guid,
                    //         title: episode.title,
                    //         date: episode.pubDate,
                    //         duration: episode['itunes:duration'],
                    //         content: episode.content,
                    //         url: episode.enclosure
                    //     }
                    // ]
                })
            })

        console.log(episodes)
    }

    return (
        <PodcastsContext.Provider
            value={{
                podcasts,
                podcast,
                filteredPodcasts,
                cargando,
                filterPodcasts,
                obtenerPodcast,
                obtenerEpisodios,
            }}
        >{children}
        </PodcastsContext.Provider>
    )
}
export { 
    PodcastsProvider
}
    
export default PodcastsContext