import { useTransition } from "react";
import { Dropdown } from "react-bootstrap";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

import { Locale, routing, usePathname, useRouter } from "@/i18n/routing";

export default function LocaleSwitcher() {
    const router = useRouter();
    const t = useTranslations("LocaleSwitcher");
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const params = useParams();

    function onSelectChange(nextLocale: Locale) {
        startTransition(() => {
            router.replace(
                // @ts-expect-error -- TypeScript will validate that only known `params`
                // are used in combination with a given `pathname`. Since the two will
                // always match for the current route, we can skip runtime checks.
                { pathname, params },
                { locale: nextLocale }
            );
        });
    }

    return (
        <Dropdown>
            <Dropdown.Toggle variant={"outline-light"} size={"sm"}>
                {t("label")}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {routing.locales.map((currentLanguage) => (
                    <Dropdown.Item
                        onClick={() => onSelectChange(currentLanguage)}
                        disabled={isPending}
                        key={currentLanguage}
                    >
                        {t("locale", { locale: currentLanguage })}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}
