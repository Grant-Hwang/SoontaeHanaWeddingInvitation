import React from 'react';
import { Share2 } from 'lucide-react';

const Share = () => {
  const handleKakaoShare = () => {
    // 1. window.Kakao가 존재하는지 확인
    if (!window.Kakao) {
      alert('카카오톡 SDK가 아직 로딩되지 않았습니다. 잠시 후 다시 시도해주세요.');
      return;
    }

    // 2. 초기화가 안 되어 있다면 (혹시 모를 상황 대비)
    if (!window.Kakao.isInitialized()) {
      alert('카카오톡 초기화에 실패했습니다. 새로고침 해주세요.');
      return;
    }
    
    if (window.Kakao) {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '순태 & 하나 결혼합니다',
          //imageUrl: mainWeddingImage,
          imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: '청첩장 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    } else {
      alert('카카오톡 SDK가 로드되지 않았습니다.');
    }
  };

  return (
    <section style={{ paddingBottom: '60px' }}>
      <button
        onClick={handleKakaoShare}
        style={{
          width: '100%', maxWidth: '300px', padding: '15px',
          backgroundColor: '#FAE100', color: '#3C1E1E', border: 'none',
          borderRadius: '12px', fontSize: '1rem', fontWeight: 'bold',
          cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px',
          margin: '0 auto'
        }}
      >
        <Share2 size={18} /> 카카오톡으로 공유하기
      </button>
    </section>
  );
};

export default Share;