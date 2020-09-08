/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import { StateProvider } from './src/StateProvider';
import reducer, { initialState } from "./src/reducer"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./src/theme"

export const wrapRootElement = ({ element }) => (
  <StateProvider initialState={initialState} reducer={reducer}>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </StateProvider>
)
// You can delete this file if you're not using it
