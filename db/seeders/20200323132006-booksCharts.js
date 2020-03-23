'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      const contentCharts = [
          {
              ChartId: 1,
              BookId: 30
          },
          {
              ChartId: 1,
              BookId: 29
          },
          {
              ChartId: 1,
              BookId: 192
          },
          {
              ChartId: 1,
              BookId: 246
          },
          {
              ChartId: 1,
              BookId: 181
          },
          {
              ChartId: 1,
              BookId: 117
          },
          {
              ChartId: 1,
              BookId: 161
          },
          {
              ChartId: 1,
              BookId: 153
          },
          {
              ChartId: 1,
              BookId: 186
          },
          {
              ChartId: 1,
              BookId: 12
          },
          {
              ChartId: 1,
              BookId: 225
          },
          {
              ChartId: 1,
              BookId: 272
          },
          {
              ChartId: 1,
              BookId: 48
          },
          {
              ChartId: 1,
              BookId: 98
          },
          {
              ChartId: 1,
              BookId: 8
          },
          {
              ChartId: 2,
              BookId: 2
          },
          {
              ChartId: 2,
              BookId: 277
          },
          {
              ChartId: 2,
              BookId: 11
          },
          {
              ChartId: 2,
              BookId: 171
          },
          {
              ChartId: 2,
              BookId: 144
          },
          {
              ChartId: 2,
              BookId: 265
          },
          {
              ChartId: 2,
              BookId: 230
          },
          {
              ChartId: 2,
              BookId: 107
          },
          {
              ChartId: 2,
              BookId: 172
          },
          {
              ChartId: 2,
              BookId: 48
          },
          {
              ChartId: 2,
              BookId: 288
          },
          {
              ChartId: 2,
              BookId: 262
          },
          {
              ChartId: 2,
              BookId: 143
          },
          {
              ChartId: 2,
              BookId: 268
          },
          {
              ChartId: 2,
              BookId: 21
          },
          {
              ChartId: 2,
              BookId: 275
          },
          {
              ChartId: 2,
              BookId: 142
          },
          {
              ChartId: 2,
              BookId: 197
          },
          {
              ChartId: 2,
              BookId: 213
          },
          {
              ChartId: 2,
              BookId: 201
          },
          {
              ChartId: 2,
              BookId: 149
          },
          {
              ChartId: 2,
              BookId: 238
          },
          {
              ChartId: 2,
              BookId: 127
          },
          {
              ChartId: 2,
              BookId: 244
          },
          {
              ChartId: 2,
              BookId: 77
          },
          {
              ChartId: 2,
              BookId: 19
          },
          {
              ChartId: 2,
              BookId: 179
          },
          {
              ChartId: 2,
              BookId: 254
          },
          {
              ChartId: 2,
              BookId: 198
          },
          {
              ChartId: 2,
              BookId: 158
          },
          {
              ChartId: 2,
              BookId: 4
          },
          {
              ChartId: 2,
              BookId: 264
          },
          {
              ChartId: 2,
              BookId: 232
          },
          {
              ChartId: 2,
              BookId: 119
          },
          {
              ChartId: 2,
              BookId: 218
          },
          {
              ChartId: 2,
              BookId: 104
          },
          {
              ChartId: 2,
              BookId: 205
          },
          {
              ChartId: 2,
              BookId: 221
          },
          {
              ChartId: 2,
              BookId: 151
          },
          {
              ChartId: 2,
              BookId: 41
          },
          {
              ChartId: 2,
              BookId: 167
          },
          {
              ChartId: 2,
              BookId: 124
          },
          {
              ChartId: 2,
              BookId: 189
          },
          {
              ChartId: 2,
              BookId: 191
          },
          {
              ChartId: 2,
              BookId: 263
          },
          {
              ChartId: 2,
              BookId: 123
          },
          {
              ChartId: 2,
              BookId: 287
          },
          {
              ChartId: 2,
              BookId: 106
          },
          {
              ChartId: 2,
              BookId: 47
          },
          {
              ChartId: 2,
              BookId: 150
          },
          {
              ChartId: 2,
              BookId: 97
          },
          {
              ChartId: 2,
              BookId: 38
          },
          {
              ChartId: 2,
              BookId: 292
          },
          {
              ChartId: 2,
              BookId: 108
          },
          {
              ChartId: 2,
              BookId: 215
          },
          {
              ChartId: 2,
              BookId: 248
          },
          {
              ChartId: 2,
              BookId: 18
          },
          {
              ChartId: 2,
              BookId: 116
          },
          {
              ChartId: 2,
              BookId: 125
          },
          {
              ChartId: 2,
              BookId: 105
          },
          {
              ChartId: 2,
              BookId: 102
          },
          {
              ChartId: 2,
              BookId: 258
          },
          {
              ChartId: 2,
              BookId: 289
          },
          {
              ChartId: 2,
              BookId: 293
          },
          {
              ChartId: 2,
              BookId: 239
          },
          {
              ChartId: 2,
              BookId: 126
          },
          {
              ChartId: 2,
              BookId: 169
          },
          {
              ChartId: 2,
              BookId: 135
          },
          {
              ChartId: 2,
              BookId: 237
          },
          {
              ChartId: 2,
              BookId: 160
          },
          {
              ChartId: 2,
              BookId: 180
          },
          {
              ChartId: 2,
              BookId: 26
          },
          {
              ChartId: 2,
              BookId: 242
          },
          {
              ChartId: 2,
              BookId: 259
          },
          {
              ChartId: 2,
              BookId: 256
          },
          {
              ChartId: 2,
              BookId: 174
          },
          {
              ChartId: 2,
              BookId: 157
          },
          {
              ChartId: 2,
              BookId: 33
          },
          {
              ChartId: 2,
              BookId: 164
          },
          {
              ChartId: 2,
              BookId: 24
          },
          {
              ChartId: 3,
              BookId: 206
          },
          {
              ChartId: 3,
              BookId: 71
          },
          {
              ChartId: 3,
              BookId: 260
          },
          {
              ChartId: 3,
              BookId: 214
          },
          {
              ChartId: 3,
              BookId: 231
          },
          {
              ChartId: 3,
              BookId: 58
          },
          {
              ChartId: 3,
              BookId: 281
          },
          {
              ChartId: 3,
              BookId: 128
          },
          {
              ChartId: 3,
              BookId: 34
          },
          {
              ChartId: 3,
              BookId: 286
          },
          {
              ChartId: 3,
              BookId: 166
          },
          {
              ChartId: 3,
              BookId: 217
          },
          {
              ChartId: 3,
              BookId: 46
          },
          {
              ChartId: 3,
              BookId: 210
          },
          {
              ChartId: 3,
              BookId: 115
          },
          {
              ChartId: 3,
              BookId: 95
          },
          {
              ChartId: 4,
              BookId: 156
          },
          {
              ChartId: 4,
              BookId: 145
          },
          {
              ChartId: 4,
              BookId: 266
          },
          {
              ChartId: 4,
              BookId: 25
          },
          {
              ChartId: 4,
              BookId: 285
          },
          {
              ChartId: 4,
              BookId: 284
          },
          {
              ChartId: 5,
              BookId: 6
          },
          {
              ChartId: 5,
              BookId: 42
          },
          {
              ChartId: 5,
              BookId: 60
          },
          {
              ChartId: 5,
              BookId: 50
          },
          {
              ChartId: 5,
              BookId: 101
          },
          {
              ChartId: 5,
              BookId: 163
          },
          {
              ChartId: 5,
              BookId: 89
          },
          {
              ChartId: 5,
              BookId: 195
          },
          {
              ChartId: 5,
              BookId: 22
          },
          {
              ChartId: 5,
              BookId: 249
          },
          {
              ChartId: 5,
              BookId: 28
          },
          {
              ChartId: 5,
              BookId: 159
          },
          {
              ChartId: 5,
              BookId: 69
          },
          {
              ChartId: 5,
              BookId: 152
          },
          {
              ChartId: 5,
              BookId: 261
          },
          {
              ChartId: 6,
              BookId: 291
          },
          {
              ChartId: 6,
              BookId: 63
          },
          {
              ChartId: 6,
              BookId: 130
          },
          {
              ChartId: 6,
              BookId: 266
          },
          {
              ChartId: 6,
              BookId: 88
          },
          {
              ChartId: 6,
              BookId: 111
          },
          {
              ChartId: 6,
              BookId: 90
          },
          {
              ChartId: 6,
              BookId: 226
          },
          {
              ChartId: 6,
              BookId: 31
          },
          {
              ChartId: 6,
              BookId: 173
          },
          {
              ChartId: 6,
              BookId: 190
          },
          {
              ChartId: 6,
              BookId: 223
          },
          {
              ChartId: 6,
              BookId: 273
          },
          {
              ChartId: 6,
              BookId: 3
          },
          {
              ChartId: 6,
              BookId: 10
          },
          {
              ChartId: 6,
              BookId: 199
          },
          {
              ChartId: 6,
              BookId: 35
          },
          {
              ChartId: 6,
              BookId: 269
          },
          {
              ChartId: 6,
              BookId: 122
          },
          {
              ChartId: 6,
              BookId: 100
          },
          {
              ChartId: 6,
              BookId: 185
          },
          {
              ChartId: 7,
              BookId: 92
          },
          {
              ChartId: 7,
              BookId: 243
          },
          {
              ChartId: 7,
              BookId: 283
          },
          {
              ChartId: 7,
              BookId: 133
          },
          {
              ChartId: 7,
              BookId: 139
          },
          {
              ChartId: 7,
              BookId: 20
          },
          {
              ChartId: 7,
              BookId: 44
          },
          {
              ChartId: 7,
              BookId: 165
          },
          {
              ChartId: 7,
              BookId: 187
          },
          {
              ChartId: 7,
              BookId: 229
          },
          {
              ChartId: 7,
              BookId: 233
          },
          {
              ChartId: 7,
              BookId: 17
          },
          {
              ChartId: 8,
              BookId: 224
          },
          {
              ChartId: 8,
              BookId: 138
          },
          {
              ChartId: 8,
              BookId: 78
          },
          {
              ChartId: 8,
              BookId: 193
          },
          {
              ChartId: 8,
              BookId: 96
          },
          {
              ChartId: 8,
              BookId: 60
          },
          {
              ChartId: 8,
              BookId: 266
          },
          {
              ChartId: 8,
              BookId: 52
          },
          {
              ChartId: 8,
              BookId: 146
          },
          {
              ChartId: 8,
              BookId: 15
          },
          {
              ChartId: 8,
              BookId: 112
          },
          {
              ChartId: 8,
              BookId: 250
          },
          {
              ChartId: 8,
              BookId: 9
          },
          {
              ChartId: 8,
              BookId: 270
          },
          {
              ChartId: 8,
              BookId: 109
          },
          {
              ChartId: 9,
              BookId: 2
          },
          {
              ChartId: 9,
              BookId: 60
          },
          {
              ChartId: 9,
              BookId: 271
          },
          {
              ChartId: 9,
              BookId: 129
          },
          {
              ChartId: 9,
              BookId: 267
          },
          {
              ChartId: 9,
              BookId: 67
          },
          {
              ChartId: 9,
              BookId: 170
          },
          {
              ChartId: 9,
              BookId: 274
          },
          {
              ChartId: 9,
              BookId: 57
          },
          {
              ChartId: 10,
              BookId: 77
          },
          {
              ChartId: 10,
              BookId: 29
          },
          {
              ChartId: 10,
              BookId: 39
          },
          {
              ChartId: 10,
              BookId: 80
          },
          {
              ChartId: 10,
              BookId: 81
          },
          {
              ChartId: 10,
              BookId: 60
          },
          {
              ChartId: 10,
              BookId: 58
          },
          {
              ChartId: 10,
              BookId: 67
          },
          {
              ChartId: 10,
              BookId: 69
          },
          {
              ChartId: 10,
              BookId: 64
          },
          {
              ChartId: 11,
              BookId: 216
          },
          {
              ChartId: 11,
              BookId: 147
          },
          {
              ChartId: 11,
              BookId: 196
          },
          {
              ChartId: 11,
              BookId: 234
          },
          {
              ChartId: 11,
              BookId: 140
          },
          {
              ChartId: 11,
              BookId: 36
          },
          {
              ChartId: 11,
              BookId: 235
          },
          {
              ChartId: 11,
              BookId: 208
          },
          {
              ChartId: 11,
              BookId: 212
          },
          {
              ChartId: 11,
              BookId: 245
          },
          {
              ChartId: 12,
              BookId: 60
          },
          {
              ChartId: 12,
              BookId: 70
          },
          {
              ChartId: 12,
              BookId: 58
          },
          {
              ChartId: 12,
              BookId: 61
          },
          {
              ChartId: 12,
              BookId: 23
          },
          {
              ChartId: 12,
              BookId: 72
          },
          {
              ChartId: 12,
              BookId: 67
          },
          {
              ChartId: 12,
              BookId: 43
          },
          {
              ChartId: 12,
              BookId: 155
          },
          {
              ChartId: 12,
              BookId: 267
          },
          {
              ChartId: 12,
              BookId: 175
          },
          {
              ChartId: 12,
              BookId: 69
          },
          {
              ChartId: 12,
              BookId: 28
          },
          {
              ChartId: 12,
              BookId: 182
          },
          {
              ChartId: 12,
              BookId: 99
          },
          {
              ChartId: 12,
              BookId: 53
          },
          {
              ChartId: 12,
              BookId: 77
          },
          {
              ChartId: 12,
              BookId: 249
          },
          {
              ChartId: 12,
              BookId: 115
          },
          {
              ChartId: 12,
              BookId: 1
          },
          {
              ChartId: 12,
              BookId: 34
          },
          {
              ChartId: 12,
              BookId: 93
          },
          {
              ChartId: 12,
              BookId: 91
          },
          {
              ChartId: 12,
              BookId: 219
          },
          {
              ChartId: 12,
              BookId: 181
          },
          {
              ChartId: 12,
              BookId: 227
          },
          {
              ChartId: 12,
              BookId: 103
          },
          {
              ChartId: 12,
              BookId: 141
          },
          {
              ChartId: 12,
              BookId: 274
          },
          {
              ChartId: 12,
              BookId: 39
          },
          {
              ChartId: 12,
              BookId: 117
          },
          {
              ChartId: 12,
              BookId: 280
          },
          {
              ChartId: 12,
              BookId: 66
          },
          {
              ChartId: 12,
              BookId: 287
          },
          {
              ChartId: 12,
              BookId: 241
          },
          {
              ChartId: 12,
              BookId: 59
          },
          {
              ChartId: 12,
              BookId: 251
          },
          {
              ChartId: 12,
              BookId: 255
          },
          {
              ChartId: 12,
              BookId: 188
          },
          {
              ChartId: 12,
              BookId: 209
          },
          {
              ChartId: 12,
              BookId: 200
          },
          {
              ChartId: 12,
              BookId: 176
          },
          {
              ChartId: 12,
              BookId: 5
          },
          {
              ChartId: 12,
              BookId: 273
          },
          {
              ChartId: 12,
              BookId: 30
          },
          {
              ChartId: 12,
              BookId: 207
          },
          {
              ChartId: 12,
              BookId: 29
          },
          {
              ChartId: 12,
              BookId: 37
          },
          {
              ChartId: 12,
              BookId: 50
          },
          {
              ChartId: 12,
              BookId: 2
          },
          {
              ChartId: 12,
              BookId: 132
          },
          {
              ChartId: 12,
              BookId: 101
          },
          {
              ChartId: 12,
              BookId: 253
          },
          {
              ChartId: 12,
              BookId: 42
          },
          {
              ChartId: 12,
              BookId: 81
          },
          {
              ChartId: 12,
              BookId: 184
          },
          {
              ChartId: 12,
              BookId: 84
          },
          {
              ChartId: 12,
              BookId: 202
          },
          {
              ChartId: 12,
              BookId: 282
          },
          {
              ChartId: 12,
              BookId: 163
          },
          {
              ChartId: 12,
              BookId: 64
          },
          {
              ChartId: 12,
              BookId: 279
          },
          {
              ChartId: 12,
              BookId: 134
          },
          {
              ChartId: 12,
              BookId: 194
          },
          {
              ChartId: 12,
              BookId: 148
          },
          {
              ChartId: 12,
              BookId: 32
          },
          {
              ChartId: 12,
              BookId: 285
          },
          {
              ChartId: 12,
              BookId: 7
          },
          {
              ChartId: 12,
              BookId: 120
          },
          {
              ChartId: 12,
              BookId: 261
          },
          {
              ChartId: 12,
              BookId: 136
          },
          {
              ChartId: 12,
              BookId: 162
          },
          {
              ChartId: 12,
              BookId: 222
          },
          {
              ChartId: 12,
              BookId: 13
          },
          {
              ChartId: 12,
              BookId: 183
          },
          {
              ChartId: 12,
              BookId: 177
          },
          {
              ChartId: 12,
              BookId: 220
          },
          {
              ChartId: 12,
              BookId: 290
          },
          {
              ChartId: 12,
              BookId: 271
          },
          {
              ChartId: 12,
              BookId: 49
          },
          {
              ChartId: 12,
              BookId: 85
          },
          {
              ChartId: 12,
              BookId: 240
          },
          {
              ChartId: 12,
              BookId: 203
          },
          {
              ChartId: 12,
              BookId: 113
          },
          {
              ChartId: 12,
              BookId: 118
          },
          {
              ChartId: 12,
              BookId: 154
          },
          {
              ChartId: 12,
              BookId: 45
          },
          {
              ChartId: 12,
              BookId: 40
          },
          {
              ChartId: 12,
              BookId: 145
          },
          {
              ChartId: 12,
              BookId: 110
          },
          {
              ChartId: 12,
              BookId: 211
          },
          {
              ChartId: 12,
              BookId: 193
          },
          {
              ChartId: 12,
              BookId: 83
          },
          {
              ChartId: 12,
              BookId: 62
          },
          {
              ChartId: 12,
              BookId: 168
          },
          {
              ChartId: 12,
              BookId: 204
          },
          {
              ChartId: 12,
              BookId: 14
          },
          {
              ChartId: 12,
              BookId: 9
          },
          {
              ChartId: 12,
              BookId: 27
          },
          {
              ChartId: 13,
              BookId: 56
          },
          {
              ChartId: 13,
              BookId: 55
          },
          {
              ChartId: 13,
              BookId: 75
          },
          {
              ChartId: 13,
              BookId: 62
          },
          {
              ChartId: 13,
              BookId: 68
          },
          {
              ChartId: 13,
              BookId: 78
          },
          {
              ChartId: 13,
              BookId: 79
          },
          {
              ChartId: 14,
              BookId: 27
          },
          {
              ChartId: 14,
              BookId: 273
          },
          {
              ChartId: 14,
              BookId: 43
          },
          {
              ChartId: 14,
              BookId: 84
          },
          {
              ChartId: 14,
              BookId: 81
          },
          {
              ChartId: 14,
              BookId: 182
          },
          {
              ChartId: 14,
              BookId: 94
          },
          {
              ChartId: 14,
              BookId: 91
          },
          {
              ChartId: 14,
              BookId: 137
          },
          {
              ChartId: 14,
              BookId: 58
          },
          {
              ChartId: 14,
              BookId: 50
          },
          {
              ChartId: 14,
              BookId: 257
          },
          {
              ChartId: 14,
              BookId: 267
          },
          {
              ChartId: 14,
              BookId: 166
          },
          {
              ChartId: 14,
              BookId: 121
          },
          {
              ChartId: 14,
              BookId: 13
          },
          {
              ChartId: 14,
              BookId: 101
          },
          {
              ChartId: 14,
              BookId: 152
          },
          {
              ChartId: 14,
              BookId: 29
          },
          {
              ChartId: 14,
              BookId: 16
          },
          {
              ChartId: 14,
              BookId: 278
          },
          {
              ChartId: 14,
              BookId: 71
          },
          {
              ChartId: 14,
              BookId: 87
          },
          {
              ChartId: 14,
              BookId: 34
          },
          {
              ChartId: 14,
              BookId: 67
          },
          {
              ChartId: 15,
              BookId: 54
          },
          {
              ChartId: 15,
              BookId: 86
          },
          {
              ChartId: 15,
              BookId: 73
          },
          {
              ChartId: 15,
              BookId: 82
          },
          {
              ChartId: 15,
              BookId: 51
          },
          {
              ChartId: 16,
              BookId: 131
          },
          {
              ChartId: 16,
              BookId: 155
          },
          {
              ChartId: 16,
              BookId: 53
          },
          {
              ChartId: 16,
              BookId: 40
          },
          {
              ChartId: 16,
              BookId: 65
          },
          {
              ChartId: 16,
              BookId: 276
          },
          {
              ChartId: 16,
              BookId: 273
          },
          {
              ChartId: 16,
              BookId: 74
          },
          {
              ChartId: 16,
              BookId: 178
          },
          {
              ChartId: 16,
              BookId: 252
          },
          {
              ChartId: 16,
              BookId: 142
          },
          {
              ChartId: 16,
              BookId: 2
          },
          {
              ChartId: 16,
              BookId: 5
          },
          {
              ChartId: 16,
              BookId: 117
          },
          {
              ChartId: 16,
              BookId: 236
          },
          {
              ChartId: 16,
              BookId: 76
          },
          {
              ChartId: 16,
              BookId: 228
          },
          {
              ChartId: 16,
              BookId: 72
          },
          {
              ChartId: 16,
              BookId: 114
          }
      ];

      const resultCharts = contentCharts.map(item => {
          item.createdAt = new Date();
          item.updatedAt = new Date();
          return item;
      });


      return queryInterface.bulkInsert('booksCharts', resultCharts, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('booksCharts', null, {});
  }
};
