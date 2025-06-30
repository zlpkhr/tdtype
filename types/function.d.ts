import type * as Obj from "./object";

/**
 * Returns the current authorization state. This is an offline method. For informational purposes only. Use updateAuthorizationState instead to maintain the current authorization state. Can be called before initialization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_authorization_state.html
 */
export type GetAuthorizationState = (args: {
  "@type": "getAuthorizationState";
}) => Obj.AuthorizationState;

/**
 * Sets the parameters for TDLib initialization. Works only when the current authorization state is authorizationStateWaitTdlibParameters
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_tdlib_parameters.html
 */
export type SetTdlibParameters = (args: {
  "@type": "setTdlibParameters";
  /** Pass true to use Telegram test environment instead of the production environment */
  use_test_dc: boolean;
  /** The path to the directory for the persistent database; if empty, the current working directory will be used */
  database_directory: string;
  /** The path to the directory for storing files; if empty, database_directory will be used */
  files_directory: string;
  /** Encryption key for the database. If the encryption key is invalid, then an error with code 401 will be returned */
  database_encryption_key: string;
  /** Pass true to keep information about downloaded and uploaded files between application restarts */
  use_file_database: boolean;
  /** Pass true to keep cache of users, basic groups, supergroups, channels and secret chats between restarts. Implies use_file_database */
  use_chat_info_database: boolean;
  /** Pass true to keep cache of chats and messages between restarts. Implies use_chat_info_database */
  use_message_database: boolean;
  /** Pass true to enable support for secret chats */
  use_secret_chats: boolean;
  /** Application identifier for Telegram API access, which can be obtained at https://my.telegram.org */
  api_id: number;
  /** Application identifier hash for Telegram API access, which can be obtained at https://my.telegram.org */
  api_hash: string;
  /** IETF language tag of the user's operating system language; must be non-empty */
  system_language_code: string;
  /** Model of the device the application is being run on; must be non-empty */
  device_model: string;
  /** Version of the operating system the application is being run on. If empty, the version is automatically detected by TDLib */
  system_version: string;
  /** Application version; must be non-empty */
  application_version: string;
}) => Obj.Ok;

/**
 * Sets the phone number of the user and sends an authentication code to the user. Works only when the current authorization state is authorizationStateWaitPhoneNumber, or if there is no pending authentication query and the current authorization state is authorizationStateWaitPremiumPurchase, authorizationStateWaitEmailAddress, authorizationStateWaitEmailCode, authorizationStateWaitCode, authorizationStateWaitRegistration, or authorizationStateWaitPassword
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_authentication_phone_number.html
 */
export type SetAuthenticationPhoneNumber = (args: {
  "@type": "setAuthenticationPhoneNumber";
  /** The phone number of the user, in international format */
  phone_number: string;
  /** Settings for the authentication of the user's phone number; pass null to use default settings */
  settings?: Obj.PhoneNumberAuthenticationSettings;
}) => Obj.Ok;

/**
 * Checks whether an in-store purchase of Telegram Premium is possible before authorization. Works only when the current authorization state is authorizationStateWaitPremiumPurchase
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1check_authentication_premium_purchase.html
 */
export type CheckAuthenticationPremiumPurchase = (args: {
  "@type": "checkAuthenticationPremiumPurchase";
  /** ISO 4217 currency code of the payment currency */
  currency: string;
  /** Paid amount, in the smallest units of the currency */
  amount: number;
}) => Obj.Ok;

/**
 * Informs server about an in-store purchase of Telegram Premium before authorization. Works only when the current authorization state is authorizationStateWaitPremiumPurchase
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_authentication_premium_purchase_transaction.html
 */
export type SetAuthenticationPremiumPurchaseTransaction = (args: {
  "@type": "setAuthenticationPremiumPurchaseTransaction";
  /** Information about the transaction */
  transaction: Obj.StoreTransaction;
  /** Pass true if this is a restore of a Telegram Premium purchase; only for App Store */
  is_restore: boolean;
  /** ISO 4217 currency code of the payment currency */
  currency: string;
  /** Paid amount, in the smallest units of the currency */
  amount: number;
}) => Obj.Ok;

/**
 * Sets the email address of the user and sends an authentication code to the email address. Works only when the current authorization state is authorizationStateWaitEmailAddress
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_authentication_email_address.html
 */
export type SetAuthenticationEmailAddress = (args: {
  "@type": "setAuthenticationEmailAddress";
  /** The email address of the user */
  email_address: string;
}) => Obj.Ok;

/**
 * Resends an authentication code to the user. Works only when the current authorization state is authorizationStateWaitCode, the next_code_type of the result is not null and the server-specified timeout has passed, or when the current authorization state is authorizationStateWaitEmailCode
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1resend_authentication_code.html
 */
export type ResendAuthenticationCode = (args: {
  "@type": "resendAuthenticationCode";
  /** Reason of code resending; pass null if unknown */
  reason?: Obj.ResendCodeReason;
}) => Obj.Ok;

/**
 * Checks the authentication of an email address. Works only when the current authorization state is authorizationStateWaitEmailCode
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1check_authentication_email_code.html
 */
export type CheckAuthenticationEmailCode = (args: {
  "@type": "checkAuthenticationEmailCode";
  /** Email address authentication to check */
  code: Obj.EmailAddressAuthentication;
}) => Obj.Ok;

/**
 * Checks the authentication code. Works only when the current authorization state is authorizationStateWaitCode
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1check_authentication_code.html
 */
export type CheckAuthenticationCode = (args: {
  "@type": "checkAuthenticationCode";
  /** Authentication code to check */
  code: string;
}) => Obj.Ok;

/**
 * Requests QR code authentication by scanning a QR code on another logged in device. Works only when the current authorization state is authorizationStateWaitPhoneNumber, or if there is no pending authentication query and the current authorization state is authorizationStateWaitPremiumPurchase, authorizationStateWaitEmailAddress, authorizationStateWaitEmailCode, authorizationStateWaitCode, authorizationStateWaitRegistration, or authorizationStateWaitPassword
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1request_qr_code_authentication.html
 */
export type RequestQrCodeAuthentication = (args: {
  "@type": "requestQrCodeAuthentication";
  /** List of user identifiers of other users currently using the application */
  other_user_ids: number[];
}) => Obj.Ok;

/**
 * Finishes user registration. Works only when the current authorization state is authorizationStateWaitRegistration
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1register_user.html
 */
export type RegisterUser = (args: {
  "@type": "registerUser";
  /** The first name of the user; 1-64 characters */
  first_name: string;
  /** The last name of the user; 0-64 characters */
  last_name: string;
  /** Pass true to disable notification about the current user joining Telegram for other users that added them to contact list */
  disable_notification: boolean;
}) => Obj.Ok;

/**
 * Resets the login email address. May return an error with a message "TASK_ALREADY_EXISTS" if reset is still pending. Works only when the current authorization state is authorizationStateWaitEmailCode and authorization_state.can_reset_email_address == true
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1reset_authentication_email_address.html
 */
export type ResetAuthenticationEmailAddress = (args: {
  "@type": "resetAuthenticationEmailAddress";
}) => Obj.Ok;

/**
 * Checks the 2-step verification password for correctness. Works only when the current authorization state is authorizationStateWaitPassword
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1check_authentication_password.html
 */
export type CheckAuthenticationPassword = (args: {
  "@type": "checkAuthenticationPassword";
  /** The 2-step verification password to check */
  password: string;
}) => Obj.Ok;

/**
 * Requests to send a 2-step verification password recovery code to an email address that was previously set up. Works only when the current authorization state is authorizationStateWaitPassword
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1request_authentication_password_recovery.html
 */
export type RequestAuthenticationPasswordRecovery = (args: {
  "@type": "requestAuthenticationPasswordRecovery";
}) => Obj.Ok;

/**
 * Checks whether a 2-step verification password recovery code sent to an email address is valid. Works only when the current authorization state is authorizationStateWaitPassword
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1check_authentication_password_recovery_code.html
 */
export type CheckAuthenticationPasswordRecoveryCode = (args: {
  "@type": "checkAuthenticationPasswordRecoveryCode";
  /** Recovery code to check */
  recovery_code: string;
}) => Obj.Ok;

/**
 * Recovers the 2-step verification password with a password recovery code sent to an email address that was previously set up. Works only when the current authorization state is authorizationStateWaitPassword
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1recover_authentication_password.html
 */
export type RecoverAuthenticationPassword = (args: {
  "@type": "recoverAuthenticationPassword";
  /** Recovery code to check */
  recovery_code: string;
  /** New 2-step verification password of the user; may be empty to remove the password */
  new_password?: string;
  /** New password hint; may be empty */
  new_hint?: string;
}) => Obj.Ok;

/**
 * Sends Firebase Authentication SMS to the phone number of the user. Works only when the current authorization state is authorizationStateWaitCode and the server returned code of the type authenticationCodeTypeFirebaseAndroid or authenticationCodeTypeFirebaseIos
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1send_authentication_firebase_sms.html
 */
export type SendAuthenticationFirebaseSms = (args: {
  "@type": "sendAuthenticationFirebaseSms";
  /** Play Integrity API or SafetyNet Attestation API token for the Android application, or secret from push notification for the iOS application */
  token: string;
}) => Obj.Ok;

/**
 * Reports that authentication code wasn't delivered via SMS; for official mobile applications only. Works only when the current authorization state is authorizationStateWaitCode
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1report_authentication_code_missing.html
 */
export type ReportAuthenticationCodeMissing = (args: {
  "@type": "reportAuthenticationCodeMissing";
  /** Current mobile network code */
  mobile_network_code: string;
}) => Obj.Ok;

/**
 * Checks the authentication token of a bot; to log in as a bot. Works only when the current authorization state is authorizationStateWaitPhoneNumber. Can be used instead of setAuthenticationPhoneNumber and checkAuthenticationCode to log in
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1check_authentication_bot_token.html
 */
export type CheckAuthenticationBotToken = (args: {
  "@type": "checkAuthenticationBotToken";
  /** The bot token */
  token: string;
}) => Obj.Ok;

/**
 * Closes the TDLib instance after a proper logout. Requires an available network connection. All local data will be destroyed. After the logout completes, updateAuthorizationState with authorizationStateClosed will be sent
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1log_out.html
 */
export type LogOut = (args: { "@type": "logOut" }) => Obj.Ok;

/**
 * Closes the TDLib instance. All databases will be flushed to disk and properly closed. After the close completes, updateAuthorizationState with authorizationStateClosed will be sent. Can be called before initialization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1close.html
 */
export type Close = (args: { "@type": "close" }) => Obj.Ok;

/**
 * Closes the TDLib instance, destroying all local data without a proper logout. The current user session will remain in the list of all active sessions. All local data will be destroyed. After the destruction completes updateAuthorizationState with authorizationStateClosed will be sent. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1destroy.html
 */
export type Destroy = (args: { "@type": "destroy" }) => Obj.Ok;

/**
 * Confirms QR code authentication on another device. Returns created session on success
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1confirm_qr_code_authentication.html
 */
export type ConfirmQrCodeAuthentication = (args: {
  "@type": "confirmQrCodeAuthentication";
  /** A link from a QR code. The link must be scanned by the in-app camera */
  link: string;
}) => Obj.Session;

/**
 * Returns all updates needed to restore current TDLib state, i.e. all actual updateAuthorizationState/updateUser/updateNewChat and others. This is especially useful if TDLib is run in a separate process. Can be called before initialization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_current_state.html
 */
export type GetCurrentState = (args: {
  "@type": "getCurrentState";
}) => Obj.Updates;

/**
 * Changes the database encryption key. Usually the encryption key is never changed and is stored in some OS keychain
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_database_encryption_key.html
 */
export type SetDatabaseEncryptionKey = (args: {
  "@type": "setDatabaseEncryptionKey";
  /** New encryption key */
  new_encryption_key: string;
}) => Obj.Ok;

/**
 * Returns the current state of 2-step verification
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_password_state.html
 */
export type GetPasswordState = (args: {
  "@type": "getPasswordState";
}) => Obj.PasswordState;

/**
 * Changes the 2-step verification password for the current user. If a new recovery email address is specified, then the change will not be applied until the new recovery email address is confirmed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_password.html
 */
export type SetPassword = (args: {
  "@type": "setPassword";
  /** Previous 2-step verification password of the user */
  old_password: string;
  /** New 2-step verification password of the user; may be empty to remove the password */
  new_password?: string;
  /** New password hint; may be empty */
  new_hint?: string;
  /** Pass true to change also the recovery email address */
  set_recovery_email_address: boolean;
  /** New recovery email address; may be empty */
  new_recovery_email_address?: string;
}) => Obj.PasswordState;

/**
 * Changes the login email address of the user. The email address can be changed only if the current user already has login email and passwordState.login_email_address_pattern is non-empty. The change will not be applied until the new login email address is confirmed with checkLoginEmailAddressCode. To use Apple ID/Google ID instead of an email address, call checkLoginEmailAddressCode directly
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_login_email_address.html
 */
export type SetLoginEmailAddress = (args: {
  "@type": "setLoginEmailAddress";
  /** New login email address */
  new_login_email_address: string;
}) => Obj.EmailAddressAuthenticationCodeInfo;

/**
 * Resends the login email address verification code
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1resend_login_email_address_code.html
 */
export type ResendLoginEmailAddressCode = (args: {
  "@type": "resendLoginEmailAddressCode";
}) => Obj.EmailAddressAuthenticationCodeInfo;

/**
 * Checks the login email address authentication
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1check_login_email_address_code.html
 */
export type CheckLoginEmailAddressCode = (args: {
  "@type": "checkLoginEmailAddressCode";
  /** Email address authentication to check */
  code: Obj.EmailAddressAuthentication;
}) => Obj.Ok;

/**
 * Returns a 2-step verification recovery email address that was previously set up. This method can be used to verify a password provided by the user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_recovery_email_address.html
 */
export type GetRecoveryEmailAddress = (args: {
  "@type": "getRecoveryEmailAddress";
  /** The 2-step verification password for the current user */
  password: string;
}) => Obj.RecoveryEmailAddress;

/**
 * Changes the 2-step verification recovery email address of the user. If a new recovery email address is specified, then the change will not be applied until the new recovery email address is confirmed. If new_recovery_email_address is the same as the email address that is currently set up, this call succeeds immediately and aborts all other requests waiting for an email confirmation
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_recovery_email_address.html
 */
export type SetRecoveryEmailAddress = (args: {
  "@type": "setRecoveryEmailAddress";
  /** The 2-step verification password of the current user */
  password: string;
  /** New recovery email address */
  new_recovery_email_address: string;
}) => Obj.PasswordState;

/**
 * Checks the 2-step verification recovery email address verification code
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1check_recovery_email_address_code.html
 */
export type CheckRecoveryEmailAddressCode = (args: {
  "@type": "checkRecoveryEmailAddressCode";
  /** Verification code to check */
  code: string;
}) => Obj.PasswordState;

/**
 * Resends the 2-step verification recovery email address verification code
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1resend_recovery_email_address_code.html
 */
export type ResendRecoveryEmailAddressCode = (args: {
  "@type": "resendRecoveryEmailAddressCode";
}) => Obj.PasswordState;

/**
 * Cancels verification of the 2-step verification recovery email address
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1cancel_recovery_email_address_verification.html
 */
export type CancelRecoveryEmailAddressVerification = (args: {
  "@type": "cancelRecoveryEmailAddressVerification";
}) => Obj.PasswordState;

/**
 * Requests to send a 2-step verification password recovery code to an email address that was previously set up
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1request_password_recovery.html
 */
export type RequestPasswordRecovery = (args: {
  "@type": "requestPasswordRecovery";
}) => Obj.EmailAddressAuthenticationCodeInfo;

/**
 * Checks whether a 2-step verification password recovery code sent to an email address is valid
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1check_password_recovery_code.html
 */
export type CheckPasswordRecoveryCode = (args: {
  "@type": "checkPasswordRecoveryCode";
  /** Recovery code to check */
  recovery_code: string;
}) => Obj.Ok;

/**
 * Recovers the 2-step verification password using a recovery code sent to an email address that was previously set up
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1recover_password.html
 */
export type RecoverPassword = (args: {
  "@type": "recoverPassword";
  /** Recovery code to check */
  recovery_code: string;
  /** New 2-step verification password of the user; may be empty to remove the password */
  new_password?: string;
  /** New password hint; may be empty */
  new_hint?: string;
}) => Obj.PasswordState;

/**
 * Removes 2-step verification password without previous password and access to recovery email address. The password can't be reset immediately and the request needs to be repeated after the specified time
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1reset_password.html
 */
export type ResetPassword = (args: {
  "@type": "resetPassword";
}) => Obj.ResetPasswordResult;

/**
 * Cancels reset of 2-step verification password. The method can be called if passwordState.pending_reset_date > 0
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1cancel_password_reset.html
 */
export type CancelPasswordReset = (args: {
  "@type": "cancelPasswordReset";
}) => Obj.Ok;

/**
 * Creates a new temporary password for processing payments
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1create_temporary_password.html
 */
export type CreateTemporaryPassword = (args: {
  "@type": "createTemporaryPassword";
  /** The 2-step verification password of the current user */
  password: string;
  /** Time during which the temporary password will be valid, in seconds; must be between 60 and 86400 */
  valid_for: number;
}) => Obj.TemporaryPasswordState;

/**
 * Returns information about the current temporary password
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_temporary_password_state.html
 */
export type GetTemporaryPasswordState = (args: {
  "@type": "getTemporaryPasswordState";
}) => Obj.TemporaryPasswordState;

/**
 * Returns the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_me.html
 */
export type GetMe = (args: { "@type": "getMe" }) => Obj.User;

/**
 * Returns information about a user by their identifier. This is an offline method if the current user is not a bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_user.html
 */
export type GetUser = (args: {
  "@type": "getUser";
  /** User identifier */
  user_id: number;
}) => Obj.User;

/**
 * Returns full information about a user by their identifier
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_user_full_info.html
 */
export type GetUserFullInfo = (args: {
  "@type": "getUserFullInfo";
  /** User identifier */
  user_id: number;
}) => Obj.UserFullInfo;

/**
 * Returns information about a basic group by its identifier. This is an offline method if the current user is not a bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_basic_group.html
 */
export type GetBasicGroup = (args: {
  "@type": "getBasicGroup";
  /** Basic group identifier */
  basic_group_id: number;
}) => Obj.BasicGroup;

/**
 * Returns full information about a basic group by its identifier
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_basic_group_full_info.html
 */
export type GetBasicGroupFullInfo = (args: {
  "@type": "getBasicGroupFullInfo";
  /** Basic group identifier */
  basic_group_id: number;
}) => Obj.BasicGroupFullInfo;

/**
 * Returns information about a supergroup or a channel by its identifier. This is an offline method if the current user is not a bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_supergroup.html
 */
export type GetSupergroup = (args: {
  "@type": "getSupergroup";
  /** Supergroup or channel identifier */
  supergroup_id: number;
}) => Obj.Supergroup;

/**
 * Returns full information about a supergroup or a channel by its identifier, cached for up to 1 minute
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_supergroup_full_info.html
 */
export type GetSupergroupFullInfo = (args: {
  "@type": "getSupergroupFullInfo";
  /** Supergroup or channel identifier */
  supergroup_id: number;
}) => Obj.SupergroupFullInfo;

/**
 * Returns information about a secret chat by its identifier. This is an offline method
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_secret_chat.html
 */
export type GetSecretChat = (args: {
  "@type": "getSecretChat";
  /** Secret chat identifier */
  secret_chat_id: number;
}) => Obj.SecretChat;

/**
 * Returns information about a chat by its identifier. This is an offline method if the current user is not a bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat.html
 */
export type GetChat = (args: {
  "@type": "getChat";
  /** Chat identifier */
  chat_id: number;
}) => Obj.Chat;

/**
 * Returns information about a message. Returns a 404 error if the message doesn't exist
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_message.html
 */
export type GetMessage = (args: {
  "@type": "getMessage";
  /** Identifier of the chat the message belongs to */
  chat_id: number;
  /** Identifier of the message to get */
  message_id: number;
}) => Obj.Message;

/**
 * Returns information about a message, if it is available without sending network request. Returns a 404 error if message isn't available locally. This is an offline method
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_message_locally.html
 */
export type GetMessageLocally = (args: {
  "@type": "getMessageLocally";
  /** Identifier of the chat the message belongs to */
  chat_id: number;
  /** Identifier of the message to get */
  message_id: number;
}) => Obj.Message;

/**
 * Returns information about a non-bundled message that is replied by a given message. Also, returns the pinned message, the game message, the invoice message, the message with a previously set same background, the giveaway message, and the topic creation message for messages of the types messagePinMessage, messageGameScore, messagePaymentSuccessful, messageChatSetBackground, messageGiveawayCompleted and topic messages without non-bundled replied message respectively. Returns a 404 error if the message doesn't exist
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_replied_message.html
 */
export type GetRepliedMessage = (args: {
  "@type": "getRepliedMessage";
  /** Identifier of the chat the message belongs to */
  chat_id: number;
  /** Identifier of the reply message */
  message_id: number;
}) => Obj.Message;

/**
 * Returns information about a newest pinned message in the chat. Returns a 404 error if the message doesn't exist
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_pinned_message.html
 */
export type GetChatPinnedMessage = (args: {
  "@type": "getChatPinnedMessage";
  /** Identifier of the chat the message belongs to */
  chat_id: number;
}) => Obj.Message;

/**
 * Returns information about a message with the callback button that originated a callback query; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_callback_query_message.html
 */
export type GetCallbackQueryMessage = (args: {
  "@type": "getCallbackQueryMessage";
  /** Identifier of the chat the message belongs to */
  chat_id: number;
  /** Message identifier */
  message_id: number;
  /** Identifier of the callback query */
  callback_query_id: string;
}) => Obj.Message;

/**
 * Returns information about messages. If a message is not found, returns null on the corresponding position of the result
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_messages.html
 */
export type GetMessages = (args: {
  "@type": "getMessages";
  /** Identifier of the chat the messages belong to */
  chat_id: number;
  /** Identifiers of the messages to get */
  message_ids: number[];
}) => Obj.Messages;

/**
 * Returns properties of a message. This is an offline method
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_message_properties.html
 */
export type GetMessageProperties = (args: {
  "@type": "getMessageProperties";
  /** Chat identifier */
  chat_id: number;
  /** Identifier of the message */
  message_id: number;
}) => Obj.MessageProperties;

/**
 * Returns information about a message thread. Can be used only if messageProperties.can_get_message_thread == true
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_message_thread.html
 */
export type GetMessageThread = (args: {
  "@type": "getMessageThread";
  /** Chat identifier */
  chat_id: number;
  /** Identifier of the message */
  message_id: number;
}) => Obj.MessageThreadInfo;

/**
 * Returns read date of a recent outgoing message in a private chat. The method can be called if messageProperties.can_get_read_date == true
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_message_read_date.html
 */
export type GetMessageReadDate = (args: {
  "@type": "getMessageReadDate";
  /** Chat identifier */
  chat_id: number;
  /** Identifier of the message */
  message_id: number;
}) => Obj.MessageReadDate;

/**
 * Returns viewers of a recent outgoing message in a basic group or a supergroup chat. For video notes and voice notes only users, opened content of the message, are returned. The method can be called if messageProperties.can_get_viewers == true
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_message_viewers.html
 */
export type GetMessageViewers = (args: {
  "@type": "getMessageViewers";
  /** Chat identifier */
  chat_id: number;
  /** Identifier of the message */
  message_id: number;
}) => Obj.MessageViewers;

/**
 * Returns information about actual author of a message sent on behalf of a channel. The method can be called if messageProperties.can_get_author == true
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_message_author.html
 */
export type GetMessageAuthor = (args: {
  "@type": "getMessageAuthor";
  /** Chat identifier */
  chat_id: number;
  /** Identifier of the message */
  message_id: number;
}) => Obj.User;

/**
 * Returns information about a file. This is an offline method
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_file.html
 */
export type GetFile = (args: {
  "@type": "getFile";
  /** Identifier of the file to get */
  file_id: number;
}) => Obj.File;

/**
 * Returns information about a file by its remote identifier. This is an offline method. Can be used to register a URL as a file for further uploading, or sending as a message. Even the request succeeds, the file can be used only if it is still accessible to the user. For example, if the file is from a message, then the message must be not deleted and accessible to the user. If the file database is disabled, then the corresponding object with the file must be preloaded by the application
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_remote_file.html
 */
export type GetRemoteFile = (args: {
  "@type": "getRemoteFile";
  /** Remote identifier of the file to get */
  remote_file_id: string;
  /** File type; pass null if unknown */
  file_type?: Obj.FileType;
}) => Obj.File;

/**
 * Loads more chats from a chat list. The loaded chats and their positions in the chat list will be sent through updates. Chats are sorted by the pair (chat.position.order, chat.id) in descending order. Returns a 404 error if all chats have been loaded
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1load_chats.html
 */
export type LoadChats = (args: {
  "@type": "loadChats";
  /** The chat list in which to load chats; pass null to load chats from the main chat list */
  chat_list?: Obj.ChatList;
  /** The maximum number of chats to be loaded. For optimal performance, the number of loaded chats is chosen by TDLib and can be smaller than the specified limit, even if the end of the list is not reached */
  limit: number;
}) => Obj.Ok;

/**
 * Returns an ordered list of chats from the beginning of a chat list. For informational purposes only. Use loadChats and updates processing instead to maintain chat lists in a consistent state
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chats.html
 */
export type GetChats = (args: {
  "@type": "getChats";
  /** The chat list in which to return chats; pass null to get chats from the main chat list */
  chat_list?: Obj.ChatList;
  /** The maximum number of chats to be returned */
  limit: number;
}) => Obj.Chats;

/**
 * Searches a public chat by its username. Currently, only private chats, supergroups and channels can be public. Returns the chat if found; otherwise, an error is returned
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_public_chat.html
 */
export type SearchPublicChat = (args: {
  "@type": "searchPublicChat";
  /** Username to be resolved */
  username: string;
}) => Obj.Chat;

/**
 * Searches public chats by looking for specified query in their username and title. Currently, only private chats, supergroups and channels can be public. Returns a meaningful number of results. Excludes private chats with contacts and chats from the chat list from the results
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_public_chats.html
 */
export type SearchPublicChats = (args: {
  "@type": "searchPublicChats";
  /** Query to search for */
  query: string;
}) => Obj.Chats;

/**
 * Searches for the specified query in the title and username of already known chats. This is an offline method. Returns chats in the order seen in the main chat list
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_chats.html
 */
export type SearchChats = (args: {
  "@type": "searchChats";
  /** Query to search for. If the query is empty, returns up to 50 recently found chats */
  query: string;
  /** The maximum number of chats to be returned */
  limit: number;
}) => Obj.Chats;

/**
 * Searches for the specified query in the title and username of already known chats via request to the server. Returns chats in the order seen in the main chat list
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_chats_on_server.html
 */
export type SearchChatsOnServer = (args: {
  "@type": "searchChatsOnServer";
  /** Query to search for */
  query: string;
  /** The maximum number of chats to be returned */
  limit: number;
}) => Obj.Chats;

/**
 * Returns a list of channel chats recommended to the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_recommended_chats.html
 */
export type GetRecommendedChats = (args: {
  "@type": "getRecommendedChats";
}) => Obj.Chats;

/**
 * Returns a list of chats similar to the given chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_similar_chats.html
 */
export type GetChatSimilarChats = (args: {
  "@type": "getChatSimilarChats";
  /** Identifier of the target chat; must be an identifier of a channel chat */
  chat_id: number;
}) => Obj.Chats;

/**
 * Returns approximate number of chats similar to the given chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_similar_chat_count.html
 */
export type GetChatSimilarChatCount = (args: {
  "@type": "getChatSimilarChatCount";
  /** Identifier of the target chat; must be an identifier of a channel chat */
  chat_id: number;
  /** Pass true to get the number of chats without sending network requests, or -1 if the number of chats is unknown locally */
  return_local: boolean;
}) => Obj.Count;

/**
 * Informs TDLib that a chat was opened from the list of similar chats. The method is independent of openChat and closeChat methods
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1open_chat_similar_chat.html
 */
export type OpenChatSimilarChat = (args: {
  "@type": "openChatSimilarChat";
  /** Identifier of the original chat, which similar chats were requested */
  chat_id: number;
  /** Identifier of the opened chat */
  opened_chat_id: number;
}) => Obj.Ok;

/**
 * Returns a list of bots similar to the given bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_bot_similar_bots.html
 */
export type GetBotSimilarBots = (args: {
  "@type": "getBotSimilarBots";
  /** User identifier of the target bot */
  bot_user_id: number;
}) => Obj.Users;

/**
 * Returns approximate number of bots similar to the given bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_bot_similar_bot_count.html
 */
export type GetBotSimilarBotCount = (args: {
  "@type": "getBotSimilarBotCount";
  /** User identifier of the target bot */
  bot_user_id: number;
  /** Pass true to get the number of bots without sending network requests, or -1 if the number of bots is unknown locally */
  return_local: boolean;
}) => Obj.Count;

/**
 * Informs TDLib that a bot was opened from the list of similar bots
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1open_bot_similar_bot.html
 */
export type OpenBotSimilarBot = (args: {
  "@type": "openBotSimilarBot";
  /** Identifier of the original bot, which similar bots were requested */
  bot_user_id: number;
  /** Identifier of the opened bot */
  opened_bot_user_id: number;
}) => Obj.Ok;

/**
 * Returns a list of frequently used chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_top_chats.html
 */
export type GetTopChats = (args: {
  "@type": "getTopChats";
  /** Category of chats to be returned */
  category: Obj.TopChatCategory;
  /** The maximum number of chats to be returned; up to 30 */
  limit: number;
}) => Obj.Chats;

/**
 * Removes a chat from the list of frequently used chats. Supported only if the chat info database is enabled
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1remove_top_chat.html
 */
export type RemoveTopChat = (args: {
  "@type": "removeTopChat";
  /** Category of frequently used chats */
  category: Obj.TopChatCategory;
  /** Chat identifier */
  chat_id: number;
}) => Obj.Ok;

/**
 * Searches for the specified query in the title and username of up to 50 recently found chats. This is an offline method
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_recently_found_chats.html
 */
export type SearchRecentlyFoundChats = (args: {
  "@type": "searchRecentlyFoundChats";
  /** Query to search for */
  query: string;
  /** The maximum number of chats to be returned */
  limit: number;
}) => Obj.Chats;

/**
 * Adds a chat to the list of recently found chats. The chat is added to the beginning of the list. If the chat is already in the list, it will be removed from the list first
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1add_recently_found_chat.html
 */
export type AddRecentlyFoundChat = (args: {
  "@type": "addRecentlyFoundChat";
  /** Identifier of the chat to add */
  chat_id: number;
}) => Obj.Ok;

/**
 * Removes a chat from the list of recently found chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1remove_recently_found_chat.html
 */
export type RemoveRecentlyFoundChat = (args: {
  "@type": "removeRecentlyFoundChat";
  /** Identifier of the chat to be removed */
  chat_id: number;
}) => Obj.Ok;

/**
 * Clears the list of recently found chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1clear_recently_found_chats.html
 */
export type ClearRecentlyFoundChats = (args: {
  "@type": "clearRecentlyFoundChats";
}) => Obj.Ok;

/**
 * Returns recently opened chats. This is an offline method. Returns chats in the order of last opening
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_recently_opened_chats.html
 */
export type GetRecentlyOpenedChats = (args: {
  "@type": "getRecentlyOpenedChats";
  /** The maximum number of chats to be returned */
  limit: number;
}) => Obj.Chats;

/**
 * Checks whether a username can be set for a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1check_chat_username.html
 */
export type CheckChatUsername = (args: {
  "@type": "checkChatUsername";
  /** Chat identifier; must be identifier of a supergroup chat, or a channel chat, or a private chat with self, or 0 if the chat is being created */
  chat_id: number;
  /** Username to be checked */
  username: string;
}) => Obj.CheckChatUsernameResult;

/**
 * Returns a list of public chats of the specified type, owned by the user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_created_public_chats.html
 */
export type GetCreatedPublicChats = (args: {
  "@type": "getCreatedPublicChats";
  /** Type of the public chats to return */
  type: Obj.PublicChatType;
}) => Obj.Chats;

/**
 * Checks whether the maximum number of owned public chats has been reached. Returns corresponding error if the limit was reached. The limit can be increased with Telegram Premium
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1check_created_public_chats_limit.html
 */
export type CheckCreatedPublicChatsLimit = (args: {
  "@type": "checkCreatedPublicChatsLimit";
  /** Type of the public chats, for which to check the limit */
  type: Obj.PublicChatType;
}) => Obj.Ok;

/**
 * Returns a list of basic group and supergroup chats, which can be used as a discussion group for a channel. Returned basic group chats must be first upgraded to supergroups before they can be set as a discussion group. To set a returned supergroup as a discussion group, access to its old messages must be enabled using toggleSupergroupIsAllHistoryAvailable first
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_suitable_discussion_chats.html
 */
export type GetSuitableDiscussionChats = (args: {
  "@type": "getSuitableDiscussionChats";
}) => Obj.Chats;

/**
 * Returns a list of recently inactive supergroups and channels. Can be used when user reaches limit on the number of joined supergroups and channels and receives the error "CHANNELS_TOO_MUCH". Also, the limit can be increased with Telegram Premium
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_inactive_supergroup_chats.html
 */
export type GetInactiveSupergroupChats = (args: {
  "@type": "getInactiveSupergroupChats";
}) => Obj.Chats;

/**
 * Returns a list of channel chats, which can be used as a personal chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_suitable_personal_chats.html
 */
export type GetSuitablePersonalChats = (args: {
  "@type": "getSuitablePersonalChats";
}) => Obj.Chats;

/**
 * Loads more topics in a channel direct messages chat administered by the current user. The loaded topics will be sent through updateDirectMessagesChatTopic. Topics are sorted by their topic.order in descending order. Returns a 404 error if all topics have been loaded
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1load_direct_messages_chat_topics.html
 */
export type LoadDirectMessagesChatTopics = (args: {
  "@type": "loadDirectMessagesChatTopics";
  /** Chat identifier of the channel direct messages chat */
  chat_id: number;
  /** The maximum number of topics to be loaded. For optimal performance, the number of loaded topics is chosen by TDLib and can be smaller than the specified limit, even if the end of the list is not reached */
  limit: number;
}) => Obj.Ok;

/**
 * Returns information about the topic in a channel direct messages chat administered by the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_direct_messages_chat_topic.html
 */
export type GetDirectMessagesChatTopic = (args: {
  "@type": "getDirectMessagesChatTopic";
  /** Chat identifier of the channel direct messages chat */
  chat_id: number;
  /** Identifier of the topic to get */
  topic_id: number;
}) => Obj.DirectMessagesChatTopic;

/**
 * Returns messages in the topic in a channel direct messages chat administered by the current user. The messages are returned in reverse chronological order (i.e., in order of decreasing message_id)
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_direct_messages_chat_topic_history.html
 */
export type GetDirectMessagesChatTopicHistory = (args: {
  "@type": "getDirectMessagesChatTopicHistory";
  /** Chat identifier of the channel direct messages chat */
  chat_id: number;
  /** Identifier of the topic which messages will be fetched */
  topic_id: number;
  /** Identifier of the message starting from which messages must be fetched; use 0 to get results from the last message */
  from_message_id: number;
  /** Specify 0 to get results from exactly the message from_message_id or a negative offset up to 99 to get additionally some newer messages */
  offset: number;
  /** The maximum number of messages to be returned; must be positive and can't be greater than 100. If the offset is negative, the limit must be greater than or equal to -offset. For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit */
  limit: number;
}) => Obj.Messages;

/**
 * Returns the last message sent in the topic in a channel direct messages chat administered by the current user no later than the specified date
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_direct_messages_chat_topic_message_by_date.html
 */
export type GetDirectMessagesChatTopicMessageByDate = (args: {
  "@type": "getDirectMessagesChatTopicMessageByDate";
  /** Chat identifier of the channel direct messages chat */
  chat_id: number;
  /** Identifier of the topic which messages will be fetched */
  topic_id: number;
  /** Point in time (Unix timestamp) relative to which to search for messages */
  date: number;
}) => Obj.Message;

/**
 * Deletes all messages in the topic in a channel direct messages chat administered by the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1delete_direct_messages_chat_topic_history.html
 */
export type DeleteDirectMessagesChatTopicHistory = (args: {
  "@type": "deleteDirectMessagesChatTopicHistory";
  /** Chat identifier of the channel direct messages chat */
  chat_id: number;
  /** Identifier of the topic which messages will be deleted */
  topic_id: number;
}) => Obj.Ok;

/**
 * Deletes all messages between the specified dates in the topic in a channel direct messages chat administered by the current user. Messages sent in the last 30 seconds will not be deleted
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1delete_direct_messages_chat_topic_messages_by_date.html
 */
export type DeleteDirectMessagesChatTopicMessagesByDate = (args: {
  "@type": "deleteDirectMessagesChatTopicMessagesByDate";
  /** Chat identifier of the channel direct messages chat */
  chat_id: number;
  /** Identifier of the topic which messages will be deleted */
  topic_id: number;
  /** The minimum date of the messages to delete */
  min_date: number;
  /** The maximum date of the messages to delete */
  max_date: number;
}) => Obj.Ok;

/**
 * Changes the marked as unread state of the topic in a channel direct messages chat administered by the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_direct_messages_chat_topic_is_marked_as_unread.html
 */
export type SetDirectMessagesChatTopicIsMarkedAsUnread = (args: {
  "@type": "setDirectMessagesChatTopicIsMarkedAsUnread";
  /** Chat identifier of the channel direct messages chat */
  chat_id: number;
  /** Topic identifier */
  topic_id: number;
  /** New value of is_marked_as_unread */
  is_marked_as_unread: boolean;
}) => Obj.Ok;

/**
 * Changes the draft message in the topic in a channel direct messages chat administered by the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_direct_messages_chat_topic_draft_message.html
 */
export type SetDirectMessagesChatTopicDraftMessage = (args: {
  "@type": "setDirectMessagesChatTopicDraftMessage";
  /** Chat identifier */
  chat_id: number;
  /** Topic identifier */
  topic_id: number;
  /** New draft message; pass null to remove the draft. All files in draft message content must be of the type inputFileLocal. Media thumbnails and captions are ignored */
  draft_message?: Obj.DraftMessage;
}) => Obj.Ok;

/**
 * Removes all pinned messages from the topic in a channel direct messages chat administered by the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1unpin_all_direct_messages_chat_topic_messages.html
 */
export type UnpinAllDirectMessagesChatTopicMessages = (args: {
  "@type": "unpinAllDirectMessagesChatTopicMessages";
  /** Identifier of the chat */
  chat_id: number;
  /** Topic identifier */
  topic_id: number;
}) => Obj.Ok;

/**
 * Removes all unread reactions in the topic in a channel direct messages chat administered by the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1read_all_direct_messages_chat_topic_reactions.html
 */
export type ReadAllDirectMessagesChatTopicReactions = (args: {
  "@type": "readAllDirectMessagesChatTopicReactions";
  /** Identifier of the chat */
  chat_id: number;
  /** Topic identifier */
  topic_id: number;
}) => Obj.Ok;

/**
 * Loads more Saved Messages topics. The loaded topics will be sent through updateSavedMessagesTopic. Topics are sorted by their topic.order in descending order. Returns a 404 error if all topics have been loaded
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1load_saved_messages_topics.html
 */
export type LoadSavedMessagesTopics = (args: {
  "@type": "loadSavedMessagesTopics";
  /** The maximum number of topics to be loaded. For optimal performance, the number of loaded topics is chosen by TDLib and can be smaller than the specified limit, even if the end of the list is not reached */
  limit: number;
}) => Obj.Ok;

/**
 * Returns messages in a Saved Messages topic. The messages are returned in reverse chronological order (i.e., in order of decreasing message_id)
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_saved_messages_topic_history.html
 */
export type GetSavedMessagesTopicHistory = (args: {
  "@type": "getSavedMessagesTopicHistory";
  /** Identifier of Saved Messages topic which messages will be fetched */
  saved_messages_topic_id: number;
  /** Identifier of the message starting from which messages must be fetched; use 0 to get results from the last message */
  from_message_id: number;
  /** Specify 0 to get results from exactly the message from_message_id or a negative offset up to 99 to get additionally some newer messages */
  offset: number;
  /** The maximum number of messages to be returned; must be positive and can't be greater than 100. If the offset is negative, the limit must be greater than or equal to -offset. For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit */
  limit: number;
}) => Obj.Messages;

/**
 * Returns the last message sent in a Saved Messages topic no later than the specified date
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_saved_messages_topic_message_by_date.html
 */
export type GetSavedMessagesTopicMessageByDate = (args: {
  "@type": "getSavedMessagesTopicMessageByDate";
  /** Identifier of Saved Messages topic which message will be returned */
  saved_messages_topic_id: number;
  /** Point in time (Unix timestamp) relative to which to search for messages */
  date: number;
}) => Obj.Message;

/**
 * Deletes all messages in a Saved Messages topic
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1delete_saved_messages_topic_history.html
 */
export type DeleteSavedMessagesTopicHistory = (args: {
  "@type": "deleteSavedMessagesTopicHistory";
  /** Identifier of Saved Messages topic which messages will be deleted */
  saved_messages_topic_id: number;
}) => Obj.Ok;

/**
 * Deletes all messages between the specified dates in a Saved Messages topic. Messages sent in the last 30 seconds will not be deleted
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1delete_saved_messages_topic_messages_by_date.html
 */
export type DeleteSavedMessagesTopicMessagesByDate = (args: {
  "@type": "deleteSavedMessagesTopicMessagesByDate";
  /** Identifier of Saved Messages topic which messages will be deleted */
  saved_messages_topic_id: number;
  /** The minimum date of the messages to delete */
  min_date: number;
  /** The maximum date of the messages to delete */
  max_date: number;
}) => Obj.Ok;

/**
 * Changes the pinned state of a Saved Messages topic. There can be up to getOption("pinned_saved_messages_topic_count_max") pinned topics. The limit can be increased with Telegram Premium
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_saved_messages_topic_is_pinned.html
 */
export type ToggleSavedMessagesTopicIsPinned = (args: {
  "@type": "toggleSavedMessagesTopicIsPinned";
  /** Identifier of Saved Messages topic to pin or unpin */
  saved_messages_topic_id: number;
  /** Pass true to pin the topic; pass false to unpin it */
  is_pinned: boolean;
}) => Obj.Ok;

/**
 * Changes the order of pinned Saved Messages topics
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_pinned_saved_messages_topics.html
 */
export type SetPinnedSavedMessagesTopics = (args: {
  "@type": "setPinnedSavedMessagesTopics";
  /** Identifiers of the new pinned Saved Messages topics */
  saved_messages_topic_ids: number[];
}) => Obj.Ok;

/**
 * Returns a list of common group chats with a given user. Chats are sorted by their type and creation date
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_groups_in_common.html
 */
export type GetGroupsInCommon = (args: {
  "@type": "getGroupsInCommon";
  /** User identifier */
  user_id: number;
  /** Chat identifier starting from which to return chats; use 0 for the first request */
  offset_chat_id: number;
  /** The maximum number of chats to be returned; up to 100 */
  limit: number;
}) => Obj.Chats;

/**
 * Returns messages in a chat. The messages are returned in reverse chronological order (i.e., in order of decreasing message_id). For optimal performance, the number of returned messages is chosen by TDLib. This is an offline method if only_local is true
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_history.html
 */
export type GetChatHistory = (args: {
  "@type": "getChatHistory";
  /** Chat identifier */
  chat_id: number;
  /** Identifier of the message starting from which history must be fetched; use 0 to get results from the last message */
  from_message_id: number;
  /** Specify 0 to get results from exactly the message from_message_id or a negative offset up to 99 to get additionally some newer messages */
  offset: number;
  /** The maximum number of messages to be returned; must be positive and can't be greater than 100. If the offset is negative, the limit must be greater than or equal to -offset. For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit */
  limit: number;
  /** Pass true to get only messages that are available without sending network requests */
  only_local: boolean;
}) => Obj.Messages;

/**
 * Returns messages in a message thread of a message. Can be used only if messageProperties.can_get_message_thread == true. Message thread of a channel message is in the channel's linked supergroup. The messages are returned in reverse chronological order (i.e., in order of decreasing message_id). For optimal performance, the number of returned messages is chosen by TDLib
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_message_thread_history.html
 */
export type GetMessageThreadHistory = (args: {
  "@type": "getMessageThreadHistory";
  /** Chat identifier */
  chat_id: number;
  /** Message identifier, which thread history needs to be returned */
  message_id: number;
  /** Identifier of the message starting from which history must be fetched; use 0 to get results from the last message */
  from_message_id: number;
  /** Specify 0 to get results from exactly the message from_message_id or a negative offset up to 99 to get additionally some newer messages */
  offset: number;
  /** The maximum number of messages to be returned; must be positive and can't be greater than 100. If the offset is negative, the limit must be greater than or equal to -offset. For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit */
  limit: number;
}) => Obj.Messages;

/**
 * Deletes all messages in the chat. Use chat.can_be_deleted_only_for_self and chat.can_be_deleted_for_all_users fields to find whether and how the method can be applied to the chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1delete_chat_history.html
 */
export type DeleteChatHistory = (args: {
  "@type": "deleteChatHistory";
  /** Chat identifier */
  chat_id: number;
  /** Pass true to remove the chat from all chat lists */
  remove_from_chat_list: boolean;
  /** Pass true to delete chat history for all users */
  revoke: boolean;
}) => Obj.Ok;

/**
 * Deletes a chat along with all messages in the corresponding chat for all chat members. For group chats this will release the usernames and remove all members. Use the field chat.can_be_deleted_for_all_users to find whether the method can be applied to the chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1delete_chat.html
 */
export type DeleteChat = (args: {
  "@type": "deleteChat";
  /** Chat identifier */
  chat_id: number;
}) => Obj.Ok;

/**
 * Searches for messages with given words in the chat. Returns the results in reverse chronological order, i.e. in order of decreasing message_id. Cannot be used in secret chats with a non-empty query (searchSecretMessages must be used instead), or without an enabled message database. For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit. A combination of query, sender_id, filter and topic_id search criteria is expected to be supported, only if it is required for Telegram official application implementation
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_chat_messages.html
 */
export type SearchChatMessages = (args: {
  "@type": "searchChatMessages";
  /** Identifier of the chat in which to search messages */
  chat_id: number;
  /** Pass topic identifier to search messages only in specific topic; pass null to search for messages in all topics */
  topic_id?: Obj.MessageTopic;
  /** Query to search for */
  query: string;
  /** Identifier of the sender of messages to search for; pass null to search for messages from any sender. Not supported in secret chats */
  sender_id?: Obj.MessageSender;
  /** Identifier of the message starting from which history must be fetched; use 0 to get results from the last message */
  from_message_id: number;
  /** Specify 0 to get results from exactly the message from_message_id or a negative offset to get the specified message and some newer messages */
  offset: number;
  /** The maximum number of messages to be returned; must be positive and can't be greater than 100. If the offset is negative, the limit must be greater than -offset. For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit */
  limit: number;
  /** Additional filter for messages to search; pass null to search for all messages */
  filter?: Obj.SearchMessagesFilter;
}) => Obj.FoundChatMessages;

/**
 * Searches for messages in all chats except secret chats. Returns the results in reverse chronological order (i.e., in order of decreasing (date, chat_id, message_id)). For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_messages.html
 */
export type SearchMessages = (args: {
  "@type": "searchMessages";
  /** Chat list in which to search messages; pass null to search in all chats regardless of their chat list. Only Main and Archive chat lists are supported */
  chat_list?: Obj.ChatList;
  /** Query to search for */
  query: string;
  /** Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results */
  offset: string;
  /** The maximum number of messages to be returned; up to 100. For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit */
  limit: number;
  /** Additional filter for messages to search; pass null to search for all messages. Filters searchMessagesFilterMention, searchMessagesFilterUnreadMention, searchMessagesFilterUnreadReaction, searchMessagesFilterFailedToSend, and searchMessagesFilterPinned are unsupported in this function */
  filter?: Obj.SearchMessagesFilter;
  /** Additional filter for type of the chat of the searched messages; pass null to search for messages in all chats */
  chat_type_filter?: Obj.SearchMessagesChatTypeFilter;
  /** If not 0, the minimum date of the messages to return */
  min_date: number;
  /** If not 0, the maximum date of the messages to return */
  max_date: number;
}) => Obj.FoundMessages;

/**
 * Searches for messages in secret chats. Returns the results in reverse chronological order. For optimal performance, the number of returned messages is chosen by TDLib
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_secret_messages.html
 */
export type SearchSecretMessages = (args: {
  "@type": "searchSecretMessages";
  /** Identifier of the chat in which to search. Specify 0 to search in all secret chats */
  chat_id: number;
  /** Query to search for. If empty, searchChatMessages must be used instead */
  query: string;
  /** Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results */
  offset: string;
  /** The maximum number of messages to be returned; up to 100. For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit */
  limit: number;
  /** Additional filter for messages to search; pass null to search for all messages */
  filter?: Obj.SearchMessagesFilter;
}) => Obj.FoundMessages;

/**
 * Searches for messages tagged by the given reaction and with the given words in the Saved Messages chat; for Telegram Premium users only. Returns the results in reverse chronological order, i.e. in order of decreasing message_id. For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_saved_messages.html
 */
export type SearchSavedMessages = (args: {
  "@type": "searchSavedMessages";
  /** If not 0, only messages in the specified Saved Messages topic will be considered; pass 0 to consider all messages */
  saved_messages_topic_id: number;
  /** Tag to search for; pass null to return all suitable messages */
  tag?: Obj.ReactionType;
  /** Query to search for */
  query: string;
  /** Identifier of the message starting from which messages must be fetched; use 0 to get results from the last message */
  from_message_id: number;
  /** Specify 0 to get results from exactly the message from_message_id or a negative offset to get the specified message and some newer messages */
  offset: number;
  /** The maximum number of messages to be returned; must be positive and can't be greater than 100. If the offset is negative, the limit must be greater than -offset. For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit */
  limit: number;
}) => Obj.FoundChatMessages;

/**
 * Searches for call and group call messages. Returns the results in reverse chronological order (i.e., in order of decreasing message_id). For optimal performance, the number of returned messages is chosen by TDLib
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_call_messages.html
 */
export type SearchCallMessages = (args: {
  "@type": "searchCallMessages";
  /** Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results */
  offset: string;
  /** The maximum number of messages to be returned; up to 100. For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit */
  limit: number;
  /** Pass true to search only for messages with missed/declined calls */
  only_missed: boolean;
}) => Obj.FoundMessages;

/**
 * Searches for outgoing messages with content of the type messageDocument in all chats except secret chats. Returns the results in reverse chronological order
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_outgoing_document_messages.html
 */
export type SearchOutgoingDocumentMessages = (args: {
  "@type": "searchOutgoingDocumentMessages";
  /** Query to search for in document file name and message caption */
  query: string;
  /** The maximum number of messages to be returned; up to 100 */
  limit: number;
}) => Obj.FoundMessages;

/**
 * Searches for public channel posts containing the given hashtag or cashtag. For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_public_messages_by_tag.html
 */
export type SearchPublicMessagesByTag = (args: {
  "@type": "searchPublicMessagesByTag";
  /** Hashtag or cashtag to search for */
  tag: string;
  /** Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results */
  offset: string;
  /** The maximum number of messages to be returned; up to 100. For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit */
  limit: number;
}) => Obj.FoundMessages;

/**
 * Searches for public stories containing the given hashtag or cashtag. For optimal performance, the number of returned stories is chosen by TDLib and can be smaller than the specified limit
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_public_stories_by_tag.html
 */
export type SearchPublicStoriesByTag = (args: {
  "@type": "searchPublicStoriesByTag";
  /** Identifier of the chat that posted the stories to search for; pass 0 to search stories in all chats */
  story_poster_chat_id: number;
  /** Hashtag or cashtag to search for */
  tag: string;
  /** Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results */
  offset: string;
  /** The maximum number of stories to be returned; up to 100. For optimal performance, the number of returned stories is chosen by TDLib and can be smaller than the specified limit */
  limit: number;
}) => Obj.FoundStories;

/**
 * Searches for public stories by the given address location. For optimal performance, the number of returned stories is chosen by TDLib and can be smaller than the specified limit
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_public_stories_by_location.html
 */
export type SearchPublicStoriesByLocation = (args: {
  "@type": "searchPublicStoriesByLocation";
  /** Address of the location */
  address: Obj.LocationAddress;
  /** Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results */
  offset: string;
  /** The maximum number of stories to be returned; up to 100. For optimal performance, the number of returned stories is chosen by TDLib and can be smaller than the specified limit */
  limit: number;
}) => Obj.FoundStories;

/**
 * Searches for public stories from the given venue. For optimal performance, the number of returned stories is chosen by TDLib and can be smaller than the specified limit
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_public_stories_by_venue.html
 */
export type SearchPublicStoriesByVenue = (args: {
  "@type": "searchPublicStoriesByVenue";
  /** Provider of the venue */
  venue_provider: string;
  /** Identifier of the venue in the provider database */
  venue_id: string;
  /** Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results */
  offset: string;
  /** The maximum number of stories to be returned; up to 100. For optimal performance, the number of returned stories is chosen by TDLib and can be smaller than the specified limit */
  limit: number;
}) => Obj.FoundStories;

/**
 * Returns recently searched for hashtags or cashtags by their prefix
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_searched_for_tags.html
 */
export type GetSearchedForTags = (args: {
  "@type": "getSearchedForTags";
  /** Prefix of hashtags or cashtags to return */
  tag_prefix: string;
  /** The maximum number of items to be returned */
  limit: number;
}) => Obj.Hashtags;

/**
 * Removes a hashtag or a cashtag from the list of recently searched for hashtags or cashtags
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1remove_searched_for_tag.html
 */
export type RemoveSearchedForTag = (args: {
  "@type": "removeSearchedForTag";
  /** Hashtag or cashtag to delete */
  tag: string;
}) => Obj.Ok;

/**
 * Clears the list of recently searched for hashtags or cashtags
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1clear_searched_for_tags.html
 */
export type ClearSearchedForTags = (args: {
  "@type": "clearSearchedForTags";
  /** Pass true to clear the list of recently searched for cashtags; otherwise, the list of recently searched for hashtags will be cleared */
  clear_cashtags: boolean;
}) => Obj.Ok;

/**
 * Deletes all call messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1delete_all_call_messages.html
 */
export type DeleteAllCallMessages = (args: {
  "@type": "deleteAllCallMessages";
  /** Pass true to delete the messages for all users */
  revoke: boolean;
}) => Obj.Ok;

/**
 * Returns information about the recent locations of chat members that were sent to the chat. Returns up to 1 location message per user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_chat_recent_location_messages.html
 */
export type SearchChatRecentLocationMessages = (args: {
  "@type": "searchChatRecentLocationMessages";
  /** Chat identifier */
  chat_id: number;
  /** The maximum number of messages to be returned */
  limit: number;
}) => Obj.Messages;

/**
 * Returns the last message sent in a chat no later than the specified date. Returns a 404 error if such message doesn't exist
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_message_by_date.html
 */
export type GetChatMessageByDate = (args: {
  "@type": "getChatMessageByDate";
  /** Chat identifier */
  chat_id: number;
  /** Point in time (Unix timestamp) relative to which to search for messages */
  date: number;
}) => Obj.Message;

/**
 * Returns sparse positions of messages of the specified type in the chat to be used for shared media scroll implementation. Returns the results in reverse chronological order (i.e., in order of decreasing message_id). Cannot be used in secret chats or with searchMessagesFilterFailedToSend filter without an enabled message database
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_sparse_message_positions.html
 */
export type GetChatSparseMessagePositions = (args: {
  "@type": "getChatSparseMessagePositions";
  /** Identifier of the chat in which to return information about message positions */
  chat_id: number;
  /** Filter for message content. Filters searchMessagesFilterEmpty, searchMessagesFilterMention, searchMessagesFilterUnreadMention, and searchMessagesFilterUnreadReaction are unsupported in this function */
  filter: Obj.SearchMessagesFilter;
  /** The message identifier from which to return information about message positions */
  from_message_id: number;
  /** The expected number of message positions to be returned; 50-2000. A smaller number of positions can be returned, if there are not enough appropriate messages */
  limit: number;
  /** If not 0, only messages in the specified Saved Messages topic will be considered; pass 0 to consider all messages, or for chats other than Saved Messages */
  saved_messages_topic_id: number;
}) => Obj.MessagePositions;

/**
 * Returns information about the next messages of the specified type in the chat split by days. Returns the results in reverse chronological order. Can return partial result for the last returned day. Behavior of this method depends on the value of the option "utc_time_offset"
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_message_calendar.html
 */
export type GetChatMessageCalendar = (args: {
  "@type": "getChatMessageCalendar";
  /** Identifier of the chat in which to return information about messages */
  chat_id: number;
  /** Pass topic identifier to get the result only in specific topic; pass null to get the result in all topics; forum topics aren't supported */
  topic_id?: Obj.MessageTopic;
  /** Filter for message content. Filters searchMessagesFilterEmpty, searchMessagesFilterMention, searchMessagesFilterUnreadMention, and searchMessagesFilterUnreadReaction are unsupported in this function */
  filter: Obj.SearchMessagesFilter;
  /** The message identifier from which to return information about messages; use 0 to get results from the last message */
  from_message_id: number;
}) => Obj.MessageCalendar;

/**
 * Returns approximate number of messages of the specified type in the chat or its topic
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_message_count.html
 */
export type GetChatMessageCount = (args: {
  "@type": "getChatMessageCount";
  /** Identifier of the chat in which to count messages */
  chat_id: number;
  /** Pass topic identifier to get number of messages only in specific topic; pass null to get number of messages in all topics */
  topic_id?: Obj.MessageTopic;
  /** Filter for message content; searchMessagesFilterEmpty is unsupported in this function */
  filter: Obj.SearchMessagesFilter;
  /** Pass true to get the number of messages without sending network requests, or -1 if the number of messages is unknown locally */
  return_local: boolean;
}) => Obj.Count;

/**
 * Returns approximate 1-based position of a message among messages, which can be found by the specified filter in the chat and topic. Cannot be used in secret chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_message_position.html
 */
export type GetChatMessagePosition = (args: {
  "@type": "getChatMessagePosition";
  /** Identifier of the chat in which to find message position */
  chat_id: number;
  /** Pass topic identifier to get position among messages only in specific topic; pass null to get position among all chat messages */
  topic_id?: Obj.MessageTopic;
  /** Filter for message content; searchMessagesFilterEmpty, searchMessagesFilterUnreadMention, searchMessagesFilterUnreadReaction, and searchMessagesFilterFailedToSend are unsupported in this function */
  filter: Obj.SearchMessagesFilter;
  /** Message identifier */
  message_id: number;
}) => Obj.Count;

/**
 * Returns all scheduled messages in a chat. The messages are returned in reverse chronological order (i.e., in order of decreasing message_id)
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_scheduled_messages.html
 */
export type GetChatScheduledMessages = (args: {
  "@type": "getChatScheduledMessages";
  /** Chat identifier */
  chat_id: number;
}) => Obj.Messages;

/**
 * Returns sponsored messages to be shown in a chat; for channel chats and chats with bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_sponsored_messages.html
 */
export type GetChatSponsoredMessages = (args: {
  "@type": "getChatSponsoredMessages";
  /** Identifier of the chat */
  chat_id: number;
}) => Obj.SponsoredMessages;

/**
 * Informs TDLib that the user opened the sponsored chat via the button, the name, the chat photo, a mention in the sponsored message text, or the media in the sponsored message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1click_chat_sponsored_message.html
 */
export type ClickChatSponsoredMessage = (args: {
  "@type": "clickChatSponsoredMessage";
  /** Chat identifier of the sponsored message */
  chat_id: number;
  /** Identifier of the sponsored message */
  message_id: number;
  /** Pass true if the media was clicked in the sponsored message */
  is_media_click: boolean;
  /** Pass true if the user expanded the video from the sponsored message fullscreen before the click */
  from_fullscreen: boolean;
}) => Obj.Ok;

/**
 * Reports a sponsored message to Telegram moderators
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1report_chat_sponsored_message.html
 */
export type ReportChatSponsoredMessage = (args: {
  "@type": "reportChatSponsoredMessage";
  /** Chat identifier of the sponsored message */
  chat_id: number;
  /** Identifier of the sponsored message */
  message_id: number;
  /** Option identifier chosen by the user; leave empty for the initial request */
  option_id: string;
}) => Obj.ReportSponsoredResult;

/**
 * Returns sponsored chats to be shown in the search results
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_search_sponsored_chats.html
 */
export type GetSearchSponsoredChats = (args: {
  "@type": "getSearchSponsoredChats";
  /** Query the user searches for */
  query: string;
}) => Obj.SponsoredChats;

/**
 * Informs TDLib that the user fully viewed a sponsored chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1view_sponsored_chat.html
 */
export type ViewSponsoredChat = (args: {
  "@type": "viewSponsoredChat";
  /** Unique identifier of the sponsored chat */
  sponsored_chat_unique_id: number;
}) => Obj.Ok;

/**
 * Informs TDLib that the user opened a sponsored chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1open_sponsored_chat.html
 */
export type OpenSponsoredChat = (args: {
  "@type": "openSponsoredChat";
  /** Unique identifier of the sponsored chat */
  sponsored_chat_unique_id: number;
}) => Obj.Ok;

/**
 * Reports a sponsored chat to Telegram moderators
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1report_sponsored_chat.html
 */
export type ReportSponsoredChat = (args: {
  "@type": "reportSponsoredChat";
  /** Unique identifier of the sponsored chat */
  sponsored_chat_unique_id: number;
  /** Option identifier chosen by the user; leave empty for the initial request */
  option_id: string;
}) => Obj.ReportSponsoredResult;

/**
 * Removes an active notification from notification list. Needs to be called only if the notification is removed by the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1remove_notification.html
 */
export type RemoveNotification = (args: {
  "@type": "removeNotification";
  /** Identifier of notification group to which the notification belongs */
  notification_group_id: number;
  /** Identifier of removed notification */
  notification_id: number;
}) => Obj.Ok;

/**
 * Removes a group of active notifications. Needs to be called only if the notification group is removed by the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1remove_notification_group.html
 */
export type RemoveNotificationGroup = (args: {
  "@type": "removeNotificationGroup";
  /** Notification group identifier */
  notification_group_id: number;
  /** The maximum identifier of removed notifications */
  max_notification_id: number;
}) => Obj.Ok;

/**
 * Returns an HTTPS link to a message in a chat. Available only if messageProperties.can_get_link, or if messageProperties.can_get_media_timestamp_links and a media timestamp link is generated. This is an offline method
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_message_link.html
 */
export type GetMessageLink = (args: {
  "@type": "getMessageLink";
  /** Identifier of the chat to which the message belongs */
  chat_id: number;
  /** Identifier of the message */
  message_id: number;
  /** If not 0, timestamp from which the video/audio/video note/voice note/story playing must start, in seconds. The media can be in the message content or in its link preview */
  media_timestamp: number;
  /** Pass true to create a link for the whole media album */
  for_album: boolean;
  /** Pass true to create a link to the message as a channel post comment, in a message thread, or a forum topic */
  in_message_thread: boolean;
}) => Obj.MessageLink;

/**
 * Returns an HTML code for embedding the message. Available only if messageProperties.can_get_embedding_code
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_message_embedding_code.html
 */
export type GetMessageEmbeddingCode = (args: {
  "@type": "getMessageEmbeddingCode";
  /** Identifier of the chat to which the message belongs */
  chat_id: number;
  /** Identifier of the message */
  message_id: number;
  /** Pass true to return an HTML code for embedding of the whole media album */
  for_album: boolean;
}) => Obj.Text;

/**
 * Returns information about a public or private message link. Can be called for any internal link of the type internalLinkTypeMessage
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_message_link_info.html
 */
export type GetMessageLinkInfo = (args: {
  "@type": "getMessageLinkInfo";
  /** The message link */
  url: string;
}) => Obj.MessageLinkInfo;

/**
 * Translates a text to the given language. If the current user is a Telegram Premium user, then text formatting is preserved
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1translate_text.html
 */
export type TranslateText = (args: {
  "@type": "translateText";
  /** Text to translate */
  text: Obj.FormattedText;
  /** Language code of the language to which the message is translated. Must be one of "af", "sq", "am", "ar", "hy", "az", "eu", "be", "bn", "bs", "bg", "ca", "ceb", "zh-CN", "zh", "zh-Hans", "zh-TW", "zh-Hant", "co", "hr", "cs", "da", "nl", "en", "eo", "et", "fi", "fr", "fy", "gl", "ka", "de", "el", "gu", "ht", "ha", "haw", "he", "iw", "hi", "hmn", "hu", "is", "ig", "id", "in", "ga", "it", "ja", "jv", "kn", "kk", "km", "rw", "ko", "ku", "ky", "lo", "la", "lv", "lt", "lb", "mk", "mg", "ms", "ml", "mt", "mi", "mr", "mn", "my", "ne", "no", "ny", "or", "ps", "fa", "pl", "pt", "pa", "ro", "ru", "sm", "gd", "sr", "st", "sn", "sd", "si", "sk", "sl", "so", "es", "su", "sw", "sv", "tl", "tg", "ta", "tt", "te", "th", "tr", "tk", "uk", "ur", "ug", "uz", "vi", "cy", "xh", "yi", "ji", "yo", "zu" */
  to_language_code: string;
}) => Obj.FormattedText;

/**
 * Extracts text or caption of the given message and translates it to the given language. If the current user is a Telegram Premium user, then text formatting is preserved
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1translate_message_text.html
 */
export type TranslateMessageText = (args: {
  "@type": "translateMessageText";
  /** Identifier of the chat to which the message belongs */
  chat_id: number;
  /** Identifier of the message */
  message_id: number;
  /** Language code of the language to which the message is translated. Must be one of "af", "sq", "am", "ar", "hy", "az", "eu", "be", "bn", "bs", "bg", "ca", "ceb", "zh-CN", "zh", "zh-Hans", "zh-TW", "zh-Hant", "co", "hr", "cs", "da", "nl", "en", "eo", "et", "fi", "fr", "fy", "gl", "ka", "de", "el", "gu", "ht", "ha", "haw", "he", "iw", "hi", "hmn", "hu", "is", "ig", "id", "in", "ga", "it", "ja", "jv", "kn", "kk", "km", "rw", "ko", "ku", "ky", "lo", "la", "lv", "lt", "lb", "mk", "mg", "ms", "ml", "mt", "mi", "mr", "mn", "my", "ne", "no", "ny", "or", "ps", "fa", "pl", "pt", "pa", "ro", "ru", "sm", "gd", "sr", "st", "sn", "sd", "si", "sk", "sl", "so", "es", "su", "sw", "sv", "tl", "tg", "ta", "tt", "te", "th", "tr", "tk", "uk", "ur", "ug", "uz", "vi", "cy", "xh", "yi", "ji", "yo", "zu" */
  to_language_code: string;
}) => Obj.FormattedText;

/**
 * Recognizes speech in a video note or a voice note message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1recognize_speech.html
 */
export type RecognizeSpeech = (args: {
  "@type": "recognizeSpeech";
  /** Identifier of the chat to which the message belongs */
  chat_id: number;
  /** Identifier of the message. Use messageProperties.can_recognize_speech to check whether the message is suitable */
  message_id: number;
}) => Obj.Ok;

/**
 * Rates recognized speech in a video note or a voice note message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1rate_speech_recognition.html
 */
export type RateSpeechRecognition = (args: {
  "@type": "rateSpeechRecognition";
  /** Identifier of the chat to which the message belongs */
  chat_id: number;
  /** Identifier of the message */
  message_id: number;
  /** Pass true if the speech recognition is good */
  is_good: boolean;
}) => Obj.Ok;

/**
 * Returns the list of message sender identifiers, which can be used to send messages in a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_available_message_senders.html
 */
export type GetChatAvailableMessageSenders = (args: {
  "@type": "getChatAvailableMessageSenders";
  /** Chat identifier */
  chat_id: number;
}) => Obj.ChatMessageSenders;

/**
 * Selects a message sender to send messages in a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_chat_message_sender.html
 */
export type SetChatMessageSender = (args: {
  "@type": "setChatMessageSender";
  /** Chat identifier */
  chat_id: number;
  /** New message sender for the chat */
  message_sender_id: Obj.MessageSender;
}) => Obj.Ok;

/**
 * Sends a message. Returns the sent message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1send_message.html
 */
export type SendMessage = (args: {
  "@type": "sendMessage";
  /** Target chat */
  chat_id: number;
  /** If not 0, the message thread identifier in which the message will be sent */
  message_thread_id: number;
  /** Information about the message or story to be replied; pass null if none */
  reply_to?: Obj.InputMessageReplyTo;
  /** Options to be used to send the message; pass null to use default options */
  options?: Obj.MessageSendOptions;
  /** Markup for replying to the message; pass null if none; for bots only */
  reply_markup?: Obj.ReplyMarkup;
  /** The content of the message to be sent */
  input_message_content: Obj.InputMessageContent;
}) => Obj.Message;

/**
 * Sends 2-10 messages grouped together into an album. Currently, only audio, document, photo and video messages can be grouped into an album. Documents and audio files can be only grouped in an album with messages of the same type. Returns sent messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1send_message_album.html
 */
export type SendMessageAlbum = (args: {
  "@type": "sendMessageAlbum";
  /** Target chat */
  chat_id: number;
  /** If not 0, the message thread identifier in which the messages will be sent */
  message_thread_id: number;
  /** Information about the message or story to be replied; pass null if none */
  reply_to?: Obj.InputMessageReplyTo;
  /** Options to be used to send the messages; pass null to use default options */
  options?: Obj.MessageSendOptions;
  /** Contents of messages to be sent. At most 10 messages can be added to an album. All messages must have the same value of show_caption_above_media */
  input_message_contents: Obj.InputMessageContent[];
}) => Obj.Messages;

/**
 * Invites a bot to a chat (if it is not yet a member) and sends it the /start command; requires can_invite_users member right. Bots can't be invited to a private chat other than the chat with the bot. Bots can't be invited to channels (although they can be added as admins) and secret chats. Returns the sent message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1send_bot_start_message.html
 */
export type SendBotStartMessage = (args: {
  "@type": "sendBotStartMessage";
  /** Identifier of the bot */
  bot_user_id: number;
  /** Identifier of the target chat */
  chat_id: number;
  /** A hidden parameter sent to the bot for deep linking purposes (https://core.telegram.org/bots#deep-linking) */
  parameter: string;
}) => Obj.Message;

/**
 * Sends the result of an inline query as a message. Returns the sent message. Always clears a chat draft message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1send_inline_query_result_message.html
 */
export type SendInlineQueryResultMessage = (args: {
  "@type": "sendInlineQueryResultMessage";
  /** Target chat */
  chat_id: number;
  /** If not 0, the message thread identifier in which the message will be sent */
  message_thread_id: number;
  /** Information about the message or story to be replied; pass null if none */
  reply_to?: Obj.InputMessageReplyTo;
  /** Options to be used to send the message; pass null to use default options */
  options?: Obj.MessageSendOptions;
  /** Identifier of the inline query */
  query_id: string;
  /** Identifier of the inline query result */
  result_id: string;
  /** Pass true to hide the bot, via which the message is sent. Can be used only for bots getOption("animation_search_bot_username"), getOption("photo_search_bot_username"), and getOption("venue_search_bot_username") */
  hide_via_bot: boolean;
}) => Obj.Message;

/**
 * Forwards previously sent messages. Returns the forwarded messages in the same order as the message identifiers passed in message_ids. If a message can't be forwarded, null will be returned instead of the message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1forward_messages.html
 */
export type ForwardMessages = (args: {
  "@type": "forwardMessages";
  /** Identifier of the chat to which to forward messages */
  chat_id: number;
  /** If not 0, the message thread identifier in which the message will be sent; for forum threads only */
  message_thread_id: number;
  /** Identifier of the chat from which to forward messages */
  from_chat_id: number;
  /** Identifiers of the messages to forward. Message identifiers must be in a strictly increasing order. At most 100 messages can be forwarded simultaneously. A message can be forwarded only if messageProperties.can_be_forwarded */
  message_ids: number[];
  /** Options to be used to send the messages; pass null to use default options */
  options?: Obj.MessageSendOptions;
  /** Pass true to copy content of the messages without reference to the original sender. Always true if the messages are forwarded to a secret chat or are local. Use messageProperties.can_be_copied and messageProperties.can_be_copied_to_secret_chat to check whether the message is suitable */
  send_copy: boolean;
  /** Pass true to remove media captions of message copies. Ignored if send_copy is false */
  remove_caption: boolean;
}) => Obj.Messages;

/**
 * Sends messages from a quick reply shortcut. Requires Telegram Business subscription. Can't be used to send paid messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1send_quick_reply_shortcut_messages.html
 */
export type SendQuickReplyShortcutMessages = (args: {
  "@type": "sendQuickReplyShortcutMessages";
  /** Identifier of the chat to which to send messages. The chat must be a private chat with a regular user */
  chat_id: number;
  /** Unique identifier of the quick reply shortcut */
  shortcut_id: number;
  /** Non-persistent identifier, which will be returned back in messageSendingStatePending object and can be used to match sent messages and corresponding updateNewMessage updates */
  sending_id: number;
}) => Obj.Messages;

/**
 * Resends messages which failed to send. Can be called only for messages for which messageSendingStateFailed.can_retry is true and after specified in messageSendingStateFailed.retry_after time passed. If a message is re-sent, the corresponding failed to send message is deleted. Returns the sent messages in the same order as the message identifiers passed in message_ids. If a message can't be re-sent, null will be returned instead of the message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1resend_messages.html
 */
export type ResendMessages = (args: {
  "@type": "resendMessages";
  /** Identifier of the chat to send messages */
  chat_id: number;
  /** Identifiers of the messages to resend. Message identifiers must be in a strictly increasing order */
  message_ids: number[];
  /** New manually chosen quote from the message to be replied; pass null if none. Ignored if more than one message is re-sent, or if messageSendingStateFailed.need_another_reply_quote == false */
  quote?: Obj.InputTextQuote;
  /** The number of Telegram Stars the user agreed to pay to send the messages. Ignored if messageSendingStateFailed.required_paid_message_star_count == 0 */
  paid_message_star_count: number;
}) => Obj.Messages;

/**
 * Adds a local message to a chat. The message is persistent across application restarts only if the message database is used. Returns the added message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1add_local_message.html
 */
export type AddLocalMessage = (args: {
  "@type": "addLocalMessage";
  /** Target chat; channel direct messages chats aren't supported */
  chat_id: number;
  /** Identifier of the sender of the message */
  sender_id: Obj.MessageSender;
  /** Information about the message or story to be replied; pass null if none */
  reply_to?: Obj.InputMessageReplyTo;
  /** Pass true to disable notification for the message */
  disable_notification: boolean;
  /** The content of the message to be added */
  input_message_content: Obj.InputMessageContent;
}) => Obj.Message;

/**
 * Deletes messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1delete_messages.html
 */
export type DeleteMessages = (args: {
  "@type": "deleteMessages";
  /** Chat identifier */
  chat_id: number;
  /** Identifiers of the messages to be deleted. Use messageProperties.can_be_deleted_only_for_self and messageProperties.can_be_deleted_for_all_users to get suitable messages */
  message_ids: number[];
  /** Pass true to delete messages for all chat members. Always true for supergroups, channels and secret chats */
  revoke: boolean;
}) => Obj.Ok;

/**
 * Deletes all messages sent by the specified message sender in a chat. Supported only for supergroups; requires can_delete_messages administrator right
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1delete_chat_messages_by_sender.html
 */
export type DeleteChatMessagesBySender = (args: {
  "@type": "deleteChatMessagesBySender";
  /** Chat identifier */
  chat_id: number;
  /** Identifier of the sender of messages to delete */
  sender_id: Obj.MessageSender;
}) => Obj.Ok;

/**
 * Deletes all messages between the specified dates in a chat. Supported only for private chats and basic groups. Messages sent in the last 30 seconds will not be deleted
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1delete_chat_messages_by_date.html
 */
export type DeleteChatMessagesByDate = (args: {
  "@type": "deleteChatMessagesByDate";
  /** Chat identifier */
  chat_id: number;
  /** The minimum date of the messages to delete */
  min_date: number;
  /** The maximum date of the messages to delete */
  max_date: number;
  /** Pass true to delete chat messages for all users; private chats only */
  revoke: boolean;
}) => Obj.Ok;

/**
 * Edits the text of a message (or a text of a game message). Returns the edited message after the edit is completed on the server side
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1edit_message_text.html
 */
export type EditMessageText = (args: {
  "@type": "editMessageText";
  /** The chat the message belongs to */
  chat_id: number;
  /** Identifier of the message. Use messageProperties.can_be_edited to check whether the message can be edited */
  message_id: number;
  /** The new message reply markup; pass null if none; for bots only */
  reply_markup?: Obj.ReplyMarkup;
  /** New text content of the message. Must be of type inputMessageText */
  input_message_content: Obj.InputMessageContent;
}) => Obj.Message;

/**
 * Edits the message content of a live location. Messages can be edited for a limited period of time specified in the live location. Returns the edited message after the edit is completed on the server side
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1edit_message_live_location.html
 */
export type EditMessageLiveLocation = (args: {
  "@type": "editMessageLiveLocation";
  /** The chat the message belongs to */
  chat_id: number;
  /** Identifier of the message. Use messageProperties.can_be_edited to check whether the message can be edited */
  message_id: number;
  /** The new message reply markup; pass null if none; for bots only */
  reply_markup?: Obj.ReplyMarkup;
  /** New location content of the message; pass null to stop sharing the live location */
  location?: Obj.Location;
  /** New time relative to the message send date, for which the location can be updated, in seconds. If 0x7FFFFFFF specified, then the location can be updated forever. Otherwise, must not exceed the current live_period by more than a day, and the live location expiration date must remain in the next 90 days. Pass 0 to keep the current live_period */
  live_period: number;
  /** The new direction in which the location moves, in degrees; 1-360. Pass 0 if unknown */
  heading: number;
  /** The new maximum distance for proximity alerts, in meters (0-100000). Pass 0 if the notification is disabled */
  proximity_alert_radius: number;
}) => Obj.Message;

/**
 * Edits the media content of a message, including message caption. If only the caption needs to be edited, use editMessageCaption instead. The type of message content in an album can't be changed with exception of replacing a photo with a video or vice versa. Returns the edited message after the edit is completed on the server side
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1edit_message_media.html
 */
export type EditMessageMedia = (args: {
  "@type": "editMessageMedia";
  /** The chat the message belongs to */
  chat_id: number;
  /** Identifier of the message. Use messageProperties.can_edit_media to check whether the message can be edited */
  message_id: number;
  /** The new message reply markup; pass null if none; for bots only */
  reply_markup?: Obj.ReplyMarkup;
  /** New content of the message. Must be one of the following types: inputMessageAnimation, inputMessageAudio, inputMessageDocument, inputMessagePhoto or inputMessageVideo */
  input_message_content: Obj.InputMessageContent;
}) => Obj.Message;

/**
 * Edits the message content caption. Returns the edited message after the edit is completed on the server side
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1edit_message_caption.html
 */
export type EditMessageCaption = (args: {
  "@type": "editMessageCaption";
  /** The chat the message belongs to */
  chat_id: number;
  /** Identifier of the message. Use messageProperties.can_be_edited to check whether the message can be edited */
  message_id: number;
  /** The new message reply markup; pass null if none; for bots only */
  reply_markup?: Obj.ReplyMarkup;
  /** New message content caption; 0-getOption("message_caption_length_max") characters; pass null to remove caption */
  caption?: Obj.FormattedText;
  /** Pass true to show the caption above the media; otherwise, the caption will be shown below the media. May be true only for animation, photo, and video messages */
  show_caption_above_media: boolean;
}) => Obj.Message;

/**
 * Edits the message reply markup; for bots only. Returns the edited message after the edit is completed on the server side
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1edit_message_reply_markup.html
 */
export type EditMessageReplyMarkup = (args: {
  "@type": "editMessageReplyMarkup";
  /** The chat the message belongs to */
  chat_id: number;
  /** Identifier of the message. Use messageProperties.can_be_edited to check whether the message can be edited */
  message_id: number;
  /** The new message reply markup; pass null if none */
  reply_markup?: Obj.ReplyMarkup;
}) => Obj.Message;

/**
 * Edits the text of an inline text or game message sent via a bot; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1edit_inline_message_text.html
 */
export type EditInlineMessageText = (args: {
  "@type": "editInlineMessageText";
  /** Inline message identifier */
  inline_message_id: string;
  /** The new message reply markup; pass null if none */
  reply_markup?: Obj.ReplyMarkup;
  /** New text content of the message. Must be of type inputMessageText */
  input_message_content: Obj.InputMessageContent;
}) => Obj.Ok;

/**
 * Edits the content of a live location in an inline message sent via a bot; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1edit_inline_message_live_location.html
 */
export type EditInlineMessageLiveLocation = (args: {
  "@type": "editInlineMessageLiveLocation";
  /** Inline message identifier */
  inline_message_id: string;
  /** The new message reply markup; pass null if none */
  reply_markup?: Obj.ReplyMarkup;
  /** New location content of the message; pass null to stop sharing the live location */
  location?: Obj.Location;
  /** New time relative to the message send date, for which the location can be updated, in seconds. If 0x7FFFFFFF specified, then the location can be updated forever. Otherwise, must not exceed the current live_period by more than a day, and the live location expiration date must remain in the next 90 days. Pass 0 to keep the current live_period */
  live_period: number;
  /** The new direction in which the location moves, in degrees; 1-360. Pass 0 if unknown */
  heading: number;
  /** The new maximum distance for proximity alerts, in meters (0-100000). Pass 0 if the notification is disabled */
  proximity_alert_radius: number;
}) => Obj.Ok;

/**
 * Edits the media content of a message with a text, an animation, an audio, a document, a photo or a video in an inline message sent via a bot; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1edit_inline_message_media.html
 */
export type EditInlineMessageMedia = (args: {
  "@type": "editInlineMessageMedia";
  /** Inline message identifier */
  inline_message_id: string;
  /** The new message reply markup; pass null if none; for bots only */
  reply_markup?: Obj.ReplyMarkup;
  /** New content of the message. Must be one of the following types: inputMessageAnimation, inputMessageAudio, inputMessageDocument, inputMessagePhoto or inputMessageVideo */
  input_message_content: Obj.InputMessageContent;
}) => Obj.Ok;

/**
 * Edits the caption of an inline message sent via a bot; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1edit_inline_message_caption.html
 */
export type EditInlineMessageCaption = (args: {
  "@type": "editInlineMessageCaption";
  /** Inline message identifier */
  inline_message_id: string;
  /** The new message reply markup; pass null if none */
  reply_markup?: Obj.ReplyMarkup;
  /** New message content caption; pass null to remove caption; 0-getOption("message_caption_length_max") characters */
  caption?: Obj.FormattedText;
  /** Pass true to show the caption above the media; otherwise, the caption will be shown below the media. May be true only for animation, photo, and video messages */
  show_caption_above_media: boolean;
}) => Obj.Ok;

/**
 * Edits the reply markup of an inline message sent via a bot; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1edit_inline_message_reply_markup.html
 */
export type EditInlineMessageReplyMarkup = (args: {
  "@type": "editInlineMessageReplyMarkup";
  /** Inline message identifier */
  inline_message_id: string;
  /** The new message reply markup; pass null if none */
  reply_markup?: Obj.ReplyMarkup;
}) => Obj.Ok;

/**
 * Edits the time when a scheduled message will be sent. Scheduling state of all messages in the same album or forwarded together with the message will be also changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1edit_message_scheduling_state.html
 */
export type EditMessageSchedulingState = (args: {
  "@type": "editMessageSchedulingState";
  /** The chat the message belongs to */
  chat_id: number;
  /** Identifier of the message. Use messageProperties.can_edit_scheduling_state to check whether the message is suitable */
  message_id: number;
  /** The new message scheduling state; pass null to send the message immediately. Must be null for messages in the state messageSchedulingStateSendWhenVideoProcessed */
  scheduling_state?: Obj.MessageSchedulingState;
}) => Obj.Ok;

/**
 * Changes the fact-check of a message. Can be only used if messageProperties.can_set_fact_check == true
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_message_fact_check.html
 */
export type SetMessageFactCheck = (args: {
  "@type": "setMessageFactCheck";
  /** The channel chat the message belongs to */
  chat_id: number;
  /** Identifier of the message */
  message_id: number;
  /** New text of the fact-check; 0-getOption("fact_check_length_max") characters; pass null to remove it. Only Bold, Italic, and TextUrl entities with https://t.me/ links are supported */
  text?: Obj.FormattedText;
}) => Obj.Ok;

/**
 * Sends a message on behalf of a business account; for bots only. Returns the message after it was sent
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1send_business_message.html
 */
export type SendBusinessMessage = (args: {
  "@type": "sendBusinessMessage";
  /** Unique identifier of business connection on behalf of which to send the request */
  business_connection_id: string;
  /** Target chat */
  chat_id: number;
  /** Information about the message to be replied; pass null if none */
  reply_to?: Obj.InputMessageReplyTo;
  /** Pass true to disable notification for the message */
  disable_notification: boolean;
  /** Pass true if the content of the message must be protected from forwarding and saving */
  protect_content: boolean;
  /** Identifier of the effect to apply to the message */
  effect_id: string;
  /** Markup for replying to the message; pass null if none */
  reply_markup?: Obj.ReplyMarkup;
  /** The content of the message to be sent */
  input_message_content: Obj.InputMessageContent;
}) => Obj.BusinessMessage;

/**
 * Sends 2-10 messages grouped together into an album on behalf of a business account; for bots only. Currently, only audio, document, photo and video messages can be grouped into an album. Documents and audio files can be only grouped in an album with messages of the same type. Returns sent messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1send_business_message_album.html
 */
export type SendBusinessMessageAlbum = (args: {
  "@type": "sendBusinessMessageAlbum";
  /** Unique identifier of business connection on behalf of which to send the request */
  business_connection_id: string;
  /** Target chat */
  chat_id: number;
  /** Information about the message to be replied; pass null if none */
  reply_to?: Obj.InputMessageReplyTo;
  /** Pass true to disable notification for the message */
  disable_notification: boolean;
  /** Pass true if the content of the message must be protected from forwarding and saving */
  protect_content: boolean;
  /** Identifier of the effect to apply to the message */
  effect_id: string;
  /** Contents of messages to be sent. At most 10 messages can be added to an album. All messages must have the same value of show_caption_above_media */
  input_message_contents: Obj.InputMessageContent[];
}) => Obj.BusinessMessages;

/**
 * Edits the text of a text or game message sent on behalf of a business account; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1edit_business_message_text.html
 */
export type EditBusinessMessageText = (args: {
  "@type": "editBusinessMessageText";
  /** Unique identifier of business connection on behalf of which the message was sent */
  business_connection_id: string;
  /** The chat the message belongs to */
  chat_id: number;
  /** Identifier of the message */
  message_id: number;
  /** The new message reply markup; pass null if none */
  reply_markup?: Obj.ReplyMarkup;
  /** New text content of the message. Must be of type inputMessageText */
  input_message_content: Obj.InputMessageContent;
}) => Obj.BusinessMessage;

/**
 * Edits the content of a live location in a message sent on behalf of a business account; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1edit_business_message_live_location.html
 */
export type EditBusinessMessageLiveLocation = (args: {
  "@type": "editBusinessMessageLiveLocation";
  /** Unique identifier of business connection on behalf of which the message was sent */
  business_connection_id: string;
  /** The chat the message belongs to */
  chat_id: number;
  /** Identifier of the message */
  message_id: number;
  /** The new message reply markup; pass null if none */
  reply_markup?: Obj.ReplyMarkup;
  /** New location content of the message; pass null to stop sharing the live location */
  location?: Obj.Location;
  /** New time relative to the message send date, for which the location can be updated, in seconds. If 0x7FFFFFFF specified, then the location can be updated forever. Otherwise, must not exceed the current live_period by more than a day, and the live location expiration date must remain in the next 90 days. Pass 0 to keep the current live_period */
  live_period: number;
  /** The new direction in which the location moves, in degrees; 1-360. Pass 0 if unknown */
  heading: number;
  /** The new maximum distance for proximity alerts, in meters (0-100000). Pass 0 if the notification is disabled */
  proximity_alert_radius: number;
}) => Obj.BusinessMessage;

/**
 * Edits the media content of a message with a text, an animation, an audio, a document, a photo or a video in a message sent on behalf of a business account; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1edit_business_message_media.html
 */
export type EditBusinessMessageMedia = (args: {
  "@type": "editBusinessMessageMedia";
  /** Unique identifier of business connection on behalf of which the message was sent */
  business_connection_id: string;
  /** The chat the message belongs to */
  chat_id: number;
  /** Identifier of the message */
  message_id: number;
  /** The new message reply markup; pass null if none; for bots only */
  reply_markup?: Obj.ReplyMarkup;
  /** New content of the message. Must be one of the following types: inputMessageAnimation, inputMessageAudio, inputMessageDocument, inputMessagePhoto or inputMessageVideo */
  input_message_content: Obj.InputMessageContent;
}) => Obj.BusinessMessage;

/**
 * Edits the caption of a message sent on behalf of a business account; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1edit_business_message_caption.html
 */
export type EditBusinessMessageCaption = (args: {
  "@type": "editBusinessMessageCaption";
  /** Unique identifier of business connection on behalf of which the message was sent */
  business_connection_id: string;
  /** The chat the message belongs to */
  chat_id: number;
  /** Identifier of the message */
  message_id: number;
  /** The new message reply markup; pass null if none */
  reply_markup?: Obj.ReplyMarkup;
  /** New message content caption; pass null to remove caption; 0-getOption("message_caption_length_max") characters */
  caption?: Obj.FormattedText;
  /** Pass true to show the caption above the media; otherwise, the caption will be shown below the media. May be true only for animation, photo, and video messages */
  show_caption_above_media: boolean;
}) => Obj.BusinessMessage;

/**
 * Edits the reply markup of a message sent on behalf of a business account; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1edit_business_message_reply_markup.html
 */
export type EditBusinessMessageReplyMarkup = (args: {
  "@type": "editBusinessMessageReplyMarkup";
  /** Unique identifier of business connection on behalf of which the message was sent */
  business_connection_id: string;
  /** The chat the message belongs to */
  chat_id: number;
  /** Identifier of the message */
  message_id: number;
  /** The new message reply markup; pass null if none */
  reply_markup?: Obj.ReplyMarkup;
}) => Obj.BusinessMessage;

/**
 * Stops a poll sent on behalf of a business account; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1stop_business_poll.html
 */
export type StopBusinessPoll = (args: {
  "@type": "stopBusinessPoll";
  /** Unique identifier of business connection on behalf of which the message with the poll was sent */
  business_connection_id: string;
  /** The chat the message belongs to */
  chat_id: number;
  /** Identifier of the message containing the poll */
  message_id: number;
  /** The new message reply markup; pass null if none */
  reply_markup?: Obj.ReplyMarkup;
}) => Obj.BusinessMessage;

/**
 * Pins or unpins a message sent on behalf of a business account; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_business_message_is_pinned.html
 */
export type SetBusinessMessageIsPinned = (args: {
  "@type": "setBusinessMessageIsPinned";
  /** Unique identifier of business connection on behalf of which the message was sent */
  business_connection_id: string;
  /** The chat the message belongs to */
  chat_id: number;
  /** Identifier of the message */
  message_id: number;
  /** Pass true to pin the message, pass false to unpin it */
  is_pinned: boolean;
}) => Obj.Ok;

/**
 * Reads a message on behalf of a business account; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1read_business_message.html
 */
export type ReadBusinessMessage = (args: {
  "@type": "readBusinessMessage";
  /** Unique identifier of business connection through which the message was received */
  business_connection_id: string;
  /** The chat the message belongs to */
  chat_id: number;
  /** Identifier of the message */
  message_id: number;
}) => Obj.Ok;

/**
 * Deletes messages on behalf of a business account; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1delete_business_messages.html
 */
export type DeleteBusinessMessages = (args: {
  "@type": "deleteBusinessMessages";
  /** Unique identifier of business connection through which the messages were received */
  business_connection_id: string;
  /** Identifier of the messages */
  message_ids: number[];
}) => Obj.Ok;

/**
 * Changes a story posted by the bot on behalf of a business account; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1edit_business_story.html
 */
export type EditBusinessStory = (args: {
  "@type": "editBusinessStory";
  /** Identifier of the chat that posted the story */
  story_poster_chat_id: number;
  /** Identifier of the story to edit */
  story_id: number;
  /** New content of the story */
  content: Obj.InputStoryContent;
  /** New clickable rectangle areas to be shown on the story media */
  areas: Obj.InputStoryAreas;
  /** New story caption */
  caption: Obj.FormattedText;
  /** The new privacy settings for the story */
  privacy_settings: Obj.StoryPrivacySettings;
}) => Obj.Story;

/**
 * Deletes a story posted by the bot on behalf of a business account; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1delete_business_story.html
 */
export type DeleteBusinessStory = (args: {
  "@type": "deleteBusinessStory";
  /** Unique identifier of business connection */
  business_connection_id: string;
  /** Identifier of the story to delete */
  story_id: number;
}) => Obj.Ok;

/**
 * Changes the first and last name of a business account; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_business_account_name.html
 */
export type SetBusinessAccountName = (args: {
  "@type": "setBusinessAccountName";
  /** Unique identifier of business connection */
  business_connection_id: string;
  /** The new value of the first name for the business account; 1-64 characters */
  first_name: string;
  /** The new value of the optional last name for the business account; 0-64 characters */
  last_name: string;
}) => Obj.Ok;

/**
 * Changes the bio of a business account; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_business_account_bio.html
 */
export type SetBusinessAccountBio = (args: {
  "@type": "setBusinessAccountBio";
  /** Unique identifier of business connection */
  business_connection_id: string;
  /** The new value of the bio; 0-getOption("bio_length_max") characters without line feeds */
  bio: string;
}) => Obj.Ok;

/**
 * Changes a profile photo of a business account; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_business_account_profile_photo.html
 */
export type SetBusinessAccountProfilePhoto = (args: {
  "@type": "setBusinessAccountProfilePhoto";
  /** Unique identifier of business connection */
  business_connection_id: string;
  /** Profile photo to set; pass null to remove the photo */
  photo?: Obj.InputChatPhoto;
  /** Pass true to set the public photo, which will be visible even the main photo is hidden by privacy settings */
  is_public: boolean;
}) => Obj.Ok;

/**
 * Changes the editable username of a business account; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_business_account_username.html
 */
export type SetBusinessAccountUsername = (args: {
  "@type": "setBusinessAccountUsername";
  /** Unique identifier of business connection */
  business_connection_id: string;
  /** The new value of the username */
  username: string;
}) => Obj.Ok;

/**
 * Changes settings for gift receiving of a business account; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_business_account_gift_settings.html
 */
export type SetBusinessAccountGiftSettings = (args: {
  "@type": "setBusinessAccountGiftSettings";
  /** Unique identifier of business connection */
  business_connection_id: string;
  /** The new settings */
  settings: Obj.GiftSettings;
}) => Obj.Ok;

/**
 * Returns the amount of Telegram Stars owned by a business account; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_business_account_star_amount.html
 */
export type GetBusinessAccountStarAmount = (args: {
  "@type": "getBusinessAccountStarAmount";
  /** Unique identifier of business connection */
  business_connection_id: string;
}) => Obj.StarAmount;

/**
 * Transfer Telegram Stars from the business account to the business bot; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1transfer_business_account_stars.html
 */
export type TransferBusinessAccountStars = (args: {
  "@type": "transferBusinessAccountStars";
  /** Unique identifier of business connection */
  business_connection_id: string;
  /** Number of Telegram Stars to transfer */
  star_count: number;
}) => Obj.Ok;

/**
 * Checks validness of a name for a quick reply shortcut. Can be called synchronously
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1check_quick_reply_shortcut_name.html
 */
export type CheckQuickReplyShortcutName = (args: {
  "@type": "checkQuickReplyShortcutName";
  /** The name of the shortcut; 1-32 characters */
  name: string;
}) => Obj.Ok;

/**
 * Loads quick reply shortcuts created by the current user. The loaded data will be sent through updateQuickReplyShortcut and updateQuickReplyShortcuts
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1load_quick_reply_shortcuts.html
 */
export type LoadQuickReplyShortcuts = (args: {
  "@type": "loadQuickReplyShortcuts";
}) => Obj.Ok;

/**
 * Changes name of a quick reply shortcut
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_quick_reply_shortcut_name.html
 */
export type SetQuickReplyShortcutName = (args: {
  "@type": "setQuickReplyShortcutName";
  /** Unique identifier of the quick reply shortcut */
  shortcut_id: number;
  /** New name for the shortcut. Use checkQuickReplyShortcutName to check its validness */
  name: string;
}) => Obj.Ok;

/**
 * Deletes a quick reply shortcut
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1delete_quick_reply_shortcut.html
 */
export type DeleteQuickReplyShortcut = (args: {
  "@type": "deleteQuickReplyShortcut";
  /** Unique identifier of the quick reply shortcut */
  shortcut_id: number;
}) => Obj.Ok;

/**
 * Changes the order of quick reply shortcuts
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1reorder_quick_reply_shortcuts.html
 */
export type ReorderQuickReplyShortcuts = (args: {
  "@type": "reorderQuickReplyShortcuts";
  /** The new order of quick reply shortcuts */
  shortcut_ids: number[];
}) => Obj.Ok;

/**
 * Loads quick reply messages that can be sent by a given quick reply shortcut. The loaded messages will be sent through updateQuickReplyShortcutMessages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1load_quick_reply_shortcut_messages.html
 */
export type LoadQuickReplyShortcutMessages = (args: {
  "@type": "loadQuickReplyShortcutMessages";
  /** Unique identifier of the quick reply shortcut */
  shortcut_id: number;
}) => Obj.Ok;

/**
 * Deletes specified quick reply messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1delete_quick_reply_shortcut_messages.html
 */
export type DeleteQuickReplyShortcutMessages = (args: {
  "@type": "deleteQuickReplyShortcutMessages";
  /** Unique identifier of the quick reply shortcut to which the messages belong */
  shortcut_id: number;
  /** Unique identifiers of the messages */
  message_ids: number[];
}) => Obj.Ok;

/**
 * Adds a message to a quick reply shortcut. If shortcut doesn't exist and there are less than getOption("quick_reply_shortcut_count_max") shortcuts, then a new shortcut is created. The shortcut must not contain more than getOption("quick_reply_shortcut_message_count_max") messages after adding the new message. Returns the added message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1add_quick_reply_shortcut_message.html
 */
export type AddQuickReplyShortcutMessage = (args: {
  "@type": "addQuickReplyShortcutMessage";
  /** Name of the target shortcut */
  shortcut_name: string;
  /** Identifier of a quick reply message in the same shortcut to be replied; pass 0 if none */
  reply_to_message_id: number;
  /** The content of the message to be added; inputMessagePoll, inputMessageForwarded and inputMessageLocation with live_period aren't supported */
  input_message_content: Obj.InputMessageContent;
}) => Obj.QuickReplyMessage;

/**
 * Adds a message to a quick reply shortcut via inline bot. If shortcut doesn't exist and there are less than getOption("quick_reply_shortcut_count_max") shortcuts, then a new shortcut is created. The shortcut must not contain more than getOption("quick_reply_shortcut_message_count_max") messages after adding the new message. Returns the added message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1add_quick_reply_shortcut_inline_query_result_message.html
 */
export type AddQuickReplyShortcutInlineQueryResultMessage = (args: {
  "@type": "addQuickReplyShortcutInlineQueryResultMessage";
  /** Name of the target shortcut */
  shortcut_name: string;
  /** Identifier of a quick reply message in the same shortcut to be replied; pass 0 if none */
  reply_to_message_id: number;
  /** Identifier of the inline query */
  query_id: string;
  /** Identifier of the inline query result */
  result_id: string;
  /** Pass true to hide the bot, via which the message is sent. Can be used only for bots getOption("animation_search_bot_username"), getOption("photo_search_bot_username"), and getOption("venue_search_bot_username") */
  hide_via_bot: boolean;
}) => Obj.QuickReplyMessage;

/**
 * Adds 2-10 messages grouped together into an album to a quick reply shortcut. Currently, only audio, document, photo and video messages can be grouped into an album. Documents and audio files can be only grouped in an album with messages of the same type. Returns sent messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1add_quick_reply_shortcut_message_album.html
 */
export type AddQuickReplyShortcutMessageAlbum = (args: {
  "@type": "addQuickReplyShortcutMessageAlbum";
  /** Name of the target shortcut */
  shortcut_name: string;
  /** Identifier of a quick reply message in the same shortcut to be replied; pass 0 if none */
  reply_to_message_id: number;
  /** Contents of messages to be sent. At most 10 messages can be added to an album. All messages must have the same value of show_caption_above_media */
  input_message_contents: Obj.InputMessageContent[];
}) => Obj.QuickReplyMessages;

/**
 * Readds quick reply messages which failed to add. Can be called only for messages for which messageSendingStateFailed.can_retry is true and after specified in messageSendingStateFailed.retry_after time passed. If a message is readded, the corresponding failed to send message is deleted. Returns the sent messages in the same order as the message identifiers passed in message_ids. If a message can't be readded, null will be returned instead of the message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1readd_quick_reply_shortcut_messages.html
 */
export type ReaddQuickReplyShortcutMessages = (args: {
  "@type": "readdQuickReplyShortcutMessages";
  /** Name of the target shortcut */
  shortcut_name: string;
  /** Identifiers of the quick reply messages to readd. Message identifiers must be in a strictly increasing order */
  message_ids: number[];
}) => Obj.QuickReplyMessages;

/**
 * Asynchronously edits the text, media or caption of a quick reply message. Use quickReplyMessage.can_be_edited to check whether a message can be edited. Media message can be edited only to a media message. The type of message content in an album can't be changed with exception of replacing a photo with a video or vice versa
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1edit_quick_reply_message.html
 */
export type EditQuickReplyMessage = (args: {
  "@type": "editQuickReplyMessage";
  /** Unique identifier of the quick reply shortcut with the message */
  shortcut_id: number;
  /** Identifier of the message */
  message_id: number;
  /** New content of the message. Must be one of the following types: inputMessageText, inputMessageAnimation, inputMessageAudio, inputMessageDocument, inputMessagePhoto or inputMessageVideo */
  input_message_content: Obj.InputMessageContent;
}) => Obj.Ok;

/**
 * Returns the list of custom emoji, which can be used as forum topic icon by all users
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_forum_topic_default_icons.html
 */
export type GetForumTopicDefaultIcons = (args: {
  "@type": "getForumTopicDefaultIcons";
}) => Obj.Stickers;

/**
 * Creates a topic in a forum supergroup chat; requires can_manage_topics administrator or can_create_topics member right in the supergroup
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1create_forum_topic.html
 */
export type CreateForumTopic = (args: {
  "@type": "createForumTopic";
  /** Identifier of the chat */
  chat_id: number;
  /** Name of the topic; 1-128 characters */
  name: string;
  /** Icon of the topic. Icon color must be one of 0x6FB9F0, 0xFFD67E, 0xCB86DB, 0x8EEE98, 0xFF93B2, or 0xFB6F5F. Telegram Premium users can use any custom emoji as topic icon, other users can use only a custom emoji returned by getForumTopicDefaultIcons */
  icon: Obj.ForumTopicIcon;
}) => Obj.ForumTopicInfo;

/**
 * Edits title and icon of a topic in a forum supergroup chat; requires can_manage_topics right in the supergroup unless the user is creator of the topic
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1edit_forum_topic.html
 */
export type EditForumTopic = (args: {
  "@type": "editForumTopic";
  /** Identifier of the chat */
  chat_id: number;
  /** Message thread identifier of the forum topic */
  message_thread_id: number;
  /** New name of the topic; 0-128 characters. If empty, the previous topic name is kept */
  name: string;
  /** Pass true to edit the icon of the topic. Icon of the General topic can't be edited */
  edit_icon_custom_emoji: boolean;
  /** Identifier of the new custom emoji for topic icon; pass 0 to remove the custom emoji. Ignored if edit_icon_custom_emoji is false. Telegram Premium users can use any custom emoji, other users can use only a custom emoji returned by getForumTopicDefaultIcons */
  icon_custom_emoji_id: string;
}) => Obj.Ok;

/**
 * Returns information about a forum topic
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_forum_topic.html
 */
export type GetForumTopic = (args: {
  "@type": "getForumTopic";
  /** Identifier of the chat */
  chat_id: number;
  /** Message thread identifier of the forum topic */
  message_thread_id: number;
}) => Obj.ForumTopic;

/**
 * Returns an HTTPS link to a topic in a forum chat. This is an offline method
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_forum_topic_link.html
 */
export type GetForumTopicLink = (args: {
  "@type": "getForumTopicLink";
  /** Identifier of the chat */
  chat_id: number;
  /** Message thread identifier of the forum topic */
  message_thread_id: number;
}) => Obj.MessageLink;

/**
 * Returns found forum topics in a forum chat. This is a temporary method for getting information about topic list from the server
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_forum_topics.html
 */
export type GetForumTopics = (args: {
  "@type": "getForumTopics";
  /** Identifier of the forum chat */
  chat_id: number;
  /** Query to search for in the forum topic's name */
  query: string;
  /** The date starting from which the results need to be fetched. Use 0 or any date in the future to get results from the last topic */
  offset_date: number;
  /** The message identifier of the last message in the last found topic, or 0 for the first request */
  offset_message_id: number;
  /** The message thread identifier of the last found topic, or 0 for the first request */
  offset_message_thread_id: number;
  /** The maximum number of forum topics to be returned; up to 100. For optimal performance, the number of returned forum topics is chosen by TDLib and can be smaller than the specified limit */
  limit: number;
}) => Obj.ForumTopics;

/**
 * Changes the notification settings of a forum topic
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_forum_topic_notification_settings.html
 */
export type SetForumTopicNotificationSettings = (args: {
  "@type": "setForumTopicNotificationSettings";
  /** Chat identifier */
  chat_id: number;
  /** Message thread identifier of the forum topic */
  message_thread_id: number;
  /** New notification settings for the forum topic. If the topic is muted for more than 366 days, it is considered to be muted forever */
  notification_settings: Obj.ChatNotificationSettings;
}) => Obj.Ok;

/**
 * Toggles whether a topic is closed in a forum supergroup chat; requires can_manage_topics right in the supergroup unless the user is creator of the topic
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_forum_topic_is_closed.html
 */
export type ToggleForumTopicIsClosed = (args: {
  "@type": "toggleForumTopicIsClosed";
  /** Identifier of the chat */
  chat_id: number;
  /** Message thread identifier of the forum topic */
  message_thread_id: number;
  /** Pass true to close the topic; pass false to reopen it */
  is_closed: boolean;
}) => Obj.Ok;

/**
 * Toggles whether a General topic is hidden in a forum supergroup chat; requires can_manage_topics right in the supergroup
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_general_forum_topic_is_hidden.html
 */
export type ToggleGeneralForumTopicIsHidden = (args: {
  "@type": "toggleGeneralForumTopicIsHidden";
  /** Identifier of the chat */
  chat_id: number;
  /** Pass true to hide and close the General topic; pass false to unhide it */
  is_hidden: boolean;
}) => Obj.Ok;

/**
 * Changes the pinned state of a forum topic; requires can_manage_topics right in the supergroup. There can be up to getOption("pinned_forum_topic_count_max") pinned forum topics
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_forum_topic_is_pinned.html
 */
export type ToggleForumTopicIsPinned = (args: {
  "@type": "toggleForumTopicIsPinned";
  /** Chat identifier */
  chat_id: number;
  /** Message thread identifier of the forum topic */
  message_thread_id: number;
  /** Pass true to pin the topic; pass false to unpin it */
  is_pinned: boolean;
}) => Obj.Ok;

/**
 * Changes the order of pinned forum topics; requires can_manage_topics right in the supergroup
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_pinned_forum_topics.html
 */
export type SetPinnedForumTopics = (args: {
  "@type": "setPinnedForumTopics";
  /** Chat identifier */
  chat_id: number;
  /** The new list of pinned forum topics */
  message_thread_ids: number[];
}) => Obj.Ok;

/**
 * Deletes all messages in a forum topic; requires can_delete_messages administrator right in the supergroup unless the user is creator of the topic, the topic has no messages from other users and has at most 11 messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1delete_forum_topic.html
 */
export type DeleteForumTopic = (args: {
  "@type": "deleteForumTopic";
  /** Identifier of the chat */
  chat_id: number;
  /** Message thread identifier of the forum topic */
  message_thread_id: number;
}) => Obj.Ok;

/**
 * Returns information about an emoji reaction. Returns a 404 error if the reaction is not found
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_emoji_reaction.html
 */
export type GetEmojiReaction = (args: {
  "@type": "getEmojiReaction";
  /** Text representation of the reaction */
  emoji: string;
}) => Obj.EmojiReaction;

/**
 * Returns TGS stickers with generic animations for custom emoji reactions
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_custom_emoji_reaction_animations.html
 */
export type GetCustomEmojiReactionAnimations = (args: {
  "@type": "getCustomEmojiReactionAnimations";
}) => Obj.Stickers;

/**
 * Returns reactions, which can be added to a message. The list can change after updateActiveEmojiReactions, updateChatAvailableReactions for the chat, or updateMessageInteractionInfo for the message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_message_available_reactions.html
 */
export type GetMessageAvailableReactions = (args: {
  "@type": "getMessageAvailableReactions";
  /** Identifier of the chat to which the message belongs */
  chat_id: number;
  /** Identifier of the message */
  message_id: number;
  /** Number of reaction per row, 5-25 */
  row_size: number;
}) => Obj.AvailableReactions;

/**
 * Clears the list of recently used reactions
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1clear_recent_reactions.html
 */
export type ClearRecentReactions = (args: {
  "@type": "clearRecentReactions";
}) => Obj.Ok;

/**
 * Adds a reaction or a tag to a message. Use getMessageAvailableReactions to receive the list of available reactions for the message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1add_message_reaction.html
 */
export type AddMessageReaction = (args: {
  "@type": "addMessageReaction";
  /** Identifier of the chat to which the message belongs */
  chat_id: number;
  /** Identifier of the message */
  message_id: number;
  /** Type of the reaction to add. Use addPendingPaidMessageReaction instead to add the paid reaction */
  reaction_type: Obj.ReactionType;
  /** Pass true if the reaction is added with a big animation */
  is_big: boolean;
  /** Pass true if the reaction needs to be added to recent reactions; tags are never added to the list of recent reactions */
  update_recent_reactions: boolean;
}) => Obj.Ok;

/**
 * Removes a reaction from a message. A chosen reaction can always be removed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1remove_message_reaction.html
 */
export type RemoveMessageReaction = (args: {
  "@type": "removeMessageReaction";
  /** Identifier of the chat to which the message belongs */
  chat_id: number;
  /** Identifier of the message */
  message_id: number;
  /** Type of the reaction to remove. The paid reaction can't be removed */
  reaction_type: Obj.ReactionType;
}) => Obj.Ok;

/**
 * Returns the list of message sender identifiers, which can be used to send a paid reaction in a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_available_paid_message_reaction_senders.html
 */
export type GetChatAvailablePaidMessageReactionSenders = (args: {
  "@type": "getChatAvailablePaidMessageReactionSenders";
  /** Chat identifier */
  chat_id: number;
}) => Obj.MessageSenders;

/**
 * Adds the paid message reaction to a message. Use getMessageAvailableReactions to check whether the reaction is available for the message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1add_pending_paid_message_reaction.html
 */
export type AddPendingPaidMessageReaction = (args: {
  "@type": "addPendingPaidMessageReaction";
  /** Identifier of the chat to which the message belongs */
  chat_id: number;
  /** Identifier of the message */
  message_id: number;
  /** Number of Telegram Stars to be used for the reaction. The total number of pending paid reactions must not exceed getOption("paid_reaction_star_count_max") */
  star_count: number;
  /** Type of the paid reaction; pass null if the user didn't choose reaction type explicitly, for example, the reaction is set from the message bubble */
  type?: Obj.PaidReactionType;
}) => Obj.Ok;

/**
 * Applies all pending paid reactions on a message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1commit_pending_paid_message_reactions.html
 */
export type CommitPendingPaidMessageReactions = (args: {
  "@type": "commitPendingPaidMessageReactions";
  /** Identifier of the chat to which the message belongs */
  chat_id: number;
  /** Identifier of the message */
  message_id: number;
}) => Obj.Ok;

/**
 * Removes all pending paid reactions on a message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1remove_pending_paid_message_reactions.html
 */
export type RemovePendingPaidMessageReactions = (args: {
  "@type": "removePendingPaidMessageReactions";
  /** Identifier of the chat to which the message belongs */
  chat_id: number;
  /** Identifier of the message */
  message_id: number;
}) => Obj.Ok;

/**
 * Changes type of paid message reaction of the current user on a message. The message must have paid reaction added by the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_paid_message_reaction_type.html
 */
export type SetPaidMessageReactionType = (args: {
  "@type": "setPaidMessageReactionType";
  /** Identifier of the chat to which the message belongs */
  chat_id: number;
  /** Identifier of the message */
  message_id: number;
  /** New type of the paid reaction */
  type: Obj.PaidReactionType;
}) => Obj.Ok;

/**
 * Sets reactions on a message; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_message_reactions.html
 */
export type SetMessageReactions = (args: {
  "@type": "setMessageReactions";
  /** Identifier of the chat to which the message belongs */
  chat_id: number;
  /** Identifier of the message */
  message_id: number;
  /** Types of the reaction to set; pass an empty list to remove the reactions */
  reaction_types: Obj.ReactionType[];
  /** Pass true if the reactions are added with a big animation */
  is_big: boolean;
}) => Obj.Ok;

/**
 * Returns reactions added for a message, along with their sender
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_message_added_reactions.html
 */
export type GetMessageAddedReactions = (args: {
  "@type": "getMessageAddedReactions";
  /** Identifier of the chat to which the message belongs */
  chat_id: number;
  /** Identifier of the message. Use message.interaction_info.reactions.can_get_added_reactions to check whether added reactions can be received for the message */
  message_id: number;
  /** Type of the reactions to return; pass null to return all added reactions; reactionTypePaid isn't supported */
  reaction_type?: Obj.ReactionType;
  /** Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results */
  offset: string;
  /** The maximum number of reactions to be returned; must be positive and can't be greater than 100 */
  limit: number;
}) => Obj.AddedReactions;

/**
 * Changes type of default reaction for the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_default_reaction_type.html
 */
export type SetDefaultReactionType = (args: {
  "@type": "setDefaultReactionType";
  /** New type of the default reaction. The paid reaction can't be set as default */
  reaction_type: Obj.ReactionType;
}) => Obj.Ok;

/**
 * Returns tags used in Saved Messages or a Saved Messages topic
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_saved_messages_tags.html
 */
export type GetSavedMessagesTags = (args: {
  "@type": "getSavedMessagesTags";
  /** Identifier of Saved Messages topic which tags will be returned; pass 0 to get all Saved Messages tags */
  saved_messages_topic_id: number;
}) => Obj.SavedMessagesTags;

/**
 * Changes label of a Saved Messages tag; for Telegram Premium users only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_saved_messages_tag_label.html
 */
export type SetSavedMessagesTagLabel = (args: {
  "@type": "setSavedMessagesTagLabel";
  /** The tag which label will be changed */
  tag: Obj.ReactionType;
  /** New label for the tag; 0-12 characters */
  label: string;
}) => Obj.Ok;

/**
 * Returns information about a message effect. Returns a 404 error if the effect is not found
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_message_effect.html
 */
export type GetMessageEffect = (args: {
  "@type": "getMessageEffect";
  /** Unique identifier of the effect */
  effect_id: string;
}) => Obj.MessageEffect;

/**
 * Searches for a given quote in a text. Returns found quote start position in UTF-16 code units. Returns a 404 error if the quote is not found. Can be called synchronously
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_quote.html
 */
export type SearchQuote = (args: {
  "@type": "searchQuote";
  /** Text in which to search for the quote */
  text: Obj.FormattedText;
  /** Quote to search for */
  quote: Obj.FormattedText;
  /** Approximate quote position in UTF-16 code units */
  quote_position: number;
}) => Obj.FoundPosition;

/**
 * Returns all entities (mentions, hashtags, cashtags, bot commands, bank card numbers, URLs, and email addresses) found in the text. Can be called synchronously
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_text_entities.html
 */
export type GetTextEntities = (args: {
  "@type": "getTextEntities";
  /** The text in which to look for entities */
  text: string;
}) => Obj.TextEntities;

/**
 * Parses Bold, Italic, Underline, Strikethrough, Spoiler, CustomEmoji, BlockQuote, ExpandableBlockQuote, Code, Pre, PreCode, TextUrl and MentionName entities from a marked-up text. Can be called synchronously
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1parse_text_entities.html
 */
export type ParseTextEntities = (args: {
  "@type": "parseTextEntities";
  /** The text to parse */
  text: string;
  /** Text parse mode */
  parse_mode: Obj.TextParseMode;
}) => Obj.FormattedText;

/**
 * Parses Markdown entities in a human-friendly format, ignoring markup errors. Can be called synchronously
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1parse_markdown.html
 */
export type ParseMarkdown = (args: {
  "@type": "parseMarkdown";
  /** The text to parse. For example, "__italic__ ~~strikethrough~~ ||spoiler|| **bold** `code` ```pre``` __[italic__ text_url](telegram.org) __italic**bold italic__bold**" */
  text: Obj.FormattedText;
}) => Obj.FormattedText;

/**
 * Replaces text entities with Markdown formatting in a human-friendly format. Entities that can't be represented in Markdown unambiguously are kept as is. Can be called synchronously
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_markdown_text.html
 */
export type GetMarkdownText = (args: {
  "@type": "getMarkdownText";
  /** The text */
  text: Obj.FormattedText;
}) => Obj.FormattedText;

/**
 * Returns an emoji for the given country. Returns an empty string on failure. Can be called synchronously
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_country_flag_emoji.html
 */
export type GetCountryFlagEmoji = (args: {
  "@type": "getCountryFlagEmoji";
  /** A two-letter ISO 3166-1 alpha-2 country code as received from getCountries */
  country_code: string;
}) => Obj.Text;

/**
 * Returns the MIME type of a file, guessed by its extension. Returns an empty string on failure. Can be called synchronously
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_file_mime_type.html
 */
export type GetFileMimeType = (args: {
  "@type": "getFileMimeType";
  /** The name of the file or path to the file */
  file_name: string;
}) => Obj.Text;

/**
 * Returns the extension of a file, guessed by its MIME type. Returns an empty string on failure. Can be called synchronously
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_file_extension.html
 */
export type GetFileExtension = (args: {
  "@type": "getFileExtension";
  /** The MIME type of the file */
  mime_type: string;
}) => Obj.Text;

/**
 * Removes potentially dangerous characters from the name of a file. Returns an empty string on failure. Can be called synchronously
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1clean_file_name.html
 */
export type CleanFileName = (args: {
  "@type": "cleanFileName";
  /** File name or path to the file */
  file_name: string;
}) => Obj.Text;

/**
 * Returns a string stored in the local database from the specified localization target and language pack by its key. Returns a 404 error if the string is not found. Can be called synchronously
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_language_pack_string.html
 */
export type GetLanguagePackString = (args: {
  "@type": "getLanguagePackString";
  /** Path to the language pack database in which strings are stored */
  language_pack_database_path: string;
  /** Localization target to which the language pack belongs */
  localization_target: string;
  /** Language pack identifier */
  language_pack_id: string;
  /** Language pack key of the string to be returned */
  key: string;
}) => Obj.LanguagePackStringValue;

/**
 * Converts a JSON-serialized string to corresponding JsonValue object. Can be called synchronously
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_json_value.html
 */
export type GetJsonValue = (args: {
  "@type": "getJsonValue";
  /** The JSON-serialized string */
  json: string;
}) => Obj.JsonValue;

/**
 * Converts a JsonValue object to corresponding JSON-serialized string. Can be called synchronously
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_json_string.html
 */
export type GetJsonString = (args: {
  "@type": "getJsonString";
  /** The JsonValue object */
  json_value: Obj.JsonValue;
}) => Obj.Text;

/**
 * Converts a themeParameters object to corresponding JSON-serialized string. Can be called synchronously
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_theme_parameters_json_string.html
 */
export type GetThemeParametersJsonString = (args: {
  "@type": "getThemeParametersJsonString";
  /** Theme parameters to convert to JSON */
  theme: Obj.ThemeParameters;
}) => Obj.Text;

/**
 * Changes the user answer to a poll. A poll in quiz mode can be answered only once
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_poll_answer.html
 */
export type SetPollAnswer = (args: {
  "@type": "setPollAnswer";
  /** Identifier of the chat to which the poll belongs */
  chat_id: number;
  /** Identifier of the message containing the poll */
  message_id: number;
  /** 0-based identifiers of answer options, chosen by the user. User can choose more than 1 answer option only is the poll allows multiple answers */
  option_ids: number[];
}) => Obj.Ok;

/**
 * Returns message senders voted for the specified option in a non-anonymous polls. For optimal performance, the number of returned users is chosen by TDLib
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_poll_voters.html
 */
export type GetPollVoters = (args: {
  "@type": "getPollVoters";
  /** Identifier of the chat to which the poll belongs */
  chat_id: number;
  /** Identifier of the message containing the poll */
  message_id: number;
  /** 0-based identifier of the answer option */
  option_id: number;
  /** Number of voters to skip in the result; must be non-negative */
  offset: number;
  /** The maximum number of voters to be returned; must be positive and can't be greater than 50. For optimal performance, the number of returned voters is chosen by TDLib and can be smaller than the specified limit, even if the end of the voter list has not been reached */
  limit: number;
}) => Obj.MessageSenders;

/**
 * Stops a poll
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1stop_poll.html
 */
export type StopPoll = (args: {
  "@type": "stopPoll";
  /** Identifier of the chat to which the poll belongs */
  chat_id: number;
  /** Identifier of the message containing the poll. Use messageProperties.can_be_edited to check whether the poll can be stopped */
  message_id: number;
  /** The new message reply markup; pass null if none; for bots only */
  reply_markup?: Obj.ReplyMarkup;
}) => Obj.Ok;

/**
 * Hides a suggested action
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1hide_suggested_action.html
 */
export type HideSuggestedAction = (args: {
  "@type": "hideSuggestedAction";
  /** Suggested action to hide */
  action: Obj.SuggestedAction;
}) => Obj.Ok;

/**
 * Hides the list of contacts that have close birthdays for 24 hours
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1hide_contact_close_birthdays.html
 */
export type HideContactCloseBirthdays = (args: {
  "@type": "hideContactCloseBirthdays";
}) => Obj.Ok;

/**
 * Returns information about a business connection by its identifier; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_business_connection.html
 */
export type GetBusinessConnection = (args: {
  "@type": "getBusinessConnection";
  /** Identifier of the business connection to return */
  connection_id: string;
}) => Obj.BusinessConnection;

/**
 * Returns information about a button of type inlineKeyboardButtonTypeLoginUrl. The method needs to be called when the user presses the button
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_login_url_info.html
 */
export type GetLoginUrlInfo = (args: {
  "@type": "getLoginUrlInfo";
  /** Chat identifier of the message with the button */
  chat_id: number;
  /** Message identifier of the message with the button. The message must not be scheduled */
  message_id: number;
  /** Button identifier */
  button_id: number;
}) => Obj.LoginUrlInfo;

/**
 * Returns an HTTP URL which can be used to automatically authorize the user on a website after clicking an inline button of type inlineKeyboardButtonTypeLoginUrl. Use the method getLoginUrlInfo to find whether a prior user confirmation is needed. If an error is returned, then the button must be handled as an ordinary URL button
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_login_url.html
 */
export type GetLoginUrl = (args: {
  "@type": "getLoginUrl";
  /** Chat identifier of the message with the button */
  chat_id: number;
  /** Message identifier of the message with the button */
  message_id: number;
  /** Button identifier */
  button_id: number;
  /** Pass true to allow the bot to send messages to the current user */
  allow_write_access: boolean;
}) => Obj.HttpUrl;

/**
 * Shares users after pressing a keyboardButtonTypeRequestUsers button with the bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1share_users_with_bot.html
 */
export type ShareUsersWithBot = (args: {
  "@type": "shareUsersWithBot";
  /** Identifier of the chat with the bot */
  chat_id: number;
  /** Identifier of the message with the button */
  message_id: number;
  /** Identifier of the button */
  button_id: number;
  /** Identifiers of the shared users */
  shared_user_ids: number[];
  /** Pass true to check that the users can be shared by the button instead of actually sharing them */
  only_check: boolean;
}) => Obj.Ok;

/**
 * Shares a chat after pressing a keyboardButtonTypeRequestChat button with the bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1share_chat_with_bot.html
 */
export type ShareChatWithBot = (args: {
  "@type": "shareChatWithBot";
  /** Identifier of the chat with the bot */
  chat_id: number;
  /** Identifier of the message with the button */
  message_id: number;
  /** Identifier of the button */
  button_id: number;
  /** Identifier of the shared chat */
  shared_chat_id: number;
  /** Pass true to check that the chat can be shared by the button instead of actually sharing it. Doesn't check bot_is_member and bot_administrator_rights restrictions. If the bot must be a member, then all chats from getGroupsInCommon and all chats, where the user can add the bot, are suitable. In the latter case the bot will be automatically added to the chat. If the bot must be an administrator, then all chats, where the bot already has requested rights or can be added to administrators by the user, are suitable. In the latter case the bot will be automatically granted requested rights */
  only_check: boolean;
}) => Obj.Ok;

/**
 * Sends an inline query to a bot and returns its results. Returns an error with code 502 if the bot fails to answer the query before the query timeout expires
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_inline_query_results.html
 */
export type GetInlineQueryResults = (args: {
  "@type": "getInlineQueryResults";
  /** Identifier of the target bot */
  bot_user_id: number;
  /** Identifier of the chat where the query was sent */
  chat_id: number;
  /** Location of the user; pass null if unknown or the bot doesn't need user's location */
  user_location?: Obj.Location;
  /** Text of the query */
  query: string;
  /** Offset of the first entry to return; use empty string to get the first chunk of results */
  offset: string;
}) => Obj.InlineQueryResults;

/**
 * Sets the result of an inline query; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1answer_inline_query.html
 */
export type AnswerInlineQuery = (args: {
  "@type": "answerInlineQuery";
  /** Identifier of the inline query */
  inline_query_id: string;
  /** Pass true if results may be cached and returned only for the user that sent the query. By default, results may be returned to any user who sends the same query */
  is_personal: boolean;
  /** Button to be shown above inline query results; pass null if none */
  button?: Obj.InlineQueryResultsButton;
  /** The results of the query */
  results: Obj.InputInlineQueryResult[];
  /** Allowed time to cache the results of the query, in seconds */
  cache_time: number;
  /** Offset for the next inline query; pass an empty string if there are no more results */
  next_offset: string;
}) => Obj.Ok;

/**
 * Saves an inline message to be sent by the given user; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1save_prepared_inline_message.html
 */
export type SavePreparedInlineMessage = (args: {
  "@type": "savePreparedInlineMessage";
  /** Identifier of the user */
  user_id: number;
  /** The description of the message */
  result: Obj.InputInlineQueryResult;
  /** Types of the chats to which the message can be sent */
  chat_types: Obj.TargetChatTypes;
}) => Obj.PreparedInlineMessageId;

/**
 * Saves an inline message to be sent by the given user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_prepared_inline_message.html
 */
export type GetPreparedInlineMessage = (args: {
  "@type": "getPreparedInlineMessage";
  /** Identifier of the bot that created the message */
  bot_user_id: number;
  /** Identifier of the prepared message */
  prepared_message_id: string;
}) => Obj.PreparedInlineMessage;

/**
 * Returns the most grossing Web App bots
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_grossing_web_app_bots.html
 */
export type GetGrossingWebAppBots = (args: {
  "@type": "getGrossingWebAppBots";
  /** Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results */
  offset: string;
  /** The maximum number of bots to be returned; up to 100 */
  limit: number;
}) => Obj.FoundUsers;

/**
 * Returns information about a Web App by its short name. Returns a 404 error if the Web App is not found
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_web_app.html
 */
export type SearchWebApp = (args: {
  "@type": "searchWebApp";
  /** Identifier of the target bot */
  bot_user_id: number;
  /** Short name of the Web App */
  web_app_short_name: string;
}) => Obj.FoundWebApp;

/**
 * Returns a default placeholder for Web Apps of a bot. This is an offline method. Returns a 404 error if the placeholder isn't known
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_web_app_placeholder.html
 */
export type GetWebAppPlaceholder = (args: {
  "@type": "getWebAppPlaceholder";
  /** Identifier of the target bot */
  bot_user_id: number;
}) => Obj.Outline;

/**
 * Returns an HTTPS URL of a Web App to open after a link of the type internalLinkTypeWebApp is clicked
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_web_app_link_url.html
 */
export type GetWebAppLinkUrl = (args: {
  "@type": "getWebAppLinkUrl";
  /** Identifier of the chat in which the link was clicked; pass 0 if none */
  chat_id: number;
  /** Identifier of the target bot */
  bot_user_id: number;
  /** Short name of the Web App */
  web_app_short_name: string;
  /** Start parameter from internalLinkTypeWebApp */
  start_parameter: string;
  /** Pass true if the current user allowed the bot to send them messages */
  allow_write_access: boolean;
  /** Parameters to use to open the Web App */
  parameters: Obj.WebAppOpenParameters;
}) => Obj.HttpUrl;

/**
 * Returns information needed to open the main Web App of a bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_main_web_app.html
 */
export type GetMainWebApp = (args: {
  "@type": "getMainWebApp";
  /** Identifier of the chat in which the Web App is opened; pass 0 if none */
  chat_id: number;
  /** Identifier of the target bot. If the bot is restricted for the current user, then show an error instead of calling the method */
  bot_user_id: number;
  /** Start parameter from internalLinkTypeMainWebApp */
  start_parameter: string;
  /** Parameters to use to open the Web App */
  parameters: Obj.WebAppOpenParameters;
}) => Obj.MainWebApp;

/**
 * Returns an HTTPS URL of a Web App to open from the side menu, a keyboardButtonTypeWebApp button, or an inlineQueryResultsButtonTypeWebApp button
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_web_app_url.html
 */
export type GetWebAppUrl = (args: {
  "@type": "getWebAppUrl";
  /** Identifier of the target bot. If the bot is restricted for the current user, then show an error instead of calling the method */
  bot_user_id: number;
  /** The URL from a keyboardButtonTypeWebApp button, inlineQueryResultsButtonTypeWebApp button, or an empty string when the bot is opened from the side menu */
  url: string;
  /** Parameters to use to open the Web App */
  parameters: Obj.WebAppOpenParameters;
}) => Obj.HttpUrl;

/**
 * Sends data received from a keyboardButtonTypeWebApp Web App to a bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1send_web_app_data.html
 */
export type SendWebAppData = (args: {
  "@type": "sendWebAppData";
  /** Identifier of the target bot */
  bot_user_id: number;
  /** Text of the keyboardButtonTypeWebApp button, which opened the Web App */
  button_text: string;
  /** The data */
  data: string;
}) => Obj.Ok;

/**
 * Informs TDLib that a Web App is being opened from the attachment menu, a botMenuButton button, an internalLinkTypeAttachmentMenuBot link, or an inlineKeyboardButtonTypeWebApp button. For each bot, a confirmation alert about data sent to the bot must be shown once
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1open_web_app.html
 */
export type OpenWebApp = (args: {
  "@type": "openWebApp";
  /** Identifier of the chat in which the Web App is opened. The Web App can't be opened in secret chats */
  chat_id: number;
  /** Identifier of the bot, providing the Web App. If the bot is restricted for the current user, then show an error instead of calling the method */
  bot_user_id: number;
  /** The URL from an inlineKeyboardButtonTypeWebApp button, a botMenuButton button, an internalLinkTypeAttachmentMenuBot link, or an empty string otherwise */
  url: string;
  /** If not 0, the message thread identifier to which the message will be sent */
  message_thread_id: number;
  /** If not 0, unique identifier of the topic of channel direct messages chat to which the message will be sent */
  direct_messages_chat_topic_id: number;
  /** Information about the message or story to be replied in the message sent by the Web App; pass null if none */
  reply_to?: Obj.InputMessageReplyTo;
  /** Parameters to use to open the Web App */
  parameters: Obj.WebAppOpenParameters;
}) => Obj.WebAppInfo;

/**
 * Informs TDLib that a previously opened Web App was closed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1close_web_app.html
 */
export type CloseWebApp = (args: {
  "@type": "closeWebApp";
  /** Identifier of Web App launch, received from openWebApp */
  web_app_launch_id: string;
}) => Obj.Ok;

/**
 * Sets the result of interaction with a Web App and sends corresponding message on behalf of the user to the chat from which the query originated; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1answer_web_app_query.html
 */
export type AnswerWebAppQuery = (args: {
  "@type": "answerWebAppQuery";
  /** Identifier of the Web App query */
  web_app_query_id: string;
  /** The result of the query */
  result: Obj.InputInlineQueryResult;
}) => Obj.SentWebAppMessage;

/**
 * Checks whether a file can be downloaded and saved locally by Web App request
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1check_web_app_file_download.html
 */
export type CheckWebAppFileDownload = (args: {
  "@type": "checkWebAppFileDownload";
  /** Identifier of the bot, providing the Web App */
  bot_user_id: number;
  /** Name of the file */
  file_name: string;
  /** URL of the file */
  url: string;
}) => Obj.Ok;

/**
 * Sends a callback query to a bot and returns an answer. Returns an error with code 502 if the bot fails to answer the query before the query timeout expires
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_callback_query_answer.html
 */
export type GetCallbackQueryAnswer = (args: {
  "@type": "getCallbackQueryAnswer";
  /** Identifier of the chat with the message */
  chat_id: number;
  /** Identifier of the message from which the query originated. The message must not be scheduled */
  message_id: number;
  /** Query payload */
  payload: Obj.CallbackQueryPayload;
}) => Obj.CallbackQueryAnswer;

/**
 * Sets the result of a callback query; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1answer_callback_query.html
 */
export type AnswerCallbackQuery = (args: {
  "@type": "answerCallbackQuery";
  /** Identifier of the callback query */
  callback_query_id: string;
  /** Text of the answer */
  text: string;
  /** Pass true to show an alert to the user instead of a toast notification */
  show_alert: boolean;
  /** URL to be opened */
  url: string;
  /** Time during which the result of the query can be cached, in seconds */
  cache_time: number;
}) => Obj.Ok;

/**
 * Sets the result of a shipping query; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1answer_shipping_query.html
 */
export type AnswerShippingQuery = (args: {
  "@type": "answerShippingQuery";
  /** Identifier of the shipping query */
  shipping_query_id: string;
  /** Available shipping options */
  shipping_options: Obj.ShippingOption[];
  /** An error message, empty on success */
  error_message: string;
}) => Obj.Ok;

/**
 * Sets the result of a pre-checkout query; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1answer_pre_checkout_query.html
 */
export type AnswerPreCheckoutQuery = (args: {
  "@type": "answerPreCheckoutQuery";
  /** Identifier of the pre-checkout query */
  pre_checkout_query_id: string;
  /** An error message, empty on success */
  error_message: string;
}) => Obj.Ok;

/**
 * Updates the game score of the specified user in the game; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_game_score.html
 */
export type SetGameScore = (args: {
  "@type": "setGameScore";
  /** The chat to which the message with the game belongs */
  chat_id: number;
  /** Identifier of the message */
  message_id: number;
  /** Pass true to edit the game message to include the current scoreboard */
  edit_message: boolean;
  /** User identifier */
  user_id: number;
  /** The new score */
  score: number;
  /** Pass true to update the score even if it decreases. If the score is 0, the user will be deleted from the high score table */
  force: boolean;
}) => Obj.Message;

/**
 * Updates the game score of the specified user in a game; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_inline_game_score.html
 */
export type SetInlineGameScore = (args: {
  "@type": "setInlineGameScore";
  /** Inline message identifier */
  inline_message_id: string;
  /** Pass true to edit the game message to include the current scoreboard */
  edit_message: boolean;
  /** User identifier */
  user_id: number;
  /** The new score */
  score: number;
  /** Pass true to update the score even if it decreases. If the score is 0, the user will be deleted from the high score table */
  force: boolean;
}) => Obj.Ok;

/**
 * Returns the high scores for a game and some part of the high score table in the range of the specified user; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_game_high_scores.html
 */
export type GetGameHighScores = (args: {
  "@type": "getGameHighScores";
  /** The chat that contains the message with the game */
  chat_id: number;
  /** Identifier of the message */
  message_id: number;
  /** User identifier */
  user_id: number;
}) => Obj.GameHighScores;

/**
 * Returns game high scores and some part of the high score table in the range of the specified user; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_inline_game_high_scores.html
 */
export type GetInlineGameHighScores = (args: {
  "@type": "getInlineGameHighScores";
  /** Inline message identifier */
  inline_message_id: string;
  /** User identifier */
  user_id: number;
}) => Obj.GameHighScores;

/**
 * Deletes the default reply markup from a chat. Must be called after a one-time keyboard or a replyMarkupForceReply reply markup has been used. An updateChatReplyMarkup update will be sent if the reply markup is changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1delete_chat_reply_markup.html
 */
export type DeleteChatReplyMarkup = (args: {
  "@type": "deleteChatReplyMarkup";
  /** Chat identifier */
  chat_id: number;
  /** The message identifier of the used keyboard */
  message_id: number;
}) => Obj.Ok;

/**
 * Sends a notification about user activity in a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1send_chat_action.html
 */
export type SendChatAction = (args: {
  "@type": "sendChatAction";
  /** Chat identifier */
  chat_id: number;
  /** If not 0, the message thread identifier in which the action was performed */
  message_thread_id: number;
  /** Unique identifier of business connection on behalf of which to send the request; for bots only */
  business_connection_id: string;
  /** The action description; pass null to cancel the currently active action */
  action?: Obj.ChatAction;
}) => Obj.Ok;

/**
 * Informs TDLib that the chat is opened by the user. Many useful activities depend on the chat being opened or closed (e.g., in supergroups and channels all updates are received only for opened chats)
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1open_chat.html
 */
export type OpenChat = (args: {
  "@type": "openChat";
  /** Chat identifier */
  chat_id: number;
}) => Obj.Ok;

/**
 * Informs TDLib that the chat is closed by the user. Many useful activities depend on the chat being opened or closed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1close_chat.html
 */
export type CloseChat = (args: {
  "@type": "closeChat";
  /** Chat identifier */
  chat_id: number;
}) => Obj.Ok;

/**
 * Informs TDLib that messages are being viewed by the user. Sponsored messages must be marked as viewed only when the entire text of the message is shown on the screen (excluding the button). Many useful activities depend on whether the messages are currently being viewed or not (e.g., marking messages as read, incrementing a view counter, updating a view counter, removing deleted messages in supergroups and channels)
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1view_messages.html
 */
export type ViewMessages = (args: {
  "@type": "viewMessages";
  /** Chat identifier */
  chat_id: number;
  /** The identifiers of the messages being viewed */
  message_ids: number[];
  /** Source of the message view; pass null to guess the source based on chat open state */
  source?: Obj.MessageSource;
  /** Pass true to mark as read the specified messages even the chat is closed */
  force_read: boolean;
}) => Obj.Ok;

/**
 * Informs TDLib that the message content has been opened (e.g., the user has opened a photo, video, document, location or venue, or has listened to an audio file or voice note message). An updateMessageContentOpened update will be generated if something has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1open_message_content.html
 */
export type OpenMessageContent = (args: {
  "@type": "openMessageContent";
  /** Chat identifier of the message */
  chat_id: number;
  /** Identifier of the message with the opened content */
  message_id: number;
}) => Obj.Ok;

/**
 * Informs TDLib that a message with an animated emoji was clicked by the user. Returns a big animated sticker to be played or a 404 error if usual animation needs to be played
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1click_animated_emoji_message.html
 */
export type ClickAnimatedEmojiMessage = (args: {
  "@type": "clickAnimatedEmojiMessage";
  /** Chat identifier of the message */
  chat_id: number;
  /** Identifier of the clicked message */
  message_id: number;
}) => Obj.Sticker;

/**
 * Returns an HTTPS or a tg: link with the given type. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_internal_link.html
 */
export type GetInternalLink = (args: {
  "@type": "getInternalLink";
  /** Expected type of the link */
  type: Obj.InternalLinkType;
  /** Pass true to create an HTTPS link (only available for some link types); pass false to create a tg: link */
  is_http: boolean;
}) => Obj.HttpUrl;

/**
 * Returns information about the type of internal link. Returns a 404 error if the link is not internal. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_internal_link_type.html
 */
export type GetInternalLinkType = (args: {
  "@type": "getInternalLinkType";
  /** The link */
  link: string;
}) => Obj.InternalLinkType;

/**
 * Returns information about an action to be done when the current user clicks an external link. Don't use this method for links from secret chats if link preview is disabled in secret chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_external_link_info.html
 */
export type GetExternalLinkInfo = (args: {
  "@type": "getExternalLinkInfo";
  /** The link */
  link: string;
}) => Obj.LoginUrlInfo;

/**
 * Returns an HTTP URL which can be used to automatically authorize the current user on a website after clicking an HTTP link. Use the method getExternalLinkInfo to find whether a prior user confirmation is needed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_external_link.html
 */
export type GetExternalLink = (args: {
  "@type": "getExternalLink";
  /** The HTTP link */
  link: string;
  /** Pass true if the current user allowed the bot, returned in getExternalLinkInfo, to send them messages */
  allow_write_access: boolean;
}) => Obj.HttpUrl;

/**
 * Marks all mentions in a chat as read
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1read_all_chat_mentions.html
 */
export type ReadAllChatMentions = (args: {
  "@type": "readAllChatMentions";
  /** Chat identifier */
  chat_id: number;
}) => Obj.Ok;

/**
 * Marks all mentions in a forum topic as read
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1read_all_message_thread_mentions.html
 */
export type ReadAllMessageThreadMentions = (args: {
  "@type": "readAllMessageThreadMentions";
  /** Chat identifier */
  chat_id: number;
  /** Message thread identifier in which mentions are marked as read */
  message_thread_id: number;
}) => Obj.Ok;

/**
 * Marks all reactions in a chat or a forum topic as read
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1read_all_chat_reactions.html
 */
export type ReadAllChatReactions = (args: {
  "@type": "readAllChatReactions";
  /** Chat identifier */
  chat_id: number;
}) => Obj.Ok;

/**
 * Marks all reactions in a forum topic as read
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1read_all_message_thread_reactions.html
 */
export type ReadAllMessageThreadReactions = (args: {
  "@type": "readAllMessageThreadReactions";
  /** Chat identifier */
  chat_id: number;
  /** Message thread identifier in which reactions are marked as read */
  message_thread_id: number;
}) => Obj.Ok;

/**
 * Returns an existing chat corresponding to a given user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1create_private_chat.html
 */
export type CreatePrivateChat = (args: {
  "@type": "createPrivateChat";
  /** User identifier */
  user_id: number;
  /** Pass true to create the chat without a network request. In this case all information about the chat except its type, title and photo can be incorrect */
  force: boolean;
}) => Obj.Chat;

/**
 * Returns an existing chat corresponding to a known basic group
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1create_basic_group_chat.html
 */
export type CreateBasicGroupChat = (args: {
  "@type": "createBasicGroupChat";
  /** Basic group identifier */
  basic_group_id: number;
  /** Pass true to create the chat without a network request. In this case all information about the chat except its type, title and photo can be incorrect */
  force: boolean;
}) => Obj.Chat;

/**
 * Returns an existing chat corresponding to a known supergroup or channel
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1create_supergroup_chat.html
 */
export type CreateSupergroupChat = (args: {
  "@type": "createSupergroupChat";
  /** Supergroup or channel identifier */
  supergroup_id: number;
  /** Pass true to create the chat without a network request. In this case all information about the chat except its type, title and photo can be incorrect */
  force: boolean;
}) => Obj.Chat;

/**
 * Returns an existing chat corresponding to a known secret chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1create_secret_chat.html
 */
export type CreateSecretChat = (args: {
  "@type": "createSecretChat";
  /** Secret chat identifier */
  secret_chat_id: number;
}) => Obj.Chat;

/**
 * Creates a new basic group and sends a corresponding messageBasicGroupChatCreate. Returns information about the newly created chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1create_new_basic_group_chat.html
 */
export type CreateNewBasicGroupChat = (args: {
  "@type": "createNewBasicGroupChat";
  /** Identifiers of users to be added to the basic group; may be empty to create a basic group without other members */
  user_ids?: number[];
  /** Title of the new basic group; 1-128 characters */
  title: string;
  /** Message auto-delete time value, in seconds; must be from 0 up to 365 * 86400 and be divisible by 86400. If 0, then messages aren't deleted automatically */
  message_auto_delete_time: number;
}) => Obj.CreatedBasicGroupChat;

/**
 * Creates a new supergroup or channel and sends a corresponding messageSupergroupChatCreate. Returns the newly created chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1create_new_supergroup_chat.html
 */
export type CreateNewSupergroupChat = (args: {
  "@type": "createNewSupergroupChat";
  /** Title of the new chat; 1-128 characters */
  title: string;
  /** Pass true to create a forum supergroup chat */
  is_forum: boolean;
  /** Pass true to create a channel chat; ignored if a forum is created */
  is_channel: boolean;
  /** Chat description; 0-255 characters */
  description: string;
  /** Chat location if a location-based supergroup is being created; pass null to create an ordinary supergroup chat */
  location?: Obj.ChatLocation;
  /** Message auto-delete time value, in seconds; must be from 0 up to 365 * 86400 and be divisible by 86400. If 0, then messages aren't deleted automatically */
  message_auto_delete_time: number;
  /** Pass true to create a supergroup for importing messages using importMessages */
  for_import: boolean;
}) => Obj.Chat;

/**
 * Creates a new secret chat. Returns the newly created chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1create_new_secret_chat.html
 */
export type CreateNewSecretChat = (args: {
  "@type": "createNewSecretChat";
  /** Identifier of the target user */
  user_id: number;
}) => Obj.Chat;

/**
 * Creates a new supergroup from an existing basic group and sends a corresponding messageChatUpgradeTo and messageChatUpgradeFrom; requires owner privileges. Deactivates the original basic group
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1upgrade_basic_group_chat_to_supergroup_chat.html
 */
export type UpgradeBasicGroupChatToSupergroupChat = (args: {
  "@type": "upgradeBasicGroupChatToSupergroupChat";
  /** Identifier of the chat to upgrade */
  chat_id: number;
}) => Obj.Chat;

/**
 * Returns chat lists to which the chat can be added. This is an offline method
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_lists_to_add_chat.html
 */
export type GetChatListsToAddChat = (args: {
  "@type": "getChatListsToAddChat";
  /** Chat identifier */
  chat_id: number;
}) => Obj.ChatLists;

/**
 * Adds a chat to a chat list. A chat can't be simultaneously in Main and Archive chat lists, so it is automatically removed from another one if needed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1add_chat_to_list.html
 */
export type AddChatToList = (args: {
  "@type": "addChatToList";
  /** Chat identifier */
  chat_id: number;
  /** The chat list. Use getChatListsToAddChat to get suitable chat lists */
  chat_list: Obj.ChatList;
}) => Obj.Ok;

/**
 * Returns information about a chat folder by its identifier
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_folder.html
 */
export type GetChatFolder = (args: {
  "@type": "getChatFolder";
  /** Chat folder identifier */
  chat_folder_id: number;
}) => Obj.ChatFolder;

/**
 * Creates new chat folder. Returns information about the created chat folder. There can be up to getOption("chat_folder_count_max") chat folders, but the limit can be increased with Telegram Premium
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1create_chat_folder.html
 */
export type CreateChatFolder = (args: {
  "@type": "createChatFolder";
  /** The new chat folder */
  folder: Obj.ChatFolder;
}) => Obj.ChatFolderInfo;

/**
 * Edits existing chat folder. Returns information about the edited chat folder
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1edit_chat_folder.html
 */
export type EditChatFolder = (args: {
  "@type": "editChatFolder";
  /** Chat folder identifier */
  chat_folder_id: number;
  /** The edited chat folder */
  folder: Obj.ChatFolder;
}) => Obj.ChatFolderInfo;

/**
 * Deletes existing chat folder
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1delete_chat_folder.html
 */
export type DeleteChatFolder = (args: {
  "@type": "deleteChatFolder";
  /** Chat folder identifier */
  chat_folder_id: number;
  /** Identifiers of the chats to leave. The chats must be pinned or always included in the folder */
  leave_chat_ids: number[];
}) => Obj.Ok;

/**
 * Returns identifiers of pinned or always included chats from a chat folder, which are suggested to be left when the chat folder is deleted
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_folder_chats_to_leave.html
 */
export type GetChatFolderChatsToLeave = (args: {
  "@type": "getChatFolderChatsToLeave";
  /** Chat folder identifier */
  chat_folder_id: number;
}) => Obj.Chats;

/**
 * Returns approximate number of chats in a being created chat folder. Main and archive chat lists must be fully preloaded for this function to work correctly
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_folder_chat_count.html
 */
export type GetChatFolderChatCount = (args: {
  "@type": "getChatFolderChatCount";
  /** The new chat folder */
  folder: Obj.ChatFolder;
}) => Obj.Count;

/**
 * Changes the order of chat folders
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1reorder_chat_folders.html
 */
export type ReorderChatFolders = (args: {
  "@type": "reorderChatFolders";
  /** Identifiers of chat folders in the new correct order */
  chat_folder_ids: number[];
  /** Position of the main chat list among chat folders, 0-based. Can be non-zero only for Premium users */
  main_chat_list_position: number;
}) => Obj.Ok;

/**
 * Toggles whether chat folder tags are enabled
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_chat_folder_tags.html
 */
export type ToggleChatFolderTags = (args: {
  "@type": "toggleChatFolderTags";
  /** Pass true to enable folder tags; pass false to disable them */
  are_tags_enabled: boolean;
}) => Obj.Ok;

/**
 * Returns recommended chat folders for the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_recommended_chat_folders.html
 */
export type GetRecommendedChatFolders = (args: {
  "@type": "getRecommendedChatFolders";
}) => Obj.RecommendedChatFolders;

/**
 * Returns default icon name for a folder. Can be called synchronously
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_folder_default_icon_name.html
 */
export type GetChatFolderDefaultIconName = (args: {
  "@type": "getChatFolderDefaultIconName";
  /** Chat folder */
  folder: Obj.ChatFolder;
}) => Obj.ChatFolderIcon;

/**
 * Returns identifiers of chats from a chat folder, suitable for adding to a chat folder invite link
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chats_for_chat_folder_invite_link.html
 */
export type GetChatsForChatFolderInviteLink = (args: {
  "@type": "getChatsForChatFolderInviteLink";
  /** Chat folder identifier */
  chat_folder_id: number;
}) => Obj.Chats;

/**
 * Creates a new invite link for a chat folder. A link can be created for a chat folder if it has only pinned and included chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1create_chat_folder_invite_link.html
 */
export type CreateChatFolderInviteLink = (args: {
  "@type": "createChatFolderInviteLink";
  /** Chat folder identifier */
  chat_folder_id: number;
  /** Name of the link; 0-32 characters */
  name: string;
  /** Identifiers of chats to be accessible by the invite link. Use getChatsForChatFolderInviteLink to get suitable chats. Basic groups will be automatically converted to supergroups before link creation */
  chat_ids: number[];
}) => Obj.ChatFolderInviteLink;

/**
 * Returns invite links created by the current user for a shareable chat folder
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_folder_invite_links.html
 */
export type GetChatFolderInviteLinks = (args: {
  "@type": "getChatFolderInviteLinks";
  /** Chat folder identifier */
  chat_folder_id: number;
}) => Obj.ChatFolderInviteLinks;

/**
 * Edits an invite link for a chat folder
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1edit_chat_folder_invite_link.html
 */
export type EditChatFolderInviteLink = (args: {
  "@type": "editChatFolderInviteLink";
  /** Chat folder identifier */
  chat_folder_id: number;
  /** Invite link to be edited */
  invite_link: string;
  /** New name of the link; 0-32 characters */
  name: string;
  /** New identifiers of chats to be accessible by the invite link. Use getChatsForChatFolderInviteLink to get suitable chats. Basic groups will be automatically converted to supergroups before link editing */
  chat_ids: number[];
}) => Obj.ChatFolderInviteLink;

/**
 * Deletes an invite link for a chat folder
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1delete_chat_folder_invite_link.html
 */
export type DeleteChatFolderInviteLink = (args: {
  "@type": "deleteChatFolderInviteLink";
  /** Chat folder identifier */
  chat_folder_id: number;
  /** Invite link to be deleted */
  invite_link: string;
}) => Obj.Ok;

/**
 * Checks the validity of an invite link for a chat folder and returns information about the corresponding chat folder
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1check_chat_folder_invite_link.html
 */
export type CheckChatFolderInviteLink = (args: {
  "@type": "checkChatFolderInviteLink";
  /** Invite link to be checked */
  invite_link: string;
}) => Obj.ChatFolderInviteLinkInfo;

/**
 * Adds a chat folder by an invite link
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1add_chat_folder_by_invite_link.html
 */
export type AddChatFolderByInviteLink = (args: {
  "@type": "addChatFolderByInviteLink";
  /** Invite link for the chat folder */
  invite_link: string;
  /** Identifiers of the chats added to the chat folder. The chats are automatically joined if they aren't joined yet */
  chat_ids: number[];
}) => Obj.Ok;

/**
 * Returns new chats added to a shareable chat folder by its owner. The method must be called at most once in getOption("chat_folder_new_chats_update_period") for the given chat folder
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_folder_new_chats.html
 */
export type GetChatFolderNewChats = (args: {
  "@type": "getChatFolderNewChats";
  /** Chat folder identifier */
  chat_folder_id: number;
}) => Obj.Chats;

/**
 * Process new chats added to a shareable chat folder by its owner
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1process_chat_folder_new_chats.html
 */
export type ProcessChatFolderNewChats = (args: {
  "@type": "processChatFolderNewChats";
  /** Chat folder identifier */
  chat_folder_id: number;
  /** Identifiers of the new chats, which are added to the chat folder. The chats are automatically joined if they aren't joined yet */
  added_chat_ids: number[];
}) => Obj.Ok;

/**
 * Returns settings for automatic moving of chats to and from the Archive chat lists
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_archive_chat_list_settings.html
 */
export type GetArchiveChatListSettings = (args: {
  "@type": "getArchiveChatListSettings";
}) => Obj.ArchiveChatListSettings;

/**
 * Changes settings for automatic moving of chats to and from the Archive chat lists
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_archive_chat_list_settings.html
 */
export type SetArchiveChatListSettings = (args: {
  "@type": "setArchiveChatListSettings";
  /** New settings */
  settings: Obj.ArchiveChatListSettings;
}) => Obj.Ok;

/**
 * Changes the chat title. Supported only for basic groups, supergroups and channels. Requires can_change_info member right
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_chat_title.html
 */
export type SetChatTitle = (args: {
  "@type": "setChatTitle";
  /** Chat identifier */
  chat_id: number;
  /** New title of the chat; 1-128 characters */
  title: string;
}) => Obj.Ok;

/**
 * Changes the photo of a chat. Supported only for basic groups, supergroups and channels. Requires can_change_info member right
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_chat_photo.html
 */
export type SetChatPhoto = (args: {
  "@type": "setChatPhoto";
  /** Chat identifier */
  chat_id: number;
  /** New chat photo; pass null to delete the chat photo */
  photo?: Obj.InputChatPhoto;
}) => Obj.Ok;

/**
 * Changes accent color and background custom emoji of a channel chat. Requires can_change_info administrator right
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_chat_accent_color.html
 */
export type SetChatAccentColor = (args: {
  "@type": "setChatAccentColor";
  /** Chat identifier */
  chat_id: number;
  /** Identifier of the accent color to use. The chat must have at least accentColor.min_channel_chat_boost_level boost level to pass the corresponding color */
  accent_color_id: number;
  /** Identifier of a custom emoji to be shown on the reply header and link preview background; 0 if none. Use chatBoostLevelFeatures.can_set_background_custom_emoji to check whether a custom emoji can be set */
  background_custom_emoji_id: string;
}) => Obj.Ok;

/**
 * Changes accent color and background custom emoji for profile of a supergroup or channel chat. Requires can_change_info administrator right
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_chat_profile_accent_color.html
 */
export type SetChatProfileAccentColor = (args: {
  "@type": "setChatProfileAccentColor";
  /** Chat identifier */
  chat_id: number;
  /** Identifier of the accent color to use for profile; pass -1 if none. The chat must have at least profileAccentColor.min_supergroup_chat_boost_level for supergroups or profileAccentColor.min_channel_chat_boost_level for channels boost level to pass the corresponding color */
  profile_accent_color_id: number;
  /** Identifier of a custom emoji to be shown on the chat's profile photo background; 0 if none. Use chatBoostLevelFeatures.can_set_profile_background_custom_emoji to check whether a custom emoji can be set */
  profile_background_custom_emoji_id: string;
}) => Obj.Ok;

/**
 * Changes the message auto-delete or self-destruct (for secret chats) time in a chat. Requires change_info administrator right in basic groups, supergroups and channels. Message auto-delete time can't be changed in a chat with the current user (Saved Messages) and the chat 777000 (Telegram).
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_chat_message_auto_delete_time.html
 */
export type SetChatMessageAutoDeleteTime = (args: {
  "@type": "setChatMessageAutoDeleteTime";
  /** Chat identifier */
  chat_id: number;
  /** New time value, in seconds; unless the chat is secret, it must be from 0 up to 365 * 86400 and be divisible by 86400. If 0, then messages aren't deleted automatically */
  message_auto_delete_time: number;
}) => Obj.Ok;

/**
 * Changes the emoji status of a chat. Use chatBoostLevelFeatures.can_set_emoji_status to check whether an emoji status can be set. Requires can_change_info administrator right
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_chat_emoji_status.html
 */
export type SetChatEmojiStatus = (args: {
  "@type": "setChatEmojiStatus";
  /** Chat identifier */
  chat_id: number;
  /** New emoji status; pass null to remove emoji status */
  emoji_status?: Obj.EmojiStatus;
}) => Obj.Ok;

/**
 * Changes the chat members permissions. Supported only for basic groups and supergroups. Requires can_restrict_members administrator right
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_chat_permissions.html
 */
export type SetChatPermissions = (args: {
  "@type": "setChatPermissions";
  /** Chat identifier */
  chat_id: number;
  /** New non-administrator members permissions in the chat */
  permissions: Obj.ChatPermissions;
}) => Obj.Ok;

/**
 * Sets the background in a specific chat. Supported only in private and secret chats with non-deleted users, and in chats with sufficient boost level and can_change_info administrator right
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_chat_background.html
 */
export type SetChatBackground = (args: {
  "@type": "setChatBackground";
  /** Chat identifier */
  chat_id: number;
  /** The input background to use; pass null to create a new filled or chat theme background */
  background?: Obj.InputBackground;
  /** Background type; pass null to use default background type for the chosen background; backgroundTypeChatTheme isn't supported for private and secret chats. Use chatBoostLevelFeatures.chat_theme_background_count and chatBoostLevelFeatures.can_set_custom_background to check whether the background type can be set in the boosted chat */
  type?: Obj.BackgroundType;
  /** Dimming of the background in dark themes, as a percentage; 0-100. Applied only to Wallpaper and Fill types of background */
  dark_theme_dimming: number;
  /** Pass true to set background only for self; pass false to set background for all chat users. Always false for backgrounds set in boosted chats. Background can be set for both users only by Telegram Premium users and if set background isn't of the type inputBackgroundPrevious */
  only_for_self: boolean;
}) => Obj.Ok;

/**
 * Deletes background in a specific chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1delete_chat_background.html
 */
export type DeleteChatBackground = (args: {
  "@type": "deleteChatBackground";
  /** Chat identifier */
  chat_id: number;
  /** Pass true to restore previously set background. Can be used only in private and secret chats with non-deleted users if userFullInfo.set_chat_background == true. Supposed to be used from messageChatSetBackground messages with the currently set background that was set for both sides by the other user */
  restore_previous: boolean;
}) => Obj.Ok;

/**
 * Changes the chat theme. Supported only in private and secret chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_chat_theme.html
 */
export type SetChatTheme = (args: {
  "@type": "setChatTheme";
  /** Chat identifier */
  chat_id: number;
  /** Name of the new chat theme; pass an empty string to return the default theme */
  theme_name: string;
}) => Obj.Ok;

/**
 * Changes the draft message in a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_chat_draft_message.html
 */
export type SetChatDraftMessage = (args: {
  "@type": "setChatDraftMessage";
  /** Chat identifier */
  chat_id: number;
  /** If not 0, the message thread identifier in which the draft was changed */
  message_thread_id: number;
  /** New draft message; pass null to remove the draft. All files in draft message content must be of the type inputFileLocal. Media thumbnails and captions are ignored */
  draft_message?: Obj.DraftMessage;
}) => Obj.Ok;

/**
 * Changes the notification settings of a chat. Notification settings of a chat with the current user (Saved Messages) can't be changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_chat_notification_settings.html
 */
export type SetChatNotificationSettings = (args: {
  "@type": "setChatNotificationSettings";
  /** Chat identifier */
  chat_id: number;
  /** New notification settings for the chat. If the chat is muted for more than 366 days, it is considered to be muted forever */
  notification_settings: Obj.ChatNotificationSettings;
}) => Obj.Ok;

/**
 * Changes the ability of users to save, forward, or copy chat content. Supported only for basic groups, supergroups and channels. Requires owner privileges
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_chat_has_protected_content.html
 */
export type ToggleChatHasProtectedContent = (args: {
  "@type": "toggleChatHasProtectedContent";
  /** Chat identifier */
  chat_id: number;
  /** New value of has_protected_content */
  has_protected_content: boolean;
}) => Obj.Ok;

/**
 * Changes the view_as_topics setting of a forum chat or Saved Messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_chat_view_as_topics.html
 */
export type ToggleChatViewAsTopics = (args: {
  "@type": "toggleChatViewAsTopics";
  /** Chat identifier */
  chat_id: number;
  /** New value of view_as_topics */
  view_as_topics: boolean;
}) => Obj.Ok;

/**
 * Changes the translatable state of a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_chat_is_translatable.html
 */
export type ToggleChatIsTranslatable = (args: {
  "@type": "toggleChatIsTranslatable";
  /** Chat identifier */
  chat_id: number;
  /** New value of is_translatable */
  is_translatable: boolean;
}) => Obj.Ok;

/**
 * Changes the marked as unread state of a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_chat_is_marked_as_unread.html
 */
export type ToggleChatIsMarkedAsUnread = (args: {
  "@type": "toggleChatIsMarkedAsUnread";
  /** Chat identifier */
  chat_id: number;
  /** New value of is_marked_as_unread */
  is_marked_as_unread: boolean;
}) => Obj.Ok;

/**
 * Changes the value of the default disable_notification parameter, used when a message is sent to a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_chat_default_disable_notification.html
 */
export type ToggleChatDefaultDisableNotification = (args: {
  "@type": "toggleChatDefaultDisableNotification";
  /** Chat identifier */
  chat_id: number;
  /** New value of default_disable_notification */
  default_disable_notification: boolean;
}) => Obj.Ok;

/**
 * Changes reactions, available in a chat. Available for basic groups, supergroups, and channels. Requires can_change_info member right
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_chat_available_reactions.html
 */
export type SetChatAvailableReactions = (args: {
  "@type": "setChatAvailableReactions";
  /** Identifier of the chat */
  chat_id: number;
  /** Reactions available in the chat. All explicitly specified emoji reactions must be active. In channel chats up to the chat's boost level custom emoji reactions can be explicitly specified */
  available_reactions: Obj.ChatAvailableReactions;
}) => Obj.Ok;

/**
 * Changes application-specific data associated with a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_chat_client_data.html
 */
export type SetChatClientData = (args: {
  "@type": "setChatClientData";
  /** Chat identifier */
  chat_id: number;
  /** New value of client_data */
  client_data: string;
}) => Obj.Ok;

/**
 * Changes information about a chat. Available for basic groups, supergroups, and channels. Requires can_change_info member right
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_chat_description.html
 */
export type SetChatDescription = (args: {
  "@type": "setChatDescription";
  /** Identifier of the chat */
  chat_id: number;
  /** New chat description; 0-255 characters */
  description: string;
}) => Obj.Ok;

/**
 * Changes the discussion group of a channel chat; requires can_change_info administrator right in the channel if it is specified
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_chat_discussion_group.html
 */
export type SetChatDiscussionGroup = (args: {
  "@type": "setChatDiscussionGroup";
  /** Identifier of the channel chat. Pass 0 to remove a link from the supergroup passed in the second argument to a linked channel chat (requires can_pin_messages member right in the supergroup) */
  chat_id: number;
  /** Identifier of a new channel's discussion group. Use 0 to remove the discussion group. Use the method getSuitableDiscussionChats to find all suitable groups. Basic group chats must be first upgraded to supergroup chats. If new chat members don't have access to old messages in the supergroup, then toggleSupergroupIsAllHistoryAvailable must be used first to change that */
  discussion_chat_id: number;
}) => Obj.Ok;

/**
 * Changes direct messages group settings for a channel chat; requires owner privileges in the chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_chat_direct_messages_group.html
 */
export type SetChatDirectMessagesGroup = (args: {
  "@type": "setChatDirectMessagesGroup";
  /** Identifier of the channel chat */
  chat_id: number;
  /** Pass true if the direct messages group is enabled for the channel chat; pass false otherwise */
  is_enabled: boolean;
  /** The new number of Telegram Stars that must be paid for each message that is sent to the direct messages chat unless the sender is an administrator of the channel chat; 0-getOption("paid_message_star_count_max"). The channel will receive getOption("paid_message_earnings_per_mille") Telegram Stars for each 1000 Telegram Stars paid for message sending. Requires supergroupFullInfo.can_enable_paid_messages for positive amounts */
  paid_message_star_count: number;
}) => Obj.Ok;

/**
 * Changes the location of a chat. Available only for some location-based supergroups, use supergroupFullInfo.can_set_location to check whether the method is allowed to use
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_chat_location.html
 */
export type SetChatLocation = (args: {
  "@type": "setChatLocation";
  /** Chat identifier */
  chat_id: number;
  /** New location for the chat; must be valid and not null */
  location: Obj.ChatLocation;
}) => Obj.Ok;

/**
 * Changes the slow mode delay of a chat. Available only for supergroups; requires can_restrict_members right
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_chat_slow_mode_delay.html
 */
export type SetChatSlowModeDelay = (args: {
  "@type": "setChatSlowModeDelay";
  /** Chat identifier */
  chat_id: number;
  /** New slow mode delay for the chat, in seconds; must be one of 0, 10, 30, 60, 300, 900, 3600 */
  slow_mode_delay: number;
}) => Obj.Ok;

/**
 * Pins a message in a chat. A message can be pinned only if messageProperties.can_be_pinned
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1pin_chat_message.html
 */
export type PinChatMessage = (args: {
  "@type": "pinChatMessage";
  /** Identifier of the chat */
  chat_id: number;
  /** Identifier of the new pinned message */
  message_id: number;
  /** Pass true to disable notification about the pinned message. Notifications are always disabled in channels and private chats */
  disable_notification: boolean;
  /** Pass true to pin the message only for self; private chats only */
  only_for_self: boolean;
}) => Obj.Ok;

/**
 * Removes a pinned message from a chat; requires can_pin_messages member right if the chat is a basic group or supergroup, or can_edit_messages administrator right if the chat is a channel
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1unpin_chat_message.html
 */
export type UnpinChatMessage = (args: {
  "@type": "unpinChatMessage";
  /** Identifier of the chat */
  chat_id: number;
  /** Identifier of the removed pinned message */
  message_id: number;
}) => Obj.Ok;

/**
 * Removes all pinned messages from a chat; requires can_pin_messages member right if the chat is a basic group or supergroup, or can_edit_messages administrator right if the chat is a channel
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1unpin_all_chat_messages.html
 */
export type UnpinAllChatMessages = (args: {
  "@type": "unpinAllChatMessages";
  /** Identifier of the chat */
  chat_id: number;
}) => Obj.Ok;

/**
 * Removes all pinned messages from a forum topic; requires can_pin_messages member right in the supergroup
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1unpin_all_message_thread_messages.html
 */
export type UnpinAllMessageThreadMessages = (args: {
  "@type": "unpinAllMessageThreadMessages";
  /** Identifier of the chat */
  chat_id: number;
  /** Message thread identifier in which messages will be unpinned */
  message_thread_id: number;
}) => Obj.Ok;

/**
 * Adds the current user as a new member to a chat. Private and secret chats can't be joined using this method. May return an error with a message "INVITE_REQUEST_SENT" if only a join request was created
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1join_chat.html
 */
export type JoinChat = (args: {
  "@type": "joinChat";
  /** Chat identifier */
  chat_id: number;
}) => Obj.Ok;

/**
 * Removes the current user from chat members. Private and secret chats can't be left using this method
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1leave_chat.html
 */
export type LeaveChat = (args: {
  "@type": "leaveChat";
  /** Chat identifier */
  chat_id: number;
}) => Obj.Ok;

/**
 * Adds a new member to a chat; requires can_invite_users member right. Members can't be added to private or secret chats. Returns information about members that weren't added
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1add_chat_member.html
 */
export type AddChatMember = (args: {
  "@type": "addChatMember";
  /** Chat identifier */
  chat_id: number;
  /** Identifier of the user */
  user_id: number;
  /** The number of earlier messages from the chat to be forwarded to the new member; up to 100. Ignored for supergroups and channels, or if the added user is a bot */
  forward_limit: number;
}) => Obj.FailedToAddMembers;

/**
 * Adds multiple new members to a chat; requires can_invite_users member right. Currently, this method is only available for supergroups and channels. This method can't be used to join a chat. Members can't be added to a channel if it has more than 200 members. Returns information about members that weren't added
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1add_chat_members.html
 */
export type AddChatMembers = (args: {
  "@type": "addChatMembers";
  /** Chat identifier */
  chat_id: number;
  /** Identifiers of the users to be added to the chat. The maximum number of added users is 20 for supergroups and 100 for channels */
  user_ids: number[];
}) => Obj.FailedToAddMembers;

/**
 * Changes the status of a chat member; requires can_invite_users member right to add a chat member, can_promote_members administrator right to change administrator rights of the member, and can_restrict_members administrator right to change restrictions of a user. This function is currently not suitable for transferring chat ownership; use transferChatOwnership instead. Use addChatMember or banChatMember if some additional parameters needs to be passed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_chat_member_status.html
 */
export type SetChatMemberStatus = (args: {
  "@type": "setChatMemberStatus";
  /** Chat identifier */
  chat_id: number;
  /** Member identifier. Chats can be only banned and unbanned in supergroups and channels */
  member_id: Obj.MessageSender;
  /** The new status of the member in the chat */
  status: Obj.ChatMemberStatus;
}) => Obj.Ok;

/**
 * Bans a member in a chat; requires can_restrict_members administrator right. Members can't be banned in private or secret chats. In supergroups and channels, the user will not be able to return to the group on their own using invite links, etc., unless unbanned first
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1ban_chat_member.html
 */
export type BanChatMember = (args: {
  "@type": "banChatMember";
  /** Chat identifier */
  chat_id: number;
  /** Member identifier */
  member_id: Obj.MessageSender;
  /** Point in time (Unix timestamp) when the user will be unbanned; 0 if never. If the user is banned for more than 366 days or for less than 30 seconds from the current time, the user is considered to be banned forever. Ignored in basic groups and if a chat is banned */
  banned_until_date: number;
  /** Pass true to delete all messages in the chat for the user that is being removed. Always true for supergroups and channels */
  revoke_messages: boolean;
}) => Obj.Ok;

/**
 * Checks whether the current session can be used to transfer a chat ownership to another user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1can_transfer_ownership.html
 */
export type CanTransferOwnership = (args: {
  "@type": "canTransferOwnership";
}) => Obj.CanTransferOwnershipResult;

/**
 * Changes the owner of a chat; requires owner privileges in the chat. Use the method canTransferOwnership to check whether the ownership can be transferred from the current session. Available only for supergroups and channel chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1transfer_chat_ownership.html
 */
export type TransferChatOwnership = (args: {
  "@type": "transferChatOwnership";
  /** Chat identifier */
  chat_id: number;
  /** Identifier of the user to which transfer the ownership. The ownership can't be transferred to a bot or to a deleted user */
  user_id: number;
  /** The 2-step verification password of the current user */
  password: string;
}) => Obj.Ok;

/**
 * Returns information about a single member of a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_member.html
 */
export type GetChatMember = (args: {
  "@type": "getChatMember";
  /** Chat identifier */
  chat_id: number;
  /** Member identifier */
  member_id: Obj.MessageSender;
}) => Obj.ChatMember;

/**
 * Searches for a specified query in the first name, last name and usernames of the members of a specified chat. Requires administrator rights if the chat is a channel
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_chat_members.html
 */
export type SearchChatMembers = (args: {
  "@type": "searchChatMembers";
  /** Chat identifier */
  chat_id: number;
  /** Query to search for */
  query: string;
  /** The maximum number of users to be returned; up to 200 */
  limit: number;
  /** The type of users to search for; pass null to search among all chat members */
  filter?: Obj.ChatMembersFilter;
}) => Obj.ChatMembers;

/**
 * Returns a list of administrators of the chat with their custom titles
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_administrators.html
 */
export type GetChatAdministrators = (args: {
  "@type": "getChatAdministrators";
  /** Chat identifier */
  chat_id: number;
}) => Obj.ChatAdministrators;

/**
 * Clears message drafts in all chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1clear_all_draft_messages.html
 */
export type ClearAllDraftMessages = (args: {
  "@type": "clearAllDraftMessages";
  /** Pass true to keep local message drafts in secret chats */
  exclude_secret_chats: boolean;
}) => Obj.Ok;

/**
 * Returns saved notification sound by its identifier. Returns a 404 error if there is no saved notification sound with the specified identifier
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_saved_notification_sound.html
 */
export type GetSavedNotificationSound = (args: {
  "@type": "getSavedNotificationSound";
  /** Identifier of the notification sound */
  notification_sound_id: string;
}) => Obj.NotificationSounds;

/**
 * Returns the list of saved notification sounds. If a sound isn't in the list, then default sound needs to be used
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_saved_notification_sounds.html
 */
export type GetSavedNotificationSounds = (args: {
  "@type": "getSavedNotificationSounds";
}) => Obj.NotificationSounds;

/**
 * Adds a new notification sound to the list of saved notification sounds. The new notification sound is added to the top of the list. If it is already in the list, its position isn't changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1add_saved_notification_sound.html
 */
export type AddSavedNotificationSound = (args: {
  "@type": "addSavedNotificationSound";
  /** Notification sound file to add */
  sound: Obj.InputFile;
}) => Obj.NotificationSound;

/**
 * Removes a notification sound from the list of saved notification sounds
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1remove_saved_notification_sound.html
 */
export type RemoveSavedNotificationSound = (args: {
  "@type": "removeSavedNotificationSound";
  /** Identifier of the notification sound */
  notification_sound_id: string;
}) => Obj.Ok;

/**
 * Returns the list of chats with non-default notification settings for new messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_notification_settings_exceptions.html
 */
export type GetChatNotificationSettingsExceptions = (args: {
  "@type": "getChatNotificationSettingsExceptions";
  /** If specified, only chats from the scope will be returned; pass null to return chats from all scopes */
  scope?: Obj.NotificationSettingsScope;
  /** Pass true to include in the response chats with only non-default sound */
  compare_sound: boolean;
}) => Obj.Chats;

/**
 * Returns the notification settings for chats of a given type
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_scope_notification_settings.html
 */
export type GetScopeNotificationSettings = (args: {
  "@type": "getScopeNotificationSettings";
  /** Types of chats for which to return the notification settings information */
  scope: Obj.NotificationSettingsScope;
}) => Obj.ScopeNotificationSettings;

/**
 * Changes notification settings for chats of a given type
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_scope_notification_settings.html
 */
export type SetScopeNotificationSettings = (args: {
  "@type": "setScopeNotificationSettings";
  /** Types of chats for which to change the notification settings */
  scope: Obj.NotificationSettingsScope;
  /** The new notification settings for the given scope */
  notification_settings: Obj.ScopeNotificationSettings;
}) => Obj.Ok;

/**
 * Changes notification settings for reactions
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_reaction_notification_settings.html
 */
export type SetReactionNotificationSettings = (args: {
  "@type": "setReactionNotificationSettings";
  /** The new notification settings for reactions */
  notification_settings: Obj.ReactionNotificationSettings;
}) => Obj.Ok;

/**
 * Resets all chat and scope notification settings to their default values. By default, all chats are unmuted and message previews are shown
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1reset_all_notification_settings.html
 */
export type ResetAllNotificationSettings = (args: {
  "@type": "resetAllNotificationSettings";
}) => Obj.Ok;

/**
 * Changes the pinned state of a chat. There can be up to getOption("pinned_chat_count_max")/getOption("pinned_archived_chat_count_max") pinned non-secret chats and the same number of secret chats in the main/archive chat list. The limit can be increased with Telegram Premium
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_chat_is_pinned.html
 */
export type ToggleChatIsPinned = (args: {
  "@type": "toggleChatIsPinned";
  /** Chat list in which to change the pinned state of the chat */
  chat_list: Obj.ChatList;
  /** Chat identifier */
  chat_id: number;
  /** Pass true to pin the chat; pass false to unpin it */
  is_pinned: boolean;
}) => Obj.Ok;

/**
 * Changes the order of pinned chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_pinned_chats.html
 */
export type SetPinnedChats = (args: {
  "@type": "setPinnedChats";
  /** Chat list in which to change the order of pinned chats */
  chat_list: Obj.ChatList;
  /** The new list of pinned chats */
  chat_ids: number[];
}) => Obj.Ok;

/**
 * Traverse all chats in a chat list and marks all messages in the chats as read
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1read_chat_list.html
 */
export type ReadChatList = (args: {
  "@type": "readChatList";
  /** Chat list in which to mark all chats as read */
  chat_list: Obj.ChatList;
}) => Obj.Ok;

/**
 * Returns the current weather in the given location
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_current_weather.html
 */
export type GetCurrentWeather = (args: {
  "@type": "getCurrentWeather";
  /** The location */
  location: Obj.Location;
}) => Obj.CurrentWeather;

/**
 * Returns a story
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_story.html
 */
export type GetStory = (args: {
  "@type": "getStory";
  /** Identifier of the chat that posted the story */
  story_poster_chat_id: number;
  /** Story identifier */
  story_id: number;
  /** Pass true to get only locally available information without sending network requests */
  only_local: boolean;
}) => Obj.Story;

/**
 * Returns supergroup and channel chats in which the current user has the right to post stories. The chats must be rechecked with canPostStory before actually trying to post a story there
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chats_to_post_stories.html
 */
export type GetChatsToPostStories = (args: {
  "@type": "getChatsToPostStories";
}) => Obj.Chats;

/**
 * Checks whether the current user can post a story on behalf of a chat; requires can_post_stories right for supergroup and channel chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1can_post_story.html
 */
export type CanPostStory = (args: {
  "@type": "canPostStory";
  /** Chat identifier. Pass Saved Messages chat identifier when posting a story on behalf of the current user */
  chat_id: number;
}) => Obj.CanPostStoryResult;

/**
 * Posts a new story on behalf of a chat; requires can_post_stories right for supergroup and channel chats. Returns a temporary story
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1post_story.html
 */
export type PostStory = (args: {
  "@type": "postStory";
  /** Identifier of the chat that will post the story. Pass Saved Messages chat identifier when posting a story on behalf of the current user */
  chat_id: number;
  /** Content of the story */
  content: Obj.InputStoryContent;
  /** Clickable rectangle areas to be shown on the story media; pass null if none */
  areas?: Obj.InputStoryAreas;
  /** Story caption; pass null to use an empty caption; 0-getOption("story_caption_length_max") characters; can have entities only if getOption("can_use_text_entities_in_story_caption") */
  caption?: Obj.FormattedText;
  /** The privacy settings for the story; ignored for stories posted on behalf of supergroup and channel chats */
  privacy_settings: Obj.StoryPrivacySettings;
  /** Period after which the story is moved to archive, in seconds; must be one of 6 * 3600, 12 * 3600, 86400, or 2 * 86400 for Telegram Premium users, and 86400 otherwise */
  active_period: number;
  /** Full identifier of the original story, which content was used to create the story; pass null if the story isn't repost of another story */
  from_story_full_id?: Obj.StoryFullId;
  /** Pass true to keep the story accessible after expiration */
  is_posted_to_chat_page: boolean;
  /** Pass true if the content of the story must be protected from forwarding and screenshotting */
  protect_content: boolean;
}) => Obj.Story;

/**
 * Changes content and caption of a story. Can be called only if story.can_be_edited == true
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1edit_story.html
 */
export type EditStory = (args: {
  "@type": "editStory";
  /** Identifier of the chat that posted the story */
  story_poster_chat_id: number;
  /** Identifier of the story to edit */
  story_id: number;
  /** New content of the story; pass null to keep the current content */
  content?: Obj.InputStoryContent;
  /** New clickable rectangle areas to be shown on the story media; pass null to keep the current areas. Areas can't be edited if story content isn't changed */
  areas?: Obj.InputStoryAreas;
  /** New story caption; pass null to keep the current caption */
  caption?: Obj.FormattedText;
}) => Obj.Ok;

/**
 * Changes cover of a video story. Can be called only if story.can_be_edited == true and the story isn't being edited now
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1edit_story_cover.html
 */
export type EditStoryCover = (args: {
  "@type": "editStoryCover";
  /** Identifier of the chat that posted the story */
  story_poster_chat_id: number;
  /** Identifier of the story to edit */
  story_id: number;
  /** New timestamp of the frame, which will be used as video thumbnail */
  cover_frame_timestamp: number;
}) => Obj.Ok;

/**
 * Changes privacy settings of a story. The method can be called only for stories posted on behalf of the current user and if story.can_be_edited == true
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_story_privacy_settings.html
 */
export type SetStoryPrivacySettings = (args: {
  "@type": "setStoryPrivacySettings";
  /** Identifier of the story */
  story_id: number;
  /** The new privacy settings for the story */
  privacy_settings: Obj.StoryPrivacySettings;
}) => Obj.Ok;

/**
 * Toggles whether a story is accessible after expiration. Can be called only if story.can_toggle_is_posted_to_chat_page == true
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_story_is_posted_to_chat_page.html
 */
export type ToggleStoryIsPostedToChatPage = (args: {
  "@type": "toggleStoryIsPostedToChatPage";
  /** Identifier of the chat that posted the story */
  story_poster_chat_id: number;
  /** Identifier of the story */
  story_id: number;
  /** Pass true to make the story accessible after expiration; pass false to make it private */
  is_posted_to_chat_page: boolean;
}) => Obj.Ok;

/**
 * Deletes a previously posted story. Can be called only if story.can_be_deleted == true
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1delete_story.html
 */
export type DeleteStory = (args: {
  "@type": "deleteStory";
  /** Identifier of the chat that posted the story */
  story_poster_chat_id: number;
  /** Identifier of the story to delete */
  story_id: number;
}) => Obj.Ok;

/**
 * Returns the list of chats with non-default notification settings for stories
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_story_notification_settings_exceptions.html
 */
export type GetStoryNotificationSettingsExceptions = (args: {
  "@type": "getStoryNotificationSettingsExceptions";
}) => Obj.Chats;

/**
 * Loads more active stories from a story list. The loaded stories will be sent through updates. Active stories are sorted by the pair (active_stories.order, active_stories.story_poster_chat_id) in descending order. Returns a 404 error if all active stories have been loaded
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1load_active_stories.html
 */
export type LoadActiveStories = (args: {
  "@type": "loadActiveStories";
  /** The story list in which to load active stories */
  story_list: Obj.StoryList;
}) => Obj.Ok;

/**
 * Changes story list in which stories from the chat are shown
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_chat_active_stories_list.html
 */
export type SetChatActiveStoriesList = (args: {
  "@type": "setChatActiveStoriesList";
  /** Identifier of the chat that posted stories */
  chat_id: number;
  /** New list for active stories posted by the chat */
  story_list: Obj.StoryList;
}) => Obj.Ok;

/**
 * Returns the list of active stories posted by the given chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_active_stories.html
 */
export type GetChatActiveStories = (args: {
  "@type": "getChatActiveStories";
  /** Chat identifier */
  chat_id: number;
}) => Obj.ChatActiveStories;

/**
 * Returns the list of stories that posted by the given chat to its chat page. If from_story_id == 0, then pinned stories are returned first. Then, stories are returned in reverse chronological order (i.e., in order of decreasing story_id). For optimal performance, the number of returned stories is chosen by TDLib
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_posted_to_chat_page_stories.html
 */
export type GetChatPostedToChatPageStories = (args: {
  "@type": "getChatPostedToChatPageStories";
  /** Chat identifier */
  chat_id: number;
  /** Identifier of the story starting from which stories must be returned; use 0 to get results from pinned and the newest story */
  from_story_id: number;
  /** The maximum number of stories to be returned. For optimal performance, the number of returned stories is chosen by TDLib and can be smaller than the specified limit */
  limit: number;
}) => Obj.Stories;

/**
 * Returns the list of all stories posted by the given chat; requires can_edit_stories right in the chat. The stories are returned in reverse chronological order (i.e., in order of decreasing story_id). For optimal performance, the number of returned stories is chosen by TDLib
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_archived_stories.html
 */
export type GetChatArchivedStories = (args: {
  "@type": "getChatArchivedStories";
  /** Chat identifier */
  chat_id: number;
  /** Identifier of the story starting from which stories must be returned; use 0 to get results from the last story */
  from_story_id: number;
  /** The maximum number of stories to be returned. For optimal performance, the number of returned stories is chosen by TDLib and can be smaller than the specified limit */
  limit: number;
}) => Obj.Stories;

/**
 * Changes the list of pinned stories on a chat page; requires can_edit_stories right in the chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_chat_pinned_stories.html
 */
export type SetChatPinnedStories = (args: {
  "@type": "setChatPinnedStories";
  /** Identifier of the chat that posted the stories */
  chat_id: number;
  /** New list of pinned stories. All stories must be posted to the chat page first. There can be up to getOption("pinned_story_count_max") pinned stories on a chat page */
  story_ids: number[];
}) => Obj.Ok;

/**
 * Informs TDLib that a story is opened and is being viewed by the user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1open_story.html
 */
export type OpenStory = (args: {
  "@type": "openStory";
  /** The identifier of the chat that posted the opened story */
  story_poster_chat_id: number;
  /** The identifier of the story */
  story_id: number;
}) => Obj.Ok;

/**
 * Informs TDLib that a story is closed by the user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1close_story.html
 */
export type CloseStory = (args: {
  "@type": "closeStory";
  /** The identifier of the poster of the story to close */
  story_poster_chat_id: number;
  /** The identifier of the story */
  story_id: number;
}) => Obj.Ok;

/**
 * Returns reactions, which can be chosen for a story
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_story_available_reactions.html
 */
export type GetStoryAvailableReactions = (args: {
  "@type": "getStoryAvailableReactions";
  /** Number of reaction per row, 5-25 */
  row_size: number;
}) => Obj.AvailableReactions;

/**
 * Changes chosen reaction on a story that has already been sent
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_story_reaction.html
 */
export type SetStoryReaction = (args: {
  "@type": "setStoryReaction";
  /** The identifier of the poster of the story */
  story_poster_chat_id: number;
  /** The identifier of the story */
  story_id: number;
  /** Type of the reaction to set; pass null to remove the reaction. Custom emoji reactions can be used only by Telegram Premium users. Paid reactions can't be set */
  reaction_type?: Obj.ReactionType;
  /** Pass true if the reaction needs to be added to recent reactions */
  update_recent_reactions: boolean;
}) => Obj.Ok;

/**
 * Returns interactions with a story. The method can be called only for stories posted on behalf of the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_story_interactions.html
 */
export type GetStoryInteractions = (args: {
  "@type": "getStoryInteractions";
  /** Story identifier */
  story_id: number;
  /** Query to search for in names, usernames and titles; may be empty to get all relevant interactions */
  query?: string;
  /** Pass true to get only interactions by contacts; pass false to get all relevant interactions */
  only_contacts: boolean;
  /** Pass true to get forwards and reposts first, then reactions, then other views; pass false to get interactions sorted just by interaction date */
  prefer_forwards: boolean;
  /** Pass true to get interactions with reaction first; pass false to get interactions sorted just by interaction date. Ignored if prefer_forwards == true */
  prefer_with_reaction: boolean;
  /** Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results */
  offset: string;
  /** The maximum number of story interactions to return */
  limit: number;
}) => Obj.StoryInteractions;

/**
 * Returns interactions with a story posted in a chat. Can be used only if story is posted on behalf of a chat and the user is an administrator in the chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_story_interactions.html
 */
export type GetChatStoryInteractions = (args: {
  "@type": "getChatStoryInteractions";
  /** The identifier of the poster of the story */
  story_poster_chat_id: number;
  /** Story identifier */
  story_id: number;
  /** Pass the default heart reaction or a suggested reaction type to receive only interactions with the specified reaction type; pass null to receive all interactions; reactionTypePaid isn't supported */
  reaction_type?: Obj.ReactionType;
  /** Pass true to get forwards and reposts first, then reactions, then other views; pass false to get interactions sorted just by interaction date */
  prefer_forwards: boolean;
  /** Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results */
  offset: string;
  /** The maximum number of story interactions to return */
  limit: number;
}) => Obj.StoryInteractions;

/**
 * Reports a story to the Telegram moderators
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1report_story.html
 */
export type ReportStory = (args: {
  "@type": "reportStory";
  /** The identifier of the poster of the story to report */
  story_poster_chat_id: number;
  /** The identifier of the story to report */
  story_id: number;
  /** Option identifier chosen by the user; leave empty for the initial request */
  option_id: string;
  /** Additional report details; 0-1024 characters; leave empty for the initial request */
  text: string;
}) => Obj.ReportStoryResult;

/**
 * Activates stealth mode for stories, which hides all views of stories from the current user in the last "story_stealth_mode_past_period" seconds and for the next "story_stealth_mode_future_period" seconds; for Telegram Premium users only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1activate_story_stealth_mode.html
 */
export type ActivateStoryStealthMode = (args: {
  "@type": "activateStoryStealthMode";
}) => Obj.Ok;

/**
 * Returns forwards of a story as a message to public chats and reposts by public channels. Can be used only if the story is posted on behalf of the current user or story.can_get_statistics == true. For optimal performance, the number of returned messages and stories is chosen by TDLib
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_story_public_forwards.html
 */
export type GetStoryPublicForwards = (args: {
  "@type": "getStoryPublicForwards";
  /** The identifier of the poster of the story */
  story_poster_chat_id: number;
  /** The identifier of the story */
  story_id: number;
  /** Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results */
  offset: string;
  /** The maximum number of messages and stories to be returned; must be positive and can't be greater than 100. For optimal performance, the number of returned objects is chosen by TDLib and can be smaller than the specified limit */
  limit: number;
}) => Obj.PublicForwards;

/**
 * Returns the list of features available on the specific chat boost level. This is an offline method
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_boost_level_features.html
 */
export type GetChatBoostLevelFeatures = (args: {
  "@type": "getChatBoostLevelFeatures";
  /** Pass true to get the list of features for channels; pass false to get the list of features for supergroups */
  is_channel: boolean;
  /** Chat boost level */
  level: number;
}) => Obj.ChatBoostLevelFeatures;

/**
 * Returns the list of features available for different chat boost levels. This is an offline method
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_boost_features.html
 */
export type GetChatBoostFeatures = (args: {
  "@type": "getChatBoostFeatures";
  /** Pass true to get the list of features for channels; pass false to get the list of features for supergroups */
  is_channel: boolean;
}) => Obj.ChatBoostFeatures;

/**
 * Returns the list of available chat boost slots for the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_available_chat_boost_slots.html
 */
export type GetAvailableChatBoostSlots = (args: {
  "@type": "getAvailableChatBoostSlots";
}) => Obj.ChatBoostSlots;

/**
 * Returns the current boost status for a supergroup or a channel chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_boost_status.html
 */
export type GetChatBoostStatus = (args: {
  "@type": "getChatBoostStatus";
  /** Identifier of the chat */
  chat_id: number;
}) => Obj.ChatBoostStatus;

/**
 * Boosts a chat and returns the list of available chat boost slots for the current user after the boost
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1boost_chat.html
 */
export type BoostChat = (args: {
  "@type": "boostChat";
  /** Identifier of the chat */
  chat_id: number;
  /** Identifiers of boost slots of the current user from which to apply boosts to the chat */
  slot_ids: number[];
}) => Obj.ChatBoostSlots;

/**
 * Returns an HTTPS link to boost the specified supergroup or channel chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_boost_link.html
 */
export type GetChatBoostLink = (args: {
  "@type": "getChatBoostLink";
  /** Identifier of the chat */
  chat_id: number;
}) => Obj.ChatBoostLink;

/**
 * Returns information about a link to boost a chat. Can be called for any internal link of the type internalLinkTypeChatBoost
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_boost_link_info.html
 */
export type GetChatBoostLinkInfo = (args: {
  "@type": "getChatBoostLinkInfo";
  /** The link to boost a chat */
  url: string;
}) => Obj.ChatBoostLinkInfo;

/**
 * Returns the list of boosts applied to a chat; requires administrator rights in the chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_boosts.html
 */
export type GetChatBoosts = (args: {
  "@type": "getChatBoosts";
  /** Identifier of the chat */
  chat_id: number;
  /** Pass true to receive only boosts received from gift codes and giveaways created by the chat */
  only_gift_codes: boolean;
  /** Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results */
  offset: string;
  /** The maximum number of boosts to be returned; up to 100. For optimal performance, the number of returned boosts can be smaller than the specified limit */
  limit: number;
}) => Obj.FoundChatBoosts;

/**
 * Returns the list of boosts applied to a chat by a given user; requires administrator rights in the chat; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_user_chat_boosts.html
 */
export type GetUserChatBoosts = (args: {
  "@type": "getUserChatBoosts";
  /** Identifier of the chat */
  chat_id: number;
  /** Identifier of the user */
  user_id: number;
}) => Obj.FoundChatBoosts;

/**
 * Returns information about a bot that can be added to attachment or side menu
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_attachment_menu_bot.html
 */
export type GetAttachmentMenuBot = (args: {
  "@type": "getAttachmentMenuBot";
  /** Bot's user identifier */
  bot_user_id: number;
}) => Obj.AttachmentMenuBot;

/**
 * Adds or removes a bot to attachment and side menu. Bot can be added to the menu, only if userTypeBot.can_be_added_to_attachment_menu == true
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_bot_is_added_to_attachment_menu.html
 */
export type ToggleBotIsAddedToAttachmentMenu = (args: {
  "@type": "toggleBotIsAddedToAttachmentMenu";
  /** Bot's user identifier */
  bot_user_id: number;
  /** Pass true to add the bot to attachment menu; pass false to remove the bot from attachment menu */
  is_added: boolean;
  /** Pass true if the current user allowed the bot to send them messages. Ignored if is_added is false */
  allow_write_access: boolean;
}) => Obj.Ok;

/**
 * Returns up to 8 emoji statuses, which must be shown right after the default Premium Badge in the emoji status list for self status
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_themed_emoji_statuses.html
 */
export type GetThemedEmojiStatuses = (args: {
  "@type": "getThemedEmojiStatuses";
}) => Obj.EmojiStatusCustomEmojis;

/**
 * Returns recent emoji statuses for self status
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_recent_emoji_statuses.html
 */
export type GetRecentEmojiStatuses = (args: {
  "@type": "getRecentEmojiStatuses";
}) => Obj.EmojiStatuses;

/**
 * Returns available upgraded gift emoji statuses for self status
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_upgraded_gift_emoji_statuses.html
 */
export type GetUpgradedGiftEmojiStatuses = (args: {
  "@type": "getUpgradedGiftEmojiStatuses";
}) => Obj.EmojiStatuses;

/**
 * Returns default emoji statuses for self status
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_default_emoji_statuses.html
 */
export type GetDefaultEmojiStatuses = (args: {
  "@type": "getDefaultEmojiStatuses";
}) => Obj.EmojiStatusCustomEmojis;

/**
 * Clears the list of recently used emoji statuses for self status
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1clear_recent_emoji_statuses.html
 */
export type ClearRecentEmojiStatuses = (args: {
  "@type": "clearRecentEmojiStatuses";
}) => Obj.Ok;

/**
 * Returns up to 8 emoji statuses, which must be shown in the emoji status list for chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_themed_chat_emoji_statuses.html
 */
export type GetThemedChatEmojiStatuses = (args: {
  "@type": "getThemedChatEmojiStatuses";
}) => Obj.EmojiStatusCustomEmojis;

/**
 * Returns default emoji statuses for chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_default_chat_emoji_statuses.html
 */
export type GetDefaultChatEmojiStatuses = (args: {
  "@type": "getDefaultChatEmojiStatuses";
}) => Obj.EmojiStatusCustomEmojis;

/**
 * Returns the list of emoji statuses, which can't be used as chat emoji status, even they are from a sticker set with is_allowed_as_chat_emoji_status == true
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_disallowed_chat_emoji_statuses.html
 */
export type GetDisallowedChatEmojiStatuses = (args: {
  "@type": "getDisallowedChatEmojiStatuses";
}) => Obj.EmojiStatusCustomEmojis;

/**
 * Downloads a file from the cloud. Download progress and completion of the download will be notified through updateFile updates
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1download_file.html
 */
export type DownloadFile = (args: {
  "@type": "downloadFile";
  /** Identifier of the file to download */
  file_id: number;
  /** Priority of the download (1-32). The higher the priority, the earlier the file will be downloaded. If the priorities of two files are equal, then the last one for which downloadFile/addFileToDownloads was called will be downloaded first */
  priority: number;
  /** The starting position from which the file needs to be downloaded */
  offset: number;
  /** Number of bytes which need to be downloaded starting from the "offset" position before the download will automatically be canceled; use 0 to download without a limit */
  limit: number;
  /** Pass true to return response only after the file download has succeeded, has failed, has been canceled, or a new downloadFile request with different offset/limit parameters was sent; pass false to return file state immediately, just after the download has been started */
  synchronous: boolean;
}) => Obj.File;

/**
 * Returns file downloaded prefix size from a given offset, in bytes
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_file_downloaded_prefix_size.html
 */
export type GetFileDownloadedPrefixSize = (args: {
  "@type": "getFileDownloadedPrefixSize";
  /** Identifier of the file */
  file_id: number;
  /** Offset from which downloaded prefix size needs to be calculated */
  offset: number;
}) => Obj.FileDownloadedPrefixSize;

/**
 * Stops the downloading of a file. If a file has already been downloaded, does nothing
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1cancel_download_file.html
 */
export type CancelDownloadFile = (args: {
  "@type": "cancelDownloadFile";
  /** Identifier of a file to stop downloading */
  file_id: number;
  /** Pass true to stop downloading only if it hasn't been started, i.e. request hasn't been sent to server */
  only_if_pending: boolean;
}) => Obj.Ok;

/**
 * Returns suggested name for saving a file in a given directory
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_suggested_file_name.html
 */
export type GetSuggestedFileName = (args: {
  "@type": "getSuggestedFileName";
  /** Identifier of the file */
  file_id: number;
  /** Directory in which the file is expected to be saved */
  directory: string;
}) => Obj.Text;

/**
 * Preliminary uploads a file to the cloud before sending it in a message, which can be useful for uploading of being recorded voice and video notes. In all other cases there is no need to preliminary upload a file. Updates updateFile will be used to notify about upload progress. The upload will not be completed until the file is sent in a message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1preliminary_upload_file.html
 */
export type PreliminaryUploadFile = (args: {
  "@type": "preliminaryUploadFile";
  /** File to upload */
  file: Obj.InputFile;
  /** File type; pass null if unknown */
  file_type?: Obj.FileType;
  /** Priority of the upload (1-32). The higher the priority, the earlier the file will be uploaded. If the priorities of two files are equal, then the first one for which preliminaryUploadFile was called will be uploaded first */
  priority: number;
}) => Obj.File;

/**
 * Stops the preliminary uploading of a file. Supported only for files uploaded by using preliminaryUploadFile
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1cancel_preliminary_upload_file.html
 */
export type CancelPreliminaryUploadFile = (args: {
  "@type": "cancelPreliminaryUploadFile";
  /** Identifier of the file to stop uploading */
  file_id: number;
}) => Obj.Ok;

/**
 * Writes a part of a generated file. This method is intended to be used only if the application has no direct access to TDLib's file system, because it is usually slower than a direct write to the destination file
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1write_generated_file_part.html
 */
export type WriteGeneratedFilePart = (args: {
  "@type": "writeGeneratedFilePart";
  /** The identifier of the generation process */
  generation_id: string;
  /** The offset from which to write the data to the file */
  offset: number;
  /** The data to write */
  data: string;
}) => Obj.Ok;

/**
 * Informs TDLib on a file generation progress
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_file_generation_progress.html
 */
export type SetFileGenerationProgress = (args: {
  "@type": "setFileGenerationProgress";
  /** The identifier of the generation process */
  generation_id: string;
  /** Expected size of the generated file, in bytes; 0 if unknown */
  expected_size: number;
  /** The number of bytes already generated */
  local_prefix_size: number;
}) => Obj.Ok;

/**
 * Finishes the file generation
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1finish_file_generation.html
 */
export type FinishFileGeneration = (args: {
  "@type": "finishFileGeneration";
  /** The identifier of the generation process */
  generation_id: string;
  /** If passed, the file generation has failed and must be terminated; pass null if the file generation succeeded */
  error?: Obj.Error;
}) => Obj.Ok;

/**
 * Reads a part of a file from the TDLib file cache and returns read bytes. This method is intended to be used only if the application has no direct access to TDLib's file system, because it is usually slower than a direct read from the file
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1read_file_part.html
 */
export type ReadFilePart = (args: {
  "@type": "readFilePart";
  /** Identifier of the file. The file must be located in the TDLib file cache */
  file_id: number;
  /** The offset from which to read the file */
  offset: number;
  /** Number of bytes to read. An error will be returned if there are not enough bytes available in the file from the specified position. Pass 0 to read all available data from the specified position */
  count: number;
}) => Obj.Data;

/**
 * Deletes a file from the TDLib file cache
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1delete_file.html
 */
export type DeleteFile = (args: {
  "@type": "deleteFile";
  /** Identifier of the file to delete */
  file_id: number;
}) => Obj.Ok;

/**
 * Adds a file from a message to the list of file downloads. Download progress and completion of the download will be notified through updateFile updates. If message database is used, the list of file downloads is persistent across application restarts. The downloading is independent of download using downloadFile, i.e. it continues if downloadFile is canceled or is used to download a part of the file
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1add_file_to_downloads.html
 */
export type AddFileToDownloads = (args: {
  "@type": "addFileToDownloads";
  /** Identifier of the file to download */
  file_id: number;
  /** Chat identifier of the message with the file */
  chat_id: number;
  /** Message identifier */
  message_id: number;
  /** Priority of the download (1-32). The higher the priority, the earlier the file will be downloaded. If the priorities of two files are equal, then the last one for which downloadFile/addFileToDownloads was called will be downloaded first */
  priority: number;
}) => Obj.File;

/**
 * Changes pause state of a file in the file download list
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_download_is_paused.html
 */
export type ToggleDownloadIsPaused = (args: {
  "@type": "toggleDownloadIsPaused";
  /** Identifier of the downloaded file */
  file_id: number;
  /** Pass true if the download is paused */
  is_paused: boolean;
}) => Obj.Ok;

/**
 * Changes pause state of all files in the file download list
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_all_downloads_are_paused.html
 */
export type ToggleAllDownloadsArePaused = (args: {
  "@type": "toggleAllDownloadsArePaused";
  /** Pass true to pause all downloads; pass false to unpause them */
  are_paused: boolean;
}) => Obj.Ok;

/**
 * Removes a file from the file download list
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1remove_file_from_downloads.html
 */
export type RemoveFileFromDownloads = (args: {
  "@type": "removeFileFromDownloads";
  /** Identifier of the downloaded file */
  file_id: number;
  /** Pass true to delete the file from the TDLib file cache */
  delete_from_cache: boolean;
}) => Obj.Ok;

/**
 * Removes all files from the file download list
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1remove_all_files_from_downloads.html
 */
export type RemoveAllFilesFromDownloads = (args: {
  "@type": "removeAllFilesFromDownloads";
  /** Pass true to remove only active downloads, including paused */
  only_active: boolean;
  /** Pass true to remove only completed downloads */
  only_completed: boolean;
  /** Pass true to delete the file from the TDLib file cache */
  delete_from_cache: boolean;
}) => Obj.Ok;

/**
 * Searches for files in the file download list or recently downloaded files from the list
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_file_downloads.html
 */
export type SearchFileDownloads = (args: {
  "@type": "searchFileDownloads";
  /** Query to search for; may be empty to return all downloaded files */
  query?: string;
  /** Pass true to search only for active downloads, including paused */
  only_active: boolean;
  /** Pass true to search only for completed downloads */
  only_completed: boolean;
  /** Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results */
  offset: string;
  /** The maximum number of files to be returned */
  limit: number;
}) => Obj.FoundFileDownloads;

/**
 * Application or reCAPTCHA verification has been completed. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_application_verification_token.html
 */
export type SetApplicationVerificationToken = (args: {
  "@type": "setApplicationVerificationToken";
  /** Unique identifier for the verification process as received from updateApplicationVerificationRequired or updateApplicationRecaptchaVerificationRequired */
  verification_id: number;
  /** Play Integrity API token for the Android application, or secret from push notification for the iOS application for application verification, or reCAPTCHA token for reCAPTCHA verifications; pass an empty string to abort verification and receive the error "VERIFICATION_FAILED" for the request */
  token: string;
}) => Obj.Ok;

/**
 * Returns information about a file with messages exported from another application
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_message_file_type.html
 */
export type GetMessageFileType = (args: {
  "@type": "getMessageFileType";
  /** Beginning of the message file; up to 100 first lines */
  message_file_head: string;
}) => Obj.MessageFileType;

/**
 * Returns a confirmation text to be shown to the user before starting message import
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_message_import_confirmation_text.html
 */
export type GetMessageImportConfirmationText = (args: {
  "@type": "getMessageImportConfirmationText";
  /** Identifier of a chat to which the messages will be imported. It must be an identifier of a private chat with a mutual contact or an identifier of a supergroup chat with can_change_info member right */
  chat_id: number;
}) => Obj.Text;

/**
 * Imports messages exported from another app
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1import_messages.html
 */
export type ImportMessages = (args: {
  "@type": "importMessages";
  /** Identifier of a chat to which the messages will be imported. It must be an identifier of a private chat with a mutual contact or an identifier of a supergroup chat with can_change_info member right */
  chat_id: number;
  /** File with messages to import. Only inputFileLocal and inputFileGenerated are supported. The file must not be previously uploaded */
  message_file: Obj.InputFile;
  /** Files used in the imported messages. Only inputFileLocal and inputFileGenerated are supported. The files must not be previously uploaded */
  attached_files: Obj.InputFile[];
}) => Obj.Ok;

/**
 * Replaces current primary invite link for a chat with a new primary invite link. Available for basic groups, supergroups, and channels. Requires administrator privileges and can_invite_users right
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1replace_primary_chat_invite_link.html
 */
export type ReplacePrimaryChatInviteLink = (args: {
  "@type": "replacePrimaryChatInviteLink";
  /** Chat identifier */
  chat_id: number;
}) => Obj.ChatInviteLink;

/**
 * Creates a new invite link for a chat. Available for basic groups, supergroups, and channels. Requires administrator privileges and can_invite_users right in the chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1create_chat_invite_link.html
 */
export type CreateChatInviteLink = (args: {
  "@type": "createChatInviteLink";
  /** Chat identifier */
  chat_id: number;
  /** Invite link name; 0-32 characters */
  name: string;
  /** Point in time (Unix timestamp) when the link will expire; pass 0 if never */
  expiration_date: number;
  /** The maximum number of chat members that can join the chat via the link simultaneously; 0-99999; pass 0 if not limited */
  member_limit: number;
  /** Pass true if users joining the chat via the link need to be approved by chat administrators. In this case, member_limit must be 0 */
  creates_join_request: boolean;
}) => Obj.ChatInviteLink;

/**
 * Creates a new subscription invite link for a channel chat. Requires can_invite_users right in the chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1create_chat_subscription_invite_link.html
 */
export type CreateChatSubscriptionInviteLink = (args: {
  "@type": "createChatSubscriptionInviteLink";
  /** Chat identifier */
  chat_id: number;
  /** Invite link name; 0-32 characters */
  name: string;
  /** Information about subscription plan that will be applied to the users joining the chat via the link. Subscription period must be 2592000 in production environment, and 60 or 300 if Telegram test environment is used */
  subscription_pricing: Obj.StarSubscriptionPricing;
}) => Obj.ChatInviteLink;

/**
 * Edits a non-primary invite link for a chat. Available for basic groups, supergroups, and channels. If the link creates a subscription, then expiration_date, member_limit and creates_join_request must not be used. Requires administrator privileges and can_invite_users right in the chat for own links and owner privileges for other links
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1edit_chat_invite_link.html
 */
export type EditChatInviteLink = (args: {
  "@type": "editChatInviteLink";
  /** Chat identifier */
  chat_id: number;
  /** Invite link to be edited */
  invite_link: string;
  /** Invite link name; 0-32 characters */
  name: string;
  /** Point in time (Unix timestamp) when the link will expire; pass 0 if never */
  expiration_date: number;
  /** The maximum number of chat members that can join the chat via the link simultaneously; 0-99999; pass 0 if not limited */
  member_limit: number;
  /** Pass true if users joining the chat via the link need to be approved by chat administrators. In this case, member_limit must be 0 */
  creates_join_request: boolean;
}) => Obj.ChatInviteLink;

/**
 * Edits a subscription invite link for a channel chat. Requires can_invite_users right in the chat for own links and owner privileges for other links
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1edit_chat_subscription_invite_link.html
 */
export type EditChatSubscriptionInviteLink = (args: {
  "@type": "editChatSubscriptionInviteLink";
  /** Chat identifier */
  chat_id: number;
  /** Invite link to be edited */
  invite_link: string;
  /** Invite link name; 0-32 characters */
  name: string;
}) => Obj.ChatInviteLink;

/**
 * Returns information about an invite link. Requires administrator privileges and can_invite_users right in the chat to get own links and owner privileges to get other links
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_invite_link.html
 */
export type GetChatInviteLink = (args: {
  "@type": "getChatInviteLink";
  /** Chat identifier */
  chat_id: number;
  /** Invite link to get */
  invite_link: string;
}) => Obj.ChatInviteLink;

/**
 * Returns the list of chat administrators with number of their invite links. Requires owner privileges in the chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_invite_link_counts.html
 */
export type GetChatInviteLinkCounts = (args: {
  "@type": "getChatInviteLinkCounts";
  /** Chat identifier */
  chat_id: number;
}) => Obj.ChatInviteLinkCounts;

/**
 * Returns invite links for a chat created by specified administrator. Requires administrator privileges and can_invite_users right in the chat to get own links and owner privileges to get other links
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_invite_links.html
 */
export type GetChatInviteLinks = (args: {
  "@type": "getChatInviteLinks";
  /** Chat identifier */
  chat_id: number;
  /** User identifier of a chat administrator. Must be an identifier of the current user for non-owner */
  creator_user_id: number;
  /** Pass true if revoked links needs to be returned instead of active or expired */
  is_revoked: boolean;
  /** Creation date of an invite link starting after which to return invite links; use 0 to get results from the beginning */
  offset_date: number;
  /** Invite link starting after which to return invite links; use empty string to get results from the beginning */
  offset_invite_link: string;
  /** The maximum number of invite links to return; up to 100 */
  limit: number;
}) => Obj.ChatInviteLinks;

/**
 * Returns chat members joined a chat via an invite link. Requires administrator privileges and can_invite_users right in the chat for own links and owner privileges for other links
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_invite_link_members.html
 */
export type GetChatInviteLinkMembers = (args: {
  "@type": "getChatInviteLinkMembers";
  /** Chat identifier */
  chat_id: number;
  /** Invite link for which to return chat members */
  invite_link: string;
  /** Pass true if the link is a subscription link and only members with expired subscription must be returned */
  only_with_expired_subscription: boolean;
  /** A chat member from which to return next chat members; pass null to get results from the beginning */
  offset_member?: Obj.ChatInviteLinkMember;
  /** The maximum number of chat members to return; up to 100 */
  limit: number;
}) => Obj.ChatInviteLinkMembers;

/**
 * Revokes invite link for a chat. Available for basic groups, supergroups, and channels. Requires administrator privileges and can_invite_users right in the chat for own links and owner privileges for other links. If a primary link is revoked, then additionally to the revoked link returns new primary link
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1revoke_chat_invite_link.html
 */
export type RevokeChatInviteLink = (args: {
  "@type": "revokeChatInviteLink";
  /** Chat identifier */
  chat_id: number;
  /** Invite link to be revoked */
  invite_link: string;
}) => Obj.ChatInviteLinks;

/**
 * Deletes revoked chat invite links. Requires administrator privileges and can_invite_users right in the chat for own links and owner privileges for other links
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1delete_revoked_chat_invite_link.html
 */
export type DeleteRevokedChatInviteLink = (args: {
  "@type": "deleteRevokedChatInviteLink";
  /** Chat identifier */
  chat_id: number;
  /** Invite link to revoke */
  invite_link: string;
}) => Obj.Ok;

/**
 * Deletes all revoked chat invite links created by a given chat administrator. Requires administrator privileges and can_invite_users right in the chat for own links and owner privileges for other links
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1delete_all_revoked_chat_invite_links.html
 */
export type DeleteAllRevokedChatInviteLinks = (args: {
  "@type": "deleteAllRevokedChatInviteLinks";
  /** Chat identifier */
  chat_id: number;
  /** User identifier of a chat administrator, which links will be deleted. Must be an identifier of the current user for non-owner */
  creator_user_id: number;
}) => Obj.Ok;

/**
 * Checks the validity of an invite link for a chat and returns information about the corresponding chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1check_chat_invite_link.html
 */
export type CheckChatInviteLink = (args: {
  "@type": "checkChatInviteLink";
  /** Invite link to be checked */
  invite_link: string;
}) => Obj.ChatInviteLinkInfo;

/**
 * Uses an invite link to add the current user to the chat if possible. May return an error with a message "INVITE_REQUEST_SENT" if only a join request was created
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1join_chat_by_invite_link.html
 */
export type JoinChatByInviteLink = (args: {
  "@type": "joinChatByInviteLink";
  /** Invite link to use */
  invite_link: string;
}) => Obj.Chat;

/**
 * Returns pending join requests in a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_join_requests.html
 */
export type GetChatJoinRequests = (args: {
  "@type": "getChatJoinRequests";
  /** Chat identifier */
  chat_id: number;
  /** Invite link for which to return join requests. If empty, all join requests will be returned. Requires administrator privileges and can_invite_users right in the chat for own links and owner privileges for other links */
  invite_link: string;
  /** A query to search for in the first names, last names and usernames of the users to return */
  query: string;
  /** A chat join request from which to return next requests; pass null to get results from the beginning */
  offset_request?: Obj.ChatJoinRequest;
  /** The maximum number of requests to join the chat to return */
  limit: number;
}) => Obj.ChatJoinRequests;

/**
 * Handles a pending join request in a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1process_chat_join_request.html
 */
export type ProcessChatJoinRequest = (args: {
  "@type": "processChatJoinRequest";
  /** Chat identifier */
  chat_id: number;
  /** Identifier of the user that sent the request */
  user_id: number;
  /** Pass true to approve the request; pass false to decline it */
  approve: boolean;
}) => Obj.Ok;

/**
 * Handles all pending join requests for a given link in a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1process_chat_join_requests.html
 */
export type ProcessChatJoinRequests = (args: {
  "@type": "processChatJoinRequests";
  /** Chat identifier */
  chat_id: number;
  /** Invite link for which to process join requests. If empty, all join requests will be processed. Requires administrator privileges and can_invite_users right in the chat for own links and owner privileges for other links */
  invite_link: string;
  /** Pass true to approve all requests; pass false to decline them */
  approve: boolean;
}) => Obj.Ok;

/**
 * Creates a new call
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1create_call.html
 */
export type CreateCall = (args: {
  "@type": "createCall";
  /** Identifier of the user to be called */
  user_id: number;
  /** The call protocols supported by the application */
  protocol: Obj.CallProtocol;
  /** Pass true to create a video call */
  is_video: boolean;
}) => Obj.CallId;

/**
 * Accepts an incoming call
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1accept_call.html
 */
export type AcceptCall = (args: {
  "@type": "acceptCall";
  /** Call identifier */
  call_id: number;
  /** The call protocols supported by the application */
  protocol: Obj.CallProtocol;
}) => Obj.Ok;

/**
 * Sends call signaling data
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1send_call_signaling_data.html
 */
export type SendCallSignalingData = (args: {
  "@type": "sendCallSignalingData";
  /** Call identifier */
  call_id: number;
  /** The data */
  data: string;
}) => Obj.Ok;

/**
 * Discards a call
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1discard_call.html
 */
export type DiscardCall = (args: {
  "@type": "discardCall";
  /** Call identifier */
  call_id: number;
  /** Pass true if the user was disconnected */
  is_disconnected: boolean;
  /** If the call was upgraded to a group call, pass invite link to the group call */
  invite_link: string;
  /** The call duration, in seconds */
  duration: number;
  /** Pass true if the call was a video call */
  is_video: boolean;
  /** Identifier of the connection used during the call */
  connection_id: string;
}) => Obj.Ok;

/**
 * Sends a call rating
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1send_call_rating.html
 */
export type SendCallRating = (args: {
  "@type": "sendCallRating";
  /** Call identifier */
  call_id: number;
  /** Call rating; 1-5 */
  rating: number;
  /** An optional user comment if the rating is less than 5 */
  comment: string;
  /** List of the exact types of problems with the call, specified by the user */
  problems: Obj.CallProblem[];
}) => Obj.Ok;

/**
 * Sends debug information for a call to Telegram servers
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1send_call_debug_information.html
 */
export type SendCallDebugInformation = (args: {
  "@type": "sendCallDebugInformation";
  /** Call identifier */
  call_id: number;
  /** Debug information in application-specific format */
  debug_information: string;
}) => Obj.Ok;

/**
 * Sends log file for a call to Telegram servers
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1send_call_log.html
 */
export type SendCallLog = (args: {
  "@type": "sendCallLog";
  /** Call identifier */
  call_id: number;
  /** Call log file. Only inputFileLocal and inputFileGenerated are supported */
  log_file: Obj.InputFile;
}) => Obj.Ok;

/**
 * Returns the list of participant identifiers, on whose behalf a video chat in the chat can be joined
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_video_chat_available_participants.html
 */
export type GetVideoChatAvailableParticipants = (args: {
  "@type": "getVideoChatAvailableParticipants";
  /** Chat identifier */
  chat_id: number;
}) => Obj.MessageSenders;

/**
 * Changes default participant identifier, on whose behalf a video chat in the chat will be joined
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_video_chat_default_participant.html
 */
export type SetVideoChatDefaultParticipant = (args: {
  "@type": "setVideoChatDefaultParticipant";
  /** Chat identifier */
  chat_id: number;
  /** Default group call participant identifier to join the video chats */
  default_participant_id: Obj.MessageSender;
}) => Obj.Ok;

/**
 * Creates a video chat (a group call bound to a chat). Available only for basic groups, supergroups and channels; requires can_manage_video_chats administrator right
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1create_video_chat.html
 */
export type CreateVideoChat = (args: {
  "@type": "createVideoChat";
  /** Identifier of a chat in which the video chat will be created */
  chat_id: number;
  /** Group call title; if empty, chat title will be used */
  title: string;
  /** Point in time (Unix timestamp) when the group call is expected to be started by an administrator; 0 to start the video chat immediately. The date must be at least 10 seconds and at most 8 days in the future */
  start_date: number;
  /** Pass true to create an RTMP stream instead of an ordinary video chat */
  is_rtmp_stream: boolean;
}) => Obj.GroupCallId;

/**
 * Creates a new group call that isn't bound to a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1create_group_call.html
 */
export type CreateGroupCall = (args: {
  "@type": "createGroupCall";
  /** Parameters to join the call; pass null to only create call link without joining the call */
  join_parameters?: Obj.GroupCallJoinParameters;
}) => Obj.GroupCallInfo;

/**
 * Returns RTMP URL for streaming to the video chat of a chat; requires can_manage_video_chats administrator right
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_video_chat_rtmp_url.html
 */
export type GetVideoChatRtmpUrl = (args: {
  "@type": "getVideoChatRtmpUrl";
  /** Chat identifier */
  chat_id: number;
}) => Obj.RtmpUrl;

/**
 * Replaces the current RTMP URL for streaming to the video chat of a chat; requires owner privileges in the chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1replace_video_chat_rtmp_url.html
 */
export type ReplaceVideoChatRtmpUrl = (args: {
  "@type": "replaceVideoChatRtmpUrl";
  /** Chat identifier */
  chat_id: number;
}) => Obj.RtmpUrl;

/**
 * Returns information about a group call
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_group_call.html
 */
export type GetGroupCall = (args: {
  "@type": "getGroupCall";
  /** Group call identifier */
  group_call_id: number;
}) => Obj.GroupCall;

/**
 * Starts a scheduled video chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1start_scheduled_video_chat.html
 */
export type StartScheduledVideoChat = (args: {
  "@type": "startScheduledVideoChat";
  /** Group call identifier of the video chat */
  group_call_id: number;
}) => Obj.Ok;

/**
 * Toggles whether the current user will receive a notification when the video chat starts; for scheduled video chats only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_video_chat_enabled_start_notification.html
 */
export type ToggleVideoChatEnabledStartNotification = (args: {
  "@type": "toggleVideoChatEnabledStartNotification";
  /** Group call identifier */
  group_call_id: number;
  /** New value of the enabled_start_notification setting */
  enabled_start_notification: boolean;
}) => Obj.Ok;

/**
 * Joins a group call that is not bound to a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1join_group_call.html
 */
export type JoinGroupCall = (args: {
  "@type": "joinGroupCall";
  /** The group call to join */
  input_group_call: Obj.InputGroupCall;
  /** Parameters to join the call */
  join_parameters: Obj.GroupCallJoinParameters;
}) => Obj.GroupCallInfo;

/**
 * Joins an active video chat. Returns join response payload for tgcalls
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1join_video_chat.html
 */
export type JoinVideoChat = (args: {
  "@type": "joinVideoChat";
  /** Group call identifier */
  group_call_id: number;
  /** Identifier of a group call participant, which will be used to join the call; pass null to join as self; video chats only */
  participant_id?: Obj.MessageSender;
  /** Parameters to join the call */
  join_parameters: Obj.GroupCallJoinParameters;
  /** Invite hash as received from internalLinkTypeVideoChat */
  invite_hash: string;
}) => Obj.Text;

/**
 * Starts screen sharing in a joined group call. Returns join response payload for tgcalls
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1start_group_call_screen_sharing.html
 */
export type StartGroupCallScreenSharing = (args: {
  "@type": "startGroupCallScreenSharing";
  /** Group call identifier */
  group_call_id: number;
  /** Screen sharing audio channel synchronization source identifier; received from tgcalls */
  audio_source_id: number;
  /** Group call join payload; received from tgcalls */
  payload: string;
}) => Obj.Text;

/**
 * Pauses or unpauses screen sharing in a joined group call
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_group_call_screen_sharing_is_paused.html
 */
export type ToggleGroupCallScreenSharingIsPaused = (args: {
  "@type": "toggleGroupCallScreenSharingIsPaused";
  /** Group call identifier */
  group_call_id: number;
  /** Pass true to pause screen sharing; pass false to unpause it */
  is_paused: boolean;
}) => Obj.Ok;

/**
 * Ends screen sharing in a joined group call
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1end_group_call_screen_sharing.html
 */
export type EndGroupCallScreenSharing = (args: {
  "@type": "endGroupCallScreenSharing";
  /** Group call identifier */
  group_call_id: number;
}) => Obj.Ok;

/**
 * Sets title of a video chat; requires groupCall.can_be_managed right
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_video_chat_title.html
 */
export type SetVideoChatTitle = (args: {
  "@type": "setVideoChatTitle";
  /** Group call identifier */
  group_call_id: number;
  /** New group call title; 1-64 characters */
  title: string;
}) => Obj.Ok;

/**
 * Toggles whether new participants of a video chat can be unmuted only by administrators of the video chat. Requires groupCall.can_toggle_mute_new_participants right
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_video_chat_mute_new_participants.html
 */
export type ToggleVideoChatMuteNewParticipants = (args: {
  "@type": "toggleVideoChatMuteNewParticipants";
  /** Group call identifier */
  group_call_id: number;
  /** New value of the mute_new_participants setting */
  mute_new_participants: boolean;
}) => Obj.Ok;

/**
 * Invites a user to an active group call; for group calls not bound to a chat only. Sends a service message of the type messageGroupCall. The group call can have at most getOption("group_call_participant_count_max") participants
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1invite_group_call_participant.html
 */
export type InviteGroupCallParticipant = (args: {
  "@type": "inviteGroupCallParticipant";
  /** Group call identifier */
  group_call_id: number;
  /** User identifier */
  user_id: number;
  /** Pass true if the group call is a video call */
  is_video: boolean;
}) => Obj.InviteGroupCallParticipantResult;

/**
 * Declines an invitation to an active group call via messageGroupCall. Can be called both by the sender and the receiver of the invitation
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1decline_group_call_invitation.html
 */
export type DeclineGroupCallInvitation = (args: {
  "@type": "declineGroupCallInvitation";
  /** Identifier of the chat with the message */
  chat_id: number;
  /** Identifier of the message of the type messageGroupCall */
  message_id: number;
}) => Obj.Ok;

/**
 * Bans users from a group call not bound to a chat; requires groupCall.is_owned. Only the owner of the group call can invite the banned users back
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1ban_group_call_participants.html
 */
export type BanGroupCallParticipants = (args: {
  "@type": "banGroupCallParticipants";
  /** Group call identifier */
  group_call_id: number;
  /** Identifiers of group call participants to ban; identifiers of unknown users from the update updateGroupCallParticipants can be also passed to the method */
  user_ids: string[];
}) => Obj.Ok;

/**
 * Invites users to an active video chat. Sends a service message of the type messageInviteVideoChatParticipants to the chat bound to the group call
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1invite_video_chat_participants.html
 */
export type InviteVideoChatParticipants = (args: {
  "@type": "inviteVideoChatParticipants";
  /** Group call identifier */
  group_call_id: number;
  /** User identifiers. At most 10 users can be invited simultaneously */
  user_ids: number[];
}) => Obj.Ok;

/**
 * Returns invite link to a video chat in a public chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_video_chat_invite_link.html
 */
export type GetVideoChatInviteLink = (args: {
  "@type": "getVideoChatInviteLink";
  /** Group call identifier */
  group_call_id: number;
  /** Pass true if the invite link needs to contain an invite hash, passing which to joinVideoChat would allow the invited user to unmute themselves. Requires groupCall.can_be_managed right */
  can_self_unmute: boolean;
}) => Obj.HttpUrl;

/**
 * Revokes invite link for a group call. Requires groupCall.can_be_managed right for video chats or groupCall.is_owned otherwise
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1revoke_group_call_invite_link.html
 */
export type RevokeGroupCallInviteLink = (args: {
  "@type": "revokeGroupCallInviteLink";
  /** Group call identifier */
  group_call_id: number;
}) => Obj.Ok;

/**
 * Starts recording of an active group call; for video chats only. Requires groupCall.can_be_managed right
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1start_group_call_recording.html
 */
export type StartGroupCallRecording = (args: {
  "@type": "startGroupCallRecording";
  /** Group call identifier */
  group_call_id: number;
  /** Group call recording title; 0-64 characters */
  title: string;
  /** Pass true to record a video file instead of an audio file */
  record_video: boolean;
  /** Pass true to use portrait orientation for video instead of landscape one */
  use_portrait_orientation: boolean;
}) => Obj.Ok;

/**
 * Ends recording of an active group call; for video chats only. Requires groupCall.can_be_managed right
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1end_group_call_recording.html
 */
export type EndGroupCallRecording = (args: {
  "@type": "endGroupCallRecording";
  /** Group call identifier */
  group_call_id: number;
}) => Obj.Ok;

/**
 * Toggles whether current user's video is paused
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_group_call_is_my_video_paused.html
 */
export type ToggleGroupCallIsMyVideoPaused = (args: {
  "@type": "toggleGroupCallIsMyVideoPaused";
  /** Group call identifier */
  group_call_id: number;
  /** Pass true if the current user's video is paused */
  is_my_video_paused: boolean;
}) => Obj.Ok;

/**
 * Toggles whether current user's video is enabled
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_group_call_is_my_video_enabled.html
 */
export type ToggleGroupCallIsMyVideoEnabled = (args: {
  "@type": "toggleGroupCallIsMyVideoEnabled";
  /** Group call identifier */
  group_call_id: number;
  /** Pass true if the current user's video is enabled */
  is_my_video_enabled: boolean;
}) => Obj.Ok;

/**
 * Informs TDLib that speaking state of a participant of an active group call has changed. Returns identifier of the participant if it is found
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_group_call_participant_is_speaking.html
 */
export type SetGroupCallParticipantIsSpeaking = (args: {
  "@type": "setGroupCallParticipantIsSpeaking";
  /** Group call identifier */
  group_call_id: number;
  /** Group call participant's synchronization audio source identifier, or 0 for the current user */
  audio_source: number;
  /** Pass true if the user is speaking */
  is_speaking: boolean;
}) => Obj.MessageSender;

/**
 * Toggles whether a participant of an active group call is muted, unmuted, or allowed to unmute themselves
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_group_call_participant_is_muted.html
 */
export type ToggleGroupCallParticipantIsMuted = (args: {
  "@type": "toggleGroupCallParticipantIsMuted";
  /** Group call identifier */
  group_call_id: number;
  /** Participant identifier */
  participant_id: Obj.MessageSender;
  /** Pass true to mute the user; pass false to unmute them */
  is_muted: boolean;
}) => Obj.Ok;

/**
 * Changes volume level of a participant of an active group call. If the current user can manage the group call or is the owner of the group call, then the participant's volume level will be changed for all users with the default volume level
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_group_call_participant_volume_level.html
 */
export type SetGroupCallParticipantVolumeLevel = (args: {
  "@type": "setGroupCallParticipantVolumeLevel";
  /** Group call identifier */
  group_call_id: number;
  /** Participant identifier */
  participant_id: Obj.MessageSender;
  /** New participant's volume level; 1-20000 in hundreds of percents */
  volume_level: number;
}) => Obj.Ok;

/**
 * Toggles whether a group call participant hand is rased; for video chats only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_group_call_participant_is_hand_raised.html
 */
export type ToggleGroupCallParticipantIsHandRaised = (args: {
  "@type": "toggleGroupCallParticipantIsHandRaised";
  /** Group call identifier */
  group_call_id: number;
  /** Participant identifier */
  participant_id: Obj.MessageSender;
  /** Pass true if the user's hand needs to be raised. Only self hand can be raised. Requires groupCall.can_be_managed right to lower other's hand */
  is_hand_raised: boolean;
}) => Obj.Ok;

/**
 * Returns information about participants of a non-joined group call that is not bound to a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_group_call_participants.html
 */
export type GetGroupCallParticipants = (args: {
  "@type": "getGroupCallParticipants";
  /** The group call which participants will be returned */
  input_group_call: Obj.InputGroupCall;
  /** The maximum number of participants to return; must be positive */
  limit: number;
}) => Obj.GroupCallParticipants;

/**
 * Loads more participants of a group call. The loaded participants will be received through updates. Use the field groupCall.loaded_all_participants to check whether all participants have already been loaded
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1load_group_call_participants.html
 */
export type LoadGroupCallParticipants = (args: {
  "@type": "loadGroupCallParticipants";
  /** Group call identifier. The group call must be previously received through getGroupCall and must be joined or being joined */
  group_call_id: number;
  /** The maximum number of participants to load; up to 100 */
  limit: number;
}) => Obj.Ok;

/**
 * Leaves a group call
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1leave_group_call.html
 */
export type LeaveGroupCall = (args: {
  "@type": "leaveGroupCall";
  /** Group call identifier */
  group_call_id: number;
}) => Obj.Ok;

/**
 * Ends a group call. Requires groupCall.can_be_managed right for video chats or groupCall.is_owned otherwise
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1end_group_call.html
 */
export type EndGroupCall = (args: {
  "@type": "endGroupCall";
  /** Group call identifier */
  group_call_id: number;
}) => Obj.Ok;

/**
 * Returns information about available video chat streams
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_video_chat_streams.html
 */
export type GetVideoChatStreams = (args: {
  "@type": "getVideoChatStreams";
  /** Group call identifier */
  group_call_id: number;
}) => Obj.VideoChatStreams;

/**
 * Returns a file with a segment of a video chat stream in a modified OGG format for audio or MPEG-4 format for video
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_video_chat_stream_segment.html
 */
export type GetVideoChatStreamSegment = (args: {
  "@type": "getVideoChatStreamSegment";
  /** Group call identifier */
  group_call_id: number;
  /** Point in time when the stream segment begins; Unix timestamp in milliseconds */
  time_offset: number;
  /** Segment duration scale; 0-1. Segment's duration is 1000/(2**scale) milliseconds */
  scale: number;
  /** Identifier of an audio/video channel to get as received from tgcalls */
  channel_id: number;
  /** Video quality as received from tgcalls; pass null to get the worst available quality */
  video_quality?: Obj.GroupCallVideoQuality;
}) => Obj.Data;

/**
 * Encrypts group call data before sending them over network using tgcalls
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1encrypt_group_call_data.html
 */
export type EncryptGroupCallData = (args: {
  "@type": "encryptGroupCallData";
  /** Group call identifier. The call must not be a video chat */
  group_call_id: number;
  /** Data channel for which data is encrypted */
  data_channel: Obj.GroupCallDataChannel;
  /** Data to encrypt */
  data: string;
  /** Size of data prefix that must be kept unencrypted */
  unencrypted_prefix_size: number;
}) => Obj.Data;

/**
 * Decrypts group call data received by tgcalls
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1decrypt_group_call_data.html
 */
export type DecryptGroupCallData = (args: {
  "@type": "decryptGroupCallData";
  /** Group call identifier. The call must not be a video chat */
  group_call_id: number;
  /** Identifier of the group call participant, which sent the data */
  participant_id: Obj.MessageSender;
  /** Data channel for which data was encrypted; pass null if unknown */
  data_channel?: Obj.GroupCallDataChannel;
  /** Data to decrypt */
  data: string;
}) => Obj.Data;

/**
 * Changes the block list of a message sender. Currently, only users and supergroup chats can be blocked
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_message_sender_block_list.html
 */
export type SetMessageSenderBlockList = (args: {
  "@type": "setMessageSenderBlockList";
  /** Identifier of a message sender to block/unblock */
  sender_id: Obj.MessageSender;
  /** New block list for the message sender; pass null to unblock the message sender */
  block_list?: Obj.BlockList;
}) => Obj.Ok;

/**
 * Blocks an original sender of a message in the Replies chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1block_message_sender_from_replies.html
 */
export type BlockMessageSenderFromReplies = (args: {
  "@type": "blockMessageSenderFromReplies";
  /** The identifier of an incoming message in the Replies chat */
  message_id: number;
  /** Pass true to delete the message */
  delete_message: boolean;
  /** Pass true to delete all messages from the same sender */
  delete_all_messages: boolean;
  /** Pass true to report the sender to the Telegram moderators */
  report_spam: boolean;
}) => Obj.Ok;

/**
 * Returns users and chats that were blocked by the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_blocked_message_senders.html
 */
export type GetBlockedMessageSenders = (args: {
  "@type": "getBlockedMessageSenders";
  /** Block list from which to return users */
  block_list: Obj.BlockList;
  /** Number of users and chats to skip in the result; must be non-negative */
  offset: number;
  /** The maximum number of users and chats to return; up to 100 */
  limit: number;
}) => Obj.MessageSenders;

/**
 * Adds a user to the contact list or edits an existing contact by their user identifier
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1add_contact.html
 */
export type AddContact = (args: {
  "@type": "addContact";
  /** The contact to add or edit; phone number may be empty and needs to be specified only if known, vCard is ignored */
  contact: Obj.Contact;
  /** Pass true to share the current user's phone number with the new contact. A corresponding rule to userPrivacySettingShowPhoneNumber will be added if needed. Use the field userFullInfo.need_phone_number_privacy_exception to check whether the current user needs to be asked to share their phone number */
  share_phone_number: boolean;
}) => Obj.Ok;

/**
 * Adds new contacts or edits existing contacts by their phone numbers; contacts' user identifiers are ignored
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1import_contacts.html
 */
export type ImportContacts = (args: {
  "@type": "importContacts";
  /** The list of contacts to import or edit; contacts' vCard are ignored and are not imported */
  contacts: Obj.Contact[];
}) => Obj.ImportedContacts;

/**
 * Returns all contacts of the user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_contacts.html
 */
export type GetContacts = (args: { "@type": "getContacts" }) => Obj.Users;

/**
 * Searches for the specified query in the first names, last names and usernames of the known user contacts
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_contacts.html
 */
export type SearchContacts = (args: {
  "@type": "searchContacts";
  /** Query to search for; may be empty to return all contacts */
  query?: string;
  /** The maximum number of users to be returned */
  limit: number;
}) => Obj.Users;

/**
 * Removes users from the contact list
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1remove_contacts.html
 */
export type RemoveContacts = (args: {
  "@type": "removeContacts";
  /** Identifiers of users to be deleted */
  user_ids: number[];
}) => Obj.Ok;

/**
 * Returns the total number of imported contacts
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_imported_contact_count.html
 */
export type GetImportedContactCount = (args: {
  "@type": "getImportedContactCount";
}) => Obj.Count;

/**
 * Changes imported contacts using the list of contacts saved on the device. Imports newly added contacts and, if at least the file database is enabled, deletes recently deleted contacts. Query result depends on the result of the previous query, so only one query is possible at the same time
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1change_imported_contacts.html
 */
export type ChangeImportedContacts = (args: {
  "@type": "changeImportedContacts";
  /** The new list of contacts, contact's vCard are ignored and are not imported */
  contacts: Obj.Contact[];
}) => Obj.ImportedContacts;

/**
 * Clears all imported contacts, contact list remains unchanged
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1clear_imported_contacts.html
 */
export type ClearImportedContacts = (args: {
  "@type": "clearImportedContacts";
}) => Obj.Ok;

/**
 * Changes the list of close friends of the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_close_friends.html
 */
export type SetCloseFriends = (args: {
  "@type": "setCloseFriends";
  /** User identifiers of close friends; the users must be contacts of the current user */
  user_ids: number[];
}) => Obj.Ok;

/**
 * Returns all close friends of the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_close_friends.html
 */
export type GetCloseFriends = (args: {
  "@type": "getCloseFriends";
}) => Obj.Users;

/**
 * Changes a personal profile photo of a contact user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_user_personal_profile_photo.html
 */
export type SetUserPersonalProfilePhoto = (args: {
  "@type": "setUserPersonalProfilePhoto";
  /** User identifier */
  user_id: number;
  /** Profile photo to set; pass null to delete the photo; inputChatPhotoPrevious isn't supported in this function */
  photo?: Obj.InputChatPhoto;
}) => Obj.Ok;

/**
 * Suggests a profile photo to another regular user with common messages and allowing non-paid messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1suggest_user_profile_photo.html
 */
export type SuggestUserProfilePhoto = (args: {
  "@type": "suggestUserProfilePhoto";
  /** User identifier */
  user_id: number;
  /** Profile photo to suggest; inputChatPhotoPrevious isn't supported in this function */
  photo: Obj.InputChatPhoto;
}) => Obj.Ok;

/**
 * Toggles whether the bot can manage emoji status of the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_bot_can_manage_emoji_status.html
 */
export type ToggleBotCanManageEmojiStatus = (args: {
  "@type": "toggleBotCanManageEmojiStatus";
  /** User identifier of the bot */
  bot_user_id: number;
  /** Pass true if the bot is allowed to change emoji status of the user; pass false otherwise */
  can_manage_emoji_status: boolean;
}) => Obj.Ok;

/**
 * Changes the emoji status of a user; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_user_emoji_status.html
 */
export type SetUserEmojiStatus = (args: {
  "@type": "setUserEmojiStatus";
  /** Identifier of the user */
  user_id: number;
  /** New emoji status; pass null to switch to the default badge */
  emoji_status?: Obj.EmojiStatus;
}) => Obj.Ok;

/**
 * Searches a user by their phone number. Returns a 404 error if the user can't be found
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_user_by_phone_number.html
 */
export type SearchUserByPhoneNumber = (args: {
  "@type": "searchUserByPhoneNumber";
  /** Phone number to search for */
  phone_number: string;
  /** Pass true to get only locally available information without sending network requests */
  only_local: boolean;
}) => Obj.User;

/**
 * Shares the phone number of the current user with a mutual contact. Supposed to be called when the user clicks on chatActionBarSharePhoneNumber
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1share_phone_number.html
 */
export type SharePhoneNumber = (args: {
  "@type": "sharePhoneNumber";
  /** Identifier of the user with whom to share the phone number. The user must be a mutual contact */
  user_id: number;
}) => Obj.Ok;

/**
 * Returns the profile photos of a user. Personal and public photo aren't returned
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_user_profile_photos.html
 */
export type GetUserProfilePhotos = (args: {
  "@type": "getUserProfilePhotos";
  /** User identifier */
  user_id: number;
  /** The number of photos to skip; must be non-negative */
  offset: number;
  /** The maximum number of photos to be returned; up to 100 */
  limit: number;
}) => Obj.ChatPhotos;

/**
 * Returns outline of a sticker. This is an offline method. Returns a 404 error if the outline isn't known
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_sticker_outline.html
 */
export type GetStickerOutline = (args: {
  "@type": "getStickerOutline";
  /** File identifier of the sticker */
  sticker_file_id: number;
  /** Pass true to get the outline scaled for animated emoji */
  for_animated_emoji: boolean;
  /** Pass true to get the outline scaled for clicked animated emoji message */
  for_clicked_animated_emoji_message: boolean;
}) => Obj.Outline;

/**
 * Returns stickers from the installed sticker sets that correspond to any of the given emoji or can be found by sticker-specific keywords. If the query is non-empty, then favorite, recently used or trending stickers may also be returned
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_stickers.html
 */
export type GetStickers = (args: {
  "@type": "getStickers";
  /** Type of the stickers to return */
  sticker_type: Obj.StickerType;
  /** Search query; a space-separated list of emojis or a keyword prefix. If empty, returns all known installed stickers */
  query: string;
  /** The maximum number of stickers to be returned */
  limit: number;
  /** Chat identifier for which to return stickers. Available custom emoji stickers may be different for different chats */
  chat_id: number;
}) => Obj.Stickers;

/**
 * Returns unique emoji that correspond to stickers to be found by the getStickers(sticker_type, query, 1000000, chat_id)
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_all_sticker_emojis.html
 */
export type GetAllStickerEmojis = (args: {
  "@type": "getAllStickerEmojis";
  /** Type of the stickers to search for */
  sticker_type: Obj.StickerType;
  /** Search query */
  query: string;
  /** Chat identifier for which to find stickers */
  chat_id: number;
  /** Pass true if only main emoji for each found sticker must be included in the result */
  return_only_main_emoji: boolean;
}) => Obj.Emojis;

/**
 * Searches for stickers from public sticker sets that correspond to any of the given emoji
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_stickers.html
 */
export type SearchStickers = (args: {
  "@type": "searchStickers";
  /** Type of the stickers to return */
  sticker_type: Obj.StickerType;
  /** Space-separated list of emojis to search for */
  emojis: string;
  /** Query to search for; may be empty to search for emoji only */
  query?: string;
  /** List of possible IETF language tags of the user's input language; may be empty if unknown */
  input_language_codes?: string[];
  /** The offset from which to return the stickers; must be non-negative */
  offset: number;
  /** The maximum number of stickers to be returned; 0-100 */
  limit: number;
}) => Obj.Stickers;

/**
 * Returns greeting stickers from regular sticker sets that can be used for the start page of other users
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_greeting_stickers.html
 */
export type GetGreetingStickers = (args: {
  "@type": "getGreetingStickers";
}) => Obj.Stickers;

/**
 * Returns premium stickers from regular sticker sets
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_premium_stickers.html
 */
export type GetPremiumStickers = (args: {
  "@type": "getPremiumStickers";
  /** The maximum number of stickers to be returned; 0-100 */
  limit: number;
}) => Obj.Stickers;

/**
 * Returns a list of installed sticker sets
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_installed_sticker_sets.html
 */
export type GetInstalledStickerSets = (args: {
  "@type": "getInstalledStickerSets";
  /** Type of the sticker sets to return */
  sticker_type: Obj.StickerType;
}) => Obj.StickerSets;

/**
 * Returns a list of archived sticker sets
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_archived_sticker_sets.html
 */
export type GetArchivedStickerSets = (args: {
  "@type": "getArchivedStickerSets";
  /** Type of the sticker sets to return */
  sticker_type: Obj.StickerType;
  /** Identifier of the sticker set from which to return the result; use 0 to get results from the beginning */
  offset_sticker_set_id: string;
  /** The maximum number of sticker sets to return; up to 100 */
  limit: number;
}) => Obj.StickerSets;

/**
 * Returns a list of trending sticker sets. For optimal performance, the number of returned sticker sets is chosen by TDLib
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_trending_sticker_sets.html
 */
export type GetTrendingStickerSets = (args: {
  "@type": "getTrendingStickerSets";
  /** Type of the sticker sets to return */
  sticker_type: Obj.StickerType;
  /** The offset from which to return the sticker sets; must be non-negative */
  offset: number;
  /** The maximum number of sticker sets to be returned; up to 100. For optimal performance, the number of returned sticker sets is chosen by TDLib and can be smaller than the specified limit, even if the end of the list has not been reached */
  limit: number;
}) => Obj.TrendingStickerSets;

/**
 * Returns a list of sticker sets attached to a file, including regular, mask, and emoji sticker sets. Currently, only animations, photos, and videos can have attached sticker sets
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_attached_sticker_sets.html
 */
export type GetAttachedStickerSets = (args: {
  "@type": "getAttachedStickerSets";
  /** File identifier */
  file_id: number;
}) => Obj.StickerSets;

/**
 * Returns information about a sticker set by its identifier
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_sticker_set.html
 */
export type GetStickerSet = (args: {
  "@type": "getStickerSet";
  /** Identifier of the sticker set */
  set_id: string;
}) => Obj.StickerSet;

/**
 * Returns name of a sticker set by its identifier
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_sticker_set_name.html
 */
export type GetStickerSetName = (args: {
  "@type": "getStickerSetName";
  /** Identifier of the sticker set */
  set_id: string;
}) => Obj.Text;

/**
 * Searches for a sticker set by its name
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_sticker_set.html
 */
export type SearchStickerSet = (args: {
  "@type": "searchStickerSet";
  /** Name of the sticker set */
  name: string;
  /** Pass true to ignore local cache of sticker sets and always send a network request */
  ignore_cache: boolean;
}) => Obj.StickerSet;

/**
 * Searches for installed sticker sets by looking for specified query in their title and name
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_installed_sticker_sets.html
 */
export type SearchInstalledStickerSets = (args: {
  "@type": "searchInstalledStickerSets";
  /** Type of the sticker sets to search for */
  sticker_type: Obj.StickerType;
  /** Query to search for */
  query: string;
  /** The maximum number of sticker sets to return */
  limit: number;
}) => Obj.StickerSets;

/**
 * Searches for sticker sets by looking for specified query in their title and name. Excludes installed sticker sets from the results
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_sticker_sets.html
 */
export type SearchStickerSets = (args: {
  "@type": "searchStickerSets";
  /** Type of the sticker sets to return */
  sticker_type: Obj.StickerType;
  /** Query to search for */
  query: string;
}) => Obj.StickerSets;

/**
 * Installs/uninstalls or activates/archives a sticker set
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1change_sticker_set.html
 */
export type ChangeStickerSet = (args: {
  "@type": "changeStickerSet";
  /** Identifier of the sticker set */
  set_id: string;
  /** The new value of is_installed */
  is_installed: boolean;
  /** The new value of is_archived. A sticker set can't be installed and archived simultaneously */
  is_archived: boolean;
}) => Obj.Ok;

/**
 * Informs the server that some trending sticker sets have been viewed by the user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1view_trending_sticker_sets.html
 */
export type ViewTrendingStickerSets = (args: {
  "@type": "viewTrendingStickerSets";
  /** Identifiers of viewed trending sticker sets */
  sticker_set_ids: string[];
}) => Obj.Ok;

/**
 * Changes the order of installed sticker sets
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1reorder_installed_sticker_sets.html
 */
export type ReorderInstalledStickerSets = (args: {
  "@type": "reorderInstalledStickerSets";
  /** Type of the sticker sets to reorder */
  sticker_type: Obj.StickerType;
  /** Identifiers of installed sticker sets in the new correct order */
  sticker_set_ids: string[];
}) => Obj.Ok;

/**
 * Returns a list of recently used stickers
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_recent_stickers.html
 */
export type GetRecentStickers = (args: {
  "@type": "getRecentStickers";
  /** Pass true to return stickers and masks that were recently attached to photos or video files; pass false to return recently sent stickers */
  is_attached: boolean;
}) => Obj.Stickers;

/**
 * Manually adds a new sticker to the list of recently used stickers. The new sticker is added to the top of the list. If the sticker was already in the list, it is removed from the list first. Only stickers belonging to a sticker set or in WEBP or WEBM format can be added to this list. Emoji stickers can't be added to recent stickers
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1add_recent_sticker.html
 */
export type AddRecentSticker = (args: {
  "@type": "addRecentSticker";
  /** Pass true to add the sticker to the list of stickers recently attached to photo or video files; pass false to add the sticker to the list of recently sent stickers */
  is_attached: boolean;
  /** Sticker file to add */
  sticker: Obj.InputFile;
}) => Obj.Stickers;

/**
 * Removes a sticker from the list of recently used stickers
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1remove_recent_sticker.html
 */
export type RemoveRecentSticker = (args: {
  "@type": "removeRecentSticker";
  /** Pass true to remove the sticker from the list of stickers recently attached to photo or video files; pass false to remove the sticker from the list of recently sent stickers */
  is_attached: boolean;
  /** Sticker file to delete */
  sticker: Obj.InputFile;
}) => Obj.Ok;

/**
 * Clears the list of recently used stickers
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1clear_recent_stickers.html
 */
export type ClearRecentStickers = (args: {
  "@type": "clearRecentStickers";
  /** Pass true to clear the list of stickers recently attached to photo or video files; pass false to clear the list of recently sent stickers */
  is_attached: boolean;
}) => Obj.Ok;

/**
 * Returns favorite stickers
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_favorite_stickers.html
 */
export type GetFavoriteStickers = (args: {
  "@type": "getFavoriteStickers";
}) => Obj.Stickers;

/**
 * Adds a new sticker to the list of favorite stickers. The new sticker is added to the top of the list. If the sticker was already in the list, it is removed from the list first. Only stickers belonging to a sticker set or in WEBP or WEBM format can be added to this list. Emoji stickers can't be added to favorite stickers
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1add_favorite_sticker.html
 */
export type AddFavoriteSticker = (args: {
  "@type": "addFavoriteSticker";
  /** Sticker file to add */
  sticker: Obj.InputFile;
}) => Obj.Ok;

/**
 * Removes a sticker from the list of favorite stickers
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1remove_favorite_sticker.html
 */
export type RemoveFavoriteSticker = (args: {
  "@type": "removeFavoriteSticker";
  /** Sticker file to delete from the list */
  sticker: Obj.InputFile;
}) => Obj.Ok;

/**
 * Returns emoji corresponding to a sticker. The list is only for informational purposes, because a sticker is always sent with a fixed emoji from the corresponding Sticker object
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_sticker_emojis.html
 */
export type GetStickerEmojis = (args: {
  "@type": "getStickerEmojis";
  /** Sticker file identifier */
  sticker: Obj.InputFile;
}) => Obj.Emojis;

/**
 * Searches for emojis by keywords. Supported only if the file database is enabled. Order of results is unspecified
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_emojis.html
 */
export type SearchEmojis = (args: {
  "@type": "searchEmojis";
  /** Text to search for */
  text: string;
  /** List of possible IETF language tags of the user's input language; may be empty if unknown */
  input_language_codes?: string[];
}) => Obj.EmojiKeywords;

/**
 * Return emojis matching the keyword. Supported only if the file database is enabled. Order of results is unspecified
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_keyword_emojis.html
 */
export type GetKeywordEmojis = (args: {
  "@type": "getKeywordEmojis";
  /** Text to search for */
  text: string;
  /** List of possible IETF language tags of the user's input language; may be empty if unknown */
  input_language_codes?: string[];
}) => Obj.Emojis;

/**
 * Returns available emoji categories
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_emoji_categories.html
 */
export type GetEmojiCategories = (args: {
  "@type": "getEmojiCategories";
  /** Type of emoji categories to return; pass null to get default emoji categories */
  type?: Obj.EmojiCategoryType;
}) => Obj.EmojiCategories;

/**
 * Returns an animated emoji corresponding to a given emoji. Returns a 404 error if the emoji has no animated emoji
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_animated_emoji.html
 */
export type GetAnimatedEmoji = (args: {
  "@type": "getAnimatedEmoji";
  /** The emoji */
  emoji: string;
}) => Obj.AnimatedEmoji;

/**
 * Returns an HTTP URL which can be used to automatically log in to the translation platform and suggest new emoji replacements. The URL will be valid for 30 seconds after generation
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_emoji_suggestions_url.html
 */
export type GetEmojiSuggestionsUrl = (args: {
  "@type": "getEmojiSuggestionsUrl";
  /** Language code for which the emoji replacements will be suggested */
  language_code: string;
}) => Obj.HttpUrl;

/**
 * Returns the list of custom emoji stickers by their identifiers. Stickers are returned in arbitrary order. Only found stickers are returned
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_custom_emoji_stickers.html
 */
export type GetCustomEmojiStickers = (args: {
  "@type": "getCustomEmojiStickers";
  /** Identifiers of custom emoji stickers. At most 200 custom emoji stickers can be received simultaneously */
  custom_emoji_ids: string[];
}) => Obj.Stickers;

/**
 * Returns default list of custom emoji stickers for placing on a chat photo
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_default_chat_photo_custom_emoji_stickers.html
 */
export type GetDefaultChatPhotoCustomEmojiStickers = (args: {
  "@type": "getDefaultChatPhotoCustomEmojiStickers";
}) => Obj.Stickers;

/**
 * Returns default list of custom emoji stickers for placing on a profile photo
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_default_profile_photo_custom_emoji_stickers.html
 */
export type GetDefaultProfilePhotoCustomEmojiStickers = (args: {
  "@type": "getDefaultProfilePhotoCustomEmojiStickers";
}) => Obj.Stickers;

/**
 * Returns default list of custom emoji stickers for reply background
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_default_background_custom_emoji_stickers.html
 */
export type GetDefaultBackgroundCustomEmojiStickers = (args: {
  "@type": "getDefaultBackgroundCustomEmojiStickers";
}) => Obj.Stickers;

/**
 * Returns saved animations
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_saved_animations.html
 */
export type GetSavedAnimations = (args: {
  "@type": "getSavedAnimations";
}) => Obj.Animations;

/**
 * Manually adds a new animation to the list of saved animations. The new animation is added to the beginning of the list. If the animation was already in the list, it is removed first. Only non-secret video animations with MIME type "video/mp4" can be added to the list
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1add_saved_animation.html
 */
export type AddSavedAnimation = (args: {
  "@type": "addSavedAnimation";
  /** The animation file to be added. Only animations known to the server (i.e., successfully sent via a message) can be added to the list */
  animation: Obj.InputFile;
}) => Obj.Ok;

/**
 * Removes an animation from the list of saved animations
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1remove_saved_animation.html
 */
export type RemoveSavedAnimation = (args: {
  "@type": "removeSavedAnimation";
  /** Animation file to be removed */
  animation: Obj.InputFile;
}) => Obj.Ok;

/**
 * Returns up to 20 recently used inline bots in the order of their last usage
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_recent_inline_bots.html
 */
export type GetRecentInlineBots = (args: {
  "@type": "getRecentInlineBots";
}) => Obj.Users;

/**
 * Returns the list of bots owned by the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_owned_bots.html
 */
export type GetOwnedBots = (args: { "@type": "getOwnedBots" }) => Obj.Users;

/**
 * Searches for recently used hashtags by their prefix
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_hashtags.html
 */
export type SearchHashtags = (args: {
  "@type": "searchHashtags";
  /** Hashtag prefix to search for */
  prefix: string;
  /** The maximum number of hashtags to be returned */
  limit: number;
}) => Obj.Hashtags;

/**
 * Removes a hashtag from the list of recently used hashtags
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1remove_recent_hashtag.html
 */
export type RemoveRecentHashtag = (args: {
  "@type": "removeRecentHashtag";
  /** Hashtag to delete */
  hashtag: string;
}) => Obj.Ok;

/**
 * Returns a link preview by the text of a message. Do not call this function too often. Returns a 404 error if the text has no link preview
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_link_preview.html
 */
export type GetLinkPreview = (args: {
  "@type": "getLinkPreview";
  /** Message text with formatting */
  text: Obj.FormattedText;
  /** Options to be used for generation of the link preview; pass null to use default link preview options */
  link_preview_options?: Obj.LinkPreviewOptions;
}) => Obj.LinkPreview;

/**
 * Returns an instant view version of a web page if available. This is an offline method if only_local is true. Returns a 404 error if the web page has no instant view page
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_web_page_instant_view.html
 */
export type GetWebPageInstantView = (args: {
  "@type": "getWebPageInstantView";
  /** The web page URL */
  url: string;
  /** Pass true to get only locally available information without sending network requests */
  only_local: boolean;
}) => Obj.WebPageInstantView;

/**
 * Changes a profile photo for the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_profile_photo.html
 */
export type SetProfilePhoto = (args: {
  "@type": "setProfilePhoto";
  /** Profile photo to set */
  photo: Obj.InputChatPhoto;
  /** Pass true to set the public photo, which will be visible even the main photo is hidden by privacy settings */
  is_public: boolean;
}) => Obj.Ok;

/**
 * Deletes a profile photo
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1delete_profile_photo.html
 */
export type DeleteProfilePhoto = (args: {
  "@type": "deleteProfilePhoto";
  /** Identifier of the profile photo to delete */
  profile_photo_id: string;
}) => Obj.Ok;

/**
 * Changes accent color and background custom emoji for the current user; for Telegram Premium users only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_accent_color.html
 */
export type SetAccentColor = (args: {
  "@type": "setAccentColor";
  /** Identifier of the accent color to use */
  accent_color_id: number;
  /** Identifier of a custom emoji to be shown on the reply header and link preview background; 0 if none */
  background_custom_emoji_id: string;
}) => Obj.Ok;

/**
 * Changes accent color and background custom emoji for profile of the current user; for Telegram Premium users only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_profile_accent_color.html
 */
export type SetProfileAccentColor = (args: {
  "@type": "setProfileAccentColor";
  /** Identifier of the accent color to use for profile; pass -1 if none */
  profile_accent_color_id: number;
  /** Identifier of a custom emoji to be shown on the user's profile photo background; 0 if none */
  profile_background_custom_emoji_id: string;
}) => Obj.Ok;

/**
 * Changes the first and last name of the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_name.html
 */
export type SetName = (args: {
  "@type": "setName";
  /** The new value of the first name for the current user; 1-64 characters */
  first_name: string;
  /** The new value of the optional last name for the current user; 0-64 characters */
  last_name: string;
}) => Obj.Ok;

/**
 * Changes the bio of the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_bio.html
 */
export type SetBio = (args: {
  "@type": "setBio";
  /** The new value of the user bio; 0-getOption("bio_length_max") characters without line feeds */
  bio: string;
}) => Obj.Ok;

/**
 * Changes the editable username of the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_username.html
 */
export type SetUsername = (args: {
  "@type": "setUsername";
  /** The new value of the username. Use an empty string to remove the username. The username can't be completely removed if there is another active or disabled username */
  username: string;
}) => Obj.Ok;

/**
 * Changes active state for a username of the current user. The editable username can't be disabled. May return an error with a message "USERNAMES_ACTIVE_TOO_MUCH" if the maximum number of active usernames has been reached
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_username_is_active.html
 */
export type ToggleUsernameIsActive = (args: {
  "@type": "toggleUsernameIsActive";
  /** The username to change */
  username: string;
  /** Pass true to activate the username; pass false to disable it */
  is_active: boolean;
}) => Obj.Ok;

/**
 * Changes order of active usernames of the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1reorder_active_usernames.html
 */
export type ReorderActiveUsernames = (args: {
  "@type": "reorderActiveUsernames";
  /** The new order of active usernames. All currently active usernames must be specified */
  usernames: string[];
}) => Obj.Ok;

/**
 * Changes the birthdate of the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_birthdate.html
 */
export type SetBirthdate = (args: {
  "@type": "setBirthdate";
  /** The new value of the current user's birthdate; pass null to remove the birthdate */
  birthdate?: Obj.Birthdate;
}) => Obj.Ok;

/**
 * Changes the personal chat of the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_personal_chat.html
 */
export type SetPersonalChat = (args: {
  "@type": "setPersonalChat";
  /** Identifier of the new personal chat; pass 0 to remove the chat. Use getSuitablePersonalChats to get suitable chats */
  chat_id: number;
}) => Obj.Ok;

/**
 * Changes the emoji status of the current user; for Telegram Premium users only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_emoji_status.html
 */
export type SetEmojiStatus = (args: {
  "@type": "setEmojiStatus";
  /** New emoji status; pass null to switch to the default badge */
  emoji_status?: Obj.EmojiStatus;
}) => Obj.Ok;

/**
 * Toggles whether the current user has sponsored messages enabled. The setting has no effect for users without Telegram Premium for which sponsored messages are always enabled
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_has_sponsored_messages_enabled.html
 */
export type ToggleHasSponsoredMessagesEnabled = (args: {
  "@type": "toggleHasSponsoredMessagesEnabled";
  /** Pass true to enable sponsored messages for the current user; false to disable them */
  has_sponsored_messages_enabled: boolean;
}) => Obj.Ok;

/**
 * Changes the business location of the current user. Requires Telegram Business subscription
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_business_location.html
 */
export type SetBusinessLocation = (args: {
  "@type": "setBusinessLocation";
  /** The new location of the business; pass null to remove the location */
  location?: Obj.BusinessLocation;
}) => Obj.Ok;

/**
 * Changes the business opening hours of the current user. Requires Telegram Business subscription
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_business_opening_hours.html
 */
export type SetBusinessOpeningHours = (args: {
  "@type": "setBusinessOpeningHours";
  /** The new opening hours of the business; pass null to remove the opening hours; up to 28 time intervals can be specified */
  opening_hours?: Obj.BusinessOpeningHours;
}) => Obj.Ok;

/**
 * Changes the business greeting message settings of the current user. Requires Telegram Business subscription
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_business_greeting_message_settings.html
 */
export type SetBusinessGreetingMessageSettings = (args: {
  "@type": "setBusinessGreetingMessageSettings";
  /** The new settings for the greeting message of the business; pass null to disable the greeting message */
  greeting_message_settings?: Obj.BusinessGreetingMessageSettings;
}) => Obj.Ok;

/**
 * Changes the business away message settings of the current user. Requires Telegram Business subscription
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_business_away_message_settings.html
 */
export type SetBusinessAwayMessageSettings = (args: {
  "@type": "setBusinessAwayMessageSettings";
  /** The new settings for the away message of the business; pass null to disable the away message */
  away_message_settings?: Obj.BusinessAwayMessageSettings;
}) => Obj.Ok;

/**
 * Changes the business start page of the current user. Requires Telegram Business subscription
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_business_start_page.html
 */
export type SetBusinessStartPage = (args: {
  "@type": "setBusinessStartPage";
  /** The new start page of the business; pass null to remove custom start page */
  start_page?: Obj.InputBusinessStartPage;
}) => Obj.Ok;

/**
 * Sends a code to the specified phone number. Aborts previous phone number verification if there was one. On success, returns information about the sent code
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1send_phone_number_code.html
 */
export type SendPhoneNumberCode = (args: {
  "@type": "sendPhoneNumberCode";
  /** The phone number, in international format */
  phone_number: string;
  /** Settings for the authentication of the user's phone number; pass null to use default settings */
  settings?: Obj.PhoneNumberAuthenticationSettings;
  /** Type of the request for which the code is sent */
  type: Obj.PhoneNumberCodeType;
}) => Obj.AuthenticationCodeInfo;

/**
 * Sends Firebase Authentication SMS to the specified phone number. Works only when received a code of the type authenticationCodeTypeFirebaseAndroid or authenticationCodeTypeFirebaseIos
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1send_phone_number_firebase_sms.html
 */
export type SendPhoneNumberFirebaseSms = (args: {
  "@type": "sendPhoneNumberFirebaseSms";
  /** Play Integrity API or SafetyNet Attestation API token for the Android application, or secret from push notification for the iOS application */
  token: string;
}) => Obj.Ok;

/**
 * Reports that authentication code wasn't delivered via SMS to the specified phone number; for official mobile applications only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1report_phone_number_code_missing.html
 */
export type ReportPhoneNumberCodeMissing = (args: {
  "@type": "reportPhoneNumberCodeMissing";
  /** Current mobile network code */
  mobile_network_code: string;
}) => Obj.Ok;

/**
 * Resends the authentication code sent to a phone number. Works only if the previously received authenticationCodeInfo next_code_type was not null and the server-specified timeout has passed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1resend_phone_number_code.html
 */
export type ResendPhoneNumberCode = (args: {
  "@type": "resendPhoneNumberCode";
  /** Reason of code resending; pass null if unknown */
  reason?: Obj.ResendCodeReason;
}) => Obj.AuthenticationCodeInfo;

/**
 * Check the authentication code and completes the request for which the code was sent if appropriate
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1check_phone_number_code.html
 */
export type CheckPhoneNumberCode = (args: {
  "@type": "checkPhoneNumberCode";
  /** Authentication code to check */
  code: string;
}) => Obj.Ok;

/**
 * Returns the business bot that is connected to the current user account. Returns a 404 error if there is no connected bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_business_connected_bot.html
 */
export type GetBusinessConnectedBot = (args: {
  "@type": "getBusinessConnectedBot";
}) => Obj.BusinessConnectedBot;

/**
 * Adds or changes business bot that is connected to the current user account
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_business_connected_bot.html
 */
export type SetBusinessConnectedBot = (args: {
  "@type": "setBusinessConnectedBot";
  /** Connection settings for the bot */
  bot: Obj.BusinessConnectedBot;
}) => Obj.Ok;

/**
 * Deletes the business bot that is connected to the current user account
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1delete_business_connected_bot.html
 */
export type DeleteBusinessConnectedBot = (args: {
  "@type": "deleteBusinessConnectedBot";
  /** Unique user identifier for the bot */
  bot_user_id: number;
}) => Obj.Ok;

/**
 * Pauses or resumes the connected business bot in a specific chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_business_connected_bot_chat_is_paused.html
 */
export type ToggleBusinessConnectedBotChatIsPaused = (args: {
  "@type": "toggleBusinessConnectedBotChatIsPaused";
  /** Chat identifier */
  chat_id: number;
  /** Pass true to pause the connected bot in the chat; pass false to resume the bot */
  is_paused: boolean;
}) => Obj.Ok;

/**
 * Removes the connected business bot from a specific chat by adding the chat to businessRecipients.excluded_chat_ids
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1remove_business_connected_bot_from_chat.html
 */
export type RemoveBusinessConnectedBotFromChat = (args: {
  "@type": "removeBusinessConnectedBotFromChat";
  /** Chat identifier */
  chat_id: number;
}) => Obj.Ok;

/**
 * Returns business chat links created for the current account
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_business_chat_links.html
 */
export type GetBusinessChatLinks = (args: {
  "@type": "getBusinessChatLinks";
}) => Obj.BusinessChatLinks;

/**
 * Creates a business chat link for the current account. Requires Telegram Business subscription. There can be up to getOption("business_chat_link_count_max") links created. Returns the created link
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1create_business_chat_link.html
 */
export type CreateBusinessChatLink = (args: {
  "@type": "createBusinessChatLink";
  /** Information about the link to create */
  link_info: Obj.InputBusinessChatLink;
}) => Obj.BusinessChatLink;

/**
 * Edits a business chat link of the current account. Requires Telegram Business subscription. Returns the edited link
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1edit_business_chat_link.html
 */
export type EditBusinessChatLink = (args: {
  "@type": "editBusinessChatLink";
  /** The link to edit */
  link: string;
  /** New description of the link */
  link_info: Obj.InputBusinessChatLink;
}) => Obj.BusinessChatLink;

/**
 * Deletes a business chat link of the current account
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1delete_business_chat_link.html
 */
export type DeleteBusinessChatLink = (args: {
  "@type": "deleteBusinessChatLink";
  /** The link to delete */
  link: string;
}) => Obj.Ok;

/**
 * Returns information about a business chat link
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_business_chat_link_info.html
 */
export type GetBusinessChatLinkInfo = (args: {
  "@type": "getBusinessChatLinkInfo";
  /** Name of the link */
  link_name: string;
}) => Obj.BusinessChatLinkInfo;

/**
 * Returns an HTTPS link, which can be used to get information about the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_user_link.html
 */
export type GetUserLink = (args: { "@type": "getUserLink" }) => Obj.UserLink;

/**
 * Searches a user by a token from the user's link
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_user_by_token.html
 */
export type SearchUserByToken = (args: {
  "@type": "searchUserByToken";
  /** Token to search for */
  token: string;
}) => Obj.User;

/**
 * Sets the list of commands supported by the bot for the given user scope and language; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_commands.html
 */
export type SetCommands = (args: {
  "@type": "setCommands";
  /** The scope to which the commands are relevant; pass null to change commands in the default bot command scope */
  scope?: Obj.BotCommandScope;
  /** A two-letter ISO 639-1 language code. If empty, the commands will be applied to all users from the given scope, for which language there are no dedicated commands */
  language_code: string;
  /** List of the bot's commands */
  commands: Obj.BotCommand[];
}) => Obj.Ok;

/**
 * Deletes commands supported by the bot for the given user scope and language; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1delete_commands.html
 */
export type DeleteCommands = (args: {
  "@type": "deleteCommands";
  /** The scope to which the commands are relevant; pass null to delete commands in the default bot command scope */
  scope?: Obj.BotCommandScope;
  /** A two-letter ISO 639-1 language code or an empty string */
  language_code: string;
}) => Obj.Ok;

/**
 * Returns the list of commands supported by the bot for the given user scope and language; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_commands.html
 */
export type GetCommands = (args: {
  "@type": "getCommands";
  /** The scope to which the commands are relevant; pass null to get commands in the default bot command scope */
  scope?: Obj.BotCommandScope;
  /** A two-letter ISO 639-1 language code or an empty string */
  language_code: string;
}) => Obj.BotCommands;

/**
 * Sets menu button for the given user or for all users; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_menu_button.html
 */
export type SetMenuButton = (args: {
  "@type": "setMenuButton";
  /** Identifier of the user or 0 to set menu button for all users */
  user_id: number;
  /** New menu button */
  menu_button: Obj.BotMenuButton;
}) => Obj.Ok;

/**
 * Returns menu button set by the bot for the given user; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_menu_button.html
 */
export type GetMenuButton = (args: {
  "@type": "getMenuButton";
  /** Identifier of the user or 0 to get the default menu button */
  user_id: number;
}) => Obj.BotMenuButton;

/**
 * Sets default administrator rights for adding the bot to basic group and supergroup chats; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_default_group_administrator_rights.html
 */
export type SetDefaultGroupAdministratorRights = (args: {
  "@type": "setDefaultGroupAdministratorRights";
  /** Default administrator rights for adding the bot to basic group and supergroup chats; pass null to remove default rights */
  default_group_administrator_rights?: Obj.ChatAdministratorRights;
}) => Obj.Ok;

/**
 * Sets default administrator rights for adding the bot to channel chats; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_default_channel_administrator_rights.html
 */
export type SetDefaultChannelAdministratorRights = (args: {
  "@type": "setDefaultChannelAdministratorRights";
  /** Default administrator rights for adding the bot to channels; pass null to remove default rights */
  default_channel_administrator_rights?: Obj.ChatAdministratorRights;
}) => Obj.Ok;

/**
 * Checks whether the specified bot can send messages to the user. Returns a 404 error if can't and the access can be granted by call to allowBotToSendMessages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1can_bot_send_messages.html
 */
export type CanBotSendMessages = (args: {
  "@type": "canBotSendMessages";
  /** Identifier of the target bot */
  bot_user_id: number;
}) => Obj.Ok;

/**
 * Allows the specified bot to send messages to the user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1allow_bot_to_send_messages.html
 */
export type AllowBotToSendMessages = (args: {
  "@type": "allowBotToSendMessages";
  /** Identifier of the target bot */
  bot_user_id: number;
}) => Obj.Ok;

/**
 * Sends a custom request from a Web App
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1send_web_app_custom_request.html
 */
export type SendWebAppCustomRequest = (args: {
  "@type": "sendWebAppCustomRequest";
  /** Identifier of the bot */
  bot_user_id: number;
  /** The method name */
  method: string;
  /** JSON-serialized method parameters */
  parameters: string;
}) => Obj.CustomRequestResult;

/**
 * Returns the list of media previews of a bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_bot_media_previews.html
 */
export type GetBotMediaPreviews = (args: {
  "@type": "getBotMediaPreviews";
  /** Identifier of the target bot. The bot must have the main Web App */
  bot_user_id: number;
}) => Obj.BotMediaPreviews;

/**
 * Returns the list of media previews for the given language and the list of languages for which the bot has dedicated previews
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_bot_media_preview_info.html
 */
export type GetBotMediaPreviewInfo = (args: {
  "@type": "getBotMediaPreviewInfo";
  /** Identifier of the target bot. The bot must be owned and must have the main Web App */
  bot_user_id: number;
  /** A two-letter ISO 639-1 language code for which to get previews. If empty, then default previews are returned */
  language_code: string;
}) => Obj.BotMediaPreviewInfo;

/**
 * Adds a new media preview to the beginning of the list of media previews of a bot. Returns the added preview after addition is completed server-side. The total number of previews must not exceed getOption("bot_media_preview_count_max") for the given language
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1add_bot_media_preview.html
 */
export type AddBotMediaPreview = (args: {
  "@type": "addBotMediaPreview";
  /** Identifier of the target bot. The bot must be owned and must have the main Web App */
  bot_user_id: number;
  /** A two-letter ISO 639-1 language code for which preview is added. If empty, then the preview will be shown to all users for whose languages there are no dedicated previews. If non-empty, then there must be an official language pack of the same name, which is returned by getLocalizationTargetInfo */
  language_code?: string;
  /** Content of the added preview */
  content: Obj.InputStoryContent;
}) => Obj.BotMediaPreview;

/**
 * Replaces media preview in the list of media previews of a bot. Returns the new preview after edit is completed server-side
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1edit_bot_media_preview.html
 */
export type EditBotMediaPreview = (args: {
  "@type": "editBotMediaPreview";
  /** Identifier of the target bot. The bot must be owned and must have the main Web App */
  bot_user_id: number;
  /** Language code of the media preview to edit */
  language_code: string;
  /** File identifier of the media to replace */
  file_id: number;
  /** Content of the new preview */
  content: Obj.InputStoryContent;
}) => Obj.BotMediaPreview;

/**
 * Changes order of media previews in the list of media previews of a bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1reorder_bot_media_previews.html
 */
export type ReorderBotMediaPreviews = (args: {
  "@type": "reorderBotMediaPreviews";
  /** Identifier of the target bot. The bot must be owned and must have the main Web App */
  bot_user_id: number;
  /** Language code of the media previews to reorder */
  language_code: string;
  /** File identifiers of the media in the new order */
  file_ids: number[];
}) => Obj.Ok;

/**
 * Delete media previews from the list of media previews of a bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1delete_bot_media_previews.html
 */
export type DeleteBotMediaPreviews = (args: {
  "@type": "deleteBotMediaPreviews";
  /** Identifier of the target bot. The bot must be owned and must have the main Web App */
  bot_user_id: number;
  /** Language code of the media previews to delete */
  language_code: string;
  /** File identifiers of the media to delete */
  file_ids: number[];
}) => Obj.Ok;

/**
 * Sets the name of a bot. Can be called only if userTypeBot.can_be_edited == true
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_bot_name.html
 */
export type SetBotName = (args: {
  "@type": "setBotName";
  /** Identifier of the target bot */
  bot_user_id: number;
  /** A two-letter ISO 639-1 language code. If empty, the name will be shown to all users for whose languages there is no dedicated name */
  language_code: string;
  /** New bot's name on the specified language; 0-64 characters; must be non-empty if language code is empty */
  name: string;
}) => Obj.Ok;

/**
 * Returns the name of a bot in the given language. Can be called only if userTypeBot.can_be_edited == true
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_bot_name.html
 */
export type GetBotName = (args: {
  "@type": "getBotName";
  /** Identifier of the target bot */
  bot_user_id: number;
  /** A two-letter ISO 639-1 language code or an empty string */
  language_code: string;
}) => Obj.Text;

/**
 * Changes a profile photo for a bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_bot_profile_photo.html
 */
export type SetBotProfilePhoto = (args: {
  "@type": "setBotProfilePhoto";
  /** Identifier of the target bot */
  bot_user_id: number;
  /** Profile photo to set; pass null to delete the chat photo */
  photo?: Obj.InputChatPhoto;
}) => Obj.Ok;

/**
 * Changes active state for a username of a bot. The editable username can't be disabled. May return an error with a message "USERNAMES_ACTIVE_TOO_MUCH" if the maximum number of active usernames has been reached. Can be called only if userTypeBot.can_be_edited == true
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_bot_username_is_active.html
 */
export type ToggleBotUsernameIsActive = (args: {
  "@type": "toggleBotUsernameIsActive";
  /** Identifier of the target bot */
  bot_user_id: number;
  /** The username to change */
  username: string;
  /** Pass true to activate the username; pass false to disable it */
  is_active: boolean;
}) => Obj.Ok;

/**
 * Changes order of active usernames of a bot. Can be called only if userTypeBot.can_be_edited == true
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1reorder_bot_active_usernames.html
 */
export type ReorderBotActiveUsernames = (args: {
  "@type": "reorderBotActiveUsernames";
  /** Identifier of the target bot */
  bot_user_id: number;
  /** The new order of active usernames. All currently active usernames must be specified */
  usernames: string[];
}) => Obj.Ok;

/**
 * Sets the text shown in the chat with a bot if the chat is empty. Can be called only if userTypeBot.can_be_edited == true
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_bot_info_description.html
 */
export type SetBotInfoDescription = (args: {
  "@type": "setBotInfoDescription";
  /** Identifier of the target bot */
  bot_user_id: number;
  /** A two-letter ISO 639-1 language code. If empty, the description will be shown to all users for whose languages there is no dedicated description */
  language_code: string;
  /** New bot's description on the specified language */
  description: string;
}) => Obj.Ok;

/**
 * Returns the text shown in the chat with a bot if the chat is empty in the given language. Can be called only if userTypeBot.can_be_edited == true
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_bot_info_description.html
 */
export type GetBotInfoDescription = (args: {
  "@type": "getBotInfoDescription";
  /** Identifier of the target bot */
  bot_user_id: number;
  /** A two-letter ISO 639-1 language code or an empty string */
  language_code: string;
}) => Obj.Text;

/**
 * Sets the text shown on a bot's profile page and sent together with the link when users share the bot. Can be called only if userTypeBot.can_be_edited == true
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_bot_info_short_description.html
 */
export type SetBotInfoShortDescription = (args: {
  "@type": "setBotInfoShortDescription";
  /** Identifier of the target bot */
  bot_user_id: number;
  /** A two-letter ISO 639-1 language code. If empty, the short description will be shown to all users for whose languages there is no dedicated description */
  language_code: string;
  /** New bot's short description on the specified language */
  short_description: string;
}) => Obj.Ok;

/**
 * Returns the text shown on a bot's profile page and sent together with the link when users share the bot in the given language. Can be called only if userTypeBot.can_be_edited == true
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_bot_info_short_description.html
 */
export type GetBotInfoShortDescription = (args: {
  "@type": "getBotInfoShortDescription";
  /** Identifier of the target bot */
  bot_user_id: number;
  /** A two-letter ISO 639-1 language code or an empty string */
  language_code: string;
}) => Obj.Text;

/**
 * Changes the verification status of a user or a chat by an owned bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_message_sender_bot_verification.html
 */
export type SetMessageSenderBotVerification = (args: {
  "@type": "setMessageSenderBotVerification";
  /** Identifier of the owned bot, which will verify the user or the chat */
  bot_user_id: number;
  /** Identifier of the user or the supergroup or channel chat, which will be verified by the bot */
  verified_id: Obj.MessageSender;
  /** Custom description of verification reason; 0-getOption("bot_verification_custom_description_length_max"). If empty, then "was verified by organization "organization_name"" will be used as description. Can be specified only if the bot is allowed to provide custom description */
  custom_description: string;
}) => Obj.Ok;

/**
 * Removes the verification status of a user or a chat by an owned bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1remove_message_sender_bot_verification.html
 */
export type RemoveMessageSenderBotVerification = (args: {
  "@type": "removeMessageSenderBotVerification";
  /** Identifier of the owned bot, which verified the user or the chat */
  bot_user_id: number;
  /** Identifier of the user or the supergroup or channel chat, which verification is removed */
  verified_id: Obj.MessageSender;
}) => Obj.Ok;

/**
 * Returns all active sessions of the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_active_sessions.html
 */
export type GetActiveSessions = (args: {
  "@type": "getActiveSessions";
}) => Obj.Sessions;

/**
 * Terminates a session of the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1terminate_session.html
 */
export type TerminateSession = (args: {
  "@type": "terminateSession";
  /** Session identifier */
  session_id: string;
}) => Obj.Ok;

/**
 * Terminates all other sessions of the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1terminate_all_other_sessions.html
 */
export type TerminateAllOtherSessions = (args: {
  "@type": "terminateAllOtherSessions";
}) => Obj.Ok;

/**
 * Confirms an unconfirmed session of the current user from another device
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1confirm_session.html
 */
export type ConfirmSession = (args: {
  "@type": "confirmSession";
  /** Session identifier */
  session_id: string;
}) => Obj.Ok;

/**
 * Toggles whether a session can accept incoming calls
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_session_can_accept_calls.html
 */
export type ToggleSessionCanAcceptCalls = (args: {
  "@type": "toggleSessionCanAcceptCalls";
  /** Session identifier */
  session_id: string;
  /** Pass true to allow accepting incoming calls by the session; pass false otherwise */
  can_accept_calls: boolean;
}) => Obj.Ok;

/**
 * Toggles whether a session can accept incoming secret chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_session_can_accept_secret_chats.html
 */
export type ToggleSessionCanAcceptSecretChats = (args: {
  "@type": "toggleSessionCanAcceptSecretChats";
  /** Session identifier */
  session_id: string;
  /** Pass true to allow accepting secret chats by the session; pass false otherwise */
  can_accept_secret_chats: boolean;
}) => Obj.Ok;

/**
 * Changes the period of inactivity after which sessions will automatically be terminated
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_inactive_session_ttl.html
 */
export type SetInactiveSessionTtl = (args: {
  "@type": "setInactiveSessionTtl";
  /** New number of days of inactivity before sessions will be automatically terminated; 1-366 days */
  inactive_session_ttl_days: number;
}) => Obj.Ok;

/**
 * Returns all website where the current user used Telegram to log in
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_connected_websites.html
 */
export type GetConnectedWebsites = (args: {
  "@type": "getConnectedWebsites";
}) => Obj.ConnectedWebsites;

/**
 * Disconnects website from the current user's Telegram account
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1disconnect_website.html
 */
export type DisconnectWebsite = (args: {
  "@type": "disconnectWebsite";
  /** Website identifier */
  website_id: string;
}) => Obj.Ok;

/**
 * Disconnects all websites from the current user's Telegram account
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1disconnect_all_websites.html
 */
export type DisconnectAllWebsites = (args: {
  "@type": "disconnectAllWebsites";
}) => Obj.Ok;

/**
 * Changes the editable username of a supergroup or channel, requires owner privileges in the supergroup or channel
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_supergroup_username.html
 */
export type SetSupergroupUsername = (args: {
  "@type": "setSupergroupUsername";
  /** Identifier of the supergroup or channel */
  supergroup_id: number;
  /** New value of the username. Use an empty string to remove the username. The username can't be completely removed if there is another active or disabled username */
  username: string;
}) => Obj.Ok;

/**
 * Changes active state for a username of a supergroup or channel, requires owner privileges in the supergroup or channel. The editable username can't be disabled. May return an error with a message "USERNAMES_ACTIVE_TOO_MUCH" if the maximum number of active usernames has been reached
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_supergroup_username_is_active.html
 */
export type ToggleSupergroupUsernameIsActive = (args: {
  "@type": "toggleSupergroupUsernameIsActive";
  /** Identifier of the supergroup or channel */
  supergroup_id: number;
  /** The username to change */
  username: string;
  /** Pass true to activate the username; pass false to disable it */
  is_active: boolean;
}) => Obj.Ok;

/**
 * Disables all active non-editable usernames of a supergroup or channel, requires owner privileges in the supergroup or channel
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1disable_all_supergroup_usernames.html
 */
export type DisableAllSupergroupUsernames = (args: {
  "@type": "disableAllSupergroupUsernames";
  /** Identifier of the supergroup or channel */
  supergroup_id: number;
}) => Obj.Ok;

/**
 * Changes order of active usernames of a supergroup or channel, requires owner privileges in the supergroup or channel
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1reorder_supergroup_active_usernames.html
 */
export type ReorderSupergroupActiveUsernames = (args: {
  "@type": "reorderSupergroupActiveUsernames";
  /** Identifier of the supergroup or channel */
  supergroup_id: number;
  /** The new order of active usernames. All currently active usernames must be specified */
  usernames: string[];
}) => Obj.Ok;

/**
 * Changes the sticker set of a supergroup; requires can_change_info administrator right
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_supergroup_sticker_set.html
 */
export type SetSupergroupStickerSet = (args: {
  "@type": "setSupergroupStickerSet";
  /** Identifier of the supergroup */
  supergroup_id: number;
  /** New value of the supergroup sticker set identifier. Use 0 to remove the supergroup sticker set */
  sticker_set_id: string;
}) => Obj.Ok;

/**
 * Changes the custom emoji sticker set of a supergroup; requires can_change_info administrator right. The chat must have at least chatBoostFeatures.min_custom_emoji_sticker_set_boost_level boost level to pass the corresponding color
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_supergroup_custom_emoji_sticker_set.html
 */
export type SetSupergroupCustomEmojiStickerSet = (args: {
  "@type": "setSupergroupCustomEmojiStickerSet";
  /** Identifier of the supergroup */
  supergroup_id: number;
  /** New value of the custom emoji sticker set identifier for the supergroup. Use 0 to remove the custom emoji sticker set in the supergroup */
  custom_emoji_sticker_set_id: string;
}) => Obj.Ok;

/**
 * Changes the number of times the supergroup must be boosted by a user to ignore slow mode and chat permission restrictions; requires can_restrict_members administrator right
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_supergroup_unrestrict_boost_count.html
 */
export type SetSupergroupUnrestrictBoostCount = (args: {
  "@type": "setSupergroupUnrestrictBoostCount";
  /** Identifier of the supergroup */
  supergroup_id: number;
  /** New value of the unrestrict_boost_count supergroup setting; 0-8. Use 0 to remove the setting */
  unrestrict_boost_count: number;
}) => Obj.Ok;

/**
 * Toggles whether sender signature or link to the account is added to sent messages in a channel; requires can_change_info member right
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_supergroup_sign_messages.html
 */
export type ToggleSupergroupSignMessages = (args: {
  "@type": "toggleSupergroupSignMessages";
  /** Identifier of the channel */
  supergroup_id: number;
  /** New value of sign_messages */
  sign_messages: boolean;
  /** New value of show_message_sender */
  show_message_sender: boolean;
}) => Obj.Ok;

/**
 * Toggles whether joining is mandatory to send messages to a discussion supergroup; requires can_restrict_members administrator right
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_supergroup_join_to_send_messages.html
 */
export type ToggleSupergroupJoinToSendMessages = (args: {
  "@type": "toggleSupergroupJoinToSendMessages";
  /** Identifier of the supergroup that isn't a broadcast group */
  supergroup_id: number;
  /** New value of join_to_send_messages */
  join_to_send_messages: boolean;
}) => Obj.Ok;

/**
 * Toggles whether all users directly joining the supergroup need to be approved by supergroup administrators; requires can_restrict_members administrator right
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_supergroup_join_by_request.html
 */
export type ToggleSupergroupJoinByRequest = (args: {
  "@type": "toggleSupergroupJoinByRequest";
  /** Identifier of the supergroup that isn't a broadcast group */
  supergroup_id: number;
  /** New value of join_by_request */
  join_by_request: boolean;
}) => Obj.Ok;

/**
 * Toggles whether the message history of a supergroup is available to new members; requires can_change_info member right
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_supergroup_is_all_history_available.html
 */
export type ToggleSupergroupIsAllHistoryAvailable = (args: {
  "@type": "toggleSupergroupIsAllHistoryAvailable";
  /** The identifier of the supergroup */
  supergroup_id: number;
  /** The new value of is_all_history_available */
  is_all_history_available: boolean;
}) => Obj.Ok;

/**
 * Toggles whether sponsored messages are shown in the channel chat; requires owner privileges in the channel. The chat must have at least chatBoostFeatures.min_sponsored_message_disable_boost_level boost level to disable sponsored messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_supergroup_can_have_sponsored_messages.html
 */
export type ToggleSupergroupCanHaveSponsoredMessages = (args: {
  "@type": "toggleSupergroupCanHaveSponsoredMessages";
  /** The identifier of the channel */
  supergroup_id: number;
  /** The new value of can_have_sponsored_messages */
  can_have_sponsored_messages: boolean;
}) => Obj.Ok;

/**
 * Toggles whether messages are automatically translated in the channel chat; requires can_change_info administrator right in the channel. The chat must have at least chatBoostFeatures.min_automatic_translation_boost_level boost level to enable automatic translation
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_supergroup_has_automatic_translation.html
 */
export type ToggleSupergroupHasAutomaticTranslation = (args: {
  "@type": "toggleSupergroupHasAutomaticTranslation";
  /** The identifier of the channel */
  supergroup_id: number;
  /** The new value of has_automatic_translation */
  has_automatic_translation: boolean;
}) => Obj.Ok;

/**
 * Toggles whether non-administrators can receive only administrators and bots using getSupergroupMembers or searchChatMembers. Can be called only if supergroupFullInfo.can_hide_members == true
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_supergroup_has_hidden_members.html
 */
export type ToggleSupergroupHasHiddenMembers = (args: {
  "@type": "toggleSupergroupHasHiddenMembers";
  /** Identifier of the supergroup */
  supergroup_id: number;
  /** New value of has_hidden_members */
  has_hidden_members: boolean;
}) => Obj.Ok;

/**
 * Toggles whether aggressive anti-spam checks are enabled in the supergroup. Can be called only if supergroupFullInfo.can_toggle_aggressive_anti_spam == true
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_supergroup_has_aggressive_anti_spam_enabled.html
 */
export type ToggleSupergroupHasAggressiveAntiSpamEnabled = (args: {
  "@type": "toggleSupergroupHasAggressiveAntiSpamEnabled";
  /** The identifier of the supergroup, which isn't a broadcast group */
  supergroup_id: number;
  /** The new value of has_aggressive_anti_spam_enabled */
  has_aggressive_anti_spam_enabled: boolean;
}) => Obj.Ok;

/**
 * Toggles whether the supergroup is a forum; requires owner privileges in the supergroup. Discussion supergroups can't be converted to forums
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_supergroup_is_forum.html
 */
export type ToggleSupergroupIsForum = (args: {
  "@type": "toggleSupergroupIsForum";
  /** Identifier of the supergroup */
  supergroup_id: number;
  /** New value of is_forum */
  is_forum: boolean;
  /** New value of has_forum_tabs; ignored if is_forum is false */
  has_forum_tabs: boolean;
}) => Obj.Ok;

/**
 * Upgrades supergroup to a broadcast group; requires owner privileges in the supergroup
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_supergroup_is_broadcast_group.html
 */
export type ToggleSupergroupIsBroadcastGroup = (args: {
  "@type": "toggleSupergroupIsBroadcastGroup";
  /** Identifier of the supergroup */
  supergroup_id: number;
}) => Obj.Ok;

/**
 * Reports messages in a supergroup as spam; requires administrator rights in the supergroup
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1report_supergroup_spam.html
 */
export type ReportSupergroupSpam = (args: {
  "@type": "reportSupergroupSpam";
  /** Supergroup identifier */
  supergroup_id: number;
  /** Identifiers of messages to report. Use messageProperties.can_report_supergroup_spam to check whether the message can be reported */
  message_ids: number[];
}) => Obj.Ok;

/**
 * Reports a false deletion of a message by aggressive anti-spam checks; requires administrator rights in the supergroup. Can be called only for messages from chatEventMessageDeleted with can_report_anti_spam_false_positive == true
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1report_supergroup_anti_spam_false_positive.html
 */
export type ReportSupergroupAntiSpamFalsePositive = (args: {
  "@type": "reportSupergroupAntiSpamFalsePositive";
  /** Supergroup identifier */
  supergroup_id: number;
  /** Identifier of the erroneously deleted message from chatEventMessageDeleted */
  message_id: number;
}) => Obj.Ok;

/**
 * Returns information about members or banned users in a supergroup or channel. Can be used only if supergroupFullInfo.can_get_members == true; additionally, administrator privileges may be required for some filters
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_supergroup_members.html
 */
export type GetSupergroupMembers = (args: {
  "@type": "getSupergroupMembers";
  /** Identifier of the supergroup or channel */
  supergroup_id: number;
  /** The type of users to return; pass null to use supergroupMembersFilterRecent */
  filter?: Obj.SupergroupMembersFilter;
  /** Number of users to skip */
  offset: number;
  /** The maximum number of users to be returned; up to 200 */
  limit: number;
}) => Obj.ChatMembers;

/**
 * Closes a secret chat, effectively transferring its state to secretChatStateClosed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1close_secret_chat.html
 */
export type CloseSecretChat = (args: {
  "@type": "closeSecretChat";
  /** Secret chat identifier */
  secret_chat_id: number;
}) => Obj.Ok;

/**
 * Returns a list of service actions taken by chat members and administrators in the last 48 hours. Available only for supergroups and channels. Requires administrator rights. Returns results in reverse chronological order (i.e., in order of decreasing event_id)
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_event_log.html
 */
export type GetChatEventLog = (args: {
  "@type": "getChatEventLog";
  /** Chat identifier */
  chat_id: number;
  /** Search query by which to filter events */
  query: string;
  /** Identifier of an event from which to return results. Use 0 to get results from the latest events */
  from_event_id: string;
  /** The maximum number of events to return; up to 100 */
  limit: number;
  /** The types of events to return; pass null to get chat events of all types */
  filters?: Obj.ChatEventLogFilters;
  /** User identifiers by which to filter events. By default, events relating to all users will be returned */
  user_ids: number[];
}) => Obj.ChatEvents;

/**
 * Returns the list of supported time zones
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_time_zones.html
 */
export type GetTimeZones = (args: { "@type": "getTimeZones" }) => Obj.TimeZones;

/**
 * Returns an invoice payment form. This method must be called when the user presses inline button of the type inlineKeyboardButtonTypeBuy, or wants to buy access to media in a messagePaidMedia message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_payment_form.html
 */
export type GetPaymentForm = (args: {
  "@type": "getPaymentForm";
  /** The invoice */
  input_invoice: Obj.InputInvoice;
  /** Preferred payment form theme; pass null to use the default theme */
  theme?: Obj.ThemeParameters;
}) => Obj.PaymentForm;

/**
 * Validates the order information provided by a user and returns the available shipping options for a flexible invoice
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1validate_order_info.html
 */
export type ValidateOrderInfo = (args: {
  "@type": "validateOrderInfo";
  /** The invoice */
  input_invoice: Obj.InputInvoice;
  /** The order information, provided by the user; pass null if empty */
  order_info?: Obj.OrderInfo;
  /** Pass true to save the order information */
  allow_save: boolean;
}) => Obj.ValidatedOrderInfo;

/**
 * Sends a filled-out payment form to the bot for final verification
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1send_payment_form.html
 */
export type SendPaymentForm = (args: {
  "@type": "sendPaymentForm";
  /** The invoice */
  input_invoice: Obj.InputInvoice;
  /** Payment form identifier returned by getPaymentForm */
  payment_form_id: string;
  /** Identifier returned by validateOrderInfo, or an empty string */
  order_info_id: string;
  /** Identifier of a chosen shipping option, if applicable */
  shipping_option_id: string;
  /** The credentials chosen by user for payment; pass null for a payment in Telegram Stars */
  credentials?: Obj.InputCredentials;
  /** Chosen by the user amount of tip in the smallest units of the currency */
  tip_amount: number;
}) => Obj.PaymentResult;

/**
 * Returns information about a successful payment
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_payment_receipt.html
 */
export type GetPaymentReceipt = (args: {
  "@type": "getPaymentReceipt";
  /** Chat identifier of the messagePaymentSuccessful message */
  chat_id: number;
  /** Message identifier */
  message_id: number;
}) => Obj.PaymentReceipt;

/**
 * Returns saved order information. Returns a 404 error if there is no saved order information
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_saved_order_info.html
 */
export type GetSavedOrderInfo = (args: {
  "@type": "getSavedOrderInfo";
}) => Obj.OrderInfo;

/**
 * Deletes saved order information
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1delete_saved_order_info.html
 */
export type DeleteSavedOrderInfo = (args: {
  "@type": "deleteSavedOrderInfo";
}) => Obj.Ok;

/**
 * Deletes saved credentials for all payment provider bots
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1delete_saved_credentials.html
 */
export type DeleteSavedCredentials = (args: {
  "@type": "deleteSavedCredentials";
}) => Obj.Ok;

/**
 * Changes settings for gift receiving for the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_gift_settings.html
 */
export type SetGiftSettings = (args: {
  "@type": "setGiftSettings";
  /** The new settings */
  settings: Obj.GiftSettings;
}) => Obj.Ok;

/**
 * Returns gifts that can be sent to other users and channel chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_available_gifts.html
 */
export type GetAvailableGifts = (args: {
  "@type": "getAvailableGifts";
}) => Obj.AvailableGifts;

/**
 * Sends a gift to another user or channel chat. May return an error with a message "STARGIFT_USAGE_LIMITED" if the gift was sold out
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1send_gift.html
 */
export type SendGift = (args: {
  "@type": "sendGift";
  /** Identifier of the gift to send */
  gift_id: string;
  /** Identifier of the user or the channel chat that will receive the gift */
  owner_id: Obj.MessageSender;
  /** Text to show along with the gift; 0-getOption("gift_text_length_max") characters. Only Bold, Italic, Underline, Strikethrough, Spoiler, and CustomEmoji entities are allowed. Must be empty if the receiver enabled paid messages */
  text: Obj.FormattedText;
  /** Pass true to show gift text and sender only to the gift receiver; otherwise, everyone will be able to see them */
  is_private: boolean;
  /** Pass true to additionally pay for the gift upgrade and allow the receiver to upgrade it for free */
  pay_for_upgrade: boolean;
}) => Obj.Ok;

/**
 * Sells a gift for Telegram Stars
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1sell_gift.html
 */
export type SellGift = (args: {
  "@type": "sellGift";
  /** Unique identifier of business connection on behalf of which to send the request; for bots only */
  business_connection_id: string;
  /** Identifier of the gift */
  received_gift_id: string;
}) => Obj.Ok;

/**
 * Toggles whether a gift is shown on the current user's or the channel's profile page; requires can_post_messages administrator right in the channel chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_gift_is_saved.html
 */
export type ToggleGiftIsSaved = (args: {
  "@type": "toggleGiftIsSaved";
  /** Identifier of the gift */
  received_gift_id: string;
  /** Pass true to display the gift on the user's or the channel's profile page; pass false to remove it from the profile page */
  is_saved: boolean;
}) => Obj.Ok;

/**
 * Changes the list of pinned gifts on the current user's or the channel's profile page; requires can_post_messages administrator right in the channel chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_pinned_gifts.html
 */
export type SetPinnedGifts = (args: {
  "@type": "setPinnedGifts";
  /** Identifier of the user or the channel chat that received the gifts */
  owner_id: Obj.MessageSender;
  /** New list of pinned gifts. All gifts must be upgraded and saved on the profile page first. There can be up to getOption("pinned_gift_count_max") pinned gifts */
  received_gift_ids: string[];
}) => Obj.Ok;

/**
 * Toggles whether notifications for new gifts received by a channel chat are sent to the current user; requires can_post_messages administrator right in the chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1toggle_chat_gift_notifications.html
 */
export type ToggleChatGiftNotifications = (args: {
  "@type": "toggleChatGiftNotifications";
  /** Identifier of the channel chat */
  chat_id: number;
  /** Pass true to enable notifications about new gifts owned by the channel chat; pass false to disable the notifications */
  are_enabled: boolean;
}) => Obj.Ok;

/**
 * Returns examples of possible upgraded gifts for a regular gift
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_gift_upgrade_preview.html
 */
export type GetGiftUpgradePreview = (args: {
  "@type": "getGiftUpgradePreview";
  /** Identifier of the gift */
  gift_id: string;
}) => Obj.GiftUpgradePreview;

/**
 * Upgrades a regular gift
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1upgrade_gift.html
 */
export type UpgradeGift = (args: {
  "@type": "upgradeGift";
  /** Unique identifier of business connection on behalf of which to send the request; for bots only */
  business_connection_id: string;
  /** Identifier of the gift */
  received_gift_id: string;
  /** Pass true to keep the original gift text, sender and receiver in the upgraded gift */
  keep_original_details: boolean;
  /** The amount of Telegram Stars required to pay for the upgrade. It the gift has prepaid_upgrade_star_count > 0, then pass 0, otherwise, pass gift.upgrade_star_count */
  star_count: number;
}) => Obj.UpgradeGiftResult;

/**
 * Sends an upgraded gift to another user or a channel chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1transfer_gift.html
 */
export type TransferGift = (args: {
  "@type": "transferGift";
  /** Unique identifier of business connection on behalf of which to send the request; for bots only */
  business_connection_id: string;
  /** Identifier of the gift */
  received_gift_id: string;
  /** Identifier of the user or the channel chat that will receive the gift */
  new_owner_id: Obj.MessageSender;
  /** The amount of Telegram Stars required to pay for the transfer */
  star_count: number;
}) => Obj.Ok;

/**
 * Sends an upgraded gift that is available for resale to another user or channel chat; gifts already owned by the current user must be transferred using transferGift and can't be passed to the method
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1send_resold_gift.html
 */
export type SendResoldGift = (args: {
  "@type": "sendResoldGift";
  /** Name of the upgraded gift to send */
  gift_name: string;
  /** Identifier of the user or the channel chat that will receive the gift */
  owner_id: Obj.MessageSender;
  /** The amount of Telegram Stars required to pay for the gift */
  star_count: number;
}) => Obj.Ok;

/**
 * Returns gifts received by the given user or chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_received_gifts.html
 */
export type GetReceivedGifts = (args: {
  "@type": "getReceivedGifts";
  /** Unique identifier of business connection on behalf of which to send the request; for bots only */
  business_connection_id: string;
  /** Identifier of the gift receiver */
  owner_id: Obj.MessageSender;
  /** Pass true to exclude gifts that aren't saved to the chat's profile page. Always true for gifts received by other users and channel chats without can_post_messages administrator right */
  exclude_unsaved: boolean;
  /** Pass true to exclude gifts that are saved to the chat's profile page. Always false for gifts received by other users and channel chats without can_post_messages administrator right */
  exclude_saved: boolean;
  /** Pass true to exclude gifts that can be purchased unlimited number of times */
  exclude_unlimited: boolean;
  /** Pass true to exclude gifts that can be purchased limited number of times */
  exclude_limited: boolean;
  /** Pass true to exclude upgraded gifts */
  exclude_upgraded: boolean;
  /** Pass true to sort results by gift price instead of send date */
  sort_by_price: boolean;
  /** Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results */
  offset: string;
  /** The maximum number of gifts to be returned; must be positive and can't be greater than 100. For optimal performance, the number of returned objects is chosen by TDLib and can be smaller than the specified limit */
  limit: number;
}) => Obj.ReceivedGifts;

/**
 * Returns information about a received gift
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_received_gift.html
 */
export type GetReceivedGift = (args: {
  "@type": "getReceivedGift";
  /** Identifier of the gift */
  received_gift_id: string;
}) => Obj.ReceivedGift;

/**
 * Returns information about an upgraded gift by its name
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_upgraded_gift.html
 */
export type GetUpgradedGift = (args: {
  "@type": "getUpgradedGift";
  /** Unique name of the upgraded gift */
  name: string;
}) => Obj.UpgradedGift;

/**
 * Returns a URL for upgraded gift withdrawal in the TON blockchain as an NFT; requires owner privileges for gifts owned by a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_upgraded_gift_withdrawal_url.html
 */
export type GetUpgradedGiftWithdrawalUrl = (args: {
  "@type": "getUpgradedGiftWithdrawalUrl";
  /** Identifier of the gift */
  received_gift_id: string;
  /** The 2-step verification password of the current user */
  password: string;
}) => Obj.HttpUrl;

/**
 * Changes resale price of a unique gift owned by the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_gift_resale_price.html
 */
export type SetGiftResalePrice = (args: {
  "@type": "setGiftResalePrice";
  /** Identifier of the unique gift */
  received_gift_id: string;
  /** The new price for the unique gift; 0 or getOption("gift_resale_star_count_min")-getOption("gift_resale_star_count_max"). Pass 0 to disallow gift resale. The current user will receive getOption("gift_resale_earnings_per_mille") Telegram Stars for each 1000 Telegram Stars paid for the gift */
  resale_star_count: number;
}) => Obj.Ok;

/**
 * Returns upgraded gifts that can be bought from other owners
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_gifts_for_resale.html
 */
export type SearchGiftsForResale = (args: {
  "@type": "searchGiftsForResale";
  /** Identifier of the regular gift that was upgraded to a unique gift */
  gift_id: string;
  /** Order in which the results will be sorted */
  order: Obj.GiftForResaleOrder;
  /** Attributes used to filter received gifts. If multiple attributes of the same type are specified, then all of them are allowed. If none attributes of specific type are specified, then all values for this attribute type are allowed */
  attributes: Obj.UpgradedGiftAttributeId[];
  /** Offset of the first entry to return as received from the previous request with the same order and attributes; use empty string to get the first chunk of results */
  offset: string;
  /** The maximum number of gifts to return */
  limit: number;
}) => Obj.GiftsForResale;

/**
 * Creates a link for the given invoice; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1create_invoice_link.html
 */
export type CreateInvoiceLink = (args: {
  "@type": "createInvoiceLink";
  /** Unique identifier of business connection on behalf of which to send the request */
  business_connection_id: string;
  /** Information about the invoice of the type inputMessageInvoice */
  invoice: Obj.InputMessageContent;
}) => Obj.HttpUrl;

/**
 * Refunds a previously done payment in Telegram Stars; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1refund_star_payment.html
 */
export type RefundStarPayment = (args: {
  "@type": "refundStarPayment";
  /** Identifier of the user that did the payment */
  user_id: number;
  /** Telegram payment identifier */
  telegram_payment_charge_id: string;
}) => Obj.Ok;

/**
 * Returns a user that can be contacted to get support
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_support_user.html
 */
export type GetSupportUser = (args: { "@type": "getSupportUser" }) => Obj.User;

/**
 * Constructs a persistent HTTP URL for a background
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_background_url.html
 */
export type GetBackgroundUrl = (args: {
  "@type": "getBackgroundUrl";
  /** Background name */
  name: string;
  /** Background type; backgroundTypeChatTheme isn't supported */
  type: Obj.BackgroundType;
}) => Obj.HttpUrl;

/**
 * Searches for a background by its name
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_background.html
 */
export type SearchBackground = (args: {
  "@type": "searchBackground";
  /** The name of the background */
  name: string;
}) => Obj.Background;

/**
 * Sets default background for chats; adds the background to the list of installed backgrounds
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_default_background.html
 */
export type SetDefaultBackground = (args: {
  "@type": "setDefaultBackground";
  /** The input background to use; pass null to create a new filled background */
  background?: Obj.InputBackground;
  /** Background type; pass null to use the default type of the remote background; backgroundTypeChatTheme isn't supported */
  type?: Obj.BackgroundType;
  /** Pass true if the background is set for a dark theme */
  for_dark_theme: boolean;
}) => Obj.Background;

/**
 * Deletes default background for chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1delete_default_background.html
 */
export type DeleteDefaultBackground = (args: {
  "@type": "deleteDefaultBackground";
  /** Pass true if the background is deleted for a dark theme */
  for_dark_theme: boolean;
}) => Obj.Ok;

/**
 * Returns backgrounds installed by the user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_installed_backgrounds.html
 */
export type GetInstalledBackgrounds = (args: {
  "@type": "getInstalledBackgrounds";
  /** Pass true to order returned backgrounds for a dark theme */
  for_dark_theme: boolean;
}) => Obj.Backgrounds;

/**
 * Removes background from the list of installed backgrounds
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1remove_installed_background.html
 */
export type RemoveInstalledBackground = (args: {
  "@type": "removeInstalledBackground";
  /** The background identifier */
  background_id: string;
}) => Obj.Ok;

/**
 * Resets list of installed backgrounds to its default value
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1reset_installed_backgrounds.html
 */
export type ResetInstalledBackgrounds = (args: {
  "@type": "resetInstalledBackgrounds";
}) => Obj.Ok;

/**
 * Returns information about the current localization target. This is an offline method if only_local is true. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_localization_target_info.html
 */
export type GetLocalizationTargetInfo = (args: {
  "@type": "getLocalizationTargetInfo";
  /** Pass true to get only locally available information without sending network requests */
  only_local: boolean;
}) => Obj.LocalizationTargetInfo;

/**
 * Returns information about a language pack. Returned language pack identifier may be different from a provided one. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_language_pack_info.html
 */
export type GetLanguagePackInfo = (args: {
  "@type": "getLanguagePackInfo";
  /** Language pack identifier */
  language_pack_id: string;
}) => Obj.LanguagePackInfo;

/**
 * Returns strings from a language pack in the current localization target by their keys. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_language_pack_strings.html
 */
export type GetLanguagePackStrings = (args: {
  "@type": "getLanguagePackStrings";
  /** Language pack identifier of the strings to be returned */
  language_pack_id: string;
  /** Language pack keys of the strings to be returned; leave empty to request all available strings */
  keys: string[];
}) => Obj.LanguagePackStrings;

/**
 * Fetches the latest versions of all strings from a language pack in the current localization target from the server. This method doesn't need to be called explicitly for the current used/base language packs. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1synchronize_language_pack.html
 */
export type SynchronizeLanguagePack = (args: {
  "@type": "synchronizeLanguagePack";
  /** Language pack identifier */
  language_pack_id: string;
}) => Obj.Ok;

/**
 * Adds a custom server language pack to the list of installed language packs in current localization target. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1add_custom_server_language_pack.html
 */
export type AddCustomServerLanguagePack = (args: {
  "@type": "addCustomServerLanguagePack";
  /** Identifier of a language pack to be added */
  language_pack_id: string;
}) => Obj.Ok;

/**
 * Adds or changes a custom local language pack to the current localization target
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_custom_language_pack.html
 */
export type SetCustomLanguagePack = (args: {
  "@type": "setCustomLanguagePack";
  /** Information about the language pack. Language pack identifier must start with 'X', consist only of English letters, digits and hyphens, and must not exceed 64 characters. Can be called before authorization */
  info: Obj.LanguagePackInfo;
  /** Strings of the new language pack */
  strings: Obj.LanguagePackString[];
}) => Obj.Ok;

/**
 * Edits information about a custom local language pack in the current localization target. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1edit_custom_language_pack_info.html
 */
export type EditCustomLanguagePackInfo = (args: {
  "@type": "editCustomLanguagePackInfo";
  /** New information about the custom local language pack */
  info: Obj.LanguagePackInfo;
}) => Obj.Ok;

/**
 * Adds, edits or deletes a string in a custom local language pack. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_custom_language_pack_string.html
 */
export type SetCustomLanguagePackString = (args: {
  "@type": "setCustomLanguagePackString";
  /** Identifier of a previously added custom local language pack in the current localization target */
  language_pack_id: string;
  /** New language pack string */
  new_string: Obj.LanguagePackString;
}) => Obj.Ok;

/**
 * Deletes all information about a language pack in the current localization target. The language pack which is currently in use (including base language pack) or is being synchronized can't be deleted. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1delete_language_pack.html
 */
export type DeleteLanguagePack = (args: {
  "@type": "deleteLanguagePack";
  /** Identifier of the language pack to delete */
  language_pack_id: string;
}) => Obj.Ok;

/**
 * Registers the currently used device for receiving push notifications. Returns a globally unique identifier of the push notification subscription
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1register_device.html
 */
export type RegisterDevice = (args: {
  "@type": "registerDevice";
  /** Device token */
  device_token: Obj.DeviceToken;
  /** List of user identifiers of other users currently using the application */
  other_user_ids: number[];
}) => Obj.PushReceiverId;

/**
 * Handles a push notification. Returns error with code 406 if the push notification is not supported and connection to the server is required to fetch new data. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1process_push_notification.html
 */
export type ProcessPushNotification = (args: {
  "@type": "processPushNotification";
  /** JSON-encoded push notification payload with all fields sent by the server, and "google.sent_time" and "google.notification.sound" fields added */
  payload: string;
}) => Obj.Ok;

/**
 * Returns a globally unique push notification subscription identifier for identification of an account, which has received a push notification. Can be called synchronously
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_push_receiver_id.html
 */
export type GetPushReceiverId = (args: {
  "@type": "getPushReceiverId";
  /** JSON-encoded push notification payload */
  payload: string;
}) => Obj.PushReceiverId;

/**
 * Returns t.me URLs recently visited by a newly registered user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_recently_visited_t_me_urls.html
 */
export type GetRecentlyVisitedTMeUrls = (args: {
  "@type": "getRecentlyVisitedTMeUrls";
  /** Google Play referrer to identify the user */
  referrer: string;
}) => Obj.TMeUrls;

/**
 * Changes user privacy settings
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_user_privacy_setting_rules.html
 */
export type SetUserPrivacySettingRules = (args: {
  "@type": "setUserPrivacySettingRules";
  /** The privacy setting */
  setting: Obj.UserPrivacySetting;
  /** The new privacy rules */
  rules: Obj.UserPrivacySettingRules;
}) => Obj.Ok;

/**
 * Returns the current privacy settings
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_user_privacy_setting_rules.html
 */
export type GetUserPrivacySettingRules = (args: {
  "@type": "getUserPrivacySettingRules";
  /** The privacy setting */
  setting: Obj.UserPrivacySetting;
}) => Obj.UserPrivacySettingRules;

/**
 * Changes privacy settings for message read date
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_read_date_privacy_settings.html
 */
export type SetReadDatePrivacySettings = (args: {
  "@type": "setReadDatePrivacySettings";
  /** New settings */
  settings: Obj.ReadDatePrivacySettings;
}) => Obj.Ok;

/**
 * Returns privacy settings for message read date
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_read_date_privacy_settings.html
 */
export type GetReadDatePrivacySettings = (args: {
  "@type": "getReadDatePrivacySettings";
}) => Obj.ReadDatePrivacySettings;

/**
 * Changes privacy settings for new chat creation; can be used only if getOption("can_set_new_chat_privacy_settings")
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_new_chat_privacy_settings.html
 */
export type SetNewChatPrivacySettings = (args: {
  "@type": "setNewChatPrivacySettings";
  /** New settings */
  settings: Obj.NewChatPrivacySettings;
}) => Obj.Ok;

/**
 * Returns privacy settings for new chat creation
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_new_chat_privacy_settings.html
 */
export type GetNewChatPrivacySettings = (args: {
  "@type": "getNewChatPrivacySettings";
}) => Obj.NewChatPrivacySettings;

/**
 * Returns the total number of Telegram Stars received by the current user for paid messages from the given user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_paid_message_revenue.html
 */
export type GetPaidMessageRevenue = (args: {
  "@type": "getPaidMessageRevenue";
  /** Identifier of the user */
  user_id: number;
}) => Obj.StarCount;

/**
 * Allows the specified user to send unpaid private messages to the current user by adding a rule to userPrivacySettingAllowUnpaidMessages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1allow_unpaid_messages_from_user.html
 */
export type AllowUnpaidMessagesFromUser = (args: {
  "@type": "allowUnpaidMessagesFromUser";
  /** Identifier of the user */
  user_id: number;
  /** Pass true to refund the user previously paid messages */
  refund_payments: boolean;
}) => Obj.Ok;

/**
 * Changes the amount of Telegram Stars that must be paid to send a message to a supergroup chat; requires can_restrict_members administrator right and supergroupFullInfo.can_enable_paid_messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_chat_paid_message_star_count.html
 */
export type SetChatPaidMessageStarCount = (args: {
  "@type": "setChatPaidMessageStarCount";
  /** Identifier of the supergroup chat */
  chat_id: number;
  /** The new number of Telegram Stars that must be paid for each message that is sent to the supergroup chat unless the sender is an administrator of the chat; 0-getOption("paid_message_star_count_max"). The supergroup will receive getOption("paid_message_earnings_per_mille") Telegram Stars for each 1000 Telegram Stars paid for message sending */
  paid_message_star_count: number;
}) => Obj.Ok;

/**
 * Check whether the current user can message another user or try to create a chat with them
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1can_send_message_to_user.html
 */
export type CanSendMessageToUser = (args: {
  "@type": "canSendMessageToUser";
  /** Identifier of the other user */
  user_id: number;
  /** Pass true to get only locally available information without sending network requests */
  only_local: boolean;
}) => Obj.CanSendMessageToUserResult;

/**
 * Returns the value of an option by its name. (Check the list of available options on https://core.telegram.org/tdlib/options.) Can be called before authorization. Can be called synchronously for options "version" and "commit_hash"
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_option.html
 */
export type GetOption = (args: {
  "@type": "getOption";
  /** The name of the option */
  name: string;
}) => Obj.OptionValue;

/**
 * Sets the value of an option. (Check the list of available options on https://core.telegram.org/tdlib/options.) Only writable options can be set. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_option.html
 */
export type SetOption = (args: {
  "@type": "setOption";
  /** The name of the option */
  name: string;
  /** The new value of the option; pass null to reset option value to a default value */
  value?: Obj.OptionValue;
}) => Obj.Ok;

/**
 * Changes the period of inactivity after which the account of the current user will automatically be deleted
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_account_ttl.html
 */
export type SetAccountTtl = (args: {
  "@type": "setAccountTtl";
  /** New account TTL */
  ttl: Obj.AccountTtl;
}) => Obj.Ok;

/**
 * Returns the period of inactivity after which the account of the current user will automatically be deleted
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_account_ttl.html
 */
export type GetAccountTtl = (args: {
  "@type": "getAccountTtl";
}) => Obj.AccountTtl;

/**
 * Deletes the account of the current user, deleting all information associated with the user from the server. The phone number of the account can be used to create a new account. Can be called before authorization when the current authorization state is authorizationStateWaitPassword
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1delete_account.html
 */
export type DeleteAccount = (args: {
  "@type": "deleteAccount";
  /** The reason why the account was deleted; optional */
  reason: string;
  /** The 2-step verification password of the current user. If the current user isn't authorized, then an empty string can be passed and account deletion can be canceled within one week */
  password: string;
}) => Obj.Ok;

/**
 * Changes the default message auto-delete time for new chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_default_message_auto_delete_time.html
 */
export type SetDefaultMessageAutoDeleteTime = (args: {
  "@type": "setDefaultMessageAutoDeleteTime";
  /** New default message auto-delete time; must be from 0 up to 365 * 86400 and be divisible by 86400. If 0, then messages aren't deleted automatically */
  message_auto_delete_time: Obj.MessageAutoDeleteTime;
}) => Obj.Ok;

/**
 * Returns default message auto-delete time setting for new chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_default_message_auto_delete_time.html
 */
export type GetDefaultMessageAutoDeleteTime = (args: {
  "@type": "getDefaultMessageAutoDeleteTime";
}) => Obj.MessageAutoDeleteTime;

/**
 * Removes a chat action bar without any other action
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1remove_chat_action_bar.html
 */
export type RemoveChatActionBar = (args: {
  "@type": "removeChatActionBar";
  /** Chat identifier */
  chat_id: number;
}) => Obj.Ok;

/**
 * Reports a chat to the Telegram moderators. A chat can be reported only from the chat action bar, or if chat.can_be_reported
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1report_chat.html
 */
export type ReportChat = (args: {
  "@type": "reportChat";
  /** Chat identifier */
  chat_id: number;
  /** Option identifier chosen by the user; leave empty for the initial request */
  option_id: string;
  /** Identifiers of reported messages. Use messageProperties.can_report_chat to check whether the message can be reported */
  message_ids: number[];
  /** Additional report details if asked by the server; 0-1024 characters; leave empty for the initial request */
  text: string;
}) => Obj.ReportChatResult;

/**
 * Reports a chat photo to the Telegram moderators. A chat photo can be reported only if chat.can_be_reported
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1report_chat_photo.html
 */
export type ReportChatPhoto = (args: {
  "@type": "reportChatPhoto";
  /** Chat identifier */
  chat_id: number;
  /** Identifier of the photo to report. Only full photos from chatPhoto can be reported */
  file_id: number;
  /** The reason for reporting the chat photo */
  reason: Obj.ReportReason;
  /** Additional report details; 0-1024 characters */
  text: string;
}) => Obj.Ok;

/**
 * Reports reactions set on a message to the Telegram moderators. Reactions on a message can be reported only if messageProperties.can_report_reactions
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1report_message_reactions.html
 */
export type ReportMessageReactions = (args: {
  "@type": "reportMessageReactions";
  /** Chat identifier */
  chat_id: number;
  /** Message identifier */
  message_id: number;
  /** Identifier of the sender, which added the reaction */
  sender_id: Obj.MessageSender;
}) => Obj.Ok;

/**
 * Returns detailed revenue statistics about a chat. Currently, this method can be used only for channels if supergroupFullInfo.can_get_revenue_statistics == true or bots if userFullInfo.bot_info.can_get_revenue_statistics == true
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_revenue_statistics.html
 */
export type GetChatRevenueStatistics = (args: {
  "@type": "getChatRevenueStatistics";
  /** Chat identifier */
  chat_id: number;
  /** Pass true if a dark theme is used by the application */
  is_dark: boolean;
}) => Obj.ChatRevenueStatistics;

/**
 * Returns a URL for chat revenue withdrawal; requires owner privileges in the channel chat or the bot. Currently, this method can be used only if getOption("can_withdraw_chat_revenue") for channels with supergroupFullInfo.can_get_revenue_statistics == true or bots with userFullInfo.bot_info.can_get_revenue_statistics == true
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_revenue_withdrawal_url.html
 */
export type GetChatRevenueWithdrawalUrl = (args: {
  "@type": "getChatRevenueWithdrawalUrl";
  /** Chat identifier */
  chat_id: number;
  /** The 2-step verification password of the current user */
  password: string;
}) => Obj.HttpUrl;

/**
 * Returns the list of revenue transactions for a chat. Currently, this method can be used only for channels if supergroupFullInfo.can_get_revenue_statistics == true or bots if userFullInfo.bot_info.can_get_revenue_statistics == true
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_revenue_transactions.html
 */
export type GetChatRevenueTransactions = (args: {
  "@type": "getChatRevenueTransactions";
  /** Chat identifier */
  chat_id: number;
  /** Number of transactions to skip */
  offset: number;
  /** The maximum number of transactions to be returned; up to 200 */
  limit: number;
}) => Obj.ChatRevenueTransactions;

/**
 * Returns detailed Telegram Star revenue statistics
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_star_revenue_statistics.html
 */
export type GetStarRevenueStatistics = (args: {
  "@type": "getStarRevenueStatistics";
  /** Identifier of the owner of the Telegram Stars; can be identifier of the current user, an owned bot, or a supergroup or a channel chat with supergroupFullInfo.can_get_star_revenue_statistics == true */
  owner_id: Obj.MessageSender;
  /** Pass true if a dark theme is used by the application */
  is_dark: boolean;
}) => Obj.StarRevenueStatistics;

/**
 * Returns a URL for Telegram Star withdrawal
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_star_withdrawal_url.html
 */
export type GetStarWithdrawalUrl = (args: {
  "@type": "getStarWithdrawalUrl";
  /** Identifier of the owner of the Telegram Stars; can be identifier of the current user, an owned bot, or an owned supergroup or channel chat */
  owner_id: Obj.MessageSender;
  /** The number of Telegram Stars to withdraw. Must be at least getOption("star_withdrawal_count_min") */
  star_count: number;
  /** The 2-step verification password of the current user */
  password: string;
}) => Obj.HttpUrl;

/**
 * Returns a URL for a Telegram Ad platform account that can be used to set up advertisements for the chat paid in the owned Telegram Stars
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_star_ad_account_url.html
 */
export type GetStarAdAccountUrl = (args: {
  "@type": "getStarAdAccountUrl";
  /** Identifier of the owner of the Telegram Stars; can be identifier of an owned bot, or identifier of an owned channel chat */
  owner_id: Obj.MessageSender;
}) => Obj.HttpUrl;

/**
 * Returns detailed statistics about a chat. Currently, this method can be used only for supergroups and channels. Can be used only if supergroupFullInfo.can_get_statistics == true
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_statistics.html
 */
export type GetChatStatistics = (args: {
  "@type": "getChatStatistics";
  /** Chat identifier */
  chat_id: number;
  /** Pass true if a dark theme is used by the application */
  is_dark: boolean;
}) => Obj.ChatStatistics;

/**
 * Returns detailed statistics about a message. Can be used only if messageProperties.can_get_statistics == true
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_message_statistics.html
 */
export type GetMessageStatistics = (args: {
  "@type": "getMessageStatistics";
  /** Chat identifier */
  chat_id: number;
  /** Message identifier */
  message_id: number;
  /** Pass true if a dark theme is used by the application */
  is_dark: boolean;
}) => Obj.MessageStatistics;

/**
 * Returns forwarded copies of a channel message to different public channels and public reposts as a story. Can be used only if messageProperties.can_get_statistics == true. For optimal performance, the number of returned messages and stories is chosen by TDLib
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_message_public_forwards.html
 */
export type GetMessagePublicForwards = (args: {
  "@type": "getMessagePublicForwards";
  /** Chat identifier of the message */
  chat_id: number;
  /** Message identifier */
  message_id: number;
  /** Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results */
  offset: string;
  /** The maximum number of messages and stories to be returned; must be positive and can't be greater than 100. For optimal performance, the number of returned objects is chosen by TDLib and can be smaller than the specified limit */
  limit: number;
}) => Obj.PublicForwards;

/**
 * Returns detailed statistics about a story. Can be used only if story.can_get_statistics == true
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_story_statistics.html
 */
export type GetStoryStatistics = (args: {
  "@type": "getStoryStatistics";
  /** Chat identifier */
  chat_id: number;
  /** Story identifier */
  story_id: number;
  /** Pass true if a dark theme is used by the application */
  is_dark: boolean;
}) => Obj.StoryStatistics;

/**
 * Loads an asynchronous or a zoomed in statistical graph
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_statistical_graph.html
 */
export type GetStatisticalGraph = (args: {
  "@type": "getStatisticalGraph";
  /** Chat identifier */
  chat_id: number;
  /** The token for graph loading */
  token: string;
  /** X-value for zoomed in graph or 0 otherwise */
  x: number;
}) => Obj.StatisticalGraph;

/**
 * Returns storage usage statistics. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_storage_statistics.html
 */
export type GetStorageStatistics = (args: {
  "@type": "getStorageStatistics";
  /** The maximum number of chats with the largest storage usage for which separate statistics need to be returned. All other chats will be grouped in entries with chat_id == 0. If the chat info database is not used, the chat_limit is ignored and is always set to 0 */
  chat_limit: number;
}) => Obj.StorageStatistics;

/**
 * Quickly returns approximate storage usage statistics. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_storage_statistics_fast.html
 */
export type GetStorageStatisticsFast = (args: {
  "@type": "getStorageStatisticsFast";
}) => Obj.StorageStatisticsFast;

/**
 * Returns database statistics
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_database_statistics.html
 */
export type GetDatabaseStatistics = (args: {
  "@type": "getDatabaseStatistics";
}) => Obj.DatabaseStatistics;

/**
 * Optimizes storage usage, i.e. deletes some files and returns new storage usage statistics. Secret thumbnails can't be deleted
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1optimize_storage.html
 */
export type OptimizeStorage = (args: {
  "@type": "optimizeStorage";
  /** Limit on the total size of files after deletion, in bytes. Pass -1 to use the default limit */
  size: number;
  /** Limit on the time that has passed since the last time a file was accessed (or creation time for some filesystems). Pass -1 to use the default limit */
  ttl: number;
  /** Limit on the total number of files after deletion. Pass -1 to use the default limit */
  count: number;
  /** The amount of time after the creation of a file during which it can't be deleted, in seconds. Pass -1 to use the default value */
  immunity_delay: number;
  /** If non-empty, only files with the given types are considered. By default, all types except thumbnails, profile photos, stickers and wallpapers are deleted */
  file_types?: Obj.FileType[];
  /** If non-empty, only files from the given chats are considered. Use 0 as chat identifier to delete files not belonging to any chat (e.g., profile photos) */
  chat_ids?: number[];
  /** If non-empty, files from the given chats are excluded. Use 0 as chat identifier to exclude all files not belonging to any chat (e.g., profile photos) */
  exclude_chat_ids?: number[];
  /** Pass true if statistics about the files that were deleted must be returned instead of the whole storage usage statistics. Affects only returned statistics */
  return_deleted_file_statistics: boolean;
  /** Same as in getStorageStatistics. Affects only returned statistics */
  chat_limit: number;
}) => Obj.StorageStatistics;

/**
 * Sets the current network type. Can be called before authorization. Calling this method forces all network connections to reopen, mitigating the delay in switching between different networks, so it must be called whenever the network is changed, even if the network type remains the same. Network type is used to check whether the library can use the network at all and also for collecting detailed network data usage statistics
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_network_type.html
 */
export type SetNetworkType = (args: {
  "@type": "setNetworkType";
  /** The new network type; pass null to set network type to networkTypeOther */
  type?: Obj.NetworkType;
}) => Obj.Ok;

/**
 * Returns network data usage statistics. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_network_statistics.html
 */
export type GetNetworkStatistics = (args: {
  "@type": "getNetworkStatistics";
  /** Pass true to get statistics only for the current library launch */
  only_current: boolean;
}) => Obj.NetworkStatistics;

/**
 * Adds the specified data to data usage statistics. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1add_network_statistics.html
 */
export type AddNetworkStatistics = (args: {
  "@type": "addNetworkStatistics";
  /** The network statistics entry with the data to be added to statistics */
  entry: Obj.NetworkStatisticsEntry;
}) => Obj.Ok;

/**
 * Resets all network data usage statistics to zero. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1reset_network_statistics.html
 */
export type ResetNetworkStatistics = (args: {
  "@type": "resetNetworkStatistics";
}) => Obj.Ok;

/**
 * Returns auto-download settings presets for the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_auto_download_settings_presets.html
 */
export type GetAutoDownloadSettingsPresets = (args: {
  "@type": "getAutoDownloadSettingsPresets";
}) => Obj.AutoDownloadSettingsPresets;

/**
 * Sets auto-download settings
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_auto_download_settings.html
 */
export type SetAutoDownloadSettings = (args: {
  "@type": "setAutoDownloadSettings";
  /** New user auto-download settings */
  settings: Obj.AutoDownloadSettings;
  /** Type of the network for which the new settings are relevant */
  type: Obj.NetworkType;
}) => Obj.Ok;

/**
 * Returns autosave settings for the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_autosave_settings.html
 */
export type GetAutosaveSettings = (args: {
  "@type": "getAutosaveSettings";
}) => Obj.AutosaveSettings;

/**
 * Sets autosave settings for the given scope. The method is guaranteed to work only after at least one call to getAutosaveSettings
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_autosave_settings.html
 */
export type SetAutosaveSettings = (args: {
  "@type": "setAutosaveSettings";
  /** Autosave settings scope */
  scope: Obj.AutosaveSettingsScope;
  /** New autosave settings for the scope; pass null to set autosave settings to default */
  settings?: Obj.ScopeAutosaveSettings;
}) => Obj.Ok;

/**
 * Clears the list of all autosave settings exceptions. The method is guaranteed to work only after at least one call to getAutosaveSettings
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1clear_autosave_settings_exceptions.html
 */
export type ClearAutosaveSettingsExceptions = (args: {
  "@type": "clearAutosaveSettingsExceptions";
}) => Obj.Ok;

/**
 * Returns information about a bank card
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_bank_card_info.html
 */
export type GetBankCardInfo = (args: {
  "@type": "getBankCardInfo";
  /** The bank card number */
  bank_card_number: string;
}) => Obj.BankCardInfo;

/**
 * Returns one of the available Telegram Passport elements
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_passport_element.html
 */
export type GetPassportElement = (args: {
  "@type": "getPassportElement";
  /** Telegram Passport element type */
  type: Obj.PassportElementType;
  /** The 2-step verification password of the current user */
  password: string;
}) => Obj.PassportElement;

/**
 * Returns all available Telegram Passport elements
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_all_passport_elements.html
 */
export type GetAllPassportElements = (args: {
  "@type": "getAllPassportElements";
  /** The 2-step verification password of the current user */
  password: string;
}) => Obj.PassportElements;

/**
 * Adds an element to the user's Telegram Passport. May return an error with a message "PHONE_VERIFICATION_NEEDED" or "EMAIL_VERIFICATION_NEEDED" if the chosen phone number or the chosen email address must be verified first
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_passport_element.html
 */
export type SetPassportElement = (args: {
  "@type": "setPassportElement";
  /** Input Telegram Passport element */
  element: Obj.InputPassportElement;
  /** The 2-step verification password of the current user */
  password: string;
}) => Obj.PassportElement;

/**
 * Deletes a Telegram Passport element
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1delete_passport_element.html
 */
export type DeletePassportElement = (args: {
  "@type": "deletePassportElement";
  /** Element type */
  type: Obj.PassportElementType;
}) => Obj.Ok;

/**
 * Informs the user that some of the elements in their Telegram Passport contain errors; for bots only. The user will not be able to resend the elements, until the errors are fixed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_passport_element_errors.html
 */
export type SetPassportElementErrors = (args: {
  "@type": "setPassportElementErrors";
  /** User identifier */
  user_id: number;
  /** The errors */
  errors: Obj.InputPassportElementError[];
}) => Obj.Ok;

/**
 * Returns an IETF language tag of the language preferred in the country, which must be used to fill native fields in Telegram Passport personal details. Returns a 404 error if unknown
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_preferred_country_language.html
 */
export type GetPreferredCountryLanguage = (args: {
  "@type": "getPreferredCountryLanguage";
  /** A two-letter ISO 3166-1 alpha-2 country code */
  country_code: string;
}) => Obj.Text;

/**
 * Sends a code to verify an email address to be added to a user's Telegram Passport
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1send_email_address_verification_code.html
 */
export type SendEmailAddressVerificationCode = (args: {
  "@type": "sendEmailAddressVerificationCode";
  /** Email address */
  email_address: string;
}) => Obj.EmailAddressAuthenticationCodeInfo;

/**
 * Resends the code to verify an email address to be added to a user's Telegram Passport
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1resend_email_address_verification_code.html
 */
export type ResendEmailAddressVerificationCode = (args: {
  "@type": "resendEmailAddressVerificationCode";
}) => Obj.EmailAddressAuthenticationCodeInfo;

/**
 * Checks the email address verification code for Telegram Passport
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1check_email_address_verification_code.html
 */
export type CheckEmailAddressVerificationCode = (args: {
  "@type": "checkEmailAddressVerificationCode";
  /** Verification code to check */
  code: string;
}) => Obj.Ok;

/**
 * Returns a Telegram Passport authorization form for sharing data with a service
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_passport_authorization_form.html
 */
export type GetPassportAuthorizationForm = (args: {
  "@type": "getPassportAuthorizationForm";
  /** User identifier of the service's bot */
  bot_user_id: number;
  /** Telegram Passport element types requested by the service */
  scope: string;
  /** Service's public key */
  public_key: string;
  /** Unique request identifier provided by the service */
  nonce: string;
}) => Obj.PassportAuthorizationForm;

/**
 * Returns already available Telegram Passport elements suitable for completing a Telegram Passport authorization form. Result can be received only once for each authorization form
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_passport_authorization_form_available_elements.html
 */
export type GetPassportAuthorizationFormAvailableElements = (args: {
  "@type": "getPassportAuthorizationFormAvailableElements";
  /** Authorization form identifier */
  authorization_form_id: number;
  /** The 2-step verification password of the current user */
  password: string;
}) => Obj.PassportElementsWithErrors;

/**
 * Sends a Telegram Passport authorization form, effectively sharing data with the service. This method must be called after getPassportAuthorizationFormAvailableElements if some previously available elements are going to be reused
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1send_passport_authorization_form.html
 */
export type SendPassportAuthorizationForm = (args: {
  "@type": "sendPassportAuthorizationForm";
  /** Authorization form identifier */
  authorization_form_id: number;
  /** Types of Telegram Passport elements chosen by user to complete the authorization form */
  types: Obj.PassportElementType[];
}) => Obj.Ok;

/**
 * Informs the server about the number of pending bot updates if they haven't been processed for a long time; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_bot_updates_status.html
 */
export type SetBotUpdatesStatus = (args: {
  "@type": "setBotUpdatesStatus";
  /** The number of pending updates */
  pending_update_count: number;
  /** The last error message */
  error_message: string;
}) => Obj.Ok;

/**
 * Uploads a file with a sticker; returns the uploaded file
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1upload_sticker_file.html
 */
export type UploadStickerFile = (args: {
  "@type": "uploadStickerFile";
  /** Sticker file owner; ignored for regular users */
  user_id: number;
  /** Sticker format */
  sticker_format: Obj.StickerFormat;
  /** File file to upload; must fit in a 512x512 square. For WEBP stickers the file must be in WEBP or PNG format, which will be converted to WEBP server-side. See https://core.telegram.org/animated_stickers#technical-requirements for technical requirements */
  sticker: Obj.InputFile;
}) => Obj.File;

/**
 * Returns a suggested name for a new sticker set with a given title
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_suggested_sticker_set_name.html
 */
export type GetSuggestedStickerSetName = (args: {
  "@type": "getSuggestedStickerSetName";
  /** Sticker set title; 1-64 characters */
  title: string;
}) => Obj.Text;

/**
 * Checks whether a name can be used for a new sticker set
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1check_sticker_set_name.html
 */
export type CheckStickerSetName = (args: {
  "@type": "checkStickerSetName";
  /** Name to be checked */
  name: string;
}) => Obj.CheckStickerSetNameResult;

/**
 * Creates a new sticker set. Returns the newly created sticker set
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1create_new_sticker_set.html
 */
export type CreateNewStickerSet = (args: {
  "@type": "createNewStickerSet";
  /** Sticker set owner; ignored for regular users */
  user_id: number;
  /** Sticker set title; 1-64 characters */
  title: string;
  /** Sticker set name. Can contain only English letters, digits and underscores. Must end with *"_by_<bot username>"* (*<bot_username>* is case insensitive) for bots; 0-64 characters. If empty, then the name returned by getSuggestedStickerSetName will be used automatically */
  name: string;
  /** Type of the stickers in the set */
  sticker_type: Obj.StickerType;
  /** Pass true if stickers in the sticker set must be repainted; for custom emoji sticker sets only */
  needs_repainting: boolean;
  /** List of stickers to be added to the set; 1-200 stickers for custom emoji sticker sets, and 1-120 stickers otherwise. For TGS stickers, uploadStickerFile must be used before the sticker is shown */
  stickers: Obj.InputSticker[];
  /** Source of the sticker set; may be empty if unknown */
  source?: string;
}) => Obj.StickerSet;

/**
 * Adds a new sticker to a set
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1add_sticker_to_set.html
 */
export type AddStickerToSet = (args: {
  "@type": "addStickerToSet";
  /** Sticker set owner; ignored for regular users */
  user_id: number;
  /** Sticker set name. The sticker set must be owned by the current user, and contain less than 200 stickers for custom emoji sticker sets and less than 120 otherwise */
  name: string;
  /** Sticker to add to the set */
  sticker: Obj.InputSticker;
}) => Obj.Ok;

/**
 * Replaces existing sticker in a set. The function is equivalent to removeStickerFromSet, then addStickerToSet, then setStickerPositionInSet
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1replace_sticker_in_set.html
 */
export type ReplaceStickerInSet = (args: {
  "@type": "replaceStickerInSet";
  /** Sticker set owner; ignored for regular users */
  user_id: number;
  /** Sticker set name. The sticker set must be owned by the current user */
  name: string;
  /** Sticker to remove from the set */
  old_sticker: Obj.InputFile;
  /** Sticker to add to the set */
  new_sticker: Obj.InputSticker;
}) => Obj.Ok;

/**
 * Sets a sticker set thumbnail
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_sticker_set_thumbnail.html
 */
export type SetStickerSetThumbnail = (args: {
  "@type": "setStickerSetThumbnail";
  /** Sticker set owner; ignored for regular users */
  user_id: number;
  /** Sticker set name. The sticker set must be owned by the current user */
  name: string;
  /** Thumbnail to set; pass null to remove the sticker set thumbnail */
  thumbnail?: Obj.InputFile;
  /** Format of the thumbnail; pass null if thumbnail is removed */
  format?: Obj.StickerFormat;
}) => Obj.Ok;

/**
 * Sets a custom emoji sticker set thumbnail
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_custom_emoji_sticker_set_thumbnail.html
 */
export type SetCustomEmojiStickerSetThumbnail = (args: {
  "@type": "setCustomEmojiStickerSetThumbnail";
  /** Sticker set name. The sticker set must be owned by the current user */
  name: string;
  /** Identifier of the custom emoji from the sticker set, which will be set as sticker set thumbnail; pass 0 to remove the sticker set thumbnail */
  custom_emoji_id: string;
}) => Obj.Ok;

/**
 * Sets a sticker set title
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_sticker_set_title.html
 */
export type SetStickerSetTitle = (args: {
  "@type": "setStickerSetTitle";
  /** Sticker set name. The sticker set must be owned by the current user */
  name: string;
  /** New sticker set title */
  title: string;
}) => Obj.Ok;

/**
 * Completely deletes a sticker set
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1delete_sticker_set.html
 */
export type DeleteStickerSet = (args: {
  "@type": "deleteStickerSet";
  /** Sticker set name. The sticker set must be owned by the current user */
  name: string;
}) => Obj.Ok;

/**
 * Changes the position of a sticker in the set to which it belongs. The sticker set must be owned by the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_sticker_position_in_set.html
 */
export type SetStickerPositionInSet = (args: {
  "@type": "setStickerPositionInSet";
  /** Sticker */
  sticker: Obj.InputFile;
  /** New position of the sticker in the set, 0-based */
  position: number;
}) => Obj.Ok;

/**
 * Removes a sticker from the set to which it belongs. The sticker set must be owned by the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1remove_sticker_from_set.html
 */
export type RemoveStickerFromSet = (args: {
  "@type": "removeStickerFromSet";
  /** Sticker to remove from the set */
  sticker: Obj.InputFile;
}) => Obj.Ok;

/**
 * Changes the list of emojis corresponding to a sticker. The sticker must belong to a regular or custom emoji sticker set that is owned by the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_sticker_emojis.html
 */
export type SetStickerEmojis = (args: {
  "@type": "setStickerEmojis";
  /** Sticker */
  sticker: Obj.InputFile;
  /** New string with 1-20 emoji corresponding to the sticker */
  emojis: string;
}) => Obj.Ok;

/**
 * Changes the list of keywords of a sticker. The sticker must belong to a regular or custom emoji sticker set that is owned by the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_sticker_keywords.html
 */
export type SetStickerKeywords = (args: {
  "@type": "setStickerKeywords";
  /** Sticker */
  sticker: Obj.InputFile;
  /** List of up to 20 keywords with total length up to 64 characters, which can be used to find the sticker */
  keywords: string[];
}) => Obj.Ok;

/**
 * Changes the mask position of a mask sticker. The sticker must belong to a mask sticker set that is owned by the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_sticker_mask_position.html
 */
export type SetStickerMaskPosition = (args: {
  "@type": "setStickerMaskPosition";
  /** Sticker */
  sticker: Obj.InputFile;
  /** Position where the mask is placed; pass null to remove mask position */
  mask_position?: Obj.MaskPosition;
}) => Obj.Ok;

/**
 * Returns sticker sets owned by the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_owned_sticker_sets.html
 */
export type GetOwnedStickerSets = (args: {
  "@type": "getOwnedStickerSets";
  /** Identifier of the sticker set from which to return owned sticker sets; use 0 to get results from the beginning */
  offset_sticker_set_id: string;
  /** The maximum number of sticker sets to be returned; must be positive and can't be greater than 100. For optimal performance, the number of returned objects is chosen by TDLib and can be smaller than the specified limit */
  limit: number;
}) => Obj.StickerSets;

/**
 * Returns information about a file with a map thumbnail in PNG format. Only map thumbnail files with size less than 1MB can be downloaded
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_map_thumbnail_file.html
 */
export type GetMapThumbnailFile = (args: {
  "@type": "getMapThumbnailFile";
  /** Location of the map center */
  location: Obj.Location;
  /** Map zoom level; 13-20 */
  zoom: number;
  /** Map width in pixels before applying scale; 16-1024 */
  width: number;
  /** Map height in pixels before applying scale; 16-1024 */
  height: number;
  /** Map scale; 1-3 */
  scale: number;
  /** Identifier of a chat in which the thumbnail will be shown. Use 0 if unknown */
  chat_id: number;
}) => Obj.File;

/**
 * Returns information about a limit, increased for Premium users. Returns a 404 error if the limit is unknown
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_premium_limit.html
 */
export type GetPremiumLimit = (args: {
  "@type": "getPremiumLimit";
  /** Type of the limit */
  limit_type: Obj.PremiumLimitType;
}) => Obj.PremiumLimit;

/**
 * Returns information about features, available to Premium users
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_premium_features.html
 */
export type GetPremiumFeatures = (args: {
  "@type": "getPremiumFeatures";
  /** Source of the request; pass null if the method is called from some non-standard source */
  source?: Obj.PremiumSource;
}) => Obj.PremiumFeatures;

/**
 * Returns examples of premium stickers for demonstration purposes
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_premium_sticker_examples.html
 */
export type GetPremiumStickerExamples = (args: {
  "@type": "getPremiumStickerExamples";
}) => Obj.Stickers;

/**
 * Returns the sticker to be used as representation of the Telegram Premium subscription
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_premium_info_sticker.html
 */
export type GetPremiumInfoSticker = (args: {
  "@type": "getPremiumInfoSticker";
  /** Number of months the Telegram Premium subscription will be active */
  month_count: number;
}) => Obj.Sticker;

/**
 * Informs TDLib that the user viewed detailed information about a Premium feature on the Premium features screen
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1view_premium_feature.html
 */
export type ViewPremiumFeature = (args: {
  "@type": "viewPremiumFeature";
  /** The viewed premium feature */
  feature: Obj.PremiumFeature;
}) => Obj.Ok;

/**
 * Informs TDLib that the user clicked Premium subscription button on the Premium features screen
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1click_premium_subscription_button.html
 */
export type ClickPremiumSubscriptionButton = (args: {
  "@type": "clickPremiumSubscriptionButton";
}) => Obj.Ok;

/**
 * Returns state of Telegram Premium subscription and promotion videos for Premium features
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_premium_state.html
 */
export type GetPremiumState = (args: {
  "@type": "getPremiumState";
}) => Obj.PremiumState;

/**
 * Returns available options for gifting Telegram Premium to a user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_premium_gift_payment_options.html
 */
export type GetPremiumGiftPaymentOptions = (args: {
  "@type": "getPremiumGiftPaymentOptions";
}) => Obj.PremiumGiftPaymentOptions;

/**
 * Returns available options for creating of Telegram Premium giveaway or manual distribution of Telegram Premium among chat members
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_premium_giveaway_payment_options.html
 */
export type GetPremiumGiveawayPaymentOptions = (args: {
  "@type": "getPremiumGiveawayPaymentOptions";
  /** Identifier of the supergroup or channel chat, which will be automatically boosted by receivers of the gift codes and which is administered by the user */
  boosted_chat_id: number;
}) => Obj.PremiumGiveawayPaymentOptions;

/**
 * Return information about a Telegram Premium gift code
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1check_premium_gift_code.html
 */
export type CheckPremiumGiftCode = (args: {
  "@type": "checkPremiumGiftCode";
  /** The code to check */
  code: string;
}) => Obj.PremiumGiftCodeInfo;

/**
 * Applies a Telegram Premium gift code
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1apply_premium_gift_code.html
 */
export type ApplyPremiumGiftCode = (args: {
  "@type": "applyPremiumGiftCode";
  /** The code to apply */
  code: string;
}) => Obj.Ok;

/**
 * Allows to buy a Telegram Premium subscription for another user with payment in Telegram Stars; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1gift_premium_with_stars.html
 */
export type GiftPremiumWithStars = (args: {
  "@type": "giftPremiumWithStars";
  /** Identifier of the user which will receive Telegram Premium */
  user_id: number;
  /** The number of Telegram Stars to pay for subscription */
  star_count: number;
  /** Number of months the Telegram Premium subscription will be active for the user */
  month_count: number;
  /** Text to show to the user receiving Telegram Premium; 0-getOption("gift_text_length_max") characters. Only Bold, Italic, Underline, Strikethrough, Spoiler, and CustomEmoji entities are allowed */
  text: Obj.FormattedText;
}) => Obj.Ok;

/**
 * Launches a prepaid giveaway
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1launch_prepaid_giveaway.html
 */
export type LaunchPrepaidGiveaway = (args: {
  "@type": "launchPrepaidGiveaway";
  /** Unique identifier of the prepaid giveaway */
  giveaway_id: string;
  /** Giveaway parameters */
  parameters: Obj.GiveawayParameters;
  /** The number of users to receive giveaway prize */
  winner_count: number;
  /** The number of Telegram Stars to be distributed through the giveaway; pass 0 for Telegram Premium giveaways */
  star_count: number;
}) => Obj.Ok;

/**
 * Returns information about a giveaway
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_giveaway_info.html
 */
export type GetGiveawayInfo = (args: {
  "@type": "getGiveawayInfo";
  /** Identifier of the channel chat which started the giveaway */
  chat_id: number;
  /** Identifier of the giveaway or a giveaway winners message in the chat */
  message_id: number;
}) => Obj.GiveawayInfo;

/**
 * Returns available options for Telegram Stars purchase
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_star_payment_options.html
 */
export type GetStarPaymentOptions = (args: {
  "@type": "getStarPaymentOptions";
}) => Obj.StarPaymentOptions;

/**
 * Returns available options for Telegram Stars gifting
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_star_gift_payment_options.html
 */
export type GetStarGiftPaymentOptions = (args: {
  "@type": "getStarGiftPaymentOptions";
  /** Identifier of the user that will receive Telegram Stars; pass 0 to get options for an unspecified user */
  user_id: number;
}) => Obj.StarPaymentOptions;

/**
 * Returns available options for Telegram Star giveaway creation
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_star_giveaway_payment_options.html
 */
export type GetStarGiveawayPaymentOptions = (args: {
  "@type": "getStarGiveawayPaymentOptions";
}) => Obj.StarGiveawayPaymentOptions;

/**
 * Returns the list of Telegram Star transactions for the specified owner
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_star_transactions.html
 */
export type GetStarTransactions = (args: {
  "@type": "getStarTransactions";
  /** Identifier of the owner of the Telegram Stars; can be the identifier of the current user, identifier of an owned bot, or identifier of a supergroup or a channel chat with supergroupFullInfo.can_get_star_revenue_statistics == true */
  owner_id: Obj.MessageSender;
  /** If non-empty, only transactions related to the Star Subscription will be returned */
  subscription_id?: string;
  /** Direction of the transactions to receive; pass null to get all transactions */
  direction?: Obj.StarTransactionDirection;
  /** Offset of the first transaction to return as received from the previous request; use empty string to get the first chunk of results */
  offset: string;
  /** The maximum number of transactions to return */
  limit: number;
}) => Obj.StarTransactions;

/**
 * Returns the list of Telegram Star subscriptions for the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_star_subscriptions.html
 */
export type GetStarSubscriptions = (args: {
  "@type": "getStarSubscriptions";
  /** Pass true to receive only expiring subscriptions for which there are no enough Telegram Stars to extend */
  only_expiring: boolean;
  /** Offset of the first subscription to return as received from the previous request; use empty string to get the first chunk of results */
  offset: string;
}) => Obj.StarSubscriptions;

/**
 * Checks whether an in-store purchase is possible. Must be called before any in-store purchase. For official applications only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1can_purchase_from_store.html
 */
export type CanPurchaseFromStore = (args: {
  "@type": "canPurchaseFromStore";
  /** Transaction purpose */
  purpose: Obj.StorePaymentPurpose;
}) => Obj.Ok;

/**
 * Informs server about an in-store purchase. For official applications only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1assign_store_transaction.html
 */
export type AssignStoreTransaction = (args: {
  "@type": "assignStoreTransaction";
  /** Information about the transaction */
  transaction: Obj.StoreTransaction;
  /** Transaction purpose */
  purpose: Obj.StorePaymentPurpose;
}) => Obj.Ok;

/**
 * Cancels or re-enables Telegram Star subscription
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1edit_star_subscription.html
 */
export type EditStarSubscription = (args: {
  "@type": "editStarSubscription";
  /** Identifier of the subscription to change */
  subscription_id: string;
  /** New value of is_canceled */
  is_canceled: boolean;
}) => Obj.Ok;

/**
 * Cancels or re-enables Telegram Star subscription for a user; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1edit_user_star_subscription.html
 */
export type EditUserStarSubscription = (args: {
  "@type": "editUserStarSubscription";
  /** User identifier */
  user_id: number;
  /** Telegram payment identifier of the subscription */
  telegram_payment_charge_id: string;
  /** Pass true to cancel the subscription; pass false to allow the user to enable it */
  is_canceled: boolean;
}) => Obj.Ok;

/**
 * Reuses an active Telegram Star subscription to a channel chat and joins the chat again
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1reuse_star_subscription.html
 */
export type ReuseStarSubscription = (args: {
  "@type": "reuseStarSubscription";
  /** Identifier of the subscription */
  subscription_id: string;
}) => Obj.Ok;

/**
 * Changes affiliate program for a bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_chat_affiliate_program.html
 */
export type SetChatAffiliateProgram = (args: {
  "@type": "setChatAffiliateProgram";
  /** Identifier of the chat with an owned bot for which affiliate program is changed */
  chat_id: number;
  /** Parameters of the affiliate program; pass null to close the currently active program. If there is an active program, then commission and program duration can only be increased. If the active program is scheduled to be closed, then it can't be changed anymore */
  parameters?: Obj.AffiliateProgramParameters;
}) => Obj.Ok;

/**
 * Searches a chat with an affiliate program. Returns the chat if found and the program is active
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_chat_affiliate_program.html
 */
export type SearchChatAffiliateProgram = (args: {
  "@type": "searchChatAffiliateProgram";
  /** Username of the chat */
  username: string;
  /** The referrer from an internalLinkTypeChatAffiliateProgram link */
  referrer: string;
}) => Obj.Chat;

/**
 * Searches affiliate programs that can be connected to the given affiliate
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_affiliate_programs.html
 */
export type SearchAffiliatePrograms = (args: {
  "@type": "searchAffiliatePrograms";
  /** The affiliate for which affiliate programs are searched for */
  affiliate: Obj.AffiliateType;
  /** Sort order for the results */
  sort_order: Obj.AffiliateProgramSortOrder;
  /** Offset of the first affiliate program to return as received from the previous request; use empty string to get the first chunk of results */
  offset: string;
  /** The maximum number of affiliate programs to return */
  limit: number;
}) => Obj.FoundAffiliatePrograms;

/**
 * Connects an affiliate program to the given affiliate. Returns information about the connected affiliate program
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1connect_affiliate_program.html
 */
export type ConnectAffiliateProgram = (args: {
  "@type": "connectAffiliateProgram";
  /** The affiliate to which the affiliate program will be connected */
  affiliate: Obj.AffiliateType;
  /** Identifier of the bot, which affiliate program is connected */
  bot_user_id: number;
}) => Obj.ConnectedAffiliateProgram;

/**
 * Disconnects an affiliate program from the given affiliate and immediately deactivates its referral link. Returns updated information about the disconnected affiliate program
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1disconnect_affiliate_program.html
 */
export type DisconnectAffiliateProgram = (args: {
  "@type": "disconnectAffiliateProgram";
  /** The affiliate to which the affiliate program is connected */
  affiliate: Obj.AffiliateType;
  /** The referral link of the affiliate program */
  url: string;
}) => Obj.ConnectedAffiliateProgram;

/**
 * Returns an affiliate program that were connected to the given affiliate by identifier of the bot that created the program
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_connected_affiliate_program.html
 */
export type GetConnectedAffiliateProgram = (args: {
  "@type": "getConnectedAffiliateProgram";
  /** The affiliate to which the affiliate program will be connected */
  affiliate: Obj.AffiliateType;
  /** Identifier of the bot that created the program */
  bot_user_id: number;
}) => Obj.ConnectedAffiliateProgram;

/**
 * Returns affiliate programs that were connected to the given affiliate
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_connected_affiliate_programs.html
 */
export type GetConnectedAffiliatePrograms = (args: {
  "@type": "getConnectedAffiliatePrograms";
  /** The affiliate to which the affiliate program were connected */
  affiliate: Obj.AffiliateType;
  /** Offset of the first affiliate program to return as received from the previous request; use empty string to get the first chunk of results */
  offset: string;
  /** The maximum number of affiliate programs to return */
  limit: number;
}) => Obj.ConnectedAffiliatePrograms;

/**
 * Returns information about features, available to Business users
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_business_features.html
 */
export type GetBusinessFeatures = (args: {
  "@type": "getBusinessFeatures";
  /** Source of the request; pass null if the method is called from settings or some non-standard source */
  source?: Obj.BusinessFeature;
}) => Obj.BusinessFeatures;

/**
 * Accepts Telegram terms of services
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1accept_terms_of_service.html
 */
export type AcceptTermsOfService = (args: {
  "@type": "acceptTermsOfService";
  /** Terms of service identifier */
  terms_of_service_id: string;
}) => Obj.Ok;

/**
 * Searches specified query by word prefixes in the provided strings. Returns 0-based positions of strings that matched. Can be called synchronously
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_strings_by_prefix.html
 */
export type SearchStringsByPrefix = (args: {
  "@type": "searchStringsByPrefix";
  /** The strings to search in for the query */
  strings: string[];
  /** Query to search for */
  query: string;
  /** The maximum number of objects to return */
  limit: number;
  /** Pass true to receive no results for an empty query */
  return_none_for_empty_query: boolean;
}) => Obj.FoundPositions;

/**
 * Sends a custom request; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1send_custom_request.html
 */
export type SendCustomRequest = (args: {
  "@type": "sendCustomRequest";
  /** The method name */
  method: string;
  /** JSON-serialized method parameters */
  parameters: string;
}) => Obj.CustomRequestResult;

/**
 * Answers a custom query; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1answer_custom_query.html
 */
export type AnswerCustomQuery = (args: {
  "@type": "answerCustomQuery";
  /** Identifier of a custom query */
  custom_query_id: string;
  /** JSON-serialized answer to the query */
  data: string;
}) => Obj.Ok;

/**
 * Succeeds after a specified amount of time has passed. Can be called before initialization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_alarm.html
 */
export type SetAlarm = (args: {
  "@type": "setAlarm";
  /** Number of seconds before the function returns */
  seconds: number;
}) => Obj.Ok;

/**
 * Returns information about existing countries. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_countries.html
 */
export type GetCountries = (args: { "@type": "getCountries" }) => Obj.Countries;

/**
 * Uses the current IP address to find the current country. Returns two-letter ISO 3166-1 alpha-2 country code. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_country_code.html
 */
export type GetCountryCode = (args: { "@type": "getCountryCode" }) => Obj.Text;

/**
 * Returns information about a phone number by its prefix. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_phone_number_info.html
 */
export type GetPhoneNumberInfo = (args: {
  "@type": "getPhoneNumberInfo";
  /** The phone number prefix */
  phone_number_prefix: string;
}) => Obj.PhoneNumberInfo;

/**
 * Returns information about a phone number by its prefix synchronously. getCountries must be called at least once after changing localization to the specified language if properly localized country information is expected. Can be called synchronously
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_phone_number_info_sync.html
 */
export type GetPhoneNumberInfoSync = (args: {
  "@type": "getPhoneNumberInfoSync";
  /** A two-letter ISO 639-1 language code for country information localization */
  language_code: string;
  /** The phone number prefix */
  phone_number_prefix: string;
}) => Obj.PhoneNumberInfo;

/**
 * Returns information about a given collectible item that was purchased at https://fragment.com
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_collectible_item_info.html
 */
export type GetCollectibleItemInfo = (args: {
  "@type": "getCollectibleItemInfo";
  /** Type of the collectible item. The item must be used by a user and must be visible to the current user */
  type: Obj.CollectibleItemType;
}) => Obj.CollectibleItemInfo;

/**
 * Returns information about a tg:// deep link. Use "tg://need_update_for_some_feature" or "tg:some_unsupported_feature" for testing. Returns a 404 error for unknown links. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_deep_link_info.html
 */
export type GetDeepLinkInfo = (args: {
  "@type": "getDeepLinkInfo";
  /** The link */
  link: string;
}) => Obj.DeepLinkInfo;

/**
 * Returns application config, provided by the server. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_application_config.html
 */
export type GetApplicationConfig = (args: {
  "@type": "getApplicationConfig";
}) => Obj.JsonValue;

/**
 * Saves application log event on the server. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1save_application_log_event.html
 */
export type SaveApplicationLogEvent = (args: {
  "@type": "saveApplicationLogEvent";
  /** Event type */
  type: string;
  /** Optional chat identifier, associated with the event */
  chat_id: number;
  /** The log event data */
  data: Obj.JsonValue;
}) => Obj.Ok;

/**
 * Returns the link for downloading official Telegram application to be used when the current user invites friends to Telegram
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_application_download_link.html
 */
export type GetApplicationDownloadLink = (args: {
  "@type": "getApplicationDownloadLink";
}) => Obj.HttpUrl;

/**
 * Adds a proxy server for network requests. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1add_proxy.html
 */
export type AddProxy = (args: {
  "@type": "addProxy";
  /** Proxy server domain or IP address */
  server: string;
  /** Proxy server port */
  port: number;
  /** Pass true to immediately enable the proxy */
  enable: boolean;
  /** Proxy type */
  type: Obj.ProxyType;
}) => Obj.Proxy;

/**
 * Edits an existing proxy server for network requests. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1edit_proxy.html
 */
export type EditProxy = (args: {
  "@type": "editProxy";
  /** Proxy identifier */
  proxy_id: number;
  /** Proxy server domain or IP address */
  server: string;
  /** Proxy server port */
  port: number;
  /** Pass true to immediately enable the proxy */
  enable: boolean;
  /** Proxy type */
  type: Obj.ProxyType;
}) => Obj.Proxy;

/**
 * Enables a proxy. Only one proxy can be enabled at a time. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1enable_proxy.html
 */
export type EnableProxy = (args: {
  "@type": "enableProxy";
  /** Proxy identifier */
  proxy_id: number;
}) => Obj.Ok;

/**
 * Disables the currently enabled proxy. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1disable_proxy.html
 */
export type DisableProxy = (args: { "@type": "disableProxy" }) => Obj.Ok;

/**
 * Removes a proxy server. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1remove_proxy.html
 */
export type RemoveProxy = (args: {
  "@type": "removeProxy";
  /** Proxy identifier */
  proxy_id: number;
}) => Obj.Ok;

/**
 * Returns the list of proxies that are currently set up. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_proxies.html
 */
export type GetProxies = (args: { "@type": "getProxies" }) => Obj.Proxies;

/**
 * Returns an HTTPS link, which can be used to add a proxy. Available only for SOCKS5 and MTProto proxies. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_proxy_link.html
 */
export type GetProxyLink = (args: {
  "@type": "getProxyLink";
  /** Proxy identifier */
  proxy_id: number;
}) => Obj.HttpUrl;

/**
 * Computes time needed to receive a response from a Telegram server through a proxy. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1ping_proxy.html
 */
export type PingProxy = (args: {
  "@type": "pingProxy";
  /** Proxy identifier. Use 0 to ping a Telegram server without a proxy */
  proxy_id: number;
}) => Obj.Seconds;

/**
 * Sets new log stream for internal logging of TDLib. Can be called synchronously
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_log_stream.html
 */
export type SetLogStream = (args: {
  "@type": "setLogStream";
  /** New log stream */
  log_stream: Obj.LogStream;
}) => Obj.Ok;

/**
 * Returns information about currently used log stream for internal logging of TDLib. Can be called synchronously
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_log_stream.html
 */
export type GetLogStream = (args: { "@type": "getLogStream" }) => Obj.LogStream;

/**
 * Sets the verbosity level of the internal logging of TDLib. Can be called synchronously
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_log_verbosity_level.html
 */
export type SetLogVerbosityLevel = (args: {
  "@type": "setLogVerbosityLevel";
  /** New value of the verbosity level for logging. Value 0 corresponds to fatal errors, value 1 corresponds to errors, value 2 corresponds to warnings and debug warnings, value 3 corresponds to informational, value 4 corresponds to debug, value 5 corresponds to verbose debug, value greater than 5 and up to 1023 can be used to enable even more logging */
  new_verbosity_level: number;
}) => Obj.Ok;

/**
 * Returns current verbosity level of the internal logging of TDLib. Can be called synchronously
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_log_verbosity_level.html
 */
export type GetLogVerbosityLevel = (args: {
  "@type": "getLogVerbosityLevel";
}) => Obj.LogVerbosityLevel;

/**
 * Returns the list of available TDLib internal log tags, for example, ["actor", "binlog", "connections", "notifications", "proxy"]. Can be called synchronously
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_log_tags.html
 */
export type GetLogTags = (args: { "@type": "getLogTags" }) => Obj.LogTags;

/**
 * Sets the verbosity level for a specified TDLib internal log tag. Can be called synchronously
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_log_tag_verbosity_level.html
 */
export type SetLogTagVerbosityLevel = (args: {
  "@type": "setLogTagVerbosityLevel";
  /** Logging tag to change verbosity level */
  tag: string;
  /** New verbosity level; 1-1024 */
  new_verbosity_level: number;
}) => Obj.Ok;

/**
 * Returns current verbosity level for a specified TDLib internal log tag. Can be called synchronously
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_log_tag_verbosity_level.html
 */
export type GetLogTagVerbosityLevel = (args: {
  "@type": "getLogTagVerbosityLevel";
  /** Logging tag to change verbosity level */
  tag: string;
}) => Obj.LogVerbosityLevel;

/**
 * Adds a message to TDLib internal log. Can be called synchronously
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1add_log_message.html
 */
export type AddLogMessage = (args: {
  "@type": "addLogMessage";
  /** The minimum verbosity level needed for the message to be logged; 0-1023 */
  verbosity_level: number;
  /** Text of a message to log */
  text: string;
}) => Obj.Ok;

/**
 * Returns support information for the given user; for Telegram support only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_user_support_info.html
 */
export type GetUserSupportInfo = (args: {
  "@type": "getUserSupportInfo";
  /** User identifier */
  user_id: number;
}) => Obj.UserSupportInfo;

/**
 * Sets support information for the given user; for Telegram support only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1set_user_support_info.html
 */
export type SetUserSupportInfo = (args: {
  "@type": "setUserSupportInfo";
  /** User identifier */
  user_id: number;
  /** New information message */
  message: Obj.FormattedText;
}) => Obj.UserSupportInfo;

/**
 * Returns localized name of the Telegram support user; for Telegram support only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_support_name.html
 */
export type GetSupportName = (args: { "@type": "getSupportName" }) => Obj.Text;

/**
 * Does nothing; for testing only. This is an offline method. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1test_call_empty.html
 */
export type TestCallEmpty = (args: { "@type": "testCallEmpty" }) => Obj.Ok;

/**
 * Returns the received string; for testing only. This is an offline method. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1test_call_string.html
 */
export type TestCallString = (args: {
  "@type": "testCallString";
  /** String to return */
  x: string;
}) => Obj.TestString;

/**
 * Returns the received bytes; for testing only. This is an offline method. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1test_call_bytes.html
 */
export type TestCallBytes = (args: {
  "@type": "testCallBytes";
  /** Bytes to return */
  x: string;
}) => Obj.TestBytes;

/**
 * Returns the received vector of numbers; for testing only. This is an offline method. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1test_call_vector_int.html
 */
export type TestCallVectorInt = (args: {
  "@type": "testCallVectorInt";
  /** Vector of numbers to return */
  x: number[];
}) => Obj.TestVectorInt;

/**
 * Returns the received vector of objects containing a number; for testing only. This is an offline method. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1test_call_vector_int_object.html
 */
export type TestCallVectorIntObject = (args: {
  "@type": "testCallVectorIntObject";
  /** Vector of objects to return */
  x: Obj.TestInt[];
}) => Obj.TestVectorIntObject;

/**
 * Returns the received vector of strings; for testing only. This is an offline method. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1test_call_vector_string.html
 */
export type TestCallVectorString = (args: {
  "@type": "testCallVectorString";
  /** Vector of strings to return */
  x: string[];
}) => Obj.TestVectorString;

/**
 * Returns the received vector of objects containing a string; for testing only. This is an offline method. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1test_call_vector_string_object.html
 */
export type TestCallVectorStringObject = (args: {
  "@type": "testCallVectorStringObject";
  /** Vector of objects to return */
  x: Obj.TestString[];
}) => Obj.TestVectorStringObject;

/**
 * Returns the squared received number; for testing only. This is an offline method. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1test_square_int.html
 */
export type TestSquareInt = (args: {
  "@type": "testSquareInt";
  /** Number to square */
  x: number;
}) => Obj.TestInt;

/**
 * Sends a simple network request to the Telegram servers; for testing only. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1test_network.html
 */
export type TestNetwork = (args: { "@type": "testNetwork" }) => Obj.Ok;

/**
 * Sends a simple network request to the Telegram servers via proxy; for testing only. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1test_proxy.html
 */
export type TestProxy = (args: {
  "@type": "testProxy";
  /** Proxy server domain or IP address */
  server: string;
  /** Proxy server port */
  port: number;
  /** Proxy type */
  type: Obj.ProxyType;
  /** Identifier of a datacenter with which to test connection */
  dc_id: number;
  /** The maximum overall timeout for the request */
  timeout: number;
}) => Obj.Ok;

/**
 * Forces an updates.getDifference call to the Telegram servers; for testing only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1test_get_difference.html
 */
export type TestGetDifference = (args: {
  "@type": "testGetDifference";
}) => Obj.Ok;

/**
 * Does nothing and ensures that the Update object is used; for testing only. This is an offline method. Can be called before authorization
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1test_use_update.html
 */
export type TestUseUpdate = (args: { "@type": "testUseUpdate" }) => Obj.Update;

/**
 * Returns the specified error and ensures that the Error object is used; for testing only. Can be called synchronously
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1test_return_error.html
 */
export type TestReturnError = (args: {
  "@type": "testReturnError";
  /** The error to be returned */
  error: Obj.Error;
}) => Obj.Error;

export type Fn =
  | GetAuthorizationState
  | SetTdlibParameters
  | SetAuthenticationPhoneNumber
  | CheckAuthenticationPremiumPurchase
  | SetAuthenticationPremiumPurchaseTransaction
  | SetAuthenticationEmailAddress
  | ResendAuthenticationCode
  | CheckAuthenticationEmailCode
  | CheckAuthenticationCode
  | RequestQrCodeAuthentication
  | RegisterUser
  | ResetAuthenticationEmailAddress
  | CheckAuthenticationPassword
  | RequestAuthenticationPasswordRecovery
  | CheckAuthenticationPasswordRecoveryCode
  | RecoverAuthenticationPassword
  | SendAuthenticationFirebaseSms
  | ReportAuthenticationCodeMissing
  | CheckAuthenticationBotToken
  | LogOut
  | Close
  | Destroy
  | ConfirmQrCodeAuthentication
  | GetCurrentState
  | SetDatabaseEncryptionKey
  | GetPasswordState
  | SetPassword
  | SetLoginEmailAddress
  | ResendLoginEmailAddressCode
  | CheckLoginEmailAddressCode
  | GetRecoveryEmailAddress
  | SetRecoveryEmailAddress
  | CheckRecoveryEmailAddressCode
  | ResendRecoveryEmailAddressCode
  | CancelRecoveryEmailAddressVerification
  | RequestPasswordRecovery
  | CheckPasswordRecoveryCode
  | RecoverPassword
  | ResetPassword
  | CancelPasswordReset
  | CreateTemporaryPassword
  | GetTemporaryPasswordState
  | GetMe
  | GetUser
  | GetUserFullInfo
  | GetBasicGroup
  | GetBasicGroupFullInfo
  | GetSupergroup
  | GetSupergroupFullInfo
  | GetSecretChat
  | GetChat
  | GetMessage
  | GetMessageLocally
  | GetRepliedMessage
  | GetChatPinnedMessage
  | GetCallbackQueryMessage
  | GetMessages
  | GetMessageProperties
  | GetMessageThread
  | GetMessageReadDate
  | GetMessageViewers
  | GetMessageAuthor
  | GetFile
  | GetRemoteFile
  | LoadChats
  | GetChats
  | SearchPublicChat
  | SearchPublicChats
  | SearchChats
  | SearchChatsOnServer
  | GetRecommendedChats
  | GetChatSimilarChats
  | GetChatSimilarChatCount
  | OpenChatSimilarChat
  | GetBotSimilarBots
  | GetBotSimilarBotCount
  | OpenBotSimilarBot
  | GetTopChats
  | RemoveTopChat
  | SearchRecentlyFoundChats
  | AddRecentlyFoundChat
  | RemoveRecentlyFoundChat
  | ClearRecentlyFoundChats
  | GetRecentlyOpenedChats
  | CheckChatUsername
  | GetCreatedPublicChats
  | CheckCreatedPublicChatsLimit
  | GetSuitableDiscussionChats
  | GetInactiveSupergroupChats
  | GetSuitablePersonalChats
  | LoadDirectMessagesChatTopics
  | GetDirectMessagesChatTopic
  | GetDirectMessagesChatTopicHistory
  | GetDirectMessagesChatTopicMessageByDate
  | DeleteDirectMessagesChatTopicHistory
  | DeleteDirectMessagesChatTopicMessagesByDate
  | SetDirectMessagesChatTopicIsMarkedAsUnread
  | SetDirectMessagesChatTopicDraftMessage
  | UnpinAllDirectMessagesChatTopicMessages
  | ReadAllDirectMessagesChatTopicReactions
  | LoadSavedMessagesTopics
  | GetSavedMessagesTopicHistory
  | GetSavedMessagesTopicMessageByDate
  | DeleteSavedMessagesTopicHistory
  | DeleteSavedMessagesTopicMessagesByDate
  | ToggleSavedMessagesTopicIsPinned
  | SetPinnedSavedMessagesTopics
  | GetGroupsInCommon
  | GetChatHistory
  | GetMessageThreadHistory
  | DeleteChatHistory
  | DeleteChat
  | SearchChatMessages
  | SearchMessages
  | SearchSecretMessages
  | SearchSavedMessages
  | SearchCallMessages
  | SearchOutgoingDocumentMessages
  | SearchPublicMessagesByTag
  | SearchPublicStoriesByTag
  | SearchPublicStoriesByLocation
  | SearchPublicStoriesByVenue
  | GetSearchedForTags
  | RemoveSearchedForTag
  | ClearSearchedForTags
  | DeleteAllCallMessages
  | SearchChatRecentLocationMessages
  | GetChatMessageByDate
  | GetChatSparseMessagePositions
  | GetChatMessageCalendar
  | GetChatMessageCount
  | GetChatMessagePosition
  | GetChatScheduledMessages
  | GetChatSponsoredMessages
  | ClickChatSponsoredMessage
  | ReportChatSponsoredMessage
  | GetSearchSponsoredChats
  | ViewSponsoredChat
  | OpenSponsoredChat
  | ReportSponsoredChat
  | RemoveNotification
  | RemoveNotificationGroup
  | GetMessageLink
  | GetMessageEmbeddingCode
  | GetMessageLinkInfo
  | TranslateText
  | TranslateMessageText
  | RecognizeSpeech
  | RateSpeechRecognition
  | GetChatAvailableMessageSenders
  | SetChatMessageSender
  | SendMessage
  | SendMessageAlbum
  | SendBotStartMessage
  | SendInlineQueryResultMessage
  | ForwardMessages
  | SendQuickReplyShortcutMessages
  | ResendMessages
  | AddLocalMessage
  | DeleteMessages
  | DeleteChatMessagesBySender
  | DeleteChatMessagesByDate
  | EditMessageText
  | EditMessageLiveLocation
  | EditMessageMedia
  | EditMessageCaption
  | EditMessageReplyMarkup
  | EditInlineMessageText
  | EditInlineMessageLiveLocation
  | EditInlineMessageMedia
  | EditInlineMessageCaption
  | EditInlineMessageReplyMarkup
  | EditMessageSchedulingState
  | SetMessageFactCheck
  | SendBusinessMessage
  | SendBusinessMessageAlbum
  | EditBusinessMessageText
  | EditBusinessMessageLiveLocation
  | EditBusinessMessageMedia
  | EditBusinessMessageCaption
  | EditBusinessMessageReplyMarkup
  | StopBusinessPoll
  | SetBusinessMessageIsPinned
  | ReadBusinessMessage
  | DeleteBusinessMessages
  | EditBusinessStory
  | DeleteBusinessStory
  | SetBusinessAccountName
  | SetBusinessAccountBio
  | SetBusinessAccountProfilePhoto
  | SetBusinessAccountUsername
  | SetBusinessAccountGiftSettings
  | GetBusinessAccountStarAmount
  | TransferBusinessAccountStars
  | CheckQuickReplyShortcutName
  | LoadQuickReplyShortcuts
  | SetQuickReplyShortcutName
  | DeleteQuickReplyShortcut
  | ReorderQuickReplyShortcuts
  | LoadQuickReplyShortcutMessages
  | DeleteQuickReplyShortcutMessages
  | AddQuickReplyShortcutMessage
  | AddQuickReplyShortcutInlineQueryResultMessage
  | AddQuickReplyShortcutMessageAlbum
  | ReaddQuickReplyShortcutMessages
  | EditQuickReplyMessage
  | GetForumTopicDefaultIcons
  | CreateForumTopic
  | EditForumTopic
  | GetForumTopic
  | GetForumTopicLink
  | GetForumTopics
  | SetForumTopicNotificationSettings
  | ToggleForumTopicIsClosed
  | ToggleGeneralForumTopicIsHidden
  | ToggleForumTopicIsPinned
  | SetPinnedForumTopics
  | DeleteForumTopic
  | GetEmojiReaction
  | GetCustomEmojiReactionAnimations
  | GetMessageAvailableReactions
  | ClearRecentReactions
  | AddMessageReaction
  | RemoveMessageReaction
  | GetChatAvailablePaidMessageReactionSenders
  | AddPendingPaidMessageReaction
  | CommitPendingPaidMessageReactions
  | RemovePendingPaidMessageReactions
  | SetPaidMessageReactionType
  | SetMessageReactions
  | GetMessageAddedReactions
  | SetDefaultReactionType
  | GetSavedMessagesTags
  | SetSavedMessagesTagLabel
  | GetMessageEffect
  | SearchQuote
  | GetTextEntities
  | ParseTextEntities
  | ParseMarkdown
  | GetMarkdownText
  | GetCountryFlagEmoji
  | GetFileMimeType
  | GetFileExtension
  | CleanFileName
  | GetLanguagePackString
  | GetJsonValue
  | GetJsonString
  | GetThemeParametersJsonString
  | SetPollAnswer
  | GetPollVoters
  | StopPoll
  | HideSuggestedAction
  | HideContactCloseBirthdays
  | GetBusinessConnection
  | GetLoginUrlInfo
  | GetLoginUrl
  | ShareUsersWithBot
  | ShareChatWithBot
  | GetInlineQueryResults
  | AnswerInlineQuery
  | SavePreparedInlineMessage
  | GetPreparedInlineMessage
  | GetGrossingWebAppBots
  | SearchWebApp
  | GetWebAppPlaceholder
  | GetWebAppLinkUrl
  | GetMainWebApp
  | GetWebAppUrl
  | SendWebAppData
  | OpenWebApp
  | CloseWebApp
  | AnswerWebAppQuery
  | CheckWebAppFileDownload
  | GetCallbackQueryAnswer
  | AnswerCallbackQuery
  | AnswerShippingQuery
  | AnswerPreCheckoutQuery
  | SetGameScore
  | SetInlineGameScore
  | GetGameHighScores
  | GetInlineGameHighScores
  | DeleteChatReplyMarkup
  | SendChatAction
  | OpenChat
  | CloseChat
  | ViewMessages
  | OpenMessageContent
  | ClickAnimatedEmojiMessage
  | GetInternalLink
  | GetInternalLinkType
  | GetExternalLinkInfo
  | GetExternalLink
  | ReadAllChatMentions
  | ReadAllMessageThreadMentions
  | ReadAllChatReactions
  | ReadAllMessageThreadReactions
  | CreatePrivateChat
  | CreateBasicGroupChat
  | CreateSupergroupChat
  | CreateSecretChat
  | CreateNewBasicGroupChat
  | CreateNewSupergroupChat
  | CreateNewSecretChat
  | UpgradeBasicGroupChatToSupergroupChat
  | GetChatListsToAddChat
  | AddChatToList
  | GetChatFolder
  | CreateChatFolder
  | EditChatFolder
  | DeleteChatFolder
  | GetChatFolderChatsToLeave
  | GetChatFolderChatCount
  | ReorderChatFolders
  | ToggleChatFolderTags
  | GetRecommendedChatFolders
  | GetChatFolderDefaultIconName
  | GetChatsForChatFolderInviteLink
  | CreateChatFolderInviteLink
  | GetChatFolderInviteLinks
  | EditChatFolderInviteLink
  | DeleteChatFolderInviteLink
  | CheckChatFolderInviteLink
  | AddChatFolderByInviteLink
  | GetChatFolderNewChats
  | ProcessChatFolderNewChats
  | GetArchiveChatListSettings
  | SetArchiveChatListSettings
  | SetChatTitle
  | SetChatPhoto
  | SetChatAccentColor
  | SetChatProfileAccentColor
  | SetChatMessageAutoDeleteTime
  | SetChatEmojiStatus
  | SetChatPermissions
  | SetChatBackground
  | DeleteChatBackground
  | SetChatTheme
  | SetChatDraftMessage
  | SetChatNotificationSettings
  | ToggleChatHasProtectedContent
  | ToggleChatViewAsTopics
  | ToggleChatIsTranslatable
  | ToggleChatIsMarkedAsUnread
  | ToggleChatDefaultDisableNotification
  | SetChatAvailableReactions
  | SetChatClientData
  | SetChatDescription
  | SetChatDiscussionGroup
  | SetChatDirectMessagesGroup
  | SetChatLocation
  | SetChatSlowModeDelay
  | PinChatMessage
  | UnpinChatMessage
  | UnpinAllChatMessages
  | UnpinAllMessageThreadMessages
  | JoinChat
  | LeaveChat
  | AddChatMember
  | AddChatMembers
  | SetChatMemberStatus
  | BanChatMember
  | CanTransferOwnership
  | TransferChatOwnership
  | GetChatMember
  | SearchChatMembers
  | GetChatAdministrators
  | ClearAllDraftMessages
  | GetSavedNotificationSound
  | GetSavedNotificationSounds
  | AddSavedNotificationSound
  | RemoveSavedNotificationSound
  | GetChatNotificationSettingsExceptions
  | GetScopeNotificationSettings
  | SetScopeNotificationSettings
  | SetReactionNotificationSettings
  | ResetAllNotificationSettings
  | ToggleChatIsPinned
  | SetPinnedChats
  | ReadChatList
  | GetCurrentWeather
  | GetStory
  | GetChatsToPostStories
  | CanPostStory
  | PostStory
  | EditStory
  | EditStoryCover
  | SetStoryPrivacySettings
  | ToggleStoryIsPostedToChatPage
  | DeleteStory
  | GetStoryNotificationSettingsExceptions
  | LoadActiveStories
  | SetChatActiveStoriesList
  | GetChatActiveStories
  | GetChatPostedToChatPageStories
  | GetChatArchivedStories
  | SetChatPinnedStories
  | OpenStory
  | CloseStory
  | GetStoryAvailableReactions
  | SetStoryReaction
  | GetStoryInteractions
  | GetChatStoryInteractions
  | ReportStory
  | ActivateStoryStealthMode
  | GetStoryPublicForwards
  | GetChatBoostLevelFeatures
  | GetChatBoostFeatures
  | GetAvailableChatBoostSlots
  | GetChatBoostStatus
  | BoostChat
  | GetChatBoostLink
  | GetChatBoostLinkInfo
  | GetChatBoosts
  | GetUserChatBoosts
  | GetAttachmentMenuBot
  | ToggleBotIsAddedToAttachmentMenu
  | GetThemedEmojiStatuses
  | GetRecentEmojiStatuses
  | GetUpgradedGiftEmojiStatuses
  | GetDefaultEmojiStatuses
  | ClearRecentEmojiStatuses
  | GetThemedChatEmojiStatuses
  | GetDefaultChatEmojiStatuses
  | GetDisallowedChatEmojiStatuses
  | DownloadFile
  | GetFileDownloadedPrefixSize
  | CancelDownloadFile
  | GetSuggestedFileName
  | PreliminaryUploadFile
  | CancelPreliminaryUploadFile
  | WriteGeneratedFilePart
  | SetFileGenerationProgress
  | FinishFileGeneration
  | ReadFilePart
  | DeleteFile
  | AddFileToDownloads
  | ToggleDownloadIsPaused
  | ToggleAllDownloadsArePaused
  | RemoveFileFromDownloads
  | RemoveAllFilesFromDownloads
  | SearchFileDownloads
  | SetApplicationVerificationToken
  | GetMessageFileType
  | GetMessageImportConfirmationText
  | ImportMessages
  | ReplacePrimaryChatInviteLink
  | CreateChatInviteLink
  | CreateChatSubscriptionInviteLink
  | EditChatInviteLink
  | EditChatSubscriptionInviteLink
  | GetChatInviteLink
  | GetChatInviteLinkCounts
  | GetChatInviteLinks
  | GetChatInviteLinkMembers
  | RevokeChatInviteLink
  | DeleteRevokedChatInviteLink
  | DeleteAllRevokedChatInviteLinks
  | CheckChatInviteLink
  | JoinChatByInviteLink
  | GetChatJoinRequests
  | ProcessChatJoinRequest
  | ProcessChatJoinRequests
  | CreateCall
  | AcceptCall
  | SendCallSignalingData
  | DiscardCall
  | SendCallRating
  | SendCallDebugInformation
  | SendCallLog
  | GetVideoChatAvailableParticipants
  | SetVideoChatDefaultParticipant
  | CreateVideoChat
  | CreateGroupCall
  | GetVideoChatRtmpUrl
  | ReplaceVideoChatRtmpUrl
  | GetGroupCall
  | StartScheduledVideoChat
  | ToggleVideoChatEnabledStartNotification
  | JoinGroupCall
  | JoinVideoChat
  | StartGroupCallScreenSharing
  | ToggleGroupCallScreenSharingIsPaused
  | EndGroupCallScreenSharing
  | SetVideoChatTitle
  | ToggleVideoChatMuteNewParticipants
  | InviteGroupCallParticipant
  | DeclineGroupCallInvitation
  | BanGroupCallParticipants
  | InviteVideoChatParticipants
  | GetVideoChatInviteLink
  | RevokeGroupCallInviteLink
  | StartGroupCallRecording
  | EndGroupCallRecording
  | ToggleGroupCallIsMyVideoPaused
  | ToggleGroupCallIsMyVideoEnabled
  | SetGroupCallParticipantIsSpeaking
  | ToggleGroupCallParticipantIsMuted
  | SetGroupCallParticipantVolumeLevel
  | ToggleGroupCallParticipantIsHandRaised
  | GetGroupCallParticipants
  | LoadGroupCallParticipants
  | LeaveGroupCall
  | EndGroupCall
  | GetVideoChatStreams
  | GetVideoChatStreamSegment
  | EncryptGroupCallData
  | DecryptGroupCallData
  | SetMessageSenderBlockList
  | BlockMessageSenderFromReplies
  | GetBlockedMessageSenders
  | AddContact
  | ImportContacts
  | GetContacts
  | SearchContacts
  | RemoveContacts
  | GetImportedContactCount
  | ChangeImportedContacts
  | ClearImportedContacts
  | SetCloseFriends
  | GetCloseFriends
  | SetUserPersonalProfilePhoto
  | SuggestUserProfilePhoto
  | ToggleBotCanManageEmojiStatus
  | SetUserEmojiStatus
  | SearchUserByPhoneNumber
  | SharePhoneNumber
  | GetUserProfilePhotos
  | GetStickerOutline
  | GetStickers
  | GetAllStickerEmojis
  | SearchStickers
  | GetGreetingStickers
  | GetPremiumStickers
  | GetInstalledStickerSets
  | GetArchivedStickerSets
  | GetTrendingStickerSets
  | GetAttachedStickerSets
  | GetStickerSet
  | GetStickerSetName
  | SearchStickerSet
  | SearchInstalledStickerSets
  | SearchStickerSets
  | ChangeStickerSet
  | ViewTrendingStickerSets
  | ReorderInstalledStickerSets
  | GetRecentStickers
  | AddRecentSticker
  | RemoveRecentSticker
  | ClearRecentStickers
  | GetFavoriteStickers
  | AddFavoriteSticker
  | RemoveFavoriteSticker
  | GetStickerEmojis
  | SearchEmojis
  | GetKeywordEmojis
  | GetEmojiCategories
  | GetAnimatedEmoji
  | GetEmojiSuggestionsUrl
  | GetCustomEmojiStickers
  | GetDefaultChatPhotoCustomEmojiStickers
  | GetDefaultProfilePhotoCustomEmojiStickers
  | GetDefaultBackgroundCustomEmojiStickers
  | GetSavedAnimations
  | AddSavedAnimation
  | RemoveSavedAnimation
  | GetRecentInlineBots
  | GetOwnedBots
  | SearchHashtags
  | RemoveRecentHashtag
  | GetLinkPreview
  | GetWebPageInstantView
  | SetProfilePhoto
  | DeleteProfilePhoto
  | SetAccentColor
  | SetProfileAccentColor
  | SetName
  | SetBio
  | SetUsername
  | ToggleUsernameIsActive
  | ReorderActiveUsernames
  | SetBirthdate
  | SetPersonalChat
  | SetEmojiStatus
  | ToggleHasSponsoredMessagesEnabled
  | SetBusinessLocation
  | SetBusinessOpeningHours
  | SetBusinessGreetingMessageSettings
  | SetBusinessAwayMessageSettings
  | SetBusinessStartPage
  | SendPhoneNumberCode
  | SendPhoneNumberFirebaseSms
  | ReportPhoneNumberCodeMissing
  | ResendPhoneNumberCode
  | CheckPhoneNumberCode
  | GetBusinessConnectedBot
  | SetBusinessConnectedBot
  | DeleteBusinessConnectedBot
  | ToggleBusinessConnectedBotChatIsPaused
  | RemoveBusinessConnectedBotFromChat
  | GetBusinessChatLinks
  | CreateBusinessChatLink
  | EditBusinessChatLink
  | DeleteBusinessChatLink
  | GetBusinessChatLinkInfo
  | GetUserLink
  | SearchUserByToken
  | SetCommands
  | DeleteCommands
  | GetCommands
  | SetMenuButton
  | GetMenuButton
  | SetDefaultGroupAdministratorRights
  | SetDefaultChannelAdministratorRights
  | CanBotSendMessages
  | AllowBotToSendMessages
  | SendWebAppCustomRequest
  | GetBotMediaPreviews
  | GetBotMediaPreviewInfo
  | AddBotMediaPreview
  | EditBotMediaPreview
  | ReorderBotMediaPreviews
  | DeleteBotMediaPreviews
  | SetBotName
  | GetBotName
  | SetBotProfilePhoto
  | ToggleBotUsernameIsActive
  | ReorderBotActiveUsernames
  | SetBotInfoDescription
  | GetBotInfoDescription
  | SetBotInfoShortDescription
  | GetBotInfoShortDescription
  | SetMessageSenderBotVerification
  | RemoveMessageSenderBotVerification
  | GetActiveSessions
  | TerminateSession
  | TerminateAllOtherSessions
  | ConfirmSession
  | ToggleSessionCanAcceptCalls
  | ToggleSessionCanAcceptSecretChats
  | SetInactiveSessionTtl
  | GetConnectedWebsites
  | DisconnectWebsite
  | DisconnectAllWebsites
  | SetSupergroupUsername
  | ToggleSupergroupUsernameIsActive
  | DisableAllSupergroupUsernames
  | ReorderSupergroupActiveUsernames
  | SetSupergroupStickerSet
  | SetSupergroupCustomEmojiStickerSet
  | SetSupergroupUnrestrictBoostCount
  | ToggleSupergroupSignMessages
  | ToggleSupergroupJoinToSendMessages
  | ToggleSupergroupJoinByRequest
  | ToggleSupergroupIsAllHistoryAvailable
  | ToggleSupergroupCanHaveSponsoredMessages
  | ToggleSupergroupHasAutomaticTranslation
  | ToggleSupergroupHasHiddenMembers
  | ToggleSupergroupHasAggressiveAntiSpamEnabled
  | ToggleSupergroupIsForum
  | ToggleSupergroupIsBroadcastGroup
  | ReportSupergroupSpam
  | ReportSupergroupAntiSpamFalsePositive
  | GetSupergroupMembers
  | CloseSecretChat
  | GetChatEventLog
  | GetTimeZones
  | GetPaymentForm
  | ValidateOrderInfo
  | SendPaymentForm
  | GetPaymentReceipt
  | GetSavedOrderInfo
  | DeleteSavedOrderInfo
  | DeleteSavedCredentials
  | SetGiftSettings
  | GetAvailableGifts
  | SendGift
  | SellGift
  | ToggleGiftIsSaved
  | SetPinnedGifts
  | ToggleChatGiftNotifications
  | GetGiftUpgradePreview
  | UpgradeGift
  | TransferGift
  | SendResoldGift
  | GetReceivedGifts
  | GetReceivedGift
  | GetUpgradedGift
  | GetUpgradedGiftWithdrawalUrl
  | SetGiftResalePrice
  | SearchGiftsForResale
  | CreateInvoiceLink
  | RefundStarPayment
  | GetSupportUser
  | GetBackgroundUrl
  | SearchBackground
  | SetDefaultBackground
  | DeleteDefaultBackground
  | GetInstalledBackgrounds
  | RemoveInstalledBackground
  | ResetInstalledBackgrounds
  | GetLocalizationTargetInfo
  | GetLanguagePackInfo
  | GetLanguagePackStrings
  | SynchronizeLanguagePack
  | AddCustomServerLanguagePack
  | SetCustomLanguagePack
  | EditCustomLanguagePackInfo
  | SetCustomLanguagePackString
  | DeleteLanguagePack
  | RegisterDevice
  | ProcessPushNotification
  | GetPushReceiverId
  | GetRecentlyVisitedTMeUrls
  | SetUserPrivacySettingRules
  | GetUserPrivacySettingRules
  | SetReadDatePrivacySettings
  | GetReadDatePrivacySettings
  | SetNewChatPrivacySettings
  | GetNewChatPrivacySettings
  | GetPaidMessageRevenue
  | AllowUnpaidMessagesFromUser
  | SetChatPaidMessageStarCount
  | CanSendMessageToUser
  | GetOption
  | SetOption
  | SetAccountTtl
  | GetAccountTtl
  | DeleteAccount
  | SetDefaultMessageAutoDeleteTime
  | GetDefaultMessageAutoDeleteTime
  | RemoveChatActionBar
  | ReportChat
  | ReportChatPhoto
  | ReportMessageReactions
  | GetChatRevenueStatistics
  | GetChatRevenueWithdrawalUrl
  | GetChatRevenueTransactions
  | GetStarRevenueStatistics
  | GetStarWithdrawalUrl
  | GetStarAdAccountUrl
  | GetChatStatistics
  | GetMessageStatistics
  | GetMessagePublicForwards
  | GetStoryStatistics
  | GetStatisticalGraph
  | GetStorageStatistics
  | GetStorageStatisticsFast
  | GetDatabaseStatistics
  | OptimizeStorage
  | SetNetworkType
  | GetNetworkStatistics
  | AddNetworkStatistics
  | ResetNetworkStatistics
  | GetAutoDownloadSettingsPresets
  | SetAutoDownloadSettings
  | GetAutosaveSettings
  | SetAutosaveSettings
  | ClearAutosaveSettingsExceptions
  | GetBankCardInfo
  | GetPassportElement
  | GetAllPassportElements
  | SetPassportElement
  | DeletePassportElement
  | SetPassportElementErrors
  | GetPreferredCountryLanguage
  | SendEmailAddressVerificationCode
  | ResendEmailAddressVerificationCode
  | CheckEmailAddressVerificationCode
  | GetPassportAuthorizationForm
  | GetPassportAuthorizationFormAvailableElements
  | SendPassportAuthorizationForm
  | SetBotUpdatesStatus
  | UploadStickerFile
  | GetSuggestedStickerSetName
  | CheckStickerSetName
  | CreateNewStickerSet
  | AddStickerToSet
  | ReplaceStickerInSet
  | SetStickerSetThumbnail
  | SetCustomEmojiStickerSetThumbnail
  | SetStickerSetTitle
  | DeleteStickerSet
  | SetStickerPositionInSet
  | RemoveStickerFromSet
  | SetStickerEmojis
  | SetStickerKeywords
  | SetStickerMaskPosition
  | GetOwnedStickerSets
  | GetMapThumbnailFile
  | GetPremiumLimit
  | GetPremiumFeatures
  | GetPremiumStickerExamples
  | GetPremiumInfoSticker
  | ViewPremiumFeature
  | ClickPremiumSubscriptionButton
  | GetPremiumState
  | GetPremiumGiftPaymentOptions
  | GetPremiumGiveawayPaymentOptions
  | CheckPremiumGiftCode
  | ApplyPremiumGiftCode
  | GiftPremiumWithStars
  | LaunchPrepaidGiveaway
  | GetGiveawayInfo
  | GetStarPaymentOptions
  | GetStarGiftPaymentOptions
  | GetStarGiveawayPaymentOptions
  | GetStarTransactions
  | GetStarSubscriptions
  | CanPurchaseFromStore
  | AssignStoreTransaction
  | EditStarSubscription
  | EditUserStarSubscription
  | ReuseStarSubscription
  | SetChatAffiliateProgram
  | SearchChatAffiliateProgram
  | SearchAffiliatePrograms
  | ConnectAffiliateProgram
  | DisconnectAffiliateProgram
  | GetConnectedAffiliateProgram
  | GetConnectedAffiliatePrograms
  | GetBusinessFeatures
  | AcceptTermsOfService
  | SearchStringsByPrefix
  | SendCustomRequest
  | AnswerCustomQuery
  | SetAlarm
  | GetCountries
  | GetCountryCode
  | GetPhoneNumberInfo
  | GetPhoneNumberInfoSync
  | GetCollectibleItemInfo
  | GetDeepLinkInfo
  | GetApplicationConfig
  | SaveApplicationLogEvent
  | GetApplicationDownloadLink
  | AddProxy
  | EditProxy
  | EnableProxy
  | DisableProxy
  | RemoveProxy
  | GetProxies
  | GetProxyLink
  | PingProxy
  | SetLogStream
  | GetLogStream
  | SetLogVerbosityLevel
  | GetLogVerbosityLevel
  | GetLogTags
  | SetLogTagVerbosityLevel
  | GetLogTagVerbosityLevel
  | AddLogMessage
  | GetUserSupportInfo
  | SetUserSupportInfo
  | GetSupportName
  | TestCallEmpty
  | TestCallString
  | TestCallBytes
  | TestCallVectorInt
  | TestCallVectorIntObject
  | TestCallVectorString
  | TestCallVectorStringObject
  | TestSquareInt
  | TestNetwork
  | TestProxy
  | TestGetDifference
  | TestUseUpdate
  | TestReturnError;
