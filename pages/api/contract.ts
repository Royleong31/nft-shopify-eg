import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json({
		name: "NFT Builder",
		description:
			"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, s",
		image: "https://cdn.discordapp.com/attachments/896630396903624714/896630832960241674/unknown.png",
		external_link: "http://www.nftbuilder.shop/",
		seller_fee_basis_points: 500,
		fee_recipient: "0xa87833e15EF6d007eDc446eDe5fbc1dab0a57c01",
	});
}
