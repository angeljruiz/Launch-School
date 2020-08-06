let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  let results = {studentGrades: [], exams: []};
  let agg = [];
  let min = 100;
  let max = 0;
  Object.keys(scores).forEach( (student, index) => {
    agg.push(scores[student].scores.exams);
    let exams = processStudentExams(scores[student].scores.exams);
    let exercises = processExercises(scores[student].scores.exercises);
    results.studentGrades.push(processGrade(exams, exercises));
  });
  results.exams = processExams(agg);
  return results;
}

function processExams(exams) {
  let results = [];
  let outterLen = exams.length
  let innerLen = exams[0].length;
  for(let i=0; i<innerLen; i++) {
    let exam = [];
    let avg;
    let min;
    let max;
    for(let j=0; j<outterLen; j++) {
      exam.push(exams[j][i]);
    }
    avg = exam.reduce( (sum, e) => sum + e) / exams.length;
    min = exam.reduce( (sum, e) => minMax(sum, e, true));
    max = exam.reduce( (sum, e) => minMax(sum, e, false));
    results.push({average: avg, minimum: min, maximum: max});
  }
  return results;
}

function processStudentExams(exams) {
  return exams.reduce( (sum, item) => sum + item ) / exams.length;
}

function processExercises(exercises) {
  return exercises.reduce( (sum, item) => sum + item);
}

function processGrade(exams, exercises) {
  let total = exams * .65 + exercises * .35;
  let grade = '';
  if(total >= 93) {
    grade = 'A';
  } else if(total >= 85) {
    grade = 'B';
  } else if (total >= 77) {
    grade = 'C';
  } else if (total >= 69) {
    grade = 'D'
  } else if (total >= 60) {
    grade = 'E';
  } else {
    grade = 'F';
  }
  return String(Math.round(total)) + ' (' + grade + ')';
}

function minMax(last, current, min) {
  if(min) {
    return last > current ? current : last;
  } else {
    return last > current ? last : current;
  }
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
