import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { liteGrey } from "styles/colors";
import { robotoMedium } from "styles/fonts";

interface ContentProps {
	detail: string;
}

export const Content = styled(Box)`
	min-height: ${({ detail }: ContentProps) =>
		detail === "true"
			? "calc(100vh - 130px - 80px - 90px - 120px - 40px)"
			: "calc(100vh - 130px - 80px - 90px)"};
`;

export const Container = styled(Box)`
	width: 100%;
	height: 100%;
`;

export const Empty = styled(Box)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`;

export const ImageWrapper = styled(Box)`
	width: 292px;
	height: 292px;
	position: relative;

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`;

export const Text = styled(Typography)`
	font-family: ${robotoMedium};
	font-size: 18px;
	line-height: 130%;
	text-align: center;
	color: ${liteGrey};
	margin: 8px 0 32px;
`;


export const NotFoundWrapper = styled(Box)`
	display: flex;
	align-items: center;
	min-height: calc(100vh - 130px - 60px);
`;

export const TopBlock = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 40px;
`;

export const ListWrapper = styled(Box)`
	display: flex;
	flex-direction: column;
	gap: 24px;

	&.detail {
		width: calc(100% + 40px);
		transform: translateX(-20px);
	}
`;

export const Filters = styled(Box)`
	display: flex;
	align-items: center;
	gap: 16px;
`;
