# Total Cabinet Supplies (TCS) — Website Renewal Brief & Implementation Spec

> **문서 목적**: 본 문서는 Total Cabinet Supplies(TCS) 웹사이트의 전면 개편을 위해 브레인스토밍 및 합의된 모든 기획, 디자인 시스템, 차별화 전략, 콘텐츠 구조를 집대성한 공식 프로젝트 브리프입니다. Claude Code 또는 다른 개발 환경에서 즉시 실행 컨텍스트로 활용할 수 있습니다.

---

## 1. 프로젝트 핵심 정보

- **브랜드명**: Total Cabinet Supplies (TCS)
- **위치**: 68 Compton Rd, Woodridge QLD, Australia
- **연락처**: 07 3299 1978 | totalcabinetsupplies@gmail.com
- **핵심 업종**: 주문 제작형 플랫팩 캐비넷 및 트레이드 부자재 전문 제조업체 (Custom Flat Pack & Cabinetry Manufacturer)
- **운영 원칙**: **TCS는 캐비넷을 제조/공급만 하며, 현장 설치(시공)는 제공하지 않습니다.**
- **플랫폼 파트너십**: **goCabinets** (TCS 로고가 적용된 화이트라벨 3D 설계 및 온라인 발주 시스템 연동)

---

## 2. 타깃 고객군 (Dual-Track Approach)

1. **Trade Customers (빌더, 카펜터, 캐비넷 인스톨러)**
   - **Pain Point**: 현장에서 치수 안 맞아 자르고 깎느라 버리는 시간, 하청업체 일정 지연, 치수 수정 시 3~4주 대기.
   - **TCS Solution**: 도면 그대로 System 32 정밀 가공 및 개별 라벨링 완비, **Woodridge 로컬 공장의 당일/익일 신속 재가공 지원**, **goCabinets를 통한 24/7 온라인 즉시 발주**.
2. **Homeowners & Renovators (일반 주방/옷장 리노베이션 고객)**
   - **Pain Point**: IKEA/Kaboodle 같은 기성품의 획일적인 규격(300/600/900mm)으로 인한 공간 낭비와 폼 안 나는 마감, 고가 맞춤 가구 업체의 과도한 거품.
   - **TCS Solution**: 내 집 벽과 천장에 1mm 오차 없이 딱 맞추는 **밀리미터 완전 맞춤**, 호주산 고품질 보드 + Blum 하드웨어, 손쉬운 3D 견적 플래너 지원.

---

## 3. 핵심 차별화 포인트

| 구분 | 대형 기성 브랜드 (IKEA / Kaboodle) | 로컬 경쟁사 (Flatpax Cut To Size) | Total Cabinet Supplies (TCS) |
| :--- | :--- | :--- | :--- |
| **규격/사이즈** | 300/600/900mm 고정 규격 (남는 공간 필러 처리) | 맞춤 절단 가능 | **100% 밀리미터 완전 맞춤 (Zero Waste Fit)** |
| **디자인 & 톤앤매너** | 전형적인 대형 유통사 레이아웃 | 무겁고 차가운 올블랙, 20+ 복잡한 메뉴 | **따뜻한 샌드스톤(Warm Stone & Sand), 숨 쉬는 여백(Luxo Floors 감성)** |
| **품질 & 보드** | 저가 수입산 파티클보드 중심 | 자재별 분산 안내 | **100% Australian Made 정품 보드 (HMR 옵션 지원) + Blum 힌지** |
| **문제 대응 속도** | 치수 오류/수정 시 해외/타주 3~4주 지연 | 타사 공장 프로세스 | **Woodridge 자체 공장: 당일/익일 즉시 재가공 (Rapid Local Rework)** |
| **디지털 발주** | 복잡한 매장 방문/상담 필요 | 일반 견적 폼 | **goCabinets 화이트라벨 직결 (Trade Login ↗ / 3D 플래너)** |

---

## 4. 디자인 시스템 (Inspired by Luxo Floors)

### A. Color Palette (Warm Stone & Sand)
- **Base Canvas (배경)**: `#FAF8F5` (따뜻한 크리미 오프화이트)
- **Cards & Surface (카드)**: `#FFFFFF` (퓨어 화이트)
- **Secondary Sand (서브 패널/뱃지)**: `#EFECE5` (은은한 샌드스톤 틴트)
- **Deep Charcoal (텍스트 & 아치형 푸터)**: `#1A1917` (깊고 따뜻한 에스프레소 차콜)
- **Muted Sage (포인트 액센트)**: `#4E6B5B` (차분하고 세련된 포레스트 세이지)
- **Hairline Rules (경계선)**: `#E5E0D8` (은은한 소프트 보더)

