import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-relation')
export class IconRelation extends WeElement<IconProps> {
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
<path d="M10.2386 1.6333L12 4.68409L13.7614 1.6333L15.4934 2.6333L13.1547 6.68409L19.1106 17H23V19H20.2653L21.3934 20.9539L19.6613 21.9539L17.9559 19H6.04412L4.33868 21.9539L2.60663 20.9539L3.73472 19H1V17H4.88942L10.8453 6.68409L8.50658 2.6333L10.2386 1.6333ZM12 8.68409L7.19883 17H16.8012L12 8.68409Z" fill="black"/>
</svg>

    )
  }
}