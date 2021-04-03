import React from 'react';
import BoardSidebar from '../BoardSidebar';
import BoardPostedPageNum from './BoardPostedPageNum';
import BoardPostedTemplate from './BoardPostedTemplate';
import './FreeBulletinBoard.css'

const FreeBulletinBoard = () => {
    return (
       <div>
        <BoardSidebar />
        <div className="free_board_container">
          <div className="free_board_posted">
            <div className="free_board_posted_num">번호</div>
            <div className="free_board_posted_title">제목</div>
            <div className="free_board_posted_createdAt">작성일</div>
            <div className="free_board_posted_writer">작성자</div>
            <div className="free_board_posted_number_of_views">조회수</div>
              <BoardPostedTemplate />
              <BoardPostedTemplate />
              <BoardPostedTemplate />
              <BoardPostedTemplate />
              <BoardPostedTemplate />
              <BoardPostedTemplate />
              <BoardPostedTemplate />
              <BoardPostedTemplate />
              <BoardPostedTemplate />
              <BoardPostedTemplate />
             
             
            </div>
          {/* <div className="free_board_pages">
            <div className="free_board_page_prev_five">&#60;&#60;</div>
            <div className="free_board_page_prev_one">&#60;</div>
            <div className="free_board_page_num_1">1</div>
            <div className="free_board_page_num_2">2</div>
            <div className="free_board_page_num_3">3</div>
            <div className="free_board_page_num_4">4</div>
            <div className="free_board_page_num_5">5</div>
            <div className="free_board_page_next_one">&#62;</div>
            <div className="free_board_page_next_five">&#62;&#62;</div>
          </div> */}
          <BoardPostedPageNum />
        </div>
      </div>
    );
};

export default FreeBulletinBoard;