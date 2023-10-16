import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-logo-instagram')
export class IconLogoInstagram extends WeElement<IconProps> {
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
<path d="M11.9505 1H12.0495C13.8768 0.999992 15.3162 0.999985 16.4701 1.10456C17.6481 1.21133 18.6263 1.43338 19.5 1.93782C20.5641 2.5522 21.4478 3.43587 22.0622 4.5C22.5666 5.37372 22.7887 6.35191 22.8954 7.52993C23 8.6838 23 10.1232 23 11.9505V12.0495C23 13.8768 23 15.3162 22.8954 16.4701C22.7887 17.6481 22.5666 18.6263 22.0622 19.5C21.4478 20.5641 20.5641 21.4478 19.5 22.0622C18.6263 22.5666 17.6481 22.7887 16.4701 22.8954C15.3162 23 13.8768 23 12.0495 23H11.9505C10.1232 23 8.6838 23 7.52993 22.8954C6.35191 22.7887 5.37372 22.5666 4.5 22.0622C3.43587 21.4478 2.5522 20.5641 1.93782 19.5C1.43338 18.6263 1.21133 17.6481 1.10456 16.4701C0.999985 15.3162 0.999992 13.8768 1 12.0495V11.9505C0.999992 10.1232 0.999985 8.68379 1.10456 7.52993C1.21133 6.35191 1.43338 5.37372 1.93782 4.5C2.5522 3.43587 3.43587 2.5522 4.5 1.93782C5.37372 1.43338 6.35191 1.21133 7.52993 1.10456C8.68379 0.999985 10.1232 0.999992 11.9505 1ZM7.71045 3.0964C6.67116 3.19059 6.01859 3.37047 5.5 3.66987C4.7399 4.10872 4.10872 4.7399 3.66987 5.5C3.37047 6.01859 3.19059 6.67116 3.0964 7.71045C3.00096 8.7635 3 10.1124 3 12C3 13.8876 3.00096 15.2365 3.0964 16.2895C3.19059 17.3288 3.37047 17.9814 3.66987 18.5C4.10871 19.2601 4.7399 19.8913 5.5 20.3301C6.01859 20.6295 6.67116 20.8094 7.71045 20.9036C8.7635 20.999 10.1124 21 12 21C13.8876 21 15.2365 20.999 16.2895 20.9036C17.3288 20.8094 17.9814 20.6295 18.5 20.3301C19.2601 19.8913 19.8913 19.2601 20.3301 18.5C20.6295 17.9814 20.8094 17.3288 20.9036 16.2895C20.999 15.2365 21 13.8876 21 12C21 10.1124 20.999 8.7635 20.9036 7.71045C20.8094 6.67116 20.6295 6.01859 20.3301 5.5C19.8913 4.7399 19.2601 4.10871 18.5 3.66987C17.9814 3.37047 17.3288 3.19059 16.2895 3.0964C15.2365 3.00096 13.8876 3 12 3C10.1124 3 8.7635 3.00096 7.71045 3.0964ZM16.75 6.25195C16.75 5.69967 17.1997 5.25 17.752 5.25C18.3042 5.25 18.7539 5.69967 18.7539 6.25195C18.7539 6.80424 18.3042 7.25391 17.752 7.25391C17.1997 7.25391 16.75 6.80424 16.75 6.25195ZM12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5ZM6.5 12C6.5 8.96243 8.96243 6.5 12 6.5C15.0376 6.5 17.5 8.96243 17.5 12C17.5 15.0376 15.0376 17.5 12 17.5C8.96243 17.5 6.5 15.0376 6.5 12Z" fill="black"/>
</svg>

    )
  }
}