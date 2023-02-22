import popperPlacement from '@utahdts/utah-design-system/react/enums/popperPlacement';
import PropTypes from 'prop-types';

export default PropTypes.exact({
  isVisible: PropTypes.bool,
  placement: PropTypes.oneOf(Object.values(popperPlacement)),
  popupType: PropTypes.oneOf(['onClick', 'onHover']),
});
