import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from '../type'
import { prefix } from '../prefix'
import css from '../icon.css'

@tag('t-icon-chart-area-multi')
export class IconChartAreaMulti extends WeElement<IconProps> {
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
<path d="M4 2V20H22V22H2V2H4ZM21.0003 4.08648L21.0003 18.2096L6.00026 18.2096L6.00026 12.0581L12.5891 6.06741L15.5565 9.52937L21.0003 4.08648ZM8.25816 16.2096L19.0003 16.2096L19.0003 12.4141L15.2695 16.1446L12.2357 12.6052L8.25816 16.2096ZM19.0003 9.58576V8.91438L15.4435 12.4706L12.4109 8.93259L8.00026 12.9428L8.00026 13.7443L12.4162 9.74264L15.3825 13.2033L19.0003 9.58576Z" fill="black"/>
</svg>

    )
  }
}