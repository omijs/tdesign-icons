import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-code')
export class IconCode extends WeElement<IconProps> {
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
<path d="M0.585938 12L5.53569 7.05028L6.9499 8.46449L3.41436 12L6.9499 15.5356L5.53569 16.9498L0.585938 12ZM8.78747 20.728L13.2725 2.78772L15.2128 3.27279L10.7278 21.2131L8.78747 20.728ZM17.0504 15.5356L20.5859 12L17.0504 8.46449L18.4646 7.05027L23.4144 12L18.4646 16.9498L17.0504 15.5356Z" fill="black"/>
</svg>

    )
  }
}