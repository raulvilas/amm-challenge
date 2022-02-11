import React, { useState, useEffect, createContext } from 'react';

interface AppContextInterface {
   slippage :double
   transactionDeadline:double
   disableMultihops :boolean
}

const AppCtx = createContext<AppContextInterface | null>(null);

export default AppCtx;

