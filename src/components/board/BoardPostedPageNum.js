import React from 'react';
import { Link, withRouter } from "react-router-dom";
import './BoardPostedPageNum.css'

const BoardPostedPageNum = () => {
    return (
        <div>
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
                <Link to="/write/">
                <div className="board_post_btn">등록</div>
                </Link>
        </div>
    );
};

export default BoardPostedPageNum;