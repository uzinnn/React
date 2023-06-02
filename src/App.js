//import React, {useState, useEffect} from "react";
import {useRef, useState} from "react";
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList.js';

// const dummyList = [
 
  // {
  //   id:1,
  //   author:"강유진",
  //   content:"하이 1",
  //   emotion:5,
  //   created_date:new Date().getTime() //현재시간 기준으로 생성
  // },
  // {
  //   id:2,
  //   author:"홍길동",
  //   content:"하이 하하",
  //   emotion:1,
  //   created_date:new Date().getTime() //현재시간 기준으로 생성
  // },
  // {
  //   id:3,
  //   author:"메롱",
  //   content:"하이이이",
  //   emotion:4,
  //   created_date:new Date().getTime() //현재시간 기준으로 생성
  // }
 

//]


function App() {

  const [data,setData] = useState([]); //배열로 저장할거니까 배열로 초기값

  const dataId = useRef(0);

  const onCreate = (author,content,emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id : dataId.current
    };

    dataId.current += 1;
    setData([newItem, ...data])
  }

  const onRemove = (targetId) =>{
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter((it)=> it.id !== targetId);
    setData(newDiaryList);
  };

  return (
    <div className="App">
      <DiaryEditor onCreate = {onCreate}/>
      <DiaryList onRemove={onRemove} diaryList = {data}/>
    </div>
  );
}

export default App;
