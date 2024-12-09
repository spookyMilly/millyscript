import createMiddleware from "next-intl/middleware";

import { routing } from "./i18n/routing";

// Detect and manage the locale based on the URL or browser settings
export default createMiddleware(routing);

export const config = {
    // Match only internationalized pathnames
    matcher: ["/", "/(de|en)/:path*"],
};
