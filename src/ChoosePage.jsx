import React from 'react';
import { Link } from 'react-router-dom'; // 戻るボタンのナビゲーション用にLinkをインポート

// グローバルなCSSファイル（例: src/index.css）に共通スタイルがある場合は、ここには記述不要です。
// もしChoosePage専用のCSSがある場合は、 import './ChoosePage.css'; のようにインポートします。

const ChoosePage = () => {
  return (
    <>
      {/* 元のHTMLのheaderの内容をJSXで再現 */}
      <header style={{ backgroundColor: '#0066cc', color: 'white', padding: '1rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px' }}>ナビゲスト</h1>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>リンク1</a></li>
            <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>リンク2</a></li>
            <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>リンク3</a></li>
          </ul>
        </nav>
      </header>

      {/* 元のHTMLのpタグの内容をJSXで再現 */}
      <p style={{ padding: '2rem' }}>ここが行先指定です。</p>

      {/* 元のHTMLの戻るボタン（画像）をJSXで再現し、Linkコンポーネントでルーティング */}
      <div style={{ textAlign: 'center' }}>
        {/*
          Linkコンポーネントを使って/ (HomePage) へ戻るように設定します。
          画像はpublicフォルダに置くことで、Reactがビルドしてもパスが通るようにします。
          例: public/BackButton.png
        */}
        <Link to="/">
          <img src="/BackButton.png" alt="戻る" style={{ width: '200px', height: 'auto' }} />
        </Link>
      </div>

      {/* 元のHTMLのfooterの内容をJSXで再現 */}
      <footer style={{ backgroundColor: '#ddd', textAlign: 'center', padding: '1rem' }}>
        <p>&copy; 2025 ナビゲスト</p>
      </footer>
    </>
  );
};

export default ChoosePage;