export const GitCommandsList = {
    topicName: 'Git',
    slug: '/git',
    faIcon: 'fab fa-git-alt',
    commandsArray:[{
        cmd: 'git remote -v',
        desc: 'Shows your repos remote branch. Will either be an HTTPS Url or '
    },
        {
            cmd: 'git branches',
            desc: 'Shuts all running containers down'
        },
        {
            cmd: 'git commit -a | --all',
            desc: 'Tell the command to automatically stage files that have been modified and deleted, but new files you have not told Git about are not affected.'
        },
        {
            cmd: 'git status',
            desc: 'List the files you\'ve changed and those you still need to add or commit:'
        }
    ]
};
