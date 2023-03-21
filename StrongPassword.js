// =================== PROBLEM DESCRIPTION ===================
/*
Problem Name: Strong Password
Problem Link: https://www.hackerrank.com/challenges/strong-password/problem?isFullScreen=true
HackerRank Difficulty: Easy
My Difficulty: C (Easy)
*/
// ===========================================================



function minimumNumber(n, password) {
    let missing = 0
    let missingTypes = 0
    if (!password.match(/[0-9]/)) {
        missingTypes+= 1
        missing += 1
    }
    if (!password.match(/[a-z]/)) {
        missingTypes+= 1
        missing += 1
    }
    if (!password.match(/[A-Z]/)) {
        missingTypes+= 1
        missing += 1
    }
    if (!password.match(/[!@#$%^&*()--+]/)) {
        missingTypes+= 1
        missing += 1
    }
    if (n + missingTypes < 6) {
        missing += 6 - (n + missingTypes)
    }
    return missing
}


// =================== TESTS ===================

const r = minimumNumber(6, 'Ld@1ab')
console.log(r);