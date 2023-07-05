export const filterItems = (
  items: Array<any> = [],
  filters: { [key: string]: string | boolean },
) => {
  const filterKeys = Object.keys(filters)
  return (
    (!filterKeys.length && items) ||
    items.filter((item: any) =>
      Boolean(
        filterKeys.filter((key: string) => {
          if (item[key] === undefined) return true
          const filter = filters[key]
          switch (typeof filter) {
            case 'boolean':
              return item[key] === filter
            case 'string':
              return item[key].toLowerCase().match(filter.toLowerCase())
            default:
              return true
          }
        }).length === filterKeys.length,
      ),
    )
  )
}
