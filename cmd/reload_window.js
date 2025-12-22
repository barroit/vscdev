/* SPDX-License-Identifier: GPL-3.0-or-later */
/*
 * Copyright 2025 Jiamu Sun <barroit@linux.com>
 */

import { vsc_exec_cmd } from '../helper/vsc.js'

export async function exec()
{
	await vsc_exec_cmd('vscdev.make')
	vsc_exec_cmd('workbench.action.reloadWindow')
}
