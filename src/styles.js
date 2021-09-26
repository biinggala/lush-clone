import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    ${reset}
    a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
 }
`;
