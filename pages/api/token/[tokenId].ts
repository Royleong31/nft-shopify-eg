import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	let { tokenId: id } = req.query;
	let image: string;

	switch (+id % 5) {
		case 0:
			image = `https://cdn.discordapp.com/attachments/896630396903624714/897009707162685480/1272810_dTXuf6if.png`;
			break;

		case 1:
			image = `https://cdn.discordapp.com/attachments/896630396903624714/897009777585057822/1272810_llZrCSA1.png`;
			break;

		case 2:
			image = `https://cdn.discordapp.com/attachments/896630396903624714/897009860846182410/1272810_tGU6Zgj9.png`;
			break;

		case 3:
			image = `https://cdn.discordapp.com/attachments/896630396903624714/897009945759846400/1272810_l30SMrWy.png`;
			break;

		default:
			image = `https://cdn.discordapp.com/attachments/896630396903624714/897010080568971294/1272810_Ah93MEQ9.png`;
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
