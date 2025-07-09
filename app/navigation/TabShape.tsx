import React from 'react';
import {curveBasis, line} from 'd3-shape';
import Svg, {Path} from 'react-native-svg';
import { SizeConfig } from '../utils/SizeConfig';
import { Colors } from '../utils/constant/Theme';

const TAB_HEIGHT = SizeConfig.height * 11;

const width = SizeConfig.deviceWidth;

const lineGenerator = line();

const rect = lineGenerator([
  [0, 0],
  [width / 2, 0],
  [width, 0],
  [width, TAB_HEIGHT],
  [0, TAB_HEIGHT],
  [0, 0],
]);

const center = lineGenerator.curve(curveBasis)([
  [(width / 5) * 1.7, 0],
  [(width / 5) * 1.97, 0],
  [(width / 5) * 2 + 13, TAB_HEIGHT * 0.5],
  [(width / 5) * 3 - 13, TAB_HEIGHT * 0.5],
  [(width / 5) * 3.02, 0],
  [(width / 5) * 3.2, 0],
]);

const d = `${center} ${rect}`;

export default function TabShape() {
  return (
    <Svg width={width + 3} height={TAB_HEIGHT}>
      <Path fill={Colors.white} {...{d}} />
    </Svg>
  );
}
