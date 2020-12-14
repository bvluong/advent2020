String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

const dec2bin = (dec) => {
    return (dec >>> 0).toString(2);
}

const writeVal = (mask, val) => {
    const binary = String(dec2bin(val))
    let arr = binary.split('');
    let idx = 35
    let maskArr = mask.split('');
    while (arr.length) {
        val = arr.pop();
        if (maskArr[idx] === 'X') {
            maskArr[idx] = val
        }
        if (maskArr[idx] === '0' && val === '1') {
            maskArr[idx] = val
        }
        idx--
    }
    return maskArr.join('').replaceAll('X', '0');
}

const writeVal2 = (mask, val) => {
    const binary = String(dec2bin(val))
    let arr = binary.split('');
    let idx = 35
    let maskArr = mask.split('');
    while (arr.length) {
        val = arr.pop();
        if (maskArr[idx] === '0' && val === '1') {
            maskArr[idx] = val
        }
        idx--
    }
    return maskArr.join('')
}

const writeCombination = (maskArr, map, idx, memVal) => {
    while (idx>=0) {
        if (!maskArr.includes('X')) {
            let decimal =  maskArr.join('')
            let val = parseInt( decimal, 2 );
            map[val] = parseInt(memVal);
            break
        }

        if (maskArr[idx] === 'X') {
            let copy = [...maskArr]
            copy[idx] = '0'
            writeCombination(copy, map, idx, memVal)
            copy[idx] = '1'
            writeCombination(copy, map, idx, memVal)
        }
        idx--
    }
}


const findSolution = () => {
    let maskVal = null;
    let map = {}
    input.forEach(row => {
        let [key, val] = row.split(' = ');
        if (key === 'mask') {
            maskVal = val;
        } else {
            let dec = key.slice(4, key.length - 1);
            let withX = writeVal2(maskVal, dec);
            let withOutX = parseInt(withX.replaceAll('X', '0'),2);
            // map[dec] = parseInt(val);
            writeCombination(withX.split(''), map, 35, val);
            console.log('end')
        }
    })
    let ans = Object.values(map).reduce((acc,val) => {
        return acc + val
    }, 0);
    console.log(map);
    console.log(ans)
}

