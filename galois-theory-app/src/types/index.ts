export type TrackType = 'ap-student' | 'child' | 'lifelong-learner';

export interface TrackInfo {
  id: TrackType;
  name: string;
  description: string;
  icon: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ModuleContent {
  title: string;
  introduction: string;
  sections: ContentSection[];
  quiz: QuizQuestion[];
}

export interface ContentSection {
  title: string;
  content: string;
  visualType?: 'polynomial-roots' | 'field-extension' | 'symmetry-group' | 'galois-correspondence' | 'solvability';
  example?: string;
}

export interface Module {
  id: string;
  number: number;
  title: string;
  shortDescription: string;
  content: {
    'ap-student': ModuleContent;
    'child': ModuleContent;
    'lifelong-learner': ModuleContent;
  };
}

export interface UserProgress {
  completedModules: string[];
  quizScores: Record<string, number>;
  currentTrack: TrackType;
}
