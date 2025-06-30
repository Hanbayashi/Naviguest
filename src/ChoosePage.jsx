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
import Genre2bImage from './assets/genre2-2.png';
import Genre2cImage from './assets/genre2-3.png';
import Genre2dImage from './assets/genre2-4.png';

import Genre3Image from './assets/genre3.png';
import Genre3aImage from './assets/genre3-1.png';
import Genre3bImage from './assets/genre3-2.png';
import Genre3cImage from './assets/genre3-3.png';

import Genre4Image from './assets/genre4.png';
import Genre4aImage from './assets/genre4-1.png';
import Genre4bImage from './assets/genre4-2.png';
import Genre4cImage from './assets/genre4-3.png';
import Genre4dImage from './assets/genre4-4.png';

const ChoosePage = () => {
  // スクロール先の参照を定義
  const genre1aRef = useRef(null);
  const genre2aRef = useRef(null);
  const genre3aRef = useRef(null);
  const genre4aRef = useRef(null);

  // スクロール処理
  const handleScrollToGenre1a = () => {
    genre1aRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleScrollToGenre2a = () => {
    genre2aRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleScrollToGenre3a = () => {
    genre3aRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleScrollToGenre4a = () => {
    genre4aRef.current?.scrollIntoView({ behavior: 'smooth' });
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
      <p style={{ padding: '2rem', fontSize: '20px' }}>ジャンルを選択してください（文章は要件等）。</p>

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

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <img
          src={Genre3Image}
          alt="ジャンル3"
          style={{ width: '300px', height: 'auto', maxWidth: '100%', cursor: 'pointer' }}
          onClick={handleScrollToGenre3a}
        />
      </div>

      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <img
          src={Genre4Image}
          alt="ジャンル4"
          style={{ width: '300px', height: 'auto', maxWidth: '100%', cursor: 'pointer' }}
          onClick={handleScrollToGenre4a} // ここでスクロール処理を実行
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
        <Link to="/map"> 
          <img
            src={Genre1bImage}
            alt="ジャンル1-2"
            style={{
              width: '300px',
              height: 'auto',
              maxWidth: '100%',
              scrollMarginTop: '100px',
              cursor: 'pointer', 
            }}
          />
        </Link>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Link to="/map"> 
          <img
            src={Genre1cImage}
            alt="ジャンル1-3"
            style={{
              width: '300px',
              height: 'auto',
              maxWidth: '100%',
              scrollMarginTop: '100px',
              cursor: 'pointer', 
            }}
          />
        </Link>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Link to="/map"> 
          <img
            src={Genre1dImage}
            alt="ジャンル1-4"
            style={{
              width: '300px',
              height: 'auto',
              maxWidth: '100%',
              scrollMarginTop: '100px',
              cursor: 'pointer', 
            }}
          />
        </Link>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Link to="/map"> 
          <img
            src={Genre1eImage}
            alt="ジャンル1-5"
            style={{
              width: '300px',
              height: 'auto',
              maxWidth: '100%',
              scrollMarginTop: '100px',
              cursor: 'pointer', 
            }}
          />
        </Link>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Link to="/map"> 
          <img
            src={Genre1fImage}
            alt="ジャンル1-6"
            style={{
              width: '300px',
              height: 'auto',
              maxWidth: '100%',
              scrollMarginTop: '100px',
              cursor: 'pointer', 
            }}
          />
        </Link>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Link to="/map"> 
          <img
            src={Genre1gImage}
            alt="ジャンル1-7"
            style={{
              width: '300px',
              height: 'auto',
              maxWidth: '100%',
              scrollMarginTop: '100px',
              cursor: 'pointer', 
            }}
          />
        </Link>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Link to="/map"> 
          <img
            src={Genre1hImage}
            alt="ジャンル1-8"
            style={{
              width: '300px',
              height: 'auto',
              maxWidth: '100%',
              scrollMarginTop: '100px',
              cursor: 'pointer', 
            }}
          />
        </Link>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <Link to="/map"> 
          <img
            src={Genre1iImage}
            alt="ジャンル1-9"
            style={{
              width: '300px',
              height: 'auto',
              maxWidth: '100%',
              scrollMarginTop: '100px',
              cursor: 'pointer', 
            }}
          />
        </Link>
      </div>

      {/*ジャンル2*/}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <img
          ref={genre2aRef}
          src={Genre2aImage}
          alt="ジャンル2-1"
          style={{
            width: '300px',
            height: 'auto',
            maxWidth: '100%',
            scrollMarginTop: '100px', 
          }}
        />
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <img
          src={Genre2bImage}
          alt="ジャンル2-2"
          style={{
            width: '300px',
            height: 'auto',
            maxWidth: '100%',
            scrollMarginTop: '100px', 
          }}
        />
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <img
          src={Genre2cImage}
          alt="ジャンル2-3"
          style={{
            width: '300px',
            height: 'auto',
            maxWidth: '100%',
            scrollMarginTop: '100px', 
          }}
        />
      </div>

      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <img
          src={Genre2dImage}
          alt="ジャンル2-4"
          style={{
            width: '300px',
            height: 'auto',
            maxWidth: '100%',
            scrollMarginTop: '100px', 
          }}
        />
      </div>

      {/*ジャンル3*/}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Link to="/map"> 
          <img
            ref={genre3aRef} // スクロール対象としてのref
            src={Genre3aImage}
            alt="ジャンル3-1"
            style={{
              width: '300px',
              height: 'auto',
              maxWidth: '100%',
              scrollMarginTop: '100px',
              cursor: 'pointer', 
            }}
          />
        </Link>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Link to="/map"> 
          <img
            src={Genre3bImage}
            alt="ジャンル3-2"
            style={{
              width: '300px',
              height: 'auto',
              maxWidth: '100%',
              scrollMarginTop: '100px',
              cursor: 'pointer', 
            }}
          />
        </Link>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Link to="/map"> 
          <img
            src={Genre3cImage}
            alt="ジャンル3-3"
            style={{
              width: '300px',
              height: 'auto',
              maxWidth: '100%',
              scrollMarginTop: '100px',
              cursor: 'pointer', 
            }}
          />
        </Link>
      </div>

      {/*ジャンル4*/}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <img
          ref={genre4aRef}
          src={Genre4aImage}
          alt="ジャンル4-1"
          style={{
            width: '300px',
            height: 'auto',
            maxWidth: '100%',
            scrollMarginTop: '100px', 
          }}
        />
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Link to="/map"> 
          <img
            src={Genre4bImage}
            alt="ジャンル4-2"
            style={{
              width: '300px',
              height: 'auto',
              maxWidth: '100%',
              scrollMarginTop: '100px',
              cursor: 'pointer', 
            }}
          />
        </Link>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Link to="/map"> 
          <img
            src={Genre4cImage}
            alt="ジャンル4-3"
            style={{
              width: '300px',
              height: 'auto',
              maxWidth: '100%',
              scrollMarginTop: '100px',
              cursor: 'pointer', 
            }}
          />
        </Link>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Link to="/map"> 
          <img
            src={Genre4dImage}
            alt="ジャンル4-4"
            style={{
              width: '300px',
              height: 'auto',
              maxWidth: '100%',
              scrollMarginTop: '100px',
              cursor: 'pointer', 
            }}
          />
        </Link>
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
