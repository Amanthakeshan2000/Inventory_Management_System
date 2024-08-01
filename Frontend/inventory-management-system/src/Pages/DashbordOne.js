import React from 'react'
import "../Css/dashboardcss.css"
import Dimg from "../Assets/dashbostimg.png"

export default function DashbordOne() {
  return (
    <div className="main-content">
    <div className="greeting">
        <h1>Good Morning!</h1>
        <div className="date">Monday, 2024/05/04</div>
    </div>
    <div className="background-image">
        <img src={Dimg} alt="Campus View" />
    </div>
</div>
  )
}