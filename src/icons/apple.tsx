import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-apple')
export class IconApple extends WeElement<IconProps> {
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
<g id="&#232;&#139;&#185;&#230;&#158;&#156;_apple">
<path id="Union" d="M13 2V4.40428C13.05 4.3961 13.1006 4.38753 13.1519 4.37864C13.2395 4.36346 13.3316 4.34679 13.4274 4.32947C13.7555 4.27011 14.1251 4.20324 14.4918 4.16359C15.5173 4.05271 16.6453 4.13358 17.9845 4.87529C20.6209 6.33548 22 9.09957 22 12.5001C22 16.7801 19.2901 20.7991 15.8113 21.9387C14.771 22.2795 14.0263 22.0946 13.4066 21.8672C13.309 21.8313 13.2194 21.7972 13.1354 21.7652C12.7189 21.6064 12.44 21.5001 12 21.5001C11.5606 21.5001 11.2822 21.6064 10.8659 21.7654C10.7817 21.7975 10.6918 21.8318 10.5938 21.8679C9.97369 22.0958 9.22824 22.2808 8.1874 21.9383C4.71854 20.7966 2 16.7817 2 12.5001C2 9.09978 3.37849 6.33935 6.01461 4.87584C7.3545 4.13197 8.48283 4.0509 9.50874 4.16236C9.87526 4.20218 10.2448 4.26929 10.5727 4.32884C10.6686 4.34625 10.7609 4.36302 10.8485 4.37826C10.8997 4.38716 10.9501 4.39574 11 4.40393V2H13ZM11 6.42664C10.828 6.40312 10.6631 6.37605 10.5057 6.34867C10.3861 6.32785 10.2735 6.30744 10.1656 6.28789C9.85385 6.23139 9.5816 6.18205 9.29272 6.15066C8.59362 6.0747 7.89646 6.11863 6.98539 6.62444C5.11961 7.66027 4 9.65739 4 12.5001C4 16.0566 6.28848 19.2077 8.8126 20.0385C9.27089 20.1893 9.52424 20.1302 9.90374 19.9907C9.9616 19.9694 10.025 19.9446 10.0939 19.9177C10.5217 19.7503 11.161 19.5001 12 19.5001C12.8389 19.5001 13.4778 19.7497 13.9058 19.9168C13.9746 19.9437 14.0379 19.9684 14.0958 19.9897C14.4757 20.1291 14.7298 20.1884 15.1887 20.0381C17.7177 19.2096 20 16.0583 20 12.5001C20 9.65602 18.8791 7.65703 17.0155 6.62487C16.1047 6.1204 15.4068 6.07631 14.7068 6.152C14.4176 6.18328 14.1449 6.23251 13.8328 6.28886C13.7251 6.30829 13.6128 6.32857 13.4935 6.34926C13.3363 6.3765 13.1717 6.40343 13 6.42684V7.82946C13.1744 7.7678 13.3412 7.69047 13.4991 7.5992L14.3647 7.09854L15.366 8.82983L14.5004 9.33049C13.7642 9.75629 12.9091 10 12 10C11.0909 10 10.2358 9.7563 9.49958 9.33049L8.63394 8.82983L9.63526 7.09854L10.5009 7.5992C10.6587 7.69048 10.8256 7.76781 11 7.82947V6.42664Z" fill="black"/>
</g>
</svg>

    )
  }
}