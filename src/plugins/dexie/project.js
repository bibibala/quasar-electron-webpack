import { liveQuery } from "dexie";
import { DB } from "src/plugins/dexie/index";

const PROJECTS = DB.projects;

/**
 * 添加项目
 * @param {object} data - 项目数据对象
 * @return {Promise<number>} - 返回添加数据的 ID
 */
export async function addProject(data) {
    try {
        return await PROJECTS.add(data);
    } catch (error) {
        console.error("添加项目失败:", error);
    }
}

/**
 *
 * @param data {Array}
 * @return {Promise<any>}
 */
export async function addProjectBulk(data) {
    try {
        return await PROJECTS.bulkAdd(data);
    } catch (error) {
        console.error("批量添加项目失败:", error);
    }
}

/**
 * 获取项目列表
 * @return {Promise<Array>} - 返回包含所有项目的数组
 */
export async function getProjectList() {
    try {
        return await PROJECTS.toArray();
    } catch (error) {
        console.error("获取项目列表失败:", error);
        return [];
    }
}

/**
 *
 * @return {Promise<number|*>}
 *
 */
export async function getProjectListLength() {
    try {
        return await PROJECTS.count();
    } catch (error) {
        console.error("获取项目列表失败:", error);
        return 0;
    }
}

/**
 *
 * 查找符合条件的项目
 * @param {object} criteria - 查找条件对象，例如 {age: {min: 18, max: 65}}
 */
export function findProject(criteria) {
    const { field, min, max } = criteria;

    return liveQuery(async () => {
        try {
            return await PROJECTS.where(field).between(min, max).toArray();
        } catch (error) {
            console.error("查找项目失败:", error);
            return [];
        }
    });
}

/**
 * 删除项目
 * @param {number} id
 * @return {Promise<void>}
 */
export async function removeProject(id) {
    try {
        await PROJECTS.delete(id);
    } catch (error) {
        console.error("删除项目失败:", error);
    }
}

/**
 *
 * @param data {Array}
 * @return {Promise<void>}
 *
 */
export async function removeProjectBulk(data) {
    try {
        await PROJECTS.bulkDelete(data);
    } catch (error) {
        console.error("批量删除项目失败:", error);
    }
}

/**
 * 清空所有项目
 * @return {Promise<void>}
 */
export async function clearProject() {
    try {
        await PROJECTS.clear();
    } catch (error) {
        console.error("清空项目失败:", error);
    }
}
