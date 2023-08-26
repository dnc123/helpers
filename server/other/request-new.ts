import * as fs from 'fs';
import * as http from 'http';
import * as https from 'https';

// @ts-ignore
import FormData from 'form-data';

interface RequestOptions {
	method: string;
	url: string;
	headers?: http.OutgoingHttpHeaders;
	body?: any;
}

function makeRequest(options: RequestOptions): Promise<any> {
	return new Promise((resolve, reject) => {
		const protocol = options.url.startsWith('https') ? https : http;
		const req = protocol.request(options.url, options, (response) => {
			let data = '';

			response.on('data', (chunk) => {
				data += chunk;
			});

			response.on('end', () => {
				resolve(data);
			});
		});

		req.on('error', (error) => {
			reject(error);
		});

		if (options.body) {
			if (options.body instanceof FormData) {
				options.body.pipe(req);
			} else {
				req.write(options.body);
			}
		}

		req.end();
	});
}

export async function get(url: string, headers?: http.OutgoingHttpHeaders): Promise<any> {
	const options: RequestOptions = {
		method: 'GET',
		url,
		headers,
	};

	return makeRequest(options);
}

export async function post(url: string, data: Record<string, any>, headers?: http.OutgoingHttpHeaders): Promise<any> {
	const formData = new FormData();
	for (const key in data) {
		if (Object.prototype.hasOwnProperty.call(data, key)) {
			if (data[key] instanceof fs.ReadStream) { // Assuming you have a ReadStream
				formData.append(key, data[key]);
			} else {
				formData.append(key, data[key]);
			}
		}
	}

	const options: RequestOptions = {
		method: 'POST',
		url,
		headers: {
			...headers,
			...formData.getHeaders(),
		},
		body: formData,
	};

	return makeRequest(options);
}

export async function put(url: string, body: any, headers?: http.OutgoingHttpHeaders): Promise<any> {
	const options: RequestOptions = {
		method: 'PUT',
		url,
		headers: {
			'Content-Type': 'application/json',
			...headers,
		},
		body: JSON.stringify(body),
	};

	return makeRequest(options);
}

export async function del(url: string, headers?: http.OutgoingHttpHeaders): Promise<any> {
	const options: RequestOptions = {
		method: 'DELETE',
		url,
		headers,
	};

	return makeRequest(options);
}
