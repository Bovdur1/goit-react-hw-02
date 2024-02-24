import './App.css';
import Description from '../Description/Description.jsx';
import Feedback from '../Feedback/Feedback.jsx';
import Options from '../Options/Options.jsx';
import Notification from '../Notification/Notification.jsx';
import { useState, useEffect } from 'react';

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem('feedback');

    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }

    return { good: 0, neutral: 0, bad: 0 };
  });

  // Запис статистики відгуків до локального сховища
  useEffect(() => {
    window.localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const resetFeedback = () => setFeedback({ good: 0, neutral: 0, bad: 0 });

  // Текст для компоненту Description
  const descrTitle = 'Sip Happens Café';
  const descrArticle =
    'Please leave your feedback about our service by selecting one of the options below.';

  return (
    <>
      <Description title={descrTitle} article={descrArticle} />
      <Options
        setValue={updateFeedback}
        resetValue={resetFeedback}
        totalFeedback={totalFeedback}
      />
      <Feedback value={feedback} totalFeedback={totalFeedback} />

      {totalFeedback ? (
        <Feedback value={feedback} totalFeedback={totalFeedback} />
      ) : (
        <Notification message={'No feedback yet'} />
      )}
    </>
  );
}

export default App;
