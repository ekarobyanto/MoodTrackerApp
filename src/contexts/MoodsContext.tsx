import {createContext, ReactNode, useContext} from 'react';
import {MoodPayload} from '../interfaces/mood_payload';
import {useMoodAsyncStorage} from '../hooks/useMoodAsyncStorage';

interface IMoodsContext {
  storedMoods: MoodPayload[];
  addMood: (mood: MoodPayload) => Promise<void>;
}

const MoodsContext = createContext<IMoodsContext>({
  storedMoods: [],
  addMood: async _ => console.warn('unimplemented'),
});

export const MoodsContextProvider: React.FC<{children: ReactNode}> = ({
  children,
}) => {
  const {moods, addMood} = useMoodAsyncStorage();
  return (
    <MoodsContext.Provider
      value={{
        addMood,
        storedMoods: moods ?? [],
      }}>
      {children}
    </MoodsContext.Provider>
  );
};

export const useMoodsContext = () => {
  const context = useContext(MoodsContext);
  if (!context) {
    throw new Error(
      'useMoodsContext must be used within a MoodsContextProvider',
    );
  }
  return context;
};
