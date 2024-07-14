import "./Navbar.css";
import React, { useContext } from 'react'
import logo from '../../assets/sp.webp';
import { CoinContext } from "../../context/CoinContext";

const Navbar = () => {

const {setCurrency}= useContext(CoinContext)

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case 'usd': {
        setCurrency({ name: "usd", symbol: "$" })
        break;
      }
       
      case 'euro': {
        setCurrency({ name: "Naria", symbol: "#" })
        break;
      }
        
      default: {
        setCurrency({ name: "usd", symbol: "$" })
        break;
      }
        
        
  }

}



  return (
    <div className="navbar" >

      <p style={{display:"flex", alignItems:"center", gap:".5em"}} >
        <img src={logo} alt="logo" className="logo" />
        Explorer
      </p>
      

      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>


      <div className="nav-right" >
        <select name="" id="" onChange={currencyHandler} >
          <option value="usd">USD</option>
          <option value="euro">EURO</option>
          <option value="naria">NARIA</option>
        </select>
        <button>
          sign up 
        </button>
      </div>
    </div>
  )
}

export default Navbar
