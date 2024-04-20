
import { FC } from 'react'
import { CardLeftSide, CardRightSide, Container, Button, Time, Date, Name, StopBox, Image } from './styles'
import { Grid } from '@mui/material'
import { declinationOfNumber, formatDateString } from 'shared/helpers/utils'
import { PlaneIcon, TurkishIcon } from 'assets/icons'

export const TicketCard: FC<Ticket> = ({ origin, origin_name, arrival_time, arrival_date, departure_date, departure_time, destination, destination_name, stops, price }) => {
    const stopsText = stops === 0 ? 'без пересадок' : `${stops} ${declinationOfNumber(stops, ['пересадка', 'пересадки', 'пересадок'])}`;

    return (
        <Container>
            <CardLeftSide>
                <Image>
                    <TurkishIcon />
                </Image>
                <Button variant='contained' >
                    <div>Купить</div>
                    <div>за <span>{price} ₽</span></div>
                </Button>
            </CardLeftSide>
            <CardRightSide>
                <Grid container>
                    <Grid item xs={3}>
                        <Time>{departure_time}</Time>
                    </Grid>
                    <Grid item xs={6}>
                        <StopBox>
                            {stopsText}
                            <PlaneIcon />
                        </StopBox>
                    </Grid>
                    <Grid item xs={3}>
                        <Time>{arrival_time}</Time>
                    </Grid>
                </Grid>
                <Grid container justifyContent="space-between">
                    <Grid item xs={3}>
                        <Name variant='h5'>{origin}, {origin_name}</Name>
                        <Date>{formatDateString(departure_date)}</Date>
                    </Grid>
                    <Grid item xs={3}>
                        <Name variant='h5'>{destination}, {destination_name}</Name>
                        <Date>{formatDateString(arrival_date)}</Date>
                    </Grid>
                </Grid >
            </CardRightSide>
        </Container>
    )
}

export default TicketCard