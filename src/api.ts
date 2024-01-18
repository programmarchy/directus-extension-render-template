import { render } from 'micromustache';
import { defineOperationApi } from '@directus/extensions-sdk';

type Options = {
	template: string | Record<string, any>;
	scope?: Record<string, any>;
};

export default defineOperationApi<Options>({
	id: 'render-template',
	handler: ({ template, scope }, { data }) => {
		return JSON.parse(render(
			typeof template === 'string' ? template : JSON.stringify(template),
			{
				...data,
				...scope,
			},
		));
	},
});
