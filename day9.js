const isValidNum = (num, val) => {
    for (let i = 0; i < input.length - 1; i++) {
        for (let j = i + 1; j < input.length; j++) {
            let slicedInput = input.slice(i,j+1);
            let sum = slicedInput.reduce((acc,num) => {
                return parseInt(num) + acc;
            }, 0)
            if (sum === val) {
                console.log(slicedInput.sort((a,b)=> a-b))
                console.log('answer')
            }
        }
    }
    console.log('end')
}

const findSolution1 = () => {
    input.forEach((num,idx) => {
        let startIdx = idx - 25 >= 0 ? idx - 25 : 0
        let isValid = isValidNum(input.slice(startIdx, idx+1), parseInt(num))
        console.log(isValid);
        console.log(num);
    })
}

const findSolution = () => {
    isValidNum(null, 18272118);
}

const input = `2
32
10
49
28
42
18
29
17
46
27
24
14
31
21
13
48
1
30
23
50
8
36
6
7
3
11
19
4
40
5
9
10
12
15
16
17
20
14
88
18
66
13
21
25
22
23
26
28
83
29
24
31
19
34
27
30
33
32
35
38
44
37
50
36
39
40
60
59
56
52
43
46
47
48
71
64
49
51
82
89
62
108
123
72
73
79
153
75
85
94
83
95
90
91
93
109
99
97
148
100
111
113
124
170
161
169
160
162
147
152
178
158
238
182
212
173
181
183
213
190
196
197
338
211
299
224
237
271
305
307
344
355
325
386
340
331
418
354
356
364
363
371
373
409
387
407
408
568
435
624
659
508
576
612
632
656
665
671
685
744
1034
764
717
729
727
734
758
794
1031
1058
815
843
1067
1570
1084
1792
1321
1188
1283
1288
1493
1538
1405
1402
1444
1446
1552
1451
2041
1461
1573
1601
3034
1873
2416
1658
2509
2734
2272
2367
4272
2471
2590
2978
2944
2898
3062
2846
3102
3474
2897
2912
3024
3119
3259
3174
3531
3930
4025
4074
5264
4639
6031
4743
5730
6080
5061
6283
5743
5744
5758
5936
5809
5921
8738
9818
8592
6650
6293
8235
10575
7461
7955
8713
8817
12092
9382
9804
11745
14156
10804
10805
11487
11664
17409
11567
11730
12102
12214
12943
13754
16053
26858
14248
19685
15416
16174
18621
19621
24316
32564
19186
21291
27630
38807
21609
22292
33393
23297
23669
23944
23832
31787
29807
26697
37423
44055
29664
30422
34602
55893
37783
37807
62986
54366
40477
42483
42900
43901
44906
60099
45589
46966
47129
47613
47776
68738
56361
64409
78035
75590
74323
112639
65024
72385
78260
82713
78284
91030
143061
128302
90259
86801
121936
112153
92555
182814
111375
94742
95389
112800
120770
121385
129433
137409
139347
143308
173673
143284
268415
156544
168543
165085
177060
218561
179356
181543
182190
187297
279852
187944
277579
240808
232151
208189
233570
242155
264693
266842
280693
282631
286592
299828
308369
321629
325087
345603
397917
356416
367300
368840
363733
651471
420867
396133
420095
440340
441759
450344
472882
475725
506848
531535
547535
742496
569223
664785
898835
804073
646716
670690
741736
723716
720149
731033
1466212
1388501
1349179
816228
923226
973294
1004417
1122441
948607
979730
1398951
1038383
1079070
1116758
1215939
1289372
1769157
2052364
1317406
1366865
2656237
1454749
1451182
2087014
2387562
1896520
1739454
1764835
1789522
1921901
1928337
1953024
2295009
1986990
2018113
2117453
3319889
2195828
2332697
2505311
4552757
2684271
2768588
2772155
2821614
2905931
3667791
3807635
3528976
4285721
3504289
3757567
3554357
4148852
3850238
5238628
4725179
7631110
6003463
4135566
4313281
5515717
4528525
6301131
5189582
7081869
5452859
6410220
5593769
6579181
6434907
9039820
7033265
7286543
7261856
7906419
7311924
7404595
18272118
`.split('\n')

findSolution()