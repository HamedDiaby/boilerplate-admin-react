import { useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const useNavigation = () => {

  const navigate = useNavigate();

  const navigateTo = (link: string) => {
    return navigate(link);
  };

  const goBack = useCallback(()=> {
    navigate(-1);
  }, [navigate]);

  return {
    navigateTo,
    goBack,
    useSearchParams,
  };
};
