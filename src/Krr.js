import logo from './logo.svg';
import './App.css';
import krr from './resource/krr.png';
import hiup from './resource/hiup.png';
import sk from './resource/sk.svg';
import skGray from './resource/sk_gray.svg';
import krrStepOn0 from './resource/krrStep0.svg';
import krrStepOn1 from './resource/krrStep1.svg';
import krrStepOn2 from './resource/krrStep2.svg';
import krrStepOn3 from './resource/krrStep3.svg';
import eliivyStepOn0 from './resource/eliivyStep0.svg';
import eliivyStepOn1 from './resource/eliivyStep1.svg';
import eliivyStepOn2 from './resource/eliivyStep2.svg';
import eliivyStepOn3 from './resource/eliivyStep3.svg';
import pptOn from './resource/ic_ppt_on.svg';
import pptOff from './resource/ic_ppt_off.svg';
import workbookOn from './resource/ic_workbook_on.svg';
import workbookOff from './resource/ic_workbook_off.svg';
import gameOn from './resource/ic_game_on.svg';
import gameOff from './resource/ic_game_off.svg';  
import bg from './resource/bg.svg';
import stars from './resource/stars.svg';
import circle from './resource/circle.svg';
import zb1_1 from './resource/thumbnail/Zembo/1-1.png';
import zb1_2 from './resource/thumbnail/Zembo/1-2.png';
import zb1_3 from './resource/thumbnail/Zembo/1-3.png';
import zb1_4 from './resource/thumbnail/Zembo/1-4.png';
import zb2_1 from './resource/thumbnail/Zembo/2-1.png';
import zb2_2 from './resource/thumbnail/Zembo/2-2.png';
import zb2_3 from './resource/thumbnail/Zembo/2-3.png';
import zb2_4 from './resource/thumbnail/Zembo/2-4.png';
import zb3_1 from './resource/thumbnail/Zembo/3-1.png';
import zb3_2 from './resource/thumbnail/Zembo/3-2.png';
import zb3_3 from './resource/thumbnail/Zembo/3-3.png';
import zb3_4 from './resource/thumbnail/Zembo/3-4.png';

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
import krrLogo from './resource/krr logo.svg';
import hanLogo from './resource/han logo.svg';
import mathLogo from './resource/math logo.svg'
import zemboLogo from './resource/zembo logo.svg'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';
import './contents.css'
import instaLogo from './resource/instaLogo.svg';
import youtubeLogo from './resource/youtubeLogo.svg';
import blogLogo from './resource/blogLogo.svg';
 
import character from './resource/character.mp4';
import luluCharacter from './resource/luluCharacter.mp4';
// import character from './resource/character.gif';
// import luluCharacter from './resource/lulucharacter.gif';
import { useLocation } from 'react-router-dom';
import ebook from './resource/ebook.svg';

