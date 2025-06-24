import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ChoosePage from './ChoosePage';

function App() {
  return (
    // 変更点4: <Router> でアプリケーション全体をラップ
    // <div className="App"> ... </div> の代わりに、ルーティングを可能にするために <Router> を使います。
    <Router>
      {/* 変更点5: <Routes> でルーティングの定義を開始 */}
      <Routes>
        {/* 変更点6: "/" パスに HomePage コンポーネントを割り当てる */}
        {/* 以前のAppコンポーネントの内容（ロゴ、Learn Reactリンクなど）はHomePage.jsxに移動済みと想定 */}
        <Route path="/" element={<HomePage />} />

        {/* 変更点7: "/choose" パスに ChoosePage コンポーネントを割り当てる */}
        <Route path="/choose" element={<ChoosePage />} />

        {/* 必要に応じて、ここに他のルートを追加できます */}
      </Routes>
    </Router>
  );
}

export default App;
