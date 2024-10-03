export type Color = keyof typeof COLOR;

export enum COLOR {
  FOREGROUND = 'rgba(255, 255, 255, 1)', // #FFFFFF
  SUCCESS_BACKGROUND = 'rgba(237, 249, 241, 1)', // #EDF9F1

  POSITIVE = 'rgba(86, 173, 113, 1)', // #56AD71

  PRIMARY = 'rgba(38, 26, 89, 1)', // #261A59
  NEGATIVE = 'rgba(253, 135, 110, 1)', // #FD876E
  SUBTEXT = 'rgba(142, 142, 173, 1)', // #8E8EAD

  BLACK = 'rgba(0, 0, 0, 1)', // #261A59
}

// for width & height only, values from the layout grid
export enum SIZE {
  S30 = 30,
}

// for paddings only, values from the layout grid
export enum RADIUS {
  R20 = 20,
  R10 = 10,
}

// for paddings only, values from the layout grid
export enum PADDING {
  P20 = 20,
  P10 = 10,
}
