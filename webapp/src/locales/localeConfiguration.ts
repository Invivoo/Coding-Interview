import { addLocaleData } from 'react-intl';
import * as en from 'react-intl/locale-data/en';
import * as fr from 'react-intl/locale-data/fr';
import { History } from 'history';
const localeData = require('./data.json');

export const getLocalizedResources = (history: History) => {
    addLocaleData([...en, ...fr]);

    const language = navigator.language;
    const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
    const messages = localeData[languageWithoutRegionCode] || (localeData).en;

    return {
        messages,
        language
    };
};