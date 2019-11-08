import { createGlobalStyle } from 'styled-components';

export const Colors = {
    white: `#fff`,
    grey_CA: '#CACACA',
    grey_90: '#909090',
    grey_f4: '#F4F6F9',
    greyish_blue: '#83A3D7',
    light_greyish_blue: '#F9FBFF',
    green: '#BDE9BF',
    green_dark: '#53A54C',

    //Labels
    label_green: '#E9FFEA',
    label_yellow: '#F2ECB0',
    label_grey: '#F9FBFF',
    label_orange: '#FFD5AE',
    label_pink: '#F2B0B0',
    label_blue: '#83A3D7',

    PrimaryFont: '#1E1E1E',
    CommonBorder: `#CACACA`
};

export const Theme = {
    mobile: `767px`,
    tablet: `959px`,
    minidesktop: `960px`,
    desktop: `1024px`,
    full_width: `1180px`
};

export const DesktopBelow = `(max-width: 1180px)`;

export const Device = {
    mobile: `(max-width: ${Theme.mobile})`,
    tablet: `(min-width: ${Theme.tablet})`,
    mini_desktop_below: `(max-width: ${Theme.tablet})`,
    mini_desktop: `(min-width: ${Theme.minidesktop})`,
    desktop: `(min-width: ${Theme.desktop})`
};



const GlobalStyles =  createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
        font-size-adjust: 100%;
        overflow: hidden;
    }

    html, body, body > div:first-child, #__next, #__next > div:first-child {
        //display: flex;
        //flex-direction: column;
        //flex-grow: 1;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background: ${Colors.white};
        color: ${Colors.PrimaryFont};
        font-size: 1.4rem;
        max-width: 100vw;
        // overflow-x: hidden;
        overflow: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        
        button {
          cursor: pointer;
          outline: none;
          background: none;
        }
        
        input[type="date"] {
            background-image: url("data:image/svg+xml,%3Csvg width='9' height='6' viewBox='0 0 9 5' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.5 5L0.602886 0.5L8.39711 0.5L4.5 5Z' fill='%231E1E1E'/%3E%3C/svg%3E%0A");
            background-repeat: no-repeat, repeat;
            background-position: right .7em top 50%, 0 0;
            color: ${Colors.PrimaryFont};
        
            &::-webkit-calendar-picker-indicator {
              opacity: 0;
            }
                
            &::-webkit-inner-spin-button {
              display: none;
            }
        }
        
        textarea {
          font-family: inherit;
          padding: 10px;
        }
        
        .css-1uccc91-singleValue,
        input[type="text"] {
          color: ${Colors.PrimaryFont};
        }
        
        div {
          flex-shrink: 0;
        }
    }
    
    h1 {
      font-size: 2rem;
      line-height: 2.4rem;
      font-style: normal;
      font-weight: bold;
      margin: 10px 0 0 0;
      padding: 0 0 20px 0;
    }

    h3 {
        font-size: 26px;
        font-weight: 600;
        margin: 0 0 30px 0;
    }

    h4 {
        margin: 0 0 10px 0;
    }

    a {
        color: #2A2A2A;
        text-decoration: none;
        transition: color 200ms ease;

        :hover {

        }
    }

    img {
        display: block;
        max-width: 100%;
    }

    /* React-Select class styles */
    div[class*="mselect__"] {
        
    }

    .mselect__control--is-focused {
        box-shadow: none !important;
        border-color: hsl(0,0%,80%) !important;
    }

    svg {
        width: 10px;
        height: 10px;
    }

    .modified-select {
        font-size: 14px;
        width: 100%;
        margin: 0 0 15px 0;
    }

    #nprogress .spinner {
        display: none;
    }
`;

export default GlobalStyles;
