'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        const contentFilms = [
            {
                BookId: 1,
                FilmId: 1
            },
            {
                BookId: 2,
                FilmId: 2
            },
            {
                BookId: 2,
                FilmId: 3
            },
            {
                BookId: 2,
                FilmId: 4
            },
            {
                BookId: 2,
                FilmId: 5
            },
            {
                BookId: 2,
                FilmId: 6
            },
            {
                BookId: 2,
                FilmId: 7
            },
            {
                BookId: 2,
                FilmId: 8
            },
            {
                BookId: 2,
                FilmId: 9
            },
            {
                BookId: 2,
                FilmId: 10
            },
            {
                BookId: 4,
                FilmId: 11
            },
            {
                BookId: 5,
                FilmId: 12
            },
            {
                BookId: 6,
                FilmId: 13
            },
            {
                BookId: 6,
                FilmId: 14
            },
            {
                BookId: 6,
                FilmId: 15
            },
            {
                BookId: 6,
                FilmId: 16
            },
            {
                BookId: 6,
                FilmId: 17
            },
            {
                BookId: 6,
                FilmId: 18
            },
            {
                BookId: 6,
                FilmId: 19
            },
            {
                BookId: 7,
                FilmId: 20
            },
            {
                BookId: 7,
                FilmId: 21
            },
            {
                BookId: 8,
                FilmId: 22
            },
            {
                BookId: 9,
                FilmId: 23
            },
            {
                BookId: 10,
                FilmId: 24
            },
            {
                BookId: 11,
                FilmId: 25
            },
            {
                BookId: 12,
                FilmId: 26
            },
            {
                BookId: 13,
                FilmId: 27
            },
            {
                BookId: 14,
                FilmId: 28
            },
            {
                BookId: 15,
                FilmId: 29
            },
            {
                BookId: 16,
                FilmId: 30
            },
            {
                BookId: 18,
                FilmId: 31
            },
            {
                BookId: 22,
                FilmId: 32
            },
            {
                BookId: 23,
                FilmId: 33
            },
            {
                BookId: 23,
                FilmId: 34
            },
            {
                BookId: 23,
                FilmId: 35
            },
            {
                BookId: 23,
                FilmId: 36
            },
            {
                BookId: 27,
                FilmId: 37
            },
            {
                BookId: 27,
                FilmId: 38
            },
            {
                BookId: 27,
                FilmId: 39
            },
            {
                BookId: 27,
                FilmId: 40
            },
            {
                BookId: 27,
                FilmId: 41
            },
            {
                BookId: 28,
                FilmId: 42
            },
            {
                BookId: 28,
                FilmId: 43
            },
            {
                BookId: 28,
                FilmId: 44
            },
            {
                BookId: 28,
                FilmId: 45
            },
            {
                BookId: 28,
                FilmId: 46
            },
            {
                BookId: 30,
                FilmId: 47
            },
            {
                BookId: 32,
                FilmId: 48
            },
            {
                BookId: 32,
                FilmId: 48
            },
            {
                BookId: 33,
                FilmId: 50
            },
            {
                BookId: 34,
                FilmId: 51
            },
            {
                BookId: 34,
                FilmId: 52
            },
            {
                BookId: 34,
                FilmId: 53
            },
            {
                BookId: 34,
                FilmId: 54
            },
            {
                BookId: 34,
                FilmId: 55
            },
            {
                BookId: 34,
                FilmId: 56
            },
            {
                BookId: 34,
                FilmId: 57
            },
            {
                BookId: 36,
                FilmId: 58
            },
            {
                BookId: 37,
                FilmId: 59
            },
            {
                BookId: 37,
                FilmId: 60
            },
            {
                BookId: 39,
                FilmId: 61
            },
            {
                BookId: 39,
                FilmId: 62
            },
            {
                BookId: 40,
                FilmId: 63
            },
            {
                BookId: 42,
                FilmId: 64
            },
            {
                BookId: 42,
                FilmId: 65
            },
            {
                BookId: 43,
                FilmId: 66
            },
            {
                BookId: 43,
                FilmId: 67
            },
            {
                BookId: 45,
                FilmId: 68
            },
            {
                BookId: 45,
                FilmId: 69
            },
            {
                BookId: 45,
                FilmId: 70
            },
            {
                BookId: 45,
                FilmId: 71
            },
            {
                BookId: 46,
                FilmId: 72
            },
            {
                BookId: 46,
                FilmId: 73
            },
            {
                BookId: 46,
                FilmId: 74
            },
            {
                BookId: 48,
                FilmId: 75
            },
            {
                BookId: 49,
                FilmId: 76
            },
            {
                BookId: 50,
                FilmId: 77
            },
            {
                BookId: 50,
                FilmId: 78
            },
            {
                BookId: 52,
                FilmId: 79
            },
            {
                BookId: 53,
                FilmId: 80
            },
            {
                BookId: 57,
                FilmId: 81
            },
            {
                BookId: 58,
                FilmId: 82
            },
            {
                BookId: 58,
                FilmId: 83
            },
            {
                BookId: 58,
                FilmId: 84
            },
            {
                BookId: 59,
                FilmId: 85
            },
            {
                BookId: 60,
                FilmId: 86
            },
            {
                BookId: 60,
                FilmId: 87
            },
            {
                BookId: 60,
                FilmId: 88
            },
            {
                BookId: 62,
                FilmId: 89
            },
            {
                BookId: 63,
                FilmId: 90
            },
            {
                BookId: 63,
                FilmId: 91
            },
            {
                BookId: 63,
                FilmId: 92
            },
            {
                BookId: 64,
                FilmId: 93
            },
            {
                BookId: 65,
                FilmId: 94
            },
            {
                BookId: 66,
                FilmId: 95
            },
            {
                BookId: 66,
                FilmId: 96
            },
            {
                BookId: 67,
                FilmId: 97
            },
            {
                BookId: 67,
                FilmId: 98
            },
            {
                BookId: 69,
                FilmId: 99
            },
            {
                BookId: 70,
                FilmId: 100
            },
            {
                BookId: 70,
                FilmId: 101
            },
            {
                BookId: 70,
                FilmId: 102
            },
            {
                BookId: 71,
                FilmId: 103
            },
            {
                BookId: 72,
                FilmId: 104
            },
            {
                BookId: 72,
                FilmId: 105
            },
            {
                BookId: 72,
                FilmId: 106
            },
            {
                BookId: 72,
                FilmId: 107
            },
            {
                BookId: 72,
                FilmId: 108
            },
            {
                BookId: 72,
                FilmId: 109
            },
            {
                BookId: 74,
                FilmId: 110
            },
            {
                BookId: 76,
                FilmId: 111
            },
            {
                BookId: 76,
                FilmId: 112
            },
            {
                BookId: 80,
                FilmId: 113
            },
            {
                BookId: 80,
                FilmId: 114
            },
            {
                BookId: 80,
                FilmId: 115
            },
            {
                BookId: 80,
                FilmId: 116
            },
            {
                BookId: 81,
                FilmId: 117
            },
            {
                BookId: 83,
                FilmId: 118
            },
            {
                BookId: 84,
                FilmId: 119
            },
            {
                BookId: 87,
                FilmId: 120
            },
            {
                BookId: 87,
                FilmId: 121
            },
            {
                BookId: 88,
                FilmId: 122
            },
            {
                BookId: 89,
                FilmId: 123
            },
            {
                BookId: 90,
                FilmId: 124
            },
            {
                BookId: 91,
                FilmId: 125
            },
            {
                BookId: 93,
                FilmId: 126
            },
            {
                BookId: 95,
                FilmId: 127
            },
            {
                BookId: 95,
                FilmId: 128
            },
            {
                BookId: 100,
                FilmId: 129
            },
            {
                BookId: 100,
                FilmId: 130
            },
            {
                BookId: 101,
                FilmId: 131
            },
            {
                BookId: 101,
                FilmId: 132
            },
            {
                BookId: 101,
                FilmId: 133
            },
            {
                BookId: 101,
                FilmId: 134
            },
            {
                BookId: 101,
                FilmId: 135
            },
            {
                BookId: 101,
                FilmId: 136
            },
            {
                BookId: 101,
                FilmId: 137
            },
            {
                BookId: 103,
                FilmId: 138
            },
            {
                BookId: 103,
                FilmId: 139
            },
            {
                BookId: 110,
                FilmId: 140
            },
            {
                BookId: 110,
                FilmId: 141
            },
            {
                BookId: 113,
                FilmId: 142
            },
            {
                BookId: 114,
                FilmId: 143
            },
            {
                BookId: 115,
                FilmId: 144
            },
            {
                BookId: 115,
                FilmId: 145
            },
            {
                BookId: 115,
                FilmId: 146
            },
            {
                BookId: 115,
                FilmId: 147
            },
            {
                BookId: 116,
                FilmId: 148
            },
            {
                BookId: 117,
                FilmId: 149
            },
            {
                BookId: 118,
                FilmId: 150
            },
            {
                BookId: 120,
                FilmId: 151
            },
            {
                BookId: 120,
                FilmId: 152
            },
            {
                BookId: 125,
                FilmId: 153
            },
            {
                BookId: 128,
                FilmId: 154
            },
            {
                BookId: 128,
                FilmId: 155
            },
            {
                BookId: 128,
                FilmId: 156
            },
            {
                BookId: 129,
                FilmId: 157
            },
            {
                BookId: 129,
                FilmId: 158
            },
            {
                BookId: 130,
                FilmId: 159
            },
            {
                BookId: 132,
                FilmId: 160
            },
            {
                BookId: 132,
                FilmId: 161
            },
            {
                BookId: 136,
                FilmId: 162
            },
            {
                BookId: 138,
                FilmId: 163
            },
            {
                BookId: 140,
                FilmId: 164
            },
            {
                BookId: 140,
                FilmId: 165
            },
            {
                BookId: 145,
                FilmId: 166
            },
            {
                BookId: 147,
                FilmId: 167
            },
            {
                BookId: 148,
                FilmId: 168
            },
            {
                BookId: 149,
                FilmId: 169
            },
            {
                BookId: 150,
                FilmId: 170
            },
            {
                BookId: 150,
                FilmId: 171
            },
            {
                BookId: 152,
                FilmId: 172
            },
            {
                BookId: 152,
                FilmId: 173
            },
            {
                BookId: 154,
                FilmId: 174
            },
            {
                BookId: 154,
                FilmId: 175
            },
            {
                BookId: 154,
                FilmId: 176
            },
            {
                BookId: 155,
                FilmId: 177
            },
            {
                BookId: 159,
                FilmId: 178
            },
            {
                BookId: 163,
                FilmId: 179
            },
            {
                BookId: 163,
                FilmId: 179
            },
            {
                BookId: 166,
                FilmId: 181
            },
            {
                BookId: 167,
                FilmId: 182
            },
            {
                BookId: 168,
                FilmId: 183
            },
            {
                BookId: 173,
                FilmId: 184
            },
            {
                BookId: 175,
                FilmId: 185
            },
            {
                BookId: 175,
                FilmId: 186
            },
            {
                BookId: 175,
                FilmId: 187
            },
            {
                BookId: 176,
                FilmId: 188
            },
            {
                BookId: 177,
                FilmId: 189
            },
            {
                BookId: 177,
                FilmId: 190
            },
            {
                BookId: 177,
                FilmId: 191
            },
            {
                BookId: 178,
                FilmId: 192
            },
            {
                BookId: 179,
                FilmId: 193
            },
            {
                BookId: 179,
                FilmId: 194
            },
            {
                BookId: 180,
                FilmId: 195
            },
            {
                BookId: 182,
                FilmId: 196
            },
            {
                BookId: 182,
                FilmId: 197
            },
            {
                BookId: 183,
                FilmId: 198
            },
            {
                BookId: 184,
                FilmId: 199
            },
            {
                BookId: 188,
                FilmId: 200
            },
            {
                BookId: 193,
                FilmId: 201
            },
            {
                BookId: 194,
                FilmId: 202
            },
            {
                BookId: 194,
                FilmId: 203
            },
            {
                BookId: 195,
                FilmId: 204
            },
            {
                BookId: 201,
                FilmId: 205
            },
            {
                BookId: 202,
                FilmId: 206
            },
            {
                BookId: 202,
                FilmId: 207
            },
            {
                BookId: 202,
                FilmId: 208
            },
            {
                BookId: 202,
                FilmId: 209
            },
            {
                BookId: 204,
                FilmId: 210
            },
            {
                BookId: 204,
                FilmId: 211
            },
            {
                BookId: 207,
                FilmId: 212
            },
            {
                BookId: 209,
                FilmId: 213
            },
            {
                BookId: 210,
                FilmId: 214
            },
            {
                BookId: 210,
                FilmId: 215
            },
            {
                BookId: 210,
                FilmId: 216
            },
            {
                BookId: 211,
                FilmId: 217
            },
            {
                BookId: 212,
                FilmId: 218
            },
            {
                BookId: 212,
                FilmId: 219
            },
            {
                BookId: 214,
                FilmId: 220
            },
            {
                BookId: 214,
                FilmId: 221
            },
            {
                BookId: 214,
                FilmId: 222
            },
            {
                BookId: 214,
                FilmId: 223
            },
            {
                BookId: 214,
                FilmId: 224
            },
            {
                BookId: 216,
                FilmId: 225
            },
            {
                BookId: 218,
                FilmId: 226
            },
            {
                BookId: 220,
                FilmId: 227
            },
            {
                BookId: 221,
                FilmId: 228
            },
            {
                BookId: 224,
                FilmId: 229
            },
            {
                BookId: 226,
                FilmId: 230
            },
            {
                BookId: 227,
                FilmId: 231
            },
            {
                BookId: 227,
                FilmId: 232
            },
            {
                BookId: 231,
                FilmId: 233
            },
            {
                BookId: 231,
                FilmId: 234
            },
            {
                BookId: 235,
                FilmId: 235
            },
            {
                BookId: 236,
                FilmId: 236
            },
            {
                BookId: 238,
                FilmId: 237
            },
            {
                BookId: 240,
                FilmId: 238
            },
            {
                BookId: 240,
                FilmId: 239
            },
            {
                BookId: 244,
                FilmId: 240
            },
            {
                BookId: 245,
                FilmId: 241
            },
            {
                BookId: 248,
                FilmId: 242
            },
            {
                BookId: 249,
                FilmId: 243
            },
            {
                BookId: 249,
                FilmId: 244
            },
            {
                BookId: 249,
                FilmId: 245
            },
            {
                BookId: 251,
                FilmId: 246
            },
            {
                BookId: 251,
                FilmId: 247
            },
            {
                BookId: 252,
                FilmId: 248
            },
            {
                BookId: 253,
                FilmId: 249
            },
            {
                BookId: 253,
                FilmId: 250
            },
            {
                BookId: 253,
                FilmId: 251
            },
            {
                BookId: 254,
                FilmId: 252
            },
            {
                BookId: 255,
                FilmId: 253
            },
            {
                BookId: 257,
                FilmId: 254
            },
            {
                BookId: 257,
                FilmId: 255
            },
            {
                BookId: 260,
                FilmId: 256
            },
            {
                BookId: 261,
                FilmId: 257
            },
            {
                BookId: 261,
                FilmId: 258
            },
            {
                BookId: 262,
                FilmId: 259
            },
            {
                BookId: 262,
                FilmId: 260
            },
            {
                BookId: 266,
                FilmId: 261
            },
            {
                BookId: 267,
                FilmId: 262
            },
            {
                BookId: 273,
                FilmId: 263
            },
            {
                BookId: 276,
                FilmId: 264
            },
            {
                BookId: 279,
                FilmId: 265
            },
            {
                BookId: 281,
                FilmId: 266
            },
            {
                BookId: 282,
                FilmId: 267
            },
            {
                BookId: 284,
                FilmId: 268
            },
            {
                BookId: 285,
                FilmId: 269
            },
            {
                BookId: 286,
                FilmId: 270
            },
            {
                BookId: 287,
                FilmId: 271
            },
            {
                BookId: 290,
                FilmId: 272
            },
            {
                BookId: 290,
                FilmId: 273
            },
            {
                BookId: 291,
                FilmId: 274
            },
            {
                BookId: 295,
                FilmId: 275
            },
            {
                BookId: 296,
                FilmId: 276
            }
        ];
        
        const resultCategory = contentFilms.map(item => {
            item.createdAt = new Date();
            item.updatedAt = new Date();
            return item;
        });
        
        return queryInterface.bulkInsert('booksCategory', resultCategory, {});
    },
    
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('booksFilms', null, {});
    }
};
