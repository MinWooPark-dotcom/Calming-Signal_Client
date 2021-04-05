import React from 'react';
import './Content.css'

const Content = ({
            contentTitle,
            contentBody,
            contentCategory,
            contentNumOfViews,
            contentCreatedAt,
            contentUserName
        }) => {
            console.log("🚀 ~ file: Content.js ~ line 11 ~ contentUserName", contentUserName)
            console.log("🚀 ~ file: Content.js ~ line 11 ~ contentCreatedAt", contentCreatedAt)
            console.log("🚀 ~ file: Content.js ~ line 11 ~ contentNumOfViews", contentNumOfViews)
            console.log("🚀 ~ file: Content.js ~ line 11 ~ contentCategory", contentCategory)
            console.log("🚀 ~ file: Content.js ~ line 11 ~ contentBody", contentBody)
            console.log("🚀 ~ file: Content.js ~ line 11 ~ contentTitle", contentTitle)
    
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
                    작성자
                </div>
                 <div className="content_header_writer">    
                {contentUserName}
                </div>
                <div className="content_header_category_fix">
                    카테고리
                </div>
                <div className="content_header_category">    
                    {contentCategory}
                </div>
                <div className="content_header_numOfView_fix">
                    조회수 
                </div>
                <div className="content_header_numOfView">    
                    {contentNumOfViews}
                </div>
                <div className="content_header_createdAt_fix">
                    작성일 
                </div>
                <div className="content_header_createdAt">    
                    {contentCreatedAt}
                </div>
            </div>
            <div>    
                {contentBody}
            </div>
            <div>
                댓글
            </div>
            

    
           
        </div>
    );
};

export default Content;