module.exports = {
    onboardingConfig: { // This will be placed into repositories without config
      extends: ["config:base"],
    },
  platform: 'github',
  includeForks: true,
  dryRun: 'full',
  repositories: ['ZabGo/InsecureShop'],
  baseBranches: ["main"],
  packageRules: [
  {
      "matchPackagePatterns": [
        "androidx.compose.compiler:compiler"
      ],
      "groupName": "kotlin"
    },
    {
      "matchPackagePatterns": [
        "org.jetbrains.kotlin.*"
      ],
      "groupName": "kotlin"
    },
    {
      "matchPackagePatterns": [
        "com.google.devtools.ksp"
      ],
      "groupName": "kotlin"
    }
  ],
};