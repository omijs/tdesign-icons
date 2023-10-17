import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-system-storage')
export class IconSystemStorage extends WeElement<IconProps> {
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
<path d="M8.5 4.00041V7.62538H11V4.00022L8.5 4.00041ZM13 4.00024V9.62538H6.5V4.00049H4V20.0001H20V9.0396L14.9607 4.00045L13 4.00024ZM15.7893 2.00053L22 8.21116V22.0001H2V2.00049L15.7893 2.00053ZM7 14.0001V12.0001H17V14.0001H7ZM7 17.0001V15.0001H13V17.0001H7Z" fill="black"/>
</svg>

    )
  }
}