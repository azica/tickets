
import { FC } from 'react'
import { CardLeftSide, CardRightSide, Container, Time, Date, Name, StopBox, Image, TotalHours, Button } from './styles'
import { Grid } from '@mui/material'
import { declinationOfNumber, formatDateString } from 'shared/helpers/utils'
import { PlaneIcon, TurkishIcon } from 'assets/icons'

export const TicketCard: FC<Ticket> = ({
    origin,
    origin_name,
    arrival_time,
    arrival_date,
    departure_date,
    departure_time,
    destination,
    destination_name,
    stops,
    price
}) => {
    const stopsText = stops === 0 ? 'без пересадок' : `${stops} ${declinationOfNumber(stops, ['пересадка', 'пересадки', 'пересадок'])}`;

    return (
        <Container>
            <CardLeftSide>
                <Image>
                    <TurkishIcon />
                </Image>
                <Button variant="contained" type="button">
                    <div>Купить</div>
                    <div>за <span>{price}</span></div>
                </Button>
            </CardLeftSide>
            <CardRightSide>
                <Grid container>
                    <Grid item xs={3}>
                        <Time>{departure_time}</Time>
                        <Name variant='h5'>{origin}<span>, {origin_name}</span> </Name>
                        <Date>{formatDateString(departure_date)}</Date>
                    </Grid>

                    <StopBox>
                        {stopsText}
                        <PlaneIcon />
                    </StopBox>

                    <Grid item xs={3}>
                        <Time>{arrival_time}</Time>
                        <Name variant='h5'>{destination} <span>, {destination_name}</span></Name>
                        <Date>{formatDateString(arrival_date)}</Date>
                    </Grid>
                </Grid>
            </CardRightSide>
        </Container>
    )
}

export default TicketCard