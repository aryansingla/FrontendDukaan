import React from 'react'
import "./Main.css"
import {quotes} from "../../data.js"
import Quote from "./quote/Quote.jsx";
import {BsX} from 'react-icons/bs';
const Main = () => {
  return (
    <div className="main">
       <div className="mainTopContent" style={{backgroundColor:"white"}}>
        <div className="mainTitle">
            <b>
        Free slogan maker
        </b>
        </div>
        <div className="mainSubTitle">
        Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free.
        </div>
        <div className="wordSearch">
            <div className="wordSearchTitle">
            Word for your slogan
            </div>
            <div className="inputSearch">
                <div className="inputCrossIcon"><BsX/></div>
                <input type="text" />
            </div>
            <button className="inputButton">Generate Slogans</button>
        </div> 
       </div>
       <hr></hr>
       <div className="MainLowerContent">
        <div className="LowerHead">
            <div className="LowerHeadTitle">
            We have generated 1,023 slogans for “cozy”
            </div>
            <div className="LowerHeadButton">
                <button>Download all</button>
            </div>
        </div>
        <div className="LowerBottom">
        <div className="quotesList">
                {quotes.map((item)=>(
                  
                   <Quote 
                    key={item.id}
                    title={item.title}
                    subtitle={item.subtitle}
                      />
                   
                ))}
            </div>
        </div>
        <hr/>
        < div className="numbering">
            <div className="numberingList">
           
                <button className="numberingListBtn active"><li className='btn1'>1</li></button>
                <li className="btn">2</li>
                <li className="btn">3</li>
                <li className="btn">...</li>
                <li className="btn">21</li>
            
            </div>
            <div className="numberingButton">
             Next &gt;
            </div>
        </div>
       </div>
    </div>
  )
}

export default Main