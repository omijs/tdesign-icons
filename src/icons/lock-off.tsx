import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-lock-off')
export class IconLockOff extends WeElement<IconProps> {
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
<path d="M5.74478 5.72784C6.51627 3.00014 9.02326 1 12 1C15.5898 1 18.5 3.91015 18.5 7.5V9H20.5V22H3.5V9H16.5V7.5C16.5 5.01472 14.4853 3 12 3C9.94163 3 8.20365 4.38286 7.66928 6.27216L7.39712 7.23441L5.47262 6.69009L5.74478 5.72784ZM5.5 11V20H18.5L18.5 11H5.5ZM9 14.5H15V16.5H9V14.5Z" fill="black"/>
</svg>

    )
  }
}