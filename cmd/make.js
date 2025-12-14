/* SPDX-License-Identifier: GPL-3.0-or-later */
/*
 * Copyright 2025 Jiamu Sun <barroit@linux.com>
 */

import { execlp } from '../helper/exec.js'

export function exec()
{
	execlp.call({ stdio: 'inherit' },
		    'debug=1 make', 'make', 'install', NULL)
}
