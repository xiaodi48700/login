import React, { Component } from 'react';
import '../src/App.css';
import Login from './Login'
import {Link,  BrowserRouter as Router,withRouter} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {    
        currentIndex:1,
        adminStyle:{
          display:'none',
          visibility:'invisible'
        }
  }

}
tabChoiced=(e)=>{    
   this.state.tabs.forEach(function(value,index){       
   });
}
onlog=()=>{
  this.props.history.push("./login")
}
adminInfo=()=>{
 this.setState(
   this.adminStyle={
     display:'block',
     visibility:'visible'
   }
 )
}
adminMove=()=>{
  this.setState(
    this.adminStyle={
      display:'none',
      visibility:'invisible'
    }
  )
}
   render() {
    return (
    <div id="app"  className='App'>
      <div id="u27"  className="ax_default">
        <div id="u27_state0"  className="panel_state">         
            <div id="u28"  className="ax_default  " data-label="顶部背景">
              <div id="u28_div"></div>
            </div>     
      
            <div id="u29"  className="ax_default">
              <div id="u29_state0"  >
                
                  <div id="u30"  className="ax_default  "title="账户设置">
                    <div id="u30_div"  className=""></div>
                    <div id="u30_text"  className="text ">
                      <p><span><img style={{width:'20px',height:'20px'}} src={require('../src/images/设置.svg')}></img></span></p>
                    </div>
                  </div>

              
              
                  <div id="u31"  className="ax_default  " data-label="账户信息" onMouseOver={this.adminInfo} onMouseOut={this.adminMove}>
                    <div id="u31_div"  className=""></div>
                    <div id="u31_text"  className="text ">
                      <p><span ><img style={{width:'20px',height:'20px'}} src={require('../src/images/账户.svg')}></img></span><span style={{fontFamily:'微软雅黑, sans-serif',fontSize:'12px',position:'relative',bottom:'2px'}}> Admin </span><span style={{fontFamily:'微软雅黑, sans-serif',fontSize:'12px'}}><img style={{width:'5px',height:'5px'}} src={require('../src/images/下拉.svg')}></img></span></p>
                    </div>
                  </div>

             
             
                  <div id="u32"  className="ax_default  " data-label="消息中心" title="消息中心">
                    <div id="u32_div"  className=""></div>
                    <div id="u32_text"  className="text ">
                      <p><span style={{fontFamily:'FontAwesome, sans-serif'}}></span><span style={{fontFamily:'微软雅黑, sans-serif'}}><img style={{width:'20px',height:'20px'}} src={require('../src/images/消息中心.svg')}></img> </span></p>
                    </div>
                  </div>

                            
                  <div id="u34"  className="ax_default  " data-label="退出系统" title="退出系统">
                    <div id="u34_div"  className=""></div>
                    <div id="u34_text"  className="text ">
                      <p><span></span></p>
                    </div>
                  </div>

               
               
                  <div id="u35"  className="ax_default"  style={this.adminStyle}>
                    <div id="u35_state0"  className="panel_state">
                      <div id="u35_state0_content"  className="panel_state_content">

                        <div id="u37"  className="ax_default  ">
                          <div id="u37_div"  className=""></div>
                          <div id="u37_text"  className="text ">
                            <p><span>修改密码</span></p>
                          </div>
                        </div>

                      
                        <div id="u38"  className="ax_default  ">
                          <div id="u38_div"  className=""></div>
                          <div id="u38_text"  className="text ">
                            <p><span>基本信息</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                 
                  <div id="u39"  className="ax_default ax_default_hidden" style={{display:'none',visibility: 'hidden'}}>
                    <div id="u39_state0"  className="panel_state" >
                      <div id="u39_state0_content"  className="panel_state_content">

                      
                        <div id="u40"  className="ax_default  ">
                          <div id="u40_div"  className=""></div>
                          <div id="u40_text"  className="text " style={{display:'none',visibility: 'hidden'}}>
                            <p></p>
                          </div>
                        </div>

                      
                        <div id="u41"  className="ax_default" data-left="20" data-top="40" data-width="140" data-height="160">

                        
                          <div id="u42"  className="ax_default  ">
                            <div id="u42_div"  className=""></div>
                            <div id="u42_text"  className="text ">
                              <p><span>全部消息</span></p>
                            </div>
                          </div>

                        
                          <div id="u43"  className="ax_default  ">
                            <div id="u43_div"  className=""></div>
                            <div id="u43_text"  className="text ">
                              <p><span>产品消息</span></p>
                            </div>
                          </div>

                        
                          <div id="u44"  className="ax_default  ">
                            <div id="u44_div"  className=""></div>
                            <div id="u44_text"  className="text ">
                              <p><span>安全消息</span></p>
                            </div>
                          </div>

                        
                          <div id="u45"  className="ax_default  ">
                            <div id="u45_div"  className=""></div>
                            <div id="u45_text"  className="text ">
                              <p><span>服务消息</span></p>
                            </div>
                          </div>

                        
                          <div id="u46"  className="ax_default  ">
                            <img id="u46_img"  className="img " src={require('../src/images/系统框架/u46.svg')}/>
                            <div id="u46_text"  className="text ">
                              <p><span>(</span><span style={{color:'#F04844'}}>10</span><span>)</span></p>
                            </div>
                          </div>

                  
                          <div id="u47"  className="ax_default  ">
                            <img id="u47_img"  className="img " src={require('../src/images/系统框架/u46.svg')}/>
                            <div id="u47_text"  className="text ">
                              <p><span>(</span><span style={{color:'#F04844'}}>10</span><span>)</span></p>
                            </div>
                          </div>

                         
                          <div id="u48"  className="ax_default  ">
                            <img id="u48_img"  className="img " src={require('../src/images/系统框架/u46.svg')}/>
                            <div id="u48_text"  className="text ">
                              <p><span>(</span><span style={{color:'#F04844'}}>10</span><span>)</span></p>
                            </div>
                          </div>

                  
                          <div id="u49"  className="ax_default  ">
                            <img id="u49_img"  className="img " src={require('../src/images/系统框架/u46.svg')}/>
                            <div id="u49_text"  className="text ">
                              <p><span>(</span><span style={{color:'#F04844'}}>10</span><span>)</span></p>
                            </div>
                          </div>
                        </div>

                  
                        <div id="u50"  className="ax_default  ">
                          <div id="u50_div"  className=""></div>
                          <div id="u50_text"  className="text ">
                            <p><span>消息中心</span></p>
                          </div>
                        </div>

                        
                        <div id="u51"  className="ax_default  ">
                          <div id="u51_div"  className=""></div>
                          <div id="u51_text"  className="text ">
                            <p><span>接收设置</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="u52"  className="ax_default" data-label="搜索框" style={{left:'0px',top:'20px',height:'30px'}}>

                    <div id="u53"  className="ax_default  " data-label="边框">
                      <img id="u53_img"  className="img " src={require('../src/images/系统框架/边框_u53.svg')}/>
                      <div id="u53_text"  className="text " style={{display:'none',visibility: 'hidden'}}>
                        <p></p>
                      </div>
                    </div>

                
                    <div id="u54"  className="ax_default  " data-label="输入框">
                      <div id="u54_div"  className=""></div>
                      <input id="u54_input" type="text" className="u54_input" maxLength="20"/>
                    </div>

                    <div id="u55"  className="ax_default   ax_default_hidden" data-label="清除" style={{display:'none',visibility: 'hidden'}}>
                      <div id="u55_div"  className=""></div>
                      <div id="u55_text"  className="text ">
                        <p><span></span></p>
                      </div>
                    </div>

               
                    <div id="u56"  className="ax_default  " data-label="图标">
                      <div id="u56_div"  className=""></div>
                      <div id="u56_text"  className="text ">
                        <p><span><img style={{width:'20px',height:'20px'}} src={require('../src/images/搜索.svg')}></img></span></p>
                      </div>
                    </div>
                  </div>
            
              </div>
            </div>

         
            <div id="u57"  className="ax_default">
              
              <div id="u57_text">
                <p><span>城市群数据共享</span></p>
              </div>
            </div>


            <div id="u58"  className="ax_default  ">
              <img id="u58_img"  className="img " src={require('../src/images/系统框架/u58.svg')}/>
              <div id="u58_text"  className="text " style={{display:'none',visibility: 'hidden'}}>
                <p></p>
              </div>
            </div>

         
          <div id="u59"  className="ax_default  " onClick={this.onlog}>
            
              <div id="u59_div"  className="" tabIndex='2'></div>
              <div id="u59_text"  className="text ">
                <p><span>数据目录</span></p>
              </div>
            </div>

          
   
            

       
            <div id="u60"  className="ax_default" onClick={(e)=>this.tabChoiced(e)}>
              <div id="u60_div"  className="" tabIndex='4'></div>
              <div id="u60_text"  className="text ">
                <p><span>数据图谱</span></p>
              </div>
            </div>

          
            <div id="u61"  className="ax_default  " onClick={(e)=>this.tabChoiced(e)}>
              <div id="u61_div"  className="" tabIndex='5'></div>
              <div id="u61_text"  className="text ">
                <p><span>资讯动态</span></p>
              </div>
            </div>

     
            <div id="u62"  className="ax_default  "onClick={(e)=>this.tabChoiced(e)}>
              <div id="u62_div"  className="" tabIndex='6'></div>
              <div id="u62_text"  className="text ">
                <p><span>信息地图</span></p>
              </div>
            </div>

         
            <div id="u63"  className="ax_default  " onClick={(e)=>this.tabChoiced(e)}>
              <div id="u63_div"  className="" tabIndex='3'></div>
              <div id="u63_text"  className="text ">
                <p><span>数据接口</span></p>
              </div>
            </div>

            <div id="u64"  className="ax_default   selected" selectiongroup="u25左侧菜单">
              <div id="u64_div"  className="selected" tabIndex='1'></div>
              <div id="u64_text"  className="text ">
                <p><span>首页</span></p>
              </div>
            </div>
         
        </div>
      </div>
 
     </div>
    );
  }
}


export default withRouter( App);