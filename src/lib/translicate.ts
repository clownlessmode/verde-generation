export const transliterate = (text: string): string => {
    const ru = 'А-а-Б-б-В-в-Г-г-Д-д-Е-е-Ё-ё-Ж-ж-З-з-И-и-Й-й-К-к-Л-л-М-м-Н-н-О-о-П-п-Р-р-С-с-Т-т-У-у-Ф-ф-Х-х-Ц-ц-Ч-ч-Ш-ш-Щ-щ-Ъ-ъ-Ы-ы-Ь-ь-Э-э-Ю-ю-Я-я'.split('-');
    const en = 'a-a-b-b-v-v-g-g-d-d-e-e-e-e-zh-zh-z-z-i-i-y-y-k-k-l-l-m-m-n-n-o-o-p-p-r-r-s-s-t-t-u-u-f-f-kh-kh-ts-ts-ch-ch-sh-sh-sch-sch---y-y---e-e-yu-yu-ya-ya'.split('-');
    
    let result = '';
    for (let i = 0; i < text.length; i++) {
      const char = text[i].toLowerCase();
      if (/[a-zа-яё0-9]/.test(char)) {
        const index = ru.indexOf(char);
        if (index > -1) {
          result += en[index];
        } else {
          result += char;
        }
      }
    }
    return result;
  };


