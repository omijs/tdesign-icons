import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-arrow-up-down-2')
export class IconArrowUpDown2 extends WeElement<IconProps> {
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
<path d="M17.5001 2.49976L17.5001 11.0855L20.5002 8.08554L21.9144 9.49976L16.5001 14.914L11.0859 9.49975L12.5002 8.08554L15.5001 11.0855L15.5001 2.49976L17.5001 2.49976ZM7.50014 9.08554L12.9144 14.4998L11.5002 15.914L8.50015 12.914L8.50014 21.4998H6.50014L6.50015 12.914L3.50015 15.914L2.08594 14.4998L7.50014 9.08554Z" fill="black"/>
</svg>

    )
  }
}