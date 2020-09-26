import { dir } from "./dir";

module.exports = {
  info: {
    title: "Minna Swagger API",
    version: "1.0.0",
    description: "Server Minna App | Nguyễn Thái Tiệp",

    server: [dir],
  },
  host: dir,
  basePath: "/",
  swagger: "2.0",
  paths: {
    "/alphabet": {
      get: {
        responses: {
          "200": {
            description: "Success",
            schema: {
              $ref: "#/definitions/alphabets",
            },
            "x-nullable": true,
          },
        },
      },
    },
    "/unit": {
      get: {
        responses: {
          "200": {
            description: "Success",
            schema: {
              $ref: "#/definitions/unit",
            },
            "x-nullable": true,
          },
        },
      },
    },
    "/unit/words/{index}": {
      get: {
        parameters: [
          {
            type: "integer",
            name: "index",
            in: "path",
            required: true,
            "x-nullable": false,
            format: "int32",
          },
        ],
        responses: {
          "200": {
            description: "Success",
            schema: {
              $ref: "#/definitions/word",
            },
            "x-nullable": true,
          },
        },
      },
    },
    "/practice/alphabet/{amount}": {
      get: {
        parameters: [
          {
            type: "integer",
            name: "amount",
            in: "path",
            required: true,
            "x-nullable": false,
            format: "int32",
          },
        ],
        responses: {
          "200": {
            description: "Success",
            "x-nullable": true,
          },
        },
      },
    },
    "/practice/unit/word/{unitId}/{amount}": {
      get: {
        parameters: [
          {
            type: "integer",
            name: "amount",
            in: "path",
            required: true,
            "x-nullable": false,
            format: "int32",
          },
          {
            type: "integer",
            name: "unitId",
            in: "path",
            required: true,
            "x-nullable": false,
            format: "int32",
          },
        ],
        responses: {
          "200": {
            description: "Success",
            "x-nullable": true,
          },
        },
      },
    },
    "/practice/unit/write/{unitId}/{amount}": {
      get: {
        parameters: [
          {
            type: "integer",
            name: "amount",
            in: "path",
            required: true,
            "x-nullable": false,
            format: "int32",
          },
          {
            type: "integer",
            name: "unitId",
            in: "path",
            required: true,
            "x-nullable": false,
            format: "int32",
          },
        ],
        responses: {
          "200": {
            description: "Success",
            "x-nullable": true,
          },
        },
      },
    },
  },
  definitions: {
    alphabet: {
      type: "object",

      properties: {
        id: { type: "number" },
        katakana: { type: "string" },
        hiragana: { type: "string" },
        romaji: { type: "string" },
        voice: { type: "string" },
        KatakanaWrite: { type: "string" },
        HiraganaWrite: { type: "string" },
        example: { type: "string" },
        index: { type: "number" },
      },
    },
    unit: {
      type: "object",
      properties: {
        id: { type: "number" },
        index: { type: "number" },
        name: { type: "number" },
        subject: { type: "number" },
        description: { type: "number" },
        kotoba: { type: "number" },
      },
    },
    alphabets: {
      type: "object",
      properties: {
        units: {
          type: "object",
          additionalProperties: {
            $ref: "#/definitions/alphabet",
          },
        },
      },
    },
  },
  responses: {},
  parameters: {},
  securityDefinitions: {},
};
