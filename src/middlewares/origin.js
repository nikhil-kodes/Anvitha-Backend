export const origin = (req, res, next) => {
	const allowedOrigin = "https://anvithaclubglbajaj.netlify.app";
	const origin = req.headers.origin;

	if (origin && origin !== allowedOrigin) {
		return res.status(403).json({ error: "Forbidden" });
	}

	next();
};
