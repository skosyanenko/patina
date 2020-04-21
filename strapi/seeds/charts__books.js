
exports.seed = function(knex) {
  return knex('charts__books').del()
    .then(function () {
      return knex('charts__books').insert([
        {
          "chart_id": 1,
          "book_id": 30
        },
        {
          "chart_id": 1,
          "book_id": 29
        },
        {
          "chart_id": 1,
          "book_id": 192
        },
        {
          "chart_id": 1,
          "book_id": 246
        },
        {
          "chart_id": 1,
          "book_id": 181
        },
        {
          "chart_id": 1,
          "book_id": 117
        },
        {
          "chart_id": 1,
          "book_id": 161
        },
        {
          "chart_id": 1,
          "book_id": 153
        },
        {
          "chart_id": 1,
          "book_id": 186
        },
        {
          "chart_id": 1,
          "book_id": 12
        },
        {
          "chart_id": 1,
          "book_id": 225
        },
        {
          "chart_id": 1,
          "book_id": 272
        },
        {
          "chart_id": 1,
          "book_id": 48
        },
        {
          "chart_id": 1,
          "book_id": 98
        },
        {
          "chart_id": 1,
          "book_id": 8
        },
        {
          "chart_id": 2,
          "book_id": 2
        },
        {
          "chart_id": 2,
          "book_id": 277
        },
        {
          "chart_id": 2,
          "book_id": 11
        },
        {
          "chart_id": 2,
          "book_id": 171
        },
        {
          "chart_id": 2,
          "book_id": 144
        },
        {
          "chart_id": 2,
          "book_id": 265
        },
        {
          "chart_id": 2,
          "book_id": 230
        },
        {
          "chart_id": 2,
          "book_id": 107
        },
        {
          "chart_id": 2,
          "book_id": 172
        },
        {
          "chart_id": 2,
          "book_id": 48
        },
        {
          "chart_id": 2,
          "book_id": 288
        },
        {
          "chart_id": 2,
          "book_id": 262
        },
        {
          "chart_id": 2,
          "book_id": 143
        },
        {
          "chart_id": 2,
          "book_id": 268
        },
        {
          "chart_id": 2,
          "book_id": 21
        },
        {
          "chart_id": 2,
          "book_id": 275
        },
        {
          "chart_id": 2,
          "book_id": 142
        },
        {
          "chart_id": 2,
          "book_id": 197
        },
        {
          "chart_id": 2,
          "book_id": 213
        },
        {
          "chart_id": 2,
          "book_id": 201
        },
        {
          "chart_id": 2,
          "book_id": 149
        },
        {
          "chart_id": 2,
          "book_id": 238
        },
        {
          "chart_id": 2,
          "book_id": 127
        },
        {
          "chart_id": 2,
          "book_id": 244
        },
        {
          "chart_id": 2,
          "book_id": 77
        },
        {
          "chart_id": 2,
          "book_id": 19
        },
        {
          "chart_id": 2,
          "book_id": 179
        },
        {
          "chart_id": 2,
          "book_id": 254
        },
        {
          "chart_id": 2,
          "book_id": 198
        },
        {
          "chart_id": 2,
          "book_id": 158
        },
        {
          "chart_id": 2,
          "book_id": 4
        },
        {
          "chart_id": 2,
          "book_id": 264
        },
        {
          "chart_id": 2,
          "book_id": 232
        },
        {
          "chart_id": 2,
          "book_id": 119
        },
        {
          "chart_id": 2,
          "book_id": 218
        },
        {
          "chart_id": 2,
          "book_id": 104
        },
        {
          "chart_id": 2,
          "book_id": 205
        },
        {
          "chart_id": 2,
          "book_id": 221
        },
        {
          "chart_id": 2,
          "book_id": 151
        },
        {
          "chart_id": 2,
          "book_id": 41
        },
        {
          "chart_id": 2,
          "book_id": 167
        },
        {
          "chart_id": 2,
          "book_id": 124
        },
        {
          "chart_id": 2,
          "book_id": 189
        },
        {
          "chart_id": 2,
          "book_id": 191
        },
        {
          "chart_id": 2,
          "book_id": 263
        },
        {
          "chart_id": 2,
          "book_id": 123
        },
        {
          "chart_id": 2,
          "book_id": 287
        },
        {
          "chart_id": 2,
          "book_id": 106
        },
        {
          "chart_id": 2,
          "book_id": 47
        },
        {
          "chart_id": 2,
          "book_id": 150
        },
        {
          "chart_id": 2,
          "book_id": 97
        },
        {
          "chart_id": 2,
          "book_id": 38
        },
        {
          "chart_id": 2,
          "book_id": 292
        },
        {
          "chart_id": 2,
          "book_id": 108
        },
        {
          "chart_id": 2,
          "book_id": 215
        },
        {
          "chart_id": 2,
          "book_id": 248
        },
        {
          "chart_id": 2,
          "book_id": 18
        },
        {
          "chart_id": 2,
          "book_id": 116
        },
        {
          "chart_id": 2,
          "book_id": 125
        },
        {
          "chart_id": 2,
          "book_id": 105
        },
        {
          "chart_id": 2,
          "book_id": 102
        },
        {
          "chart_id": 2,
          "book_id": 258
        },
        {
          "chart_id": 2,
          "book_id": 289
        },
        {
          "chart_id": 2,
          "book_id": 293
        },
        {
          "chart_id": 2,
          "book_id": 239
        },
        {
          "chart_id": 2,
          "book_id": 126
        },
        {
          "chart_id": 2,
          "book_id": 169
        },
        {
          "chart_id": 2,
          "book_id": 135
        },
        {
          "chart_id": 2,
          "book_id": 237
        },
        {
          "chart_id": 2,
          "book_id": 160
        },
        {
          "chart_id": 2,
          "book_id": 180
        },
        {
          "chart_id": 2,
          "book_id": 26
        },
        {
          "chart_id": 2,
          "book_id": 242
        },
        {
          "chart_id": 2,
          "book_id": 259
        },
        {
          "chart_id": 2,
          "book_id": 256
        },
        {
          "chart_id": 2,
          "book_id": 174
        },
        {
          "chart_id": 2,
          "book_id": 157
        },
        {
          "chart_id": 2,
          "book_id": 33
        },
        {
          "chart_id": 2,
          "book_id": 164
        },
        {
          "chart_id": 2,
          "book_id": 24
        },
        {
          "chart_id": 3,
          "book_id": 206
        },
        {
          "chart_id": 3,
          "book_id": 71
        },
        {
          "chart_id": 3,
          "book_id": 260
        },
        {
          "chart_id": 3,
          "book_id": 214
        },
        {
          "chart_id": 3,
          "book_id": 231
        },
        {
          "chart_id": 3,
          "book_id": 58
        },
        {
          "chart_id": 3,
          "book_id": 281
        },
        {
          "chart_id": 3,
          "book_id": 128
        },
        {
          "chart_id": 3,
          "book_id": 34
        },
        {
          "chart_id": 3,
          "book_id": 286
        },
        {
          "chart_id": 3,
          "book_id": 166
        },
        {
          "chart_id": 3,
          "book_id": 217
        },
        {
          "chart_id": 3,
          "book_id": 46
        },
        {
          "chart_id": 3,
          "book_id": 210
        },
        {
          "chart_id": 3,
          "book_id": 115
        },
        {
          "chart_id": 3,
          "book_id": 95
        },
        {
          "chart_id": 4,
          "book_id": 156
        },
        {
          "chart_id": 4,
          "book_id": 145
        },
        {
          "chart_id": 4,
          "book_id": 266
        },
        {
          "chart_id": 4,
          "book_id": 25
        },
        {
          "chart_id": 4,
          "book_id": 285
        },
        {
          "chart_id": 4,
          "book_id": 284
        },
        {
          "chart_id": 5,
          "book_id": 6
        },
        {
          "chart_id": 5,
          "book_id": 42
        },
        {
          "chart_id": 5,
          "book_id": 60
        },
        {
          "chart_id": 5,
          "book_id": 50
        },
        {
          "chart_id": 5,
          "book_id": 101
        },
        {
          "chart_id": 5,
          "book_id": 163
        },
        {
          "chart_id": 5,
          "book_id": 89
        },
        {
          "chart_id": 5,
          "book_id": 195
        },
        {
          "chart_id": 5,
          "book_id": 22
        },
        {
          "chart_id": 5,
          "book_id": 249
        },
        {
          "chart_id": 5,
          "book_id": 28
        },
        {
          "chart_id": 5,
          "book_id": 159
        },
        {
          "chart_id": 5,
          "book_id": 69
        },
        {
          "chart_id": 5,
          "book_id": 152
        },
        {
          "chart_id": 5,
          "book_id": 261
        },
        {
          "chart_id": 6,
          "book_id": 291
        },
        {
          "chart_id": 6,
          "book_id": 63
        },
        {
          "chart_id": 6,
          "book_id": 130
        },
        {
          "chart_id": 6,
          "book_id": 266
        },
        {
          "chart_id": 6,
          "book_id": 88
        },
        {
          "chart_id": 6,
          "book_id": 111
        },
        {
          "chart_id": 6,
          "book_id": 90
        },
        {
          "chart_id": 6,
          "book_id": 226
        },
        {
          "chart_id": 6,
          "book_id": 31
        },
        {
          "chart_id": 6,
          "book_id": 173
        },
        {
          "chart_id": 6,
          "book_id": 190
        },
        {
          "chart_id": 6,
          "book_id": 223
        },
        {
          "chart_id": 6,
          "book_id": 273
        },
        {
          "chart_id": 6,
          "book_id": 3
        },
        {
          "chart_id": 6,
          "book_id": 10
        },
        {
          "chart_id": 6,
          "book_id": 199
        },
        {
          "chart_id": 6,
          "book_id": 35
        },
        {
          "chart_id": 6,
          "book_id": 269
        },
        {
          "chart_id": 6,
          "book_id": 122
        },
        {
          "chart_id": 6,
          "book_id": 100
        },
        {
          "chart_id": 6,
          "book_id": 185
        },
        {
          "chart_id": 7,
          "book_id": 92
        },
        {
          "chart_id": 7,
          "book_id": 243
        },
        {
          "chart_id": 7,
          "book_id": 283
        },
        {
          "chart_id": 7,
          "book_id": 133
        },
        {
          "chart_id": 7,
          "book_id": 139
        },
        {
          "chart_id": 7,
          "book_id": 20
        },
        {
          "chart_id": 7,
          "book_id": 44
        },
        {
          "chart_id": 7,
          "book_id": 165
        },
        {
          "chart_id": 7,
          "book_id": 187
        },
        {
          "chart_id": 7,
          "book_id": 229
        },
        {
          "chart_id": 7,
          "book_id": 233
        },
        {
          "chart_id": 7,
          "book_id": 17
        },
        {
          "chart_id": 8,
          "book_id": 224
        },
        {
          "chart_id": 8,
          "book_id": 138
        },
        {
          "chart_id": 8,
          "book_id": 78
        },
        {
          "chart_id": 8,
          "book_id": 193
        },
        {
          "chart_id": 8,
          "book_id": 96
        },
        {
          "chart_id": 8,
          "book_id": 60
        },
        {
          "chart_id": 8,
          "book_id": 266
        },
        {
          "chart_id": 8,
          "book_id": 52
        },
        {
          "chart_id": 8,
          "book_id": 146
        },
        {
          "chart_id": 8,
          "book_id": 15
        },
        {
          "chart_id": 8,
          "book_id": 112
        },
        {
          "chart_id": 8,
          "book_id": 250
        },
        {
          "chart_id": 8,
          "book_id": 9
        },
        {
          "chart_id": 8,
          "book_id": 270
        },
        {
          "chart_id": 8,
          "book_id": 109
        },
        {
          "chart_id": 9,
          "book_id": 2
        },
        {
          "chart_id": 9,
          "book_id": 60
        },
        {
          "chart_id": 9,
          "book_id": 271
        },
        {
          "chart_id": 9,
          "book_id": 129
        },
        {
          "chart_id": 9,
          "book_id": 267
        },
        {
          "chart_id": 9,
          "book_id": 67
        },
        {
          "chart_id": 9,
          "book_id": 170
        },
        {
          "chart_id": 9,
          "book_id": 274
        },
        {
          "chart_id": 9,
          "book_id": 57
        },
        {
          "chart_id": 10,
          "book_id": 77
        },
        {
          "chart_id": 10,
          "book_id": 29
        },
        {
          "chart_id": 10,
          "book_id": 39
        },
        {
          "chart_id": 10,
          "book_id": 80
        },
        {
          "chart_id": 10,
          "book_id": 81
        },
        {
          "chart_id": 10,
          "book_id": 60
        },
        {
          "chart_id": 10,
          "book_id": 58
        },
        {
          "chart_id": 10,
          "book_id": 67
        },
        {
          "chart_id": 10,
          "book_id": 69
        },
        {
          "chart_id": 10,
          "book_id": 64
        },
        {
          "chart_id": 11,
          "book_id": 216
        },
        {
          "chart_id": 11,
          "book_id": 147
        },
        {
          "chart_id": 11,
          "book_id": 196
        },
        {
          "chart_id": 11,
          "book_id": 234
        },
        {
          "chart_id": 11,
          "book_id": 140
        },
        {
          "chart_id": 11,
          "book_id": 36
        },
        {
          "chart_id": 11,
          "book_id": 235
        },
        {
          "chart_id": 11,
          "book_id": 208
        },
        {
          "chart_id": 11,
          "book_id": 212
        },
        {
          "chart_id": 11,
          "book_id": 245
        },
        {
          "chart_id": 12,
          "book_id": 60
        },
        {
          "chart_id": 12,
          "book_id": 70
        },
        {
          "chart_id": 12,
          "book_id": 58
        },
        {
          "chart_id": 12,
          "book_id": 61
        },
        {
          "chart_id": 12,
          "book_id": 23
        },
        {
          "chart_id": 12,
          "book_id": 72
        },
        {
          "chart_id": 12,
          "book_id": 67
        },
        {
          "chart_id": 12,
          "book_id": 43
        },
        {
          "chart_id": 12,
          "book_id": 155
        },
        {
          "chart_id": 12,
          "book_id": 267
        },
        {
          "chart_id": 12,
          "book_id": 175
        },
        {
          "chart_id": 12,
          "book_id": 69
        },
        {
          "chart_id": 12,
          "book_id": 28
        },
        {
          "chart_id": 12,
          "book_id": 182
        },
        {
          "chart_id": 12,
          "book_id": 99
        },
        {
          "chart_id": 12,
          "book_id": 53
        },
        {
          "chart_id": 12,
          "book_id": 77
        },
        {
          "chart_id": 12,
          "book_id": 249
        },
        {
          "chart_id": 12,
          "book_id": 115
        },
        {
          "chart_id": 12,
          "book_id": 1
        },
        {
          "chart_id": 12,
          "book_id": 34
        },
        {
          "chart_id": 12,
          "book_id": 93
        },
        {
          "chart_id": 12,
          "book_id": 91
        },
        {
          "chart_id": 12,
          "book_id": 219
        },
        {
          "chart_id": 12,
          "book_id": 181
        },
        {
          "chart_id": 12,
          "book_id": 227
        },
        {
          "chart_id": 12,
          "book_id": 103
        },
        {
          "chart_id": 12,
          "book_id": 141
        },
        {
          "chart_id": 12,
          "book_id": 274
        },
        {
          "chart_id": 12,
          "book_id": 39
        },
        {
          "chart_id": 12,
          "book_id": 117
        },
        {
          "chart_id": 12,
          "book_id": 280
        },
        {
          "chart_id": 12,
          "book_id": 66
        },
        {
          "chart_id": 12,
          "book_id": 287
        },
        {
          "chart_id": 12,
          "book_id": 241
        },
        {
          "chart_id": 12,
          "book_id": 59
        },
        {
          "chart_id": 12,
          "book_id": 251
        },
        {
          "chart_id": 12,
          "book_id": 255
        },
        {
          "chart_id": 12,
          "book_id": 188
        },
        {
          "chart_id": 12,
          "book_id": 209
        },
        {
          "chart_id": 12,
          "book_id": 200
        },
        {
          "chart_id": 12,
          "book_id": 176
        },
        {
          "chart_id": 12,
          "book_id": 5
        },
        {
          "chart_id": 12,
          "book_id": 273
        },
        {
          "chart_id": 12,
          "book_id": 30
        },
        {
          "chart_id": 12,
          "book_id": 207
        },
        {
          "chart_id": 12,
          "book_id": 29
        },
        {
          "chart_id": 12,
          "book_id": 37
        },
        {
          "chart_id": 12,
          "book_id": 50
        },
        {
          "chart_id": 12,
          "book_id": 2
        },
        {
          "chart_id": 12,
          "book_id": 132
        },
        {
          "chart_id": 12,
          "book_id": 101
        },
        {
          "chart_id": 12,
          "book_id": 253
        },
        {
          "chart_id": 12,
          "book_id": 42
        },
        {
          "chart_id": 12,
          "book_id": 81
        },
        {
          "chart_id": 12,
          "book_id": 184
        },
        {
          "chart_id": 12,
          "book_id": 84
        },
        {
          "chart_id": 12,
          "book_id": 202
        },
        {
          "chart_id": 12,
          "book_id": 282
        },
        {
          "chart_id": 12,
          "book_id": 163
        },
        {
          "chart_id": 12,
          "book_id": 64
        },
        {
          "chart_id": 12,
          "book_id": 279
        },
        {
          "chart_id": 12,
          "book_id": 134
        },
        {
          "chart_id": 12,
          "book_id": 194
        },
        {
          "chart_id": 12,
          "book_id": 148
        },
        {
          "chart_id": 12,
          "book_id": 32
        },
        {
          "chart_id": 12,
          "book_id": 285
        },
        {
          "chart_id": 12,
          "book_id": 7
        },
        {
          "chart_id": 12,
          "book_id": 120
        },
        {
          "chart_id": 12,
          "book_id": 261
        },
        {
          "chart_id": 12,
          "book_id": 136
        },
        {
          "chart_id": 12,
          "book_id": 162
        },
        {
          "chart_id": 12,
          "book_id": 222
        },
        {
          "chart_id": 12,
          "book_id": 13
        },
        {
          "chart_id": 12,
          "book_id": 183
        },
        {
          "chart_id": 12,
          "book_id": 177
        },
        {
          "chart_id": 12,
          "book_id": 220
        },
        {
          "chart_id": 12,
          "book_id": 290
        },
        {
          "chart_id": 12,
          "book_id": 271
        },
        {
          "chart_id": 12,
          "book_id": 49
        },
        {
          "chart_id": 12,
          "book_id": 85
        },
        {
          "chart_id": 12,
          "book_id": 240
        },
        {
          "chart_id": 12,
          "book_id": 203
        },
        {
          "chart_id": 12,
          "book_id": 113
        },
        {
          "chart_id": 12,
          "book_id": 118
        },
        {
          "chart_id": 12,
          "book_id": 154
        },
        {
          "chart_id": 12,
          "book_id": 45
        },
        {
          "chart_id": 12,
          "book_id": 40
        },
        {
          "chart_id": 12,
          "book_id": 145
        },
        {
          "chart_id": 12,
          "book_id": 110
        },
        {
          "chart_id": 12,
          "book_id": 211
        },
        {
          "chart_id": 12,
          "book_id": 193
        },
        {
          "chart_id": 12,
          "book_id": 83
        },
        {
          "chart_id": 12,
          "book_id": 62
        },
        {
          "chart_id": 12,
          "book_id": 168
        },
        {
          "chart_id": 12,
          "book_id": 204
        },
        {
          "chart_id": 12,
          "book_id": 14
        },
        {
          "chart_id": 12,
          "book_id": 9
        },
        {
          "chart_id": 12,
          "book_id": 27
        },
        {
          "chart_id": 13,
          "book_id": 56
        },
        {
          "chart_id": 13,
          "book_id": 55
        },
        {
          "chart_id": 13,
          "book_id": 75
        },
        {
          "chart_id": 13,
          "book_id": 62
        },
        {
          "chart_id": 13,
          "book_id": 68
        },
        {
          "chart_id": 13,
          "book_id": 78
        },
        {
          "chart_id": 13,
          "book_id": 79
        },
        {
          "chart_id": 14,
          "book_id": 27
        },
        {
          "chart_id": 14,
          "book_id": 273
        },
        {
          "chart_id": 14,
          "book_id": 43
        },
        {
          "chart_id": 14,
          "book_id": 84
        },
        {
          "chart_id": 14,
          "book_id": 81
        },
        {
          "chart_id": 14,
          "book_id": 182
        },
        {
          "chart_id": 14,
          "book_id": 94
        },
        {
          "chart_id": 14,
          "book_id": 91
        },
        {
          "chart_id": 14,
          "book_id": 137
        },
        {
          "chart_id": 14,
          "book_id": 58
        },
        {
          "chart_id": 14,
          "book_id": 50
        },
        {
          "chart_id": 14,
          "book_id": 257
        },
        {
          "chart_id": 14,
          "book_id": 267
        },
        {
          "chart_id": 14,
          "book_id": 166
        },
        {
          "chart_id": 14,
          "book_id": 121
        },
        {
          "chart_id": 14,
          "book_id": 13
        },
        {
          "chart_id": 14,
          "book_id": 101
        },
        {
          "chart_id": 14,
          "book_id": 152
        },
        {
          "chart_id": 14,
          "book_id": 29
        },
        {
          "chart_id": 14,
          "book_id": 16
        },
        {
          "chart_id": 14,
          "book_id": 278
        },
        {
          "chart_id": 14,
          "book_id": 71
        },
        {
          "chart_id": 14,
          "book_id": 87
        },
        {
          "chart_id": 14,
          "book_id": 34
        },
        {
          "chart_id": 14,
          "book_id": 67
        },
        {
          "chart_id": 15,
          "book_id": 54
        },
        {
          "chart_id": 15,
          "book_id": 86
        },
        {
          "chart_id": 15,
          "book_id": 73
        },
        {
          "chart_id": 15,
          "book_id": 82
        },
        {
          "chart_id": 15,
          "book_id": 51
        },
        {
          "chart_id": 16,
          "book_id": 131
        },
        {
          "chart_id": 16,
          "book_id": 155
        },
        {
          "chart_id": 16,
          "book_id": 53
        },
        {
          "chart_id": 16,
          "book_id": 40
        },
        {
          "chart_id": 16,
          "book_id": 65
        },
        {
          "chart_id": 16,
          "book_id": 276
        },
        {
          "chart_id": 16,
          "book_id": 273
        },
        {
          "chart_id": 16,
          "book_id": 74
        },
        {
          "chart_id": 16,
          "book_id": 178
        },
        {
          "chart_id": 16,
          "book_id": 252
        },
        {
          "chart_id": 16,
          "book_id": 142
        },
        {
          "chart_id": 16,
          "book_id": 2
        },
        {
          "chart_id": 16,
          "book_id": 5
        },
        {
          "chart_id": 16,
          "book_id": 117
        },
        {
          "chart_id": 16,
          "book_id": 236
        },
        {
          "chart_id": 16,
          "book_id": 76
        },
        {
          "chart_id": 16,
          "book_id": 228
        },
        {
          "chart_id": 16,
          "book_id": 72
        },
        {
          "chart_id": 16,
          "book_id": 114
        },
        {
          "chart_id": 17,
          "book_id": 300
        },
        {
          "chart_id": 17,
          "book_id": 301
        },
        {
          "chart_id": 17,
          "book_id": 302
        },
        {
          "chart_id": 17,
          "book_id": 303
        },
        {
          "chart_id": 17,
          "book_id": 304
        },
        {
          "chart_id": 17,
          "book_id": 305
        },
        {
          "chart_id": 17,
          "book_id": 306
        },
        {
          "chart_id": 17,
          "book_id": 307
        }
      ]);
    });
};
