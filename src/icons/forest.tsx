import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-forest')
export class IconForest extends WeElement<IconProps> {
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
<path d="M6.99997 0.213867L12 13.2139L17 0.213867L23.456 17.0001L18 16.9998V22H16V16.9997H7.99998V22H5.99998V16.9998L0.543945 17.0001L6.99997 0.213867ZM7.99998 14.9997L10.544 14.9996L7.99998 8.38526V14.9997ZM5.99998 8.38542L3.45602 14.9999L5.99998 14.9998V8.38542ZM13.456 14.9996L16 14.9997V8.38526L13.456 14.9996ZM18 8.38542V14.9998L20.5439 14.9999L18 8.38542Z" fill="black"/>
</svg>

    )
  }
}