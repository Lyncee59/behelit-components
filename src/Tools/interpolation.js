const prop = (key) => (props) => props[key]

const screenSize = (key) => (props) => props.theme.screenSizes[key]

const theme = (key) => (props) => props.theme[key]

export { prop, screenSize, theme }
