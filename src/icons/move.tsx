import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-move')
export class IconMove extends WeElement<IconProps> {
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
<path d="M6.75 2.25H9.75V5.25H6.75V2.25ZM14.25 2.25H17.25V5.25H14.25V2.25ZM6.75 7.75H9.75V10.75H6.75V7.75ZM14.25 7.75H17.25V10.75H14.25V7.75ZM6.75 13.25H9.75V16.25H6.75V13.25ZM14.25 13.25H17.25V16.25H14.25V13.25ZM6.75 18.75H9.75V21.75H6.75V18.75ZM14.25 18.75H17.25V21.75H14.25V18.75Z" fill="black"/>
</svg>

    )
  }
}