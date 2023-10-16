import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-user-blocked')
export class IconUserBlocked extends WeElement<IconProps> {
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
<path d="M11.5 4C9.567 4 8 5.567 8 7.5C8 9.433 9.567 11 11.5 11C13.433 11 15 9.433 15 7.5C15 5.567 13.433 4 11.5 4ZM6 7.5C6 4.46243 8.46243 2 11.5 2C14.5376 2 17 4.46243 17 7.5C17 10.5376 14.5376 13 11.5 13C8.46243 13 6 10.5376 6 7.5ZM18 14.5C16.067 14.5 14.5 16.067 14.5 18C14.5 18.6031 14.652 19.17 14.9205 19.6652L19.6654 14.9206C19.1701 14.6521 18.6032 14.5 18 14.5ZM21.0795 16.3348L16.3346 21.0794C16.8299 21.3479 17.3968 21.5 18 21.5C19.933 21.5 21.5 19.933 21.5 18C21.5 17.3969 21.348 16.83 21.0795 16.3348ZM12.5 18C12.5 14.9624 14.9624 12.5 18 12.5C19.5186 12.5 20.895 13.1168 21.8892 14.111C22.8833 15.1052 23.5 16.4816 23.5 18C23.5 21.0376 21.0376 23.5 18 23.5C16.4814 23.5 15.105 22.8832 14.1108 21.889C13.1167 20.8948 12.5 19.5184 12.5 18ZM8 16C5.79086 16 4 17.7909 4 20H11.0508V22H2V20C2 16.6863 4.68629 14 8 14H11V16H8Z" fill="black"/>
</svg>

    )
  }
}