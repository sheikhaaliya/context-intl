import { useState } from "react";
import I18nProvider from "./i18n/I18nProvider";
import "./App.css";
import I18nComponentRow from "./data/I18nComponentRow";
import I18nHOCRow from "./data/I18nHOCRow";
import I18nHookRow from "./data/I18nHookRow";
import language from "./translation";
const locale = "en";
const MESSAGES = language[locale];
console.log(language[locale], "con");

const LOCALES = ["en", "fr", "en-IN"];

export default function App() {
  const [locale, setLocale] = useState("en");

  return (
    <I18nProvider locale={locale} defaultLocale="en" messages={MESSAGES}>
      <div className="locale-buttons-container">
        {LOCALES.map((l) => (
          <button
            key={l}
            onClick={() => setLocale(l)}
            className={l === locale ? "active" : undefined}
          >
            {l}
          </button>
        ))}
      </div>
      <table border="1">
        <thead>
          <tr>
            <th>Type</th>
            <th>Message</th>
            <th>Date</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          <I18nComponentRow />
          <I18nHOCRow />
          <I18nHookRow />
        </tbody>
      </table>
    </I18nProvider>
  );
}
