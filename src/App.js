import logo from './logo.svg';
import './App.css';
import krr from './resource/krr.png';
import hiup from './resource/hiup.png';
import sk from './resource/sk2.png';
import stepOn1 from './resource/stepOn1.svg';
import stepOn2 from './resource/stepOn2.svg';
import stepOn3 from './resource/stepOn3.svg';
import stepOff1 from './resource/stepOff1.svg';
import stepOff2 from './resource/stepOff2.svg';
import stepOff3 from './resource/stepOff3.svg';
import enStepOn1 from './resource/enStepOn1.svg';
import enStepOn2 from './resource/enStepOn2.svg';
import enStepOn3 from './resource/enStepOn3.svg';
import enStepOff1 from './resource/enStepOff1.svg';
import enStepOff2 from './resource/enStepOff2.svg';
import enStepOff3 from './resource/enStepOff3.svg';


function App() {
  return (
    <div style={{width:"100vw",height:'100vh',display:'flex',flexDirection:'column',alignItems:'center',}}>
      <div style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'center'}}>
        <div style={{width:1200,display:'flex',flexDirection:'row'}}>
          <img src={sk} alt='' style={{height:50,padding:20}}/>
          <div style={{width:'100%',display:'flex',fontSize:17,flexDirection:'row',height:'100%',alignItems:'center',justifyContent:'flex-end',paddingRight:50}}>
            <div style={{padding:20,width:150,fontWeight:900,color:'#1aacff'}}>까르르한글수</div>
            <div style={{padding:20,width:150,color:'#969696'}}>hi-up English</div>
          </div>
        </div>
      </div>
      

      <div style={{display:'flex',flexDirection:'row',width:"100%",alignItems:'center',justifyContent:'center',marginTop:30,paddingBottom:30,
        boxShadow:'0 4px 10px -5px #eee'}}>
        <img src={stepOn1} alt='' style={{width:150,margin:'0px 15px 0px 15px'}}/>
        <img src={stepOff2} alt='' style={{width:150,margin:'0px 15px 0px 15px'}}/>
        <img src={stepOff3} alt='' style={{width:150,margin:'0px 15px 0px 15px'}}/>
      </div>
      
      <div>
        
      </div>
  
      
    </div>
  );
}

export default App;
