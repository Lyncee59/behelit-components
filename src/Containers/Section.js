import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { prop, theme } from '../Tools/interpolation'

const diamonds = `
  url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='30px' height='64px' viewBox='0 0 30 64' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 50.2 %2855047%29 - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Ez%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='z' stroke='none' stroke-width='1' fill='none' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cg id='falling-triangles' fill='%23000000'%3E%3Cpath d='M2.33618344,1.31115035 L3.38585426,0.251418681 C3.54680276,0.0904506736 3.76523712,-1.39313792e-17 3.9930192,0 C4.22080127,1.39313792e-17 4.43923563,0.0904506736 4.60018414,0.251418681 L5.65445026,1.30657816 L6.68563026,2.33896691 L7.31588133,2.97043478 L7.74941611,3.38786984 C8.08352796,3.7243145 8.08352796,4.2690432 7.74941611,4.60548786 L6.70094584,5.65904116 L4.61429369,7.74847596 C4.27846301,8.08384135 3.73472839,8.08384135 3.39889771,7.74847596 L1.31269611,5.65996967 L0.252087421,4.6074173 C0.0906912601,4.44632753 -2.79201609e-17,4.22770147 0,3.99971948 C2.79201609e-17,3.77173748 0.0906912601,3.55311142 0.252087421,3.39202165 L1.31005348,2.33683025 L2.33618344,1.31115035 Z M24.3361834,33.3111504 L25.3858543,32.2514187 C25.5468028,32.0904507 25.7652371,32 25.9930192,32 C26.2208013,32 26.4392356,32.0904507 26.6001841,32.2514187 L27.6544503,33.3065782 L28.6856303,34.3389669 L29.3158813,34.9704348 L29.7494161,35.3878698 C30.083528,35.7243145 30.083528,36.2690432 29.7494161,36.6054879 L28.7009458,37.6590412 L26.6142937,39.748476 C26.278463,40.0838413 25.7347284,40.0838413 25.3988977,39.748476 L23.3126961,37.6599697 L22.2520874,36.6074173 C22.0906913,36.4463275 22,36.2277015 22,35.9997195 C22,35.7717375 22.0906913,35.5531114 22.2520874,35.3920217 L23.3100535,34.3368303 L24.3361834,33.3111504 Z' id='Combined-Shape'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`

