import jwt from 'jsonwebtoken';

export default function (unverifiedJWT: any, secretJWTKey: string) {
	return jwt.verify(unverifiedJWT, secretJWTKey);
}
