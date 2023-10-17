import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-rain-heavy')
export class IconRainHeavy extends WeElement<IconProps> {
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
<path d="M11.1 4C11.0786 4 11.0572 4.00015 11.0359 4.00043C8.60036 4.03348 6.7 5.93535 6.7 8.2C6.7 8.46219 6.72505 8.71792 6.77273 8.9654L6.95683 9.92085L6.00676 10.131C4.83155 10.3909 4 11.3903 4 12.5333C4 13.4799 4.56612 14.3234 5.43167 14.7376L6.3337 15.1693L5.47036 16.9734L4.56833 16.5417C3.06313 15.8214 2 14.309 2 12.5333C2 10.7035 3.12452 9.15803 4.70565 8.46243C4.70189 8.37536 4.7 8.28787 4.7 8.2C4.7 4.77081 7.55127 2.04754 11.0088 2.00062C11.0392 2.00021 11.0696 2 11.1 2C11.646 2 12.1775 2.06644 12.6858 2.192C14.8331 2.7225 16.5652 4.31155 17.2193 6.37863C17.9415 6.47026 18.6217 6.69802 19.2299 7.03569C19.4545 7.16039 19.6692 7.30005 19.8726 7.45334C21.1579 8.42182 22 9.94389 22 11.6667C22 13.8773 20.6183 15.7492 18.6872 16.5614L17.7654 16.9491L16.998 15.1247V18H14.998V12.002H16.998V15.1022L17.9118 14.7179C19.1598 14.193 20 13.0103 20 11.6667C20 10.6158 19.489 9.66848 18.669 9.05063C18.5396 8.95307 18.4026 8.86396 18.259 8.78426C17.7444 8.49852 17.1446 8.33333 16.5 8.33333C16.4803 8.33333 16.4607 8.33349 16.4411 8.33379L15.5868 8.34716L15.4403 7.50544C15.158 5.88414 13.8892 4.54944 12.2061 4.13363C11.8538 4.0466 11.4834 4 11.1 4ZM12.998 10.002V20H10.998V10.002H12.998ZM8.99805 12.002V18H6.99805V12.002H8.99805Z" fill="black"/>
</svg>

    )
  }
}