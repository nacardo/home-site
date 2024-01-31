import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const paigesTheme: CustomThemeConfig = {
	name: 'paiges-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #f1b2ce
		'--color-primary-50': '253 243 248', // #fdf3f8
		'--color-primary-100': '252 240 245', // #fcf0f5
		'--color-primary-200': '252 236 243', // #fcecf3
		'--color-primary-300': '249 224 235', // #f9e0eb
		'--color-primary-400': '245 201 221', // #f5c9dd
		'--color-primary-500': '241 178 206', // #f1b2ce
		'--color-primary-600': '217 160 185', // #d9a0b9
		'--color-primary-700': '181 134 155', // #b5869b
		'--color-primary-800': '145 107 124', // #916b7c
		'--color-primary-900': '118 87 101', // #765765
		// secondary | #f1b699
		'--color-secondary-50': '253 244 240', // #fdf4f0
		'--color-secondary-100': '252 240 235', // #fcf0eb
		'--color-secondary-200': '252 237 230', // #fcede6
		'--color-secondary-300': '249 226 214', // #f9e2d6
		'--color-secondary-400': '245 204 184', // #f5ccb8
		'--color-secondary-500': '241 182 153', // #f1b699
		'--color-secondary-600': '217 164 138', // #d9a48a
		'--color-secondary-700': '181 137 115', // #b58973
		'--color-secondary-800': '145 109 92', // #916d5c
		'--color-secondary-900': '118 89 75', // #76594b
		// tertiary | #8d9aea
		'--color-tertiary-50': '238 240 252', // #eef0fc
		'--color-tertiary-100': '232 235 251', // #e8ebfb
		'--color-tertiary-200': '227 230 250', // #e3e6fa
		'--color-tertiary-300': '209 215 247', // #d1d7f7
		'--color-tertiary-400': '175 184 240', // #afb8f0
		'--color-tertiary-500': '141 154 234', // #8d9aea
		'--color-tertiary-600': '127 139 211', // #7f8bd3
		'--color-tertiary-700': '106 116 176', // #6a74b0
		'--color-tertiary-800': '85 92 140', // #555c8c
		'--color-tertiary-900': '69 75 115', // #454b73
		// success | #72fa78
		'--color-success-50': '234 254 235', // #eafeeb
		'--color-success-100': '227 254 228', // #e3fee4
		'--color-success-200': '220 254 221', // #dcfedd
		'--color-success-300': '199 253 201', // #c7fdc9
		'--color-success-400': '156 252 161', // #9cfca1
		'--color-success-500': '114 250 120', // #72fa78
		'--color-success-600': '103 225 108', // #67e16c
		'--color-success-700': '86 188 90', // #56bc5a
		'--color-success-800': '68 150 72', // #449648
		'--color-success-900': '56 123 59', // #387b3b
		// warning | #ffd478
		'--color-warning-50': '255 249 235', // #fff9eb
		'--color-warning-100': '255 246 228', // #fff6e4
		'--color-warning-200': '255 244 221', // #fff4dd
		'--color-warning-300': '255 238 201', // #ffeec9
		'--color-warning-400': '255 225 161', // #ffe1a1
		'--color-warning-500': '255 212 120', // #ffd478
		'--color-warning-600': '230 191 108', // #e6bf6c
		'--color-warning-700': '191 159 90', // #bf9f5a
		'--color-warning-800': '153 127 72', // #997f48
		'--color-warning-900': '125 104 59', // #7d683b
		// error | #ff7d78
		'--color-error-50': '255 236 235', // #ffeceb
		'--color-error-100': '255 229 228', // #ffe5e4
		'--color-error-200': '255 223 221', // #ffdfdd
		'--color-error-300': '255 203 201', // #ffcbc9
		'--color-error-400': '255 164 161', // #ffa4a1
		'--color-error-500': '255 125 120', // #ff7d78
		'--color-error-600': '230 113 108', // #e6716c
		'--color-error-700': '191 94 90', // #bf5e5a
		'--color-error-800': '153 75 72', // #994b48
		'--color-error-900': '125 61 59', // #7d3d3b
		// surface | #7f5528
		'--color-surface-50': '236 230 223', // #ece6df
		'--color-surface-100': '229 221 212', // #e5ddd4
		'--color-surface-200': '223 213 201', // #dfd5c9
		'--color-surface-300': '204 187 169', // #ccbba9
		'--color-surface-400': '165 136 105', // #a58869
		'--color-surface-500': '127 85 40', // #7f5528
		'--color-surface-600': '114 77 36', // #724d24
		'--color-surface-700': '95 64 30', // #5f401e
		'--color-surface-800': '76 51 24', // #4c3318
		'--color-surface-900': '62 42 20' // #3e2a14
	}
};
