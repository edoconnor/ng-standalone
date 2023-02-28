# NG Standalone Quick Start:

1. Remove app.module.ts
2. Add @Component standalone: true,
3. Create NEW standalone components from CLI:ng g c components/filter --standalone=true --inline-style --inline-template --flat --skip-tests=true
4. Edit angular.json (to automatically create additional SAC same way):
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
