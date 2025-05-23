import fs from 'fs/promises';
import path from 'path';

const ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;

(async () => {
	try {
		// refresh access token before fetching posts
		await fetch(
			`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${ACCESS_TOKEN}`
		);
		const res = await fetch(
			`https://graph.facebook.com/v22.0/17841472361745279/media?fields=caption%2Cmedia_url%2Cmedia_type%2Cthumbnail_url%2Ctimestamp%2Cpermalink%2Cchildren%7Bmedia_url%7D&access_token=${ACCESS_TOKEN}`
		);
		const json = await res.json();

		if (!json.error) {
			await fs.writeFile(
				path.join(import.meta.dirname, '../src/insta.json'),
				JSON.stringify(json, null, 2)
			);
		} else {
			console.error(json.error.message);
		}
	} catch (err) {
		console.error(err);
	}
})();
