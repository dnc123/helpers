import parse from '../jwt/parse';

test(`JWT parsing`, () => {
	const JWTContent = parse(`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`);

	expect(JWTContent).toMatchObject({
		iat: 1516239022,
		name: `John Doe`,
		sub: `1234567890`,
	});
});
