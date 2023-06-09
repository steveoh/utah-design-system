import PropTypes from 'prop-types';
import { BUTTON_APPEARANCE, BUTTON_TYPES } from '../../enums/buttonEnums';
import componentColors from '../../enums/componentColors';
import formElementSizesEnum from '../../enums/formElementSizesEnum';
import RefShape from '../../propTypesShapes/RefShape';
import handleEvent from '../../util/handleEvent';
import joinClassNames from '../../util/joinClassNames';
import Spinner from '../widgetsIndicators/Spinner';

const propTypes = {
  // the appearance of the button
  appearance: PropTypes.oneOf([
    BUTTON_APPEARANCE.OUTLINED,
    BUTTON_APPEARANCE.SOLID,
  ]),
  // most often is the title of the button, but can also contain most anything
  children: PropTypes.node.isRequired,
  // modify your button via classname like 'button--primary' and other modifiers found in the button.scss
  className: PropTypes.string,
  // the base color of the button
  color: PropTypes.oneOf([
    componentColors.PRIMARY,
    componentColors.SECONDARY,
    componentColors.ACCENT,
    componentColors.NONE,
  ]),
  // a ref to attach to the actual DOM <button> element
  innerRef: RefShape,
  // an icon for the left/right side
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  // the button id
  id: PropTypes.string,
  // if the button is busy then it shows a spinner indicator on it and disables the button
  isBusy: PropTypes.bool,
  // button isDisabled state
  isDisabled: PropTypes.bool,
  // event for when the button is clicked: (e) => { ... do something with e ...}
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf([
    formElementSizesEnum.SMALL1X,
    formElementSizesEnum.SMALL,
    formElementSizesEnum.MEDIUM,
    formElementSizesEnum.LARGE,
    formElementSizesEnum.LARGE1X,
  ]),
  // button type
  type: PropTypes.oneOf([
    BUTTON_TYPES.BUTTON,
    BUTTON_TYPES.RESET,
    BUTTON_TYPES.SUBMIT,
  ]),
};
const defaultProps = {
  appearance: BUTTON_APPEARANCE.OUTLINED,
  className: null,
  color: componentColors.NONE,
  innerRef: null,
  isBusy: false,
  iconLeft: null,
  iconRight: null,
  isDisabled: false,
  id: null,
  size: formElementSizesEnum.MEDIUM,
  type: BUTTON_TYPES.BUTTON,
};

function Button({
  appearance,
  children,
  className,
  color,
  innerRef,
  isBusy,
  iconLeft,
  iconRight,
  isDisabled,
  id,
  onClick,
  size,
  type,
  ...rest
}) {
  return (
    <button
      className={joinClassNames(
        'button',
        className,
        `button--${appearance}`,
        // default color is none
        (color && color !== 'none') ? `button--${color}-color` : null,
        // default size is medium
        (size && size !== formElementSizesEnum.MEDIUM) ? `button--${size}` : null
      )}
      disabled={isDisabled || isBusy}
      id={id}
      onClick={handleEvent((e) => onClick(e))}
      ref={innerRef}
      // eslint-disable-next-line react/button-has-type
      type={type}
      {...rest}
    >
      {
        iconLeft
          ? <span className="button--icon button--icon-left">{iconLeft}</span>
          : null
      }
      {children}
      {
        iconRight
          ? <span className="button--icon button--icon-right">{iconRight}</span>
          : null
      }
      {
        // How to check if no children? How to center Spinner if empty?
        isBusy
          ? <Spinner value={0.25} size={size === formElementSizesEnum.LARGE1X ? 24 : 22} strokeWidth={size === formElementSizesEnum.LARGE1X ? 14 : 12} className="ml-spacing-xs" /> : null
      }
    </button>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
