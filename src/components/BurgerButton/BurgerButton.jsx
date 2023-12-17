import { BurgerWrapper } from './BurgerButton.styled';

export default function BurgerButton({ isOpen }) {
  return (
    <BurgerWrapper $isOpen={isOpen}>
      <div className="top"></div>
      <div className="center"></div>
      <div className="bottom"></div>
    </BurgerWrapper>
  );
}
