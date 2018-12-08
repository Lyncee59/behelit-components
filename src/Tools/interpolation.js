
const palette = (key) => (props) => props.theme.palette[key]

const prop = (key) => (props) => props[key]

const screenSize = (key) => (props) => props.theme.screenSizes[key]

const theme = (key) => (props) => props.theme[key]

export { palette, prop, screenSize, theme }
