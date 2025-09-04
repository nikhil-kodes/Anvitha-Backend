import ImageKit from "imagekit";
export const getPhoto = async (req, res, next) => {
	const imagekit = new ImageKit({
		publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
		privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
		urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
	});
	try {
		const limit = 24;
		const skip = 0;
		const response = await imagekit.listFiles({
			path: process.env.FOLDER1,
           limit,
		   skip
		});
		res.json({
			data: response,
			hasMore: response.length === limit
		});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
