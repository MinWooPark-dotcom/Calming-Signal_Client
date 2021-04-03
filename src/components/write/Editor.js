import React, { useEffect, useState } from 'react';
import './Editor.css'

const Editor = () => {

  const [selectDefalutValue, setSelectDefaultValue] = useState(null)
  
  useEffect(()=>{
    // const url = window.location.href;
    const url = window.location.pathname 

    console.log('url',url, url === '/write')
    if (url === '/write') {
      setSelectDefaultValue(['자유게시판','소형견','중형견','대형견'])
    }
  },[])

  return (
    <div className="editor_container">
      {selectDefalutValue? (<div className="editor_select_div">
        <select className="editor_select_box" name="category">
            <option>{selectDefalutValue[0]}</option>
            <option>{selectDefalutValue[1]}</option>
            <option>{selectDefalutValue[2]}</option>
            <option>{selectDefalutValue[3]}</option>
        </select>
      </div>
          ):(null)}
           <div className="editor_title">
         <input className="editor_title_input" placeholder="제목을 입력하세요"></input>
       </div>
       <hr className="editor_hr"></hr>
       <div className="editor_content">
         <textarea className="editor_content_textarea" placeholder="내용을 작성하세요..."></textarea>
       </div>
    </div>
  );
};

export default Editor;