function Krr() {
  
  
  const navigate = useNavigate();
  const location = useLocation();
  const stepIdx = location?.state?.idx!==undefined?location?.state?.idx:1;
 
  const [isHovering, setIsHovering] = useState(2);
  const [scrollDown,setScrollDown] = useState(true); 
  const [scrollY,setScrollY] = useState(0);
  const [dialog,setDialog] = useState(false);
  const [dialogTitle,setDialogTitle] = useState('');
  const [dialogImg,setDialogImg] = useState(null);
  const [navDialog,setNavDialog] = useState(false);
  const [step,setStep] = useState(stepIdx)  

  const [ctgr,setCtgr] = useState(10)
  // 1학기 -> 0
  // 7호 -> 70
  // 8호 -> 80
  // 잼보 -> 100
  
  // 1호 -> 10
  // 4호 -> 20
  
  const handleDialog=(title,img)=>{
    setDialog(true);
    setDialogTitle(title);
    setDialogImg(img)
  }



  
  const musicList = [
    {ctgr:101,css:'yellowbox',img:zb1_1,vimeo:'998673825',game:'https://edujusk.kr/upload/program/vod_contents/Han13/',ppt:'',title:'넌 우리 동물원에',title2:'어울리지 않아'},
    {ctgr:101,css:'pinkbox',img:zb1_2,vimeo:'998673885',game:'https://edujusk.kr/upload/program/vod_contents/Han13/',ppt:'998676597',title:'넌 우리 동물원에',title2:'어울리지 않아'},
    {ctgr:101,css:'yellowbox',img:zb1_3,vimeo:'998673681',game:'https://edujusk.kr/upload/program/vod_contents/Han8/',ppt:'998676651',title:'넌 우리 동물원에',title2:'어울리지 않아'},
    {ctgr:101,css:'pinkbox',img:zb1_4,vimeo:'998673755',game:'https://edujusk.kr/upload/program/vod_contents/Han8/',ppt:'998676685',title:'넌 우리 동물원에',title2:'어울리지 않아'},
    

    {ctgr:102,css:'yellowbox',img:zb2_1,vimeo:'998674782',game:'https://edujusk.kr/upload/program/vod_contents/Han12/',ppt:'',title:'걱정쟁이 제레미가',title2:'바람에 휩쓸려 날아간 뒤'},
    {ctgr:102,css:'pinkbox',img:zb2_2,  vimeo:'998674938',game:'https://edujusk.kr/upload/program/vod_contents/Han10/',ppt:'998677269',title:'걱정쟁이 제레미가',title2:'바람에 휩쓸려 날아간 뒤'},
    {ctgr:102,css:'yellowbox',img:zb2_3,vimeo:'998674500',game:'https://edujusk.kr/upload/program/vod_contents/Han13/',ppt:'998677314',title:'걱정쟁이 제레미가',title2:'바람에 휩쓸려 날아간 뒤'},
    {ctgr:102,css:'pinkbox',img:zb2_4,  vimeo:'998674684',game:'https://edujusk.kr/upload/program/vod_contents/Han10/',ppt:'998677344',title:'걱정쟁이 제레미가',title2:'바람에 휩쓸려 날아간 뒤'},

    {ctgr:103,css:'yellowbox',img:zb3_1,vimeo:'998675547',game:'https://edujusk.kr/upload/program/vod_contents/Han37/',ppt:'',title:'내 친구는',title2:'유니콘이 아니야'},
    {ctgr:103,css:'pinkbox',img:zb3_2,  vimeo:'998675720',game:'https://edujusk.kr/upload/program/vod_contents/Han37/',ppt:'998678014',title:'내 친구는',title2:'유니콘이 아니야'},
    {ctgr:103,css:'yellowbox',img:zb3_3,vimeo:'998675391',game:'https://edujusk.kr/upload/program/vod_contents/Han36/',ppt:'998677936',title:'내 친구는',title2:'유니콘이 아니야'},
    {ctgr:103,css:'pinkbox',img:zb3_4,  vimeo:'998675468',game:'https://edujusk.kr/upload/program/vod_contents/Han36/',ppt:'998677976',title:'내 친구는',title2:'유니콘이 아니야'},
  ]
  const contentsList = [
    // Step1 -> 1호
    {week:1,css:'pinkbox',ctgr:11,title:'1주차 월요일',img:krr5111,vimeo:'998587769',game:'',ppt:'987037758',workbook:''},
    {week:1,css:'yellowbox',ctgr:11,title:'1주차 화요일',img:krr5112,vimeo:'998584594',game:'',ppt:'811132351',workbook:''},
    {week:1,css:'pinkbox',ctgr:11,title:'1주차 수요일',img:krr5113,vimeo:'998587094',game:'',ppt:'987037817',workbook:''},
    {week:1,css:'yellowbox',ctgr:11,title:'1주차 목요일',img:krr5114,vimeo:'998583911',game:'',ppt:'863839942',workbook:''},
    {week:1,css:'pinkbox',ctgr:11,title:'1주차 금요일',img:krr5115,vimeo:'998587094',game:'',ppt:'987037817',workbook:''},

    {week:2,css:'yellowbox',ctgr:11,title:'2주차 월요일',img:krr5121,vimeo:'998587194',game:'',ppt:'987037850',workbook:''},
    {week:2,css:'pinkbox',ctgr:11,title:'2주차 화요일',img:krr5122,vimeo:'998584063',game:'',ppt:'811132372',workbook:''},
    {week:2,css:'yellowbox',ctgr:11,title:'2주차 수요일',img:krr5123,vimeo:'998587271',game:'',ppt:'987037885',workbook:''},
    {week:2,css:'pinkbox',ctgr:11,title:'2주차 목요일',img:krr5124,vimeo:'998584171',game:'',ppt:'863839980',workbook:''},
    {week:2,css:'yellowbox',ctgr:11,title:'2주차 금요일',img:krr5125,vimeo:'998587271',game:'',ppt:'987037885',workbook:''},

    {week:3,css:'pinkbox',ctgr:11,title:'3주차 월요일',img:krr5131,vimeo:'998587370',game:'',ppt:'987037904',workbook:''},
    {week:3,css:'yellowbox',ctgr:11,title:'3주차 화요일',img:krr5132,vimeo:'998584260',game:'',ppt:'811132400',workbook:''},
    {week:3,css:'pinkbox',ctgr:11,title:'3주차 수요일',img:krr5133,vimeo:'998587475',game:'',ppt:'987037918',workbook:''},
    {week:3,css:'yellowbox',ctgr:11,title:'3주차 목요일',img:krr5134,vimeo:'998584317',game:'',ppt:'863839980',workbook:''},
    {week:3,css:'pinkbox',ctgr:11,title:'3주차 금요일',img:krr5135,vimeo:'998587475',game:'',ppt:'987037918',workbook:''},

    {week:4,css:'yellowbox',ctgr:11,title:'4주차 월요일',img:krr5141,vimeo:'998587579',game:'',ppt:'987037937',workbook:''},
    {week:4,css:'pinkbox',ctgr:11,title:'4주차 화요일',img:krr5142,vimeo:'998584374',game:'',ppt:'811132421'},
    {week:4,css:'yellowbox',ctgr:11,title:'4주차 수요일',img:krr5143,vimeo:'998587653',game:'',ppt:'987037970',workbook:''},
    {week:4,css:'pinkbox',ctgr:11,title:'4주차 목요일',img:krr5144,vimeo:'998584474',game:'',ppt:'919227685',workbook:''},
    {week:4,css:'yellowbox',ctgr:11,title:'4주차 금요일',img:krr5145,vimeo:'998587653',game:'',ppt:'987037970',workbook:''},


    // Step1 -> 4호
    {week:1,css:'pinkbox',ctgr:21,title:'1주차 월요일',img:krr5112,vimeo:'998589149',game:'',ppt:'722885827',workbook:''},
    {week:1,css:'yellowbox',ctgr:21,title:'1주차 화요일',img:krr5112,vimeo:'998585635',game:'',ppt:'822007464',workbook:''},
    {week:1,css:'pinkbox',ctgr:21,title:'1주차 수요일',img:krr5112,vimeo:'998588268',game:'',ppt:'722885850',workbook:''},
    {week:1,css:'yellowbox',ctgr:21,title:'1주차 목요일',img:krr5112,vimeo:'998584951',game:'',ppt:'822007519',workbook:''},
    {week:1,css:'pinkbox',ctgr:21,title:'1주차 금요일',img:krr5112,vimeo:'998588268',game:'',ppt:'722885850',workbook:''},

    {week:2,css:'yellowbox',ctgr:21,title:'2주차 월요일',img:krr5122,vimeo:'998588472',game:'',ppt:'722885913',workbook:''},
    {week:2,css:'pinkbox',ctgr:21,title:'2주차 화요일',img:krr5122,vimeo:'998585047',game:'',ppt:'822007577',workbook:''},
    {week:2,css:'yellowbox',ctgr:21,title:'2주차 수요일',img:krr5122,vimeo:'998588606',game:'',ppt:'722885939',workbook:''},
    {week:2,css:'pinkbox',ctgr:21,title:'2주차 목요일',img:krr5122,vimeo:'998585170',game:'',ppt:'822007623',workbook:''},
    {week:2,css:'yellowbox',ctgr:21,title:'2주차 금요일',img:krr5122,vimeo:'998588606',game:'',ppt:'722885939',workbook:''},

    {week:3,css:'pinkbox',ctgr:21,title:'3주차 월요일',img:krr5131,vimeo:'998588727',game:'',ppt:'722885998',workbook:''},
    {week:3,css:'yellowbox',ctgr:21,title:'3주차 화요일',img:krr5132,vimeo:'998585274',game:'',ppt:'823281734',workbook:''},
    {week:3,css:'pinkbox',ctgr:21,title:'3주차 수요일',img:krr5133,vimeo:'998588846',game:'',ppt:'722886036',workbook:''},
    {week:3,css:'yellowbox',ctgr:21,title:'3주차 목요일',img:krr5134,vimeo:'998585350',game:'',ppt:'823281759',workbook:''},
    {week:3,css:'pinkbox',ctgr:21,title:'3주차 금요일',img:krr5135,vimeo:'998588846',game:'',ppt:'722886036',workbook:''},

    {week:4,css:'yellowbox',ctgr:21,title:'4주차 월요일',img:krr5141,vimeo:'998588952',game:'',ppt:'722886081',workbook:''},
    {week:4,css:'pinkbox',ctgr:21,title:'4주차 화요일',img:krr5142,vimeo:'998585423',game:'',ppt:'936379818'},
    {week:4,css:'yellowbox',ctgr:21,title:'4주차 수요일',img:krr5143,vimeo:'998589053',game:'',ppt:'722886109',workbook:''},
    {week:4,css:'pinkbox',ctgr:21,title:'4주차 목요일',img:krr5144,vimeo:'998585514',game:'',ppt:'936379818',workbook:''},
    {week:4,css:'yellowbox',ctgr:21,title:'4주차 금요일',img:krr5145,vimeo:'998589053',game:'',ppt:'722886109',workbook:''},
 
      
 

       // Step2 -> 1호
      {week:1,css:'pinkbox',ctgr:12,title:'1주차 월요일',img:krr5113,vimeo:'998652977',game:'',ppt:'987078796',workbook:''},
      {week:1,css:'yellowbox',ctgr:12,title:'1주차 화요일',img:krr5113,vimeo:'998591135',game:'',ppt:'810812292',workbook:''},
      {week:1,css:'pinkbox',ctgr:12,title:'1주차 수요일',img:krr5113,vimeo:'998653050',game:'',ppt:'987078817',workbook:''},
      {week:1,css:'yellowbox',ctgr:12,title:'1주차 목요일',img:krr5114,vimeo:'998591205',game:'',ppt:'810812318',workbook:''},
      {week:1,css:'pinkbox',ctgr:12,title:'1주차 금요일',img:krr5115,vimeo:'998653050',game:'',ppt:'987078817',workbook:''},

      {week:2,css:'yellowbox',ctgr:12,title:'2주차 월요일',img:krr5121,vimeo:'998653126',game:'',ppt:'987078850',workbook:''},
      {week:2,css:'pinkbox',ctgr:12,title:'2주차 화요일',img:krr5125,vimeo:'998591302',game:'',ppt:'810812336',workbook:''},
      {week:2,css:'yellowbox',ctgr:12,title:'2주차 수요일',img:krr5123,vimeo:'998653229',game:'',ppt:'987078887',workbook:''},
      {week:2,css:'pinkbox',ctgr:12,title:'2주차 목요일',img:krr5125,vimeo:'998591374',game:'',ppt:'810812355',workbook:''},
      {week:2,css:'yellowbox',ctgr:12,title:'2주차 금요일',img:krr5125,vimeo:'998653229',game:'',ppt:'987078887',workbook:''},

      {week:3,css:'pinkbox',ctgr:12,title:'3주차 월요일',img:krr5134,vimeo:'998653348',game:'',ppt:'987078901',workbook:''},
      {week:3,css:'yellowbox',ctgr:12,title:'3주차 화요일',img:krr5132,vimeo:'998591440',game:'',ppt:'810812382',workbook:''},
      {week:3,css:'pinkbox',ctgr:12,title:'3주차 수요일',img:krr5133,vimeo:'998653464',game:'',ppt:'987078930',workbook:''},
      {week:3,css:'yellowbox',ctgr:12,title:'3주차 목요일',img:krr5134,vimeo:'998591537',game:'',ppt:'810812382',workbook:''},
      {week:3,css:'pinkbox',ctgr:12,title:'3주차 금요일',img:krr5135,vimeo:'998653464',game:'',ppt:'987078930',workbook:''},

      {week:4,css:'yellowbox',ctgr:12,title:'4주차 월요일',img:krr5141,vimeo:'998653564',game:'',ppt:'987078957',workbook:''},
      {week:4,css:'pinkbox',ctgr:12,title:'4주차 화요일',img:krr5142,vimeo:'998591633',game:'',ppt:'810812394'},
      {week:4,css:'yellowbox',ctgr:12,title:'4주차 수요일',img:krr5143,vimeo:'998653647',game:'',ppt:'987078957',workbook:''},
      {week:4,css:'pinkbox',ctgr:12,title:'4주차 목요일',img:krr5143,vimeo:'998591009',game:'',ppt:'810812407',workbook:''},
      {week:4,css:'yellowbox',ctgr:12,title:'4주차 금요일',img:krr5145,vimeo:'998653647',game:'',ppt:'987078957',workbook:''},

      // Step2 -> 4호
      {week:1,css:'pinkbox',ctgr:22,title:'1주차 월요일',img:krr5111,vimeo:'998656065',game:'',ppt:'713257887',workbook:''},
      {week:1,css:'yellowbox',ctgr:22,title:'1주차 화요일',img:krr5112,vimeo:'998592662',game:'',ppt:'850000491',workbook:''},
      {week:1,css:'pinkbox',ctgr:22,title:'1주차 수요일',img:krr5113,vimeo:'998655129',game:'',ppt:'713257945',workbook:''},
      {week:1,css:'yellowbox',ctgr:22,title:'1주차 목요일',img:krr5113,vimeo:'998592154',game:'',ppt:'850000459',workbook:''},
      {week:1,css:'pinkbox',ctgr:22,title:'1주차 금요일',img:krr5115,vimeo:'998655129',game:'',ppt:'713257945',workbook:''},

      {week:2,css:'yellowbox',ctgr:22,title:'2주차 월요일',img:krr5121,vimeo:'998655265',game:'',ppt:'713258027',workbook:''},
      {week:2,css:'pinkbox',ctgr:22,title:'2주차 화요일',img:krr5122,vimeo:'998592236',game:'',ppt:'852208428',workbook:''},
      {week:2,css:'yellowbox',ctgr:22,title:'2주차 수요일',img:krr5123,vimeo:'998655398',game:'',ppt:'713258062',workbook:''},
      {week:2,css:'pinkbox',ctgr:22,title:'2주차 목요일',img:krr5124,vimeo:'998592315',game:'',ppt:'852208451',workbook:''},
      {week:2,css:'yellowbox',ctgr:22,title:'2주차 금요일',img:krr5123,vimeo:'998655398',game:'',ppt:'713258062',workbook:''},

      {week:3,css:'pinkbox',ctgr:22,title:'3주차 월요일',img:krr5131,vimeo:'998655523',game:'',ppt:'713258142',workbook:''},
      {week:3,css:'yellowbox',ctgr:22,title:'3주차 화요일',img:krr5132,vimeo:'998592378',game:'',ppt:'987095246',workbook:''},
      {week:3,css:'pinkbox',ctgr:22,title:'3주차 수요일',img:krr5133,vimeo:'998655677',game:'',ppt:'713258178',workbook:''},
      {week:3,css:'yellowbox',ctgr:22,title:'3주차 목요일',img:krr5132,vimeo:'998592440',game:'',ppt:'987095179',workbook:''},
      {week:3,css:'pinkbox',ctgr:22,title:'3주차 금요일',img:krr5132,vimeo:'998655677',game:'',ppt:'713258178',workbook:''},

      {week:4,css:'yellowbox',ctgr:22,title:'4주차 월요일',img:krr5141,vimeo:'998655836',game:'',ppt:'829301634',workbook:''},
      {week:4,css:'pinkbox',ctgr:22,title:'4주차 화요일',img:krr5142,vimeo:'998592511',game:'',ppt:'987095215'},
      {week:4,css:'yellowbox',ctgr:22,title:'4주차 수요일',img:krr5143,vimeo:'998655944',game:'',ppt:'713258218',workbook:''},
      {week:4,css:'pinkbox',ctgr:22,title:'4주차 목요일',img:krr5144,vimeo:'998592591',game:'',ppt:'987095215',workbook:''},
      {week:4,css:'yellowbox',ctgr:22,title:'4주차 금요일',img:krr5144,vimeo:'998655944',game:'',ppt:'713258218',workbook:''},
 
 
      // Step3 -> 1호
      {week:1,css:'pinkbox',ctgr:13,title:'1주차 월요일',img:krr5111,vimeo:'998595189',game:'',ppt:'987083168',workbook:''},
      {week:1,css:'yellowbox',ctgr:13,title:'1주차 화요일',img:krr5112,vimeo:'998657527',game:'',ppt:'811132925',workbook:''},
      {week:1,css:'pinkbox',ctgr:13,title:'1주차 수요일',img:krr5113,vimeo:'998594255',game:'',ppt:'987083194',workbook:''},
      {week:1,css:'yellowbox',ctgr:13,title:'1주차 목요일',img:krr5112,vimeo:'998657444',game:'',ppt:'811132943',workbook:''},
      {week:1,css:'pinkbox',ctgr:13,title:'1주차 금요일',img:krr5112,vimeo:'998594255',game:'',ppt:'987083194',workbook:''},

      {week:2,css:'yellowbox',ctgr:13,title:'2주차 월요일',img:krr5121,vimeo:'998594354',game:'',ppt:'987083212',workbook:''},
      {week:2,css:'pinkbox',ctgr:13,title:'2주차 화요일',img:krr5122,vimeo:'998597469',game:'',ppt:'811132959',workbook:''},
      {week:2,css:'yellowbox',ctgr:13,title:'2주차 수요일',img:krr5122,vimeo:'998594444',game:'',ppt:'987083240',workbook:''},
      {week:2,css:'pinkbox',ctgr:13,title:'2주차 목요일',img:krr5124,vimeo:'998597526',game:'',ppt:'811132975',workbook:''},
      {week:2,css:'yellowbox',ctgr:13,title:'2주차 금요일',img:krr5125,vimeo:'998594444',game:'',ppt:'987083240',workbook:''},

      {week:3,css:'pinkbox',ctgr:13,title:'3주차 월요일',img:krr5131,vimeo:'998594591',game:'',ppt:'924527817',workbook:''},
      {week:3,css:'yellowbox',ctgr:13,title:'3주차 화요일',img:krr5132,vimeo:'998597590',game:'',ppt:'811132986',workbook:''},
      {week:3,css:'pinkbox',ctgr:13,title:'3주차 수요일',img:krr5133,vimeo:'998594727',game:'',ppt:'924528083',workbook:''},
      {week:3,css:'yellowbox',ctgr:13,title:'3주차 목요일',img:krr5134,vimeo:'998597075',game:'',ppt:'811132997',workbook:''},
      {week:3,css:'pinkbox',ctgr:13,title:'3주차 금요일',img:krr5133,vimeo:'998594727',game:'',ppt:'924528083',workbook:''},

      {week:4,css:'pinkbox',ctgr:13,title:'4주차 화요일',img:krr5143,vimeo:'998594876',game:'',ppt:'924529045'},
      {week:4,css:'yellowbox',ctgr:13,title:'4주차 월요일',img:krr5141,vimeo:'998597225',game:'',ppt:'811133014',workbook:''},
      {week:4,css:'pinkbox',ctgr:13,title:'4주차 수요일',img:krr5143,vimeo:'998595055',game:'',ppt:'924529452',workbook:''},
      {week:4,css:'pinkbox',ctgr:13,title:'4주차 목요일',img:krr5144,vimeo:'998597375',game:'',ppt:'811133027',workbook:''},
      {week:4,css:'yellowbox',ctgr:13,title:'4주차 금요일',img:krr5145,vimeo:'998595055',game:'',ppt:'924529452',workbook:''},



       // Step3 -> 4호
       {week:1,css:'pinkbox',ctgr:23,title:'1주차 월요일',img:krr5111,vimeo:'998596882',game:'',ppt:'723666082',workbook:''},
       {week:1,css:'yellowbox',ctgr:23,title:'1주차 화요일',img:krr5111,vimeo:'9986584867',game:'',ppt:'832148198',workbook:''},
       {week:1,css:'pinkbox',ctgr:23,title:'1주차 수요일',img:krr5113,vimeo:'998595907',game:'',ppt:'723666120',workbook:''},
       {week:1,css:'yellowbox',ctgr:23,title:'1주차 목요일',img:krr5114,vimeo:'998657833',game:'',ppt:'831804858',workbook:''},
       {week:1,css:'bluebox',ctgr:23,title:'1주차 금요일',img:krr5115,vimeo:'998595907',game:'',ppt:'723666120',workbook:''},
 
       {week:2,css:'yellowbox',ctgr:23,title:'2주차 월요일',img:krr5121,vimeo:'998596005',game:'',ppt:'723666150',workbook:''},
       {week:2,css:'pinkbox',ctgr:23,title:'2주차 화요일',img:krr5122,vimeo:'998657890',game:'',ppt:'833887984',workbook:''},
       {week:2,css:'yellowbox',ctgr:23,title:'2주차 수요일',img:krr5123,vimeo:'998596127',game:'',ppt:'723666179',workbook:''},
       {week:2,css:'pinkbox',ctgr:23,title:'2주차 목요일',img:krr5123,vimeo:'998657986',game:'',ppt:'832156266',workbook:''},
       {week:2,css:'bluebox',ctgr:23,title:'2주차 금요일',img:krr5125,vimeo:'998596127',game:'',ppt:'723666179',workbook:''},
 
       {week:3,css:'pinkbox',ctgr:23,title:'3주차 월요일',img:krr5131,vimeo:'998596237',game:'',ppt:'723666213',workbook:''},
       {week:3,css:'yellowbox',ctgr:23,title:'3주차 화요일',img:krr5132,vimeo:'998658107',game:'',ppt:'944349600',workbook:''},
       {week:3,css:'pinkbox',ctgr:23,title:'3주차 수요일',img:krr5133,vimeo:'998596363',game:'',ppt:'723666240',workbook:''},
       {week:3,css:'yellowbox',ctgr:23,title:'3주차 목요일',img:krr5134,vimeo:'998658189',game:'',ppt:'832148226',workbook:''},
       {week:3,css:'bluebox',ctgr:23,title:'3주차 금요일',img:krr5133,vimeo:'998596363',game:'',ppt:'723666240',workbook:''},
 
       {week:4,css:'yellowbox',ctgr:23,title:'4주차 월요일',img:krr5141,vimeo:'998596529',game:'',ppt:'723666265',workbook:''},
       {week:4,css:'pinkbox',ctgr:23,title:'4주차 화요일',img:krr5142,vimeo:'998658264',game:'',ppt:'944350001'},
       {week:4,css:'yellowbox',ctgr:23,title:'4주차 수요일',img:krr5143,vimeo:'998596700',game:'',ppt:'723666292',workbook:''},
       {week:4,css:'pinkbox',ctgr:23,title:'4주차 목요일',img:krr5144,vimeo:'998658356',game:'',ppt:'832158578',workbook:''},
       {week:4,css:'bluebox',ctgr:23,title:'4주차 금요일',img:krr5144,vimeo:'998596700',game:'',ppt:'723666292',workbook:''},
 
 
  
      
    ]


    useEffect(()=>{
      window.scrollTo(0,0)
    },[])
 
    

  window.addEventListener('scroll', (e) => {
     
  
    if(window.scrollY>scrollY){
      setScrollDown(false) 
      setScrollY(window.scrollY)
    }else{ 
      // setScrollDown(true) 
      // setScrollY(window.scrollY)
    }
     
   
  });

  const handleMenuMousOver = (idx) => {
    setScrollDown(true)
    setIsHovering(idx)
  }
    
  const handleStepChange = (idx,link) => {
    setStep(idx)
    window.scrollTo(0,0)
    setScrollY(0)
    navigate(link, {state:{idx:idx}})
  }

  const handleNavStepChange = (idx,link) => {
    setNavDialog(false)
    setStep(idx)
    window.scrollTo(0,0)
    setScrollY(0)
    navigate(link, {state:{idx:idx}})
  }

  const handleMouseOut = (idx) => {
    
    if(scrollY>=90){
      setScrollDown(false)
    }

    setIsHovering(idx)
  }
 
  const handleGoVimeo = (link) => {
    let width = window.screen.width * 0.8;
    let height = (window.screen.width * 0.8) *  0.5625;
    let left = (window.screen.width - width) / 2;
    let top = (window.screen.height - height) / 2;
   
    let option = `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizeble=no, copyhistory=no, width=${width}, height=${height}, left=${left}, top=${top}`
    


    window.open('https://player.vimeo.com/video/'+link, '_blank', option)
  }
  
  const handleGame = (code) => {
    window.open(code,'pop')
  }

  const handleCtgrCk = (idx) => {
    if(idx<=100){
      setCtgr(idx)
    }else{
      setCtgr(100)
    }

    window.scrollTo(0,0)  
    setScrollY(0)
  }

  useEffect(() => {
    if(dialog){

      document.body.style= `overflow: hidden`;
      return () => document.body.style = `overflow: auto`
    }
  }, [dialog])
  
 
   
  return (
    <div className='mainLayout'>
      <div className='menuBar'>
        <div className='menuBarIn'>

          <img className='logoImg' onClick={()=>navigate('../')} src={sk} alt='' />

          <div className='menuBarMenu'> 
            <div onMouseOver={()=>handleMenuMousOver(1)}
              onClick={()=>handleStepChange(0,'../Lulu/')}
                className={isHovering===1?'titleMenuOnKrr':'titleMenuOff'}>룰루
            </div>
            <div onMouseOver={()=>handleMenuMousOver(2)}
                className={isHovering===2?'titleMenuOnKrr':'titleMenuOff'}
                onClick={()=>handleStepChange(step,'../Krr/')}>까르르한글수
            </div>
            <div onMouseOver={()=>handleMenuMousOver(3)}
                className={isHovering===3?'titleMenuOnKrr':'titleMenuOff'}
                onClick={()=>handleStepChange(4,'../ElliIvy/')}>ElliIvy
            </div>
            
            <div className='goSkBtn goSkKrr' onClick={()=>window.open('http://www.edujusk.kr')}>섬김 사이트</div>
          </div>
          <div className='navMenuBar'>
            <div className='navTitleKrr' onClick={()=>handleMenuMousOver(2)}>
              까르르
            </div>
            <div className='navMenu bgYellow' onClick={()=>setNavDialog(true)}>
              <div className='navLine'></div>
              <div className='navLine'></div>
              <div className='navLine'></div>
            </div>
          </div>
        </div>
      </div> 
      {isHovering===1?
          <div className={scrollY<90 || scrollDown?'subMenu subMenuOn':'subMenu subMenuOff'}>
                <div style={{minWidth:465}}/>
                
                <div onClick={()=>handleStepChange(0,'../Lulu/')}  className={step===0?'sm subMenuItemOn':'sm subMenuItemOff'}>
                  <img src={krrStepOn0} alt=''/>
                  <div className='menuText'>STEP1</div>
                  <div className='menuLine lineOn1'/>
                  
                </div>
             
                <video  className='subMenuCharacter'  autoPlay muted loop style={{marginLeft:315}}>
                  <source src={luluCharacter} type="video/mp4"></source>
                </video>
          </div>
          :isHovering===2?
          <div className={scrollY<90 || scrollDown ?'subMenu subMenuOn':'subMenu subMenuOff'}>
              <div style={{minWidth:355}}/>
              
              <div onClick={()=>handleStepChange(1,'../Krr/')} className={step===1?'sm subMenuItemOn':'sm subMenuItemOff'}>
                <img src={krrStepOn1} alt=''/>
                <div className='menuText'>STEP1</div>
                <div className='menuLine lineOn1'/>
              </div>
            

              <div onClick={()=>handleStepChange(2,'../Krr/')} className={step===2?'sm subMenuItemOn':'sm subMenuItemOff'}>
                <img src={krrStepOn2} alt=''/>
                <div className='menuText'>STEP2</div>
                <div className='menuLine lineOn1'/>
                
              </div>
            

              <div onClick={()=>handleStepChange(3,'../Krr/')} className={step===3?'sm subMenuItemOn':'sm subMenuItemOff'}>
                <img src={krrStepOn3} alt=''/>
                <div className='menuText'>STEP3</div>
                <div className='menuLine lineOn1'/>
                
              </div>
            
              <video  className='subMenuCharacter' autoPlay muted loop style={{marginLeft:205}}>
                <source src={character} type="video/mp4"></source>
              </video>

          </div>
          :
          <div className={scrollY<90 || scrollDown ?'subMenu subMenuOn':'subMenu subMenuOff'}>
              {/* <div style={{minWidth:300}}/> */}
              
              <div onClick={()=>handleStepChange(4,'../ElliIvy/')}  className={step===4?'sm subMenuItemOn':'sm subMenuItemOff'}>
                <img src={eliivyStepOn0} alt=''/>
                <div className='menuText'>LITTLES</div>
                <div className='menuLine lineOn1'/>
              </div>
            

              <div onClick={()=>handleStepChange(5,'../ElliIvy/')}   className={step===5?'sm subMenuItemOn':'sm subMenuItemOff'}>
                <img src={eliivyStepOn1} alt=''/>
                <div className='menuText'>STEP1</div>
                <div className='menuLine lineOn1'/>
                
              </div>
            

              <div onClick={()=>handleStepChange(6,'../ElliIvy/')}   className={step===6?'sm subMenuItemOn':'sm subMenuItemOff'}>
                <img src={eliivyStepOn2} alt=''/>
                <div className='menuText'>STEP2</div>
                <div className='menuLine lineOn1'/>
                
              </div>

              <div onClick={()=>handleStepChange(7,'../ElliIvy/')}   className={step===7?'sm subMenuItemOn':'sm subMenuItemOff'}>
                <img src={eliivyStepOn3} alt=''/>
                <div className='menuText'>STEP3</div>
                <div className='menuLine lineOn1'/>
                
              </div>


              {/* <img className='subMenuCharacter' src={character} alt='' style={{marginLeft:150}}/> */}
          </div>
      
      }
      
      
      <div onMouseOver={()=>handleMouseOut(2)} className='centerLayout'>
  
        
      
        
          <div className='centerLayoutIn'>
 
            <div className='ctgrLayout'>
              <div onClick={()=>handleCtgrCk(10)} className={ctgr===10?'ctgrItemOnKrr ctgrItem':'ctgrItemOff ctgrItem'}>
                1호
              </div>
              <div onClick={()=>handleCtgrCk(20)} className={ctgr===20?'ctgrItemOnKrr ctgrItem':'ctgrItemOff ctgrItem'}>
                4호
              </div>
              
              <div onClick={()=>handleCtgrCk(100)} className={ctgr===100?'ctgrItemOnKrr ctgrItem':'ctgrItemOff ctgrItem'}>
                잼보
              </div> 
              
              
            </div>
 
 

            {ctgr<100?
              <div className='list'>
                <div className='listLayout'>
                  {contentsList.filter((vval,vidx)=>vval.ctgr===step+ctgr && vval.week===1).map((val,idx)=>
                    <div key={idx} className={`contentsLayout ${val.css}`}> 
                     
                      
                         
                      <div className='contentsImgBox'> 
                        <a href={`https://player.vimeo.com/video/${val.vimeo}`} target='_bank'>
                          <img src={val.img} alt=''/>
                        </a>
                      </div>
                      
                      {/* <div className='contentsImgBox' onClick={()=>handleGoVimeo(val.vimeo)}> 
                        <img src={val.img} alt=''/> 
                      </div> */}
                    
                      <div className='contentsTitle' >
                        {val.title}
                      </div>
                      
                      <div className='contentsBtn'>
                        {/* {val.game!==''?
                          <img src={gameOn} alt='' onClick={()=>handleGame(val.game)} style={{cursor:'pointer'}}/>
                          :<img src={gameOff} alt='' />
                        } */}
                        {val.ppt!==''?
                          <img src={pptOn} alt='' onClick={()=>handleGoVimeo(val.ppt)} style={{cursor:'pointer'}}/>
                          :<img src={pptOff} alt='' />
                        }
                         {val.game!==''?
                          <img src={gameOn} alt='' onClick={()=>handleGame(val.game)} style={{cursor:'pointer'}}/>
                          :<img src={gameOff} alt='' />
                        }
                        {/* {val.workbook!==''?
                          <img src={workbookOn} alt='' onClick={()=>handleDialog(val.title,val.workbook)} style={{cursor:'pointer'}}/>
                          :<img src={workbookOff} alt='' />
                        } */}
                      </div>
                    </div>
                  )}
                </div>
                <div className='listTitle colorYellow'>
                  까르르한글수 STEP{step}-{ctgr===10?1:2}호 {'<2주차>'}
                </div>
              
                <div className='listLayout'>
                  {contentsList.filter((vval,vidx)=>vval.ctgr===step+ctgr && vval.week===2).map((val,idx)=>
                    <div key={idx} className={`contentsLayout ${val.css}`}> 
                    
                    <div className='contentsImgBox' onClick={()=>handleGoVimeo(val.vimeo)}> 
                        <img src={val.img} alt=''/> 
                      </div>
                    
                      {/* <div className='contentsImgBox'>
                        <a href={`https://vimeo.com/${val.vimeo}`} >
                          <img src={val.img} alt=''/>
                        </a>
                      </div> */}

                      <div className='contentsTitle'>
                        {val.title}
                      </div>
                      
                      <div className='contentsBtn'>
                        {/* {val.game!==''?
                          <img src={gameOn} alt='' onClick={()=>handleGame(val.game)} style={{cursor:'pointer'}}/>
                          :<img src={gameOff} alt='' />
                        } */}
                        {val.ppt!==''?
                          <img src={pptOn} alt='' onClick={()=>handleGoVimeo(val.ppt)} style={{cursor:'pointer'}}/>
                          :<img src={pptOff} alt='' />
                        }
                         {val.game!==''?
                          <img src={gameOn} alt='' onClick={()=>handleGame(val.game)} style={{cursor:'pointer'}}/>
                          :<img src={gameOff} alt='' />
                        }
                        {/* {val.workbook!==''?
                          <img src={workbookOn} alt='' onClick={()=>handleDialog(val.title,val.workbook)} style={{cursor:'pointer'}}/>
                          :<img src={workbookOff} alt='' />
                        } */}
                      </div>
                    </div>
                  )}
                </div>
                <div className='listTitle colorYellow'>
                  까르르한글수 STEP{step}-{ctgr===10?1:2}호 {'<3주차>'}
                </div>
              
                <div className='listLayout'>
                {contentsList.filter((vval,vidx)=>vval.ctgr===step+ctgr && vval.week===3).map((val,idx)=>
                    <div key={idx} className={`contentsLayout ${val.css}`}> 
                    
                    <div className='contentsImgBox' onClick={()=>handleGoVimeo(val.vimeo)}> 
                        <img src={val.img} alt=''/> 
                      </div>
                    
                      <div className='contentsTitle'>
                        {val.title}
                      </div>
                      
                      <div className='contentsBtn'>
                        {/* {val.game!==''?
                          <img src={gameOn} alt='' onClick={()=>handleGame(val.game)} style={{cursor:'pointer'}}/>
                          :<img src={gameOff} alt='' />
                        } */}
                        {val.ppt!==''?
                          <img src={pptOn} alt='' onClick={()=>handleGoVimeo(val.ppt)} style={{cursor:'pointer'}}/>
                          :<img src={pptOff} alt='' />
                        }
                         {val.game!==''?
                          <img src={gameOn} alt='' onClick={()=>handleGame(val.game)} style={{cursor:'pointer'}}/>
                          :<img src={gameOff} alt='' />
                        }
                        {/* {val.workbook!==''?
                          <img src={workbookOn} alt='' onClick={()=>handleDialog(val.title,val.workbook)} style={{cursor:'pointer'}}/>
                          :<img src={workbookOff} alt='' />
                        } */}
                      </div>
                    </div>
                  )}
                </div>
                <div className='listTitle colorYellow'>
                  까르르한글수 STEP{step}-{ctgr===10?1:2}호 {'<4주차>'}
                </div>
              
                <div className='listLayout'>
                  {contentsList.filter((vval,vidx)=>vval.ctgr===step+ctgr && vval.week===4).map((val,idx)=>
                    <div key={idx} className={`contentsLayout ${val.css}`}> 
                    
                    <div className='contentsImgBox' onClick={()=>handleGoVimeo(val.vimeo)}> 
                        <img src={val.img} alt=''/> 
                      </div>
                    
                      <div className='contentsTitle'>
                        {val.title}
                      </div>
                      
                      <div className='contentsBtn'>
                      
                        {val.ppt!==''?
                          <img src={pptOn} alt='' onClick={()=>handleGoVimeo(val.ppt)} style={{cursor:'pointer'}}/>
                          :<img src={pptOff} alt='' />
                        }
                          {val.game!==''?
                          <img src={gameOn} alt='' onClick={()=>handleGame(val.game)} style={{cursor:'pointer'}}/>
                          :<img src={gameOff} alt='' />
                        }
                        {/* {val.workbook!==''?
                          <img src={workbookOn} alt='' onClick={()=>handleDialog(val.title,val.workbook)} style={{cursor:'pointer'}}/>
                          :<img src={workbookOff} alt='' />
                        } */}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              :            
              <div className='list'>
                <div className='zemboListLayout' style={{minHeight:'calc(100vh - 620px)'}}>            
                 
                 
                  {musicList.filter((vval,vidx)=>vval.ctgr===step+ctgr).map((val,idx)=>
                    <div className={`contentsLayout ${val.css}`} key={idx} style={{height:'fit-content'}}>
                
                    
                      <div className='contentsImgBox' onClick={()=>handleGoVimeo(val.vimeo)}> 
                        <img src={val.img} alt='' style={{width:190}}/>
                      </div>
                      <div className='contentsTitle' style={{height:75}}>
                        {val.title}
                        {val.title2===''?'':<br/>}
                        {val.title2}
                      </div>
                      <div className='contentsBtn'>
                        {val.ppt!==''?
                          <img src={pptOn} alt='' onClick={()=>handleGoVimeo(val.ppt)} style={{cursor:'pointer'}}/>
                          :<img src={pptOff} alt='' />
                        }
                        {val.game!==''?
                          <img src={gameOn} alt='' onClick={()=>handleGame(val.game)} style={{cursor:'pointer'}}/>
                          :<img src={gameOff} alt='' />
                        }
                      
                      
                      </div> 
                    </div>
                  )}
                </div>
              </div>
            }
                       

              <div className='bottomLayout'>
                <div className='bottomLayoutIn'>
                  <img src={skGray} alt=''/>
                  <div className='bottomText'>
                    <div>(주)섬김 │ 대표 : 임영수</div> 
                    <div>사업자등록번호 : 886-86-00204</div>
                    <div>대표번호 1533-2473</div>
                    <div>©2023 by (주)섬김 All Rights Reserved.</div>
                  </div>
                  <div className='bottomBtn'>
                    <img src={instaLogo} alt='' onClick={()=>window.open('https://www.instagram.com/krrhangeul_official/')}/>
                    <img src={youtubeLogo} alt='' onClick={()=>window.open('https://www.youtube.com/@edujusk')} />
                    {/* <img src={blogLogo} alt='' /> */}
                  </div>
                </div>
                
              </div>
        
      
          </div>        
           
        {/* <div style={{width:'100vw',height:50,backgroundColor:'#fff',position:'relative',zIndex:1000,padding:30,boxSizing:'border-box',borderTop:'1px solid #dcdcdc'}}>
          ㅇㅇ
        </div> */}
      </div>


      {/* <img src={bg} alt='' style={{width:"100%",height:'100%',position:'fixed',bottom:0,zIndex:10,objectFit:'cover'}} /> */}
      <img src={stars} alt='' className='stars' />
      <img src={circle} alt='' className='circle1'/>
      <img src={circle} alt='' className='circle2'/>
        
      {dialog?
      <div className='dialogBg' onClick={()=>setDialog(false)}>
        <div onClick={(e)=>e.stopPropagation()} className='dialogLayout'>
          <div className='dialogStatusBar'>
            <div className='dialogStatusTitle'>
              {dialogTitle}
            </div>
            <div className='dialogStatusCancel' onClick={()=>setDialog(false)}>X</div>
          </div>
          <div className='dialogImgBox'>  
           <img src={dialogImg} alt=''/>
          </div>
        </div>
        
      </div>
      :''}

    {navDialog===true?
      <div className={navDialog?'navDialog navDialogOn':'navDialog navDialogOff'}> 
        <div className='navDialogStatusBar'>
          <div className='navDialogImgBar'>
            <img className='logoImg' onClick={()=>navigate('../')} src={sk} alt='' />
          </div>

          <div className='navDialogStatusCancel bgYellow' onClick={()=>setNavDialog(false)}>
            <div className='navCancelLine1'></div>
            <div className='navCancelLine2'></div>
          </div>
             
        </div>
        <div className='navDialogMenu'>  
          <div className='navDialogMenuLayout'>
            <div className='navDialogMenuTitleOff' onClick={()=>handleNavStepChange(0,'../Lulu/')}>안녕! 룰루</div>
            <div className='navDialogMenuStep'>
              <div onClick={()=>handleNavStepChange(0,'../Lulu/')}  className={step===0?'navDialogMenuStepOn navStepLuluOn':'navDialogMenuStepOff'}>LITTLES</div>
            </div>
          </div>
          <div className='navDialogMenuLayout'>
            <div className='navDialogMenuTitle colorYellow' onClick={()=>handleNavStepChange(step,'../Krr/')}>까르르한글수</div>
            <div className='navDialogMenuStep'>
              <div onClick={()=>handleNavStepChange(1,'../Krr/')}   className={step===1?'navDialogMenuStepOn navStepKrrOn':'navDialogMenuStepOff'} >STEP1</div>
              <div onClick={()=>handleNavStepChange(2,'../Krr/')}   className={step===2?'navDialogMenuStepOn navStepKrrOn':'navDialogMenuStepOff'}>STEP2</div>
              <div onClick={()=>handleNavStepChange(3,'../Krr/')}   className={step===3?'navDialogMenuStepOn navStepKrrOn':'navDialogMenuStepOff'}>STEP3</div>
            </div>
          </div>
          <div className='navDialogMenuLayout'>
            <div className='navDialogMenuTitleOff' onClick={()=>handleNavStepChange(4,'../ElliIvy/')}>ElliIvy English</div>
            <div className='navDialogMenuStep'>
              <div onClick={()=>handleNavStepChange(4,'../ElliIvy/')}  className={step===4?'navDialogMenuStepOn navStepEliivyOn':'navDialogMenuStepOff'}>LITTLES</div>
              <div onClick={()=>handleNavStepChange(5,'../ElliIvy/')}  className={step===5?'navDialogMenuStepOn navStepEliivyOn':'navDialogMenuStepOff'}>STEP1</div>
              <div onClick={()=>handleNavStepChange(6,'../ElliIvy/')}  className={step===6?'navDialogMenuStepOn navStepEliivyOn':'navDialogMenuStepOff'}>STEP2</div>
              <div onClick={()=>handleNavStepChange(7,'../ElliIvy/')}  className={step===7?'navDialogMenuStepOn navStepEliivyOn':'navDialogMenuStepOff'}>STEP3</div>
            </div>
          </div>
       
        </div>
        </div> :''}

 

      
    </div>
  );
}

export default Krr;
