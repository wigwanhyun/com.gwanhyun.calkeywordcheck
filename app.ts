import Homey from 'homey';
import ical from 'node-ical';

class CalendarApp extends Homey.App {
  async onInit() {
    this.log('CalendarApp initialized (Date-only mode)');

    this.homey.flow.getConditionCard('has_keyword')
      .registerRunListener(async (args, state) => {
        const keyword = args.keyword as string;
        if (!keyword) return false;

        return await this.checkCalendarForKeyword(keyword);
      });
  }

  async checkCalendarForKeyword(keyword: string): Promise<boolean> {
    const url = this.homey.settings.get('ics_url');
    if (!url) {
      this.error('No ICS URL set');
      return false;
    }

    try {
      // 1. 데이터 파싱
      const events = await ical.async.fromURL(url);
      
      // 2. '오늘' 날짜를 문자열로 변환 (예: "2026-01-01")
      // 시간은 무시하고 날짜만 비교하기 위함
      const todayStr = this.getKSTDateString(new Date()); 

      for (const key in events) {
        const event = events[key] as any;
        
        // 실제 일정(VEVENT)이 아니거나 시작 날짜가 없으면 패스
        if (event.type !== 'VEVENT' || !event.start) continue;
        // 3. 일정의 시작일과 종료일을 문자열로 변환
        const eventStartStr = this.getKSTDateString(new Date(event.start));
        
        // 종료일이 없으면 시작일과 같은 날로 간주
        let eventEndStr = eventStartStr;
        if (event.end) {
            // 주의: iCal의 종료일은 보통 '다음날 00:00'인 경우가 많아 하루를 빼줘야 정확할 때가 있음.
            // 하지만 "시간 무시"의 관점에서는 단순하게 범위로 포함시키는 게 안전합니다.
            eventEndStr = this.getKSTDateString(new Date(event.end));
        }

        // 4. 날짜 비교 (시간 무시)
        // 오늘 날짜가 일정 시작일과 종료일 사이에 껴있는지 확인 (문자열 비교)
        // (EventStart <= Today <= EventEnd)
        if (todayStr >= eventStartStr && todayStr <= eventEndStr) {
          
          const title = event.summary || '';
          const desc = event.description || '';
          
          // 키워드 체크
          if (title.includes(keyword) || desc.includes(keyword)) {
            this.log(`✅ Match found on date [${todayStr}]: "${title}"`);
            return true; 
          }
        }
      }

      return false;

    } catch (err) {
      this.error('Error fetching calendar:', err);
      return false;
    }
  }

  // [Helper] 날짜 객체를 한국 시간(KST) 기준 "YYYY-MM-DD" 문자열로 변환하는 함수
  private getKSTDateString(date: Date): string {
    // UTC 시간에 9시간을 더해 KST로 변환
    const kstOffset = 9 * 60 * 60 * 1000;
    const kstDate = new Date(date.getTime() + kstOffset);
    
    // ISOString은 UTC 기준이므로, KST로 시간 이동시킨 값에서 앞부분(날짜)만 자름
    return kstDate.toISOString().split('T')[0];
  }
}

module.exports = CalendarApp;