const blocks = `
  url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='216px' height='216px' viewBox='0 0 216 216' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' opacity='0.05'%3E%3Cg id='background' fill='%23FFFFFF' fill-rule='nonzero'%3E%3Cpath d='M216,213.157895 L216,216 L0,216 L0,213.157895 L39.7894737,213.157895 L39.7894737,201.789474 L11.3684211,201.789474 L11.3684211,173.368421 L0,173.368421 L0,170.526316 L11.3684211,170.526316 L11.3684211,113.684211 L71.0526316,113.684211 L71.0526316,142.105263 L99.4736842,142.105263 L99.4736842,201.789474 L42.6315789,201.789474 L42.6315789,213.157895 L170.526316,213.157895 L170.526316,201.789474 L113.684211,201.789474 L113.684211,142.105263 L142.105263,142.105263 L142.105263,113.684211 L201.789474,113.684211 L201.789474,170.526316 L213.157895,170.526316 L213.157895,42.6315789 L201.789474,42.6315789 L201.789474,99.4736842 L142.105263,99.4736842 L142.105263,71.0526316 L113.684211,71.0526316 L113.684211,11.3684211 L170.526316,11.3684211 L170.526316,0 L173.368421,0 L173.368421,11.3684211 L201.789474,11.3684211 L201.789474,39.7894737 L213.157895,39.7894737 L213.157895,0 L216,0 L216,213.157895 Z M212.842105,213.473684 L212.842105,173.684211 L201.473684,173.684211 L201.473684,202.105263 L173.052632,202.105263 L173.052632,213.473684 L212.842105,213.473684 Z M116.210526,42.9473684 L116.210526,68.2105263 L141.473684,68.2105263 L141.473684,42.9473684 L116.210526,42.9473684 Z M144.522686,68.7332123 L172.834846,68.7332123 L172.834846,97.2631579 L198.315789,97.2631579 L198.315789,43.0562613 L170.00363,43.0562613 L170.00363,14.5263158 L116.210526,14.5263158 L116.210526,40.2032668 L144.522686,40.2032668 L144.522686,68.7332123 Z M144.631579,71.3684211 L144.631579,96.6315789 L170.526316,96.6315789 L170.526316,71.3684211 L144.631579,71.3684211 Z M173.052632,39.7894737 L198.947368,39.7894737 L198.947368,14.5263158 L173.052632,14.5263158 L173.052632,39.7894737 Z M96,171.157895 L96,145.263158 L70.7368421,145.263158 L70.7368421,171.157895 L96,171.157895 Z M67.6878403,145.154265 L39.3756806,145.154265 L39.3756806,116.842105 L13.8947368,116.842105 L13.8947368,170.635209 L42.2068966,170.635209 L42.2068966,198.947368 L96,198.947368 L96,173.466425 L67.6878403,173.466425 L67.6878403,145.154265 Z M67.5789474,142.736842 L67.5789474,116.842105 L42.3157895,116.842105 L42.3157895,142.736842 L67.5789474,142.736842 Z M39.1578947,173.684211 L13.8947368,173.684211 L13.8947368,198.947368 L39.1578947,198.947368 L39.1578947,173.684211 Z M116.210526,173.466425 L116.210526,198.947368 L170.00363,198.947368 L170.00363,170.635209 L198.315789,170.635209 L198.315789,116.842105 L172.834846,116.842105 L172.834846,145.154265 L144.522686,145.154265 L144.522686,173.466425 L116.210526,173.466425 Z M141.473684,145.263158 L116.210526,145.263158 L116.210526,171.157895 L141.473684,171.157895 L141.473684,145.263158 Z M144.631579,142.736842 L170.526316,142.736842 L170.526316,116.842105 L144.631579,116.842105 L144.631579,142.736842 Z M172.631579,198.736842 L198.521578,198.736842 L198.521578,172.842105 L172.631579,172.842105 L172.631579,198.736842 Z M42.4962406,0 L39.6631579,0 L39.6631579,11.3323308 L11.3323308,11.3323308 L11.3323308,39.6631579 L0,39.6631579 L0,42.4962406 L11.3323308,42.4962406 L11.3323308,99.1578947 L70.8270677,99.1578947 L70.8270677,70.8270677 L99.1578947,70.8270677 L99.1578947,11.3323308 L42.4962406,11.3323308 L42.4962406,0 Z M96,40.2032668 L67.6878403,40.2032668 L67.6878403,68.7332123 L39.3756806,68.7332123 L39.3756806,97.2631579 L13.8947368,97.2631579 L13.8947368,43.0562613 L42.2068966,43.0562613 L42.2068966,14.5263158 L96,14.5263158 L96,40.2032668 Z M42.3157895,71.3684211 L67.5789474,71.3684211 L67.5789474,96.6315789 L42.3157895,96.6315789 L42.3157895,71.3684211 Z M70.7368421,68.2105263 L70.7368421,42.9473684 L96,42.9473684 L96,68.2105263 L70.7368421,68.2105263 Z M39.1578947,14.5263158 L39.1578947,39.7894737 L13.8947368,39.7894737 L13.8947368,14.5263158 L39.1578947,14.5263158 Z' id='Shape-Copy-431'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`

const getBackgroundImage = (nature) => {
  switch (nature) {
    case 'blocks': return blocks
    case 'diamonds': return diamonds
    default: return 'none'
  }
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${prop('height')};
  width: 100%;
  background-color: ${theme('sectionBackgroundColor')};
  background-image: ${(props) => getBackgroundImage(props.nature)};
`

const Section = ({ children, ...rest }) => <Wrapper {...rest}>{children}</Wrapper>

Section.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
  nature: PropTypes.oneOf(['none', 'diamonds', 'blocks'])
}

Section.defaultProps = {
  height: 'auto',
  nature: 'none'
}

export default Section
