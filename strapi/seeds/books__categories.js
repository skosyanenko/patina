
exports.seed = function(knex) {
  return knex('books__categories').del()
    .then(function () {
      return knex('books__categories').insert([
        {
          "book_id": 1,
          "category_id": 15
        },
        {
          "book_id": 1,
          "category_id": 53
        },
        {
          "book_id": 1,
          "category_id": 124
        },
        {
          "book_id": 2,
          "category_id": 47
        },
        {
          "book_id": 2,
          "category_id": 102
        },
        {
          "book_id": 2,
          "category_id": 1
        },
        {
          "book_id": 3,
          "category_id": 94
        },
        {
          "book_id": 3,
          "category_id": 135
        },
        {
          "book_id": 3,
          "category_id": 70
        },
        {
          "book_id": 4,
          "category_id": 82
        },
        {
          "book_id": 4,
          "category_id": 112
        },
        {
          "book_id": 4,
          "category_id": 17
        },
        {
          "book_id": 5,
          "category_id": 70
        },
        {
          "book_id": 5,
          "category_id": 11
        },
        {
          "book_id": 5,
          "category_id": 57
        },
        {
          "book_id": 6,
          "category_id": 70
        },
        {
          "book_id": 6,
          "category_id": 47
        },
        {
          "book_id": 6,
          "category_id": 130
        },
        {
          "book_id": 7,
          "category_id": 8
        },
        {
          "book_id": 7,
          "category_id": 59
        },
        {
          "book_id": 7,
          "category_id": 112
        },
        {
          "book_id": 8,
          "category_id": 8
        },
        {
          "book_id": 8,
          "category_id": 123
        },
        {
          "book_id": 8,
          "category_id": 12
        },
        {
          "book_id": 9,
          "category_id": 55
        },
        {
          "book_id": 9,
          "category_id": 116
        },
        {
          "book_id": 9,
          "category_id": 124
        },
        {
          "book_id": 10,
          "category_id": 17
        },
        {
          "book_id": 10,
          "category_id": 82
        },
        {
          "book_id": 10,
          "category_id": 110
        },
        {
          "book_id": 11,
          "category_id": 31
        },
        {
          "book_id": 11,
          "category_id": 47
        },
        {
          "book_id": 11,
          "category_id": 118
        },
        {
          "book_id": 12,
          "category_id": 76
        },
        {
          "book_id": 12,
          "category_id": 75
        },
        {
          "book_id": 12,
          "category_id": 8
        },
        {
          "book_id": 13,
          "category_id": 6
        },
        {
          "book_id": 13,
          "category_id": 118
        },
        {
          "book_id": 13,
          "category_id": 48
        },
        {
          "book_id": 14,
          "category_id": 28
        },
        {
          "book_id": 14,
          "category_id": 63
        },
        {
          "book_id": 14,
          "category_id": 110
        },
        {
          "book_id": 15,
          "category_id": 108
        },
        {
          "book_id": 15,
          "category_id": 41
        },
        {
          "book_id": 15,
          "category_id": 133
        },
        {
          "book_id": 16,
          "category_id": 15
        },
        {
          "book_id": 16,
          "category_id": 118
        },
        {
          "book_id": 16,
          "category_id": 48
        },
        {
          "book_id": 17,
          "category_id": 22
        },
        {
          "book_id": 17,
          "category_id": 99
        },
        {
          "book_id": 17,
          "category_id": 10
        },
        {
          "book_id": 18,
          "category_id": 82
        },
        {
          "book_id": 18,
          "category_id": 118
        },
        {
          "book_id": 18,
          "category_id": 110
        },
        {
          "book_id": 19,
          "category_id": 8
        },
        {
          "book_id": 19,
          "category_id": 4
        },
        {
          "book_id": 19,
          "category_id": 92
        },
        {
          "book_id": 20,
          "category_id": 80
        },
        {
          "book_id": 20,
          "category_id": 85
        },
        {
          "book_id": 20,
          "category_id": 38
        },
        {
          "book_id": 21,
          "category_id": 37
        },
        {
          "book_id": 21,
          "category_id": 19
        },
        {
          "book_id": 21,
          "category_id": 110
        },
        {
          "book_id": 22,
          "category_id": 31
        },
        {
          "book_id": 22,
          "category_id": 68
        },
        {
          "book_id": 22,
          "category_id": 133
        },
        {
          "book_id": 23,
          "category_id": 47
        },
        {
          "book_id": 23,
          "category_id": 82
        },
        {
          "book_id": 23,
          "category_id": 124
        },
        {
          "book_id": 23,
          "category_id": 44
        },
        {
          "book_id": 24,
          "category_id": 110
        },
        {
          "book_id": 24,
          "category_id": 24
        },
        {
          "book_id": 24,
          "category_id": 104
        },
        {
          "book_id": 25,
          "category_id": 39
        },
        {
          "book_id": 25,
          "category_id": 128
        },
        {
          "book_id": 25,
          "category_id": 67
        },
        {
          "book_id": 26,
          "category_id": 17
        },
        {
          "book_id": 26,
          "category_id": 110
        },
        {
          "book_id": 26,
          "category_id": 105
        },
        {
          "book_id": 27,
          "category_id": 47
        },
        {
          "book_id": 27,
          "category_id": 133
        },
        {
          "book_id": 27,
          "category_id": 58
        },
        {
          "book_id": 28,
          "category_id": 70
        },
        {
          "book_id": 28,
          "category_id": 47
        },
        {
          "book_id": 28,
          "category_id": 133
        },
        {
          "book_id": 29,
          "category_id": 8
        },
        {
          "book_id": 29,
          "category_id": 113
        },
        {
          "book_id": 29,
          "category_id": 47
        },
        {
          "book_id": 30,
          "category_id": 8
        },
        {
          "book_id": 30,
          "category_id": 120
        },
        {
          "book_id": 30,
          "category_id": 12
        },
        {
          "book_id": 31,
          "category_id": 40
        },
        {
          "book_id": 31,
          "category_id": 114
        },
        {
          "book_id": 31,
          "category_id": 10
        },
        {
          "book_id": 32,
          "category_id": 7
        },
        {
          "book_id": 32,
          "category_id": 70
        },
        {
          "book_id": 32,
          "category_id": 42
        },
        {
          "book_id": 33,
          "category_id": 70
        },
        {
          "book_id": 33,
          "category_id": 94
        },
        {
          "book_id": 33,
          "category_id": 91
        },
        {
          "book_id": 34,
          "category_id": 123
        },
        {
          "book_id": 34,
          "category_id": 106
        },
        {
          "book_id": 34,
          "category_id": 79
        },
        {
          "book_id": 35,
          "category_id": 71
        },
        {
          "book_id": 35,
          "category_id": 123
        },
        {
          "book_id": 35,
          "category_id": 134
        },
        {
          "book_id": 36,
          "category_id": 69
        },
        {
          "book_id": 36,
          "category_id": 96
        },
        {
          "book_id": 36,
          "category_id": 73
        },
        {
          "book_id": 37,
          "category_id": 69
        },
        {
          "book_id": 37,
          "category_id": 71
        },
        {
          "book_id": 37,
          "category_id": 34
        },
        {
          "book_id": 38,
          "category_id": 97
        },
        {
          "book_id": 38,
          "category_id": 117
        },
        {
          "book_id": 38,
          "category_id": 42
        },
        {
          "book_id": 39,
          "category_id": 90
        },
        {
          "book_id": 39,
          "category_id": 77
        },
        {
          "book_id": 39,
          "category_id": 16
        },
        {
          "book_id": 40,
          "category_id": 2
        },
        {
          "book_id": 40,
          "category_id": 100
        },
        {
          "book_id": 40,
          "category_id": 110
        },
        {
          "book_id": 41,
          "category_id": 87
        },
        {
          "book_id": 41,
          "category_id": 43
        },
        {
          "book_id": 41,
          "category_id": 115
        },
        {
          "book_id": 42,
          "category_id": 5
        },
        {
          "book_id": 42,
          "category_id": 44
        },
        {
          "book_id": 43,
          "category_id": 18
        },
        {
          "book_id": 43,
          "category_id": 128
        },
        {
          "book_id": 43,
          "category_id": 79
        },
        {
          "book_id": 43,
          "category_id": 21
        },
        {
          "book_id": 44,
          "category_id": 88
        },
        {
          "book_id": 44,
          "category_id": 85
        },
        {
          "book_id": 44,
          "category_id": 101
        },
        {
          "book_id": 45,
          "category_id": 96
        },
        {
          "book_id": 45,
          "category_id": 70
        },
        {
          "book_id": 45,
          "category_id": 130
        },
        {
          "book_id": 46,
          "category_id": 20
        },
        {
          "book_id": 46,
          "category_id": 27
        },
        {
          "book_id": 46,
          "category_id": 133
        },
        {
          "book_id": 47,
          "category_id": 124
        },
        {
          "book_id": 47,
          "category_id": 31
        },
        {
          "book_id": 47,
          "category_id": 10
        },
        {
          "book_id": 48,
          "category_id": 8
        },
        {
          "book_id": 48,
          "category_id": 14
        },
        {
          "book_id": 48,
          "category_id": 133
        },
        {
          "book_id": 49,
          "category_id": 128
        },
        {
          "book_id": 49,
          "category_id": 79
        },
        {
          "book_id": 49,
          "category_id": 29
        },
        {
          "book_id": 49,
          "category_id": 131
        },
        {
          "book_id": 50,
          "category_id": 6
        },
        {
          "book_id": 50,
          "category_id": 70
        },
        {
          "book_id": 50,
          "category_id": 133
        },
        {
          "book_id": 51,
          "category_id": 9
        },
        {
          "book_id": 51,
          "category_id": 35
        },
        {
          "book_id": 51,
          "category_id": 51
        },
        {
          "book_id": 52,
          "category_id": 30
        },
        {
          "book_id": 52,
          "category_id": 4
        },
        {
          "book_id": 53,
          "category_id": 103
        },
        {
          "book_id": 53,
          "category_id": 82
        },
        {
          "book_id": 53,
          "category_id": 121
        },
        {
          "book_id": 54,
          "category_id": 52
        },
        {
          "book_id": 54,
          "category_id": 64
        },
        {
          "book_id": 55,
          "category_id": 82
        },
        {
          "book_id": 55,
          "category_id": 116
        },
        {
          "book_id": 55,
          "category_id": 126
        },
        {
          "book_id": 56,
          "category_id": 116
        },
        {
          "book_id": 56,
          "category_id": 55
        },
        {
          "book_id": 56,
          "category_id": 126
        },
        {
          "book_id": 57,
          "category_id": 44
        },
        {
          "book_id": 57,
          "category_id": 127
        },
        {
          "book_id": 57,
          "category_id": 59
        },
        {
          "book_id": 58,
          "category_id": 47
        },
        {
          "book_id": 58,
          "category_id": 29
        },
        {
          "book_id": 58,
          "category_id": 124
        },
        {
          "book_id": 59,
          "category_id": 125
        },
        {
          "book_id": 59,
          "category_id": 12
        },
        {
          "book_id": 59,
          "category_id": 49
        },
        {
          "book_id": 60,
          "category_id": 47
        },
        {
          "book_id": 60,
          "category_id": 61
        },
        {
          "book_id": 60,
          "category_id": 90
        },
        {
          "book_id": 60,
          "category_id": 44
        },
        {
          "book_id": 61,
          "category_id": 47
        },
        {
          "book_id": 61,
          "category_id": 74
        },
        {
          "book_id": 61,
          "category_id": 94
        },
        {
          "book_id": 62,
          "category_id": 111
        },
        {
          "book_id": 62,
          "category_id": 136
        },
        {
          "book_id": 62,
          "category_id": 124
        },
        {
          "book_id": 63,
          "category_id": 13
        },
        {
          "book_id": 63,
          "category_id": 84
        },
        {
          "book_id": 63,
          "category_id": 129
        },
        {
          "book_id": 64,
          "category_id": 123
        },
        {
          "book_id": 64,
          "category_id": 124
        },
        {
          "book_id": 64,
          "category_id": 82
        },
        {
          "book_id": 65,
          "category_id": 59
        },
        {
          "book_id": 65,
          "category_id": 82
        },
        {
          "book_id": 65,
          "category_id": 72
        },
        {
          "book_id": 66,
          "category_id": 8
        },
        {
          "book_id": 66,
          "category_id": 112
        },
        {
          "book_id": 66,
          "category_id": 17
        },
        {
          "book_id": 67,
          "category_id": 61
        },
        {
          "book_id": 67,
          "category_id": 98
        },
        {
          "book_id": 67,
          "category_id": 132
        },
        {
          "book_id": 67,
          "category_id": 124
        },
        {
          "book_id": 68,
          "category_id": 76
        },
        {
          "book_id": 68,
          "category_id": 107
        },
        {
          "book_id": 68,
          "category_id": 124
        },
        {
          "book_id": 69,
          "category_id": 104
        },
        {
          "book_id": 69,
          "category_id": 44
        },
        {
          "book_id": 70,
          "category_id": 47
        },
        {
          "book_id": 70,
          "category_id": 124
        },
        {
          "book_id": 70,
          "category_id": 81
        },
        {
          "book_id": 71,
          "category_id": 4
        },
        {
          "book_id": 71,
          "category_id": 26
        },
        {
          "book_id": 71,
          "category_id": 67
        },
        {
          "book_id": 71,
          "category_id": 27
        },
        {
          "book_id": 72,
          "category_id": 25
        },
        {
          "book_id": 72,
          "category_id": 123
        },
        {
          "book_id": 72,
          "category_id": 79
        },
        {
          "book_id": 73,
          "category_id": 64
        },
        {
          "book_id": 73,
          "category_id": 65
        },
        {
          "book_id": 73,
          "category_id": 50
        },
        {
          "book_id": 74,
          "category_id": 4
        },
        {
          "book_id": 74,
          "category_id": 78
        },
        {
          "book_id": 74,
          "category_id": 103
        },
        {
          "book_id": 75,
          "category_id": 137
        },
        {
          "book_id": 76,
          "category_id": 66
        },
        {
          "book_id": 76,
          "category_id": 102
        },
        {
          "book_id": 77,
          "category_id": 104
        },
        {
          "book_id": 77,
          "category_id": 55
        },
        {
          "book_id": 77,
          "category_id": 109
        },
        {
          "book_id": 78,
          "category_id": 3
        },
        {
          "book_id": 78,
          "category_id": 122
        },
        {
          "book_id": 78,
          "category_id": 62
        },
        {
          "book_id": 78,
          "category_id": 125
        },
        {
          "book_id": 79,
          "category_id": 109
        },
        {
          "book_id": 79,
          "category_id": 56
        },
        {
          "book_id": 79,
          "category_id": 136
        },
        {
          "book_id": 80,
          "category_id": 79
        },
        {
          "book_id": 80,
          "category_id": 93
        },
        {
          "book_id": 80,
          "category_id": 29
        },
        {
          "book_id": 81,
          "category_id": 54
        },
        {
          "book_id": 81,
          "category_id": 29
        },
        {
          "book_id": 81,
          "category_id": 28
        },
        {
          "book_id": 82,
          "category_id": 8
        },
        {
          "book_id": 82,
          "category_id": 60
        },
        {
          "book_id": 82,
          "category_id": 23
        },
        {
          "book_id": 83,
          "category_id": 123
        },
        {
          "book_id": 83,
          "category_id": 4
        },
        {
          "book_id": 83,
          "category_id": 61
        },
        {
          "book_id": 84,
          "category_id": 46
        },
        {
          "book_id": 84,
          "category_id": 112
        },
        {
          "book_id": 84,
          "category_id": 116
        },
        {
          "book_id": 85,
          "category_id": 46
        },
        {
          "book_id": 85,
          "category_id": 4
        },
        {
          "book_id": 85,
          "category_id": 123
        },
        {
          "book_id": 86,
          "category_id": 95
        },
        {
          "book_id": 86,
          "category_id": 31
        },
        {
          "book_id": 87,
          "category_id": 67
        },
        {
          "book_id": 87,
          "category_id": 45
        },
        {
          "book_id": 88,
          "category_id": 44
        },
        {
          "book_id": 88,
          "category_id": 95
        },
        {
          "book_id": 89,
          "category_id": 7
        },
        {
          "book_id": 89,
          "category_id": 82
        },
        {
          "book_id": 90,
          "category_id": 36
        },
        {
          "book_id": 90,
          "category_id": 33
        },
        {
          "book_id": 90,
          "category_id": 89
        },
        {
          "book_id": 91,
          "category_id": 112
        },
        {
          "book_id": 91,
          "category_id": 124
        },
        {
          "book_id": 91,
          "category_id": 118
        },
        {
          "book_id": 92,
          "category_id": 83
        },
        {
          "book_id": 92,
          "category_id": 119
        },
        {
          "book_id": 92,
          "category_id": 86
        },
        {
          "book_id": 93,
          "category_id": 32
        },
        {
          "book_id": 93,
          "category_id": 112
        },
        {
          "book_id": 93,
          "category_id": 118
        },
        {
          "book_id": 94,
          "category_id": 34
        },
        {
          "book_id": 94,
          "category_id": 112
        },
        {
          "book_id": 95,
          "category_id": 51
        },
        {
          "book_id": 96,
          "category_id": 70
        },
        {
          "book_id": 96,
          "category_id": 35
        },
        {
          "book_id": 97,
          "category_id": 34
        },
        {
          "book_id": 97,
          "category_id": 43
        },
        {
          "book_id": 98,
          "category_id": 8
        },
        {
          "book_id": 98,
          "category_id": 70
        },
        {
          "book_id": 98,
          "category_id": 35
        },
        {
          "book_id": 99,
          "category_id": 34
        },
        {
          "book_id": 99,
          "category_id": 17
        },
        {
          "book_id": 99,
          "category_id": 116
        },
        {
          "book_id": 100,
          "category_id": 25
        },
        {
          "book_id": 100,
          "category_id": 35
        },
        {
          "book_id": 100,
          "category_id": 133
        },
        {
          "book_id": 101,
          "category_id": 35
        },
        {
          "book_id": 101,
          "category_id": 70
        },
        {
          "book_id": 101,
          "category_id": 133
        },
        {
          "book_id": 102,
          "category_id": 25
        },
        {
          "book_id": 102,
          "category_id": 34
        },
        {
          "book_id": 103,
          "category_id": 96
        },
        {
          "book_id": 103,
          "category_id": 118
        },
        {
          "book_id": 103,
          "category_id": 133
        },
        {
          "book_id": 104,
          "category_id": 118
        },
        {
          "book_id": 105,
          "category_id": 11
        },
        {
          "book_id": 106,
          "category_id": 47
        },
        {
          "book_id": 106,
          "category_id": 35
        },
        {
          "book_id": 107,
          "category_id": 87
        },
        {
          "book_id": 108,
          "category_id": 17
        },
        {
          "book_id": 108,
          "category_id": 25
        },
        {
          "book_id": 109,
          "category_id": 61
        },
        {
          "book_id": 109,
          "category_id": 35
        },
        {
          "book_id": 110,
          "category_id": 77
        },
        {
          "book_id": 110,
          "category_id": 96
        },
        {
          "book_id": 111,
          "category_id": 110
        },
        {
          "book_id": 111,
          "category_id": 59
        },
        {
          "book_id": 112,
          "category_id": 35
        },
        {
          "book_id": 112,
          "category_id": 55
        },
        {
          "book_id": 113,
          "category_id": 34
        },
        {
          "book_id": 113,
          "category_id": 133
        },
        {
          "book_id": 114,
          "category_id": 79
        },
        {
          "book_id": 114,
          "category_id": 55
        },
        {
          "book_id": 115,
          "category_id": 35
        },
        {
          "book_id": 115,
          "category_id": 51
        },
        {
          "book_id": 116,
          "category_id": 34
        },
        {
          "book_id": 116,
          "category_id": 67
        },
        {
          "book_id": 117,
          "category_id": 8
        },
        {
          "book_id": 117,
          "category_id": 35
        },
        {
          "book_id": 117,
          "category_id": 47
        },
        {
          "book_id": 118,
          "category_id": 73
        },
        {
          "book_id": 118,
          "category_id": 96
        },
        {
          "book_id": 119,
          "category_id": 11
        },
        {
          "book_id": 119,
          "category_id": 35
        },
        {
          "book_id": 120,
          "category_id": 85
        },
        {
          "book_id": 120,
          "category_id": 130
        },
        {
          "book_id": 121,
          "category_id": 82
        },
        {
          "book_id": 121,
          "category_id": 68
        },
        {
          "book_id": 121,
          "category_id": 35
        },
        {
          "book_id": 122,
          "category_id": 11
        },
        {
          "book_id": 122,
          "category_id": 35
        },
        {
          "book_id": 123,
          "category_id": 11
        },
        {
          "book_id": 124,
          "category_id": 79
        },
        {
          "book_id": 124,
          "category_id": 42
        },
        {
          "book_id": 125,
          "category_id": 96
        },
        {
          "book_id": 125,
          "category_id": 116
        },
        {
          "book_id": 126,
          "category_id": 48
        },
        {
          "book_id": 126,
          "category_id": 35
        },
        {
          "book_id": 127,
          "category_id": 128
        },
        {
          "book_id": 127,
          "category_id": 79
        },
        {
          "book_id": 128,
          "category_id": 20
        },
        {
          "book_id": 128,
          "category_id": 27
        },
        {
          "book_id": 128,
          "category_id": 133
        },
        {
          "book_id": 129,
          "category_id": 96
        },
        {
          "book_id": 130,
          "category_id": 35
        },
        {
          "book_id": 130,
          "category_id": 128
        },
        {
          "book_id": 130,
          "category_id": 59
        },
        {
          "book_id": 131,
          "category_id": 11
        },
        {
          "book_id": 131,
          "category_id": 118
        },
        {
          "book_id": 132,
          "category_id": 82
        },
        {
          "book_id": 132,
          "category_id": 96
        },
        {
          "book_id": 132,
          "category_id": 16
        },
        {
          "book_id": 133,
          "category_id": 35
        },
        {
          "book_id": 133,
          "category_id": 85
        },
        {
          "book_id": 134,
          "category_id": 31
        },
        {
          "book_id": 134,
          "category_id": 116
        },
        {
          "book_id": 134,
          "category_id": 35
        },
        {
          "book_id": 135,
          "category_id": 51
        },
        {
          "book_id": 136,
          "category_id": 25
        },
        {
          "book_id": 136,
          "category_id": 33
        },
        {
          "book_id": 137,
          "category_id": 34
        },
        {
          "book_id": 137,
          "category_id": 82
        },
        {
          "book_id": 138,
          "category_id": 116
        },
        {
          "book_id": 138,
          "category_id": 110
        },
        {
          "book_id": 138,
          "category_id": 81
        },
        {
          "book_id": 139,
          "category_id": 35
        },
        {
          "book_id": 139,
          "category_id": 85
        },
        {
          "book_id": 140,
          "category_id": 96
        },
        {
          "book_id": 141,
          "category_id": 96
        },
        {
          "book_id": 141,
          "category_id": 32
        },
        {
          "book_id": 141,
          "category_id": 53
        },
        {
          "book_id": 142,
          "category_id": 116
        },
        {
          "book_id": 142,
          "category_id": 67
        },
        {
          "book_id": 142,
          "category_id": 35
        },
        {
          "book_id": 143,
          "category_id": 110
        },
        {
          "book_id": 143,
          "category_id": 34
        },
        {
          "book_id": 144,
          "category_id": 110
        },
        {
          "book_id": 145,
          "category_id": 35
        },
        {
          "book_id": 145,
          "category_id": 16
        },
        {
          "book_id": 145,
          "category_id": 110
        },
        {
          "book_id": 146,
          "category_id": 25
        },
        {
          "book_id": 146,
          "category_id": 53
        },
        {
          "book_id": 147,
          "category_id": 73
        },
        {
          "book_id": 148,
          "category_id": 84
        },
        {
          "book_id": 148,
          "category_id": 133
        },
        {
          "book_id": 148,
          "category_id": 25
        },
        {
          "book_id": 149,
          "category_id": 7
        },
        {
          "book_id": 149,
          "category_id": 47
        },
        {
          "book_id": 150,
          "category_id": 25
        },
        {
          "book_id": 150,
          "category_id": 116
        },
        {
          "book_id": 151,
          "category_id": 70
        },
        {
          "book_id": 152,
          "category_id": 43
        },
        {
          "book_id": 152,
          "category_id": 44
        },
        {
          "book_id": 152,
          "category_id": 35
        },
        {
          "book_id": 153,
          "category_id": 96
        },
        {
          "book_id": 153,
          "category_id": 110
        },
        {
          "book_id": 154,
          "category_id": 116
        },
        {
          "book_id": 154,
          "category_id": 70
        },
        {
          "book_id": 155,
          "category_id": 34
        },
        {
          "book_id": 155,
          "category_id": 104
        },
        {
          "book_id": 156,
          "category_id": 25
        },
        {
          "book_id": 156,
          "category_id": 67
        },
        {
          "book_id": 157,
          "category_id": 44
        },
        {
          "book_id": 158,
          "category_id": 35
        },
        {
          "book_id": 159,
          "category_id": 124
        },
        {
          "book_id": 159,
          "category_id": 82
        },
        {
          "book_id": 159,
          "category_id": 31
        },
        {
          "book_id": 160,
          "category_id": 11
        },
        {
          "book_id": 160,
          "category_id": 35
        },
        {
          "book_id": 161,
          "category_id": 8
        },
        {
          "book_id": 161,
          "category_id": 110
        },
        {
          "book_id": 161,
          "category_id": 96
        },
        {
          "book_id": 162,
          "category_id": 116
        },
        {
          "book_id": 162,
          "category_id": 128
        },
        {
          "book_id": 162,
          "category_id": 96
        },
        {
          "book_id": 163,
          "category_id": 47
        },
        {
          "book_id": 163,
          "category_id": 28
        },
        {
          "book_id": 164,
          "category_id": 16
        },
        {
          "book_id": 164,
          "category_id": 110
        },
        {
          "book_id": 165,
          "category_id": 99
        },
        {
          "book_id": 166,
          "category_id": 35
        },
        {
          "book_id": 166,
          "category_id": 133
        },
        {
          "book_id": 166,
          "category_id": 51
        },
        {
          "book_id": 167,
          "category_id": 61
        },
        {
          "book_id": 167,
          "category_id": 123
        },
        {
          "book_id": 168,
          "category_id": 59
        },
        {
          "book_id": 168,
          "category_id": 123
        },
        {
          "book_id": 169,
          "category_id": 110
        },
        {
          "book_id": 170,
          "category_id": 128
        },
        {
          "book_id": 170,
          "category_id": 25
        },
        {
          "book_id": 170,
          "category_id": 67
        },
        {
          "book_id": 171,
          "category_id": 112
        },
        {
          "book_id": 171,
          "category_id": 118
        },
        {
          "book_id": 171,
          "category_id": 110
        },
        {
          "book_id": 172,
          "category_id": 87
        },
        {
          "book_id": 173,
          "category_id": 43
        },
        {
          "book_id": 173,
          "category_id": 70
        },
        {
          "book_id": 173,
          "category_id": 11
        },
        {
          "book_id": 174,
          "category_id": 11
        },
        {
          "book_id": 174,
          "category_id": 110
        },
        {
          "book_id": 175,
          "category_id": 1
        },
        {
          "book_id": 175,
          "category_id": 96
        },
        {
          "book_id": 176,
          "category_id": 4
        },
        {
          "book_id": 176,
          "category_id": 118
        },
        {
          "book_id": 176,
          "category_id": 133
        },
        {
          "book_id": 177,
          "category_id": 133
        },
        {
          "book_id": 177,
          "category_id": 126
        },
        {
          "book_id": 177,
          "category_id": 4
        },
        {
          "book_id": 178,
          "category_id": 25
        },
        {
          "book_id": 178,
          "category_id": 84
        },
        {
          "book_id": 178,
          "category_id": 133
        },
        {
          "book_id": 179,
          "category_id": 43
        },
        {
          "book_id": 179,
          "category_id": 4
        },
        {
          "book_id": 180,
          "category_id": 105
        },
        {
          "book_id": 180,
          "category_id": 133
        },
        {
          "book_id": 180,
          "category_id": 11
        },
        {
          "book_id": 181,
          "category_id": 8
        },
        {
          "book_id": 181,
          "category_id": 113
        },
        {
          "book_id": 182,
          "category_id": 31
        },
        {
          "book_id": 182,
          "category_id": 34
        },
        {
          "book_id": 183,
          "category_id": 2
        },
        {
          "book_id": 183,
          "category_id": 110
        },
        {
          "book_id": 183,
          "category_id": 133
        },
        {
          "book_id": 184,
          "category_id": 133
        },
        {
          "book_id": 184,
          "category_id": 112
        },
        {
          "book_id": 184,
          "category_id": 4
        },
        {
          "book_id": 185,
          "category_id": 66
        },
        {
          "book_id": 185,
          "category_id": 35
        },
        {
          "book_id": 185,
          "category_id": 128
        },
        {
          "book_id": 186,
          "category_id": 7
        },
        {
          "book_id": 186,
          "category_id": 8
        },
        {
          "book_id": 186,
          "category_id": 110
        },
        {
          "book_id": 187,
          "category_id": 85
        },
        {
          "book_id": 188,
          "category_id": 32
        },
        {
          "book_id": 188,
          "category_id": 133
        },
        {
          "book_id": 188,
          "category_id": 34
        },
        {
          "book_id": 189,
          "category_id": 35
        },
        {
          "book_id": 189,
          "category_id": 110
        },
        {
          "book_id": 190,
          "category_id": 21
        },
        {
          "book_id": 190,
          "category_id": 128
        },
        {
          "book_id": 191,
          "category_id": 35
        },
        {
          "book_id": 191,
          "category_id": 79
        },
        {
          "book_id": 192,
          "category_id": 35
        },
        {
          "book_id": 192,
          "category_id": 113
        },
        {
          "book_id": 192,
          "category_id": 8
        },
        {
          "book_id": 193,
          "category_id": 66
        },
        {
          "book_id": 193,
          "category_id": 8
        },
        {
          "book_id": 193,
          "category_id": 133
        },
        {
          "book_id": 194,
          "category_id": 118
        },
        {
          "book_id": 194,
          "category_id": 32
        },
        {
          "book_id": 194,
          "category_id": 35
        },
        {
          "book_id": 195,
          "category_id": 70
        },
        {
          "book_id": 195,
          "category_id": 35
        },
        {
          "book_id": 196,
          "category_id": 73
        },
        {
          "book_id": 196,
          "category_id": 96
        },
        {
          "book_id": 197,
          "category_id": 47
        },
        {
          "book_id": 197,
          "category_id": 96
        },
        {
          "book_id": 198,
          "category_id": 35
        },
        {
          "book_id": 198,
          "category_id": 110
        },
        {
          "book_id": 199,
          "category_id": 17
        },
        {
          "book_id": 199,
          "category_id": 61
        },
        {
          "book_id": 199,
          "category_id": 128
        },
        {
          "book_id": 200,
          "category_id": 25
        },
        {
          "book_id": 201,
          "category_id": 133
        },
        {
          "book_id": 201,
          "category_id": 118
        },
        {
          "book_id": 201,
          "category_id": 35
        },
        {
          "book_id": 202,
          "category_id": 35
        },
        {
          "book_id": 202,
          "category_id": 112
        },
        {
          "book_id": 202,
          "category_id": 133
        },
        {
          "book_id": 203,
          "category_id": 127
        },
        {
          "book_id": 204,
          "category_id": 11
        },
        {
          "book_id": 204,
          "category_id": 31
        },
        {
          "book_id": 204,
          "category_id": 47
        },
        {
          "book_id": 205,
          "category_id": 79
        },
        {
          "book_id": 205,
          "category_id": 35
        },
        {
          "book_id": 205,
          "category_id": 110
        },
        {
          "book_id": 206,
          "category_id": 35
        },
        {
          "book_id": 206,
          "category_id": 51
        },
        {
          "book_id": 207,
          "category_id": 25
        },
        {
          "book_id": 208,
          "category_id": 96
        },
        {
          "book_id": 209,
          "category_id": 110
        },
        {
          "book_id": 209,
          "category_id": 34
        },
        {
          "book_id": 210,
          "category_id": 35
        },
        {
          "book_id": 210,
          "category_id": 73
        },
        {
          "book_id": 210,
          "category_id": 51
        },
        {
          "book_id": 211,
          "category_id": 128
        },
        {
          "book_id": 212,
          "category_id": 43
        },
        {
          "book_id": 212,
          "category_id": 96
        },
        {
          "book_id": 212,
          "category_id": 48
        },
        {
          "book_id": 213,
          "category_id": 19
        },
        {
          "book_id": 214,
          "category_id": 47
        },
        {
          "book_id": 214,
          "category_id": 35
        },
        {
          "book_id": 214,
          "category_id": 51
        },
        {
          "book_id": 215,
          "category_id": 32
        },
        {
          "book_id": 215,
          "category_id": 118
        },
        {
          "book_id": 215,
          "category_id": 35
        },
        {
          "book_id": 216,
          "category_id": 96
        },
        {
          "book_id": 216,
          "category_id": 118
        },
        {
          "book_id": 217,
          "category_id": 31
        },
        {
          "book_id": 217,
          "category_id": 34
        },
        {
          "book_id": 217,
          "category_id": 51
        },
        {
          "book_id": 218,
          "category_id": 35
        },
        {
          "book_id": 218,
          "category_id": 59
        },
        {
          "book_id": 218,
          "category_id": 32
        },
        {
          "book_id": 219,
          "category_id": 102
        },
        {
          "book_id": 219,
          "category_id": 67
        },
        {
          "book_id": 219,
          "category_id": 66
        },
        {
          "book_id": 220,
          "category_id": 102
        },
        {
          "book_id": 220,
          "category_id": 133
        },
        {
          "book_id": 220,
          "category_id": 34
        },
        {
          "book_id": 221,
          "category_id": 19
        },
        {
          "book_id": 222,
          "category_id": 73
        },
        {
          "book_id": 222,
          "category_id": 124
        },
        {
          "book_id": 223,
          "category_id": 129
        },
        {
          "book_id": 223,
          "category_id": 128
        },
        {
          "book_id": 224,
          "category_id": 110
        },
        {
          "book_id": 224,
          "category_id": 133
        },
        {
          "book_id": 224,
          "category_id": 59
        },
        {
          "book_id": 225,
          "category_id": 124
        },
        {
          "book_id": 225,
          "category_id": 8
        },
        {
          "book_id": 226,
          "category_id": 35
        },
        {
          "book_id": 226,
          "category_id": 112
        },
        {
          "book_id": 227,
          "category_id": 34
        },
        {
          "book_id": 227,
          "category_id": 112
        },
        {
          "book_id": 227,
          "category_id": 133
        },
        {
          "book_id": 228,
          "category_id": 96
        },
        {
          "book_id": 228,
          "category_id": 110
        },
        {
          "book_id": 229,
          "category_id": 124
        },
        {
          "book_id": 229,
          "category_id": 35
        },
        {
          "book_id": 229,
          "category_id": 85
        },
        {
          "book_id": 230,
          "category_id": 35
        },
        {
          "book_id": 230,
          "category_id": 112
        },
        {
          "book_id": 230,
          "category_id": 133
        },
        {
          "book_id": 231,
          "category_id": 102
        },
        {
          "book_id": 232,
          "category_id": 35
        },
        {
          "book_id": 233,
          "category_id": 85
        },
        {
          "book_id": 234,
          "category_id": 96
        },
        {
          "book_id": 234,
          "category_id": 51
        },
        {
          "book_id": 235,
          "category_id": 43
        },
        {
          "book_id": 236,
          "category_id": 82
        },
        {
          "book_id": 236,
          "category_id": 112
        },
        {
          "book_id": 236,
          "category_id": 31
        },
        {
          "book_id": 237,
          "category_id": 35
        },
        {
          "book_id": 237,
          "category_id": 11
        },
        {
          "book_id": 238,
          "category_id": 110
        },
        {
          "book_id": 238,
          "category_id": 35
        },
        {
          "book_id": 239,
          "category_id": 55
        },
        {
          "book_id": 240,
          "category_id": 35
        },
        {
          "book_id": 240,
          "category_id": 70
        },
        {
          "book_id": 240,
          "category_id": 128
        },
        {
          "book_id": 241,
          "category_id": 35
        },
        {
          "book_id": 241,
          "category_id": 70
        },
        {
          "book_id": 241,
          "category_id": 128
        },
        {
          "book_id": 242,
          "category_id": 35
        },
        {
          "book_id": 242,
          "category_id": 133
        },
        {
          "book_id": 243,
          "category_id": 35
        },
        {
          "book_id": 243,
          "category_id": 53
        },
        {
          "book_id": 243,
          "category_id": 124
        },
        {
          "book_id": 244,
          "category_id": 99
        },
        {
          "book_id": 244,
          "category_id": 85
        },
        {
          "book_id": 245,
          "category_id": 79
        },
        {
          "book_id": 245,
          "category_id": 35
        },
        {
          "book_id": 246,
          "category_id": 118
        },
        {
          "book_id": 246,
          "category_id": 96
        },
        {
          "book_id": 247,
          "category_id": 35
        },
        {
          "book_id": 247,
          "category_id": 102
        },
        {
          "book_id": 248,
          "category_id": 28
        },
        {
          "book_id": 249,
          "category_id": 110
        },
        {
          "book_id": 250,
          "category_id": 116
        },
        {
          "book_id": 250,
          "category_id": 35
        },
        {
          "book_id": 250,
          "category_id": 112
        },
        {
          "book_id": 251,
          "category_id": 42
        },
        {
          "book_id": 252,
          "category_id": 123
        },
        {
          "book_id": 252,
          "category_id": 133
        },
        {
          "book_id": 253,
          "category_id": 43
        },
        {
          "book_id": 253,
          "category_id": 35
        },
        {
          "book_id": 254,
          "category_id": 118
        },
        {
          "book_id": 254,
          "category_id": 112
        },
        {
          "book_id": 254,
          "category_id": 4
        },
        {
          "book_id": 255,
          "category_id": 35
        },
        {
          "book_id": 255,
          "category_id": 124
        },
        {
          "book_id": 255,
          "category_id": 16
        },
        {
          "book_id": 256,
          "category_id": 35
        },
        {
          "book_id": 256,
          "category_id": 43
        },
        {
          "book_id": 257,
          "category_id": 35
        },
        {
          "book_id": 257,
          "category_id": 67
        },
        {
          "book_id": 258,
          "category_id": 43
        },
        {
          "book_id": 259,
          "category_id": 35
        },
        {
          "book_id": 259,
          "category_id": 116
        },
        {
          "book_id": 259,
          "category_id": 61
        },
        {
          "book_id": 260,
          "category_id": 35
        },
        {
          "book_id": 260,
          "category_id": 51
        },
        {
          "book_id": 261,
          "category_id": 35
        },
        {
          "book_id": 261,
          "category_id": 53
        },
        {
          "book_id": 262,
          "category_id": 35
        },
        {
          "book_id": 262,
          "category_id": 82
        },
        {
          "book_id": 262,
          "category_id": 6
        },
        {
          "book_id": 263,
          "category_id": 35
        },
        {
          "book_id": 263,
          "category_id": 110
        },
        {
          "book_id": 264,
          "category_id": 35
        },
        {
          "book_id": 264,
          "category_id": 87
        },
        {
          "book_id": 265,
          "category_id": 87
        },
        {
          "book_id": 265,
          "category_id": 32
        },
        {
          "book_id": 266,
          "category_id": 35
        },
        {
          "book_id": 266,
          "category_id": 61
        },
        {
          "book_id": 266,
          "category_id": 110
        },
        {
          "book_id": 267,
          "category_id": 133
        },
        {
          "book_id": 267,
          "category_id": 44
        },
        {
          "book_id": 267,
          "category_id": 82
        },
        {
          "book_id": 268,
          "category_id": 35
        },
        {
          "book_id": 268,
          "category_id": 70
        },
        {
          "book_id": 268,
          "category_id": 124
        },
        {
          "book_id": 269,
          "category_id": 66
        },
        {
          "book_id": 270,
          "category_id": 25
        },
        {
          "book_id": 270,
          "category_id": 133
        },
        {
          "book_id": 271,
          "category_id": 35
        },
        {
          "book_id": 271,
          "category_id": 124
        },
        {
          "book_id": 272,
          "category_id": 66
        },
        {
          "book_id": 272,
          "category_id": 123
        },
        {
          "book_id": 273,
          "category_id": 35
        },
        {
          "book_id": 273,
          "category_id": 70
        },
        {
          "book_id": 273,
          "category_id": 47
        },
        {
          "book_id": 274,
          "category_id": 35
        },
        {
          "book_id": 274,
          "category_id": 112
        },
        {
          "book_id": 274,
          "category_id": 124
        },
        {
          "book_id": 275,
          "category_id": 35
        },
        {
          "book_id": 275,
          "category_id": 70
        },
        {
          "book_id": 276,
          "category_id": 35
        },
        {
          "book_id": 276,
          "category_id": 82
        },
        {
          "book_id": 276,
          "category_id": 102
        },
        {
          "book_id": 276,
          "category_id": 133
        },
        {
          "book_id": 277,
          "category_id": 96
        },
        {
          "book_id": 278,
          "category_id": 35
        },
        {
          "book_id": 278,
          "category_id": 48
        },
        {
          "book_id": 279,
          "category_id": 4
        },
        {
          "book_id": 279,
          "category_id": 110
        },
        {
          "book_id": 279,
          "category_id": 124
        },
        {
          "book_id": 280,
          "category_id": 124
        },
        {
          "book_id": 280,
          "category_id": 110
        },
        {
          "book_id": 281,
          "category_id": 35
        },
        {
          "book_id": 281,
          "category_id": 51
        },
        {
          "book_id": 282,
          "category_id": 35
        },
        {
          "book_id": 282,
          "category_id": 43
        },
        {
          "book_id": 282,
          "category_id": 118
        },
        {
          "book_id": 283,
          "category_id": 85
        },
        {
          "book_id": 284,
          "category_id": 128
        },
        {
          "book_id": 284,
          "category_id": 133
        },
        {
          "book_id": 284,
          "category_id": 21
        },
        {
          "book_id": 285,
          "category_id": 82
        },
        {
          "book_id": 285,
          "category_id": 133
        },
        {
          "book_id": 285,
          "category_id": 110
        },
        {
          "book_id": 286,
          "category_id": 35
        },
        {
          "book_id": 286,
          "category_id": 116
        },
        {
          "book_id": 286,
          "category_id": 51
        },
        {
          "book_id": 287,
          "category_id": 35
        },
        {
          "book_id": 288,
          "category_id": 110
        },
        {
          "book_id": 288,
          "category_id": 35
        },
        {
          "book_id": 289,
          "category_id": 70
        },
        {
          "book_id": 289,
          "category_id": 35
        },
        {
          "book_id": 290,
          "category_id": 82
        },
        {
          "book_id": 290,
          "category_id": 133
        },
        {
          "book_id": 290,
          "category_id": 112
        },
        {
          "book_id": 291,
          "category_id": 110
        },
        {
          "book_id": 291,
          "category_id": 82
        },
        {
          "book_id": 291,
          "category_id": 35
        },
        {
          "book_id": 292,
          "category_id": 82
        },
        {
          "book_id": 292,
          "category_id": 118
        },
        {
          "book_id": 292,
          "category_id": 31
        },
        {
          "book_id": 293,
          "category_id": 35
        },
        {
          "book_id": 293,
          "category_id": 110
        },
        {
          "book_id": 294,
          "category_id": 35
        },
        {
          "book_id": 294,
          "category_id": 128
        },
        {
          "book_id": 295,
          "category_id": 35
        },
        {
          "book_id": 295,
          "category_id": 102
        },
        {
          "book_id": 295,
          "category_id": 133
        },
        {
          "book_id": 295,
          "category_id": 110
        },
        {
          "book_id": 296,
          "category_id": 35
        },
        {
          "book_id": 296,
          "category_id": 123
        },
        {
          "book_id": 297,
          "category_id": 17
        },
        {
          "book_id": 297,
          "category_id": 123
        },
        {
          "book_id": 297,
          "category_id": 32
        },
        {
          "book_id": 298,
          "category_id": 17
        },
        {
          "book_id": 298,
          "category_id": 70
        },
        {
          "book_id": 298,
          "category_id": 16
        },
        {
          "book_id": 299,
          "category_id": 1
        },
        {
          "book_id": 299,
          "category_id": 47
        },
        {
          "book_id": 1,
          "category_id": 35
        },
        {
          "book_id": 300,
          "category_id": 31
        },
        {
          "book_id": 300,
          "category_id": 44
        },
        {
          "book_id": 300,
          "category_id": 138
        },
        {
          "book_id": 301,
          "category_id": 138
        },
        {
          "book_id": 301,
          "category_id": 35
        },
        {
          "book_id": 301,
          "category_id": 16
        },
        {
          "book_id": 302,
          "category_id": 138
        },
        {
          "book_id": 302,
          "category_id": 58
        },
        {
          "book_id": 302,
          "category_id": 35
        },
        {
          "book_id": 303,
          "category_id": 138
        },
        {
          "book_id": 303,
          "category_id": 99
        },
        {
          "book_id": 303,
          "category_id": 116
        },
        {
          "book_id": 304,
          "category_id": 138
        },
        {
          "book_id": 304,
          "category_id": 110
        },
        {
          "book_id": 304,
          "category_id": 133
        },
        {
          "book_id": 305,
          "category_id": 138
        },
        {
          "book_id": 305,
          "category_id": 64
        },
        {
          "book_id": 305,
          "category_id": 35
        },
        {
          "book_id": 306,
          "category_id": 138
        },
        {
          "book_id": 306,
          "category_id": 35
        },
        {
          "book_id": 306,
          "category_id": 82
        },
        {
          "book_id": 307,
          "category_id": 138
        },
        {
          "book_id": 307,
          "category_id": 31
        },
        {
          "book_id": 307,
          "category_id": 35
        }
      ]);
    });
};
