/* eslint react/prop-types: 0 */

import React, { useState, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';
import BoardSidebar from '../BoardSidebar';
import BoardPostedPageNum from './BoardPostedPageNum';
import BoardPostedTemplateContainer from '../../container/BoardPostedTemplateContainer'
import './FreeBulletinBoard.css'

const FreeBulletinBoard = ({boardData, getBoardPostedData,category, query, nowCategory}) => {
  console.log("🚀 ~ file: FreeBulletinBoard.js ~ line 12 ~ FreeBulletinBoard ~ category", category)
  console.log("🚀 ~ file: FreeBulletinBoard.js ~ line 12 ~ FreeBulletinBoard ~ query", query)
  const [postedList, setPostedList] = useState(null)
  
  useEffect(async () => {
    nowCategory(category)
    const getBoardData = await axios(`https://localhost:3002/board/${category}?page=${query}`)
    getBoardPostedData([getBoardData.data])
    const testBoard = [getBoardData.data]
    const getPostedList = testBoard[0].data.map((posted) => (
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

  },[category])   




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
          {/* <BoardPostedPageNum /> */}
           {/* <div> */}
            <div className="board_posted_page_nums">
                <div className="board_posted_page_prev_five">&#60;&#60;</div>
                <div className="board_posted_page_prev_one">&#60;</div>
                <div className="board_posted_page_num_1">1</div>
                <div className="board_posted_page_num_2">2</div>
                <div className="board_posted_page_num_3">3</div>
                <div className="board_posted_page_num_4">4</div>
                <div className="board_posted_page_num_5">5</div>
                <div className="board_posted_page_next_one">&#62;</div>
                <div className="board_posted_page_next_five">&#62;&#62;</div>
            </div>
                <Link to="/write">
                <div className="board_post_btn">등록</div>
                </Link>
        </div>
        {/* </div> */}
      </div>):(<div>loading...</div>)
       
    
};

export default FreeBulletinBoard;