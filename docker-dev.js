module.exports = (dd) => {
    
    dd.config({
        'workspaces': {
            'repo': 'git@github.com:tkambler/dockerdev-example-workspaces.git',
            'dest': 'workspaces'
        },
        'prompts': [
            {
                'name': 'FIRST_NAME',
                'message': 'First Name',
                'type': 'text',
                'required': true
            },
            {
                'name': 'LAST_NAME',
                'message': 'Last Name',
                'type': 'text',
                'required': true
            },
            {
                'name': 'EMAIL_ADDRESS',
                'message': 'Email Address',
                'type': 'text',
                'required': true
            }
        ]
    });
    
};