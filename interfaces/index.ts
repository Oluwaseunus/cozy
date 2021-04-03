export interface CheckoutProps {
  subTab: number;
  setSubTab: SetSubTab;
}

export type MainTab = 'Cart' | 'Checkout';

export interface OrderSummaryProps {
  subTab: number;
  mainTab: MainTab;
  handleNext: () => void;
}

export interface QuantitySelectorProps {
  value: number;
  onChange?: (value: number) => void;
}

export interface SetSubTab {
  (subTab: number): void;
}

export interface User {
  id: number;
  name: string;
}
