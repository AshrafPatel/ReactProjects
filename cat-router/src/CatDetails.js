import React,{Component} from "react"
import {Link} from "react-router-dom"
import "./CatDetails.css"

class CatDetails extends Component {
    render() {
        let {cat} = this.props
        return (
            <div className="container">
                <div className="catdetails row">
                    <div className="bg-light card justify-content-center col-lg-12">
                            <img className="img-fluid. max-width card-img-top" src={cat.src} alt={cat.name}  />
                            <div className="card-body">
                                <h2 className="card-title display-2">{cat.name}</h2>
                                <h4>{cat.age} years old</h4>
                                <ul className="list-group list-group-flush">
                                    {cat.facts.map(f => {
                                        return <li className="list-group-item">{f}</li>
                                    })}
                                </ul>
                            <Link to="/cats" className="btn btn-primary btn-lg btn-block">Go Back</Link>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CatDetails