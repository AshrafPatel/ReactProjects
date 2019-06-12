import React from "react"
import "./Order.css"

class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            workerArray: []
        }
        this.props = props;
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    getData = (props) => {
        var date = new Date(props.deadline * 1000);
        // Hours part from the timestamp
        var amPm = date.getHours() >= 12 ? 'PM' : 'AM'
        // % is modulo which is the remainder after division || will change 0 to 12
        // because 0 is falsey everything else will be left as it is
        var hours = ("0" + ((date.getHours() % 12) || 12)).substr(-2)
        // Minutes part from the timestamp
        var minutes = ("0" + date.getMinutes()).substr(-2)
        // Seconds part from the timestamp
        var seconds = ("0" + date.getSeconds()).substr(-2)
        var month = date.getMonth();
        var dateMonth = date.getDate();
        var year = date.getFullYear();
        // eslint-disable-next-line
        return month + "/" + dateMonth + "/" + "/" + year + "\t" + hours + ':' + minutes + ':' + seconds + ' ' + amPm
    }

    componentDidMount() {
        fetch("https://www.hatchways.io/api/assessment/workers/" + this.props.workerId)
        .then(data => data.json())
        .then(data => {
            let worker = this.state.workerArray.slice();
            worker[this.props.workerId] = data.worker;
            this.setState({
                workerArray: worker
            })
        })
    }

    getWorkerName = () => {
        let workerFrom = {...this.state.workerArray[this.props.workerId]};
        return workerFrom.name;
    }
    
    render() {
        let workerFrom = {...this.state.workerArray[this.props.workerId]};
        console.log(workerFrom.image)
        return (
            <div className="orderContainer">
                <h2>{this.props.name}</h2>
                <p><span>OrderId:</span> {this.props.id}</p>
                <p><span>Description:</span> {this.props.description}</p>
                <div className="worker">
                    <img src={workerFrom.image}/>
                    <div className="workerInfo">
                        <h3 className="workerName">{workerFrom.name}</h3>
                        <p>{workerFrom.companyName}</p>
                        <p>{workerFrom.email}</p>
                    </div>
                </div>
                <p className="date"><i>{this.getData(this.props)}</i></p>
            </div>
        )
    }
}

export default Order