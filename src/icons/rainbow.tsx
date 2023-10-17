import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-rainbow')
export class IconRainbow extends WeElement<IconProps> {
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
<path d="M12 8C7.02944 8 3 12.0294 3 17V18H1V17C1 10.9249 5.92487 6 12 6C18.0751 6 23 10.9249 23 17V18H21V17C21 12.0294 16.9706 8 12 8ZM12 11C8.68629 11 6 13.6863 6 17V18H4V17C4 12.5817 7.58172 9 12 9C16.4183 9 20 12.5817 20 17V18H18V17C18 13.6863 15.3137 11 12 11ZM12 14C10.3431 14 9 15.3431 9 17V18H7V17C7 14.2386 9.23858 12 12 12C14.7614 12 17 14.2386 17 17V18H15V17C15 15.3431 13.6569 14 12 14Z" fill="black"/>
</svg>

    )
  }
}