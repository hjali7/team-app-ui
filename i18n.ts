import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale, requestLocale}) => {
  // Get locale from either the explicit locale or the request locale
  const resolvedLocale = locale || await requestLocale;
  
  if (!resolvedLocale) {
    throw new Error('Locale is required');
  }
  
  return {
    locale: resolvedLocale,
    messages: (await import(`./messages/${resolvedLocale}.json`)).default
  };
});
