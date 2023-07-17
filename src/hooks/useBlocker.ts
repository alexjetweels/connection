import type { Blocker, Transition } from 'history';
import * as React from 'react';

import history from '~/utils/history';

export function useBlocker(blocker: Blocker, when = true): void {
  React.useEffect(() => {
    if (!when) return;

    const unblock = history.block((tx: Transition) => {
      const autoUnblockingTx = {
        ...tx,
        retry() {
          unblock();
          tx.retry();
        },
      };

      blocker(autoUnblockingTx);
    });

    return unblock;
  }, [navigator, blocker, when]);
}
