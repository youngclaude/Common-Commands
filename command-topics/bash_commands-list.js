export const BashCommandsList = {
    topicName: 'Bash',
    slug: '/bash',
    faIcon: 'fab fa-linux',
    commandsArray:[
        {
        cmd: 'ls',
        desc: 'The ls command allows you to quickly view all files within the specified directory.',
        //options: '-a, -l'
        },
        {
            cmd: 'touch',
            desc: 'Creates a file',
            //options: '-a, -m, -r, -d'
        },
        {
            cmd: 'mkdir ',
            desc: 'Create a directory',
            //options: '-m, -p, -v'
        },
        {
            cmd: 'mv',
            desc: 'Move or rename directory',
            //options: '-i, -b'
        },
        {
            cmd: 'rmdir',
            desc: 'Remove directory',
            //options: '-p'
        },
        {
            cmd: 'compgen -c',
            desc: 'Shows all available commands, aliases, and functions',
            //options: '-a, -c, -d'
        },
    ]
};