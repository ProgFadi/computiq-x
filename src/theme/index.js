

import { createTheme } from '@mui/material/styles';
import {  colors} from  '@material-ui/core';
import _ from 'lodash'
import {THEMES} from '../common/Constants'
const themesOptions = [
  {
    name: THEMES.LIGHT,
    overrides: {
      MuiInputBase: {
        input: {
          '&::placeholder': {
            opacity: 1,
            color: colors.blueGrey[600]
          }
        }
      }
    },
    palette: {
      type: 'light',
      action: {
        active: colors.blueGrey[600]
      },
      background: {
        default: colors.common.white,
        dark: colors.common.white,
        paper: colors.common.white
      },
      primary: {
        main: '#00bbf0'//ex: top bar
      },
      secondary: {
        main: '#fdb44b' // 
      },
      text: {
        primary: colors.blueGrey[900],
        secondary: colors.blueGrey[600]
      }
    }
  },
  {
    name: THEMES.ONE_DARK,
    palette: {
      type: 'dark',
      action: {
        active: 'rgba(255, 255, 255, 0.54)',
        hover: 'rgba(255, 255, 255, 0.04)',
        selected: 'rgba(255, 255, 255, 0.08)',
        disabled: 'rgba(255, 255, 255, 0.26)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        focus: 'rgba(255, 255, 255, 0.12)'
      },
      background: {
        default: '#005792',
        dark:'#f0f0f0',
        paper: colors.common.white
      },
      primary: {
        main: '#00204a'
      },
      secondary: {
        main: '#fdb44b'
      },
      text: {
        primary: '#2d2d2e',
        secondary: '#8a8a8a'
      }
    }
  },
  {
    name: THEMES.UNICORN,
    palette: {
      type: 'dark',
      action: {
        active: 'rgba(255, 255, 255, 0.54)',
        hover: 'rgba(255, 255, 255, 0.04)',
        selected: 'rgba(255, 255, 255, 0.08)',
        disabled: 'rgba(255, 255, 255, 0.26)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        focus: 'rgba(255, 255, 255, 0.12)'
      },
      background: {
        default: '#2a2d3d',
        dark: '#00204a',
        paper: '#005792'
      },
      primary: {
        main: '#00bbf0'
      },
      secondary: {
        main: '#fdb44b'
      },
      text: {
        primary: '#f6f5f8',
        secondary: '#9699a4'
      }
    }
  }
];

const baseOptions = {
    direction:'ltr'
}
export const createCustomTheme = (config = {}) => {
    let themeOptions = themesOptions.find((theme) => theme.name === config.theme);
    console.log('selected theme is ', themeOptions)  
    if (!themeOptions) {
      console.warn(new Error(`The theme ${config.theme} is not valid`));
      [themeOptions] = themesOptions;
    }
    console.log('theme before update,' , themeOptions)
    let theme = createTheme(
      _.merge(
        {},
        baseOptions,
        themeOptions,
        { direction: config.direction }
      )
    );

    console.log('last theme object: ',theme)
    return theme;
  }
  