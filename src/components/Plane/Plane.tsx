import { SvgWrap } from './styles'
import { GlobePlane } from 'assets/icons'

export const Plane = () => {
    return (
        <SvgWrap
            mt={2}
            display="flex"
            justifyContent="center"
            alignItems="center">
            <GlobePlane
                height={70}
                width={70} />
        </SvgWrap>
    )
}

export default Plane