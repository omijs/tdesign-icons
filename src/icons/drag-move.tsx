import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-drag-move')
export class IconDragMove extends WeElement<IconProps> {
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
    <g clip-path="url(#clip0_8726_9921)">
        <path
            d="M12.0001 23.4144L7.58593 19.0001L9.00015 17.5859L11.0001 19.5859L11.0001 13.0001L4.41436 13.0001L6.41437 15.0002L5.00015 16.4144L0.585938 12.0001L5.00015 7.58593L6.41437 9.00014L4.41436 11.0001L11.0001 11.0001L11.0001 4.41436L9.00015 6.41437L7.58593 5.00015L12.0001 0.585938L16.4144 5.00015L15.0001 6.41436L13.0001 4.41437L13.0001 11.0001L19.5859 11.0002L17.5859 9.00015L19.0002 7.58594L23.4144 12.0002L19.0001 16.4144L17.5859 15.0002L19.5859 13.0002L13.0001 13.0001L13.0001 19.5859L15.0002 17.5859L16.4144 19.0002L12.0001 23.4144Z"
            fill="black" />
    </g>

</svg>
    )
  }
}