import { Box } from "@mui/material";
import { Link } from "styles/common";
import { CheckboxContent } from "./styles";


export const ConsentLabel: ConsentLabel = ({ centered }) => (
	<CheckboxContent centered={`${centered ? "true" : "false"}`}>
		<Box>Я даю согласие на обработку</Box>
		<Link to='/privacy-policy'>персональных данных</Link>
	</CheckboxContent>
);
