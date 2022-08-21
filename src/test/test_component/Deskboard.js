import React, { Component } from 'react'
import { Routes, Route, Link } from "react-router-dom"

import Main from './Main'
import Detail from './Detail'
export default class Deskboard extends Component {
  render() {
    return (
     <>
        <div>Routes</div>
            <div className="App">
                <nav>
                    <ul>
                   
                    <li>
                        <Link to="/Main" activeClassName="active">
                        Main
                        </Link>
                    </li>
                    <li>
                        <Link to="/Detail" activeClassName="active">
                        Detail
                        </Link>
                    </li>
                   
                    </ul>
                </nav>
            </div>
      <div className="main"></div>
         <Routes>
          <Route path="/Main" element={<Main />}></Route>   
          <Route path="/Detail" element={<Detail />}></Route>

        </Routes>
     </>
    

     
    )
  }
}
