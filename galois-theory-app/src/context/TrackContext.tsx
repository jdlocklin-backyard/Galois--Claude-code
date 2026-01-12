import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { TrackType, UserProgress } from '../types';

interface TrackContextType {
  currentTrack: TrackType;
  setCurrentTrack: (track: TrackType) => void;
  progress: UserProgress;
  completeModule: (moduleId: string) => void;
  setQuizScore: (moduleId: string, score: number) => void;
}

const TrackContext = createContext<TrackContextType | null>(null);

export function TrackProvider({ children }: { children: ReactNode }) {
  const [currentTrack, setCurrentTrack] = useState<TrackType>('lifelong-learner');
  const [progress, setProgress] = useState<UserProgress>({
    completedModules: [],
    quizScores: {},
    currentTrack: 'lifelong-learner',
  });

  const completeModule = (moduleId: string) => {
    setProgress(prev => ({
      ...prev,
      completedModules: prev.completedModules.includes(moduleId)
        ? prev.completedModules
        : [...prev.completedModules, moduleId],
    }));
  };

  const setQuizScore = (moduleId: string, score: number) => {
    setProgress(prev => ({
      ...prev,
      quizScores: { ...prev.quizScores, [moduleId]: score },
    }));
  };

  return (
    <TrackContext.Provider
      value={{
        currentTrack,
        setCurrentTrack,
        progress,
        completeModule,
        setQuizScore,
      }}
    >
      {children}
    </TrackContext.Provider>
  );
}

export function useTrack() {
  const context = useContext(TrackContext);
  if (!context) {
    throw new Error('useTrack must be used within a TrackProvider');
  }
  return context;
}
