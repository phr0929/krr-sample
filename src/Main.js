import logo from './logo.svg';
import './App.css';
import sk from './resource/sk.svg'; 

import { useNavigate } from 'react-router-dom'

function Main() {

  const navigate = useNavigate()

  return (
    <div style={{width:"100vw",height:'100vh',display:'flex',flexDirection:'column',alignItems:'center',position:'fixed'}}>
    <div style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',height:90,minHeight:90,maxHeight:90,position:'relative',zIndex:100,backgroundColor:'#fff'}}>
      <div style={{width:1200,display:'flex',flexDirection:'row',height:'100%'}}>
        <img onClick={()=>navigate('./krr')} src={sk} alt='' style={{height:50,padding:20}}/>
        <div style={{width:'100%',display:'flex',fontSize:16,flexDirection:'row',height:'100%',alignItems:'center',justifyContent:'flex-end'}}> 



          {/* <div style={{padding:20,fontWeight:700,color:'#fabe00',marginRight:10}}>까르르한글수</div>
          <div style={{padding:20,color:'#969696',marginRight:10}}>English Hi-up</div>
          
          <div style={{width:60,height:30,display:'flex',alignItems:'center',justifyContent:'center',borderRadius:50,
            backgroundColor:'#fabe00',color:'#fff',fontSize:14}}>섬김</div> */}
        </div>
      </div>
    </div>

    

    {/* <div style={{height:'100%',width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',fontSize:30}}>
      <div style={{fontWeight:700,marginBottom:10}}>
        <span style={{color:'#e72441'}}>노래</span>하고, <span style={{color:'#e72441'}}>춤</span>추고, <span style={{color:'#e72441'}}>놀이</span>하며
      </div>
      <div style={{fontWeight:700,marginBottom:50}}>
        쉽고 빠르게 <span style={{color:'#e72441'}}>습득</span>할 수 있어요!</div>
      <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <img src={krr5113} alt='' style={{width:250,height:'auto',border:'7px solid #fff',boxShadow:'2px 3px 0px #dcdcdc',borderRadius:10}}/>
          <div style={{boxShadow:'3px 3px 0px #e63d9020',border:'7px solid #fff',marginTop:10,width:250,height:50,textAlign:'center',backgroundColor:'#e63d90',fontWeight:700,color:'#fff',fontSize:18,display:'flex',alignItems:'center',justifyContent:'center',borderRadius:10}}>
            안녕! 룰루</div>
        </div>

        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <img src={krr5113} alt='' style={{width:250,height:'auto',border:'7px solid #fff',boxShadow:'2px 3px 0px #dcdcdc',borderRadius:10}}/>
          <div style={{boxShadow:'3px 3px 0px #e63d9020',border:'7px solid #fff',marginTop:10,width:250,height:50,textAlign:'center',backgroundColor:'#e63d90',fontWeight:700,color:'#fff',fontSize:18,display:'flex',alignItems:'center',justifyContent:'center',borderRadius:10}}>
            안녕! 룰루</div>
        </div>

        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <img src={krr5113} alt='' style={{width:250,height:'auto',border:'7px solid #fff',boxShadow:'2px 3px 0px #dcdcdc',borderRadius:10}}/>
          <div style={{boxShadow:'3px 3px 0px #e63d9020',border:'7px solid #fff',marginTop:10,width:250,height:50,textAlign:'center',backgroundColor:'#e63d90',fontWeight:700,color:'#fff',fontSize:18,display:'flex',alignItems:'center',justifyContent:'center',borderRadius:10}}>
            안녕! 룰루</div>
        </div>
      </div>

      
    </div> */}
     
{/* 
    <img src={bg} alt='' style={{width:"100%",height:'100%',position:'absolute',bottom:0,zIndex:10,objectFit:'cover'}}/>
    <img src={stars} alt='' className='ani1' style={{width:50,height:'auto',position:'absolute',bottom:250,left:250,zIndex:15}}/>
    <img src={circle} alt='' className='ani2' style={{width:200,height:'auto',position:'absolute',bottom:50,left:50,zIndex:15}}/>
    <img src={circle} alt='' className='ani3' style={{width:150,height:'auto',position:'absolute',bottom:240,right:50,zIndex:15}}/> */}
  </div>
  );
}

export default Main;
