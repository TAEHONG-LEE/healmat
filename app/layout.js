import './globals.css';

export const metadata = {
  metadataBase: new URL('https://healmat.vercel.app'),
  title: '힐매트 - 스마트 욕창예방 매트리스 | 70도 자동 자세 변환',
  description: '70도 자동 자세 변환, 오리가미 기술로 완성한 스마트 욕창예방매트리스. 보호자의 체위 변환 부담을 덜어드립니다. IP 디딤돌 특허 프로그램 선정, 충남대학교 RISE 창업동아리.',
  keywords: '욕창예방, 스마트매트리스, 힐매트, 자동자세변환, 간병, 의료기기, 체위변환, 욕창예방매트리스, 환자케어, 간병용품',
  authors: [{ name: '모르포 메디테크 (Morpho Meditech)' }],
  creator: 'Morpho Meditech',
  publisher: 'Morpho Meditech',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: '힐매트 - 70도 자동 자세 변환 스마트 욕창예방 매트리스',
    description: '오리가미 기술로 완성한 혁신적인 욕창예방 솔루션. 보호자의 체위 변환 부담을 덜어드립니다.',
    type: 'website',
    locale: 'ko_KR',
    siteName: '힐매트 (HealMat)',
    images: [
      {
        url: '/images/healmat2.png',
        width: 1200,
        height: 630,
        alt: '힐매트 - 70도 자동 자세 변환 시연',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '힐매트 - 스마트 욕창예방 매트리스',
    description: '70도 자동 자세 변환, 이제 욕창 걱정 없이 편안하게',
    images: ['/images/healmat2.png'],
  },
  verification: {
    // 추후 등록 시 추가
    // google: 'google-site-verification-code',
    // naver: 'naver-site-verification-code',
  },
  alternates: {
    canonical: 'https://healmat.vercel.app',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
