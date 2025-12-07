import './globals.css';

export const metadata = {
  title: '힐매트 - 스마트 욕창예방 매트리스',
  description: '70도 자동 자세 변환, 오리가미 기술로 완성한 스마트 욕창예방매트리스',
  keywords: '욕창예방, 스마트매트리스, 힐매트, 자동자세변환, 간병, 의료기기',
  openGraph: {
    title: '힐매트 - 스마트 욕창예방 매트리스',
    description: '70도 자동 자세 변환, 이제 욕창 걱정 없이 편안하게',
    type: 'website',
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
