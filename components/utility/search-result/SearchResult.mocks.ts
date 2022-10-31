/** Ini file untuk menyimpan data tiruan komponen dari */
import { ISearchResult } from './SearchResult';

const base: ISearchResult = {
  url: 'https://www.google.com',
  title: 'This is a link to a search result about product or service',
  text: 'The topic of this link is product or service. Description of the search result. The description might a bit long and it willtell yout everything you need to know about the search result.',
};

export const mockSearchResultProps = {
  base,
};
