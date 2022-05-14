# Developer Documentation Portal

This site is powered by Docusarus v2.

### Adding documentation

All docs are stored as Markdown files under `/docs/`. To add a document to an existing category, simply create a new markdown file in the category folder.

Then include the following text at the very top of the file (including the ---es).

```yaml
---
sidebar_position: TOTAL_COUNT_OF_CATEGORY_PAGES + 1
---
```

### Adding categories

To add a new category, create a new folder for your category, and create a `_category_.json` file inside this folder.

Then include the following text at the very top of the file (including the ---es).

```json
{
  "label": "CATEGORY TITLE",
  "position": CATEGORY_SIDEBAR_POSITION,
  "collapsible": false,
  "collapsed": false,
  "link": {
    "type": "generated-index",
    "description": "OPTIONAL_CATEGORY_DESCRIPTION"
  }
}
```