import { useRecoilState } from 'recoil';

import { atomLang } from '@/config';

export default () => {
  const [lang] = useRecoilState(atomLang);

  const saveLang = (chosenLang: string) => {
    window.location.reload();
    window.localStorage.setItem('lang', chosenLang);
  };

  return { lang, saveLang };
};
