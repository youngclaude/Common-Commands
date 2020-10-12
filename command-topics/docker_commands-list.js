export const DockerCommandsList = {
    topicName: 'Docker',
    slug: '/docker',
    faIcon: 'fab fa-docker',
    commandsArray:[
        {
            cmd: 'docker-compose up -d',
            desc: 'Aye bro listen... this pulls up all of your containers without all that extra stuff'
        },
        {
            cmd: 'docker-compose down',
            desc: 'Shuts all running containers down'
        },
        {
            cmd: 'docker ps',
            desc: 'display all running containers in full detail'
        },
    ]
};