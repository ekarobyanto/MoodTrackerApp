import {createContext, ReactNode, useContext} from 'react';
import {StatsShowMode} from '../enums/stats_show_mode';
import {useAppPreferenceAsyncStorage} from '../hooks/useAppPreferenceAsyncStorage';

interface IAppPreferenceContext {
  preference: StatsShowMode;
  setPreference: (preference: StatsShowMode) => void;
}

const AppPreferenceContext = createContext<IAppPreferenceContext>({
  preference: StatsShowMode.PIE,
  setPreference: _ => console.warn('unimplemented'),
});

export const AppPreferenceContextProvider: React.FC<{children: ReactNode}> = ({
  children,
}) => {
  const {preference, setPreference} = useAppPreferenceAsyncStorage();
  return (
    <AppPreferenceContext.Provider
      value={{
        preference: preference ?? StatsShowMode.PIE,
        setPreference,
      }}>
      {children}
    </AppPreferenceContext.Provider>
  );
};

export const useAppPreferenceContext = () => {
  const context = useContext(AppPreferenceContext);
  if (!context) {
    throw new Error(
      'useTheme must be used within a AppPreferenceContextProvider',
    );
  }
  return context;
};
