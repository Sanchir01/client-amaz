import { useTypedSelector } from './useTypedSelector';

export const useCart = () => useTypedSelector(state => state.user)