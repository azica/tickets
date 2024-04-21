import { Box, Card, Button as MuiButton, Typography, styled } from "@mui/material";
import { grey, liteGrey, orange, white } from "styles/colors";
import { device } from "styles/media";
import { rgba } from "styles/mixins";

export const Container = styled(Card)`
    display: grid;
    grid-template-columns: 200px 1fr;
    margin-top: 0;

    @media ${device.sm} {
        grid-template-columns: 1fr;
    }
`;

export const CardLeftSide = styled(Box)`
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
    border-right: 1px solid ${rgba(liteGrey, 0.6)};

    @media ${device.sm} {
        width: 100%;
        order: 2;
        align-items: flex-end;
        border-top: 1px solid ${rgba(liteGrey, 0.6)};
    }
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
    @media ${device.sm} {
       padding: 4px 8px;
       font-size: 12px;
     }
`
export const CardRightSide = styled(Box)`
    padding: 20px;
`
export const Image = styled(Box)`
    height: 50px;   
    margin-bottom: 20px;
    svg {
        width: 140px;
        height: 100%;
        object-fit: contain;
    }

    @media ${device.sm} {
        height: 30px;
        margin-bottom: 15px;
        svg {
            width: 100px;
        }
    }
`
export const Time = styled(Typography)`
    font-size: 34px;
    text-transform: uppercase;
    color: ${grey};
    line-height: 110%;
    margin-bottom: 10px;
    text-align: center;

    @media ${device.sm} {
       font-size: 20px;
       margin-bottom: 5px;
     }
`
export const Date = styled(Typography)`
    color: ${liteGrey};
    text-align: center;
    font-size: 14px;

    @media ${device.sm} {
       display: none;
     }
`
export const Name = styled(Typography)`
    color: ${grey};
    text-align: center;

    @media ${device.xs} {
       span {
        display: none;
       }
    }
`
export const StopBox = styled(Box)`
    position: relative;
    width: 50%;
    color: ${liteGrey};
    text-transform: uppercase;
    text-align: center;
    padding: 0 15px 5px 15px;
    font-size: 14px;
    height: 25px;

    &:after {
        position: absolute;
        content: "";
        bottom: 0;
        left: 0px;
        right: 0;
        width: 90%;
        background: ${liteGrey};
        height: 1px;
    }

    svg {
        position: absolute;
        content: "";
        bottom: -8px;
        right: 0px;
        width: 20px;
        height: 20px;
        transform: rotate(45deg);
        fill: ${liteGrey};
    }

    @media ${device.xs} {
        font-size: 12px;
        height: 20px;
        margin-top: 5px;
        &:after {
            width: 85%;
        }
        svg {
            width: 15px;
            height: 15px;
            bottom: -7px;
        }
    }
`

export const TotalHours = styled(Typography)`
    position: absolute;
    bottom: -17px;
    left: 0;
    right: 0;
    text-transform: lowercase;
    color: ${liteGrey};
    font-size: 12px;
`
