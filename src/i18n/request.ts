import { getRequestConfig } from "next-intl/server";

import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
    // This typically corresponds to the `[locale]` segment
    let lang = await requestLocale;

    // Ensure that a valid locale is used
    if (!lang || !routing.locales.includes(lang as any)) {
        lang = routing.defaultLocale;
    }

    return {
        lang,
        messages: (await import(`../../messages/${lang}.json`)).default,
    };
});
