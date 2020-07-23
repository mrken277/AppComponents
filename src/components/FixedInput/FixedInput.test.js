import React from "react";
import { mount, shallow } from "enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";
import FixedInput from ".";
import { Base } from "../../themes";

describe("<FixedInput />", () => {
  const baseProps = {
    value: "text",
    onChange: jest.fn()
  };

  it("renders without error", () => {
    const wrapper = mount(<FixedInput {...baseProps} />);
    expect(wrapper).toExist();
  });

  it("render masked input", () => {
    const mask = [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/];
    const wrapper = mount(<FixedInput mask={mask} {...baseProps} />);
    expect(wrapper).toExist();
  });

  it("not re-render test", () => {
    const wrapper = shallow(<FixedInput {...baseProps} />).instance();

    const shouldUpdate = wrapper.shouldComponentUpdate(wrapper.props);
    expect(shouldUpdate).toBe(false);
  });

  it("re-render test by value", () => {
    const wrapper = shallow(<FixedInput {...baseProps} />).instance();

    const shouldUpdate = wrapper.shouldComponentUpdate({
      ...wrapper.props,
      value: "another text"
    });
    expect(shouldUpdate).toBe(true);
  });

   test("text-input size style test", () => {
    const tree = renderer
      .create(<FixedInput  {...baseProps} size="base" />)
      .toJSON();
    expect(tree).toHaveStyleRule("border", "none");
    expect(tree).toHaveStyleRule("line-height", Base.textInput.lineHeight.base);
    expect(tree).toHaveStyleRule("font-size", Base.textInput.fontSize.base);
    expect(tree).toHaveStyleRule("padding", Base.textInput.padding.base);
    expect(tree).toHaveStyleRule("width", Base.input.width.base);
    

    const tree1 = renderer
      .create(<FixedInput {...baseProps} size="middle" />)
      .toJSON();
    expect(tree1).toHaveStyleRule(
      "line-height",
      Base.textInput.lineHeight.middle
    );
    expect(tree1).toHaveStyleRule("font-size", Base.textInput.fontSize.middle);
    expect(tree1).toHaveStyleRule("padding", Base.textInput.padding.middle);
    expect(tree1).toHaveStyleRule("width", Base.input.width.middle);

    const tree2 = renderer
      .create(<FixedInput {...baseProps} size="big" />)
      .toJSON();
    expect(tree2).toHaveStyleRule("line-height", Base.textInput.lineHeight.big);
    expect(tree2).toHaveStyleRule("font-size", Base.textInput.fontSize.big);
    expect(tree2).toHaveStyleRule("padding", Base.textInput.padding.big);
    expect(tree2).toHaveStyleRule("width", Base.input.width.big);

    const tree3 = renderer
      .create(<FixedInput {...baseProps} size="huge" />)
      .toJSON();
    expect(tree3).toHaveStyleRule(
      "line-height",
      Base.textInput.lineHeight.huge
    );
    expect(tree3).toHaveStyleRule("font-size", Base.textInput.fontSize.huge);
    expect(tree3).toHaveStyleRule("padding", Base.textInput.padding.huge);
    expect(tree3).toHaveStyleRule("width", Base.input.width.huge);


  });

  test("text-input disable style test", () => {
    const tree = renderer
      .create(<FixedInput disabled {...baseProps} />)
      .toJSON();

    expect(tree).toHaveStyleRule("color", Base.input.disableColor);
    expect(tree).toHaveStyleRule(
      "color",
      Base.textInput.disablePlaceholderColor,
      { modifier: "::-webkit-input-placeholder" }
    );
    expect(tree).toHaveStyleRule(
      "color",
      Base.textInput.disablePlaceholderColor,
      { modifier: ":-moz-placeholder" }
    );
    expect(tree).toHaveStyleRule(
      "color",
      Base.textInput.disablePlaceholderColor,
      { modifier: "::-moz-placeholder" }
    );
    expect(tree).toHaveStyleRule(
      "color",
      Base.textInput.disablePlaceholderColor,
      { modifier: ":-ms-input-placeholder" }
    );
    expect(tree).toHaveStyleRule(
      "background-color",
      Base.input.disableBackgroundColor
    );
    expect(tree).toHaveStyleRule("cursor", "default");
  });

  test("text-input without disable style test", () => {
    const tree = renderer.create(<FixedInput border {...baseProps} />).toJSON();
    expect(tree).toHaveStyleRule("color", Base.textInput.placeholderColor, {
      modifier: "::-webkit-input-placeholder"
    });
    expect(tree).toHaveStyleRule("color", Base.textInput.placeholderColor, {
      modifier: ":-moz-placeholder"
    });
    expect(tree).toHaveStyleRule("color", Base.textInput.placeholderColor, {
      modifier: "::-moz-placeholder"
    });
    expect(tree).toHaveStyleRule("color", Base.textInput.placeholderColor, {
      modifier: ":-ms-input-placeholder"
    });

    expect(tree).toHaveStyleRule("color", Base.input.color);
    expect(tree).toHaveStyleRule(
      "background-color",
      Base.input.backgroundColor
    );
    expect(tree).toHaveStyleRule("cursor", "text");
    expect(tree).toHaveStyleRule("border-color", Base.input.borderColor);
    expect(tree).toHaveStyleRule("border-color", Base.input.hoverBorderColor, {
      modifier: ":hover"
    });
    expect(tree).toHaveStyleRule("border-color", Base.input.focusBorderColor, {
      modifier: ":focus"
    });
  });
