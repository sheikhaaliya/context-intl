import I18nCurrency from "../i18n/I18nCurrency";
import I18nDate from "../i18n/I18nDate";
import I18nMessage from "../i18n/I18nMessage";

export default function I18nComponentRow() {
  return (
    <tr>
      <td>Component</td>
      <td>
        <I18nMessage messageKey="hello" />
      </td>
      <td>
        <I18nDate date={new Date()} />
      </td>
      <td>
        <I18nCurrency value="123456.789" currency="EUR" />
      </td>
    </tr>
  );
}
