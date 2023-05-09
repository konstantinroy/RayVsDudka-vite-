const getTheme = () => {
  const theme = `${window?.localStorage?.getItem('theme')}`;
  if ([ 'light', 'dark' ].includes(theme)) return theme;
  
  return 'dark';
};
  
const initialState = {
  theme: getTheme(),
};
  
export const user = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_THEME':
    return {
      ...state,
      theme: state.theme === 'light'
        ? 'dark'
        : 'light',
    };
  
  default:
    return state;
  }
};