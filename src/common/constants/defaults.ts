import { type StateSchema } from "@/store/schema/latest";

export const getVersion = () => process.env.REACT_APP_VERSION || `0.0.0`;

export const initialState: StateSchema = {
  general: {
    address: undefined,
    collapsed: false,
  },
};
