import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	let { tokenId: id } = req.query;
	let image: string;

	switch (+id % 5) {
		case 0:
			image = `https://cdn.discordapp.com/attachments/896630396903624714/899293774121934858/unknown.png`;
			break;

		case 1:
			image = `https://cdn.discordapp.com/attachments/896630396903624714/899293782284046386/unknown.png`;
			break;

		case 2:
			image = `https://cdn.discordapp.com/attachments/896630396903624714/899293782602825768/unknown.png`;
			break;

		case 3:
			image = `https://cdn.discordapp.com/attachments/896630396903624714/899293791368921128/unknown.png`;
			break;

		default:
			image = `https://cdn.discordapp.com/attachments/896630396903624714/899293794783072276/unknown.png`;
			break;
	}

	res.status(200).json({
		attributes: [
			{
				trait_type: "Rarity",
				value: "rare",
			},
		],
		name: `NFT ${id}`,
		description: "We make it easy to create your own NFTs",
		external_url: "http://www.nftbuilder.shop/",
		image: image,
	});
}
