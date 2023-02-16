/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import {
  componentColors,
  formElementSizesEnum,
  IconButton,
  ICON_BUTTON_APPEARANCE,
  Tab,
  TabGroup,
  Table, TableBody, TableCell,
  TableHead,
  TableHeadCell,
  TableHeadRow, TableRow,
  TableWrapper,
  TabList,
  TabPanel,
  TabPanels,
} from '@utahdts/utah-design-system';
import SandboxExample from '../../../../../sandbox/SandboxExample';
import IconButtonExampleCodeReact from './IconButtonExampleCodeReact';
import IconButtonExampleProps from './IconButtonExampleProps';
import IconButtonExampleRender from './IconButtonExampleRender';
import StaticExample from '../../../../../staticExamples/StaticExample';

const propTypes = {};
const defaultProps = {};

function IconButtonDocumentation() {
  return (
    <div className="documentation-content">
      <h1 id="h1-top">Icon Button</h1>
      <p className="lead-in">
        Icon <code>&lt;buttons&gt;</code> are primarily buttons that include a single icon, without visible text labels by default.
      </p>
      <hr />
      <h2 id="section-example">Example</h2>
      <SandboxExample
        RENDER_EXAMPLE={IconButtonExampleRender}
        PROPS_EXAMPLE={IconButtonExampleProps}
        CODE_EXAMPLE={IconButtonExampleCodeReact}
      />
      <StaticExample
        title="Emphasized Icon Buttons (solid background boundary)"
        renderedExample={(
          <>
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.SOLID}
              color={componentColors.PRIMARY}
              icon={(<span className="utds-icon-before-gear" aria-hidden="true" />)}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.SOLID}
              color={componentColors.SECONDARY}
              icon={(<span className="utds-icon-before-alert" aria-hidden="true" />)}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.SOLID}
              color={componentColors.ACCENT}
              icon={(<span className="utds-icon-before-arrow-right" aria-hidden="true" />)}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.SOLID}
              icon={(<span className="utds-icon-before-x-icon" aria-hidden="true" />)}
              title="Settings"
            />
          </>
        )}
        quickTips={(
          <ul>
            <li>Emphasized icon buttons have a solid background.</li>
            <li>Used to emphasize a button when multiple buttons appear on a page or in close proximity.</li>
            <li>Limit the number of emphasized buttons in a view to ensure your button emphasis isn’t diluted</li>
            <li>
              When used in proximity to other buttons:
              <ul>
                <li>Should appear on the right.</li>
              </ul>
            </li>
          </ul>
        )}
      />
      <StaticExample
        title="Unemphasized Icon Buttons (outlined boundary)"
        renderedExample={(
          <>
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.OUTLINED}
              color={componentColors.PRIMARY}
              icon={(<span className="utds-icon-before-search" aria-hidden="true" />)}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.OUTLINED}
              color={componentColors.SECONDARY}
              icon={(<span className="utds-icon-before-bookmark" aria-hidden="true" />)}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.OUTLINED}
              color={componentColors.ACCENT}
              icon={(<span className="utds-icon-before-check" aria-hidden="true" />)}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.OUTLINED}
              icon={(<span className="utds-icon-before-star" aria-hidden="true" />)}
              title="Settings"
            />
          </>
        )}
        quickTips={(
          <ul>
            <li>Used to deemphasize a button. This is the default look of a button.</li>
            <li>
              When used in proximity to other buttons:
              <ul>
                <li>Should appear on the left of an emphasized button.</li>
              </ul>
            </li>
            <li>Solid outline. Icon matches the button color</li>
          </ul>
        )}
      />
      <StaticExample
        title="Borderless Icon Buttons (no visible button boundary)"
        renderedExample={(
          <>
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
              color={componentColors.PRIMARY}
              icon={(<span className="utds-icon-before-bookmark" aria-hidden="true" />)}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
              color={componentColors.SECONDARY}
              icon={(<span className="utds-icon-before-info" aria-hidden="true" />)}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
              color={componentColors.ACCENT}
              icon={(<span className="utds-icon-before-help" aria-hidden="true" />)}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
              icon={(<span className="utds-icon-before-copy" aria-hidden="true" />)}
              title="Settings"
            />
          </>
        )}
        quickTips={(
          <ul>
            <li>While there may be cases where borderless buttons may sit next to Emphasized or Unemphasized buttons, using consistent button styles should be used when possible to lessen confusion.</li>
            <li>Does not have a border or background, except when hovered, pressed, or selected.</li>
            <li>Used in more compact spaces like icon groupings and displays where text won’t comfortably fit alongside icons.</li>
            <li>Icon buttons should have a minimum touch zone of 36-48px to make it easier to activate on a touch device.</li>
          </ul>
        )}
      />
      <StaticExample
        title="Sizes"
        renderedExample={(
          <>
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.SOLID}
              color={componentColors.PRIMARY}
              icon={(<span className="utds-icon-before-gear" aria-hidden="true" />)}
              size={formElementSizesEnum.SMALL1X}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.SOLID}
              color={componentColors.PRIMARY}
              icon={(<span className="utds-icon-before-gear" aria-hidden="true" />)}
              size={formElementSizesEnum.SMALL}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.SOLID}
              color={componentColors.PRIMARY}
              icon={(<span className="utds-icon-before-gear" aria-hidden="true" />)}
              size={formElementSizesEnum.MEDIUM}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.SOLID}
              color={componentColors.PRIMARY}
              icon={(<span className="utds-icon-before-gear" aria-hidden="true" />)}
              size={formElementSizesEnum.LARGE}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.SOLID}
              color={componentColors.PRIMARY}
              icon={(<span className="utds-icon-before-gear" aria-hidden="true" />)}
              size={formElementSizesEnum.LARGE1X}
              title="Settings"
            />
          </>
        )}
        quickTips={(
          <ul>
            <li>The preferred button size is the default (medium).</li>
            <li>Do not mix button of different sizes in close proximity.</li>
          </ul>
        )}
      />
      <StaticExample
        title="Enabled / Disabled"
        renderedExample={(
          <>
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.SOLID}
              color={componentColors.PRIMARY}
              icon={(<span className="utds-icon-before-gear" aria-hidden="true" />)}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.SOLID}
              color={componentColors.PRIMARY}
              icon={(<span className="utds-icon-before-gear" aria-hidden="true" />)}
              title="Settings"
              isDisabled
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.OUTLINED}
              icon={(<span className="utds-icon-before-copy" aria-hidden="true" />)}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.OUTLINED}
              icon={(<span className="utds-icon-before-copy" aria-hidden="true" />)}
              title="Settings"
              isDisabled
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
              icon={(<span className="utds-icon-before-arrow-right" aria-hidden="true" />)}
              title="Settings"
            />
            <IconButton
              appearance={ICON_BUTTON_APPEARANCE.BORDERLESS}
              icon={(<span className="utds-icon-before-arrow-right" aria-hidden="true" />)}
              title="Settings"
              isDisabled
            />
          </>
        )}
        quickTips={(
          <ul>
            <li>Disabled buttons do not allow user interaction.</li>
            <li>Disabled buttons are visually “grayed out”.</li>
            <li>Use the built-in attribute “disabled” to disable a button.</li>
          </ul>
        )}
      />
      <StaticExample
        title="Hovered"
        renderedExample={(
          <p>Here is an example</p>
        )}
        quickTips={(
          <ul>
            <li>Hover is the state when a pointing cursor enters the button boundary.</li>
            <li>The hover state changes from the normal state to provide the user with a visual cue.</li>
          </ul>
        )}
      />
      <StaticExample
        title="Pressed"
        renderedExample={(
          <p>Here is an example</p>
        )}
        quickTips={(
          <ul>
            <li>The button produces a visual cue that it is being pressed.</li>
          </ul>
        )}
      />

      <h2 id="section-guidance" className="mb-spacing">Guidance</h2>
      <h3 id="section-when-to-use">When to use</h3>
      <ul className="mb-spacing">
        <li><strong>Compact buttons</strong>. Icon buttons should be used when a compact button is required, such as in a toolbar, header, or action bar.</li>
        <li><strong>Adjacent icon buttons</strong>. They are often used when there are 2 or 3 adjacent icon buttons that perform actions on a single item.</li>
      </ul>

      <h3 id="section-when-to-use-something-else">When to use something else</h3>
      <ul className="mb-spacing">
        <li><strong>No associated button action</strong>. Use a plain icon when there is no associated button action.</li>
        <li><strong>Multiple icon buttons in a table row</strong>. Avoid using more than 1 icon button in a table row to avoid confusion and to simplify the table information.</li>
        <li><strong>When space is available, use a button with text</strong>. Generally, use a button with text when there is enough space.</li>
        <li><strong>Use text link for navigation within a paragraph of text</strong>.</li>
        <li><strong>Icon button style as a link</strong>. Avoid using the icon button style as a link. Generally icon buttons are used for actions.</li>
      </ul>

      <h3 id="section-usability-guidance">Usability Guidance</h3>
      <ul className="mb-spacing">
        <li><strong>Clearly communicates purpose</strong>. The icon in the button should clearly communicate the purpose of the button and be unambiguous to the user.</li>
        <li><strong>Compact layout</strong>. Use icon buttons to display actions in a compact layout.</li>
        <li><strong>Triggers action</strong>. Icon buttons can represent opening actions such as opening an overflow menu, a modal or search, or represent binary actions that can be toggled on and off, such as a favorite or bookmark.</li>
        <li><strong>Grouped together or stand alone</strong>. Icon buttons can be grouped together or they can stand alone.</li>
        <li><strong>Presented in a row</strong>. Icon buttons are typically presented in a row when they are grouped together.</li>
        <li><strong>When hovered, include a tool tip</strong>. When the button is hovered, include a tooltip that describes the button’s action, rather than the name of the icon itself.</li>
        <li><strong>Minimum touch zone for touch devices</strong>. Icon buttons should have a minimum touch zone of 36-48px to make it easier to activate on a touch device.</li>
      </ul>

      <h3 id="section-accessibility" className="mb-spacing">Accessability</h3>
      <h4 id="section-contrast">Contrast</h4>
      <ul className="mb-spacing">
        <li>Icon buttons must maintain a 3:1 contrast ratio or better: The button boundary (the outside edge of the button) must maintain a 3:1 contrast ratio or better.</li>
        <li>Icon button text must maintain a 4.5:1 contrast ratio or better.</li>
        <li>The icon button’s focus state should have a 3:1 contrast ratio.</li>
      </ul>
      <h4 id="section-keyboard-interactivity">Keyboard interactivity</h4>
      <ul className="mb-spacing">
        <li>When the icon button receives focus, the tooltip should be visible (except when the icon button displays a popup). </li>
        <li>Buttons natively receive keyboard focus so there&apos;s no need to add a tabindex attribute.</li>
        <li>The icon button should display a visible focus state when users tab to them.</li>
        <li>
          Avoid using non-standard html markup for an icon button such as a div tag.
          <ul>
            <li>The first rule of ARIA: Before you use ARIA, use native HTML elements or attributes first!</li>
          </ul>
        </li>
      </ul>
      <h4 id="section-screen-readers">Screen readers</h4>
      <ul className="mb-spacing">
        <li>
          Icon buttons should have an aria-label or visually hidden text to describe the action for people using assistive technologies, such as screen readers:
          <ul>
            <li>Generally don’t use more than 2 to 3 words.</li>
            <li>Use verbs first; use only verbs where possible e.g. “Save”.</li>
            <li>Avoid unnecessary words and articles, such as “the” or “a”.</li>
            <li>Use sentence case.</li>
          </ul>
        </li>
        <li>Avoid using the words “image” or “icon” in the description label.  For example, if the icon is a magnifying lens used to promote a search, use the word “Search” instead of “magnifying lens”.</li>
      </ul>

      <h2 id="section-settings-props">Settings and Props</h2>
      <div className="documentation-content--small-text">
        <TabGroup defaultValue="segmented-button-props-css">
          <TabList>
            <Tab id="segmented-button-props-css">CSS</Tab>
            <Tab id="segmented-button-props-react">React</Tab>
          </TabList>
          <TabPanels>
            <TabPanel tabId="segmented-button-props-css">
              <TableWrapper>
                <Table className="table--lines-x">
                  <TableHead>
                    <TableHeadRow>
                      <TableHeadCell className="text-left css-classes">Css Classes</TableHeadCell>
                      <TableHeadCell className="text-left">Description</TableHeadCell>
                    </TableHeadRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell><code>.class</code></TableCell>
                      <TableCell>Class description.</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableWrapper>
            </TabPanel>
            <TabPanel tabId="segmented-button-props-react">
              <TableWrapper>
                <Table className="table--lines-x">
                  <TableHead>
                    <TableHeadRow>
                      <TableHeadCell className="text-left">Property</TableHeadCell>
                      <TableHeadCell className="text-left">Type</TableHeadCell>
                      <TableHeadCell className="text-left">Default</TableHeadCell>
                      <TableHeadCell className="text-left">Description</TableHeadCell>
                    </TableHeadRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell><code className="primary-color">props</code></TableCell>
                      <TableCell>
                        <div className="props-code-wrapper">
                          <code>string</code>
                        </div>
                      </TableCell>
                      <TableCell>null</TableCell>
                      <TableCell>
                        What does this do?
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableWrapper>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}

IconButtonDocumentation.propTypes = propTypes;
IconButtonDocumentation.defaultProps = defaultProps;

export default IconButtonDocumentation;
