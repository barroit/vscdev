/* SPDX-License-Identifier: GPL-3.0-or-later */
/*
 * Copyright 2025 Jiamu Sun <barroit@linux.com>
 */

import { commands } from 'vscode'

const { executeCommand: exec_cmd } = commands

export async function exec()
{
	await exec_cmd('vscdev.make')

	exec_cmd('workbench.action.debug.restart')
}
