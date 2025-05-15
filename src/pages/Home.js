import React from 'react';

const AdBanner = ({ position }) => (
  <div style={{
    width: '100%',
    margin: '16px 0',
    display: 'flex',
    justifyContent: 'center'
  }}>
    <div style={{
      width: '100%',
      maxWidth: 728,
      minHeight: 90,
      background: '#f3f4f6',
      color: '#888',
      border: '2px dashed #bbb',
      borderRadius: 12,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'inherit',
      fontWeight: 500,
      fontSize: 18
    }}>
      جایگاه تبلیغاتی {position === 'top' ? 'بالا' : 'پایین'}
    </div>
  </div>
);

const Home = () => (
  <div style={{
    direction: 'rtl',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f8fafc 60%, #dbeafe 100%)',
    fontFamily: 'Vazir, sans-serif',
    display: 'flex',
    flexDirection: 'column'
  }}>
    <AdBanner position="top" />
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
      textAlign: 'center'
    }}>
      <img src="/assets/images/logo.svg" alt="Airdrop Hunter Logo" style={{ width: 80, marginBottom: 20 }} />
      <h1 style={{
        fontWeight: 800,
        fontSize: 'clamp(2.2rem, 6vw, 2.7rem)',
        color: '#1e293b',
        marginBottom: 12,
      }}>ایردراپ‌یاب</h1>
      <p style={{
        color: '#334155',
        fontSize: '1.10rem',
        maxWidth: 440,
        marginBottom: 32,
        lineHeight: 2
      }}>
        بهترین ایردراپ‌های روز دنیا را اینجا پیدا کنید؛
        همه چیز رایگان و بدون نیاز به دانش فنی!<br />
        تبلیغ ویژه خود را نیز همین جا رزرو کنید.<br />
        ثبت ایردراپ، تماس یا معرفی سریع با ادمین
      </p>
    </div>
    <AdBanner position="bottom" />
  </div>
);

export default Home;
