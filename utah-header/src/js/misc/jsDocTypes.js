// @ts-check

/**
 *
 * JsDoc types for the utah header. Types help lower the mental load of object properties as well as
 * helps find "bugs" from invalid typings scenarios.
 *
 * @typedef {Element} ChildNode
 *
 * @interface Partial - typescript has "Partial" built-in while JSDoc does not know about "type utilities"
 *
 * @typedef {'SMALL' | 'MEDIUM' | 'LARGE'} Size
 * Should be Synced with the enumerations/sizes object
 *
 * For menu items that are links to other locations
 * @typedef MenuItemUrlAction {
 *  @property {string} url - the url to which to go when interacted with
 *  @property {boolean} [openInNewTab]
 * }
 *
 * A menu item in the menu, can have children
 * @typedef MenuItem {
 *  @property {MenuItemUrlAction | (function(Event): void) | MenuItem[]} action - onClick function, link url, children menus
 *  @property {string} [className] - can be used for `selected` or any other purpose
 *  @property {ChildNode} [icon] - icon to show next to this menu item
 *  @property {string} title - title for the menu item
 * }
 *
 * @typedef PopupMenu {
 *  @property {string} [className] - className to put on the popupMenu
 *  @property {MenuItem[]} menuItems - the menu items to show in the menu
 *  @property {string} title - the title of the menu
 * }
 *
 * @typedef {(this: GlobalEventHandlers, ev: MouseEvent) => any} OnClick
 *
 * @typedef MediaSizes {
 *   @property {number} mobile - mobile sized render area
 *   @property {number} tabletLandscape - table landscape sized render area
 *   @property {number} tabletPortrait - table portrait sized render area
 * }
 *
 * @typedef Badge {
 *  @property {string} [className] - a class to add to the badge for custom formatting like color
 *  @property {number} [value] - the value to show in the badge
 * }
 *
 * // TODO:
 *      notes: if using Menu or ChildNode
 *               - aria-haspopup="true"
 *               - aria-controls="ID"
 *               - aria-expanded="true/false"
 * @typedef ActionItem {
 *  @property {OnClick | PopupMenu | ChildNode } action - func: onClick callback, Object[]: array of MenuItems, ChildNode: content in a popup.
 *  @property {string} [className] - CSS classes for the action item
 *  @property {Badge} [badge] - the badge to show in the action item's badge icon
 *  @property {string} icon - Should be an SVG
 *  @property {boolean} showTitle – Should the title always be visible?
 *  @property {string} title - Title of the action item (required for accessibility)
 * }
 *
 * @typedef Settings {
 *  @property {ActionItem[]} [actionItems] - action items to show in the header
 *  @property {Element | string} [logo] - Must be an image or an SVG
 *  @property {MediaSizes} mediaSizes - sizes for triggering media queries
 *  @property {boolean} showTitle - should the title be shown (it will always be on the page for accessibility)
 *  @property {string} size - size has to be one of the `Size` types
 *  @property {string} title - the title to place at the top of the page (can be hidden) but needs to be there for accessibility
 *  @property {string} titleURL - when the agency title is triggered, the browser navigates to this url
 * }
 *
 * @typedef GlobalEventType {
 *  @property {function(): void} globalOnClick the current event handler for global on click events
 *  @property {function(): void} globalOnKeypress the current event handler for global on key press events
 * }
 *
 * Partial is a `typescript` utility that takes a type and makes all its properties optional. This works in vs-code IDEs but may
 * be problematic in other IDEs that don't support typescript "out of the box".
 // eslint-disable-next-line jsdoc/no-undefined-types
 * @typedef {Partial<Settings>} SettingsInput
 */

// without this export, `@typedef import` reports this file 'is not a module'...
export default false;
