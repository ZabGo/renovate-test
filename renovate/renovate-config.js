module.exports = {
  onboarding: false,
  platform: 'github',
  includeForks: true,
  dryRun: 'full',
  repositories: ['ZabGo/InsecureShop'],
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