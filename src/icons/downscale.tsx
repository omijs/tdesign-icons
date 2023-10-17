import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-downscale')
export class IconDownscale extends WeElement<IconProps> {
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
<path d="M2 2H11V4H4V10H2V2ZM21.4142 3.99961L16.3872 9.02659L19.914 9.04675L19.9026 11.0467L12.9924 11.0072L12.9529 4.097L14.9529 4.08557L14.973 7.61238L20 2.58539L21.4142 3.99961ZM2 12H6V14H4V16H2V12ZM8 12H12V16H10V14H8V12ZM22 13V22H14V20H20V13H22ZM4 18V20H6V22H2V18H4ZM12 18V22H8V20H10V18H12Z" fill="black"/>
</svg>

    )
  }
}