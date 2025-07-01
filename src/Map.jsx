// src/Map.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 戻るボタン用にLinkをインポート
import backbutton from './assets/BackButton.png'; // 戻るボタン画像をインポート

const Map = () => {
  const [arrivedNumber, setArrivedNumber] = useState('');

  // 数字以外の入力を防ぎ、2桁に制限するイベントハンドラ
  const handleInputChange = (e) => {
    const value = e.target.value;
    // 正規表現で数字のみを許可し、かつ文字数が2桁以内であることを確認
    if (/^\d*$/.test(value) && value.length <= 2) {
      setArrivedNumber(value);
    }
  };

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

      <p>到着した番号を入力してください。</p>

      {/* 数字のみ入力可能なテキスト入力欄 (2桁制限) */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <input
          type="text"
          pattern="\d{0,2}" // pattern属性を0〜2桁の数字に更新
          inputMode="numeric"
          value={arrivedNumber}
          onChange={handleInputChange}
          placeholder="例: 12"
          maxLength="2" // HTMLのmaxLength属性を追加
          style={{
            padding: '0.8rem',
            fontSize: '1.2rem',
            width: '250px',
            textAlign: 'center',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
      </div>

      {/* 入力された数字の表示エリア */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>
          入力された番号: <span style={{ color: '#0066cc' }}>{arrivedNumber}</span>
        </p>
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