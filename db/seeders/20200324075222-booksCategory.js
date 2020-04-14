'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        const contentCategory = [
            {
                BookId: 1,
                CategoryId: 15
            },
            {
                BookId: 1,
                CategoryId: 53
            },
            {
                BookId: 1,
                CategoryId: 124
            },
            {
                BookId: 2,
                CategoryId: 47
            },
            {
                BookId: 2,
                CategoryId: 102
            },
            {
                BookId: 2,
                CategoryId: 1
            },
            {
                BookId: 3,
                CategoryId: 94
            },
            {
                BookId: 3,
                CategoryId: 135
            },
            {
                BookId: 3,
                CategoryId: 70
            },
            {
                BookId: 4,
                CategoryId: 82
            },
            {
                BookId: 4,
                CategoryId: 112
            },
            {
                BookId: 4,
                CategoryId: 17
            },
            {
                BookId: 5,
                CategoryId: 70
            },
            {
                BookId: 5,
                CategoryId: 11
            },
            {
                BookId: 5,
                CategoryId: 57
            },
            {
                BookId: 6,
                CategoryId: 70
            },
            {
                BookId: 6,
                CategoryId: 47
            },
            {
                BookId: 6,
                CategoryId: 130
            },
            {
                BookId: 7,
                CategoryId: 8
            },
            {
                BookId: 7,
                CategoryId: 59
            },
            {
                BookId: 7,
                CategoryId: 112
            },
            {
                BookId: 8,
                CategoryId: 8
            },
            {
                BookId: 8,
                CategoryId: 123
            },
            {
                BookId: 8,
                CategoryId: 12
            },
            {
                BookId: 9,
                CategoryId: 55
            },
            {
                BookId: 9,
                CategoryId: 116
            },
            {
                BookId: 9,
                CategoryId: 124
            },
            {
                BookId: 10,
                CategoryId: 17
            },
            {
                BookId: 10,
                CategoryId: 82
            },
            {
                BookId: 10,
                CategoryId: 110
            },
            {
                BookId: 11,
                CategoryId: 31
            },
            {
                BookId: 11,
                CategoryId: 47
            },
            {
                BookId: 11,
                CategoryId: 118
            },
            {
                BookId: 12,
                CategoryId: 76
            },
            {
                BookId: 12,
                CategoryId: 75
            },
            {
                BookId: 12,
                CategoryId: 8
            },
            {
                BookId: 13,
                CategoryId: 6
            },
            {
                BookId: 13,
                CategoryId: 118
            },
            {
                BookId: 13,
                CategoryId: 48
            },
            {
                BookId: 14,
                CategoryId: 28
            },
            {
                BookId: 14,
                CategoryId: 63
            },
            {
                BookId: 14,
                CategoryId: 110
            },
            {
                BookId: 15,
                CategoryId: 108
            },
            {
                BookId: 15,
                CategoryId: 41
            },
            {
                BookId: 15,
                CategoryId: 133
            },
            {
                BookId: 16,
                CategoryId: 15
            },
            {
                BookId: 16,
                CategoryId: 118
            },
            {
                BookId: 16,
                CategoryId: 48
            },
            {
                BookId: 17,
                CategoryId: 22
            },
            {
                BookId: 17,
                CategoryId: 99
            },
            {
                BookId: 17,
                CategoryId: 10
            },
            {
                BookId: 18,
                CategoryId: 82
            },
            {
                BookId: 18,
                CategoryId: 118
            },
            {
                BookId: 18,
                CategoryId: 110
            },
            {
                BookId: 19,
                CategoryId: 8
            },
            {
                BookId: 19,
                CategoryId: 4
            },
            {
                BookId: 19,
                CategoryId: 92
            },
            {
                BookId: 20,
                CategoryId: 80
            },
            {
                BookId: 20,
                CategoryId: 85
            },
            {
                BookId: 20,
                CategoryId: 38
            },
            {
                BookId: 21,
                CategoryId: 37
            },
            {
                BookId: 21,
                CategoryId: 19
            },
            {
                BookId: 21,
                CategoryId: 110
            },
            {
                BookId: 22,
                CategoryId: 31
            },
            {
                BookId: 22,
                CategoryId: 68
            },
            {
                BookId: 22,
                CategoryId: 133
            },
            {
                BookId: 23,
                CategoryId: 47
            },
            {
                BookId: 23,
                CategoryId: 82
            },
            {
                BookId: 23,
                CategoryId: 124
            },
            {
                BookId: 23,
                CategoryId: 44
            },
            {
                BookId: 24,
                CategoryId: 110
            },
            {
                BookId: 24,
                CategoryId: 24
            },
            {
                BookId: 24,
                CategoryId: 104
            },
            {
                BookId: 25,
                CategoryId: 39
            },
            {
                BookId: 25,
                CategoryId: 128
            },
            {
                BookId: 25,
                CategoryId: 67
            },
            {
                BookId: 26,
                CategoryId: 17
            },
            {
                BookId: 26,
                CategoryId: 110
            },
            {
                BookId: 26,
                CategoryId: 105
            },
            {
                BookId: 27,
                CategoryId: 47
            },
            {
                BookId: 27,
                CategoryId: 133
            },
            {
                BookId: 27,
                CategoryId: 58
            },
            {
                BookId: 28,
                CategoryId: 70
            },
            {
                BookId: 28,
                CategoryId: 47
            },
            {
                BookId: 28,
                CategoryId: 133
            },
            {
                BookId: 29,
                CategoryId: 8
            },
            {
                BookId: 29,
                CategoryId: 113
            },
            {
                BookId: 29,
                CategoryId: 47
            },
            {
                BookId: 30,
                CategoryId: 8
            },
            {
                BookId: 30,
                CategoryId: 120
            },
            {
                BookId: 30,
                CategoryId: 12
            },
            {
                BookId: 31,
                CategoryId: 40
            },
            {
                BookId: 31,
                CategoryId: 114
            },
            {
                BookId: 31,
                CategoryId: 10
            },
            {
                BookId: 32,
                CategoryId: 7
            },
            {
                BookId: 32,
                CategoryId: 70
            },
            {
                BookId: 32,
                CategoryId: 42
            },
            {
                BookId: 33,
                CategoryId: 70
            },
            {
                BookId: 33,
                CategoryId: 94
            },
            {
                BookId: 33,
                CategoryId: 91
            },
            {
                BookId: 34,
                CategoryId: 123
            },
            {
                BookId: 34,
                CategoryId: 106
            },
            {
                BookId: 34,
                CategoryId: 79
            },
            {
                BookId: 35,
                CategoryId: 71
            },
            {
                BookId: 35,
                CategoryId: 123
            },
            {
                BookId: 35,
                CategoryId: 134
            },
            {
                BookId: 36,
                CategoryId: 69
            },
            {
                BookId: 36,
                CategoryId: 96
            },
            {
                BookId: 36,
                CategoryId: 73
            },
            {
                BookId: 37,
                CategoryId: 69
            },
            {
                BookId: 37,
                CategoryId: 71
            },
            {
                BookId: 37,
                CategoryId: 34
            },
            {
                BookId: 38,
                CategoryId: 97
            },
            {
                BookId: 38,
                CategoryId: 117
            },
            {
                BookId: 38,
                CategoryId: 42
            },
            {
                BookId: 39,
                CategoryId: 90
            },
            {
                BookId: 39,
                CategoryId: 77
            },
            {
                BookId: 39,
                CategoryId: 16
            },
            {
                BookId: 40,
                CategoryId: 2
            },
            {
                BookId: 40,
                CategoryId: 100
            },
            {
                BookId: 40,
                CategoryId: 110
            },
            {
                BookId: 41,
                CategoryId: 87
            },
            {
                BookId: 41,
                CategoryId: 43
            },
            {
                BookId: 41,
                CategoryId: 115
            },
            {
                BookId: 42,
                CategoryId: 5
            },
            {
                BookId: 42,
                CategoryId: 44
            },
            {
                BookId: 43,
                CategoryId: 18
            },
            {
                BookId: 43,
                CategoryId: 128
            },
            {
                BookId: 43,
                CategoryId: 79
            },
            {
                BookId: 43,
                CategoryId: 21
            },
            {
                BookId: 44,
                CategoryId: 88
            },
            {
                BookId: 44,
                CategoryId: 85
            },
            {
                BookId: 44,
                CategoryId: 101
            },
            {
                BookId: 45,
                CategoryId: 96
            },
            {
                BookId: 45,
                CategoryId: 70
            },
            {
                BookId: 45,
                CategoryId: 130
            },
            {
                BookId: 46,
                CategoryId: 20
            },
            {
                BookId: 46,
                CategoryId: 27
            },
            {
                BookId: 46,
                CategoryId: 133
            },
            {
                BookId: 47,
                CategoryId: 124
            },
            {
                BookId: 47,
                CategoryId: 31
            },
            {
                BookId: 47,
                CategoryId: 10
            },
            {
                BookId: 48,
                CategoryId: 8
            },
            {
                BookId: 48,
                CategoryId: 14
            },
            {
                BookId: 48,
                CategoryId: 133
            },
            {
                BookId: 49,
                CategoryId: 128
            },
            {
                BookId: 49,
                CategoryId: 79
            },
            {
                BookId: 49,
                CategoryId: 29
            },
            {
                BookId: 49,
                CategoryId: 131
            },
            {
                BookId: 50,
                CategoryId: 6
            },
            {
                BookId: 50,
                CategoryId: 70
            },
            {
                BookId: 50,
                CategoryId: 133
            },
            {
                BookId: 51,
                CategoryId: 9
            },
            {
                BookId: 51,
                CategoryId: 35
            },
            {
                BookId: 51,
                CategoryId: 51
            },
            {
                BookId: 52,
                CategoryId: 30
            },
            {
                BookId: 52,
                CategoryId: 4
            },
            {
                BookId: 53,
                CategoryId: 103
            },
            {
                BookId: 53,
                CategoryId: 82
            },
            {
                BookId: 53,
                CategoryId: 121
            },
            {
                BookId: 54,
                CategoryId: 52
            },
            {
                BookId: 54,
                CategoryId: 64
            },
            {
                BookId: 55,
                CategoryId: 82
            },
            {
                BookId: 55,
                CategoryId: 116
            },
            {
                BookId: 55,
                CategoryId: 126
            },
            {
                BookId: 56,
                CategoryId: 116
            },
            {
                BookId: 56,
                CategoryId: 55
            },
            {
                BookId: 56,
                CategoryId: 126
            },
            {
                BookId: 57,
                CategoryId: 44
            },
            {
                BookId: 57,
                CategoryId: 127
            },
            {
                BookId: 57,
                CategoryId: 59
            },
            {
                BookId: 58,
                CategoryId: 47
            },
            {
                BookId: 58,
                CategoryId: 29
            },
            {
                BookId: 58,
                CategoryId: 124
            },
            {
                BookId: 59,
                CategoryId: 125
            },
            {
                BookId: 59,
                CategoryId: 12
            },
            {
                BookId: 59,
                CategoryId: 49
            },
            {
                BookId: 60,
                CategoryId: 47
            },
            {
                BookId: 60,
                CategoryId: 61
            },
            {
                BookId: 60,
                CategoryId: 90
            },
            {
                BookId: 60,
                CategoryId: 44
            },
            {
                BookId: 61,
                CategoryId: 47
            },
            {
                BookId: 61,
                CategoryId: 74
            },
            {
                BookId: 61,
                CategoryId: 94
            },
            {
                BookId: 62,
                CategoryId: 111
            },
            {
                BookId: 62,
                CategoryId: 136
            },
            {
                BookId: 62,
                CategoryId: 124
            },
            {
                BookId: 63,
                CategoryId: 13
            },
            {
                BookId: 63,
                CategoryId: 84
            },
            {
                BookId: 63,
                CategoryId: 129
            },
            {
                BookId: 64,
                CategoryId: 123
            },
            {
                BookId: 64,
                CategoryId: 124
            },
            {
                BookId: 64,
                CategoryId: 82
            },
            {
                BookId: 65,
                CategoryId: 59
            },
            {
                BookId: 65,
                CategoryId: 82
            },
            {
                BookId: 65,
                CategoryId: 72
            },
            {
                BookId: 66,
                CategoryId: 8
            },
            {
                BookId: 66,
                CategoryId: 112
            },
            {
                BookId: 66,
                CategoryId: 17
            },
            {
                BookId: 67,
                CategoryId: 61
            },
            {
                BookId: 67,
                CategoryId: 98
            },
            {
                BookId: 67,
                CategoryId: 132
            },
            {
                BookId: 67,
                CategoryId: 124
            },
            {
                BookId: 68,
                CategoryId: 76
            },
            {
                BookId: 68,
                CategoryId: 107
            },
            {
                BookId: 68,
                CategoryId: 124
            },
            {
                BookId: 69,
                CategoryId: 104
            },
            {
                BookId: 69,
                CategoryId: 44
            },
            {
                BookId: 70,
                CategoryId: 47
            },
            {
                BookId: 70,
                CategoryId: 124
            },
            {
                BookId: 70,
                CategoryId: 81
            },
            {
                BookId: 71,
                CategoryId: 4
            },
            {
                BookId: 71,
                CategoryId: 26
            },
            {
                BookId: 71,
                CategoryId: 67
            },
            {
                BookId: 71,
                CategoryId: 27
            },
            {
                BookId: 72,
                CategoryId: 25
            },
            {
                BookId: 72,
                CategoryId: 123
            },
            {
                BookId: 72,
                CategoryId: 79
            },
            {
                BookId: 73,
                CategoryId: 64
            },
            {
                BookId: 73,
                CategoryId: 65
            },
            {
                BookId: 73,
                CategoryId: 50
            },
            {
                BookId: 74,
                CategoryId: 4
            },
            {
                BookId: 74,
                CategoryId: 78
            },
            {
                BookId: 74,
                CategoryId: 103
            },
            {
                BookId: 75,
                CategoryId: 137
            },
            {
                BookId: 76,
                CategoryId: 66
            },
            {
                BookId: 76,
                CategoryId: 102
            },
            {
                BookId: 77,
                CategoryId: 104
            },
            {
                BookId: 77,
                CategoryId: 55
            },
            {
                BookId: 77,
                CategoryId: 109
            },
            {
                BookId: 78,
                CategoryId: 3
            },
            {
                BookId: 78,
                CategoryId: 122
            },
            {
                BookId: 78,
                CategoryId: 62
            },
            {
                BookId: 78,
                CategoryId: 125
            },
            {
                BookId: 79,
                CategoryId: 109
            },
            {
                BookId: 79,
                CategoryId: 56
            },
            {
                BookId: 79,
                CategoryId: 136
            },
            {
                BookId: 80,
                CategoryId: 79
            },
            {
                BookId: 80,
                CategoryId: 93
            },
            {
                BookId: 80,
                CategoryId: 29
            },
            {
                BookId: 81,
                CategoryId: 54
            },
            {
                BookId: 81,
                CategoryId: 29
            },
            {
                BookId: 81,
                CategoryId: 28
            },
            {
                BookId: 82,
                CategoryId: 8
            },
            {
                BookId: 82,
                CategoryId: 60
            },
            {
                BookId: 82,
                CategoryId: 23
            },
            {
                BookId: 83,
                CategoryId: 123
            },
            {
                BookId: 83,
                CategoryId: 4
            },
            {
                BookId: 83,
                CategoryId: 61
            },
            {
                BookId: 84,
                CategoryId: 46
            },
            {
                BookId: 84,
                CategoryId: 112
            },
            {
                BookId: 84,
                CategoryId: 116
            },
            {
                BookId: 85,
                CategoryId: 46
            },
            {
                BookId: 85,
                CategoryId: 4
            },
            {
                BookId: 85,
                CategoryId: 123
            },
            {
                BookId: 86,
                CategoryId: 95
            },
            {
                BookId: 86,
                CategoryId: 31
            },
            {
                BookId: 87,
                CategoryId: 67
            },
            {
                BookId: 87,
                CategoryId: 45
            },
            {
                BookId: 88,
                CategoryId: 44
            },
            {
                BookId: 88,
                CategoryId: 95
            },
            {
                BookId: 89,
                CategoryId: 7
            },
            {
                BookId: 89,
                CategoryId: 82
            },
            {
                BookId: 90,
                CategoryId: 36
            },
            {
                BookId: 90,
                CategoryId: 33
            },
            {
                BookId: 90,
                CategoryId: 89
            },
            {
                BookId: 91,
                CategoryId: 112
            },
            {
                BookId: 91,
                CategoryId: 124
            },
            {
                BookId: 91,
                CategoryId: 118
            },
            {
                BookId: 92,
                CategoryId: 83
            },
            {
                BookId: 92,
                CategoryId: 119
            },
            {
                BookId: 92,
                CategoryId: 86
            },
            {
                BookId: 93,
                CategoryId: 32
            },
            {
                BookId: 93,
                CategoryId: 112
            },
            {
                BookId: 93,
                CategoryId: 118
            },
            {
                BookId: 94,
                CategoryId: 34
            },
            {
                BookId: 94,
                CategoryId: 112
            },
            {
                BookId: 95,
                CategoryId: 51
            },
            {
                BookId: 96,
                CategoryId: 70
            },
            {
                BookId: 96,
                CategoryId: 35
            },
            {
                BookId: 97,
                CategoryId: 34
            },
            {
                BookId: 97,
                CategoryId: 43
            },
            {
                BookId: 98,
                CategoryId: 8
            },
            {
                BookId: 98,
                CategoryId: 70
            },
            {
                BookId: 98,
                CategoryId: 35
            },
            {
                BookId: 99,
                CategoryId: 34
            },
            {
                BookId: 99,
                CategoryId: 17
            },
            {
                BookId: 99,
                CategoryId: 116
            },
            {
                BookId: 100,
                CategoryId: 25
            },
            {
                BookId: 100,
                CategoryId: 35
            },
            {
                BookId: 100,
                CategoryId: 133
            },
            {
                BookId: 101,
                CategoryId: 35
            },
            {
                BookId: 101,
                CategoryId: 70
            },
            {
                BookId: 101,
                CategoryId: 133
            },
            {
                BookId: 102,
                CategoryId: 25
            },
            {
                BookId: 102,
                CategoryId: 34
            },
            {
                BookId: 103,
                CategoryId: 96
            },
            {
                BookId: 103,
                CategoryId: 118
            },
            {
                BookId: 103,
                CategoryId: 133
            },
            {
                BookId: 104,
                CategoryId: 118
            },
            {
                BookId: 105,
                CategoryId: 11
            },
            {
                BookId: 106,
                CategoryId: 47
            },
            {
                BookId: 106,
                CategoryId: 35
            },
            {
                BookId: 107,
                CategoryId: 87
            },
            {
                BookId: 108,
                CategoryId: 17
            },
            {
                BookId: 108,
                CategoryId: 25
            },
            {
                BookId: 109,
                CategoryId: 61
            },
            {
                BookId: 109,
                CategoryId: 35
            },
            {
                BookId: 110,
                CategoryId: 77
            },
            {
                BookId: 110,
                CategoryId: 96
            },
            {
                BookId: 111,
                CategoryId: 110
            },
            {
                BookId: 111,
                CategoryId: 59
            },
            {
                BookId: 112,
                CategoryId: 35
            },
            {
                BookId: 112,
                CategoryId: 55
            },
            {
                BookId: 113,
                CategoryId: 34
            },
            {
                BookId: 113,
                CategoryId: 133
            },
            {
                BookId: 114,
                CategoryId: 79
            },
            {
                BookId: 114,
                CategoryId: 55
            },
            {
                BookId: 115,
                CategoryId: 35
            },
            {
                BookId: 115,
                CategoryId: 51
            },
            {
                BookId: 116,
                CategoryId: 34
            },
            {
                BookId: 116,
                CategoryId: 67
            },
            {
                BookId: 117,
                CategoryId: 8
            },
            {
                BookId: 117,
                CategoryId: 35
            },
            {
                BookId: 117,
                CategoryId: 47
            },
            {
                BookId: 118,
                CategoryId: 73
            },
            {
                BookId: 118,
                CategoryId: 96
            },
            {
                BookId: 119,
                CategoryId: 11
            },
            {
                BookId: 119,
                CategoryId: 35
            },
            {
                BookId: 120,
                CategoryId: 85
            },
            {
                BookId: 120,
                CategoryId: 130
            },
            {
                BookId: 121,
                CategoryId: 82
            },
            {
                BookId: 121,
                CategoryId: 68
            },
            {
                BookId: 121,
                CategoryId: 35
            },
            {
                BookId: 122,
                CategoryId: 11
            },
            {
                BookId: 122,
                CategoryId: 35
            },
            {
                BookId: 123,
                CategoryId: 11
            },
            {
                BookId: 124,
                CategoryId: 79
            },
            {
                BookId: 124,
                CategoryId: 42
            },
            {
                BookId: 125,
                CategoryId: 96
            },
            {
                BookId: 125,
                CategoryId: 116
            },
            {
                BookId: 126,
                CategoryId: 48
            },
            {
                BookId: 126,
                CategoryId: 35
            },
            {
                BookId: 127,
                CategoryId: 128
            },
            {
                BookId: 127,
                CategoryId: 79
            },
            {
                BookId: 128,
                CategoryId: 20
            },
            {
                BookId: 128,
                CategoryId: 27
            },
            {
                BookId: 128,
                CategoryId: 133
            },
            {
                BookId: 129,
                CategoryId: 96
            },
            {
                BookId: 130,
                CategoryId: 35
            },
            {
                BookId: 130,
                CategoryId: 128
            },
            {
                BookId: 130,
                CategoryId: 59
            },
            {
                BookId: 131,
                CategoryId: 11
            },
            {
                BookId: 131,
                CategoryId: 118
            },
            {
                BookId: 132,
                CategoryId: 82
            },
            {
                BookId: 132,
                CategoryId: 96
            },
            {
                BookId: 132,
                CategoryId: 16
            },
            {
                BookId: 133,
                CategoryId: 35
            },
            {
                BookId: 133,
                CategoryId: 85
            },
            {
                BookId: 134,
                CategoryId: 31
            },
            {
                BookId: 134,
                CategoryId: 116
            },
            {
                BookId: 134,
                CategoryId: 35
            },
            {
                BookId: 135,
                CategoryId: 51
            },
            {
                BookId: 136,
                CategoryId: 25
            },
            {
                BookId: 136,
                CategoryId: 33
            },
            {
                BookId: 137,
                CategoryId: 34
            },
            {
                BookId: 137,
                CategoryId: 82
            },
            {
                BookId: 138,
                CategoryId: 116
            },
            {
                BookId: 138,
                CategoryId: 110
            },
            {
                BookId: 138,
                CategoryId: 81
            },
            {
                BookId: 139,
                CategoryId: 35
            },
            {
                BookId: 139,
                CategoryId: 85
            },
            {
                BookId: 140,
                CategoryId: 96
            },
            {
                BookId: 141,
                CategoryId: 96
            },
            {
                BookId: 141,
                CategoryId: 32
            },
            {
                BookId: 141,
                CategoryId: 53
            },
            {
                BookId: 142,
                CategoryId: 116
            },
            {
                BookId: 142,
                CategoryId: 67
            },
            {
                BookId: 142,
                CategoryId: 35
            },
            {
                BookId: 143,
                CategoryId: 110
            },
            {
                BookId: 143,
                CategoryId: 34
            },
            {
                BookId: 144,
                CategoryId: 110
            },
            {
                BookId: 145,
                CategoryId: 35
            },
            {
                BookId: 145,
                CategoryId: 16
            },
            {
                BookId: 145,
                CategoryId: 110
            },
            {
                BookId: 146,
                CategoryId: 25
            },
            {
                BookId: 146,
                CategoryId: 53
            },
            {
                BookId: 147,
                CategoryId: 73
            },
            {
                BookId: 148,
                CategoryId: 84
            },
            {
                BookId: 148,
                CategoryId: 133
            },
            {
                BookId: 148,
                CategoryId: 25
            },
            {
                BookId: 149,
                CategoryId: 7
            },
            {
                BookId: 149,
                CategoryId: 47
            },
            {
                BookId: 150,
                CategoryId: 25
            },
            {
                BookId: 150,
                CategoryId: 116
            },
            {
                BookId: 151,
                CategoryId: 70
            },
            {
                BookId: 152,
                CategoryId: 43
            },
            {
                BookId: 152,
                CategoryId: 44
            },
            {
                BookId: 152,
                CategoryId: 35
            },
            {
                BookId: 153,
                CategoryId: 96
            },
            {
                BookId: 153,
                CategoryId: 110
            },
            {
                BookId: 154,
                CategoryId: 116
            },
            {
                BookId: 154,
                CategoryId: 70
            },
            {
                BookId: 155,
                CategoryId: 34
            },
            {
                BookId: 155,
                CategoryId: 104
            },
            {
                BookId: 156,
                CategoryId: 25
            },
            {
                BookId: 156,
                CategoryId: 67
            },
            {
                BookId: 157,
                CategoryId: 44
            },
            {
                BookId: 158,
                CategoryId: 35
            },
            {
                BookId: 159,
                CategoryId: 124
            },
            {
                BookId: 159,
                CategoryId: 82
            },
            {
                BookId: 159,
                CategoryId: 31
            },
            {
                BookId: 160,
                CategoryId: 11
            },
            {
                BookId: 160,
                CategoryId: 35
            },
            {
                BookId: 161,
                CategoryId: 8
            },
            {
                BookId: 161,
                CategoryId: 110
            },
            {
                BookId: 161,
                CategoryId: 96
            },
            {
                BookId: 162,
                CategoryId: 116
            },
            {
                BookId: 162,
                CategoryId: 128
            },
            {
                BookId: 162,
                CategoryId: 96
            },
            {
                BookId: 163,
                CategoryId: 47
            },
            {
                BookId: 163,
                CategoryId: 28
            },
            {
                BookId: 164,
                CategoryId: 16
            },
            {
                BookId: 164,
                CategoryId: 110
            },
            {
                BookId: 165,
                CategoryId: 99
            },
            {
                BookId: 166,
                CategoryId: 35
            },
            {
                BookId: 166,
                CategoryId: 133
            },
            {
                BookId: 166,
                CategoryId: 51
            },
            {
                BookId: 167,
                CategoryId: 61
            },
            {
                BookId: 167,
                CategoryId: 123
            },
            {
                BookId: 168,
                CategoryId: 59
            },
            {
                BookId: 168,
                CategoryId: 123
            },
            {
                BookId: 169,
                CategoryId: 110
            },
            {
                BookId: 170,
                CategoryId: 128
            },
            {
                BookId: 170,
                CategoryId: 25
            },
            {
                BookId: 170,
                CategoryId: 67
            },
            {
                BookId: 171,
                CategoryId: 112
            },
            {
                BookId: 171,
                CategoryId: 118
            },
            {
                BookId: 171,
                CategoryId: 110
            },
            {
                BookId: 172,
                CategoryId: 87
            },
            {
                BookId: 173,
                CategoryId: 43
            },
            {
                BookId: 173,
                CategoryId: 70
            },
            {
                BookId: 173,
                CategoryId: 11
            },
            {
                BookId: 174,
                CategoryId: 11
            },
            {
                BookId: 174,
                CategoryId: 110
            },
            {
                BookId: 175,
                CategoryId: 1
            },
            {
                BookId: 175,
                CategoryId: 96
            },
            {
                BookId: 176,
                CategoryId: 4
            },
            {
                BookId: 176,
                CategoryId: 118
            },
            {
                BookId: 176,
                CategoryId: 133
            },
            {
                BookId: 177,
                CategoryId: 133
            },
            {
                BookId: 177,
                CategoryId: 126
            },
            {
                BookId: 177,
                CategoryId: 4
            },
            {
                BookId: 178,
                CategoryId: 25
            },
            {
                BookId: 178,
                CategoryId: 84
            },
            {
                BookId: 178,
                CategoryId: 133
            },
            {
                BookId: 179,
                CategoryId: 43
            },
            {
                BookId: 179,
                CategoryId: 4
            },
            {
                BookId: 180,
                CategoryId: 105
            },
            {
                BookId: 180,
                CategoryId: 133
            },
            {
                BookId: 180,
                CategoryId: 11
            },
            {
                BookId: 181,
                CategoryId: 8
            },
            {
                BookId: 181,
                CategoryId: 113
            },
            {
                BookId: 182,
                CategoryId: 31
            },
            {
                BookId: 182,
                CategoryId: 34
            },
            {
                BookId: 183,
                CategoryId: 2
            },
            {
                BookId: 183,
                CategoryId: 110
            },
            {
                BookId: 183,
                CategoryId: 133
            },
            {
                BookId: 184,
                CategoryId: 133
            },
            {
                BookId: 184,
                CategoryId: 112
            },
            {
                BookId: 184,
                CategoryId: 4
            },
            {
                BookId: 185,
                CategoryId: 66
            },
            {
                BookId: 185,
                CategoryId: 35
            },
            {
                BookId: 185,
                CategoryId: 128
            },
            {
                BookId: 186,
                CategoryId: 7
            },
            {
                BookId: 186,
                CategoryId: 8
            },
            {
                BookId: 186,
                CategoryId: 110
            },
            {
                BookId: 187,
                CategoryId: 85
            },
            {
                BookId: 188,
                CategoryId: 32
            },
            {
                BookId: 188,
                CategoryId: 133
            },
            {
                BookId: 188,
                CategoryId: 34
            },
            {
                BookId: 189,
                CategoryId: 35
            },
            {
                BookId: 189,
                CategoryId: 110
            },
            {
                BookId: 190,
                CategoryId: 21
            },
            {
                BookId: 190,
                CategoryId: 128
            },
            {
                BookId: 191,
                CategoryId: 35
            },
            {
                BookId: 191,
                CategoryId: 79
            },
            {
                BookId: 192,
                CategoryId: 35
            },
            {
                BookId: 192,
                CategoryId: 113
            },
            {
                BookId: 192,
                CategoryId: 8
            },
            {
                BookId: 193,
                CategoryId: 66
            },
            {
                BookId: 193,
                CategoryId: 8
            },
            {
                BookId: 193,
                CategoryId: 133
            },
            {
                BookId: 194,
                CategoryId: 118
            },
            {
                BookId: 194,
                CategoryId: 32
            },
            {
                BookId: 194,
                CategoryId: 35
            },
            {
                BookId: 195,
                CategoryId: 70
            },
            {
                BookId: 195,
                CategoryId: 35
            },
            {
                BookId: 196,
                CategoryId: 73
            },
            {
                BookId: 196,
                CategoryId: 96
            },
            {
                BookId: 197,
                CategoryId: 47
            },
            {
                BookId: 197,
                CategoryId: 96
            },
            {
                BookId: 198,
                CategoryId: 35
            },
            {
                BookId: 198,
                CategoryId: 110
            },
            {
                BookId: 199,
                CategoryId: 17
            },
            {
                BookId: 199,
                CategoryId: 61
            },
            {
                BookId: 199,
                CategoryId: 128
            },
            {
                BookId: 200,
                CategoryId: 25
            },
            {
                BookId: 201,
                CategoryId: 133
            },
            {
                BookId: 201,
                CategoryId: 118
            },
            {
                BookId: 201,
                CategoryId: 35
            },
            {
                BookId: 202,
                CategoryId: 35
            },
            {
                BookId: 202,
                CategoryId: 112
            },
            {
                BookId: 202,
                CategoryId: 133
            },
            {
                BookId: 203,
                CategoryId: 127
            },
            {
                BookId: 204,
                CategoryId: 11
            },
            {
                BookId: 204,
                CategoryId: 31
            },
            {
                BookId: 204,
                CategoryId: 47
            },
            {
                BookId: 205,
                CategoryId: 79
            },
            {
                BookId: 205,
                CategoryId: 35
            },
            {
                BookId: 205,
                CategoryId: 110
            },
            {
                BookId: 206,
                CategoryId: 35
            },
            {
                BookId: 206,
                CategoryId: 51
            },
            {
                BookId: 207,
                CategoryId: 25
            },
            {
                BookId: 208,
                CategoryId: 96
            },
            {
                BookId: 209,
                CategoryId: 110
            },
            {
                BookId: 209,
                CategoryId: 34
            },
            {
                BookId: 210,
                CategoryId: 35
            },
            {
                BookId: 210,
                CategoryId: 73
            },
            {
                BookId: 210,
                CategoryId: 51
            },
            {
                BookId: 211,
                CategoryId: 128
            },
            {
                BookId: 212,
                CategoryId: 43
            },
            {
                BookId: 212,
                CategoryId: 96
            },
            {
                BookId: 212,
                CategoryId: 48
            },
            {
                BookId: 213,
                CategoryId: 19
            },
            {
                BookId: 214,
                CategoryId: 47
            },
            {
                BookId: 214,
                CategoryId: 35
            },
            {
                BookId: 214,
                CategoryId: 51
            },
            {
                BookId: 215,
                CategoryId: 32
            },
            {
                BookId: 215,
                CategoryId: 118
            },
            {
                BookId: 215,
                CategoryId: 35
            },
            {
                BookId: 216,
                CategoryId: 96
            },
            {
                BookId: 216,
                CategoryId: 118
            },
            {
                BookId: 217,
                CategoryId: 31
            },
            {
                BookId: 217,
                CategoryId: 34
            },
            {
                BookId: 217,
                CategoryId: 51
            },
            {
                BookId: 218,
                CategoryId: 35
            },
            {
                BookId: 218,
                CategoryId: 59
            },
            {
                BookId: 218,
                CategoryId: 32
            },
            {
                BookId: 219,
                CategoryId: 102
            },
            {
                BookId: 219,
                CategoryId: 67
            },
            {
                BookId: 219,
                CategoryId: 66
            },
            {
                BookId: 220,
                CategoryId: 102
            },
            {
                BookId: 220,
                CategoryId: 133
            },
            {
                BookId: 220,
                CategoryId: 34
            },
            {
                BookId: 221,
                CategoryId: 19
            },
            {
                BookId: 222,
                CategoryId: 73
            },
            {
                BookId: 222,
                CategoryId: 124
            },
            {
                BookId: 223,
                CategoryId: 129
            },
            {
                BookId: 223,
                CategoryId: 128
            },
            {
                BookId: 224,
                CategoryId: 110
            },
            {
                BookId: 224,
                CategoryId: 133
            },
            {
                BookId: 224,
                CategoryId: 59
            },
            {
                BookId: 225,
                CategoryId: 124
            },
            {
                BookId: 225,
                CategoryId: 8
            },
            {
                BookId: 226,
                CategoryId: 35
            },
            {
                BookId: 226,
                CategoryId: 112
            },
            {
                BookId: 227,
                CategoryId: 34
            },
            {
                BookId: 227,
                CategoryId: 112
            },
            {
                BookId: 227,
                CategoryId: 133
            },
            {
                BookId: 228,
                CategoryId: 96
            },
            {
                BookId: 228,
                CategoryId: 110
            },
            {
                BookId: 229,
                CategoryId: 124
            },
            {
                BookId: 229,
                CategoryId: 35
            },
            {
                BookId: 229,
                CategoryId: 85
            },
            {
                BookId: 230,
                CategoryId: 35
            },
            {
                BookId: 230,
                CategoryId: 112
            },
            {
                BookId: 230,
                CategoryId: 133
            },
            {
                BookId: 231,
                CategoryId: 102
            },
            {
                BookId: 232,
                CategoryId: 35
            },
            {
                BookId: 233,
                CategoryId: 85
            },
            {
                BookId: 234,
                CategoryId: 96
            },
            {
                BookId: 234,
                CategoryId: 51
            },
            {
                BookId: 235,
                CategoryId: 43
            },
            {
                BookId: 236,
                CategoryId: 82
            },
            {
                BookId: 236,
                CategoryId: 112
            },
            {
                BookId: 236,
                CategoryId: 31
            },
            {
                BookId: 237,
                CategoryId: 35
            },
            {
                BookId: 237,
                CategoryId: 11
            },
            {
                BookId: 238,
                CategoryId: 110
            },
            {
                BookId: 238,
                CategoryId: 35
            },
            {
                BookId: 239,
                CategoryId: 55
            },
            {
                BookId: 240,
                CategoryId: 35
            },
            {
                BookId: 240,
                CategoryId: 70
            },
            {
                BookId: 240,
                CategoryId: 128
            },
            {
                BookId: 241,
                CategoryId: 35
            },
            {
                BookId: 241,
                CategoryId: 70
            },
            {
                BookId: 241,
                CategoryId: 128
            },
            {
                BookId: 242,
                CategoryId: 35
            },
            {
                BookId: 242,
                CategoryId: 133
            },
            {
                BookId: 243,
                CategoryId: 35
            },
            {
                BookId: 243,
                CategoryId: 53
            },
            {
                BookId: 243,
                CategoryId: 124
            },
            {
                BookId: 244,
                CategoryId: 99
            },
            {
                BookId: 244,
                CategoryId: 85
            },
            {
                BookId: 245,
                CategoryId: 79
            },
            {
                BookId: 245,
                CategoryId: 35
            },
            {
                BookId: 246,
                CategoryId: 118
            },
            {
                BookId: 246,
                CategoryId: 96
            },
            {
                BookId: 247,
                CategoryId: 35
            },
            {
                BookId: 247,
                CategoryId: 102
            },
            {
                BookId: 248,
                CategoryId: 28
            },
            {
                BookId: 249,
                CategoryId: 110
            },
            {
                BookId: 250,
                CategoryId: 116
            },
            {
                BookId: 250,
                CategoryId: 35
            },
            {
                BookId: 250,
                CategoryId: 112
            },
            {
                BookId: 251,
                CategoryId: 42
            },
            {
                BookId: 252,
                CategoryId: 123
            },
            {
                BookId: 252,
                CategoryId: 133
            },
            {
                BookId: 253,
                CategoryId: 43
            },
            {
                BookId: 253,
                CategoryId: 35
            },
            {
                BookId: 254,
                CategoryId: 118
            },
            {
                BookId: 254,
                CategoryId: 112
            },
            {
                BookId: 254,
                CategoryId: 4
            },
            {
                BookId: 255,
                CategoryId: 35
            },
            {
                BookId: 255,
                CategoryId: 124
            },
            {
                BookId: 255,
                CategoryId: 16
            },
            {
                BookId: 256,
                CategoryId: 35
            },
            {
                BookId: 256,
                CategoryId: 43
            },
            {
                BookId: 257,
                CategoryId: 35
            },
            {
                BookId: 257,
                CategoryId: 67
            },
            {
                BookId: 258,
                CategoryId: 43
            },
            {
                BookId: 259,
                CategoryId: 35
            },
            {
                BookId: 259,
                CategoryId: 116
            },
            {
                BookId: 259,
                CategoryId: 61
            },
            {
                BookId: 260,
                CategoryId: 35
            },
            {
                BookId: 260,
                CategoryId: 51
            },
            {
                BookId: 261,
                CategoryId: 35
            },
            {
                BookId: 261,
                CategoryId: 53
            },
            {
                BookId: 262,
                CategoryId: 35
            },
            {
                BookId: 262,
                CategoryId: 82
            },
            {
                BookId: 262,
                CategoryId: 6
            },
            {
                BookId: 263,
                CategoryId: 35
            },
            {
                BookId: 263,
                CategoryId: 110
            },
            {
                BookId: 264,
                CategoryId: 35
            },
            {
                BookId: 264,
                CategoryId: 87
            },
            {
                BookId: 265,
                CategoryId: 87
            },
            {
                BookId: 265,
                CategoryId: 32
            },
            {
                BookId: 266,
                CategoryId: 35
            },
            {
                BookId: 266,
                CategoryId: 61
            },
            {
                BookId: 266,
                CategoryId: 110
            },
            {
                BookId: 267,
                CategoryId: 133
            },
            {
                BookId: 267,
                CategoryId: 44
            },
            {
                BookId: 267,
                CategoryId: 82
            },
            {
                BookId: 268,
                CategoryId: 35
            },
            {
                BookId: 268,
                CategoryId: 70
            },
            {
                BookId: 268,
                CategoryId: 124
            },
            {
                BookId: 269,
                CategoryId: 66
            },
            {
                BookId: 270,
                CategoryId: 25
            },
            {
                BookId: 270,
                CategoryId: 133
            },
            {
                BookId: 271,
                CategoryId: 35
            },
            {
                BookId: 271,
                CategoryId: 124
            },
            {
                BookId: 272,
                CategoryId: 66
            },
            {
                BookId: 272,
                CategoryId: 123
            },
            {
                BookId: 273,
                CategoryId: 35
            },
            {
                BookId: 273,
                CategoryId: 70
            },
            {
                BookId: 273,
                CategoryId: 47
            },
            {
                BookId: 274,
                CategoryId: 35
            },
            {
                BookId: 274,
                CategoryId: 112
            },
            {
                BookId: 274,
                CategoryId: 124
            },
            {
                BookId: 275,
                CategoryId: 35
            },
            {
                BookId: 275,
                CategoryId: 70
            },
            {
                BookId: 276,
                CategoryId: 35
            },
            {
                BookId: 276,
                CategoryId: 82
            },
            {
                BookId: 276,
                CategoryId: 102
            },
            {
                BookId: 276,
                CategoryId: 133
            },
            {
                BookId: 277,
                CategoryId: 96
            },
            {
                BookId: 278,
                CategoryId: 35
            },
            {
                BookId: 278,
                CategoryId: 48
            },
            {
                BookId: 279,
                CategoryId: 4
            },
            {
                BookId: 279,
                CategoryId: 110
            },
            {
                BookId: 279,
                CategoryId: 124
            },
            {
                BookId: 280,
                CategoryId: 124
            },
            {
                BookId: 280,
                CategoryId: 110
            },
            {
                BookId: 281,
                CategoryId: 35
            },
            {
                BookId: 281,
                CategoryId: 51
            },
            {
                BookId: 282,
                CategoryId: 35
            },
            {
                BookId: 282,
                CategoryId: 43
            },
            {
                BookId: 282,
                CategoryId: 118
            },
            {
                BookId: 283,
                CategoryId: 85
            },
            {
                BookId: 284,
                CategoryId: 128
            },
            {
                BookId: 284,
                CategoryId: 133
            },
            {
                BookId: 284,
                CategoryId: 21
            },
            {
                BookId: 285,
                CategoryId: 82
            },
            {
                BookId: 285,
                CategoryId: 133
            },
            {
                BookId: 285,
                CategoryId: 110
            },
            {
                BookId: 286,
                CategoryId: 35
            },
            {
                BookId: 286,
                CategoryId: 116
            },
            {
                BookId: 286,
                CategoryId: 51
            },
            {
                BookId: 287,
                CategoryId: 35
            },
            {
                BookId: 288,
                CategoryId: 110
            },
            {
                BookId: 288,
                CategoryId: 35
            },
            {
                BookId: 289,
                CategoryId: 70
            },
            {
                BookId: 289,
                CategoryId: 35
            },
            {
                BookId: 290,
                CategoryId: 82
            },
            {
                BookId: 290,
                CategoryId: 133
            },
            {
                BookId: 290,
                CategoryId: 112
            },
            {
                BookId: 291,
                CategoryId: 110
            },
            {
                BookId: 291,
                CategoryId: 82
            },
            {
                BookId: 291,
                CategoryId: 35
            },
            {
                BookId: 292,
                CategoryId: 82
            },
            {
                BookId: 292,
                CategoryId: 118
            },
            {
                BookId: 292,
                CategoryId: 31
            },
            {
                BookId: 293,
                CategoryId: 35
            },
            {
                BookId: 293,
                CategoryId: 110
            },
            {
                BookId: 294,
                CategoryId: 35
            },
            {
                BookId: 294,
                CategoryId: 128
            },
            {
                BookId: 295,
                CategoryId: 35
            },
            {
                BookId: 295,
                CategoryId: 102
            },
            {
                BookId: 295,
                CategoryId: 133
            },
            {
                BookId: 295,
                CategoryId: 110
            },
            {
                BookId: 296,
                CategoryId: 35
            },
            {
                BookId: 296,
                CategoryId: 123
            },
            {
                BookId: 297,
                CategoryId: 17
            },
            {
                BookId: 297,
                CategoryId: 123
            },
            {
                BookId: 297,
                CategoryId: 32
            },
            {
                BookId: 298,
                CategoryId: 17
            },
            {
                BookId: 298,
                CategoryId: 70
            },
            {
                BookId: 298,
                CategoryId: 16
            },
            {
                BookId: 299,
                CategoryId: 1
            },
            {
                BookId: 299,
                CategoryId: 47
            },
            {
                BookId: 1,
                CategoryId: 35
            },
            {
                BookId: 300,
                CategoryId: 31
            },
            {
                BookId: 300,
                CategoryId: 44
            },
            {
                BookId: 300,
                CategoryId: 138
            },
            {
                BookId: 301,
                CategoryId: 138
            },
            {
                BookId: 301,
                CategoryId: 35
            },
            {
                BookId: 301,
                CategoryId: 16
            },
            {
                BookId: 302,
                CategoryId: 138
            },
            {
                BookId: 302,
                CategoryId: 58
            },
            {
                BookId: 302,
                CategoryId: 35
            },
            {
                BookId: 303,
                CategoryId: 138
            },
            {
                BookId: 303,
                CategoryId: 99
            },
            {
                BookId: 303,
                CategoryId: 116
            },
            {
                BookId: 304,
                CategoryId: 138
            },
            {
                BookId: 304,
                CategoryId: 110
            },
            {
                BookId: 304,
                CategoryId: 133
            },
            {
                BookId: 305,
                CategoryId: 138
            },
            {
                BookId: 305,
                CategoryId: 64
            },
            {
                BookId: 305,
                CategoryId: 35
            },
            {
                BookId: 306,
                CategoryId: 138
            },
            {
                BookId: 306,
                CategoryId: 35
            },
            {
                BookId: 306,
                CategoryId: 82
            },
            {
                BookId: 307,
                CategoryId: 138
            },
            {
                BookId: 307,
                CategoryId: 31
            },
            {
                BookId: 307,
                CategoryId: 35
            }
        ];

        const resultCategory = contentCategory.map(item => {
            item.createdAt = new Date();
            item.updatedAt = new Date();
            return item;
        });

        return queryInterface.bulkInsert('booksCategory', resultCategory, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('booksCategory', null, {});
    }
};
