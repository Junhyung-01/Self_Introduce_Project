import React from 'react';

const Home = ({ onNavigate }) => {
  const sections = [
    { id: 'identity1', title: '나는 어떤 사람인가?', subtitle: '정체성과 가치관', color: 'var(--accent-gold)' },
    { id: 'change1', title: '변화', subtitle: '성장과 도전의 과정', color: 'var(--accent-blue)' },
    { id: 'present1', title: '현재', subtitle: '지금 내가 꿈꾸는 것', color: '#ff4b2b' },
    { id: 'ending1', title: '마치며', subtitle: '미래를 향한 다짐', color: '#a100ff' },
  ];

  return (
    <div className="container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '4rem 2rem' }}>
      <header className="fade-in" style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', letterSpacing: '-1px' }}>내 삶의 주체가 된다는 것</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          청년의 언어, 자기서사의 테크네 - 2020112128 최준형
        </p>
      </header>

      <div className="grid">
        {sections.map((section, index) => (
          <div 
            key={section.id}
            className="card glass fade-in"
            style={{ 
              padding: '3rem 2rem', 
              cursor: 'pointer',
              animationDelay: `${index * 0.2}s`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              borderTop: `4px solid ${section.color}`
            }}
            onClick={() => onNavigate(section.id)}
          >
            <div style={{ 
              width: '60px', 
              height: '60px', 
              borderRadius: '50%', 
              backgroundColor: section.color,
              marginBottom: '2rem',
              opacity: 0.8,
              boxShadow: `0 0 20px ${section.color}44`
            }}></div>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{section.title}</h2>
            <p style={{ color: 'var(--text-secondary)' }}>{section.subtitle}</p>
            
            <button style={{ 
              marginTop: '2rem', 
              color: section.color, 
              fontWeight: '600',
              fontSize: '0.9rem',
              letterSpacing: '1px'
            }}>
              자세히 보기 →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
