"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ImplementPrefixTrie_1 = __importDefault(require("./ImplementPrefixTrie"));
const LongestWordInDictionary_1 = __importDefault(require("./LongestWordInDictionary"));
const TreeDFSMain = () => {
    (0, ImplementPrefixTrie_1.default)();
    (0, LongestWordInDictionary_1.default)();
};
exports.default = TreeDFSMain;
