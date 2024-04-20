import { Card, Typography, styled } from "@mui/material";
import { grey } from "styles/colors";

export const Container = styled(Card)`
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-self: start;
    margin-top: 0;
`;

export const Title = styled(Typography)`
	text-transform: uppercase;
    color: ${grey};
    margin-bottom: 15px;
	
`;