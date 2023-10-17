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
import { IconName } from 'tdesign-icons-omi';

@tag('icon-demo')
class IconDemo extends Component {

  render() {
    return (
      <>
        <div>Hello TICon</div>
        <t-icon-icon-name />
      </>
    )
  }
}

render(<icon-demo />, document.body)
```

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## License

MIT