### B. Typography
- **Headlines**: 에디토리얼 **듀얼 웨이트(Dual Font-Weight)** 조합
  - 예: *Millimetre-Perfect Custom Flat Pack.* **Engineered for Living & Building.**
- **Body & Spec**: Atkinson Hyperlegible Next / Inter / Archivo (타뷸러 숫자 적용으로 치수 정렬)

### C. Shapes & UI Components
- **카드 모서리**: `14px – 18px` 부드러운 라운딩
- **버튼**: Luxo Floors 시그니처 비대칭 알약 버튼 (`border-radius: 4px 22px 22px 22px`)
  - 내부 불릿 표기: `[Trade Login ↗]`, `[Request a Quote •]`
- **푸터**: 상단 `32px` 아치형 라운딩이 적용된 딥 차콜 푸터

---

## 5. 웹사이트 구조 (One-Page Seamless Experience)

1. **Header (플로팅 알약 네비게이션)**
   - Logo, 메뉴 (`Portfolio`, `3D Planner`, `For Trade`, `Why TCS`, `Contact`)
   - 우측 CTA: `[Trade Login ↗]` (goCabinets 포털 연결) & `[Get a Quote]`
2. **Hero Section (첫인상)**
   - 따뜻한 샌드스톤 톤, 듀얼 웨이트 메인 헤드라인
   - 넉넉한 여백과 완성도 높은 라이프스타일 캐비넷 메인 비주얼
   - CTA: `[Explore Portfolio •]` & `[Launch 3D Planner •]`
3. **Visual Portfolio Showcase (홈오너 감성)**
   - 탭 필터: `All`, `Kitchens`, `Wardrobes`, `Vanities & Laundries`
   - 사진으로 빽빽하지 않은 여유로운 3열 대형 카드 + 품질 뱃지
4. **Interactive 3D Planning (goCabinets 연동)**
   - *Bring Your Space to Life in 3D*
   - CTA 1: `[Start 3D Design Now ↗]` (goCabinets 3D 플래너 연결)
   - CTA 2: `[Watch 3D Tutorial Video ▶]` (유튜브 가이드 영상 팝업 모달)
5. **Why Custom Flat Pack Beats Big-Box (차별화 3열 카드)**
   - 01. Millimetre Precision (No Awkward Fillers)
   - 02. Australian Made Certified Boards (With HMR Options)
   - 03. Rapid Woodridge Factory Rework (Zero Job Site Delays)
6. **The Builder's Advantage (Trade 전용 섹션)**
   - 당일/익일 로컬 신속 재가공 + 24/7 goCabinets 야간/주말 온라인 발주
   - 전용 CTA: `[Access Trade Portal / Login ↗]`
7. **Premium Materials & Brands**
   - Polytec, Laminex, Blum, Australian Made 인증 마크
8. **Quick Project Quote / Plan Submission Form**
   - 도면/스케치 첨부 및 간편 문의 폼 (Trade / Homeowner 구분)
9. **Woodridge Workshop & Deep Charcoal Arched Footer**
   - 주소(68 Compton Rd, Woodridge QLD), 운영시간, 직통 전화, goCabinets 로그인 재안내

---

## 6. 실전 운영 정책 & 디테일 가이드

### A. 시공(Installation) 정책 — Liability 방지 및 신뢰도 확보
- **원칙**: TCS는 제조/공급 전문(Supply & Manufacture Only)입니다.
- **안내 문구**: *"TCS는 직접 설치를 진행하지 않습니다. 다만 전문 시공이 필요하신 경우, 저희와 정기적으로 협력하는 **브리즈번 로컬의 검증된 전문 카펜터/인스톨러 네트워크**를 연결해 드립니다."*

### B. 배송 및 차량 픽업 규격 (Pickup & Delivery Specs)
- **Factory Pickup**: 우드리지 공장 직접 픽업 가능. 소형 단품은 대형 SUV에도 가능하나, 패널 최대 길이가 2,400mm에 달하므로 **최소 2.4m 평평한 적재 공간이 나오는 UTE, 밴, 또는 트레일러(Trailer)**를 권장.
- **Site Delivery**: 전문 물류 협력사를 통해 브리즈번, 골드코스트, 로건 등 현장 직배송 지원 (공장 기준 거리 및 부피에 따라 투명하게 실비 산정).

