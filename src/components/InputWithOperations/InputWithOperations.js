import React from "react";
import TextInput from "../TextInput";
import RoundButton from "../RoundButton";
import StyledInputWithOperations from "./StyledInputWithOperations";
import PropTypes from "prop-types";



class InputWithOperations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.value
    };
  }

  onClickOperations = (e) => {
    const operation = e.currentTarget.dataset.operation;
    const { counter } = this.state;
    let value = +counter;
    if (operation === "plus") {
      value = ++value;
    }
    if (operation === "minus") {
      value = value > 0 ? --value : value;
    }
    this.setState({
       counter: value
     });

  };
  onChangeInput = e => {
    this.setState({
      counter: +e.target.value
    });
  };

  render() {
    return (
      <StyledInputWithOperations
        error={this.props.error}
        size={this.props.size}
        warning={this.props.warning}
        disabled={this.props.disabled}
        scale={this.props.scale}
        style={this.props.style}
      >
        <RoundButton
          {...this.props}
          type={"minus"}
          className="textInput__operations left"
          onClick={this.onClickOperations}
          data-operation={"minus"}
        />
        <TextInput
          {...this.props}
          border={false}
          type="number"
          className="textInput__operations--input"
          value={
            this.state.counter === 0 ? this.props.value : this.state.counter
          }
          onChange={this.onChangeInput}
        />
        <RoundButton
          {...this.props}
          type={"plus"}
          className="textInput__operations right"
          onClick={this.onClickOperations}
          data-operation={"plus"}
        />
      </StyledInputWithOperations>
    );
  }
}

InputWithOperations.propTypes = {
  value: PropTypes.number,
  size: PropTypes.oneOf(["base", "middle", "big", "huge"]),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  warning: PropTypes.bool,
  scale: PropTypes.bool,
  style: PropTypes.object
};

InputWithOperations.defaultProps = {
  type: "text",
  value: 0,
  maxLength: 255,
  size: "base",
  tabIndex: -1,
  autoComplete: "off",
  keepCharPositions: false
};

export default InputWithOperations;
