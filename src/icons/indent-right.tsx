import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-indent-right')
export class IconIndentRight extends WeElement<IconProps> {
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
<path d="M3.00034 4H2.00034V6H3.00034H21.0003H22.0003V4H21.0003H3.00034ZM9.00034 11H8.00034V13H9.00034H21.0003H22.0003V11H21.0003H9.00034ZM2.00034 18H3.00034H21.0003H22.0003V20H21.0003H3.00034H2.00034V18ZM5.8051 12.7073L6.51221 12.0002L5.8051 11.2931L4.03734 9.52532L3.33023 8.81821L1.91602 10.2324L2.62312 10.9395L3.68378 12.0002L2.62312 13.0608L1.91602 13.768L3.33023 15.1822L4.03734 14.4751L5.8051 12.7073Z" fill="black"/>
</svg>

    )
  }
}