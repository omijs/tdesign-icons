import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-grape')
export class IconGrape extends WeElement<IconProps> {
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
<g id="&#232;&#145;&#161;&#232;&#144;&#132;_grape">
<path id="Union" d="M13.5882 4C14.7902 4 15.7647 4.97444 15.7647 6.17647C15.7647 6.39514 15.7179 6.6227 15.6315 6.85625C15.0708 7.20246 14.5985 7.67736 14.2554 8.2402C14.0389 8.31323 13.8148 8.35294 13.5882 8.35294C13.016 8.35294 12.4973 8.13343 12.1081 7.77216C11.6784 7.37336 11.4117 6.80682 11.4117 6.17647C11.4117 5.74219 11.5379 5.34042 11.7552 5.0022C12.144 4.39723 12.82 4 13.5882 4ZM17.5576 4.87389C17.0103 3.20514 15.44 2 13.5882 2C12.4212 2 11.3664 2.47915 10.6095 3.24913C10.21 3.12507 9.78595 3.05884 9.35292 3.05884C7.04632 3.05884 5.17645 4.92871 5.17645 7.23531C5.17645 7.77079 5.27755 8.28324 5.4615 8.75415C4.04281 9.41849 3.05884 10.855 3.05884 12.5294C3.05884 13.2663 3.25017 13.9591 3.58519 14.5602C2.62186 15.3192 2 16.4921 2 17.8235C2 20.1301 3.86987 22 6.17647 22C7.49923 22 8.6606 21.3492 9.42062 20.404C10.0261 20.7457 10.7258 20.9412 11.4706 20.9412C13.1383 20.9412 14.5962 19.9705 15.2671 18.5467C15.7322 18.7254 16.2373 18.8235 16.7647 18.8235C19.0713 18.8235 20.9412 16.9537 20.9412 14.6471C20.9412 14.2175 20.8803 13.7907 20.7571 13.3843C21.5234 12.6278 22 11.5756 22 10.4118C22 8.47197 20.6775 6.84106 18.885 6.3714C19.7741 5.5335 20.7212 4.86267 21.853 4.43561L22.7886 4.08258L22.0826 2.21136L21.147 2.56439C19.7284 3.09966 18.5709 3.92722 17.5576 4.87389ZM18.9326 14.4391C18.9383 14.5072 18.9412 14.5766 18.9412 14.6471C18.9412 15.8491 17.9668 16.8235 16.7647 16.8235C16.2079 16.8235 15.702 16.6157 15.3166 16.2719C14.8682 15.8719 14.5883 15.2928 14.5883 14.6471C14.5883 14.606 14.5894 14.5654 14.5916 14.5251C14.6182 14.1256 14.7497 13.7611 14.9624 13.4541C15.7092 14.1566 16.7156 14.5882 17.8235 14.5882C18.207 14.5882 18.5791 14.5363 18.9326 14.4391ZM12.7153 13.6393C12.6541 13.6444 12.5922 13.6471 12.5294 13.6471C11.9585 13.6471 11.4409 13.4286 11.0521 13.0688C10.6208 12.6699 10.353 12.1023 10.353 11.4706C10.353 11.2122 10.3968 10.9687 10.4758 10.745C10.6307 10.307 10.9252 9.93379 11.3104 9.67751C11.9654 10.1043 12.7485 10.3529 13.5882 10.3529C13.608 10.3529 13.6277 10.3528 13.6474 10.3525C13.6472 10.3722 13.647 10.392 13.647 10.4118C13.647 10.8581 13.7174 11.289 13.8477 11.6934C13.3054 12.2164 12.9074 12.8832 12.7153 13.6393ZM9.93672 8.20477C9.52919 8.5248 9.18346 8.91907 8.91989 9.36883C8.4569 9.27556 8.04737 9.03539 7.74053 8.69726C7.38924 8.31017 7.17645 7.79875 7.17645 7.23531C7.17645 6.03328 8.15089 5.05884 9.35292 5.05884C9.42283 5.05884 9.49213 5.0621 9.56057 5.06845C9.46355 5.42169 9.41174 5.79336 9.41174 6.17647C9.41174 6.91237 9.60255 7.60427 9.93672 8.20477ZM8.3567 11.2921C8.35422 11.3513 8.35297 11.4108 8.35297 11.4706C8.35297 12.2089 8.54502 12.9029 8.88122 13.5048C8.4937 13.8072 8.15793 14.1773 7.89718 14.6037C7.68924 14.67 7.46713 14.7059 7.23531 14.7059C6.66296 14.7059 6.14414 14.4863 5.75491 14.1249C5.32542 13.7261 5.05884 13.1596 5.05884 12.5294C5.05884 11.526 5.7396 10.6829 6.66837 10.4347C7.15011 10.8392 7.72527 11.1374 8.3567 11.2921ZM10.2583 14.976C10.912 15.4001 11.6925 15.6471 12.5294 15.6471C12.5892 15.6471 12.6487 15.6458 12.708 15.6433C12.8649 16.2841 13.1697 16.8669 13.5833 17.3529C13.3318 18.2663 12.4848 18.9412 11.4706 18.9412C10.8401 18.9412 10.2734 18.6743 9.87459 18.2445C9.51352 17.8553 9.29413 17.3368 9.29413 16.7647C9.29413 16.4325 9.36787 16.1203 9.49894 15.8412L9.49904 15.841L9.50115 15.8365L9.50504 15.8283C9.66778 15.4876 9.92991 15.1927 10.2583 14.976ZM7.29454 16.7055C7.29427 16.7252 7.29413 16.7449 7.29413 16.7647C7.29413 17.597 7.53832 18.3735 7.95816 19.0249C7.54904 19.6102 6.88278 20 6.17647 20C4.97444 20 4 19.0256 4 17.8235C4 17.0768 4.37732 16.4211 4.95915 16.0315C5.61386 16.4577 6.39625 16.7059 7.23531 16.7059C7.25508 16.7059 7.27483 16.7057 7.29454 16.7055ZM17.8235 8.23529C19.0255 8.23529 20 9.20973 20 10.4118C20 11.1772 19.6056 11.8511 19.0043 12.2406C18.6647 12.4605 18.2605 12.5882 17.8235 12.5882C17.0192 12.5882 16.3154 12.1524 15.9376 11.4993C15.753 11.1802 15.647 10.8099 15.647 10.4118C15.647 10.0705 15.7249 9.75026 15.8628 9.46527C16.0735 9.03002 16.4257 8.67464 16.8588 8.45998C17.1484 8.31645 17.475 8.23529 17.8235 8.23529Z" fill="black"/>
</g>
</svg>

    )
  }
}