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
      <div style={{ fontSize: '1.2rem', marginBottom: '20px' }}>2026. 06. 20</div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)',
        gap: '10px', maxWidth: '300px', margin: '0 auto'
      }}>
        {days.map(day => (
          <div key={day} style={{ color: '#333', fontWeight: 'bold' }}>{day}</div>
        ))}
        {dates.map((date, idx) => (
          <div key={idx} style={{
            padding: '8px',
            borderRadius: '50%',
            backgroundColor: date === 20 ? 'var(--primary-color)' : 'transparent',
            color: date === 20 ? 'white' : '#333',
            fontWeight: date === 20 ? 'bold' : 'normal'
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