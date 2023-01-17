// @ts-check
import domConstants, { getCssClassSelector } from '../../enumerations/domConstants';
import appendChildAll from '../../misc/appendChildAll';
import { renderDOMSingle } from '../../misc/renderDOM';
import renderPopup from '../popup/renderPopup';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import PopupMenuHtml from './html/PopupMenu.html?raw';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import PopupMenuItemHtml from './html/PopupMenuItem.html?raw';

/**
 * @typedef {import('../../misc/jsDocTypes').PopupMenu} PopupMenu
 * @typedef {import('../../misc/jsDocTypes').MenuItem} MenuItem
 */

/**
 * @param {Element} menuUl
 * @param {MenuItem} popupMenuItem
 */
function renderPopupMenuItem(menuUl, popupMenuItem) {
  const menuItemWrapper = renderDOMSingle(PopupMenuItemHtml);

  // three types of action: parent, custom function, link
  if (Array.isArray(popupMenuItem.action)) {
    // === submenu, more menu items! === //
    const subMenu = renderMenu(popupMenuItem, popupMenuItem.action);
    appendChildAll(menuItemWrapper, subMenu);
  } else if (typeof popupMenuItem.action === 'function') {
    // === on click custom action, so hookup onclick === //
    const htmlElement = /** @type {HTMLElement} */(menuItemWrapper);
    htmlElement.onclick = popupMenuItem.action;
  } else {
    // === link object, so hook up href === //
    const aHref = menuItemWrapper.querySelector(getCssClassSelector(domConstants.POPUP_MENU__LINK));
    if (!aHref) {
      throw new Error('renderPopupMenuItem: aHref not found');
    }
    aHref.setAttribute('href', popupMenuItem.action.url);
    if (popupMenuItem.action.openInNewTab) {
      aHref.setAttribute('target', '_blank');
    }
  }

  const titleSpan = menuItemWrapper.querySelector(getCssClassSelector(domConstants.POPUP_MENU__LINK_TEXT));
  if (!titleSpan) {
    throw new Error('renderPopupMenuItem: titleSpan not found');
  }
  titleSpan.appendChild(document.createTextNode(popupMenuItem.title));

  appendChildAll(menuUl, menuItemWrapper);

  /* TODO: show child node popup
  *               * aria-haspopup="true"
  *               * aria-controls="ID"
  *               * aria-expanded="true/false"
  */
  return menuItemWrapper;
}

/**
 * @param {PopupMenu | MenuItem} _parentMenu
 * @param {MenuItem[]} menuItems
 * @returns {Element}
 */
function renderMenu(_parentMenu, menuItems) {
  const menuWrapper = renderDOMSingle(PopupMenuHtml);

  menuItems.forEach((menuItem) => renderPopupMenuItem(menuWrapper, menuItem));
  // TODO: where should PopupMenu.title be exposed?
  return menuWrapper;
}

/**
 * @param {PopupMenu} popupMenu - the action item to add
 * @returns {Element}
 */
export default function renderPopupMenu(popupMenu) {
  const popupWrapper = renderPopup();

  const menuWrapper = renderMenu(popupMenu, popupMenu.menuItems);

  const contentWrapper = popupWrapper.querySelector(getCssClassSelector(domConstants.POPUP_CONTENT_WRAPPER));
  if (!contentWrapper) {
    throw new Error('renderPopupMenu: contentWrapper not found');
  }

  appendChildAll(contentWrapper, menuWrapper);

  return popupWrapper;
}
