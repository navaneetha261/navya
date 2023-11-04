import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BsBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'
import './index.css'

const websiteLogo = 'https://assets.ccbp.in/frontend/react-js/logo-img.png'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="header-container">
      <ul className="list-container">
        <li className="logo-container">
          <Link className="nav-link" to="/">
            <img
              className="website-logo"
              src={websiteLogo}
              alt="website logo"
            />
          </Link>
        </li>
        <li className="nav-links-container">
          <Link className="nav-link" to="/">
            <AiFillHome className="nav-icon" />
            <h1 className="nav-to-name">Home</h1>
          </Link>
          <Link className="nav-link" to="/jobs">
            <h1 className="nav-to-name">Jobs</h1>
            <BsBriefcaseFill className="nav-icon" />
          </Link>
        </li>
        <li className="nav-button-container">
          <FiLogOut className="nav-icon" onClick={onClickLogout} />
          <button
            type="button"
            className="logout-button"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(Header)
