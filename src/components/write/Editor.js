import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import './Editor.css';

const Editor = ({ getNowCategory, nowCategory, history }) => {
  // console.log("🚀 ~ file: Editor.js ~ line 7 ~ Editor ~ nowCategory", nowCategory)

  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [selectDefalutValue, setSelectDefaultValue] = useState(null);

  const handleGoBack = () => {
    history.goBack();
  };

  const handleOnChangeTitle = (e) => {
    // console.log('e',e.target.value)
    setTitle(e.target.value);
  };

  const handleOnChangeContent = (e) => {
    console.log('e', e.target.value);
    setContent(e.target.value);
  };

  const handlePost = async () => {
    // console.log('title', title)
    // console.log('content', content)
    // console.log('nowCategory',nowCategory)
    const postBoard = await axios.post(
      'https://localhost:3002/board',
      {
        title,
        content,
        category: nowCategory,
      },
      {
        withCredentials: true,
      }
    );
    console.log(
      '🚀 ~ file: Editor.js ~ line 42 ~ handlePost ~ postBoard',
      postBoard
    );
    history.goBack();
  };

  const handleoOnChangeSelectBox = (e) => {
    console.log(
      '🚀 ~ file: Editor.js ~ line 36 ~ handleoOnChangeSelectBox ~ e',
      e.target.value
    );
    if (e.target.value === '자유게시판') {
      getNowCategory('free');
    } else if (e.target.value === '소형견') {
      getNowCategory('small');
    } else if (e.target.value === '중형견') {
      getNowCategory('medium');
    } else {
      getNowCategory('large');
    }
  };

  useEffect(() => {
    if (nowCategory === 'free') {
      setSelectDefaultValue(['자유게시판', '소형견', '중형견', '대형견']);
    } else if (nowCategory === 'small') {
      setSelectDefaultValue(['소형견', '중형견', '대형견', '자유게시판']);
    } else if (nowCategory === 'medium') {
      setSelectDefaultValue(['중형견', '소형견', '대형견', '자유게시판']);
    } else if (nowCategory === 'large') {
      setSelectDefaultValue(['대형견', '소형견', '대형견', '자유게시판']);
    } else {
      setSelectDefaultValue([
        '게시판을 선택하세요',
        '자유게시판',
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
      {/* <hr className="editor_hr"></hr> */}
      <div className="editor_content">
        <textarea
          className="editor_content_textarea"
          placeholder="내용을 작성하세요..."
          onChange={handleOnChangeContent}
        ></textarea>
      </div>
      <div className="write_action_btn_container">
        <button className="post_btn" onClick={handlePost}>
          포스트 등록
        </button>
        <button className="cancle_btn" onClick={handleGoBack}>
          취소
        </button>
      </div>
    </div>
  );
};

export default withRouter(Editor);
