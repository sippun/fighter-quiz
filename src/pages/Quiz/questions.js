const EITYPE = 'EI', PMTYPE = 'PM', TRTYPE = 'TR', JSTYPE = 'JS';

//questionScore sets the scoring direction, true for right, false for left
//FALSE(EPTJ)/TRUE(IMRS)
export const questions = [
  {
    questionType: EITYPE,
    questionText: 'Stubborn and sees things to the end',
    questionScore: false,
  },
  {
    questionType: PMTYPE,
    questionText: 'Rather rely on strength than smarts',
    questionScore: false,
  },
  {
    questionType: TRTYPE,
    questionText: 'Create and follow preplanned strategy',
    questionScore: false,
  },
  {
    questionType: PMTYPE,
    questionText: 'Likes learning and studying',
    questionScore: true,
  },
  {
    questionType: EITYPE,
    questionText: 'Quickly capitalize on opportunities',
    questionScore: true,
  },
  {
    questionType: JSTYPE,
    questionText: 'Goals are based on personal desires',
    questionScore: true,
  },
  {
    questionType: TRTYPE,
    questionText: 'Goes with the flow',
    questionScore: true,
  },
  {
    questionType: JSTYPE,
    questionText: 'Other things are more important than what I want',
    questionScore: false,
  },
];