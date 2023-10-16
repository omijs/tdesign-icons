import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-logo-wecom')
export class IconLogoWecom extends WeElement<IconProps> {
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
    <g clip-path="url(#clip0_8775_6833)">
        <path
            d="M19.443 17.5233C19.4183 17.5172 19.3922 17.5126 19.3676 17.5081C19.3429 17.5035 19.3168 17.5004 19.2906 17.4974C18.5429 17.3585 17.8274 17.0029 17.2474 16.4291C17.2058 16.3879 17.1643 16.3451 17.1258 16.3024C17.0073 16.1849 16.8166 16.1849 16.6981 16.3024C16.5873 16.4123 16.5812 16.5847 16.6765 16.7022C16.6827 16.7099 16.6904 16.7175 16.6981 16.7267C16.7119 16.7404 16.7258 16.7511 16.7396 16.7618C16.7689 16.7892 16.7981 16.8167 16.8273 16.8457C17.3935 17.4073 17.749 18.0987 17.8951 18.8221C17.8982 18.8633 17.9028 18.903 17.909 18.9442C17.9167 18.9884 17.9259 19.0327 17.9382 19.077C17.9936 19.2799 18.1028 19.4722 18.2644 19.6325C18.7583 20.1224 19.5599 20.1224 20.0538 19.6325C20.5477 19.1426 20.5477 18.3474 20.0538 17.8575C19.8784 17.6866 19.6661 17.5752 19.443 17.5233Z"
            fill="black" />
        <path
            d="M23.6295 14.32C23.1356 13.8301 22.334 13.8301 21.8401 14.32C21.6662 14.4924 21.5539 14.703 21.5016 14.9243C21.4954 14.9487 21.4908 14.9747 21.4862 14.9991C21.4816 15.025 21.4785 15.0495 21.4754 15.0754C21.3354 15.8171 20.9769 16.5268 20.3984 17.1022C20.3569 17.1434 20.3138 17.183 20.2707 17.2227C20.1522 17.3402 20.1522 17.5295 20.2707 17.647C20.3815 17.7569 20.5554 17.763 20.6754 17.6684C20.6831 17.6623 20.6908 17.6546 20.6984 17.647C20.7123 17.6333 20.7231 17.6195 20.7338 17.6058C20.7615 17.5768 20.7892 17.5478 20.8185 17.5188C21.3847 16.9572 22.0816 16.6046 22.8109 16.4596C22.8525 16.4566 22.8925 16.452 22.934 16.4459C22.9787 16.4383 23.0233 16.4291 23.0679 16.4169C23.2725 16.362 23.4679 16.2536 23.6279 16.0949C24.1234 15.605 24.1234 14.8099 23.6295 14.32Z"
            fill="black" />
        <path
            d="M18.2722 10.7716C17.7783 11.2615 17.7783 12.0566 18.2722 12.5465C18.4461 12.719 18.6584 12.8304 18.8815 12.8823C18.9061 12.8884 18.9323 12.893 18.9569 12.8976C18.983 12.9021 19.0077 12.9052 19.0338 12.9082C19.7831 13.0471 20.497 13.4027 21.0771 13.9766C21.1186 14.0178 21.1602 14.0605 21.1986 14.1032C21.3171 14.2207 21.5079 14.2207 21.6264 14.1032C21.7372 13.9933 21.7433 13.8209 21.6479 13.7018C21.6418 13.6942 21.6341 13.6866 21.6264 13.6774C21.6125 13.6637 21.5987 13.653 21.5848 13.6423C21.5556 13.6149 21.5264 13.5874 21.4971 13.5584C20.9309 12.9968 20.5755 12.3054 20.4293 11.582C20.4278 11.5408 20.4232 11.5011 20.4155 11.4599C20.4078 11.4157 20.3986 11.3714 20.3863 11.3271C20.3293 11.1242 20.2216 10.9319 20.0601 10.7716C19.5677 10.2817 18.7661 10.2817 18.2722 10.7716Z"
            fill="black" />
        <path
            d="M16.8366 15.4049C16.8412 15.379 16.8443 15.3546 16.8474 15.3286C16.9874 14.5869 17.3459 13.8773 17.9244 13.3019C17.966 13.2607 18.009 13.221 18.0521 13.1813C18.1706 13.0638 18.1706 12.8746 18.0521 12.7571C17.9413 12.6472 17.7675 12.6411 17.6475 12.7357C17.6398 12.7418 17.6321 12.7494 17.6244 12.7571C17.6105 12.7708 17.5998 12.7845 17.589 12.7983C17.5613 12.8273 17.5336 12.8563 17.5044 12.8853C16.9382 13.4469 16.2412 13.7994 15.5119 13.9444C15.4703 13.9475 15.4303 13.952 15.3888 13.9581C15.3442 13.9658 15.2996 13.9749 15.2549 13.9871C15.0503 14.0421 14.8549 14.1504 14.6949 14.3092C14.201 14.7991 14.201 15.5942 14.6949 16.0841C15.1888 16.574 15.9904 16.574 16.4843 16.0841C16.6581 15.9116 16.7705 15.701 16.8228 15.4797C16.8289 15.4553 16.8335 15.4309 16.8366 15.4049Z"
            fill="black" />
        <path
            d="M11.4649 3.61523C14.803 3.61523 17.6575 5.69611 18.7974 8.63503C18.8883 8.86927 18.9682 9.10894 19.0366 9.35342L20.9626 8.81455C20.8767 8.50731 20.7762 8.20613 20.6621 7.9118C19.2337 4.22903 15.6558 1.61523 11.4649 1.61523C6.01851 1.61523 1.60334 6.03041 1.60334 11.4768C1.60334 13.4235 2.16833 15.2406 3.14314 16.7702L1.23828 21.3398H10.2565L10.2599 21.3398L11.7332 21.3348L11.7455 21.3344C12.6376 21.3095 13.5014 21.1658 14.3209 20.9182C14.8264 20.7654 15.3147 20.5733 15.7822 20.3453L14.9056 18.5477C14.5333 18.7292 14.1447 18.8821 13.7425 19.0037C13.0945 19.1994 12.4104 19.314 11.7015 19.3349L10.2565 19.3398H4.2388L5.4122 16.525L5.08489 16.0714C4.15248 14.7792 3.60334 13.1936 3.60334 11.4768C3.60334 7.13497 7.12308 3.61523 11.4649 3.61523Z"
            fill="black" />
    </g>

</svg>
    )
  }
}