import { ThemeProvider } from "@mui/material";

import { theme } from "styles/theme";

import { layoutStyles } from "./styles";

import { LayoutContent } from "./LayoutContent";
import { SideBar } from "components/SideBar";
import { Plane } from "components/Plane";
import { useIsMobile } from "shared/hooks/useMobile";

const { Container, Wrapper } = layoutStyles;

export const Layout = () => {
	const isMobile = useIsMobile(1020);


	return (
		<ThemeProvider theme={theme}>
			<Plane />
			<Wrapper>
				<SideBar />
				<Container>
					<LayoutContent />
				</Container>
			</Wrapper>
		</ThemeProvider>
	);
};
