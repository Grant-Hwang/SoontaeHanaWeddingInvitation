// src/components/Invitation.js
import React from 'react';

const Invitation = () => {
  return (
    <section className="fade-in">
      <h2 style={{ color: 'var(--primary-color)' }}>초대합니다</h2>
      <p style={{ lineHeight: '2', color: '#555' }}>
        싱그러운 여름날,<br />
        저희 두 사람이 사랑의 결실을 맺게 되었습니다.<br />
        <br />
        변치 않는 마음으로<br />
        서로 아끼고 사랑하며 살겠습니다.<br />
        <br />
        귀한 발걸음 하시어<br />
        축복해 주시면 더없는 기쁨이 되겠습니다.
      </p>

      <div style={{ marginTop: '30px', border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
        <p><strong>황대호 · 이해숙</strong> 의 아들 <strong>순태</strong></p>
        <p><strong>하국현 · 박연희</strong> 의 딸 <strong>나</strong></p>
      </div>
    </section>
  );
};

export default Invitation;