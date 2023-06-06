import https from 'https';
import http from 'http';
import url from 'url';

type RequestBody = Record<string, string>;
type Headers = Record<string, string>;
type ResponseType = 'buffer' | 'json' | 'text';
type RequestResponse = Promise<Buffer | Record<string, unknown> | string>;

type RequestOptions = {
    method: string;
    headers?: Headers;
};

export function get(
    url: string,
    payload: RequestBody = {},
    headers: Headers = {},
    responseType: ResponseType = 'json'
): RequestResponse {
    if (payload) {
        const searchParams = new URLSearchParams(payload);

        url += `?${searchParams.toString()}`;
    }

    const options: RequestOptions = {
        method: 'GET',
        headers: headers,
    };

    return sendRequest(url, options, undefined, responseType);
}

export function post(
    targetURL: string,
    payload: RequestBody = {},
    headers: Headers = {},
    responseType: ResponseType = 'json',
): RequestResponse {
    const options: RequestOptions = {
        method: 'POST',
        headers: headers,
    };

    return sendRequest(targetURL, options, payload, responseType);
}

function sendRequest(
    targetURL: string,
    options: RequestOptions,
    payload: RequestBody = {},
    responseType: ResponseType = 'json',
): RequestResponse {
    return new Promise((resolve, reject) => {
        const targetURLObject = new url.URL(targetURL);
        const requestModule = targetURLObject.protocol === 'https:' ? https : http;

        if (payload && options.method === 'GET') {
            const searchParams = new URLSearchParams(payload);

            targetURLObject.search = searchParams.toString();
        }

        const request = requestModule.request(targetURLObject.toString(), options, (response) => {
            const rawData: Uint8Array[] = [];

            response.on('data', (chunk) => {
                rawData.push(chunk);
            });

            response.on('end', () => {
                if (responseType === 'buffer') {
                    const responseData = Buffer.concat(rawData);

                    return resolve(responseData);
                }

                if (responseType === 'json') {
                    const responseData = JSON.parse(Buffer.concat(rawData).toString());

                    return resolve(responseData);
                }

                if (responseType === 'text') {
                    const responseData = Buffer.concat(rawData).toString();

                    return resolve(responseData);
                }
            });
        });

        request.on('error', (error) => {
            reject(new Error(`Request failed: ${error.message}`));
        });

        if (payload && options.method !== 'GET') {
            if (options.headers && !options.headers['Content-Type']) {
                options.headers['Content-Type'] = 'application/json';
            }

            request.write(JSON.stringify(payload));
        }

        request.end();
    });
}
