import createMiddleware from 'next-intl/middleware';
import type { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'fa'],

  // If this locale is matched, pathnames work without a prefix (e.g. `/users`)
  defaultLocale: 'en'
});

export function proxy(request: NextRequest) {
  return intlMiddleware(request);
}

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ['/((?!api|_next|.*\\..*).*)']
};

