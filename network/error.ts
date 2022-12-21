import { success, error } from ".";
export function errors(err, req, res, next) {
    console.error(`[error]`, err);
    const message = err.message || 'Internal Error';
    const statusCode = err.statusCode || 500;

    error(req, res, message, statusCode)
}