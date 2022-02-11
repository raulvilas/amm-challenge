import {UnsupportedChainIdError, useWeb3React} from '@web3-react/core';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import {
  IoBookOutline,
  IoSettingsOutline,
  IoWalletOutline,
  IoWarningOutline
} from 'react-icons/io5';
import {connectors} from '../constants/config';
import styles from '../styles/components/navigation.module.sass';
import {shortenHash} from '../lib/web3';
import SettingsModal from './settings-modal';
import WalletModal from './wallet-modal';

type Props = {
  active?: string;
};

export default function Navigation({active}: Props) {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [walletOpen, setWalletOpen] = useState(false);
  const {account, active: walletActive, error, activate} = useWeb3React();
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
    console.log(new Date().getTime());
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
    eagerConnectMetamask();
  }, []);

  const eagerConnectMetamask = async () => {
    const isAuthorized = await connectors.metamask.isAuthorized();
    if (isAuthorized) {
      activate(connectors.metamask);
    }
  };

  const isWrongNetwork = error && error instanceof UnsupportedChainIdError;

  return (
    <div className={ scrollY == 0 ? styles.container : styles.containerBackDrop}>
      <Link href="/">
        <a className={styles.logo}>
          <img src="/bio-logo.svg" alt="BIO Logo" />
        </a>
      </Link>
      <nav className={`${styles.navigation} ${styles.main}`}>
        <Link href="/swap">
          <a className={active && active === 'swap' ? styles.active : ''}>
            Swap
          </a>
        </Link>
        <Link href="/liquidity">
          <a className={active && active === 'liquidity' ? styles.active : ''}>
            Liquidity
          </a>
        </Link>
        <Link href="/farms">
          <a className={active && active === 'farms' ? styles.active : ''}>
            Farms
          </a>
        </Link>
        <Link href="/staking">
          <a className={active && active === 'staking' ? styles.active : ''}>
            Staking
          </a>
        </Link>
      </nav>
      <nav className={`${styles.navigation} ${styles.sub}`}>
        <button className={styles.button} onClick={() => setWalletOpen(true)}>
          {isWrongNetwork && (
            <span>
              <IoWarningOutline className={styles.warningIcon} />
              Wrong Network
            </span>
          )}
          {!walletActive && !isWrongNetwork && 'Connect Wallet'}
          {walletActive && !isWrongNetwork && account && (
            <span>
              <IoWalletOutline className={styles.walletIcon} />
              {shortenHash(account)}
            </span>
          )}
        </button>
        <button className={styles.button}>
          <IoBookOutline className={styles.settingsIcon} />
        </button>
        <button className={styles.button} onClick={() => setSettingsOpen(true)}>
          <IoSettingsOutline className={styles.settingsIcon} />
        </button>
      </nav>
      <WalletModal open={walletOpen} setOpen={setWalletOpen} />
      <SettingsModal open={settingsOpen} setOpen={setSettingsOpen} />
    </div>
  );
}
