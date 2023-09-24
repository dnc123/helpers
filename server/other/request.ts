import * as http from 'http';
import * as https from 'https';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type ContentType = 'multipart/form-data' | 'application/json' | 'application/x-www-form-urlencoded';

type RequestOptions = {
	method: HttpMethod;
	url: string;
	headers?: http.OutgoingHttpHeaders;
	data?: any;

	files?: {
		fieldName: string;
		filename: string;
		content: Buffer
	}[];
};

function sendRequest (options: RequestOptions): Promise<any> {
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
					} catch (error) {
						resolve(responseData);

						return;
					}

					resolve(parsedResponse);
				} else {
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

function buildMultipartPayload(data: any, files: RequestOptions['files'], boundary: string, parentKey = ''): Buffer {
	const payloadParts: Buffer[] = [];

	for (const key in data) {
		if (data.hasOwnProperty(key)) {
			const formKey = parentKey ? `${parentKey}[${key}]` : key;
			const value = data[key];

			if (typeof value === 'object' && !Array.isArray(value)) {
				payloadParts.push(buildMultipartPayload(value, files, boundary, formKey));
			} else {
				payloadParts.push(Buffer.from(`--${boundary}\r\n`));
				payloadParts.push(Buffer.from(`Content-Disposition: form-data; name="${formKey}"\r\n\r\n`));
				payloadParts.push(Buffer.from(`${value}\r\n`));
			}
		}
	}

	if (files) {
		for (const file of files) {
			payloadParts.push(Buffer.from(`--${boundary}\r\n`));

			payloadParts.push(
				Buffer.from(`Content-Disposition: form-data; name="${file.fieldName}"; filename="${file.filename}"\r\n`),
			);

			payloadParts.push(Buffer.from('Content-Type: application/octet-stream\r\n\r\n'));
			payloadParts.push(file.content);
			payloadParts.push(Buffer.from('\r\n'));
		}
	}

	return Buffer.concat(payloadParts);
}

export function get(
	url: string,
	queryParams?: Record<string, string>,
	headers?: http.OutgoingHttpHeaders,
): Promise<any> {
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

export function del(
	url: string,
	queryParams?: Record<string, string>,
	headers?: http.OutgoingHttpHeaders,
): Promise<any> {
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

export function post (
	url: string,
	contentType: ContentType,
	data?: any,
	headers?: http.OutgoingHttpHeaders,
	files?: RequestOptions['files'],
): Promise<any> {
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

export function put (
	url: string, contentType: ContentType,
	data?: any,
	headers?: http.OutgoingHttpHeaders,
	files?: RequestOptions['files'],
): Promise<any> {
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

function flattenObject(obj: any, parentKey = ''): { [key: string]: any } {
	let result: { [key: string]: any } = {};

	for (const key in obj) {
		const newKey = parentKey ? `${parentKey}[${key}]` : key;

		if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
			result = {
				...result,
				...flattenObject(obj[key], newKey),
			};
		} else if (Array.isArray(obj[key])) {
			for (let i = 0; i < obj[key].length; i++) {
				const arrayKey = `${newKey}[${i}]`;

				result[arrayKey] = obj[key][i];
			}
		} else {
			result[newKey] = obj[key];
		}
	}
	return result;
}

function convertToUrlEncoded(data: any): string {
	const flattenedData = flattenObject(data);
	const params = new URLSearchParams(flattenedData);

	return params.toString();
}
