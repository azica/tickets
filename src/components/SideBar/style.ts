import { Card, Typography, styled, Button as MuiButton } from "@mui/material";
import { blue, grey } from "styles/colors";
import { device } from "styles/media";
import { rgba } from "styles/mixins";

export const Container = styled(Card)`
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-self: start;
    margin-top: 0;

    @media ${device.md} {
      height: 100%;
    }
`;

export const Title = styled(Typography)`
	text-transform: uppercase;
    color: ${grey};
    margin-bottom: 15px;
	
`;

export const Button = styled(MuiButton)`
    gap: 10px;
    color: ${blue};
    border-color: ${blue};

    svg {
        height: 20px;
        fill: ${blue};
    }

`
export const TopMobileHeader = styled(Typography)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${rgba(grey, 0.8)};
    margin-bottom: 35px;
    padding-bottom: 15px;

    & svg {
        width: 25px;
        height: 25px;
        color: ${blue};
        cursor: pointer;
    }
`