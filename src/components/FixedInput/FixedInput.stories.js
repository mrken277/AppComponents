import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { StringValue } from "react-values";
import {
  withKnobs,
  boolean,
  text,
  select,
  number
} from "@storybook/addon-knobs/react";
import withReadme from "storybook-readme/with-readme";
import Readme from "./README.md";
import FixedInput from ".";
import Box from "../Box";

const sizeOptions = ["base", "middle", "big", "huge"];

storiesOf("Components|FixedInput", module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))
  .add("text", () => (
    <Box paddingProp="16px">
      <StringValue>
        {({ value, set }) => (
          <FixedInput
            value={value}
            onChange={e => {
              set(e.target.value);
              action("onChange")(e);
            }}
            name={text("name", "")}
            type={text("type", "text")}
            size={select("size", sizeOptions, "base")}
            placeholder={text("placeholder", "This is placeholder")}
            autoComplete={text("autoComplete", "off")}
            error={boolean("error", false)}
            warning={boolean("warning", false)}
            disabled={boolean("disabled", false)}
            readOnly={boolean("readOnly", false)}
            autoFocus={boolean("autoFocus", false)}
            onFocus={action("onFocus")}
            onBlur={action("onBlur")}
            maxLength={number("maxLength", 255)}
            tabIndex={number("tabIndex", 1)}
          />
        )}
      </StringValue>
    </Box>
  ));