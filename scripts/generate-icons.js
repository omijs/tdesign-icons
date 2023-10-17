import * as fs from 'fs'
import * as path from 'path'

const svgDir = 'src/_icons/svg'
const iconDir = 'dist/icons'
const indexFile = 'dist/index.js'


const srcFilePath = 'src/icon.css'
const distFilePath = 'dist/icon.css'

// 同步读取源文件的内容
const data = fs.readFileSync(srcFilePath, 'utf8');

// 同步写入目标文件
fs.writeFileSync(distFilePath, data, 'utf8');

const folderPath = 'dist';
if (!fs.existsSync(folderPath)) {
  // 文件夹不存在，创建文件夹
  fs.mkdirSync(folderPath);
}

// 读取 SVG 目录
fs.readdir(svgDir, (err, files) => {
  if (err) {
    console.error('Error reading SVG directory:', err)
    return
  }

  let exports = ''

  // 遍历 SVG 文件
  files.forEach((file) => {
    if (path.extname(file) === '.svg') {
      const iconName = path.basename(file, '.svg')

      // 读取 SVG 文件内容
      const svgContent = fs.readFileSync(path.join(svgDir, file), 'utf-8')

      // 创建一个变量来保存 SVG 内容
      const variableName = `${iconName}Svg`
      exports += `export { Icon${removeDashAndCapitalize(
        iconName
      )} } from './icons/${iconName}'\n`
    }
  })

  // 将所有 SVG 内容写入 index.ts 文件
  fs.writeFileSync(indexFile, exports)
  console.log('Generated index.ts')
})

// 确保 icons 目录存在
if (!fs.existsSync(iconDir)) {
  fs.mkdirSync(iconDir)
}

// 读取 SVG 目录
fs.readdir(svgDir, (err, files) => {
  if (err) {
    console.error('Error reading SVG directory:', err)
    return
  }

  // 遍历 SVG 文件
  files.forEach((file) => {
    if (path.extname(file) === '.svg') {
      const iconName = path.basename(file, '.svg')
      const iconPath = path.join(iconDir, `${iconName}.js`)

      // 读取 SVG 文件内容
      const svgContent = fs.readFileSync(path.join(svgDir, file), 'utf-8')

      // 创建 Omi icon 元素
      const iconComponent = `import { h, define, WeElement, classNames } from 'omi'
import css from '../icon.css'
 
export class Icon${removeDashAndCapitalize(
        iconName
      )} extends WeElement {
  static css = css

  static defaultProps = {
    size: '1em',
    style: { fill: '#000' },
  }

  static propTypes = {
    size: [String, Number],
    style: Object,
    class: String,
  }

  render(props) {
    const iconClassName = classNames('t-icon', props.class, {
      ['t-size-s']: props.size === 'small',
      ['t-size-m']: props.size === 'medium',
      ['t-size-l']: props.size === 'large',
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
}

define('t-icon-${iconName}', Icon${removeDashAndCapitalize(
        iconName
      )})
`
      // 将 Omi icon 元素写入文件
      fs.writeFileSync(iconPath, iconComponent)
    }
  })
})

function transformSvgContent(svgContent) {
  return svgContent.replace(
    /<svg width="\d{2}" height="\d{2}"/,
    `<svg 
  class={iconClassName} 
  width={flag ? '24' : props.size}
  height={flag ? '24' : props.size}
  style={iconStyle}`
  )
}

function removeDashAndCapitalize(str) {
  const words = str.split('-')
  const capitalizedWords = words.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase()
    const restOfWord = word.slice(1)
    return firstLetter + restOfWord
  })
  return capitalizedWords.join('')
}
