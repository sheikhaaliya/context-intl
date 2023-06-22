import { useI18nContext } from "../i18n/I18nProvider";

export default function I18nHookRow() {
  const { getMessage, getFormattedDate, getFormattedCurrency } =
    useI18nContext();

  return (
    <tr>
      <td>Hook</td>
      <td
        dangerouslySetInnerHTML={{
          __html: getMessage({ messageKey: "hello" }),
        }}
      />
      <td>{getFormattedDate(new Date())}</td>
      <td>{getFormattedCurrency("123456.761", "EUR")}</td>
    </tr>
  );
}
