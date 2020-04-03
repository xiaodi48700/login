import React, { Component } from 'react';

import './App.css';

class Comp extends Component{
 
  render() {
    return (
      <button className="comp" onClick={this.handleClick}>
      </button>
    )
  }
}
function add(ax){
  alert(ax);
}

class Acs extends Component {
  constructor(props) {
    super(props);
   console.log(this.props);
  }
  
 render(){
   return(
   <div>
    
    
   </div>
    
   )
 }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      count:1
     };
  }
  
  handleClick=()=>{
    this.setState((prevState,prevProps)=>({
      count:prevState.count+1
    }),
    ()=>{}
    )
  }

  componentWillReceiveProps(props){
    
  }
  componentDidUpdate(){
    console.log('更新完成')
  }
  shouldComponentUpdate(nextProps,nextState){
    
    if(nextState.count % 2===0)
    {
      console.log('是否更新'); 
      return true;      
    }
    else
    {
       console.log('无法更新');
      return false;     
    }
       
   }

  render() {
    return (
    <div className="App">
      <div>{this.state.count}</div>
      <button onClick={this.handleClick}>+1</button>          
    </div>
    );
  }
}

export default App;