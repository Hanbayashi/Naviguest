// src/Map.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // 戻るボタン用にLinkをインポート
import backbutton from './assets/BackButton.png'; // 戻るボタン画像をインポート

const Map = () => {
  return (
    <>
      {/* ヘッダー (他のページと同じUI) */}
      <header
        style={{
          backgroundColor: '#0066cc',
          color: 'white',
          padding: '1rem 2rem',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '48px' }}>ナビゲスト</h1>
      </header>

      {/* マップコンテンツ */}
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>現在地から目的地までの案内</h2>
        <p>ここにマップの表示や経路案内コンポーネントを配置します。</p>
        <div
          style={{
            width: '80%',
            height: '400px',
            backgroundColor: '#f0f0f0',
            margin: '2rem auto',
            border: '1px solid #ccc',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px',
            color: '#888',
          }}
        >
          マップ表示エリア
        </div>
      </div>

      {/* 戻るボタン (他のページと同じUI) */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        {/* /choose パス (選択画面) に戻るリンク */}
        <Link to="/choose">
          <img src={backbutton} alt="戻る" style={{ width: '200px', height: 'auto' }} />
        </Link>
      </div>

      {/* フッター (他のページと同じUI) */}
      <footer style={{ backgroundColor: '#ddd', textAlign: 'center', padding: '1rem' }}>
        <p>&copy; 2025 ナビゲスト</p>
      </footer>
    </>
  );
};

export default Map;