/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2018 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { StyleSheet, View, ViewPropTypes } from 'react-native';
import {
  colorWhite,
  borderRadiusSm,
  spacingBase,
} from 'bpk-tokens/tokens/base.react.native';
import { shadows } from 'react-native-bpk-styles';
import React from 'react';
import PropTypes from 'prop-types';
import BpkTouchableOverlay from 'react-native-bpk-component-touchable-overlay';

const styles = StyleSheet.create({
  card: {
    backgroundColor: colorWhite,
    borderRadius: borderRadiusSm,
    ...shadows.base(),
  },
  cardPadded: {
    padding: spacingBase,
  },
  cardFocused: shadows.large(),
  cardInner: {
    backgroundColor: 'transparent', // otherwise this view's corners would bleed outwith the outer container
  },
});

const BpkCard = props => {
  const {
    padded,
    children,
    focused,
    style: userStyle,
    innerStyle: userInnerStyle,
    ...rest
  } = props;

  const style = [styles.card];
  const innerStyle = [styles.cardInner];

  if (padded) {
    style.push(styles.cardPadded);
  }
  if (focused) {
    style.push(styles.cardFocused);
  }
  if (userStyle) {
    style.push(userStyle);
  }
  if (userInnerStyle) {
    innerStyle.push(userInnerStyle);
  }

  return (
    <BpkTouchableOverlay
      accessibilityComponentType="button"
      style={style}
      borderRadius="sm"
      {...rest}
    >
      <View style={innerStyle}>{children}</View>
    </BpkTouchableOverlay>
  );
};

BpkCard.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired,
  focused: PropTypes.bool,
  padded: PropTypes.bool,
  style: ViewPropTypes.style,
  innerStyle: ViewPropTypes.style,
};

BpkCard.defaultProps = {
  focused: false,
  padded: true,
  style: null,
  innerStyle: null,
};

export default BpkCard;
