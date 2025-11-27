import {
  SchematicTestRunner,
  UnitTestTree,
} from '@angular-devkit/schematics/testing';

async function createWorkspace(runner: SchematicTestRunner): Promise<UnitTestTree> {
  const tree = await runner
      .runExternalSchematic('@schematics/angular', 'workspace', {
        name: 'workspace',
        version: '13.0.0',
        newProjectRoot: 'projects',
      });
  if (!tree) {
    throw new Error('Failed to create workspace');
  }
  return tree;
}

/**
 * Creates a sample workspace with two applications: 'app' (default) and 'second-app'
 */
export async function createTestApp(runner: SchematicTestRunner, appOptions = {}): Promise<UnitTestTree> {
  let tree = await createWorkspace(runner);
  const appTree =
      await runner.runExternalSchematic('@schematics/angular', 'application', {name: 'app', ...appOptions}, tree);
  if (!appTree) {
    throw new Error('Failed to create app');
  }
  tree = appTree;

  const secondAppTree = await runner
      .runExternalSchematic('@schematics/angular', 'application', {name: 'second-app', ...appOptions}, tree);
  if (!secondAppTree) {
    throw new Error('Failed to create second-app');
  }
  return secondAppTree;
}
