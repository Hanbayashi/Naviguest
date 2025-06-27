import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ChoosePage from './ChoosePage';
import Map from './Map';

function App() {
  return (

    <Router>
      {/* <Routes> でルーティングの定義を開始 */}
      <Routes>
        {/* ルートパス (例: http://localhost:3000/) にアクセスしたら HomePage を表示 */}
        <Route path="/" element={<HomePage />} />

        {/* /choose パス (例: http://localhost:3000/choose) にアクセスしたら ChoosePage を表示 */}
        <Route path="/choose" element={<ChoosePage />} />

        {/* /map パス (例: http://localhost:3000/map) にアクセスしたら Map を表示 */}
        <Route path="/map" element={<Map />} />
      </Routes>
    </Router>
  );
}

export default App;
