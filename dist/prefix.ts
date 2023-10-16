export function classNamePrefix(prefix: string) {
  return (classname: string) => {
    return `${prefix}${classname}`
  }
}

export const prefix = classNamePrefix('t-')
