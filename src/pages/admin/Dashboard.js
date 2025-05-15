import React from 'react';

const Dashboard = () => (
  <div style={{ background: '#eef2ff', minHeight: '100vh', padding: 32, direction: 'rtl' }}>
    <div style={{ maxWidth: 780, margin: '0 auto', background: '#fff', borderRadius: 14, padding: 30, boxShadow: '0 3px 18px #0001' }}>
      <h1 style={{ color: '#1e293b', fontWeight: 900, fontSize: 28, marginBottom: 20 }}>داشبورد مدیریت</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18 }}>
        <div style={{ flex: 1, minWidth: 180, background: '#f1f5f9', padding: 20, boxShadow: '0 1px 4px #0001', borderRadius: 10 }}>
          <span style={{ color: '#52525b', fontWeight: 600 }}>تعداد ایردراپ‌ها</span>
          <div style={{ fontSize: 26, color: '#2563eb', fontWeight: 800 }}>12</div>
        </div>
        <div style={{ flex: 1, minWidth: 180, background: '#f1f5f9', padding: 20, boxShadow: '0 1px 4px #0001', borderRadius: 10 }}>
          <span style={{ color: '#52525b', fontWeight: 600 }}>پیام‌های تلگرام</span>
          <div style={{ fontSize: 26, color: '#10b981', fontWeight: 800 }}>4</div>
        </div>
        <div style={{ flex: 1, minWidth: 180, background: '#f1f5f9', padding: 20, boxShadow: '0 1px 4px #0001', borderRadius: 10 }}>
          <span style={{ color: '#52525b', fontWeight: 600 }}>ایردراپ فعال</span>
          <div style={{ fontSize: 26, color: '#f59e42', fontWeight: 800 }}>2</div>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
