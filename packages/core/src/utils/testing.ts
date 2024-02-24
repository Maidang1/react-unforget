import * as babel from "@babel/core";
import type t from "@babel/types";
import traverse from "@babel/traverse";

export function transform(
  input: string,
  extraPlugins: babel.PluginItem[] = []
) {
  const { code } = babel.transform(input, {
    configFile: false,
    plugins: ["@babel/plugin-syntax-jsx", ...extraPlugins],
  })!;
  return code;
}

export function parse(input: string, extraPlugins: babel.PluginItem[] = []) {
  const ast = babel.parse(input, {
    configFile: false,
    plugins: ["@babel/plugin-syntax-jsx", ...extraPlugins],
  })!;

  let result: babel.NodePath<t.Program> | null = null;
  traverse(ast, {
    enter(path) {
      result = path as babel.NodePath<t.Program>;
      path.skip();
    },
  });

  return result!;
}