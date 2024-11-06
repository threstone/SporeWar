export class UserVo {
    private static _ins: UserVo;
    static ins() {
        return this._ins || (this._ins = new this())
    }
    uid: string = 'self';
}