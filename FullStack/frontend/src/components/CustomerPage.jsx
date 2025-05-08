import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function CustomerPage() {

    const navigator = useNavigate();

    const { customerID } = useParams();

    function Home() {
        navigator(`/dashboard/${customerID}`);
    }

    function Flights() {
        navigator('/flights')
    }

    function PastBookings() {
        navigator(`/past-bookings/${customerID}`);
    }

    function UpcomingBookings() {
        navigator(`/upcoming-bookings/${customerID}`);
    }

    function Profile() {
        navigator(`/profile/${customerID}`);
    }

    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#" style={{marginLeft: '20px'}}>Dashboard</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav">
                <a className="nav-item nav-link active" onClick={{Home}} href="#">Home <span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link" href="#">Features</a>
                <a className="nav-item nav-link" onClick={{Flights}} href="#">Flights</a>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Bookings
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" onClick={{PastBookings}} href="#">Past Bookings</a>
                        <a className="dropdown-item"onClick={{UpcomingBookings}} href="#">Upcoming Flights</a>
                        {/* <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a> */}
                    </div>
                </li>
                </ul>
                <ul className='navbar-nav ms-auto'>
                    <a className="nav-item nav-link" onClick={{Profile}} href="#" style={{marginRight: '20px'}}>Profile</a>
                </ul>
                {/* </div> */}
            </div>
        </nav>
        <div className="container mt-5 text-center">
            <h1 className="display-4 mb-4">Welcome to the Customer Dashboard</h1>
            <p className="lead">This is the Main Dashboard!</p>
            <hr />
        </div>
    </>
  )
}

export default CustomerPage