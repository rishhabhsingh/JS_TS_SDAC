const calculateGrade = (score) => {
    return score >= 6 ? 'A'
        : score >= 4 ? 'B'
        : 'C'
}

console.log(calculateGrade(5))