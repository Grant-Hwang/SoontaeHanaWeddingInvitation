import React, { useEffect } from 'react';

const Location = () => {

  useEffect(() => {
    // 네이버 지도가 로드되었는지 확인 후 실행
    const initMap = () => {
      if (window.naver) {
        const mapOptions = {
          center: new window.naver.maps.LatLng(37.510089, 126.923755), // 예: 여의도 좌표
          zoom: 15
        };
        const map = new window.naver.maps.Map('map', mapOptions);

        new window.naver.maps.Marker({
          position: new window.naver.maps.LatLng(37.510089, 126.923755),
          map: map
        });
      }
    };
    initMap();
  }, []);

  return (
    <section>
      <h2>오시는 길</h2>
      <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>서울 영등포구 여의대방로 259 공군호텔</p>
      <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '20px' }}></p>

      {/* 지도 영역 */}
      <div id="map" style={{ width: '100%', height: '300px', borderRadius: '8px', border: '1px solid #ddd' }}></div>

      <div className="grid grid-cols-2 gap-3" style={{margin:'10 auto'}}>
                <br/>
        <a
          href={`https://map.naver.com/v5/search/공군호텔/place/13051290?c=17.05,0,0,0,dh&placePath=/home?bk_query=공군호텔&entry=bmp&from=map&fromPanelNum=2&timestamp=202602131311&locale=ko&svcName=map_pcv5&searchText=공군호텔`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#03C75A] text-white py-3 rounded-lg font-medium shadow-sm hover:opacity-90 transition-opacity"
          style={{
          width: '100%', maxWidth: '70px', padding: '15px',
          borderRadius: '12px', fontSize: '0.7rem', fontWeight: 'bold',
          cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px',
          margin: '0 auto'
        }}
        >
          <img src='https://i.namu.wiki/i/24xAehEydeybS-dYHEBxU6lHfmamFlTUjYthQ0O_BfHYIkBJ3DbzGUd8GXiUeANQq3yL_NorPbqeq2J161VUdqVqxT8s2pmLUq9A8HXaBbHsEThOQZdKaaVlDliRYYsSjhDJovj0oA99vRX_Bfj61Q.webp'width={30}/>
        </a>
        <a
          href={`https://place.map.kakao.com/583164148`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#FEE500] text-[#191919] py-3 rounded-lg font-medium shadow-sm hover:opacity-90 transition-opacity"
          style={{
          width: '100%', maxWidth: '70px', padding: '15px',
          borderRadius: '12px', fontSize: '0.7rem', fontWeight: 'bold',
          cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px',
          margin: '0 auto'

        }}
        >
          <img src='https://developers.kakao.com/tool/resource/static/img/logo/map/kakaomap_basic.png'width={30}/>

        </a>
      </div>
    </section>
  );
};

export default Location;