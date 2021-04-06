import React, { useState } from 'react';
import axios from '../../../node_modules/axios/index';
import './Content.css'

const Content = ({
            contentTitle,
            contentBody,
            contentCategory,
            contentNumOfViews,
            contentCreatedAt,
            contentUserName,
            contentComment
        }) => {    
    console.log("🚀 ~ file: Content.js ~ line 14 ~ contentComment", contentComment)

    const [comment, setComment] = useState(null)

    const handleChangeComment = (e) => {
        console.log(e.target.value)
        setComment(e.target.value)
    }

    const handleRegisterComment = async () => {
        const postComment = await axios.post('https://localhost:3002/comment',{
            writer: contentUserName,
            comment
        },{
            withCredential: true
        })
        // console.log("🚀 ~ file: Content.js ~ line 28 ~ handleRegisterComment ~ postComment", postComment)
    }

    return (
        <div className="content_container">
            <div className="content_header">    
                <div className="content_header_title_fix">
                    제목:
                </div>
                <div className="content_header_title">
                    {contentTitle}
                </div>
                <div className="content_header_writer_fix">
                    작성자:
                </div>
                 <div className="content_header_writer">    
                {contentUserName}
                </div>
                <div className="content_header_category_fix">
                    카테고리:
                </div>
                <div className="content_header_category">    
                    {contentCategory}
                </div>
                <div className="content_header_numOfView_fix">
                    조회수: 
                </div>
                <div className="content_header_numOfView">    
                    {contentNumOfViews}
                </div>
                <div className="content_header_createdAt_fix">
                    작성일: 
                </div>
                <div className="content_header_createdAt">    
                    {contentCreatedAt}
                </div>
            </div>
            <div className="content_body">    
                {contentBody}
            </div>
            {/* 유저가 댓글 쓰는 곳 */}
            <div className="content_comment_write_box">
                <div className="content_comment_writer">
                    {contentUserName}
                </div>
                <div className="content_comment_textarea">
                    <textarea className="cotent_textarea" onChange={handleChangeComment} placeholder="댓글을 입력하세요."></textarea>
                </div>
                <div className="content_comment_register_btn">
                    <button className="content_write_btn" onClick={handleRegisterComment}>등록</button>
                </div>
            </div>
            <div className="content_comment_box">
                {/* 댓글창, 댓글은 맵을 통해서 존재하는 만큼 다 쓰기 */}
                <div className="content_comments_user_name">
                    username
                </div>
                <div className="content_comments_body">
                    댓글 내용
                </div>         
            </div>
        </div>
    );
};

export default Content;