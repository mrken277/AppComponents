# ToggleContent

ToggleContent allows to add information which can be hidden/shown by clicking the header

### Usage

```js
import { ToggleContent } from "app-components";
```

```jsx
<ToggleContent>
  <span>Some text</span>
</ToggleContent>
```

#### Properties

| Props   |  Type  | Required | Values |   Default    | Description                      |
| ------- | :----: | :------: | :----: | :----------: | -------------------------------- |
| `open`  | `bool` |    -     |   -    |   `false`    | Switches the state of the component to open or closed          |
| `label` | `text` |    ✅    |   -    | `Some label` | Sets the label for the header |
