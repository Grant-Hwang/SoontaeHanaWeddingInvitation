 import React from 'react';
 import mainWeddingImage from '../pictures/front.jpg'

 const Hero = () => {
   return (
     <section style={{ position: 'relative', padding: 0 }}>
       <div style={{ position: 'relative', width: '100%', height: '500px', overflow: 'hidden' }}>
         <img
           src={mainWeddingImage}
           alt="Main Wedding"
           style={{ width: '100%', height: '100%', objectFit: 'cover' }}
         />
         <div style={{
           position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
           background: 'rgba(0,0,0,0.2)', display: 'flex', flexDirection: 'column',
           justifyContent: 'center', alignItems: 'center', color: 'white'
         }}>
           <p style={{ letterSpacing: '2px', fontSize: '0.8rem', fontFamily: "Nanum Myeongjo", marginBottom: '10px', fontWeight: 100 }}>저희의 결혼식에 초대합니다.</p>
           <h1 style={{ fontFamily: "Nanum Myeongjo", fontSize: '2.5rem', fontWeight: 300, margin: '10px 0' }}>
             황순태 <span style={{ fontSize: '1.5rem' }}>&</span> 하나
           </h1>
           <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
             <p style={ {margin: ' 0 0 0 0', fontSize: '0.8rem'}}>2026년 06월 20일 토요일 오후 3시</p>
           </div>
           <p style={ {margin: 5, fontSize: '0.8rem'}}>공군호텔 3층 그랜드볼룸</p>
         </div>
       </div>
     </section>
   );
 };

 export default Hero;