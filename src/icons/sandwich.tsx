import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-sandwich')
export class IconSandwich extends WeElement<IconProps> {
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
<g id="&#228;&#184;&#137;&#230;&#152;&#142;&#230;&#178;&#187;_sandwich">
<path id="Union" d="M13.8 2.51531C14.6382 2.05807 15.6828 2.25718 16.2941 2.99074L21 8.63779V21.9998H3V8.40621L13.8 2.51531ZM5 9.99984V13.9998H19V9.99984H5ZM17.865 7.99984L14.7577 4.27111L7.92166 7.99984H17.865ZM19 15.9998H5V19.9998H19V15.9998Z" fill="black"/>
</g>
</svg>

    )
  }
}