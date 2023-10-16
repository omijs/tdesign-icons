import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-phone-search')
export class IconPhoneSearch extends WeElement<IconProps> {
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
<path d="M4 1H20V11H18V3H6V21H12.5V23H4V1ZM17.25 14.5C18.7688 14.5 20 15.7312 20 17.25C20 18.0083 19.6931 18.6949 19.1967 19.1924C19.1937 19.1954 19.1907 19.1984 19.1876 19.2014C18.6905 19.695 18.0059 20 17.25 20C15.7312 20 14.5 18.7688 14.5 17.25C14.5 15.7312 15.7312 14.5 17.25 14.5ZM21.2419 19.8254C21.7216 19.0834 22 18.1992 22 17.25C22 14.6266 19.8734 12.5 17.25 12.5C14.6266 12.5 12.5 14.6266 12.5 17.25C12.5 19.8734 14.6266 22 17.25 22C18.2004 22 19.0857 21.7209 19.8282 21.2401L21.4983 22.9142L22.9142 21.5017L21.2419 19.8254Z" fill="black"/>
</svg>

    )
  }
}