import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-calendar-edit')
export class IconCalendarEdit extends WeElement<IconProps> {
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
<path d="M8 1V4H16V1H18V4H22V6.00122L22.0012 6.00122L21.9998 12.0002L19.9998 11.9998L20 11H4V20H12V22H2V4H6V1H8ZM4 9H20V6H4V9ZM19.2866 13.0858L23.4142 17.2134L18.1276 22.5H14.0011L13.9999 18.3725L19.2866 13.0858ZM18.6148 16.586L19.914 17.8852L20.5858 17.2134L19.2866 15.9142L18.6148 16.586ZM18.4998 19.2994L17.2006 18.0002L16.0001 19.2007L16.0005 20.5H17.2992L18.4998 19.2994Z" fill="black"/>
</svg>

    )
  }
}