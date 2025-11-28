import { Component, Injectable } from '@angular/core';
import {
  NgbDateStruct,
  NgbCalendar,
  NgbDatepickerI18n,
  NgbCalendarBuddhist
} from '@ng-bootstrap/ng-bootstrap';
import localeThai from '@angular/common/locales/th';
import { formatDate, registerLocaleData } from '@angular/common';

@Injectable()
export class NgbDatepickerI18nBuddhist extends NgbDatepickerI18n {

  private _locale = 'th';
  private _weekdaysShort: readonly string[];
  private _monthsShort: readonly string[];
  private _monthsFull: readonly string[];

  constructor() {
    super();

    registerLocaleData(localeThai);

    // Use Intl API for weekday names
    const weekdayFormatter = new Intl.DateTimeFormat(this._locale, { weekday: 'short' });
    const weekdaysStartingOnSunday = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(2021, 0, 3 + i); // January 3, 2021 is Sunday
      return weekdayFormatter.format(date);
    });
    this._weekdaysShort = weekdaysStartingOnSunday.map((day, index) => weekdaysStartingOnSunday[(index + 1) % 7]);

    // Use Intl API for month names
    const monthShortFormatter = new Intl.DateTimeFormat(this._locale, { month: 'short' });
    const monthFullFormatter = new Intl.DateTimeFormat(this._locale, { month: 'long' });
    this._monthsShort = Array.from({ length: 12 }, (_, i) => monthShortFormatter.format(new Date(2021, i, 1)));
    this._monthsFull = Array.from({ length: 12 }, (_, i) => monthFullFormatter.format(new Date(2021, i, 1)));
  }

  getMonthShortName(month: number): string { return this._monthsShort[month - 1] || ''; }

  getMonthFullName(month: number): string { return this._monthsFull[month - 1] || ''; }

  getWeekdayLabel(weekday: number) {
    return this._weekdaysShort[weekday - 1] || '';
  }

  getDayAriaLabel(date: NgbDateStruct): string {
    const jsDate = new Date(date.year, date.month - 1, date.day);
    return formatDate(jsDate, 'fullDate', this._locale);
  }

  getYearNumerals(year: number): string { return String(year); }
}

@Component({
  selector: 'ngbd-datepicker-buddhist',
  templateUrl: './datepicker-buddhist.html',
  providers: [
    { provide: NgbCalendar, useClass: NgbCalendarBuddhist },
    { provide: NgbDatepickerI18n, useClass: NgbDatepickerI18nBuddhist },
  ],
})
export class NgbdDatepickerBuddhist {
  model: NgbDateStruct;
  date: { year: number; month: number };

  constructor(private calendar: NgbCalendar) {}

  selectToday() {
    this.model = this.calendar.getToday();
  }
}
