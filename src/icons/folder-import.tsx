import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-folder-import')
export class IconFolderImport extends WeElement<IconProps> {
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
  style={iconStyle} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2.5H10.4806L12.4806 5H24V21H13V19H22V7H11.5194L9.51937 4.5H4V12.75H2V2.5ZM7.04998 13.0878L11.9083 18.002L7.04999 22.9162L5.62771 21.5101L8.10728 19.002L0.998047 19.002L0.998047 17.002L8.10728 17.002L5.62771 14.4939L7.04998 13.0878Z" fill="black"/>
</svg>

    )
  }
}