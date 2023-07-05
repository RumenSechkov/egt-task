export const filterItems = (items: Array<any> = [], filters: string) =>
  items.filter(
    (item: any) =>
      !Boolean(
        Object.keys(filters).filter((key: any) => {
          const filter = filters[key]
          switch (typeof filter) {
            case 'boolean':
              return item[key] === filter
            case 'string':
              return filter && item[key]?.match(filter)
            default:
              return false
          }
        }).length,
      ),
  )
