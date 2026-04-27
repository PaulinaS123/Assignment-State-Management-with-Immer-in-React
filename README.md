# Assignment-State-Management-with-Immer-in-React

## Author
Victoria Salomon

## Overview
This project demonstrates advanced state management in React using the useImmer hook. It simplifies updating nested state structures while maintaining immutability.

## Features
- Add items to shopping list
- Update nested item details
- Remove items
- Uses Immer for cleaner state updates

## Technologies
- React
- Vite
- Immer (use-immer)

## How to Run

git clone https://github.com/PaulinaS123/Assignment-State-Management-with-Immer-in-React.git
cd shopping-list-immer
npm install
npm run dev

## Key Concepts
- useImmer hook
- Nested state updates
- Immutable state management
- Array operations (find, splice)

### 1. useImmer Hook
The `useImmer` hook simplifies state updates by allowing direct mutation of a draft state:
```js
updateShoppingList((draft) => {
  draft.push(newItem);
});
```

## Test Cases

### Normal Cases
1. Add item → appears in list
2. Update item → note toggles
3. Remove item → item disappears

### Edge Cases
1. Empty input → no item added
2. Removing non-existing item → no crash
3. Rapid updates → state remains stable

## Demo Video
https://youtu.be/wAxhVI8OrMs
