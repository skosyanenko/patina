
exports.seed = function(knex) {
  return knex('books__films').del()
    .then(function () {
      return knex('books__films').insert([
        {
          "book_id": 1,
          "film_id": 1,
       },
        {
          "book_id": 2,
          "film_id": 2,
       },
        {
          "book_id": 2,
          "film_id": 3,
       },
        {
          "book_id": 2,
          "film_id": 4,
       },
        {
          "book_id": 2,
          "film_id": 5,
       },
        {
          "book_id": 2,
          "film_id": 6,
        },
        {
          "book_id": 2,
          "film_id": 7,
       },
        {
          "book_id": 2,
          "film_id": 8,
      },
        {
          "book_id": 2,
          "film_id": 9,
       },
        {
          "book_id": 2,
          "film_id": 10,
        },
        {
          "book_id": 4,
          "film_id": 11,
        },
        {
          "book_id": 5,
          "film_id": 12,
       },
        {
          "book_id": 6,
          "film_id": 13,
        },
        {
          "book_id": 6,
          "film_id": 14,
       },
        {
          "book_id": 6,
          "film_id": 15,
        },
        {
          "book_id": 6,
          "film_id": 16,
       },
        {
          "book_id": 6,
          "film_id": 17,
        },
        {
          "book_id": 6,
          "film_id": 18,
       },
        {
          "book_id": 6,
          "film_id": 19,
       },
        {
          "book_id": 7,
          "film_id": 20,
        },
        {
          "book_id": 7,
          "film_id": 21,
        },
        {
          "book_id": 8,
          "film_id": 22,
        },
        {
          "book_id": 9,
          "film_id": 23,
       },
        {
          "book_id": 10,
          "film_id": 24,
        },
        {
          "book_id": 11,
          "film_id": 25,
       },
        {
          "book_id": 12,
          "film_id": 26,
        },
        {
          "book_id": 13,
          "film_id": 27,
       },
        {
          "book_id": 14,
          "film_id": 28,
       },
        {
          "book_id": 15,
          "film_id": 29,
        },
        {
          "book_id": 16,
          "film_id": 30,
        },
        {
          "book_id": 18,
          "film_id": 31,
        },
        {
          "book_id": 22,
          "film_id": 32,
        },
        {
          "book_id": 23,
          "film_id": 33,
        },
        {
          "book_id": 23,
          "film_id": 34,
        },
        {
          "book_id": 23,
          "film_id": 35,
        },
        {
          "book_id": 23,
          "film_id": 36,
        },
        {
          "book_id": 27,
          "film_id": 37,
        },
        {
          "book_id": 27,
          "film_id": 38,
        },
        {
          "book_id": 27,
          "film_id": 39,
        },
        {
          "book_id": 27,
          "film_id": 40,
        },
        {
          "book_id": 27,
          "film_id": 41,
        },
        {
          "book_id": 28,
          "film_id": 42,
        },
        {
          "book_id": 28,
          "film_id": 43,
        },
        {
          "book_id": 28,
          "film_id": 44,
        },
        {
          "book_id": 28,
          "film_id": 45,
        },
        {
          "book_id": 28,
          "film_id": 46,
        },
        {
          "book_id": 30,
          "film_id": 47,
        },
        {
          "book_id": 32,
          "film_id": 48,
        },
        {
          "book_id": 32,
          "film_id": 49,
        },
        {
          "book_id": 33,
          "film_id": 50,
        },
        {
          "book_id": 34,
          "film_id": 51,
        },
        {
          "book_id": 34,
          "film_id": 52,
        },
        {
          "book_id": 34,
          "film_id": 53,
        },
        {
          "book_id": 34,
          "film_id": 54,
        },
        {
          "book_id": 34,
          "film_id": 55,
        },
        {
          "book_id": 34,
          "film_id": 56,
        },
        {
          "book_id": 34,
          "film_id": 57,
        },
        {
          "book_id": 36,
          "film_id": 58,
        },
        {
          "book_id": 37,
          "film_id": 59,
        },
        {
          "book_id": 37,
          "film_id": 60,
        },
        {
          "book_id": 39,
          "film_id": 61,
        },
        {
          "book_id": 39,
          "film_id": 62,
        },
        {
          "book_id": 40,
          "film_id": 63,
        },
        {
          "book_id": 42,
          "film_id": 64,
        },
        {
          "book_id": 42,
          "film_id": 65,
        },
        {
          "book_id": 43,
          "film_id": 66,
        },
        {
          "book_id": 43,
          "film_id": 67,
        },
        {
          "book_id": 45,
          "film_id": 68,
        },
        {
          "book_id": 45,
          "film_id": 69,
        },
        {
          "book_id": 45,
          "film_id": 70,
        },
        {
          "book_id": 45,
          "film_id": 71,
        },
        {
          "book_id": 46,
          "film_id": 72,
        },
        {
          "book_id": 46,
          "film_id": 73,
        },
        {
          "book_id": 46,
          "film_id": 74,
        },
        {
          "book_id": 48,
          "film_id": 75,
        },
        {
          "book_id": 49,
          "film_id": 76,
        },
        {
          "book_id": 50,
          "film_id": 77,
        },
        {
          "book_id": 50,
          "film_id": 78,
        },
        {
          "book_id": 52,
          "film_id": 79,
        },
        {
          "book_id": 53,
          "film_id": 80,
        },
        {
          "book_id": 57,
          "film_id": 81,
        },
        {
          "book_id": 58,
          "film_id": 82,
        },
        {
          "book_id": 58,
          "film_id": 83,
        },
        {
          "book_id": 58,
          "film_id": 84,
        },
        {
          "book_id": 59,
          "film_id": 85,
        },
        {
          "book_id": 60,
          "film_id": 86,
        },
        {
          "book_id": 60,
          "film_id": 87,
        },
        {
          "book_id": 60,
          "film_id": 88,
        },
        {
          "book_id": 62,
          "film_id": 89,
        },
        {
          "book_id": 63,
          "film_id": 90,
        },
        {
          "book_id": 63,
          "film_id": 91,
        },
        {
          "book_id": 63,
          "film_id": 92,
        },
        {
          "book_id": 64,
          "film_id": 93,
        },
        {
          "book_id": 65,
          "film_id": 94,
        },
        {
          "book_id": 66,
          "film_id": 95,
        },
        {
          "book_id": 66,
          "film_id": 96,
        },
        {
          "book_id": 67,
          "film_id": 97,
        },
        {
          "book_id": 67,
          "film_id": 98,
        },
        {
          "book_id": 69,
          "film_id": 99,
        },
        {
          "book_id": 70,
          "film_id": 100,
        },
        {
          "book_id": 70,
          "film_id": 101,
        },
        {
          "book_id": 70,
          "film_id": 102,
        },
        {
          "book_id": 71,
          "film_id": 103,
        },
        {
          "book_id": 72,
          "film_id": 104,
        },
        {
          "book_id": 72,
          "film_id": 105,
        },
        {
          "book_id": 72,
          "film_id": 106,
        },
        {
          "book_id": 72,
          "film_id": 107,
        },
        {
          "book_id": 72,
          "film_id": 108,
        },
        {
          "book_id": 72,
          "film_id": 109,
        },
        {
          "book_id": 74,
          "film_id": 110,
        },
        {
          "book_id": 76,
          "film_id": 111,
        },
        {
          "book_id": 76,
          "film_id": 112,
        },
        {
          "book_id": 80,
          "film_id": 113,
        },
        {
          "book_id": 80,
          "film_id": 114,
        },
        {
          "book_id": 80,
          "film_id": 115,
        },
        {
          "book_id": 80,
          "film_id": 116,
        },
        {
          "book_id": 81,
          "film_id": 117,
        },
        {
          "book_id": 83,
          "film_id": 118,
        },
        {
          "book_id": 84,
          "film_id": 119,
        },
        {
          "book_id": 87,
          "film_id": 120,
        },
        {
          "book_id": 87,
          "film_id": 121,
        },
        {
          "book_id": 88,
          "film_id": 122,
        },
        {
          "book_id": 89,
          "film_id": 123,
        },
        {
          "book_id": 90,
          "film_id": 124,
        },
        {
          "book_id": 91,
          "film_id": 125,
        },
        {
          "book_id": 93,
          "film_id": 126,
        },
        {
          "book_id": 95,
          "film_id": 127,
        },
        {
          "book_id": 95,
          "film_id": 128,
        },
        {
          "book_id": 100,
          "film_id": 129,
        },
        {
          "book_id": 100,
          "film_id": 130,
        },
        {
          "book_id": 101,
          "film_id": 131,
        },
        {
          "book_id": 101,
          "film_id": 132,
        },
        {
          "book_id": 101,
          "film_id": 133,
        },
        {
          "book_id": 101,
          "film_id": 134,
        },
        {
          "book_id": 101,
          "film_id": 135,
        },
        {
          "book_id": 101,
          "film_id": 136,
        },
        {
          "book_id": 101,
          "film_id": 137,
        },
        {
          "book_id": 103,
          "film_id": 138,
        },
        {
          "book_id": 103,
          "film_id": 139,
        },
        {
          "book_id": 110,
          "film_id": 140,
        },
        {
          "book_id": 110,
          "film_id": 141,
        },
        {
          "book_id": 113,
          "film_id": 142,
        },
        {
          "book_id": 114,
          "film_id": 143,
        },
        {
          "book_id": 115,
          "film_id": 144,
        },
        {
          "book_id": 115,
          "film_id": 145,
        },
        {
          "book_id": 115,
          "film_id": 146,
        },
        {
          "book_id": 115,
          "film_id": 147,
        },
        {
          "book_id": 116,
          "film_id": 148,
        },
        {
          "book_id": 117,
          "film_id": 149,
        },
        {
          "book_id": 118,
          "film_id": 150,
        },
        {
          "book_id": 120,
          "film_id": 151,
        },
        {
          "book_id": 120,
          "film_id": 152,
        },
        {
          "book_id": 125,
          "film_id": 153,
        },
        {
          "book_id": 128,
          "film_id": 154,
        },
        {
          "book_id": 128,
          "film_id": 155,
        },
        {
          "book_id": 128,
          "film_id": 156,
        },
        {
          "book_id": 129,
          "film_id": 157,
        },
        {
          "book_id": 129,
          "film_id": 158,
        },
        {
          "book_id": 130,
          "film_id": 159,
        },
        {
          "book_id": 132,
          "film_id": 160,
        },
        {
          "book_id": 132,
          "film_id": 161,
        },
        {
          "book_id": 136,
          "film_id": 162,
        },
        {
          "book_id": 138,
          "film_id": 163,
        },
        {
          "book_id": 140,
          "film_id": 164,
        },
        {
          "book_id": 140,
          "film_id": 165,
        },
        {
          "book_id": 145,
          "film_id": 166,
        },
        {
          "book_id": 147,
          "film_id": 167,
        },
        {
          "book_id": 148,
          "film_id": 168,
        },
        {
          "book_id": 149,
          "film_id": 169,
        },
        {
          "book_id": 150,
          "film_id": 170,
        },
        {
          "book_id": 150,
          "film_id": 171,
        },
        {
          "book_id": 152,
          "film_id": 172,
        },
        {
          "book_id": 152,
          "film_id": 173,
        },
        {
          "book_id": 154,
          "film_id": 174,
        },
        {
          "book_id": 154,
          "film_id": 175,
        },
        {
          "book_id": 154,
          "film_id": 176,
        },
        {
          "book_id": 155,
          "film_id": 177,
        },
        {
          "book_id": 159,
          "film_id": 178,
        },
        {
          "book_id": 163,
          "film_id": 179,
        },
        {
          "book_id": 163,
          "film_id": 180,
        },
        {
          "book_id": 166,
          "film_id": 181,
        },
        {
          "book_id": 167,
          "film_id": 182,
        },
        {
          "book_id": 168,
          "film_id": 183,
        },
        {
          "book_id": 173,
          "film_id": 184,
        },
        {
          "book_id": 175,
          "film_id": 185,
        },
        {
          "book_id": 175,
          "film_id": 186,
        },
        {
          "book_id": 175,
          "film_id": 187,
        },
        {
          "book_id": 176,
          "film_id": 188,
        },
        {
          "book_id": 177,
          "film_id": 189,
        },
        {
          "book_id": 177,
          "film_id": 190,
        },
        {
          "book_id": 177,
          "film_id": 191,
        },
        {
          "book_id": 178,
          "film_id": 192,
        },
        {
          "book_id": 179,
          "film_id": 193,
        },
        {
          "book_id": 179,
          "film_id": 194,
        },
        {
          "book_id": 180,
          "film_id": 195,
        },
        {
          "book_id": 182,
          "film_id": 196,
        },
        {
          "book_id": 182,
          "film_id": 197,
        },
        {
          "book_id": 183,
          "film_id": 198,
        },
        {
          "book_id": 184,
          "film_id": 199,
        },
        {
          "book_id": 188,
          "film_id": 200,
        },
        {
          "book_id": 193,
          "film_id": 201,
        },
        {
          "book_id": 194,
          "film_id": 202,
        },
        {
          "book_id": 194,
          "film_id": 203,
        },
        {
          "book_id": 195,
          "film_id": 204,
        },
        {
          "book_id": 201,
          "film_id": 205,
        },
        {
          "book_id": 202,
          "film_id": 206,
        },
        {
          "book_id": 202,
          "film_id": 207,
        },
        {
          "book_id": 202,
          "film_id": 208,
        },
        {
          "book_id": 202,
          "film_id": 209,
        },
        {
          "book_id": 204,
          "film_id": 210,
        },
        {
          "book_id": 204,
          "film_id": 211,
        },
        {
          "book_id": 207,
          "film_id": 212,
        },
        {
          "book_id": 209,
          "film_id": 213,
        },
        {
          "book_id": 210,
          "film_id": 214,
        },
        {
          "book_id": 210,
          "film_id": 215,
        },
        {
          "book_id": 210,
          "film_id": 216,
        },
        {
          "book_id": 211,
          "film_id": 217,
        },
        {
          "book_id": 212,
          "film_id": 218,
        },
        {
          "book_id": 212,
          "film_id": 219,
        },
        {
          "book_id": 214,
          "film_id": 220,
        },
        {
          "book_id": 214,
          "film_id": 221,
        },
        {
          "book_id": 214,
          "film_id": 222,
        },
        {
          "book_id": 214,
          "film_id": 223,
        },
        {
          "book_id": 214,
          "film_id": 224,
        },
        {
          "book_id": 216,
          "film_id": 225,
        },
        {
          "book_id": 218,
          "film_id": 226,
        },
        {
          "book_id": 220,
          "film_id": 227,
        },
        {
          "book_id": 221,
          "film_id": 228,
        },
        {
          "book_id": 224,
          "film_id": 229,
        },
        {
          "book_id": 226,
          "film_id": 230,
        },
        {
          "book_id": 227,
          "film_id": 231,
        },
        {
          "book_id": 227,
          "film_id": 232,
        },
        {
          "book_id": 231,
          "film_id": 233,
        },
        {
          "book_id": 231,
          "film_id": 234,
        },
        {
          "book_id": 235,
          "film_id": 235,
        },
        {
          "book_id": 236,
          "film_id": 236,
        },
        {
          "book_id": 238,
          "film_id": 237,
        },
        {
          "book_id": 240,
          "film_id": 238,
        },
        {
          "book_id": 240,
          "film_id": 239,
        },
        {
          "book_id": 244,
          "film_id": 240,
        },
        {
          "book_id": 245,
          "film_id": 241,
        },
        {
          "book_id": 248,
          "film_id": 242,
        },
        {
          "book_id": 249,
          "film_id": 243,
        },
        {
          "book_id": 249,
          "film_id": 244,
        },
        {
          "book_id": 249,
          "film_id": 245,
        },
        {
          "book_id": 251,
          "film_id": 246,
        },
        {
          "book_id": 251,
          "film_id": 247,
        },
        {
          "book_id": 252,
          "film_id": 248,
        },
        {
          "book_id": 253,
          "film_id": 249,
        },
        {
          "book_id": 253,
          "film_id": 250,
        },
        {
          "book_id": 253,
          "film_id": 251,
        },
        {
          "book_id": 254,
          "film_id": 252,
        },
        {
          "book_id": 255,
          "film_id": 253,
        },
        {
          "book_id": 257,
          "film_id": 254,
        },
        {
          "book_id": 257,
          "film_id": 255,
        },
        {
          "book_id": 260,
          "film_id": 256,
        },
        {
          "book_id": 261,
          "film_id": 257,
        },
        {
          "book_id": 261,
          "film_id": 258,
        },
        {
          "book_id": 262,
          "film_id": 259,
        },
        {
          "book_id": 262,
          "film_id": 260,
        },
        {
          "book_id": 266,
          "film_id": 261,
        },
        {
          "book_id": 267,
          "film_id": 262,
        },
        {
          "book_id": 273,
          "film_id": 263,
        },
        {
          "book_id": 276,
          "film_id": 264,
        },
        {
          "book_id": 279,
          "film_id": 265,
        },
        {
          "book_id": 281,
          "film_id": 266,
        },
        {
          "book_id": 282,
          "film_id": 267,
        },
        {
          "book_id": 284,
          "film_id": 268,
        },
        {
          "book_id": 285,
          "film_id": 269,
        },
        {
          "book_id": 286,
          "film_id": 270,
        },
        {
          "book_id": 287,
          "film_id": 271,
        },
        {
          "book_id": 290,
          "film_id": 272,
        },
        {
          "book_id": 290,
          "film_id": 273,
        },
        {
          "book_id": 291,
          "film_id": 274,
        },
        {
          "book_id": 295,
          "film_id": 275,
        },
        {
          "book_id": 296,
          "film_id": 276,
        },
        {
          "book_id": 300,
          "film_id": 277,
        },
        {
          "book_id": 301,
          "film_id": 278,
        },
        {
          "book_id": 302,
          "film_id": 279,
        },
        {
          "book_id": 303,
          "film_id": 280,
        },
        {
          "book_id": 304,
          "film_id": 281,
        },
        {
          "book_id": 305,
          "film_id": 282,
        },
        {
          "book_id": 306,
          "film_id": 283,
        },
        {
          "book_id": 307,
          "film_id": 284,
        }
      ]);
    });
};
