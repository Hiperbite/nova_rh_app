import { useReducer } from "react";

const useAuthReducer: any = () =>
  useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignIn: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignIn: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignIn: false,
      userToken: null,
    }
  );

export default useAuthReducer;
