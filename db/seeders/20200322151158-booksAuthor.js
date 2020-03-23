'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      const content = [
          {
              BookId: 1,
              AuthorId: 1
          },
          {
              BookId: 2,
              AuthorId: 2,
          },
          {
              BookId: 2,
              AuthorId: 3,
          },
          {
              BookId: 3,
              AuthorId: 6
          },
          {
              BookId: 4,
              AuthorId: 11
          },
          {
              BookId: 5,
              AuthorId: 13
          },
          {
              BookId: 6,
              AuthorId: 14
          },
          {
              BookId: 7,
              AuthorId: 15
          },
          {
              BookId: 8,
              AuthorId: 16
          },
          {
              BookId: 9,
              AuthorId: 17
          },
          {
              BookId: 10,
              AuthorId: 20
          },
          {
              BookId: 11,
              AuthorId: 22
          },
          {
              BookId: 12,
              AuthorId: 24
          },
          {
              BookId: 13,
              AuthorId: 26
          },
          {
              BookId: 14,
              AuthorId: 27
          },
          {
              BookId: 15,
              AuthorId: 30
          },
          {
              BookId: 15,
              AuthorId: 31
          },
          {
              BookId: 16,
              AuthorId: 34
          },
          {
              BookId: 17,
              AuthorId: 36
          },
          {
              BookId: 18,
              AuthorId: 37
          },
          {
              BookId: 19,
              AuthorId: 24
          },
          {
              BookId: 20,
              AuthorId: 39
          },
          {
              BookId: 21,
              AuthorId: 40
          },
          {
              BookId: 22,
              AuthorId: 42
          },
          {
              BookId: 23,
              AuthorId: 43
          },
          {
              BookId: 24,
              AuthorId: 44
          },
          {
              BookId: 25,
              AuthorId: 46
          },
          {
              BookId: 26,
              AuthorId: 47
          },
          {
              BookId: 27,
              AuthorId: 48
          },
          {
              BookId: 28,
              AuthorId: 49
          },
          {
              BookId: 29,
              AuthorId: 4
          },
          {
              BookId: 30,
              AuthorId: 5
          },
          {
              BookId: 31,
              AuthorId: 7
          },
          {
              BookId: 32,
              AuthorId: 8
          },
          {
              BookId: 33,
              AuthorId: 9
          },
          {
              BookId: 34,
              AuthorId: 10
          },
          {
              BookId: 35,
              AuthorId: 12
          },
          {
              BookId: 36,
              AuthorId: 18
          },
          {
              BookId: 37,
              AuthorId: 19
          },
          {
              BookId: 38,
              AuthorId: 21
          },
          {
              BookId: 39,
              AuthorId: 23
          },
          {
              BookId: 40,
              AuthorId: 25
          },
          {
              BookId: 41,
              AuthorId: 28
          },
          {
              BookId: 42,
              AuthorId: 29
          },
          {
              BookId: 43,
              AuthorId: 32
          },
          {
              BookId: 44,
              AuthorId: 33
          },
          {
              BookId: 45,
              AuthorId: 14
          },
          {
              BookId: 46,
              AuthorId: 35
          },
          {
              BookId: 47,
              AuthorId: 38
          },
          {
              BookId: 48,
              AuthorId: 40
          },
          {
              BookId: 49,
              AuthorId: 41
          },
          {
              BookId: 50,
              AuthorId: 45
          },
          {
              BookId: 51,
              AuthorId: 65
          },
          {
              BookId: 52,
              AuthorId: 70
          },
          {
              BookId: 53,
              AuthorId: 16
          },
          {
              BookId: 54,
              AuthorId: 89
          },
          {
              BookId: 55,
              AuthorId: 96
          },
          {
              BookId: 56,
              AuthorId: 96
          },
          {
              BookId: 57,
              AuthorId: 119
          },
          {
              BookId: 58,
              AuthorId: 122
          },
          {
              BookId: 59,
              AuthorId: 5
          },
          {
              BookId: 60,
              AuthorId: 127
          },
          {
              BookId: 61,
              AuthorId: 141
          },
          {
              BookId: 62,
              AuthorId: 96
          },
          {
              BookId: 63,
              AuthorId: 16
          },
          {
              BookId: 64,
              AuthorId: 165
          },
          {
              BookId: 64,
              AuthorId: 166
          },
          {
              BookId: 65,
              AuthorId: 16
          },
          {
              BookId: 66,
              AuthorId: 171
          },
          {
              BookId: 67,
              AuthorId: 176
          },
          {
              BookId: 68,
              AuthorId: 96
          },
          {
              BookId: 69,
              AuthorId: 180
          },
          {
              BookId: 70,
              AuthorId: 90
          },
          {
              BookId: 71,
              AuthorId: 182
          },
          {
              BookId: 72,
              AuthorId: 21
          },
          {
              BookId: 73,
              AuthorId: 193
          },
          {
              BookId: 74,
              AuthorId: 16
          },
          {
              BookId: 75,
              AuthorId: 96
          },
          {
              BookId: 76,
              AuthorId: 127
          },
          {
              BookId: 77,
              AuthorId: 208
          },
          {
              BookId: 78,
              AuthorId: 96
          },
          {
              BookId: 79,
              AuthorId: 96
          },
          {
              BookId: 80,
              AuthorId: 48
          },
          {
              BookId: 81,
              AuthorId: 34
          },
          {
              BookId: 82,
              AuthorId: 215
          },
          {
              BookId: 83,
              AuthorId: 16
          },
          {
              BookId: 84,
              AuthorId: 217
          },
          {
              BookId: 85,
              AuthorId: 225
          },{
              BookId: 86,
              AuthorId: 237
          },
          {
              BookId: 87,
              AuthorId: 57
          },
          {
              BookId: 88,
              AuthorId: 52
          },
          {
              BookId: 89,
              AuthorId: 71
          },
          {
              BookId: 90,
              AuthorId: 103
          },
          {
              BookId: 91,
              AuthorId: 19
          },
          {
              BookId: 92,
              AuthorId: 159
          },
          {
              BookId: 93,
              AuthorId: 156
          },
          {
              BookId: 94,
              AuthorId: 50
          },
          {
              BookId: 95,
              AuthorId: 51
          },
          {
              BookId: 96,
              AuthorId: 52
          },{
              BookId: 97,
              AuthorId: 53
          },
          {
              BookId: 98,
              AuthorId: 54
          },
          {
              BookId: 99,
              AuthorId: 55
          },
          {
              BookId: 100,
              AuthorId: 56
          },
          {
              BookId: 101,
              AuthorId: 58
          },
          {
              BookId: 102,
              AuthorId: 59
          },
          {
              BookId: 103,
              AuthorId: 60
          },
          {
              BookId: 104,
              AuthorId: 241
          },
          {
              BookId: 105,
              AuthorId: 62
          },
          {
              BookId: 106,
              AuthorId: 63
          },
          {
              BookId: 107,
              AuthorId: 64
          },
          {
              BookId: 108,
              AuthorId: 66
          },
          {
              BookId: 109,
              AuthorId: 16
          },
          {
              BookId: 110,
              AuthorId: 67
          },
          {
              BookId: 111,
              AuthorId: 68
          },
          {
              BookId: 112,
              AuthorId: 69
          },
          {
              BookId: 113,
              AuthorId: 72
          },
          {
              BookId: 114,
              AuthorId: 38
          },
          {
              BookId: 115,
              AuthorId: 73
          },
          {
              BookId: 116,
              AuthorId: 74
          },
          {
              BookId: 117,
              AuthorId: 75
          },
          {
              BookId: 118,
              AuthorId: 76
          },
          {
              BookId: 119,
              AuthorId: 77
          },
          {
              BookId: 120,
              AuthorId: 78
          },
          {
              BookId: 121,
              AuthorId: 79
          },
          {
              BookId: 122,
              AuthorId: 80
          },
          {
              BookId: 123,
              AuthorId: 81
          },
          {
              BookId: 124,
              AuthorId: 82
          },
          {
              BookId: 125,
              AuthorId: 83
          },
          {
              BookId: 126,
              AuthorId: 84
          },
          {
              BookId: 127,
              AuthorId: 85
          },
          {
              BookId: 128,
              AuthorId: 86
          },
          {
              BookId: 129,
              AuthorId: 2
          },
          {
              BookId: 129,
              AuthorId: 3
          },
          {
              BookId: 130,
              AuthorId: 87
          },
          {
              BookId: 131,
              AuthorId: 88
          },
          {
              BookId: 132,
              AuthorId: 90
          },
          {
              BookId: 133,
              AuthorId: 91
          },
          {
              BookId: 134,
              AuthorId: 92
          },
          {
              BookId: 135,
              AuthorId: 93
          },
          {
              BookId: 136,
              AuthorId: 94
          },
          {
              BookId: 137,
              AuthorId: 34
          },
          {
              BookId: 138,
              AuthorId: 95
          },
          {
              BookId: 139,
              AuthorId: 91
          },
          {
              BookId: 140,
              AuthorId: 97
          },
          {
              BookId: 141,
              AuthorId: 98
          },
          {
              BookId: 142,
              AuthorId: 99
          },
          {
              BookId: 143,
              AuthorId: 79
          },
          {
              BookId: 144,
              AuthorId: 100
          },
          {
              BookId: 145,
              AuthorId: 101
          },
          {
              BookId: 146,
              AuthorId: 102
          },
          {
              BookId: 147,
              AuthorId: 104
          },
          {
              BookId: 148,
              AuthorId: 71
          },
          {
              BookId: 149,
              AuthorId: 105
          },
          {
              BookId: 150,
              AuthorId: 106
          },
          {
              BookId: 151,
              AuthorId: 107
          },
          {
              BookId: 152,
              AuthorId: 108
          },
          {
              BookId: 153,
              AuthorId: 109
          },
          {
              BookId: 154,
              AuthorId: 110
          },
          {
              BookId: 155,
              AuthorId: 111
          },
          {
              BookId: 156,
              AuthorId: 112
          },
          {
              BookId: 157,
              AuthorId: 113
          },
          {
              BookId: 158,
              AuthorId: 114
          },
          {
              BookId: 159,
              AuthorId: 115
          },
          {
              BookId: 160,
              AuthorId: 116
          },
          {
              BookId: 161,
              AuthorId: 117
          },
          {
              BookId: 162,
              AuthorId: 118
          },
          {
              BookId: 163,
              AuthorId: 98
          },
          {
              BookId: 164,
              AuthorId: 120
          },
          {
              BookId: 165,
              AuthorId: 121
          },
          {
              BookId: 166,
              AuthorId: 123
          },
          {
              BookId: 167,
              AuthorId: 124
          },
          {
              BookId: 168,
              AuthorId: 125
          },
          {
              BookId: 169,
              AuthorId: 126
          },
          {
              BookId: 170,
              AuthorId: 118
          },
          {
              BookId: 171,
              AuthorId: 128
          },
          {
              BookId: 172,
              AuthorId: 129
          },
          {
              BookId: 173,
              AuthorId: 130
          },
          {
              BookId: 174,
              AuthorId: 131
          },
          {
              BookId: 175,
              AuthorId: 132
          },
          {
              BookId: 176,
              AuthorId: 133
          },
          {
              BookId: 177,
              AuthorId: 134
          },
          {
              BookId: 178,
              AuthorId: 135
          },
          {
              BookId: 179,
              AuthorId: 136
          },
          {
              BookId: 180,
              AuthorId: 137
          },
          {
              BookId: 181,
              AuthorId: 138
          },
          {
              BookId: 182,
              AuthorId: 34
          },
          {
              BookId: 183,
              AuthorId: 139
          },
          {
              BookId: 184,
              AuthorId: 140
          },
          {
              BookId: 185,
              AuthorId: 5
          },
          {
              BookId: 186,
              AuthorId: 142
          },
          {
              BookId: 187,
              AuthorId: 143
          },
          {
              BookId: 188,
              AuthorId: 144
          },
          {
              BookId: 189,
              AuthorId: 145
          },
          {
              BookId: 190,
              AuthorId: 146
          },
          {
              BookId: 191,
              AuthorId: 147
          },
          {
              BookId: 192,
              AuthorId: 148
          },
          {
              BookId: 193,
              AuthorId: 149
          },
          {
              BookId: 194,
              AuthorId: 150
          },
          {
              BookId: 195,
              AuthorId: 151
          },
          {
              BookId: 196,
              AuthorId: 152
          },
          {
              BookId: 197,
              AuthorId: 2
          },
          {
              BookId: 197,
              AuthorId: 3
          },
          {
              BookId: 198,
              AuthorId: 153
          },
          {
              BookId: 199,
              AuthorId: 154
          },
          {
              BookId: 200,
              AuthorId: 155
          },
          {
              BookId: 201,
              AuthorId: 156
          },
          {
              BookId: 202,
              AuthorId: 53
          },
          {
              BookId: 203,
              AuthorId: 157
          },
          {
              BookId: 204,
              AuthorId: 158
          },
          {
              BookId: 205,
              AuthorId: 160
          },
          {
              BookId: 206,
              AuthorId: 161
          },
          {
              BookId: 207,
              AuthorId: 162
          },
          {
              BookId: 208,
              AuthorId: 163
          },
          {
              BookId: 209,
              AuthorId: 164
          },
          {
              BookId: 210,
              AuthorId: 123
          },
          {
              BookId: 211,
              AuthorId: 87
          },
          {
              BookId: 212,
              AuthorId: 86
          },
          {
              BookId: 213,
              AuthorId: 167
          },
          {
              BookId: 214,
              AuthorId: 168
          },
          {
              BookId: 215,
              AuthorId: 169
          },
          {
              BookId: 216,
              AuthorId: 172
          },
          {
              BookId: 217,
              AuthorId: 173
          },
          {
              BookId: 218,
              AuthorId: 174
          },
          {
              BookId: 219,
              AuthorId: 165
          },
          {
              BookId: 219,
              AuthorId: 166
          },
          {
              BookId: 220,
              AuthorId: 175
          },
          {
              BookId: 221,
              AuthorId: 177
          },
          {
              BookId: 222,
              AuthorId: 178
          },
          {
              BookId: 223,
              AuthorId: 179
          },
          {
              BookId: 224,
              AuthorId: 181
          },
          {
              BookId: 225,
              AuthorId: 98
          },
          {
              BookId: 226,
              AuthorId: 183
          },
          {
              BookId: 227,
              AuthorId: 156
          },
          {
              BookId: 228,
              AuthorId: 184
          },
          {
              BookId: 229,
              AuthorId: 185
          },
          {
              BookId: 230,
              AuthorId: 186
          },
          {
              BookId: 231,
              AuthorId: 187
          },
          {
              BookId: 232,
              AuthorId: 188
          },
          {
              BookId: 233,
              AuthorId: 189
          },{
              BookId: 234,
              AuthorId: 190
          },
          {
              BookId: 235,
              AuthorId: 191
          },
          {
              BookId: 236,
              AuthorId: 192
          },
          {
              BookId: 237,
              AuthorId: 194
          },
          {
              BookId: 238,
              AuthorId: 195
          },
          {
              BookId: 239,
              AuthorId: 196
          },
          {
              BookId: 240,
              AuthorId: 197
          },
          {
              BookId: 241,
              AuthorId: 198
          },
          {
              BookId: 242,
              AuthorId: 199
          },
          {
              BookId: 243,
              AuthorId: 200
          },
          {
              BookId: 244,
              AuthorId: 19
          },
          {
              BookId: 245,
              AuthorId: 201
          },
          {
              BookId: 246,
              AuthorId: 4
          },
          {
              BookId: 247,
              AuthorId: 202
          },
          {
              BookId: 248,
              AuthorId: 203
          },
          {
              BookId: 249,
              AuthorId: 53
          },
          {
              BookId: 250,
              AuthorId: 204
          },
          {
              BookId: 251,
              AuthorId: 205
          },
          {
              BookId: 252,
              AuthorId: 206
          },
          {
              BookId: 253,
              AuthorId: 156
          },
          {
              BookId: 254,
              AuthorId: 207
          },
          {
              BookId: 255,
              AuthorId: 55
          },
          {
              BookId: 256,
              AuthorId: 209
          },
          {
              BookId: 257,
              AuthorId: 57
          },
          {
              BookId: 258,
              AuthorId: 210
          },
          {
              BookId: 259,
              AuthorId: 16
          },
          {
              BookId: 260,
              AuthorId: 211
          },
          {
              BookId: 261,
              AuthorId: 26
          },
          {
              BookId: 262,
              AuthorId: 105
          },
          {
              BookId: 263,
              AuthorId: 212
          },
          {
              BookId: 264,
              AuthorId: 137
          },
          {
              BookId: 265,
              AuthorId: 213
          },
          {
              BookId: 266,
              AuthorId: 214
          },
          {
              BookId: 267,
              AuthorId: 34
          },
          {
              BookId: 268,
              AuthorId: 149
          },
          {
              BookId: 269,
              AuthorId: 216
          },
          {
              BookId: 270,
              AuthorId: 218
          },
          {
              BookId: 271,
              AuthorId: 219
          },
          {
              BookId: 272,
              AuthorId: 165
          },
          {
              BookId: 272,
              AuthorId: 166
          },
          {
              BookId: 273,
              AuthorId: 220
          },
          {
              BookId: 274,
              AuthorId: 221
          },
          {
              BookId: 275,
              AuthorId: 222
          },
          {
              BookId: 276,
              AuthorId: 223
          },
          {
              BookId: 277,
              AuthorId: 224
          },
          {
              BookId: 278,
              AuthorId: 122
          },
          {
              BookId: 279,
              AuthorId: 226
          },
          {
              BookId: 280,
              AuthorId: 227
          },
          {
              BookId: 281,
              AuthorId: 228
          },
          {
              BookId: 282,
              AuthorId: 53
          },
          {
              BookId: 283,
              AuthorId: 39
          },
          {
              BookId: 284,
              AuthorId: 229
          },
          {
              BookId: 285,
              AuthorId: 230
          },
          {
              BookId: 286,
              AuthorId: 231
          },
          {
              BookId: 287,
              AuthorId: 178
          },
          {
              BookId: 288,
              AuthorId: 232
          },
          {
              BookId: 289,
              AuthorId: 233
          },
          {
              BookId: 290,
              AuthorId: 234
          },
          {
              BookId: 291,
              AuthorId: 235
          },
          {
              BookId: 292,
              AuthorId: 79
          },
          {
              BookId: 293,
              AuthorId: 236
          },
          {
              BookId: 294,
              AuthorId: 238
          },
          {
              BookId: 295,
              AuthorId: 119
          },
          {
              BookId: 296,
              AuthorId: 57
          },
          {
              BookId: 297,
              AuthorId: 239
          },
          {
              BookId: 298,
              AuthorId: 240
          },
          {
              BookId: 299,
              AuthorId: 26
          }
      ];

      const result = content.map(item => {
          item.createdAt = new Date();
          item.updatedAt = new Date();
          return item;
      });

      return queryInterface.bulkInsert('booksAuthor', result, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('booksAuthor', null, {});
  }
};
