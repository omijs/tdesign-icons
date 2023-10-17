import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-teahouse')
export class IconTeahouse extends WeElement<IconProps> {
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
<path d="M8 2V3H16V2H18V3H19V5H18V6.66667L20.5 10H22V12H21V20H22V22H2V20H3V12H2V10H3.5L6 6.66667V5H5V3H6V2H8ZM8 5V6H16V5H8ZM16.5 8H7.5L6 10H18L16.5 8ZM19 12H16V20H19V12ZM14 20V12H10V20H14ZM8 20V12H5V20H8Z" fill="black"/>
</svg>

    )
  }
}