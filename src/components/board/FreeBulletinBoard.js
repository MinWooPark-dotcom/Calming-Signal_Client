/* eslint react/prop-types: 0 */

import React, { useEffect } from 'react';
import axios from 'axios';
import BoardSidebar from '../BoardSidebar';
import BoardPostedPageNum from './BoardPostedPageNum';
// import BoardPostedTemplate from './BoardPostedTemplate';
import BoardPostedTemplateContainer from '../../container/BoardPostedTemplateContainer'
import './FreeBulletinBoard.css'

const FreeBulletinBoard = ({boardData, getBoardPostedData}) => {
console.log("🚀 ~ file: FreeBulletinBoard.js ~ line 12 ~ FreeBulletinBoard ~ boardData", boardData)

   useEffect(async () => {
      const getBoardData = await axios('http://localhost:3002/board')
    //   console.log("🚀 ~ file: FreeBulletinBoard.js ~ line 12 ~ boardData ~ getBoardData", getBoardData.data)
    //   setBoardData([getBoardData.data])
      getBoardPostedData([getBoardData.data])
    },[])   

    return boardData?(<div>
        <BoardSidebar />
        <div className="free_board_container">
          <div className="free_board_posted">
            <div className="free_board_posted_num">번호</div>
            <div className="free_board_posted_title">제목</div>
            <div className="free_board_posted_createdAt">작성일</div>
            <div className="free_board_posted_writer">작성자</div>
            <div className="free_board_posted_number_of_views">조회수</div>
              {/* <BoardPostedTemplate />       */}
              <BoardPostedTemplateContainer />
            </div>
          <BoardPostedPageNum />
        </div>
      </div>):(<div>loading...</div>)
       
    
};

export default FreeBulletinBoard;