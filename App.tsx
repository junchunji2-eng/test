
import React, { useState, useCallback } from 'react';
import { Button } from './components/Button.tsx';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('버튼을 눌러주세요.');

  const handleButtonClick = useCallback(() => {
    setMessage('버튼이 눌렸습니다!');
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md text-center">
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            버튼 클릭 알리미
          </h1>
          <p className="text-gray-400 mt-2">간단한 버튼 클릭 상호작용</p>
        </header>
        
        <main className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-700">
          <div 
            className="w-full h-24 mb-8 bg-gray-900/70 rounded-lg flex items-center justify-center transition-all duration-300 border border-gray-600"
          >
            <p className="text-xl font-medium text-gray-300">{message}</p>
          </div>
          
          <Button onClick={handleButtonClick}>
            여기를 클릭하세요
          </Button>
        </main>

        <footer className="mt-10 text-gray-500 text-sm">
          <p>React & Tailwind CSS로 제작되었습니다.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;