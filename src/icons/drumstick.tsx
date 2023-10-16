import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-drumstick')
export class IconDrumstick extends WeElement<IconProps> {
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
<g id="&#233;&#184;&#161;&#232;&#133;&#191;_drumstick">
<path id="Union" d="M15.0004 3C11.6867 3 9.00041 5.68629 9.00041 9C9.00041 9.40938 9.04127 9.80819 9.1188 10.1929C9.36013 11.3904 9.95889 12.4602 10.8013 13.2858L11.5156 13.9857L10.1158 15.4141L9.40153 14.7142C8.68366 14.0108 8.09725 13.1723 7.68366 12.2393L7.20648 12.7082C7.20436 12.7105 7.20138 12.7142 7.19751 12.7215C7.19265 12.7306 7.18443 12.749 7.17703 12.7807C7.16159 12.8468 7.15209 12.9618 7.17848 13.1343C7.23226 13.4857 7.41881 13.9665 7.77791 14.508C8.00252 14.8466 8.29383 15.2076 8.62173 15.5355C8.89959 15.8134 9.20522 16.0686 9.49435 16.2738C10.0651 16.6789 10.5855 16.8994 10.972 16.9699C11.1624 17.0046 11.2916 16.9978 11.3673 16.982C11.4035 16.9744 11.4245 16.9655 11.4348 16.9601C11.4445 16.9552 11.4483 16.9517 11.4502 16.9497L11.4564 16.9435L13.5835 14.8536L14.0789 14.9298C14.3788 14.976 14.6865 15 15.0004 15C18.3141 15 21.0004 12.3137 21.0004 9C21.0004 5.68629 18.3141 3 15.0004 3ZM7.06761 10.0408C7.02325 9.69975 7.00041 9.35233 7.00041 9C7.00041 4.58172 10.5821 1 15.0004 1C19.4187 1 23.0004 4.58172 23.0004 9C23.0004 13.4183 19.4187 17 15.0004 17C14.7594 17 14.5207 16.9893 14.2848 16.9684L12.8609 18.3674C12.225 19.0004 11.3487 19.0715 10.6133 18.9375C10.1026 18.8443 9.57489 18.6421 9.05893 18.3588L8 19.4153C7.99528 19.9213 7.96419 20.5903 7.78552 21.185C7.66364 21.5908 7.4518 22.0432 7.06412 22.4025C6.65658 22.7802 6.13095 22.9841 5.5262 22.9997C4.89704 23.0159 4.3654 22.8123 3.95908 22.4578C3.57534 22.1231 3.35841 21.703 3.23256 21.3548C3.17545 21.1969 3.13275 21.0417 3.10072 20.8969C2.95699 20.8647 2.80298 20.8218 2.64619 20.7648C2.29894 20.6386 1.88048 20.4217 1.54627 20.0398C1.19257 19.6356 0.987004 19.1062 1.00064 18.4783C1.01381 17.8719 1.21847 17.3454 1.59732 16.9378C1.95702 16.5509 2.4101 16.3393 2.81557 16.2174C3.41146 16.0381 4.08069 16.0059 4.58626 16.0007L5.6927 14.897C5.44726 14.4114 5.27491 13.9166 5.20149 13.4368C5.0929 12.7271 5.18724 11.899 5.7933 11.2929L5.79953 11.2867L7.06761 10.0408ZM6.84872 16.5687L5.41389 18H5.0004C4.40896 18 3.83085 18.0005 3.3917 18.1326C3.18775 18.1939 3.09754 18.2615 3.06214 18.2996C3.04565 18.3173 3.00362 18.3625 3.00017 18.5217C2.99715 18.6605 3.03326 18.702 3.05144 18.7228C3.08911 18.7659 3.17273 18.8282 3.32964 18.8852C3.48223 18.9407 3.65083 18.9717 3.79212 18.9872C3.85999 18.9946 3.91516 18.9978 3.95054 18.9991C3.96808 18.9998 3.98031 19 3.98628 19C3.98733 19 3.98818 19.0001 3.98882 19.0001C3.99001 19.0001 3.99051 19.0001 3.99029 19.0001L5.0204 18.9831L5.00031 20.0132C5.00031 20.0129 5.00031 20.0135 5.00031 20.0146C5.00031 20.0153 5.00031 20.0162 5.00032 20.0172C5.00035 20.0232 5.0005 20.0355 5.00111 20.0531C5.00233 20.0886 5.00535 20.144 5.01261 20.212C5.02773 20.3537 5.05834 20.5225 5.11344 20.675C5.17013 20.8318 5.23196 20.9142 5.27382 20.9507C5.29326 20.9677 5.33483 21.0039 5.4746 21.0003C5.63938 20.9961 5.68634 20.9526 5.70448 20.9357C5.7424 20.9006 5.80944 20.8115 5.87008 20.6096C6.00041 20.1758 6.00041 19.606 6.0004 19.0121V18.5851L7.4271 17.1617C7.35282 17.0925 7.27951 17.0217 7.20752 16.9497C7.08364 16.8259 6.96378 16.6984 6.84872 16.5687Z" fill="black"/>
</g>
</svg>

    )
  }
}