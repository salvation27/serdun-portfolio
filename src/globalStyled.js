import globalStyled from 'styled-components'

export const Title = globalStyled.h1`
color:red;
font-family: 'Space Grotesk', sans-serif;
font-weight: 700;
font-size: 55px;
background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position:relative;
   z-index: 100;
       line-height: 55px;
`;
export const Text = globalStyled.p`
color:rgba(255,255,255,0.75);
font-family: 'Space Grotesk', sans-serif;
font-weight: 400;
font-size: 20px;
`

export const TitleBlock = globalStyled.h2`
color:red;
font-family: 'Space Grotesk', sans-serif;
font-weight: 700;
font-size: 40px;
background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position:relative;
  display:inline;

&:after {
   position:absolute;
   content:'';
   background:#fff;
   width:300px;
   height:5px ;
    top:-15px;
    left:0px;
    width: 64px;
    height: 4px;
    border-radius: 10px;
    background-color: #fff;
    background: linear-gradient(270deg,#13ADC7 0%,#945DD6 100%);
    // margin-top:20px
  }
`