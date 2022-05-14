# Typography

An app's interface is nothing without text. Text size, position, and other factors deliver a great experience in conveying information, and it also adds beauty to an app when done right.

## General Rules

- Use the system font wherever possible. This means, in tauOS, the font Manrope by Mikhail Sharanda designed in 2018 and updated frequently.
- Don't position text over a busy background such as a image or a gradient, without proper protection with a shim.

## Geometry

Text weights, colors and sizes determine the hierarchy of your app's information displayed to the user. Simultaneously, having many different font colors, weights and etc. without a plan makes your app look messy. Make an effort to use only the tauOS Typography text sizes and weights for consistency and for information to be useful for your users.

- Use lighter text for unimportant information.
- Use darker text for more important information.
- Avoid the use of italics or oblique faces, as they are visually complex and are a distraction.
- Do **Not** Capitalize Every Word Like This.
- Don't do custom font sizes or styles, as this interferes with accessibility. Use the standard font styles, or use relative font sizes.

## Standard Font Styles

These are the recommended font styles for use in tauOS apps.

|Name|Specs|CSS Class|Usage|
|---|---|---|:---|
|Display|Light 40px|`.display`|Used for very large text, such as timers or text that needs to be big.|
|View Title|Light 24px|`.view-title`|Used for view titles, it's big enough to title an app's view.|
|View Subtitle|Regular 20px|`.view-subtitle`|Used for subtitles within a View.|
|Header|**ALL-CAPS BOLD 15px**|`.header`|Used for headings in a Sidebar.|
|Content Block Title|**Bold 18px**|`.title`|Used for the titles on Content Blocks.|
|Content Block Subtitle|Regular 15px|`.subtitle`|Used for the subtitles on Content Blocks.|
|Body|Regular 10px|`.body` (is the default)|Used for all the text on the interface.|
|Caption|**Bold 10px**|`.caption`|For sub-text that accompanies a text body.|

Note: These CSS classes are available on both GTK4 and GTK3.

## Unicode Advantage

Unicode provides a wide variety of symbols which, when used correctly, can improve the aesthetics given by your app. These Unicode characters are recommended:

|Use|Symbol|Unicode Code to Use|
|---|---|---|
|Quotations|“quote”|U+201C Left double quotation mark,<br>U+201D Right double quotation mark|
|Time|4∶20|U+2236 Ratio|
|Multiplication|1024×768|U+00D7 Multiplication sign|
|Ellipsis|Introducing…|U+2026 Horizontal ellipsis|
|Apostrophe|The user’s preferences|U+2019 Right single quotation mark|
|Bullet List|• One|U+2022 Bullet|
|Ranges|June–July 1967|U+2013 En dash|
|Units|32 GB|U+202F Narrow no-break space|