import * as schedule from 'node-schedule';
import { EventEnum } from '../../../../Enum';
import { EventEmitter } from '../../../../core/event/EventEmitter';

export class TimeMgr extends EventEmitter {
    static dayMs = 24 * 60 * 60 * 1000;

    static weekMs = this.dayMs * 7;

    private static _ins: TimeMgr;

    static ins() {
        if (!TimeMgr._ins) {
            TimeMgr._ins = new TimeMgr();
        }
        return TimeMgr._ins;
    }

    /** 今日开始的毫秒时间戳 */
    get dayStartMs() { return this._dayStartMs; }

    private _dayStartMs: number;

    /** 今日格式化后的日期,参考:20241024(2024年10月24日) */
    get formatDay() { return this._formatDay; }

    private _formatDay: string;

    /** 今日格式化后的日期,参考:20241024(2024年10月24日) */
    get intFormatDay() { return this._intFormatDay; }

    private _intFormatDay: number;

    /** 当周开始的毫秒时间戳 */
    get weekStartMs() { return this._weekStartMs; }

    private _weekStartMs: number;

    /** 当周式化后的日期,参考:202401(2024年第一周) */
    get formatWeek() { return this._formatWeek; }

    private _formatWeek: string;

    /** 当周格式化后的日期,参考:202401(2024年第一周) */
    get intFormatWeek() { return this._intFormatWeek; }

    private _intFormatWeek: number;

    /** 当月开始的毫秒时间戳 */
    get monthStartMs() { return this._monthStartMs; }

    private _monthStartMs: number;

    /** 当月格式化后的日期,参考:202403(2024年3月) */
    get formatMonth() { return this._formatMonth; }

    private _formatMonth: string;

    /** 当月格式化后的日期,参考:202403(2024年3月) */
    get intFormatMonth() { return this._intFormatMonth; }

    private _intFormatMonth: number;

    constructor() {
        super();
        // *    *    *    *    *    *
        // ┬    ┬    ┬    ┬    ┬    ┬
        // │    │    │    │    │    │
        // │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
        // │    │    │    │    └───── month (1 - 12)
        // │    │    │    └────────── day of month (1 - 31)
        // │    │    └─────────────── hour (0 - 23)
        // │    └──────────────────── minute (0 - 59)
        // └───────────────────────── second (0 - 59, OPTIONAL)

        this.onNewDay(false);
        this.onNewWeek(false);
        this.onNewMonth(false);
        schedule.scheduleJob('0 0 0 * * *', this.onNewDay.bind(this));
        schedule.scheduleJob('0 0 0 * * 1', this.onNewWeek.bind(this));
        schedule.scheduleJob('0 0 0 1 * *', this.onNewMonth.bind(this));
    }

    private onNewDay(isEmit = true) {
        this._dayStartMs = this.getDayStartMs();
        this._formatDay = this.getFormatDay(this._dayStartMs);
        this._intFormatDay = parseInt(this._formatDay, 10);
        if (isEmit) {
            this.emit(EventEnum.NewDay, this._formatDay);
        }
    }

    private onNewWeek(isEmit = true) {
        this._weekStartMs = this.getWeekStartMs();
        this._formatWeek = this.getFormatWeek(this._weekStartMs);
        this._intFormatWeek = parseInt(this._formatWeek, 10);
        if (isEmit) {
            this.emit(EventEnum.NewWeek, this._formatWeek);
        }
    }

    private onNewMonth(isEmit = true) {
        this._monthStartMs = this.getMonthStartMs();
        this._formatMonth = this.getFormatMonth(this._monthStartMs);
        this._intFormatMonth = parseInt(this._formatMonth, 10);
        if (isEmit) {
            this.emit(EventEnum.NewMonth, this._formatMonth);
        }
    }

    /** 获取格式化后的日期,参考:20241024(2024年10月24日) */
    getFormatDay(ts = Date.now()) {
        const date = new Date(ts);
        // 获取日期的各个部分
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 月份从0开始，所以需要+1
        const day = date.getDate().toString().padStart(2, '0');
        // 组合成YYYYMMDD格式
        return `${year}${month}${day}`;
    }

    /** 获取格式化后的日期,参考:202401(2024年第一周) */
    getFormatWeek(ts = Date.now()) {
        const now = new Date(ts);
        const firstDayOfYear = new Date(`${now.getFullYear()}-01-01`);
        return `${now.getFullYear()}${Math.ceil((now.getTime() - this.getWeekStartMs(firstDayOfYear.getTime())) / TimeMgr.weekMs)}`;
    }

    /** 获取格式化后的日期,参考:202403(2024年3月) */
    getFormatMonth(ts = Date.now()) {
        const date = new Date(ts);
        // 获取日期的各个部分
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 月份从0开始，所以需要+1
        // 组合成YYYYMMDD格式
        return `${year}${month}`;
    }

    /** 获取一天开始的时间戳 */
    getDayStartMs(ts = Date.now()) {
        const newDate = new Date(ts);
        newDate.setHours(0, 0, 0, 0);
        return Math.floor(newDate.getTime() / 1000) * 1000;
    }

    /** 获取一周开始的时间戳 */
    getWeekStartMs(ts = Date.now()) {
        const newDate = new Date(ts);
        newDate.setHours(0, 0, 0, 0);
        const day = newDate.getDay() || 7; // 获取星期几，周日为7
        return Math.floor(newDate.getTime() / 1000) * 1000 - (day - 1) * TimeMgr.dayMs;
    }

    /** 获取一月开始的时间戳 */
    getMonthStartMs(ts = Date.now()) {
        const newDate = new Date(ts);
        newDate.setDate(1); // 设置为月份的第一天
        newDate.setHours(0, 0, 0, 0);
        return Math.floor(newDate.getTime() / 1000) * 1000;
    }
}
