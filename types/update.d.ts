import type * as Obj from "./object";

export type Up = {
  /**
   * The user authorization state has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_authorization_state.html
   */
  updateAuthorizationState: Obj.UpdateAuthorizationState;

  /**
   * A new message was received; can also be an outgoing message
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_new_message.html
   */
  updateNewMessage: Obj.UpdateNewMessage;

  /**
   * A request to send a message has reached the Telegram server. This doesn't mean that the message will be sent successfully. This update is sent only if the option "use_quick_ack" is set to true. This update may be sent multiple times for the same message
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_message_send_acknowledged.html
   */
  updateMessageSendAcknowledged: Obj.UpdateMessageSendAcknowledged;

  /**
   * A message has been successfully sent
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_message_send_succeeded.html
   */
  updateMessageSendSucceeded: Obj.UpdateMessageSendSucceeded;

  /**
   * A message failed to send. Be aware that some messages being sent can be irrecoverably deleted, in which case updateDeleteMessages will be received instead of this update
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_message_send_failed.html
   */
  updateMessageSendFailed: Obj.UpdateMessageSendFailed;

  /**
   * The message content has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_message_content.html
   */
  updateMessageContent: Obj.UpdateMessageContent;

  /**
   * A message was edited. Changes in the message content will come in a separate updateMessageContent
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_message_edited.html
   */
  updateMessageEdited: Obj.UpdateMessageEdited;

  /**
   * The message pinned state was changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_message_is_pinned.html
   */
  updateMessageIsPinned: Obj.UpdateMessageIsPinned;

  /**
   * The information about interactions with a message has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_message_interaction_info.html
   */
  updateMessageInteractionInfo: Obj.UpdateMessageInteractionInfo;

  /**
   * The message content was opened. Updates voice note messages to "listened", video note messages to "viewed" and starts the self-destruct timer
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_message_content_opened.html
   */
  updateMessageContentOpened: Obj.UpdateMessageContentOpened;

  /**
   * A message with an unread mention was read
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_message_mention_read.html
   */
  updateMessageMentionRead: Obj.UpdateMessageMentionRead;

  /**
   * The list of unread reactions added to a message was changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_message_unread_reactions.html
   */
  updateMessageUnreadReactions: Obj.UpdateMessageUnreadReactions;

  /**
   * A fact-check added to a message was changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_message_fact_check.html
   */
  updateMessageFactCheck: Obj.UpdateMessageFactCheck;

  /**
   * A message with a live location was viewed. When the update is received, the application is expected to update the live location
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_message_live_location_viewed.html
   */
  updateMessageLiveLocationViewed: Obj.UpdateMessageLiveLocationViewed;

  /**
   * An automatically scheduled message with video has been successfully sent after conversion
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_video_published.html
   */
  updateVideoPublished: Obj.UpdateVideoPublished;

  /**
   * A new chat has been loaded/created. This update is guaranteed to come before the chat identifier is returned to the application. The chat field changes will be reported through separate updates
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_new_chat.html
   */
  updateNewChat: Obj.UpdateNewChat;

  /**
   * The title of a chat was changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_title.html
   */
  updateChatTitle: Obj.UpdateChatTitle;

  /**
   * A chat photo was changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_photo.html
   */
  updateChatPhoto: Obj.UpdateChatPhoto;

  /**
   * Chat accent colors have changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_accent_colors.html
   */
  updateChatAccentColors: Obj.UpdateChatAccentColors;

  /**
   * Chat permissions were changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_permissions.html
   */
  updateChatPermissions: Obj.UpdateChatPermissions;

  /**
   * The last message of a chat was changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_last_message.html
   */
  updateChatLastMessage: Obj.UpdateChatLastMessage;

  /**
   * The position of a chat in a chat list has changed. An updateChatLastMessage or updateChatDraftMessage update might be sent instead of the update
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_position.html
   */
  updateChatPosition: Obj.UpdateChatPosition;

  /**
   * A chat was added to a chat list
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_added_to_list.html
   */
  updateChatAddedToList: Obj.UpdateChatAddedToList;

  /**
   * A chat was removed from a chat list
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_removed_from_list.html
   */
  updateChatRemovedFromList: Obj.UpdateChatRemovedFromList;

  /**
   * Incoming messages were read or the number of unread messages has been changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_read_inbox.html
   */
  updateChatReadInbox: Obj.UpdateChatReadInbox;

  /**
   * Outgoing messages were read
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_read_outbox.html
   */
  updateChatReadOutbox: Obj.UpdateChatReadOutbox;

  /**
   * The chat action bar was changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_action_bar.html
   */
  updateChatActionBar: Obj.UpdateChatActionBar;

  /**
   * The bar for managing business bot was changed in a chat
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_business_bot_manage_bar.html
   */
  updateChatBusinessBotManageBar: Obj.UpdateChatBusinessBotManageBar;

  /**
   * The chat available reactions were changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_available_reactions.html
   */
  updateChatAvailableReactions: Obj.UpdateChatAvailableReactions;

  /**
   * A chat draft has changed. Be aware that the update may come in the currently opened chat but with old content of the draft. If the user has changed the content of the draft, this update mustn't be applied
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_draft_message.html
   */
  updateChatDraftMessage: Obj.UpdateChatDraftMessage;

  /**
   * Chat emoji status has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_emoji_status.html
   */
  updateChatEmojiStatus: Obj.UpdateChatEmojiStatus;

  /**
   * The message sender that is selected to send messages in a chat has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_message_sender.html
   */
  updateChatMessageSender: Obj.UpdateChatMessageSender;

  /**
   * The message auto-delete or self-destruct timer setting for a chat was changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_message_auto_delete_time.html
   */
  updateChatMessageAutoDeleteTime: Obj.UpdateChatMessageAutoDeleteTime;

  /**
   * Notification settings for a chat were changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_notification_settings.html
   */
  updateChatNotificationSettings: Obj.UpdateChatNotificationSettings;

  /**
   * The chat pending join requests were changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_pending_join_requests.html
   */
  updateChatPendingJoinRequests: Obj.UpdateChatPendingJoinRequests;

  /**
   * The default chat reply markup was changed. Can occur because new messages with reply markup were received or because an old reply markup was hidden by the user
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_reply_markup.html
   */
  updateChatReplyMarkup: Obj.UpdateChatReplyMarkup;

  /**
   * The chat background was changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_background.html
   */
  updateChatBackground: Obj.UpdateChatBackground;

  /**
   * The chat theme was changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_theme.html
   */
  updateChatTheme: Obj.UpdateChatTheme;

  /**
   * The chat unread_mention_count has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_unread_mention_count.html
   */
  updateChatUnreadMentionCount: Obj.UpdateChatUnreadMentionCount;

  /**
   * The chat unread_reaction_count has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_unread_reaction_count.html
   */
  updateChatUnreadReactionCount: Obj.UpdateChatUnreadReactionCount;

  /**
   * A chat video chat state has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_video_chat.html
   */
  updateChatVideoChat: Obj.UpdateChatVideoChat;

  /**
   * The value of the default disable_notification parameter, used when a message is sent to the chat, was changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_default_disable_notification.html
   */
  updateChatDefaultDisableNotification: Obj.UpdateChatDefaultDisableNotification;

  /**
   * A chat content was allowed or restricted for saving
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_has_protected_content.html
   */
  updateChatHasProtectedContent: Obj.UpdateChatHasProtectedContent;

  /**
   * Translation of chat messages was enabled or disabled
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_is_translatable.html
   */
  updateChatIsTranslatable: Obj.UpdateChatIsTranslatable;

  /**
   * A chat was marked as unread or was read
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_is_marked_as_unread.html
   */
  updateChatIsMarkedAsUnread: Obj.UpdateChatIsMarkedAsUnread;

  /**
   * A chat default appearance has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_view_as_topics.html
   */
  updateChatViewAsTopics: Obj.UpdateChatViewAsTopics;

  /**
   * A chat was blocked or unblocked
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_block_list.html
   */
  updateChatBlockList: Obj.UpdateChatBlockList;

  /**
   * A chat's has_scheduled_messages field has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_has_scheduled_messages.html
   */
  updateChatHasScheduledMessages: Obj.UpdateChatHasScheduledMessages;

  /**
   * The list of chat folders or a chat folder has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_folders.html
   */
  updateChatFolders: Obj.UpdateChatFolders;

  /**
   * The number of online group members has changed. This update with non-zero number of online group members is sent only for currently opened chats. There is no guarantee that it is sent just after the number of online users has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_online_member_count.html
   */
  updateChatOnlineMemberCount: Obj.UpdateChatOnlineMemberCount;

  /**
   * Basic information about a Saved Messages topic has changed. This update is guaranteed to come before the topic identifier is returned to the application
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_saved_messages_topic.html
   */
  updateSavedMessagesTopic: Obj.UpdateSavedMessagesTopic;

  /**
   * Number of Saved Messages topics has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_saved_messages_topic_count.html
   */
  updateSavedMessagesTopicCount: Obj.UpdateSavedMessagesTopicCount;

  /**
   * Basic information about a topic in a channel direct messages chat administered by the current user has changed. This update is guaranteed to come before the topic identifier is returned to the application
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_direct_messages_chat_topic.html
   */
  updateDirectMessagesChatTopic: Obj.UpdateDirectMessagesChatTopic;

  /**
   * Number of messages in a topic has changed; for Saved Messages and channel direct messages chat topics only
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_topic_message_count.html
   */
  updateTopicMessageCount: Obj.UpdateTopicMessageCount;

  /**
   * Basic information about a quick reply shortcut has changed. This update is guaranteed to come before the quick shortcut name is returned to the application
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_quick_reply_shortcut.html
   */
  updateQuickReplyShortcut: Obj.UpdateQuickReplyShortcut;

  /**
   * A quick reply shortcut and all its messages were deleted
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_quick_reply_shortcut_deleted.html
   */
  updateQuickReplyShortcutDeleted: Obj.UpdateQuickReplyShortcutDeleted;

  /**
   * The list of quick reply shortcuts has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_quick_reply_shortcuts.html
   */
  updateQuickReplyShortcuts: Obj.UpdateQuickReplyShortcuts;

  /**
   * The list of quick reply shortcut messages has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_quick_reply_shortcut_messages.html
   */
  updateQuickReplyShortcutMessages: Obj.UpdateQuickReplyShortcutMessages;

  /**
   * Basic information about a topic in a forum chat was changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_forum_topic_info.html
   */
  updateForumTopicInfo: Obj.UpdateForumTopicInfo;

  /**
   * Information about a topic in a forum chat was changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_forum_topic.html
   */
  updateForumTopic: Obj.UpdateForumTopic;

  /**
   * Notification settings for some type of chats were updated
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_scope_notification_settings.html
   */
  updateScopeNotificationSettings: Obj.UpdateScopeNotificationSettings;

  /**
   * Notification settings for reactions were updated
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_reaction_notification_settings.html
   */
  updateReactionNotificationSettings: Obj.UpdateReactionNotificationSettings;

  /**
   * A notification was changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_notification.html
   */
  updateNotification: Obj.UpdateNotification;

  /**
   * A list of active notifications in a notification group has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_notification_group.html
   */
  updateNotificationGroup: Obj.UpdateNotificationGroup;

  /**
   * Contains active notifications that were shown on previous application launches. This update is sent only if the message database is used. In that case it comes once before any updateNotification and updateNotificationGroup update
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_active_notifications.html
   */
  updateActiveNotifications: Obj.UpdateActiveNotifications;

  /**
   * Describes whether there are some pending notification updates. Can be used to prevent application from killing, while there are some pending notifications
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_have_pending_notifications.html
   */
  updateHavePendingNotifications: Obj.UpdateHavePendingNotifications;

  /**
   * Some messages were deleted
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_delete_messages.html
   */
  updateDeleteMessages: Obj.UpdateDeleteMessages;

  /**
   * A message sender activity in the chat has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_action.html
   */
  updateChatAction: Obj.UpdateChatAction;

  /**
   * The user went online or offline
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_user_status.html
   */
  updateUserStatus: Obj.UpdateUserStatus;

  /**
   * Some data of a user has changed. This update is guaranteed to come before the user identifier is returned to the application
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_user.html
   */
  updateUser: Obj.UpdateUser;

  /**
   * Some data of a basic group has changed. This update is guaranteed to come before the basic group identifier is returned to the application
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_basic_group.html
   */
  updateBasicGroup: Obj.UpdateBasicGroup;

  /**
   * Some data of a supergroup or a channel has changed. This update is guaranteed to come before the supergroup identifier is returned to the application
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_supergroup.html
   */
  updateSupergroup: Obj.UpdateSupergroup;

  /**
   * Some data of a secret chat has changed. This update is guaranteed to come before the secret chat identifier is returned to the application
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_secret_chat.html
   */
  updateSecretChat: Obj.UpdateSecretChat;

  /**
   * Some data in userFullInfo has been changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_user_full_info.html
   */
  updateUserFullInfo: Obj.UpdateUserFullInfo;

  /**
   * Some data in basicGroupFullInfo has been changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_basic_group_full_info.html
   */
  updateBasicGroupFullInfo: Obj.UpdateBasicGroupFullInfo;

  /**
   * Some data in supergroupFullInfo has been changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_supergroup_full_info.html
   */
  updateSupergroupFullInfo: Obj.UpdateSupergroupFullInfo;

  /**
   * A service notification from the server was received. Upon receiving this the application must show a popup with the content of the notification
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_service_notification.html
   */
  updateServiceNotification: Obj.UpdateServiceNotification;

  /**
   * Information about a file was updated
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_file.html
   */
  updateFile: Obj.UpdateFile;

  /**
   * The file generation process needs to be started by the application. Use setFileGenerationProgress and finishFileGeneration to generate the file
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_file_generation_start.html
   */
  updateFileGenerationStart: Obj.UpdateFileGenerationStart;

  /**
   * File generation is no longer needed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_file_generation_stop.html
   */
  updateFileGenerationStop: Obj.UpdateFileGenerationStop;

  /**
   * The state of the file download list has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_file_downloads.html
   */
  updateFileDownloads: Obj.UpdateFileDownloads;

  /**
   * A file was added to the file download list. This update is sent only after file download list is loaded for the first time
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_file_added_to_downloads.html
   */
  updateFileAddedToDownloads: Obj.UpdateFileAddedToDownloads;

  /**
   * A file download was changed. This update is sent only after file download list is loaded for the first time
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_file_download.html
   */
  updateFileDownload: Obj.UpdateFileDownload;

  /**
   * A file was removed from the file download list. This update is sent only after file download list is loaded for the first time
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_file_removed_from_downloads.html
   */
  updateFileRemovedFromDownloads: Obj.UpdateFileRemovedFromDownloads;

  /**
   * A request can't be completed unless application verification is performed; for official mobile applications only. The method setApplicationVerificationToken must be called once the verification is completed or failed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_application_verification_required.html
   */
  updateApplicationVerificationRequired: Obj.UpdateApplicationVerificationRequired;

  /**
   * A request can't be completed unless reCAPTCHA verification is performed; for official mobile applications only. The method setApplicationVerificationToken must be called once the verification is completed or failed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_application_recaptcha_verification_required.html
   */
  updateApplicationRecaptchaVerificationRequired: Obj.UpdateApplicationRecaptchaVerificationRequired;

  /**
   * New call was created or information about a call was updated
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_call.html
   */
  updateCall: Obj.UpdateCall;

  /**
   * Information about a group call was updated
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_group_call.html
   */
  updateGroupCall: Obj.UpdateGroupCall;

  /**
   * Information about a group call participant was changed. The updates are sent only after the group call is received through getGroupCall and only if the call is joined or being joined
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_group_call_participant.html
   */
  updateGroupCallParticipant: Obj.UpdateGroupCallParticipant;

  /**
   * The list of group call participants that can send and receive encrypted call data has changed; for group calls not bound to a chat only
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_group_call_participants.html
   */
  updateGroupCallParticipants: Obj.UpdateGroupCallParticipants;

  /**
   * The verification state of an encrypted group call has changed; for group calls not bound to a chat only
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_group_call_verification_state.html
   */
  updateGroupCallVerificationState: Obj.UpdateGroupCallVerificationState;

  /**
   * New call signaling data arrived
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_new_call_signaling_data.html
   */
  updateNewCallSignalingData: Obj.UpdateNewCallSignalingData;

  /**
   * Some privacy setting rules have been changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_user_privacy_setting_rules.html
   */
  updateUserPrivacySettingRules: Obj.UpdateUserPrivacySettingRules;

  /**
   * Number of unread messages in a chat list has changed. This update is sent only if the message database is used
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_unread_message_count.html
   */
  updateUnreadMessageCount: Obj.UpdateUnreadMessageCount;

  /**
   * Number of unread chats, i.e. with unread messages or marked as unread, has changed. This update is sent only if the message database is used
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_unread_chat_count.html
   */
  updateUnreadChatCount: Obj.UpdateUnreadChatCount;

  /**
   * A story was changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_story.html
   */
  updateStory: Obj.UpdateStory;

  /**
   * A story became inaccessible
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_story_deleted.html
   */
  updateStoryDeleted: Obj.UpdateStoryDeleted;

  /**
   * A story has been successfully posted
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_story_post_succeeded.html
   */
  updateStoryPostSucceeded: Obj.UpdateStoryPostSucceeded;

  /**
   * A story failed to post. If the story posting is canceled, then updateStoryDeleted will be received instead of this update
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_story_post_failed.html
   */
  updateStoryPostFailed: Obj.UpdateStoryPostFailed;

  /**
   * The list of active stories posted by a specific chat has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_active_stories.html
   */
  updateChatActiveStories: Obj.UpdateChatActiveStories;

  /**
   * Number of chats in a story list has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_story_list_chat_count.html
   */
  updateStoryListChatCount: Obj.UpdateStoryListChatCount;

  /**
   * Story stealth mode settings have changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_story_stealth_mode.html
   */
  updateStoryStealthMode: Obj.UpdateStoryStealthMode;

  /**
   * An option changed its value
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_option.html
   */
  updateOption: Obj.UpdateOption;

  /**
   * A sticker set has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_sticker_set.html
   */
  updateStickerSet: Obj.UpdateStickerSet;

  /**
   * The list of installed sticker sets was updated
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_installed_sticker_sets.html
   */
  updateInstalledStickerSets: Obj.UpdateInstalledStickerSets;

  /**
   * The list of trending sticker sets was updated or some of them were viewed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_trending_sticker_sets.html
   */
  updateTrendingStickerSets: Obj.UpdateTrendingStickerSets;

  /**
   * The list of recently used stickers was updated
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_recent_stickers.html
   */
  updateRecentStickers: Obj.UpdateRecentStickers;

  /**
   * The list of favorite stickers was updated
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_favorite_stickers.html
   */
  updateFavoriteStickers: Obj.UpdateFavoriteStickers;

  /**
   * The list of saved animations was updated
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_saved_animations.html
   */
  updateSavedAnimations: Obj.UpdateSavedAnimations;

  /**
   * The list of saved notification sounds was updated. This update may not be sent until information about a notification sound was requested for the first time
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_saved_notification_sounds.html
   */
  updateSavedNotificationSounds: Obj.UpdateSavedNotificationSounds;

  /**
   * The default background has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_default_background.html
   */
  updateDefaultBackground: Obj.UpdateDefaultBackground;

  /**
   * The list of available chat themes has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_themes.html
   */
  updateChatThemes: Obj.UpdateChatThemes;

  /**
   * The list of supported accent colors has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_accent_colors.html
   */
  updateAccentColors: Obj.UpdateAccentColors;

  /**
   * The list of supported accent colors for user profiles has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_profile_accent_colors.html
   */
  updateProfileAccentColors: Obj.UpdateProfileAccentColors;

  /**
   * Some language pack strings have been updated
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_language_pack_strings.html
   */
  updateLanguagePackStrings: Obj.UpdateLanguagePackStrings;

  /**
   * The connection state has changed. This update must be used only to show a human-readable description of the connection state
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_connection_state.html
   */
  updateConnectionState: Obj.UpdateConnectionState;

  /**
   * The freeze state of the current user's account has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_freeze_state.html
   */
  updateFreezeState: Obj.UpdateFreezeState;

  /**
   * New terms of service must be accepted by the user. If the terms of service are declined, then the deleteAccount method must be called with the reason "Decline ToS update"
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_terms_of_service.html
   */
  updateTermsOfService: Obj.UpdateTermsOfService;

  /**
   * The first unconfirmed session has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_unconfirmed_session.html
   */
  updateUnconfirmedSession: Obj.UpdateUnconfirmedSession;

  /**
   * The list of bots added to attachment or side menu has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_attachment_menu_bots.html
   */
  updateAttachmentMenuBots: Obj.UpdateAttachmentMenuBots;

  /**
   * A message was sent by an opened Web App, so the Web App needs to be closed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_web_app_message_sent.html
   */
  updateWebAppMessageSent: Obj.UpdateWebAppMessageSent;

  /**
   * The list of active emoji reactions has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_active_emoji_reactions.html
   */
  updateActiveEmojiReactions: Obj.UpdateActiveEmojiReactions;

  /**
   * The list of available message effects has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_available_message_effects.html
   */
  updateAvailableMessageEffects: Obj.UpdateAvailableMessageEffects;

  /**
   * The type of default reaction has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_default_reaction_type.html
   */
  updateDefaultReactionType: Obj.UpdateDefaultReactionType;

  /**
   * The type of default paid reaction has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_default_paid_reaction_type.html
   */
  updateDefaultPaidReactionType: Obj.UpdateDefaultPaidReactionType;

  /**
   * Tags used in Saved Messages or a Saved Messages topic have changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_saved_messages_tags.html
   */
  updateSavedMessagesTags: Obj.UpdateSavedMessagesTags;

  /**
   * The list of messages with active live location that need to be updated by the application has changed. The list is persistent across application restarts only if the message database is used
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_active_live_location_messages.html
   */
  updateActiveLiveLocationMessages: Obj.UpdateActiveLiveLocationMessages;

  /**
   * The number of Telegram Stars owned by the current user has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_owned_star_count.html
   */
  updateOwnedStarCount: Obj.UpdateOwnedStarCount;

  /**
   * The revenue earned from sponsored messages in a chat has changed. If chat revenue screen is opened, then getChatRevenueTransactions may be called to fetch new transactions
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_revenue_amount.html
   */
  updateChatRevenueAmount: Obj.UpdateChatRevenueAmount;

  /**
   * The Telegram Star revenue earned by a bot or a chat has changed. If Telegram Star transaction screen of the chat is opened, then getStarTransactions may be called to fetch new transactions
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_star_revenue_status.html
   */
  updateStarRevenueStatus: Obj.UpdateStarRevenueStatus;

  /**
   * The parameters of speech recognition without Telegram Premium subscription has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_speech_recognition_trial.html
   */
  updateSpeechRecognitionTrial: Obj.UpdateSpeechRecognitionTrial;

  /**
   * The list of supported dice emojis has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_dice_emojis.html
   */
  updateDiceEmojis: Obj.UpdateDiceEmojis;

  /**
   * Some animated emoji message was clicked and a big animated sticker must be played if the message is visible on the screen. chatActionWatchingAnimations with the text of the message needs to be sent if the sticker is played
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_animated_emoji_message_clicked.html
   */
  updateAnimatedEmojiMessageClicked: Obj.UpdateAnimatedEmojiMessageClicked;

  /**
   * The parameters of animation search through getOption("animation_search_bot_username") bot has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_animation_search_parameters.html
   */
  updateAnimationSearchParameters: Obj.UpdateAnimationSearchParameters;

  /**
   * The list of suggested to the user actions has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_suggested_actions.html
   */
  updateSuggestedActions: Obj.UpdateSuggestedActions;

  /**
   * Download or upload file speed for the user was limited, but it can be restored by subscription to Telegram Premium. The notification can be postponed until a being downloaded or uploaded file is visible to the user. Use getOption("premium_download_speedup") or getOption("premium_upload_speedup") to get expected speedup after subscription to Telegram Premium
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_speed_limit_notification.html
   */
  updateSpeedLimitNotification: Obj.UpdateSpeedLimitNotification;

  /**
   * The list of contacts that had birthdays recently or will have birthday soon has changed
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_contact_close_birthdays.html
   */
  updateContactCloseBirthdays: Obj.UpdateContactCloseBirthdays;

  /**
   * Autosave settings for some type of chats were updated
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_autosave_settings.html
   */
  updateAutosaveSettings: Obj.UpdateAutosaveSettings;

  /**
   * A business connection has changed; for bots only
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_business_connection.html
   */
  updateBusinessConnection: Obj.UpdateBusinessConnection;

  /**
   * A new message was added to a business account; for bots only
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_new_business_message.html
   */
  updateNewBusinessMessage: Obj.UpdateNewBusinessMessage;

  /**
   * A message in a business account was edited; for bots only
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_business_message_edited.html
   */
  updateBusinessMessageEdited: Obj.UpdateBusinessMessageEdited;

  /**
   * Messages in a business account were deleted; for bots only
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_business_messages_deleted.html
   */
  updateBusinessMessagesDeleted: Obj.UpdateBusinessMessagesDeleted;

  /**
   * A new incoming inline query; for bots only
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_new_inline_query.html
   */
  updateNewInlineQuery: Obj.UpdateNewInlineQuery;

  /**
   * The user has chosen a result of an inline query; for bots only
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_new_chosen_inline_result.html
   */
  updateNewChosenInlineResult: Obj.UpdateNewChosenInlineResult;

  /**
   * A new incoming callback query; for bots only
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_new_callback_query.html
   */
  updateNewCallbackQuery: Obj.UpdateNewCallbackQuery;

  /**
   * A new incoming callback query from a message sent via a bot; for bots only
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_new_inline_callback_query.html
   */
  updateNewInlineCallbackQuery: Obj.UpdateNewInlineCallbackQuery;

  /**
   * A new incoming callback query from a business message; for bots only
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_new_business_callback_query.html
   */
  updateNewBusinessCallbackQuery: Obj.UpdateNewBusinessCallbackQuery;

  /**
   * A new incoming shipping query; for bots only. Only for invoices with flexible price
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_new_shipping_query.html
   */
  updateNewShippingQuery: Obj.UpdateNewShippingQuery;

  /**
   * A new incoming pre-checkout query; for bots only. Contains full information about a checkout
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_new_pre_checkout_query.html
   */
  updateNewPreCheckoutQuery: Obj.UpdateNewPreCheckoutQuery;

  /**
   * A new incoming event; for bots only
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_new_custom_event.html
   */
  updateNewCustomEvent: Obj.UpdateNewCustomEvent;

  /**
   * A new incoming query; for bots only
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_new_custom_query.html
   */
  updateNewCustomQuery: Obj.UpdateNewCustomQuery;

  /**
   * A poll was updated; for bots only
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_poll.html
   */
  updatePoll: Obj.UpdatePoll;

  /**
   * A user changed the answer to a poll; for bots only
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_poll_answer.html
   */
  updatePollAnswer: Obj.UpdatePollAnswer;

  /**
   * User rights changed in a chat; for bots only
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_member.html
   */
  updateChatMember: Obj.UpdateChatMember;

  /**
   * A user sent a join request to a chat; for bots only
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_new_chat_join_request.html
   */
  updateNewChatJoinRequest: Obj.UpdateNewChatJoinRequest;

  /**
   * A chat boost has changed; for bots only
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_boost.html
   */
  updateChatBoost: Obj.UpdateChatBoost;

  /**
   * User changed its reactions on a message with public reactions; for bots only
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_message_reaction.html
   */
  updateMessageReaction: Obj.UpdateMessageReaction;

  /**
   * Reactions added to a message with anonymous reactions have changed; for bots only
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_message_reactions.html
   */
  updateMessageReactions: Obj.UpdateMessageReactions;

  /**
   * Paid media were purchased by a user; for bots only
   * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_paid_media_purchased.html
   */
  updatePaidMediaPurchased: Obj.UpdatePaidMediaPurchased;
};
