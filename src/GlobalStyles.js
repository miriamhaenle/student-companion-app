import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  box-sizing: border-box;
}
:root {
  --headlineFont: 'Dosis', sans-serif;
  --hotpink: #FF69B4;
  --lightsalmon: #FFA987;
  --seashell: #F7EBE8;
  --yet: #444140;
  --raisinblack: #1E1E24;

}

body {
  font-family: 'Raleway', sans-serif;
  color: var(--seashell);
  margin: 0;
  background: var(--hotpink);
  font-weight: 300;
  
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--headlineFont);
}
`
