/* SPDX-License-Identifier: GPL-3.0-or-later */
/*
 * Copyright 2025 Jiamu Sun <barroit@linux.com>
 */

import { commands } from 'vscode'

const { executeCommand: vsc_exec_cmd } = commands

export async function exec()
{
	await vsc_exec_cmd('vscdev.make')
	vsc_exec_cmd('workbench.action.reloadWindow')
}
