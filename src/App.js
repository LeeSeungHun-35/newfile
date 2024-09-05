import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './page/Body';
import Header from './page/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header /> {/* Header를 Routes 밖에 위치시킵니다 */}

        <Routes>
          <Route path="/" element={<Body />} /> {/* Body를 Route로 래핑합니다 */}
          {/* 다른 Route 컴포넌트들도 여기에 추가할 수 있습니다 */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
