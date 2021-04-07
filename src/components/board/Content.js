import React, { useEffect, useState } from 'react';
import axios from '../../../node_modules/axios/index';
import './Content.css'

const Content = ({
            postId,
            contentTitle,
            contentBody,
            contentCategory,
            contentNumOfViews,
            contentCreatedAt,
            contentUserName,
            contentComment,
            getContentComment
        }) => {    
            console.log("🚀 ~ file: Content.js ~ line 16 ~ contentComment", contentComment)
    // ! 댓글 동적 셋팅하는 용도            
    const [commentTag, setCommentTag] = useState(null);
    const [isCommentUpdated, setIsCommentUpdated] = useState(false);
    
    useEffect(() => {
        // ! 댓글 작성자 + 내용 합치기
        const commentWriter = contentComment.writer // ['test1','test2','test1']
        const commentBody = contentComment.content  // ['111','222','333']
        const commentCreatedAt = contentComment.createdAt // 2021-04-07T10:40:48.000Z
                
        const combineWriterBody = (writer, body, createdAt) => {
            let result = [];
            for (let i = 0; i < writer.length; i++) { 
                const date = createdAt[i].split('T')[0];
                const time = createdAt[i].split('T')[1].slice(0,8);
                const dateTime = date + ' ' + time
                result.push(i + 'forSplit' +  writer[i] + 'forSplit' + body[i] + 'forSplit' + dateTime)
            }
            return result
        }
        
        const commentArr = combineWriterBody(commentWriter, commentBody, commentCreatedAt)
        // console.log("🚀 ~ file: Content.js ~ line 25 ~ commentArr", commentArr) // ["test1 111 0", "test2 222 1", "test1 3333 2"]

        const getCommentTag = commentArr.map(el => (
            <div key={el.split('forSplit')[0]}>
                <div className="content_comments_user_name">
                    {el.split('forSplit')[1]}
                </div>
                <div className="content_comments_body">
                    {el.split('forSplit')[2]}
                </div>     
                <div className="content_comments_created_At">
                    {el.split('forSplit')[3]}
                </div>    
            </div>
        ))
        setCommentTag(getCommentTag);
        // setIsCommentUpdated(false)
    },[contentComment, isCommentUpdated])

    //! 로그인 유저가 작성한 댓글 등록용
    const [comment, setComment] = useState(null)
    
    //! 댓글 감지        
    const handleChangeComment = (e) => {
        console.log('e.target.value', e.target.value)
        setComment(e.target.value)
        
    }

    //! 댓글 등록 버튼 
    const handleRegisterComment = async () => {
        const postComment = await axios.post('https://localhost:3002/comment',{
            postId,
            writer: contentUserName,
            comment
        },{
            withCredentials: true
        })
        console.log("🚀 ~ file: Content.js ~ line 66 ~ handleRegisterComment ~ postComment", postComment) 
        // postComment.data.commentWriter, commentBody, commentCreatedAt
        // setIsCommentUpdated(true)

        // const newComments = {}
        // contentComment.writer.push(postComment.data.commentWriter)
        // contentComment.content.push(postComment.data.commentBody)
        // contentComment.createdAt.push(postComment.data.commentCreatedAt)
        // getContentComment()

        const getContent = await axios(`https://localhost:3002/content/${contentTitle}?id=${postId}`)
        getContentComment(getContent.data.commentData)
        
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