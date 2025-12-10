/* SPDX-License-Identifier: GPL-3.0-or-later */
/*
 * Copyright 2025 Jiamu Sun <barroit@linux.com>
 */

import { commands } from 'vscode'

const { registerCommand: cmd } = commands

const cmds = {
	'make':   import('./cmd/make.js'),
	'reload': import('./cmd/reload.js'),
}

export async function activate(ctx)
{
	for (const id of Object.keys(cmds)) {
		const module = await cmds[id]
		const exec = cmd(`vscdev.${id}`, module.exec, { ctx })

		ctx.subscriptions.push(exec)
	}
}
