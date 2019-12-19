import React,{Component} from "react"
import {NavLink, Link} from "react-router-dom"

class Navbar extends Component {
    render() {
        const navCats = this.props.cats.map(c => {
            return (
                <li className="nav-item active">
                    <NavLink exact activeClassName="text-light" className="text-muted nav-link" to={`/cats/${c.name}`}>{c.name} <span className="sr-only">(current)</span></NavLink>
                </li>
            )
        })
        return (
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <Link className="navbar-brand" to="/cats">Cat Router</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {navCats}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar