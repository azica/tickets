
import { FC } from 'react'
import { CardLeftSide, CardRightSide, Container, Button, Time, Date, Name, StopBox, Image, TotalHours } from './styles'
import { Grid } from '@mui/material'
import { declinationOfNumber, formatDateString, getTotalFlightTime } from 'shared/helpers/utils'
import { PlaneIcon, TurkishIcon } from 'assets/icons'
import Price from './Price'

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
                <Button variant='contained' >
                    <div>Купить</div>
                    <div>за
                        <Price
                            price={price}
                        /></div>
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
                        <TotalHours>
                            {getTotalFlightTime({ departure_date, departure_time, arrival_date, arrival_time })}
                        </TotalHours>
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