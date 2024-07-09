import logo from './logo.svg';
import './App.css';
import krr from './resource/krr.png';
import hiup from './resource/hiup.png';
import sk from './resource/sk.svg';
import krrStepOn0 from './resource/krrStep0.svg';
import krrStepOn1 from './resource/krrStep1.svg';
import krrStepOn2 from './resource/krrStep2.svg';
import krrStepOn3 from './resource/krrStep3.svg';
import hiupStepOn0 from './resource/hiupStep0.svg';
import hiupStepOn1 from './resource/hiupStep1.svg';
import hiupStepOn2 from './resource/hiupStep2.svg';
import hiupStepOn3 from './resource/hiupStep3.svg';
import pptOn from './resource/ic_ppt_on.svg';
import pptOff from './resource/ic_ppt_off.svg';
import workbookOn from './resource/ic_workbook_on.svg';
import workbookOff from './resource/ic_workbook_off.svg';
import gameOn from './resource/ic_game_on.svg';
import gmaeOff from './resource/ic_game_off.svg';  
import bg from './resource/bg.svg';
import stars from './resource/stars.svg';
import circle from './resource/circle.svg';
import krr5111 from './resource/thumbnail/5-1-1-1.jpg';
import krr5112 from './resource/thumbnail/5-1-1-2.jpg';
import krr5113 from './resource/thumbnail/5-1-1-3.jpg';
import krr5114 from './resource/thumbnail/5-1-1-4.jpg';
import krr5115 from './resource/thumbnail/5-1-1-5.jpg';
import krr5121 from './resource/thumbnail/5-1-2-1.jpg';
import krr5122 from './resource/thumbnail/5-1-2-2.jpg';
import krr5123 from './resource/thumbnail/5-1-2-3.jpg';
import krr5124 from './resource/thumbnail/5-1-2-4.jpg';
import krr5125 from './resource/thumbnail/5-1-2-5.jpg';
import krr5131 from './resource/thumbnail/5-1-3-2.jpg';
import krr5132 from './resource/thumbnail/5-1-3-1.jpg';
import krr5133 from './resource/thumbnail/5-1-3-3.jpg';
import krr5134 from './resource/thumbnail/5-1-3-4.jpg';
import krr5135 from './resource/thumbnail/5-1-3-5.jpg';
import krr5141 from './resource/thumbnail/5-1-4-1.jpg';
import krr5142 from './resource/thumbnail/5-1-4-2.jpg';
import krr5143 from './resource/thumbnail/5-1-4-3.jpg';
import krr5144 from './resource/thumbnail/5-1-4-4.jpg';
import krr5145 from './resource/thumbnail/5-1-4-5.jpg';
import character from './resource/character.gif';
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';

