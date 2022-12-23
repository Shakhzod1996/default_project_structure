import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

// ? Colors
export const lightMode = {
     primaryColor: "#309B42",
     darkColor: "#000",
     whiteColor: "#fff",
     whiteColor2: "#eee",
     whiteColor3: "#E8E8E8",
     inputColor: "#f4fff1",
     paragColor: "#A1A1A1",
     checkPointBackground: "#fafafa",
     borderBottomColor: "#e8e8e8",
     ProductItemBackColor: "#fafafa",
};

export const darkMode = {
     primaryColor: "#309B42",
     darkColor: "#fff",
     whiteColor: "#0E1621",
     whiteColor2: "#0E1621",
     whiteColor3: "#0E1621",
     inputColor: "#242F3D",
     paragColor: "#eee",
     checkPointBackground: "#17212B",
     borderBottomColor: "#17212B",
     ProductItemBackColor: "#17212B",
};

// ? Font size
export const buttonSize = "16px";
export const paragraphSize = "14px";
export const miniSize = "12px";

// ? Font weight
export const ButtonWeight = "500";
export const sixHundred = "600";

export const GlobalStyle = createGlobalStyle`
    *{
          margin: 0;
          padding: 0;
          outline:0;
          box-sizing:border-box;
          font-family: 'Inter', sans-serif; 
     }

     body {
          color: ${({ theme }: any) => theme.darkColor};
     }
     #root{
          margin:0 auto;
     }

     p {
          color: ${lightMode.paragColor};
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
     }
     .box-background {
          /* background-color: rgba(75, 167, 55,.5); */
          background-color: rgba(255,255,255,.2);
          border-radius: 8px;
          padding: 8px;
          width: fit-content;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          height: fit-content;
     }
`;

export const Container = styled.div`
     display: flex;
     justify-content: space-evenly;
     align-items: center;
     color: white;
     /* background-color: #131A22; */
`;
