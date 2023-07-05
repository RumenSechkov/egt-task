export interface IComponent {
  readonly key?: string | number
  readonly id?: string | number
  readonly children?: React.ReactNode
  readonly className?: string
}
