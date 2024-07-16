import "./Navbar.css";
import React, { useContext } from 'react'
import logo from '../../assets/sp.webp';
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {

  const { setCurrency } = useContext(CoinContext);



  const currencyHandler = (event) => {
    switch (event.target.value) {
      case 'usd': {
        setCurrency({ name: "usd", symbol: "$" })
        break;
      }
       
      case 'euro': {
        setCurrency({ name: "euro", symbol: "#" })
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
        <Link to={'/'} >
          <img src={logo} alt="logo" className="logo" />
          Explorer
        </Link>
      </p>
      

      <ul>
        <Link to={'/'} >
          <li>Home</li>
        </Link>
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
