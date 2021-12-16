import chalk from 'chalk';
import { Command, CommandOptions } from '@teambit/cli';
import { DeprecationMain } from './deprecation.main.runtime';

export class UndeprecateCmd implements Command {
  name = 'undeprecate <id>';
  group = 'collaborate';
  description = 'undeprecate a deprecated component (local/remote)';
  alias = '';
  options = [] as CommandOptions;
  loader = true;
  migration = true;
  skipWorkspace = true;
  remoteOp = true;

  constructor(private deprecation: DeprecationMain) {}

  async report([id]: [string]): Promise<string> {
    const result = await this.deprecation.unDeprecate(id);
    if (result) {
      return chalk.green(`the component "${id}" has been undeprecated successfully`);
    }
    return chalk.bold(`the component "${id}" is already undeprecated. no changes have been made`);
  }
}