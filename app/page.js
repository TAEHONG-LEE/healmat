'use client';

import { useState, useEffect } from 'react';

// 반응형 미디어 쿼리 훅 - 일반적으로 많이 사용하는 방법
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};

// 반응형 브레이크포인트 훅
const useResponsive = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
  const isDesktop = useMediaQuery('(min-width: 1025px)');
  return { isMobile, isTablet, isDesktop };
};

// 컬러 시스템
const colors = {
  primary: '#2E7D6E',
  primaryDark: '#1D5A4F',
  secondary: '#FF8C42',
  accent: '#5BA3C6',
  background: '#F8FAFA',
  text: '#2D3436',
  textLight: '#666666',
  textMuted: '#888888',
  white: '#FFFFFF',
};

// 구글 폼 링크
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfOXB8wrXjOh4mFnRkpDMyrw7EalacbddLvEV1VHmaQrEMHXA/viewform?usp=dialog';

// 개인정보처리방침 내용
const PRIVACY_POLICY = `
<h2>개인정보처리방침</h2>
<p><strong>시행일: 2025년 1월 1일</strong></p>

<p>모르포 메디테크(이하 "회사")는 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.</p>

<h3>1. 개인정보의 수집 및 이용 목적</h3>
<p>회사는 다음의 목적을 위해 개인정보를 처리합니다:</p>
<ul>
  <li>제품 상담 및 문의 응대</li>
  <li>제품 구매 및 배송</li>
  <li>고객 서비스 제공 및 불만 처리</li>
  <li>마케팅 및 광고 활용 (동의 시)</li>
</ul>

<h3>2. 수집하는 개인정보 항목</h3>
<ul>
  <li>필수항목: 이름, 연락처, 이메일</li>
  <li>선택항목: 주소, 문의내용</li>
</ul>

<h3>3. 개인정보의 보유 및 이용 기간</h3>
<p>회사는 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계법령에 따라 보존할 필요가 있는 경우 일정 기간 보관합니다:</p>
<ul>
  <li>계약 또는 청약철회 등에 관한 기록: 5년</li>
  <li>소비자 불만 또는 분쟁처리에 관한 기록: 3년</li>
</ul>

<h3>4. 개인정보의 제3자 제공</h3>
<p>회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 이용자의 동의가 있거나 법령에 의해 요구되는 경우에는 예외로 합니다.</p>

<h3>5. 개인정보의 파기</h3>
<p>회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.</p>

<h3>6. 정보주체의 권리·의무</h3>
<p>이용자는 언제든지 자신의 개인정보에 대해 열람, 정정, 삭제, 처리정지를 요구할 수 있습니다.</p>

<h3>7. 개인정보 보호책임자</h3>
<ul>
  <li>성명: 유병훈</li>
  <li>연락처: 010-4576-9596</li>
  <li>이메일: byunghun0501@gmail.com</li>
</ul>

<h3>8. 개인정보처리방침 변경</h3>
<p>이 개인정보처리방침은 2025년 1월 1일부터 적용됩니다. 변경사항이 있을 경우 웹사이트를 통해 공지합니다.</p>
`;

// 이용약관 내용
const TERMS_OF_SERVICE = `
<h2>이용약관</h2>
<p><strong>시행일: 2025년 1월 1일</strong></p>

<h3>제1조 (목적)</h3>
<p>본 약관은 모르포 메디테크(이하 "회사")가 제공하는 힐매트 관련 서비스(이하 "서비스")의 이용조건 및 절차, 회사와 이용자의 권리, 의무, 책임사항을 규정함을 목적으로 합니다.</p>

<h3>제2조 (약관의 효력 및 변경)</h3>
<ol>
  <li>본 약관은 서비스를 이용하고자 하는 모든 이용자에 대하여 그 효력을 발생합니다.</li>
  <li>회사는 필요한 경우 약관을 변경할 수 있으며, 변경된 약관은 웹사이트에 공지함으로써 효력을 발생합니다.</li>
</ol>

<h3>제3조 (서비스의 내용)</h3>
<p>회사가 제공하는 서비스는 다음과 같습니다:</p>
<ul>
  <li>힐매트 제품 정보 제공</li>
  <li>제품 상담 및 문의 서비스</li>
  <li>제품 구매 및 A/S 서비스</li>
</ul>

<h3>제4조 (서비스의 중단)</h3>
<p>회사는 다음 각 호에 해당하는 경우 서비스의 전부 또는 일부를 제한하거나 중단할 수 있습니다:</p>
<ol>
  <li>서비스용 설비의 보수 등 공사로 인한 부득이한 경우</li>
  <li>천재지변, 정전, 서비스 설비의 장애 등 불가항력적인 사유가 있는 경우</li>
</ol>

<h3>제5조 (이용자의 의무)</h3>
<p>이용자는 다음 행위를 하여서는 안 됩니다:</p>
<ul>
  <li>타인의 정보 도용</li>
  <li>회사가 게시한 정보의 변경</li>
  <li>회사의 저작권 등 지적재산권에 대한 침해</li>
  <li>회사 및 제3자의 명예를 손상시키는 행위</li>
</ul>

<h3>제6조 (회사의 의무)</h3>
<ol>
  <li>회사는 관련 법령을 준수하고, 계속적이고 안정적으로 서비스를 제공하기 위해 노력합니다.</li>
  <li>회사는 이용자의 개인정보를 보호하기 위해 보안 시스템을 갖추어야 합니다.</li>
</ol>

<h3>제7조 (면책조항)</h3>
<ol>
  <li>회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 책임이 면제됩니다.</li>
  <li>회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.</li>
</ol>

<h3>제8조 (분쟁해결)</h3>
<p>회사와 이용자 간에 발생한 분쟁에 관한 소송은 대한민국 법을 적용하며, 회사의 본사 소재지를 관할하는 법원을 관할 법원으로 합니다.</p>

<h3>부칙</h3>
<p>본 약관은 2025년 1월 1일부터 시행됩니다.</p>
`;

// 법적 고지 팝업 컴포넌트
const LegalPopup = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000,
      padding: '20px',
    }} onClick={onClose}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        maxWidth: '700px',
        width: '100%',
        maxHeight: '80vh',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
      }} onClick={(e) => e.stopPropagation()}>
        {/* 헤더 */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 30px',
          borderBottom: '1px solid #eee',
          background: colors.background,
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.text, margin: 0 }}>{title}</h3>
          <button
            onClick={onClose}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: 'none',
              background: 'white',
              cursor: 'pointer',
              fontSize: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: colors.textLight,
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            ×
          </button>
        </div>
        {/* 내용 */}
        <div style={{
          padding: '30px',
          overflowY: 'auto',
          maxHeight: 'calc(80vh - 76px)',
          fontSize: '14px',
          lineHeight: '1.8',
          color: colors.text,
        }}>
          <style dangerouslySetInnerHTML={{ __html: `
            .legal-content h2 { font-size: 22px; margin-bottom: 20px; color: #2E7D6E; }
            .legal-content h3 { font-size: 16px; margin-top: 24px; margin-bottom: 12px; color: #2D3436; }
            .legal-content p { margin-bottom: 12px; }
            .legal-content ul, .legal-content ol { margin-bottom: 12px; padding-left: 24px; }
            .legal-content li { margin-bottom: 6px; }
          `}} />
          <div className="legal-content" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  );
};

// GNB 컴포넌트
const GNB = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isMobile } = useResponsive();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '제품 소개', href: '#product' },
    { label: '기술', href: '#technology' },
    { label: 'FAQ', href: '#faq' },
    { label: '팀 소개', href: '#team' },
    { label: '문의', href: '#contact' },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: isMobile ? '60px' : '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: isMobile ? '0 20px' : '0 60px',
        background: scrolled || mobileMenuOpen ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: scrolled || mobileMenuOpen ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none',
        zIndex: 1000,
        transition: 'all 0.3s ease',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: isMobile ? '32px' : '40px',
            height: isMobile ? '32px' : '40px',
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: isMobile ? '14px' : '18px',
          }}>H</div>
          <span style={{ fontSize: isMobile ? '16px' : '20px', fontWeight: '700', color: colors.text }}>힐매트</span>
        </div>

        {/* 데스크톱 메뉴 */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link" style={{
                color: colors.text,
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '500',
              }}>{item.label}</a>
            ))}
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{
              padding: '12px 24px',
              background: colors.primary,
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(46, 125, 110, 0.2)',
            }}>상담 신청</a>
          </div>
        )}

        {/* 모바일 햄버거 메뉴 버튼 */}
        {isMobile && (
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            }}
          >
            <span style={{
              width: '24px',
              height: '2px',
              background: colors.text,
              transition: 'all 0.3s ease',
              transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }} />
            <span style={{
              width: '24px',
              height: '2px',
              background: colors.text,
              opacity: mobileMenuOpen ? 0 : 1,
              transition: 'all 0.3s ease',
            }} />
            <span style={{
              width: '24px',
              height: '2px',
              background: colors.text,
              transition: 'all 0.3s ease',
              transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }} />
          </button>
        )}
      </nav>

      {/* 모바일 메뉴 드로어 */}
      {isMobile && mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '60px',
          left: 0,
          right: 0,
          background: 'rgba(255,255,255,0.98)',
          backdropFilter: 'blur(10px)',
          zIndex: 999,
          padding: '20px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        }}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'block',
                padding: '16px 0',
                color: colors.text,
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                borderBottom: `1px solid ${colors.background}`,
              }}
            >{item.label}</a>
          ))}
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              display: 'block',
              marginTop: '20px',
              padding: '16px',
              background: colors.primary,
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              textAlign: 'center',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(46, 125, 110, 0.2)',
            }}
          >상담 신청</a>
        </div>
      )}
    </>
  );
};

