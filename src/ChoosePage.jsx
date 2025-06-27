import React, { useRef } from 'react';
import { Link } from 'react-router-dom'; // 戻るボタン用
import backbutton from './assets/BackButton.png';

import Genre1Image from './assets/genre1.png';
import Genre1aImage from './assets/genre1-1.png';
import Genre1bImage from './assets/genre1-2.png';
import Genre1cImage from './assets/genre1-3.png';
import Genre1dImage from './assets/genre1-4.png';
import Genre1eImage from './assets/genre1-5.png';
import Genre1fImage from './assets/genre1-6.png';
import Genre1gImage from './assets/genre1-7.png';
import Genre1hImage from './assets/genre1-8.png';
import Genre1iImage from './assets/genre1-9.png';

import Genre2Image from './assets/genre2.png';
import Genre2aImage from './assets/genre2-1.png';

import Genre3Image from './assets/genre3.png';

import Genre4Image from './assets/genre4.png';

const ChoosePage = () => {
  // スクロール先の参照を定義
  const genre1aRef = useRef(null);
  const genre2aRef = useRef(null);

  // スクロール処理
  const handleScrollToGenre1a = () => {
    genre1aRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleScrollToGenre2a = () => {
    genre2aRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ヘッダー */}
      <header
        style={{
          backgroundColor: '#0066cc',color: 'white',padding: '1rem 2rem',textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '48px' }}>ナビゲスト</h1>
        <nav>
          <ul
            style={{
              listStyle: 'none',padding: 0,display: 'flex',justifyContent: 'center',gap: '2rem',
            }}
          >
            {/* 必要に応じてナビゲーション項目を追加 */}
          </ul>
        </nav>
      </header>

      {/* 説明テキスト */}
      <p style={{ padding: '2rem', fontSize: '20px' }}>ここが行先指定です。</p>

      {/* ジャンル一覧 */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <img
          src={Genre1Image}
          alt="ジャンル1"
          style={{ width: '300px', height: 'auto', maxWidth: '100%', cursor: 'pointer' }}
          onClick={handleScrollToGenre1a} // ここでスクロール処理を実行
        />
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <img
          src={Genre2Image}
          alt="ジャンル2"
          style={{ width: '300px', height: 'auto', maxWidth: '100%', cursor: 'pointer' }}
          onClick={handleScrollToGenre2a}
        />
      </div>

      {/*部署等*/}

      {/*ジャンル1*/}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Link to="/map"> {/* /map パスへ遷移 */}
          <img
            ref={genre1aRef} // スクロール対象としてのrefは残す
            src={Genre1aImage}
            alt="ジャンル1-1"
            style={{
              width: '300px',
              height: 'auto',
              maxWidth: '100%',
              scrollMarginTop: '100px',
              cursor: 'pointer', // クリック可能であることを示す
            }}
          />
        </Link>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Link to="/map"> {/* /map パスへ遷移 */}
          <img
            src={Genre1bImage}
            alt="ジャンル1-2"
            style={{
              width: '300px',
              height: 'auto',
              maxWidth: '100%',
              scrollMarginTop: '100px',
              cursor: 'pointer', // クリック可能であることを示す
            }}
          />
        </Link>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Link to="/map"> {/* /map パスへ遷移 */}
          <img
            src={Genre1cImage}
            alt="ジャンル1-3"
            style={{
              width: '300px',
              height: 'auto',
              maxWidth: '100%',
              scrollMarginTop: '100px',
              cursor: 'pointer', // クリック可能であることを示す
            }}
          />
        </Link>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Link to="/map"> {/* /map パスへ遷移 */}
          <img
            src={Genre1dImage}
            alt="ジャンル1-4"
            style={{
              width: '300px',
              height: 'auto',
              maxWidth: '100%',
              scrollMarginTop: '100px',
              cursor: 'pointer', // クリック可能であることを示す
            }}
          />
        </Link>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Link to="/map"> {/* /map パスへ遷移 */}
          <img
            src={Genre1eImage}
            alt="ジャンル1-5"
            style={{
              width: '300px',
              height: 'auto',
              maxWidth: '100%',
              scrollMarginTop: '100px',
              cursor: 'pointer', // クリック可能であることを示す
            }}
          />
        </Link>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Link to="/map"> {/* /map パスへ遷移 */}
          <img
            src={Genre1fImage}
            alt="ジャンル1-6"
            style={{
              width: '300px',
              height: 'auto',
              maxWidth: '100%',
              scrollMarginTop: '100px',
              cursor: 'pointer', // クリック可能であることを示す
            }}
          />
        </Link>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Link to="/map"> {/* /map パスへ遷移 */}
          <img
            src={Genre1gImage}
            alt="ジャンル1-7"
            style={{
              width: '300px',
              height: 'auto',
              maxWidth: '100%',
              scrollMarginTop: '100px',
              cursor: 'pointer', // クリック可能であることを示す
            }}
          />
        </Link>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Link to="/map"> {/* /map パスへ遷移 */}
          <img
            src={Genre1hImage}
            alt="ジャンル1-8"
            style={{
              width: '300px',
              height: 'auto',
              maxWidth: '100%',
              scrollMarginTop: '100px',
              cursor: 'pointer', // クリック可能であることを示す
            }}
          />
        </Link>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Link to="/map"> {/* /map パスへ遷移 */}
          <img
            src={Genre1iImage}
            alt="ジャンル1-9"
            style={{
              width: '300px',
              height: 'auto',
              maxWidth: '100%',
              scrollMarginTop: '100px',
              cursor: 'pointer', // クリック可能であることを示す
            }}
          />
        </Link>
      </div>

      {/*ジャンル2*/}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <img
          ref={genre2aRef}
          src={Genre2aImage}
          alt="ジャンル2.1"
          style={{
            width: '300px',
            height: 'auto',
            maxWidth: '100%',
            scrollMarginTop: '100px', // スクロール位置の余白調整（任意）
          }}
        />
      </div>

      <div style={{ textAlign: 'center' }}>

        <Link to="/">
          {/* srcをインポートしたbackbutton変数に変更 */}
          <img src={backbutton} alt="戻る" style={{ width: '200px', height: 'auto' }} />
        </Link>
      </div>

      {/* フッター */}
      <footer style={{ backgroundColor: '#ddd', textAlign: 'center', padding: '1rem' }}>
        <p>&copy; 2025 ナビゲスト</p>
      </footer>
    </>
  );
};

export default ChoosePage;
