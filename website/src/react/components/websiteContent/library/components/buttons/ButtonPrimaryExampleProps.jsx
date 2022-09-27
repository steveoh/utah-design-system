/* eslint-disable no-param-reassign */
import produce from 'immer';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import {
  CheckBox,
  Form,
  Select,
  SelectOption,
  TextInput,
} from 'utah-design-system-react-library';
import ButtonExamplePropsShape from '../../../../../propTypesShapes/ButtonExamplePropsShape';

const propTypes = {
  setState: PropTypes.func.isRequired,
  state: PropTypes.shape({
    props: ButtonExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

function ButtonPrimaryExampleProps({ setState, state }) {
  // default property values
  useEffect(
    () => {
      setState(produce((draftState) => {
        // eslint-disable-next-line no-param-reassign
        draftState.props.appearance = 'outlined';
        draftState.props.color = 'none';
        draftState.props.title = 'Button Title';
        draftState.props.type = 'button';
      }));
    },
    []
  );

  return (
    <div>
      <div>
        <Form
          // onSubmit(({ state, validationErrors }) => ... do whatever ...)
          state={state}
          setState={setState}
        >
          <TextInput id="props.title" label="Title" className="input--height-xsmall" />

          <CheckBox id="props.isBusy" label="Busy" />

          <TextInput id="props.className" label="Class" className="input--height-xsmall" />

          {/* TODO: what about optgroup? */}
          <Select id="props.appearance" label="Appearance">
            <SelectOption label="Outlined" value="outlined" />
            <SelectOption label="Solid" value="solid" />
          </Select>

          <Select id="props.color" label="Color">
            <SelectOption label="Primary" value="primary" />
            <SelectOption label="Secondary" value="secondary" />
            <SelectOption label="Accent" value="accent" />
            <SelectOption label="None" value="none" />
          </Select>

          <CheckBox id="props.isDisabled" label="Disabled" />

          <TextInput id="props.id" label="ID" className="input--height-xsmall" />

          <Select id="props.type" label="Type">
            <SelectOption label="Button" value="button" />
            <SelectOption label="Reset" value="reset" />
            <SelectOption label="Submit" value="submit" />
          </Select>
        </Form>
      </div>
    </div>
  );
}

ButtonPrimaryExampleProps.propTypes = propTypes;
ButtonPrimaryExampleProps.defaultProps = defaultProps;

export default ButtonPrimaryExampleProps;
