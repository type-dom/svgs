#!/usr/bin/env node

/**
 * 生成分类索引文件
 * 由于构建工具将 export * 合并到主 index.mjs，
 * 我们需要手动创建这些索引文件以支持子路径导入
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distLibDir = path.join(__dirname, "..", "dist", "lib");

// 定义分类及其对应的源文件
const categories = [
  { name: "common-index", sourceFile: "common-index.d.mts" },
  { name: "element-plus-index", sourceFile: "element-plus-index.d.mts" },
  { name: "fluentui-index", sourceFile: "fluentui-index.d.mts" },
  { name: "other/index", sourceFile: "other/index.d.mts", isSubdir: true },
];

// 为每个分类创建 .mjs 文件
categories.forEach(({ name, sourceFile, isSubdir }) => {
  const dtsPath = isSubdir ? path.join(distLibDir, sourceFile) : path.join(distLibDir, sourceFile);
  const mjsPath = isSubdir
    ? path.join(distLibDir, name + ".mjs")
    : path.join(distLibDir, name + ".mjs");

  if (!fs.existsSync(dtsPath)) {
    console.warn(`⚠️  ${sourceFile} not found, skipping...`);
    return;
  }

  // 读取 .d.mts 文件并生成对应的 .mjs 文件
  const dtsContent = fs.readFileSync(dtsPath, "utf-8");

  // 提取所有的 import 语句并转换为 re-export
  const lines = dtsContent.split("\n");
  const exports = [];

  lines.forEach((line) => {
    // 匹配: import { Xxx } from "./yyy.mjs";
    const match = line.match(/import\s*{\s*(\w+)\s*}\s*from\s*"([^"]+)";/);
    if (match) {
      const exportName = match[1];
      const importPath = match[2];
      exports.push(`export { ${exportName} } from '${importPath}';`);
    }
  });

  // 写入 .mjs 文件
  const mjsContent = exports.join("\n") + "\n";
  fs.writeFileSync(mjsPath, mjsContent, "utf-8");

  console.log(`✓ Generated ${name}.mjs (${exports.length} exports)`);
});

console.log("\n✅ Index files generation complete!");
