import React from 'react';
import identity1 from '../assets/identity1.png';
import identity2 from '../assets/identity2.png';
import identity3 from '../assets/identity3.png';
import change1 from '../assets/change1.png';
import change2 from '../assets/change2.png';
import change3 from '../assets/change3.png';
import present1 from '../assets/present1.png';
import present2 from '../assets/present2.png';
import Img1 from '../assets/1.png';
import Img2 from '../assets/2.png';
import Img3 from '../assets/3.png';
import Img4 from '../assets/4.png';
import Img5 from '../assets/5.png';
import Img6 from '../assets/6.png';

const ContentPage = ({ title, type, onBack, onNavigate }) => {
  const contentMap = {
    identity1: {
      image: identity1,
      subtitle: 'Who am I? - 1',
      
      nextPage: 'identity2',
      prevPage: null
    },
    identity2: {
      image: identity2,
      subtitle: 'Who am I? - 2',
      
      nextPage: 'identity3',
      prevPage: 'identity1'
    },
    identity3: {
      image: identity3,
      subtitle: 'Who am I? - 3',
      
      nextPage: null,
      prevPage: 'identity2'
    },
    change1: {
      image: change1,
      subtitle: 'Growth and Transformation - 1',
      
      nextPage: 'change2',
      prevPage: null
    },
    change2: {
      image: change2,
      subtitle: 'Growth and Transformation - 2',
      
      nextPage: 'change3',
      prevPage: 'change1'
    },
    change3: {
      image: change3,
      subtitle: 'Growth and Transformation - 3',
      
      nextPage: null,
      prevPage: 'change2'
    },
    present1: {
      image: present1,
      subtitle: 'The Present and Future - 1',
      
      nextPage: 'present2',
      prevPage: null
    },
    present2: {
      image: present2,
      subtitle: 'The Present and Future - 2',
      
      nextPage: null,
      prevPage: 'present1'
    },
    ending1: {
      images: [Img1, Img2, Img3, Img5, Img6],
      subtitle: '마치며',
      nextPage: 'ending2',
      prevPage: null
    },
    ending2: {
      image: Img4,
      subtitle: '마치며',
      text: [
        '작품 데미안에서는 싱클레어가 행복한 부모님의 그늘 아래에서 지내다가 크로머와 엮이며 어두운 세계에 들어가게 되지만, 데미안을 만나고 도움을 받아 어둠에서 벗어나게 됩니다. 저도 동기 형을 만나며 알을 깨고 나올 수 있게 되었기 때문에 이 부분에서 저의 서사가 주인공 싱클레어와 매우 유사하다고 생각했습니다.',
        '지금와서 생각해보면 수동적인 삶을 살아왔던 지난 제 모든 삶을 후회하지는 않습니다. 앞서 말했 듯이 부모님 말씀에 따라 준비했던 특목고 입시 경험을 통해 동국대학교에 진학할 수 있었고, 부트캠프를 수강할 때에도 어린 시절 매일 12시간씩 학원을 다녔던 경험을 통해 강행군을 견뎌낼 수 있었습니다.'
      ],
      nextPage: null,
      prevPage: 'ending1'
    }
  };

  const data = contentMap[type] || contentMap['identity1'];
  const isEndingPage = type.startsWith('ending');

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

        {!isEndingPage ? (
          /* Cartoon Comic Pages Layout: Single Column, Large Image, Buttons Below */
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: '2.5rem',
            width: '100%',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {data.image && (
              <div 
                className="glass" 
                style={{ 
                  width: '100%', 
                  height: '60vh', 
                  maxHeight: '650px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden', 
                  borderRadius: '24px',
                  padding: '1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)'
                }}
              >
                <img 
                  src={data.image} 
                  alt={title} 
                  style={{ 
                    maxWidth: '100%', 
                    maxHeight: '100%', 
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain', 
                    display: 'block',
                    borderRadius: '16px'
                  }}
                />
              </div>
            )}

            {data.text && data.text.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
                {data.text.map((paragraph, index) => (
                  <p key={index} style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {/* Pagination Buttons for Cartoon Pages */}
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '1rem' }}>
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
        ) : (
          /* Ending Pages (ending1, ending2) Layout: Grid / Side-by-side */
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: (data.image || data.images) ? (data.images ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))') : '1fr', 
            gap: '4rem',
            alignItems: 'start',
            maxWidth: (!data.image && !data.images) ? '800px' : '100%',
            margin: (!data.image && !data.images) ? '0 auto' : '0'
          }}>
            {data.images ? (
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                gap: '2rem'
              }}>
                {data.images.map((img, idx) => (
                  <div 
                    key={idx} 
                    className="glass card" 
                    style={{ 
                      overflow: 'hidden', 
                      borderRadius: '16px',
                      transition: 'var(--transition)',
                      aspectRatio: '4 / 3'
                    }}
                  >
                    <img 
                      src={img} 
                      alt={`ending-img-${idx + 1}`} 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover', 
                        display: 'block',
                        transition: 'transform 0.4s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.08)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                  </div>
                ))}
              </div>
            ) : data.image ? (
              <div className="glass" style={{ overflow: 'hidden', borderRadius: '24px' }}>
                <img 
                  src={data.image} 
                  alt={title} 
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            ) : null}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
              {data.text && data.text.map((paragraph, index) => (
                <p key={index} style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  {paragraph}
                </p>
              ))}
              {data.text && (
                <div style={{ marginTop: '2rem', padding: '2rem', borderLeft: '2px solid var(--accent-gold)', fontStyle: 'italic' }}>
                  "청년의 언어, 자기서사의 테크네"
                </div>
              )}

              {/* Pagination Buttons for Ending Pages */}
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
        )}
      </div>
    </div>
  );
};

export default ContentPage;
