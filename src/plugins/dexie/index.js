import Dexie from "dexie";

export const DB = new Dexie("survey");

/**
 *
 * name,age,sex 这个是索引,经常用到的 在这里声明
 *
 * @description project DB
 * @desc ++id 主键
 *
 *
 */

DB.version(1).stores({
    // 一个字段就是一个表
    projects: "++id, name,age,sex",
});
