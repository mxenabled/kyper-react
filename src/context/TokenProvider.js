import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { buildTheme } from 'mx-design-tokens'

import { TokenContext } from './TokenContext'

export const TokenProvider = ({ primaryColors={}, scheme='light', children })  => {
  const [tokens, setTokens] = useState(buildTheme(scheme))
  console.log('Stay on target')

  useEffect(() => {
    if (Object.keys(primaryColors).length) {
      setTokens(buildTheme(scheme, primaryColors))
    } else {
      setTokens(buildTheme(scheme))
    }
    console.log(scheme)
  }, [primaryColors, scheme])

  return (
    <TokenContext.Provider value={tokens}>
      {children}
    </TokenContext.Provider>
  )
}

TokenProvider.propTypes = {
  scheme: PropTypes.string,
  primaryColors: PropTypes.object,
}
