import React, { createContext } from 'react';


const bookContext = createContext({ book: 'black' });

function bookReducer(state:any, action:any) {
  switch(action.type) {
    case 'addBook': {
      console.log('adding a book');
      return
    }
    default: {
      console.log('no action');
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function BookProvider({children}: {children: React.ReactNode}) {
  const [state, dispatch] = React.useReducer(bookReducer, { book: 'any' })
  const value = {state, dispatch}
  return (
    <bookContext.Provider value={value}>
      {children}
    </bookContext.Provider>
  )
}

// Inspired by this coding example: https://codesandbox.io/s/bitter-night-i5mhj?file=/src/count-context.tsx
// I really like to provide a helper function to handle using a context or "store"
// That way, anything that needs to call or refrence the data can have a single method to refrence and less boiler plate
// You'll see the ussage is App.tsx and in bookForm.tsx since both need to use the context
function useBookList() {
  const context = React.useContext(bookContext);
  // TODO: add tests around undefined and other potential edge cases.
  if (context === undefined) {
    throw new Error('useBookList must be used within a Provider');
  }
  return context;
}

export {
  BookProvider,
  useBookList
}