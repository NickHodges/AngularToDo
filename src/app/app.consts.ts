
// This whole unit was added for Step 14

export class KeyValues {
  // key values
  public static readonly Backspace: string = 'Backspace';
  public static readonly Tab: string = 'Tab';
  public static readonly Enter: string = 'Enter';
  public static readonly Escape: string = 'Escape';
  public static readonly Home: string = 'Home';
  public static readonly End: string = 'End';
  public static readonly Left: string = 'Left';
  public static readonly Up: string = 'Up';
  public static readonly Right: string = 'Right';
  public static readonly Down: string = 'Down';

  public static readonly Delete: string = 'Delete';

  public static readonly Zero: string = '0';
  public static readonly One: string = '1';
  public static readonly Two: string = '2';
  public static readonly Three: string = '3';
  public static readonly Four: string = '4';
  public static readonly Five: string = '5';
  public static readonly Six: string = '6';
  public static readonly Seven: string = '7';
  public static readonly Eight: string = '8';
  public static readonly Nine: string = '9';

  public static readonly NumPad0: string = KeyValues.Zero;
  public static readonly NumPad1: string = KeyValues.One;
  public static readonly NumPad2: string = KeyValues.Two;
  public static readonly NumPad3: string = KeyValues.Three;
  public static readonly NumPad4: string = KeyValues.Four;
  public static readonly NumPad5: string = KeyValues.Five;
  public static readonly NumPad6: string = KeyValues.Six;
  public static readonly NumPad7: string = KeyValues.Seven;
  public static readonly NumPad8: string = KeyValues.Eight;
  public static readonly NumPad9: string = KeyValues.Nine;

  public static readonly A: string = 'a';
  public static readonly B: string = 'b';
  public static readonly C: string = 'c';
  public static readonly D: string = 'd';
  public static readonly E: string = 'e';
  public static readonly F: string = 'f';
  public static readonly G: string = 'g';
  public static readonly H: string = 'h';
  public static readonly I: string = 'i';
  public static readonly J: string = 'j';
  public static readonly K: string = 'k';
  public static readonly L: string = 'l';
  public static readonly M: string = 'm';
  public static readonly N: string = 'n';
  public static readonly O: string = 'o';
  public static readonly P: string = 'p';
  public static readonly Q: string = 'q';
  public static readonly R: string = 'r';
  public static readonly S: string = 's';
  public static readonly T: string = 't';
  public static readonly U: string = 'u';
  public static readonly V: string = 'v';
  public static readonly W: string = 'w';
  public static readonly X: string = 'x';
  public static readonly Y: string = 'y';
  public static readonly Z: string = 'z';

  public static readonly Dash: string = '-';
  public static readonly Minus: string = '-';

  // Key arrays
  public static readonly navigationKeys = [
    'Backspace',
    'Delete',
    'Tab',
    'Escape',
    'Enter',
    'Home',
    'End',
    'ArrowLeft',
    'ArrowRight',
    'Clear',
    'Copy',
    'Paste'
  ];

  public static readonly cutPasteKeys = [
    KeyValues.A,
    KeyValues.C,
    KeyValues.V,
    KeyValues.X
  ];

  public static readonly Numbers = [
    KeyValues.One,
    KeyValues.Two,
    KeyValues.Three,
    KeyValues.Four,
    KeyValues.Five,
    KeyValues.Six,
    KeyValues.Seven,
    KeyValues.Eight,
    KeyValues.Nine,
    KeyValues.Zero,

    KeyValues.NumPad0,
    KeyValues.NumPad1,
    KeyValues.NumPad2,
    KeyValues.NumPad3,
    KeyValues.NumPad4,
    KeyValues.NumPad5,
    KeyValues.NumPad6,
    KeyValues.NumPad7,
    KeyValues.NumPad8,
    KeyValues.NumPad9
  ];

  public static readonly Letters = [
    KeyValues.A,
    KeyValues.B,
    KeyValues.C,
    KeyValues.D,
    KeyValues.E,
    KeyValues.F,
    KeyValues.G,
    KeyValues.H,
    KeyValues.I,
    KeyValues.J,
    KeyValues.K,
    KeyValues.L,
    KeyValues.M,
    KeyValues.N,
    KeyValues.O,
    KeyValues.P,
    KeyValues.Q,
    KeyValues.R,
    KeyValues.S,
    KeyValues.T,
    KeyValues.U,
    KeyValues.V,
    KeyValues.W,
    KeyValues.X,
    KeyValues.Y,
    KeyValues.Z
  ];

  public static readonly OkForInputControl = [
    KeyValues.Delete,
    KeyValues.Backspace,
    KeyValues.Tab,
    KeyValues.Escape,
    KeyValues.Enter
  ];

  public static readonly OkForPhoneInputControl = KeyValues.OkForInputControl.concat(
    KeyValues.Minus
  );
}
