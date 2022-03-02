const studentList = [
  {
      firstName: "Allan",
      lastName: "Able",
      scores: [95, 85, 92, 98]
  },
  {
      firstName: "Amy",
      lastName: "Alexander",
      scores: [80, 88, 100]
  },
  {
      firstName: "Betty",
      lastName: "Barns",
      scores: [70, 80, 90, 100]
  },
  {
      firstName: "Bob",
      lastName: "Bones",
      scores: [75, 85, 95, 85]
  },
  {
      firstName: "Cindy",
      lastName: "Chase",
      scores: [95, 90, 92, 98]
  },
  {
      firstName: "Charles",
      lastName: "Chips",
      scores: [88, 99, 90]
  },
];

const studentResults = [];

for (const student of studentList) {
    let gradesSum = 0;

    let minG = student.scores.reduce(function(prev, curr) {
      return prev < curr ? prev : curr;
    });

    let maxG = student.scores.reduce(function(prev, curr) {
      return prev > curr ? prev : curr;
    });

    for (const grade of student.scores) {
      gradesSum += grade;
    }
    const averageGrade = gradesSum / student.scores.length;
    studentResults.push({
      firstName: student.firstName,
      lastName: student.lastName,
      minGrade: minG,
      maxGrade: maxG,
      avgGrade: averageGrade
    });
}

let cLastNameResults = 
  studentResults.filter(d => 
    d.lastName[0] == 'C' 
)

console.log(cLastNameResults)