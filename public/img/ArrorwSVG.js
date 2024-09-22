import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const ArrorwSVG = (props) => (
    <Svg
        width={371}
        height={88}
        viewBox="0 0 371 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G filter="url(#filter0_d_14_23)">
            <Path
                d="M0 38.9413C21.4776 10.9673 85.826 -27.5189 171.396 42.3309C256.967 112.181 334.966 61.8886 363.265 28.009M363.265 28.009L332.849 31.2093M363.265 28.009L358.965 55.7244"
                stroke="#212F3C"
                strokeWidth={5}
                strokeLinecap="round"
                shapeRendering="crispEdges"
            />
        </G>
        <Defs></Defs>
    </Svg>
);
export default ArrorwSVG;
