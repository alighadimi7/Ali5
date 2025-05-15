import React from 'react';

const AirdropDetail = () => (
  <div style={{ minHeight: '100vh', background: '#f8fafc', padding: 28, direction: 'rtl', fontFamily: 'Vazir, sans-serif' }}>
    <div style={{ maxWidth: 540, background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px #0001', padding: 34, margin: '0 auto' }}>
      <h1 style={{ fontWeight: 700, fontSize: 26, color: '#0f172a' }}>جزئیات ایردراپ شماره یک</h1>
      <p style={{ margin: '18px 0', color: '#475569', fontSize: 17 }}>
        شرط شرکت: دنبال‌کردن توییتر، عضویت در تلگرام و تکمیل فرم.<br/>
        پاداش: ۲۵۰ توکن اختصاصی پلتفرم.<br/>
        وضعیت: <span style={{ color: '#22c55e', fontWeight: 600 }}>در حال اجرا</span>
      </p>
      <div style={{ margin: '22px 0' }}>
        <button style={{ background: '#2563eb', color: '#fff', border: 0, outline: 0, borderRadius: 8, padding: '13px 36px', fontSize: 17, cursor: 'pointer', fontWeight: 700 }}>شرکت کن</button>
      </div>
      <small style={{ color: '#94a3b8' }}>هیچ مسئولیتی بابت شرکت در ایردراپ‌ها نداریم.</small>
    </div>
  </div>
);

export default AirdropDetail;
