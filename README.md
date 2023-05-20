oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g clai
$ clai COMMAND
running command...
$ clai (--version)
clai/0.0.0 darwin-x64 node-v14.20.1
$ clai --help [COMMAND]
USAGE
  $ clai COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`clai hello PERSON`](#clai-hello-person)
* [`clai hello world`](#clai-hello-world)
* [`clai help [COMMANDS]`](#clai-help-commands)
* [`clai plugins`](#clai-plugins)
* [`clai plugins:install PLUGIN...`](#clai-pluginsinstall-plugin)
* [`clai plugins:inspect PLUGIN...`](#clai-pluginsinspect-plugin)
* [`clai plugins:install PLUGIN...`](#clai-pluginsinstall-plugin-1)
* [`clai plugins:link PLUGIN`](#clai-pluginslink-plugin)
* [`clai plugins:uninstall PLUGIN...`](#clai-pluginsuninstall-plugin)
* [`clai plugins:uninstall PLUGIN...`](#clai-pluginsuninstall-plugin-1)
* [`clai plugins:uninstall PLUGIN...`](#clai-pluginsuninstall-plugin-2)
* [`clai plugins update`](#clai-plugins-update)

## `clai hello PERSON`

Say hello

```
USAGE
  $ clai hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/EduardoTLopes/clai/blob/v0.0.0/dist/commands/hello/index.ts)_

## `clai hello world`

Say hello world

```
USAGE
  $ clai hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ clai hello world
  hello world! (./src/commands/hello/world.ts)
```

## `clai help [COMMANDS]`

Display help for clai.

```
USAGE
  $ clai help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for clai.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.9/src/commands/help.ts)_

## `clai plugins`

List installed plugins.

```
USAGE
  $ clai plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ clai plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `clai plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ clai plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ clai plugins add

EXAMPLES
  $ clai plugins:install myplugin 

  $ clai plugins:install https://github.com/someuser/someplugin

  $ clai plugins:install someuser/someplugin
```

## `clai plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ clai plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ clai plugins:inspect myplugin
```

## `clai plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ clai plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ clai plugins add

EXAMPLES
  $ clai plugins:install myplugin 

  $ clai plugins:install https://github.com/someuser/someplugin

  $ clai plugins:install someuser/someplugin
```

## `clai plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ clai plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ clai plugins:link myplugin
```

## `clai plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ clai plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ clai plugins unlink
  $ clai plugins remove
```

## `clai plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ clai plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ clai plugins unlink
  $ clai plugins remove
```

## `clai plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ clai plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ clai plugins unlink
  $ clai plugins remove
```

## `clai plugins update`

Update installed plugins.

```
USAGE
  $ clai plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
