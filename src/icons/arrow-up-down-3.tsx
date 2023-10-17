import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-arrow-up-down-3')
export class IconArrowUpDown3 extends WeElement<IconProps> {
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
<path d="M7.50014 3.08569L12.9144 8.49991L11.5002 9.91412L8.50015 6.91412L8.50014 15.4999L6.50014 15.4999L6.50015 6.91412L3.50015 9.91412L2.08594 8.49991L7.50014 3.08569ZM17.5001 8.49991L17.5001 17.0857L20.5001 14.0857L21.9144 15.4999L16.5001 20.9141L11.0859 15.4999L12.5002 14.0857L15.5001 17.0857L15.5001 8.49991L17.5001 8.49991Z" fill="black"/>
</svg>

    )
  }
}