import React, { useState } from 'react'
import Home from './pages/Home'
import ContentPage from './pages/ContentPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    if (currentPage.startsWith('identity')) {
      return <ContentPage 
        title="나는 어떤 사람인가?" 
        type={currentPage} 
        onBack={() => setCurrentPage('home')} 
        onNavigate={setCurrentPage}
      />;
    }
    if (currentPage.startsWith('change')) {
      return <ContentPage 
        title="변화" 
        type={currentPage} 
        onBack={() => setCurrentPage('home')} 
        onNavigate={setCurrentPage}
      />;
    }
    if (currentPage.startsWith('present')) {
      return <ContentPage 
        title="현재" 
        type={currentPage} 
        onBack={() => setCurrentPage('home')} 
        onNavigate={setCurrentPage}
      />;
    }
    if (currentPage.startsWith('ending')) {
      return <ContentPage 
        title="마치며" 
        type={currentPage} 
        onBack={() => setCurrentPage('home')} 
        onNavigate={setCurrentPage}
      />;
    }
    return <Home onNavigate={setCurrentPage} />;
  }

  return (
    <div className="App">
      <div className="bg-gradient">
        <div className="bg-sphere" style={{ top: '10%', left: '10%' }}></div>
        <div className="bg-sphere" style={{ bottom: '10%', right: '10%', background: 'radial-gradient(circle, rgba(0, 210, 255, 0.05) 0%, transparent 70%)' }}></div>
      </div>
      <main>
        {renderPage()}
      </main>
    </div>
  )
}

export default App
