import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-numbers-0-1')
export class IconNumbers01 extends WeElement<IconProps> {
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
<path d="M17 9C17 6.23858 14.7614 4 12 4H11V4.10002C8.71776 4.56329 7 6.58104 7 9V15C7 17.7614 9.23858 20 12 20C14.7614 20 17 17.7614 17 15V9ZM12 6C13.6569 6 15 7.34315 15 9V15C15 16.6569 13.6569 18 12 18C10.3431 18 9 16.6569 9 15V9C9 7.34315 10.3431 6 12 6Z" fill="black"/>
</svg>

    )
  }
}