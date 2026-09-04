# 주식 스캐너 PRO

한국/미국 주요 종목을 서버에서 분석하고 RSI·MACD·다이버전스·이동평균·거래량·지지/저항을 종합해 TOP 10을 계산합니다.

## 현재 구성
- KOSPI/KOSDAQ 50개 + NYSE/NASDAQ 주요 종목 50개
- RSI(14), MACD(12,26,9)
- RSI 상승/하락 다이버전스
- 20/50/200일 이동평균
- 거래량 비율, ATR
- 지지/저항 및 추세
- 0~100 종합점수
- 기술적 진입/손절/목표/R:R 참고값
- 모바일 반응형 화면
- `/api/top10`, `/api/scan`
- 평일 23:00 UTC Cron = 한국시간 오전 8시(서머타임과 무관하게 UTC 기준)

## 중요한 한계
현재 Vercel Hobby의 Cron은 하루 1회만 가능합니다. 전체 거래소 전 종목을 한 번에 스캔하면 실행시간/데이터 API 제한에 걸릴 수 있으므로, 운영 단계에서는 데이터 공급 API와 DB를 붙여 배치 처리하는 것을 권장합니다.

Yahoo Finance chart endpoint는 비공식이고 요청 제한이 공개되지 않았으므로 프로덕션 상용 서비스의 장기 데이터 공급원으로는 적합하지 않을 수 있습니다.

## 실행
npm install
npm run dev

## Vercel
프로젝트를 Vercel에 연결한 뒤 Production 배포. 필요하면 Settings > Environment Variables에서 CRON_SECRET을 설정하세요.
