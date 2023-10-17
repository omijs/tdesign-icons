import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-building-2')
export class IconBuilding2 extends WeElement<IconProps> {
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
<path d="M12 0.833984L18.372 4.65718L17.343 6.37216L17 6.16636V8.00017H22V22.0002H2V8.00017H7V6.16637L6.657 6.37216L5.62801 4.65718L12 0.833984ZM9 4.96637V8.00017H15V4.96637L12 3.16637L9 4.96637ZM11 4.99822H13.0039V7.00213H11V4.99822ZM4 10.0002V20.0002H8V13.0002H16V20.0002H20V10.0002H4ZM14 20.0002V15.0002H10V20.0002H14Z" fill="black"/>
</svg>

    )
  }
}