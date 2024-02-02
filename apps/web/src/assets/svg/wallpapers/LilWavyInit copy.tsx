import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1422 800">
		<defs>
			<linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
				<stop offset="0%" stopColor="#cd4464" />
				<stop offset="100%" stopColor="#7b8af1" />
			</linearGradient>
		</defs>
		<g fill="none" stroke="url(#a)" strokeLinecap="round">
			<path d="M0 272q355.5-47 711 128t711-128" opacity={0.05} />
			<path d="M0 238q355.5-13 711 162t711-162" opacity={0.19} />
			<path d="M0 204q355.5 21 711 196t711-196" opacity={0.32} />
			<path d="M0 170q355.5 55 711 230t711-230" opacity={0.46} />
			<path d="M0 136q355.5 89 711 264t711-264" opacity={0.59} />
			<path d="M0 102q355.5 123 711 298t711-298" opacity={0.73} />
			<path d="M0 68q355.5 157 711 332t711-332" opacity={0.86} />
		</g>
	</svg>
);
export { SvgComponent as LilWavyInit };
