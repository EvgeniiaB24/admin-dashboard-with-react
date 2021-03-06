import React from 'react'
import Navbar from '../../components/navbar/navbar';
import Sidebar from '../../components/sidebar/sidebar';
import "./home.scss"
import Widget from '../../components/widget/widget';
import Featured from '../../components/featured/featured';
import Chart from '../../components/chart/chart';
import Tables from '../../components/table/table'

function Home() {
  return (
    <div className = "home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
       <div className="widgets">
         <Widget type="user"  />
         <Widget type="order"/>
         <Widget type="earning" />
         <Widget type="balance" />
       </div>
       <div className="charts">
          <Featured />
          <Chart />
       </div>
       <div className="listContainer">
         <div className="listTitle">Latest Transactions</div>
         <Tables />
       </div>
      </div>
    </div>
  )
}

export default Home;