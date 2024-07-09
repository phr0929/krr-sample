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

function Hiup() {
  
  const navigate = useNavigate()

  return (
    <div style={{width:"100vw",height:'100vh',display:'flex',flexDirection:'column',alignItems:'center',position:'fixed',backgroundColor:'#ffd400'}}>
      <div style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',height:90,minHeight:90,maxHeight:90,position:'relative',zIndex:100,backgroundColor:'#fff'}}>
        <div style={{width:1200,display:'flex',flexDirection:'row',height:'100%'}}>
          <img onClick={()=>navigate('../')} src={sk} alt='' style={{height:50,padding:20}}/>
          <div style={{width:'100%',display:'flex',fontSize:16,flexDirection:'row',height:'100%',alignItems:'center',justifyContent:'flex-end'}}> 
            
          <div onClick={()=>navigate('../Lulu')} style={{padding:20,color:'#969696',width:110,minWidth:110,maxWidth:110, textAlign:'center'}}>룰루</div>
            <div onClick={()=>navigate('../Krr')} style={{padding:20,color:'#969696',width:110,minWidth:110,maxWidth:110, textAlign:'center'}}>까르르한글수</div>
            <div onClick={()=>navigate('../Hiup')} style={{padding:20,fontWeight:700,color:'#fabe00',width:110,minWidth:110,maxWidth:110, textAlign:'center'}}>English Hi-up</div>
            {/* <div style={{width:60,height:30,display:'flex',alignItems:'center',justifyContent:'center',borderRadius:50,
              backgroundColor:'#fabe00',color:'#fff',fontSize:14}}>섬김</div> */}
          </div>
        </div>
      </div>
      

      <div style={{display:'flex',flexDirection:'row',width:"100%",alignItems:'flex-end',justifyContent:'center',
          // boxShadow:'0 4px 10px -5px #ffa300',
          borderBottom:'1px solid #eee',height:125,minHeight:125,maxHeight:125,position:'relative',zIndex:100,backgroundColor:'#fff'}}>
          <div style={{minWidth:300}}/>
 
          <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:'0px 30px 20px 30px'}}>
            <img src={krrStepOn1} alt='' style={{width:50,marginBottom:10}}/>
            <div style={{fontSize:15,fontWeight:700,width:50,minWidth:50,maxWidth:50,textAlign:'center',height:20,minHeight:20,maxHeight:20,display:'flex',alignItems:'center',justifyContent:'center'}}>STEP1</div>
            <div style={{width:'100%',backgroundColor:'#fabe00',height:5,marginTop:10,borderRadius:50}}/>
          </div>
          <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:'0px 30px 20px 30px',color:'#969696',}}>
            <img src={krrStepOn2} alt='' style={{width:50,marginBottom:10}}/>
            <div style={{fontSize:14,width:50,minWidth:50,maxWidth:50,textAlign:'center',height:20,minHeight:20,maxHeight:20,display:'flex',alignItems:'center',justifyContent:'center'}}>STEP2</div>
            <div style={{width:'100%',height:5,marginTop:10,borderRadius:50}}/>
          </div>
          <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:'0px 30px 20px 30px',color:'#969696'}}>
            <img src={krrStepOn3} alt='' style={{width:50,marginBottom:10}}/>
            <div style={{fontSize:14,width:50,minWidth:50,maxWidth:50,textAlign:'center',height:20,minHeight:20,maxHeight:20,display:'flex',alignItems:'center',justifyContent:'center'}}>STEP3</div>
            <div style={{width:'100%',height:5,marginTop:10,borderRadius:50}}/>
          </div>
          <img src={character} alt='' style={{width:150,height:'auto',marginLeft:150,marginBottom:-2}}/>
      </div>
      
      <div style={{height:'calc(100% - 266px)',minHeight:'calc(100% - 266px)',maxHeight:'calc(100% - 266px)',position:'relative',zIndex:50,
      backgroundColor:'#fff',marginTop:50,borderTopLeftRadius:50,borderTopRightRadius:50,
        width:1200,display:'flex',justifyContent:'center'}}>
        {/* <div style={{width:1200,height:'100%',backgroundColor:'#fff',marginTop:50,borderRadius:50}}>
          <div style={{display:'flex',flexDirection:'row',padding:20,boxSizing:'border-box'}}>
            <div style={{width:80,height:50,backgroundColor:'#fabe00',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,
              borderTopLeftRadius:10,borderTopRightRadius:10
            }}>1호</div>
          </div>
        </div> */}
        <div style={{width:1200,height:'100%',marginTop:15,borderRadius:30,}}>
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

          <div style={{display:'flex',height:'calc(100% - 110px)',minHeight:'calc(100% - 110px)',maxHeight:'calc(100% - 110px)',paddingBottom:30,
          width:'100%',boxSizing:'border-box',flexDirection:'row'}}>
              <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'row'}}>
                <div style={{width:'100%',display:'flex',height:'100%',justifyContent:'center',}}>
                  <div style={{width:100,minWidth:100,maxWidth:100,display:'flex',flexDirection:'column'}}>
                    <div style={{display:'flex',flex:1,alignItems:'center',justifyContent:'center',height:120,minHeight:120,maxHeight:120}}>1주</div>
                    <div style={{display:'flex',flex:1,alignItems:'center',justifyContent:'center',height:120,minHeight:120,maxHeight:120}}>2주</div>
                    <div style={{display:'flex',flex:1,alignItems:'center',justifyContent:'center',height:120,minHeight:120,maxHeight:120}}>3주</div>
                    <div style={{display:'flex',flex:1,alignItems:'center',justifyContent:'center',height:120,minHeight:120,maxHeight:120}}>4주</div>
                  </div>
                  <div style={{display:'flex',flexDirection:'column'}}>
                    <div style={{display:'flex',flex:1,width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center',}}>
                      <div style={{width:200,height:120,margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',
                        padding:10,boxSizing:'border-box',border:'1px solid #f3f3f3',backgroundColor:'#fff'}}>
                        <img src={krr5111} alt='' style={{width:'calc(100% - 45px)',height:98,objectFit:'cover',borderTopLeftRadius:10,borderBottomLeftRadius:10,borderRadius:5,border:'1px solid #dcdcdc'}}/>
                        <div style={{display:'flex',flexDirection:'column',backgroundColor:'#fff',marginLeft:10,borderRadius:5,border:'1px solid #dcdcdc'}}>
                          <img src={gameOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={pptOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={workbookOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                        </div>
                      </div>

                      <div style={{width:200,height:120,margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',
                        padding:10,boxSizing:'border-box',border:'1px solid #f3f3f3',backgroundColor:'#fff'}}>
                        <img src={krr5112} alt='' style={{width:'calc(100% - 45px)',height:98,objectFit:'cover',borderTopLeftRadius:10,borderBottomLeftRadius:10,borderRadius:5,border:'1px solid #dcdcdc'}}/>
                        <div style={{display:'flex',flexDirection:'column',backgroundColor:'#fff',marginLeft:10,borderRadius:5,border:'1px solid #dcdcdc'}}>
                          <img src={gameOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={pptOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={workbookOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                        </div>
                      </div>
                     

                      <div style={{width:200,height:120,margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',
                        padding:10,boxSizing:'border-box',border:'1px solid #f3f3f3',backgroundColor:'#fff'}}>
                        <img src={krr5113} alt='' style={{width:'calc(100% - 45px)',height:98,objectFit:'cover',borderTopLeftRadius:10,borderBottomLeftRadius:10,borderRadius:5,border:'1px solid #dcdcdc'}}/>
                        <div style={{display:'flex',flexDirection:'column',backgroundColor:'#fff',marginLeft:10,borderRadius:5,border:'1px solid #dcdcdc'}}>
                          <img src={gameOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={pptOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={workbookOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                        </div>
                      </div>
                     

                      <div style={{width:200,height:120,margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',
                        padding:10,boxSizing:'border-box',border:'1px solid #f3f3f3',backgroundColor:'#fff'}}>
                        <img src={krr5114} alt='' style={{width:'calc(100% - 45px)',height:98,objectFit:'cover',borderTopLeftRadius:10,borderBottomLeftRadius:10,borderRadius:5,border:'1px solid #dcdcdc'}}/>
                        <div style={{display:'flex',flexDirection:'column',backgroundColor:'#fff',marginLeft:10,borderRadius:5,border:'1px solid #dcdcdc'}}>
                          <img src={gameOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={pptOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={workbookOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                        </div>
                      </div>
                     

                      <div style={{width:200,height:120,margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',
                        padding:10,boxSizing:'border-box',border:'1px solid #f3f3f3',backgroundColor:'#fff'}}>
                        <img src={krr5115} alt='' style={{width:'calc(100% - 45px)',height:98,objectFit:'cover',borderTopLeftRadius:10,borderBottomLeftRadius:10,borderRadius:5,border:'1px solid #dcdcdc'}}/>
                        <div style={{display:'flex',flexDirection:'column',backgroundColor:'#fff',marginLeft:10,borderRadius:5,border:'1px solid #dcdcdc'}}>
                          <img src={gameOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={pptOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={workbookOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                        </div>
                      </div>
                     
                    
                    
                    </div>
                   
                   
                    <div style={{display:'flex',flex:1,width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center',}}>
                      <div style={{width:200,height:120,margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',
                        padding:10,boxSizing:'border-box',border:'1px solid #f3f3f3',backgroundColor:'#fff'}}>
                        <img src={krr5121} alt='' style={{width:'calc(100% - 45px)',height:98,objectFit:'cover',borderTopLeftRadius:10,borderBottomLeftRadius:10,borderRadius:5,border:'1px solid #dcdcdc'}}/>
                        <div style={{display:'flex',flexDirection:'column',backgroundColor:'#fff',marginLeft:10,borderRadius:5,border:'1px solid #dcdcdc'}}>
                          <img src={gameOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={pptOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={workbookOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                        </div>
                      </div>

                      <div style={{width:200,height:120,margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',
                        padding:10,boxSizing:'border-box',border:'1px solid #f3f3f3',backgroundColor:'#fff'}}>
                        <img src={krr5122} alt='' style={{width:'calc(100% - 45px)',height:98,objectFit:'cover',borderTopLeftRadius:10,borderBottomLeftRadius:10,borderRadius:5,border:'1px solid #dcdcdc'}}/>
                        <div style={{display:'flex',flexDirection:'column',backgroundColor:'#fff',marginLeft:10,borderRadius:5,border:'1px solid #dcdcdc'}}>
                          <img src={gameOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={pptOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={workbookOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                        </div>
                      </div>
                     

                      <div style={{width:200,height:120,margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',
                        padding:10,boxSizing:'border-box',border:'1px solid #f3f3f3',backgroundColor:'#fff'}}>
                        <img src={krr5123} alt='' style={{width:'calc(100% - 45px)',height:98,objectFit:'cover',borderTopLeftRadius:10,borderBottomLeftRadius:10,borderRadius:5,border:'1px solid #dcdcdc'}}/>
                        <div style={{display:'flex',flexDirection:'column',backgroundColor:'#fff',marginLeft:10,borderRadius:5,border:'1px solid #dcdcdc'}}>
                          <img src={gameOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={pptOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={workbookOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                        </div>
                      </div>
                     

                      <div style={{width:200,height:120,margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',
                        padding:10,boxSizing:'border-box',border:'1px solid #f3f3f3',backgroundColor:'#fff'}}>
                        <img src={krr5124} alt='' style={{width:'calc(100% - 45px)',height:98,objectFit:'cover',borderTopLeftRadius:10,borderBottomLeftRadius:10,borderRadius:5,border:'1px solid #dcdcdc'}}/>
                        <div style={{display:'flex',flexDirection:'column',backgroundColor:'#fff',marginLeft:10,borderRadius:5,border:'1px solid #dcdcdc'}}>
                          <img src={gameOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={pptOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={workbookOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                        </div>
                      </div>
                     

                      <div style={{width:200,height:120,margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',
                        padding:10,boxSizing:'border-box',border:'1px solid #f3f3f3',backgroundColor:'#fff'}}>
                        <img src={krr5125} alt='' style={{width:'calc(100% - 45px)',height:98,objectFit:'cover',borderTopLeftRadius:10,borderBottomLeftRadius:10,borderRadius:5,border:'1px solid #dcdcdc'}}/>
                        <div style={{display:'flex',flexDirection:'column',backgroundColor:'#fff',marginLeft:10,borderRadius:5,border:'1px solid #dcdcdc'}}>
                          <img src={gameOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={pptOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={workbookOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                        </div>
                      </div>
                     
                    
                    
                    </div>



                    <div style={{display:'flex',flex:1,width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center',}}>
                      <div style={{width:200,height:120,margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',
                        padding:10,boxSizing:'border-box',border:'1px solid #f3f3f3',backgroundColor:'#fff'}}>
                        <img src={krr5131} alt='' style={{width:'calc(100% - 45px)',height:98,objectFit:'cover',borderTopLeftRadius:10,borderBottomLeftRadius:10,borderRadius:5,border:'1px solid #dcdcdc'}}/>
                        <div style={{display:'flex',flexDirection:'column',backgroundColor:'#fff',marginLeft:10,borderRadius:5,border:'1px solid #dcdcdc'}}>
                          <img src={gameOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={pptOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={workbookOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                        </div>
                      </div>

                      <div style={{width:200,height:120,margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',
                        padding:10,boxSizing:'border-box',border:'1px solid #f3f3f3',backgroundColor:'#fff'}}>
                        <img src={krr5132} alt='' style={{width:'calc(100% - 45px)',height:98,objectFit:'cover',borderTopLeftRadius:10,borderBottomLeftRadius:10,borderRadius:5,border:'1px solid #dcdcdc'}}/>
                        <div style={{display:'flex',flexDirection:'column',backgroundColor:'#fff',marginLeft:10,borderRadius:5,border:'1px solid #dcdcdc'}}>
                          <img src={gameOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={pptOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={workbookOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                        </div>
                      </div>
                     

                      <div style={{width:200,height:120,margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',
                        padding:10,boxSizing:'border-box',border:'1px solid #f3f3f3',backgroundColor:'#fff'}}>
                        <img src={krr5133} alt='' style={{width:'calc(100% - 45px)',height:98,objectFit:'cover',borderTopLeftRadius:10,borderBottomLeftRadius:10,borderRadius:5,border:'1px solid #dcdcdc'}}/>
                        <div style={{display:'flex',flexDirection:'column',backgroundColor:'#fff',marginLeft:10,borderRadius:5,border:'1px solid #dcdcdc'}}>
                          <img src={gameOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={pptOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={workbookOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                        </div>
                      </div>
                     

                      <div style={{width:200,height:120,margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',
                        padding:10,boxSizing:'border-box',border:'1px solid #f3f3f3',backgroundColor:'#fff'}}>
                        <img src={krr5134} alt='' style={{width:'calc(100% - 45px)',height:98,objectFit:'cover',borderTopLeftRadius:10,borderBottomLeftRadius:10,borderRadius:5,border:'1px solid #dcdcdc'}}/>
                        <div style={{display:'flex',flexDirection:'column',backgroundColor:'#fff',marginLeft:10,borderRadius:5,border:'1px solid #dcdcdc'}}>
                          <img src={gameOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={pptOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={workbookOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                        </div>
                      </div>
                     

                      <div style={{width:200,height:120,margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',
                        padding:10,boxSizing:'border-box',border:'1px solid #f3f3f3',backgroundColor:'#fff'}}>
                        <img src={krr5135} alt='' style={{width:'calc(100% - 45px)',height:98,objectFit:'cover',borderTopLeftRadius:10,borderBottomLeftRadius:10,borderRadius:5,border:'1px solid #dcdcdc'}}/>
                        <div style={{display:'flex',flexDirection:'column',backgroundColor:'#fff',marginLeft:10,borderRadius:5,border:'1px solid #dcdcdc'}}>
                          <img src={gameOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={pptOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={workbookOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                        </div>
                      </div>
                     
                    
                    
                    </div>



                    <div style={{display:'flex',flex:1,width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center',}}>
                      <div style={{width:200,height:120,margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',
                        padding:10,boxSizing:'border-box',border:'1px solid #f3f3f3',backgroundColor:'#fff'}}>
                        <img src={krr5141} alt='' style={{width:'calc(100% - 45px)',height:98,objectFit:'cover',borderTopLeftRadius:10,borderBottomLeftRadius:10,borderRadius:5,border:'1px solid #dcdcdc'}}/>
                        <div style={{display:'flex',flexDirection:'column',backgroundColor:'#fff',marginLeft:10,borderRadius:5,border:'1px solid #dcdcdc'}}>
                          <img src={gameOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={pptOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={workbookOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                        </div>
                      </div>

                      <div style={{width:200,height:120,margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',
                        padding:10,boxSizing:'border-box',border:'1px solid #f3f3f3',backgroundColor:'#fff'}}>
                        <img src={krr5142} alt='' style={{width:'calc(100% - 45px)',height:98,objectFit:'cover',borderTopLeftRadius:10,borderBottomLeftRadius:10,borderRadius:5,border:'1px solid #dcdcdc'}}/>
                        <div style={{display:'flex',flexDirection:'column',backgroundColor:'#fff',marginLeft:10,borderRadius:5,border:'1px solid #dcdcdc'}}>
                          <img src={gameOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={pptOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={workbookOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                        </div>
                      </div>
                     

                      <div style={{width:200,height:120,margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',
                        padding:10,boxSizing:'border-box',border:'1px solid #f3f3f3',backgroundColor:'#fff'}}>
                        <img src={krr5143} alt='' style={{width:'calc(100% - 45px)',height:98,objectFit:'cover',borderTopLeftRadius:10,borderBottomLeftRadius:10,borderRadius:5,border:'1px solid #dcdcdc'}}/>
                        <div style={{display:'flex',flexDirection:'column',backgroundColor:'#fff',marginLeft:10,borderRadius:5,border:'1px solid #dcdcdc'}}>
                          <img src={gameOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={pptOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={workbookOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                        </div>
                      </div>
                     

                      <div style={{width:200,height:120,margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',
                        padding:10,boxSizing:'border-box',border:'1px solid #f3f3f3',backgroundColor:'#fff'}}>
                        <img src={krr5144} alt='' style={{width:'calc(100% - 45px)',height:98,objectFit:'cover',borderTopLeftRadius:10,borderBottomLeftRadius:10,borderRadius:5,border:'1px solid #dcdcdc'}}/>
                        <div style={{display:'flex',flexDirection:'column',backgroundColor:'#fff',marginLeft:10,borderRadius:5,border:'1px solid #dcdcdc'}}>
                          <img src={gameOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={pptOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={workbookOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                        </div>
                      </div>
                     

                      <div style={{width:200,height:120,margin:'5px 5px 5px 5px',borderRadius:10,objectFit:'cover',display:'flex',
                        padding:10,boxSizing:'border-box',border:'1px solid #f3f3f3',backgroundColor:'#fff'}}>
                        <img src={krr5145} alt='' style={{width:'calc(100% - 45px)',height:98,objectFit:'cover',borderTopLeftRadius:10,borderBottomLeftRadius:10,borderRadius:5,border:'1px solid #dcdcdc'}}/>
                        <div style={{display:'flex',flexDirection:'column',backgroundColor:'#fff',marginLeft:10,borderRadius:5,border:'1px solid #dcdcdc'}}>
                          <img src={gameOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={pptOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                          <img src={workbookOn} alt='' style={{width:25,height:25,display:'flex',alignItems:'center',justifyContent:'center',margin:5}}/>
                        </div>
                      </div>
                     
                    
                    
                    </div>


                  </div>
                </div>
              </div>
          </div>
        </div>        
      </div>

      <img src={bg} alt='' style={{width:"100%",height:'100%',position:'absolute',bottom:0,zIndex:10,objectFit:'cover'}}/>
      <img src={stars} alt='' className='ani1' style={{width:50,height:'auto',position:'absolute',bottom:250,left:250,zIndex:15}}/>
      <img src={circle} alt='' className='ani2' style={{width:200,height:'auto',position:'absolute',bottom:50,left:50,zIndex:15}}/>
      <img src={circle} alt='' className='ani3' style={{width:150,height:'auto',position:'absolute',bottom:240,right:50,zIndex:15}}/>
    </div>
  );
}

export default Hiup;
