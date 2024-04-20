import { Box, ThemeProvider } from "@mui/material";

import { theme } from "styles/theme";

import { SvgWrap, layoutStyles } from "./styles";

import { LayoutContent } from "./LayoutContent";
import { SideBar } from "components/SideBar";
import { GlobePlane } from "assets/icons";

const { Container, Wrapper } = layoutStyles;

export const Layout = () => {
	return (
		<ThemeProvider theme={theme}>
			<SvgWrap
				mt={2}
				display="flex"
				justifyContent="center"
				alignItems="center">
				<GlobePlane
					height={70}
					width={70} />
			</SvgWrap>
			<Wrapper>
				<SideBar />
				<Container>
					<LayoutContent />
				</Container>
			</Wrapper>
		</ThemeProvider>
	);
};
