/* eslint react/prop-types: 0 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BoardSidebar from '../BoardSidebar';
import BoardPostedPageNum from './BoardPostedPageNum';
import BoardPostedTemplateContainer from '../../container/BoardPostedTemplateContainer'
import './FreeBulletinBoard.css'

const FreeBulletinBoard = ({boardData, getBoardPostedData,category, query}) => {
  const [postedList, setPostedList] = useState(null)
  
  useEffect(async () => {
    const getBoardData = await axios(`http://localhost:3002/board/${category}?page=${query}`)
    getBoardPostedData([getBoardData.data])
  },[])   

  useEffect(() => {
    if (boardData) {
        const getPostedList = boardData[0].data.map((posted) => (
            <div key={posted.num}>
                <div className="board_posted_template">
                <div className="board_posted_template_num">{posted.num}</div>
                <div className="board_posted_template_title">{posted.title}</div>
                <div className="board_posted_template_createdAt">{posted.createdAt}</div>
                <div className="board_posted_template_writer">{posted.writer}</div>
                <div className="board_posted_template_number_of_views">{posted.numOfViews}</div>
                </div>
            </div>    
        ))
        setPostedList(getPostedList)
    }
  },boardData)

    return boardData && postedList?(<div>
        <BoardSidebar />
        <div className="free_board_container">
          <div className="free_board_posted">
            <div className="free_board_posted_num">번호</div>
            <div className="free_board_posted_title">제목</div>
            <div className="free_board_posted_createdAt">작성일</div>
            <div className="free_board_posted_writer">작성자</div>
            <div className="free_board_posted_number_of_views">조회수</div>
              {/* <BoardPostedTemplateContainer /> */}
              <div>{postedList}</div>
            </div>
          <BoardPostedPageNum />
        </div>
      </div>):(<div>loading...</div>)
       
    
};

export default FreeBulletinBoard;