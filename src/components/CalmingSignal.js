import React from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "./CalmingSignal.css";
import landing_top from "../img/landing_top.jpeg";

const CalmingSignal = () => {
  return (
    <div className="calming_signal_container">
      <Nav />
      <Sidebar />
      <div className="calming_signal_content">
        <div className="calming_signal_left">
          <div>
            Word·Idiom<p></p>
            calming Signal <p></p>
            Noun 카밍 시그널((소리 없이 신체 반응을 통해 보내는 개의 의사 소통
            신호))
          </div>

          <div>
            첫 째, 보호자와 반려견의 관계 형성은 타인에게서 비롯될 수 없습니다.
            전문가의 도움으로 반려견의 행동을 교정할 수 있습니다. 하지만 행동
            교정이 끝난 이후가 진짜 문제입니다. 기본적인 반려견의 카밍 시그널을
            알지 못한다면 교정된 상태를 지속할 수 없고 근본적인 문제를 해결할 수
            없습니다. 반려견을 이해하는 첫 걸음은 카밍 시그널을 이해하는
            것입니다. <p></p>둘 째, 사람과 마찬가지로 반려견에게도 교육이
            효과적인 시기가 있습니다. 반려견의 문제 행동이 나타났을 때는 이미
            습관화가 진행 되었기때문에 전문가의 행동 교정으로도 쉽게 변화시키지
            못합니다. 이러한 이유로 가족으로 맞이하기 전부터 카밍시그널에 대한
            이해가 필요합니다. 교육을 하기 위해선 반려견과 소통을 할 줄 알아야
            합니다. <p></p>셋 째, 교육기관의 도움을 필요로 하지만 현실적으로
            어려운 경우가 있습니다.
          </div>
        </div>
        <div className="calming_signal_right">
          <div className="calming_signal_right_img_box">
            <img
              className="calming_signal_right_img"
              src={landing_top}
              alt="dog"
            />
          </div>
          <div>
            카밍 시그널(Calming Signals) 세상에서 가장 아름다운 반려견의 몸짓
            언어 - 투리드 루가스 지음
          </div>
          <div>
            “개들도 늑대와 마찬가지로 갈등을 해결하는 사회적 능력을 가지고
            있습니다. 차이라고 한다면 개의 보디랭귀지는 늑대만큼 강하지 않다는
            것뿐입니다. 저는 반려견의 이 보디랭귀지에 ‘카밍 시그널calming
            signal’이라는 이름을 붙였습니다. 늑대가 상대방의 공격적인 행동을
            중단시키기 위해 ‘중단 시그널’을 사용한다면, 반려견의 행동은 예방의
            차원에 가까웠기에 상대방을 진정시킨다는 의미의 ‘카밍calming’이란
            표현을 선택한 것입니다. 반려견은 나쁜 일을 예방하거나, 긴장과 공포를
            불러일으키는 것(무섭게 생긴 사람이나 다른 반려견)들로부터 도망치고
            싶을 때 카밍 시그널을 사용합니다. 또한 스트레스를 받거나 불안을 느낄
            때 자신을 진정시키기 위해서, 자신에게 나쁜 의도가 없다는 것을 다른
            반려견에게 인식시키기 위해서 그리고 다른 반려견이나 사람들과
            친해지기 위해서도 이 시그널을 사용합니다.” p.31-33 <p></p>
            “늑대 부모는 새끼를 완벽한 늑대로 기르고, 강아지 부모는 새끼를
            완벽한 강아지로 성장시킵니다. 그러나 인간이 강아지를 기르면 문제
            덩어리로 성장합니다.” p.246 <p></p>
            “우리의 행동은 반려견에게 위협적일 수도 있고 친근하게 느껴질 수도
            있습니다. 이것은 모두 우리의 선택에 달려 있습니다. 한 가지 꼭
            명심해야 할 것은, 반려견에게 위협을 가하고 공포심을 안겨주어야 할
            이유는 어디에도 없다는 사실입니다. 모든 생명이 그러하듯 반려견 또한
            생존을 지향합니다. 위협을 받으면 당연히 스스로를 지키려고 할 수 밖에
            없습니다. 어떤 반려견은 자신을 보호하기 위해 도망가기도 하고 어떤
            반려견은 위협에 맞서 싸우기도 합니다. 반려견이 어떤 행동을 보이든지
            그 행동의 근본적인 원인은 단 하나, 바로 우리입니다.” p.252
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default CalmingSignal;
