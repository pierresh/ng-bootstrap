import {Tree} from '@angular-devkit/schematics';
import {SchematicTestRunner} from '@angular-devkit/schematics/testing';

import {createTestApp} from '../utils/testing';
import * as messages from './messages';

// Helper function to get file content (replaces @schematics/angular/utility/test)
function getFileContent(tree: Tree, path: string): string {
  const buffer = tree.read(path);
  if (!buffer) {
    throw new Error(`File ${path} does not exist`);
  }
  return buffer.toString('utf-8');
}


describe(`ng add '@ng-bootstrap/ng-bootstrap'`, () => {
  let runner: SchematicTestRunner;
  let appTree: Tree;

  beforeEach(async() => {
    runner = new SchematicTestRunner('schematics', require.resolve('../collection.json'));
    appTree = await createTestApp(runner);
  });

  it(`should add missing dependencies to 'package.json'`, async() => {
    const tree = await runner.runSchematic('ng-add', {}, appTree);
    if (!tree) throw new Error('Tree is undefined');
    const {dependencies} = JSON.parse(getFileContent(tree, '/package.json'));

    expect(dependencies['@ng-bootstrap/ng-bootstrap']).toBeDefined('@ng-bootstrap/ng-bootstrap should be installed');
    expect(dependencies['bootstrap']).toBeDefined('bootstrap should be installed');
    expect(dependencies['@angular/localize']).toBeDefined('@angular/localize should be installed');
  });

  it(`should report when specified 'project' is not found`, async() => {
    let message = '';
    try {
      await runner.runSchematic('ng-add', {project: 'test'}, appTree);
    } catch (e) {
      message = (e as Error).message;
    } finally {
      expect(message).toBe(messages.noProject('test'));
    }
  });
});