// Hero 섹션
const HeroSection = () => {
  const { isMobile, isTablet } = useResponsive();

  return (
  <section id="product" style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: isMobile ? '80px 20px 40px' : isTablet ? '100px 40px 60px' : '100px 60px 60px',
    background: `linear-gradient(135deg, ${colors.background} 0%, #E8F5F3 100%)`,
  }}>
    <div style={{
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : '1fr 1fr',
      gap: isMobile ? '40px' : '80px',
      alignItems: 'center',
      width: '100%',
    }}>
      {/* 제품 이미지 영역 - 힐매트 접이식 구조 시각화 */}
      <div style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        order: isMobile ? 2 : 1,
      }}>
        <div style={{
          width: isMobile ? '100%' : '520px',
          maxWidth: '520px',
          height: isMobile ? '300px' : '420px',
          background: 'linear-gradient(145deg, #e8f5f3 0%, #d4ede8 100%)',
          borderRadius: isMobile ? '16px' : '24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 20px 60px rgba(46, 125, 110, 0.15)',
          position: 'relative',
          overflow: 'hidden',
          padding: isMobile ? '20px' : '40px',
        }}>
          {/* 힐매트 접이식 구조 - 애니메이션 */}
          <div style={{
            position: 'relative',
            width: isMobile ? '280px' : '400px',
            height: isMobile ? '200px' : '280px',
            transform: isMobile ? 'scale(0.7)' : 'scale(1)',
          }}>
            {/* 베이스 프레임 (하판) */}
            <div style={{
              position: 'absolute',
              bottom: '30px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '340px',
              height: '25px',
              background: 'linear-gradient(180deg, #4a4a4a 0%, #333 100%)',
              borderRadius: '4px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            }} />

            {/* 왼쪽 에어셀 */}
            <div style={{
              position: 'absolute',
              bottom: '55px',
              left: '40px',
              width: '150px',
              height: '160px',
              background: 'linear-gradient(to right, #FF8C42 0%, #e67a35 100%)',
              clipPath: 'polygon(0% 100%, 100% 100%, 100% 75%, 0% 75%)',
              boxShadow: '0 4px 15px rgba(255, 140, 66, 0.4)',
              animation: 'airCellInflate 4s ease-in-out infinite',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingBottom: '8px',
            }}>
              <span style={{ color: 'white', fontSize: '11px', fontWeight: '700' }}>AIR</span>
            </div>

            {/* 오른쪽 에어셀 */}
            <div style={{
              position: 'absolute',
              bottom: '55px',
              right: '40px',
              width: '150px',
              height: '160px',
              background: 'linear-gradient(135deg, #5BA3C6 0%, #4a8fb3 100%)',
              clipPath: 'polygon(0% 100%, 100% 100%, 100% 75%, 0% 75%)',
              boxShadow: '0 2px 8px rgba(91, 163, 198, 0.3)',
            }} />

            {/* 왼쪽 상판 */}
            <div style={{
              position: 'absolute',
              bottom: '95px',
              left: '40px',
              width: '150px',
              height: '12px',
              transformOrigin: 'right center',
              animation: 'boardTilt 4s ease-in-out infinite',
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(180deg, #2E7D6E 0%, #256459 100%)',
                borderRadius: '6px 2px 2px 6px',
                boxShadow: '0 4px 15px rgba(46, 125, 110, 0.4)',
              }} />
            </div>

            {/* 오른쪽 상판 */}
            <div style={{
              position: 'absolute',
              bottom: '95px',
              right: '40px',
              width: '150px',
              height: '12px',
              background: 'linear-gradient(180deg, #3d9d8a 0%, #2E7D6E 100%)',
              borderRadius: '2px 6px 6px 2px',
              transformOrigin: 'left center',
              boxShadow: '0 2px 10px rgba(46, 125, 110, 0.2)',
            }} />

            {/* 환자 실루엣 */}
            <div style={{
              position: 'absolute',
              bottom: '107px',
              left: '50%',
              transform: 'translateX(-50%)',
              transformOrigin: 'right center',
              animation: 'patientTilt 4s ease-in-out infinite',
              zIndex: 5,
            }}>
              <div style={{
                width: '280px',
                height: '50px',
                background: 'linear-gradient(180deg, #8fb5b0 0%, #6a9590 100%)',
                borderRadius: '25px',
                position: 'relative',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              }}>
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                }}>
                  <div style={{ width: '100%', height: '50%', background: '#f0dfd0' }} />
                  <div style={{ width: '100%', height: '50%', background: '#3d2b1f' }} />
                </div>
              </div>
            </div>

            {/* 중앙 힌지 */}
            <div style={{
              position: 'absolute',
              bottom: '90px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '20px',
              height: '22px',
              background: 'linear-gradient(180deg, #666 0%, #444 100%)',
              borderRadius: '4px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
              zIndex: 10,
            }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '10px',
                height: '10px',
                background: '#333',
                borderRadius: '50%',
              }} />
            </div>

            {/* 70도 각도 표시 */}
            <div style={{
              position: 'absolute',
              top: isMobile ? '5px' : '20px',
              left: isMobile ? '5px' : '20px',
              background: 'rgba(255,255,255,0.95)',
              borderRadius: isMobile ? '8px' : '12px',
              padding: isMobile ? '8px 10px' : '12px 16px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              zIndex: 20,
            }}>
              <div style={{ fontSize: isMobile ? '10px' : '12px', color: colors.textLight, marginBottom: '4px' }}>최대 기울기</div>
              <div style={{ fontSize: isMobile ? '20px' : '28px', fontWeight: '700', color: colors.secondary }}>70°</div>
            </div>

            {/* 상태 표시 - 모바일에서 숨김 */}
            {!isMobile && (
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
                  <div style={{ width: '12px', height: '12px', background: colors.secondary, borderRadius: '3px' }} />
                  <span style={{ color: colors.text }}>에어셀 팽창</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
                  <div style={{ width: '12px', height: '12px', background: colors.primary, borderRadius: '3px' }} />
                  <span style={{ color: colors.text }}>상판 연동</span>
                </div>
              </div>
            )}
          </div>

          <p style={{
            marginTop: isMobile ? '8px' : '16px',
            color: colors.primary,
            fontSize: isMobile ? '11px' : '14px',
            fontWeight: '600',
            textAlign: 'center',
          }}>삼각 에어셀 팽창 → 상판 밀착 상승 → 자동 체위 변환</p>
        </div>
      </div>

      {/* 텍스트 영역 */}
      <div style={{ order: isMobile ? 1 : 2, textAlign: isMobile ? 'center' : 'left' }}>
        <h1 style={{
          fontSize: isMobile ? '28px' : isTablet ? '40px' : '52px',
          fontWeight: '700',
          lineHeight: '1.2',
          color: colors.text,
          marginBottom: isMobile ? '16px' : '24px',
        }}>
          <span style={{ color: colors.primary }}>70도</span> 자동 자세 변환,<br />
          이제 욕창 걱정 없이<br />
          편안하게
        </h1>
        <p style={{
          fontSize: isMobile ? '15px' : '20px',
          color: colors.textLight,
          marginBottom: isMobile ? '24px' : '40px',
          lineHeight: '1.6',
        }}>
          오리가미 기술로 완성한 스마트 욕창예방매트리스,<br />
          <strong style={{ color: colors.primary }}>힐매트</strong>
        </p>
        <div style={{
          display: 'flex',
          gap: isMobile ? '12px' : '16px',
          marginBottom: isMobile ? '24px' : '40px',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'stretch' : 'flex-start',
        }}>
          <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary animate-fadeInUp" style={{
            padding: isMobile ? '14px 24px' : '18px 36px',
            background: colors.primary,
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: isMobile ? '14px' : '16px',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(46, 125, 110, 0.3)',
            textDecoration: 'none',
            textAlign: 'center',
            animationDelay: '0.3s',
          }}>제품 상담 신청하기</a>
          <a href="#video" className="btn-outline animate-fadeInUp" style={{
            padding: isMobile ? '14px 24px' : '18px 36px',
            background: 'transparent',
            color: colors.primary,
            border: `2px solid ${colors.primary}`,
            borderRadius: '12px',
            fontSize: isMobile ? '14px' : '16px',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            textDecoration: 'none',
            animationDelay: '0.4s',
          }}>제품 동작 과정 보기</a>
        </div>
        {/* 신뢰 배지 */}
        <div style={{
          display: 'flex',
          gap: isMobile ? '8px' : '12px',
          flexWrap: 'wrap',
          justifyContent: isMobile ? 'center' : 'flex-start',
        }}>
          {['IP 디딤돌 특허 프로그램', '충남대 RISE 창업동아리', '프로토타입 개발 완료'].map((badge) => (
            <span key={badge} className="badge-hover" style={{
              padding: isMobile ? '6px 12px' : '8px 16px',
              background: 'rgba(46, 125, 110, 0.1)',
              borderRadius: '20px',
              fontSize: isMobile ? '11px' : '13px',
              color: colors.primary,
              fontWeight: '500',
              cursor: 'default',
            }}>{badge}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};


// Problem 섹션
const ProblemSection = () => {
  const { isMobile } = useResponsive();
  const stats = [
    { icon: '📈', value: '22%', label: '환자 증가', desc: '21,700 → 26,600명 (3년간)' },
    { icon: '👨‍⚕️', value: '6.9명', label: '간호사 수', desc: 'OECD 평균 9명 대비 부족' },
    { icon: '💰', value: '370만원', label: '월 간병비', desc: '가정 간병인 기준' },
  ];

  return (
    <section style={{
      padding: isMobile ? '60px 20px' : '120px 60px',
      background: colors.background,
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: isMobile ? '24px' : '40px',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: isMobile ? '32px' : '60px',
          color: colors.text,
        }}>
          욕창, 왜 이렇게 <span style={{ color: colors.primary }}>관리가 어려울까요?</span>
        </h2>

        {/* 통계 카드 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: isMobile ? '16px' : '32px',
          marginBottom: isMobile ? '32px' : '60px',
        }}>
          {stats.map((stat, i) => (
            <div key={i} className="card-hover" style={{
              background: 'white',
              borderRadius: isMobile ? '16px' : '20px',
              padding: isMobile ? '24px 20px' : '40px 32px',
              textAlign: 'center',
              boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
              cursor: 'default',
            }}>
              <div className="icon-hover" style={{ fontSize: isMobile ? '36px' : '48px', marginBottom: isMobile ? '12px' : '16px', display: 'inline-block' }}>{stat.icon}</div>
              <div className="stat-number" style={{
                fontSize: isMobile ? '32px' : '48px',
                fontWeight: '700',
                color: colors.primary,
                marginBottom: '8px',
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: isMobile ? '16px' : '18px',
                fontWeight: '600',
                color: colors.text,
                marginBottom: '8px',
              }}>{stat.label}</div>
              <div style={{
                fontSize: isMobile ? '12px' : '14px',
                color: colors.textMuted,
              }}>{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* 인용문 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '16px' : '24px',
        }}>
          <div className="card-hover" style={{
            background: 'white',
            borderRadius: isMobile ? '16px' : '20px',
            padding: isMobile ? '24px' : '32px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
          }}>
            <div style={{ fontSize: isMobile ? '12px' : '14px', color: colors.textMuted, marginBottom: '12px' }}>50대, 80대 노모 간병 중</div>
            <p style={{ fontSize: isMobile ? '15px' : '18px', color: colors.text, lineHeight: '1.6' }}>
              "(어머니의) 붉은 상처를 대수롭지 않게 생각했다가<br />
              <span style={{ color: colors.secondary, fontWeight: '600' }}>3기 욕창으로 번져서 결국 수술했어요."</span>
            </p>
          </div>
          <div className="card-hover" style={{
            background: 'white',
            borderRadius: isMobile ? '16px' : '20px',
            padding: isMobile ? '24px' : '32px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
          }}>
            <div style={{ fontSize: isMobile ? '12px' : '14px', color: colors.textMuted, marginBottom: '12px' }}>60대, 전신 마비 환자 10년 간병 중</div>
            <p style={{ fontSize: isMobile ? '15px' : '18px', color: colors.text, lineHeight: '1.6' }}>
              "남편(환자)이 1시간마다 자세를 바꿔달라고 해서<br />
              이제는 <span style={{ color: colors.secondary, fontWeight: '600' }}>어깨랑 손목이 너무 아파요."</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


// 단계별 캐러셀 컴포넌트 - HeroSection 애니메이션 값 기반
const StepCarousel = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const { isMobile } = useResponsive();

  const goToPrev = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
  };

  const goToNext = () => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
  };

  const item = steps[currentStep];

  return (
    <div style={{
      background: `linear-gradient(135deg, ${colors.background} 0%, #E8F5F3 100%)`,
      borderRadius: isMobile ? '16px' : '24px',
      padding: isMobile ? '20px' : '50px',
      marginBottom: isMobile ? '32px' : '60px',
    }}>
      <h3 style={{ fontSize: '24px', fontWeight: '700', color: colors.text, marginBottom: '30px', textAlign: 'center' }}>
        힐매트 구조 & 작동 원리
      </h3>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        maxWidth: '1000px',
        margin: '0 auto',
      }}>
        {/* 왼쪽 화살표 */}
        <button
          onClick={goToPrev}
          className="btn-circle"
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            border: 'none',
            background: 'white',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            color: colors.primary,
            flexShrink: 0,
          }}
        >
          ←
        </button>

        {/* 카드 */}
        <div style={{
          flex: 1,
          background: 'white',
          borderRadius: '20px',
          padding: '32px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
        }}>
          {/* 단계 표시 */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '20px',
          }}>
            <div style={{
              display: 'inline-block',
              background: item.color,
              color: 'white',
              padding: '6px 14px',
              borderRadius: '12px',
              fontSize: '13px',
              fontWeight: '700',
            }}>STEP {item.step}</div>
            <h4 style={{ fontSize: '18px', fontWeight: '700', color: colors.text }}>{item.title}</h4>
          </div>

          {/* 다이어그램 + 실제 이미지 2단 레이아웃 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? '16px' : '20px',
            marginBottom: '20px',
          }}>

          {/* 시각화 다이어그램 - HeroSection과 동일한 구조 */}
          <div style={{
            position: 'relative',
            height: '220px',
            background: colors.background,
            borderRadius: '12px',
            marginBottom: '20px',
            overflow: 'hidden',
          }}>
            {/* 베이스 프레임 (하판) */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '280px',
              height: '18px',
              background: 'linear-gradient(180deg, #4a4a4a 0%, #333 100%)',
              borderRadius: '3px',
              boxShadow: '0 3px 8px rgba(0,0,0,0.3)',
            }} />

            {/* 왼쪽 에어셀 - 삼각 기둥 */}
            <div style={{
              position: 'absolute',
              bottom: '38px',
              left: 'calc(50% - 140px)',
              width: '125px',
              height: '130px',
              background: `linear-gradient(to right, ${colors.secondary} 0%, #e67a35 100%)`,
              clipPath: item.leftAirCell,
              boxShadow: '0 3px 10px rgba(255, 140, 66, 0.4)',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingBottom: '6px',
              transition: 'clip-path 0.5s ease',
            }}>
              <span style={{ color: 'white', fontSize: '10px', fontWeight: '700' }}>AIR</span>
            </div>

            {/* 오른쪽 에어셀 - 평평 (고정) */}
            <div style={{
              position: 'absolute',
              bottom: '38px',
              right: 'calc(50% - 140px)',
              width: '125px',
              height: '130px',
              background: `linear-gradient(135deg, ${colors.accent} 0%, #4a8fb3 100%)`,
              clipPath: 'polygon(0% 100%, 100% 100%, 100% 75%, 0% 75%)',
              boxShadow: '0 2px 6px rgba(91, 163, 198, 0.3)',
            }} />

            {/* 왼쪽 상판 - 에어셀 위에 밀착 */}
            <div style={{
              position: 'absolute',
              bottom: '70px',
              left: 'calc(50% - 140px)',
              width: '125px',
              height: '10px',
              transformOrigin: 'right center',
              transform: `rotate(${item.leftBoardRotate})`,
              transition: 'transform 0.5s ease',
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                background: `linear-gradient(180deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
                borderRadius: '5px 2px 2px 5px',
                boxShadow: '0 3px 10px rgba(46, 125, 110, 0.4)',
              }} />
            </div>

            {/* 오른쪽 상판 - 평평 (고정) */}
            <div style={{
              position: 'absolute',
              bottom: '70px',
              right: 'calc(50% - 140px)',
              width: '125px',
              height: '10px',
              background: `linear-gradient(180deg, #3d9d8a 0%, ${colors.primary} 100%)`,
              borderRadius: '2px 5px 5px 2px',
              boxShadow: '0 2px 8px rgba(46, 125, 110, 0.2)',
            }} />

            {/* 중앙 힌지 */}
            <div style={{
              position: 'absolute',
              bottom: '65px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '16px',
              height: '18px',
              background: 'linear-gradient(180deg, #666 0%, #444 100%)',
              borderRadius: '3px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
              zIndex: 10,
            }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '8px',
                height: '8px',
                background: '#333',
                borderRadius: '50%',
              }} />
            </div>

            {/* 환자 - 힌지 중앙 위치 */}
            <div style={{
              position: 'absolute',
              bottom: '80px',
              left: '50%',
              transform: `translateX(-50%) rotate(${item.patientRotate})`,
              transformOrigin: 'right center',
              zIndex: 5,
              transition: 'transform 0.5s ease',
            }}>
              {/* 몸통 */}
              <div style={{
                width: '230px',
                height: '40px',
                background: 'linear-gradient(180deg, #8fb5b0 0%, #6a9590 100%)',
                borderRadius: '20px',
                position: 'relative',
                boxShadow: '0 3px 10px rgba(0,0,0,0.15)',
              }}>
                {/* 머리 */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                }}>
                  {/* 얼굴 (위쪽, 밝은 색) */}
                  <div style={{ width: '100%', height: '50%', background: '#f0dfd0' }} />
                  {/* 머리카락 (아래쪽, 어두운 색) */}
                  <div style={{ width: '100%', height: '50%', background: '#3d2b1f' }} />
                </div>
              </div>
            </div>

            {/* 각도 표시 (STEP 3, 4에서만) */}
            {(item.step === '3' || item.step === '4') && (
              <div style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                background: 'rgba(255,255,255,0.95)',
                borderRadius: '8px',
                padding: '8px 12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                zIndex: 15,
              }}>
                <div style={{ fontSize: '10px', color: colors.textLight }}>최대 기울기</div>
                <div style={{ fontSize: '18px', fontWeight: '700', color: colors.secondary }}>70°</div>
              </div>
            )}
          </div>

            {/* 실제 힐매트 이미지 */}
            <div style={{
              position: 'relative',
              height: '220px',
              background: '#f8f9fa',
              borderRadius: '12px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '12px',
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div style="text-align:center;color:#999;font-size:14px;">이미지 로딩 중...</div>';
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                background: 'rgba(0,0,0,0.6)',
                color: 'white',
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '11px',
              }}>
                실제 제품 이미지
              </div>
            </div>
          </div>

          {/* 설명 텍스트 */}
          <p style={{ fontSize: '15px', color: colors.textLight, lineHeight: '1.7', textAlign: 'center' }}>{item.desc}</p>
        </div>

        {/* 오른쪽 화살표 */}
        <button
          onClick={goToNext}
          className="btn-circle"
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            border: 'none',
            background: colors.primary,
            boxShadow: '0 4px 12px rgba(46, 125, 110, 0.3)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            color: 'white',
            flexShrink: 0,
          }}
        >
          →
        </button>
      </div>

      {/* 단계 인디케이터 */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        marginTop: '30px',
      }}>
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentStep(i)}
            style={{
              width: i === currentStep ? '32px' : '10px',
              height: '10px',
              borderRadius: '5px',
              border: 'none',
              background: i === currentStep ? colors.primary : '#ccc',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>

      <p style={{ textAlign: 'center', fontSize: '13px', color: colors.textMuted, marginTop: '16px' }}>
        화살표 버튼을 눌러 단계별 작동 원리를 확인하세요
      </p>
    </div>
  );
};

