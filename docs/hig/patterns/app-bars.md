---
sidebar_position: 2
---

# App Bar

![App Bar](/assets/appbar_normal.png)

App bars (Internally called headerbars) appear at the top of apps. They include the title of the app or page, the main functions available from that location, and navigation options.

App Bars depend on context for their styling. For Primary Windows without Sidebars, an App Bar displays itself with a solid gray background, and bottom separator. In the context of a Primary Window or section without scroll, it will instead show itself with a lighter background, and no separator.

Using text in place of an icon in your App Bar should be avoided. Additionally, icons should always be on the right of the App Bar.

The most common actions you'll find in an App Bar are search, an optional app-specific action, and the App Menu, in that order. The center is reserved for other custom functionality such as View Switchers, if the layout demands it.

- If more actions are needed, place them here.

- If there's more than one App Bar (in apps with Sidebars,)the other App Bars should use a Secondary Menu which uses the `view-more` symbolic.

## Flat App Bar

![App Bar (flat)](/assets/appbar_flat.png)

A flat App Bar is used when the content below it doesn't scroll. It is made to be flush with the content below by being transparent in its background, and usually accompanies a View Title or View Switcher below it.

Content may be positioned below the app bar while in flat form. flat App Bars should be used with image headers, or when watching a video in the whole window.

A Flat App Bar, if needed, can be shown only on mouse hover. This may be useful to media apps.