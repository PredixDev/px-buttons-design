# Buttons

Predix UI Buttons module is a simple, robust, extensible baseline for building entire suites of buttons onto. This module is a fork of the [inuitcss Buttons module](https://github.com/inuitcss/objects.buttons).

## Dependencies

Predix UI's Buttons module depends on two other Px modules:

* [px-colors-design](https://github.com/PredixDev/px-colors-design)
* [px-defaults-design](https://github.com/PredixDev/px-defaults-design)

## Upstream dependency

The Buttons module is also an upstream dependency in this meta kit:

* [px-meta-buttons-design](https://github.com/PredixDev/px-meta-buttons-design)

## Installation

Install this module and its dependencies using bower:

    bower install --save px-buttons-design

Once installed, `@import` into your project's Sass file in its Objects layer:

    @import "px-buttons-design/_objects.buttons.scss";

## Usage

These flags are available and, if needed, should be set to `true` prior to importing the module:

    $inuit-enable-btn--small
    $inuit-enable-btn--large
    $inuit-enable-btn--huge
    $inuit-enable-btn--full
    $inuit-enable-btn--primary
    $inuit-enable-btn--tertiary
    $inuit-enable-btn--disabled
    $inuit-enable-btn--bare
    $inuit-enable-btn--bare--primary
    $inuit-enable-btn--icon

The following variables are available for use in the module:

    $inuit-btn-color
    $inuit-btn-background
    $inuit-btn-background--hover
    $inuit-btn-background--pressed
    $inuit-btn-border-color
    $inuit-btn-border-color--hover
    $inuit-btn-border-color--pressed
    $inuit-btn-shadow
    $inuit-btn-shadow--light
    $inuit-btn-primary-color
    $inuit-btn-primary-background
    $inuit-btn-primary-background--hover
    $inuit-btn-primary-background--pressed
    $inuit-btn-primary-border-color
    $inuit-btn-tertiary-color
    $inuit-btn-tertiary-background
    $inuit-btn-tertiary-background--hover
    $inuit-btn-tertiary-background--pressed
    $inuit-btn-disabled-color
    $inuit-btn-disabled-background
    $inuit-btn-disabled-border-color

## Options

These classes are available if the variable flags listed above are set to `true`:

* `btn--[small|large|huge]`: Small, large or huge buttons
* `btn--[primary|tertiary|disabled]`: Primary, tertiary, or disabled buttons
* `btn--full`: Full width buttons
* `btn--icon`: Circular button for icons
* `btn--bare[--primary]`: Icon as button

view the full API [here](http://predixdev.github.io/px-buttons-design/)