// Solution 섹션
const SolutionSection = () => {
  const { isMobile } = useResponsive();
  const features = [
    {
      icon: '🔄',
      title: '70도 자동 자세 변환',
      desc: '오리가미 기술로 극적인 각도 전환, 보호자 체위 변경 부담 해소',
    },
    {
      icon: '💨',
      title: '4배 빠른 공기 주입',
      desc: '자체 개발 공압 모듈 (8.0LPM), 빠르고 정밀한 동작',
    },
    {
      icon: '🛡️',
      title: '맞춤형 의료 패드',
      desc: '뼈 돌출 부위 자동 상승/하강, 욕창 위험 부위 집중 보호',
    },
  ];

  // 각 단계별 시각화 설정 - HeroSection 애니메이션 값 기반
  // HeroSection: 에어셀 clipPath: 75% → 5%, 상판: 0deg → 40deg, 환자: 0deg → 20deg
  const steps = [
    {
      step: '1',
      title: '평평한 상태',
      desc: '환자가 힐매트 위에 누워있는 초기 상태입니다. 양쪽 에어셀이 동일한 높이를 유지합니다.',
      color: colors.textLight,
      image: '/images/healmat1.jpg',
      leftAirCell: 'polygon(0% 100%, 100% 100%, 100% 75%, 0% 75%)',
      leftBoardRotate: '0deg',
      patientRotate: '0deg',
    },
    {
      step: '2',
      title: '에어셀 팽창 시작',
      desc: '한쪽 에어셀에 공기가 주입되기 시작하여 삼각 기둥 형태로 팽창합니다.',
      color: colors.secondary,
      image: '/images/healmat2.png',
      leftAirCell: 'polygon(0% 100%, 100% 100%, 100% 75%, 0% 40%)',
      leftBoardRotate: '20deg',
      patientRotate: '10deg',
    },
    {
      step: '3',
      title: '상판 기울어짐',
      desc: '팽창한 에어셀이 접이식 상판을 밀어올려 최대 70°까지 기울어집니다.',
      color: colors.primary,
      image: '/images/healmat2.png',
      leftAirCell: 'polygon(0% 100%, 100% 100%, 100% 75%, 0% 5%)',
      leftBoardRotate: '40deg',
      patientRotate: '20deg',
    },
    {
      step: '4',
      title: '체위 변환 완료',
      desc: '기울어진 상판으로 인해 환자가 자연스럽게 옆으로 돌아눕게 됩니다.',
      color: colors.accent,
      image: '/images/healmat3.png',
      leftAirCell: 'polygon(0% 100%, 100% 100%, 100% 75%, 0% 5%)',
      leftBoardRotate: '40deg',
      patientRotate: '20deg',
    },
    {
      step: '5',
      title: '원위치 복귀',
      desc: '공기가 빠지면서 상판이 평평하게 돌아오고, 반대쪽으로 동일한 과정이 반복됩니다.',
      color: colors.primary,
      image: '/images/healmat1.jpg',
      leftAirCell: 'polygon(0% 100%, 100% 100%, 100% 75%, 0% 75%)',
      leftBoardRotate: '0deg',
      patientRotate: '0deg',
    },
  ];

  return (
    <section id="technology" style={{
      padding: isMobile ? '60px 20px' : '120px 60px',
      background: 'white',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: isMobile ? '24px' : '40px',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '20px',
          color: colors.text,
        }}>
          <span style={{ color: colors.primary }}>힐매트</span>가 해결합니다
        </h2>
        <p style={{
          fontSize: '18px',
          color: colors.textLight,
          textAlign: 'center',
          marginBottom: '60px',
        }}>
          오리가미 기술 기반의 혁신적인 욕창예방 솔루션
        </p>

        {/* 힐매트 구조 & 작동 원리 - 캐러셀 */}
        <StepCarousel steps={steps} />

        {/* 기능 카드 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: isMobile ? '16px' : '32px',
        }}>
          {features.map((feature, i) => (
            <div key={i} className="card-hover-lift" style={{
              background: colors.background,
              borderRadius: '20px',
              padding: '40px 32px',
              textAlign: 'center',
            }}>
              <div className="icon-hover" style={{
                width: '80px',
                height: '80px',
                background: `rgba(46, 125, 110, 0.1)`,
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '36px',
                margin: '0 auto 24px',
              }}>{feature.icon}</div>
              <h3 style={{
                fontSize: '22px',
                fontWeight: '700',
                color: colors.text,
                marginBottom: '12px',
              }}>{feature.title}</h3>
              <p style={{
                fontSize: '15px',
                color: colors.textLight,
                lineHeight: '1.6',
              }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 테스트 결과 섹션 (새로 추가)
const TestResultSection = () => {
  const { isMobile } = useResponsive();
  const tests = [
    { weight: '45kg', angle: '70°+', status: '성공' },
    { weight: '77kg', angle: '70°+', status: '성공' },
    { weight: '95kg', angle: '70°+', status: '성공' },
  ];

  return (
    <section style={{
      padding: '120px 60px',
      background: `linear-gradient(180deg, white 0%, ${colors.background} 100%)`,
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: isMobile ? '24px' : '40px',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '20px',
          color: colors.text,
        }}>
          <span style={{ color: colors.primary }}>프로토타입</span> 테스트 완료
        </h2>
        <p style={{
          fontSize: '18px',
          color: colors.textLight,
          textAlign: 'center',
          marginBottom: '60px',
        }}>
          다양한 체중의 사용자를 대상으로 실제 테스트를 진행했습니다
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: isMobile ? '16px' : '32px',
          marginBottom: '60px',
        }}>
          {tests.map((test, i) => (
            <div key={i} className="card-glow" style={{
              background: 'white',
              borderRadius: '20px',
              padding: '40px',
              textAlign: 'center',
              boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
              border: `2px solid ${colors.primary}`,
            }}>
              <div className="animate-float" style={{
                width: '100px',
                height: '100px',
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
              }}>
                <span style={{ fontSize: '28px', fontWeight: '700', color: 'white' }}>{test.weight}</span>
              </div>
              <div className="stat-number" style={{
                fontSize: '48px',
                fontWeight: '700',
                color: colors.primary,
                marginBottom: '8px',
              }}>{test.angle}</div>
              <div className="badge-hover" style={{
                display: 'inline-block',
                padding: '8px 20px',
                background: 'rgba(46, 125, 110, 0.1)',
                borderRadius: '20px',
                color: colors.primary,
                fontWeight: '600',
              }}>각도 전환 {test.status}</div>
            </div>
          ))}
        </div>

        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
        }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '700',
            color: colors.text,
            marginBottom: '24px',
            textAlign: 'center',
          }}>테스트 검증 항목</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: isMobile ? '12px' : '20px',
          }}>
            {[
              { icon: '✅', title: '내구성', desc: '각 무게별 내구도 확인' },
              { icon: '✅', title: '제어 정밀도', desc: '4개 에어셀 독립 제어' },
              { icon: '✅', title: '각도 전환', desc: '모든 무게 70°+ 달성' },
              { icon: '✅', title: '안정성', desc: '안정적/유동적 자세 유지' },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{item.icon}</div>
                <div style={{ fontSize: '16px', fontWeight: '600', color: colors.text, marginBottom: '4px' }}>{item.title}</div>
                <div style={{ fontSize: '13px', color: colors.textLight }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// How It Works 섹션
const HowItWorksSection = () => {
  const { isMobile } = useResponsive();
  const steps = [
    { num: '01', title: '스마트 감지', desc: '사용자 체형과 무게에 맞춰 자동 조절', icon: '📡' },
    { num: '02', title: '공기압 제어', desc: '4개 에어셀 독립 제어로 정밀한 자세 변환', icon: '🎛️' },
    { num: '03', title: '각도 전환', desc: '70도 이상 극적인 각도로 완전한 체위 변경', icon: '↗️' },
    { num: '04', title: '압력 분산', desc: '혈액순환 개선 및 욕창 예방/치료 지원', icon: '💚' },
  ];

  return (
    <section style={{
      padding: isMobile ? '60px 20px' : '120px 60px',
      background: colors.background,
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: isMobile ? '24px' : '40px',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '20px',
          color: colors.text,
        }}>어떻게 <span style={{ color: colors.primary }}>작동</span>하나요?</h2>
        <p style={{
          fontSize: '18px',
          color: colors.textLight,
          textAlign: 'center',
          marginBottom: '80px',
        }}>4단계 자동 시스템으로 완벽한 욕창 예방</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: isMobile ? '12px' : '24px',
          position: 'relative',
        }}>
          {/* 연결선 */}
          <div style={{
            position: 'absolute',
            top: '60px',
            left: '12.5%',
            right: '12.5%',
            height: '2px',
            background: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})`,
            zIndex: 0,
          }} />

          {steps.map((step, i) => (
            <div key={i} className="card-hover" style={{
              background: 'white',
              borderRadius: '20px',
              padding: '32px 24px',
              textAlign: 'center',
              boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
              position: 'relative',
              zIndex: 1,
            }}>
              <div className="icon-hover" style={{
                width: '64px',
                height: '64px',
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                margin: '0 auto 20px',
                boxShadow: '0 8px 24px rgba(46, 125, 110, 0.3)',
              }}>{step.icon}</div>
              <div style={{
                fontSize: '12px',
                fontWeight: '700',
                color: colors.primary,
                marginBottom: '8px',
              }}>STEP {step.num}</div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: colors.text,
                marginBottom: '12px',
              }}>{step.title}</h3>
              <p style={{
                fontSize: '14px',
                color: colors.textLight,
                lineHeight: '1.5',
              }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 제품 동작 과정 섹션
const VideoSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const { isMobile } = useResponsive();
  const images = [
    { src: '/images/healmat1.jpg', title: '평평한 상태', desc: '환자가 힐매트 위에 누워있는 초기 상태' },
    { src: '/images/healmat2.png', title: '에어셀 팽창', desc: '한쪽 에어셀이 팽창하며 상판이 기울어지는 상태' },
    { src: '/images/healmat3.png', title: '체위 변환 완료', desc: '최대 70도까지 기울어져 체위 변환이 완료된 상태' },
  ];

  return (
    <section id="video" style={{
      padding: isMobile ? '60px 20px' : '120px 60px',
      background: 'white',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: isMobile ? '24px' : '40px',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '20px',
          color: colors.text,
        }}>힐매트 <span style={{ color: colors.primary }}>동작 과정</span></h2>
        <p style={{
          fontSize: '18px',
          color: colors.textLight,
          textAlign: 'center',
          marginBottom: '60px',
        }}>실제 힐매트가 작동하는 모습을 확인해보세요</p>

        {/* 이미지 캐러셀 */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
          }}>
            {/* 왼쪽 화살표 */}
            <button
              onClick={() => setCurrentImage((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
              className="btn-circle"
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: 'none',
                background: 'white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                color: colors.primary,
                flexShrink: 0,
              }}
            >
              ←
            </button>

            {/* 이미지 컨테이너 */}
            <div style={{
              flex: 1,
              aspectRatio: '16/9',
              background: 'linear-gradient(145deg, #e8f5f3 0%, #d4ede8 100%)',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(46, 125, 110, 0.15)',
              position: 'relative',
            }}>
              <img
                src={images[currentImage].src}
                alt={images[currentImage].title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* 이미지 로드 실패 시 플레이스홀더 */}
              <div style={{
                display: 'none',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                color: colors.primary,
              }}>
                <div style={{ fontSize: '60px', marginBottom: '16px' }}>🛏️</div>
                <p style={{ fontSize: '16px', fontWeight: '600' }}>{images[currentImage].title}</p>
              </div>

              {/* 이미지 캡션 */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                padding: '40px 30px 30px',
                color: 'white',
              }}>
                <div style={{
                  display: 'inline-block',
                  background: colors.primary,
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: '700',
                  marginBottom: '10px',
                }}>
                  {currentImage + 1} / {images.length}
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '8px' }}>
                  {images[currentImage].title}
                </h3>
                <p style={{ fontSize: '15px', opacity: 0.9 }}>
                  {images[currentImage].desc}
                </p>
              </div>
            </div>

            {/* 오른쪽 화살표 */}
            <button
              onClick={() => setCurrentImage((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
              className="btn-circle"
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: 'none',
                background: colors.primary,
                boxShadow: '0 4px 12px rgba(46, 125, 110, 0.3)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                color: 'white',
                flexShrink: 0,
              }}
            >
              →
            </button>
          </div>

          {/* 인디케이터 */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '24px',
          }}>
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                style={{
                  width: i === currentImage ? '32px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  border: 'none',
                  background: i === currentImage ? colors.primary : '#ccc',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          marginTop: '60px',
        }}>
          {[
            { icon: '🔄', title: '자동 자세 전환', desc: '70도 이상 각도로 완전한 체위 변경' },
            { icon: '🎯', title: '정밀 제어', desc: '4개 에어셀 독립 제어 시스템' },
            { icon: '⏱️', title: '2시간 주기', desc: '의료 가이드라인 준수 자동 전환' },
          ].map((item, i) => (
            <div key={i} className="card-hover" style={{
              background: colors.background,
              borderRadius: '16px',
              padding: '32px',
              textAlign: 'center',
            }}>
              <div className="icon-hover" style={{ fontSize: '40px', marginBottom: '16px', display: 'inline-block' }}>{item.icon}</div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: colors.text,
                marginBottom: '8px',
              }}>{item.title}</h3>
              <p style={{
                fontSize: '14px',
                color: colors.textLight,
                lineHeight: '1.6',
              }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Comparison 섹션
const ComparisonSection = () => {
  const { isMobile } = useResponsive();
  const data = [
    { feature: '가격대', a: '7만원', b: '35만원', c: '80만원', d: '협의' },
    { feature: '내구성', a: '❌ PVC 원단', b: '✅ TPU 원단', c: '✅ CNC 정밀가공', d: '✅ TPU, PC 소재' },
    { feature: '범용성', a: '✅', b: '✅', c: '❌ 병원 사용불가', d: '✅ 병원 침대 규격' },
    { feature: '자세 전환', a: '❌', b: '❌', c: '△ 미미한 각도', d: '✅ 70° 이상' },
  ];

  return (
    <section style={{
      padding: isMobile ? '60px 20px' : '120px 60px',
      background: 'white',
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: isMobile ? '24px' : '40px',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '20px',
          color: colors.text,
        }}>왜 <span style={{ color: colors.primary }}>힐매트</span>인가요?</h2>
        <p style={{
          fontSize: '18px',
          color: colors.textLight,
          textAlign: 'center',
          marginBottom: '60px',
        }}>경쟁 제품과의 명확한 차별점</p>

        <div style={{
          background: colors.background,
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'white' }}>
                <th style={{ padding: '20px', textAlign: 'left', fontWeight: '600' }}>비교 항목</th>
                <th style={{ padding: '20px', textAlign: 'center', fontWeight: '500', color: colors.textLight }}>일반 교대부양</th>
                <th style={{ padding: '20px', textAlign: 'center', fontWeight: '500', color: colors.textLight }}>TPU 교대부양</th>
                <th style={{ padding: '20px', textAlign: 'center', fontWeight: '500', color: colors.textLight }}>각도 전환식</th>
                <th style={{
                  padding: '20px',
                  textAlign: 'center',
                  fontWeight: '700',
                  color: 'white',
                  background: colors.primary,
                }}>힐매트</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} style={{ borderTop: '1px solid #eee' }}>
                  <td style={{ padding: '20px', fontWeight: '600', background: 'white' }}>{row.feature}</td>
                  <td style={{ padding: '20px', textAlign: 'center', color: colors.textLight, background: 'white' }}>{row.a}</td>
                  <td style={{ padding: '20px', textAlign: 'center', color: colors.textLight, background: 'white' }}>{row.b}</td>
                  <td style={{ padding: '20px', textAlign: 'center', color: colors.textLight, background: 'white' }}>{row.c}</td>
                  <td style={{
                    padding: '20px',
                    textAlign: 'center',
                    fontWeight: '700',
                    color: colors.primary,
                    background: `rgba(46, 125, 110, 0.1)`,
                  }}>{row.d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{
          textAlign: 'center',
          marginTop: '40px',
          fontSize: '20px',
          fontWeight: '600',
          color: colors.text,
        }}>
          &ldquo;확실한 자세 전환, <span style={{ color: colors.primary }}>확실한 욕창 예방</span>&rdquo;
        </p>
      </div>
    </section>
  );
};

// 비즈니스 모델 섹션 (새로 추가)
const BusinessModelSection = () => {
  const { isMobile } = useResponsive();
  return (
    <section style={{
      padding: isMobile ? '60px 20px' : '120px 60px',
      background: colors.background,
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: isMobile ? '24px' : '40px',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '20px',
          color: colors.text,
        }}>
          <span style={{ color: colors.primary }}>비즈니스</span> 모델
        </h2>
        <p style={{
          fontSize: '18px',
          color: colors.textLight,
          textAlign: 'center',
          marginBottom: '60px',
        }}>
          복지용구 인증을 통한 B2C/B2B 사업화 전략
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '16px' : '32px',
          marginBottom: '60px',
        }}>
          {/* B2C */}
          <div className="card-hover" style={{
            background: 'white',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
          }}>
            <div className="badge-hover" style={{
              display: 'inline-block',
              padding: '8px 16px',
              background: colors.primary,
              color: 'white',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '20px',
            }}>B2C</div>
            <h3 style={{ fontSize: '24px', fontWeight: '700', color: colors.text, marginBottom: '16px' }}>
              가정 간병 보호자/환자
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                '복지용구 인증으로 장기요양급여 지원',
                '소비자 구매 금전적 부담 감소',
                '의료기기 판매업체 유통망 확보',
              ].map((item, i) => (
                <li key={i} style={{
                  padding: '12px 0',
                  borderBottom: i < 2 ? '1px solid #eee' : 'none',
                  color: colors.textLight,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}>
                  <span style={{ color: colors.primary }}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* B2B */}
          <div className="card-hover" style={{
            background: 'white',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
          }}>
            <div className="badge-hover" style={{
              display: 'inline-block',
              padding: '8px 16px',
              background: colors.secondary,
              color: 'white',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '20px',
            }}>B2B</div>
            <h3 style={{ fontSize: '24px', fontWeight: '700', color: colors.text, marginBottom: '16px' }}>
              종합/대학/재활 병원
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                '고객만족도 및 평가표 기반 영업',
                '대전/군산 의료기관 네트워크 활용',
                '병원 침대 규격에 맞춘 제품 설계',
              ].map((item, i) => (
                <li key={i} style={{
                  padding: '12px 0',
                  borderBottom: i < 2 ? '1px solid #eee' : 'none',
                  color: colors.textLight,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}>
                  <span style={{ color: colors.secondary }}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 복지용구 인증 로드맵 */}
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
        }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '40px',
            color: colors.text,
          }}>복지용구 인증 프로세스</h3>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute',
              top: '24px',
              left: '10%',
              right: '10%',
              height: '4px',
              background: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})`,
              borderRadius: '2px',
            }} />
            {[
              { year: '2025', title: 'SOP 품질 테스트', icon: '📋' },
              { year: '2026', title: 'GMP 심사', icon: '🏭' },
              { year: '2026', title: 'KTL 성능 시험', icon: '🔬' },
              { year: '2026', title: '의료기기 인증', icon: '✅' },
              { year: '2027', title: '복지용구 등록', icon: '🏥' },
            ].map((step, i) => (
              <div key={i} style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'white',
                  border: `3px solid ${colors.primary}`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 12px',
                  fontSize: '20px',
                }}>{step.icon}</div>
                <div style={{ fontSize: '12px', color: colors.primary, fontWeight: '600' }}>{step.year}</div>
                <div style={{ fontSize: '13px', color: colors.text, fontWeight: '500', marginTop: '4px' }}>{step.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Social Proof 섹션
const SocialProofSection = () => {
  const { isMobile } = useResponsive();
  const stats = [
    { num: '9명', label: '의료진 인터뷰', icon: '👨‍⚕️' },
    { num: '10명', label: '보호자 인터뷰', icon: '👨‍👩‍👦' },
    { num: '4개', label: '협력 의료기관', icon: '🏥' },
    { num: '1건', label: '특허 출원 예정', icon: '📋' },
  ];

  const partners = [
    {
      type: '대학병원',
      name: '충남권역 대학병원',
      period: '2024.10 ~ 11',
      content: '간호학과 9명 심층 인터뷰 진행',
      detail: '욕창 케어 현장 니즈 파악 및 제품 요구사항 수집',
      icon: '🏥',
    },
    {
      type: '종합병원',
      name: '대전 소재 종합병원',
      period: '2024.02 ~',
      content: '의료 봉사 활동 및 네트워크 구축',
      detail: '현장 의료진과의 지속적 협력 관계 유지',
      icon: '🩺',
    },
    {
      type: '의료조합',
      name: '지역 의료생활협동조합',
      period: '2025.02',
      content: '환자 인터뷰 및 필드 테스트 네트워크',
      detail: '실제 사용 환경에서의 제품 검증 협력',
      icon: '🤝',
    },
    {
      type: '의료기기 유통',
      name: '군산 의료기기 납품업체',
      period: '2025.02',
      content: '제품 유통 파트너십 협의',
      detail: 'B2B 판로 개척 및 MOU 체결 추진 중',
      icon: '📦',
    },
  ];

  const timeline = [
    { date: '2024.10~11', content: '대학병원 의료진 인터뷰' },
    { date: '2024.11~12', content: '가정 요양 보호자 인터뷰' },
    { date: '2025.01', content: '의료기기 납품업체 인터뷰' },
    { date: '2025.02', content: '의료조합 네트워크 구축' },
    { date: '2025.03', content: '척수 환자 가정 방문' },
  ];

  return (
    <section style={{
      padding: isMobile ? '60px 20px' : '120px 60px',
      background: 'white',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: isMobile ? '24px' : '40px',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '60px',
          color: colors.text,
        }}>검증된 <span style={{ color: colors.primary }}>신뢰</span></h2>

        {/* 통계 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: isMobile ? '12px' : '24px',
          marginBottom: '80px',
        }}>
          {stats.map((stat, i) => (
            <div key={i} className="card-hover" style={{
              background: colors.background,
              borderRadius: '16px',
              padding: '32px',
              textAlign: 'center',
            }}>
              <div className="icon-hover" style={{ fontSize: '40px', marginBottom: '12px', display: 'inline-block' }}>{stat.icon}</div>
              <div className="stat-number" style={{ fontSize: '32px', fontWeight: '700', color: colors.primary }}>{stat.num}</div>
              <div style={{ fontSize: '14px', color: colors.textLight, marginTop: '4px' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 협력 기관 섹션 */}
        <h3 style={{
          fontSize: isMobile ? '20px' : '28px',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '16px',
          color: colors.text,
        }}>협력 <span style={{ color: colors.primary }}>의료기관</span></h3>
        <p style={{
          fontSize: '16px',
          color: colors.textLight,
          textAlign: 'center',
          marginBottom: '40px',
        }}>현장의 목소리를 담아 제품을 완성합니다</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: isMobile ? '16px' : '24px',
          marginBottom: '80px',
        }}>
          {partners.map((partner, i) => (
            <div key={i} className="card-glow" style={{
              background: colors.background,
              borderRadius: '16px',
              padding: isMobile ? '24px' : '32px',
              border: '1px solid rgba(46, 125, 110, 0.1)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  background: 'white',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  flexShrink: 0,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                }}>{partner.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '4px',
                  }}>
                    <span style={{
                      padding: '4px 10px',
                      background: colors.primary,
                      color: 'white',
                      borderRadius: '12px',
                      fontSize: '11px',
                      fontWeight: '600',
                    }}>{partner.type}</span>
                    <span style={{
                      fontSize: '12px',
                      color: colors.textLight,
                    }}>{partner.period}</span>
                  </div>
                  <h4 style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    color: colors.text,
                    marginBottom: '8px',
                  }}>{partner.name}</h4>
                  <p style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: colors.primary,
                    marginBottom: '4px',
                  }}>{partner.content}</p>
                  <p style={{
                    fontSize: '13px',
                    color: colors.textLight,
                    lineHeight: '1.5',
                  }}>{partner.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 협력 요약 메시지 */}
        <div style={{
          background: `linear-gradient(135deg, ${colors.primary}10, ${colors.accent}10)`,
          borderRadius: '16px',
          padding: isMobile ? '24px' : '32px',
          textAlign: 'center',
          marginBottom: '80px',
          border: `1px solid ${colors.primary}20`,
        }}>
          <p style={{
            fontSize: isMobile ? '16px' : '18px',
            color: colors.text,
            lineHeight: '1.8',
            fontWeight: '500',
          }}>
            &ldquo;힐매트는 <span style={{ color: colors.primary, fontWeight: '700' }}>4개 의료기관</span>과의 협력을 통해<br />
            <span style={{ color: colors.primary, fontWeight: '700' }}>19명</span>의 의료진 및 보호자 인터뷰를 바탕으로<br />
            실제 현장의 니즈를 반영한 제품을 개발하고 있습니다.&rdquo;
          </p>
        </div>

        {/* 타임라인 */}
        <h3 style={{
          fontSize: '24px',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '40px',
          color: colors.text,
        }}>사업 추진 타임라인</h3>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'relative',
          padding: '0 40px',
          overflowX: isMobile ? 'auto' : 'visible',
        }}>
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '60px',
            right: '60px',
            height: '2px',
            background: colors.primary,
            opacity: 0.3,
          }} />
          {timeline.map((item, i) => (
            <div key={i} style={{ textAlign: 'center', position: 'relative', zIndex: 1, minWidth: isMobile ? '80px' : 'auto' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: colors.primary,
                borderRadius: '50%',
                margin: '0 auto 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: '700',
                fontSize: '14px',
              }}>{i + 1}</div>
              <div style={{ fontSize: '13px', fontWeight: '600', color: colors.primary }}>{item.date}</div>
              <div style={{ fontSize: '13px', color: colors.textLight, marginTop: '4px', maxWidth: '100px' }}>{item.content}</div>
            </div>
          ))}
        </div>

        {/* 인증 배지 */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '24px',
          marginTop: '80px',
          flexWrap: 'wrap',
        }}>
          {[
            { icon: '🏆', text: 'IP 디딤돌 특허 프로그램 선정' },
            { icon: '🎓', text: '충남대학교 RISE 창업동아리' },
            { icon: '📋', text: '특허 출원 예정' },
            { icon: '🏅', text: '대전대학 창업대회 수상' },
          ].map((badge, i) => (
            <div key={i} className="badge-hover" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px 24px',
              background: colors.background,
              borderRadius: '12px',
              cursor: 'default',
            }}>
              <span style={{ fontSize: '24px' }}>{badge.icon}</span>
              <span style={{ fontSize: '14px', fontWeight: '600', color: colors.text }}>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Team 섹션
const TeamSection = () => {
  const { isMobile } = useResponsive();
  const team = [
    {
      name: '유병훈',
      role: '대표',
      major: '경영학 / 정치외교학',
      desc: '서비스 기획 / S/W 개발 총괄',
    },
    {
      name: '박선제',
      role: '팀원',
      major: '유기재료공학',
      desc: '서비스 기획 / S/W 개발',
    },
    {
      name: '박정빈',
      role: '팀원',
      major: '경영학 / 창업경영학',
      desc: '서비스 기획 / S/W 개발',
    },
  ];

  return (
    <section id="team" style={{
      padding: isMobile ? '60px 20px' : '120px 60px',
      background: colors.background,
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: isMobile ? '24px' : '40px',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '20px',
          color: colors.text,
        }}>
          <span style={{ color: colors.primary }}>모르포 메디테크</span> 팀
        </h2>
        <p style={{
          fontSize: '18px',
          color: colors.textLight,
          textAlign: 'center',
          marginBottom: '60px',
        }}>경영학 + 재료공학 융합 팀</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: isMobile ? '16px' : '32px',
        }}>
          {team.map((member, i) => (
            <div key={i} className="card-hover" style={{
              background: 'white',
              borderRadius: '20px',
              padding: '40px 32px',
              textAlign: 'center',
              boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
            }}>
              <div className="icon-hover" style={{
                width: '100px',
                height: '100px',
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                borderRadius: '50%',
                margin: '0 auto 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '36px',
                color: 'white',
                fontWeight: '700',
              }}>{member.name[0]}</div>
              <div style={{
                display: 'inline-block',
                padding: '4px 12px',
                background: i === 0 ? colors.primary : colors.background,
                color: i === 0 ? 'white' : colors.textLight,
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: '600',
                marginBottom: '12px',
              }}>{member.role}</div>
              <h3 style={{
                fontSize: '22px',
                fontWeight: '700',
                color: colors.text,
                marginBottom: '8px',
              }}>{member.name}</h3>
              <p style={{
                fontSize: '14px',
                color: colors.primary,
                fontWeight: '500',
                marginBottom: '8px',
              }}>{member.major}</p>
              <p style={{
                fontSize: '13px',
                color: colors.textMuted,
              }}>{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA 섹션
const CTASection = () => {
  const { isMobile } = useResponsive();
  return (
    <section id="contact" style={{
      padding: isMobile ? '60px 20px' : '120px 60px',
      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{
          fontSize: isMobile ? '24px' : '40px',
          fontWeight: '700',
          marginBottom: '16px',
          color: 'white',
        }}>
          가족의 편안한 일상,<br />힐매트가 함께합니다
        </h2>
        <p style={{
          fontSize: '18px',
          color: 'rgba(255,255,255,0.8)',
          marginBottom: '48px',
        }}>
          제품 상담 및 시연 문의를 남겨주세요.<br />
          담당자가 빠르게 연락드립니다.
        </p>

        <div style={{
          background: 'white',
          borderRadius: '24px',
          padding: '48px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
            fontSize: '36px',
          }}>
            📋
          </div>

          <h3 style={{
            fontSize: '24px',
            fontWeight: '700',
            color: colors.text,
            marginBottom: '12px',
          }}>
            무료 상담 신청
          </h3>

          <p style={{
            fontSize: '15px',
            color: colors.textLight,
            marginBottom: '32px',
            lineHeight: '1.6',
          }}>
            아래 버튼을 클릭하여 간단한 정보를 입력해주시면<br />
            담당자가 빠르게 연락드립니다.
          </p>

          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{
              display: 'block',
              width: '100%',
              padding: '20px',
              background: colors.secondary,
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '18px',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(255, 140, 66, 0.3)',
              textDecoration: 'none',
              boxSizing: 'border-box',
            }}
          >
            상담 신청하기
          </a>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            marginTop: '24px',
            flexWrap: 'wrap',
          }}>
            {[
              { icon: '✅', text: '개인 구매 문의' },
              { icon: '✅', text: '기관 납품 문의' },
              { icon: '✅', text: '투자 문의' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '13px',
                color: colors.textLight,
              }}>
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 보조 CTA */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '32px',
          marginTop: '32px',
        }}>
          <a href="mailto:byunghun0501@gmail.com" style={{
            color: 'rgba(255,255,255,0.9)',
            textDecoration: 'none',
            fontSize: '15px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            byunghun0501@gmail.com
          </a>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
          <a href="tel:010-4576-9596" style={{
            color: 'rgba(255,255,255,0.9)',
            textDecoration: 'none',
            fontSize: '15px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            010-4576-9596
          </a>
        </div>
      </div>
    </section>
  );
};

// FAQ 섹션
const FAQSection = () => {
  const { isMobile } = useResponsive();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: '힐매트는 어떤 환자에게 적합한가요?',
      answer: '힐매트는 장기 와병 환자, 척수 손상 환자, 뇌졸중 후 마비 환자, 고령으로 인한 거동 불편 환자 등 스스로 체위 변환이 어려운 모든 분들께 적합합니다. 특히 욕창 예방이 필요하거나, 보호자의 체위 변환 부담을 줄이고자 하는 경우에 효과적입니다.'
    },
    {
      question: '기존 침대에 설치할 수 있나요?',
      answer: '네, 힐매트는 기존 병원용 침대나 가정용 침대 위에 간단히 설치할 수 있도록 설계되었습니다. 별도의 공사나 침대 교체 없이 매트리스 형태로 올려놓기만 하면 됩니다.'
    },
    {
      question: '70도 자세 변환이 안전한가요?',
      answer: '힐매트의 70도 자세 변환은 의료 가이드라인에 따라 설계되었습니다. 급격한 움직임이 아닌 점진적인 공기압 조절로 부드럽게 자세가 변환되며, 환자의 안전을 최우선으로 고려했습니다. 또한 낙상 방지를 위한 안전 가드도 함께 제공됩니다.'
    },
    {
      question: '자세 변환 주기를 조절할 수 있나요?',
      answer: '네, 의료진의 권고에 따라 30분~4시간 사이에서 자세 변환 주기를 자유롭게 설정할 수 있습니다. 기본 설정은 욕창 예방 가이드라인에 따른 2시간 주기입니다.'
    },
    {
      question: '소음이 심하지 않나요?',
      answer: '힐매트는 저소음 공압 시스템을 적용하여 환자의 수면을 방해하지 않습니다. 작동 시 발생하는 소음은 40dB 이하로, 도서관 수준의 조용한 소리입니다.'
    },
    {
      question: '제품 가격과 구매 방법이 궁금합니다.',
      answer: '힐매트의 가격은 사용 환경과 필요한 기능에 따라 상담 후 안내드리고 있습니다. 상단의 "상담 신청" 버튼을 통해 문의해주시면, 담당자가 자세한 제품 설명과 함께 가격을 안내해드립니다. 병원/요양시설 대량 구매 시 별도 할인이 적용됩니다.'
    },
    {
      question: 'A/S 및 보증 기간은 어떻게 되나요?',
      answer: '힐매트는 제품 구매일로부터 2년간 무상 A/S를 제공합니다. 제품 문제 발생 시 전문 서비스 기사가 방문하여 점검 및 수리를 진행합니다. 소모품(에어셀 등)은 별도로 구매 가능합니다.'
    },
  ];

  return (
    <section id="faq" style={{
      padding: isMobile ? '60px 20px' : '120px 60px',
      background: colors.background,
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: isMobile ? '24px' : '40px',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '20px',
          color: colors.text,
        }}>
          자주 묻는 <span style={{ color: colors.primary }}>질문</span>
        </h2>
        <p style={{
          fontSize: isMobile ? '14px' : '18px',
          color: colors.textLight,
          textAlign: 'center',
          marginBottom: isMobile ? '32px' : '60px',
        }}>
          힐매트에 대해 궁금하신 점을 확인해보세요
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                transition: 'box-shadow 0.3s ease',
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{
                  width: '100%',
                  padding: isMobile ? '20px' : '24px 32px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span style={{
                  fontSize: isMobile ? '15px' : '18px',
                  fontWeight: '600',
                  color: openIndex === index ? colors.primary : colors.text,
                  paddingRight: '16px',
                  transition: 'color 0.3s ease',
                }}>
                  {faq.question}
                </span>
                <span style={{
                  fontSize: '24px',
                  color: colors.primary,
                  transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0)',
                  transition: 'transform 0.3s ease',
                  flexShrink: 0,
                }}>
                  +
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                style={{
                  maxHeight: openIndex === index ? '500px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease, padding 0.3s ease',
                }}
              >
                <p style={{
                  padding: isMobile ? '0 20px 20px' : '0 32px 24px',
                  fontSize: isMobile ? '14px' : '16px',
                  color: colors.textLight,
                  lineHeight: '1.7',
                }}>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 추가 문의 안내 */}
        <div style={{
          marginTop: '48px',
          textAlign: 'center',
          padding: '32px',
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
        }}>
          <p style={{
            fontSize: isMobile ? '15px' : '18px',
            color: colors.text,
            marginBottom: '16px',
          }}>
            더 궁금한 점이 있으신가요?
          </p>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              display: 'inline-block',
              padding: '14px 32px',
              background: colors.primary,
              color: 'white',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: '600',
              textDecoration: 'none',
            }}
          >
            1:1 문의하기
          </a>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = ({ onOpenPrivacy, onOpenTerms }) => {
  const { isMobile } = useResponsive();
  return (
  <footer style={{
    padding: isMobile ? '40px 20px' : '60px',
    background: colors.text,
    color: 'rgba(255,255,255,0.7)',
  }}>
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr 1fr 1fr',
      gap: isMobile ? '32px' : '60px',
    }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
          <div style={{
            width: '36px',
            height: '36px',
            background: colors.primary,
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
          }}>H</div>
          <span style={{ fontSize: '18px', fontWeight: '700', color: 'white' }}>힐매트</span>
        </div>
        <p style={{ fontSize: '14px', lineHeight: '1.7', marginBottom: '16px' }}>
          모르포 메디테크 (Morpho Meditech)<br />
          생명/의료공학 분야
        </p>
        <p style={{ fontSize: '14px' }}>
          010-4576-9596<br />
          byunghun0501@gmail.com
        </p>
      </div>

      <div>
        <h4 style={{ color: 'white', fontSize: '15px', fontWeight: '600', marginBottom: '20px' }}>제품</h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {[
            { label: '제품 소개', href: '#product' },
            { label: '기술', href: '#technology' },
            { label: 'FAQ', href: '#faq' },
            { label: '문의', href: '#contact' },
          ].map((item) => (
            <li key={item.label} style={{ marginBottom: '12px' }}>
              <a href={item.href} className="footer-link" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '14px', display: 'inline-block' }}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 style={{ color: 'white', fontSize: '15px', fontWeight: '600', marginBottom: '20px' }}>회사</h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {[
            { label: '팀 소개', href: '#team' },
          ].map((item) => (
            <li key={item.label} style={{ marginBottom: '12px' }}>
              <a href={item.href} className="footer-link" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '14px', display: 'inline-block' }}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 style={{ color: 'white', fontSize: '15px', fontWeight: '600', marginBottom: '20px' }}>법적 고지</h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '12px' }}>
            <button
              onClick={onOpenPrivacy}
              className="footer-link"
              style={{
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                fontSize: '14px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              개인정보처리방침
            </button>
          </li>
          <li style={{ marginBottom: '12px' }}>
            <button
              onClick={onOpenTerms}
              className="footer-link"
              style={{
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                fontSize: '14px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              이용약관
            </button>
          </li>
        </ul>
      </div>
    </div>

    <div style={{
      maxWidth: '1200px',
      margin: '40px auto 0',
      paddingTop: '30px',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <p style={{ fontSize: '13px' }}>© 2025 Morpho Meditech. All rights reserved.</p>
    </div>
  </footer>
  );
};

// 메인 앱
export default function HealMatLandingPage() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <div>
      <GNB />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TestResultSection />
      <HowItWorksSection />
      <VideoSection />
      <ComparisonSection />
      <BusinessModelSection />
      <SocialProofSection />
      <TeamSection />
      <CTASection />
      <FAQSection />
      <Footer
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenTerms={() => setTermsOpen(true)}
      />

      {/* 법적 고지 팝업 */}
      <LegalPopup
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
        title="개인정보처리방침"
        content={PRIVACY_POLICY}
      />
      <LegalPopup
        isOpen={termsOpen}
        onClose={() => setTermsOpen(false)}
        title="이용약관"
        content={TERMS_OF_SERVICE}
      />
    </div>
  );
}
