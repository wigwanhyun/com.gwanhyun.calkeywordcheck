# 📅 Calendar Keyword Check (캘린더 키워드 체크)

> **English & Korean Support** > This app allows you to trigger Homey Flows based on specific keywords found in your personal calendar (Google Calendar, etc.) via iCal format.

---

## 🇬🇧 English

### Introduction
**Calendar Keyword Check** is a Homey app designed to make your smart home aware of your schedule. By parsing an `.ics` (iCal) link, it checks if today's events contain specific keywords (e.g., "Vacation", "Work", "Holiday").

This is perfect for automating heating, alarms, or lighting based on whether you are working from home or on vacation, without manually toggling switches.

### ✨ Key Features
* **Keyword Matching**: Triggers if a keyword exists in the event title or description.
* **Date-Based Logic**: Ignores specific times and checks if the event falls within "Today" (Great for All-day events).
* **Privacy Focused**: Your calendar data is processed locally on your Homey. No third-party servers involved.
* **Cache Efficient**: Minimizes network usage by smart caching logic.

### ⚙️ Setup Guide (Google Calendar)
To use this app, you need a **Private iCal Address**.

1.  Open **[Google Calendar](https://calendar.google.com)** on your PC.
2.  On the left sidebar, hover over the calendar you want to use and click the **three dots (⋮)** > **Settings and sharing**.
3.  Scroll down to the **Integrate calendar** section.
4.  Find and copy the **"Secret address in iCal format"**.
    * ⚠️ **Warning**: Do NOT use the "Public address". It will not show your private events.
5.  Open the **Homey App** on your phone.
6.  Go to **More (...)** > **Settings** > **Calendar Keyword Check** > **App Settings**.
7.  Paste the URL and tap **Save**.

### 💡 Flow Example
**Scenario**: Turn on the electric blanket at 6 AM, *unless* I am on "Vacation".

1.  **WHEN**: Date & Time -> **The time is 06:00**.
2.  **AND**: Calendar Keyword Check -> **Today's event contains "Vacation"**.
    * 👉 **Important**: Right-click (or long press) this card and select **Invert** (to make it "does NOT contain").
3.  **THEN**: Electric Blanket -> **Turn on**.

### ❓ FAQ
**Q: I added an event just now, but Homey doesn't see it.** A: Google Calendar updates the iCal feed periodically. It may take anywhere from **a few hours to up to 24 hours** for new events to appear in the iCal link due to Google's caching policy.

---

## 🇰🇷 한국어

### 소개
**캘린더 키워드 체크**는 사용자의 캘린더 일정에 따라 스마트홈을 제어할 수 있게 해주는 Homey 앱입니다. iCal 링크를 통해 일정을 가져와, 오늘 날짜에 특정 키워드(예: "연차", "재택", "공휴일")가 포함된 일정이 있는지 확인합니다.

매번 알람을 끄거나 난방을 조절할 필요 없이, 캘린더에 "연차"라고 적어두기만 하면 자동으로 루틴을 변경할 수 있습니다.

### ✨ 주요 기능
* **키워드 매칭**: 일정 제목이나 설명에 특정 단어가 포함되어 있는지 확인합니다.
* **날짜 기반 로직**: 시간(시/분)을 무시하고, 해당 날짜에 일정이 걸쳐있기만 하면 인식합니다. (종일 일정 완벽 지원)
* **프라이버시 보호**: 캘린더 데이터는 Homey 기기 내부에서만 처리되며 외부 서버로 전송되지 않습니다.

### ⚙️ 설정 방법 (구글 캘린더 기준)
이 앱을 사용하려면 **비공개 iCal 주소**가 필요합니다.

1.  PC에서 **[구글 캘린더](https://calendar.google.com)**에 접속합니다.
2.  왼쪽 메뉴에서 연동할 캘린더 옆의 **점 세 개(⋮)**를 누르고 **[설정 및 공유]**를 클릭합니다.
3.  스크롤을 내려 맨 아래 **[캘린더 통합]** 섹션으로 이동합니다.
4.  **"iCal 형식의 비공개 주소"**를 찾아 복사합니다.
    * ⚠️ **주의**: "공개 주소"를 사용하면 개인 일정이 보이지 않습니다. 반드시 "비공개 주소"를 쓰세요.
5.  핸드폰에서 **Homey 앱**을 엽니다.
6.  **더보기 (...)** > **설정** > **앱** > **캘린더 키워드 체크 (Calendar Keyword Check)** > **앱 설정**으로 이동합니다.
7.  복사한 주소를 붙여넣고 **저장**합니다.

### 💡 Flow 활용 예시
**시나리오**: 평일 아침 6시에 전기장판을 켜고 싶지만, "연차"인 날에는 켜지 않게 하고 싶을 때.

1.  **언제 (WHEN)**: 날짜 및 시간 -> **시간이 오전 6:00 일 때**.
2.  **그리고 (AND)**: 캘린더 키워드 체크 -> **오늘 일정에 "연차" 포함됨**.
    * 👉 **중요**: 이 카드를 길게 눌러 **[반전 (Invert)]**을 체크하세요. ("연차가 포함되지 않았다면"으로 바뀝니다.)
3.  **그러면 (THEN)**: 전기장판 -> **켜기**.

### ❓ 자주 묻는 질문 (FAQ)
**Q: 방금 일정을 등록했는데 앱에서 인식을 못 해요.** A: 구글 캘린더의 iCal 주소는 실시간으로 갱신되지 않습니다. 구글 서버 정책상 iCal 파일이 업데이트되는 데 **최소 몇 시간에서 최대 24시간**까지 걸릴 수 있습니다. 급한 일정은 미리 등록해 두는 것이 좋습니다.

---

### License
MIT License