This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Context
Molecule is launching a new Decentralized Exchange (DEX) with integrated Automated Market Maker (AMM) and Staking/Farming features. A Senior Engineer asks you to contribute with some minor tasks - mainly front-end - to speed up the delivery. You have to complete them by making your own choices autonomosly and being ready to discuss the tradeoffs you settled on while doing so.

## Tasks
### 1 - Add background to navigation component on page scroll
When the user scrolls down the page a backdrop should be shown behind the navigation (slightly transparent black background with blur)

### 2 - Enable scroll on modal component content
Currently the modal content does not scroll, the entire page scrolls instead. See token list modal on the swap page as an example. Apply the following changes when the modal component is open: 
- Block scrolling on the underlying body
- Allow scrolling of the modal content inside of the fixed height of the modal window (mostly necessary for token list modal)

### 3 - Fix premature closing behaviour on modal component
Example: Token list modal component
When you mousedown inside the modal content, move your cursor outside of the modal and then release (mouseup) the modal closes. This should be avoided. Make sure that the modal only closes on mousedown when clicking on the modal backdrop.

### 4 - Add fade-in and fade-out effect to modal open and close

### 5 - Add global state management with local storage persistence
Add a lightweight global state management solution. The global state should be persisted entirely to local storage and loaded each time on app initialization. We could try to use Redux, Hookstate, or rely on React Context as well. 

Currently we need to store only user settings:

    slippage (number)
    transactionDeadline (number)
    disableMultihops (boolean)
    tokens (Array of Token)

No database persistence needed for now.

*Be ready to describe why did you end up choosing your preferred solution*

## Finish
Once you finished the tasks and are happy with the result please commit and push the changes to your repo. Than you can give access to `carlomallone`.
