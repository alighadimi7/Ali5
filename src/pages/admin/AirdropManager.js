import React from 'react';

const AIRDROPS = [
  { id: 1, title: 'Airdrop-One', status: 'فعال' },
  { id: 2, title: 'CryptoStar', status: 'پایان یافته' },
  { id: 3, title: 'NFT FOMO', status: 'فعال' }
];

const tableStyles = {
  width: '100%',
  borderCollapse: 'collapse',
  fontFamily: 'Vazir, sans-serif',
  minWidth: 320,
};

const thTdBase = {
  padding: '10px 8px',
  textAlign: 'right',
  fontSize: 15,
};

const thStyles = {
  ...thTdBase,
  background: '#e0e7ff',
  fontWeight: 700,
  color: '#1e293b',
};

const tdStyles = {
  ...thTdBase,
  borderBottom: '1px solid #e5e7eb',
  background: '#fff',
};

const actionBtn = {
  border: 0,
  borderRadius: 6,
  padding: '4px 14px',
  fontSize: 14,
  cursor: 'pointer',
  marginLeft: 8,
};

const editBtn = {
  ...actionBtn,
  background: '#dbeafe',
  color: '#2563eb',
};

const deleteBtn = {
  ...actionBtn,
  background: '#fee2e2',
  color: '#dc2626',
};

const responsiveContainer = {
  background: '#f8fafc',
  minHeight: '100vh',
  direction: 'rtl',
  padding: 16,
};

const cardStyles = {
  maxWidth: 800,
  margin: '0 auto',
  background: '#fff',
  borderRadius: 13,
  padding: 18,
  boxShadow: '0 2px 12px #0001',
  overflowX: 'auto',
};

const h1Styles = {
  color: '#2563eb',
  marginBottom: 18,
  fontWeight: 800,
  fontSize: 24,
  textAlign: 'right',
};

const AirdropManager = () => (
  <div style={responsiveContainer}>
    <div style={cardStyles}>
      <h1 style={h1Styles}>مدیریت ایردراپ‌ها</h1>
      <div style={{ width: '100%', overflowX: 'auto' }}>
        <table style={tableStyles}>
          <thead>
            <tr>
              <th style={thStyles}>عنوان</th>
              <th style={thStyles}>وضعیت</th>
              <th style={thStyles}>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {AIRDROPS.map(ad => (
              <tr key={ad.id}>
                <td style={tdStyles}>{ad.title}</td>
                <td style={tdStyles}>{ad.status}</td>
                <td style={tdStyles}>
                  <button style={editBtn}>ویرایش</button>
                  <button style={deleteBtn}>حذف</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <style>
      {`
        @media (max-width: 600px) {
          .airdrop-table th, .airdrop-table td {
            font-size: 13px !important;
            padding: 7px 4px !important;
          }
          .airdrop-card {
            padding: 8px !important;
          }
          .airdrop-title {
            font-size: 18px !important;
          }
        }
      `}
    </style>
  </div>
);

export default AirdropManager;
