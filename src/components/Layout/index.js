import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'
import Cursor from '../Cursor'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <Cursor />
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />

        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
