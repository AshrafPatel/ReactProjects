import React,{ Component } from "react";
import "./CatList.css"
import { Link } from "react-router-dom";

class CatList extends Component {
    render() {
        let cats = this.props.cats.map(c => {
            return (
                <div className="col-lg-4 col-md-6 text-center catlist" key={c.name}>
                    <Link className="text-dark no-underline" to={`/cats/${c.name}`}>
                    <img src={c.src} alt={c.name}/>
                        <h3 className="cat-link">
                            {c.name}
                        </h3>
                    </Link>
                </div>
            )
        })
        return (
            <div className="catlist">
                <h1 className="text-center cat-header">Cat List</h1>
                <div className="container">
                    <div className="row">
                        {cats}                      
                    </div>
                </div>
            </div>
        )
    }
}

export default CatList
