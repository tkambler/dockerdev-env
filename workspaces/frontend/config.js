module.exports = (workspace) => {

	workspace.config({
		repos: [
			{
				name: 'Frontend',
				url: 'git@github.com:tkambler/dockerdev-example-frontend.git',
				dest: 'frontend',
				branch: 'master',
				service: 'frontend'
			}
		],
		services: {
			frontend: {
				autostart: true,
				shell: 'sh'
			}
		}
	});

};