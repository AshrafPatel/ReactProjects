import React from 'react';
import Order from "./Order/Order";
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      filteredOrder: [],
      orderData: [],
      error: false
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.searchHandler = this.searchHandler.bind(this)
    this.sortByDeadlineAsc = this.sortByDeadlineAsc.bind(this)
    this.sortByDeadlineDesc = this.sortByDeadlineDesc.bind(this)
  }

  searchHandler = (event) => {
    if (this.state.orderData == null) {
      return;
    }
    let ordersDuplicate = [...this.state.orderData.orders]
    console.log(ordersDuplicate)
    let search = event.target.value
    // eslint-disable-next-line
    let searchArray = Array.from(ordersDuplicate).map(order => {
      if (order.name.includes(search)) {
        return <Order key={order.id} name={order.name} description={order.description} deadline={order.deadline} id={order.id} workerId={order.workerId}/>
      }
    })
    this.setState({
      filteredOrder: searchArray
    })
  }

  sortByDeadlineAsc() {
    if (this.state.orderData == null) {
      return;
    }
    let ordersDuplicate = [...this.state.orderData.orders]
    ordersDuplicate = ordersDuplicate.sort((a, b) => (a.deadline - b.deadline))
    console.log(ordersDuplicate)
    let searchArray = Array.from(ordersDuplicate).map(order => {
      return <Order key={order.id} name={order.name} description={order.description} deadline={order.deadline} id={order.id} workerId={order.workerId}/>
    })
    this.setState({
      filteredOrder: searchArray
    });
  }
  
  sortByDeadlineDesc() {
    if (this.state.orderData == null) {
      return;
    }
    let ordersDuplicate = [...this.state.orderData.orders]
    ordersDuplicate = ordersDuplicate.sort((a, b) => (b.deadline - a.deadline))
    console.log(ordersDuplicate)
    let searchArray = Array.from(ordersDuplicate).map(order => {
      return <Order key={order.id} name={order.name} description={order.description} deadline={order.deadline} id={order.id} workerId={order.workerId}/>
    })
    this.setState({
      filteredOrder: searchArray
    });
  }

  componentDidMount() {
    this.setState({
      loading: true
    })
    let countWorkerId;
    fetch("https://www.hatchways.io/api/assessment/work_orders")
    .then(results => {
      if (!results.ok) throw new Error(results.status)
      else return results.json()
    })
    .then(data => {
      const tempData = Array.from(data.orders).map(order => {
        if (countWorkerId < order.workerId) { countWorkerId = order.workerId}
        return <Order key={order.id} name={order.name} description={order.description} deadline={order.deadline} id={order.id} workerId={order.workerId}/>
      })
      this.setState({
        orderData: data,
        loading: false,
        filteredOrder: tempData
      })
    })
    .catch((error) => {
      console.log('error: ' + error);
      this.setState({
        error: true
      })
    })
  }


  render(props) {
    console.log(this.state.workers)
    return (
      <div>
        <header>
          <input type="text" name="search" onChange={this.searchHandler} placeholder="Filter by order id..."/>
        </header>
        <div className="buttonContainer">
            <input type="button" onClick={this.sortByDeadlineAsc} value="Sort Ascending"/>
            <input type="button" onClick={this.sortByDeadlineDesc} value="Sort Descending"/>
          </div>
        <div className="mainDiv">
          {this.state.loading ? <h2>Loading...</h2> : this.state.filteredOrder}
        </div>
      </div>
    );
  }
}

export default App;