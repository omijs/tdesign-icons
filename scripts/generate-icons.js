const fs = require('fs');
const path = require('path');

const svgDir = path.join(__dirname, '../src/_icons/svg');
const iconDir = path.join(__dirname, '../dist/icons');

// 确保 icons 目录存在
if (!fs.existsSync(iconDir)) {
  fs.mkdirSync(iconDir);
}

// 读取 SVG 目录
fs.readdir(svgDir, (err, files) => {
  if (err) {
    console.error('Error reading SVG directory:', err);
    return;
  }

  // 遍历 SVG 文件
  files.forEach((file) => {
    if (path.extname(file) === '.svg') {
      const iconName = path.basename(file, '.svg');
      const iconPath = path.join(iconDir, `${iconName}.tsx`);

      // 读取 SVG 文件内容
      const svgContent = fs.readFileSync(path.join(svgDir, file), 'utf-8');

      // 创建 Omi icon 元素
      const iconComponent = `import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.less'

@tag('t-icon-${iconName}')
export class Icon${removeDashAndCapitalize(iconName)} extends WeElement<IconProps> {
  static css = css

  static defaultProps = {
    size: '1em',
    style: { fill: '#000' },
  }

  static propTypes = {
    size: [String, Number],
    onClick: Function,
    style: Object,
    class: String,
  }

  render(props: OmiProps<IconProps>) {
    const iconClassName = classNames(prefix('icon'), props.class, {
      [\`\${prefix('size-s')}\`]: props.size === 'small',
      [\`\${prefix('size-m')}\`]: props.size === 'medium',
      [\`\${prefix('size-l')}\`]: props.size === 'large',
    })
    const flag = props.size === 'small' || props.size === 'medium' || props.size === 'large'
    const iconStyle = {
      ...props.style,
      fontSize: props.size,
    }
    return ( 
${transformSvgContent(svgContent)}
    )
  }
}`
      // 将 Omi icon 元素写入文件
      fs.writeFileSync(iconPath, iconComponent);

    }
  });
});



function transformSvgContent(svgContent) {
  return svgContent.replace(/<svg width="\d{2}" height="\d{2}"/, `<svg 
  class={iconClassName} 
  width={flag ? '24' : props.size}
  height={flag ? '24' : props.size}
  style={iconStyle}`)
}
function removeDashAndCapitalize(str) {
  const words = str.split("-");
  const capitalizedWords = words.map(word => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1);
    return firstLetter + restOfWord;
  });
  return capitalizedWords.join("");
}