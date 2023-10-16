import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-indent-left')
export class IconIndentLeft extends WeElement<IconProps> {
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
<path d="M2.00015 4V6H22.0002V4H2.00015Z" fill="black"/>
<path d="M8.00015 11V13H22.0002V11H8.00015Z" fill="black"/>
<path d="M2.00015 18H22.0002V20H2.00015V18Z" fill="black"/>
<path d="M1.58594 11.9998L4.76792 15.1818L6.18213 13.7676L4.41436 11.9998L6.18213 10.232L4.76792 8.81783L1.58594 11.9998Z" fill="black"/>
</svg>

    )
  }
}