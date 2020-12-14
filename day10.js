const findSolution = () => {
    let sortedInput = input.sort((a,b) => a - b);
    let map = sortedInput.reduce((acc,curr) => {
        acc[curr] = true;
        return acc
    }, {})
    let oneJolt = 0;
    let threeJolt = 0;
    let currNum = 0;
    let largestNum = parseInt(sortedInput[sortedInput.length - 1]);
    while (currNum <= largestNum) {
        console.log(currNum)
        if (map[currNum + 1]) {
            currNum++
            oneJolt++
        } else if (map[currNum + 2]) {
            currNum++
            currNum++
            oneJolt++
        } else if (map[currNum + 3]) {
            currNum++
            currNum++
            currNum++
            threeJolt++
        } else {
            break;
        }
    }
    console.log('oneJolt', oneJolt)
    console.log('threeJolt', threeJolt)
}

const input = `26
97
31
7
2
10
46
38
112
54
30
93
18
111
29
75
139
23
132
85
78
99
8
113
87
57
133
41
104
98
58
90
13
91
20
68
103
127
105
114
138
126
67
32
145
115
16
141
1
73
45
119
51
40
35
150
118
53
80
79
65
135
74
47
128
64
17
4
84
83
147
142
146
9
125
94
140
131
134
92
66
122
19
86
50
52
108
100
71
61
44
39
3
72
`.split('\n')

findSolution()