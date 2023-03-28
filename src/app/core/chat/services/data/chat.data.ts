export interface ChatListItemInterface {
    unreadCount: number;
    chatId: number;
    companion: CompanionInterface;
    lastMessage: MessageInterface;
}

export interface CompanionInterface {
    id: number;
    name: string;
    photoPath: string;
}

export interface MessageInterface {
    content: string;
    createdAt: string;
    author: CompanionInterface;
}

export interface DirectChatInterface {
    id: number;
    messages: MessageInterface[];
    person: CompanionInterface;
    companion: CompanionInterface;
    unreadCount: number;
}
