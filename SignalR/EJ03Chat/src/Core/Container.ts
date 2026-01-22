// Core/Container.ts
import { Connection } from '../Data/Services/Connection';
import { SendMessage } from '../Domain/UseCases/SendMessage';
import { FetchMessages } from '../Domain/UseCases/FetchMessage';
import { ChatViewModel } from '../Presenter/ViewModels/ChatViewModel';

export class Container {
    static buildChatViewModel(): ChatViewModel {
        const connection = new Connection();
        const sendMessageUC = new SendMessage(connection);
        const fetchMessagesUC = new FetchMessages(connection);

        return new ChatViewModel(sendMessageUC, fetchMessagesUC);
    }
}
