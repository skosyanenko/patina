
exports.seed = function(knex) {
  return knex('authors_books__books_authors').del()
    .then(function () {
      return knex('authors_books__books_authors').insert([
        {
          "book_id": 1,
          "author_id": 1
        },
        {
          "book_id": 2,
          "author_id": 2,
        },
        {
          "book_id": 2,
          "author_id": 3,
        },
        {
          "book_id": 3,
          "author_id": 6
        },
        {
          "book_id": 4,
          "author_id": 11
        },
        {
          "book_id": 5,
          "author_id": 13
        },
        {
          "book_id": 6,
          "author_id": 14
        },
        {
          "book_id": 7,
          "author_id": 15
        },
        {
          "book_id": 8,
          "author_id": 16
        },
        {
          "book_id": 9,
          "author_id": 17
        },
        {
          "book_id": 10,
          "author_id": 20
        },
        {
          "book_id": 11,
          "author_id": 22
        },
        {
          "book_id": 12,
          "author_id": 24
        },
        {
          "book_id": 13,
          "author_id": 26
        },
        {
          "book_id": 14,
          "author_id": 27
        },
        {
          "book_id": 15,
          "author_id": 30
        },
        {
          "book_id": 15,
          "author_id": 31
        },
        {
          "book_id": 16,
          "author_id": 34
        },
        {
          "book_id": 17,
          "author_id": 36
        },
        {
          "book_id": 18,
          "author_id": 37
        },
        {
          "book_id": 19,
          "author_id": 24
        },
        {
          "book_id": 20,
          "author_id": 39
        },
        {
          "book_id": 21,
          "author_id": 40
        },
        {
          "book_id": 22,
          "author_id": 42
        },
        {
          "book_id": 23,
          "author_id": 43
        },
        {
          "book_id": 24,
          "author_id": 44
        },
        {
          "book_id": 25,
          "author_id": 46
        },
        {
          "book_id": 26,
          "author_id": 47
        },
        {
          "book_id": 27,
          "author_id": 48
        },
        {
          "book_id": 28,
          "author_id": 49
        },
        {
          "book_id": 29,
          "author_id": 4
        },
        {
          "book_id": 30,
          "author_id": 5
        },
        {
          "book_id": 31,
          "author_id": 7
        },
        {
          "book_id": 32,
          "author_id": 8
        },
        {
          "book_id": 33,
          "author_id": 9
        },
        {
          "book_id": 34,
          "author_id": 10
        },
        {
          "book_id": 35,
          "author_id": 12
        },
        {
          "book_id": 36,
          "author_id": 18
        },
        {
          "book_id": 37,
          "author_id": 19
        },
        {
          "book_id": 38,
          "author_id": 21
        },
        {
          "book_id": 39,
          "author_id": 23
        },
        {
          "book_id": 40,
          "author_id": 25
        },
        {
          "book_id": 41,
          "author_id": 28
        },
        {
          "book_id": 42,
          "author_id": 29
        },
        {
          "book_id": 43,
          "author_id": 32
        },
        {
          "book_id": 44,
          "author_id": 33
        },
        {
          "book_id": 45,
          "author_id": 14
        },
        {
          "book_id": 46,
          "author_id": 35
        },
        {
          "book_id": 47,
          "author_id": 38
        },
        {
          "book_id": 48,
          "author_id": 40
        },
        {
          "book_id": 49,
          "author_id": 41
        },
        {
          "book_id": 50,
          "author_id": 45
        },
        {
          "book_id": 51,
          "author_id": 65
        },
        {
          "book_id": 52,
          "author_id": 70
        },
        {
          "book_id": 53,
          "author_id": 16
        },
        {
          "book_id": 54,
          "author_id": 89
        },
        {
          "book_id": 55,
          "author_id": 96
        },
        {
          "book_id": 56,
          "author_id": 96
        },
        {
          "book_id": 57,
          "author_id": 119
        },
        {
          "book_id": 58,
          "author_id": 122
        },
        {
          "book_id": 59,
          "author_id": 5
        },
        {
          "book_id": 60,
          "author_id": 127
        },
        {
          "book_id": 61,
          "author_id": 141
        },
        {
          "book_id": 62,
          "author_id": 96
        },
        {
          "book_id": 63,
          "author_id": 16
        },
        {
          "book_id": 64,
          "author_id": 165
        },
        {
          "book_id": 64,
          "author_id": 166
        },
        {
          "book_id": 65,
          "author_id": 16
        },
        {
          "book_id": 66,
          "author_id": 171
        },
        {
          "book_id": 67,
          "author_id": 176
        },
        {
          "book_id": 68,
          "author_id": 96
        },
        {
          "book_id": 69,
          "author_id": 180
        },
        {
          "book_id": 70,
          "author_id": 90
        },
        {
          "book_id": 71,
          "author_id": 182
        },
        {
          "book_id": 72,
          "author_id": 21
        },
        {
          "book_id": 73,
          "author_id": 193
        },
        {
          "book_id": 74,
          "author_id": 16
        },
        {
          "book_id": 75,
          "author_id": 96
        },
        {
          "book_id": 76,
          "author_id": 127
        },
        {
          "book_id": 77,
          "author_id": 208
        },
        {
          "book_id": 78,
          "author_id": 96
        },
        {
          "book_id": 79,
          "author_id": 96
        },
        {
          "book_id": 80,
          "author_id": 48
        },
        {
          "book_id": 81,
          "author_id": 34
        },
        {
          "book_id": 82,
          "author_id": 215
        },
        {
          "book_id": 83,
          "author_id": 16
        },
        {
          "book_id": 84,
          "author_id": 217
        },
        {
          "book_id": 85,
          "author_id": 225
        },{
          "book_id": 86,
          "author_id": 237
        },
        {
          "book_id": 87,
          "author_id": 57
        },
        {
          "book_id": 88,
          "author_id": 52
        },
        {
          "book_id": 89,
          "author_id": 71
        },
        {
          "book_id": 90,
          "author_id": 103
        },
        {
          "book_id": 91,
          "author_id": 19
        },
        {
          "book_id": 92,
          "author_id": 159
        },
        {
          "book_id": 93,
          "author_id": 156
        },
        {
          "book_id": 94,
          "author_id": 50
        },
        {
          "book_id": 95,
          "author_id": 51
        },
        {
          "book_id": 96,
          "author_id": 52
        },{
          "book_id": 97,
          "author_id": 53
        },
        {
          "book_id": 98,
          "author_id": 54
        },
        {
          "book_id": 99,
          "author_id": 55
        },
        {
          "book_id": 100,
          "author_id": 56
        },
        {
          "book_id": 101,
          "author_id": 58
        },
        {
          "book_id": 102,
          "author_id": 59
        },
        {
          "book_id": 103,
          "author_id": 60
        },
        {
          "book_id": 104,
          "author_id": 241
        },
        {
          "book_id": 105,
          "author_id": 62
        },
        {
          "book_id": 106,
          "author_id": 63
        },
        {
          "book_id": 107,
          "author_id": 64
        },
        {
          "book_id": 108,
          "author_id": 66
        },
        {
          "book_id": 109,
          "author_id": 16
        },
        {
          "book_id": 110,
          "author_id": 67
        },
        {
          "book_id": 111,
          "author_id": 68
        },
        {
          "book_id": 112,
          "author_id": 69
        },
        {
          "book_id": 113,
          "author_id": 72
        },
        {
          "book_id": 114,
          "author_id": 38
        },
        {
          "book_id": 115,
          "author_id": 73
        },
        {
          "book_id": 116,
          "author_id": 74
        },
        {
          "book_id": 117,
          "author_id": 75
        },
        {
          "book_id": 118,
          "author_id": 76
        },
        {
          "book_id": 119,
          "author_id": 77
        },
        {
          "book_id": 120,
          "author_id": 78
        },
        {
          "book_id": 121,
          "author_id": 79
        },
        {
          "book_id": 122,
          "author_id": 80
        },
        {
          "book_id": 123,
          "author_id": 81
        },
        {
          "book_id": 124,
          "author_id": 82
        },
        {
          "book_id": 125,
          "author_id": 83
        },
        {
          "book_id": 126,
          "author_id": 84
        },
        {
          "book_id": 127,
          "author_id": 85
        },
        {
          "book_id": 128,
          "author_id": 86
        },
        {
          "book_id": 129,
          "author_id": 2
        },
        {
          "book_id": 129,
          "author_id": 3
        },
        {
          "book_id": 130,
          "author_id": 87
        },
        {
          "book_id": 131,
          "author_id": 88
        },
        {
          "book_id": 132,
          "author_id": 90
        },
        {
          "book_id": 133,
          "author_id": 91
        },
        {
          "book_id": 134,
          "author_id": 92
        },
        {
          "book_id": 135,
          "author_id": 93
        },
        {
          "book_id": 136,
          "author_id": 94
        },
        {
          "book_id": 137,
          "author_id": 34
        },
        {
          "book_id": 138,
          "author_id": 95
        },
        {
          "book_id": 139,
          "author_id": 91
        },
        {
          "book_id": 140,
          "author_id": 97
        },
        {
          "book_id": 141,
          "author_id": 98
        },
        {
          "book_id": 142,
          "author_id": 99
        },
        {
          "book_id": 143,
          "author_id": 79
        },
        {
          "book_id": 144,
          "author_id": 100
        },
        {
          "book_id": 145,
          "author_id": 101
        },
        {
          "book_id": 146,
          "author_id": 102
        },
        {
          "book_id": 147,
          "author_id": 104
        },
        {
          "book_id": 148,
          "author_id": 71
        },
        {
          "book_id": 149,
          "author_id": 105
        },
        {
          "book_id": 150,
          "author_id": 106
        },
        {
          "book_id": 151,
          "author_id": 107
        },
        {
          "book_id": 152,
          "author_id": 108
        },
        {
          "book_id": 153,
          "author_id": 109
        },
        {
          "book_id": 154,
          "author_id": 110
        },
        {
          "book_id": 155,
          "author_id": 111
        },
        {
          "book_id": 156,
          "author_id": 112
        },
        {
          "book_id": 157,
          "author_id": 113
        },
        {
          "book_id": 158,
          "author_id": 114
        },
        {
          "book_id": 159,
          "author_id": 115
        },
        {
          "book_id": 160,
          "author_id": 116
        },
        {
          "book_id": 161,
          "author_id": 117
        },
        {
          "book_id": 162,
          "author_id": 118
        },
        {
          "book_id": 163,
          "author_id": 98
        },
        {
          "book_id": 164,
          "author_id": 120
        },
        {
          "book_id": 165,
          "author_id": 121
        },
        {
          "book_id": 166,
          "author_id": 123
        },
        {
          "book_id": 167,
          "author_id": 124
        },
        {
          "book_id": 168,
          "author_id": 125
        },
        {
          "book_id": 169,
          "author_id": 126
        },
        {
          "book_id": 170,
          "author_id": 118
        },
        {
          "book_id": 171,
          "author_id": 128
        },
        {
          "book_id": 172,
          "author_id": 129
        },
        {
          "book_id": 173,
          "author_id": 130
        },
        {
          "book_id": 174,
          "author_id": 131
        },
        {
          "book_id": 175,
          "author_id": 132
        },
        {
          "book_id": 176,
          "author_id": 133
        },
        {
          "book_id": 177,
          "author_id": 134
        },
        {
          "book_id": 178,
          "author_id": 135
        },
        {
          "book_id": 179,
          "author_id": 136
        },
        {
          "book_id": 180,
          "author_id": 137
        },
        {
          "book_id": 181,
          "author_id": 138
        },
        {
          "book_id": 182,
          "author_id": 34
        },
        {
          "book_id": 183,
          "author_id": 139
        },
        {
          "book_id": 184,
          "author_id": 140
        },
        {
          "book_id": 185,
          "author_id": 5
        },
        {
          "book_id": 186,
          "author_id": 142
        },
        {
          "book_id": 187,
          "author_id": 143
        },
        {
          "book_id": 188,
          "author_id": 144
        },
        {
          "book_id": 189,
          "author_id": 145
        },
        {
          "book_id": 190,
          "author_id": 146
        },
        {
          "book_id": 191,
          "author_id": 147
        },
        {
          "book_id": 192,
          "author_id": 148
        },
        {
          "book_id": 193,
          "author_id": 149
        },
        {
          "book_id": 194,
          "author_id": 150
        },
        {
          "book_id": 195,
          "author_id": 151
        },
        {
          "book_id": 196,
          "author_id": 152
        },
        {
          "book_id": 197,
          "author_id": 2
        },
        {
          "book_id": 197,
          "author_id": 3
        },
        {
          "book_id": 198,
          "author_id": 153
        },
        {
          "book_id": 199,
          "author_id": 154
        },
        {
          "book_id": 200,
          "author_id": 155
        },
        {
          "book_id": 201,
          "author_id": 156
        },
        {
          "book_id": 202,
          "author_id": 53
        },
        {
          "book_id": 203,
          "author_id": 157
        },
        {
          "book_id": 204,
          "author_id": 158
        },
        {
          "book_id": 205,
          "author_id": 160
        },
        {
          "book_id": 206,
          "author_id": 161
        },
        {
          "book_id": 207,
          "author_id": 162
        },
        {
          "book_id": 208,
          "author_id": 163
        },
        {
          "book_id": 209,
          "author_id": 164
        },
        {
          "book_id": 210,
          "author_id": 123
        },
        {
          "book_id": 211,
          "author_id": 87
        },
        {
          "book_id": 212,
          "author_id": 86
        },
        {
          "book_id": 213,
          "author_id": 167
        },
        {
          "book_id": 214,
          "author_id": 168
        },
        {
          "book_id": 215,
          "author_id": 169
        },
        {
          "book_id": 216,
          "author_id": 172
        },
        {
          "book_id": 217,
          "author_id": 173
        },
        {
          "book_id": 218,
          "author_id": 174
        },
        {
          "book_id": 219,
          "author_id": 165
        },
        {
          "book_id": 219,
          "author_id": 166
        },
        {
          "book_id": 220,
          "author_id": 175
        },
        {
          "book_id": 221,
          "author_id": 177
        },
        {
          "book_id": 222,
          "author_id": 178
        },
        {
          "book_id": 223,
          "author_id": 179
        },
        {
          "book_id": 224,
          "author_id": 181
        },
        {
          "book_id": 225,
          "author_id": 98
        },
        {
          "book_id": 226,
          "author_id": 183
        },
        {
          "book_id": 227,
          "author_id": 156
        },
        {
          "book_id": 228,
          "author_id": 184
        },
        {
          "book_id": 229,
          "author_id": 185
        },
        {
          "book_id": 230,
          "author_id": 186
        },
        {
          "book_id": 231,
          "author_id": 187
        },
        {
          "book_id": 232,
          "author_id": 188
        },
        {
          "book_id": 233,
          "author_id": 189
        },{
          "book_id": 234,
          "author_id": 190
        },
        {
          "book_id": 235,
          "author_id": 191
        },
        {
          "book_id": 236,
          "author_id": 192
        },
        {
          "book_id": 237,
          "author_id": 194
        },
        {
          "book_id": 238,
          "author_id": 195
        },
        {
          "book_id": 239,
          "author_id": 196
        },
        {
          "book_id": 240,
          "author_id": 197
        },
        {
          "book_id": 241,
          "author_id": 198
        },
        {
          "book_id": 242,
          "author_id": 199
        },
        {
          "book_id": 243,
          "author_id": 200
        },
        {
          "book_id": 244,
          "author_id": 19
        },
        {
          "book_id": 245,
          "author_id": 201
        },
        {
          "book_id": 246,
          "author_id": 4
        },
        {
          "book_id": 247,
          "author_id": 202
        },
        {
          "book_id": 248,
          "author_id": 203
        },
        {
          "book_id": 249,
          "author_id": 53
        },
        {
          "book_id": 250,
          "author_id": 204
        },
        {
          "book_id": 251,
          "author_id": 205
        },
        {
          "book_id": 252,
          "author_id": 206
        },
        {
          "book_id": 253,
          "author_id": 156
        },
        {
          "book_id": 254,
          "author_id": 207
        },
        {
          "book_id": 255,
          "author_id": 55
        },
        {
          "book_id": 256,
          "author_id": 209
        },
        {
          "book_id": 257,
          "author_id": 57
        },
        {
          "book_id": 258,
          "author_id": 210
        },
        {
          "book_id": 259,
          "author_id": 16
        },
        {
          "book_id": 260,
          "author_id": 211
        },
        {
          "book_id": 261,
          "author_id": 26
        },
        {
          "book_id": 262,
          "author_id": 105
        },
        {
          "book_id": 263,
          "author_id": 212
        },
        {
          "book_id": 264,
          "author_id": 137
        },
        {
          "book_id": 265,
          "author_id": 213
        },
        {
          "book_id": 266,
          "author_id": 214
        },
        {
          "book_id": 267,
          "author_id": 34
        },
        {
          "book_id": 268,
          "author_id": 149
        },
        {
          "book_id": 269,
          "author_id": 216
        },
        {
          "book_id": 270,
          "author_id": 218
        },
        {
          "book_id": 271,
          "author_id": 219
        },
        {
          "book_id": 272,
          "author_id": 165
        },
        {
          "book_id": 272,
          "author_id": 166
        },
        {
          "book_id": 273,
          "author_id": 220
        },
        {
          "book_id": 274,
          "author_id": 221
        },
        {
          "book_id": 275,
          "author_id": 222
        },
        {
          "book_id": 276,
          "author_id": 223
        },
        {
          "book_id": 277,
          "author_id": 224
        },
        {
          "book_id": 278,
          "author_id": 122
        },
        {
          "book_id": 279,
          "author_id": 226
        },
        {
          "book_id": 280,
          "author_id": 227
        },
        {
          "book_id": 281,
          "author_id": 228
        },
        {
          "book_id": 282,
          "author_id": 53
        },
        {
          "book_id": 283,
          "author_id": 39
        },
        {
          "book_id": 284,
          "author_id": 229
        },
        {
          "book_id": 285,
          "author_id": 230
        },
        {
          "book_id": 286,
          "author_id": 231
        },
        {
          "book_id": 287,
          "author_id": 178
        },
        {
          "book_id": 288,
          "author_id": 232
        },
        {
          "book_id": 289,
          "author_id": 233
        },
        {
          "book_id": 290,
          "author_id": 234
        },
        {
          "book_id": 291,
          "author_id": 235
        },
        {
          "book_id": 292,
          "author_id": 79
        },
        {
          "book_id": 293,
          "author_id": 236
        },
        {
          "book_id": 294,
          "author_id": 238
        },
        {
          "book_id": 295,
          "author_id": 119
        },
        {
          "book_id": 296,
          "author_id": 57
        },
        {
          "book_id": 297,
          "author_id": 239
        },
        {
          "book_id": 298,
          "author_id": 240
        },
        {
          "book_id": 299,
          "author_id": 26
        },
        {
          "book_id": 300,
          "author_id": 242
        },
        {
          "book_id": 301,
          "author_id": 243
        },
        {
          "book_id": 302,
          "author_id": 244
        },
        {
          "book_id": 303,
          "author_id": 245
        },
        {
          "book_id": 304,
          "author_id": 246
        },
        {
          "book_id": 305,
          "author_id": 247
        },
        {
          "book_id": 306,
          "author_id": 248
        },
        {
          "book_id": 307,
          "author_id": 249
        }
      ]);
    });
};
