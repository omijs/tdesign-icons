import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-cake')
export class IconCake extends WeElement<IconProps> {
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
<g id="&#232;&#155;&#139;&#231;&#179;&#149;_cake">
<path id="Union" d="M6.99805 1.99805H9.00195V4.00195H6.99805V1.99805ZM10.998 1.99805H13.002V4.00195H10.998V1.99805ZM14.998 1.99805H17.002V4.00195H14.998V1.99805ZM9 5V10H11V5H13V10H15V5H17V10H21V20H23V22H1V20H3V10H7V5H9ZM5 12V15H6.16228L9 15.9459L12 14.9459L15 15.9459L17.8377 15H19V12H5ZM19 17H18.1623L15 18.0541L12 17.0541L9 18.0541L5.83772 17H5V20H19V17Z" fill="black"/>
</g>
</svg>

    )
  }
}