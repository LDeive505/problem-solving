'''
// =================== PROBLEM DESCRIPTION ===================
Problem Name: Time Conversion
Problem Link: https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true
HackerRank Difficulty: Easy
My Difficulty: B(Easy-Medium)
// ===========================================================
'''



def timeConversion(s):
    marker = s[-2] + s[-1]
    hr = int(s[0] + s[1])
    mn = s[3] + s[4]
    sg = s[6] + s[7]
    
    if marker == 'PM':
        if hr != 12:
            hr += 12

    else:
        if hr == 12:
            hr = 0
    
    hr = str(hr)
    if len(hr) == 1:
        hr = '0' + hr
        
    return f'{hr}:{mn}:{sg}'