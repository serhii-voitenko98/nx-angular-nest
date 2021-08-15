After creating ui-lib you need to do the next:

add to the "architect" section in "angular.json" file:

          "options": {
            "stylePreprocessorOptions": {
              "includePaths": ["ws-style"]
            }
          }
        },
add tags in the "nx.json" file

```
"tags": ["type:lib", "scope:ui-lib"]
```
