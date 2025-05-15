import React from 'react';

const ADS = [
  { id: 1, title: 'بنر صرافی ایرانی', views: 924 },
  { id: 2, title: 'بنر کیف پول', views: 1432 }
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
  background: '#ccfbf1',
  fontWeight: 700,
  color: '#0891b2',
};

const tdStyles = {
  ...thTdBase,
  borderBottom: '1px solid #99f6e4',
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

const manageBtn = {
  ...actionBtn,
  background: '#fef9c3',
  color: '#f59e42',
};

const deleteBtn = {
  ...actionBtn,
  background: '#fee2e2',
  color: '#dc2626',
};

const responsiveContainer = {
  background: '#f0fdfa',
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
  color: '#14b8a6',
  marginBottom: 18,
  fontWeight: 800,
  fontSize: 24,
  textAlign: 'right',
};

const AdManager = () => (
  <div style={responsiveContainer}>
    <div style={cardStyles}>
      <h1 style={h1Styles}>مدیریت تبلیغات</h1>
      <div style={{ width: '100%', overflowX: 'auto' }}>
        <table style={tableStyles}>
          <thead>
            <tr>
              <th style={thStyles}>عنوان کمپین</th>
              <th style={thStyles}>نمایش</th>
              <th style={thStyles}>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {ADS.map(ad => (
              <tr key={ad.id}>
                <td style={tdStyles}>{ad.title}</td>
                <td style={tdStyles}>{ad.views}</td>
                <td style={tdStyles}>
                  <button style={manageBtn}>مدیریت</button>
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
          .ad-table th, .ad-table td {
            font-size: 13px !important;
            padding: 7px 4px !important;
          }
        }
      `}
    </style>
  </div>
);

export default AdManager;
