import React, { useState } from 'react';
import copy from 'copy-to-clipboard';
import { ChevronDown, ChevronUp, Copy } from 'lucide-react';

const AccountItem = ({ title, accounts }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCopy = (accountNumber) => {
    copy(accountNumber);
    alert('계좌번호가 복사되었습니다.');
  };

  return (
    <div style={{ marginBottom: '10px', border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', textAlign: 'left' }}>
      {/* 아코디언 헤더 */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '15px', background: '#f9f9f9', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer'
        }}
      >
        <span style={{ fontWeight: '600' }}>{title}</span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </div>

      {/* 아코디언 내용 (여러 계좌 대응) */}
      {isOpen && (
        <div style={{ padding: '5px 15px', background: '#fff', fontSize: '0.9rem' }}>
          {accounts.map((item, index) => (
            <div key={index} style={{ 
              padding: '15px 0', 
              borderBottom: index !== accounts.length - 1 ? '1px solid #f0f0f0' : 'none' 
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                <span style={{ fontWeight: '500' }}>{item.name}</span>
                <button
                  onClick={() => handleCopy(item.account)}
                  style={{
                    border: 'none', background: '#f0f0f0', padding: '5px 10px',
                    borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem'
                  }}
                >
                  <Copy size={12} /> 복사
                </button>
              </div>
              <div style={{ color: '#666' }}>{item.account}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Account = () => {
  // 데이터 관리
  const groomAccounts = [
    { name: "혼주 황대호 (부)", account: "하나은행 278-911028-90807" },
    { name: "혼주 이해숙 (모)", account: "국민은행 701-24-0302937" },
    { name: "신랑 황순태", account: "신한은행 110-438-160871" },
  ];

  const brideAccounts = [
    { name: "혼주 하국현 (부)", account: "농협은행 352-0151-6351-13" },
    { name: "혼주 박연희 (모)", account: "신한은행 110-011-845003" },
    { name: "신부 하나", account: "국민은행 578601-01-321626" },
  ];

  return (
    <section style={{ padding: '20px 20px', backgroundColor: '#fff', textAlign: 'center' }}>
      <h2 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>마음 전하실 곳</h2>
      <p style={{ fontSize: '0.9rem', marginBottom: '30px', color: '#888', lineHeight: '1.6' }}>
        멀리서도 축하의 마음을 전하고 싶으신 분들을 위해<br/>
        계좌번호를 안내드립니다.
      </p>

      <AccountItem title="신랑측 계좌번호" accounts={groomAccounts} />
      <AccountItem title="신부측 계좌번호" accounts={brideAccounts} />
    </section>
  );
};

export default Account;