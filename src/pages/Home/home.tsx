import { CoinContext } from '../../context/CoinContext';
import './home.css';
import React, { useContext, useEffect, useState } from 'react'

const Home = () => {

  const {allCoin, currency} = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);



  useEffect(() => {
  setDisplayCoin(allCoin)
},[allCoin])



  return (
    <div className='home' >

      <div className='hero' >

        <h1>
          Crypto Explorer
        </h1>
        <p>
          Welcome to the World's Best Cryptocurrency explorer.
          Sign up to explore more about Cryptos.
        </p>

        <form >
          <input type="text" name="" id="" placeholder='Search crypto...' />
          <button type='submit' >
            search
          </button>
        </form>

      </div>

      <div className='crypto-table' >
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p>24H Change</p>
          <p className='market-cap' >Market Cap</p>
        </div>

        {
          displayCoin.slice(0, 12).map((item, index) => {
            
            return (
              <div className='table-layout' key={index} >
                <p>
                  {
                    item.market_cap_rank
                  }
                </p>                
                <div>
                  <img src={item.image} alt="" />
                  <p>
                    {item.name + '-' + item.symbol}
                  </p> 
                </div>
                <p>
                  {
                    currency.symbol
                  }
                  {
                    item.current_price
                  }
</p>
               
                <p className={item.price_change_percentage_24h> 0?'green': 'red' } >
                  {
                    Math.floor(item.price_change_percentage_24h*100)/100
                  }
                </p>

                <p className='market-cap' >
                  {
                    currency.symbol
                  }
                  {
                    item.market_cap.toLocaleString()
                  }
                </p>
              </div>


            )

          })
        }



      </div>
    </div>
  )
}

export default Home
