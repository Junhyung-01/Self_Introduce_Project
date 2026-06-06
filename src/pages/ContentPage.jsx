import React from 'react';
import identityImg from '../assets/identity.png';
import changeImg from '../assets/change.png';
import presentImg from '../assets/present.png';

const ContentPage = ({ title, type, onBack, onNavigate }) => {
  const contentMap = {
    identity1: {
      image: identityImg,
      subtitle: 'Who am I? - 1',
      text: [
        '어린 시절부터 저는 부모님 혹은 주변 지인들에게 굉장히 의존을 많이 하는 성격이였습니다. 부모님이 시키시는 일만 하고, 주변 지인들이 부탁하는 일만 하면 아무 문제없이 살아올 수 있었고, 되려 이렇게 큰 굴곡없이 무난했던 삶이 저를 수동적인 인간으로 만들었습니다'
      ],
      nextPage: 'identity2',
      prevPage: null
    },
    identity2: {
      image: identityImg,
      subtitle: 'Who am I? - 2',
      text: [
        '물론 처음부터 이런 성격은 아니였습니다. 어린 시절의 저는 친구들과 노는 것을 좋아하고 저 스스로 무언가를 성취하는 것을 좋아했던 때도 있었습니다.',
        '그러나 중학교에 입학하고 특목고에 진학하기 위해 공부를 시작하면서 부모님과의 갈등이 시작되었습니다. 영재고, 과학고 입시를 위해 학기중에는 학교가 끝난 순간부터 밤 10시까지, 그리고 방학중에는 아침 10시부터 밤 10시까지 거의 모든 날을 학원에서 보내게 되었습니다.',
        '물론 처음에는 이렇게 사는게 싫어서 부모님께 투정도 부렸었지만 그럴 수록 부모님과 저 사이의 갈등은 커져만 가게 되었습니다.'
      ],
      nextPage: 'identity3',
      prevPage: 'identity1'
    },
    identity3: {
      image: identityImg,
      subtitle: 'Who am I? - 3',
      text: [
        '진짜 문제는 저렇게 갈등이 심화되어도 결국 부모님의 의견을 따라야 하는 상황이 된다는 것이였습니다. 이런 갈등을 반복하다보니 결국 저는 부모님과 대립하는 것을 포기했고, 감정소모 할 일 없이 부모님이 시키는 대로 사는 것이 편하다는 것을 알게 되었습니다.',
        '결국 저는 수동적인 삶을 살며 학창시절을 보냈고, 아쉽게도 영재고 과학고에 진학하는 것은 실패했지만, 이 때 공부했던 것을 토대로 논술전형 지원에 성공해 동국대학교에 오게 되었습니다.'
      ],
      nextPage: null,
      prevPage: 'identity2'
    },
    change1: {
      image: changeImg,
      subtitle: 'Growth and Transformation - 1',
      text: [
        '동국대학교에 입학한 뒤에도 저는 여전히 "부모님이 시키시는 대로만 하자. 그러면 큰 문제없이 편하게 살 수 있을 것이다." 라는 생각을 갖고있었습니다. 그렇게 2학년 1학기까지 보낸 시점에 저는 입대를 하게됩니다.',
        '군대에서 훈련소 생활을 하고, 자대에 배치받기까지 몸은 힘들었지만 수동적으로 살아왔던 저에게 군대는, 마음만큼은 너무나도 편한 곳이였습니다. 자대에 배치받고 동기들끼리 얘기를 나누던 중 저보다 3살이 많은, 지금의 저를 있게 해준 형을 알게되었습니다.'
      ],
      nextPage: 'change2',
      prevPage: null
    },
    change2: {
      image: changeImg,
      subtitle: 'Growth and Transformation - 2',
      text: [
        '처음에는 그저 밖에서 무슨 일을 하다 왔었는지와 같은 단순한 얘기들만 나눴지만 그렇게 다 같이 1년을 지내다보니 동기들끼리 서로에 대해 많이 알게 되었습니다. 그리고 그 형이 우리나라에서 100명도 채 갖고있지 않은 기술사 자격증을 준비하고 있고, 만약 그 자격증을 취득한다면 해당 분야에서 최연소 기술사 타이틀을 갖게된다는 사실과 추후에 아버지의 사업을 물려받는다는 사실을 알게 되었습니다. 그 형의 상황에 대해 듣고나니 문득 저와 비교를 하게 되었습니다.',
        '"전망이 좋은 분야의 사업을 물려받는다는 상황 속에서 저 형은 왜 저렇게 열심히 살지?", "내가 저 상황이였으면 아무것도 안하고 그냥 사업을 물려받았을텐데" 라는 생각을 했습니다. 어릴 때부터 부모님이 시키는대로만 살고 저 스스로 무언가를 해보려 하지 않았던 저로서는 굉장히 충격적인 이야기였습니다.'
      ],
      nextPage: 'change3',
      prevPage: 'change1'
    },
    change3: {
      image: changeImg,
      subtitle: 'Growth and Transformation - 3',
      text: [
        '그렇게 시간이 지나 그 형은 외출을 쓰고 시험을 보러 갔고, 결국 해당 분야에서 국내 최연소 기술사라는 타이틀을 차지했습니다. 그런 일을 겪고 시간이 지나 전역일이 다가올수록 제 미래에 대해 생각이 깊어져갔고, 그 답을 찾기 위해 저는 지난 제 삶을 돌아보기 시작했습니다. 그리고 저는 그 답이 본인의 삶을 대하는 태도에 있다는 사실을 깨달았습니다.',
        '동기 형과 저의 차이는 본인의 환경에 안주하지 않고 내 스스로가 삶의 주체가 되어 본인의 삶을 만들어나가고자 하는 태도에 있다는 점을 알게 되었습니다. 돌이켜보면 이 깨달음이 제 군복무 시절 중 가장 값진 것 같습니다.'
      ],
      nextPage: null,
      prevPage: 'change2'
    },
    present1: {
      image: presentImg,
      subtitle: 'The Present and Future - 1',
      text: [
        '제대 후 저는 처음으로 타인이 추천하거나 시키는 것이 아닌, 저 스스로의 선택으로 부트캠프를 수강하게 되었습니다. 제 진로에 대한 고민이 깊어지며 무엇을 하며 살아가야 할까 막연하던 즈음, 우연히 눈에 들어온 "클라우드 인프라 부트캠프"에 관심이 생겼고, 고민하다가 신청하게 되었습니다.',
        '제가 무엇을 하며 먹고살지를 결정했다는 안도감보다 제 삶의 분기점이 될 수도 있는 중요한 선택을 저 스스로 했다는 점에서 매우 뿌듯했습니다.'
      ],
      nextPage: 'present2',
      prevPage: null
    },
    present2: {
      image: presentImg,
      subtitle: 'The Present and Future - 2',
      text: [
        '부트캠프는 월화수목금 아침 9사부터 저녁 6시까지 진행되는 강행군이였습니다. 하지만 저 스스로 선택한 것이고, 이보다 더 어릴 때도 하루에 12시간씩 학원에 다녔던 터라 후회는 없었습니다.',
        '이 부트캠프를 수강함으로서 저는 제 졸업프로젝트와 취업 포트폴리오, 그리고 지금 발표자료도 이렇게 제작할 능력을 갖추게 되었습니다.'
      ],
      nextPage: null,
      prevPage: 'present1'
    },
    ending1: {
      image: presentImg,
      subtitle: '마치며',
      text: [
        '작품 데미안에서는 싱클레어가 행복한 부모님의 그늘 아래에서 지내다가 크로머와 엮이며 어두운 세계에 들어가게 되지만, 데미안을 만나고 도움을 받아 어둠에서 벗어나게 됩니다. 저도 동기 형을 만나며 알을 깨고 나올 수 있게 되었기 때문에 이 부분에서 저의 서사가 주인공 싱클레어와 매우 유사하다고 생각했습니다.',
        '지금와서 생각해보면 수동적인 삶을 살아왔던 지난 제 모든 삶을 후회하지는 않습니다. 앞서 말했 듯이 부모님 말씀에 따라 준비했던 특목고 입시 경험을 통해 동국대학교에 진학할 수 있었고, 부트캠프를 수강할 때에도 어린 시절 매일 12시간씩 학원을 다녔던 경험을 통해 강행군을 견뎌낼 수 있었습니다.'
      ],
      nextPage: null,
      prevPage: null
    }
  };

  const data = contentMap[type] || contentMap['identity1'];

  return (
    <div className="container fade-in" style={{ padding: '4rem 2rem', minHeight: '100vh' }}>
      <button 
        onClick={onBack}
        style={{ 
          marginBottom: '3rem', 
          color: 'var(--text-secondary)', 
          display: 'flex', 
          alignItems: 'center',
          fontSize: '1.1rem'
        }}
      >
        ← 돌아가기
      </button>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        <header>
          <p style={{ color: 'var(--accent-gold)', fontWeight: '600', letterSpacing: '2px', marginBottom: '1rem', textTransform: 'uppercase' }}>
            {data.subtitle}
          </p>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>{title}</h1>
        </header>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '4rem',
          alignItems: 'start'
        }}>
          <div className="glass" style={{ overflow: 'hidden', borderRadius: '24px' }}>
            <img 
              src={data.image} 
              alt={title} 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {data.text.map((paragraph, index) => (
              <p key={index} style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                {paragraph}
              </p>
            ))}
            <div style={{ marginTop: '2rem', padding: '2rem', borderLeft: '2px solid var(--accent-gold)', fontStyle: 'italic' }}>
              "청년의 언어, 자기서사의 테크네"
            </div>

            {/* Pagination Buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
              {data.prevPage ? (
                <button 
                  onClick={() => onNavigate && onNavigate(data.prevPage)}
                  style={{ padding: '0.8rem 1.5rem', border: '1px solid var(--accent-gold)', borderRadius: '8px', color: 'var(--accent-gold)', fontSize: '1rem', cursor: 'pointer' }}
                >
                  ← 이전 페이지
                </button>
              ) : <div></div>}
              
              {data.nextPage ? (
                <button 
                  onClick={() => onNavigate && onNavigate(data.nextPage)}
                  style={{ padding: '0.8rem 1.5rem', backgroundColor: 'var(--accent-gold)', color: '#000', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}
                >
                  다음 페이지 →
                </button>
              ) : (
                <button 
                  onClick={onBack}
                  style={{ padding: '0.8rem 1.5rem', backgroundColor: '#fff', color: '#000', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}
                >
                  홈으로 가기
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
