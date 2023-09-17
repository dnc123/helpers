"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.put = exports.post = exports.del = exports.get = void 0;
const http = __importStar(require("http"));
const https = __importStar(require("https"));
function sendRequest(options) {
    return new Promise((resolve, reject) => {
        const transport = options.url.startsWith('https') ? https : http;
        const req = transport.request(options.url, options, res => {
            let responseData = '';
            res.on('data', chunk => {
                responseData += chunk;
            });
            res.on('end', () => {
                if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
                    let parsedResponse;
                    try {
                        parsedResponse = JSON.parse(responseData);
                    }
                    catch (error) {
                        resolve(responseData);
                        return;
                    }
                    resolve(parsedResponse);
                }
                else {
                    reject(responseData);
                }
            });
        });
        req.on('error', reject);
        if (options.data) {
            req.write(options.data);
        }
        if (options.files) {
            for (const file of options.files) {
                req.write(`--${file.fieldName}\r\n`);
                req.write(`Content-Disposition: form-data; name="${file.fieldName}"; filename="${file.filename}"\r\n`);
                req.write('Content-Type: application/octet-stream\r\n\r\n');
                req.write(file.content);
                req.write('\r\n');
            }
            req.write('--');
        }
        req.end();
    });
}
function buildMultipartPayload(data, files, boundary, parentKey = '') {
    const payloadParts = [];
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const formKey = parentKey ? `${parentKey}[${key}]` : key;
            const value = data[key];
            if (typeof value === 'object' && !Array.isArray(value)) {
                payloadParts.push(buildMultipartPayload(value, files, boundary, formKey));
            }
            else {
                payloadParts.push(Buffer.from(`--${boundary}\r\n`));
                payloadParts.push(Buffer.from(`Content-Disposition: form-data; name="${formKey}"\r\n\r\n`));
                payloadParts.push(Buffer.from(`${value}\r\n`));
            }
        }
    }
    if (files) {
        for (const file of files) {
            payloadParts.push(Buffer.from(`--${boundary}\r\n`));
            payloadParts.push(Buffer.from(`Content-Disposition: form-data; name="${file.fieldName}"; filename="${file.filename}"\r\n`));
            payloadParts.push(Buffer.from('Content-Type: application/octet-stream\r\n\r\n'));
            payloadParts.push(file.content);
            payloadParts.push(Buffer.from('\r\n'));
        }
    }
    return Buffer.concat(payloadParts);
}
function get(url, queryParams, headers) {
    if (queryParams) {
        const queryString = new URLSearchParams(queryParams).toString();
        url = `${url}?${queryString}`;
    }
    return sendRequest({
        method: 'GET',
        url,
        headers,
    });
}
exports.get = get;
function del(url, queryParams, headers) {
    if (queryParams) {
        const queryString = new URLSearchParams(queryParams).toString();
        url = `${url}?${queryString}`;
    }
    return sendRequest({
        method: 'DELETE',
        url,
        headers,
    });
}
exports.del = del;
function post(url, contentType, data, headers, files) {
    switch (contentType) {
        case 'application/json': {
            const payload = JSON.stringify(data);
            return sendRequest({
                method: 'POST',
                url,
                data: payload,
                files,
                headers: {
                    ...headers,
                    'Content-Type': contentType
                },
            });
        }
        case 'multipart/form-data': {
            const boundary = `----FormDataBoundary${Date.now()}`;
            const payload = buildMultipartPayload(data, files, boundary);
            return sendRequest({
                method: 'POST',
                url,
                data: payload,
                headers: {
                    ...headers,
                    'Content-Type': `multipart/form-data; boundary=${boundary}`,
                },
            });
        }
        case 'application/x-www-form-urlencoded': {
            const payload = convertToUrlEncoded(data);
            return sendRequest({
                method: 'POST',
                url,
                data: payload,
                files,
                headers: {
                    ...headers,
                    'Content-Type': contentType
                },
            });
        }
        default: {
            return Promise.reject('Content-type is missing');
        }
    }
}
exports.post = post;
function put(url, contentType, data, headers, files) {
    switch (contentType) {
        case 'application/json': {
            const payload = JSON.stringify(data);
            return sendRequest({
                method: 'PUT',
                url,
                data: payload,
                files,
                headers: {
                    ...headers,
                    'Content-Type': contentType,
                },
            });
        }
        case 'multipart/form-data': {
            const boundary = `----FormDataBoundary${Date.now()}`;
            const payload = buildMultipartPayload(data, files, boundary);
            return sendRequest({
                method: 'PUT',
                url,
                data: payload,
                headers: {
                    ...headers,
                    'Content-Type': `multipart/form-data; boundary=${boundary}`,
                },
            });
        }
        case 'application/x-www-form-urlencoded': {
            const payload = convertToUrlEncoded(data);
            return sendRequest({
                method: 'PUT',
                url,
                data: payload,
                files,
                headers: {
                    ...headers,
                    'Content-Type': contentType
                },
            });
        }
        default: {
            return Promise.reject('Content-type is missing');
        }
    }
}
exports.put = put;
function flattenObject(obj, parentKey = '') {
    let result = {};
    for (const key in obj) {
        const newKey = parentKey ? `${parentKey}[${key}]` : key;
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            result = {
                ...result,
                ...flattenObject(obj[key], newKey),
            };
        }
        else if (Array.isArray(obj[key])) {
            for (let i = 0; i < obj[key].length; i++) {
                const arrayKey = `${newKey}[${i}]`;
                result[arrayKey] = obj[key][i];
            }
        }
        else {
            result[newKey] = obj[key];
        }
    }
    return result;
}
function convertToUrlEncoded(data) {
    const flattenedData = flattenObject(data);
    const params = new URLSearchParams(flattenedData);
    return params.toString();
}
