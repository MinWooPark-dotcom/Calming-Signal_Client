import React from 'react';
import './BoardPostedTemplate.css'

const BoardPostedTemplate = () => {
    return (
        <div>
            <div className="board_posted_template">
            <div className="board_posted_template_num">1</div>
            <div className="board_posted_template_title">테스트 제목입니다.</div>
            <div className="board_posted_template_createdAt">2021/04/03</div>
            <div className="board_posted_template_writer">김코딩</div>
            <div className="board_posted_template_number_of_views">123</div>
          </div>
        </div>
    );
};

export default BoardPostedTemplate;