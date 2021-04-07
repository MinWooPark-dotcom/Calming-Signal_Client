import React, { useEffect, useState } from 'react';
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
    // ! 댓글 동적 셋팅하는 용도            
    const [commentTag, setCommentTag] = useState(null)
    console.log("🚀 ~ file: Content.js ~ line 16 ~ commentTag", commentTag)
    
    useEffect(() => {
        // ! 댓글 작성자 + 내용 합치기
        const commentWriter = contentComment.writer // ['test1','test2','test1']
        const commentBody = contentComment.content  // ['111','222','333']
                
        const combineWriterBody = (writer, body) => {
            let result = [];
            for (let i = 0; i < writer.length; i++) { 
                result.push(writer[i] + ' ' + body[i] + ' ' + i)
            }
            return result
        }
        
        const commentArr = combineWriterBody(commentWriter, commentBody)
        // console.log("🚀 ~ file: Content.js ~ line 25 ~ commentArr", commentArr) // ["test1 111", "test2 222", "test1 3333"]

        const getCommentTag = commentArr.map(el => (
            // <div className="content_comment_box">
            <div key={el.split(' ')[2]}>
                <div className="content_comments_user_name">
                    {el.split(' ')[0]}
                </div>
                <div className="content_comments_body">
                    {el.split(' ')[1]}
                </div>         
            </div>
        ))
    setCommentTag(getCommentTag);
    },[contentComment])

    //! 로그인 유저가 작성한 댓글 등록용
    const [comment, setComment] = useState(null)
    
    //! 댓글 감지        
    const handleChangeComment = (e) => {
        console.log(e.target.value)
        setComment(e.target.value)
    }

    //! 댓글 등록 버튼 
    const handleRegisterComment = async () => {
        const postComment = await axios.post('https://localhost:3002/comment',{
            writer: contentUserName,
            comment
        },{
            withCredential: true
        })
    }

    return commentTag?(
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
              {commentTag}      
            </div>
        </div>
    ):(<div>loading...</div>)

};

export default Content;