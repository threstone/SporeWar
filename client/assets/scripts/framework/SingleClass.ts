export class SingleClass {
    public static ins<T extends {}>(this: new (...args: any[]) => T, ...args: any[]): T {
        const self = (<any>this);
        if (!self.__instance__ || self.__instance__.__father__ !== self) {
            const arr = [];
            for (let index = 0; index < arguments.length; index++) {
                arr.push(arguments[index])
            }
            self.__instance__ = new self(...arr);
            /**
             * 这里其实是使用了静态继承来实现 B继承A  A继承BaseView时,B.ins()和A.ins()会返回各自不同的单例
             * 调试时并无问题，但是当发布后,结果是不一样的,当B.ins()和A.ins()被调用时,
             * 总时返回先产生的那个单例(可能时webpack使用es5打包时产生的问题)
             * 所以这里用father的方式来指定父级,以区分不同类单例的父级防止使用同一条继承链中最先创建的实例
             */
            self.__instance__.__father__ = self;
        }
        return self.__instance__;
    }
}