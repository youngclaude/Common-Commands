import {BashCommandsList} from './../bash_commands-list';
import {DockerCommandsList} from './../docker_commands-list';
import {GitCommandsList} from './../git_commands-list';
import {CommandPromptCommandsList} from './../command-prompt_commands-list';

export const MasterCommandsList = [
    BashCommandsList,
    CommandPromptCommandsList,
    GitCommandsList,
    DockerCommandsList,
].map((rootCommandObject)=>{
    return (
        {
            topicName: rootCommandObject.topicName,
            slug: rootCommandObject.slug,
            faIcon: rootCommandObject.faIcon,
            commandsArray: rootCommandObject.commandsArray
        }
    )
});

// need to seek to automate this part in CI/CD workflow.. perhaps via actions