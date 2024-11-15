import { useRecoilValue } from 'recoil';
import { textSizeState } from '../store';

export default function SelectorComponent() {
  const size = useRecoilValue(textSizeState); 

  return (
    <p>
      Number of characters in the atom: <i>{size}</i>
    </p>
  );
}