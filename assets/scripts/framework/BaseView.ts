export default abstract class BaseView extends cc.Component {
    abstract onOpen(...args: any[]): void;
}