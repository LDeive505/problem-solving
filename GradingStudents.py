'''
// =================== PROBLEM DESCRIPTION ===================
Problem Name: Grading Students
Problem Link: https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true
HackerRank Difficulty: Easy
My Difficulty: B(Easy-Medium)
// ===========================================================
'''

def gradingStudents(grades):
    for i in len(grades):
        if grades[i] < 38:
            continue
        else:
            n = count_to_be_multiple(grades[i])
            if n < 3:
                grades[i] += n
    
    return grades


def count_to_be_multiple(n):
    count = 0
    while n % 5 != 0:
        n += 1
        count += 1
    
    return count