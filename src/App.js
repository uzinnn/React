import React, {useState, useEffect} from "react";
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList.js';

const dummyList = [
 
  {
    id:1,
    author:"강유진",
    content:"하이 1",
    emotion:5,
    created_date:new Date().getTime() //현재시간 기준으로 생성
  },
  {
    id:2,
    author:"홍길동",
    content:"하이 하하",
    emotion:1,
    created_date:new Date().getTime() //현재시간 기준으로 생성
  },
  {
    id:3,
    author:"메롱",
    content:"하이이이",
    emotion:4,
    created_date:new Date().getTime() //현재시간 기준으로 생성
  }
 

]


function App() {

  return (
    <div className="App">
      <DiaryEditor/>
      <DiaryList diaryList = {dummyList}/>
    </div>
  );
}

export default App;
