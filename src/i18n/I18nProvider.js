import { createContext, useCallback, useContext, useMemo } from "react";

const I18nContext = createContext();

export const useI18nContext = () => useContext(I18nContext);

export default function I18nProvider({ children, locale = "en", messages }) {
  const getMessage = useCallback(
    ({ messageKey, defaultMessage }) => {
      const message = messages?.[messageKey] ?? defaultMessage;
      console.log(message, "message");
      const formats = {
        tenant: "finexity",
        host: "https://finexity.com",
      };
      let formattedMessage = message;
      Object.entries(formats).map(([key, value]) => {
        if (formattedMessage?.includes(`{${key}}`)) {
          formattedMessage = formattedMessage.replace(`{${key}}`, value);
        }
      });
      return formattedMessage;
    },
    [messages]
  );

  const getFormattedDate = useCallback(
    (date, options = {}) => Intl.DateTimeFormat(locale, options).format(date),
    [locale]
  );

  const getFormattedCurrency = useCallback(
    (number, currency) =>
      Intl.NumberFormat(locale, { style: "currency", currency }).format(number),
    [locale]
  );

  const value = useMemo(
    () => ({
      locale,
      getMessage,
      getFormattedDate,
      getFormattedCurrency,
    }),
    [locale, getMessage, getFormattedDate, getFormattedCurrency]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
