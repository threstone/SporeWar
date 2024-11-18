import { BaseMatch } from './BaseMatch';

export class NormalMatch extends BaseMatch {
    logicRun(): void {
        while (this._users.length > 1) {
            const user1 = this._users.shift();
            this._userSet.delete(user1.uuid);
            const user2 = this._users.shift();
            this._userSet.delete(user2.uuid);
            this.matchSuccess(user1, user2);
        }
    }
}
