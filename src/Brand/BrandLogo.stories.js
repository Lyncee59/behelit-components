import React from 'react'
import { storiesOf } from '@storybook/react'
import BrandLogo from './BrandLogo'

storiesOf('Brand/BrandLogo', module)
  .add('default', () => <BrandLogo />)
  .add('with size', () => <BrandLogo size="200px" />)
