/*
  KYPER-VERSION:0.0.1
*/
import React from 'react'
import { buildTheme } from 'mx-design-tokens'

// Will be the initial value for the provider.
export const TokenContext = React.createContext(buildTheme('light'))
