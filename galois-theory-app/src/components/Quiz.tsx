import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { QuizQuestion } from '../types';

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
}

export function Quiz({ questions, onComplete }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const currentQuestion = questions[currentIndex];
  const isCorrect = selectedAnswer === currentQuestion?.correctIndex;
  const letters = ['A', 'B', 'C', 'D'];

  const handleSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    setIsAnswered(true);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      // Score is already updated by handleSubmit, no need to add again
      setIsComplete(true);
      onComplete(Math.round((score / questions.length) * 100));
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setIsComplete(false);
  };

  if (isComplete) {
    const finalScore = score;
    const percentage = Math.round((finalScore / questions.length) * 100);

    return (
      <motion.div
        className="quiz-container"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="text-center">
          <h3 style={{ marginBottom: '1rem' }}>Quiz Complete!</h3>
          <div
            style={{
              fontSize: '4rem',
              fontWeight: 'bold',
              color: percentage >= 70 ? 'var(--color-success)' : 'var(--color-gold-400)',
              marginBottom: '1rem',
            }}
          >
            {percentage}%
          </div>
          <p style={{ color: 'var(--color-gray-400)', marginBottom: '1.5rem' }}>
            You got {finalScore} out of {questions.length} questions correct!
          </p>
          {percentage >= 70 ? (
            <p style={{ color: 'var(--color-success)' }}>
              Great job! You've mastered this module.
            </p>
          ) : (
            <p style={{ color: 'var(--color-gray-300)' }}>
              Review the material and try again to improve your score.
            </p>
          )}
          <button
            className="primary-btn"
            onClick={handleRestart}
            style={{ marginTop: '1.5rem' }}
          >
            Try Again
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h4>Knowledge Check</h4>
        <span className="quiz-progress">
          Question {currentIndex + 1} of {questions.length}
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          <p className="quiz-question">{currentQuestion.question}</p>

          <div className="quiz-options">
            {currentQuestion.options.map((option, index) => {
              let className = 'quiz-option';
              if (selectedAnswer === index) className += ' selected';
              if (isAnswered) {
                if (index === currentQuestion.correctIndex) {
                  className += ' correct';
                } else if (selectedAnswer === index) {
                  className += ' incorrect';
                }
              }

              return (
                <button
                  key={index}
                  className={className}
                  onClick={() => handleSelect(index)}
                  disabled={isAnswered}
                >
                  <span className="option-letter">{letters[index]}</span>
                  <span>{option}</span>
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <motion.div
              className={`quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <strong>{isCorrect ? 'Correct!' : 'Not quite.'}</strong>
              <p style={{ margin: '0.5rem 0 0' }}>{currentQuestion.explanation}</p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="quiz-actions">
        <div />
        {!isAnswered ? (
          <button
            className="primary-btn"
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
          >
            Check Answer
          </button>
        ) : (
          <button className="primary-btn" onClick={handleNext}>
            {currentIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
          </button>
        )}
      </div>
    </div>
  );
}
