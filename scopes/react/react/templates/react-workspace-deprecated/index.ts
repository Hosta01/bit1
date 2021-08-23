import { WorkspaceContext, WorkspaceTemplate } from '@teambit/generator';
import { workspaceConfig } from '../common-files/workspace-config';
import { readme } from '../common-files/readme-file';
import { gitIgnore } from '../common-files/git-ignore';
import { assetTypes } from '../common-files/types/asset';
import { styleTypes } from '../common-files/types/style';

export const deprecatedReactWorkspaceTemplate: WorkspaceTemplate = {
  name: 'react-workspace',
  description: 'React workspace with demo components',
  hidden: true,
  generateFiles: async (context: WorkspaceContext) => {
    return [
      {
        relativePath: 'workspace.jsonc',
        content: await workspaceConfig(context),
      },
      {
        relativePath: `.gitignore`,
        content: gitIgnore(),
      },
      {
        relativePath: `README.md`,
        content: readme(),
      },
      {
        relativePath: `types/asset.d.ts`,
        content: assetTypes,
      },
      {
        relativePath: `types/style.d.ts`,
        content: styleTypes,
      },
    ];
  },
  importComponents: () => {
    return [
      {
        id: 'teambit.react/templates/envs/my-react',
        targetName: 'envs/my-react',
        path: 'demo/envs/my-react',
      },
      { id: 'teambit.react/templates/ui/text', targetName: 'ui/text', path: 'demo/ui/text' },
      { id: 'teambit.react/templates/ui/heading', targetName: 'ui/heading', path: 'demo/ui/heading' },
      { id: 'teambit.react/templates/ui/card', targetName: 'ui/card', path: 'demo/ui/card' },
      {
        id: 'teambit.react/templates/pages/welcome',
        targetName: 'pages/welcome',
        path: 'demo/pages/welcome',
      },
    ];
  },
};