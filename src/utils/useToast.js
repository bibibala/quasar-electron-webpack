import { Notify } from "quasar";

/**
 *
 * @param type {string}
 * @param content {string}
 */

export function useToast(type, content) {
    switch (type) {
        case "success":
            showSuccess(content);
            break;
        case "info":
            showInfo(content);
            break;
        case "warn":
            showWarn(content);
            break;
        case "error":
            showError(content);
            break;
    }
}

function showSuccess(content) {
    Notify.create({
        message: content,
        icon: "mdi-check-circle-outline",
        progress: true,
        type: "positive",
        position: "top-right",
        timeout: 600,
    });
}

function showWarn(content) {
    Notify.create({
        message: content,
        icon: "mdi-alert-outline",
        progress: true,
        type: "warning",
        position: "top-right",
        timeout: 3000,
    });
}

function showInfo(content) {
    Notify.create({
        message: content,
        icon: "mdi-information-outline",
        progress: true,
        type: "info",
        position: "top-right",
        timeout: 2000,
    });
}

function showError(content) {
    Notify.create({
        message: content,
        icon: "mdi-close-circle-outline",
        progress: true,
        type: "negative",
        position: "top-right",
        timeout: 3000,
    });
}
