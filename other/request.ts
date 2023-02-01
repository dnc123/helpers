import https from 'https';
import http, {ClientRequest} from 'http';
import url from 'url';
// import {PROJECT_ROOT_PATH} from "~/src/config";
import buildQueryParams from "../string/buildQueryParams";

type ResponseType = 'buffer' | 'JSON' | 'raw';

type AnyObject = {
	[key: string]: any;
}

// export function downloadFile (targetURL: string, savePath: string) {
// 	return new Promise((resolve, reject) => {
// 		const downloadedFileDestination = fs.createWriteStream(
// 			join(PROJECT_ROOT_PATH, savePath),
// 		);
//
// 		https
// 			.get(targetURL, (response) => {
// 				response
// 					.pipe(downloadedFileDestination)
// 					.on(`finish`, () => {
// 						return resolve(null);
// 					})
// 					.on(`error`, () => {
// 						return reject();
// 					});
// 			})
// 			.on(`error`, (error) => {
// 				return reject(error);
// 			});
// 	});
// }

export function get (
	URL: string,
	payload = {},
	headers = {},
	responseType: ResponseType = 'JSON',
): Promise<any> {
	return new Promise((resolve, reject) => {
		URL += `?${buildQueryParams(payload)}`;

		call(
			createRequest(
				URL,
				'GET',
				headers,
				resolve,
				reject,
				responseType,
			),
		);
	});
}

export function post (
	URL: string,
	payload: AnyObject = {},
	headers: AnyObject = {},
	responseType: ResponseType = 'JSON',
	contentType: 'application/json' | 'application/x-www-form-urlencoded' = 'application/json',
	isPayloadPreparedAlternative = false,
): Promise<any> {
	return new Promise((resolve, reject) => {
		let preparedPayload;

		if (isPayloadPreparedAlternative) {
			preparedPayload = [];

			for (let key in payload) {
				if (payload.hasOwnProperty(key)) {
					preparedPayload.push(`${encodeURIComponent(key)}=${encodeURIComponent(payload[key])}`);
				}
			}

			preparedPayload = preparedPayload.join(`&`);
		} else {
			preparedPayload = JSON.stringify(payload);
		}

		const request = createRequest(
			URL,
			'POST',

			{
				'Content-Type': contentType,
				'Content-Length': preparedPayload.length,
				...headers,
			},

			resolve,
			reject,
			responseType,
		);

		request.write(preparedPayload);
		call(request);
	});
}

function createRequest (
	URL: string,
	method: 'GET' | 'POST',
	headers: AnyObject,
	resolve: Function,
	reject: Function,
	responseType: ResponseType,
) {
	URL = encodeURI(URL);

	const isHTTPS = URL.startsWith(`https`);
	const requestLibrary = isHTTPS ? https : http;
	const parsedURL = url.parse(URL);

	return requestLibrary.request({
		hostname: parsedURL.hostname,
		port: isHTTPS ? 443 : 80,
		path: parsedURL.path,
		method,
		headers,
	}, (response) => {
		const data: any = [];

		if (responseType === 'buffer') {
			response.setEncoding(`binary`);

			response.on(`data`, chunk => {
				data.push(Buffer.from(chunk, `binary`));
			});
		} else {
			response.on(`data`, chunk => {
				data.push(chunk);
			});
		}

		response.on(`end`, () => {
			switch (responseType) {
				case 'JSON': {
					try {
						return resolve(JSON.parse(data.join(``)));
					} catch (error) {
						return reject(error);
					}
				}

				case 'buffer': {
					return resolve(Buffer.concat(data));
				}

				case 'raw': {
					return resolve(data.join(``));
				}
			}
		});
	}).on(`error`, (error) => {
		return reject(error);
	});
}

function call (request: ClientRequest) {
	request.end();
}
