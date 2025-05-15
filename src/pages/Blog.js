import React from 'react';

const Blog = () => (
  <div style={{ minHeight: '100vh', background: '#f1f5f9', padding: 30, direction: 'rtl', fontFamily: 'Vazir, sans-serif' }}>
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', fontSize: 30, color: '#1e293b', marginBottom: 22 }}>وبلاگ ایردراپ‌یاب</h1>
      <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px #0001', padding: 24 }}>
        <h2 style={{ color: '#2563eb' }}>آموزش شرکت در ایردراپ‌ها</h2>
        <p style={{ color: '#475569', marginBottom: 7 }}>
          برای کسب درآمد از ایردراپ‌ها، ابتدا باید ... (آموزش تستی و قابل توسعه)
        </p>
      </div>
    </div>
  </div>
);

export default Blog;
