/* eslint-disable no-unused-vars */
declare type define = string;
declare interface InitialItemsDefine {
   readonly id?: number;
   readonly newUserItem?: number[][];
}
declare interface SporeDefine {
   readonly id?: number;
   readonly speed?: number;
   readonly selfImg?: string;
   readonly enemyImg?: string;
   readonly height?: number;
   readonly width?: number;
   readonly maxColumnCount?: number;
}
declare interface MapDefine {
   readonly id?: number;
   readonly bgPath?: string;
   readonly selfBase?: number[][];
   readonly enemyBase?: number[][];
   readonly mapBuilding?: number[][];
}
declare interface StageDefine {
   readonly id?: number;
   readonly mapId?: number;
}
declare interface ItemsDefine {
   readonly id?: number;
   readonly define?: define;
   readonly name?: string;
   readonly desc?: string;
   readonly type?: number;
   readonly subType?: number;
   readonly json?: number[][];
   readonly iconPath?: string;
   readonly quality?: number;
   readonly isShow?: number;
   readonly isItem?: number;
   readonly tip?: string;
}
declare interface DropPoolDefine {
   readonly id?: number;
   readonly drawType?: number;
   readonly resetType?: number;
   readonly dropItems?: any;
   readonly timeCnt?: any;
}
declare interface BuildingDefine {
   readonly id?: number;
   readonly buildingBg?: string;
   readonly createSpeed?: number;
   readonly startCount?: number;
   readonly maxCount?: number;
   readonly buildingRadius?: number;
}
