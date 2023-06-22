import withI18n from "../i18n/withI18n";

function I18nHOCRow({ getMessage, getFormattedDate, getFormattedCurrency }) {
  return (
    <tr>
      <td>HOC</td>
      <td>{getMessage({ messageKey: "hello" })}</td>
      <td>{getFormattedDate(new Date())}</td>
      <td>{getFormattedCurrency("123456.789", "EUR")}</td>
    </tr>
  );
}

export default withI18n(I18nHOCRow);
