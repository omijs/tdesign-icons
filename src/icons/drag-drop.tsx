import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-drag-drop')
export class IconDragDrop extends WeElement<IconProps> {
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

  render(props: OmiProps<IconProps>) {
    const iconClassName = classNames(prefix('icon'), props.class, {
      [`${prefix('size-s')}`]: props.size === 'small',
      [`${prefix('size-m')}`]: props.size === 'medium',
      [`${prefix('size-l')}`]: props.size === 'large',
    })
    const flag = props.size === 'small' || props.size === 'medium' || props.size === 'large'
    const iconStyle = {
      ...props.style,
      fontSize: props.size,
    }
    return ( 
<svg 
  class={iconClassName} 
  width={flag ? '24' : props.size}
  height={flag ? '24' : props.size}
  style={iconStyle} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99902 15V2H14.999V7H12.999V4L3.99902 4L3.99902 13H6.99902L6.99902 15H1.99902ZM7.99902 20L7.99902 8L19.999 8V13.5L17.999 13.5L17.999 10H9.99902L9.99902 18H13.499V20H7.99902ZM16.7771 23.6838L13.4096 13.3784L23.6684 16.7845L19.0116 19.0116L16.7771 23.6838Z" fill="black"/>
</svg>

    )
  }
}