import React from "react";
import { Link, withRouter } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import about_top from "../img/landing_top.jpeg";
import about_middle from "../img/landing_middle.jpeg";
import about_bottom from "../img/landing_bottom.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about_container">
      <Nav />
      {/*//! top */}
      <div className="about_top">
        {/*//! about_top_left */}
        <div className="about_top_left">
          <div className="about_top_left_text_box">
            <div className="about_top_left_title">
              당신의 반려견의 목소리가 들리시나요?
            </div>
            <div className="about_top_left_content1">
              지금 당신의 반려견은 ""이라고 얘기하고 있습니다.
            </div>
            <div className="about_top_left_content2">
              반려견 자주 했던 말이지만, 무슨 뜻인지 이해하지 못한 채 지나치진
              않으셨나요?
            </div>
            <div className="about_top_left_content3">
              저희 [프로젝트 이름]은 당신의 반려견의 목소리를 들을 수 있도록
              도와드립니다.
            </div>
          </div>
        </div>
        {/*//! about_top_right */}
        <div className="about_top_right">
          {/* <img className="about_top_right_img" src={dog_yellow} alt="dog" /> */}
          <img className="about_top_right_img" src={about_top} alt="dog" />
        </div>
      </div>
      {/*//! middle */}
      <div className="about_middle">
        <div className="about_middle_left">
          <img
            className="about_middle_left_img"
            src={about_middle}
            alt="dog"
          />
        </div>
        <div className="about_middle_right">
          <div className="about_middle_text_box">
            <div className="about_middle_text_box_content1">
              Calming signal은 이런 출발점에서 시작했습니다.
            </div>
            <div className="about_middle_text_box_content2">
              “반려견과 소통할 수 있다면 얼마나 좋을까?” 우리는 여자친구,
              남자친구가 외국이이라면 대화하기 위해서 새로운 언어를 배울
              것입니다.
            </div>
            <div className="about_middle_text_box_content3">
              하지만 반려견에게는 반려견의 언어가 아닌, 사람의 언어로만 대화를
              시도합니다. 반려견은 사람의 언어를 못한다는 이유로 소통을 할 수
              없다고 생각하기도 합니다.
            </div>
            <div className="about_middle_text_box_content4">
              사실 그렇지 않습니다. 그들은 꾸준한 신호로 우리에게 말을 걸었을
              것입니다.
            </div>
            <div className="about_middle_text_box_content5">
              반려견이 보내는 신호를 읽고 그들의 마음을 헤아려 함께 행복하게 살
              수 있도록 하는 것이 calming signal의 목표입니다.
            </div>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="about_bottom">
        <div className="about_bottom_left">
          <div className="about_bottom_left_text_box">
            <div className="about_bottom_left_text_box_content1">
              반려견의 목소리를 들을 준비 되셨다면 저를 따라오세요.
            </div>
            <Link
              to="calming-signal"
              className="about_bottom_left_text_box_link"
            >
              <div className="about_bottom_left_text_box_link_text">
                카밍시그널 보러가기
              </div>
            </Link>
          </div>
        </div>
        <div className="about_bottom_right">
          <div>
            <img
              className="about_bottom_right_img"
              src={about_bottom}
              alt="dog"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
