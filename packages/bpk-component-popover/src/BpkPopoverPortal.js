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

import Popper from 'popper.js';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import focusStore from 'a11y-focus-store';
import focusScope from 'a11y-focus-scope';
import { Portal, cssModules } from 'bpk-react-utils';

import STYLES from './bpk-popover.scss';
import BpkPopover from './BpkPopover';
import { ARROW_ID } from './constants';

const getClassName = cssModules(STYLES);

class BpkPopoverPortal extends Component {
  constructor() {
    super();

    this.popper = null;
    this.previousTargetElement = null;

    this.onRender = this.onRender.bind(this);
    this.beforeClose = this.beforeClose.bind(this);
  }

  onRender(popoverElement, targetElement) {
    this.position(popoverElement, targetElement);
  }

  beforeClose(done) {
    if (this.popper) {
      this.popper.destroy();
      this.popper = null;
      this.previousTargetElement = null;
    }

    focusScope.unscopeFocus();
    focusStore.restoreFocus();

    done();
  }

  position(popoverElement, targetElement) {
    if (!targetElement) {
      return;
    }

    if (!this.popper || targetElement !== this.previousTargetElement) {
      if (this.popper) {
        this.popper.destroy();
      }

      this.popper = new Popper(targetElement, popoverElement, {
        placement: this.props.placement,
        onCreate: () => {
          targetElement.focus();
          focusStore.storeFocus();
          focusScope.scopeFocus(popoverElement);
        },
        modifiers: {
          arrow: {
            element: `#${ARROW_ID}`,
          },
        },
      });
    }

    this.previousTargetElement = targetElement;

    this.popper.scheduleUpdate();
  }

  render() {
    const {
      target,
      isOpen,
      onClose,
      placement,
      portalStyle,
      portalClassName,
      renderTarget,
      ...rest
    } = this.props;

    const classNames = [getClassName('bpk-popover-portal')];

    if (portalClassName) {
      classNames.push(portalClassName);
    }

    return (
      <Portal
        beforeClose={this.beforeClose}
        className={classNames.join(' ')}
        isOpen={isOpen}
        onClose={onClose}
        onRender={this.onRender}
        style={portalStyle}
        renderTarget={renderTarget}
        target={target}
      >
        <BpkPopover onClose={onClose} {...rest} />
      </Portal>
    );
  }
}

BpkPopoverPortal.propTypes = {
  target: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  placement: PropTypes.oneOf(Popper.placements),
  portalStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  portalClassName: PropTypes.string,
  renderTarget: PropTypes.func,
};

BpkPopoverPortal.defaultProps = {
  placement: 'bottom',
  portalStyle: null,
  portalClassName: null,
  renderTarget: null,
};

export default BpkPopoverPortal;
