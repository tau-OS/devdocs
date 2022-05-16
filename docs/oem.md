# tauOS OEM Configuration

TODO: Fill information

### Settings

The `Details->System` panel in tauOS System Settings may be configured with OEM-specifc metadata, supplied by a config file in `/usr/share/oem/oem.conf.`

This file must have the following format:

<!-- I would love to use Lenovo here as it perfectly shows off the config, but that might cause legal issues?  -->
```ini title="/usr/share/oem/oem.conf"
[OEM]
# Device name
Product=MyProduct

# Human-facing model number or version
Version=Gen3

# Human-facing OEM Name
Manufacturer=Fyra Labs

[Logos]
# Path to a logo or hardware image, expected to be shown on a light background
Light=/usr/share/oem/light.png

# Path to a logo or hardware image, expected to be shown on a dark background
Dark=/usr/share/oem/dark.png

[URLS]
# OEM Homepage URL
Homepage=https://tauos.co

# OEM Support URL. May be specific to product, may not
Support=https://fyralabs.com/
```

All fields are optional, however most fields are recommended.
All fields are read as strings, and as such, may contain any valid string characters.

The recommended OEM logo size is 252x252px

TODO get banner size