import React from 'react'
import { mount } from 'enzyme'
import { ThemeProvider } from '../src/Theme'

export const mountWithTheme = (tree) => mount(<ThemeProvider>{tree}</ThemeProvider>)