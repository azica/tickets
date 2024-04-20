import { Box, Card, Button as MuiButton, Typography, styled } from "@mui/material";
import { grey, liteGrey, orange, white } from "styles/colors";
import { rgba } from "styles/mixins";

export const Container = styled(Card)`
    display: grid;
    grid-template-columns: 200px 1fr;
    margin-top: 0;
`;

export const CardLeftSide = styled(Box)`
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
    border-right: 1px solid ${rgba(liteGrey, 0.6)};
`

export const Button = styled(MuiButton)`
    background: ${orange};
    color: ${white};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-transform: inherit;
    gap: 5px;

    div {
        display: block;   
        width: 100%;
        line-height: 120%;

        span {  
            text-transform: uppercase;
            font-size: 16px;
        }
    }

    &:hover {
        background:${rgba(orange, 0.8)};
    }
`
export const CardRightSide = styled(Box)`
    // display: flex;
    // align-items: flex-start;
    // justify-content: space-between;
    padding: 20px;
`
export const Image = styled(Box)`
    height: 50px;   
    margin-bottom: 20px;
    width: 80%;

    svg {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
export const Time = styled(Typography)`
    font-size: 34px;
    text-transform: uppercase;
    color: ${grey};
    line-height: 110%;
    margin-bottom: 10px;
    text-align: center;
`
export const Date = styled(Typography)`
    color: ${liteGrey};
    text-align: center;
`
export const Name = styled(Typography)`
    color: ${grey};
    text-align: center;
`
export const StopBox = styled(Box)`
    position: relative;
    width: 100%;
    color: ${liteGrey};
    text-transform: uppercase;
    text-align: center;
    padding-bottom: 5px;
    font-size: 14px;
    margin-top: 5px;
    
    &:after {
        position: absolute;
        content: "";
        bottom: 0;
        left: 0px;
        right: 0;
        width: 95%;
        background: ${liteGrey};
        height: 1px;
        margin-right: 40px;
    }

    svg {
        position: absolute;
        content: "";
        bottom: -8px;
        right: -10px;
        width: 20px;
        height: 20px;
        transform: rotate(45deg);
        fill: ${liteGrey};
    }
`
