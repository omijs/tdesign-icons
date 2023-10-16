import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-filter-off')
export class IconFilterOff extends WeElement<IconProps> {
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
<path d="M3.00015 1.58594L21.4144 20.0002L20.0002 21.4144L14.5002 15.9144V21.0002H9.50015V12.8175L4.93253 6.34675L1.58594 3.00015L3.00015 1.58594ZM11.5002 12.9144V19.0002H12.5002V13.9144L11.5002 12.9144ZM6.54483 3.00015H21.4301L15.3956 11.549L13.7617 10.3956L17.5702 5.00015H9.51012L8.61122 5.01807L6.54483 3.00015Z" fill="black"/>
</svg>

    )
  }
}