const input = `mask = 0XX1XXX1101X101100101001010X1X110000
mem[41476] = 14032
mem[20538] = 23975525
mem[44025] = 8902467
mem[23416] = 13278193
mem[40963] = 2086
mem[17050] = 1569690
mem[13533] = 5470449
mask = 011000101X10X1XX00101100001XX1XX0111
mem[11041] = 688451207
mem[2356] = 131442632
mem[47817] = 59104
mask = 0001101XX011X0X10X10000X010XX111000X
mem[12356] = 716205
mem[16949] = 26265398
mem[38622] = 24845
mem[769] = 755
mem[56920] = 305369
mem[8196] = 61569921
mem[188] = 12675
mask = 11011X1010XX100100X0011000X1X0100100
mem[19009] = 356438366
mem[12368] = 25473412
mem[29459] = 799158
mem[13465] = 15500913
mem[8375] = 1762
mem[46272] = 94167
mask = X000111001110X100000X0011011XX100011
mem[15450] = 4114776
mem[34487] = 8375
mem[41817] = 18121
mem[6307] = 60515
mem[40743] = 517650454
mask = 10X01110111100XX00X010X111000101X1X0
mem[7812] = 16330414
mem[30335] = 466060785
mem[35944] = 847
mem[49580] = 1958
mem[59473] = 19887792
mem[28900] = 6542
mem[34820] = 98175933
mask = X010XX101101010X0000X0010001000001X0
mem[46282] = 22976226
mem[40137] = 45087136
mem[51356] = 3370437
mem[62716] = 40
mem[63300] = 7924
mem[10817] = 1508
mask = 0001101000X110010XX0X00001011X111101
mem[32646] = 162859393
mem[62320] = 2426317
mem[313] = 72238800
mem[49382] = 14540
mask = 0001101100110011X011000000X00111X1X1
mem[42477] = 1291
mem[34497] = 81992143
mem[21183] = 8224931
mem[45331] = 4850589
mem[25706] = 334861
mask = 000110111011100X00XX010X010011101110
mem[39907] = 4465
mem[21799] = 357055
mem[59734] = 17314354
mask = X00X101X101110X10010111XXXX0011100X0
mem[46366] = 190719510
mem[18743] = 16121
mem[19149] = 248746
mem[14315] = 7780
mask = XX000X100011001X0000101000X0X0XXX001
mem[2954] = 2613
mem[50772] = 992647
mem[18070] = 3128616
mask = 10XX1110000X0110010X10X100X1X111XX01
mem[51264] = 328844982
mem[43715] = 3650584
mask = X00X10111011100100101X1X00X0X0X11001
mem[42619] = 22042108
mem[64225] = 42365
mem[50397] = 22223
mem[22643] = 72733769
mask = 1X001110X0110110X000XX10111001XX0001
mem[19149] = 882536950
mem[42775] = 361
mem[46895] = 342576
mem[32700] = 5694
mem[11470] = 6481999
mask = 00011X1100110011X01X100X001011X1X110
mem[39264] = 16344930
mem[8161] = 382432628
mem[63411] = 1224
mem[7160] = 166212
mem[38527] = 1049945
mask = 0110100010110111000000111X0111X10X0X
mem[22956] = 935
mem[37256] = 4029977
mem[63527] = 614740755
mem[35499] = 4431
mem[42900] = 49979206
mem[51745] = 882
mask = 10XX1100X01100100100X0X1X1111X0000XX
mem[61801] = 3618
mem[28559] = 421756
mask = X01011X0111X0000000X11X11101X011001X
mem[3161] = 14874
mem[29508] = 2092706
mem[40251] = 30980889
mem[4788] = 394
mask = 1XX0100110011101110000X01001110XXX01
mem[2387] = 118365350
mem[11825] = 66225
mem[16756] = 91924010
mask = 1000100X1XX11X01XX00XX1010X111011011
mem[20652] = 15633
mem[58061] = 7651801
mem[33499] = 103658
mask = 00000X0X10X1101101100110011X00010001
mem[25435] = 148
mem[24037] = 31691643
mem[44316] = 711
mask = 10001110XX010X1X010111010X010XX00000
mem[63842] = 29627531
mem[36624] = 1296
mem[56181] = 30061
mem[47386] = 40106
mem[58312] = 1375
mask = 0001101010011XXXX0100011010000101000
mem[42115] = 7172450
mem[49180] = 987035517
mem[13301] = 28324706
mem[33025] = 394238236
mask = 1110101X01X1000000000111101X0011X001
mem[24725] = 4310928
mem[2620] = 41285327
mem[47820] = 3129173
mem[1293] = 5127449
mem[11745] = 28590
mem[36381] = 4204
mem[51744] = 51694
mask = 100111X0000100100X0010X1X11010100011
mem[25359] = 884
mem[19779] = 1731
mem[11585] = 4188926
mem[30395] = 236676337
mask = 00X110111X0110X1000X101001X00001X100
mem[27733] = 313
mem[65360] = 86981
mem[46366] = 767235
mem[29755] = 83833
mem[32124] = 232097371
mask = 001110111X01101100XXX10110X100X1010X
mem[53702] = 199650
mem[44608] = 6590868
mem[34829] = 5394
mask = X010111011X101000X0X100110001X001100
mem[17120] = 23453
mem[38913] = 185044
mem[18780] = 4903
mem[175] = 21851
mem[39035] = 2030
mem[22611] = 123784
mask = 11101110011100100X00X1100XX000110010
mem[64049] = 5356981
mem[63577] = 117267698
mask = 1X101X10011100X00000X1X11X000010X011
mem[13208] = 1183
mem[23377] = 24464667
mem[57628] = 138647
mem[18400] = 1395575
mem[29779] = 494833
mem[37426] = 3361062
mem[47386] = 607532373
mask = 101X11100X00011001000XX0100000XX1X11
mem[61236] = 119878442
mem[37985] = 34919
mem[45599] = 412119
mem[62029] = 56098
mem[32672] = 106027256
mem[16953] = 19574328
mem[28683] = 497476095
mask = 10X01110XX110XXX000010011X00XX101011
mem[36926] = 999
mem[26268] = 12770
mem[13208] = 4100495
mem[36974] = 56256136
mem[59728] = 12633
mask = 10001XX0101110010000010000101101X11X
mem[21209] = 1165019
mem[52913] = 4010374
mem[39089] = 5103489
mem[59734] = 115220582
mask = 010X1X01101010110010001XX10X01100100
mem[46092] = 219343233
mem[37520] = 4795
mask = 10001X1X0011010X0X00X011101101111001
mem[43095] = 22274
mem[63382] = 14322315
mem[29851] = 198203
mem[38913] = 365650159
mem[23153] = 4470189
mem[43043] = 387267864
mem[12301] = 3613737
mask = 000110X1001110010X101X01111110X0X10X
mem[53114] = 17151
mem[32537] = 857661
mem[49382] = 59317139
mem[24893] = 3884
mem[29265] = 10769292
mem[49438] = 103605698
mem[57488] = 949859
mask = 10XXX11X00110X100000X000010011X011X0
mem[58061] = 319898
mem[57563] = 43183
mem[5257] = 949147935
mem[57481] = 15066
mem[14197] = 5250925
mem[39109] = 1471
mask = 00011X101001X0X100011011X11110XX1000
mem[59252] = 46539
mem[52900] = 4898
mem[61334] = 40829484
mem[24965] = 8050
mem[36876] = 441653
mask = X00110X11011100000001010XX010X100000
mem[45393] = 1597628
mem[13748] = 66625913
mem[40882] = 2875
mem[960] = 105796443
mem[52406] = 2823788
mem[3856] = 11564504
mask = 10X1101010X1X00100010X0X010101110110
mem[37859] = 23030
mem[28890] = 5943
mask = 11X0101001X10X0X00001X1010X10010X0XX
mem[53315] = 133575
mem[23196] = 238
mem[55322] = 81
mem[55314] = 5922
mask = 1X001X1X00110111X000111X10101X001XX0
mem[58877] = 81175841
mem[51461] = 434887
mem[29757] = 325911
mask = X0X0X1X0X01100000000X00110X00101XX11
mem[26312] = 220610
mem[36669] = 25461656
mem[26785] = 606
mem[17752] = 115
mem[6189] = 6698
mem[7480] = 1190
mem[15971] = 96609
mask = X110X0101011011100001X100X0010X00X01
mem[43175] = 6644146
mem[10749] = 231447710
mem[19322] = 58074323
mem[15573] = 8577
mem[62029] = 61918
mem[31715] = 18297
mem[41994] = 44438
mask = X001X01110X1100X00X000X00X00X01X0000
mem[58513] = 212212
mem[35792] = 15346
mem[64206] = 4719831
mem[832] = 543960291
mem[18780] = 62502300
mask = XX1111100X0101100X0X0X0X000001X10111
mem[21109] = 474293
mem[28900] = 2806
mask = 10XX111000X10X100X00100X1010010X0011
mem[14165] = 15464
mem[53233] = 152163192
mem[44025] = 121941797
mem[53450] = 433714
mem[4913] = 7421311
mem[188] = 60127159
mask = X001101000011X01001X0X110111100X0X01
mem[60747] = 192522
mem[54204] = 28849
mem[36729] = 22698774
mem[52115] = 110985
mem[57563] = 682
mask = 1001XXX00011001X010X0010110XXX0X1011
mem[32646] = 1756
mem[15029] = 776777504
mem[3161] = 5837481
mask = X00XX0X0101X101101X00000010XX0X10001
mem[57391] = 1622433
mem[12908] = 1770908
mem[43252] = 2640
mem[60063] = 14000
mem[26203] = 22549887
mem[827] = 14605957
mask = 10X11X110000011X00X00X1000111X001000
mem[10734] = 338
mem[58310] = 226465
mem[52913] = 454
mem[37616] = 249660
mem[17625] = 266511
mem[57381] = 361428
mask = 100110X010X11X0100000001X000010X0101
mem[49180] = 626303
mem[8469] = 116
mask = 101X1110XX0X0010010000X1010010110X1X
mem[9552] = 623773022
mem[30060] = 14419380
mem[16756] = 21987
mem[14129] = 466
mem[13465] = 30465
mem[63276] = 128236
mask = 1001110100XX11X000001X1X0101X0000010
mem[27588] = 8166
mem[1516] = 11756
mem[53138] = 1983
mem[62272] = 468137433
mem[30834] = 30766905
mem[47453] = 39455
mask = 0001101X100110010001010X11X1XX0011X0
mem[24972] = 1715002
mem[43864] = 90876
mem[61372] = 192618
mem[10734] = 837
mask = 1010X1100111X0000000111100011110X0X0
mem[47239] = 74086526
mem[49939] = 49746
mem[10895] = 23075
mem[65011] = 202673707
mask = X0X1101XX0111001001X10010111001X1100
mem[20214] = 61662
mem[37436] = 345208
mem[1630] = 388457
mem[23511] = 61766884
mem[20859] = 64848629
mask = 1000X11X001101X10X00110010X1110010X0
mem[25419] = 28604
mem[38913] = 32927
mem[17205] = 472
mem[56058] = 594
mask = 00X11011X01110010XX0000X000X0X1X1X01
mem[26203] = 26989
mem[45551] = 732
mem[58839] = 55235
mem[1129] = 67488208
mask = 100111X1000XX11X000011000010XX0XX00X
mem[14155] = 1172166
mem[19010] = 530312985
mem[26312] = 25222184
mem[4356] = 113886497
mem[62320] = 255163
mem[13910] = 8896163
mask = 100X1X101011X00100000X01000X01000101
mem[64201] = 3294
mem[4767] = 1238
mem[26268] = 92962256
mem[23511] = 859
mem[51259] = 2059
mem[61026] = 4725
mem[36876] = 877705
mask = XX011XX010111011001X1001000X0111X0XX
mem[65483] = 598563
mem[57113] = 294
mem[24944] = 54471
mem[6485] = 8443403
mask = 1X001X11001101X10X00X1001111011100X1
mem[62670] = 48958
mem[62173] = 126785687
mem[63951] = 1275323
mem[64656] = 401353954
mem[53988] = 713
mem[55322] = 1690
mask = 0100X11000110X1X00001X10010XX1XX0100
mem[19129] = 108065922
mem[59734] = 62554
mem[57425] = 70969544
mask = 100X111X00X1XX1000X000100100010010XX
mem[59081] = 248635
mem[33589] = 89551144
mem[26483] = 3592
mem[58837] = 14938
mask = XX01101010011001000XX00100X10XX00101
mem[26268] = 1919550
mem[42543] = 32407420
mem[14012] = 3176
mem[6070] = 2625503
mem[1970] = 41445788
mem[12368] = 507057537
mask = 0X0X111100111101001X1X0X11001100100X
mem[10671] = 13772
mem[44082] = 875
mem[5761] = 81
mem[9631] = 303660028
mem[16661] = 406188
mem[27807] = 12578
mem[19729] = 938033
mask = 101X111X0X0X0110010000X11X00001X11X0
mem[33143] = 2074831
mem[20348] = 172308
mem[29757] = 40606526
mem[37173] = 2311463
mem[59173] = 67005
mem[15642] = 687972
mask = 1001111100010X10000001X0101000X0X001
mem[32455] = 11789
mem[32961] = 2914
mem[51811] = 1940
mask = 0001101010X1100100X000010XXX01110X01
mem[59734] = 7041
mem[2047] = 728301208
mem[14012] = 72433008
mem[12356] = 126031399
mem[59410] = 42309395
mem[32323] = 3938
mask = 1011111000X10110X00000X1010001X10000
mem[47952] = 14328
mem[7064] = 7527457
mem[3914] = 2201809
mem[15520] = 16301732
mask = 10XX11100X11001001000000XX1111110001
mem[56178] = 339
mem[15606] = 3802900
mem[19168] = 976891
mem[65483] = 892268
mask = 000X101XX011000100100011X101101X0X01
mem[43261] = 3271356
mem[5201] = 15846
mem[64201] = 38576337
mask = XX10XXX0101101110000X01X10001111100X
mem[8469] = 9742701
mem[6060] = 63043
mem[41875] = 2040147
mask = X0X11110X0010X100X0X0010X000110100XX
mem[24811] = 146228691
mem[5282] = 94502573
mem[51356] = 27360
mask = 0011X0111101101X0X000X00100100X00000
mem[20214] = 79404
mem[53053] = 494301615
mem[32749] = 651
mem[6205] = 195615011
mem[50888] = 18
mem[46557] = 701
mask = 1001111X000X01100000X1001010100XX0X1
mem[31943] = 98133204
mem[15986] = 50658
mem[51787] = 541
mem[65378] = 224955462
mask = 10111X1X00X10110010X0000000000011011
mem[25419] = 738
mem[47453] = 2686
mem[24643] = 7536
mask = 0001X01010111X1X0100000011000011010X
mem[35756] = 64
mem[5149] = 60645652
mem[41871] = 1890098
mem[3022] = 252603
mem[52062] = 5875
mem[58943] = 797237350
mask = X00110101011XX010000110100010X000000
mem[37436] = 6548079
mem[35764] = 3432001
mem[36941] = 65975
mask = 000010X100X10001X0100X01010000X10101
mem[34696] = 2248339
mem[14083] = 15975033
mem[6577] = 901
mem[26908] = 255502
mem[12789] = 30697828
mask = 10X010101011000100X0X11001000110010X
mem[44320] = 1393
mem[29757] = 342285
mem[36642] = 6661
mem[7779] = 125978
mem[52090] = 28218650
mem[36766] = 1451129
mem[32821] = 38672
mask = X001X0101011101X0110000X0X00X111X001
mem[688] = 1445
mem[29459] = 3116969
mem[28168] = 2056
mem[20652] = 329409
mem[62382] = 1589
mask = 100111101011X0X1000000X1X01100000011
mem[44082] = 522049
mem[35499] = 306435
mem[2296] = 1624116
mem[477] = 199553
mask = 000X10010X111X010110X0X111X011100100
mem[51461] = 304494089
mem[59109] = 7054
mem[43106] = 841367
mem[23495] = 35948
mem[47405] = 4105986
mask = 1000X110001100100000101X0010XXXX1011
mem[34346] = 63860
mem[15450] = 21287640
mem[39226] = 10848394
mem[65171] = 342808754
mask = 10X1111000X10X100100X01X000001X10X11
mem[20605] = 25239
mem[15530] = 15210
mem[53450] = 631977
mem[49382] = 337741132
mem[44802] = 36180
mem[13730] = 386297
mem[44304] = 410
mask = 110XXX101001100100001XX100010XX11101
mem[6307] = 360684
mem[34209] = 30559
mask = X0001X100X110010000000X0100X01X0X011
mem[31037] = 16148100
mem[53546] = 9890720
mem[39022] = 17
mem[36766] = 29407814
mem[12512] = 60996381
mask = 100011XX11110011X000XX111X110X1X1X11
mem[7064] = 21863392
mem[42144] = 115358
mem[24037] = 24921044
mem[38714] = 260084
mem[63382] = 7611
mem[5421] = 138958764
mem[45370] = 9438
mask = 0011100110111X110010X001010X1001X010
mem[3501] = 16752744
mem[50874] = 1870557
mem[21866] = 1042519950
mem[46366] = 29539240
mem[1293] = 4121521
mem[29265] = 2517
mask = 01X00010101X011100X00X111XXX11000111
mem[57313] = 1088911
mem[30558] = 275492
mem[45058] = 7674206
mem[57037] = 1601
mem[55547] = 33529493
mem[48001] = 2606536
mask = 110X1010101X10010010X1110110000001XX
mem[43175] = 7896118
mem[18400] = 24947055
mem[33760] = 535147272
mask = 0000100100X110X10110001X1100X1100110
mem[52455] = 4031
mem[2080] = 597
mem[13626] = 5341
mem[21873] = 2003200
mem[1186] = 6032486
mem[51356] = 62404345
mem[45393] = 483
mask = X001111100X111X100XX10X0010011X00000
mem[61372] = 497780
mem[19961] = 4926248
mem[4632] = 210849418
mem[18128] = 59536
mask = 0X10X010101X0101001010101011010001X1
mem[42008] = 1078148
mem[59430] = 3978
mem[6072] = 430913
mem[48979] = 122586
mem[6310] = 76628023
mem[1521] = 10557
mask = 1X00X1100011010101X011X1100111100000
mem[175] = 9206
mem[64788] = 330
mem[22968] = 887
mask = 1X101010X01101110000001110X11XXX0100
mem[11815] = 58824493
mem[2296] = 253702
mem[50586] = 4894669
mem[54541] = 348778635
mem[3242] = 842
mask = 01111101X011101XX01000110XX01X10010X
mem[28575] = 349000485
mem[21743] = 503483
mem[3887] = 225375382
mem[45872] = 5853
mem[45920] = 814440
mem[39231] = 193428`.split('\n')

findSolution()