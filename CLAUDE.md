# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **ng-bootstrap v11** - Angular powered Bootstrap components.

- Originally developed for Angular 13
- Published as `@pierresh/ng-bootstrap`
- Currently maintained to stay compatible with recent Angular versions
- Version naming: `11.X.Y` where X represents the Angular major version (e.g., 11.20.0 for Angular 20)

## Angular Version Upgrade Process

When upgrading to a new Angular major version, follow these steps to ensure everything works:

### 1. Update Dependencies

Update these packages in `package.json`:
- `@angular/*` packages (core, common, forms, animations, etc.)
- `@angular/cli`
- `@angular-devkit/*` packages
- `@schematics/angular` (must match Angular CLI version)
- `@angular-builders/custom-webpack` (must match Angular version)
- `@angular-eslint/*` packages (must match Angular version)
- `@typescript-eslint/*` packages (check compatibility with Angular ESLint)

Also update in `src/package.json`:
- Peer dependencies for `@angular/*` packages

### 2. Update Node.js Version

Check Angular's Node.js requirements and update if needed:
```bash
nvm install <version>
nvm use <version>
yarn install
```

### 3. Check for Breaking Changes

Common breaking changes to watch for:

**Angular 20 Breaking Changes:**
- EventEmitter no longer extends Subject
  - `.next()` → `.emit()` for EventEmitter
  - Wrap EventEmitter in Observable to use RxJS operators like `.pipe()`, `.asObservable()`
  - Example fix:
    ```typescript
    // Old (Angular 19):
    this._ngZone.onStable.pipe(take(1)).subscribe(...)

    // New (Angular 20):
    new Observable(subscriber => {
      const subscription = this._ngZone.onStable.subscribe(value => subscriber.next(value));
      return () => subscription.unsubscribe();
    }).pipe(take(1)).subscribe(...)
    ```

**TypeScript ESLint v8 Breaking Changes:**
- Stylistic rules removed (e.g., `@typescript-eslint/semi`)
- Update `.eslintrc.json` to disable or remove deprecated rules

**Angular Builder Changes:**
- Check `angular.json` for deprecated options
- Angular 19+ removed `aot` and `buildOptimizer` options (always enabled)

### 4. Fix Build Configuration

Update configuration files:
- `schematics/tsconfig.json`: May need `"moduleResolution": "node"` override
- `.eslintrc.json`: Disable new strict rules if needed
- `angular.json`: Remove deprecated build options

### 5. Run Full Build and Test

```bash
# Build library
yarn ngb:build

# Run linting
yarn demo:lint

# Build demo
yarn demo:build

# Full build (includes all of the above)
yarn build
```

### 6. Update Package Version

Update version in both:
- `package.json`: `11.X.0` where X = Angular major version
- `src/package.json`: Same version and update peer dependencies

### 7. Commit Changes

Create a commit with detailed changelog:
```bash
git add .
git commit -m "build: upgrade from Angular X to Angular Y"
```

Include in commit message:
- Dependency version updates
- Breaking changes fixed
- Configuration changes
- Build fixes

## Files That Often Need Changes During Angular Upgrades

- **Core library files** (if EventEmitter usage changed):
  - `src/accordion/accordion.ts`
  - `src/carousel/carousel.ts`
  - `src/collapse/collapse.ts`
  - `src/datepicker/datepicker.ts`
  - `src/dropdown/dropdown.ts`
  - `src/modal/modal-backdrop.ts`
  - `src/modal/modal-window.ts`
  - `src/toast/toast.ts`
  - `src/util/popup.ts`

- **Configuration files**:
  - `package.json`
  - `src/package.json`
  - `.eslintrc.json`
  - `angular.json`
  - `schematics/tsconfig.json`

- **Demo files** (for new ESLint rules):
  - `demo/src/app/**/*.ts`

## Publishing

After successful upgrade and testing:

```bash
# Ensure clean build
yarn build

# Navigate to dist folder
cd dist/ng-bootstrap

# Publish to npm
npm publish --access public
```

## Previous Upgrades

This repository has been successfully upgraded through:
- Angular 13 → 14 (original version)
- Angular 14 → 15
- Angular 15 → 16
- Angular 16 → 17
- Angular 17 → 18
- Angular 18 → 19
- Angular 19 → 20 (current)

Each upgrade followed the process documented above.
