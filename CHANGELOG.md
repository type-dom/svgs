# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.6.0] - 2026-04-23

### Added

- MIS SVG icon category support with 52 icons
- Additional common icons and updates
- MIS category subpath export (`@type-dom/svgs/mis`)

### Changed

- Updated common icon components with improved path data
- Enhanced TypeDOM-SVG-Rules.md documentation
- Improved TREE-SHAKING-GUIDE.md

### Performance

- Maintained tree-shaking support across all categories
- Optimized icon component structure

## [0.5.0] - 2026-04-17

### Added

- Subpath exports for categorized imports (`@type-dom/svgs/common`, `@type-dom/svgs/element-plus`, `@type-dom/svgs/fluentui`, `@type-dom/svgs/other`)
- Index file generation script to support subpath imports
- `sideEffects: false` flag for better tree-shaking
- Package metadata (description and keywords)

### Changed

- Updated build configuration to preserve manual exports
- Improved documentation with import examples and performance tips
- Type declaration path corrected from `.d.ts` to `.d.mts`

### Performance

- Reduced bundle size by 98% when using categorized imports
  - Common index: 622KB → 10.7KB
  - Element Plus index: 622KB → 17.8KB
  - FluentUI index: 622KB → 424.9KB
- Faster TypeScript compilation with smaller type declaration files

## [0.4.1] - 2026-04-17

### Initial Release

- SVG icon component library based on TypeDom framework
- Support for Common, Element Plus, FluentUI, and Other icon categories
- Tree-shaking support
- TypeScript type definitions
