import React from 'react'
import { storiesOf } from '@storybook/react'
import BrandName from './BrandName'

storiesOf('Brand/BrandName', module)
  .add('default', () => <BrandName />)
  .add('with size', () => <BrandName size="200px" />)
