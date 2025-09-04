export const origin = (req, res, next) => {
	const allowedOrigins = [
		"https://anvithaclubglbajaj.netlify.app",
		"http://localhost:3000",
		"http://localhost:5173",
		"http://172.19.80.1:8080",
		"http://192.168.29.203:8080",
	];

	const requestOrigin = req.headers.origin;

	if (requestOrigin && !allowedOrigins.includes(requestOrigin)) {
		return res.status(403).json({ error: "Forbidden" });
	}

	next();
};
