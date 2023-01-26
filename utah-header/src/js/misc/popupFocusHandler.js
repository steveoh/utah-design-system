// @ts-check
import { createPopper } from '@popperjs/core';
import domConstants from '../enumerations/domConstants';
import showHideElement from './showHideElement';

/**
 * @typedef PopupFocusHandlerOptions {
 *  @property {(() => boolean) | undefined} isPerformPopup should the popup pop open? Helpful for utahId that doesn't pop until user loaded
 *  @property {(function(Event): void) | undefined} onClick should the popup pop open? Helpful for utahId that doesn't pop until user loaded
 * }
 */

/**
 * Tracking focus of a wrapper that has a button for toggling and a popup inside of it
 * for both onClicks AND tabbing to focus is pretty complicated. The idea is that while the
 * button OR menu has focus, the menu is shown. Also global events like clicking off the wrapper
 * or pressing escape should also close the popup.
 *
 * @param {HTMLElement} wrapper the wrapper containing the button and popup
 * @param {HTMLElement} button the button that toggles the popup to open/close
 * @param {HTMLElement} popup the actual popup being opened and closed
 * @param {PopupFocusHandlerOptions | undefined} options
 */
export default function popupFocusHandler(wrapper, button, popup, options) {
  wrapper.addEventListener('focusin', () => {
    if (!options?.isPerformPopup || options.isPerformPopup()) {
      createPopper(button, popup, {
        placement: 'bottom',
        modifiers: [
          {
            name: 'offset',
            options: { offset: [0, 11] },
          },
        ],
      });
      showHideElement(popup, true, domConstants.POPUP__VISIBLE, domConstants.POPUP__HIDDEN);
      button.setAttribute('aria-expanded', 'true');
    }
  });
  wrapper.addEventListener('focusout', () => {
    if (!options?.isPerformPopup || options.isPerformPopup()) {
      showHideElement(popup, false, domConstants.POPUP__VISIBLE, domConstants.POPUP__HIDDEN);
      button.setAttribute('aria-expanded', 'false');
    }
  });
  let isButtonFocusedBeforeClick = null;

  // eslint-disable-next-line no-param-reassign
  button.onmousedown = () => {
    if (!options?.isPerformPopup || options.isPerformPopup()) {
      // remember if is focused BEFORE click to know if menu needs shown or hidden during onclick
      // the loop checks if the WRAPPER has something focused in it instead of just checking if the button is focused
      isButtonFocusedBeforeClick = false;
      for (let parent = document.activeElement; parent && !isButtonFocusedBeforeClick; parent = parent.parentElement) {
        isButtonFocusedBeforeClick = parent === wrapper;
      }
    }
  };

  // eslint-disable-next-line no-param-reassign
  button.onclick = (e) => {
    if (!options?.isPerformPopup || options.isPerformPopup()) {
      e.stopPropagation();
      e.preventDefault();

      button.setAttribute('aria-expanded', 'true');

      if (!isButtonFocusedBeforeClick && button === document.activeElement) {
        createPopper(
          button,
          popup,
          {
            placement: 'bottom',
            modifiers: [
              {
                name: 'offset',
                options: { offset: [0, 11] },
              },
            ],
          }
        );
        showHideElement(popup, true, domConstants.POPUP__VISIBLE, domConstants.POPUP__HIDDEN);
      } else if (isButtonFocusedBeforeClick) {
        showHideElement(popup, false, domConstants.POPUP__VISIBLE, domConstants.POPUP__HIDDEN);
        button.setAttribute('aria-expanded', 'false');
        /** @type {HTMLElement | null} */(document.activeElement)?.blur();
      }
    }
    if (options?.onClick) {
      options.onClick(e);
    }
  };
}