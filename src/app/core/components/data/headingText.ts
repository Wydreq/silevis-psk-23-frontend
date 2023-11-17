import { PopupState } from 'src/app/shared/types/PopupState';

const headingTexts = [
  {
    state: PopupState.WARN,
    text: 'Something go Wrong',
  },
  {
    state: PopupState.OK,
    text: 'Success!',
  },
  {
    state: PopupState.INFO,
    text: 'Attention!',
  },
];

export function getHeadingText(state: PopupState) {
  return (
    headingTexts.find((heading) => heading.state === state)?.text ||
    'Something go wrong'
  );
}
