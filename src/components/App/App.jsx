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

  useEffect(() => {
    window.localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const defaultValue = () => setFeedback({ good: 0, neutral: 0, bad: 0 });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <>
      <Description />
      <Options
        setValue={updateFeedback}
        resetValue={defaultValue}
        totalFeedback={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback value={feedback} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
