// @ts-check
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import WaffleIcon from '../renderables/icons/html/WaffleIcon.html?raw';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import QuestionIcon from '../renderables/icons/html/QuestionIcon.html?raw';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import AlertIcon from '../renderables/icons/html/AlertIcon.html?raw';
import sizes from '../enumerations/sizes';

/**
 * @typedef {import('../misc/jsDocTypes').Settings} Settings
*/

/**
 * !~! Do not use defaultSettings directly !~!
 * Interact with `settings` using getSettings() and setSettings().
 * @type {Settings} the current settings of the header
 * */
export default {
  actionItems: [
    {
      actionPopupMenu: {
        menuItems: [
          {
            actionUrl: { url: 'https://google.com?search=how realisitic can you be' },
            title: 'Item #1',
          },
          {
            actionUrl: { url: 'https://utah.gov', openInNewTab: true },
            title: 'Utah.Gov',
          },
          {
            actionFunction: (e) => {
              e.stopPropagation();
              e.preventDefault();
              console.log('Custom menu item triggered');
            },
            title: 'Custom menu item',
          },
          {
            actionMenu: [
              {
                title: 'i am a child',
                actionMenu: [
                  {
                    title: 'i am a child',
                    actionUrl: { url: 'https://dts.utah.gov' },
                  },
                  {
                    title: 'i am a child 2oo',
                    actionUrl: { url: 'https://dts.utah.gov/2' },
                  },
                ],
              },
              {
                title: 'i am a child 2oo',
                actionMenu: [
                  {
                    title: 'i am a child2',
                    actionUrl: { url: 'https://dts.utah.gov' },
                  },
                  {
                    title: 'i am a child 2oo2',
                    actionUrl: { url: 'https://dts.utah.gov/2' },
                  },
                ],
              },
            ],
            title: 'I have children!!',
          },
        ],
        title: 'Divisions Menu',
      },
      className: 'icon-waffle',
      icon: WaffleIcon,
      showTitle: true,
      title: 'Divisions',
    },
    {
      actionOnClick: () => console.log('Alerts clicked'),
      badge: {
        // Note: make sure the `label` is plural/singular to match the value
        label: 'Unread Alert',
        value: 1,
      },
      icon: AlertIcon,
      showTitle: false,
      title: 'Alerts',
    },
    {
      actionDom: (() => {
        const div = document.createElement('div');
        div.appendChild(document.createTextNode('Hello World!'));
        const button = document.createElement('button');
        button.appendChild(document.createTextNode('Do not press me.'));
        div.appendChild(button);
        return div;
      })(),
      badge: {
        // Note: make sure the `label` is plural/singular to match the value
        label: 'Help Items Available',
      },
      icon: QuestionIcon,
      showTitle: false,
      title: 'Help',
    },
  ],
  showTitle: true,
  size: sizes.MEDIUM,
  title: 'Utah Design System',
  titleURL: '/',
  mediaSizes: {
    mobile: 640,
    tabletPortrait: 768,
    tabletLandscape: 1024,
  },
};