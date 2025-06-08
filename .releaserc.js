const config = {
  branches: [
    'main',
    {
      name: 'develop',
      prerelease: 'beta',
    },
    {
      name: 'alpha',
      prerelease: true,
    },
  ],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        releaseRules: [
          { type: 'feat', release: 'minor' },
          { type: 'fix', release: 'patch' },
          { type: 'perf', release: 'patch' },
          { type: 'security', release: 'patch' },
          { type: 'deps', scope: 'major', release: 'major' },
          { type: 'deps', scope: 'minor', release: 'minor' },
          { type: 'deps', release: 'patch' },
          { type: 'docs', release: false },
          { type: 'style', release: false },
          { type: 'refactor', release: 'patch' },
          { type: 'test', release: false },
          { type: 'build', release: false },
          { type: 'ci', release: false },
          { type: 'chore', release: false },
          { breaking: true, release: 'major' },
        ],
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
        },
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        presetConfig: {
          types: [
            { type: 'feat', section: '✨ Features' },
            { type: 'fix', section: '🐛 Bug Fixes' },
            { type: 'perf', section: '⚡ Performance Improvements' },
            { type: 'security', section: '🔒 Security' },
            { type: 'deps', section: '📦 Dependencies' },
            { type: 'refactor', section: '♻️ Code Refactoring' },
            { type: 'docs', section: '📚 Documentation', hidden: false },
            { type: 'style', section: '💎 Styles', hidden: true },
            { type: 'test', section: '🧪 Tests', hidden: true },
            { type: 'build', section: '🏗️ Build System', hidden: true },
            { type: 'ci', section: '👷 CI/CD', hidden: true },
            { type: 'chore', section: '🔧 Maintenance', hidden: true },
          ],
        },
      },
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
        changelogTitle:
          '# Changelog\n\nAll notable changes to this project will be documented in this file.',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    [
      '@semantic-release/github',
      {
        successComment:
          '🎉 This ${issue.pull_request ? "PR is included" : "issue has been resolved"} in version ${nextRelease.version} :tada:',
        failTitle: 'The automated release is failing 🚨',
        failComment:
          'The automated release from the `${branch.name}` branch failed. :rotating_light:\n\n${errors.map(err => err.message).join("\\n\\n")}',
        labels: ['released'],
        releasedLabels: [
          'released<%= nextRelease.channel ? `-${nextRelease.channel}` : "" %>',
        ],
        addReleases: 'bottom',
        draftRelease: false,
        assets: [
          {
            path: '.next/**',
            label: 'Build artifacts',
          },
          {
            path: 'CHANGELOG.md',
            label: 'Changelog',
          },
        ],
      },
    ],
  ],
};

module.exports = config;
