module.exports = (workspace) => {

	workspace.config({
		repos: [
			{
				name: 'API',
				url: 'git@github.com:tkambler/dockerdev-example-api.git',
				dest: 'api',
				branch: 'develop',
				service: 'api'
			},
			{
				name: 'Frontend',
				url: 'git@github.com:tkambler/dockerdev-example-frontend.git',
				dest: 'frontend',
				branch: 'master',
				service: 'frontend'
			}
		],
		services: {
			api: {
				autostart: true,
				shell: 'sh'
			},
			frontend: {
				autostart: true,
				shell: 'sh'
			}
		}
	});

};