import { useI18nContext } from "./I18nProvider";

export default function I18nDate({ date, options }) {
  const { getFormattedDate } = useI18nContext();

  return getFormattedDate(date, options);
}
