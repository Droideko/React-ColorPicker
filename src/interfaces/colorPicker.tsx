export interface Color {
  name: string,
  hex: string
}

export interface IColorPicker {
  value?: string,
  colors?: Color[]
  onChange?: Function
}

export interface DropdownItemType extends Color {
  onClick?: () => void
}

export interface DropdownListProps {
  colors: Array<Color>
  handleChangeColor: Function
}

export interface IHexColor {
  hexColor?: string
  updateHexColor: Function
}

export interface IHexNumber {
  hexColor?: string
}

export interface IDropdownMenu {
  handleChangeColor: Function
  squareColor: string
  handleCancel?: () => void
  handleApply?: () => void
  toggleDropdown: () => void
}

export interface IRangeWrapper {
  label?: string
  squareColor: string
  color: number
  onChange: Function,
  className?: string,
}

export interface IRange {
  value: string,
  onChange: any
  className?: string
}

export interface IColorSquare { 
  color?: string
}

export interface IDropdownWrapper {
  isOpen: boolean
  component: React.FunctionComponent<any>
  handleChangeColor?: Function
  handleCancel?: Function
  handleApply?: Function
  toggleDropdown?: Function
  squareColor: string
}

export interface IDropdownItem {
  name: string
  hex: string
  onClick?: () => void
}

export interface IDropdownColor {
  colors: Array<Color>
  updateHexColor: Function
}

export interface IDropdownColorMenu {
  colors: Array<Color>
  toggleDropdown: Function
  handleChangeColor: Function
}

export interface IColorDropdownWrapper {
  colors: Array<Color>
  isOpen: Boolean
  toggleDropdown: Function
  handleChangeColor: Function
}