# tauOS OEM Configuration

TODO: Fill information

### Settings

The `Details->System` panel in tauOS System Settings may be configured with OEM-specifc metadata, supplied by a config file in `/usr/share/oem/oem.conf.`

This file must have the following format:

```ini title="/usr/share/oem/oem.conf"
[OEM]
# Device name
Product=ThinkBook 13s

# Human-facing model number or version
Version=Gen3

# Human-facing OEM Name
Manufacturer=Lenovo

[Logos]
# Path to a logo or hardware image, expected to be shown on a light background
Light=/usr/share/oem/light.png

# Path to a logo or hardware image, expected to be shown on a dark background
Dark=/usr/share/oem/dark.png

[URLS]
# OEM Homepage URL
Homepage=https://lenovo.com

# OEM Support URL. May be specific to product, may not
Support=https://support.lenovo.com
```

All fields are optional, however most fields are recommended.
All fields are read as strings, and as such, may contain any valid string characters.

The recommended OEM logo size is 252x252px

TODO get banner size