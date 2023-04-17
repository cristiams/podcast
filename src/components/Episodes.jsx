import { Link, Navigate } from "react-router-dom"
import usePodcasts from '../hooks/usePodcasts';
import styles from '../styles/Episodes.module.css'

const Episodes = () => {
  const {podcast} = usePodcasts()

  return (
    <>
      <div className="p-3 bg-white mb-3 border border-light border-1">
        <h5>Episodes: {podcast.episodes.length}</h5>
      </div>
      <div className="p-4 bg-white border border-light border-1">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col" className={styles.tableThTd}>Title</th>
              <th scope="col" className="date">Date</th>
              <th scope="col" className="text-end">Duration</th>
            </tr>
          </thead>
          <tbody>
            {podcast && 'episodes' in podcast &&
              podcast.episodes.map((e, index) => (
                <tr key={e.id}>
                  <td className={styles.tableThTd}>
                    <Link to={`episode/${e.id}`} className="text-decoration-none">{e.title}</Link>
                  </td>
                  <td className="date">{e.date}</td>
                  <td className="text-end pe-3">{e.duration}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Episodes
