import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-uninstall')
export class IconUninstall extends WeElement<IconProps> {
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
<path d="M12 1.59375L16.9142 6.45208L15.5081 7.87435L13 5.39478V12.504H11V5.39477L8.49191 7.87435L7.08581 6.45207L12 1.59375ZM2 2.00003H7.5V4.00003H4V14H20V4.00003H16.5V2.00003H22V22H2V2.00003ZM20 16H4V20H20V16ZM5.99805 16.9981H8.00195V19.002H5.99805V16.9981ZM8.99805 16.9981H11.002V19.002H8.99805V16.9981Z" fill="black"/>
</svg>

    )
  }
}