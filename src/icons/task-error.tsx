import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-task-error')
export class IconTaskError extends WeElement<IconProps> {
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
<path d="M7 1H17V3H21V12H19V5H17V7H7V5H5V21H12V23H3V3H7V1ZM9 5H15V3H9V5ZM16.1716 14.7574L19 17.5858L21.8284 14.7574L23.2426 16.1716L20.4142 19L23.2426 21.8284L21.8284 23.2426L19 20.4142L16.1716 23.2426L14.7574 21.8284L17.5858 19L14.7574 16.1716L16.1716 14.7574Z" fill="black"/>
</svg>

    )
  }
}