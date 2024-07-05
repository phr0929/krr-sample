import logo from './logo.svg';
import './App.css';
import krr from './resource/krr.png';
import hiup from './resource/hiup.png';

function App() {
  return (
    <div style={{width:"100vw",height:'100vh',display:'flex',flexDirection:'column',backgroundColor:'#ffd24520',alignItems:'center'}}>
      <div style={{width:'100%',maxWidth:'100%',display:'flex',flexDirection:'row'}}>
        <div style={{width:'100%',height:'100%',padding:'30px 40px 30px 40px',display:'flex',boxSizing:'border-box',alignItems:'center',fontSize:20,fontWeight:800,
          justifyContent:'center',backgroundColor:'#ffd245'}}>
            <img src={krr} alt='' style={{height:30}}/>
          </div>
        <div style={{width:'100%',height:'100%',padding:'30px 40px 30px 40px',display:'flex',boxSizing:'border-box',alignItems:'center',fontSize:20,fontWeight:800,color:'#969696',
          justifyContent:'center',backgroundColor:'#f3f3f3'}}>
            <img src={hiup} alt='' style={{height:30}}/>
          </div>
      </div>
      <div style={{width:'90vw',maxWidth:1500,height:'calc(100% - 150px)',maxHeight:'calc(100% - 150px)',display:'flex',flexDirection:'column',boxSizing:'border-box'}}>
        <div style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'flex-start',padding:'30px 0px 20px 0px',boxSizing:'border-box'}}>

          <div style={{width:150,height:90,backgroundColor:'#fff',margin:'10px 5px 0px 0px',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:20,
            paddingBottom:15,boxSizing:'border-box',fontWeight:700,textAlign:'center',fontWeight:700,fontSize:17}}>
            STEP1
          </div>

          <div style={{width:150,height:80,backgroundColor:'#f3f3f3',margin:'20px 5px 0px 5px',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:20,
            paddingBottom:15,boxSizing:'border-box',fontWeight:700,textAlign:'center',color:'#dcdcdc',fontWeight:700,fontSize:17}}>
            STEP2
          </div>

          <div style={{width:150,height:80,backgroundColor:'#f3f3f3',margin:'20px 5px 0px 5px',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:20,
            paddingBottom:15,boxSizing:'border-box',fontWeight:700,textAlign:'center',color:'#dcdcdc',fontWeight:700,fontSize:17}}>
            STEP3
          </div>
          

          <div style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'flex-end',alignItems:'flex-end',paddingBottom:40}}>
            <div style={{padding:10,fontWeight:700}}>1호</div>
            <div style={{padding:10,fontWeight:700}}>2호</div>
          </div>
          {/* <div style={{width:90,height:90,backgroundColor:'#fff',margin:10,display:'flex',alignItems:'center',justifyContent:'center',borderRadius:20,fontWeight:700,textAlign:'center'}}>
            STEP2
          </div>

          <div style={{width:90,height:90,backgroundColor:'#fff',margin:10,display:'flex',alignItems:'center',justifyContent:'center',borderRadius:20,fontWeight:700,textAlign:'center'}}>
            STEP3
          </div> */}

        </div>

        <div style={{Width:'100%',height:'100%',backgroundColor:'#fff',width:'100%',marginTop:-40,borderBottomLeftRadius:20,borderBottomRightRadius:20,WebkitBorderTopRightRadius:20}}>
          ss
        </div>

        
      </div>
  
      
    </div>
  );
}

export default App;
