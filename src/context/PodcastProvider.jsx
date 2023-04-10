import { useState, useEffect, createContext } from 'react'

const PodcastsContext = createContext();

const PodcastsProvider = ({children}) => {

    const [podcasts, setPodcasts] = useState([]);
    const [podcast, setPodcast] = useState({});
    const [cargando, setCargando] = useState(false);
    const [buscador, setBuscador] = useState(false)


    useEffect(() => {
        const getPodcasts = async () => {
            const localEntries = localStorage.getItem('entries')
            if (localEntries) {
                setPodcasts(JSON.parse(localEntries))
            } else {
                try {
                    fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
                    .then(response => {
                        if (response.ok) return response.json()
                        throw new Error('Network response was not ok.')
                    })
                    .then(data => {
                        console.log(data.feed.entry)
                        const entries = data.feed.entry
                        localStorage.setItem('entries', JSON.stringify(entries))
                        setPodcasts(entries)
                    });
                } catch (error) {
                    console.log('No se solicitar los 100 podcasts mas recientes')
                }
            }
        }
        getPodcasts()
    }, [])
    

    return (
        <PodcastsContext.Provider
            value={{
                podcasts,
                podcast,
                cargando,
            }}
        >{children}
        </PodcastsContext.Provider>
    )
}
export { 
    PodcastsProvider
}
    
export default PodcastsContext