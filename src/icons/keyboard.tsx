import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-keyboard')
export class IconKeyboard extends WeElement<IconProps> {
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
<path d="M1 3H23V21H1V3ZM3 5V19H21V5H3ZM4.99609 7.5H7V9.50391H4.99609V7.5ZM8.99609 7.5H11V9.50391H8.99609V7.5ZM12.9961 7.5H15V9.50391H12.9961V7.5ZM16.9961 7.5H19V9.50391H16.9961V7.5ZM4.99609 10.5H7V12.5039H4.99609V10.5ZM8.99609 10.5H11V12.5039H8.99609V10.5ZM12.9961 10.5H15V12.5039H12.9961V10.5ZM16.9961 10.5H19V12.5039H16.9961V10.5ZM5 15H19V17H5V15Z" fill="black"/>
</svg>

    )
  }
}