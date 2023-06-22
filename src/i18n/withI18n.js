import { useI18nContext } from "./I18nProvider";

export default function withI18n(WrappedComponent) {
  const Component = (props) => {
    const { getMessage, getFormattedDate, getFormattedCurrency } =
      useI18nContext();

    return (
      <WrappedComponent
        {...props}
        getMessage={getMessage}
        getFormattedDate={getFormattedDate}
        getFormattedCurrency={getFormattedCurrency}
      />
    );
  };
  Component.displayName = "I18n" + WrappedComponent.name;

  return Component;
}
