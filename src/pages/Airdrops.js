import React from 'react';

const DUMMY_AIRDROPS = [
  { id: 1, title: 'Airdrop-One', desc: 'ایردراپ شماره یک - ۲۵۰ توکن رایگان', status: 'در حال اجرا' },
  { id: 2, title: 'CryptoStar', desc: 'ایردراپ کریپتو استار - ۱۰۰ واحد', status: 'پایان یافته' },
  { id: 3, title: 'NFT FOMO', desc: 'ایردراپ NFT با جوایز متنوع', status: 'در حال اجرا' },
];

const AirdropCard = ({ title, desc, status }) => (
  <div style={{
    background: '#fff',
    borderRadius: 10,
    boxShadow: '0 2px 12px #0001',
    padding: 18,
    margin: '10px 0',
    textAlign: 'right',
    direction: 'rtl',
    minWidth: 260
  }}>
    <h2 style={{ color: '#1e293b', fontSize: 20, marginBottom: 4 }}>{title}</h2>
    <p style={{ color: '#64748b', fontSize: 15 }}>{desc}</p>
    <span style={{ background: status === 'در حال اجرا' ? '#beffbd' : '#ffe5b9', color: '#334155', padding: '2px 10px', borderRadius: 8, fontSize: 13, marginTop: 8, display: 'inline-block' }}>{status}</span>
  </div>
);

const AirdropList = () => (
  <div style={{ maxWidth: 600, margin: '0 auto', padding: 22 }}>
    {DUMMY_AIRDROPS.map(ad => <AirdropCard key={ad.id} {...ad} />)}
  </div>
);

const Airdrops = () => (
  <div style={{ background: '#f1f5f9', minHeight: '100vh' }}>
    <h1 style={{ textAlign: 'center', fontFamily: 'Vazir, sans-serif', padding: '30px 10px 10px 10px', fontSize: 32, color: '#1e293b' }}>
      لیست ایردراپ‌ها
    </h1>
    <AirdropList />
  </div>
);

export default Airdrops;
