/* eslint react/prop-types: 0 */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BoardPostedTemplate.css'

const BoardPostedTemplate = ({boardData, getBoardPostedData}) => {
    // const [boardData, setBoardData] = useState(null)
    const [postedList, setPostedList] = useState(null)

    // console.log("🚀 ~ file: BoardPostedTemplate.js ~ line 7 ~ BoardPostedTemplate ~ boardData", boardData)

   useEffect(async () => {
      const getBoardData = await axios('http://localhost:3002/board')
    //   console.log("🚀 ~ file: FreeBulletinBoard.js ~ line 12 ~ boardData ~ getBoardData", getBoardData.data)
    //   setBoardData([getBoardData.data])
      getBoardPostedData([getBoardData.data])
    },[])   

    if (boardData) {
        const getPostedList = boardData.map((posted) => (
            <div key={posted.postNum}>
                <div className="board_posted_template">
                <div className="board_posted_template_num">{posted.postNum}</div>
                <div className="board_posted_template_title">{posted.title}</div>
                <div className="board_posted_template_createdAt">{posted.createdAt}</div>
                <div className="board_posted_template_writer">김코딩</div>
                <div className="board_posted_template_number_of_views">{posted.view}</div>
                </div>
            </div>    
        ))
        setPostedList(getPostedList)
    }

    return boardData?(
        // <div>
        //     <div className="board_posted_template">
        //     <div className="board_posted_template_num">1</div>
        //     <div className="board_posted_template_title">테스트 제목입니다.</div>
        //     <div className="board_posted_template_createdAt">2021/04/03</div>
        //     <div className="board_posted_template_writer">김코딩</div>
        //     <div className="board_posted_template_number_of_views">123</div>
        //   </div>
        // </div>
        <>
        {postedList}
        </>
    ):(<div>loading...</div>)
};

export default BoardPostedTemplate;