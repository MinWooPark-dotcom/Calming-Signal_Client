/* eslint react/prop-types: 0 */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BoardPostedTemplate.css'

const BoardPostedTemplate = ({boardData, getBoardPostedData, match, location}) => {
// console.log("🚀 ~ file: BoardPostedTemplate.js ~ line 8 ~ BoardPostedTemplate ~ location", location)
// console.log("🚀 ~ file: BoardPostedTemplate.js ~ line 8 ~ BoardPostedTemplate ~ match", match)
    const [postedList, setPostedList] = useState(null)

   useEffect(async () => {
      const getBoardData = await axios('https://localhost:3002/board/free?page=1')
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