import { RootState } from "@/app/redux";
import { UserProfileResponseDTO } from "@/app/types";
import { useSelector } from "react-redux";

export const useSelectorCurrent = (): UserProfileResponseDTO => {
  return useSelector<RootState, UserProfileResponseDTO>((state) => {
    // console.log('state', state);
    return state.user.currentUser;
  })
}