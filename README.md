# NG Standalone with Inline Styles & Templates:

1. Using NG 14+, create new component

2. Remove app.module.ts
3. Inside app.module.ts add "standalone: true,"

4. Create NEW standalone components from CLI:ng g c components/filter --standalone=true --inline-style --inline-template --flat --skip-tests=true

5. Configure CLI to create future new components this way. Edit angular.json as below:
"schematics": {
        "@schematics/angular:component": {
          "style": "css",
          "standalone": true,
          "inlineStyle": true,
          "inlineTemplate": true,
          "flat": true,
          "skipTests": true
        }
      },
