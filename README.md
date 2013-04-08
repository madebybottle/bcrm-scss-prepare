# bcrm-scss-prepare

A plugin for Component that prepares SCSS files for a one-run compile for
 BottleCRM.

## Install

At the moment: clone via git, and then link with npm.

## Usage

Really only ready to be used with BottleCRM's build system. Any file that is
 exported in a `component.json` that is named `index.scss` will be added to a
 file currently called `pre-compile.scss`

Really only ready for BottleCRM's build system. For every component that
 exports a file named `index.scss` in its `files` array of `component.json`
 will be added (as an import link) to a file named `pre-compile.scss` in the
 Component build directory.

 This file can then be compiled (when setting the right imports path for SASS)
  in one go.
