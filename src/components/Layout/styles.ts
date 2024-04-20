import { Box } from "@mui/material";
import styled from "styled-components";
import { background } from "styles/colors";

import { mediumDesktop } from "styles/media";

export const layoutStyles = {
  Content: styled.div`
		min-height: 100vh;
		position: relative;
			`,
  Container: styled.main`
		position: relative;
		background- color: ${background};
`,
  Wrapper: styled.div`
		display: grid;
		grid-template-columns: 265px auto;
		min-height: 100vh;
		position: relative;
		max-width: 1080px;
		margin: 30px auto;
		gap: 20px;
		@media ${mediumDesktop} {
			grid-template-columns: 280px auto;
		}
`,
};

export const SvgWrap = styled(Box)`
 &svg .svg-elem-1 {
  fill: transparent;
  -webkit-transition: fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s;
          transition: fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s;
}

&svg.active .svg-elem-1 {
  fill: rgb(59, 151, 211);
}

 &svg .svg-elem-2 {
  fill: transparent;
  -webkit-transition: fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s;
          transition: fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s;
}

&svg.active .svg-elem-2 {
  fill: rgb(59, 151, 211);
}

 &svg .svg-elem-3 {
  fill: transparent;
  -webkit-transition: fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1s;
          transition: fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1s;
}

&svg.active .svg-elem-3 {
  fill: rgb(59, 151, 211);
}

 &svg .svg-elem-4 {
  fill: transparent;
  -webkit-transition: fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.1s;
          transition: fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.1s;
}

&svg.active .svg-elem-4 {
  fill: rgb(59, 151, 211);
}

 &svg .svg-elem-5 {
  fill: transparent;
  -webkit-transition: fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2000000000000002s;
          transition: fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2000000000000002s;
}

&svg.active .svg-elem-5 {
  fill: rgb(59, 151, 211);
}

 &svg .svg-elem-6 {
  fill: transparent;
  -webkit-transition: fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3s;
          transition: fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3s;
}

&svg.active .svg-elem-6 {
  fill: rgb(59, 151, 211);
}

 &svg .svg-elem-7 {
  fill: transparent;
  -webkit-transition: fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.4000000000000001s;
          transition: fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.4000000000000001s;
}

&svg.active .svg-elem-7 {
  fill: rgb(59, 151, 211);
}

 &svg .svg-elem-8 {
  fill: transparent;
  -webkit-transition: fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.5s;
          transition: fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.5s;
}

&svg.active .svg-elem-8 {
  fill: rgb(59, 151, 211);
}

 &svg .svg-elem-9 {
  fill: transparent;
  -webkit-transition: fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.6s;
          transition: fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.6s;
}

&svg.active .svg-elem-9 {
  fill: rgb(59, 151, 211);
}

 &svg .svg-elem-10 {
  fill: transparent;
  -webkit-transition: fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.7000000000000002s;
          transition: fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.7000000000000002s;
}

&svg.active .svg-elem-10 {
  fill: rgb(59, 151, 211);
}

 &svg .svg-elem-11 {
  fill: transparent;
  -webkit-transition: fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.8s;
          transition: fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.8s;
}

&svg.active .svg-elem-11 {
  fill: rgb(44, 62, 80);
}

`