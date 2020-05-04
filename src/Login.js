import React, { Component } from 'react';
import '../src/login.css'



class Login extends Component {
  constructor(props) {
    super(props);  
  }
   
   render() {
    return (
  
     <div id="base">
     <div id="u1" className="ax_default" datalabel="背景">
        <div id="u1_state0" datalabel="State1">
            <div id="u2" className="ax_default image">
              <img id="u2_img" className="img " src={require('../src/images/u2.svg')}/>
            </div>
            <div id="u3" className="ax_default">             
              <div id="u3_text" className="text ">
                <p style={{fontSize:'32px'}}><span className='title'>城市群数据共享平台</span></p><p style={{fontSize:'24px'}}><span className='egTitle'>Information Sharing Platform of Urban Agglomeration</span></p>
              </div>
            </div>
          </div>
       
      </div>
      <div id="u4" className="ax_default" datalabel="底部版权">
        <div id="u4_state0" datalabel="State1" >         
            <div id="u6" className="ax_default">
              <img id="u6_img" className="img " src={require('../src/images/登录界面/u6.svg')}/>
              <div id="u6_text" className="text ">
                <p><span>自然资源部城市自然资源监测与仿真重点实验室</span></p><p><span>深圳市数字城市工程研究中心</span></p>
              </div>
            </div>        
        </div>
      </div>
      <div id="u8"  datalabel="登录面板">
        <div id="u8_state0" className="panel_state" datalabel="State1">
          <div id="u8_state0_content" className="panel_state_content">

            <div id="u9" className="ax_default _默认样式" datalabel="登录按纽">
              <div id="u9_div" ></div>
              <div id="u9_text" className="text ">
                <p><span>登录</span></p>
              </div>
            </div>

            <div id="u10" className="ax_default ax_default_hidden" datalabel="警告提示" style={{display:'block'}}>
              <div id="u10_state0" className="panel_state" datalabel="用户名或密码不正确">
                <div id="u10_state0_content" className="panel_state_content">                  
                  <div id="u11" className="ax_default _默认样式">
                    <div id="u11_div" className=""></div>
                    <div id="u11_text" className="text ">
                      <p style={{fontSize:'12px'}}><span className='tishi'>用户名或密码不正确</span></p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="u10_state1" className="panel_state" datalabel="请填写用户名称" style={{visibility: 'hidden'}}>
                <div id="u10_state1_content" className="panel_state_content">

                 
                  <div id="u12" className="ax_default _默认样式">
                    <div id="u12_div" className=""></div>
                    <div id="u12_text" className="text ">
                      <p style={{fontSize:'12px'}}><span className='tishi'>请填写用户账号</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="u10_state2" className="panel_state" datalabel="请填写登录密码" style={{visibility: 'hidden'}}>
                <div id="u10_state2_content" className="panel_state_content">

               
                  <div id="u13" className="ax_default _默认样式">
                    <div id="u13_div" className=""></div>
                    <div id="u13_text" className="text ">
                      <p style={{fontSize:'12px'}}><span className='tishi'>请填写登录密码</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          
            <div id="u14" className="ax_default _默认样式">
              <img id="u14_img" className="img " src={require('../src/images/登录界面/u14.svg')}/>
              <div id="u14_text" className="text ">
                <p style={{fontSize:'18px'}}><span>用户登录 / </span><span style={{fontSize:'16px'}}>USER LOGIN</span></p>
              </div>
            </div>

           
            <div id="u15" className="ax_default" datalabel="输入框" data-left="0" data-top="70" data-width="370" data-height="55">

            
              <div id="u16" className="ax_default _默认样式" datalabel="边框">
                <img id="u16_img" className="img " src={require('../src/images/登录界面/边框_u16.svg')}/>
              </div>

             
              <div id="u17" className="ax_default _默认样式" datalabel="输入框">
                <div id="u17_div" className=""></div>
                <input id="u17_input" type="text" className="u17_input" maxLength="20"/>
              </div>

              
       
             
              <div id="u19" className="ax_default _默认样式" datalabel="图标">
                <div id="u19_div" className=""></div>
                <div id="u19_text" className="text ">
                  <p><img src={require('../src/images/yonghu.png')} style={{width:'30px',height:'30px'}}></img></p>
                </div>
              </div>
            </div>

            
            <div id="u20" className="ax_default" datalabel="输入框" data-left="0" data-top="155" data-width="370" data-height="55">

             
              <div id="u21" className="ax_default _默认样式" datalabel="边框">
                <img id="u21_img" className="img " src={require('../src/images/登录界面/边框_u16.svg')}/>               
              </div>

            
              <div id="u22" className="ax_default " datalabel="输入框">
                
                <input id="u22_input" type="password" className="u22_input" maxLength="20"/>
              </div>             
              <div id="u23" className="ax_default  ax_default_hidden" datalabel="清除" style={{display:'none',visibility: 'hidden'}}>
                <div id="u23_div" className=""></div>
                <div id="u23_text" className="text ">
                  <p><span></span></p>
                </div>
              </div>

              <div id="u24" className="ax_default _默认样式" datalabel="图标">
              
                <div id="u24_text" className="text ">
                <p><img src={require('../src/images/mima.png')} style={{width:'30px',height:'30px'}}></img></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
 
    );
  }
}

export default Login;