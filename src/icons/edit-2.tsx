import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-edit-2')
export class IconEdit2 extends WeElement<IconProps> {
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
<path d="M16.4275 1.96289L22.0378 7.57319L7.6103 22.0007L2 22.0007L2 16.3904L16.4275 1.96289ZM16.4275 4.79132L13.6456 7.57319L16.4275 10.3551L19.2093 7.57319L16.4275 4.79132ZM15.0133 11.7693L12.2314 8.9874L4 17.2188L4 20.0007H6.78187L15.0133 11.7693ZM22.2248 22.0007H12.6818V20.0007L22.2248 20.0007V22.0007Z" fill="black"/>
</svg>

    )
  }
}