# tdesign-icons-omi

> TDesign icons for Omi framework

## Description

tdesign-icons-omi is a collection of icons specifically designed for the Omi framework. It provides a wide range of high-quality icons that can be easily integrated into your Omi projects.

## Installation

```bash
npm install tdesign-icons-omi
```

## Usage 

```tsx
import { render, signal, tag, Component, h } from 'omi'

import 'tdesign-icons-omi/add-rectangle'
import 'tdesign-icons-omi/minus-rectangle'

const count = signal(0)

function add() {
  count.value++
}

function sub() {
  count.value--
}

@tag('counter-demo')
class CounterDemo extends Component {
  static css = 'span { color: red; }'

  render() {
    return (
      <>
        <t-icon-minus-rectangle onClick={sub} />
        <span>{count.value}</span>
        <t-icon-add-rectangle onClick={add} />
      </>
    )
  }
}

render(<counter-demo />, document.body)
```

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## License

MIT