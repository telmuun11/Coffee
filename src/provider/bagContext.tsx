import React, {createContext, useState, Dispatch, SetStateAction} from 'react';

export const CardContext = createContext({
  list: 0,
  setList: (product: any) => {
    product;
  },
})
const result : string[] = [];


export const CardProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const [list, setList] = useState(0);

  return (
    <CardContext.Provider
      value={{
        list,
        setList,
      }}>
      {children}
    </CardContext.Provider>
  );
};
