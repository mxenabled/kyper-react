import PropTypes from 'prop-types'
import React from 'react'

import { TokenContext } from './TokenContext'

export const TokenProvider = props => {
  return <TokenContext.Provider value={props.tokens}>{props.children}</TokenContext.Provider>
}

TokenProvider.propTypes = {
  tokens: PropTypes.object.isRequired,
}
