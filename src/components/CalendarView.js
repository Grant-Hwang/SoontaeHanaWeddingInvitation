import React from 'react';

const CalendarView = () => {
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const dates = [
    '', 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13,
    14, 15, 16, 17, 18, 19, 20, // 20일이 결혼식
    21, 22, 23, 24, 25, 26, 27,
    28, 29, 30
  ];

  const targetDate = new Date('2026-06-20');
  const today = new Date();

  const diffInMs = targetDate - today;

  const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

  return (
    <section style={{ backgroundColor: 'var(--secondary-color)' }}>
      <h2>6월의 어느 멋진 날</h2>
      <div style={{ fontSize: '1.2rem', marginBottom: '20px' }}>2026. 06. 20. 토요일</div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)',
        gap: '10px', maxWidth: '300px', margin: '0 auto'
      }}>
        {days.map(day => (
          <div key={day} style={{ color: '#333', fontWeight: 'bold' }}>{day}</div>
        ))}
        {dates.map((date, idx) => (
<div key={idx} style={{
    // 1. 가로 세로를 동일하게 고정 (모바일에 적당한 크기)
    width: '35px', 
    height: '35px',
    
    // 2. 글자를 수직/수평 중앙에 배치
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
    // 3. 그리드 칸 내에서 가로 중앙 정렬
    margin: '0 auto', 
    
    borderRadius: '50%',
    backgroundColor: date === 20 ? 'var(--primary-color)' : 'transparent',
    color: date === 20 ? 'white' : '#333',
    fontWeight: date === 20 ? 'bold' : 'normal',
    fontSize: '0.9rem', // 모바일에 맞춰 살짝 줄임
    cursor: date ? 'pointer' : 'default'
  }}>
    {date}
  </div>
        ))}
      </div>

      <div style={{ marginTop: '30px', fontSize: '1.1rem' }}>
        예식일까지 <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>{diffInDays}일</span>
      </div>
    </section>
  );
};

export default CalendarView;