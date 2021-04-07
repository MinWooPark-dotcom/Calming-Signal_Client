/* eslint react/prop-types: 0 */

    


import React, { useState, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';
import BoardSidebar from '../BoardSidebar';
import BoardPostedPageNum from './BoardPostedPageNum';
import BoardPostedTemplateContainer from '../../container/BoardPostedTemplateContainer'
import './FreeBulletinBoard.css'

const FreeBulletinBoard = ({
  boardData, 
  getBoardPostedData,
  category,
  query, 
  nowCategory, 
  getContentPostId,
  getContentTitle, 
  getContentBody, 
  getContentCategory, 
  getContentNumOfViews, 
  getContentCreatedAt, 
  getContentUserName, 
  getContentComment,
  history }) => {
  
  
  const [postedList, setPostedList] = useState(null) 
  const [pageNum, setPageNum] = useState([1,2,3,4,5])
  const [numOfPages, setNumOfPages] = useState(null)
  
  // ! 특정 숫자 클릭 시 이동
  const handleSpecificPageClick = (e) => {
    // console.log(e.target.innerText)
    history.push(`/board/${category}?page=${e.target.innerText}`)
  }

  // ! '>' 다음 페이지 목록으로 이동
  const handleNextPageClick = () => {
    if(pageNum[4] + 5 <= numOfPages) {
      setPageNum(pageNum.map(el => el+5))
    } else if(pageNum[4] < numOfPages){
      const remainingPages = numOfPages - pageNum[4] 
      setPageNum(pageNum.map(el => el + remainingPages).filter(el => pageNum[4] < el <= numOfPages))
    }
  }

  // ! '>>' 맨 뒤 페이지로 이동
  const handleLastPageClick = () => {
    if (numOfPages > 5) {
      const numOfShowPages = numOfPages % 5 // 7 % 5 = 2
      let pagesArr = []
      for (let i = numOfPages - numOfShowPages + 1; i < numOfPages; i++) {
          pagesArr.push(i)
      }
      setNumOfPages(pagesArr)
    }
  }

  // ! '<' 이전 페이지 목록으로 이동
  const handlePrevPageClick = () => {
    if (pageNum[0] > 5) {
      setPageNum(pageNum.map(el => el-5))
    }
  }

  // ! '<<' 맨 앞으로 페이지 이동
  const handleFirstClick = () => {
    if (pageNum[0] !== 1) {
      setPageNum([1,2,3,4,5])
    }
  }

  // ! 제목 클릭 시 본문으로 이동
  const handleOnClickTitle = async (e) => {
    // console.log(e.target.attributes[1].value)
    // console.log(e.target.innerText)
    const title = e.target.innerText
    const pageId = e.target.attributes[1].value
    const getContent = await axios(`https://localhost:3002/content/${title}?id=${pageId}`)
    getContentPostId(getContent.data.postId)
    getContentTitle(getContent.data.title)
    getContentBody(getContent.data.content)
    getContentCategory(getContent.data.category)
    getContentNumOfViews(getContent.data.numOfViews)
    getContentCreatedAt(getContent.data.createdAt)
    getContentUserName(getContent.data.userName)
    getContentComment(getContent.data.commentData)
    history.push(`/content/${title}?id=${pageId}`)
  }

  // ! 카테고리에 맞는 게시판 데이터 가져오기
  useEffect(async () => {
    nowCategory(category)
    const getBoardData = await axios(`https://localhost:3002/board/${category}?page=${query}`)
    getBoardPostedData([getBoardData.data])
    const testBoard = [getBoardData.data]
    setNumOfPages(getBoardData.data.numOfPages)
    const getPostedList = testBoard[0].data.map((posted) => (        
            <div key={posted.num}>
                <div className="board_posted_template">
                <div className="board_posted_template_num">{posted.num}</div>
                <div className="board_posted_template_title" onClick={handleOnClickTitle} value={posted.id}>{posted.title}</div>
                <div className="board_posted_template_createdAt">{(posted.createdAt? ((posted.createdAt).split('T')[0]):(null))}</div>
                <div className="board_posted_template_writer">{posted.writer}</div>
                <div className="board_posted_template_number_of_views">{posted.numOfViews}</div>
                </div>
            </div>    
        ))
        setPostedList(getPostedList)

  },[category,query])   

    return boardData && postedList?(<div>
        <BoardSidebar />
        <div className="free_board_container">
          <div className="free_board_posted">
            <div className="free_board_posted_num">번호</div>
            <div className="free_board_posted_title">제목</div>
            <div className="free_board_posted_createdAt">작성일</div>
            <div className="free_board_posted_writer">작성자</div>
            <div className="free_board_posted_number_of_views">조회수</div> 
              <div>{postedList}</div>
            </div>
            <div className="board_posted_page_nums">
                <div className="board_posted_page_prev_five" onClick={handleFirstClick}>&#60;&#60;</div>
                <div className="board_posted_page_prev_one" onClick={handlePrevPageClick}>&#60;</div>          
                <div className="board_posted_page_num_1" onClick={handleSpecificPageClick}>{pageNum[0]}</div>
                <div className="board_posted_page_num_2" onClick={handleSpecificPageClick}>{pageNum[1]}</div>
                <div className="board_posted_page_num_3" onClick={handleSpecificPageClick}>{pageNum[2]}</div>
                <div className="board_posted_page_num_4" onClick={handleSpecificPageClick}>{pageNum[3]}</div>
                <div className="board_posted_page_num_5" onClick={handleSpecificPageClick}>{pageNum[4]}</div>
                <div className="board_posted_page_next_one" onClick={handleNextPageClick}>&#62;</div>
                <div className="board_posted_page_next_five" onClick={handleLastPageClick}>&#62;&#62;</div>
            </div>
                <Link to="/write">
                <div className="board_post_btn">등록</div>
                </Link>
        </div>
      </div>):(<div>loading...</div>)
       
    
};

export default withRouter(FreeBulletinBoard);