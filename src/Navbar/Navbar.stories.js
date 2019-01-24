import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { Button } from '../Buttons'
import { BrandLogo } from '../Brand'
import Section from '../Containers/Section'
import Navbar from './Navbar'
import NavbarBrand from './NavbarBrand'
import NavbarDropdownContent from './NavbarDropdownContent'
import NavbarDropdownHeader from './NavbarDropdownHeader'
import NavbarDropdownItem from './NavbarDropdownItem'
import NavbarHeader from './NavbarHeader'
import NavbarMenu from './NavbarMenu'
import NavbarNav from './NavbarNav'
import NavbarNavDropdown from './NavbarNavDropdown'
import NavbarNavItem from './NavbarNavItem'
import NavbarToggler from './NavbarToggler'

const OrientSection = styled(Section)`
  background: ${(props) => props.theme.palette['black40']};
`
const Wrapper = (props) => <OrientSection {...props} />

const ButtonLogin = () => <Button>Login</Button>

const Content = () => (
  <React.Fragment>
    <NavbarDropdownItem>
      Link 1
    </NavbarDropdownItem>
    <NavbarDropdownItem>
      Link 2
    </NavbarDropdownItem>
    <NavbarDropdownItem>
      Link 3
    </NavbarDropdownItem>
  </React.Fragment>
)

storiesOf('Navbar', module)
  .add('Example 1', () => (
    <Wrapper>
      <Navbar>
        <NavbarHeader>
          <NavbarBrand>
            <BrandLogo size="40px" />
          </NavbarBrand>
        </NavbarHeader>
        <NavbarMenu>
          <NavbarNav width="auto">
            <NavbarNavDropdown>
              <NavbarDropdownHeader>Header 1</NavbarDropdownHeader>
              <NavbarDropdownContent>
                <Content />
              </NavbarDropdownContent>
            </NavbarNavDropdown>
            <NavbarNavDropdown>
              <NavbarDropdownHeader>Header 2</NavbarDropdownHeader>
              <NavbarDropdownContent>
                <Content />
              </NavbarDropdownContent>
            </NavbarNavDropdown>
          </NavbarNav>
          <NavbarNav width="auto">
            <NavbarNavItem>
              <ButtonLogin />
            </NavbarNavItem>
          </NavbarNav>
        </NavbarMenu>
        <NavbarToggler />
      </Navbar>
    </Wrapper>
  ))
  .add('Example 2', () => (
    <Wrapper>
      <Navbar>
        <NavbarHeader>
          <NavbarBrand>
            <BrandLogo size="40px" />
          </NavbarBrand>
        </NavbarHeader>
        <NavbarMenu toggled>
          <NavbarNav width="auto">
            <NavbarNavDropdown>
              <NavbarDropdownHeader>Header 1</NavbarDropdownHeader>
              <NavbarDropdownContent>
                <Content />
              </NavbarDropdownContent>
            </NavbarNavDropdown>
            <NavbarNavDropdown>
              <NavbarDropdownHeader>Header 2</NavbarDropdownHeader>
              <NavbarDropdownContent>
                <Content />
              </NavbarDropdownContent>
            </NavbarNavDropdown>
          </NavbarNav>
          <NavbarNav width="auto">
            <NavbarNavItem>
              <ButtonLogin />
            </NavbarNavItem>
          </NavbarNav>
        </NavbarMenu>
        <NavbarToggler toggled />
      </Navbar>
    </Wrapper>
  ))
