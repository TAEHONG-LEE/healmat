import React, { useState, useEffect } from 'react';

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

// 숫자 카운트업 애니메이션 훅
const useCountUp = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration, start]);

  return [count, setIsVisible];
};

// GNB 컴포넌트
const GNB = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 60px',
      background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none',
      zIndex: 1000,
      transition: 'all 0.3s ease',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{
          width: '40px',
          height: '40px',
          background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '18px',
        }}>H</div>
        <span style={{ fontSize: '20px', fontWeight: '700', color: colors.text }}>힐매트</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
        {['제품 소개', '기술', '팀 소개', '문의'].map((item) => (
          <a key={item} href="#" style={{
            color: colors.text,
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: '500',
            transition: 'color 0.2s',
          }}>{item}</a>
        ))}
        <button style={{
          padding: '12px 24px',
          background: colors.primary,
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '600',
          cursor: 'pointer',
        }}>상담 신청</button>
      </div>
    </nav>
  );
};

// Hero 섹션
const HeroSection = () => (
  <section style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: '100px 60px 60px',
    background: `linear-gradient(135deg, ${colors.background} 0%, #E8F5F3 100%)`,
  }}>
    <div style={{
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '80px',
      alignItems: 'center',
      width: '100%',
    }}>
      {/* 제품 이미지 영역 */}
      <div style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div style={{
          width: '480px',
          height: '400px',
          background: 'linear-gradient(145deg, #e8f5f3 0%, #d4ede8 100%)',
          borderRadius: '24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 20px 60px rgba(46, 125, 110, 0.15)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* 매트리스 시각화 */}
          <div style={{
            width: '320px',
            height: '200px',
            background: 'linear-gradient(180deg, #3d9d8a 0%, #2E7D6E 100%)',
            borderRadius: '12px',
            position: 'relative',
            transform: 'perspective(800px) rotateX(20deg) rotateY(-10deg)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.2)',
          }}>
            {/* 에어셀 표현 */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '8px',
              padding: '20px',
              height: '100%',
              boxSizing: 'border-box',
            }}>
              {[0, 1, 2, 3].map((i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: '8px',
                  animation: `pulse ${1.5 + i * 0.3}s ease-in-out infinite`,
                }} />
              ))}
            </div>
            {/* 각도 표시 */}
            <div style={{
              position: 'absolute',
              right: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: colors.secondary,
              color: 'white',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '700',
            }}>70°</div>
          </div>
          <p style={{
            marginTop: '30px',
            color: colors.primary,
            fontSize: '14px',
            fontWeight: '600',
          }}>🔄 자동 자세 변환 중...</p>
        </div>
      </div>

      {/* 텍스트 영역 */}
      <div>
        <h1 style={{
          fontSize: '52px',
          fontWeight: '700',
          lineHeight: '1.2',
          color: colors.text,
          marginBottom: '24px',
        }}>
          <span style={{ color: colors.primary }}>70도</span> 자동 자세 변환,<br />
          이제 욕창 걱정 없이<br />
          편안하게
        </h1>
        <p style={{
          fontSize: '20px',
          color: colors.textLight,
          marginBottom: '40px',
          lineHeight: '1.6',
        }}>
          오리가미 기술로 완성한 스마트 욕창예방매트리스,<br />
          <strong style={{ color: colors.primary }}>힐매트</strong>
        </p>
        <div style={{ display: 'flex', gap: '16px', marginBottom: '40px' }}>
          <button style={{
            padding: '18px 36px',
            background: colors.primary,
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(46, 125, 110, 0.3)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}>제품 상담 신청하기</button>
          <button style={{
            padding: '18px 36px',
            background: 'transparent',
            color: colors.primary,
            border: `2px solid ${colors.primary}`,
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>▶ 제품 영상 보기</button>
        </div>
        {/* 신뢰 배지 */}
        <div style={{ display: 'flex', gap: '16px' }}>
          {['🏆 IP 디딤돌 특허 프로그램', '🎓 충남대학교 창업동아리'].map((badge) => (
            <span key={badge} style={{
              padding: '8px 16px',
              background: 'rgba(46, 125, 110, 0.1)',
              borderRadius: '20px',
              fontSize: '13px',
              color: colors.primary,
              fontWeight: '500',
            }}>{badge}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// Problem 섹션
const ProblemSection = () => {
  const stats = [
    { icon: '📈', value: 22, suffix: '%', label: '환자 증가', desc: '21,700 → 26,600명 (3년간)' },
    { icon: '👨‍⚕️', value: 6.9, suffix: '명', label: '간호사 부족', desc: 'OECD 평균 9명 대비' },
    { icon: '💰', value: 370, suffix: '만원', label: '월 간병비', desc: '가정 간병인 기준' },
  ];

  return (
    <section style={{
      padding: '120px 60px',
      background: colors.background,
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '40px',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '60px',
          color: colors.text,
        }}>
          욕창, 왜 이렇게 <span style={{ color: colors.primary }}>관리가 어려울까요?</span>
        </h2>

        {/* 통계 카드 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '32px',
          marginBottom: '60px',
        }}>
          {stats.map((stat, i) => (
            <div key={i} style={{
              background: 'white',
              borderRadius: '20px',
              padding: '40px 32px',
              textAlign: 'center',
              boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'default',
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>{stat.icon}</div>
              <div style={{
                fontSize: '48px',
                fontWeight: '700',
                color: colors.primary,
                marginBottom: '8px',
              }}>
                {stat.value}{stat.suffix}
              </div>
              <div style={{
                fontSize: '18px',
                fontWeight: '600',
                color: colors.text,
                marginBottom: '8px',
              }}>{stat.label}</div>
              <div style={{
                fontSize: '14px',
                color: colors.textMuted,
              }}>{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* 인용문 */}
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          background: 'white',
          borderRadius: '20px',
          padding: '48px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute',
            top: '24px',
            left: '32px',
            fontSize: '64px',
            color: colors.primary,
            opacity: 0.2,
            lineHeight: 1,
          }}>"</div>
          <p style={{
            fontSize: '22px',
            fontStyle: 'italic',
            color: colors.text,
            lineHeight: '1.7',
            marginBottom: '24px',
            paddingLeft: '20px',
          }}>
            남편이 1시간마다 자세를 바꿔달라고 해서<br />
            이제는 <span style={{ color: colors.secondary, fontWeight: '600' }}>어깨랑 손목이 너무 아파요.</span>
          </p>
          <p style={{
            fontSize: '16px',
            color: colors.textLight,
            paddingLeft: '20px',
          }}>— 60대, 전신 마비 환자 10년 간병 중</p>
        </div>
      </div>
    </section>
  );
};

// Solution 섹션
const SolutionSection = () => {
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

  return (
    <section style={{
      padding: '120px 60px',
      background: 'white',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '40px',
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

        {/* 제품 뷰어 */}
        <div style={{
          background: `linear-gradient(135deg, ${colors.background} 0%, #E8F5F3 100%)`,
          borderRadius: '24px',
          padding: '60px',
          marginBottom: '60px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div style={{
            width: '600px',
            height: '350px',
            background: 'linear-gradient(145deg, #f0f8f6 0%, #d4ede8 100%)',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}>
            {/* 3D 매트리스 표현 */}
            <div style={{
              width: '400px',
              height: '180px',
              background: `linear-gradient(180deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
              borderRadius: '16px',
              position: 'relative',
              transform: 'perspective(1000px) rotateX(15deg)',
              boxShadow: '0 40px 80px rgba(0,0,0,0.2)',
            }}>
              <div style={{
                position: 'absolute',
                inset: '16px',
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '12px',
              }}>
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} style={{
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    color: 'rgba(255,255,255,0.6)',
                  }}>셀 {i + 1}</div>
                ))}
              </div>
            </div>
            <div style={{
              display: 'flex',
              gap: '12px',
              marginTop: '24px',
            }}>
              <button style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: `2px solid ${colors.primary}`,
                background: 'white',
                color: colors.primary,
                cursor: 'pointer',
                fontSize: '16px',
              }}>◀</button>
              <button style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: `2px solid ${colors.primary}`,
                background: 'white',
                color: colors.primary,
                cursor: 'pointer',
                fontSize: '16px',
              }}>▶</button>
            </div>
            <p style={{
              marginTop: '12px',
              fontSize: '14px',
              color: colors.textLight,
            }}>드래그하여 360° 회전</p>
          </div>
        </div>

        {/* 기능 카드 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '32px',
        }}>
          {features.map((feature, i) => (
            <div key={i} style={{
              background: colors.background,
              borderRadius: '20px',
              padding: '40px 32px',
              textAlign: 'center',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}>
              <div style={{
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

// How It Works 섹션
const HowItWorksSection = () => {
  const steps = [
    { num: '01', title: '스마트 감지', desc: '사용자 체형과 무게에 맞춰 자동 조절', icon: '📡' },
    { num: '02', title: '공기압 제어', desc: '4개 에어셀 독립 제어로 정밀한 자세 변환', icon: '🎛️' },
    { num: '03', title: '각도 전환', desc: '70도 이상 극적인 각도로 완전한 체위 변경', icon: '↗️' },
    { num: '04', title: '압력 분산', desc: '혈액순환 개선 및 욕창 예방/치료 지원', icon: '💚' },
  ];

  return (
    <section style={{
      padding: '120px 60px',
      background: `linear-gradient(180deg, white 0%, ${colors.background} 100%)`,
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '40px',
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
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
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
            <div key={i} style={{
              background: 'white',
              borderRadius: '20px',
              padding: '32px 24px',
              textAlign: 'center',
              boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
              position: 'relative',
              zIndex: 1,
            }}>
              <div style={{
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

        {/* 비디오 섹션 */}
        <div style={{
          marginTop: '80px',
          background: colors.text,
          borderRadius: '24px',
          padding: '80px',
          textAlign: 'center',
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
            cursor: 'pointer',
            border: '2px solid rgba(255,255,255,0.3)',
          }}>
            <span style={{ fontSize: '32px', color: 'white', marginLeft: '4px' }}>▶</span>
          </div>
          <p style={{ color: 'white', fontSize: '18px', fontWeight: '500' }}>실제 작동 영상 보기</p>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', marginTop: '8px' }}>45kg, 77kg, 95kg 체중별 테스트 영상</p>
        </div>
      </div>
    </section>
  );
};

// Comparison 섹션
const ComparisonSection = () => {
  const data = [
    { feature: '가격대', a: '7만원', b: '35만원', c: '80만원', d: '협의' },
    { feature: '내구성', a: '❌', b: '✅', c: '✅', d: '✅' },
    { feature: '범용성', a: '✅', b: '✅', c: '❌', d: '✅' },
    { feature: '자세 전환', a: '❌', b: '❌', c: '△', d: '✅ 70°' },
  ];

  return (
    <section style={{
      padding: '120px 60px',
      background: colors.background,
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '40px',
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
          background: 'white',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: colors.background }}>
                <th style={{ padding: '20px', textAlign: 'left', fontWeight: '600' }}>비교 항목</th>
                <th style={{ padding: '20px', textAlign: 'center', fontWeight: '500', color: colors.textLight }}>일반 교대부양</th>
                <th style={{ padding: '20px', textAlign: 'center', fontWeight: '500', color: colors.textLight }}>TPU 교대부양</th>
                <th style={{ padding: '20px', textAlign: 'center', fontWeight: '500', color: colors.textLight }}>각도 전환식</th>
                <th style={{
                  padding: '20px',
                  textAlign: 'center',
                  fontWeight: '700',
                  color: colors.primary,
                  background: `rgba(46, 125, 110, 0.1)`,
                }}>힐매트 ✨</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} style={{ borderTop: '1px solid #eee' }}>
                  <td style={{ padding: '20px', fontWeight: '600' }}>{row.feature}</td>
                  <td style={{ padding: '20px', textAlign: 'center', color: colors.textLight }}>{row.a}</td>
                  <td style={{ padding: '20px', textAlign: 'center', color: colors.textLight }}>{row.b}</td>
                  <td style={{ padding: '20px', textAlign: 'center', color: colors.textLight }}>{row.c}</td>
                  <td style={{
                    padding: '20px',
                    textAlign: 'center',
                    fontWeight: '700',
                    color: colors.primary,
                    background: `rgba(46, 125, 110, 0.05)`,
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
          "확실한 자세 전환, <span style={{ color: colors.primary }}>확실한 욕창 예방</span>"
        </p>
      </div>
    </section>
  );
};

// Social Proof 섹션
const SocialProofSection = () => {
  const stats = [
    { num: '9명', label: '의료진 인터뷰', icon: '👨‍⚕️' },
    { num: '10명', label: '보호자 인터뷰', icon: '👨‍👩‍👦' },
    { num: '3개', label: '의료 네트워크', icon: '🏥' },
    { num: '1건', label: '특허 출원 예정', icon: '📋' },
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
      padding: '120px 60px',
      background: 'white',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '40px',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '60px',
          color: colors.text,
        }}>검증된 <span style={{ color: colors.primary }}>신뢰</span></h2>

        {/* 통계 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
          marginBottom: '80px',
        }}>
          {stats.map((stat, i) => (
            <div key={i} style={{
              background: colors.background,
              borderRadius: '16px',
              padding: '32px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>{stat.icon}</div>
              <div style={{ fontSize: '32px', fontWeight: '700', color: colors.primary }}>{stat.num}</div>
              <div style={{ fontSize: '14px', color: colors.textLight, marginTop: '4px' }}>{stat.label}</div>
            </div>
          ))}
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
            <div key={i} style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
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
        }}>
          {[
            { icon: '🏆', text: 'IP 디딤돌 특허 프로그램 선정' },
            { icon: '🎓', text: '충남대학교 RISE 창업동아리' },
            { icon: '📋', text: '특허 출원 예정' },
          ].map((badge, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px 24px',
              background: colors.background,
              borderRadius: '12px',
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
  const team = [
    { name: '유병훈', role: '대표', dept: '충남대 경영학부', desc: '서비스 기획 / S/W 개발 총괄', highlight: '대전대학 창업대회 수상' },
    { name: '박선제', role: '팀원', dept: '충남대 유기재료공학과', desc: '서비스 기획 / S/W 개발', highlight: '' },
    { name: '박정빈', role: '팀원', dept: '충남대 경영학부', desc: '서비스 기획 / S/W 개발', highlight: '' },
  ];

  return (
    <section style={{
      padding: '120px 60px',
      background: colors.background,
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '40px',
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
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '32px',
        }}>
          {team.map((member, i) => (
            <div key={i} style={{
              background: 'white',
              borderRadius: '20px',
              padding: '40px 32px',
              textAlign: 'center',
              boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
            }}>
              <div style={{
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
                marginBottom: '4px',
              }}>{member.name}</h3>
              <p style={{
                fontSize: '14px',
                color: colors.textLight,
                marginBottom: '12px',
              }}>{member.dept}</p>
              <p style={{
                fontSize: '13px',
                color: colors.textMuted,
              }}>{member.desc}</p>
              {member.highlight && (
                <p style={{
                  fontSize: '12px',
                  color: colors.primary,
                  marginTop: '12px',
                  fontWeight: '500',
                }}>🏆 {member.highlight}</p>
              )}
            </div>
          ))}
        </div>

        {/* 지도교수 */}
        <div style={{
          marginTop: '40px',
          background: 'white',
          borderRadius: '16px',
          padding: '24px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
        }}>
          <span style={{ fontSize: '14px', color: colors.textLight }}>지도교수</span>
          <span style={{ fontSize: '18px', fontWeight: '600', color: colors.text }}>유태우</span>
          <span style={{ fontSize: '14px', color: colors.textLight }}>산학협력중점교수</span>
        </div>
      </div>
    </section>
  );
};

// CTA 섹션
const CTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    type: '',
    message: '',
  });

  return (
    <section style={{
      padding: '120px 60px',
      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '40px',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '16px',
          color: 'white',
        }}>
          가족의 편안한 일상,<br />힐매트가 함께합니다
        </h2>
        <p style={{
          fontSize: '18px',
          color: 'rgba(255,255,255,0.8)',
          textAlign: 'center',
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            <div>
              <label style={{ fontSize: '14px', fontWeight: '600', color: colors.text, display: 'block', marginBottom: '8px' }}>
                이름 <span style={{ color: colors.secondary }}>*</span>
              </label>
              <input
                type="text"
                placeholder="홍길동"
                style={{
                  width: '100%',
                  padding: '16px',
                  border: '2px solid #eee',
                  borderRadius: '12px',
                  fontSize: '15px',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box',
                }}
              />
            </div>
            <div>
              <label style={{ fontSize: '14px', fontWeight: '600', color: colors.text, display: 'block', marginBottom: '8px' }}>
                연락처 <span style={{ color: colors.secondary }}>*</span>
              </label>
              <input
                type="tel"
                placeholder="010-1234-5678"
                style={{
                  width: '100%',
                  padding: '16px',
                  border: '2px solid #eee',
                  borderRadius: '12px',
                  fontSize: '15px',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '14px', fontWeight: '600', color: colors.text, display: 'block', marginBottom: '8px' }}>
              이메일
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              style={{
                width: '100%',
                padding: '16px',
                border: '2px solid #eee',
                borderRadius: '12px',
                fontSize: '15px',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '14px', fontWeight: '600', color: colors.text, display: 'block', marginBottom: '8px' }}>
              문의 유형 <span style={{ color: colors.secondary }}>*</span>
            </label>
            <select
              style={{
                width: '100%',
                padding: '16px',
                border: '2px solid #eee',
                borderRadius: '12px',
                fontSize: '15px',
                outline: 'none',
                background: 'white',
                boxSizing: 'border-box',
              }}
            >
              <option value="">선택해주세요</option>
              <option value="personal">개인 구매 문의</option>
              <option value="b2b">기관 납품 문의</option>
              <option value="invest">투자 문의</option>
              <option value="other">기타</option>
            </select>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <label style={{ fontSize: '14px', fontWeight: '600', color: colors.text, display: 'block', marginBottom: '8px' }}>
              상세 문의
            </label>
            <textarea
              placeholder="문의 내용을 입력해주세요"
              rows={4}
              style={{
                width: '100%',
                padding: '16px',
                border: '2px solid #eee',
                borderRadius: '12px',
                fontSize: '15px',
                outline: 'none',
                resize: 'none',
                fontFamily: 'inherit',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <button style={{
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
          }}>
            무료 상담 신청하기
          </button>
        </div>

        {/* 보조 CTA */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '32px',
          marginTop: '32px',
        }}>
          <a href="#" style={{
            color: 'rgba(255,255,255,0.9)',
            textDecoration: 'none',
            fontSize: '15px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            📄 카탈로그 다운로드
          </a>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
          <a href="tel:042-821-5957" style={{
            color: 'rgba(255,255,255,0.9)',
            textDecoration: 'none',
            fontSize: '15px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            📞 042-821-5957
          </a>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => (
  <footer style={{
    padding: '60px',
    background: colors.text,
    color: 'rgba(255,255,255,0.7)',
  }}>
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: '60px',
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
          충남대학교 창업지원단
        </p>
        <p style={{ fontSize: '14px' }}>
          📞 042-821-5957<br />
          ✉️ startupedu@cnu.ac.kr
        </p>
      </div>

      <div>
        <h4 style={{ color: 'white', fontSize: '15px', fontWeight: '600', marginBottom: '20px' }}>제품</h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {['제품 소개', '기술', '비교', 'FAQ'].map((item) => (
            <li key={item} style={{ marginBottom: '12px' }}>
              <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '14px' }}>{item}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 style={{ color: 'white', fontSize: '15px', fontWeight: '600', marginBottom: '20px' }}>회사</h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {['팀 소개', '연혁', '뉴스'].map((item) => (
            <li key={item} style={{ marginBottom: '12px' }}>
              <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '14px' }}>{item}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 style={{ color: 'white', fontSize: '15px', fontWeight: '600', marginBottom: '20px' }}>법적 고지</h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {['개인정보처리방침', '이용약관'].map((item) => (
            <li key={item} style={{ marginBottom: '12px' }}>
              <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '14px' }}>{item}</a>
            </li>
          ))}
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
      <div style={{ display: 'flex', gap: '16px' }}>
        {['Instagram', 'YouTube', 'Blog'].map((sns) => (
          <a key={sns} href="#" style={{
            width: '36px',
            height: '36px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textDecoration: 'none',
            fontSize: '12px',
          }}>{sns[0]}</a>
        ))}
      </div>
    </div>
  </footer>
);

// 메인 앱
export default function HealMatLandingPage() {
  return (
    <div style={{ fontFamily: "'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <GNB />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <ComparisonSection />
      <SocialProofSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </div>
  );
}
