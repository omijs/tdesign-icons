import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-swear-1')
export class IconSwear1 extends WeElement<IconProps> {
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
<g id="&#229;&#146;&#146;&#233;&#170;&#130;1-swear-1">
<g id="Union">
<path d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM6.76874 8.13397L10.2328 10.134L9.23284 11.866L5.76874 9.86603L6.76874 8.13397ZM18.2328 9.86603L14.7687 11.866L13.7687 10.134L17.2328 8.13397L18.2328 9.86603ZM8.01929 16.8045C8.41853 14.8015 9.90954 13 12 13C14.0905 13 15.5815 14.8015 15.9807 16.8045L16.219 18H7.78101L8.01929 16.8045ZM10.4446 16H13.5554C13.1334 15.3383 12.5354 15 12 15C11.4646 15 10.8666 15.3383 10.4446 16Z" fill="black"/>
</g>
</g>
</svg>

    )
  }
}