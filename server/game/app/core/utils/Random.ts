export class Random {
    // 构造方法
    private iRandomMax: number = 200000000000; // 最大随机整数范围 0 <= randomValue <= iRandomMax;

    private _seed: number = 0;

    set seed(value: number) {
        this._seed = value;
    }

    get seed(): number {
        return this._seed;
    }

    constructor(seed: number) {
        this.seed = seed;
    }

    random(): number {
        this._seed = (this._seed * 9301 + 49297) % 233280;
        return this._seed / (233280.0);
    }

    // min<=result<=max
    randomInt(min: number, max: number): number {
        if (max === undefined) {
            max = min;
            min = 0;
        }
        const range = min + (this.random() * (max - min));
        // console.log("range",Math.round(range), min, max,pos,name);
        return Math.round(range);
    }

    // min<=result<=max
    randomDouble(min: number, max: number): number {
        if (max === undefined) {
            max = min;
            min = 0.0;
        }
        const range = min + (this.random() * (max - min));
        return range;
    }

    randomRange(range: number): number {
        return this.randomInt(0, this.iRandomMax) % range;
    }

    randomOdds(range: number, odds: number): number {
        if (this.randomRange(range) < odds) return 1;
        return 0;
    }

    // getRandomSDiffInArray<T>(array: T[], n: number) {
    //     const len = array.length;
    //     if (array.length < n) return array;
    //     if (array.length === 1) return array;
    //     for (let i = 0; i < n; i++) {
    //         const t = this.randomInt(i, len - 1);
    //         [array[i], array[t]] = [array[t], array[i]];
    //     }
    //     array.length = n;
    // }
}
