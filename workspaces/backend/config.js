module.exports = (workspace) => {

	workspace.config({
		repos: [
			{
				name: 'API',
				url: 'git@github.com:tkambler/dockerdev-example-api.git',
				dest: 'api',
				branch: 'master',
				service: 'api'
			}
		],
		services: {
			api: {
				autostart: true,
				shell: 'sh'
			}
		}
	});

};