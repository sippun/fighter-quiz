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
    questionText: 'Are you interested in abstract ideas like math and philosophy',
    questionScore: true,
  },
  {
    questionType: EITYPE,
    questionText: 'Explodes on opponent with decisive attacks',
    questionScore: true,
  },
  {
    questionType: JSTYPE,
    questionText: 'Im justice',
    questionScore: false,
  },
];