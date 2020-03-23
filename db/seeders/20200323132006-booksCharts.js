'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      const contentCharts = [
          {
              ChartId: 1,
              books: 30
          },
          {
              ChartId: 1,
              books: 29
          },
          {
              ChartId: 1,
              books: 192
          },
          {
              ChartId: 1,
              books: 246
          },
          {
              ChartId: 1,
              books: 181
          },
          {
              ChartId: 1,
              books: 117
          },
          {
              ChartId: 1,
              books: 161
          },
          {
              ChartId: 1,
              books: 153
          },
          {
              ChartId: 1,
              books: 186
          },
          {
              ChartId: 1,
              books: 12
          },
          {
              ChartId: 1,
              books: 225
          },
          {
              ChartId: 1,
              books: 272
          },
          {
              ChartId: 1,
              books: 48
          },
          {
              ChartId: 1,
              books: 98
          },
          {
              ChartId: 1,
              books: 8
          },
          {
              ChartId: 2,
              books: 2
          },
          {
              ChartId: 2,
              books: 277
          },
          {
              ChartId: 2,
              books: 11
          },
          {
              ChartId: 2,
              books: 171
          },
          {
              ChartId: 2,
              books: 144
          },
          {
              ChartId: 2,
              books: 265
          },
          {
              ChartId: 2,
              books: 230
          },
          {
              ChartId: 2,
              books: 107
          },
          {
              ChartId: 2,
              books: 172
          },
          {
              ChartId: 2,
              books: 48
          },
          {
              ChartId: 2,
              books: 288
          },
          {
              ChartId: 2,
              books: 262
          },
          {
              ChartId: 2,
              books: 143
          },
          {
              ChartId: 2,
              books: 268
          },
          {
              ChartId: 2,
              books: 21
          },
          {
              ChartId: 2,
              books: 275
          },
          {
              ChartId: 2,
              books: 142
          },
          {
              ChartId: 2,
              books: 197
          },
          {
              ChartId: 2,
              books: 213
          },
          {
              ChartId: 2,
              books: 201
          },
          {
              ChartId: 2,
              books: 149
          },
          {
              ChartId: 2,
              books: 238
          },
          {
              ChartId: 2,
              books: 127
          },
          {
              ChartId: 2,
              books: 244
          },
          {
              ChartId: 2,
              books: 77
          },
          {
              ChartId: 2,
              books: 19
          },
          {
              ChartId: 2,
              books: 179
          },
          {
              ChartId: 2,
              books: 254
          },
          {
              ChartId: 2,
              books: 198
          },
          {
              ChartId: 2,
              books: 158
          },
          {
              ChartId: 2,
              books: 4
          },
          {
              ChartId: 2,
              books: 264
          },
          {
              ChartId: 2,
              books: 232
          },
          {
              ChartId: 2,
              books: 119
          },
          {
              ChartId: 2,
              books: 218
          },
          {
              ChartId: 2,
              books: 104
          },
          {
              ChartId: 2,
              books: 205
          },
          {
              ChartId: 2,
              books: 221
          },
          {
              ChartId: 2,
              books: 151
          },
          {
              ChartId: 2,
              books: 41
          },
          {
              ChartId: 2,
              books: 167
          },
          {
              ChartId: 2,
              books: 124
          },
          {
              ChartId: 2,
              books: 189
          },
          {
              ChartId: 2,
              books: 191
          },
          {
              ChartId: 2,
              books: 263
          },
          {
              ChartId: 2,
              books: 123
          },
          {
              ChartId: 2,
              books: 287
          },
          {
              ChartId: 2,
              books: 106
          },
          {
              ChartId: 2,
              books: 47
          },
          {
              ChartId: 2,
              books: 150
          },
          {
              ChartId: 2,
              books: 97
          },
          {
              ChartId: 2,
              books: 38
          },
          {
              ChartId: 2,
              books: 292
          },
          {
              ChartId: 2,
              books: 108
          },
          {
              ChartId: 2,
              books: 215
          },
          {
              ChartId: 2,
              books: 248
          },
          {
              ChartId: 2,
              books: 18
          },
          {
              ChartId: 2,
              books: 116
          },
          {
              ChartId: 2,
              books: 125
          },
          {
              ChartId: 2,
              books: 105
          },
          {
              ChartId: 2,
              books: 102
          },
          {
              ChartId: 2,
              books: 258
          },
          {
              ChartId: 2,
              books: 289
          },
          {
              ChartId: 2,
              books: 293
          },
          {
              ChartId: 2,
              books: 239
          },
          {
              ChartId: 2,
              books: 126
          },
          {
              ChartId: 2,
              books: 169
          },
          {
              ChartId: 2,
              books: 135
          },
          {
              ChartId: 2,
              books: 237
          },
          {
              ChartId: 2,
              books: 160
          },
          {
              ChartId: 2,
              books: 180
          },
          {
              ChartId: 2,
              books: 26
          },
          {
              ChartId: 2,
              books: 242
          },
          {
              ChartId: 2,
              books: 259
          },
          {
              ChartId: 2,
              books: 256
          },
          {
              ChartId: 2,
              books: 174
          },
          {
              ChartId: 2,
              books: 157
          },
          {
              ChartId: 2,
              books: 33
          },
          {
              ChartId: 2,
              books: 164
          },
          {
              ChartId: 2,
              books: 24
          },
          {
              ChartId: 3,
              books: 206
          },
          {
              ChartId: 3,
              books: 71
          },
          {
              ChartId: 3,
              books: 260
          },
          {
              ChartId: 3,
              books: 214
          },
          {
              ChartId: 3,
              books: 231
          },
          {
              ChartId: 3,
              books: 58
          },
          {
              ChartId: 3,
              books: 281
          },
          {
              ChartId: 3,
              books: 128
          },
          {
              ChartId: 3,
              books: 34
          },
          {
              ChartId: 3,
              books: 286
          },
          {
              ChartId: 3,
              books: 166
          },
          {
              ChartId: 3,
              books: 217
          },
          {
              ChartId: 3,
              books: 46
          },
          {
              ChartId: 3,
              books: 210
          },
          {
              ChartId: 3,
              books: 115
          },
          {
              ChartId: 3,
              books: 95
          },
          {
              ChartId: 4,
              books: 156
          },
          {
              ChartId: 4,
              books: 145
          },
          {
              ChartId: 4,
              books: 266
          },
          {
              ChartId: 4,
              books: 25
          },
          {
              ChartId: 4,
              books: 285
          },
          {
              ChartId: 4,
              books: 284
          },
          {
              ChartId: 5,
              books: 6
          },
          {
              ChartId: 5,
              books: 42
          },
          {
              ChartId: 5,
              books: 60
          },
          {
              ChartId: 5,
              books: 50
          },
          {
              ChartId: 5,
              books: 101
          },
          {
              ChartId: 5,
              books: 163
          },
          {
              ChartId: 5,
              books: 89
          },
          {
              ChartId: 5,
              books: 195
          },
          {
              ChartId: 5,
              books: 22
          },
          {
              ChartId: 5,
              books: 249
          },
          {
              ChartId: 5,
              books: 28
          },
          {
              ChartId: 5,
              books: 159
          },
          {
              ChartId: 5,
              books: 69
          },
          {
              ChartId: 5,
              books: 152
          },
          {
              ChartId: 5,
              books: 261
          },
          {
              ChartId: 6,
              books: 291
          },
          {
              ChartId: 6,
              books: 63
          },
          {
              ChartId: 6,
              books: 130
          },
          {
              ChartId: 6,
              books: 266
          },
          {
              ChartId: 6,
              books: 88
          },
          {
              ChartId: 6,
              books: 111
          },
          {
              ChartId: 6,
              books: 90
          },
          {
              ChartId: 6,
              books: 226
          },
          {
              ChartId: 6,
              books: 31
          },
          {
              ChartId: 6,
              books: 173
          },
          {
              ChartId: 6,
              books: 190
          },
          {
              ChartId: 6,
              books: 223
          },
          {
              ChartId: 6,
              books: 273
          },
          {
              ChartId: 6,
              books: 3
          },
          {
              ChartId: 6,
              books: 10
          },
          {
              ChartId: 6,
              books: 199
          },
          {
              ChartId: 6,
              books: 35
          },
          {
              ChartId: 6,
              books: 269
          },
          {
              ChartId: 6,
              books: 122
          },
          {
              ChartId: 6,
              books: 100
          },
          {
              ChartId: 6,
              books: 185
          },
          {
              ChartId: 7,
              books: 92
          },
          {
              ChartId: 7,
              books: 243
          },
          {
              ChartId: 7,
              books: 283
          },
          {
              ChartId: 7,
              books: 133
          },
          {
              ChartId: 7,
              books: 139
          },
          {
              ChartId: 7,
              books: 20
          },
          {
              ChartId: 7,
              books: 44
          },
          {
              ChartId: 7,
              books: 165
          },
          {
              ChartId: 7,
              books: 187
          },
          {
              ChartId: 7,
              books: 229
          },
          {
              ChartId: 7,
              books: 233
          },
          {
              ChartId: 7,
              books: 17
          },
          {
              ChartId: 8,
              books: 224
          },
          {
              ChartId: 8,
              books: 138
          },
          {
              ChartId: 8,
              books: 78
          },
          {
              ChartId: 8,
              books: 193
          },
          {
              ChartId: 8,
              books: 96
          },
          {
              ChartId: 8,
              books: 60
          },
          {
              ChartId: 8,
              books: 266
          },
          {
              ChartId: 8,
              books: 52
          },
          {
              ChartId: 8,
              books: 146
          },
          {
              ChartId: 8,
              books: 15
          },
          {
              ChartId: 8,
              books: 112
          },
          {
              ChartId: 8,
              books: 250
          },
          {
              ChartId: 8,
              books: 9
          },
          {
              ChartId: 8,
              books: 270
          },
          {
              ChartId: 8,
              books: 109
          },
          {
              ChartId: 9,
              books: 2
          },
          {
              ChartId: 9,
              books: 60
          },
          {
              ChartId: 9,
              books: 271
          },
          {
              ChartId: 9,
              books: 129
          },
          {
              ChartId: 9,
              books: 267
          },
          {
              ChartId: 9,
              books: 67
          },
          {
              ChartId: 9,
              books: 170
          },
          {
              ChartId: 9,
              books: 274
          },
          {
              ChartId: 9,
              books: 57
          },
          {
              ChartId: 10,
              books: 77
          },
          {
              ChartId: 10,
              books: 29
          },
          {
              ChartId: 10,
              books: 39
          },
          {
              ChartId: 10,
              books: 80
          },
          {
              ChartId: 10,
              books: 81
          },
          {
              ChartId: 10,
              books: 60
          },
          {
              ChartId: 10,
              books: 58
          },
          {
              ChartId: 10,
              books: 67
          },
          {
              ChartId: 10,
              books: 69
          },
          {
              ChartId: 10,
              books: 64
          },
          {
              ChartId: 11,
              books: 216
          },
          {
              ChartId: 11,
              books: 147
          },
          {
              ChartId: 11,
              books: 196
          },
          {
              ChartId: 11,
              books: 234
          },
          {
              ChartId: 11,
              books: 140
          },
          {
              ChartId: 11,
              books: 36
          },
          {
              ChartId: 11,
              books: 235
          },
          {
              ChartId: 11,
              books: 208
          },
          {
              ChartId: 11,
              books: 212
          },
          {
              ChartId: 11,
              books: 245
          },
          {
              ChartId: 12,
              books: 60
          },
          {
              ChartId: 12,
              books: 70
          },
          {
              ChartId: 12,
              books: 58
          },
          {
              ChartId: 12,
              books: 81
          },
          {
              ChartId: 12,
              books: 61
          },
          {
              ChartId: 12,
              books: 23
          },
          {
              ChartId: 12,
              books: 72
          },
          {
              ChartId: 12,
              books: 67
          },
          {
              ChartId: 12,
              books: 43
          },
          {
              ChartId: 12,
              books: 155
          },
          {
              ChartId: 12,
              books: 267
          },
          {
              ChartId: 12,
              books: 175
          },
          {
              ChartId: 12,
              books: 69
          },
          {
              ChartId: 12,
              books: 28
          },
          {
              ChartId: 12,
              books: 182
          },
          {
              ChartId: 12,
              books: 99
          },
          {
              ChartId: 12,
              books: 53
          },
          {
              ChartId: 12,
              books: 77
          },
          {
              ChartId: 12,
              books: 249
          },
          {
              ChartId: 12,
              books: 115
          },
          {
              ChartId: 12,
              books: 1
          },
          {
              ChartId: 12,
              books: 34
          },
          {
              ChartId: 12,
              books: 93
          },
          {
              ChartId: 12,
              books: 91
          },
          {
              ChartId: 12,
              books: 219
          },
          {
              ChartId: 12,
              books: 181
          },
          {
              ChartId: 12,
              books: 227
          },
          {
              ChartId: 12,
              books: 103
          },
          {
              ChartId: 12,
              books: 141
          },
          {
              ChartId: 12,
              books: 274
          },
          {
              ChartId: 12,
              books: 39
          },
          {
              ChartId: 12,
              books: 117
          },
          {
              ChartId: 12,
              books: 280
          },
          {
              ChartId: 12,
              books: 66
          },
          {
              ChartId: 12,
              books: 287
          },
          {
              ChartId: 12,
              books: 241
          },
          {
              ChartId: 12,
              books: 59
          },
          {
              ChartId: 12,
              books: 251
          },
          {
              ChartId: 12,
              books: 255
          },
          {
              ChartId: 12,
              books: 188
          },
          {
              ChartId: 12,
              books: 209
          },
          {
              ChartId: 12,
              books: 200
          },
          {
              ChartId: 12,
              books: 176
          },
          {
              ChartId: 12,
              books: 5
          },
          {
              ChartId: 12,
              books: 273
          },
          {
              ChartId: 12,
              books: 30
          },
          {
              ChartId: 12,
              books: 207
          },
          {
              ChartId: 12,
              books: 29
          },
          {
              ChartId: 12,
              books: 37
          },
          {
              ChartId: 12,
              books: 50
          },
          {
              ChartId: 12,
              books: 2
          },
          {
              ChartId: 12,
              books: 132
          },
          {
              ChartId: 12,
              books: 101
          },
          {
              ChartId: 12,
              books: 253
          },
          {
              ChartId: 12,
              books: 42
          },
          {
              ChartId: 12,
              books: 81
          },
          {
              ChartId: 12,
              books: 184
          },
          {
              ChartId: 12,
              books: 84
          },
          {
              ChartId: 12,
              books: 202
          },
          {
              ChartId: 12,
              books: 282
          },
          {
              ChartId: 12,
              books: 163
          },
          {
              ChartId: 12,
              books: 64
          },
          {
              ChartId: 12,
              books: 279
          },
          {
              ChartId: 12,
              books: 134
          },
          {
              ChartId: 12,
              books: 194
          },
          {
              ChartId: 12,
              books: 148
          },
          {
              ChartId: 12,
              books: 32
          },
          {
              ChartId: 12,
              books: 285
          },
          {
              ChartId: 12,
              books: 7
          },
          {
              ChartId: 12,
              books: 120
          },
          {
              ChartId: 12,
              books: 261
          },
          {
              ChartId: 12,
              books: 136
          },
          {
              ChartId: 12,
              books: 162
          },
          {
              ChartId: 12,
              books: 222
          },
          {
              ChartId: 12,
              books: 13
          },
          {
              ChartId: 12,
              books: 183
          },
          {
              ChartId: 12,
              books: 177
          },
          {
              ChartId: 12,
              books: 220
          },
          {
              ChartId: 12,
              books: 290
          },
          {
              ChartId: 12,
              books: 271
          },
          {
              ChartId: 12,
              books: 49
          },
          {
              ChartId: 12,
              books: 85
          },
          {
              ChartId: 12,
              books: 240
          },
          {
              ChartId: 12,
              books: 203
          },
          {
              ChartId: 12,
              books: 113
          },
          {
              ChartId: 12,
              books: 118
          },
          {
              ChartId: 12,
              books: 154
          },
          {
              ChartId: 12,
              books: 45
          },
          {
              ChartId: 12,
              books: 40
          },
          {
              ChartId: 12,
              books: 145
          },
          {
              ChartId: 12,
              books: 110
          },
          {
              ChartId: 12,
              books: 211
          },
          {
              ChartId: 12,
              books: 193
          },
          {
              ChartId: 12,
              books: 83
          },
          {
              ChartId: 12,
              books: 62
          },
          {
              ChartId: 12,
              books: 168
          },
          {
              ChartId: 12,
              books: 204
          },
          {
              ChartId: 12,
              books: 14
          },
          {
              ChartId: 12,
              books: 9
          },
          {
              ChartId: 12,
              books: 27
          },
          {
              ChartId: 13,
              books: 56
          },
          {
              ChartId: 13,
              books: 55
          },
          {
              ChartId: 13,
              books: 75
          },
          {
              ChartId: 13,
              books: 62
          },
          {
              ChartId: 13,
              books: 68
          },
          {
              ChartId: 13,
              books: 78
          },
          {
              ChartId: 13,
              books: 79
          },
          {
              ChartId: 14,
              books: 27
          },
          {
              ChartId: 14,
              books: 273
          },
          {
              ChartId: 14,
              books: 43
          },
          {
              ChartId: 14,
              books: 84
          },
          {
              ChartId: 14,
              books: 81
          },
          {
              ChartId: 14,
              books: 182
          },
          {
              ChartId: 14,
              books: 94
          },
          {
              ChartId: 14,
              books: 91
          },
          {
              ChartId: 14,
              books: 137
          },
          {
              ChartId: 14,
              books: 58
          },
          {
              ChartId: 14,
              books: 50
          },
          {
              ChartId: 14,
              books: 257
          },
          {
              ChartId: 14,
              books: 267
          },
          {
              ChartId: 14,
              books: 166
          },
          {
              ChartId: 14,
              books: 121
          },
          {
              ChartId: 14,
              books: 13
          },
          {
              ChartId: 14,
              books: 101
          },
          {
              ChartId: 14,
              books: 152
          },
          {
              ChartId: 14,
              books: 29
          },
          {
              ChartId: 14,
              books: 16
          },
          {
              ChartId: 14,
              books: 278
          },
          {
              ChartId: 14,
              books: 71
          },
          {
              ChartId: 14,
              books: 87
          },
          {
              ChartId: 14,
              books: 34
          },
          {
              ChartId: 14,
              books: 67
          },
          {
              ChartId: 15,
              books: 54
          },
          {
              ChartId: 15,
              books: 86
          },
          {
              ChartId: 15,
              books: 73
          },
          {
              ChartId: 15,
              books: 82
          },
          {
              ChartId: 15,
              books: 51
          },
          {
              ChartId: 16,
              books: 131
          },
          {
              ChartId: 16,
              books: 155
          },
          {
              ChartId: 16,
              books: 53
          },
          {
              ChartId: 16,
              books: 40
          },
          {
              ChartId: 16,
              books: 65
          },
          {
              ChartId: 16,
              books: 276
          },
          {
              ChartId: 16,
              books: 273
          },
          {
              ChartId: 16,
              books: 74
          },
          {
              ChartId: 16,
              books: 178
          },
          {
              ChartId: 16,
              books: 252
          },
          {
              ChartId: 16,
              books: 142
          },
          {
              ChartId: 16,
              books: 2
          },
          {
              ChartId: 16,
              books: 5
          },
          {
              ChartId: 16,
              books: 117
          },
          {
              ChartId: 16,
              books: 236
          },
          {
              ChartId: 16,
              books: 76
          },
          {
              ChartId: 16,
              books: 228
          },
          {
              ChartId: 16,
              books: 72
          },
          {
              ChartId: 16,
              books: 114
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
