export const initGoogleTranslate = (lang = 'en') => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.googleTranslateElementInit = function () {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    new window.google.translate.TranslateElement({ pageLanguage: lang }, 'google_translate_element')
  }
}
