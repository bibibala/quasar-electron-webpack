export default {
    number: (v) => /^[1-9]\d*$/.test(v) || "必须为正整数",
    phone: (v) => /^1[3456789]\d{9}$/.test(v) || "请输入正确的手机号码",
    required: (v) =>
        (v !== undefined && v !== null && v !== "") || "此为必填项",
    email: (v) =>
        /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/.test(v) ||
        "请输入正确的邮箱地址",
};
export const accept = {
    acceptExcel:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",
};