### C. 우드리지 쇼룸 & 셀렉션 센터 방문 유도
- 실제 다양한 보드 텍스처, Polytec/Laminex 도어 피니시, Blum 하드웨어 실물을 직접 만져볼 수 있는 **Selection Centre (Walk-ins Welcome)** 안내 배치 (68 Compton Rd, Woodridge QLD).

---

## 7. 호주 캐비넷 플랫팩 시장 기반 — 대표 10대 핵심 FAQ

1. **정식 건축 도면이 없는데, 손스케치만 있어도 견적이 가능한가요?**  
   *YES. 대략적인 치수와 현장 사진만 보내주시거나 우드리지 카운터에 가져오시면, goCabinets 시스템을 통해 정밀 3D 도면으로 변환하고 정확한 견적 산출을 도와드립니다.*
2. **주문 후 제작 완료까지 리드타임(Lead Time)은 며칠 정도 걸리나요?**  
   *사양 확정 및 발주 후 **보통 5~10 영업일** 내에 패키징 출고 준비가 완료됩니다. 긴급 현장 건은 로컬 공장의 장점을 살려 일정 조율이 가능합니다.*
3. **IKEA나 Bunnings 기성 플랫팩과 비교했을 때 가장 큰 차이가 무엇인가요?**  
   *기성품은 300/600/900mm 규격이 정해져 있어 빈 공간을 필러로 낭비하지만, TCS는 **1mm 단위 밀리미터 완전 맞춤**으로 벽과 천장에 완벽히 들어맞습니다. 또한 검증된 호주산 보드와 Blum 하드웨어를 사용합니다.*
4. **캐비넷 설치(시공)도 함께 해주시나요?**  
   *TCS는 고품질 제조 및 공급 전문(Supply Only)입니다. 직접 시공이 어려우신 분들께는 저희와 오랜 기간 협력해 온 **브리즈번 로컬의 신뢰할 수 있는 전문 카펜터/인스톨러**를 연결해 드립니다.*
5. **HMR(고내구성 방수) 보드는 모든 제품에 기본 적용되나요?**  
   *HMR은 고객의 요구와 설치 공간(주방, 욕실, 세탁실 등)에 따라 선택하실 수 있는 **프리미엄 옵션**입니다. 일반 건식 공간용 표준 보드부터 고내구성 HMR 보드까지 자유롭게 지정 가능합니다.*
6. **캐비넷 카커스 외에 도어, 벤치탑, 하드웨어도 원스톱으로 구매 가능한가요?**  
   *YES. Polytec, Laminex 등 정품 도어 및 라미네이트 상판, Blum 힌지 및 서랍 러너, 각종 시공 부자재(실리콘, 나사 등)까지 카운터에서 원스톱으로 구매하실 수 있습니다.*
7. **goCabinets 3D 온라인 플래너는 일반인(홈오너)도 사용하기 쉬운가요?**  
   *네, 직관적인 3D 화면을 보면서 블록 쌓듯 쉽게 배치할 수 있습니다. 처음 써보시는 분들을 위해 사이트 내에 **3분 튜토리얼 영상 가이드**도 함께 제공됩니다.*
8. **공장 직접 픽업 시 어떤 차량을 가져와야 하나요?**  
   *작은 단품은 대형 SUV에도 실리지만, 일반적인 플랫팩 패키지는 긴 패널(최대 2,400mm)이 포함되므로 **최소 적재 길이 2.4m 이상이 확보되는 UTE, 밴, 또는 트레일러(Trailer)**를 가져오시는 것을 권장합니다.*
9. **현장 배송(Delivery)도 가능한가요? 배송비는 어떻게 계산되나요?**  
   *네, 신뢰할 수 있는 전문 운송 업체를 통해 브리즈번, 골드코스트 등 현장 직배송이 가능하며, 배송비는 우드리지 공장으로부터의 **이동 거리와 화물 부피에 따라 실비로 투명하게 산정**됩니다.*
10. **현장 실측이 바뀌거나 부품 수정이 필요하면 어떻게 대처해 주시나요?**  
    *이것이 바로 TCS 로컬 팩토리의 최대 강점입니다. 타주나 해외 공장처럼 3~4주씩 기다릴 필요 없이, 우드리지 공장에서 **당일 또는 익일 즉시 재가공(Rapid Rework)**하여 현장 공사 중단을 방지합니다.*

---

## 8. 기술 스택 및 개발 명령어

- **Framework**: Astro (Zero JS default, fast loading)
- **Styling**: Vanilla CSS (tokens in `src/styles/tokens.css`)
- **Dev Server**: `npm run dev` (Local: `http://localhost:4321/`)

