none
# Calendar Keyword Check

Automate your home based on your schedule!
This app checks your calendar events for specific keywords (e.g., "Vacation", "Work from Home") and triggers flows accordingly.

### Features
* **Keyword Matching**: Checks if today's events contain a specific word.
* **All-day Support**: Works perfectly with all-day events.
* **Privacy First**: Your calendar data is processed locally on your Homey.

### How to Setup (Google Calendar)
1. Go to **Google Calendar** on your PC.
2. Click **Settings and sharing** for the calendar you want to use.
3. Scroll down to **Integrate calendar**.
4. Copy the **"Secret address in iCal format"**.
   * *Note: Do NOT use the Public address, or your private events won't be visible.*
5. In Homey, go to **Settings > Apps > Calendar Keyword Check**.
6. Paste the URL and save.

### Example Flow
**WHEN** Time is 06:00 AM
**AND** Today's event contains "Holiday" (Inverted: No)
**THEN** Turn on the heating

---

# 캘린더 키워드 체크

일정에 맞춰 스마트홈을 자동화하세요!
오늘 일정에 "재택", "휴가" 같은 특정 단어가 있는지 확인하여 Flow를 동작시킵니다.

### 설정 방법 (구글 캘린더 기준)
1. PC에서 구글 캘린더 설정으로 들어갑니다.
2. '통합' 섹션에서 **"iCal 형식의 비공개 주소"**를 복사합니다.
3. Homey 앱 설정 화면에 붙여넣고 저장합니다.