import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations();

  return (
    <p className="text-center text-indigo-400/50 my-4">
      2025 © Marek Kramarczyk <br />
      {t("footer")}
    </p>
  );
}
