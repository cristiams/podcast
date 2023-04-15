import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { PodcastsProvider } from './context/PodcastProvider'
import Layout from './Layout'
import Podcasts from './components/Podcasts'
import Podcast from './components/Podcast'
import Episode from './components/Episode'

function App() {

  return (
    <BrowserRouter>
      <PodcastsProvider>
        <Routes>
            <Route path='/'element={<Layout />} >
              <Route index element={<Podcasts />}/>
              <Route path="podcast/:id" element={<Podcast />} />
              <Route path='podcast/:id/episode/:id' element={<Episode />} />
            </Route>
        </Routes>
      </PodcastsProvider>
    </BrowserRouter>
  )
}

export default App
