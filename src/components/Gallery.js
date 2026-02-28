import React, { useState, useEffect } from 'react';
import img1 from '../pictures//1.jpg'
import img2 from '../pictures//2.jpg'
import img3 from '../pictures//3.jpg'
import img4 from '../pictures//4.jpg'
import img5 from '../pictures//5.jpg'
import img6 from '../pictures//6.jpg'
import img7 from '../pictures//7.jpg'
import img8 from '../pictures//8.jpg'
import img9 from '../pictures//9.jpg'
import img10 from '../pictures//10.JPG'
import img11 from '../pictures//11.JPG'
import img12 from '../pictures//12.JPG'
import img13 from '../pictures//13.JPG'
import img14 from '../pictures//14.JPG'
import img15 from '../pictures//15.JPG'
import img16 from '../pictures//16.JPG'
import img17 from '../pictures//17.JPG'
import imgfront from '../pictures//front.jpg'

const Gallery = () => {
  const [selectedIdx, setSelectedIdx] = useState(null); 
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const images = [img1, imgfront, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17];

  useEffect(() => {
    if (selectedIdx !== null) {
      // 모달이 열려있을 때 스크롤 방지
      document.body.style.overflow = 'hidden';
    } else {
      // 모달이 닫히면 스크롤 복원
      document.body.style.overflow = 'auto';
    }

    // 컴포넌트가 언마운트될 때를 대비한 클린업 함수
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedIdx]);

  const minSwipeDistance = 50;

  // 다음 이미지로 이동
  const nextImage = (e) => {
    //e.stopPropagation(); // 배경 클릭 이벤트 전파 방지
    setSelectedIdx((prev) => (prev + 1) % images.length);
  };

  // 이전 이미지로 이동
  const prevImage = (e) => {
    //e.stopPropagation();
    setSelectedIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  // 터치 이벤트 핸들러
  const onTouchStart = (e) => {
    setTouchEnd(null); // 초기화
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  return (
    <section style={{ padding: '20px' }}>


      {/* 1. 기본 그리드 뷰 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Wedding ${idx}`}
            onClick={() => setSelectedIdx(idx)} // 이미지 클릭 시 해당 인덱스 저장
            style={{ width: '100%', height: '150px', objectFit: 'cover', cursor: 'pointer' }}
          />
        ))}
      </div>

      {/* 2. 전체 화면 모달 (슬라이더) */}
      {selectedIdx !== null && (
        <div
          onClick={() => setSelectedIdx(null)} // 배경 클릭 시 닫기
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.9)', display: 'flex', alignItems: 'center',
            justifyContent: 'center', zIndex: 1000,
            touchAction: 'none'
          }}
        >
          {/* 닫기 버튼 */}
          <button
            onClick={() => setSelectedIdx(null)}
            style={{ position: 'absolute', top: '20px', right: '20px', color: 'white', background: 'none', border: 'none', fontSize: '30px', cursor: 'pointer' }}
          >
            ✕
          </button>

          {/* 왼쪽 화살표
          <button onClick={prevImage} style={navButtonStyle}>〈</button> */}

          {/* 현재 이미지 */}
          <img
            src={images[selectedIdx]}
            alt="Current"
            style={{ maxWidth: '90%', maxHeight: '80%', borderRadius: '4px', transition: 'transform 0.3s ease-out', pointerEvents: 'none' }}
          />

          {/* 오른쪽 화살표
          <button onClick={nextImage} style={{ ...navButtonStyle, right: '20px', left: 'auto' }}>〉</button> */}

          {/* 하단 페이지 표시 (선택사항) */}
          <div style={{ position: 'absolute', bottom: '30px', color: 'white' }}>
            {selectedIdx + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
};

// 화살표 버튼 공통 스타일
const navButtonStyle = {
  position: 'absolute', left: '20px', background: 'rgba(255,255,255,0.2)',
  color: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px',
  fontSize: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
};

export default Gallery;