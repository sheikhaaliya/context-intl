import { useI18nContext } from "./I18nProvider";

export default function I18nMessage({ messageKey }) {
  const { getMessage } = useI18nContext();

  return getMessage({ messageKey });
}
