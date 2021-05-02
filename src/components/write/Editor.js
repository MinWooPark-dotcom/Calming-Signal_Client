import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import './Editor.css';

const Editor = ({ getNowCategory, nowCategory, history }) => {
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [selectDefalutValue, setSelectDefaultValue] = useState(null);

  const handleGoBack = () => {
    history.goBack();
  };

  const handleOnChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleOnChangeContent = (e) => {
    setContent(e.target.value);
  };

  const handlePost = async () => {
    const postBoard = await axios.post(
      'https://server.calming-signal.ml/board',
      {
        title,
        content,
        category: nowCategory,
      },
      {
        withCredentials: true,
      }
    );
    history.goBack();
  };

  const handleoOnChangeSelectBox = (e) => {
    if (e.target.value === '자유 게시판') {
      getNowCategory('free');
    } else if (e.target.value === '소형견') {
      getNowCategory('small');
    } else if (e.target.value === '중형견') {
      getNowCategory('medium');
    } else if (e.target.value === '대형견') {
      getNowCategory('large');
    } else if (e.target.value === '요청 게시판') {
      getNowCategory('request');
    }
  };

  useEffect(() => {
    if (nowCategory === 'free') {
      setSelectDefaultValue([
        '자유 게시판',
        '요청 게시판',
        '소형견',
        '중형견',
        '대형견',
      ]);
    } else if (nowCategory === 'small') {
      setSelectDefaultValue([
        '소형견',
        '중형견',
        '대형견',
        '자유게시판',
        '요청 게시판',
      ]);
    } else if (nowCategory === 'medium') {
      setSelectDefaultValue([
        '중형견',
        '대형견',
        '자유게시판',
        '요청 게시판',
        '소형견',
      ]);
    } else if (nowCategory === 'large') {
      setSelectDefaultValue([
        '대형견',
        '자유게시판',
        '요청 게시판',
        '소형견',
        '중형견',
      ]);
    } else if (nowCategory === 'request') {
      setSelectDefaultValue([
        '요청게시판',
        '소형견',
        '중형견',
        '대형견',
        '자유 게시판',
      ]);
    } else {
      setSelectDefaultValue([
        '게시판을 선택하세요',
        '자유 게시판',
        '요청 게시판',
        '소형견',
        '중형견',
        '대형견',
      ]);
    }
  }, []);

  return (
    <div className="editor_container">
      {selectDefalutValue ? (
        <div className="editor_select_div">
          <select
            className="editor_select_box"
            name="category"
            onChange={handleoOnChangeSelectBox}
          >
            <option>{selectDefalutValue[0]}</option>
            <option>{selectDefalutValue[1]}</option>
            <option>{selectDefalutValue[2]}</option>
            <option>{selectDefalutValue[3]}</option>
            <option>{selectDefalutValue[4]}</option>
          </select>
        </div>
      ) : null}
      <div className="editor_title">
        <input
          className="editor_title_input"
          placeholder="제목을 입력하세요"
          onChange={handleOnChangeTitle}
        ></input>
      </div>
      <div className="editor_content">
        <textarea
          className="editor_content_textarea"
          placeholder="내용을 작성하세요..."
          onChange={handleOnChangeContent}
        ></textarea>
      </div>
      <div className="editor_btn_container">
        <button className="editor_post_btn" onClick={handlePost}>
          포스트 등록
        </button>
        <button className="editor_cancle_btn" onClick={handleGoBack}>
          취소
        </button>
      </div>
    </div>
  );
};

export default withRouter(Editor);