function Krr() {
  
  const navigate = useNavigate()
 
  let lastScrollY = 0;
 
  const [menuBottomBorder,setMenuBottomBorder] = useState(false);
  const [sc,setSc] = useState(0);

  window.addEventListener('scroll', (e) => {
     
    let currentScrollY = window.scrollY;
    if(currentScrollY<120){
      setMenuBottomBorder(false) 
    }else{ 
      setMenuBottomBorder(true) 
    }
     
   
  });
    
  
  // useEffect(()=>{
  //   console.log('...')
  // },[window.scrollY])

  
  // const [position, setPosition] = useState(0);
  // function onScroll() {
  //   setPosition(window.scrollY);
  // }
  // useEffect(() => {
  //   window.addEventListener("scroll", onScroll);
  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //     console.log(position)
  //   };

  // }, []);  
   
  return (
    <div className='mainLayout' style={{width:"100vw",display:'flex',flexDirection:'column',alignItems:'center',backgroundColor:'#ffd400'}}>
      <div style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',height:90,minHeight:90,maxHeight:90,
        position:'fixed',top:0,left:0,zIndex:1000,backgroundColor:'#fff',
        boxShadow:menuBottomBorder?'10px 10px 10px #fabe0010':'0px 0px 0px #fff'}}>
        <div style={{width:1200,display:'flex',flexDirection:'row',height:'100%'}}>
          <img onClick={()=>navigate('../')} src={sk} alt='' style={{height:50,padding:20}}/>
          <div style={{width:'100%',display:'flex',fontSize:16,flexDirection:'row',height:'100%',alignItems:'center',justifyContent:'flex-end'}}> 

          <div onClick={()=>navigate('../Lulu')} style={{padding:20,color:'#969696',width:110,minWidth:110,maxWidth:110, textAlign:'center'}}>룰루</div>
          <div onClick={()=>navigate('../Krr')} style={{padding:20,fontWeight:700,color:'#fabe00',width:110,minWidth:110,maxWidth:110, textAlign:'center'}}>까르르한글수</div>
          <div onClick={()=>navigate('../Hiup')} style={{padding:20,color:'#969696',width:110,minWidth:110,maxWidth:110, textAlign:'center'}}>English Hi-up</div>
            
            {/* <div style={{width:60,height:30,display:'flex',alignItems:'center',justifyContent:'center',borderRadius:50,
              backgroundColor:'#fabe00',color:'#fff',fontSize:14}}>섬김</div> */}
          </div>
        </div>
      </div>

      <div style={{paddingTop:110,display:'flex',flexDirection:'row',width:"100%",alignItems:'flex-end',justifyContent:'center',
            // boxShadow:'0 4px 10px -5px #ffa300',
            borderBottom:'1px solid #eee',height:100,minHeight:100,maxHeight:100,zIndex:100,backgroundColor:'#fff', }}>
            <div style={{minWidth:300}}/>
  
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:'0px 30px 10px 30px'}}>
              <img src={krrStepOn1} alt='' style={{width:50,marginBottom:10}}/>
              <div style={{fontSize:15,fontWeight:700,width:50,minWidth:50,maxWidth:50,textAlign:'center',height:20,minHeight:20,maxHeight:20,display:'flex',alignItems:'center',justifyContent:'center'}}>STEP1</div>
              <div style={{width:'100%',backgroundColor:'#fabe00',height:5,marginTop:10,borderRadius:50}}/>
            </div>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:'0px 30px 10px 30px',color:'#969696',}}>
              <img src={krrStepOn2} alt='' style={{width:50,marginBottom:10}}/>
              <div style={{fontSize:14,width:50,minWidth:50,maxWidth:50,textAlign:'center',height:20,minHeight:20,maxHeight:20,display:'flex',alignItems:'center',justifyContent:'center'}}>STEP2</div>
              <div style={{width:'100%',height:5,marginTop:10,borderRadius:50}}/>
            </div>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:'0px 30px 10px 30px',color:'#969696'}}>
              <img src={krrStepOn3} alt='' style={{width:50,marginBottom:10}}/>
              <div style={{fontSize:14,width:50,minWidth:50,maxWidth:50,textAlign:'center',height:20,minHeight:20,maxHeight:20,display:'flex',alignItems:'center',justifyContent:'center'}}>STEP3</div>
              <div style={{width:'100%',height:5,marginTop:10,borderRadius:50}}/>
            </div>
            <img src={character} alt='' style={{width:150,height:'auto',marginLeft:150,marginBottom:-2}}/>
        </div>
      
      <div  
      style={{display:'flex',flexDirection:'column',width:'100vw',alignItems:'center',justifyContent:'flex-start'}}>

  
        
        <div style={{ position:'relative',zIndex:50,
        backgroundColor:'#fff',marginTop:50,borderTopLeftRadius:50,borderTopRightRadius:50,
          width:1200,display:'flex',justifyContent:'center'}}>
          {/* <div style={{width:1200,height:'100%',backgroundColor:'#fff',marginTop:50,borderRadius:50}}>
            <div style={{display:'flex',flexDirection:'row',padding:20,boxSizing:'border-box'}}>
              <div style={{width:80,height:50,backgroundColor:'#fabe00',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,
                borderTopLeftRadius:10,borderTopRightRadius:10
              }}>1호</div>
            </div>
          </div> */}
          <div style={{width:1200, marginTop:15,borderRadius:30,}}>
            <div style={{display:'flex',flexDirection:'row',padding:30,boxSizing:'border-box',width:'100%',justifyContent:'center'}}>
              <div style={{borderRadius:50,backgroundColor:'#fabe00',width:120,height:40,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,color:'#fff',}}>
                1학기
              </div>
              <div style={{borderRadius:50,border:'2px solid #eee',boxSizing:'border-box',width:120,height:40,display:'flex',
                alignItems:'center',justifyContent:'center',marginLeft:10}}>
                7호
              </div>
              <div style={{borderRadius:50,border:'2px solid #eee',boxSizing:'border-box',width:120,height:40,display:'flex',
                alignItems:'center',justifyContent:'center',marginLeft:10}}>
                8호
              </div> 
              
            </div>

            {/* <div style={{display:'flex',flexDirection:'row',padding:30,boxSizing:'border-box',width:'100%',justifyContent:'center'}}>
              <div style={{borderRadius:50,backgroundColor:'#fabe00',width:120,height:40,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,color:'#fff',}}>
                1학기
              </div>
              <div style={{borderRadius:50,border:'2px solid #eee',boxSizing:'border-box',width:120,height:40,display:'flex',
                alignItems:'center',justifyContent:'center',marginLeft:10}}>
                7호
              </div>
              <div style={{borderRadius:50,border:'2px solid #eee',boxSizing:'border-box',width:120,height:40,display:'flex',
                alignItems:'center',justifyContent:'center',marginLeft:10}}>
                8호
              </div> 
              
            </div> */}

            <div style={{display:'flex',  
            width:'100%',boxSizing:'border-box',flexDirection:'row'}}>
                <div style={{width:'100%', display:'flex',flexDirection:'row'}}>
                  <div style={{width:'100%',display:'flex',justifyContent:'center',flexDirection:'row',}}>
                    <div style={{width:50,minWidth:50,maxWidth:50,display:'flex',flexDirection:'column'}}>
                      <div style={{display:'flex',flex:1,alignItems:'center',justifyContent:'center',height:190,minHeight:190,maxHeight:190,marginBottom:52}}>1주</div>
                      <div style={{display:'flex',flex:1,alignItems:'center',justifyContent:'center',height:190,minHeight:190,maxHeight:190,marginBottom:52}}>2주</div>
                      <div style={{display:'flex',flex:1,alignItems:'center',justifyContent:'center',height:190,minHeight:190,maxHeight:190,marginBottom:52}}>3주</div>
                      <div style={{display:'flex',flex:1,alignItems:'center',justifyContent:'center',height:190,minHeight:190,maxHeight:190,marginBottom:52}}>4주</div>
                    </div>
                    <div style={{display:'flex',flexDirection:'column'}}>
                      <div style={{display:'flex', width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center',}}>
                        <div style={{ margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',flexDirection:'column',
                          padding:10,boxSizing:'border-box', backgroundColor:'#fff' }}>
                          <img src={krr5111} alt='' style={{width:170,height:150,objectFit:'cover',borderRadius:15,
                            border:'1px solid #dcdcdc'}}/>
                          <div style={{display:'flex',flexDirection:'row',  borderRadius:5,justifyContent:'center'}}>
                            <img src={gameOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                            <img src={pptOn} alt='' style={{width:35,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                            <img src={workbookOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                          </div>
                        </div>
                     
                        <div style={{ margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',flexDirection:'column',
                          padding:10,boxSizing:'border-box', backgroundColor:'#fff' }}>
                          <img src={krr5112} alt='' style={{width:170,height:150,objectFit:'cover',borderRadius:15,
                            border:'1px solid #dcdcdc'}}/>
                          <div style={{display:'flex',flexDirection:'row',  borderRadius:5,justifyContent:'center'}}>
                            <img src={gameOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                            <img src={pptOn} alt='' style={{width:35,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                            <img src={workbookOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                          </div>
                        </div>
                     

                        <div style={{ margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',flexDirection:'column',
                          padding:10,boxSizing:'border-box', backgroundColor:'#fff' }}>
                          <img src={krr5113} alt='' style={{width:170,height:150,objectFit:'cover',borderRadius:15,
                            border:'1px solid #dcdcdc'}}/>
                          <div style={{display:'flex',flexDirection:'row',  borderRadius:5,justifyContent:'center'}}>
                            <img src={gameOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                            <img src={pptOn} alt='' style={{width:35,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                            <img src={workbookOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                          </div>
                        </div>
                     

                        <div style={{ margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',flexDirection:'column',
                          padding:10,boxSizing:'border-box', backgroundColor:'#fff'  }}>
                          <img src={krr5114} alt='' style={{width:170,height:150,objectFit:'cover',borderRadius:15,
                            border:'1px solid #dcdcdc'}}/>
                          <div style={{display:'flex',flexDirection:'row',  borderRadius:5,justifyContent:'center'}}>
                            <img src={gameOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                            <img src={pptOn} alt='' style={{width:35,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                            <img src={workbookOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                          </div>
                        </div>
                     

                        <div style={{ margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',flexDirection:'column',
                          padding:10,boxSizing:'border-box', backgroundColor:'#fff'  }}>
                          <img src={krr5115} alt='' style={{width:170,height:150,objectFit:'cover',borderRadius:15,
                            border:'1px solid #dcdcdc'}}/>
                          <div style={{display:'flex',flexDirection:'row',  borderRadius:5,justifyContent:'center'}}>
                            <img src={gameOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                            <img src={pptOn} alt='' style={{width:35,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                            <img src={workbookOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                          </div>
                        </div>
                     

                      
                      
                      </div>
                    
                      <div style={{display:'flex',width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center',}}>
                        <div style={{ margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',flexDirection:'column',
                            padding:10,boxSizing:'border-box', backgroundColor:'#fff'}}>
                            <img src={krr5121} alt='' style={{width:170,height:150,objectFit:'cover',borderRadius:15,
                              border:'1px solid #dcdcdc'}}/>
                            <div style={{display:'flex',flexDirection:'row',  borderRadius:5,justifyContent:'center'}}>
                              <img src={gameOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                              <img src={pptOn} alt='' style={{width:35,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                              <img src={workbookOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                            </div>
                          </div>
                      

                          <div style={{ margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',flexDirection:'column',
                            padding:10,boxSizing:'border-box', backgroundColor:'#fff'}}>
                            <img src={krr5122} alt='' style={{width:170,height:150,objectFit:'cover',borderRadius:15,
                              border:'1px solid #dcdcdc'}}/>
                            <div style={{display:'flex',flexDirection:'row',  borderRadius:5,justifyContent:'center'}}>
                              <img src={gameOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                              <img src={pptOn} alt='' style={{width:35,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                              <img src={workbookOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                            </div>
                          </div>
                      

                          <div style={{ margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',flexDirection:'column',
                            padding:10,boxSizing:'border-box', backgroundColor:'#fff'}}>
                            <img src={krr5123} alt='' style={{width:170,height:150,objectFit:'cover',borderRadius:15,
                              border:'1px solid #dcdcdc'}}/>
                            <div style={{display:'flex',flexDirection:'row',  borderRadius:5,justifyContent:'center'}}>
                              <img src={gameOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                              <img src={pptOn} alt='' style={{width:35,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                              <img src={workbookOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                            </div>
                          </div>
                      

                          <div style={{ margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',flexDirection:'column',
                            padding:10,boxSizing:'border-box', backgroundColor:'#fff'}}>
                            <img src={krr5124} alt='' style={{width:170,height:150,objectFit:'cover',borderRadius:15,
                              border:'1px solid #dcdcdc'}}/>
                            <div style={{display:'flex',flexDirection:'row',  borderRadius:5,justifyContent:'center'}}>
                              <img src={gameOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                              <img src={pptOn} alt='' style={{width:35,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                              <img src={workbookOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                            </div>
                          </div>
                      
                          <div style={{ margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',flexDirection:'column',
                            padding:10,boxSizing:'border-box', backgroundColor:'#fff'}}>
                            <img src={krr5125} alt='' style={{width:170,height:150,objectFit:'cover',borderRadius:15,
                              border:'1px solid #dcdcdc'}}/>
                            <div style={{display:'flex',flexDirection:'row',  borderRadius:5,justifyContent:'center'}}>
                              <img src={gameOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                              <img src={pptOn} alt='' style={{width:35,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                              <img src={workbookOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                            </div>
                          </div>
                      </div>

                      <div style={{display:'flex',width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center',}}>
                        <div style={{ margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',flexDirection:'column',
                            padding:10,boxSizing:'border-box', backgroundColor:'#fff'}}>
                            <img src={krr5111} alt='' style={{width:170,height:150,objectFit:'cover',borderRadius:15,
                              border:'1px solid #dcdcdc'}}/>
                            <div style={{display:'flex',flexDirection:'row',  borderRadius:5,justifyContent:'center'}}>
                              <img src={gameOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                              <img src={pptOn} alt='' style={{width:35,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                              <img src={workbookOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                            </div>
                          </div>
                      

                          <div style={{ margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',flexDirection:'column',
                            padding:10,boxSizing:'border-box', backgroundColor:'#fff'}}>
                            <img src={krr5111} alt='' style={{width:170,height:150,objectFit:'cover',borderRadius:15,
                              border:'1px solid #dcdcdc'}}/>
                            <div style={{display:'flex',flexDirection:'row',  borderRadius:5,justifyContent:'center'}}>
                              <img src={gameOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                              <img src={pptOn} alt='' style={{width:35,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                              <img src={workbookOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                            </div>
                          </div>
                      

                          <div style={{ margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',flexDirection:'column',
                            padding:10,boxSizing:'border-box', backgroundColor:'#fff'}}>
                            <img src={krr5111} alt='' style={{width:170,height:150,objectFit:'cover',borderRadius:15,
                              border:'1px solid #dcdcdc'}}/>
                            <div style={{display:'flex',flexDirection:'row',  borderRadius:5,justifyContent:'center'}}>
                              <img src={gameOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                              <img src={pptOn} alt='' style={{width:35,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                              <img src={workbookOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                            </div>
                          </div>
                      

                          <div style={{ margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',flexDirection:'column',
                            padding:10,boxSizing:'border-box', backgroundColor:'#fff'}}>
                            <img src={krr5111} alt='' style={{width:170,height:150,objectFit:'cover',borderRadius:15,
                              border:'1px solid #dcdcdc'}}/>
                            <div style={{display:'flex',flexDirection:'row',  borderRadius:5,justifyContent:'center'}}>
                              <img src={gameOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                              <img src={pptOn} alt='' style={{width:35,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                              <img src={workbookOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                            </div>
                          </div>
                      
                          <div style={{ margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',flexDirection:'column',
                            padding:10,boxSizing:'border-box', backgroundColor:'#fff'}}>
                            <img src={krr5111} alt='' style={{width:170,height:150,objectFit:'cover',borderRadius:15,
                              border:'1px solid #dcdcdc'}}/>
                            <div style={{display:'flex',flexDirection:'row',  borderRadius:5,justifyContent:'center'}}>
                              <img src={gameOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                              <img src={pptOn} alt='' style={{width:35,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                              <img src={workbookOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                            </div>
                          </div>
                      
                      </div>

                      <div style={{display:'flex',width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center',}}>
                      <div style={{ margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',flexDirection:'column',
                          padding:10,boxSizing:'border-box', backgroundColor:'#fff'}}>
                          <img src={krr5111} alt='' style={{width:170,height:150,objectFit:'cover',borderRadius:15,
                            border:'1px solid #dcdcdc'}}/>
                          <div style={{display:'flex',flexDirection:'row',  borderRadius:5,justifyContent:'center'}}>
                            <img src={gameOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                            <img src={pptOn} alt='' style={{width:35,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                            <img src={workbookOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                          </div>
                        </div>
                     

                        <div style={{ margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',flexDirection:'column',
                          padding:10,boxSizing:'border-box', backgroundColor:'#fff'}}>
                          <img src={krr5111} alt='' style={{width:170,height:150,objectFit:'cover',borderRadius:15,
                            border:'1px solid #dcdcdc'}}/>
                          <div style={{display:'flex',flexDirection:'row',  borderRadius:5,justifyContent:'center'}}>
                            <img src={gameOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                            <img src={pptOn} alt='' style={{width:35,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                            <img src={workbookOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                          </div>
                        </div>
                     

                        <div style={{ margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',flexDirection:'column',
                          padding:10,boxSizing:'border-box', backgroundColor:'#fff'}}>
                          <img src={krr5111} alt='' style={{width:170,height:150,objectFit:'cover',borderRadius:15,
                            border:'1px solid #dcdcdc'}}/>
                          <div style={{display:'flex',flexDirection:'row',  borderRadius:5,justifyContent:'center'}}>
                            <img src={gameOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                            <img src={pptOn} alt='' style={{width:35,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                            <img src={workbookOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                          </div>
                        </div>
                     

                        <div style={{ margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',flexDirection:'column',
                          padding:10,boxSizing:'border-box', backgroundColor:'#fff'}}>
                          <img src={krr5111} alt='' style={{width:170,height:150,objectFit:'cover',borderRadius:15,
                            border:'1px solid #dcdcdc'}}/>
                          <div style={{display:'flex',flexDirection:'row',  borderRadius:5,justifyContent:'center'}}>
                            <img src={gameOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                            <img src={pptOn} alt='' style={{width:35,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                            <img src={workbookOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                          </div>
                        </div>
                     
                        <div style={{ margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',flexDirection:'column',
                          padding:10,boxSizing:'border-box', backgroundColor:'#fff'}}>
                          <img src={krr5111} alt='' style={{width:170,height:150,objectFit:'cover',borderRadius:15,
                            border:'1px solid #dcdcdc'}}/>
                          <div style={{display:'flex',flexDirection:'row',  borderRadius:5,justifyContent:'center'}}>
                            <img src={gameOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                            <img src={pptOn} alt='' style={{width:35,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                            <img src={workbookOn} alt='' style={{width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 10px 15px 10px'}}/>
                          </div>
                        </div>
                      
                      
                      </div>

                   


                    </div>
                    <div style={{width:50,minWidth:50,maxWidth:50,}}></div>
                  </div>
                  
                </div>

                
            </div>
            
      
          </div>        
          
        </div>
        {/* <div style={{width:'100vw',height:50,backgroundColor:'#fff',position:'relative',zIndex:1000,padding:30,boxSizing:'border-box',borderTop:'1px solid #dcdcdc'}}>
          ㅇㅇ
        </div> */}
      </div>


      <img src={bg} alt='' style={{width:"100%",height:'100%',position:'fixed',bottom:0,zIndex:10,objectFit:'cover'}}/>
      <img src={stars} alt='' className='ani1' style={{width:50,height:'auto',position:'fixed',bottom:250,left:250,zIndex:15}}/>
      <img src={circle} alt='' className='ani2' style={{width:200,height:'auto',position:'fixed',bottom:50,left:50,zIndex:15}}/>
      <img src={circle} alt='' className='ani3' style={{width:150,height:'auto',position:'fixed',bottom:240,right:50,zIndex:15}}/>
        
      
    </div>
  );
}

export default Krr;
