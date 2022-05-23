import React, { useState } from "react";

export const useList = (arr: number[]) => {
    const [list, setList] = useState<number[]>(arr)
    return {
        alist:list,
      
        push: (arg: number) => {
        setList((oldlist) => [...oldlist, arg]);
      },
      pop: ()  => {
        setList(list.slice(0,-1))
      },
      clear: () => {
        setList([]);
      },
      reset: () => {
        setList(arr);
        },
        map: () => {
            var newarr = list.map((e) => {
              return(e*2)
            })
            setList(newarr)
      }
    };

};
