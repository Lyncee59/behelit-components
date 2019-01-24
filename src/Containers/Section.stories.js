import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import Section from './Section'

const Text = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
`
const Sample = () => <Text>Hello !</Text>

storiesOf('Containers/Section', module)
  .add('default', () => (
    <Section>
      <Sample />
    </Section>
  ))
  .add('with nature (blocks)', () => (
    <Section nature="blocks">
      <Sample />
    </Section>
  ))
  .add('with nature (diamonds)', () => (
    <Section nature="diamonds">
      <Sample />
    </Section>
  ))
  .add('with height', () => (
    <Section height="300px">
      <Sample />
    </Section>
  ))
