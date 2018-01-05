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

import React from 'react';
import PropTypes from 'prop-types';
import { wrapDisplayName } from 'bpk-react-utils';

export default function withLazyLoading(Component, documentRef) {
  class WithLazyLoading extends React.Component {
    constructor() {
      super();

      this.setInView = this.setInView.bind(this);
      this.removeEventListeners = this.removeEventListeners.bind(this);
      this.checkInView = this.checkInView.bind(this);
      this.isInViewPort = this.isInViewPort.bind(this);
      this.supportsPassiveEvents = this.supportsPassiveEvents.bind(this);

      this.state = {
        inView: false,
      };
    }

    componentDidMount() {
      documentRef.addEventListener('scroll', this.checkInView, {
        capture: true,
        ...this.getPassiveArgs(),
      });
      documentRef.addEventListener('resize', this.checkInView);
      documentRef.addEventListener('orientationchange', this.checkInView);
      documentRef.addEventListener('fullscreenchange', this.checkInView);
      // call checkInView immediately incase the
      // component is already in view prior to scrolling
      this.checkInView();
    }

    componentWillUnmount() {
      this.removeEventListeners();
    }

    setInView() {
      this.setState(() => ({
        inView: true,
      }));
      this.removeEventListeners();
    }

    getPassiveArgs() {
      return this.supportsPassiveEvents() ? { passive: true } : {};
    }

    removeEventListeners() {
      documentRef.removeEventListener('scroll', this.checkInView, {
        capture: true,
        ...this.getPassiveArgs(),
      });
      documentRef.removeEventListener('resize', this.checkInView);
      documentRef.removeEventListener('orientationchange', this.checkInView);
      documentRef.removeEventListener('fullscreenchange', this.checkInView);
    }

    checkInView() {
      if (this.isInViewPort()) {
        this.setInView();
      }
    }

    // This function is taken from modernizr
    // See https://github.com/modernizr/modernizr
    // eslint-disable-next-line
    supportsPassiveEvents() {
      let supportsPassiveOption = false;
      try {
        const opts = Object.defineProperty({}, 'passive', {
          // eslint-disable-next-line getter-return
          get() {
            supportsPassiveOption = true;
          },
        });
        window.addEventListener('test', null, opts);
        window.removeEventListener('test');
      } catch (e) {
        return false;
      }
      return supportsPassiveOption;
    }

    isInViewPort() {
      const rect = this.element.getBoundingClientRect();

      const viewPortHeight = Math.max(
        window.innerHeight,
        documentRef.documentElement.clientHeight,
      );
      const viewPortWidth = Math.max(
        window.innerWidth,
        documentRef.documentElement.clientWidth,
      );

      return (
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.top < viewPortHeight &&
        rect.left < viewPortWidth
      );
    }

    render() {
      const { style, className, ...rest } = this.props;

      return (
        <div
          id={this.placeholderReference}
          ref={element => {
            this.element = element;
          }}
          style={style}
          className={className}
        >
          <Component inView={this.state.inView} {...rest} />
        </div>
      );
    }
  }
  WithLazyLoading.displayName = wrapDisplayName(Component, 'withLazyLoading');

  WithLazyLoading.propTypes = {
    style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    className: PropTypes.string,
  };

  WithLazyLoading.defaultProps = {
    style: null,
    className: null,
  };

  return WithLazyLoading;
}
