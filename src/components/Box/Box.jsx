import styled from 'styled-components'
import { color, space, position , layout, border, shadow, typography, flexbox, background } from 'styled-system'

const Box = styled('div')(
    color,
    space,
    layout,
    border,
    shadow,
    typography,
    flexbox,
    background,
    position
)

export default Box