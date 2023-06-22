import { useI18nContext } from "./I18nProvider";

export default function I18nCurrency({ value, currency }) {
  const { getFormattedCurrency } = useI18nContext();

  return getFormattedCurrency(value, currency);
}
