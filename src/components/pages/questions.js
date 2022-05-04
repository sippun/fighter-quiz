const EITYPE = 'EI', PMTYPE = 'PM', TRTYPE = 'TR', JSTYPE = 'JS';

//questionScore sets the scoring direction, true for right, false for left
//Example: EITYPE, false, sets scoring towards Enduring type
export const questions = [
  {
    questionType: EITYPE,
    questionText: 'Prefer distance running to sprinting',
    questionScore: false,
  },
  {
    questionType: PMTYPE,
    questionText: 'Overwhelm opponents with physical powers',
    questionScore: false,
  },
  {
    questionType: TRTYPE,
    questionText: 'Create and follow preplanned strategy',
    questionScore: false,
  },
  {
    questionType: PMTYPE,
    questionText: 'Wins with better reads or mind games',
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