let gradeCalc = function (studentDegree, totalPossible) {
    let degreePer = (studentDegree / totalPossible) * 100 
    let studentGrade
    if (degreePer >= 90 && degreePer <= 100) {
        studentGrade = 'A'
    } else if (degreePer >= 80 && degreePer <= 89) {
        studentGrade = 'B'
    } else if (degreePer >= 70 && degreePer <= 79) {
        studentGrade = 'C'
    } else if (degreePer >= 60 && degreePer <= 69) {
        studentGrade = 'D'
    } else {
        studentGrade = 'F'
    }
    return `You got A ${studentGrade} (${degreePer}%)!`
}

let result = gradeCalc(15, 20)
console.log (result)