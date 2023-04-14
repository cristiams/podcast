import { Link } from "react-router-dom"
import styles from '../styles/Episodes.module.css'

const Episodes = () => {

  return (
    <>
      <div className="p-3 bg-white mb-3 border border-light border-1">
        <h5>Episodes: 66</h5>
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
            <tr>
              <td className={styles.tableThTd}>
                <Link to="/episode/1" className="text-decoration-none">Clippling work-work</Link>
              </td>
              <td className="date">1/3/2016</td>
              <td className="text-end pe-3">14:00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Episodes
