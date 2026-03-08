# Notion 상담 신청 연동 설정

"Notion 데이터베이스를 찾을 수 없습니다" / "DB 속성 이름이 맞지 않을 수 있습니다" 가 나오면 아래를 확인하세요.

---

## 0. 데이터베이스 속성 (이름·타입 정확히 맞추기)

상담 신청이 저장되려면 **아래와 똑같은 이름·타입**으로 속성을 만들어야 합니다. (영어 이름 사용)

| 속성 이름 (정확히) | 타입 | 비고 |
|-------------------|------|------|
| **Name** | 제목(Title) | 아래 참고 |
| **Grade** | 텍스트(Text) | 학년/수험생 단계 |
| **Phone** | 텍스트(Text) | 연락처 |
| **Channel** | 선택(Select) | 선택지: `카카오톡`, `전화 통화`, `기타` (3개만) |
| **Devices** | 텍스트(Text) | 사용 기기 |
| **Concerns** | 텍스트(Text) | 걱정되는 점 |
| **PreferredTime** | 텍스트(Text) | 선호 상담 시간 |
| **Referrer** | 텍스트(Text) | 추천인 (선택) |
| **Setting** | 텍스트(Text) | 세팅 구분 (예: 세팅 A, 세팅 B, 세팅 C) — 선택 |
| **SettingBOptions** | 텍스트(Text) | 세팅 B 시 추가앱 선택 목록 (쉼표 구분) — 선택 |
| **ApplicationType** | 텍스트(Text) | 신청 유형 (예: 대치폰 매입) — 선택 |
| **DesiredDevice** | 텍스트(Text) | 매입 희망 기종 (대치폰 매입 신청 시) — 선택 |

- **Name (제목)**: Notion에서는 **새 DB를 만들면 맨 첫 번째 컬럼이 자동으로 제목(Title) 타입**입니다. 타입 선택 메뉴에는 "제목"이 안 보이고, **그 첫 번째 컬럼 이름만 "Name"으로 바꾸면** 됩니다. (기본 이름이 "이름" 또는 "Name"일 수 있음)
- **Channel** 선택 속성에는 반드시 **카카오톡**, **전화 통화**, **기타** 세 개 옵션을 추가하세요.
- 속성 이름은 대소문자까지 위 표와 동일해야 합니다 (Name, Grade, Phone, Channel, Devices, Concerns, PreferredTime, Referrer, Setting, SettingBOptions, ApplicationType, DesiredDevice). Referrer·Setting·SettingBOptions·ApplicationType·DesiredDevice는 선택 속성이며, 없으면 비워 둬도 됩니다.

---

## 1. 데이터베이스 ID 확인

1. **Notion**에서 상담 신청을 받을 **데이터베이스** 페이지를 엽니다.
2. 브라우저 **주소창**을 봅니다.
   - 예: `https://www.notion.so/내워크스페이스/abc123def4567890abcdef1234567890?v=...`
3. **DB ID**는 **마지막 `/` 뒤부터 `?` 앞까지** 입니다.
   - 위 예시에서는 `abc123def4567890abcdef1234567890` (32자)
   - **하이픈(-)은 넣지 마세요.** 주소창에 있는 그대로 32자만 복사합니다.
4. `.env.local` 에 넣습니다:
   ```bash
   NOTION_DATABASE_ID=abc123def4567890abcdef1234567890
   ```

### URL이 다른 경우

- `https://notion.so/abc123...?v=...` → `?` 앞의 `abc123...` 전체가 ID입니다.
- 페이지가 **인라인 DB**가 아니라 **전체 페이지로 열린 DB**여야 주소에서 ID를 볼 수 있습니다. 제목을 클릭해 "페이지로 열기"로 연 뒤 주소창을 확인하세요.

---

## 2. 연동(Integration)에 DB 연결

DB ID가 맞아도, **해당 데이터베이스를 연동에 연결**하지 않으면 404가 납니다.

1. Notion에서 **같은 데이터베이스 페이지**를 엽니다.
2. 우측 상단 **`···` (더보기)** 클릭.
3. **연결(Connections)** 또는 **Add connections** 선택.
4. 상담 신청용으로 만든 **연동(Integration)** 이름을 선택해 연결합니다.
5. 저장 후, 다시 상담 신청 폼에서 제출해 봅니다.

---

## 3. 요약 체크리스트

- [ ] `.env.local`에 `NOTION_DATABASE_ID=32자리` (공백·따옴표 없이)
- [ ] `.env.local`에 `NOTION_API_KEY=secret_...` (Notion 연동에서 복사)
- [ ] Notion DB 페이지에서 `···` → **연결** → 해당 연동 선택
- [ ] 수정 후 `npm run dev` 다시 실행

이후에도 "데이터베이스를 찾을 수 없습니다"가 나오면, DB ID 32자와 연결한 연동 이름을 다시 한 번 확인해 보세요.
