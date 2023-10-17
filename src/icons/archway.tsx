import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-archway')
export class IconArchway extends WeElement<IconProps> {
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
<path d="M6 2V3H18V2H20V3H21V5H20.2198L20.8198 8H22V10H21V20H22V22H2V20H3V10H2V8H3.1802L3.7802 5H3V3H4V2H6ZM5.8198 5L5.2198 8H18.7802L18.1802 5H5.8198ZM19 10H16V20H19V10ZM14 20V10H10V20H14ZM8 20V10H5V20H8Z" fill="black"/>
</svg>

    )
  }
}