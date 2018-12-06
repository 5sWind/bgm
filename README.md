# Remix

[![Join the chat at https://gitter.im/bgmchain/remix](https://badges.gitter.im/bgmchain/remix.svg)](https://gitter.im/bgmchain/remix?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![CircleCI](https://circleci.com/gh/bgmchain/remix/tree/master.svg?style=svg)](https://circleci.com/gh/bgmchain/remix/tree/master)
[![Documentation Status](https://readthedocs.org/projects/docs/badge/?version=latest)](https://remix.readthedocs.io/en/latest/)

Bgmchain tools for the web.

*Are you looking for the Remix IDE? Follow [this link](https://github.com/5sWind/bgm-ide)!*

+ [What is Remix?](#what-is-remix)
+ [How to use Remix?](#how-to-use)
+ [Modules](#modules)
+ [Contributing guidelines](#contributing)

## <a name="what-is-remix"></a>What is Remix?

**Remix** is a suite of tools to interact with the Bgmchain blockchain in order to debug transactions, stored in this Git repository. A Remix transaction Web debugger is available [here](http://remix.bgmchain.org), and its source code is part of this repository.

The **Remix IDE** is an IDE for Solidity dApp developers, powered by Remix. The Remix IDE repository **is available [here](https://github.com/5sWind/bgm-ide)**, and an online version is available at https://remix.bgmchain.org.

For more, check out the [Remix documentation on ReadTheDocs](https://remix.readthedocs.io/en/latest/).

## <a name="how-to-use"></a>How to use Remix

### Prerequisites

To use Remix tools, you'll need to connect to an Bgmchain node. You can do that using [the Mist browser](https://github.com/bgmchain/mist), or by connecting to your local Bgmchain node (`gbgm`, or `bgm`). *Note: connecting to `gbgm` does not work through https.*

+ Using `gbgm`: `gbgm --rpc --rpcapi 'web3,bgm,debug' --rpcport 8545 --rpccorsdomain '*'`.

+ Using `bgm`: `bgm -j --rpccorsdomain '*'`

**DO NOT DO EXECUTE THESE COMMANDS IF `gbgm`/`bgm` STORES YOUR PRIVATE KEYS**, as any external system might be able to access your node's RPC server!

Those commands will run the RPC server on `localhost:8545`, which is the default URL that Remix will connect to. This instance should **only** be used for debugging purposes. Never use features that could have an impact on your keys: do not unlock any keys, do not use this instance togbgmchain with the wallet, do not activate the admin `web3` API.

### Run the debugger

See [here](remix-debugger/README.md) how to install, run and use the debugger locally.

The debugger itself contains several controls that allow stepping over the trace and seeing the current state of a selected step.

## <a name="modules"></a>Remix Modules

Remix is built out of several different modules:

+ [`remix-analyzer`](remix-analyzer/README.md)
+ [`remix-solidity`](remix-solidity/README.md) provides Solidity analysis and decoding functions.
+ [`remix-lib`](remix-lib/README.md)
+ [`remix-debug`](remix-debugger/README.md) is now *deprecated*. It contains the debugger.
+ [`remix-tests`](remix-tests/README.md) contains our tests.
+ [`remixd`](https://github.com/5sWind/bgmd/tree/master) CLI which allow accessing local element from Remix IDE (see https://remix.readthedocs.io/en/latest/tutorial_remixd_filesystem.html)

Each generally has their own npm package and test suite, as well as basic documentation.

## Contributing

Everyone is very welcome to contribute on the codebase of Remix. Please reach us in [Gitter](https://gitter.im/bgmchain/remix).

For more information on the contributing procedure, see [CONTRIBUTING.md](CONTRIBUTING.md). For more information on running and developing the Remix debugger, see [the debugger README.md](remix-debugging/README.md).
