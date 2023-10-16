import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-moon')
export class IconMoon extends WeElement<IconProps> {
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
<path d="M10.412 4.15761C6.75443 4.8942 4 8.12543 4 12C4 16.4183 7.58172 20 12 20C14.9602 20 17.5466 18.3918 18.9302 15.9997C13.9918 15.9622 10 11.9473 10 7C10 6.02085 10.1313 5.06315 10.412 4.15761ZM2 12C2 6.47715 6.47715 2 12 2H13.7337L12.8656 3.50069C12.2871 4.50091 12 5.68848 12 7C12 10.866 15.134 14 19 14C19.4618 14 19.9122 13.9554 20.3475 13.8706L22.0301 13.5428L21.4872 15.1689C20.1623 19.1373 16.4167 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="black"/>
</svg>

    )
  }
}