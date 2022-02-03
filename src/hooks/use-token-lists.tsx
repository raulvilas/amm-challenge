import useSWR from 'swr';
import {fetcher} from '../lib/fetcher';
import {Token} from '../types/token';

export default function useDefaultTokenList() {
  const {data, error} = useSWR(
    'https://raw.githubusercontent.com/Uniswap/default-token-list/main/src/tokens/mainnet.json',
    fetcher
  );

  let defaultTokenList = null;

  if (data && !error) {
    defaultTokenList = data;
  }

  return {
    defaultTokenList: defaultTokenList as Array<Token>,
    loading: !error && !data,
    error
  };
}
