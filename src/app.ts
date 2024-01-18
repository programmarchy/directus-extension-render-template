import { defineOperationApp } from '@directus/extensions-sdk';

export default defineOperationApp({
	id: 'render-template',
	name: 'Render Template',
	icon: 'code',
	description: 'Render a mustache template',
	overview: ({ template, scope }) => {
		const options = [
			{
				label: 'Template',
				text: template,
			},
		];

		if (scope) {
			options.push({
				label: 'Scope',
				text: scope,
			});
		}

		return options;
	},
	options: [
		{
			field: 'template',
			name: 'Template',
			type: 'json',
			meta: {
				width: 'full',
				interface: 'input-code',
				required: true,
			},
		},
		{
			field: 'scope',
			name: 'Scope',
			type: 'json',
			meta: {
				width: 'full',
				interface: 'input-code',
			},
		},
	],
});
