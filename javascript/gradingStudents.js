/*
HackerLand University has the following grading policy:

Every student receives a grade in the inclusive range from 0 to 100
Any grade less than 40 is a failing grade

Sam is a professor at the university and likes to round each student's 
grade according to these rules:

  If the difference between the grade and the next multiple
    of 5 is less than 3, round geade up to the nexxt multiple of 5
  If the value of grade is less than 38 no orounding occurs
    as the result will still be a failing grade
*/

function gradingStudents(grades) {
    
    let marbles = [];
    grades.forEach(grade => {
        let modulus = grade % 5;
        let minulus = 5 - modulus;
        let newGrade;
        if (grade>37) {
            if (minulus < 3) {
                grade = grade+minulus;
            }
        }
        marbles.push(grade)
    })
   return marbles;
}
