enum ColorsLabel {
  Red = 'R',
  Green = 'G',
  Blue = 'B'
}

enum Colors {
  Red,
  Green,
  Blue,
};

export const rangesData = [
  {
    label: ColorsLabel.Red,
    color: Colors.Red,
    className: 'red-bg'
  },
  {
    label: ColorsLabel.Green,
    color: Colors.Green,
    className: 'green-bg'
  },
  {
    label: ColorsLabel.Blue,
    color: Colors.Blue,
    className: 'blue-bg'
  }
];

export const MIN_RANGE = '0';
export const MAX_RANGE = '255';