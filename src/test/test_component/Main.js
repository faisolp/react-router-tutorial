import React, { Component } from 'react'
 import {withRouter} from  './withRouter'

class Main extends Component {
  render() {
    return (
      <div>
        <b>Main</b>
        <button title='Test' onClick={()=>{
               // this.props.history.push('/Detail');
                console.dir(this.props.navigate)
                
          
        }}  >Test</button>  
      </div>
    

     
    )
  }
}
export default  withRouter(Main)

