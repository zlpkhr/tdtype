/** TDLib concrete & update objects */

/**
 * An object of this type can be returned on every function call, in case of an error
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1error.html
 */
export type Error = {
	"@type": "error";
	/** Error code; subject to future changes. If the error code is 406, the error message must not be processed in any way and must not be displayed to the user */
	code: number;
	/** Error message; subject to future changes */
	message: string;
};

/**
 * An object of this type is returned on a successful function call for certain functions
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1ok.html
 */
export type Ok = {
	"@type": "ok";
};

/**
 * A digit-only authentication code is delivered via a private Telegram message, which can be viewed from another active session
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1authentication_code_type_telegram_message.html
 */
export type AuthenticationCodeTypeTelegramMessage = {
	"@type": "authenticationCodeTypeTelegramMessage";
	/** Length of the code */
	length: number;
};

/**
 * A digit-only authentication code is delivered via an SMS message to the specified phone number; non-official applications may not receive this type of code
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1authentication_code_type_sms.html
 */
export type AuthenticationCodeTypeSms = {
	"@type": "authenticationCodeTypeSms";
	/** Length of the code */
	length: number;
};

/**
 * An authentication code is a word delivered via an SMS message to the specified phone number; non-official applications may not receive this type of code
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1authentication_code_type_sms_word.html
 */
export type AuthenticationCodeTypeSmsWord = {
	"@type": "authenticationCodeTypeSmsWord";
	/** The first letters of the word if known */
	first_letter: string;
};

/**
 * An authentication code is a phrase from multiple words delivered via an SMS message to the specified phone number; non-official applications may not receive this type of code
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1authentication_code_type_sms_phrase.html
 */
export type AuthenticationCodeTypeSmsPhrase = {
	"@type": "authenticationCodeTypeSmsPhrase";
	/** The first word of the phrase if known */
	first_word: string;
};

/**
 * A digit-only authentication code is delivered via a phone call to the specified phone number
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1authentication_code_type_call.html
 */
export type AuthenticationCodeTypeCall = {
	"@type": "authenticationCodeTypeCall";
	/** Length of the code */
	length: number;
};

/**
 * An authentication code is delivered by an immediately canceled call to the specified phone number. The phone number that calls is the code that must be entered automatically
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1authentication_code_type_flash_call.html
 */
export type AuthenticationCodeTypeFlashCall = {
	"@type": "authenticationCodeTypeFlashCall";
	/** Pattern of the phone number from which the call will be made */
	pattern: string;
};

/**
 * An authentication code is delivered by an immediately canceled call to the specified phone number. The last digits of the phone number that calls are the code that must be entered manually by the user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1authentication_code_type_missed_call.html
 */
export type AuthenticationCodeTypeMissedCall = {
	"@type": "authenticationCodeTypeMissedCall";
	/** Prefix of the phone number from which the call will be made */
	phone_number_prefix: string;
	/** Number of digits in the code, excluding the prefix */
	length: number;
};

/**
 * A digit-only authentication code is delivered to https://fragment.com. The user must be logged in there via a wallet owning the phone number's NFT
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1authentication_code_type_fragment.html
 */
export type AuthenticationCodeTypeFragment = {
	"@type": "authenticationCodeTypeFragment";
	/** URL to open to receive the code */
	url: string;
	/** Length of the code */
	length: number;
};

/**
 * A digit-only authentication code is delivered via Firebase Authentication to the official Android application
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1authentication_code_type_firebase_android.html
 */
export type AuthenticationCodeTypeFirebaseAndroid = {
	"@type": "authenticationCodeTypeFirebaseAndroid";
	/** Parameters to be used for device verification */
	device_verification_parameters: FirebaseDeviceVerificationParameters;
	/** Length of the code */
	length: number;
};

/**
 * A digit-only authentication code is delivered via Firebase Authentication to the official iOS application
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1authentication_code_type_firebase_ios.html
 */
export type AuthenticationCodeTypeFirebaseIos = {
	"@type": "authenticationCodeTypeFirebaseIos";
	/** Receipt of successful application token validation to compare with receipt from push notification */
	receipt: string;
	/** Time after the next authentication method is expected to be used if verification push notification isn't received, in seconds */
	push_timeout: number;
	/** Length of the code */
	length: number;
};

/**
 * Information about the authentication code that was sent
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1authentication_code_info.html
 */
export type AuthenticationCodeInfo = {
	"@type": "authenticationCodeInfo";
	/** A phone number that is being authenticated */
	phone_number: string;
	/** The way the code was sent to the user */
	type: AuthenticationCodeType;
	/** The way the next code will be sent to the user; may be null */
	next_type?: AuthenticationCodeType;
	/** Timeout before the code can be re-sent, in seconds */
	timeout: number;
};

/**
 * Information about the email address authentication code that was sent
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1email_address_authentication_code_info.html
 */
export type EmailAddressAuthenticationCodeInfo = {
	"@type": "emailAddressAuthenticationCodeInfo";
	/** Pattern of the email address to which an authentication code was sent */
	email_address_pattern: string;
	/** Length of the code; 0 if unknown */
	length: number;
};

/**
 * An authentication code delivered to a user's email address
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1email_address_authentication_code.html
 */
export type EmailAddressAuthenticationCode = {
	"@type": "emailAddressAuthenticationCode";
	/** The code */
	code: string;
};

/**
 * An authentication token received through Apple ID
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1email_address_authentication_apple_id.html
 */
export type EmailAddressAuthenticationAppleId = {
	"@type": "emailAddressAuthenticationAppleId";
	/** The token */
	token: string;
};

/**
 * An authentication token received through Google ID
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1email_address_authentication_google_id.html
 */
export type EmailAddressAuthenticationGoogleId = {
	"@type": "emailAddressAuthenticationGoogleId";
	/** The token */
	token: string;
};

/**
 * Email address can be reset after the given period. Call resetAuthenticationEmailAddress to reset it and allow the user to authorize with a code sent to the user's phone number
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1email_address_reset_state_available.html
 */
export type EmailAddressResetStateAvailable = {
	"@type": "emailAddressResetStateAvailable";
	/** Time required to wait before the email address can be reset; 0 if the user is subscribed to Telegram Premium */
	wait_period: number;
};

/**
 * Email address reset has already been requested. Call resetAuthenticationEmailAddress to check whether immediate reset is possible
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1email_address_reset_state_pending.html
 */
export type EmailAddressResetStatePending = {
	"@type": "emailAddressResetStatePending";
	/** Left time before the email address will be reset, in seconds. updateAuthorizationState is not sent when this field changes */
	reset_in: number;
};

/**
 * Represents a part of the text that needs to be formatted in some unusual way
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1text_entity.html
 */
export type TextEntity = {
	"@type": "textEntity";
	/** Offset of the entity, in UTF-16 code units */
	offset: number;
	/** Length of the entity, in UTF-16 code units */
	length: number;
	/** Type of the entity */
	type: TextEntityType;
};

/**
 * Contains a list of text entities
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1text_entities.html
 */
export type TextEntities = {
	"@type": "textEntities";
	/** List of text entities */
	entities: TextEntity[];
};

/**
 * A text with some entities
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1formatted_text.html
 */
export type FormattedText = {
	"@type": "formattedText";
	/** The text */
	text: string;
	/** Entities contained in the text. Entities can be nested, but must not mutually intersect with each other. Pre, Code and PreCode entities can't contain other entities. BlockQuote entities can't contain other BlockQuote entities. Bold, Italic, Underline, Strikethrough, and Spoiler entities can contain and can be part of any other entities. All other entities can't contain each other */
	entities: TextEntity[];
};

/**
 * Contains Telegram terms of service
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1terms_of_service.html
 */
export type TermsOfService = {
	"@type": "termsOfService";
	/** Text of the terms of service */
	text: FormattedText;
	/** The minimum age of a user to be able to accept the terms; 0 if age isn't restricted */
	min_user_age: number;
	/** True, if a blocking popup with terms of service must be shown to the user */
	show_popup: boolean;
};

/**
 * Initialization parameters are needed. Call setTdlibParameters to provide them
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1authorization_state_wait_tdlib_parameters.html
 */
export type AuthorizationStateWaitTdlibParameters = {
	"@type": "authorizationStateWaitTdlibParameters";
};

/**
 * TDLib needs the user's phone number to authorize. Call setAuthenticationPhoneNumber to provide the phone number, or use requestQrCodeAuthentication or checkAuthenticationBotToken for other authentication options
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1authorization_state_wait_phone_number.html
 */
export type AuthorizationStateWaitPhoneNumber = {
	"@type": "authorizationStateWaitPhoneNumber";
};

/**
 * The user must buy Telegram Premium as an in-store purchase to log in. Call checkAuthenticationPremiumPurchase and then setAuthenticationPremiumPurchaseTransaction
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1authorization_state_wait_premium_purchase.html
 */
export type AuthorizationStateWaitPremiumPurchase = {
	"@type": "authorizationStateWaitPremiumPurchase";
	/** Identifier of the store product that must be bought */
	store_product_id: string;
};

/**
 * TDLib needs the user's email address to authorize. Call setAuthenticationEmailAddress to provide the email address, or directly call checkAuthenticationEmailCode with Apple ID/Google ID token if allowed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1authorization_state_wait_email_address.html
 */
export type AuthorizationStateWaitEmailAddress = {
	"@type": "authorizationStateWaitEmailAddress";
	/** True, if authorization through Apple ID is allowed */
	allow_apple_id: boolean;
	/** True, if authorization through Google ID is allowed */
	allow_google_id: boolean;
};

/**
 * TDLib needs the user's authentication code sent to an email address to authorize. Call checkAuthenticationEmailCode to provide the code
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1authorization_state_wait_email_code.html
 */
export type AuthorizationStateWaitEmailCode = {
	"@type": "authorizationStateWaitEmailCode";
	/** True, if authorization through Apple ID is allowed */
	allow_apple_id: boolean;
	/** True, if authorization through Google ID is allowed */
	allow_google_id: boolean;
	/** Information about the sent authentication code */
	code_info: EmailAddressAuthenticationCodeInfo;
	/** Reset state of the email address; may be null if the email address can't be reset */
	email_address_reset_state?: EmailAddressResetState;
};

/**
 * TDLib needs the user's authentication code to authorize. Call checkAuthenticationCode to check the code
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1authorization_state_wait_code.html
 */
export type AuthorizationStateWaitCode = {
	"@type": "authorizationStateWaitCode";
	/** Information about the authorization code that was sent */
	code_info: AuthenticationCodeInfo;
};

/**
 * The user needs to confirm authorization on another logged in device by scanning a QR code with the provided link
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1authorization_state_wait_other_device_confirmation.html
 */
export type AuthorizationStateWaitOtherDeviceConfirmation = {
	"@type": "authorizationStateWaitOtherDeviceConfirmation";
	/** A tg:// URL for the QR code. The link will be updated frequently */
	link: string;
};

/**
 * The user is unregistered and need to accept terms of service and enter their first name and last name to finish registration. Call registerUser to accept the terms of service and provide the data
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1authorization_state_wait_registration.html
 */
export type AuthorizationStateWaitRegistration = {
	"@type": "authorizationStateWaitRegistration";
	/** Telegram terms of service */
	terms_of_service: TermsOfService;
};

/**
 * The user has been authorized, but needs to enter a 2-step verification password to start using the application. Call checkAuthenticationPassword to provide the password, or requestAuthenticationPasswordRecovery to recover the password, or deleteAccount to delete the account after a week
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1authorization_state_wait_password.html
 */
export type AuthorizationStateWaitPassword = {
	"@type": "authorizationStateWaitPassword";
	/** Hint for the password; may be empty */
	password_hint?: string;
	/** True, if a recovery email address has been set up */
	has_recovery_email_address: boolean;
	/** True, if some Telegram Passport elements were saved */
	has_passport_data: boolean;
	/** Pattern of the email address to which the recovery email was sent; empty until a recovery email has been sent */
	recovery_email_address_pattern: string;
};

/**
 * The user has been successfully authorized. TDLib is now ready to answer general requests
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1authorization_state_ready.html
 */
export type AuthorizationStateReady = {
	"@type": "authorizationStateReady";
};

/**
 * The user is currently logging out
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1authorization_state_logging_out.html
 */
export type AuthorizationStateLoggingOut = {
	"@type": "authorizationStateLoggingOut";
};

/**
 * TDLib is closing, all subsequent queries will be answered with the error 500. Note that closing TDLib can take a while. All resources will be freed only after authorizationStateClosed has been received
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1authorization_state_closing.html
 */
export type AuthorizationStateClosing = {
	"@type": "authorizationStateClosing";
};

/**
 * TDLib client is in its final state. All databases are closed and all resources are released. No other updates will be received after this. All queries will be responded to with error code 500. To continue working, one must create a new instance of the TDLib client
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1authorization_state_closed.html
 */
export type AuthorizationStateClosed = {
	"@type": "authorizationStateClosed";
};

/**
 * Device verification must be performed with the SafetyNet Attestation API
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1firebase_device_verification_parameters_safety_net.html
 */
export type FirebaseDeviceVerificationParametersSafetyNet = {
	"@type": "firebaseDeviceVerificationParametersSafetyNet";
	/** Nonce to pass to the SafetyNet Attestation API */
	nonce: string;
};

/**
 * Device verification must be performed with the classic Play Integrity verification (https://developer.android.com/google/play/integrity/classic)
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1firebase_device_verification_parameters_play_integrity.html
 */
export type FirebaseDeviceVerificationParametersPlayIntegrity = {
	"@type": "firebaseDeviceVerificationParametersPlayIntegrity";
	/** Base64url-encoded nonce to pass to the Play Integrity API */
	nonce: string;
	/** Cloud project number to pass to the Play Integrity API */
	cloud_project_number: string;
};

/**
 * Represents the current state of 2-step verification
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1password_state.html
 */
export type PasswordState = {
	"@type": "passwordState";
	/** True, if a 2-step verification password is set */
	has_password: boolean;
	/** Hint for the password; may be empty */
	password_hint?: string;
	/** True, if a recovery email is set */
	has_recovery_email_address: boolean;
	/** True, if some Telegram Passport elements were saved */
	has_passport_data: boolean;
	/** Information about the recovery email address to which the confirmation email was sent; may be null */
	recovery_email_address_code_info?: EmailAddressAuthenticationCodeInfo;
	/** Pattern of the email address set up for logging in */
	login_email_address_pattern: string;
	/** If not 0, point in time (Unix timestamp) after which the 2-step verification password can be reset immediately using resetPassword */
	pending_reset_date: number;
};

/**
 * Contains information about the current recovery email address
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1recovery_email_address.html
 */
export type RecoveryEmailAddress = {
	"@type": "recoveryEmailAddress";
	/** Recovery email address */
	recovery_email_address: string;
};

/**
 * Returns information about the availability of a temporary password, which can be used for payments
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1temporary_password_state.html
 */
export type TemporaryPasswordState = {
	"@type": "temporaryPasswordState";
	/** True, if a temporary password is available */
	has_password: boolean;
	/** Time left before the temporary password expires, in seconds */
	valid_for: number;
};

/**
 * Represents a local file
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1local_file.html
 */
export type LocalFile = {
	"@type": "localFile";
	/** Local path to the locally available file part; may be empty */
	path?: string;
	/** True, if it is possible to download or generate the file */
	can_be_downloaded: boolean;
	/** True, if the file can be deleted */
	can_be_deleted: boolean;
	/** True, if the file is currently being downloaded (or a local copy is being generated by some other means) */
	is_downloading_active: boolean;
	/** True, if the local copy is fully available */
	is_downloading_completed: boolean;
	/** Download will be started from this offset. downloaded_prefix_size is calculated from this offset */
	download_offset: number;
	/** If is_downloading_completed is false, then only some prefix of the file starting from download_offset is ready to be read. downloaded_prefix_size is the size of that prefix in bytes */
	downloaded_prefix_size: number;
	/** Total downloaded file size, in bytes. Can be used only for calculating download progress. The actual file size may be bigger, and some parts of it may contain garbage */
	downloaded_size: number;
};

/**
 * Represents a remote file
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1remote_file.html
 */
export type RemoteFile = {
	"@type": "remoteFile";
	/** Remote file identifier; may be empty. Can be used by the current user across application restarts or even from other devices. Uniquely identifies a file, but a file can have a lot of different valid identifiers. If the identifier starts with "http://" or "https://", it represents the HTTP URL of the file. TDLib is currently unable to download files if only their URL is known. If downloadFile/addFileToDownloads is called on such a file or if it is sent to a secret chat, TDLib starts a file generation process by sending updateFileGenerationStart to the application with the HTTP URL in the original_path and "#url#" as the conversion string. Application must generate the file by downloading it to the specified location */
	id?: string;
	/** Unique file identifier; may be empty if unknown. The unique file identifier which is the same for the same file even for different users and is persistent over time */
	unique_id?: string;
	/** True, if the file is currently being uploaded (or a remote copy is being generated by some other means) */
	is_uploading_active: boolean;
	/** True, if a remote copy is fully available */
	is_uploading_completed: boolean;
	/** Size of the remote available part of the file, in bytes; 0 if unknown */
	uploaded_size: number;
};

/**
 * Represents a file
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1file.html
 */
export type File = {
	"@type": "file";
	/** Unique file identifier */
	id: number;
	/** File size, in bytes; 0 if unknown */
	size: number;
	/** Approximate file size in bytes in case the exact file size is unknown. Can be used to show download/upload progress */
	expected_size: number;
	/** Information about the local copy of the file */
	local: LocalFile;
	/** Information about the remote copy of the file */
	remote: RemoteFile;
};

/**
 * A file defined by its unique identifier
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_file_id.html
 */
export type InputFileId = {
	"@type": "inputFileId";
	/** Unique file identifier */
	id: number;
};

/**
 * A file defined by its remote identifier. The remote identifier is guaranteed to be usable only if the corresponding file is still accessible to the user and known to TDLib. For example, if the file is from a message, then the message must be not deleted and accessible to the user. If the file database is disabled, then the corresponding object with the file must be preloaded by the application
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_file_remote.html
 */
export type InputFileRemote = {
	"@type": "inputFileRemote";
	/** Remote file identifier */
	id: string;
};

/**
 * A file defined by a local path
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_file_local.html
 */
export type InputFileLocal = {
	"@type": "inputFileLocal";
	/** Local path to the file */
	path: string;
};

/**
 * A file generated by the application. The application must handle updates updateFileGenerationStart and updateFileGenerationStop to generate the file when asked by TDLib
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_file_generated.html
 */
export type InputFileGenerated = {
	"@type": "inputFileGenerated";
	/** Local path to a file from which the file is generated. The path doesn't have to be a valid path and is used by TDLib only to detect name and MIME type of the generated file */
	original_path: string;
	/** String specifying the conversion applied to the original file; must be persistent across application restarts. Conversions beginning with '#' are reserved for internal TDLib usage */
	conversion: string;
	/** Expected size of the generated file, in bytes; pass 0 if unknown */
	expected_size: number;
};

/**
 * Describes an image in JPEG format
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1photo_size.html
 */
export type PhotoSize = {
	"@type": "photoSize";
	/** Image type (see https://core.telegram.org/constructor/photoSize) */
	type: string;
	/** Information about the image file */
	photo: File;
	/** Image width */
	width: number;
	/** Image height */
	height: number;
	/** Sizes of progressive JPEG file prefixes, which can be used to preliminarily show the image; in bytes */
	progressive_sizes: number[];
};

/**
 * Thumbnail image of a very poor quality and low resolution
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1minithumbnail.html
 */
export type Minithumbnail = {
	"@type": "minithumbnail";
	/** Thumbnail width, usually doesn't exceed 40 */
	width: number;
	/** Thumbnail height, usually doesn't exceed 40 */
	height: number;
	/** The thumbnail in JPEG format */
	data: string;
};

/**
 * The thumbnail is in JPEG format
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1thumbnail_format_jpeg.html
 */
export type ThumbnailFormatJpeg = {
	"@type": "thumbnailFormatJpeg";
};

/**
 * The thumbnail is in static GIF format. It will be used only for some bot inline query results
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1thumbnail_format_gif.html
 */
export type ThumbnailFormatGif = {
	"@type": "thumbnailFormatGif";
};

/**
 * The thumbnail is in MPEG4 format. It will be used only for some animations and videos
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1thumbnail_format_mpeg4.html
 */
export type ThumbnailFormatMpeg4 = {
	"@type": "thumbnailFormatMpeg4";
};

/**
 * The thumbnail is in PNG format. It will be used only for background patterns
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1thumbnail_format_png.html
 */
export type ThumbnailFormatPng = {
	"@type": "thumbnailFormatPng";
};

/**
 * The thumbnail is in TGS format. It will be used only for sticker sets
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1thumbnail_format_tgs.html
 */
export type ThumbnailFormatTgs = {
	"@type": "thumbnailFormatTgs";
};

/**
 * The thumbnail is in WEBM format. It will be used only for sticker sets
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1thumbnail_format_webm.html
 */
export type ThumbnailFormatWebm = {
	"@type": "thumbnailFormatWebm";
};

/**
 * The thumbnail is in WEBP format. It will be used only for some stickers and sticker sets
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1thumbnail_format_webp.html
 */
export type ThumbnailFormatWebp = {
	"@type": "thumbnailFormatWebp";
};

/**
 * Represents a thumbnail
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1thumbnail.html
 */
export type Thumbnail = {
	"@type": "thumbnail";
	/** Thumbnail format */
	format: ThumbnailFormat;
	/** Thumbnail width */
	width: number;
	/** Thumbnail height */
	height: number;
	/** The thumbnail */
	file: File;
};

/**
 * The mask is placed relatively to the forehead
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1mask_point_forehead.html
 */
export type MaskPointForehead = {
	"@type": "maskPointForehead";
};

/**
 * The mask is placed relatively to the eyes
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1mask_point_eyes.html
 */
export type MaskPointEyes = {
	"@type": "maskPointEyes";
};

/**
 * The mask is placed relatively to the mouth
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1mask_point_mouth.html
 */
export type MaskPointMouth = {
	"@type": "maskPointMouth";
};

/**
 * The mask is placed relatively to the chin
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1mask_point_chin.html
 */
export type MaskPointChin = {
	"@type": "maskPointChin";
};

/**
 * Position on a photo where a mask is placed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1mask_position.html
 */
export type MaskPosition = {
	"@type": "maskPosition";
	/** Part of the face, relative to which the mask is placed */
	point: MaskPoint;
	/** Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. (For example, -1.0 will place the mask just to the left of the default mask position) */
	x_shift: number;
	/** Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. (For example, 1.0 will place the mask just below the default mask position) */
	y_shift: number;
	/** Mask scaling coefficient. (For example, 2.0 means a doubled size) */
	scale: number;
};

/**
 * The sticker is an image in WEBP format
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1sticker_format_webp.html
 */
export type StickerFormatWebp = {
	"@type": "stickerFormatWebp";
};

/**
 * The sticker is an animation in TGS format
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1sticker_format_tgs.html
 */
export type StickerFormatTgs = {
	"@type": "stickerFormatTgs";
};

/**
 * The sticker is a video in WEBM format
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1sticker_format_webm.html
 */
export type StickerFormatWebm = {
	"@type": "stickerFormatWebm";
};

/**
 * The sticker is a regular sticker
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1sticker_type_regular.html
 */
export type StickerTypeRegular = {
	"@type": "stickerTypeRegular";
};

/**
 * The sticker is a mask in WEBP format to be placed on photos or videos
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1sticker_type_mask.html
 */
export type StickerTypeMask = {
	"@type": "stickerTypeMask";
};

/**
 * The sticker is a custom emoji to be used inside message text and caption
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1sticker_type_custom_emoji.html
 */
export type StickerTypeCustomEmoji = {
	"@type": "stickerTypeCustomEmoji";
};

/**
 * The sticker is a regular sticker
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1sticker_full_type_regular.html
 */
export type StickerFullTypeRegular = {
	"@type": "stickerFullTypeRegular";
	/** Premium animation of the sticker; may be null. If present, only Telegram Premium users can use the sticker */
	premium_animation?: File;
};

/**
 * The sticker is a mask in WEBP format to be placed on photos or videos
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1sticker_full_type_mask.html
 */
export type StickerFullTypeMask = {
	"@type": "stickerFullTypeMask";
	/** Position where the mask is placed; may be null */
	mask_position?: MaskPosition;
};

/**
 * The sticker is a custom emoji to be used inside message text and caption. Currently, only Telegram Premium users can use custom emoji
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1sticker_full_type_custom_emoji.html
 */
export type StickerFullTypeCustomEmoji = {
	"@type": "stickerFullTypeCustomEmoji";
	/** Identifier of the custom emoji */
	custom_emoji_id: string;
	/** True, if the sticker must be repainted to a text color in messages, the color of the Telegram Premium badge in emoji status, white color on chat photos, or another appropriate color in other places */
	needs_repainting: boolean;
};

/**
 * Represents a closed vector path. The path begins at the end point of the last command. The coordinate system origin is in the upper-left corner
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1closed_vector_path.html
 */
export type ClosedVectorPath = {
	"@type": "closedVectorPath";
	/** List of vector path commands */
	commands: VectorPathCommand[];
};

/**
 * Represents outline of an image
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1outline.html
 */
export type Outline = {
	"@type": "outline";
	/** The list of closed vector paths */
	paths: ClosedVectorPath[];
};

/**
 * Describes one answer option of a poll
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1poll_option.html
 */
export type PollOption = {
	"@type": "pollOption";
	/** Option text; 1-100 characters. Only custom emoji entities are allowed */
	text: FormattedText;
	/** Number of voters for this option, available only for closed or voted polls */
	voter_count: number;
	/** The percentage of votes for this option; 0-100 */
	vote_percentage: number;
	/** True, if the option was chosen by the user */
	is_chosen: boolean;
	/** True, if the option is being chosen by a pending setPollAnswer request */
	is_being_chosen: boolean;
};

/**
 * A regular poll
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1poll_type_regular.html
 */
export type PollTypeRegular = {
	"@type": "pollTypeRegular";
	/** True, if multiple answer options can be chosen simultaneously */
	allow_multiple_answers: boolean;
};

/**
 * A poll in quiz mode, which has exactly one correct answer option and can be answered only once
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1poll_type_quiz.html
 */
export type PollTypeQuiz = {
	"@type": "pollTypeQuiz";
	/** 0-based identifier of the correct answer option; -1 for a yet unanswered poll */
	correct_option_id: number;
	/** Text that is shown when the user chooses an incorrect answer or taps on the lamp icon; 0-200 characters with at most 2 line feeds; empty for a yet unanswered poll */
	explanation: FormattedText;
};

/**
 * Describes an animation file. The animation must be encoded in GIF or MPEG4 format
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1animation.html
 */
export type Animation = {
	"@type": "animation";
	/** Duration of the animation, in seconds; as defined by the sender */
	duration: number;
	/** Width of the animation */
	width: number;
	/** Height of the animation */
	height: number;
	/** Original name of the file; as defined by the sender */
	file_name: string;
	/** MIME type of the file, usually "image/gif" or "video/mp4" */
	mime_type: string;
	/** True, if stickers were added to the animation. The list of corresponding sticker set can be received using getAttachedStickerSets */
	has_stickers: boolean;
	/** Animation minithumbnail; may be null */
	minithumbnail?: Minithumbnail;
	/** Animation thumbnail in JPEG or MPEG4 format; may be null */
	thumbnail?: Thumbnail;
	/** File containing the animation */
	animation: File;
};

/**
 * Describes an audio file. Audio is usually in MP3 or M4A format
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1audio.html
 */
export type Audio = {
	"@type": "audio";
	/** Duration of the audio, in seconds; as defined by the sender */
	duration: number;
	/** Title of the audio; as defined by the sender */
	title: string;
	/** Performer of the audio; as defined by the sender */
	performer: string;
	/** Original name of the file; as defined by the sender */
	file_name: string;
	/** The MIME type of the file; as defined by the sender */
	mime_type: string;
	/** The minithumbnail of the album cover; may be null */
	album_cover_minithumbnail?: Minithumbnail;
	/** The thumbnail of the album cover in JPEG format; as defined by the sender. The full size thumbnail is expected to be extracted from the downloaded audio file; may be null */
	album_cover_thumbnail?: Thumbnail;
	/** Album cover variants to use if the downloaded audio file contains no album cover. Provided thumbnail dimensions are approximate */
	external_album_covers: Thumbnail[];
	/** File containing the audio */
	audio: File;
};

/**
 * Describes a document of any type
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1document.html
 */
export type Document = {
	"@type": "document";
	/** Original name of the file; as defined by the sender */
	file_name: string;
	/** MIME type of the file; as defined by the sender */
	mime_type: string;
	/** Document minithumbnail; may be null */
	minithumbnail?: Minithumbnail;
	/** Document thumbnail in JPEG or PNG format (PNG will be used only for background patterns); as defined by the sender; may be null */
	thumbnail?: Thumbnail;
	/** File containing the document */
	document: File;
};

/**
 * Describes a photo
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1photo.html
 */
export type Photo = {
	"@type": "photo";
	/** True, if stickers were added to the photo. The list of corresponding sticker sets can be received using getAttachedStickerSets */
	has_stickers: boolean;
	/** Photo minithumbnail; may be null */
	minithumbnail?: Minithumbnail;
	/** Available variants of the photo, in different sizes */
	sizes: PhotoSize[];
};

/**
 * Describes a sticker
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1sticker.html
 */
export type Sticker = {
	"@type": "sticker";
	/** Unique sticker identifier within the set; 0 if none */
	id: string;
	/** Identifier of the sticker set to which the sticker belongs; 0 if none */
	set_id: string;
	/** Sticker width; as defined by the sender */
	width: number;
	/** Sticker height; as defined by the sender */
	height: number;
	/** Emoji corresponding to the sticker */
	emoji: string;
	/** Sticker format */
	format: StickerFormat;
	/** Sticker's full type */
	full_type: StickerFullType;
	/** Sticker thumbnail in WEBP or JPEG format; may be null */
	thumbnail?: Thumbnail;
	/** File containing the sticker */
	sticker: File;
};

/**
 * Describes a video file
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1video.html
 */
export type Video = {
	"@type": "video";
	/** Duration of the video, in seconds; as defined by the sender */
	duration: number;
	/** Video width; as defined by the sender */
	width: number;
	/** Video height; as defined by the sender */
	height: number;
	/** Original name of the file; as defined by the sender */
	file_name: string;
	/** MIME type of the file; as defined by the sender */
	mime_type: string;
	/** True, if stickers were added to the video. The list of corresponding sticker sets can be received using getAttachedStickerSets */
	has_stickers: boolean;
	/** True, if the video is expected to be streamed */
	supports_streaming: boolean;
	/** Video minithumbnail; may be null */
	minithumbnail?: Minithumbnail;
	/** Video thumbnail in JPEG or MPEG4 format; as defined by the sender; may be null */
	thumbnail?: Thumbnail;
	/** File containing the video */
	video: File;
};

/**
 * Describes a video note. The video must be equal in width and height, cropped to a circle, and stored in MPEG4 format
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1video_note.html
 */
export type VideoNote = {
	"@type": "videoNote";
	/** Duration of the video, in seconds; as defined by the sender */
	duration: number;
	/** A waveform representation of the video note's audio in 5-bit format; may be empty if unknown */
	waveform?: string;
	/** Video width and height; as defined by the sender */
	length: number;
	/** Video minithumbnail; may be null */
	minithumbnail?: Minithumbnail;
	/** Video thumbnail in JPEG format; as defined by the sender; may be null */
	thumbnail?: Thumbnail;
	/** Result of speech recognition in the video note; may be null */
	speech_recognition_result?: SpeechRecognitionResult;
	/** File containing the video */
	video: File;
};

/**
 * Describes a voice note
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1voice_note.html
 */
export type VoiceNote = {
	"@type": "voiceNote";
	/** Duration of the voice note, in seconds; as defined by the sender */
	duration: number;
	/** A waveform representation of the voice note in 5-bit format */
	waveform: string;
	/** MIME type of the file; as defined by the sender. Usually, one of "audio/ogg" for Opus in an OGG container, "audio/mpeg" for an MP3 audio, or "audio/mp4" for an M4A audio */
	mime_type: string;
	/** Result of speech recognition in the voice note; may be null */
	speech_recognition_result?: SpeechRecognitionResult;
	/** File containing the voice note */
	voice: File;
};

/**
 * Describes an animated or custom representation of an emoji
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1animated_emoji.html
 */
export type AnimatedEmoji = {
	"@type": "animatedEmoji";
	/** Sticker for the emoji; may be null if yet unknown for a custom emoji. If the sticker is a custom emoji, then it can have arbitrary format */
	sticker?: Sticker;
	/** Expected width of the sticker, which can be used if the sticker is null */
	sticker_width: number;
	/** Expected height of the sticker, which can be used if the sticker is null */
	sticker_height: number;
	/** Emoji modifier fitzpatrick type; 0-6; 0 if none */
	fitzpatrick_type: number;
	/** File containing the sound to be played when the sticker is clicked; may be null. The sound is encoded with the Opus codec, and stored inside an OGG container */
	sound?: File;
};

/**
 * Describes a user contact
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1contact.html
 */
export type Contact = {
	"@type": "contact";
	/** Phone number of the user */
	phone_number: string;
	/** First name of the user; 1-255 characters in length */
	first_name: string;
	/** Last name of the user */
	last_name: string;
	/** Additional data about the user in a form of vCard; 0-2048 bytes in length */
	vcard: string;
	/** Identifier of the user, if known; 0 otherwise */
	user_id: number;
};

/**
 * Describes a location on planet Earth
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1location.html
 */
export type Location = {
	"@type": "location";
	/** Latitude of the location in degrees; as defined by the sender */
	latitude: number;
	/** Longitude of the location, in degrees; as defined by the sender */
	longitude: number;
	/** The estimated horizontal accuracy of the location, in meters; as defined by the sender. 0 if unknown */
	horizontal_accuracy: number;
};

/**
 * Describes a venue
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1venue.html
 */
export type Venue = {
	"@type": "venue";
	/** Venue location; as defined by the sender */
	location: Location;
	/** Venue name; as defined by the sender */
	title: string;
	/** Venue address; as defined by the sender */
	address: string;
	/** Provider of the venue database; as defined by the sender. Currently, only "foursquare" and "gplaces" (Google Places) need to be supported */
	provider: string;
	/** Identifier of the venue in the provider database; as defined by the sender */
	id: string;
	/** Type of the venue in the provider database; as defined by the sender */
	type: string;
};

/**
 * Describes a game. Use getInternalLink with internalLinkTypeGame to share the game
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1game.html
 */
export type Game = {
	"@type": "game";
	/** Unique game identifier */
	id: string;
	/** Game short name */
	short_name: string;
	/** Game title */
	title: string;
	/** Game text, usually containing scoreboards for a game */
	text: FormattedText;
	/** Game description */
	description: string;
	/** Game photo */
	photo: Photo;
	/** Game animation; may be null */
	animation?: Animation;
};

/**
 * Describes a Web App. Use getInternalLink with internalLinkTypeWebApp to share the Web App
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1web_app.html
 */
export type WebApp = {
	"@type": "webApp";
	/** Web App short name */
	short_name: string;
	/** Web App title */
	title: string;
	/** Web App description */
	description: string;
	/** Web App photo */
	photo: Photo;
	/** Web App animation; may be null */
	animation?: Animation;
};

/**
 * Describes a poll
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1poll.html
 */
export type Poll = {
	"@type": "poll";
	/** Unique poll identifier */
	id: string;
	/** Poll question; 1-300 characters. Only custom emoji entities are allowed */
	question: FormattedText;
	/** List of poll answer options */
	options: PollOption[];
	/** Total number of voters, participating in the poll */
	total_voter_count: number;
	/** Identifiers of recent voters, if the poll is non-anonymous */
	recent_voter_ids: MessageSender[];
	/** True, if the poll is anonymous */
	is_anonymous: boolean;
	/** Type of the poll */
	type: PollType;
	/** Amount of time the poll will be active after creation, in seconds */
	open_period: number;
	/** Point in time (Unix timestamp) when the poll will automatically be closed */
	close_date: number;
	/** True, if the poll is closed */
	is_closed: boolean;
};

/**
 * Describes an alternative re-encoded quality of a video file
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1alternative_video.html
 */
export type AlternativeVideo = {
	"@type": "alternativeVideo";
	/** Unique identifier of the alternative video, which is used in the HLS file */
	id: string;
	/** Video width */
	width: number;
	/** Video height */
	height: number;
	/** Codec used for video file encoding, for example, "h264", "h265", or "av1" */
	codec: string;
	/** HLS file describing the video */
	hls_file: File;
	/** File containing the video */
	video: File;
};

/**
 * Describes a chat background
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1background.html
 */
export type Background = {
	"@type": "background";
	/** Unique background identifier */
	id: string;
	/** True, if this is one of default backgrounds */
	is_default: boolean;
	/** True, if the background is dark and is recommended to be used with dark theme */
	is_dark: boolean;
	/** Unique background name */
	name: string;
	/** Document with the background; may be null. Null only for filled and chat theme backgrounds */
	document?: Document;
	/** Type of the background */
	type: BackgroundType;
};

/**
 * Contains a list of backgrounds
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1backgrounds.html
 */
export type Backgrounds = {
	"@type": "backgrounds";
	/** A list of backgrounds */
	backgrounds: Background[];
};

/**
 * Describes a background set for a specific chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_background.html
 */
export type ChatBackground = {
	"@type": "chatBackground";
	/** The background */
	background: Background;
	/** Dimming of the background in dark themes, as a percentage; 0-100. Applied only to Wallpaper and Fill types of background */
	dark_theme_dimming: number;
};

/**
 * Describes a user profile photo
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1profile_photo.html
 */
export type ProfilePhoto = {
	"@type": "profilePhoto";
	/** Photo identifier; 0 for an empty photo. Can be used to find a photo in a list of user profile photos */
	id: string;
	/** A small (160x160) user profile photo. The file can be downloaded only before the photo is changed */
	small: File;
	/** A big (640x640) user profile photo. The file can be downloaded only before the photo is changed */
	big: File;
	/** User profile photo minithumbnail; may be null */
	minithumbnail?: Minithumbnail;
	/** True, if the photo has animated variant */
	has_animation: boolean;
	/** True, if the photo is visible only for the current user */
	is_personal: boolean;
};

/**
 * Contains basic information about the photo of a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_photo_info.html
 */
export type ChatPhotoInfo = {
	"@type": "chatPhotoInfo";
	/** A small (160x160) chat photo variant in JPEG format. The file can be downloaded only before the photo is changed */
	small: File;
	/** A big (640x640) chat photo variant in JPEG format. The file can be downloaded only before the photo is changed */
	big: File;
	/** Chat photo minithumbnail; may be null */
	minithumbnail?: Minithumbnail;
	/** True, if the photo has animated variant */
	has_animation: boolean;
	/** True, if the photo is visible only for the current user */
	is_personal: boolean;
};

/**
 * A regular user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_type_regular.html
 */
export type UserTypeRegular = {
	"@type": "userTypeRegular";
};

/**
 * A deleted user or deleted bot. No information on the user besides the user identifier is available. It is not possible to perform any active actions on this type of user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_type_deleted.html
 */
export type UserTypeDeleted = {
	"@type": "userTypeDeleted";
};

/**
 * A bot (see https://core.telegram.org/bots)
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_type_bot.html
 */
export type UserTypeBot = {
	"@type": "userTypeBot";
	/** True, if the bot is owned by the current user and can be edited using the methods toggleBotUsernameIsActive, reorderBotActiveUsernames, setBotProfilePhoto, setBotName, setBotInfoDescription, and setBotInfoShortDescription */
	can_be_edited: boolean;
	/** True, if the bot can be invited to basic group and supergroup chats */
	can_join_groups: boolean;
	/** True, if the bot can read all messages in basic group or supergroup chats and not just those addressed to the bot. In private and channel chats a bot can always read all messages */
	can_read_all_group_messages: boolean;
	/** True, if the bot has the main Web App */
	has_main_web_app: boolean;
	/** True, if the bot supports inline queries */
	is_inline: boolean;
	/** Placeholder for inline queries (displayed on the application input field) */
	inline_query_placeholder: string;
	/** True, if the location of the user is expected to be sent with every inline query to this bot */
	need_location: boolean;
	/** True, if the bot supports connection to Telegram Business accounts */
	can_connect_to_business: boolean;
	/** True, if the bot can be added to attachment or side menu */
	can_be_added_to_attachment_menu: boolean;
	/** The number of recently active users of the bot */
	active_user_count: number;
};

/**
 * No information on the user besides the user identifier is available, yet this user has not been deleted. This object is extremely rare and must be handled like a deleted user. It is not possible to perform any actions on users of this type
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_type_unknown.html
 */
export type UserTypeUnknown = {
	"@type": "userTypeUnknown";
};

/**
 * Represents a command supported by a bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1bot_command.html
 */
export type BotCommand = {
	"@type": "botCommand";
	/** Text of the bot command */
	command: string;
	/** Description of the bot command */
	description: string;
};

/**
 * Contains a list of bot commands
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1bot_commands.html
 */
export type BotCommands = {
	"@type": "botCommands";
	/** Bot's user identifier */
	bot_user_id: number;
	/** List of bot commands */
	commands: BotCommand[];
};

/**
 * Describes a button to be shown instead of bot commands menu button
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1bot_menu_button.html
 */
export type BotMenuButton = {
	"@type": "botMenuButton";
	/** Text of the button */
	text: string;
	/** URL of a Web App to open when the button is pressed. If the link is of the type internalLinkTypeWebApp, then it must be processed accordingly. Otherwise, the link must be passed to openWebApp */
	url: string;
};

/**
 * Describes parameters of verification that is provided by a bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1bot_verification_parameters.html
 */
export type BotVerificationParameters = {
	"@type": "botVerificationParameters";
	/** Identifier of the custom emoji that is used as the verification sign */
	icon_custom_emoji_id: string;
	/** Name of the organization that provides verification */
	organization_name: string;
	/** Default custom description of verification reason to be used as placeholder in setMessageSenderBotVerification; may be null if none */
	default_custom_description?: FormattedText;
	/** True, if the bot is allowed to provide custom description for verified entities */
	can_set_custom_description: boolean;
};

/**
 * Describes verification status provided by a bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1bot_verification.html
 */
export type BotVerification = {
	"@type": "botVerification";
	/** Identifier of the bot that provided the verification */
	bot_user_id: number;
	/** Identifier of the custom emoji that is used as the verification sign */
	icon_custom_emoji_id: string;
	/** Custom description of verification reason set by the bot. Can contain only Mention, Hashtag, Cashtag, PhoneNumber, BankCardNumber, Url, and EmailAddress entities */
	custom_description: FormattedText;
};

/**
 * Contains information about verification status of a chat or a user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1verification_status.html
 */
export type VerificationStatus = {
	"@type": "verificationStatus";
	/** True, if the chat or the user is verified by Telegram */
	is_verified: boolean;
	/** True, if the chat or the user is marked as scam by Telegram */
	is_scam: boolean;
	/** True, if the chat or the user is marked as fake by Telegram */
	is_fake: boolean;
	/** Identifier of the custom emoji to be shown as verification sign provided by a bot for the user; 0 if none */
	bot_verification_icon_custom_emoji_id: string;
};

/**
 * Represents a location to which a chat is connected
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_location.html
 */
export type ChatLocation = {
	"@type": "chatLocation";
	/** The location */
	location: Location;
	/** Location address; 1-64 characters, as defined by the chat owner */
	address: string;
};

/**
 * Represents a birthdate of a user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1birthdate.html
 */
export type Birthdate = {
	"@type": "birthdate";
	/** Day of the month; 1-31 */
	day: number;
	/** Month of the year; 1-12 */
	month: number;
	/** Birth year; 0 if unknown */
	year: number;
};

/**
 * Describes a user that had or will have a birthday soon
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1close_birthday_user.html
 */
export type CloseBirthdayUser = {
	"@type": "closeBirthdayUser";
	/** User identifier */
	user_id: number;
	/** Birthdate of the user */
	birthdate: Birthdate;
};

/**
 * Send away messages always
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1business_away_message_schedule_always.html
 */
export type BusinessAwayMessageScheduleAlways = {
	"@type": "businessAwayMessageScheduleAlways";
};

/**
 * Send away messages outside of the business opening hours
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1business_away_message_schedule_outside_of_opening_hours.html
 */
export type BusinessAwayMessageScheduleOutsideOfOpeningHours = {
	"@type": "businessAwayMessageScheduleOutsideOfOpeningHours";
};

/**
 * Send away messages only in the specified time span
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1business_away_message_schedule_custom.html
 */
export type BusinessAwayMessageScheduleCustom = {
	"@type": "businessAwayMessageScheduleCustom";
	/** Point in time (Unix timestamp) when the away messages will start to be sent */
	start_date: number;
	/** Point in time (Unix timestamp) when the away messages will stop to be sent */
	end_date: number;
};

/**
 * Represents a location of a business
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1business_location.html
 */
export type BusinessLocation = {
	"@type": "businessLocation";
	/** The location; may be null if not specified */
	location?: Location;
	/** Location address; 1-96 characters */
	address: string;
};

/**
 * Describes private chats chosen for automatic interaction with a business
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1business_recipients.html
 */
export type BusinessRecipients = {
	"@type": "businessRecipients";
	/** Identifiers of selected private chats */
	chat_ids: number[];
	/** Identifiers of private chats that are always excluded; for businessConnectedBot only */
	excluded_chat_ids: number[];
	/** True, if all existing private chats are selected */
	select_existing_chats: boolean;
	/** True, if all new private chats are selected */
	select_new_chats: boolean;
	/** True, if all private chats with contacts are selected */
	select_contacts: boolean;
	/** True, if all private chats with non-contacts are selected */
	select_non_contacts: boolean;
	/** If true, then all private chats except the selected are chosen. Otherwise, only the selected chats are chosen */
	exclude_selected: boolean;
};

/**
 * Describes settings for messages that are automatically sent by a Telegram Business account when it is away
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1business_away_message_settings.html
 */
export type BusinessAwayMessageSettings = {
	"@type": "businessAwayMessageSettings";
	/** Unique quick reply shortcut identifier for the away messages */
	shortcut_id: number;
	/** Chosen recipients of the away messages */
	recipients: BusinessRecipients;
	/** Settings used to check whether the current user is away */
	schedule: BusinessAwayMessageSchedule;
	/** True, if the messages must not be sent if the account was online in the last 10 minutes */
	offline_only: boolean;
};

/**
 * Describes settings for greeting messages that are automatically sent by a Telegram Business account as response to incoming messages in an inactive private chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1business_greeting_message_settings.html
 */
export type BusinessGreetingMessageSettings = {
	"@type": "businessGreetingMessageSettings";
	/** Unique quick reply shortcut identifier for the greeting messages */
	shortcut_id: number;
	/** Chosen recipients of the greeting messages */
	recipients: BusinessRecipients;
	/** The number of days after which a chat will be considered as inactive; currently, must be on of 7, 14, 21, or 28 */
	inactivity_days: number;
};

/**
 * Describes rights of a business bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1business_bot_rights.html
 */
export type BusinessBotRights = {
	"@type": "businessBotRights";
	/** True, if the bot can send and edit messages in the private chats that had incoming messages in the last 24 hours */
	can_reply: boolean;
	/** True, if the bot can mark incoming private messages as read */
	can_read_messages: boolean;
	/** True, if the bot can delete sent messages */
	can_delete_sent_messages: boolean;
	/** True, if the bot can delete any message */
	can_delete_all_messages: boolean;
	/** True, if the bot can edit name of the business account */
	can_edit_name: boolean;
	/** True, if the bot can edit bio of the business account */
	can_edit_bio: boolean;
	/** True, if the bot can edit profile photo of the business account */
	can_edit_profile_photo: boolean;
	/** True, if the bot can edit username of the business account */
	can_edit_username: boolean;
	/** True, if the bot can view gifts and amount of Telegram Stars owned by the business account */
	can_view_gifts_and_stars: boolean;
	/** True, if the bot can sell regular gifts received by the business account */
	can_sell_gifts: boolean;
	/** True, if the bot can change gift receiving settings of the business account */
	can_change_gift_settings: boolean;
	/** True, if the bot can transfer and upgrade gifts received by the business account */
	can_transfer_and_upgrade_gifts: boolean;
	/** True, if the bot can transfer Telegram Stars received by the business account to account of the bot, or use them to upgrade and transfer gifts */
	can_transfer_stars: boolean;
	/** True, if the bot can post, edit and delete stories */
	can_manage_stories: boolean;
};

/**
 * Describes a bot connected to a business account
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1business_connected_bot.html
 */
export type BusinessConnectedBot = {
	"@type": "businessConnectedBot";
	/** User identifier of the bot */
	bot_user_id: number;
	/** Private chats that will be accessible to the bot */
	recipients: BusinessRecipients;
	/** Rights of the bot */
	rights: BusinessBotRights;
};

/**
 * Describes settings for a business account start page
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1business_start_page.html
 */
export type BusinessStartPage = {
	"@type": "businessStartPage";
	/** Title text of the start page */
	title: string;
	/** Message text of the start page */
	message: string;
	/** Greeting sticker of the start page; may be null if none */
	sticker?: Sticker;
};

/**
 * Describes settings for a business account start page to set
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_business_start_page.html
 */
export type InputBusinessStartPage = {
	"@type": "inputBusinessStartPage";
	/** Title text of the start page; 0-getOption("business_start_page_title_length_max") characters */
	title: string;
	/** Message text of the start page; 0-getOption("business_start_page_message_length_max") characters */
	message: string;
	/** Greeting sticker of the start page; pass null if none. The sticker must belong to a sticker set and must not be a custom emoji */
	sticker?: InputFile;
};

/**
 * Describes an interval of time when the business is open
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1business_opening_hours_interval.html
 */
export type BusinessOpeningHoursInterval = {
	"@type": "businessOpeningHoursInterval";
	/** The minute's sequence number in a week, starting on Monday, marking the start of the time interval during which the business is open; 0-7*24*60 */
	start_minute: number;
	/** The minute's sequence number in a week, starting on Monday, marking the end of the time interval during which the business is open; 1-8*24*60 */
	end_minute: number;
};

/**
 * Describes opening hours of a business
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1business_opening_hours.html
 */
export type BusinessOpeningHours = {
	"@type": "businessOpeningHours";
	/** Unique time zone identifier */
	time_zone_id: string;
	/** Intervals of the time when the business is open */
	opening_hours: BusinessOpeningHoursInterval[];
};

/**
 * Contains information about a Telegram Business account
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1business_info.html
 */
export type BusinessInfo = {
	"@type": "businessInfo";
	/** Location of the business; may be null if none */
	location?: BusinessLocation;
	/** Opening hours of the business; may be null if none. The hours are guaranteed to be valid and has already been split by week days */
	opening_hours?: BusinessOpeningHours;
	/** Opening hours of the business in the local time; may be null if none. The hours are guaranteed to be valid and has already been split by week days. Local time zone identifier will be empty. An updateUserFullInfo update is not triggered when value of this field changes */
	local_opening_hours?: BusinessOpeningHours;
	/** Time left before the business will open the next time, in seconds; 0 if unknown. An updateUserFullInfo update is not triggered when value of this field changes */
	next_open_in: number;
	/** Time left before the business will close the next time, in seconds; 0 if unknown. An updateUserFullInfo update is not triggered when value of this field changes */
	next_close_in: number;
	/** The greeting message; may be null if none or the Business account is not of the current user */
	greeting_message_settings?: BusinessGreetingMessageSettings;
	/** The away message; may be null if none or the Business account is not of the current user */
	away_message_settings?: BusinessAwayMessageSettings;
	/** Information about start page of the account; may be null if none */
	start_page?: BusinessStartPage;
};

/**
 * Contains information about a business chat link
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1business_chat_link.html
 */
export type BusinessChatLink = {
	"@type": "businessChatLink";
	/** The HTTPS link */
	link: string;
	/** Message draft text that will be added to the input field */
	text: FormattedText;
	/** Link title */
	title: string;
	/** Number of times the link was used */
	view_count: number;
};

/**
 * Contains a list of business chat links created by the user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1business_chat_links.html
 */
export type BusinessChatLinks = {
	"@type": "businessChatLinks";
	/** List of links */
	links: BusinessChatLink[];
};

/**
 * Describes a business chat link to create or edit
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_business_chat_link.html
 */
export type InputBusinessChatLink = {
	"@type": "inputBusinessChatLink";
	/** Message draft text that will be added to the input field */
	text: FormattedText;
	/** Link title */
	title: string;
};

/**
 * Contains information about a business chat link
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1business_chat_link_info.html
 */
export type BusinessChatLinkInfo = {
	"@type": "businessChatLinkInfo";
	/** Identifier of the private chat that created the link */
	chat_id: number;
	/** Message draft text that must be added to the input field */
	text: FormattedText;
};

/**
 * Information about the sticker, which was used to create the chat photo
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_photo_sticker_type_regular_or_mask.html
 */
export type ChatPhotoStickerTypeRegularOrMask = {
	"@type": "chatPhotoStickerTypeRegularOrMask";
	/** Sticker set identifier */
	sticker_set_id: string;
	/** Identifier of the sticker in the set */
	sticker_id: string;
};

/**
 * Information about the custom emoji, which was used to create the chat photo
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_photo_sticker_type_custom_emoji.html
 */
export type ChatPhotoStickerTypeCustomEmoji = {
	"@type": "chatPhotoStickerTypeCustomEmoji";
	/** Identifier of the custom emoji */
	custom_emoji_id: string;
};

/**
 * Information about the sticker, which was used to create the chat photo. The sticker is shown at the center of the photo and occupies at most 67% of it
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_photo_sticker.html
 */
export type ChatPhotoSticker = {
	"@type": "chatPhotoSticker";
	/** Type of the sticker */
	type: ChatPhotoStickerType;
	/** The fill to be used as background for the sticker; rotation angle in backgroundFillGradient isn't supported */
	background_fill: BackgroundFill;
};

/**
 * Animated variant of a chat photo in MPEG4 format
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1animated_chat_photo.html
 */
export type AnimatedChatPhoto = {
	"@type": "animatedChatPhoto";
	/** Animation width and height */
	length: number;
	/** Information about the animation file */
	file: File;
	/** Timestamp of the frame, used as a static chat photo */
	main_frame_timestamp: number;
};

/**
 * Describes a chat or user profile photo
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_photo.html
 */
export type ChatPhoto = {
	"@type": "chatPhoto";
	/** Unique photo identifier */
	id: string;
	/** Point in time (Unix timestamp) when the photo has been added */
	added_date: number;
	/** Photo minithumbnail; may be null */
	minithumbnail?: Minithumbnail;
	/** Available variants of the photo in JPEG format, in different size */
	sizes: PhotoSize[];
	/** A big (up to 1280x1280) animated variant of the photo in MPEG4 format; may be null */
	animation?: AnimatedChatPhoto;
	/** A small (160x160) animated variant of the photo in MPEG4 format; may be null even the big animation is available */
	small_animation?: AnimatedChatPhoto;
	/** Sticker-based version of the chat photo; may be null */
	sticker?: ChatPhotoSticker;
};

/**
 * Contains a list of chat or user profile photos
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_photos.html
 */
export type ChatPhotos = {
	"@type": "chatPhotos";
	/** Total number of photos */
	total_count: number;
	/** List of photos */
	photos: ChatPhoto[];
};

/**
 * A previously used profile photo of the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_chat_photo_previous.html
 */
export type InputChatPhotoPrevious = {
	"@type": "inputChatPhotoPrevious";
	/** Identifier of the current user's profile photo to reuse */
	chat_photo_id: string;
};

/**
 * A static photo in JPEG format
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_chat_photo_static.html
 */
export type InputChatPhotoStatic = {
	"@type": "inputChatPhotoStatic";
	/** Photo to be set as profile photo. Only inputFileLocal and inputFileGenerated are allowed */
	photo: InputFile;
};

/**
 * An animation in MPEG4 format; must be square, at most 10 seconds long, have width between 160 and 1280 and be at most 2MB in size
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_chat_photo_animation.html
 */
export type InputChatPhotoAnimation = {
	"@type": "inputChatPhotoAnimation";
	/** Animation to be set as profile photo. Only inputFileLocal and inputFileGenerated are allowed */
	animation: InputFile;
	/** Timestamp of the frame, which will be used as static chat photo */
	main_frame_timestamp: number;
};

/**
 * A sticker on a custom background
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_chat_photo_sticker.html
 */
export type InputChatPhotoSticker = {
	"@type": "inputChatPhotoSticker";
	/** Information about the sticker */
	sticker: ChatPhotoSticker;
};

/**
 * Describes actions that a user is allowed to take in a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_permissions.html
 */
export type ChatPermissions = {
	"@type": "chatPermissions";
	/** True, if the user can send text messages, contacts, giveaways, giveaway winners, invoices, locations, and venues */
	can_send_basic_messages: boolean;
	/** True, if the user can send music files */
	can_send_audios: boolean;
	/** True, if the user can send documents */
	can_send_documents: boolean;
	/** True, if the user can send photos */
	can_send_photos: boolean;
	/** True, if the user can send videos */
	can_send_videos: boolean;
	/** True, if the user can send video notes */
	can_send_video_notes: boolean;
	/** True, if the user can send voice notes */
	can_send_voice_notes: boolean;
	/** True, if the user can send polls */
	can_send_polls: boolean;
	/** True, if the user can send animations, games, stickers, and dice and use inline bots */
	can_send_other_messages: boolean;
	/** True, if the user may add a link preview to their messages */
	can_add_link_previews: boolean;
	/** True, if the user can change the chat title, photo, and other settings */
	can_change_info: boolean;
	/** True, if the user can invite new users to the chat */
	can_invite_users: boolean;
	/** True, if the user can pin messages */
	can_pin_messages: boolean;
	/** True, if the user can create topics */
	can_create_topics: boolean;
};

/**
 * Describes rights of the administrator
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_administrator_rights.html
 */
export type ChatAdministratorRights = {
	"@type": "chatAdministratorRights";
	/** True, if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report supergroup spam messages, ignore slow mode, and send messages to the chat without paying Telegram Stars. Implied by any other privilege; applicable to supergroups and channels only */
	can_manage_chat: boolean;
	/** True, if the administrator can change the chat title, photo, and other settings */
	can_change_info: boolean;
	/** True, if the administrator can create channel posts, answer to channel direct messages, or view channel statistics; applicable to channels only */
	can_post_messages: boolean;
	/** True, if the administrator can edit messages of other users and pin messages; applicable to channels only */
	can_edit_messages: boolean;
	/** True, if the administrator can delete messages of other users */
	can_delete_messages: boolean;
	/** True, if the administrator can invite new users to the chat */
	can_invite_users: boolean;
	/** True, if the administrator can restrict, ban, or unban chat members or view supergroup statistics; always true for channels */
	can_restrict_members: boolean;
	/** True, if the administrator can pin messages; applicable to basic groups and supergroups only */
	can_pin_messages: boolean;
	/** True, if the administrator can create, rename, close, reopen, hide, and unhide forum topics; applicable to forum supergroups only */
	can_manage_topics: boolean;
	/** True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that were directly or indirectly promoted by them */
	can_promote_members: boolean;
	/** True, if the administrator can manage video chats */
	can_manage_video_chats: boolean;
	/** True, if the administrator can create new chat stories, or edit and delete posted stories; applicable to supergroups and channels only */
	can_post_stories: boolean;
	/** True, if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access story archive; applicable to supergroups and channels only */
	can_edit_stories: boolean;
	/** True, if the administrator can delete stories posted by other users; applicable to supergroups and channels only */
	can_delete_stories: boolean;
	/** True, if the administrator isn't shown in the chat member list and sends messages anonymously; applicable to supergroups only */
	is_anonymous: boolean;
};

/**
 * Describes a possibly non-integer amount of Telegram Stars
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_amount.html
 */
export type StarAmount = {
	"@type": "starAmount";
	/** The integer amount of Telegram Stars rounded to 0 */
	star_count: number;
	/** The number of 1/1000000000 shares of Telegram Stars; from -999999999 to 999999999 */
	nanostar_count: number;
};

/**
 * Describes a subscription to a channel chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_subscription_type_channel.html
 */
export type StarSubscriptionTypeChannel = {
	"@type": "starSubscriptionTypeChannel";
	/** True, if the subscription is active and the user can use the method reuseStarSubscription to join the subscribed chat again */
	can_reuse: boolean;
	/** The invite link that can be used to renew the subscription if it has been expired; may be empty, if the link isn't available anymore */
	invite_link?: string;
};

/**
 * Describes a subscription in a bot or a business account
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_subscription_type_bot.html
 */
export type StarSubscriptionTypeBot = {
	"@type": "starSubscriptionTypeBot";
	/** True, if the subscription was canceled by the bot and can't be extended */
	is_canceled_by_bot: boolean;
	/** Subscription invoice title */
	title: string;
	/** Subscription invoice photo */
	photo: Photo;
	/** The link to the subscription invoice */
	invoice_link: string;
};

/**
 * Describes subscription plan paid in Telegram Stars
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_subscription_pricing.html
 */
export type StarSubscriptionPricing = {
	"@type": "starSubscriptionPricing";
	/** The number of seconds between consecutive Telegram Star debiting */
	period: number;
	/** The amount of Telegram Stars that must be paid for each period */
	star_count: number;
};

/**
 * Contains information about subscription to a channel chat, a bot, or a business account that was paid in Telegram Stars
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_subscription.html
 */
export type StarSubscription = {
	"@type": "starSubscription";
	/** Unique identifier of the subscription */
	id: string;
	/** Identifier of the chat that is subscribed */
	chat_id: number;
	/** Point in time (Unix timestamp) when the subscription will expire or expired */
	expiration_date: number;
	/** True, if the subscription was canceled */
	is_canceled: boolean;
	/** True, if the subscription expires soon and there are no enough Telegram Stars on the user's balance to extend it */
	is_expiring: boolean;
	/** The subscription plan */
	pricing: StarSubscriptionPricing;
	/** Type of the subscription */
	type: StarSubscriptionType;
};

/**
 * Represents a list of Telegram Star subscriptions
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_subscriptions.html
 */
export type StarSubscriptions = {
	"@type": "starSubscriptions";
	/** The amount of owned Telegram Stars */
	star_amount: StarAmount;
	/** List of subscriptions for Telegram Stars */
	subscriptions: StarSubscription[];
	/** The number of Telegram Stars required to buy to extend subscriptions expiring soon */
	required_star_count: number;
	/** The offset for the next request. If empty, then there are no more results */
	next_offset: string;
};

/**
 * The affiliate is the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1affiliate_type_current_user.html
 */
export type AffiliateTypeCurrentUser = {
	"@type": "affiliateTypeCurrentUser";
};

/**
 * The affiliate is a bot owned by the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1affiliate_type_bot.html
 */
export type AffiliateTypeBot = {
	"@type": "affiliateTypeBot";
	/** User identifier of the bot */
	user_id: number;
};

/**
 * The affiliate is a channel chat where the current user has can_post_messages administrator right
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1affiliate_type_channel.html
 */
export type AffiliateTypeChannel = {
	"@type": "affiliateTypeChannel";
	/** Identifier of the channel chat */
	chat_id: number;
};

/**
 * The affiliate programs must be sorted by the profitability
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1affiliate_program_sort_order_profitability.html
 */
export type AffiliateProgramSortOrderProfitability = {
	"@type": "affiliateProgramSortOrderProfitability";
};

/**
 * The affiliate programs must be sorted by creation date
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1affiliate_program_sort_order_creation_date.html
 */
export type AffiliateProgramSortOrderCreationDate = {
	"@type": "affiliateProgramSortOrderCreationDate";
};

/**
 * The affiliate programs must be sorted by the expected revenue
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1affiliate_program_sort_order_revenue.html
 */
export type AffiliateProgramSortOrderRevenue = {
	"@type": "affiliateProgramSortOrderRevenue";
};

/**
 * Describes parameters of an affiliate program
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1affiliate_program_parameters.html
 */
export type AffiliateProgramParameters = {
	"@type": "affiliateProgramParameters";
	/** The number of Telegram Stars received by the affiliate for each 1000 Telegram Stars received by the program owner; getOption("affiliate_program_commission_per_mille_min")-getOption("affiliate_program_commission_per_mille_max") */
	commission_per_mille: number;
	/** Number of months the program will be active; 0-36. If 0, then the program is eternal */
	month_count: number;
};

/**
 * Contains information about an active affiliate program
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1affiliate_program_info.html
 */
export type AffiliateProgramInfo = {
	"@type": "affiliateProgramInfo";
	/** Parameters of the affiliate program */
	parameters: AffiliateProgramParameters;
	/** Point in time (Unix timestamp) when the affiliate program will be closed; 0 if the affiliate program isn't scheduled to be closed. If positive, then the program can't be connected using connectAffiliateProgram, but active connections will work until the date */
	end_date: number;
	/** The amount of daily revenue per user in Telegram Stars of the bot that created the affiliate program */
	daily_revenue_per_user_amount: StarAmount;
};

/**
 * Contains information about an affiliate that received commission from a Telegram Star transaction
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1affiliate_info.html
 */
export type AffiliateInfo = {
	"@type": "affiliateInfo";
	/** The number of Telegram Stars received by the affiliate for each 1000 Telegram Stars received by the program owner */
	commission_per_mille: number;
	/** Identifier of the chat which received the commission */
	affiliate_chat_id: number;
	/** The amount of Telegram Stars that were received by the affiliate; can be negative for refunds */
	star_amount: StarAmount;
};

/**
 * Describes a found affiliate program
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1found_affiliate_program.html
 */
export type FoundAffiliateProgram = {
	"@type": "foundAffiliateProgram";
	/** User identifier of the bot created the program */
	bot_user_id: number;
	/** Information about the affiliate program */
	info: AffiliateProgramInfo;
};

/**
 * Represents a list of found affiliate programs
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1found_affiliate_programs.html
 */
export type FoundAffiliatePrograms = {
	"@type": "foundAffiliatePrograms";
	/** The total number of found affiliate programs */
	total_count: number;
	/** The list of affiliate programs */
	programs: FoundAffiliateProgram[];
	/** The offset for the next request. If empty, then there are no more results */
	next_offset: string;
};

/**
 * Describes an affiliate program that was connected to an affiliate
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1connected_affiliate_program.html
 */
export type ConnectedAffiliateProgram = {
	"@type": "connectedAffiliateProgram";
	/** The link that can be used to refer users if the program is still active */
	url: string;
	/** User identifier of the bot created the program */
	bot_user_id: number;
	/** The parameters of the affiliate program */
	parameters: AffiliateProgramParameters;
	/** Point in time (Unix timestamp) when the affiliate program was connected */
	connection_date: number;
	/** True, if the program was canceled by the bot, or disconnected by the chat owner and isn't available anymore */
	is_disconnected: boolean;
	/** The number of users that used the affiliate program */
	user_count: string;
	/** The number of Telegram Stars that were earned by the affiliate program */
	revenue_star_count: string;
};

/**
 * Represents a list of affiliate programs that were connected to an affiliate
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1connected_affiliate_programs.html
 */
export type ConnectedAffiliatePrograms = {
	"@type": "connectedAffiliatePrograms";
	/** The total number of affiliate programs that were connected to the affiliate */
	total_count: number;
	/** The list of connected affiliate programs */
	programs: ConnectedAffiliateProgram[];
	/** The offset for the next request. If empty, then there are no more results */
	next_offset: string;
};

/**
 * Contains information about a product that can be paid with invoice
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1product_info.html
 */
export type ProductInfo = {
	"@type": "productInfo";
	/** Product title */
	title: string;
	/** Product description */
	description: FormattedText;
	/** Product photo; may be null */
	photo?: Photo;
};

/**
 * Describes an option for buying Telegram Premium to a user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_payment_option.html
 */
export type PremiumPaymentOption = {
	"@type": "premiumPaymentOption";
	/** ISO 4217 currency code for Telegram Premium subscription payment */
	currency: string;
	/** The amount to pay, in the smallest units of the currency */
	amount: number;
	/** The discount associated with this option, as a percentage */
	discount_percentage: number;
	/** Number of months the Telegram Premium subscription will be active. Use getPremiumInfoSticker to get the sticker to be used as representation of the Telegram Premium subscription */
	month_count: number;
	/** Identifier of the store product associated with the option */
	store_product_id: string;
	/** An internal link to be opened for buying Telegram Premium to the user if store payment isn't possible; may be null if direct payment isn't available */
	payment_link?: InternalLinkType;
};

/**
 * Describes an option for buying or upgrading Telegram Premium for self
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_state_payment_option.html
 */
export type PremiumStatePaymentOption = {
	"@type": "premiumStatePaymentOption";
	/** Information about the payment option */
	payment_option: PremiumPaymentOption;
	/** True, if this is the currently used Telegram Premium subscription option */
	is_current: boolean;
	/** True, if the payment option can be used to upgrade the existing Telegram Premium subscription */
	is_upgrade: boolean;
	/** Identifier of the last in-store transaction for the currently used option */
	last_transaction_id: string;
};

/**
 * Describes an option for gifting Telegram Premium to a user. Use telegramPaymentPurposePremiumGift for out-of-store payments or payments in Telegram Stars
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_gift_payment_option.html
 */
export type PremiumGiftPaymentOption = {
	"@type": "premiumGiftPaymentOption";
	/** ISO 4217 currency code for the payment */
	currency: string;
	/** The amount to pay, in the smallest units of the currency */
	amount: number;
	/** The alternative amount of Telegram Stars to pay; 0 if payment in Telegram Stars is not possible */
	star_count: number;
	/** The discount associated with this option, as a percentage */
	discount_percentage: number;
	/** Number of months the Telegram Premium subscription will be active */
	month_count: number;
	/** Identifier of the store product associated with the option */
	store_product_id: string;
	/** A sticker to be shown along with the option; may be null if unknown */
	sticker?: Sticker;
};

/**
 * Contains a list of options for gifting Telegram Premium to a user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_gift_payment_options.html
 */
export type PremiumGiftPaymentOptions = {
	"@type": "premiumGiftPaymentOptions";
	/** The list of options sorted by Telegram Premium subscription duration */
	options: PremiumGiftPaymentOption[];
};

/**
 * Describes an option for creating of Telegram Premium giveaway or manual distribution of Telegram Premium among chat members. Use telegramPaymentPurposePremiumGiftCodes or telegramPaymentPurposePremiumGiveaway for out-of-store payments
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_giveaway_payment_option.html
 */
export type PremiumGiveawayPaymentOption = {
	"@type": "premiumGiveawayPaymentOption";
	/** ISO 4217 currency code for Telegram Premium gift code payment */
	currency: string;
	/** The amount to pay, in the smallest units of the currency */
	amount: number;
	/** Number of users which will be able to activate the gift codes */
	winner_count: number;
	/** Number of months the Telegram Premium subscription will be active */
	month_count: number;
	/** Identifier of the store product associated with the option; may be empty if none */
	store_product_id?: string;
	/** Number of times the store product must be paid */
	store_product_quantity: number;
};

/**
 * Contains a list of options for creating of Telegram Premium giveaway or manual distribution of Telegram Premium among chat members
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_giveaway_payment_options.html
 */
export type PremiumGiveawayPaymentOptions = {
	"@type": "premiumGiveawayPaymentOptions";
	/** The list of options */
	options: PremiumGiveawayPaymentOption[];
};

/**
 * Contains information about a Telegram Premium gift code
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_gift_code_info.html
 */
export type PremiumGiftCodeInfo = {
	"@type": "premiumGiftCodeInfo";
	/** Identifier of a chat or a user that created the gift code; may be null if unknown. If null and the code is from messagePremiumGiftCode message, then creator_id from the message can be used */
	creator_id?: MessageSender;
	/** Point in time (Unix timestamp) when the code was created */
	creation_date: number;
	/** True, if the gift code was created for a giveaway */
	is_from_giveaway: boolean;
	/** Identifier of the corresponding giveaway message in the creator_id chat; can be 0 or an identifier of a deleted message */
	giveaway_message_id: number;
	/** Number of months the Telegram Premium subscription will be active after code activation */
	month_count: number;
	/** Identifier of a user for which the code was created; 0 if none */
	user_id: number;
	/** Point in time (Unix timestamp) when the code was activated; 0 if none */
	use_date: number;
};

/**
 * Describes an option for buying Telegram Stars. Use telegramPaymentPurposeStars for out-of-store payments
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_payment_option.html
 */
export type StarPaymentOption = {
	"@type": "starPaymentOption";
	/** ISO 4217 currency code for the payment */
	currency: string;
	/** The amount to pay, in the smallest units of the currency */
	amount: number;
	/** Number of Telegram Stars that will be purchased */
	star_count: number;
	/** Identifier of the store product associated with the option; may be empty if none */
	store_product_id?: string;
	/** True, if the option must be shown only in the full list of payment options */
	is_additional: boolean;
};

/**
 * Contains a list of options for buying Telegram Stars
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_payment_options.html
 */
export type StarPaymentOptions = {
	"@type": "starPaymentOptions";
	/** The list of options */
	options: StarPaymentOption[];
};

/**
 * Describes an option for the number of winners of a Telegram Star giveaway
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_giveaway_winner_option.html
 */
export type StarGiveawayWinnerOption = {
	"@type": "starGiveawayWinnerOption";
	/** The number of users that will be chosen as winners */
	winner_count: number;
	/** The number of Telegram Stars that will be won by the winners of the giveaway */
	won_star_count: number;
	/** True, if the option must be chosen by default */
	is_default: boolean;
};

/**
 * Describes an option for creating of Telegram Star giveaway. Use telegramPaymentPurposeStarGiveaway for out-of-store payments
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_giveaway_payment_option.html
 */
export type StarGiveawayPaymentOption = {
	"@type": "starGiveawayPaymentOption";
	/** ISO 4217 currency code for the payment */
	currency: string;
	/** The amount to pay, in the smallest units of the currency */
	amount: number;
	/** Number of Telegram Stars that will be distributed among winners */
	star_count: number;
	/** Identifier of the store product associated with the option; may be empty if none */
	store_product_id?: string;
	/** Number of times the chat will be boosted for one year if the option is chosen */
	yearly_boost_count: number;
	/** Allowed options for the number of giveaway winners */
	winner_options: StarGiveawayWinnerOption[];
	/** True, if the option must be chosen by default */
	is_default: boolean;
	/** True, if the option must be shown only in the full list of payment options */
	is_additional: boolean;
};

/**
 * Contains a list of options for creating of Telegram Star giveaway
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_giveaway_payment_options.html
 */
export type StarGiveawayPaymentOptions = {
	"@type": "starGiveawayPaymentOptions";
	/** The list of options */
	options: StarGiveawayPaymentOption[];
};

/**
 * Describes gift types that are accepted by a user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1accepted_gift_types.html
 */
export type AcceptedGiftTypes = {
	"@type": "acceptedGiftTypes";
	/** True, if unlimited regular gifts are accepted */
	unlimited_gifts: boolean;
	/** True, if limited regular gifts are accepted */
	limited_gifts: boolean;
	/** True, if upgraded gifts and regular gifts that can be upgraded for free are accepted */
	upgraded_gifts: boolean;
	/** True, if Telegram Premium subscription is accepted */
	premium_subscription: boolean;
};

/**
 * Contains settings for gift receiving for a user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1gift_settings.html
 */
export type GiftSettings = {
	"@type": "giftSettings";
	/** True, if a button for sending a gift to the user or by the user must always be shown in the input field */
	show_gift_button: boolean;
	/** Types of gifts accepted by the user; for Telegram Premium users only */
	accepted_gift_types: AcceptedGiftTypes;
};

/**
 * Describes a model of an upgraded gift
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1upgraded_gift_model.html
 */
export type UpgradedGiftModel = {
	"@type": "upgradedGiftModel";
	/** Name of the model */
	name: string;
	/** The sticker representing the upgraded gift */
	sticker: Sticker;
	/** The number of upgraded gifts that receive this model for each 1000 gifts upgraded */
	rarity_per_mille: number;
};

/**
 * Describes a symbol shown on the pattern of an upgraded gift
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1upgraded_gift_symbol.html
 */
export type UpgradedGiftSymbol = {
	"@type": "upgradedGiftSymbol";
	/** Name of the symbol */
	name: string;
	/** The sticker representing the symbol */
	sticker: Sticker;
	/** The number of upgraded gifts that receive this symbol for each 1000 gifts upgraded */
	rarity_per_mille: number;
};

/**
 * Describes colors of a backdrop of an upgraded gift
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1upgraded_gift_backdrop_colors.html
 */
export type UpgradedGiftBackdropColors = {
	"@type": "upgradedGiftBackdropColors";
	/** A color in the center of the backdrop in the RGB format */
	center_color: number;
	/** A color on the edges of the backdrop in the RGB format */
	edge_color: number;
	/** A color to be applied for the symbol in the RGB format */
	symbol_color: number;
	/** A color for the text on the backdrop in the RGB format */
	text_color: number;
};

/**
 * Describes a backdrop of an upgraded gift
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1upgraded_gift_backdrop.html
 */
export type UpgradedGiftBackdrop = {
	"@type": "upgradedGiftBackdrop";
	/** Unique identifier of the backdrop */
	id: number;
	/** Name of the backdrop */
	name: string;
	/** Colors of the backdrop */
	colors: UpgradedGiftBackdropColors;
	/** The number of upgraded gifts that receive this backdrop for each 1000 gifts upgraded */
	rarity_per_mille: number;
};

/**
 * Describes the original details about the gift
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1upgraded_gift_original_details.html
 */
export type UpgradedGiftOriginalDetails = {
	"@type": "upgradedGiftOriginalDetails";
	/** Identifier of the user or the chat that sent the gift; may be null if the gift was private */
	sender_id?: MessageSender;
	/** Identifier of the user or the chat that received the gift */
	receiver_id: MessageSender;
	/** Message added to the gift */
	text: FormattedText;
	/** Point in time (Unix timestamp) when the gift was sent */
	date: number;
};

/**
 * Describes a gift that can be sent to another user or channel chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1gift.html
 */
export type Gift = {
	"@type": "gift";
	/** Unique identifier of the gift */
	id: string;
	/** The sticker representing the gift */
	sticker: Sticker;
	/** Number of Telegram Stars that must be paid for the gift */
	star_count: number;
	/** Number of Telegram Stars that can be claimed by the receiver instead of the regular gift by default. If the gift was paid with just bought Telegram Stars, then full value can be claimed */
	default_sell_star_count: number;
	/** Number of Telegram Stars that must be paid to upgrade the gift; 0 if upgrade isn't possible */
	upgrade_star_count: number;
	/** True, if the gift is a birthday gift */
	is_for_birthday: boolean;
	/** Number of remaining times the gift can be purchased; 0 if not limited or the gift was sold out */
	remaining_count: number;
	/** Number of total times the gift can be purchased; 0 if not limited */
	total_count: number;
	/** Point in time (Unix timestamp) when the gift was send for the first time; for sold out gifts only */
	first_send_date: number;
	/** Point in time (Unix timestamp) when the gift was send for the last time; for sold out gifts only */
	last_send_date: number;
};

/**
 * Describes an upgraded gift that can be transferred to another owner or transferred to the TON blockchain as an NFT
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1upgraded_gift.html
 */
export type UpgradedGift = {
	"@type": "upgradedGift";
	/** Unique identifier of the gift */
	id: string;
	/** The title of the upgraded gift */
	title: string;
	/** Unique name of the upgraded gift that can be used with internalLinkTypeUpgradedGift or sendResoldGift */
	name: string;
	/** Unique number of the upgraded gift among gifts upgraded from the same gift */
	number: number;
	/** Total number of gifts that were upgraded from the same gift */
	total_upgraded_count: number;
	/** The maximum number of gifts that can be upgraded from the same gift */
	max_upgraded_count: number;
	/** Identifier of the user or the chat that owns the upgraded gift; may be null if none or unknown */
	owner_id?: MessageSender;
	/** Address of the gift NFT owner in TON blockchain; may be empty if none. Append the address to getOption("ton_blockchain_explorer_url") to get a link with information about the address */
	owner_address?: string;
	/** Name of the owner for the case when owner identifier and address aren't known */
	owner_name: string;
	/** Address of the gift NFT in TON blockchain; may be empty if none. Append the address to getOption("ton_blockchain_explorer_url") to get a link with information about the address */
	gift_address?: string;
	/** Model of the upgraded gift */
	model: UpgradedGiftModel;
	/** Symbol of the upgraded gift */
	symbol: UpgradedGiftSymbol;
	/** Backdrop of the upgraded gift */
	backdrop: UpgradedGiftBackdrop;
	/** Information about the originally sent gift; may be null if unknown */
	original_details?: UpgradedGiftOriginalDetails;
	/** Number of Telegram Stars that must be paid to buy the gift and send it to someone else; 0 if resale isn't possible */
	resale_star_count: number;
};

/**
 * Contains result of gift upgrading
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1upgrade_gift_result.html
 */
export type UpgradeGiftResult = {
	"@type": "upgradeGiftResult";
	/** The upgraded gift */
	gift: UpgradedGift;
	/** Unique identifier of the received gift for the current user */
	received_gift_id: string;
	/** True, if the gift is displayed on the user's or the channel's profile page */
	is_saved: boolean;
	/** True, if the gift can be transferred to another owner */
	can_be_transferred: boolean;
	/** Number of Telegram Stars that must be paid to transfer the upgraded gift */
	transfer_star_count: number;
	/** Point in time (Unix timestamp) when the gift can be transferred to another owner; 0 if the gift can be transferred immediately or transfer isn't possible */
	next_transfer_date: number;
	/** Point in time (Unix timestamp) when the gift can be resold to another user; 0 if the gift can't be resold; only for the receiver of the gift */
	next_resale_date: number;
	/** Point in time (Unix timestamp) when the gift can be transferred to the TON blockchain as an NFT */
	export_date: number;
};

/**
 * Describes a gift that is available for purchase
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1available_gift.html
 */
export type AvailableGift = {
	"@type": "availableGift";
	/** The gift */
	gift: Gift;
	/** Number of gifts that are available for resale */
	resale_count: number;
	/** The minimum price for the gifts available for resale; 0 if there are no such gifts */
	min_resale_star_count: number;
	/** The title of the upgraded gift; empty if the gift isn't available for resale */
	title: string;
};

/**
 * Contains a list of gifts that can be sent to another user or channel chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1available_gifts.html
 */
export type AvailableGifts = {
	"@type": "availableGifts";
	/** The list of gifts */
	gifts: AvailableGift[];
};

/**
 * Identifier of a gift model
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1upgraded_gift_attribute_id_model.html
 */
export type UpgradedGiftAttributeIdModel = {
	"@type": "upgradedGiftAttributeIdModel";
	/** Identifier of the sticker representing the model */
	sticker_id: string;
};

/**
 * Identifier of a gift symbol
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1upgraded_gift_attribute_id_symbol.html
 */
export type UpgradedGiftAttributeIdSymbol = {
	"@type": "upgradedGiftAttributeIdSymbol";
	/** Identifier of the sticker representing the symbol */
	sticker_id: string;
};

/**
 * Identifier of a gift backdrop
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1upgraded_gift_attribute_id_backdrop.html
 */
export type UpgradedGiftAttributeIdBackdrop = {
	"@type": "upgradedGiftAttributeIdBackdrop";
	/** Identifier of the backdrop */
	backdrop_id: number;
};

/**
 * Describes a model of an upgraded gift with the number of gifts found
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1upgraded_gift_model_count.html
 */
export type UpgradedGiftModelCount = {
	"@type": "upgradedGiftModelCount";
	/** The model */
	model: UpgradedGiftModel;
	/** Total number of gifts with the model */
	total_count: number;
};

/**
 * Describes a symbol shown on the pattern of an upgraded gift
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1upgraded_gift_symbol_count.html
 */
export type UpgradedGiftSymbolCount = {
	"@type": "upgradedGiftSymbolCount";
	/** The symbol */
	symbol: UpgradedGiftSymbol;
	/** Total number of gifts with the symbol */
	total_count: number;
};

/**
 * Describes a backdrop of an upgraded gift
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1upgraded_gift_backdrop_count.html
 */
export type UpgradedGiftBackdropCount = {
	"@type": "upgradedGiftBackdropCount";
	/** The backdrop */
	backdrop: UpgradedGiftBackdrop;
	/** Total number of gifts with the symbol */
	total_count: number;
};

/**
 * The gifts will be sorted by their price from the lowest to the highest
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1gift_for_resale_order_price.html
 */
export type GiftForResaleOrderPrice = {
	"@type": "giftForResaleOrderPrice";
};

/**
 * The gifts will be sorted by the last date when their price was changed from the newest to the oldest
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1gift_for_resale_order_price_change_date.html
 */
export type GiftForResaleOrderPriceChangeDate = {
	"@type": "giftForResaleOrderPriceChangeDate";
};

/**
 * The gifts will be sorted by their number from the smallest to the largest
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1gift_for_resale_order_number.html
 */
export type GiftForResaleOrderNumber = {
	"@type": "giftForResaleOrderNumber";
};

/**
 * Describes a gift available for resale
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1gift_for_resale.html
 */
export type GiftForResale = {
	"@type": "giftForResale";
	/** The gift */
	gift: UpgradedGift;
	/** Unique identifier of the received gift for the current user; only for the gifts owned by the current user */
	received_gift_id: string;
};

/**
 * Describes gifts available for resale
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1gifts_for_resale.html
 */
export type GiftsForResale = {
	"@type": "giftsForResale";
	/** Total number of gifts found */
	total_count: number;
	/** The gifts */
	gifts: GiftForResale[];
	/** Available models; for searchGiftsForResale requests without offset and attributes only */
	models: UpgradedGiftModelCount[];
	/** Available symbols; for searchGiftsForResale requests without offset and attributes only */
	symbols: UpgradedGiftSymbolCount[];
	/** Available backdrops; for searchGiftsForResale requests without offset and attributes only */
	backdrops: UpgradedGiftBackdropCount[];
	/** The offset for the next request. If empty, then there are no more results */
	next_offset: string;
};

/**
 * Regular gift
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1sent_gift_regular.html
 */
export type SentGiftRegular = {
	"@type": "sentGiftRegular";
	/** The gift */
	gift: Gift;
};

/**
 * Upgraded gift
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1sent_gift_upgraded.html
 */
export type SentGiftUpgraded = {
	"@type": "sentGiftUpgraded";
	/** The gift */
	gift: UpgradedGift;
};

/**
 * Represents a gift received by a user or a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1received_gift.html
 */
export type ReceivedGift = {
	"@type": "receivedGift";
	/** Unique identifier of the received gift for the current user; only for the receiver of the gift */
	received_gift_id: string;
	/** Identifier of a user or a chat that sent the gift; may be null if unknown */
	sender_id?: MessageSender;
	/** Message added to the gift */
	text: FormattedText;
	/** True, if the sender and gift text are shown only to the gift receiver; otherwise, everyone are able to see them */
	is_private: boolean;
	/** True, if the gift is displayed on the chat's profile page; only for the receiver of the gift */
	is_saved: boolean;
	/** True, if the gift is pinned to the top of the chat's profile page */
	is_pinned: boolean;
	/** True, if the gift is a regular gift that can be upgraded to a unique gift; only for the receiver of the gift */
	can_be_upgraded: boolean;
	/** True, if the gift is an upgraded gift that can be transferred to another owner; only for the receiver of the gift */
	can_be_transferred: boolean;
	/** True, if the gift was refunded and isn't available anymore */
	was_refunded: boolean;
	/** Point in time (Unix timestamp) when the gift was sent */
	date: number;
	/** The gift */
	gift: SentGift;
	/** Number of Telegram Stars that can be claimed by the receiver instead of the regular gift; 0 if the gift can't be sold by the current user */
	sell_star_count: number;
	/** Number of Telegram Stars that were paid by the sender for the ability to upgrade the gift */
	prepaid_upgrade_star_count: number;
	/** Number of Telegram Stars that must be paid to transfer the upgraded gift; only for the receiver of the gift */
	transfer_star_count: number;
	/** Point in time (Unix timestamp) when the gift can be transferred to another owner; 0 if the gift can be transferred immediately or transfer isn't possible; only for the receiver of the gift */
	next_transfer_date: number;
	/** Point in time (Unix timestamp) when the gift can be resold to another user; 0 if the gift can't be resold; only for the receiver of the gift */
	next_resale_date: number;
	/** Point in time (Unix timestamp) when the upgraded gift can be transferred to the TON blockchain as an NFT; 0 if NFT export isn't possible; only for the receiver of the gift */
	export_date: number;
};

/**
 * Represents a list of gifts received by a user or a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1received_gifts.html
 */
export type ReceivedGifts = {
	"@type": "receivedGifts";
	/** The total number of received gifts */
	total_count: number;
	/** The list of gifts */
	gifts: ReceivedGift[];
	/** True, if notifications about new gifts of the owner are enabled */
	are_notifications_enabled: boolean;
	/** The offset for the next request. If empty, then there are no more results */
	next_offset: string;
};

/**
 * Contains examples of possible upgraded gifts for the given regular gift
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1gift_upgrade_preview.html
 */
export type GiftUpgradePreview = {
	"@type": "giftUpgradePreview";
	/** Examples of possible models that can be chosen for the gift after upgrade */
	models: UpgradedGiftModel[];
	/** Examples of possible symbols that can be chosen for the gift after upgrade */
	symbols: UpgradedGiftSymbol[];
	/** Examples of possible backdrops that can be chosen for the gift after upgrade */
	backdrops: UpgradedGiftBackdrop[];
};

/**
 * The transaction is incoming and increases the number of owned Telegram Stars
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_direction_incoming.html
 */
export type StarTransactionDirectionIncoming = {
	"@type": "starTransactionDirectionIncoming";
};

/**
 * The transaction is outgoing and decreases the number of owned Telegram Stars
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_direction_outgoing.html
 */
export type StarTransactionDirectionOutgoing = {
	"@type": "starTransactionDirectionOutgoing";
};

/**
 * The transaction is a deposit of Telegram Stars from the Premium bot; for regular users only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_type_premium_bot_deposit.html
 */
export type StarTransactionTypePremiumBotDeposit = {
	"@type": "starTransactionTypePremiumBotDeposit";
};

/**
 * The transaction is a deposit of Telegram Stars from App Store; for regular users only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_type_app_store_deposit.html
 */
export type StarTransactionTypeAppStoreDeposit = {
	"@type": "starTransactionTypeAppStoreDeposit";
};

/**
 * The transaction is a deposit of Telegram Stars from Google Play; for regular users only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_type_google_play_deposit.html
 */
export type StarTransactionTypeGooglePlayDeposit = {
	"@type": "starTransactionTypeGooglePlayDeposit";
};

/**
 * The transaction is a deposit of Telegram Stars from Fragment; for regular users and bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_type_fragment_deposit.html
 */
export type StarTransactionTypeFragmentDeposit = {
	"@type": "starTransactionTypeFragmentDeposit";
};

/**
 * The transaction is a deposit of Telegram Stars by another user; for regular users only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_type_user_deposit.html
 */
export type StarTransactionTypeUserDeposit = {
	"@type": "starTransactionTypeUserDeposit";
	/** Identifier of the user that gifted Telegram Stars; 0 if the user was anonymous */
	user_id: number;
	/** The sticker to be shown in the transaction information; may be null if unknown */
	sticker?: Sticker;
};

/**
 * The transaction is a deposit of Telegram Stars from a giveaway; for regular users only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_type_giveaway_deposit.html
 */
export type StarTransactionTypeGiveawayDeposit = {
	"@type": "starTransactionTypeGiveawayDeposit";
	/** Identifier of a supergroup or a channel chat that created the giveaway */
	chat_id: number;
	/** Identifier of the message with the giveaway; can be 0 or an identifier of a deleted message */
	giveaway_message_id: number;
};

/**
 * The transaction is a withdrawal of earned Telegram Stars to Fragment; for regular users, bots, supergroup and channel chats only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_type_fragment_withdrawal.html
 */
export type StarTransactionTypeFragmentWithdrawal = {
	"@type": "starTransactionTypeFragmentWithdrawal";
	/** State of the withdrawal; may be null for refunds from Fragment */
	withdrawal_state?: RevenueWithdrawalState;
};

/**
 * The transaction is a withdrawal of earned Telegram Stars to Telegram Ad platform; for bots and channel chats only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_type_telegram_ads_withdrawal.html
 */
export type StarTransactionTypeTelegramAdsWithdrawal = {
	"@type": "starTransactionTypeTelegramAdsWithdrawal";
};

/**
 * The transaction is a payment for Telegram API usage; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_type_telegram_api_usage.html
 */
export type StarTransactionTypeTelegramApiUsage = {
	"@type": "starTransactionTypeTelegramApiUsage";
	/** The number of billed requests */
	request_count: number;
};

/**
 * The transaction is a purchase of paid media from a bot or a business account by the current user; for regular users only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_type_bot_paid_media_purchase.html
 */
export type StarTransactionTypeBotPaidMediaPurchase = {
	"@type": "starTransactionTypeBotPaidMediaPurchase";
	/** Identifier of the bot or the business account user that sent the paid media */
	user_id: number;
	/** The bought media if the transaction wasn't refunded */
	media: PaidMedia[];
};

/**
 * The transaction is a sale of paid media by the bot or a business account managed by the bot; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_type_bot_paid_media_sale.html
 */
export type StarTransactionTypeBotPaidMediaSale = {
	"@type": "starTransactionTypeBotPaidMediaSale";
	/** Identifier of the user that bought the media */
	user_id: number;
	/** The bought media */
	media: PaidMedia[];
	/** Bot-provided payload */
	payload: string;
	/** Information about the affiliate which received commission from the transaction; may be null if none */
	affiliate?: AffiliateInfo;
};

/**
 * The transaction is a purchase of paid media from a channel by the current user; for regular users only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_type_channel_paid_media_purchase.html
 */
export type StarTransactionTypeChannelPaidMediaPurchase = {
	"@type": "starTransactionTypeChannelPaidMediaPurchase";
	/** Identifier of the channel chat that sent the paid media */
	chat_id: number;
	/** Identifier of the corresponding message with paid media; can be 0 or an identifier of a deleted message */
	message_id: number;
	/** The bought media if the transaction wasn't refunded */
	media: PaidMedia[];
};

/**
 * The transaction is a sale of paid media by the channel chat; for channel chats only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_type_channel_paid_media_sale.html
 */
export type StarTransactionTypeChannelPaidMediaSale = {
	"@type": "starTransactionTypeChannelPaidMediaSale";
	/** Identifier of the user that bought the media */
	user_id: number;
	/** Identifier of the corresponding message with paid media; can be 0 or an identifier of a deleted message */
	message_id: number;
	/** The bought media */
	media: PaidMedia[];
};

/**
 * The transaction is a purchase of a product from a bot or a business account by the current user; for regular users only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_type_bot_invoice_purchase.html
 */
export type StarTransactionTypeBotInvoicePurchase = {
	"@type": "starTransactionTypeBotInvoicePurchase";
	/** Identifier of the bot or the business account user that created the invoice */
	user_id: number;
	/** Information about the bought product */
	product_info: ProductInfo;
};

/**
 * The transaction is a sale of a product by the bot; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_type_bot_invoice_sale.html
 */
export type StarTransactionTypeBotInvoiceSale = {
	"@type": "starTransactionTypeBotInvoiceSale";
	/** Identifier of the user that bought the product */
	user_id: number;
	/** Information about the bought product */
	product_info: ProductInfo;
	/** Invoice payload */
	invoice_payload: string;
	/** Information about the affiliate which received commission from the transaction; may be null if none */
	affiliate?: AffiliateInfo;
};

/**
 * The transaction is a purchase of a subscription from a bot or a business account by the current user; for regular users only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_type_bot_subscription_purchase.html
 */
export type StarTransactionTypeBotSubscriptionPurchase = {
	"@type": "starTransactionTypeBotSubscriptionPurchase";
	/** Identifier of the bot or the business account user that created the subscription link */
	user_id: number;
	/** The number of seconds between consecutive Telegram Star debitings */
	subscription_period: number;
	/** Information about the bought subscription */
	product_info: ProductInfo;
};

/**
 * The transaction is a sale of a subscription by the bot; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_type_bot_subscription_sale.html
 */
export type StarTransactionTypeBotSubscriptionSale = {
	"@type": "starTransactionTypeBotSubscriptionSale";
	/** Identifier of the user that bought the subscription */
	user_id: number;
	/** The number of seconds between consecutive Telegram Star debitings */
	subscription_period: number;
	/** Information about the bought subscription */
	product_info: ProductInfo;
	/** Invoice payload */
	invoice_payload: string;
	/** Information about the affiliate which received commission from the transaction; may be null if none */
	affiliate?: AffiliateInfo;
};

/**
 * The transaction is a purchase of a subscription to a channel chat by the current user; for regular users only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_type_channel_subscription_purchase.html
 */
export type StarTransactionTypeChannelSubscriptionPurchase = {
	"@type": "starTransactionTypeChannelSubscriptionPurchase";
	/** Identifier of the channel chat that created the subscription */
	chat_id: number;
	/** The number of seconds between consecutive Telegram Star debitings */
	subscription_period: number;
};

/**
 * The transaction is a sale of a subscription by the channel chat; for channel chats only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_type_channel_subscription_sale.html
 */
export type StarTransactionTypeChannelSubscriptionSale = {
	"@type": "starTransactionTypeChannelSubscriptionSale";
	/** Identifier of the user that bought the subscription */
	user_id: number;
	/** The number of seconds between consecutive Telegram Star debitings */
	subscription_period: number;
};

/**
 * The transaction is a purchase of a regular gift; for regular users and bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_type_gift_purchase.html
 */
export type StarTransactionTypeGiftPurchase = {
	"@type": "starTransactionTypeGiftPurchase";
	/** Identifier of the user or the channel that received the gift */
	owner_id: MessageSender;
	/** The gift */
	gift: Gift;
};

/**
 * The transaction is a transfer of an upgraded gift; for regular users only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_type_gift_transfer.html
 */
export type StarTransactionTypeGiftTransfer = {
	"@type": "starTransactionTypeGiftTransfer";
	/** Identifier of the user or the channel that received the gift */
	owner_id: MessageSender;
	/** The gift */
	gift: UpgradedGift;
};

/**
 * The transaction is a sale of a received gift; for regular users and channel chats only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_type_gift_sale.html
 */
export type StarTransactionTypeGiftSale = {
	"@type": "starTransactionTypeGiftSale";
	/** Identifier of the user that sent the gift */
	user_id: number;
	/** The gift */
	gift: Gift;
};

/**
 * The transaction is an upgrade of a gift; for regular users only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_type_gift_upgrade.html
 */
export type StarTransactionTypeGiftUpgrade = {
	"@type": "starTransactionTypeGiftUpgrade";
	/** Identifier of the user that initially sent the gift */
	user_id: number;
	/** The upgraded gift */
	gift: UpgradedGift;
};

/**
 * The transaction is a purchase of an upgraded gift for some user or channel; for regular users only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_type_upgraded_gift_purchase.html
 */
export type StarTransactionTypeUpgradedGiftPurchase = {
	"@type": "starTransactionTypeUpgradedGiftPurchase";
	/** Identifier of the user that sold the gift */
	user_id: number;
	/** The gift */
	gift: UpgradedGift;
};

/**
 * The transaction is a sale of an upgraded gift; for regular users only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_type_upgraded_gift_sale.html
 */
export type StarTransactionTypeUpgradedGiftSale = {
	"@type": "starTransactionTypeUpgradedGiftSale";
	/** Identifier of the user that bought the gift */
	user_id: number;
	/** The gift */
	gift: UpgradedGift;
	/** Information about commission received by Telegram from the transaction */
	affiliate: AffiliateInfo;
};

/**
 * The transaction is a sending of a paid reaction to a message in a channel chat by the current user; for regular users only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_type_channel_paid_reaction_send.html
 */
export type StarTransactionTypeChannelPaidReactionSend = {
	"@type": "starTransactionTypeChannelPaidReactionSend";
	/** Identifier of the channel chat */
	chat_id: number;
	/** Identifier of the reacted message; can be 0 or an identifier of a deleted message */
	message_id: number;
};

/**
 * The transaction is a receiving of a paid reaction to a message by the channel chat; for channel chats only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_type_channel_paid_reaction_receive.html
 */
export type StarTransactionTypeChannelPaidReactionReceive = {
	"@type": "starTransactionTypeChannelPaidReactionReceive";
	/** Identifier of the user that added the paid reaction */
	user_id: number;
	/** Identifier of the reacted message; can be 0 or an identifier of a deleted message */
	message_id: number;
};

/**
 * The transaction is a receiving of a commission from an affiliate program; for regular users, bots and channel chats only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_type_affiliate_program_commission.html
 */
export type StarTransactionTypeAffiliateProgramCommission = {
	"@type": "starTransactionTypeAffiliateProgramCommission";
	/** Identifier of the chat that created the affiliate program */
	chat_id: number;
	/** The number of Telegram Stars received by the affiliate for each 1000 Telegram Stars received by the program owner */
	commission_per_mille: number;
};

/**
 * The transaction is a sending of a paid message; for regular users only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_type_paid_message_send.html
 */
export type StarTransactionTypePaidMessageSend = {
	"@type": "starTransactionTypePaidMessageSend";
	/** Identifier of the chat that received the payment */
	chat_id: number;
	/** Number of sent paid messages */
	message_count: number;
};

/**
 * The transaction is a receiving of a paid message; for regular users, supergroup and channel chats only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_type_paid_message_receive.html
 */
export type StarTransactionTypePaidMessageReceive = {
	"@type": "starTransactionTypePaidMessageReceive";
	/** Identifier of the sender of the message */
	sender_id: MessageSender;
	/** Number of received paid messages */
	message_count: number;
	/** The number of Telegram Stars received by the Telegram for each 1000 Telegram Stars paid for message sending */
	commission_per_mille: number;
	/** The amount of Telegram Stars that were received by Telegram; can be negative for refunds */
	commission_star_amount: StarAmount;
};

/**
 * The transaction is a purchase of Telegram Premium subscription; for regular users and bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_type_premium_purchase.html
 */
export type StarTransactionTypePremiumPurchase = {
	"@type": "starTransactionTypePremiumPurchase";
	/** Identifier of the user that received the Telegram Premium subscription */
	user_id: number;
	/** Number of months the Telegram Premium subscription will be active */
	month_count: number;
	/** A sticker to be shown in the transaction information; may be null if unknown */
	sticker?: Sticker;
};

/**
 * The transaction is a transfer of Telegram Stars to a business bot; for regular users only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_type_business_bot_transfer_send.html
 */
export type StarTransactionTypeBusinessBotTransferSend = {
	"@type": "starTransactionTypeBusinessBotTransferSend";
	/** Identifier of the bot that received Telegram Stars */
	user_id: number;
};

/**
 * The transaction is a transfer of Telegram Stars from a business account; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_type_business_bot_transfer_receive.html
 */
export type StarTransactionTypeBusinessBotTransferReceive = {
	"@type": "starTransactionTypeBusinessBotTransferReceive";
	/** Identifier of the user that sent Telegram Stars */
	user_id: number;
};

/**
 * The transaction is a transaction of an unsupported type
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction_type_unsupported.html
 */
export type StarTransactionTypeUnsupported = {
	"@type": "starTransactionTypeUnsupported";
};

/**
 * Represents a transaction changing the amount of owned Telegram Stars
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transaction.html
 */
export type StarTransaction = {
	"@type": "starTransaction";
	/** Unique identifier of the transaction */
	id: string;
	/** The amount of added owned Telegram Stars; negative for outgoing transactions */
	star_amount: StarAmount;
	/** True, if the transaction is a refund of a previous transaction */
	is_refund: boolean;
	/** Point in time (Unix timestamp) when the transaction was completed */
	date: number;
	/** Type of the transaction */
	type: StarTransactionType;
};

/**
 * Represents a list of Telegram Star transactions
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_transactions.html
 */
export type StarTransactions = {
	"@type": "starTransactions";
	/** The amount of owned Telegram Stars */
	star_amount: StarAmount;
	/** List of transactions with Telegram Stars */
	transactions: StarTransaction[];
	/** The offset for the next request. If empty, then there are no more results */
	next_offset: string;
};

/**
 * The user is eligible for the giveaway
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1giveaway_participant_status_eligible.html
 */
export type GiveawayParticipantStatusEligible = {
	"@type": "giveawayParticipantStatusEligible";
};

/**
 * The user participates in the giveaway
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1giveaway_participant_status_participating.html
 */
export type GiveawayParticipantStatusParticipating = {
	"@type": "giveawayParticipantStatusParticipating";
};

/**
 * The user can't participate in the giveaway, because they have already been member of the chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1giveaway_participant_status_already_was_member.html
 */
export type GiveawayParticipantStatusAlreadyWasMember = {
	"@type": "giveawayParticipantStatusAlreadyWasMember";
	/** Point in time (Unix timestamp) when the user joined the chat */
	joined_chat_date: number;
};

/**
 * The user can't participate in the giveaway, because they are an administrator in one of the chats that created the giveaway
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1giveaway_participant_status_administrator.html
 */
export type GiveawayParticipantStatusAdministrator = {
	"@type": "giveawayParticipantStatusAdministrator";
	/** Identifier of the chat administered by the user */
	chat_id: number;
};

/**
 * The user can't participate in the giveaway, because they phone number is from a disallowed country
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1giveaway_participant_status_disallowed_country.html
 */
export type GiveawayParticipantStatusDisallowedCountry = {
	"@type": "giveawayParticipantStatusDisallowedCountry";
	/** A two-letter ISO 3166-1 alpha-2 country code of the user's country */
	user_country_code: string;
};

/**
 * Describes an ongoing giveaway
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1giveaway_info_ongoing.html
 */
export type GiveawayInfoOngoing = {
	"@type": "giveawayInfoOngoing";
	/** Point in time (Unix timestamp) when the giveaway was created */
	creation_date: number;
	/** Status of the current user in the giveaway */
	status: GiveawayParticipantStatus;
	/** True, if the giveaway has ended and results are being prepared */
	is_ended: boolean;
};

/**
 * Describes a completed giveaway
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1giveaway_info_completed.html
 */
export type GiveawayInfoCompleted = {
	"@type": "giveawayInfoCompleted";
	/** Point in time (Unix timestamp) when the giveaway was created */
	creation_date: number;
	/** Point in time (Unix timestamp) when the winners were selected. May be bigger than winners selection date specified in parameters of the giveaway */
	actual_winners_selection_date: number;
	/** True, if the giveaway was canceled and was fully refunded */
	was_refunded: boolean;
	/** True, if the current user is a winner of the giveaway */
	is_winner: boolean;
	/** Number of winners in the giveaway */
	winner_count: number;
	/** Number of winners, which activated their gift codes; for Telegram Premium giveaways only */
	activation_count: number;
	/** Telegram Premium gift code that was received by the current user; empty if the user isn't a winner in the giveaway or the giveaway isn't a Telegram Premium giveaway */
	gift_code: string;
	/** The amount of Telegram Stars won by the current user; 0 if the user isn't a winner in the giveaway or the giveaway isn't a Telegram Star giveaway */
	won_star_count: number;
};

/**
 * The giveaway sends Telegram Premium subscriptions to the winners
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1giveaway_prize_premium.html
 */
export type GiveawayPrizePremium = {
	"@type": "giveawayPrizePremium";
	/** Number of months the Telegram Premium subscription will be active after code activation */
	month_count: number;
};

/**
 * The giveaway sends Telegram Stars to the winners
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1giveaway_prize_stars.html
 */
export type GiveawayPrizeStars = {
	"@type": "giveawayPrizeStars";
	/** Number of Telegram Stars that will be shared by all winners */
	star_count: number;
};

/**
 * Contains information about supported accent color for user/chat name, background of empty chat photo, replies to messages and link previews
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1accent_color.html
 */
export type AccentColor = {
	"@type": "accentColor";
	/** Accent color identifier */
	id: number;
	/** Identifier of a built-in color to use in places, where only one color is needed; 0-6 */
	built_in_accent_color_id: number;
	/** The list of 1-3 colors in RGB format, describing the accent color, as expected to be shown in light themes */
	light_theme_colors: number[];
	/** The list of 1-3 colors in RGB format, describing the accent color, as expected to be shown in dark themes */
	dark_theme_colors: number[];
	/** The minimum chat boost level required to use the color in a channel chat */
	min_channel_chat_boost_level: number;
};

/**
 * Contains information about supported accent colors for user profile photo background in RGB format
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1profile_accent_colors.html
 */
export type ProfileAccentColors = {
	"@type": "profileAccentColors";
	/** The list of 1-2 colors in RGB format, describing the colors, as expected to be shown in the color palette settings */
	palette_colors: number[];
	/** The list of 1-2 colors in RGB format, describing the colors, as expected to be used for the profile photo background */
	background_colors: number[];
	/** The list of 2 colors in RGB format, describing the colors of the gradient to be used for the unread active story indicator around profile photo */
	story_colors: number[];
};

/**
 * Contains information about supported accent color for user profile photo background
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1profile_accent_color.html
 */
export type ProfileAccentColor = {
	"@type": "profileAccentColor";
	/** Profile accent color identifier */
	id: number;
	/** Accent colors expected to be used in light themes */
	light_theme_colors: ProfileAccentColors;
	/** Accent colors expected to be used in dark themes */
	dark_theme_colors: ProfileAccentColors;
	/** The minimum chat boost level required to use the color in a supergroup chat */
	min_supergroup_chat_boost_level: number;
	/** The minimum chat boost level required to use the color in a channel chat */
	min_channel_chat_boost_level: number;
};

/**
 * A custom emoji set as emoji status
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1emoji_status_type_custom_emoji.html
 */
export type EmojiStatusTypeCustomEmoji = {
	"@type": "emojiStatusTypeCustomEmoji";
	/** Identifier of the custom emoji in stickerFormatTgs format */
	custom_emoji_id: string;
};

/**
 * An upgraded gift set as emoji status
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1emoji_status_type_upgraded_gift.html
 */
export type EmojiStatusTypeUpgradedGift = {
	"@type": "emojiStatusTypeUpgradedGift";
	/** Identifier of the upgraded gift */
	upgraded_gift_id: string;
	/** The title of the upgraded gift */
	gift_title: string;
	/** Unique name of the upgraded gift that can be used with internalLinkTypeUpgradedGift */
	gift_name: string;
	/** Custom emoji identifier of the model of the upgraded gift */
	model_custom_emoji_id: string;
	/** Custom emoji identifier of the symbol of the upgraded gift */
	symbol_custom_emoji_id: string;
	/** Colors of the backdrop of the upgraded gift */
	backdrop_colors: UpgradedGiftBackdropColors;
};

/**
 * Describes an emoji to be shown instead of the Telegram Premium badge
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1emoji_status.html
 */
export type EmojiStatus = {
	"@type": "emojiStatus";
	/** Type of the emoji status */
	type: EmojiStatusType;
	/** Point in time (Unix timestamp) when the status will expire; 0 if never */
	expiration_date: number;
};

/**
 * Contains a list of emoji statuses
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1emoji_statuses.html
 */
export type EmojiStatuses = {
	"@type": "emojiStatuses";
	/** The list of emoji statuses identifiers */
	emoji_statuses: EmojiStatus[];
};

/**
 * Contains a list of custom emoji identifiers for emoji statuses
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1emoji_status_custom_emojis.html
 */
export type EmojiStatusCustomEmojis = {
	"@type": "emojiStatusCustomEmojis";
	/** The list of custom emoji identifiers */
	custom_emoji_ids: string[];
};

/**
 * Describes usernames assigned to a user, a supergroup, or a channel
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1usernames.html
 */
export type Usernames = {
	"@type": "usernames";
	/** List of active usernames; the first one must be shown as the primary username. The order of active usernames can be changed with reorderActiveUsernames, reorderBotActiveUsernames or reorderSupergroupActiveUsernames */
	active_usernames: string[];
	/** List of currently disabled usernames; the username can be activated with toggleUsernameIsActive, toggleBotUsernameIsActive, or toggleSupergroupUsernameIsActive */
	disabled_usernames: string[];
	/** The active username, which can be changed with setUsername or setSupergroupUsername. Information about other active usernames can be received using getCollectibleItemInfo */
	editable_username: string;
};

/**
 * Represents a user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user.html
 */
export type User = {
	"@type": "user";
	/** User identifier */
	id: number;
	/** First name of the user */
	first_name: string;
	/** Last name of the user */
	last_name: string;
	/** Usernames of the user; may be null */
	usernames?: Usernames;
	/** Phone number of the user */
	phone_number: string;
	/** Current online status of the user */
	status: UserStatus;
	/** Profile photo of the user; may be null */
	profile_photo?: ProfilePhoto;
	/** Identifier of the accent color for name, and backgrounds of profile photo, reply header, and link preview */
	accent_color_id: number;
	/** Identifier of a custom emoji to be shown on the reply header and link preview background; 0 if none */
	background_custom_emoji_id: string;
	/** Identifier of the accent color for the user's profile; -1 if none */
	profile_accent_color_id: number;
	/** Identifier of a custom emoji to be shown on the background of the user's profile; 0 if none */
	profile_background_custom_emoji_id: string;
	/** Emoji status to be shown instead of the default Telegram Premium badge; may be null */
	emoji_status?: EmojiStatus;
	/** The user is a contact of the current user */
	is_contact: boolean;
	/** The user is a contact of the current user and the current user is a contact of the user */
	is_mutual_contact: boolean;
	/** The user is a close friend of the current user; implies that the user is a contact */
	is_close_friend: boolean;
	/** Information about verification status of the user; may be null if none */
	verification_status?: VerificationStatus;
	/** True, if the user is a Telegram Premium user */
	is_premium: boolean;
	/** True, if the user is Telegram support account */
	is_support: boolean;
	/** If non-empty, it contains a human-readable description of the reason why access to this user must be restricted */
	restriction_reason?: string;
	/** True, if the user has non-expired stories available to the current user */
	has_active_stories: boolean;
	/** True, if the user has unread non-expired stories available to the current user */
	has_unread_active_stories: boolean;
	/** True, if the user may restrict new chats with non-contacts. Use canSendMessageToUser to check whether the current user can message the user or try to create a chat with them */
	restricts_new_chats: boolean;
	/** Number of Telegram Stars that must be paid by general user for each sent message to the user. If positive and userFullInfo is unknown, use canSendMessageToUser to check whether the current user must pay */
	paid_message_star_count: number;
	/** If false, the user is inaccessible, and the only information known about the user is inside this class. Identifier of the user can't be passed to any method */
	have_access: boolean;
	/** Type of the user */
	type: UserType;
	/** IETF language tag of the user's language; only available to bots */
	language_code: string;
	/** True, if the user added the current bot to attachment menu; only available to bots */
	added_to_attachment_menu: boolean;
};

/**
 * Contains information about a bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1bot_info.html
 */
export type BotInfo = {
	"@type": "botInfo";
	/** The text that is shown on the bot's profile page and is sent together with the link when users share the bot */
	short_description: string;
	/** The text shown in the chat with the bot if the chat is empty */
	description: string;
	/** Photo shown in the chat with the bot if the chat is empty; may be null */
	photo?: Photo;
	/** Animation shown in the chat with the bot if the chat is empty; may be null */
	animation?: Animation;
	/** Information about a button to show instead of the bot commands menu button; may be null if ordinary bot commands menu must be shown */
	menu_button?: BotMenuButton;
	/** List of the bot commands */
	commands: BotCommand[];
	/** The HTTP link to the privacy policy of the bot. If empty, then /privacy command must be used if supported by the bot. If the command isn't supported, then https://telegram.org/privacy-tpa must be opened */
	privacy_policy_url: string;
	/** Default administrator rights for adding the bot to basic group and supergroup chats; may be null */
	default_group_administrator_rights?: ChatAdministratorRights;
	/** Default administrator rights for adding the bot to channels; may be null */
	default_channel_administrator_rights?: ChatAdministratorRights;
	/** Information about the affiliate program of the bot; may be null if none */
	affiliate_program?: AffiliateProgramInfo;
	/** Default light background color for bot Web Apps; -1 if not specified */
	web_app_background_light_color: number;
	/** Default dark background color for bot Web Apps; -1 if not specified */
	web_app_background_dark_color: number;
	/** Default light header color for bot Web Apps; -1 if not specified */
	web_app_header_light_color: number;
	/** Default dark header color for bot Web Apps; -1 if not specified */
	web_app_header_dark_color: number;
	/** Parameters of the verification that can be provided by the bot; may be null if none or the current user isn't the owner of the bot */
	verification_parameters?: BotVerificationParameters;
	/** True, if the bot's revenue statistics are available to the current user */
	can_get_revenue_statistics: boolean;
	/** True, if the bot can manage emoji status of the current user */
	can_manage_emoji_status: boolean;
	/** True, if the bot has media previews */
	has_media_previews: boolean;
	/** The internal link, which can be used to edit bot commands; may be null */
	edit_commands_link?: InternalLinkType;
	/** The internal link, which can be used to edit bot description; may be null */
	edit_description_link?: InternalLinkType;
	/** The internal link, which can be used to edit the photo or animation shown in the chat with the bot if the chat is empty; may be null */
	edit_description_media_link?: InternalLinkType;
	/** The internal link, which can be used to edit bot settings; may be null */
	edit_settings_link?: InternalLinkType;
};

/**
 * Contains full information about a user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_full_info.html
 */
export type UserFullInfo = {
	"@type": "userFullInfo";
	/** User profile photo set by the current user for the contact; may be null. If null and user.profile_photo is null, then the photo is empty; otherwise, it is unknown. If non-null, then it is the same photo as in user.profile_photo and chat.photo. This photo isn't returned in the list of user photos */
	personal_photo?: ChatPhoto;
	/** User profile photo; may be null. If null and user.profile_photo is null, then the photo is empty; otherwise, it is unknown. If non-null and personal_photo is null, then it is the same photo as in user.profile_photo and chat.photo */
	photo?: ChatPhoto;
	/** User profile photo visible if the main photo is hidden by privacy settings; may be null. If null and user.profile_photo is null, then the photo is empty; otherwise, it is unknown. If non-null and both photo and personal_photo are null, then it is the same photo as in user.profile_photo and chat.photo. This photo isn't returned in the list of user photos */
	public_photo?: ChatPhoto;
	/** Block list to which the user is added; may be null if none */
	block_list?: BlockList;
	/** True, if the user can be called */
	can_be_called: boolean;
	/** True, if a video call can be created with the user */
	supports_video_calls: boolean;
	/** True, if the user can't be called due to their privacy settings */
	has_private_calls: boolean;
	/** True, if the user can't be linked in forwarded messages due to their privacy settings */
	has_private_forwards: boolean;
	/** True, if voice and video notes can't be sent or forwarded to the user */
	has_restricted_voice_and_video_note_messages: boolean;
	/** True, if the user has posted to profile stories */
	has_posted_to_profile_stories: boolean;
	/** True, if the user always enabled sponsored messages; known only for the current user */
	has_sponsored_messages_enabled: boolean;
	/** True, if the current user needs to explicitly allow to share their phone number with the user when the method addContact is used */
	need_phone_number_privacy_exception: boolean;
	/** True, if the user set chat background for both chat users and it wasn't reverted yet */
	set_chat_background: boolean;
	/** A short user bio; may be null for bots */
	bio?: FormattedText;
	/** Birthdate of the user; may be null if unknown */
	birthdate?: Birthdate;
	/** Identifier of the personal chat of the user; 0 if none */
	personal_chat_id: number;
	/** Number of saved to profile gifts for other users or the total number of received gifts for the current user */
	gift_count: number;
	/** Number of group chats where both the other user and the current user are a member; 0 for the current user */
	group_in_common_count: number;
	/** Number of Telegram Stars that must be paid by the user for each sent message to the current user */
	incoming_paid_message_star_count: number;
	/** Number of Telegram Stars that must be paid by the current user for each sent message to the user */
	outgoing_paid_message_star_count: number;
	/** Settings for gift receiving for the user */
	gift_settings: GiftSettings;
	/** Information about verification status of the user provided by a bot; may be null if none or unknown */
	bot_verification?: BotVerification;
	/** Information about business settings for Telegram Business accounts; may be null if none */
	business_info?: BusinessInfo;
	/** For bots, information about the bot; may be null if the user isn't a bot */
	bot_info?: BotInfo;
};

/**
 * Represents a list of users
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1users.html
 */
export type Users = {
	"@type": "users";
	/** Approximate total number of users found */
	total_count: number;
	/** A list of user identifiers */
	user_ids: number[];
};

/**
 * Represents a list of found users
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1found_users.html
 */
export type FoundUsers = {
	"@type": "foundUsers";
	/** Identifiers of the found users */
	user_ids: number[];
	/** The offset for the next request. If empty, then there are no more results */
	next_offset: string;
};

/**
 * Contains information about a chat administrator
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_administrator.html
 */
export type ChatAdministrator = {
	"@type": "chatAdministrator";
	/** User identifier of the administrator */
	user_id: number;
	/** Custom title of the administrator */
	custom_title: string;
	/** True, if the user is the owner of the chat */
	is_owner: boolean;
};

/**
 * Represents a list of chat administrators
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_administrators.html
 */
export type ChatAdministrators = {
	"@type": "chatAdministrators";
	/** A list of chat administrators */
	administrators: ChatAdministrator[];
};

/**
 * The user is the owner of the chat and has all the administrator privileges
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_member_status_creator.html
 */
export type ChatMemberStatusCreator = {
	"@type": "chatMemberStatusCreator";
	/** A custom title of the owner; 0-16 characters without emoji; applicable to supergroups only */
	custom_title: string;
	/** True, if the creator isn't shown in the chat member list and sends messages anonymously; applicable to supergroups only */
	is_anonymous: boolean;
	/** True, if the user is a member of the chat */
	is_member: boolean;
};

/**
 * The user is a member of the chat and has some additional privileges. In basic groups, administrators can edit and delete messages sent by others, add new members, ban unprivileged members, and manage video chats. In supergroups and channels, there are more detailed options for administrator privileges
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_member_status_administrator.html
 */
export type ChatMemberStatusAdministrator = {
	"@type": "chatMemberStatusAdministrator";
	/** A custom title of the administrator; 0-16 characters without emoji; applicable to supergroups only */
	custom_title: string;
	/** True, if the current user can edit the administrator privileges for the called user */
	can_be_edited: boolean;
	/** Rights of the administrator */
	rights: ChatAdministratorRights;
};

/**
 * The user is a member of the chat, without any additional privileges or restrictions
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_member_status_member.html
 */
export type ChatMemberStatusMember = {
	"@type": "chatMemberStatusMember";
	/** Point in time (Unix timestamp) when the user will be removed from the chat because of the expired subscription; 0 if never. Ignored in setChatMemberStatus */
	member_until_date: number;
};

/**
 * The user is under certain restrictions in the chat. Not supported in basic groups and channels
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_member_status_restricted.html
 */
export type ChatMemberStatusRestricted = {
	"@type": "chatMemberStatusRestricted";
	/** True, if the user is a member of the chat */
	is_member: boolean;
	/** Point in time (Unix timestamp) when restrictions will be lifted from the user; 0 if never. If the user is restricted for more than 366 days or for less than 30 seconds from the current time, the user is considered to be restricted forever */
	restricted_until_date: number;
	/** User permissions in the chat */
	permissions: ChatPermissions;
};

/**
 * The user or the chat is not a chat member
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_member_status_left.html
 */
export type ChatMemberStatusLeft = {
	"@type": "chatMemberStatusLeft";
};

/**
 * The user or the chat was banned (and hence is not a member of the chat). Implies the user can't return to the chat, view messages, or be used as a participant identifier to join a video chat of the chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_member_status_banned.html
 */
export type ChatMemberStatusBanned = {
	"@type": "chatMemberStatusBanned";
	/** Point in time (Unix timestamp) when the user will be unbanned; 0 if never. If the user is banned for more than 366 days or for less than 30 seconds from the current time, the user is considered to be banned forever. Always 0 in basic groups */
	banned_until_date: number;
};

/**
 * Describes a user or a chat as a member of another chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_member.html
 */
export type ChatMember = {
	"@type": "chatMember";
	/** Identifier of the chat member. Currently, other chats can be only Left or Banned. Only supergroups and channels can have other chats as Left or Banned members and these chats must be supergroups or channels */
	member_id: MessageSender;
	/** Identifier of a user that invited/promoted/banned this member in the chat; 0 if unknown */
	inviter_user_id: number;
	/** Point in time (Unix timestamp) when the user joined/was promoted/was banned in the chat */
	joined_chat_date: number;
	/** Status of the member in the chat */
	status: ChatMemberStatus;
};

/**
 * Contains a list of chat members
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_members.html
 */
export type ChatMembers = {
	"@type": "chatMembers";
	/** Approximate total number of chat members found */
	total_count: number;
	/** A list of chat members */
	members: ChatMember[];
};

/**
 * Returns contacts of the user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_members_filter_contacts.html
 */
export type ChatMembersFilterContacts = {
	"@type": "chatMembersFilterContacts";
};

/**
 * Returns the owner and administrators
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_members_filter_administrators.html
 */
export type ChatMembersFilterAdministrators = {
	"@type": "chatMembersFilterAdministrators";
};

/**
 * Returns all chat members, including restricted chat members
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_members_filter_members.html
 */
export type ChatMembersFilterMembers = {
	"@type": "chatMembersFilterMembers";
};

/**
 * Returns users which can be mentioned in the chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_members_filter_mention.html
 */
export type ChatMembersFilterMention = {
	"@type": "chatMembersFilterMention";
	/** If non-zero, the identifier of the current message thread */
	message_thread_id: number;
};

/**
 * Returns users under certain restrictions in the chat; can be used only by administrators in a supergroup
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_members_filter_restricted.html
 */
export type ChatMembersFilterRestricted = {
	"@type": "chatMembersFilterRestricted";
};

/**
 * Returns users banned from the chat; can be used only by administrators in a supergroup or in a channel
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_members_filter_banned.html
 */
export type ChatMembersFilterBanned = {
	"@type": "chatMembersFilterBanned";
};

/**
 * Returns bot members of the chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_members_filter_bots.html
 */
export type ChatMembersFilterBots = {
	"@type": "chatMembersFilterBots";
};

/**
 * Returns recently active users in reverse chronological order
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1supergroup_members_filter_recent.html
 */
export type SupergroupMembersFilterRecent = {
	"@type": "supergroupMembersFilterRecent";
};

/**
 * Returns contacts of the user, which are members of the supergroup or channel
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1supergroup_members_filter_contacts.html
 */
export type SupergroupMembersFilterContacts = {
	"@type": "supergroupMembersFilterContacts";
	/** Query to search for */
	query: string;
};

/**
 * Returns the owner and administrators
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1supergroup_members_filter_administrators.html
 */
export type SupergroupMembersFilterAdministrators = {
	"@type": "supergroupMembersFilterAdministrators";
};

/**
 * Used to search for supergroup or channel members via a (string) query
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1supergroup_members_filter_search.html
 */
export type SupergroupMembersFilterSearch = {
	"@type": "supergroupMembersFilterSearch";
	/** Query to search for */
	query: string;
};

/**
 * Returns restricted supergroup members; can be used only by administrators
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1supergroup_members_filter_restricted.html
 */
export type SupergroupMembersFilterRestricted = {
	"@type": "supergroupMembersFilterRestricted";
	/** Query to search for */
	query: string;
};

/**
 * Returns users banned from the supergroup or channel; can be used only by administrators
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1supergroup_members_filter_banned.html
 */
export type SupergroupMembersFilterBanned = {
	"@type": "supergroupMembersFilterBanned";
	/** Query to search for */
	query: string;
};

/**
 * Returns users which can be mentioned in the supergroup
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1supergroup_members_filter_mention.html
 */
export type SupergroupMembersFilterMention = {
	"@type": "supergroupMembersFilterMention";
	/** Query to search for */
	query: string;
	/** If non-zero, the identifier of the current message thread */
	message_thread_id: number;
};

/**
 * Returns bot members of the supergroup or channel
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1supergroup_members_filter_bots.html
 */
export type SupergroupMembersFilterBots = {
	"@type": "supergroupMembersFilterBots";
};

/**
 * Contains a chat invite link
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_invite_link.html
 */
export type ChatInviteLink = {
	"@type": "chatInviteLink";
	/** Chat invite link */
	invite_link: string;
	/** Name of the link */
	name: string;
	/** User identifier of an administrator created the link */
	creator_user_id: number;
	/** Point in time (Unix timestamp) when the link was created */
	date: number;
	/** Point in time (Unix timestamp) when the link was last edited; 0 if never or unknown */
	edit_date: number;
	/** Point in time (Unix timestamp) when the link will expire; 0 if never */
	expiration_date: number;
	/** Information about subscription plan that is applied to the users joining the chat by the link; may be null if the link doesn't require subscription */
	subscription_pricing?: StarSubscriptionPricing;
	/** The maximum number of members, which can join the chat using the link simultaneously; 0 if not limited. Always 0 if the link requires approval */
	member_limit: number;
	/** Number of chat members, which joined the chat using the link */
	member_count: number;
	/** Number of chat members, which joined the chat using the link, but have already left because of expired subscription; for subscription links only */
	expired_member_count: number;
	/** Number of pending join requests created using this link */
	pending_join_request_count: number;
	/** True, if the link only creates join request. If true, total number of joining members will be unlimited */
	creates_join_request: boolean;
	/** True, if the link is primary. Primary invite link can't have name, expiration date, or usage limit. There is exactly one primary invite link for each administrator with can_invite_users right at a given time */
	is_primary: boolean;
	/** True, if the link was revoked */
	is_revoked: boolean;
};

/**
 * Contains a list of chat invite links
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_invite_links.html
 */
export type ChatInviteLinks = {
	"@type": "chatInviteLinks";
	/** Approximate total number of chat invite links found */
	total_count: number;
	/** List of invite links */
	invite_links: ChatInviteLink[];
};

/**
 * Describes a chat administrator with a number of active and revoked chat invite links
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_invite_link_count.html
 */
export type ChatInviteLinkCount = {
	"@type": "chatInviteLinkCount";
	/** Administrator's user identifier */
	user_id: number;
	/** Number of active invite links */
	invite_link_count: number;
	/** Number of revoked invite links */
	revoked_invite_link_count: number;
};

/**
 * Contains a list of chat invite link counts
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_invite_link_counts.html
 */
export type ChatInviteLinkCounts = {
	"@type": "chatInviteLinkCounts";
	/** List of invite link counts */
	invite_link_counts: ChatInviteLinkCount[];
};

/**
 * Describes a chat member joined a chat via an invite link
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_invite_link_member.html
 */
export type ChatInviteLinkMember = {
	"@type": "chatInviteLinkMember";
	/** User identifier */
	user_id: number;
	/** Point in time (Unix timestamp) when the user joined the chat */
	joined_chat_date: number;
	/** True, if the user has joined the chat using an invite link for a chat folder */
	via_chat_folder_invite_link: boolean;
	/** User identifier of the chat administrator, approved user join request */
	approver_user_id: number;
};

/**
 * Contains a list of chat members joined a chat via an invite link
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_invite_link_members.html
 */
export type ChatInviteLinkMembers = {
	"@type": "chatInviteLinkMembers";
	/** Approximate total number of chat members found */
	total_count: number;
	/** List of chat members, joined a chat via an invite link */
	members: ChatInviteLinkMember[];
};

/**
 * The link is an invite link for a basic group
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1invite_link_chat_type_basic_group.html
 */
export type InviteLinkChatTypeBasicGroup = {
	"@type": "inviteLinkChatTypeBasicGroup";
};

/**
 * The link is an invite link for a supergroup
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1invite_link_chat_type_supergroup.html
 */
export type InviteLinkChatTypeSupergroup = {
	"@type": "inviteLinkChatTypeSupergroup";
};

/**
 * The link is an invite link for a channel
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1invite_link_chat_type_channel.html
 */
export type InviteLinkChatTypeChannel = {
	"@type": "inviteLinkChatTypeChannel";
};

/**
 * Contains information about subscription plan that must be paid by the user to use a chat invite link
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_invite_link_subscription_info.html
 */
export type ChatInviteLinkSubscriptionInfo = {
	"@type": "chatInviteLinkSubscriptionInfo";
	/** Information about subscription plan that must be paid by the user to use the link */
	pricing: StarSubscriptionPricing;
	/** True, if the user has already paid for the subscription and can use joinChatByInviteLink to join the subscribed chat again */
	can_reuse: boolean;
	/** Identifier of the payment form to use for subscription payment; 0 if the subscription can't be paid */
	form_id: string;
};

/**
 * Contains information about a chat invite link
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_invite_link_info.html
 */
export type ChatInviteLinkInfo = {
	"@type": "chatInviteLinkInfo";
	/** Chat identifier of the invite link; 0 if the user has no access to the chat before joining */
	chat_id: number;
	/** If non-zero, the amount of time for which read access to the chat will remain available, in seconds */
	accessible_for: number;
	/** Type of the chat */
	type: InviteLinkChatType;
	/** Title of the chat */
	title: string;
	/** Chat photo; may be null */
	photo?: ChatPhotoInfo;
	/** Identifier of the accent color for chat title and background of chat photo */
	accent_color_id: number;
	/** Chat description */
	description: string;
	/** Number of members in the chat */
	member_count: number;
	/** User identifiers of some chat members that may be known to the current user */
	member_user_ids: number[];
	/** Information about subscription plan that must be paid by the user to use the link; may be null if the link doesn't require subscription */
	subscription_info?: ChatInviteLinkSubscriptionInfo;
	/** True, if the link only creates join request */
	creates_join_request: boolean;
	/** True, if the chat is a public supergroup or channel, i.e. it has a username or it is a location-based supergroup */
	is_public: boolean;
	/** Information about verification status of the chat; may be null if none */
	verification_status?: VerificationStatus;
};

/**
 * Describes a user that sent a join request and waits for administrator approval
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_join_request.html
 */
export type ChatJoinRequest = {
	"@type": "chatJoinRequest";
	/** User identifier */
	user_id: number;
	/** Point in time (Unix timestamp) when the user sent the join request */
	date: number;
	/** A short bio of the user */
	bio: string;
};

/**
 * Contains a list of requests to join a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_join_requests.html
 */
export type ChatJoinRequests = {
	"@type": "chatJoinRequests";
	/** Approximate total number of requests found */
	total_count: number;
	/** List of the requests */
	requests: ChatJoinRequest[];
};

/**
 * Contains information about pending join requests for a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_join_requests_info.html
 */
export type ChatJoinRequestsInfo = {
	"@type": "chatJoinRequestsInfo";
	/** Total number of pending join requests */
	total_count: number;
	/** Identifiers of at most 3 users sent the newest pending join requests */
	user_ids: number[];
};

/**
 * Represents a basic group of 0-200 users (must be upgraded to a supergroup to accommodate more than 200 users)
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1basic_group.html
 */
export type BasicGroup = {
	"@type": "basicGroup";
	/** Group identifier */
	id: number;
	/** Number of members in the group */
	member_count: number;
	/** Status of the current user in the group */
	status: ChatMemberStatus;
	/** True, if the group is active */
	is_active: boolean;
	/** Identifier of the supergroup to which this group was upgraded; 0 if none */
	upgraded_to_supergroup_id: number;
};

/**
 * Contains full information about a basic group
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1basic_group_full_info.html
 */
export type BasicGroupFullInfo = {
	"@type": "basicGroupFullInfo";
	/** Chat photo; may be null if empty or unknown. If non-null, then it is the same photo as in chat.photo */
	photo?: ChatPhoto;
	/** Group description. Updated only after the basic group is opened */
	description: string;
	/** User identifier of the creator of the group; 0 if unknown */
	creator_user_id: number;
	/** Group members */
	members: ChatMember[];
	/** True, if non-administrators and non-bots can be hidden in responses to getSupergroupMembers and searchChatMembers for non-administrators after upgrading the basic group to a supergroup */
	can_hide_members: boolean;
	/** True, if aggressive anti-spam checks can be enabled or disabled in the supergroup after upgrading the basic group to a supergroup */
	can_toggle_aggressive_anti_spam: boolean;
	/** Primary invite link for this group; may be null. For chat administrators with can_invite_users right only. Updated only after the basic group is opened */
	invite_link?: ChatInviteLink;
	/** List of commands of bots in the group */
	bot_commands: BotCommands[];
};

/**
 * Represents a supergroup or channel with zero or more members (subscribers in the case of channels). From the point of view of the system, a channel is a special kind of a supergroup: only administrators can post and see the list of members, and posts from all administrators use the name and photo of the channel instead of individual names and profile photos. Unlike supergroups, channels can have an unlimited number of subscribers
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1supergroup.html
 */
export type Supergroup = {
	"@type": "supergroup";
	/** Supergroup or channel identifier */
	id: number;
	/** Usernames of the supergroup or channel; may be null */
	usernames?: Usernames;
	/** Point in time (Unix timestamp) when the current user joined, or the point in time when the supergroup or channel was created, in case the user is not a member */
	date: number;
	/** Status of the current user in the supergroup or channel; custom title will always be empty */
	status: ChatMemberStatus;
	/** Number of members in the supergroup or channel; 0 if unknown. Currently, it is guaranteed to be known only if the supergroup or channel was received through getChatSimilarChats, getChatsToPostStories, getCreatedPublicChats, getGroupsInCommon, getInactiveSupergroupChats, getRecommendedChats, getSuitableDiscussionChats, getUserPrivacySettingRules, getVideoChatAvailableParticipants, searchPublicChats, or in chatFolderInviteLinkInfo.missing_chat_ids, or in userFullInfo.personal_chat_id, or for chats with messages or stories from publicForwards and foundStories */
	member_count: number;
	/** Approximate boost level for the chat */
	boost_level: number;
	/** True, if automatic translation of messages is enabled in the channel */
	has_automatic_translation: boolean;
	/** True, if the channel has a discussion group, or the supergroup is the designated discussion group for a channel */
	has_linked_chat: boolean;
	/** True, if the supergroup is connected to a location, i.e. the supergroup is a location-based supergroup */
	has_location: boolean;
	/** True, if messages sent to the channel contains name of the sender. This field is only applicable to channels */
	sign_messages: boolean;
	/** True, if messages sent to the channel have information about the sender user. This field is only applicable to channels */
	show_message_sender: boolean;
	/** True, if users need to join the supergroup before they can send messages. Always true for channels and non-discussion supergroups */
	join_to_send_messages: boolean;
	/** True, if all users directly joining the supergroup need to be approved by supergroup administrators. Always false for channels and supergroups without username, location, or a linked chat */
	join_by_request: boolean;
	/** True, if the slow mode is enabled in the supergroup */
	is_slow_mode_enabled: boolean;
	/** True, if the supergroup is a channel */
	is_channel: boolean;
	/** True, if the supergroup is a broadcast group, i.e. only administrators can send messages and there is no limit on the number of members */
	is_broadcast_group: boolean;
	/** True, if the supergroup is a forum with topics */
	is_forum: boolean;
	/** True, if the supergroup is a direct message group for a channel chat */
	is_direct_messages_group: boolean;
	/** True, if the supergroup is a direct messages group for a channel chat that is administered by the current user */
	is_administered_direct_messages_group: boolean;
	/** Information about verification status of the supergroup or channel; may be null if none */
	verification_status?: VerificationStatus;
	/** True, if the channel has direct messages group */
	has_direct_messages_group: boolean;
	/** True, if the supergroup is a forum, which topics are shown in the same way as in channel direct messages groups */
	has_forum_tabs: boolean;
	/** True, if content of media messages in the supergroup or channel chat must be hidden with 18+ spoiler */
	has_sensitive_content: boolean;
	/** If non-empty, contains a human-readable description of the reason why access to this supergroup or channel must be restricted */
	restriction_reason?: string;
	/** Number of Telegram Stars that must be paid by non-administrator users of the supergroup chat for each sent message */
	paid_message_star_count: number;
	/** True, if the supergroup or channel has non-expired stories available to the current user */
	has_active_stories: boolean;
	/** True, if the supergroup or channel has unread non-expired stories available to the current user */
	has_unread_active_stories: boolean;
};

/**
 * Contains full information about a supergroup or channel
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1supergroup_full_info.html
 */
export type SupergroupFullInfo = {
	"@type": "supergroupFullInfo";
	/** Chat photo; may be null if empty or unknown. If non-null, then it is the same photo as in chat.photo */
	photo?: ChatPhoto;
	/** Supergroup or channel description */
	description: string;
	/** Number of members in the supergroup or channel; 0 if unknown */
	member_count: number;
	/** Number of privileged users in the supergroup or channel; 0 if unknown */
	administrator_count: number;
	/** Number of restricted users in the supergroup; 0 if unknown */
	restricted_count: number;
	/** Number of users banned from chat; 0 if unknown */
	banned_count: number;
	/** Chat identifier of a discussion group for the channel, or a channel, for which the supergroup is the designated discussion group; 0 if none or unknown */
	linked_chat_id: number;
	/** Chat identifier of a direct messages group for the channel, or a channel, for which the supergroup is the designated direct messages group; 0 if none */
	direct_messages_chat_id: number;
	/** Delay between consecutive sent messages for non-administrator supergroup members, in seconds */
	slow_mode_delay: number;
	/** Time left before next message can be sent in the supergroup, in seconds. An updateSupergroupFullInfo update is not triggered when value of this field changes, but both new and old values are non-zero */
	slow_mode_delay_expires_in: number;
	/** True, if paid messages can be enabled in the supergroup chat; for supergroup only */
	can_enable_paid_messages: boolean;
	/** True, if paid reaction can be enabled in the channel chat; for channels only */
	can_enable_paid_reaction: boolean;
	/** True, if members of the chat can be retrieved via getSupergroupMembers or searchChatMembers */
	can_get_members: boolean;
	/** True, if non-administrators can receive only administrators and bots using getSupergroupMembers or searchChatMembers */
	has_hidden_members: boolean;
	/** True, if non-administrators and non-bots can be hidden in responses to getSupergroupMembers and searchChatMembers for non-administrators */
	can_hide_members: boolean;
	/** True, if the supergroup sticker set can be changed */
	can_set_sticker_set: boolean;
	/** True, if the supergroup location can be changed */
	can_set_location: boolean;
	/** True, if the supergroup or channel statistics are available */
	can_get_statistics: boolean;
	/** True, if the supergroup or channel revenue statistics are available */
	can_get_revenue_statistics: boolean;
	/** True, if the supergroup or channel Telegram Star revenue statistics are available */
	can_get_star_revenue_statistics: boolean;
	/** True, if the user can send a gift to the supergroup or channel using sendGift or transferGift */
	can_send_gift: boolean;
	/** True, if aggressive anti-spam checks can be enabled or disabled in the supergroup */
	can_toggle_aggressive_anti_spam: boolean;
	/** True, if new chat members will have access to old messages. In public, discussion, of forum groups and all channels, old messages are always available, so this option affects only private non-forum supergroups without a linked chat. The value of this field is only available to chat administrators */
	is_all_history_available: boolean;
	/** True, if the chat can have sponsored messages. The value of this field is only available to the owner of the chat */
	can_have_sponsored_messages: boolean;
	/** True, if aggressive anti-spam checks are enabled in the supergroup. The value of this field is only available to chat administrators */
	has_aggressive_anti_spam_enabled: boolean;
	/** True, if paid media can be sent and forwarded to the channel chat; for channels only */
	has_paid_media_allowed: boolean;
	/** True, if the supergroup or channel has pinned stories */
	has_pinned_stories: boolean;
	/** Number of saved to profile gifts for channels without can_post_messages administrator right, otherwise, the total number of received gifts */
	gift_count: number;
	/** Number of times the current user boosted the supergroup or channel */
	my_boost_count: number;
	/** Number of times the supergroup must be boosted by a user to ignore slow mode and chat permission restrictions; 0 if unspecified */
	unrestrict_boost_count: number;
	/** Identifier of the supergroup sticker set that must be shown before user sticker sets; 0 if none */
	sticker_set_id: string;
	/** Identifier of the custom emoji sticker set that can be used in the supergroup without Telegram Premium subscription; 0 if none */
	custom_emoji_sticker_set_id: string;
	/** Location to which the supergroup is connected; may be null if none */
	location?: ChatLocation;
	/** Primary invite link for the chat; may be null. For chat administrators with can_invite_users right only */
	invite_link?: ChatInviteLink;
	/** List of commands of bots in the group */
	bot_commands: BotCommands[];
	/** Information about verification status of the supergroup or the channel provided by a bot; may be null if none or unknown */
	bot_verification?: BotVerification;
	/** Identifier of the basic group from which supergroup was upgraded; 0 if none */
	upgraded_from_basic_group_id: number;
	/** Identifier of the last message in the basic group from which supergroup was upgraded; 0 if none */
	upgraded_from_max_message_id: number;
};

/**
 * The secret chat is not yet created; waiting for the other user to get online
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1secret_chat_state_pending.html
 */
export type SecretChatStatePending = {
	"@type": "secretChatStatePending";
};

/**
 * The secret chat is ready to use
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1secret_chat_state_ready.html
 */
export type SecretChatStateReady = {
	"@type": "secretChatStateReady";
};

/**
 * The secret chat is closed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1secret_chat_state_closed.html
 */
export type SecretChatStateClosed = {
	"@type": "secretChatStateClosed";
};

/**
 * Represents a secret chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1secret_chat.html
 */
export type SecretChat = {
	"@type": "secretChat";
	/** Secret chat identifier */
	id: number;
	/** Identifier of the chat partner */
	user_id: number;
	/** State of the secret chat */
	state: SecretChatState;
	/** True, if the chat was created by the current user; false otherwise */
	is_outbound: boolean;
	/** Hash of the currently used key for comparison with the hash of the chat partner's key. This is a string of 36 little-endian bytes, which must be split into groups of 2 bits, each denoting a pixel of one of 4 colors FFFFFF, D5E6F3, 2D5775, and 2F99C9. The pixels must be used to make a 12x12 square image filled from left to right, top to bottom. Alternatively, the first 32 bytes of the hash can be converted to the hexadecimal format and printed as 32 2-digit hex numbers */
	key_hash: string;
	/** Secret chat layer; determines features supported by the chat partner's application. Nested text entities and underline and strikethrough entities are supported if the layer >= 101, files bigger than 2000MB are supported if the layer >= 143, spoiler and custom emoji text entities are supported if the layer >= 144 */
	layer: number;
};

/**
 * The message was sent by a known user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_sender_user.html
 */
export type MessageSenderUser = {
	"@type": "messageSenderUser";
	/** Identifier of the user that sent the message */
	user_id: number;
};

/**
 * The message was sent on behalf of a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_sender_chat.html
 */
export type MessageSenderChat = {
	"@type": "messageSenderChat";
	/** Identifier of the chat that sent the message */
	chat_id: number;
};

/**
 * Represents a list of message senders
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_senders.html
 */
export type MessageSenders = {
	"@type": "messageSenders";
	/** Approximate total number of messages senders found */
	total_count: number;
	/** List of message senders */
	senders: MessageSender[];
};

/**
 * Represents a message sender, which can be used to send messages in a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_message_sender.html
 */
export type ChatMessageSender = {
	"@type": "chatMessageSender";
	/** The message sender */
	sender: MessageSender;
	/** True, if Telegram Premium is needed to use the message sender */
	needs_premium: boolean;
};

/**
 * Represents a list of message senders, which can be used to send messages in a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_message_senders.html
 */
export type ChatMessageSenders = {
	"@type": "chatMessageSenders";
	/** List of available message senders */
	senders: ChatMessageSender[];
};

/**
 * Contains read date of the message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_read_date_read.html
 */
export type MessageReadDateRead = {
	"@type": "messageReadDateRead";
	/** Point in time (Unix timestamp) when the message was read by the other user */
	read_date: number;
};

/**
 * The message is unread yet
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_read_date_unread.html
 */
export type MessageReadDateUnread = {
	"@type": "messageReadDateUnread";
};

/**
 * The message is too old to get read date
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_read_date_too_old.html
 */
export type MessageReadDateTooOld = {
	"@type": "messageReadDateTooOld";
};

/**
 * The read date is unknown due to privacy settings of the other user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_read_date_user_privacy_restricted.html
 */
export type MessageReadDateUserPrivacyRestricted = {
	"@type": "messageReadDateUserPrivacyRestricted";
};

/**
 * The read date is unknown due to privacy settings of the current user, but will be known if the user subscribes to Telegram Premium
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_read_date_my_privacy_restricted.html
 */
export type MessageReadDateMyPrivacyRestricted = {
	"@type": "messageReadDateMyPrivacyRestricted";
};

/**
 * Represents a viewer of a message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_viewer.html
 */
export type MessageViewer = {
	"@type": "messageViewer";
	/** User identifier of the viewer */
	user_id: number;
	/** Approximate point in time (Unix timestamp) when the message was viewed */
	view_date: number;
};

/**
 * Represents a list of message viewers
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_viewers.html
 */
export type MessageViewers = {
	"@type": "messageViewers";
	/** List of message viewers */
	viewers: MessageViewer[];
};

/**
 * The message was originally sent by a known user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_origin_user.html
 */
export type MessageOriginUser = {
	"@type": "messageOriginUser";
	/** Identifier of the user that originally sent the message */
	sender_user_id: number;
};

/**
 * The message was originally sent by a user, which is hidden by their privacy settings
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_origin_hidden_user.html
 */
export type MessageOriginHiddenUser = {
	"@type": "messageOriginHiddenUser";
	/** Name of the sender */
	sender_name: string;
};

/**
 * The message was originally sent on behalf of a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_origin_chat.html
 */
export type MessageOriginChat = {
	"@type": "messageOriginChat";
	/** Identifier of the chat that originally sent the message */
	sender_chat_id: number;
	/** For messages originally sent by an anonymous chat administrator, original message author signature */
	author_signature: string;
};

/**
 * The message was originally a post in a channel
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_origin_channel.html
 */
export type MessageOriginChannel = {
	"@type": "messageOriginChannel";
	/** Identifier of the channel chat to which the message was originally sent */
	chat_id: number;
	/** Message identifier of the original message */
	message_id: number;
	/** Original post author signature */
	author_signature: string;
};

/**
 * Contains information about the last message from which a new message was forwarded last time
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1forward_source.html
 */
export type ForwardSource = {
	"@type": "forwardSource";
	/** Identifier of the chat to which the message that was forwarded belonged; may be 0 if unknown */
	chat_id: number;
	/** Identifier of the message; may be 0 if unknown */
	message_id: number;
	/** Identifier of the sender of the message; may be null if unknown or the new message was forwarded not to Saved Messages */
	sender_id?: MessageSender;
	/** Name of the sender of the message if the sender is hidden by their privacy settings */
	sender_name: string;
	/** Point in time (Unix timestamp) when the message is sent; 0 if unknown */
	date: number;
	/** True, if the message that was forwarded is outgoing; always false if sender is unknown */
	is_outgoing: boolean;
};

/**
 * A reaction with an emoji
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1reaction_type_emoji.html
 */
export type ReactionTypeEmoji = {
	"@type": "reactionTypeEmoji";
	/** Text representation of the reaction */
	emoji: string;
};

/**
 * A reaction with a custom emoji
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1reaction_type_custom_emoji.html
 */
export type ReactionTypeCustomEmoji = {
	"@type": "reactionTypeCustomEmoji";
	/** Unique identifier of the custom emoji */
	custom_emoji_id: string;
};

/**
 * The paid reaction in a channel chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1reaction_type_paid.html
 */
export type ReactionTypePaid = {
	"@type": "reactionTypePaid";
};

/**
 * A paid reaction on behalf of the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1paid_reaction_type_regular.html
 */
export type PaidReactionTypeRegular = {
	"@type": "paidReactionTypeRegular";
};

/**
 * An anonymous paid reaction
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1paid_reaction_type_anonymous.html
 */
export type PaidReactionTypeAnonymous = {
	"@type": "paidReactionTypeAnonymous";
};

/**
 * A paid reaction on behalf of an owned chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1paid_reaction_type_chat.html
 */
export type PaidReactionTypeChat = {
	"@type": "paidReactionTypeChat";
	/** Identifier of the chat */
	chat_id: number;
};

/**
 * Contains information about a user that added paid reactions
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1paid_reactor.html
 */
export type PaidReactor = {
	"@type": "paidReactor";
	/** Identifier of the user or chat that added the reactions; may be null for anonymous reactors that aren't the current user */
	sender_id?: MessageSender;
	/** Number of Telegram Stars added */
	star_count: number;
	/** True, if the reactor is one of the most active reactors; may be false if the reactor is the current user */
	is_top: boolean;
	/** True, if the paid reaction was added by the current user */
	is_me: boolean;
	/** True, if the reactor is anonymous */
	is_anonymous: boolean;
};

/**
 * Contains information about a forwarded message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_forward_info.html
 */
export type MessageForwardInfo = {
	"@type": "messageForwardInfo";
	/** Origin of the forwarded message */
	origin: MessageOrigin;
	/** Point in time (Unix timestamp) when the message was originally sent */
	date: number;
	/** For messages forwarded to the chat with the current user (Saved Messages), to the Replies bot chat, or to the channel's discussion group, information about the source message from which the message was forwarded last time; may be null for other forwards or if unknown */
	source?: ForwardSource;
	/** The type of public service announcement for the forwarded message */
	public_service_announcement_type: string;
};

/**
 * Contains information about a message created with importMessages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_import_info.html
 */
export type MessageImportInfo = {
	"@type": "messageImportInfo";
	/** Name of the original sender */
	sender_name: string;
	/** Point in time (Unix timestamp) when the message was originally sent */
	date: number;
};

/**
 * Contains information about replies to a message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_reply_info.html
 */
export type MessageReplyInfo = {
	"@type": "messageReplyInfo";
	/** Number of times the message was directly or indirectly replied */
	reply_count: number;
	/** Identifiers of at most 3 recent repliers to the message; available in channels with a discussion supergroup. The users and chats are expected to be inaccessible: only their photo and name will be available */
	recent_replier_ids: MessageSender[];
	/** Identifier of the last read incoming reply to the message */
	last_read_inbox_message_id: number;
	/** Identifier of the last read outgoing reply to the message */
	last_read_outbox_message_id: number;
	/** Identifier of the last reply to the message */
	last_message_id: number;
};

/**
 * Contains information about a reaction to a message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_reaction.html
 */
export type MessageReaction = {
	"@type": "messageReaction";
	/** Type of the reaction */
	type: ReactionType;
	/** Number of times the reaction was added */
	total_count: number;
	/** True, if the reaction is chosen by the current user */
	is_chosen: boolean;
	/** Identifier of the message sender used by the current user to add the reaction; may be null if unknown or the reaction isn't chosen */
	used_sender_id?: MessageSender;
	/** Identifiers of at most 3 recent message senders, added the reaction; available in private, basic group and supergroup chats */
	recent_sender_ids: MessageSender[];
};

/**
 * Contains a list of reactions added to a message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_reactions.html
 */
export type MessageReactions = {
	"@type": "messageReactions";
	/** List of added reactions */
	reactions: MessageReaction[];
	/** True, if the reactions are tags and Telegram Premium users can filter messages by them */
	are_tags: boolean;
	/** Information about top users that added the paid reaction */
	paid_reactors: PaidReactor[];
	/** True, if the list of added reactions is available using getMessageAddedReactions */
	can_get_added_reactions: boolean;
};

/**
 * Contains information about interactions with a message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_interaction_info.html
 */
export type MessageInteractionInfo = {
	"@type": "messageInteractionInfo";
	/** Number of times the message was viewed */
	view_count: number;
	/** Number of times the message was forwarded */
	forward_count: number;
	/** Information about direct or indirect replies to the message; may be null. Currently, available only in channels with a discussion supergroup and discussion supergroups for messages, which are not replies itself */
	reply_info?: MessageReplyInfo;
	/** The list of reactions or tags added to the message; may be null */
	reactions?: MessageReactions;
};

/**
 * Contains information about an unread reaction to a message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1unread_reaction.html
 */
export type UnreadReaction = {
	"@type": "unreadReaction";
	/** Type of the reaction */
	type: ReactionType;
	/** Identifier of the sender, added the reaction */
	sender_id: MessageSender;
	/** True, if the reaction was added with a big animation */
	is_big: boolean;
};

/**
 * A topic in a forum supergroup chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_topic_forum.html
 */
export type MessageTopicForum = {
	"@type": "messageTopicForum";
	/** Unique identifier of the forum topic; all messages in a non-forum supergroup chats belongs to the General topic */
	forum_topic_id: number;
};

/**
 * A topic in a channel direct messages chat administered by the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_topic_direct_messages.html
 */
export type MessageTopicDirectMessages = {
	"@type": "messageTopicDirectMessages";
	/** Unique identifier of the topic */
	direct_messages_chat_topic_id: number;
};

/**
 * A topic in Saved Messages chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_topic_saved_messages.html
 */
export type MessageTopicSavedMessages = {
	"@type": "messageTopicSavedMessages";
	/** Unique identifier of the Saved Messages topic */
	saved_messages_topic_id: number;
};

/**
 * An effect from an emoji reaction
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_effect_type_emoji_reaction.html
 */
export type MessageEffectTypeEmojiReaction = {
	"@type": "messageEffectTypeEmojiReaction";
	/** Select animation for the effect in TGS format */
	select_animation: Sticker;
	/** Effect animation for the effect in TGS format */
	effect_animation: Sticker;
};

/**
 * An effect from a premium sticker
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_effect_type_premium_sticker.html
 */
export type MessageEffectTypePremiumSticker = {
	"@type": "messageEffectTypePremiumSticker";
	/** The premium sticker. The effect can be found at sticker.full_type.premium_animation */
	sticker: Sticker;
};

/**
 * Contains information about an effect added to a message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_effect.html
 */
export type MessageEffect = {
	"@type": "messageEffect";
	/** Unique identifier of the effect */
	id: string;
	/** Static icon for the effect in WEBP format; may be null if none */
	static_icon?: Sticker;
	/** Emoji corresponding to the effect that can be used if static icon isn't available */
	emoji: string;
	/** True, if Telegram Premium subscription is required to use the effect */
	is_premium: boolean;
	/** Type of the effect */
	type: MessageEffectType;
};

/**
 * The message is being sent now, but has not yet been delivered to the server
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_sending_state_pending.html
 */
export type MessageSendingStatePending = {
	"@type": "messageSendingStatePending";
	/** Non-persistent message sending identifier, specified by the application */
	sending_id: number;
};

/**
 * The message failed to be sent
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_sending_state_failed.html
 */
export type MessageSendingStateFailed = {
	"@type": "messageSendingStateFailed";
	/** The cause of the message sending failure */
	error: Error;
	/** True, if the message can be re-sent using resendMessages or readdQuickReplyShortcutMessages */
	can_retry: boolean;
	/** True, if the message can be re-sent only on behalf of a different sender */
	need_another_sender: boolean;
	/** True, if the message can be re-sent only if another quote is chosen in the message that is replied by the given message */
	need_another_reply_quote: boolean;
	/** True, if the message can be re-sent only if the message to be replied is removed. This will be done automatically by resendMessages */
	need_drop_reply: boolean;
	/** The number of Telegram Stars that must be paid to send the message; 0 if the current amount is correct */
	required_paid_message_star_count: number;
	/** Time left before the message can be re-sent, in seconds. No update is sent when this field changes */
	retry_after: number;
};

/**
 * Describes manually or automatically chosen quote from another message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1text_quote.html
 */
export type TextQuote = {
	"@type": "textQuote";
	/** Text of the quote. Only Bold, Italic, Underline, Strikethrough, Spoiler, and CustomEmoji entities can be present in the text */
	text: FormattedText;
	/** Approximate quote position in the original message in UTF-16 code units as specified by the message sender */
	position: number;
	/** True, if the quote was manually chosen by the message sender */
	is_manual: boolean;
};

/**
 * Describes manually chosen quote from another message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_text_quote.html
 */
export type InputTextQuote = {
	"@type": "inputTextQuote";
	/** Text of the quote; 0-getOption("message_reply_quote_length_max") characters. Only Bold, Italic, Underline, Strikethrough, Spoiler, and CustomEmoji entities are allowed to be kept and must be kept in the quote */
	text: FormattedText;
	/** Quote position in the original message in UTF-16 code units */
	position: number;
};

/**
 * Describes a message replied by a given message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_reply_to_message.html
 */
export type MessageReplyToMessage = {
	"@type": "messageReplyToMessage";
	/** The identifier of the chat to which the message belongs; may be 0 if the replied message is in unknown chat */
	chat_id: number;
	/** The identifier of the message; may be 0 if the replied message is in unknown chat */
	message_id: number;
	/** Chosen quote from the replied message; may be null if none */
	quote?: TextQuote;
	/** Information about origin of the message if the message was from another chat or topic; may be null for messages from the same chat */
	origin?: MessageOrigin;
	/** Point in time (Unix timestamp) when the message was sent if the message was from another chat or topic; 0 for messages from the same chat */
	origin_send_date: number;
	/** Media content of the message if the message was from another chat or topic; may be null for messages from the same chat and messages without media. Can be only one of the following types: messageAnimation, messageAudio, messageContact, messageDice, messageDocument, messageGame, messageGiveaway, messageGiveawayWinners, messageInvoice, messageLocation, messagePaidMedia, messagePhoto, messagePoll, messageSticker, messageStory, messageText (for link preview), messageVenue, messageVideo, messageVideoNote, or messageVoiceNote */
	content?: MessageContent;
};

/**
 * Describes a story replied by a given message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_reply_to_story.html
 */
export type MessageReplyToStory = {
	"@type": "messageReplyToStory";
	/** The identifier of the poster of the story */
	story_poster_chat_id: number;
	/** The identifier of the story */
	story_id: number;
};

/**
 * Describes a message to be replied in the same chat and forum topic
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_message_reply_to_message.html
 */
export type InputMessageReplyToMessage = {
	"@type": "inputMessageReplyToMessage";
	/** The identifier of the message to be replied in the same chat and forum topic. A message can be replied in the same chat and forum topic only if messageProperties.can_be_replied */
	message_id: number;
	/** Quote from the message to be replied; pass null if none. Must always be null for replies in secret chats */
	quote?: InputTextQuote;
};

/**
 * Describes a message to be replied that is from a different chat or a forum topic; not supported in secret chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_message_reply_to_external_message.html
 */
export type InputMessageReplyToExternalMessage = {
	"@type": "inputMessageReplyToExternalMessage";
	/** The identifier of the chat to which the message to be replied belongs */
	chat_id: number;
	/** The identifier of the message to be replied in the specified chat. A message can be replied in another chat or forum topic only if messageProperties.can_be_replied_in_another_chat */
	message_id: number;
	/** Quote from the message to be replied; pass null if none */
	quote?: InputTextQuote;
};

/**
 * Describes a story to be replied
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_message_reply_to_story.html
 */
export type InputMessageReplyToStory = {
	"@type": "inputMessageReplyToStory";
	/** The identifier of the poster of the story. Currently, stories can be replied only in the chat that posted the story; channel stories can't be replied */
	story_poster_chat_id: number;
	/** The identifier of the story */
	story_id: number;
};

/**
 * Describes a fact-check added to the message by an independent checker
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1fact_check.html
 */
export type FactCheck = {
	"@type": "factCheck";
	/** Text of the fact-check */
	text: FormattedText;
	/** A two-letter ISO 3166-1 alpha-2 country code of the country for which the fact-check is shown */
	country_code: string;
};

/**
 * Describes a message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message.html
 */
export type Message = {
	"@type": "message";
	/** Message identifier; unique for the chat to which the message belongs */
	id: number;
	/** Identifier of the sender of the message */
	sender_id: MessageSender;
	/** Chat identifier */
	chat_id: number;
	/** The sending state of the message; may be null if the message isn't being sent and didn't fail to be sent */
	sending_state?: MessageSendingState;
	/** The scheduling state of the message; may be null if the message isn't scheduled */
	scheduling_state?: MessageSchedulingState;
	/** True, if the message is outgoing */
	is_outgoing: boolean;
	/** True, if the message is pinned */
	is_pinned: boolean;
	/** True, if the message was sent because of a scheduled action by the message sender, for example, as away, or greeting service message */
	is_from_offline: boolean;
	/** True, if content of the message can be saved locally */
	can_be_saved: boolean;
	/** True, if media timestamp entities refers to a media in this message as opposed to a media in the replied message */
	has_timestamped_media: boolean;
	/** True, if the message is a channel post. All messages to channels are channel posts, all other messages are not channel posts */
	is_channel_post: boolean;
	/** True, if the message contains an unread mention for the current user */
	contains_unread_mention: boolean;
	/** Point in time (Unix timestamp) when the message was sent; 0 for scheduled messages */
	date: number;
	/** Point in time (Unix timestamp) when the message was last edited; 0 for scheduled messages */
	edit_date: number;
	/** Information about the initial message sender; may be null if none or unknown */
	forward_info?: MessageForwardInfo;
	/** Information about the initial message for messages created with importMessages; may be null if the message isn't imported */
	import_info?: MessageImportInfo;
	/** Information about interactions with the message; may be null if none */
	interaction_info?: MessageInteractionInfo;
	/** Information about unread reactions added to the message */
	unread_reactions: UnreadReaction[];
	/** Information about fact-check added to the message; may be null if none */
	fact_check?: FactCheck;
	/** Information about the message or the story this message is replying to; may be null if none */
	reply_to?: MessageReplyTo;
	/** If non-zero, the identifier of the message thread the message belongs to; unique within the chat to which the message belongs */
	message_thread_id: number;
	/** Identifier of the topic within the chat to which the message belongs; may be null if none */
	topic_id?: MessageTopic;
	/** The message's self-destruct type; may be null if none */
	self_destruct_type?: MessageSelfDestructType;
	/** Time left before the message self-destruct timer expires, in seconds; 0 if self-destruction isn't scheduled yet */
	self_destruct_in: number;
	/** Time left before the message will be automatically deleted by message_auto_delete_time setting of the chat, in seconds; 0 if never */
	auto_delete_in: number;
	/** If non-zero, the user identifier of the inline bot through which this message was sent */
	via_bot_user_id: number;
	/** If non-zero, the user identifier of the business bot that sent this message */
	sender_business_bot_user_id: number;
	/** Number of times the sender of the message boosted the supergroup at the time the message was sent; 0 if none or unknown. For messages sent by the current user, supergroupFullInfo.my_boost_count must be used instead */
	sender_boost_count: number;
	/** The number of Telegram Stars the sender paid to send the message */
	paid_message_star_count: number;
	/** For channel posts and anonymous group messages, optional author signature */
	author_signature: string;
	/** Unique identifier of an album this message belongs to; 0 if none. Only audios, documents, photos and videos can be grouped together in albums */
	media_album_id: string;
	/** Unique identifier of the effect added to the message; 0 if none */
	effect_id: string;
	/** True, if media content of the message must be hidden with 18+ spoiler */
	has_sensitive_content: boolean;
	/** If non-empty, contains a human-readable description of the reason why access to this message must be restricted */
	restriction_reason?: string;
	/** Content of the message */
	content: MessageContent;
	/** Reply markup for the message; may be null if none */
	reply_markup?: ReplyMarkup;
};

/**
 * Contains a list of messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1messages.html
 */
export type Messages = {
	"@type": "messages";
	/** Approximate total number of messages found */
	total_count: number;
	/** List of messages; messages may be null */
	messages: Message[];
};

/**
 * Contains a list of messages found by a search
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1found_messages.html
 */
export type FoundMessages = {
	"@type": "foundMessages";
	/** Approximate total number of messages found; -1 if unknown */
	total_count: number;
	/** List of messages */
	messages: Message[];
	/** The offset for the next request. If empty, then there are no more results */
	next_offset: string;
};

/**
 * Contains a list of messages found by a search in a given chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1found_chat_messages.html
 */
export type FoundChatMessages = {
	"@type": "foundChatMessages";
	/** Approximate total number of messages found; -1 if unknown */
	total_count: number;
	/** List of messages */
	messages: Message[];
	/** The offset for the next request. If 0, there are no more results */
	next_from_message_id: number;
};

/**
 * Contains information about a message in a specific position
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_position.html
 */
export type MessagePosition = {
	"@type": "messagePosition";
	/** 0-based message position in the full list of suitable messages */
	position: number;
	/** Message identifier */
	message_id: number;
	/** Point in time (Unix timestamp) when the message was sent */
	date: number;
};

/**
 * Contains a list of message positions
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_positions.html
 */
export type MessagePositions = {
	"@type": "messagePositions";
	/** Total number of messages found */
	total_count: number;
	/** List of message positions */
	positions: MessagePosition[];
};

/**
 * Contains information about found messages sent on a specific day
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_calendar_day.html
 */
export type MessageCalendarDay = {
	"@type": "messageCalendarDay";
	/** Total number of found messages sent on the day */
	total_count: number;
	/** First message sent on the day */
	message: Message;
};

/**
 * Contains information about found messages, split by days according to the option "utc_time_offset"
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_calendar.html
 */
export type MessageCalendar = {
	"@type": "messageCalendar";
	/** Total number of found messages */
	total_count: number;
	/** Information about messages sent */
	days: MessageCalendarDay[];
};

/**
 * Describes a message from a business account as received by a bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1business_message.html
 */
export type BusinessMessage = {
	"@type": "businessMessage";
	/** The message */
	message: Message;
	/** Message that is replied by the message in the same chat; may be null if none */
	reply_to_message?: Message;
};

/**
 * Contains a list of messages from a business account as received by a bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1business_messages.html
 */
export type BusinessMessages = {
	"@type": "businessMessages";
	/** List of business messages */
	messages: BusinessMessage[];
};

/**
 * The message is from a chat history
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_source_chat_history.html
 */
export type MessageSourceChatHistory = {
	"@type": "messageSourceChatHistory";
};

/**
 * The message is from history of a message thread
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_source_message_thread_history.html
 */
export type MessageSourceMessageThreadHistory = {
	"@type": "messageSourceMessageThreadHistory";
};

/**
 * The message is from history of a forum topic
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_source_forum_topic_history.html
 */
export type MessageSourceForumTopicHistory = {
	"@type": "messageSourceForumTopicHistory";
};

/**
 * The message is from history of a topic in a channel direct messages chat administered by the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_source_direct_messages_chat_topic_history.html
 */
export type MessageSourceDirectMessagesChatTopicHistory = {
	"@type": "messageSourceDirectMessagesChatTopicHistory";
};

/**
 * The message is from chat, message thread or forum topic history preview
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_source_history_preview.html
 */
export type MessageSourceHistoryPreview = {
	"@type": "messageSourceHistoryPreview";
};

/**
 * The message is from a chat list or a forum topic list
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_source_chat_list.html
 */
export type MessageSourceChatList = {
	"@type": "messageSourceChatList";
};

/**
 * The message is from search results, including file downloads, local file list, outgoing document messages, calendar
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_source_search.html
 */
export type MessageSourceSearch = {
	"@type": "messageSourceSearch";
};

/**
 * The message is from a chat event log
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_source_chat_event_log.html
 */
export type MessageSourceChatEventLog = {
	"@type": "messageSourceChatEventLog";
};

/**
 * The message is from a notification
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_source_notification.html
 */
export type MessageSourceNotification = {
	"@type": "messageSourceNotification";
};

/**
 * The message was screenshotted; the source must be used only if the message content was visible during the screenshot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_source_screenshot.html
 */
export type MessageSourceScreenshot = {
	"@type": "messageSourceScreenshot";
};

/**
 * The message is from some other source
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_source_other.html
 */
export type MessageSourceOther = {
	"@type": "messageSourceOther";
};

/**
 * Information about the sponsor of a message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_sponsor.html
 */
export type MessageSponsor = {
	"@type": "messageSponsor";
	/** URL of the sponsor to be opened when the message is clicked */
	url: string;
	/** Photo of the sponsor; may be null if must not be shown */
	photo?: Photo;
	/** Additional optional information about the sponsor to be shown along with the message */
	info: string;
};

/**
 * Describes a sponsored message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1sponsored_message.html
 */
export type SponsoredMessage = {
	"@type": "sponsoredMessage";
	/** Message identifier; unique for the chat to which the sponsored message belongs among both ordinary and sponsored messages */
	message_id: number;
	/** True, if the message needs to be labeled as "recommended" instead of "sponsored" */
	is_recommended: boolean;
	/** True, if the message can be reported to Telegram moderators through reportChatSponsoredMessage */
	can_be_reported: boolean;
	/** Content of the message. Currently, can be only of the types messageText, messageAnimation, messagePhoto, or messageVideo. Video messages can be viewed fullscreen */
	content: MessageContent;
	/** Information about the sponsor of the message */
	sponsor: MessageSponsor;
	/** Title of the sponsored message */
	title: string;
	/** Text for the message action button */
	button_text: string;
	/** Identifier of the accent color for title, button text and message background */
	accent_color_id: number;
	/** Identifier of a custom emoji to be shown on the message background; 0 if none */
	background_custom_emoji_id: string;
	/** If non-empty, additional information about the sponsored message to be shown along with the message */
	additional_info?: string;
};

/**
 * Contains a list of sponsored messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1sponsored_messages.html
 */
export type SponsoredMessages = {
	"@type": "sponsoredMessages";
	/** List of sponsored messages */
	messages: SponsoredMessage[];
	/** The minimum number of messages between shown sponsored messages, or 0 if only one sponsored message must be shown after all ordinary messages */
	messages_between: number;
};

/**
 * Describes a sponsored chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1sponsored_chat.html
 */
export type SponsoredChat = {
	"@type": "sponsoredChat";
	/** Unique identifier of this result */
	unique_id: number;
	/** Chat identifier */
	chat_id: number;
	/** Additional optional information about the sponsor to be shown along with the chat */
	sponsor_info: string;
	/** If non-empty, additional information about the sponsored chat to be shown along with the chat */
	additional_info?: string;
};

/**
 * Contains a list of sponsored chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1sponsored_chats.html
 */
export type SponsoredChats = {
	"@type": "sponsoredChats";
	/** List of sponsored chats */
	chats: SponsoredChat[];
};

/**
 * Describes an option to report an entity to Telegram
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1report_option.html
 */
export type ReportOption = {
	"@type": "reportOption";
	/** Unique identifier of the option */
	id: string;
	/** Text of the option */
	text: string;
};

/**
 * The message was reported successfully
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1report_sponsored_result_ok.html
 */
export type ReportSponsoredResultOk = {
	"@type": "reportSponsoredResultOk";
};

/**
 * The sponsored message is too old or not found
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1report_sponsored_result_failed.html
 */
export type ReportSponsoredResultFailed = {
	"@type": "reportSponsoredResultFailed";
};

/**
 * The user must choose an option to report the message and repeat request with the chosen option
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1report_sponsored_result_option_required.html
 */
export type ReportSponsoredResultOptionRequired = {
	"@type": "reportSponsoredResultOptionRequired";
	/** Title for the option choice */
	title: string;
	/** List of available options */
	options: ReportOption[];
};

/**
 * Sponsored messages were hidden for the user in all chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1report_sponsored_result_ads_hidden.html
 */
export type ReportSponsoredResultAdsHidden = {
	"@type": "reportSponsoredResultAdsHidden";
};

/**
 * The user asked to hide sponsored messages, but Telegram Premium is required for this
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1report_sponsored_result_premium_required.html
 */
export type ReportSponsoredResultPremiumRequired = {
	"@type": "reportSponsoredResultPremiumRequired";
};

/**
 * Describes a file added to file download list
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1file_download.html
 */
export type FileDownload = {
	"@type": "fileDownload";
	/** File identifier */
	file_id: number;
	/** The message with the file */
	message: Message;
	/** Point in time (Unix timestamp) when the file was added to the download list */
	add_date: number;
	/** Point in time (Unix timestamp) when the file downloading was completed; 0 if the file downloading isn't completed */
	complete_date: number;
	/** True, if downloading of the file is paused */
	is_paused: boolean;
};

/**
 * Contains number of being downloaded and recently downloaded files found
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1downloaded_file_counts.html
 */
export type DownloadedFileCounts = {
	"@type": "downloadedFileCounts";
	/** Number of active file downloads found, including paused */
	active_count: number;
	/** Number of paused file downloads found */
	paused_count: number;
	/** Number of completed file downloads found */
	completed_count: number;
};

/**
 * Contains a list of downloaded files, found by a search
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1found_file_downloads.html
 */
export type FoundFileDownloads = {
	"@type": "foundFileDownloads";
	/** Total number of suitable files, ignoring offset */
	total_counts: DownloadedFileCounts;
	/** The list of files */
	files: FileDownload[];
	/** The offset for the next request. If empty, then there are no more results */
	next_offset: string;
};

/**
 * Notification settings applied to all private and secret chats when the corresponding chat setting has a default value
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1notification_settings_scope_private_chats.html
 */
export type NotificationSettingsScopePrivateChats = {
	"@type": "notificationSettingsScopePrivateChats";
};

/**
 * Notification settings applied to all basic group and supergroup chats when the corresponding chat setting has a default value
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1notification_settings_scope_group_chats.html
 */
export type NotificationSettingsScopeGroupChats = {
	"@type": "notificationSettingsScopeGroupChats";
};

/**
 * Notification settings applied to all channel chats when the corresponding chat setting has a default value
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1notification_settings_scope_channel_chats.html
 */
export type NotificationSettingsScopeChannelChats = {
	"@type": "notificationSettingsScopeChannelChats";
};

/**
 * Contains information about notification settings for a chat or a forum topic
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_notification_settings.html
 */
export type ChatNotificationSettings = {
	"@type": "chatNotificationSettings";
	/** If true, the value for the relevant type of chat or the forum chat is used instead of mute_for */
	use_default_mute_for: boolean;
	/** Time left before notifications will be unmuted, in seconds */
	mute_for: number;
	/** If true, the value for the relevant type of chat or the forum chat is used instead of sound_id */
	use_default_sound: boolean;
	/** Identifier of the notification sound to be played for messages; 0 if sound is disabled */
	sound_id: string;
	/** If true, the value for the relevant type of chat or the forum chat is used instead of show_preview */
	use_default_show_preview: boolean;
	/** True, if message content must be displayed in notifications */
	show_preview: boolean;
	/** If true, the value for the relevant type of chat is used instead of mute_stories */
	use_default_mute_stories: boolean;
	/** True, if story notifications are disabled for the chat */
	mute_stories: boolean;
	/** If true, the value for the relevant type of chat is used instead of story_sound_id */
	use_default_story_sound: boolean;
	/** Identifier of the notification sound to be played for stories; 0 if sound is disabled */
	story_sound_id: string;
	/** If true, the value for the relevant type of chat is used instead of show_story_poster */
	use_default_show_story_poster: boolean;
	/** True, if the chat that posted a story must be displayed in notifications */
	show_story_poster: boolean;
	/** If true, the value for the relevant type of chat or the forum chat is used instead of disable_pinned_message_notifications */
	use_default_disable_pinned_message_notifications: boolean;
	/** If true, notifications for incoming pinned messages will be created as for an ordinary unread message */
	disable_pinned_message_notifications: boolean;
	/** If true, the value for the relevant type of chat or the forum chat is used instead of disable_mention_notifications */
	use_default_disable_mention_notifications: boolean;
	/** If true, notifications for messages with mentions will be created as for an ordinary unread message */
	disable_mention_notifications: boolean;
};

/**
 * Contains information about notification settings for several chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1scope_notification_settings.html
 */
export type ScopeNotificationSettings = {
	"@type": "scopeNotificationSettings";
	/** Time left before notifications will be unmuted, in seconds */
	mute_for: number;
	/** Identifier of the notification sound to be played; 0 if sound is disabled */
	sound_id: string;
	/** True, if message content must be displayed in notifications */
	show_preview: boolean;
	/** If true, story notifications are received only for the first 5 chats from topChatCategoryUsers regardless of the value of mute_stories */
	use_default_mute_stories: boolean;
	/** True, if story notifications are disabled */
	mute_stories: boolean;
	/** Identifier of the notification sound to be played for stories; 0 if sound is disabled */
	story_sound_id: string;
	/** True, if the chat that posted a story must be displayed in notifications */
	show_story_poster: boolean;
	/** True, if notifications for incoming pinned messages will be created as for an ordinary unread message */
	disable_pinned_message_notifications: boolean;
	/** True, if notifications for messages with mentions will be created as for an ordinary unread message */
	disable_mention_notifications: boolean;
};

/**
 * Notifications for reactions are disabled
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1reaction_notification_source_none.html
 */
export type ReactionNotificationSourceNone = {
	"@type": "reactionNotificationSourceNone";
};

/**
 * Notifications for reactions are shown only for reactions from contacts
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1reaction_notification_source_contacts.html
 */
export type ReactionNotificationSourceContacts = {
	"@type": "reactionNotificationSourceContacts";
};

/**
 * Notifications for reactions are shown for all reactions
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1reaction_notification_source_all.html
 */
export type ReactionNotificationSourceAll = {
	"@type": "reactionNotificationSourceAll";
};

/**
 * Contains information about notification settings for reactions
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1reaction_notification_settings.html
 */
export type ReactionNotificationSettings = {
	"@type": "reactionNotificationSettings";
	/** Source of message reactions for which notifications are shown */
	message_reaction_source: ReactionNotificationSource;
	/** Source of story reactions for which notifications are shown */
	story_reaction_source: ReactionNotificationSource;
	/** Identifier of the notification sound to be played; 0 if sound is disabled */
	sound_id: string;
	/** True, if reaction sender and emoji must be displayed in notifications */
	show_preview: boolean;
};

/**
 * Contains information about a message draft
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1draft_message.html
 */
export type DraftMessage = {
	"@type": "draftMessage";
	/** Information about the message to be replied; must be of the type inputMessageReplyToMessage; may be null if none */
	reply_to?: InputMessageReplyTo;
	/** Point in time (Unix timestamp) when the draft was created */
	date: number;
	/** Content of the message draft; must be of the type inputMessageText, inputMessageVideoNote, or inputMessageVoiceNote */
	input_message_text: InputMessageContent;
	/** Identifier of the effect to apply to the message when it is sent; 0 if none */
	effect_id: string;
};

/**
 * An ordinary chat with a user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_type_private.html
 */
export type ChatTypePrivate = {
	"@type": "chatTypePrivate";
	/** User identifier */
	user_id: number;
};

/**
 * A basic group (a chat with 0-200 other users)
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_type_basic_group.html
 */
export type ChatTypeBasicGroup = {
	"@type": "chatTypeBasicGroup";
	/** Basic group identifier */
	basic_group_id: number;
};

/**
 * A supergroup or channel (with unlimited members)
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_type_supergroup.html
 */
export type ChatTypeSupergroup = {
	"@type": "chatTypeSupergroup";
	/** Supergroup or channel identifier */
	supergroup_id: number;
	/** True, if the supergroup is a channel */
	is_channel: boolean;
};

/**
 * A secret chat with a user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_type_secret.html
 */
export type ChatTypeSecret = {
	"@type": "chatTypeSecret";
	/** Secret chat identifier */
	secret_chat_id: number;
	/** User identifier of the other user in the secret chat */
	user_id: number;
};

/**
 * Represents an icon for a chat folder
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_folder_icon.html
 */
export type ChatFolderIcon = {
	"@type": "chatFolderIcon";
	/** The chosen icon name for short folder representation; one of "All", "Unread", "Unmuted", "Bots", "Channels", "Groups", "Private", "Custom", "Setup", "Cat", "Crown", "Favorite", "Flower", "Game", "Home", "Love", "Mask", "Party", "Sport", "Study", "Trade", "Travel", "Work", "Airplane", "Book", "Light", "Like", "Money", "Note", "Palette" */
	name: string;
};

/**
 * Describes name of a chat folder
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_folder_name.html
 */
export type ChatFolderName = {
	"@type": "chatFolderName";
	/** The text of the chat folder name; 1-12 characters without line feeds. May contain only CustomEmoji entities */
	text: FormattedText;
	/** True, if custom emoji in the name must be animated */
	animate_custom_emoji: boolean;
};

/**
 * Represents a folder for user chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_folder.html
 */
export type ChatFolder = {
	"@type": "chatFolder";
	/** The name of the folder */
	name: ChatFolderName;
	/** The chosen icon for the chat folder; may be null. If null, use getChatFolderDefaultIconName to get default icon name for the folder */
	icon?: ChatFolderIcon;
	/** The identifier of the chosen color for the chat folder icon; from -1 to 6. If -1, then color is disabled. Can't be changed if folder tags are disabled or the current user doesn't have Telegram Premium subscription */
	color_id: number;
	/** True, if at least one link has been created for the folder */
	is_shareable: boolean;
	/** The chat identifiers of pinned chats in the folder. There can be up to getOption("chat_folder_chosen_chat_count_max") pinned and always included non-secret chats and the same number of secret chats, but the limit can be increased with Telegram Premium */
	pinned_chat_ids: number[];
	/** The chat identifiers of always included chats in the folder. There can be up to getOption("chat_folder_chosen_chat_count_max") pinned and always included non-secret chats and the same number of secret chats, but the limit can be increased with Telegram Premium */
	included_chat_ids: number[];
	/** The chat identifiers of always excluded chats in the folder. There can be up to getOption("chat_folder_chosen_chat_count_max") always excluded non-secret chats and the same number of secret chats, but the limit can be increased with Telegram Premium */
	excluded_chat_ids: number[];
	/** True, if muted chats need to be excluded */
	exclude_muted: boolean;
	/** True, if read chats need to be excluded */
	exclude_read: boolean;
	/** True, if archived chats need to be excluded */
	exclude_archived: boolean;
	/** True, if contacts need to be included */
	include_contacts: boolean;
	/** True, if non-contact users need to be included */
	include_non_contacts: boolean;
	/** True, if bots need to be included */
	include_bots: boolean;
	/** True, if basic groups and supergroups need to be included */
	include_groups: boolean;
	/** True, if channels need to be included */
	include_channels: boolean;
};

/**
 * Contains basic information about a chat folder
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_folder_info.html
 */
export type ChatFolderInfo = {
	"@type": "chatFolderInfo";
	/** Unique chat folder identifier */
	id: number;
	/** The name of the folder */
	name: ChatFolderName;
	/** The chosen or default icon for the chat folder */
	icon: ChatFolderIcon;
	/** The identifier of the chosen color for the chat folder icon; from -1 to 6. If -1, then color is disabled */
	color_id: number;
	/** True, if at least one link has been created for the folder */
	is_shareable: boolean;
	/** True, if the chat folder has invite links created by the current user */
	has_my_invite_links: boolean;
};

/**
 * Contains a chat folder invite link
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_folder_invite_link.html
 */
export type ChatFolderInviteLink = {
	"@type": "chatFolderInviteLink";
	/** The chat folder invite link */
	invite_link: string;
	/** Name of the link */
	name: string;
	/** Identifiers of chats, included in the link */
	chat_ids: number[];
};

/**
 * Represents a list of chat folder invite links
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_folder_invite_links.html
 */
export type ChatFolderInviteLinks = {
	"@type": "chatFolderInviteLinks";
	/** List of the invite links */
	invite_links: ChatFolderInviteLink[];
};

/**
 * Contains information about an invite link to a chat folder
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_folder_invite_link_info.html
 */
export type ChatFolderInviteLinkInfo = {
	"@type": "chatFolderInviteLinkInfo";
	/** Basic information about the chat folder; chat folder identifier will be 0 if the user didn't have the chat folder yet */
	chat_folder_info: ChatFolderInfo;
	/** Identifiers of the chats from the link, which aren't added to the folder yet */
	missing_chat_ids: number[];
	/** Identifiers of the chats from the link, which are added to the folder already */
	added_chat_ids: number[];
};

/**
 * Describes a recommended chat folder
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1recommended_chat_folder.html
 */
export type RecommendedChatFolder = {
	"@type": "recommendedChatFolder";
	/** The chat folder */
	folder: ChatFolder;
	/** Chat folder description */
	description: string;
};

/**
 * Contains a list of recommended chat folders
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1recommended_chat_folders.html
 */
export type RecommendedChatFolders = {
	"@type": "recommendedChatFolders";
	/** List of recommended chat folders */
	chat_folders: RecommendedChatFolder[];
};

/**
 * Contains settings for automatic moving of chats to and from the Archive chat lists
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1archive_chat_list_settings.html
 */
export type ArchiveChatListSettings = {
	"@type": "archiveChatListSettings";
	/** True, if new chats from non-contacts will be automatically archived and muted. Can be set to true only if the option "can_archive_and_mute_new_chats_from_unknown_users" is true */
	archive_and_mute_new_chats_from_unknown_users: boolean;
	/** True, if unmuted chats will be kept in the Archive chat list when they get a new message */
	keep_unmuted_chats_archived: boolean;
	/** True, if unmuted chats, that are always included or pinned in a folder, will be kept in the Archive chat list when they get a new message. Ignored if keep_unmuted_chats_archived == true */
	keep_chats_from_folders_archived: boolean;
};

/**
 * A main list of chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_list_main.html
 */
export type ChatListMain = {
	"@type": "chatListMain";
};

/**
 * A list of chats usually located at the top of the main chat list. Unmuted chats are automatically moved from the Archive to the Main chat list when a new message arrives
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_list_archive.html
 */
export type ChatListArchive = {
	"@type": "chatListArchive";
};

/**
 * A list of chats added to a chat folder
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_list_folder.html
 */
export type ChatListFolder = {
	"@type": "chatListFolder";
	/** Chat folder identifier */
	chat_folder_id: number;
};

/**
 * Contains a list of chat lists
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_lists.html
 */
export type ChatLists = {
	"@type": "chatLists";
	/** List of chat lists */
	chat_lists: ChatList[];
};

/**
 * The chat is sponsored by the user's MTProxy server
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_source_mtproto_proxy.html
 */
export type ChatSourceMtprotoProxy = {
	"@type": "chatSourceMtprotoProxy";
};

/**
 * The chat contains a public service announcement
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_source_public_service_announcement.html
 */
export type ChatSourcePublicServiceAnnouncement = {
	"@type": "chatSourcePublicServiceAnnouncement";
	/** The type of the announcement */
	type: string;
	/** The text of the announcement */
	text: string;
};

/**
 * Describes a position of a chat in a chat list
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_position.html
 */
export type ChatPosition = {
	"@type": "chatPosition";
	/** The chat list */
	list: ChatList;
	/** A parameter used to determine order of the chat in the chat list. Chats must be sorted by the pair (order, chat.id) in descending order */
	order: string;
	/** True, if the chat is pinned in the chat list */
	is_pinned: boolean;
	/** Source of the chat in the chat list; may be null */
	source?: ChatSource;
};

/**
 * All reactions are available in the chat, excluding the paid reaction and custom reactions in channel chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_available_reactions_all.html
 */
export type ChatAvailableReactionsAll = {
	"@type": "chatAvailableReactionsAll";
	/** The maximum allowed number of reactions per message; 1-11 */
	max_reaction_count: number;
};

/**
 * Only specific reactions are available in the chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_available_reactions_some.html
 */
export type ChatAvailableReactionsSome = {
	"@type": "chatAvailableReactionsSome";
	/** The list of reactions */
	reactions: ReactionType[];
	/** The maximum allowed number of reactions per message; 1-11 */
	max_reaction_count: number;
};

/**
 * Represents a tag used in Saved Messages or a Saved Messages topic
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1saved_messages_tag.html
 */
export type SavedMessagesTag = {
	"@type": "savedMessagesTag";
	/** The tag */
	tag: ReactionType;
	/** Label of the tag; 0-12 characters. Always empty if the tag is returned for a Saved Messages topic */
	label: string;
	/** Number of times the tag was used; may be 0 if the tag has non-empty label */
	count: number;
};

/**
 * Contains a list of tags used in Saved Messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1saved_messages_tags.html
 */
export type SavedMessagesTags = {
	"@type": "savedMessagesTags";
	/** List of tags */
	tags: SavedMessagesTag[];
};

/**
 * Contains information about a business bot that manages the chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1business_bot_manage_bar.html
 */
export type BusinessBotManageBar = {
	"@type": "businessBotManageBar";
	/** User identifier of the bot */
	bot_user_id: number;
	/** URL to be opened to manage the bot */
	manage_url: string;
	/** True, if the bot is paused. Use toggleBusinessConnectedBotChatIsPaused to change the value of the field */
	is_bot_paused: boolean;
	/** True, if the bot can reply */
	can_bot_reply: boolean;
};

/**
 * Describes a video chat, i.e. a group call bound to a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1video_chat.html
 */
export type VideoChat = {
	"@type": "videoChat";
	/** Group call identifier of an active video chat; 0 if none. Full information about the video chat can be received through the method getGroupCall */
	group_call_id: number;
	/** True, if the video chat has participants */
	has_participants: boolean;
	/** Default group call participant identifier to join the video chat; may be null */
	default_participant_id?: MessageSender;
};

/**
 * A chat. (Can be a private chat, basic group, supergroup, or secret chat)
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat.html
 */
export type Chat = {
	"@type": "chat";
	/** Chat unique identifier */
	id: number;
	/** Type of the chat */
	type: ChatType;
	/** Chat title */
	title: string;
	/** Chat photo; may be null */
	photo?: ChatPhotoInfo;
	/** Identifier of the accent color for message sender name, and backgrounds of chat photo, reply header, and link preview */
	accent_color_id: number;
	/** Identifier of a custom emoji to be shown on the reply header and link preview background for messages sent by the chat; 0 if none */
	background_custom_emoji_id: string;
	/** Identifier of the profile accent color for the chat's profile; -1 if none */
	profile_accent_color_id: number;
	/** Identifier of a custom emoji to be shown on the background of the chat's profile; 0 if none */
	profile_background_custom_emoji_id: string;
	/** Actions that non-administrator chat members are allowed to take in the chat */
	permissions: ChatPermissions;
	/** Last message in the chat; may be null if none or unknown */
	last_message?: Message;
	/** Positions of the chat in chat lists */
	positions: ChatPosition[];
	/** Chat lists to which the chat belongs. A chat can have a non-zero position in a chat list even it doesn't belong to the chat list and have no position in a chat list even it belongs to the chat list */
	chat_lists: ChatList[];
	/** Identifier of a user or chat that is selected to send messages in the chat; may be null if the user can't change message sender */
	message_sender_id?: MessageSender;
	/** Block list to which the chat is added; may be null if none */
	block_list?: BlockList;
	/** True, if chat content can't be saved locally, forwarded, or copied */
	has_protected_content: boolean;
	/** True, if translation of all messages in the chat must be suggested to the user */
	is_translatable: boolean;
	/** True, if the chat is marked as unread */
	is_marked_as_unread: boolean;
	/** True, if the chat is a forum supergroup that must be shown in the "View as topics" mode, or Saved Messages chat that must be shown in the "View as chats" */
	view_as_topics: boolean;
	/** True, if the chat has scheduled messages */
	has_scheduled_messages: boolean;
	/** True, if the chat messages can be deleted only for the current user while other users will continue to see the messages */
	can_be_deleted_only_for_self: boolean;
	/** True, if the chat messages can be deleted for all users */
	can_be_deleted_for_all_users: boolean;
	/** True, if the chat can be reported to Telegram moderators through reportChat or reportChatPhoto */
	can_be_reported: boolean;
	/** Default value of the disable_notification parameter, used when a message is sent to the chat */
	default_disable_notification: boolean;
	/** Number of unread messages in the chat */
	unread_count: number;
	/** Identifier of the last read incoming message */
	last_read_inbox_message_id: number;
	/** Identifier of the last read outgoing message */
	last_read_outbox_message_id: number;
	/** Number of unread messages with a mention/reply in the chat */
	unread_mention_count: number;
	/** Number of messages with unread reactions in the chat */
	unread_reaction_count: number;
	/** Notification settings for the chat */
	notification_settings: ChatNotificationSettings;
	/** Types of reaction, available in the chat */
	available_reactions: ChatAvailableReactions;
	/** Current message auto-delete or self-destruct timer setting for the chat, in seconds; 0 if disabled. Self-destruct timer in secret chats starts after the message or its content is viewed. Auto-delete timer in other chats starts from the send date */
	message_auto_delete_time: number;
	/** Emoji status to be shown along with chat title; may be null */
	emoji_status?: EmojiStatus;
	/** Background set for the chat; may be null if none */
	background?: ChatBackground;
	/** If non-empty, name of a theme, set for the chat */
	theme_name?: string;
	/** Information about actions which must be possible to do through the chat action bar; may be null if none */
	action_bar?: ChatActionBar;
	/** Information about bar for managing a business bot in the chat; may be null if none */
	business_bot_manage_bar?: BusinessBotManageBar;
	/** Information about video chat of the chat */
	video_chat: VideoChat;
	/** Information about pending join requests; may be null if none */
	pending_join_requests?: ChatJoinRequestsInfo;
	/** Identifier of the message from which reply markup needs to be used; 0 if there is no default custom reply markup in the chat */
	reply_markup_message_id: number;
	/** A draft of a message in the chat; may be null if none */
	draft_message?: DraftMessage;
	/** Application-specific data associated with the chat. (For example, the chat scroll position or local chat notification settings can be stored here.) Persistent if the message database is used */
	client_data: string;
};

/**
 * Represents a list of chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chats.html
 */
export type Chats = {
	"@type": "chats";
	/** Approximate total number of chats found */
	total_count: number;
	/** List of chat identifiers */
	chat_ids: number[];
};

/**
 * Contains information about a user that has failed to be added to a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1failed_to_add_member.html
 */
export type FailedToAddMember = {
	"@type": "failedToAddMember";
	/** User identifier */
	user_id: number;
	/** True, if subscription to Telegram Premium would have allowed to add the user to the chat */
	premium_would_allow_invite: boolean;
	/** True, if subscription to Telegram Premium is required to send the user chat invite link */
	premium_required_to_send_messages: boolean;
};

/**
 * Represents a list of users that has failed to be added to a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1failed_to_add_members.html
 */
export type FailedToAddMembers = {
	"@type": "failedToAddMembers";
	/** Information about users that weren't added to the chat */
	failed_to_add_members: FailedToAddMember[];
};

/**
 * Contains information about a newly created basic group chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1created_basic_group_chat.html
 */
export type CreatedBasicGroupChat = {
	"@type": "createdBasicGroupChat";
	/** Chat identifier */
	chat_id: number;
	/** Information about failed to add members */
	failed_to_add_members: FailedToAddMembers;
};

/**
 * The chat is public, because it has an active username
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1public_chat_type_has_username.html
 */
export type PublicChatTypeHasUsername = {
	"@type": "publicChatTypeHasUsername";
};

/**
 * The chat is public, because it is a location-based supergroup
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1public_chat_type_is_location_based.html
 */
export type PublicChatTypeIsLocationBased = {
	"@type": "publicChatTypeIsLocationBased";
};

/**
 * Contains basic information about another user that started a chat with the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1account_info.html
 */
export type AccountInfo = {
	"@type": "accountInfo";
	/** Month when the user was registered in Telegram; 0-12; may be 0 if unknown */
	registration_month: number;
	/** Year when the user was registered in Telegram; 0-9999; may be 0 if unknown */
	registration_year: number;
	/** A two-letter ISO 3166-1 alpha-2 country code based on the phone number of the user; may be empty if unknown */
	phone_number_country_code?: string;
	/** Point in time (Unix timestamp) when the user changed name last time; 0 if unknown */
	last_name_change_date: number;
	/** Point in time (Unix timestamp) when the user changed photo last time; 0 if unknown */
	last_photo_change_date: number;
};

/**
 * The chat can be reported as spam using the method reportChat with an empty option_id and message_ids. If the chat is a private chat with a user with an emoji status, then a notice about emoji status usage must be shown
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_action_bar_report_spam.html
 */
export type ChatActionBarReportSpam = {
	"@type": "chatActionBarReportSpam";
	/** If true, the chat was automatically archived and can be moved back to the main chat list using addChatToList simultaneously with setting chat notification settings to default using setChatNotificationSettings */
	can_unarchive: boolean;
};

/**
 * The chat is a recently created group chat to which new members can be invited
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_action_bar_invite_members.html
 */
export type ChatActionBarInviteMembers = {
	"@type": "chatActionBarInviteMembers";
};

/**
 * The chat is a private or secret chat, which can be reported using the method reportChat, or the other user can be blocked using the method setMessageSenderBlockList, or the other user can be added to the contact list using the method addContact. If the chat is a private chat with a user with an emoji status, then a notice about emoji status usage must be shown
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_action_bar_report_add_block.html
 */
export type ChatActionBarReportAddBlock = {
	"@type": "chatActionBarReportAddBlock";
	/** If true, the chat was automatically archived and can be moved back to the main chat list using addChatToList simultaneously with setting chat notification settings to default using setChatNotificationSettings */
	can_unarchive: boolean;
	/** Basic information about the other user in the chat; may be null if unknown */
	account_info?: AccountInfo;
};

/**
 * The chat is a private or secret chat and the other user can be added to the contact list using the method addContact
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_action_bar_add_contact.html
 */
export type ChatActionBarAddContact = {
	"@type": "chatActionBarAddContact";
};

/**
 * The chat is a private or secret chat with a mutual contact and the user's phone number can be shared with the other user using the method sharePhoneNumber
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_action_bar_share_phone_number.html
 */
export type ChatActionBarSharePhoneNumber = {
	"@type": "chatActionBarSharePhoneNumber";
};

/**
 * The chat is a private chat with an administrator of a chat to which the user sent join request
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_action_bar_join_request.html
 */
export type ChatActionBarJoinRequest = {
	"@type": "chatActionBarJoinRequest";
	/** Title of the chat to which the join request was sent */
	title: string;
	/** True, if the join request was sent to a channel chat */
	is_channel: boolean;
	/** Point in time (Unix timestamp) when the join request was sent */
	request_date: number;
};

/**
 * A simple button, with text that must be sent when the button is pressed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1keyboard_button_type_text.html
 */
export type KeyboardButtonTypeText = {
	"@type": "keyboardButtonTypeText";
};

/**
 * A button that sends the user's phone number when pressed; available only in private chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1keyboard_button_type_request_phone_number.html
 */
export type KeyboardButtonTypeRequestPhoneNumber = {
	"@type": "keyboardButtonTypeRequestPhoneNumber";
};

/**
 * A button that sends the user's location when pressed; available only in private chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1keyboard_button_type_request_location.html
 */
export type KeyboardButtonTypeRequestLocation = {
	"@type": "keyboardButtonTypeRequestLocation";
};

/**
 * A button that allows the user to create and send a poll when pressed; available only in private chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1keyboard_button_type_request_poll.html
 */
export type KeyboardButtonTypeRequestPoll = {
	"@type": "keyboardButtonTypeRequestPoll";
	/** If true, only regular polls must be allowed to create */
	force_regular: boolean;
	/** If true, only polls in quiz mode must be allowed to create */
	force_quiz: boolean;
};

/**
 * A button that requests users to be shared by the current user; available only in private chats. Use the method shareUsersWithBot to complete the request
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1keyboard_button_type_request_users.html
 */
export type KeyboardButtonTypeRequestUsers = {
	"@type": "keyboardButtonTypeRequestUsers";
	/** Unique button identifier */
	id: number;
	/** True, if the shared users must or must not be bots */
	restrict_user_is_bot: boolean;
	/** True, if the shared users must be bots; otherwise, the shared users must not be bots. Ignored if restrict_user_is_bot is false */
	user_is_bot: boolean;
	/** True, if the shared users must or must not be Telegram Premium users */
	restrict_user_is_premium: boolean;
	/** True, if the shared users must be Telegram Premium users; otherwise, the shared users must not be Telegram Premium users. Ignored if restrict_user_is_premium is false */
	user_is_premium: boolean;
	/** The maximum number of users to share */
	max_quantity: number;
	/** Pass true to request name of the users; bots only */
	request_name: boolean;
	/** Pass true to request username of the users; bots only */
	request_username: boolean;
	/** Pass true to request photo of the users; bots only */
	request_photo: boolean;
};

/**
 * A button that requests a chat to be shared by the current user; available only in private chats. Use the method shareChatWithBot to complete the request
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1keyboard_button_type_request_chat.html
 */
export type KeyboardButtonTypeRequestChat = {
	"@type": "keyboardButtonTypeRequestChat";
	/** Unique button identifier */
	id: number;
	/** True, if the chat must be a channel; otherwise, a basic group or a supergroup chat is shared */
	chat_is_channel: boolean;
	/** True, if the chat must or must not be a forum supergroup */
	restrict_chat_is_forum: boolean;
	/** True, if the chat must be a forum supergroup; otherwise, the chat must not be a forum supergroup. Ignored if restrict_chat_is_forum is false */
	chat_is_forum: boolean;
	/** True, if the chat must or must not have a username */
	restrict_chat_has_username: boolean;
	/** True, if the chat must have a username; otherwise, the chat must not have a username. Ignored if restrict_chat_has_username is false */
	chat_has_username: boolean;
	/** True, if the chat must be created by the current user */
	chat_is_created: boolean;
	/** Expected user administrator rights in the chat; may be null if they aren't restricted */
	user_administrator_rights?: ChatAdministratorRights;
	/** Expected bot administrator rights in the chat; may be null if they aren't restricted */
	bot_administrator_rights?: ChatAdministratorRights;
	/** True, if the bot must be a member of the chat; for basic group and supergroup chats only */
	bot_is_member: boolean;
	/** Pass true to request title of the chat; bots only */
	request_title: boolean;
	/** Pass true to request username of the chat; bots only */
	request_username: boolean;
	/** Pass true to request photo of the chat; bots only */
	request_photo: boolean;
};

/**
 * A button that opens a Web App by calling getWebAppUrl
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1keyboard_button_type_web_app.html
 */
export type KeyboardButtonTypeWebApp = {
	"@type": "keyboardButtonTypeWebApp";
	/** An HTTP URL to pass to getWebAppUrl */
	url: string;
};

/**
 * Represents a single button in a bot keyboard
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1keyboard_button.html
 */
export type KeyboardButton = {
	"@type": "keyboardButton";
	/** Text of the button */
	text: string;
	/** Type of the button */
	type: KeyboardButtonType;
};

/**
 * A button that opens a specified URL
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1inline_keyboard_button_type_url.html
 */
export type InlineKeyboardButtonTypeUrl = {
	"@type": "inlineKeyboardButtonTypeUrl";
	/** HTTP or tg:// URL to open. If the link is of the type internalLinkTypeWebApp, then the button must be marked as a Web App button */
	url: string;
};

/**
 * A button that opens a specified URL and automatically authorize the current user by calling getLoginUrlInfo
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1inline_keyboard_button_type_login_url.html
 */
export type InlineKeyboardButtonTypeLoginUrl = {
	"@type": "inlineKeyboardButtonTypeLoginUrl";
	/** An HTTP URL to pass to getLoginUrlInfo */
	url: string;
	/** Unique button identifier */
	id: number;
	/** If non-empty, new text of the button in forwarded messages */
	forward_text?: string;
};

/**
 * A button that opens a Web App by calling openWebApp
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1inline_keyboard_button_type_web_app.html
 */
export type InlineKeyboardButtonTypeWebApp = {
	"@type": "inlineKeyboardButtonTypeWebApp";
	/** An HTTP URL to pass to openWebApp */
	url: string;
};

/**
 * A button that sends a callback query to a bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1inline_keyboard_button_type_callback.html
 */
export type InlineKeyboardButtonTypeCallback = {
	"@type": "inlineKeyboardButtonTypeCallback";
	/** Data to be sent to the bot via a callback query */
	data: string;
};

/**
 * A button that asks for the 2-step verification password of the current user and then sends a callback query to a bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1inline_keyboard_button_type_callback_with_password.html
 */
export type InlineKeyboardButtonTypeCallbackWithPassword = {
	"@type": "inlineKeyboardButtonTypeCallbackWithPassword";
	/** Data to be sent to the bot via a callback query */
	data: string;
};

/**
 * A button with a game that sends a callback query to a bot. This button must be in the first column and row of the keyboard and can be attached only to a message with content of the type messageGame
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1inline_keyboard_button_type_callback_game.html
 */
export type InlineKeyboardButtonTypeCallbackGame = {
	"@type": "inlineKeyboardButtonTypeCallbackGame";
};

/**
 * A button that forces an inline query to the bot to be inserted in the input field
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1inline_keyboard_button_type_switch_inline.html
 */
export type InlineKeyboardButtonTypeSwitchInline = {
	"@type": "inlineKeyboardButtonTypeSwitchInline";
	/** Inline query to be sent to the bot */
	query: string;
	/** Target chat from which to send the inline query */
	target_chat: TargetChat;
};

/**
 * A button to buy something. This button must be in the first column and row of the keyboard and can be attached only to a message with content of the type messageInvoice
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1inline_keyboard_button_type_buy.html
 */
export type InlineKeyboardButtonTypeBuy = {
	"@type": "inlineKeyboardButtonTypeBuy";
};

/**
 * A button with a user reference to be handled in the same way as textEntityTypeMentionName entities
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1inline_keyboard_button_type_user.html
 */
export type InlineKeyboardButtonTypeUser = {
	"@type": "inlineKeyboardButtonTypeUser";
	/** User identifier */
	user_id: number;
};

/**
 * A button that copies specified text to clipboard
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1inline_keyboard_button_type_copy_text.html
 */
export type InlineKeyboardButtonTypeCopyText = {
	"@type": "inlineKeyboardButtonTypeCopyText";
	/** The text to copy to clipboard */
	text: string;
};

/**
 * Represents a single button in an inline keyboard
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1inline_keyboard_button.html
 */
export type InlineKeyboardButton = {
	"@type": "inlineKeyboardButton";
	/** Text of the button */
	text: string;
	/** Type of the button */
	type: InlineKeyboardButtonType;
};

/**
 * Instructs application to remove the keyboard once this message has been received. This kind of keyboard can't be received in an incoming message; instead, updateChatReplyMarkup with message_id == 0 will be sent
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1reply_markup_remove_keyboard.html
 */
export type ReplyMarkupRemoveKeyboard = {
	"@type": "replyMarkupRemoveKeyboard";
	/** True, if the keyboard is removed only for the mentioned users or the target user of a reply */
	is_personal: boolean;
};

/**
 * Instructs application to force a reply to this message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1reply_markup_force_reply.html
 */
export type ReplyMarkupForceReply = {
	"@type": "replyMarkupForceReply";
	/** True, if a forced reply must automatically be shown to the current user. For outgoing messages, specify true to show the forced reply only for the mentioned users and for the target user of a reply */
	is_personal: boolean;
	/** If non-empty, the placeholder to be shown in the input field when the reply is active; 0-64 characters */
	input_field_placeholder?: string;
};

/**
 * Contains a custom keyboard layout to quickly reply to bots
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1reply_markup_show_keyboard.html
 */
export type ReplyMarkupShowKeyboard = {
	"@type": "replyMarkupShowKeyboard";
	/** A list of rows of bot keyboard buttons */
	rows: KeyboardButton[][];
	/** True, if the keyboard is expected to always be shown when the ordinary keyboard is hidden */
	is_persistent: boolean;
	/** True, if the application needs to resize the keyboard vertically */
	resize_keyboard: boolean;
	/** True, if the application needs to hide the keyboard after use */
	one_time: boolean;
	/** True, if the keyboard must automatically be shown to the current user. For outgoing messages, specify true to show the keyboard only for the mentioned users and for the target user of a reply */
	is_personal: boolean;
	/** If non-empty, the placeholder to be shown in the input field when the keyboard is active; 0-64 characters */
	input_field_placeholder?: string;
};

/**
 * Contains an inline keyboard layout
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1reply_markup_inline_keyboard.html
 */
export type ReplyMarkupInlineKeyboard = {
	"@type": "replyMarkupInlineKeyboard";
	/** A list of rows of inline keyboard buttons */
	rows: InlineKeyboardButton[][];
};

/**
 * An HTTP URL needs to be open
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1login_url_info_open.html
 */
export type LoginUrlInfoOpen = {
	"@type": "loginUrlInfoOpen";
	/** The URL to open */
	url: string;
	/** True, if there is no need to show an ordinary open URL confirmation */
	skip_confirmation: boolean;
};

/**
 * An authorization confirmation dialog needs to be shown to the user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1login_url_info_request_confirmation.html
 */
export type LoginUrlInfoRequestConfirmation = {
	"@type": "loginUrlInfoRequestConfirmation";
	/** An HTTP URL to be opened */
	url: string;
	/** A domain of the URL */
	domain: string;
	/** User identifier of a bot linked with the website */
	bot_user_id: number;
	/** True, if the user must be asked for the permission to the bot to send them messages */
	request_write_access: boolean;
};

/**
 * Contains parameters of the application theme
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1theme_parameters.html
 */
export type ThemeParameters = {
	"@type": "themeParameters";
	/** A color of the background in the RGB format */
	background_color: number;
	/** A secondary color for the background in the RGB format */
	secondary_background_color: number;
	/** A color of the header background in the RGB format */
	header_background_color: number;
	/** A color of the bottom bar background in the RGB format */
	bottom_bar_background_color: number;
	/** A color of the section background in the RGB format */
	section_background_color: number;
	/** A color of the section separator in the RGB format */
	section_separator_color: number;
	/** A color of text in the RGB format */
	text_color: number;
	/** An accent color of the text in the RGB format */
	accent_text_color: number;
	/** A color of text on the section headers in the RGB format */
	section_header_text_color: number;
	/** A color of the subtitle text in the RGB format */
	subtitle_text_color: number;
	/** A color of the text for destructive actions in the RGB format */
	destructive_text_color: number;
	/** A color of hints in the RGB format */
	hint_color: number;
	/** A color of links in the RGB format */
	link_color: number;
	/** A color of the buttons in the RGB format */
	button_color: number;
	/** A color of text on the buttons in the RGB format */
	button_text_color: number;
};

/**
 * The Web App is opened in the compact mode
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1web_app_open_mode_compact.html
 */
export type WebAppOpenModeCompact = {
	"@type": "webAppOpenModeCompact";
};

/**
 * The Web App is opened in the full-size mode
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1web_app_open_mode_full_size.html
 */
export type WebAppOpenModeFullSize = {
	"@type": "webAppOpenModeFullSize";
};

/**
 * The Web App is opened in the full-screen mode
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1web_app_open_mode_full_screen.html
 */
export type WebAppOpenModeFullScreen = {
	"@type": "webAppOpenModeFullScreen";
};

/**
 * Contains information about a Web App found by its short name
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1found_web_app.html
 */
export type FoundWebApp = {
	"@type": "foundWebApp";
	/** The Web App */
	web_app: WebApp;
	/** True, if the user must be asked for the permission to the bot to send them messages */
	request_write_access: boolean;
	/** True, if there is no need to show an ordinary open URL confirmation before opening the Web App. The field must be ignored and confirmation must be shown anyway if the Web App link was hidden */
	skip_confirmation: boolean;
};

/**
 * Contains information about a Web App
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1web_app_info.html
 */
export type WebAppInfo = {
	"@type": "webAppInfo";
	/** Unique identifier for the Web App launch */
	launch_id: string;
	/** A Web App URL to open in a web view */
	url: string;
};

/**
 * Contains information about the main Web App of a bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1main_web_app.html
 */
export type MainWebApp = {
	"@type": "mainWebApp";
	/** URL of the Web App to open */
	url: string;
	/** The mode in which the Web App must be opened */
	mode: WebAppOpenMode;
};

/**
 * Options to be used when a Web App is opened
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1web_app_open_parameters.html
 */
export type WebAppOpenParameters = {
	"@type": "webAppOpenParameters";
	/** Preferred Web App theme; pass null to use the default theme */
	theme?: ThemeParameters;
	/** Short name of the current application; 0-64 English letters, digits, and underscores */
	application_name: string;
	/** The mode in which the Web App is opened; pass null to open in webAppOpenModeFullSize */
	mode?: WebAppOpenMode;
};

/**
 * Contains information about a message thread
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_thread_info.html
 */
export type MessageThreadInfo = {
	"@type": "messageThreadInfo";
	/** Identifier of the chat to which the message thread belongs */
	chat_id: number;
	/** Message thread identifier, unique within the chat */
	message_thread_id: number;
	/** Information about the message thread; may be null for forum topic threads */
	reply_info?: MessageReplyInfo;
	/** Approximate number of unread messages in the message thread */
	unread_message_count: number;
	/** The messages from which the thread starts. The messages are returned in reverse chronological order (i.e., in order of decreasing message_id) */
	messages: Message[];
	/** A draft of a message in the message thread; may be null if none */
	draft_message?: DraftMessage;
};

/**
 * Topic containing messages sent by the current user of forwarded from an unknown chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1saved_messages_topic_type_my_notes.html
 */
export type SavedMessagesTopicTypeMyNotes = {
	"@type": "savedMessagesTopicTypeMyNotes";
};

/**
 * Topic containing messages forwarded from a user with hidden privacy
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1saved_messages_topic_type_author_hidden.html
 */
export type SavedMessagesTopicTypeAuthorHidden = {
	"@type": "savedMessagesTopicTypeAuthorHidden";
};

/**
 * Topic containing messages forwarded from a specific chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1saved_messages_topic_type_saved_from_chat.html
 */
export type SavedMessagesTopicTypeSavedFromChat = {
	"@type": "savedMessagesTopicTypeSavedFromChat";
	/** Identifier of the chat */
	chat_id: number;
};

/**
 * Contains information about a Saved Messages topic
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1saved_messages_topic.html
 */
export type SavedMessagesTopic = {
	"@type": "savedMessagesTopic";
	/** Unique topic identifier */
	id: number;
	/** Type of the topic */
	type: SavedMessagesTopicType;
	/** True, if the topic is pinned */
	is_pinned: boolean;
	/** A parameter used to determine order of the topic in the topic list. Topics must be sorted by the order in descending order */
	order: string;
	/** Last message in the topic; may be null if none or unknown */
	last_message?: Message;
	/** A draft of a message in the topic; may be null if none */
	draft_message?: DraftMessage;
};

/**
 * Contains information about a topic in a channel direct messages chat administered by the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1direct_messages_chat_topic.html
 */
export type DirectMessagesChatTopic = {
	"@type": "directMessagesChatTopic";
	/** Identifier of the chat to which the topic belongs */
	chat_id: number;
	/** Unique topic identifier */
	id: number;
	/** Identifier of the user or chat that sends the messages to the topic */
	sender_id: MessageSender;
	/** A parameter used to determine order of the topic in the topic list. Topics must be sorted by the order in descending order */
	order: string;
	/** True, if the forum topic is marked as unread */
	is_marked_as_unread: boolean;
	/** Number of unread messages in the chat */
	unread_count: number;
	/** Identifier of the last read incoming message */
	last_read_inbox_message_id: number;
	/** Identifier of the last read outgoing message */
	last_read_outbox_message_id: number;
	/** Number of messages with unread reactions in the chat */
	unread_reaction_count: number;
	/** Last message in the topic; may be null if none or unknown */
	last_message?: Message;
	/** A draft of a message in the topic; may be null if none */
	draft_message?: DraftMessage;
};

/**
 * Describes a forum topic icon
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1forum_topic_icon.html
 */
export type ForumTopicIcon = {
	"@type": "forumTopicIcon";
	/** Color of the topic icon in RGB format */
	color: number;
	/** Unique identifier of the custom emoji shown on the topic icon; 0 if none */
	custom_emoji_id: string;
};

/**
 * Contains basic information about a forum topic
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1forum_topic_info.html
 */
export type ForumTopicInfo = {
	"@type": "forumTopicInfo";
	/** Identifier of the forum chat to which the topic belongs */
	chat_id: number;
	/** Forum topic identifier of the topic */
	forum_topic_id: number;
	/** Message thread identifier of the topic */
	message_thread_id: number;
	/** Name of the topic */
	name: string;
	/** Icon of the topic */
	icon: ForumTopicIcon;
	/** Point in time (Unix timestamp) when the topic was created */
	creation_date: number;
	/** Identifier of the creator of the topic */
	creator_id: MessageSender;
	/** True, if the topic is the General topic list */
	is_general: boolean;
	/** True, if the topic was created by the current user */
	is_outgoing: boolean;
	/** True, if the topic is closed */
	is_closed: boolean;
	/** True, if the topic is hidden above the topic list and closed; for General topic only */
	is_hidden: boolean;
};

/**
 * Describes a forum topic
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1forum_topic.html
 */
export type ForumTopic = {
	"@type": "forumTopic";
	/** Basic information about the topic */
	info: ForumTopicInfo;
	/** Last message in the topic; may be null if unknown */
	last_message?: Message;
	/** A parameter used to determine order of the topic in the topic list. Topics must be sorted by the order in descending order */
	order: string;
	/** True, if the topic is pinned in the topic list */
	is_pinned: boolean;
	/** Number of unread messages in the topic */
	unread_count: number;
	/** Identifier of the last read incoming message */
	last_read_inbox_message_id: number;
	/** Identifier of the last read outgoing message */
	last_read_outbox_message_id: number;
	/** Number of unread messages with a mention/reply in the topic */
	unread_mention_count: number;
	/** Number of messages with unread reactions in the topic */
	unread_reaction_count: number;
	/** Notification settings for the topic */
	notification_settings: ChatNotificationSettings;
	/** A draft of a message in the topic; may be null if none */
	draft_message?: DraftMessage;
};

/**
 * Describes a list of forum topics
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1forum_topics.html
 */
export type ForumTopics = {
	"@type": "forumTopics";
	/** Approximate total number of forum topics found */
	total_count: number;
	/** List of forum topics */
	topics: ForumTopic[];
	/** Offset date for the next getForumTopics request */
	next_offset_date: number;
	/** Offset message identifier for the next getForumTopics request */
	next_offset_message_id: number;
	/** Offset message thread identifier for the next getForumTopics request */
	next_offset_message_thread_id: number;
};

/**
 * Options to be used for generation of a link preview
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_options.html
 */
export type LinkPreviewOptions = {
	"@type": "linkPreviewOptions";
	/** True, if link preview must be disabled */
	is_disabled: boolean;
	/** URL to use for link preview. If empty, then the first URL found in the message text will be used */
	url: string;
	/** True, if shown media preview must be small; ignored in secret chats or if the URL isn't explicitly specified */
	force_small_media: boolean;
	/** True, if shown media preview must be large; ignored in secret chats or if the URL isn't explicitly specified */
	force_large_media: boolean;
	/** True, if link preview must be shown above message text; otherwise, the link preview will be shown below the message text; ignored in secret chats */
	show_above_text: boolean;
};

/**
 * Contains information about a user shared with a bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1shared_user.html
 */
export type SharedUser = {
	"@type": "sharedUser";
	/** User identifier */
	user_id: number;
	/** First name of the user; for bots only */
	first_name: string;
	/** Last name of the user; for bots only */
	last_name: string;
	/** Username of the user; for bots only */
	username: string;
	/** Profile photo of the user; for bots only; may be null */
	photo?: Photo;
};

/**
 * Contains information about a chat shared with a bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1shared_chat.html
 */
export type SharedChat = {
	"@type": "sharedChat";
	/** Chat identifier */
	chat_id: number;
	/** Title of the chat; for bots only */
	title: string;
	/** Username of the chat; for bots only */
	username: string;
	/** Photo of the chat; for bots only; may be null */
	photo?: Photo;
};

/**
 * Describes theme settings
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1theme_settings.html
 */
export type ThemeSettings = {
	"@type": "themeSettings";
	/** Theme accent color in ARGB format */
	accent_color: number;
	/** The background to be used in chats; may be null */
	background?: Background;
	/** The fill to be used as a background for outgoing messages */
	outgoing_message_fill: BackgroundFill;
	/** If true, the freeform gradient fill needs to be animated on every sent message */
	animate_outgoing_message_fill: boolean;
	/** Accent color of outgoing messages in ARGB format */
	outgoing_message_accent_color: number;
};

/**
 * A plain text
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1rich_text_plain.html
 */
export type RichTextPlain = {
	"@type": "richTextPlain";
	/** Text */
	text: string;
};

/**
 * A bold rich text
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1rich_text_bold.html
 */
export type RichTextBold = {
	"@type": "richTextBold";
	/** Text */
	text: RichText;
};

/**
 * An italicized rich text
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1rich_text_italic.html
 */
export type RichTextItalic = {
	"@type": "richTextItalic";
	/** Text */
	text: RichText;
};

/**
 * An underlined rich text
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1rich_text_underline.html
 */
export type RichTextUnderline = {
	"@type": "richTextUnderline";
	/** Text */
	text: RichText;
};

/**
 * A strikethrough rich text
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1rich_text_strikethrough.html
 */
export type RichTextStrikethrough = {
	"@type": "richTextStrikethrough";
	/** Text */
	text: RichText;
};

/**
 * A fixed-width rich text
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1rich_text_fixed.html
 */
export type RichTextFixed = {
	"@type": "richTextFixed";
	/** Text */
	text: RichText;
};

/**
 * A rich text URL link
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1rich_text_url.html
 */
export type RichTextUrl = {
	"@type": "richTextUrl";
	/** Text */
	text: RichText;
	/** URL */
	url: string;
	/** True, if the URL has cached instant view server-side */
	is_cached: boolean;
};

/**
 * A rich text email link
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1rich_text_email_address.html
 */
export type RichTextEmailAddress = {
	"@type": "richTextEmailAddress";
	/** Text */
	text: RichText;
	/** Email address */
	email_address: string;
};

/**
 * A subscript rich text
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1rich_text_subscript.html
 */
export type RichTextSubscript = {
	"@type": "richTextSubscript";
	/** Text */
	text: RichText;
};

/**
 * A superscript rich text
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1rich_text_superscript.html
 */
export type RichTextSuperscript = {
	"@type": "richTextSuperscript";
	/** Text */
	text: RichText;
};

/**
 * A marked rich text
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1rich_text_marked.html
 */
export type RichTextMarked = {
	"@type": "richTextMarked";
	/** Text */
	text: RichText;
};

/**
 * A rich text phone number
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1rich_text_phone_number.html
 */
export type RichTextPhoneNumber = {
	"@type": "richTextPhoneNumber";
	/** Text */
	text: RichText;
	/** Phone number */
	phone_number: string;
};

/**
 * A small image inside the text
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1rich_text_icon.html
 */
export type RichTextIcon = {
	"@type": "richTextIcon";
	/** The image represented as a document. The image can be in GIF, JPEG or PNG format */
	document: Document;
	/** Width of a bounding box in which the image must be shown; 0 if unknown */
	width: number;
	/** Height of a bounding box in which the image must be shown; 0 if unknown */
	height: number;
};

/**
 * A reference to a richTexts object on the same page
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1rich_text_reference.html
 */
export type RichTextReference = {
	"@type": "richTextReference";
	/** The text */
	text: RichText;
	/** The name of a richTextAnchor object, which is the first element of the target richTexts object */
	anchor_name: string;
	/** An HTTP URL, opening the reference */
	url: string;
};

/**
 * An anchor
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1rich_text_anchor.html
 */
export type RichTextAnchor = {
	"@type": "richTextAnchor";
	/** Anchor name */
	name: string;
};

/**
 * A link to an anchor on the same page
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1rich_text_anchor_link.html
 */
export type RichTextAnchorLink = {
	"@type": "richTextAnchorLink";
	/** The link text */
	text: RichText;
	/** The anchor name. If the name is empty, the link must bring back to top */
	anchor_name: string;
	/** An HTTP URL, opening the anchor */
	url: string;
};

/**
 * A concatenation of rich texts
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1rich_texts.html
 */
export type RichTexts = {
	"@type": "richTexts";
	/** Texts */
	texts: RichText[];
};

/**
 * Contains a caption of another block
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_caption.html
 */
export type PageBlockCaption = {
	"@type": "pageBlockCaption";
	/** Content of the caption */
	text: RichText;
	/** Block credit (like HTML tag <cite>) */
	credit: RichText;
};

/**
 * Describes an item of a list page block
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_list_item.html
 */
export type PageBlockListItem = {
	"@type": "pageBlockListItem";
	/** Item label */
	label: string;
	/** Item blocks */
	page_blocks: PageBlock[];
};

/**
 * The content must be left-aligned
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_horizontal_alignment_left.html
 */
export type PageBlockHorizontalAlignmentLeft = {
	"@type": "pageBlockHorizontalAlignmentLeft";
};

/**
 * The content must be center-aligned
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_horizontal_alignment_center.html
 */
export type PageBlockHorizontalAlignmentCenter = {
	"@type": "pageBlockHorizontalAlignmentCenter";
};

/**
 * The content must be right-aligned
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_horizontal_alignment_right.html
 */
export type PageBlockHorizontalAlignmentRight = {
	"@type": "pageBlockHorizontalAlignmentRight";
};

/**
 * The content must be top-aligned
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_vertical_alignment_top.html
 */
export type PageBlockVerticalAlignmentTop = {
	"@type": "pageBlockVerticalAlignmentTop";
};

/**
 * The content must be middle-aligned
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_vertical_alignment_middle.html
 */
export type PageBlockVerticalAlignmentMiddle = {
	"@type": "pageBlockVerticalAlignmentMiddle";
};

/**
 * The content must be bottom-aligned
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_vertical_alignment_bottom.html
 */
export type PageBlockVerticalAlignmentBottom = {
	"@type": "pageBlockVerticalAlignmentBottom";
};

/**
 * Represents a cell of a table
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_table_cell.html
 */
export type PageBlockTableCell = {
	"@type": "pageBlockTableCell";
	/** Cell text; may be null. If the text is null, then the cell must be invisible */
	text?: RichText;
	/** True, if it is a header cell */
	is_header: boolean;
	/** The number of columns the cell spans */
	colspan: number;
	/** The number of rows the cell spans */
	rowspan: number;
	/** Horizontal cell content alignment */
	align: PageBlockHorizontalAlignment;
	/** Vertical cell content alignment */
	valign: PageBlockVerticalAlignment;
};

/**
 * Contains information about a related article
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_related_article.html
 */
export type PageBlockRelatedArticle = {
	"@type": "pageBlockRelatedArticle";
	/** Related article URL */
	url: string;
	/** Article title; may be empty */
	title?: string;
	/** Article description; may be empty */
	description?: string;
	/** Article photo; may be null */
	photo?: Photo;
	/** Article author; may be empty */
	author?: string;
	/** Point in time (Unix timestamp) when the article was published; 0 if unknown */
	publish_date: number;
};

/**
 * The title of a page
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_title.html
 */
export type PageBlockTitle = {
	"@type": "pageBlockTitle";
	/** Title */
	title: RichText;
};

/**
 * The subtitle of a page
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_subtitle.html
 */
export type PageBlockSubtitle = {
	"@type": "pageBlockSubtitle";
	/** Subtitle */
	subtitle: RichText;
};

/**
 * The author and publishing date of a page
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_author_date.html
 */
export type PageBlockAuthorDate = {
	"@type": "pageBlockAuthorDate";
	/** Author */
	author: RichText;
	/** Point in time (Unix timestamp) when the article was published; 0 if unknown */
	publish_date: number;
};

/**
 * A header
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_header.html
 */
export type PageBlockHeader = {
	"@type": "pageBlockHeader";
	/** Header */
	header: RichText;
};

/**
 * A subheader
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_subheader.html
 */
export type PageBlockSubheader = {
	"@type": "pageBlockSubheader";
	/** Subheader */
	subheader: RichText;
};

/**
 * A kicker
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_kicker.html
 */
export type PageBlockKicker = {
	"@type": "pageBlockKicker";
	/** Kicker */
	kicker: RichText;
};

/**
 * A text paragraph
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_paragraph.html
 */
export type PageBlockParagraph = {
	"@type": "pageBlockParagraph";
	/** Paragraph text */
	text: RichText;
};

/**
 * A preformatted text paragraph
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_preformatted.html
 */
export type PageBlockPreformatted = {
	"@type": "pageBlockPreformatted";
	/** Paragraph text */
	text: RichText;
	/** Programming language for which the text needs to be formatted */
	language: string;
};

/**
 * The footer of a page
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_footer.html
 */
export type PageBlockFooter = {
	"@type": "pageBlockFooter";
	/** Footer */
	footer: RichText;
};

/**
 * An empty block separating a page
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_divider.html
 */
export type PageBlockDivider = {
	"@type": "pageBlockDivider";
};

/**
 * An invisible anchor on a page, which can be used in a URL to open the page from the specified anchor
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_anchor.html
 */
export type PageBlockAnchor = {
	"@type": "pageBlockAnchor";
	/** Name of the anchor */
	name: string;
};

/**
 * A list of data blocks
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_list.html
 */
export type PageBlockList = {
	"@type": "pageBlockList";
	/** The items of the list */
	items: PageBlockListItem[];
};

/**
 * A block quote
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_block_quote.html
 */
export type PageBlockBlockQuote = {
	"@type": "pageBlockBlockQuote";
	/** Quote text */
	text: RichText;
	/** Quote credit */
	credit: RichText;
};

/**
 * A pull quote
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_pull_quote.html
 */
export type PageBlockPullQuote = {
	"@type": "pageBlockPullQuote";
	/** Quote text */
	text: RichText;
	/** Quote credit */
	credit: RichText;
};

/**
 * An animation
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_animation.html
 */
export type PageBlockAnimation = {
	"@type": "pageBlockAnimation";
	/** Animation file; may be null */
	animation?: Animation;
	/** Animation caption */
	caption: PageBlockCaption;
	/** True, if the animation must be played automatically */
	need_autoplay: boolean;
};

/**
 * An audio file
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_audio.html
 */
export type PageBlockAudio = {
	"@type": "pageBlockAudio";
	/** Audio file; may be null */
	audio?: Audio;
	/** Audio file caption */
	caption: PageBlockCaption;
};

/**
 * A photo
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_photo.html
 */
export type PageBlockPhoto = {
	"@type": "pageBlockPhoto";
	/** Photo file; may be null */
	photo?: Photo;
	/** Photo caption */
	caption: PageBlockCaption;
	/** URL that needs to be opened when the photo is clicked */
	url: string;
};

/**
 * A video
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_video.html
 */
export type PageBlockVideo = {
	"@type": "pageBlockVideo";
	/** Video file; may be null */
	video?: Video;
	/** Video caption */
	caption: PageBlockCaption;
	/** True, if the video must be played automatically */
	need_autoplay: boolean;
	/** True, if the video must be looped */
	is_looped: boolean;
};

/**
 * A voice note
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_voice_note.html
 */
export type PageBlockVoiceNote = {
	"@type": "pageBlockVoiceNote";
	/** Voice note; may be null */
	voice_note?: VoiceNote;
	/** Voice note caption */
	caption: PageBlockCaption;
};

/**
 * A page cover
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_cover.html
 */
export type PageBlockCover = {
	"@type": "pageBlockCover";
	/** Cover */
	cover: PageBlock;
};

/**
 * An embedded web page
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_embedded.html
 */
export type PageBlockEmbedded = {
	"@type": "pageBlockEmbedded";
	/** URL of the embedded page, if available */
	url: string;
	/** HTML-markup of the embedded page */
	html: string;
	/** Poster photo, if available; may be null */
	poster_photo?: Photo;
	/** Block width; 0 if unknown */
	width: number;
	/** Block height; 0 if unknown */
	height: number;
	/** Block caption */
	caption: PageBlockCaption;
	/** True, if the block must be full width */
	is_full_width: boolean;
	/** True, if scrolling needs to be allowed */
	allow_scrolling: boolean;
};

/**
 * An embedded post
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_embedded_post.html
 */
export type PageBlockEmbeddedPost = {
	"@type": "pageBlockEmbeddedPost";
	/** URL of the embedded post */
	url: string;
	/** Post author */
	author: string;
	/** Post author photo; may be null */
	author_photo?: Photo;
	/** Point in time (Unix timestamp) when the post was created; 0 if unknown */
	date: number;
	/** Post content */
	page_blocks: PageBlock[];
	/** Post caption */
	caption: PageBlockCaption;
};

/**
 * A collage
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_collage.html
 */
export type PageBlockCollage = {
	"@type": "pageBlockCollage";
	/** Collage item contents */
	page_blocks: PageBlock[];
	/** Block caption */
	caption: PageBlockCaption;
};

/**
 * A slideshow
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_slideshow.html
 */
export type PageBlockSlideshow = {
	"@type": "pageBlockSlideshow";
	/** Slideshow item contents */
	page_blocks: PageBlock[];
	/** Block caption */
	caption: PageBlockCaption;
};

/**
 * A link to a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_chat_link.html
 */
export type PageBlockChatLink = {
	"@type": "pageBlockChatLink";
	/** Chat title */
	title: string;
	/** Chat photo; may be null */
	photo?: ChatPhotoInfo;
	/** Identifier of the accent color for chat title and background of chat photo */
	accent_color_id: number;
	/** Chat username by which all other information about the chat can be resolved */
	username: string;
};

/**
 * A table
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_table.html
 */
export type PageBlockTable = {
	"@type": "pageBlockTable";
	/** Table caption */
	caption: RichText;
	/** Table cells */
	cells: PageBlockTableCell[][];
	/** True, if the table is bordered */
	is_bordered: boolean;
	/** True, if the table is striped */
	is_striped: boolean;
};

/**
 * A collapsible block
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_details.html
 */
export type PageBlockDetails = {
	"@type": "pageBlockDetails";
	/** Always visible heading for the block */
	header: RichText;
	/** Block contents */
	page_blocks: PageBlock[];
	/** True, if the block is open by default */
	is_open: boolean;
};

/**
 * Related articles
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_related_articles.html
 */
export type PageBlockRelatedArticles = {
	"@type": "pageBlockRelatedArticles";
	/** Block header */
	header: RichText;
	/** List of related articles */
	articles: PageBlockRelatedArticle[];
};

/**
 * A map
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1page_block_map.html
 */
export type PageBlockMap = {
	"@type": "pageBlockMap";
	/** Location of the map center */
	location: Location;
	/** Map zoom level */
	zoom: number;
	/** Map width */
	width: number;
	/** Map height */
	height: number;
	/** Block caption */
	caption: PageBlockCaption;
};

/**
 * Describes an instant view page for a web page
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1web_page_instant_view.html
 */
export type WebPageInstantView = {
	"@type": "webPageInstantView";
	/** Content of the instant view page */
	page_blocks: PageBlock[];
	/** Number of the instant view views; 0 if unknown */
	view_count: number;
	/** Version of the instant view; currently, can be 1 or 2 */
	version: number;
	/** True, if the instant view must be shown from right to left */
	is_rtl: boolean;
	/** True, if the instant view contains the full page. A network request might be needed to get the full instant view */
	is_full: boolean;
	/** An internal link to be opened to leave feedback about the instant view */
	feedback_link: InternalLinkType;
};

/**
 * The media is a photo
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_album_media_photo.html
 */
export type LinkPreviewAlbumMediaPhoto = {
	"@type": "linkPreviewAlbumMediaPhoto";
	/** Photo description */
	photo: Photo;
};

/**
 * The media is a video
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_album_media_video.html
 */
export type LinkPreviewAlbumMediaVideo = {
	"@type": "linkPreviewAlbumMediaVideo";
	/** Video description */
	video: Video;
};

/**
 * The link is a link to a media album consisting of photos and videos
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_type_album.html
 */
export type LinkPreviewTypeAlbum = {
	"@type": "linkPreviewTypeAlbum";
	/** The list of album media */
	media: LinkPreviewAlbumMedia[];
	/** Album caption */
	caption: string;
};

/**
 * The link is a link to an animation
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_type_animation.html
 */
export type LinkPreviewTypeAnimation = {
	"@type": "linkPreviewTypeAnimation";
	/** The animation */
	animation: Animation;
};

/**
 * The link is a link to an app at App Store or Google Play
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_type_app.html
 */
export type LinkPreviewTypeApp = {
	"@type": "linkPreviewTypeApp";
	/** Photo for the app */
	photo: Photo;
};

/**
 * The link is a link to a web site
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_type_article.html
 */
export type LinkPreviewTypeArticle = {
	"@type": "linkPreviewTypeArticle";
	/** Article's main photo; may be null */
	photo?: Photo;
};

/**
 * The link is a link to an audio
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_type_audio.html
 */
export type LinkPreviewTypeAudio = {
	"@type": "linkPreviewTypeAudio";
	/** The audio description */
	audio: Audio;
};

/**
 * The link is a link to a background. Link preview title and description are available only for filled backgrounds
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_type_background.html
 */
export type LinkPreviewTypeBackground = {
	"@type": "linkPreviewTypeBackground";
	/** Document with the background; may be null for filled backgrounds */
	document?: Document;
	/** Type of the background; may be null if unknown */
	background_type?: BackgroundType;
};

/**
 * The link is a link to boost a channel chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_type_channel_boost.html
 */
export type LinkPreviewTypeChannelBoost = {
	"@type": "linkPreviewTypeChannelBoost";
	/** Photo of the chat; may be null */
	photo?: ChatPhoto;
};

/**
 * The link is a link to a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_type_chat.html
 */
export type LinkPreviewTypeChat = {
	"@type": "linkPreviewTypeChat";
	/** Type of the chat */
	type: InviteLinkChatType;
	/** Photo of the chat; may be null */
	photo?: ChatPhoto;
	/** True, if the link only creates join request */
	creates_join_request: boolean;
};

/**
 * The link is a link to a general file
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_type_document.html
 */
export type LinkPreviewTypeDocument = {
	"@type": "linkPreviewTypeDocument";
	/** The document description */
	document: Document;
};

/**
 * The link is a link to an animation player
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_type_embedded_animation_player.html
 */
export type LinkPreviewTypeEmbeddedAnimationPlayer = {
	"@type": "linkPreviewTypeEmbeddedAnimationPlayer";
	/** URL of the external animation player */
	url: string;
	/** Thumbnail of the animation; may be null if unknown */
	thumbnail?: Photo;
	/** Duration of the animation, in seconds */
	duration: number;
	/** Expected width of the embedded player */
	width: number;
	/** Expected height of the embedded player */
	height: number;
};

/**
 * The link is a link to an audio player
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_type_embedded_audio_player.html
 */
export type LinkPreviewTypeEmbeddedAudioPlayer = {
	"@type": "linkPreviewTypeEmbeddedAudioPlayer";
	/** URL of the external audio player */
	url: string;
	/** Thumbnail of the audio; may be null if unknown */
	thumbnail?: Photo;
	/** Duration of the audio, in seconds */
	duration: number;
	/** Expected width of the embedded player */
	width: number;
	/** Expected height of the embedded player */
	height: number;
};

/**
 * The link is a link to a video player
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_type_embedded_video_player.html
 */
export type LinkPreviewTypeEmbeddedVideoPlayer = {
	"@type": "linkPreviewTypeEmbeddedVideoPlayer";
	/** URL of the external video player */
	url: string;
	/** Thumbnail of the video; may be null if unknown */
	thumbnail?: Photo;
	/** Duration of the video, in seconds */
	duration: number;
	/** Expected width of the embedded player */
	width: number;
	/** Expected height of the embedded player */
	height: number;
};

/**
 * The link is a link to an audio file
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_type_external_audio.html
 */
export type LinkPreviewTypeExternalAudio = {
	"@type": "linkPreviewTypeExternalAudio";
	/** URL of the audio file */
	url: string;
	/** MIME type of the audio file */
	mime_type: string;
	/** Duration of the audio, in seconds; 0 if unknown */
	duration: number;
};

/**
 * The link is a link to a video file
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_type_external_video.html
 */
export type LinkPreviewTypeExternalVideo = {
	"@type": "linkPreviewTypeExternalVideo";
	/** URL of the video file */
	url: string;
	/** MIME type of the video file */
	mime_type: string;
	/** Expected width of the video preview; 0 if unknown */
	width: number;
	/** Expected height of the video preview; 0 if unknown */
	height: number;
	/** Duration of the video, in seconds; 0 if unknown */
	duration: number;
};

/**
 * The link is a link to a group call that isn't bound to a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_type_group_call.html
 */
export type LinkPreviewTypeGroupCall = {
	"@type": "linkPreviewTypeGroupCall";
};

/**
 * The link is a link to an invoice
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_type_invoice.html
 */
export type LinkPreviewTypeInvoice = {
	"@type": "linkPreviewTypeInvoice";
};

/**
 * The link is a link to a text or a poll Telegram message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_type_message.html
 */
export type LinkPreviewTypeMessage = {
	"@type": "linkPreviewTypeMessage";
};

/**
 * The link is a link to a photo
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_type_photo.html
 */
export type LinkPreviewTypePhoto = {
	"@type": "linkPreviewTypePhoto";
	/** The photo */
	photo: Photo;
};

/**
 * The link is a link to a Telegram Premium gift code
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_type_premium_gift_code.html
 */
export type LinkPreviewTypePremiumGiftCode = {
	"@type": "linkPreviewTypePremiumGiftCode";
};

/**
 * The link is a link to a shareable chat folder
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_type_shareable_chat_folder.html
 */
export type LinkPreviewTypeShareableChatFolder = {
	"@type": "linkPreviewTypeShareableChatFolder";
};

/**
 * The link is a link to a sticker
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_type_sticker.html
 */
export type LinkPreviewTypeSticker = {
	"@type": "linkPreviewTypeSticker";
	/** The sticker. It can be an arbitrary WEBP image and can have dimensions bigger than 512 */
	sticker: Sticker;
};

/**
 * The link is a link to a sticker set
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_type_sticker_set.html
 */
export type LinkPreviewTypeStickerSet = {
	"@type": "linkPreviewTypeStickerSet";
	/** Up to 4 stickers from the sticker set */
	stickers: Sticker[];
};

/**
 * The link is a link to a story. Link preview description is unavailable
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_type_story.html
 */
export type LinkPreviewTypeStory = {
	"@type": "linkPreviewTypeStory";
	/** The identifier of the chat that posted the story */
	story_poster_chat_id: number;
	/** Story identifier */
	story_id: number;
};

/**
 * The link is a link to boost a supergroup chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_type_supergroup_boost.html
 */
export type LinkPreviewTypeSupergroupBoost = {
	"@type": "linkPreviewTypeSupergroupBoost";
	/** Photo of the chat; may be null */
	photo?: ChatPhoto;
};

/**
 * The link is a link to a cloud theme. TDLib has no theme support yet
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_type_theme.html
 */
export type LinkPreviewTypeTheme = {
	"@type": "linkPreviewTypeTheme";
	/** The list of files with theme description */
	documents: Document[];
	/** Settings for the cloud theme; may be null if unknown */
	settings?: ThemeSettings;
};

/**
 * The link preview type is unsupported yet
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_type_unsupported.html
 */
export type LinkPreviewTypeUnsupported = {
	"@type": "linkPreviewTypeUnsupported";
};

/**
 * The link is a link to an upgraded gift
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_type_upgraded_gift.html
 */
export type LinkPreviewTypeUpgradedGift = {
	"@type": "linkPreviewTypeUpgradedGift";
	/** The gift */
	gift: UpgradedGift;
};

/**
 * The link is a link to a user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_type_user.html
 */
export type LinkPreviewTypeUser = {
	"@type": "linkPreviewTypeUser";
	/** Photo of the user; may be null if none */
	photo?: ChatPhoto;
	/** True, if the user is a bot */
	is_bot: boolean;
};

/**
 * The link is a link to a video
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_type_video.html
 */
export type LinkPreviewTypeVideo = {
	"@type": "linkPreviewTypeVideo";
	/** The video description */
	video: Video;
	/** Cover of the video; may be null if none */
	cover?: Photo;
	/** Timestamp from which the video playing must start, in seconds */
	start_timestamp: number;
};

/**
 * The link is a link to a video chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_type_video_chat.html
 */
export type LinkPreviewTypeVideoChat = {
	"@type": "linkPreviewTypeVideoChat";
	/** Photo of the chat with the video chat; may be null if none */
	photo?: ChatPhoto;
	/** True, if the video chat is expected to be a live stream in a channel or a broadcast group */
	is_live_stream: boolean;
};

/**
 * The link is a link to a video note message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_type_video_note.html
 */
export type LinkPreviewTypeVideoNote = {
	"@type": "linkPreviewTypeVideoNote";
	/** The video note */
	video_note: VideoNote;
};

/**
 * The link is a link to a voice note message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_type_voice_note.html
 */
export type LinkPreviewTypeVoiceNote = {
	"@type": "linkPreviewTypeVoiceNote";
	/** The voice note */
	voice_note: VoiceNote;
};

/**
 * The link is a link to a Web App
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview_type_web_app.html
 */
export type LinkPreviewTypeWebApp = {
	"@type": "linkPreviewTypeWebApp";
	/** Web App photo; may be null if none */
	photo?: Photo;
};

/**
 * Describes a link preview
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1link_preview.html
 */
export type LinkPreview = {
	"@type": "linkPreview";
	/** Original URL of the link */
	url: string;
	/** URL to display */
	display_url: string;
	/** Short name of the site (e.g., Google Docs, App Store) */
	site_name: string;
	/** Title of the content */
	title: string;
	/** Description of the content */
	description: FormattedText;
	/** Author of the content */
	author: string;
	/** Type of the link preview */
	type: LinkPreviewType;
	/** True, if size of media in the preview can be changed */
	has_large_media: boolean;
	/** True, if large media preview must be shown; otherwise, the media preview must be shown small and only the first frame must be shown for videos */
	show_large_media: boolean;
	/** True, if media must be shown above link preview description; otherwise, the media must be shown below the description */
	show_media_above_description: boolean;
	/** True, if there is no need to show an ordinary open URL confirmation, when opening the URL from the preview, because the URL is shown in the message text in clear */
	skip_confirmation: boolean;
	/** True, if the link preview must be shown above message text; otherwise, the link preview must be shown below the message text */
	show_above_text: boolean;
	/** Version of instant view (currently, can be 1 or 2) for the web page; 0 if none */
	instant_view_version: number;
};

/**
 * Contains information about a country
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1country_info.html
 */
export type CountryInfo = {
	"@type": "countryInfo";
	/** A two-letter ISO 3166-1 alpha-2 country code */
	country_code: string;
	/** Native name of the country */
	name: string;
	/** English name of the country */
	english_name: string;
	/** True, if the country must be hidden from the list of all countries */
	is_hidden: boolean;
	/** List of country calling codes */
	calling_codes: string[];
};

/**
 * Contains information about countries
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1countries.html
 */
export type Countries = {
	"@type": "countries";
	/** The list of countries */
	countries: CountryInfo[];
};

/**
 * Contains information about a phone number
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1phone_number_info.html
 */
export type PhoneNumberInfo = {
	"@type": "phoneNumberInfo";
	/** Information about the country to which the phone number belongs; may be null */
	country?: CountryInfo;
	/** The part of the phone number denoting country calling code or its part */
	country_calling_code: string;
	/** The phone number without country calling code formatted accordingly to local rules. Expected digits are returned as '-', but even more digits might be entered by the user */
	formatted_phone_number: string;
	/** True, if the phone number was bought at https://fragment.com and isn't tied to a SIM card. Information about the phone number can be received using getCollectibleItemInfo */
	is_anonymous: boolean;
};

/**
 * A username
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1collectible_item_type_username.html
 */
export type CollectibleItemTypeUsername = {
	"@type": "collectibleItemTypeUsername";
	/** The username */
	username: string;
};

/**
 * A phone number
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1collectible_item_type_phone_number.html
 */
export type CollectibleItemTypePhoneNumber = {
	"@type": "collectibleItemTypePhoneNumber";
	/** The phone number */
	phone_number: string;
};

/**
 * Contains information about a collectible item and its last purchase
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1collectible_item_info.html
 */
export type CollectibleItemInfo = {
	"@type": "collectibleItemInfo";
	/** Point in time (Unix timestamp) when the item was purchased */
	purchase_date: number;
	/** Currency for the paid amount */
	currency: string;
	/** The paid amount, in the smallest units of the currency */
	amount: number;
	/** Cryptocurrency used to pay for the item */
	cryptocurrency: string;
	/** The paid amount, in the smallest units of the cryptocurrency */
	cryptocurrency_amount: string;
	/** Individual URL for the item on https://fragment.com */
	url: string;
};

/**
 * Describes an action associated with a bank card number
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1bank_card_action_open_url.html
 */
export type BankCardActionOpenUrl = {
	"@type": "bankCardActionOpenUrl";
	/** Action text */
	text: string;
	/** The URL to be opened */
	url: string;
};

/**
 * Information about a bank card
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1bank_card_info.html
 */
export type BankCardInfo = {
	"@type": "bankCardInfo";
	/** Title of the bank card description */
	title: string;
	/** Actions that can be done with the bank card number */
	actions: BankCardActionOpenUrl[];
};

/**
 * Describes an address
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1address.html
 */
export type Address = {
	"@type": "address";
	/** A two-letter ISO 3166-1 alpha-2 country code */
	country_code: string;
	/** State, if applicable */
	state: string;
	/** City */
	city: string;
	/** First line of the address */
	street_line1: string;
	/** Second line of the address */
	street_line2: string;
	/** Address postal code */
	postal_code: string;
};

/**
 * Describes an address of a location
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1location_address.html
 */
export type LocationAddress = {
	"@type": "locationAddress";
	/** A two-letter ISO 3166-1 alpha-2 country code */
	country_code: string;
	/** State, if applicable; empty if unknown */
	state: string;
	/** City; empty if unknown */
	city: string;
	/** The address; empty if unknown */
	street: string;
};

/**
 * Portion of the price of a product (e.g., "delivery cost", "tax amount")
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1labeled_price_part.html
 */
export type LabeledPricePart = {
	"@type": "labeledPricePart";
	/** Label for this portion of the product price */
	label: string;
	/** Currency amount in the smallest units of the currency */
	amount: number;
};

/**
 * Product invoice
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1invoice.html
 */
export type Invoice = {
	"@type": "invoice";
	/** ISO 4217 currency code */
	currency: string;
	/** A list of objects used to calculate the total price of the product */
	price_parts: LabeledPricePart[];
	/** The number of seconds between consecutive Telegram Star debiting for subscription invoices; 0 if the invoice doesn't create subscription */
	subscription_period: number;
	/** The maximum allowed amount of tip in the smallest units of the currency */
	max_tip_amount: number;
	/** Suggested amounts of tip in the smallest units of the currency */
	suggested_tip_amounts: number[];
	/** An HTTP URL with terms of service for recurring payments. If non-empty, the invoice payment will result in recurring payments and the user must accept the terms of service before allowed to pay */
	recurring_payment_terms_of_service_url?: string;
	/** An HTTP URL with terms of service for non-recurring payments. If non-empty, then the user must accept the terms of service before allowed to pay */
	terms_of_service_url?: string;
	/** True, if the payment is a test payment */
	is_test: boolean;
	/** True, if the user's name is needed for payment */
	need_name: boolean;
	/** True, if the user's phone number is needed for payment */
	need_phone_number: boolean;
	/** True, if the user's email address is needed for payment */
	need_email_address: boolean;
	/** True, if the user's shipping address is needed for payment */
	need_shipping_address: boolean;
	/** True, if the user's phone number will be sent to the provider */
	send_phone_number_to_provider: boolean;
	/** True, if the user's email address will be sent to the provider */
	send_email_address_to_provider: boolean;
	/** True, if the total price depends on the shipping method */
	is_flexible: boolean;
};

/**
 * Order information
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1order_info.html
 */
export type OrderInfo = {
	"@type": "orderInfo";
	/** Name of the user */
	name: string;
	/** Phone number of the user */
	phone_number: string;
	/** Email address of the user */
	email_address: string;
	/** Shipping address for this order; may be null */
	shipping_address?: Address;
};

/**
 * One shipping option
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1shipping_option.html
 */
export type ShippingOption = {
	"@type": "shippingOption";
	/** Shipping option identifier */
	id: string;
	/** Option title */
	title: string;
	/** A list of objects used to calculate the total shipping costs */
	price_parts: LabeledPricePart[];
};

/**
 * Contains information about saved payment credentials
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1saved_credentials.html
 */
export type SavedCredentials = {
	"@type": "savedCredentials";
	/** Unique identifier of the saved credentials */
	id: string;
	/** Title of the saved credentials */
	title: string;
};

/**
 * Applies if a user chooses some previously saved payment credentials. To use their previously saved credentials, the user must have a valid temporary password
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_credentials_saved.html
 */
export type InputCredentialsSaved = {
	"@type": "inputCredentialsSaved";
	/** Identifier of the saved credentials */
	saved_credentials_id: string;
};

/**
 * Applies if a user enters new credentials on a payment provider website
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_credentials_new.html
 */
export type InputCredentialsNew = {
	"@type": "inputCredentialsNew";
	/** JSON-encoded data with the credential identifier from the payment provider */
	data: string;
	/** True, if the credential identifier can be saved on the server side */
	allow_save: boolean;
};

/**
 * Applies if a user enters new credentials using Apple Pay
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_credentials_apple_pay.html
 */
export type InputCredentialsApplePay = {
	"@type": "inputCredentialsApplePay";
	/** JSON-encoded data with the credential identifier */
	data: string;
};

/**
 * Applies if a user enters new credentials using Google Pay
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_credentials_google_pay.html
 */
export type InputCredentialsGooglePay = {
	"@type": "inputCredentialsGooglePay";
	/** JSON-encoded data with the credential identifier */
	data: string;
};

/**
 * Smart Glocal payment provider
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1payment_provider_smart_glocal.html
 */
export type PaymentProviderSmartGlocal = {
	"@type": "paymentProviderSmartGlocal";
	/** Public payment token */
	public_token: string;
	/** URL for sending card tokenization requests */
	tokenize_url: string;
};

/**
 * Stripe payment provider
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1payment_provider_stripe.html
 */
export type PaymentProviderStripe = {
	"@type": "paymentProviderStripe";
	/** Stripe API publishable key */
	publishable_key: string;
	/** True, if the user country must be provided */
	need_country: boolean;
	/** True, if the user ZIP/postal code must be provided */
	need_postal_code: boolean;
	/** True, if the cardholder name must be provided */
	need_cardholder_name: boolean;
};

/**
 * Some other payment provider, for which a web payment form must be shown
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1payment_provider_other.html
 */
export type PaymentProviderOther = {
	"@type": "paymentProviderOther";
	/** Payment form URL */
	url: string;
};

/**
 * Describes an additional payment option
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1payment_option.html
 */
export type PaymentOption = {
	"@type": "paymentOption";
	/** Title for the payment option */
	title: string;
	/** Payment form URL to be opened in a web view */
	url: string;
};

/**
 * The payment form is for a regular payment
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1payment_form_type_regular.html
 */
export type PaymentFormTypeRegular = {
	"@type": "paymentFormTypeRegular";
	/** Full information about the invoice */
	invoice: Invoice;
	/** User identifier of the payment provider bot */
	payment_provider_user_id: number;
	/** Information about the payment provider */
	payment_provider: PaymentProvider;
	/** The list of additional payment options */
	additional_payment_options: PaymentOption[];
	/** Saved server-side order information; may be null */
	saved_order_info?: OrderInfo;
	/** The list of saved payment credentials */
	saved_credentials: SavedCredentials[];
	/** True, if the user can choose to save credentials */
	can_save_credentials: boolean;
	/** True, if the user will be able to save credentials, if sets up a 2-step verification password */
	need_password: boolean;
};

/**
 * The payment form is for a payment in Telegram Stars
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1payment_form_type_stars.html
 */
export type PaymentFormTypeStars = {
	"@type": "paymentFormTypeStars";
	/** Number of Telegram Stars that will be paid */
	star_count: number;
};

/**
 * The payment form is for a payment in Telegram Stars for subscription
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1payment_form_type_star_subscription.html
 */
export type PaymentFormTypeStarSubscription = {
	"@type": "paymentFormTypeStarSubscription";
	/** Information about subscription plan */
	pricing: StarSubscriptionPricing;
};

/**
 * Contains information about an invoice payment form
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1payment_form.html
 */
export type PaymentForm = {
	"@type": "paymentForm";
	/** The payment form identifier */
	id: string;
	/** Type of the payment form */
	type: PaymentFormType;
	/** User identifier of the seller bot */
	seller_bot_user_id: number;
	/** Information about the product */
	product_info: ProductInfo;
};

/**
 * Contains a temporary identifier of validated order information, which is stored for one hour, and the available shipping options
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1validated_order_info.html
 */
export type ValidatedOrderInfo = {
	"@type": "validatedOrderInfo";
	/** Temporary identifier of the order information */
	order_info_id: string;
	/** Available shipping options */
	shipping_options: ShippingOption[];
};

/**
 * Contains the result of a payment request
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1payment_result.html
 */
export type PaymentResult = {
	"@type": "paymentResult";
	/** True, if the payment request was successful; otherwise, the verification_url will be non-empty */
	success: boolean;
	/** URL for additional payment credentials verification */
	verification_url: string;
};

/**
 * The payment was done using a third-party payment provider
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1payment_receipt_type_regular.html
 */
export type PaymentReceiptTypeRegular = {
	"@type": "paymentReceiptTypeRegular";
	/** User identifier of the payment provider bot */
	payment_provider_user_id: number;
	/** Information about the invoice */
	invoice: Invoice;
	/** Order information; may be null */
	order_info?: OrderInfo;
	/** Chosen shipping option; may be null */
	shipping_option?: ShippingOption;
	/** Title of the saved credentials chosen by the buyer */
	credentials_title: string;
	/** The amount of tip chosen by the buyer in the smallest units of the currency */
	tip_amount: number;
};

/**
 * The payment was done using Telegram Stars
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1payment_receipt_type_stars.html
 */
export type PaymentReceiptTypeStars = {
	"@type": "paymentReceiptTypeStars";
	/** Number of Telegram Stars that were paid */
	star_count: number;
	/** Unique identifier of the transaction that can be used to dispute it */
	transaction_id: string;
};

/**
 * Contains information about a successful payment
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1payment_receipt.html
 */
export type PaymentReceipt = {
	"@type": "paymentReceipt";
	/** Information about the product */
	product_info: ProductInfo;
	/** Point in time (Unix timestamp) when the payment was made */
	date: number;
	/** User identifier of the seller bot */
	seller_bot_user_id: number;
	/** Type of the payment receipt */
	type: PaymentReceiptType;
};

/**
 * An invoice from a message of the type messageInvoice or paid media purchase from messagePaidMedia
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_invoice_message.html
 */
export type InputInvoiceMessage = {
	"@type": "inputInvoiceMessage";
	/** Chat identifier of the message */
	chat_id: number;
	/** Message identifier. Use messageProperties.can_be_paid to check whether the message can be used in the method */
	message_id: number;
};

/**
 * An invoice from a link of the type internalLinkTypeInvoice
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_invoice_name.html
 */
export type InputInvoiceName = {
	"@type": "inputInvoiceName";
	/** Name of the invoice */
	name: string;
};

/**
 * An invoice for a payment toward Telegram; must not be used in the in-store apps
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_invoice_telegram.html
 */
export type InputInvoiceTelegram = {
	"@type": "inputInvoiceTelegram";
	/** Transaction purpose */
	purpose: TelegramPaymentPurpose;
};

/**
 * The media is hidden until the invoice is paid
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1paid_media_preview.html
 */
export type PaidMediaPreview = {
	"@type": "paidMediaPreview";
	/** Media width; 0 if unknown */
	width: number;
	/** Media height; 0 if unknown */
	height: number;
	/** Media duration, in seconds; 0 if unknown */
	duration: number;
	/** Media minithumbnail; may be null */
	minithumbnail?: Minithumbnail;
};

/**
 * The media is a photo
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1paid_media_photo.html
 */
export type PaidMediaPhoto = {
	"@type": "paidMediaPhoto";
	/** The photo */
	photo: Photo;
};

/**
 * The media is a video
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1paid_media_video.html
 */
export type PaidMediaVideo = {
	"@type": "paidMediaVideo";
	/** The video */
	video: Video;
	/** Cover of the video; may be null if none */
	cover?: Photo;
	/** Timestamp from which the video playing must start, in seconds */
	start_timestamp: number;
};

/**
 * The media is unsupported
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1paid_media_unsupported.html
 */
export type PaidMediaUnsupported = {
	"@type": "paidMediaUnsupported";
};

/**
 * Describes parameters of a giveaway
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1giveaway_parameters.html
 */
export type GiveawayParameters = {
	"@type": "giveawayParameters";
	/** Identifier of the supergroup or channel chat, which will be automatically boosted by the winners of the giveaway for duration of the Telegram Premium subscription, or for the specified time. If the chat is a channel, then can_post_messages right is required in the channel, otherwise, the user must be an administrator in the supergroup */
	boosted_chat_id: number;
	/** Identifiers of other supergroup or channel chats that must be subscribed by the users to be eligible for the giveaway. There can be up to getOption("giveaway_additional_chat_count_max") additional chats */
	additional_chat_ids: number[];
	/** Point in time (Unix timestamp) when the giveaway is expected to be performed; must be 60-getOption("giveaway_duration_max") seconds in the future in scheduled giveaways */
	winners_selection_date: number;
	/** True, if only new members of the chats will be eligible for the giveaway */
	only_new_members: boolean;
	/** True, if the list of winners of the giveaway will be available to everyone */
	has_public_winners: boolean;
	/** The list of two-letter ISO 3166-1 alpha-2 codes of countries, users from which will be eligible for the giveaway. If empty, then all users can participate in the giveaway. There can be up to getOption("giveaway_country_count_max") chosen countries. Users with phone number that was bought at https://fragment.com can participate in any giveaway and the country code "FT" must not be specified in the list */
	country_codes: string[];
	/** Additional description of the giveaway prize; 0-128 characters */
	prize_description: string;
};

/**
 * File with the date it was uploaded
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1dated_file.html
 */
export type DatedFile = {
	"@type": "datedFile";
	/** The file */
	file: File;
	/** Point in time (Unix timestamp) when the file was uploaded */
	date: number;
};

/**
 * A Telegram Passport element containing the user's personal details
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_type_personal_details.html
 */
export type PassportElementTypePersonalDetails = {
	"@type": "passportElementTypePersonalDetails";
};

/**
 * A Telegram Passport element containing the user's passport
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_type_passport.html
 */
export type PassportElementTypePassport = {
	"@type": "passportElementTypePassport";
};

/**
 * A Telegram Passport element containing the user's driver license
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_type_driver_license.html
 */
export type PassportElementTypeDriverLicense = {
	"@type": "passportElementTypeDriverLicense";
};

/**
 * A Telegram Passport element containing the user's identity card
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_type_identity_card.html
 */
export type PassportElementTypeIdentityCard = {
	"@type": "passportElementTypeIdentityCard";
};

/**
 * A Telegram Passport element containing the user's internal passport
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_type_internal_passport.html
 */
export type PassportElementTypeInternalPassport = {
	"@type": "passportElementTypeInternalPassport";
};

/**
 * A Telegram Passport element containing the user's address
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_type_address.html
 */
export type PassportElementTypeAddress = {
	"@type": "passportElementTypeAddress";
};

/**
 * A Telegram Passport element containing the user's utility bill
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_type_utility_bill.html
 */
export type PassportElementTypeUtilityBill = {
	"@type": "passportElementTypeUtilityBill";
};

/**
 * A Telegram Passport element containing the user's bank statement
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_type_bank_statement.html
 */
export type PassportElementTypeBankStatement = {
	"@type": "passportElementTypeBankStatement";
};

/**
 * A Telegram Passport element containing the user's rental agreement
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_type_rental_agreement.html
 */
export type PassportElementTypeRentalAgreement = {
	"@type": "passportElementTypeRentalAgreement";
};

/**
 * A Telegram Passport element containing the registration page of the user's passport
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_type_passport_registration.html
 */
export type PassportElementTypePassportRegistration = {
	"@type": "passportElementTypePassportRegistration";
};

/**
 * A Telegram Passport element containing the user's temporary registration
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_type_temporary_registration.html
 */
export type PassportElementTypeTemporaryRegistration = {
	"@type": "passportElementTypeTemporaryRegistration";
};

/**
 * A Telegram Passport element containing the user's phone number
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_type_phone_number.html
 */
export type PassportElementTypePhoneNumber = {
	"@type": "passportElementTypePhoneNumber";
};

/**
 * A Telegram Passport element containing the user's email address
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_type_email_address.html
 */
export type PassportElementTypeEmailAddress = {
	"@type": "passportElementTypeEmailAddress";
};

/**
 * Represents a date according to the Gregorian calendar
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1date.html
 */
export type Date = {
	"@type": "date";
	/** Day of the month; 1-31 */
	day: number;
	/** Month; 1-12 */
	month: number;
	/** Year; 1-9999 */
	year: number;
};

/**
 * Contains the user's personal details
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1personal_details.html
 */
export type PersonalDetails = {
	"@type": "personalDetails";
	/** First name of the user written in English; 1-255 characters */
	first_name: string;
	/** Middle name of the user written in English; 0-255 characters */
	middle_name: string;
	/** Last name of the user written in English; 1-255 characters */
	last_name: string;
	/** Native first name of the user; 1-255 characters */
	native_first_name: string;
	/** Native middle name of the user; 0-255 characters */
	native_middle_name: string;
	/** Native last name of the user; 1-255 characters */
	native_last_name: string;
	/** Birthdate of the user */
	birthdate: Date;
	/** Gender of the user, "male" or "female" */
	gender: string;
	/** A two-letter ISO 3166-1 alpha-2 country code of the user's country */
	country_code: string;
	/** A two-letter ISO 3166-1 alpha-2 country code of the user's residence country */
	residence_country_code: string;
};

/**
 * An identity document
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1identity_document.html
 */
export type IdentityDocument = {
	"@type": "identityDocument";
	/** Document number; 1-24 characters */
	number: string;
	/** Document expiration date; may be null if not applicable */
	expiration_date?: Date;
	/** Front side of the document */
	front_side: DatedFile;
	/** Reverse side of the document; only for driver license and identity card; may be null */
	reverse_side?: DatedFile;
	/** Selfie with the document; may be null */
	selfie?: DatedFile;
	/** List of files containing a certified English translation of the document */
	translation: DatedFile[];
};

/**
 * An identity document to be saved to Telegram Passport
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_identity_document.html
 */
export type InputIdentityDocument = {
	"@type": "inputIdentityDocument";
	/** Document number; 1-24 characters */
	number: string;
	/** Document expiration date; pass null if not applicable */
	expiration_date?: Date;
	/** Front side of the document */
	front_side: InputFile;
	/** Reverse side of the document; only for driver license and identity card; pass null otherwise */
	reverse_side?: InputFile;
	/** Selfie with the document; pass null if unavailable */
	selfie?: InputFile;
	/** List of files containing a certified English translation of the document */
	translation: InputFile[];
};

/**
 * A personal document, containing some information about a user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1personal_document.html
 */
export type PersonalDocument = {
	"@type": "personalDocument";
	/** List of files containing the pages of the document */
	files: DatedFile[];
	/** List of files containing a certified English translation of the document */
	translation: DatedFile[];
};

/**
 * A personal document to be saved to Telegram Passport
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_personal_document.html
 */
export type InputPersonalDocument = {
	"@type": "inputPersonalDocument";
	/** List of files containing the pages of the document */
	files: InputFile[];
	/** List of files containing a certified English translation of the document */
	translation: InputFile[];
};

/**
 * A Telegram Passport element containing the user's personal details
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_personal_details.html
 */
export type PassportElementPersonalDetails = {
	"@type": "passportElementPersonalDetails";
	/** Personal details of the user */
	personal_details: PersonalDetails;
};

/**
 * A Telegram Passport element containing the user's passport
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_passport.html
 */
export type PassportElementPassport = {
	"@type": "passportElementPassport";
	/** Passport */
	passport: IdentityDocument;
};

/**
 * A Telegram Passport element containing the user's driver license
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_driver_license.html
 */
export type PassportElementDriverLicense = {
	"@type": "passportElementDriverLicense";
	/** Driver license */
	driver_license: IdentityDocument;
};

/**
 * A Telegram Passport element containing the user's identity card
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_identity_card.html
 */
export type PassportElementIdentityCard = {
	"@type": "passportElementIdentityCard";
	/** Identity card */
	identity_card: IdentityDocument;
};

/**
 * A Telegram Passport element containing the user's internal passport
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_internal_passport.html
 */
export type PassportElementInternalPassport = {
	"@type": "passportElementInternalPassport";
	/** Internal passport */
	internal_passport: IdentityDocument;
};

/**
 * A Telegram Passport element containing the user's address
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_address.html
 */
export type PassportElementAddress = {
	"@type": "passportElementAddress";
	/** Address */
	address: Address;
};

/**
 * A Telegram Passport element containing the user's utility bill
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_utility_bill.html
 */
export type PassportElementUtilityBill = {
	"@type": "passportElementUtilityBill";
	/** Utility bill */
	utility_bill: PersonalDocument;
};

/**
 * A Telegram Passport element containing the user's bank statement
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_bank_statement.html
 */
export type PassportElementBankStatement = {
	"@type": "passportElementBankStatement";
	/** Bank statement */
	bank_statement: PersonalDocument;
};

/**
 * A Telegram Passport element containing the user's rental agreement
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_rental_agreement.html
 */
export type PassportElementRentalAgreement = {
	"@type": "passportElementRentalAgreement";
	/** Rental agreement */
	rental_agreement: PersonalDocument;
};

/**
 * A Telegram Passport element containing the user's passport registration pages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_passport_registration.html
 */
export type PassportElementPassportRegistration = {
	"@type": "passportElementPassportRegistration";
	/** Passport registration pages */
	passport_registration: PersonalDocument;
};

/**
 * A Telegram Passport element containing the user's temporary registration
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_temporary_registration.html
 */
export type PassportElementTemporaryRegistration = {
	"@type": "passportElementTemporaryRegistration";
	/** Temporary registration */
	temporary_registration: PersonalDocument;
};

/**
 * A Telegram Passport element containing the user's phone number
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_phone_number.html
 */
export type PassportElementPhoneNumber = {
	"@type": "passportElementPhoneNumber";
	/** Phone number */
	phone_number: string;
};

/**
 * A Telegram Passport element containing the user's email address
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_email_address.html
 */
export type PassportElementEmailAddress = {
	"@type": "passportElementEmailAddress";
	/** Email address */
	email_address: string;
};

/**
 * A Telegram Passport element to be saved containing the user's personal details
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_passport_element_personal_details.html
 */
export type InputPassportElementPersonalDetails = {
	"@type": "inputPassportElementPersonalDetails";
	/** Personal details of the user */
	personal_details: PersonalDetails;
};

/**
 * A Telegram Passport element to be saved containing the user's passport
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_passport_element_passport.html
 */
export type InputPassportElementPassport = {
	"@type": "inputPassportElementPassport";
	/** The passport to be saved */
	passport: InputIdentityDocument;
};

/**
 * A Telegram Passport element to be saved containing the user's driver license
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_passport_element_driver_license.html
 */
export type InputPassportElementDriverLicense = {
	"@type": "inputPassportElementDriverLicense";
	/** The driver license to be saved */
	driver_license: InputIdentityDocument;
};

/**
 * A Telegram Passport element to be saved containing the user's identity card
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_passport_element_identity_card.html
 */
export type InputPassportElementIdentityCard = {
	"@type": "inputPassportElementIdentityCard";
	/** The identity card to be saved */
	identity_card: InputIdentityDocument;
};

/**
 * A Telegram Passport element to be saved containing the user's internal passport
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_passport_element_internal_passport.html
 */
export type InputPassportElementInternalPassport = {
	"@type": "inputPassportElementInternalPassport";
	/** The internal passport to be saved */
	internal_passport: InputIdentityDocument;
};

/**
 * A Telegram Passport element to be saved containing the user's address
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_passport_element_address.html
 */
export type InputPassportElementAddress = {
	"@type": "inputPassportElementAddress";
	/** The address to be saved */
	address: Address;
};

/**
 * A Telegram Passport element to be saved containing the user's utility bill
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_passport_element_utility_bill.html
 */
export type InputPassportElementUtilityBill = {
	"@type": "inputPassportElementUtilityBill";
	/** The utility bill to be saved */
	utility_bill: InputPersonalDocument;
};

/**
 * A Telegram Passport element to be saved containing the user's bank statement
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_passport_element_bank_statement.html
 */
export type InputPassportElementBankStatement = {
	"@type": "inputPassportElementBankStatement";
	/** The bank statement to be saved */
	bank_statement: InputPersonalDocument;
};

/**
 * A Telegram Passport element to be saved containing the user's rental agreement
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_passport_element_rental_agreement.html
 */
export type InputPassportElementRentalAgreement = {
	"@type": "inputPassportElementRentalAgreement";
	/** The rental agreement to be saved */
	rental_agreement: InputPersonalDocument;
};

/**
 * A Telegram Passport element to be saved containing the user's passport registration
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_passport_element_passport_registration.html
 */
export type InputPassportElementPassportRegistration = {
	"@type": "inputPassportElementPassportRegistration";
	/** The passport registration page to be saved */
	passport_registration: InputPersonalDocument;
};

/**
 * A Telegram Passport element to be saved containing the user's temporary registration
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_passport_element_temporary_registration.html
 */
export type InputPassportElementTemporaryRegistration = {
	"@type": "inputPassportElementTemporaryRegistration";
	/** The temporary registration document to be saved */
	temporary_registration: InputPersonalDocument;
};

/**
 * A Telegram Passport element to be saved containing the user's phone number
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_passport_element_phone_number.html
 */
export type InputPassportElementPhoneNumber = {
	"@type": "inputPassportElementPhoneNumber";
	/** The phone number to be saved */
	phone_number: string;
};

/**
 * A Telegram Passport element to be saved containing the user's email address
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_passport_element_email_address.html
 */
export type InputPassportElementEmailAddress = {
	"@type": "inputPassportElementEmailAddress";
	/** The email address to be saved */
	email_address: string;
};

/**
 * Contains information about saved Telegram Passport elements
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_elements.html
 */
export type PassportElements = {
	"@type": "passportElements";
	/** Telegram Passport elements */
	elements: PassportElement[];
};

/**
 * The element contains an error in an unspecified place. The error will be considered resolved when new data is added
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_error_source_unspecified.html
 */
export type PassportElementErrorSourceUnspecified = {
	"@type": "passportElementErrorSourceUnspecified";
};

/**
 * One of the data fields contains an error. The error will be considered resolved when the value of the field changes
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_error_source_data_field.html
 */
export type PassportElementErrorSourceDataField = {
	"@type": "passportElementErrorSourceDataField";
	/** Field name */
	field_name: string;
};

/**
 * The front side of the document contains an error. The error will be considered resolved when the file with the front side changes
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_error_source_front_side.html
 */
export type PassportElementErrorSourceFrontSide = {
	"@type": "passportElementErrorSourceFrontSide";
};

/**
 * The reverse side of the document contains an error. The error will be considered resolved when the file with the reverse side changes
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_error_source_reverse_side.html
 */
export type PassportElementErrorSourceReverseSide = {
	"@type": "passportElementErrorSourceReverseSide";
};

/**
 * The selfie with the document contains an error. The error will be considered resolved when the file with the selfie changes
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_error_source_selfie.html
 */
export type PassportElementErrorSourceSelfie = {
	"@type": "passportElementErrorSourceSelfie";
};

/**
 * One of files with the translation of the document contains an error. The error will be considered resolved when the file changes
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_error_source_translation_file.html
 */
export type PassportElementErrorSourceTranslationFile = {
	"@type": "passportElementErrorSourceTranslationFile";
	/** Index of a file with the error */
	file_index: number;
};

/**
 * The translation of the document contains an error. The error will be considered resolved when the list of translation files changes
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_error_source_translation_files.html
 */
export type PassportElementErrorSourceTranslationFiles = {
	"@type": "passportElementErrorSourceTranslationFiles";
};

/**
 * The file contains an error. The error will be considered resolved when the file changes
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_error_source_file.html
 */
export type PassportElementErrorSourceFile = {
	"@type": "passportElementErrorSourceFile";
	/** Index of a file with the error */
	file_index: number;
};

/**
 * The list of attached files contains an error. The error will be considered resolved when the list of files changes
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_error_source_files.html
 */
export type PassportElementErrorSourceFiles = {
	"@type": "passportElementErrorSourceFiles";
};

/**
 * Contains the description of an error in a Telegram Passport element
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_element_error.html
 */
export type PassportElementError = {
	"@type": "passportElementError";
	/** Type of the Telegram Passport element which has the error */
	type: PassportElementType;
	/** Error message */
	message: string;
	/** Error source */
	source: PassportElementErrorSource;
};

/**
 * Contains information about a Telegram Passport element that was requested by a service
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_suitable_element.html
 */
export type PassportSuitableElement = {
	"@type": "passportSuitableElement";
	/** Type of the element */
	type: PassportElementType;
	/** True, if a selfie is required with the identity document */
	is_selfie_required: boolean;
	/** True, if a certified English translation is required with the document */
	is_translation_required: boolean;
	/** True, if personal details must include the user's name in the language of their country of residence */
	is_native_name_required: boolean;
};

/**
 * Contains a description of the required Telegram Passport element that was requested by a service
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_required_element.html
 */
export type PassportRequiredElement = {
	"@type": "passportRequiredElement";
	/** List of Telegram Passport elements any of which is enough to provide */
	suitable_elements: PassportSuitableElement[];
};

/**
 * Contains information about a Telegram Passport authorization form that was requested
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_authorization_form.html
 */
export type PassportAuthorizationForm = {
	"@type": "passportAuthorizationForm";
	/** Unique identifier of the authorization form */
	id: number;
	/** Telegram Passport elements that must be provided to complete the form */
	required_elements: PassportRequiredElement[];
	/** URL for the privacy policy of the service; may be empty */
	privacy_policy_url?: string;
};

/**
 * Contains information about a Telegram Passport elements and corresponding errors
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1passport_elements_with_errors.html
 */
export type PassportElementsWithErrors = {
	"@type": "passportElementsWithErrors";
	/** Telegram Passport elements */
	elements: PassportElement[];
	/** Errors in the elements that are already available */
	errors: PassportElementError[];
};

/**
 * Contains encrypted Telegram Passport data credentials
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1encrypted_credentials.html
 */
export type EncryptedCredentials = {
	"@type": "encryptedCredentials";
	/** The encrypted credentials */
	data: string;
	/** The decrypted data hash */
	hash: string;
	/** Secret for data decryption, encrypted with the service's public key */
	secret: string;
};

/**
 * Contains information about an encrypted Telegram Passport element; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1encrypted_passport_element.html
 */
export type EncryptedPassportElement = {
	"@type": "encryptedPassportElement";
	/** Type of Telegram Passport element */
	type: PassportElementType;
	/** Encrypted JSON-encoded data about the user */
	data: string;
	/** The front side of an identity document */
	front_side: DatedFile;
	/** The reverse side of an identity document; may be null */
	reverse_side?: DatedFile;
	/** Selfie with the document; may be null */
	selfie?: DatedFile;
	/** List of files containing a certified English translation of the document */
	translation: DatedFile[];
	/** List of attached files */
	files: DatedFile[];
	/** Unencrypted data, phone number or email address */
	value: string;
	/** Hash of the entire element */
	hash: string;
};

/**
 * The element contains an error in an unspecified place. The error will be considered resolved when new data is added
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_passport_element_error_source_unspecified.html
 */
export type InputPassportElementErrorSourceUnspecified = {
	"@type": "inputPassportElementErrorSourceUnspecified";
	/** Current hash of the entire element */
	element_hash: string;
};

/**
 * A data field contains an error. The error is considered resolved when the field's value changes
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_passport_element_error_source_data_field.html
 */
export type InputPassportElementErrorSourceDataField = {
	"@type": "inputPassportElementErrorSourceDataField";
	/** Field name */
	field_name: string;
	/** Current data hash */
	data_hash: string;
};

/**
 * The front side of the document contains an error. The error is considered resolved when the file with the front side of the document changes
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_passport_element_error_source_front_side.html
 */
export type InputPassportElementErrorSourceFrontSide = {
	"@type": "inputPassportElementErrorSourceFrontSide";
	/** Current hash of the file containing the front side */
	file_hash: string;
};

/**
 * The reverse side of the document contains an error. The error is considered resolved when the file with the reverse side of the document changes
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_passport_element_error_source_reverse_side.html
 */
export type InputPassportElementErrorSourceReverseSide = {
	"@type": "inputPassportElementErrorSourceReverseSide";
	/** Current hash of the file containing the reverse side */
	file_hash: string;
};

/**
 * The selfie contains an error. The error is considered resolved when the file with the selfie changes
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_passport_element_error_source_selfie.html
 */
export type InputPassportElementErrorSourceSelfie = {
	"@type": "inputPassportElementErrorSourceSelfie";
	/** Current hash of the file containing the selfie */
	file_hash: string;
};

/**
 * One of the files containing the translation of the document contains an error. The error is considered resolved when the file with the translation changes
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_passport_element_error_source_translation_file.html
 */
export type InputPassportElementErrorSourceTranslationFile = {
	"@type": "inputPassportElementErrorSourceTranslationFile";
	/** Current hash of the file containing the translation */
	file_hash: string;
};

/**
 * The translation of the document contains an error. The error is considered resolved when the list of files changes
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_passport_element_error_source_translation_files.html
 */
export type InputPassportElementErrorSourceTranslationFiles = {
	"@type": "inputPassportElementErrorSourceTranslationFiles";
	/** Current hashes of all files with the translation */
	file_hashes: string[];
};

/**
 * The file contains an error. The error is considered resolved when the file changes
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_passport_element_error_source_file.html
 */
export type InputPassportElementErrorSourceFile = {
	"@type": "inputPassportElementErrorSourceFile";
	/** Current hash of the file which has the error */
	file_hash: string;
};

/**
 * The list of attached files contains an error. The error is considered resolved when the file list changes
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_passport_element_error_source_files.html
 */
export type InputPassportElementErrorSourceFiles = {
	"@type": "inputPassportElementErrorSourceFiles";
	/** Current hashes of all attached files */
	file_hashes: string[];
};

/**
 * Contains the description of an error in a Telegram Passport element; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_passport_element_error.html
 */
export type InputPassportElementError = {
	"@type": "inputPassportElementError";
	/** Type of Telegram Passport element that has the error */
	type: PassportElementType;
	/** Error message */
	message: string;
	/** Error source */
	source: InputPassportElementErrorSource;
};

/**
 * A text message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_text.html
 */
export type MessageText = {
	"@type": "messageText";
	/** Text of the message */
	text: FormattedText;
	/** A link preview attached to the message; may be null */
	link_preview?: LinkPreview;
	/** Options which were used for generation of the link preview; may be null if default options were used */
	link_preview_options?: LinkPreviewOptions;
};

/**
 * An animation message (GIF-style).
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_animation.html
 */
export type MessageAnimation = {
	"@type": "messageAnimation";
	/** The animation description */
	animation: Animation;
	/** Animation caption */
	caption: FormattedText;
	/** True, if the caption must be shown above the animation; otherwise, the caption must be shown below the animation */
	show_caption_above_media: boolean;
	/** True, if the animation preview must be covered by a spoiler animation */
	has_spoiler: boolean;
	/** True, if the animation thumbnail must be blurred and the animation must be shown only while tapped */
	is_secret: boolean;
};

/**
 * An audio message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_audio.html
 */
export type MessageAudio = {
	"@type": "messageAudio";
	/** The audio description */
	audio: Audio;
	/** Audio caption */
	caption: FormattedText;
};

/**
 * A document message (general file)
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_document.html
 */
export type MessageDocument = {
	"@type": "messageDocument";
	/** The document description */
	document: Document;
	/** Document caption */
	caption: FormattedText;
};

/**
 * A message with paid media
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_paid_media.html
 */
export type MessagePaidMedia = {
	"@type": "messagePaidMedia";
	/** Number of Telegram Stars needed to buy access to the media in the message */
	star_count: number;
	/** Information about the media */
	media: PaidMedia[];
	/** Media caption */
	caption: FormattedText;
	/** True, if the caption must be shown above the media; otherwise, the caption must be shown below the media */
	show_caption_above_media: boolean;
};

/**
 * A photo message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_photo.html
 */
export type MessagePhoto = {
	"@type": "messagePhoto";
	/** The photo */
	photo: Photo;
	/** Photo caption */
	caption: FormattedText;
	/** True, if the caption must be shown above the photo; otherwise, the caption must be shown below the photo */
	show_caption_above_media: boolean;
	/** True, if the photo preview must be covered by a spoiler animation */
	has_spoiler: boolean;
	/** True, if the photo must be blurred and must be shown only while tapped */
	is_secret: boolean;
};

/**
 * A sticker message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_sticker.html
 */
export type MessageSticker = {
	"@type": "messageSticker";
	/** The sticker description */
	sticker: Sticker;
	/** True, if premium animation of the sticker must be played */
	is_premium: boolean;
};

/**
 * A video message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_video.html
 */
export type MessageVideo = {
	"@type": "messageVideo";
	/** The video description */
	video: Video;
	/** Alternative qualities of the video */
	alternative_videos: AlternativeVideo[];
	/** Cover of the video; may be null if none */
	cover?: Photo;
	/** Timestamp from which the video playing must start, in seconds */
	start_timestamp: number;
	/** Video caption */
	caption: FormattedText;
	/** True, if the caption must be shown above the video; otherwise, the caption must be shown below the video */
	show_caption_above_media: boolean;
	/** True, if the video preview must be covered by a spoiler animation */
	has_spoiler: boolean;
	/** True, if the video thumbnail must be blurred and the video must be shown only while tapped */
	is_secret: boolean;
};

/**
 * A video note message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_video_note.html
 */
export type MessageVideoNote = {
	"@type": "messageVideoNote";
	/** The video note description */
	video_note: VideoNote;
	/** True, if at least one of the recipients has viewed the video note */
	is_viewed: boolean;
	/** True, if the video note thumbnail must be blurred and the video note must be shown only while tapped */
	is_secret: boolean;
};

/**
 * A voice note message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_voice_note.html
 */
export type MessageVoiceNote = {
	"@type": "messageVoiceNote";
	/** The voice note description */
	voice_note: VoiceNote;
	/** Voice note caption */
	caption: FormattedText;
	/** True, if at least one of the recipients has listened to the voice note */
	is_listened: boolean;
};

/**
 * A self-destructed photo message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_expired_photo.html
 */
export type MessageExpiredPhoto = {
	"@type": "messageExpiredPhoto";
};

/**
 * A self-destructed video message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_expired_video.html
 */
export type MessageExpiredVideo = {
	"@type": "messageExpiredVideo";
};

/**
 * A self-destructed video note message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_expired_video_note.html
 */
export type MessageExpiredVideoNote = {
	"@type": "messageExpiredVideoNote";
};

/**
 * A self-destructed voice note message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_expired_voice_note.html
 */
export type MessageExpiredVoiceNote = {
	"@type": "messageExpiredVoiceNote";
};

/**
 * A message with a location
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_location.html
 */
export type MessageLocation = {
	"@type": "messageLocation";
	/** The location description */
	location: Location;
	/** Time relative to the message send date, for which the location can be updated, in seconds; if 0x7FFFFFFF, then location can be updated forever */
	live_period: number;
	/** Left time for which the location can be updated, in seconds. If 0, then the location can't be updated anymore. The update updateMessageContent is not sent when this field changes */
	expires_in: number;
	/** For live locations, a direction in which the location moves, in degrees; 1-360. If 0 the direction is unknown */
	heading: number;
	/** For live locations, a maximum distance to another chat member for proximity alerts, in meters (0-100000). 0 if the notification is disabled. Available only to the message sender */
	proximity_alert_radius: number;
};

/**
 * A message with information about a venue
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_venue.html
 */
export type MessageVenue = {
	"@type": "messageVenue";
	/** The venue description */
	venue: Venue;
};

/**
 * A message with a user contact
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_contact.html
 */
export type MessageContact = {
	"@type": "messageContact";
	/** The contact description */
	contact: Contact;
};

/**
 * A message with an animated emoji
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_animated_emoji.html
 */
export type MessageAnimatedEmoji = {
	"@type": "messageAnimatedEmoji";
	/** The animated emoji */
	animated_emoji: AnimatedEmoji;
	/** The corresponding emoji */
	emoji: string;
};

/**
 * A dice message. The dice value is randomly generated by the server
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_dice.html
 */
export type MessageDice = {
	"@type": "messageDice";
	/** The animated stickers with the initial dice animation; may be null if unknown. The update updateMessageContent will be sent when the sticker became known */
	initial_state?: DiceStickers;
	/** The animated stickers with the final dice animation; may be null if unknown. The update updateMessageContent will be sent when the sticker became known */
	final_state?: DiceStickers;
	/** Emoji on which the dice throw animation is based */
	emoji: string;
	/** The dice value. If the value is 0, the dice don't have final state yet */
	value: number;
	/** Number of frame after which a success animation like a shower of confetti needs to be shown on updateMessageSendSucceeded */
	success_animation_frame_number: number;
};

/**
 * A message with a game
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_game.html
 */
export type MessageGame = {
	"@type": "messageGame";
	/** The game description */
	game: Game;
};

/**
 * A message with a poll
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_poll.html
 */
export type MessagePoll = {
	"@type": "messagePoll";
	/** The poll description */
	poll: Poll;
};

/**
 * A message with a forwarded story
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_story.html
 */
export type MessageStory = {
	"@type": "messageStory";
	/** Identifier of the chat that posted the story */
	story_poster_chat_id: number;
	/** Story identifier */
	story_id: number;
	/** True, if the story was automatically forwarded because of a mention of the user */
	via_mention: boolean;
};

/**
 * A message with an invoice from a bot. Use getInternalLink with internalLinkTypeBotStart to share the invoice
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_invoice.html
 */
export type MessageInvoice = {
	"@type": "messageInvoice";
	/** Information about the product */
	product_info: ProductInfo;
	/** Currency for the product price */
	currency: string;
	/** Product total price in the smallest units of the currency */
	total_amount: number;
	/** Unique invoice bot start_parameter to be passed to getInternalLink */
	start_parameter: string;
	/** True, if the invoice is a test invoice */
	is_test: boolean;
	/** True, if the shipping address must be specified */
	need_shipping_address: boolean;
	/** The identifier of the message with the receipt, after the product has been purchased */
	receipt_message_id: number;
	/** Extended media attached to the invoice; may be null if none */
	paid_media?: PaidMedia;
	/** Extended media caption; may be null if none */
	paid_media_caption?: FormattedText;
};

/**
 * A message with information about an ended call
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_call.html
 */
export type MessageCall = {
	"@type": "messageCall";
	/** True, if the call was a video call */
	is_video: boolean;
	/** Reason why the call was discarded */
	discard_reason: CallDiscardReason;
	/** Call duration, in seconds */
	duration: number;
};

/**
 * A message with information about a group call not bound to a chat. If the message is incoming, the call isn't active, isn't missed, and has no duration, and getOption("can_accept_calls") is true, then incoming call screen must be shown to the user. Use getGroupCallParticipants to show current group call participants on the screen. Use joinGroupCall to accept the call or declineGroupCallInvitation to decline it. If the call become active or missed, then the call screen must be hidden
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_group_call.html
 */
export type MessageGroupCall = {
	"@type": "messageGroupCall";
	/** True, if the call is active, i.e. the called user joined the call */
	is_active: boolean;
	/** True, if the called user missed or declined the call */
	was_missed: boolean;
	/** True, if the call is a video call */
	is_video: boolean;
	/** Call duration, in seconds; for left calls only */
	duration: number;
	/** Identifiers of some other call participants */
	other_participant_ids: MessageSender[];
};

/**
 * A new video chat was scheduled
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_video_chat_scheduled.html
 */
export type MessageVideoChatScheduled = {
	"@type": "messageVideoChatScheduled";
	/** Identifier of the video chat. The video chat can be received through the method getGroupCall */
	group_call_id: number;
	/** Point in time (Unix timestamp) when the group call is expected to be started by an administrator */
	start_date: number;
};

/**
 * A newly created video chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_video_chat_started.html
 */
export type MessageVideoChatStarted = {
	"@type": "messageVideoChatStarted";
	/** Identifier of the video chat. The video chat can be received through the method getGroupCall */
	group_call_id: number;
};

/**
 * A message with information about an ended video chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_video_chat_ended.html
 */
export type MessageVideoChatEnded = {
	"@type": "messageVideoChatEnded";
	/** Call duration, in seconds */
	duration: number;
};

/**
 * A message with information about an invitation to a video chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_invite_video_chat_participants.html
 */
export type MessageInviteVideoChatParticipants = {
	"@type": "messageInviteVideoChatParticipants";
	/** Identifier of the video chat. The video chat can be received through the method getGroupCall */
	group_call_id: number;
	/** Invited user identifiers */
	user_ids: number[];
};

/**
 * A newly created basic group
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_basic_group_chat_create.html
 */
export type MessageBasicGroupChatCreate = {
	"@type": "messageBasicGroupChatCreate";
	/** Title of the basic group */
	title: string;
	/** User identifiers of members in the basic group */
	member_user_ids: number[];
};

/**
 * A newly created supergroup or channel
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_supergroup_chat_create.html
 */
export type MessageSupergroupChatCreate = {
	"@type": "messageSupergroupChatCreate";
	/** Title of the supergroup or channel */
	title: string;
};

/**
 * An updated chat title
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_chat_change_title.html
 */
export type MessageChatChangeTitle = {
	"@type": "messageChatChangeTitle";
	/** New chat title */
	title: string;
};

/**
 * An updated chat photo
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_chat_change_photo.html
 */
export type MessageChatChangePhoto = {
	"@type": "messageChatChangePhoto";
	/** New chat photo */
	photo: ChatPhoto;
};

/**
 * A deleted chat photo
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_chat_delete_photo.html
 */
export type MessageChatDeletePhoto = {
	"@type": "messageChatDeletePhoto";
};

/**
 * New chat members were added
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_chat_add_members.html
 */
export type MessageChatAddMembers = {
	"@type": "messageChatAddMembers";
	/** User identifiers of the new members */
	member_user_ids: number[];
};

/**
 * A new member joined the chat via an invite link
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_chat_join_by_link.html
 */
export type MessageChatJoinByLink = {
	"@type": "messageChatJoinByLink";
};

/**
 * A new member was accepted to the chat by an administrator
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_chat_join_by_request.html
 */
export type MessageChatJoinByRequest = {
	"@type": "messageChatJoinByRequest";
};

/**
 * A chat member was deleted
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_chat_delete_member.html
 */
export type MessageChatDeleteMember = {
	"@type": "messageChatDeleteMember";
	/** User identifier of the deleted chat member */
	user_id: number;
};

/**
 * A basic group was upgraded to a supergroup and was deactivated as the result
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_chat_upgrade_to.html
 */
export type MessageChatUpgradeTo = {
	"@type": "messageChatUpgradeTo";
	/** Identifier of the supergroup to which the basic group was upgraded */
	supergroup_id: number;
};

/**
 * A supergroup has been created from a basic group
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_chat_upgrade_from.html
 */
export type MessageChatUpgradeFrom = {
	"@type": "messageChatUpgradeFrom";
	/** Title of the newly created supergroup */
	title: string;
	/** The identifier of the original basic group */
	basic_group_id: number;
};

/**
 * A message has been pinned
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_pin_message.html
 */
export type MessagePinMessage = {
	"@type": "messagePinMessage";
	/** Identifier of the pinned message, can be an identifier of a deleted message or 0 */
	message_id: number;
};

/**
 * A screenshot of a message in the chat has been taken
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_screenshot_taken.html
 */
export type MessageScreenshotTaken = {
	"@type": "messageScreenshotTaken";
};

/**
 * A new background was set in the chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_chat_set_background.html
 */
export type MessageChatSetBackground = {
	"@type": "messageChatSetBackground";
	/** Identifier of the message with a previously set same background; 0 if none. Can be an identifier of a deleted message */
	old_background_message_id: number;
	/** The new background */
	background: ChatBackground;
	/** True, if the background was set only for self */
	only_for_self: boolean;
};

/**
 * A theme in the chat has been changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_chat_set_theme.html
 */
export type MessageChatSetTheme = {
	"@type": "messageChatSetTheme";
	/** If non-empty, name of a new theme, set for the chat. Otherwise, chat theme was reset to the default one */
	theme_name?: string;
};

/**
 * The auto-delete or self-destruct timer for messages in the chat has been changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_chat_set_message_auto_delete_time.html
 */
export type MessageChatSetMessageAutoDeleteTime = {
	"@type": "messageChatSetMessageAutoDeleteTime";
	/** New value auto-delete or self-destruct time, in seconds; 0 if disabled */
	message_auto_delete_time: number;
	/** If not 0, a user identifier, which default setting was automatically applied */
	from_user_id: number;
};

/**
 * The chat was boosted by the sender of the message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_chat_boost.html
 */
export type MessageChatBoost = {
	"@type": "messageChatBoost";
	/** Number of times the chat was boosted */
	boost_count: number;
};

/**
 * A forum topic has been created
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_forum_topic_created.html
 */
export type MessageForumTopicCreated = {
	"@type": "messageForumTopicCreated";
	/** Name of the topic */
	name: string;
	/** Icon of the topic */
	icon: ForumTopicIcon;
};

/**
 * A forum topic has been edited
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_forum_topic_edited.html
 */
export type MessageForumTopicEdited = {
	"@type": "messageForumTopicEdited";
	/** If non-empty, the new name of the topic */
	name?: string;
	/** True, if icon's custom_emoji_id is changed */
	edit_icon_custom_emoji_id: boolean;
	/** New unique identifier of the custom emoji shown on the topic icon; 0 if none. Must be ignored if edit_icon_custom_emoji_id is false */
	icon_custom_emoji_id: string;
};

/**
 * A forum topic has been closed or opened
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_forum_topic_is_closed_toggled.html
 */
export type MessageForumTopicIsClosedToggled = {
	"@type": "messageForumTopicIsClosedToggled";
	/** True, if the topic was closed; otherwise, the topic was reopened */
	is_closed: boolean;
};

/**
 * A General forum topic has been hidden or unhidden
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_forum_topic_is_hidden_toggled.html
 */
export type MessageForumTopicIsHiddenToggled = {
	"@type": "messageForumTopicIsHiddenToggled";
	/** True, if the topic was hidden; otherwise, the topic was unhidden */
	is_hidden: boolean;
};

/**
 * A profile photo was suggested to a user in a private chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_suggest_profile_photo.html
 */
export type MessageSuggestProfilePhoto = {
	"@type": "messageSuggestProfilePhoto";
	/** The suggested chat photo. Use the method setProfilePhoto with inputChatPhotoPrevious to apply the photo */
	photo: ChatPhoto;
};

/**
 * A non-standard action has happened in the chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_custom_service_action.html
 */
export type MessageCustomServiceAction = {
	"@type": "messageCustomServiceAction";
	/** Message text to be shown in the chat */
	text: string;
};

/**
 * A new high score was achieved in a game
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_game_score.html
 */
export type MessageGameScore = {
	"@type": "messageGameScore";
	/** Identifier of the message with the game, can be an identifier of a deleted message */
	game_message_id: number;
	/** Identifier of the game; may be different from the games presented in the message with the game */
	game_id: string;
	/** New score */
	score: number;
};

/**
 * A payment has been sent to a bot or a business account
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_payment_successful.html
 */
export type MessagePaymentSuccessful = {
	"@type": "messagePaymentSuccessful";
	/** Identifier of the chat, containing the corresponding invoice message */
	invoice_chat_id: number;
	/** Identifier of the message with the corresponding invoice; can be 0 or an identifier of a deleted message */
	invoice_message_id: number;
	/** Currency for the price of the product */
	currency: string;
	/** Total price for the product, in the smallest units of the currency */
	total_amount: number;
	/** Point in time (Unix timestamp) when the subscription will expire; 0 if unknown or the payment isn't recurring */
	subscription_until_date: number;
	/** True, if this is a recurring payment */
	is_recurring: boolean;
	/** True, if this is the first recurring payment */
	is_first_recurring: boolean;
	/** Name of the invoice; may be empty if unknown */
	invoice_name?: string;
};

/**
 * A payment has been received by the bot or the business account
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_payment_successful_bot.html
 */
export type MessagePaymentSuccessfulBot = {
	"@type": "messagePaymentSuccessfulBot";
	/** Currency for price of the product */
	currency: string;
	/** Total price for the product, in the smallest units of the currency */
	total_amount: number;
	/** Point in time (Unix timestamp) when the subscription will expire; 0 if unknown or the payment isn't recurring */
	subscription_until_date: number;
	/** True, if this is a recurring payment */
	is_recurring: boolean;
	/** True, if this is the first recurring payment */
	is_first_recurring: boolean;
	/** Invoice payload */
	invoice_payload: string;
	/** Identifier of the shipping option chosen by the user; may be empty if not applicable; for bots only */
	shipping_option_id?: string;
	/** Information about the order; may be null; for bots only */
	order_info?: OrderInfo;
	/** Telegram payment identifier */
	telegram_payment_charge_id: string;
	/** Provider payment identifier */
	provider_payment_charge_id: string;
};

/**
 * A payment has been refunded
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_payment_refunded.html
 */
export type MessagePaymentRefunded = {
	"@type": "messagePaymentRefunded";
	/** Identifier of the previous owner of the Telegram Stars that refunds them */
	owner_id: MessageSender;
	/** Currency for the price of the product */
	currency: string;
	/** Total price for the product, in the smallest units of the currency */
	total_amount: number;
	/** Invoice payload; only for bots */
	invoice_payload: string;
	/** Telegram payment identifier */
	telegram_payment_charge_id: string;
	/** Provider payment identifier */
	provider_payment_charge_id: string;
};

/**
 * Telegram Premium was gifted to a user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_gifted_premium.html
 */
export type MessageGiftedPremium = {
	"@type": "messageGiftedPremium";
	/** The identifier of a user that gifted Telegram Premium; 0 if the gift was anonymous or is outgoing */
	gifter_user_id: number;
	/** The identifier of a user that received Telegram Premium; 0 if the gift is incoming */
	receiver_user_id: number;
	/** Message added to the gifted Telegram Premium by the sender */
	text: FormattedText;
	/** Currency for the paid amount */
	currency: string;
	/** The paid amount, in the smallest units of the currency */
	amount: number;
	/** Cryptocurrency used to pay for the gift; may be empty if none */
	cryptocurrency?: string;
	/** The paid amount, in the smallest units of the cryptocurrency; 0 if none */
	cryptocurrency_amount: string;
	/** Number of months the Telegram Premium subscription will be active */
	month_count: number;
	/** A sticker to be shown in the message; may be null if unknown */
	sticker?: Sticker;
};

/**
 * A Telegram Premium gift code was created for the user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_premium_gift_code.html
 */
export type MessagePremiumGiftCode = {
	"@type": "messagePremiumGiftCode";
	/** Identifier of a chat or a user that created the gift code; may be null if unknown */
	creator_id?: MessageSender;
	/** Message added to the gift */
	text: FormattedText;
	/** True, if the gift code was created for a giveaway */
	is_from_giveaway: boolean;
	/** True, if the winner for the corresponding Telegram Premium subscription wasn't chosen */
	is_unclaimed: boolean;
	/** Currency for the paid amount; empty if unknown */
	currency: string;
	/** The paid amount, in the smallest units of the currency; 0 if unknown */
	amount: number;
	/** Cryptocurrency used to pay for the gift; may be empty if none or unknown */
	cryptocurrency?: string;
	/** The paid amount, in the smallest units of the cryptocurrency; 0 if unknown */
	cryptocurrency_amount: string;
	/** Number of months the Telegram Premium subscription will be active after code activation */
	month_count: number;
	/** A sticker to be shown in the message; may be null if unknown */
	sticker?: Sticker;
	/** The gift code */
	code: string;
};

/**
 * A giveaway was created for the chat. Use telegramPaymentPurposePremiumGiveaway, storePaymentPurposePremiumGiveaway, telegramPaymentPurposeStarGiveaway, or storePaymentPurposeStarGiveaway to create a giveaway
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_giveaway_created.html
 */
export type MessageGiveawayCreated = {
	"@type": "messageGiveawayCreated";
	/** Number of Telegram Stars that will be shared by winners of the giveaway; 0 for Telegram Premium giveaways */
	star_count: number;
};

/**
 * A giveaway
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_giveaway.html
 */
export type MessageGiveaway = {
	"@type": "messageGiveaway";
	/** Giveaway parameters */
	parameters: GiveawayParameters;
	/** Number of users which will receive Telegram Premium subscription gift codes */
	winner_count: number;
	/** Prize of the giveaway */
	prize: GiveawayPrize;
	/** A sticker to be shown in the message; may be null if unknown */
	sticker?: Sticker;
};

/**
 * A giveaway without public winners has been completed for the chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_giveaway_completed.html
 */
export type MessageGiveawayCompleted = {
	"@type": "messageGiveawayCompleted";
	/** Identifier of the message with the giveaway; can be 0 if the message was deleted */
	giveaway_message_id: number;
	/** Number of winners in the giveaway */
	winner_count: number;
	/** True, if the giveaway is a Telegram Star giveaway */
	is_star_giveaway: boolean;
	/** Number of undistributed prizes; for Telegram Premium giveaways only */
	unclaimed_prize_count: number;
};

/**
 * A giveaway with public winners has been completed for the chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_giveaway_winners.html
 */
export type MessageGiveawayWinners = {
	"@type": "messageGiveawayWinners";
	/** Identifier of the supergroup or channel chat, which was automatically boosted by the winners of the giveaway */
	boosted_chat_id: number;
	/** Identifier of the message with the giveaway in the boosted chat */
	giveaway_message_id: number;
	/** Number of other chats that participated in the giveaway */
	additional_chat_count: number;
	/** Point in time (Unix timestamp) when the winners were selected. May be bigger than winners selection date specified in parameters of the giveaway */
	actual_winners_selection_date: number;
	/** True, if only new members of the chats were eligible for the giveaway */
	only_new_members: boolean;
	/** True, if the giveaway was canceled and was fully refunded */
	was_refunded: boolean;
	/** Prize of the giveaway */
	prize: GiveawayPrize;
	/** Additional description of the giveaway prize */
	prize_description: string;
	/** Total number of winners in the giveaway */
	winner_count: number;
	/** Up to 100 user identifiers of the winners of the giveaway */
	winner_user_ids: number[];
	/** Number of undistributed prizes; for Telegram Premium giveaways only */
	unclaimed_prize_count: number;
};

/**
 * Telegram Stars were gifted to a user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_gifted_stars.html
 */
export type MessageGiftedStars = {
	"@type": "messageGiftedStars";
	/** The identifier of a user that gifted Telegram Stars; 0 if the gift was anonymous or is outgoing */
	gifter_user_id: number;
	/** The identifier of a user that received Telegram Stars; 0 if the gift is incoming */
	receiver_user_id: number;
	/** Currency for the paid amount */
	currency: string;
	/** The paid amount, in the smallest units of the currency */
	amount: number;
	/** Cryptocurrency used to pay for the gift; may be empty if none */
	cryptocurrency?: string;
	/** The paid amount, in the smallest units of the cryptocurrency; 0 if none */
	cryptocurrency_amount: string;
	/** Number of Telegram Stars that were gifted */
	star_count: number;
	/** Identifier of the transaction for Telegram Stars purchase; for receiver only */
	transaction_id: string;
	/** A sticker to be shown in the message; may be null if unknown */
	sticker?: Sticker;
};

/**
 * A Telegram Stars were received by the current user from a giveaway
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_giveaway_prize_stars.html
 */
export type MessageGiveawayPrizeStars = {
	"@type": "messageGiveawayPrizeStars";
	/** Number of Telegram Stars that were received */
	star_count: number;
	/** Identifier of the transaction for Telegram Stars credit */
	transaction_id: string;
	/** Identifier of the supergroup or channel chat, which was automatically boosted by the winners of the giveaway */
	boosted_chat_id: number;
	/** Identifier of the message with the giveaway in the boosted chat; can be 0 if the message was deleted */
	giveaway_message_id: number;
	/** True, if the corresponding winner wasn't chosen and the Telegram Stars were received by the owner of the boosted chat */
	is_unclaimed: boolean;
	/** A sticker to be shown in the message; may be null if unknown */
	sticker?: Sticker;
};

/**
 * A regular gift was received or sent by the current user, or the current user was notified about a channel gift
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_gift.html
 */
export type MessageGift = {
	"@type": "messageGift";
	/** The gift */
	gift: Gift;
	/** Sender of the gift */
	sender_id: MessageSender;
	/** Receiver of the gift */
	receiver_id: MessageSender;
	/** Unique identifier of the received gift for the current user; only for the receiver of the gift */
	received_gift_id: string;
	/** Message added to the gift */
	text: FormattedText;
	/** Number of Telegram Stars that can be claimed by the receiver instead of the regular gift; 0 if the gift can't be sold by the receiver */
	sell_star_count: number;
	/** Number of Telegram Stars that were paid by the sender for the ability to upgrade the gift */
	prepaid_upgrade_star_count: number;
	/** True, if the sender and gift text are shown only to the gift receiver; otherwise, everyone will be able to see them */
	is_private: boolean;
	/** True, if the gift is displayed on the user's or the channel's profile page; only for the receiver of the gift */
	is_saved: boolean;
	/** True, if the gift can be upgraded to a unique gift; only for the receiver of the gift */
	can_be_upgraded: boolean;
	/** True, if the gift was converted to Telegram Stars; only for the receiver of the gift */
	was_converted: boolean;
	/** True, if the gift was upgraded to a unique gift */
	was_upgraded: boolean;
	/** True, if the gift was refunded and isn't available anymore */
	was_refunded: boolean;
	/** Identifier of the corresponding upgraded gift; may be empty if unknown. Use getReceivedGift to get information about the gift */
	upgraded_received_gift_id?: string;
};

/**
 * An upgraded gift was received or sent by the current user, or the current user was notified about a channel gift
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_upgraded_gift.html
 */
export type MessageUpgradedGift = {
	"@type": "messageUpgradedGift";
	/** The gift */
	gift: UpgradedGift;
	/** Sender of the gift; may be null for anonymous gifts */
	sender_id?: MessageSender;
	/** Receiver of the gift */
	receiver_id: MessageSender;
	/** Unique identifier of the received gift for the current user; only for the receiver of the gift */
	received_gift_id: string;
	/** True, if the gift was obtained by upgrading of a previously received gift; otherwise, this is a transferred or resold gift */
	is_upgrade: boolean;
	/** True, if the gift is displayed on the user's or the channel's profile page; only for the receiver of the gift */
	is_saved: boolean;
	/** True, if the gift can be transferred to another owner; only for the receiver of the gift */
	can_be_transferred: boolean;
	/** True, if the gift was transferred to another owner; only for the receiver of the gift */
	was_transferred: boolean;
	/** Number of Telegram Stars that were paid by the sender for the gift; 0 if the gift was upgraded or transferred */
	last_resale_star_count: number;
	/** Number of Telegram Stars that must be paid to transfer the upgraded gift; only for the receiver of the gift */
	transfer_star_count: number;
	/** Point in time (Unix timestamp) when the gift can be transferred to another owner; 0 if the gift can be transferred immediately or transfer isn't possible; only for the receiver of the gift */
	next_transfer_date: number;
	/** Point in time (Unix timestamp) when the gift can be resold to another user; 0 if the gift can't be resold; only for the receiver of the gift */
	next_resale_date: number;
	/** Point in time (Unix timestamp) when the gift can be transferred to the TON blockchain as an NFT; 0 if NFT export isn't possible; only for the receiver of the gift */
	export_date: number;
};

/**
 * A gift which purchase, upgrade or transfer were refunded
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_refunded_upgraded_gift.html
 */
export type MessageRefundedUpgradedGift = {
	"@type": "messageRefundedUpgradedGift";
	/** The gift */
	gift: Gift;
	/** Sender of the gift */
	sender_id: MessageSender;
	/** Receiver of the gift */
	receiver_id: MessageSender;
	/** True, if the gift was obtained by upgrading of a previously received gift; otherwise, this is a transferred or resold gift */
	is_upgrade: boolean;
};

/**
 * Paid messages were refunded
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_paid_messages_refunded.html
 */
export type MessagePaidMessagesRefunded = {
	"@type": "messagePaidMessagesRefunded";
	/** The number of refunded messages */
	message_count: number;
	/** The number of refunded Telegram Stars */
	star_count: number;
};

/**
 * A price for paid messages was changed in the supergroup chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_paid_message_price_changed.html
 */
export type MessagePaidMessagePriceChanged = {
	"@type": "messagePaidMessagePriceChanged";
	/** The new number of Telegram Stars that must be paid by non-administrator users of the supergroup chat for each sent message */
	paid_message_star_count: number;
};

/**
 * A price for direct messages was changed in the channel chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_direct_message_price_changed.html
 */
export type MessageDirectMessagePriceChanged = {
	"@type": "messageDirectMessagePriceChanged";
	/** True, if direct messages group was enabled for the channel; false otherwise */
	is_enabled: boolean;
	/** The new number of Telegram Stars that must be paid by non-administrator users of the channel chat for each message sent to the direct messages group; 0 if the direct messages group was disabled or the messages are free */
	paid_message_star_count: number;
};

/**
 * A contact has registered with Telegram
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_contact_registered.html
 */
export type MessageContactRegistered = {
	"@type": "messageContactRegistered";
};

/**
 * The current user shared users, which were requested by the bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_users_shared.html
 */
export type MessageUsersShared = {
	"@type": "messageUsersShared";
	/** The shared users */
	users: SharedUser[];
	/** Identifier of the keyboard button with the request */
	button_id: number;
};

/**
 * The current user shared a chat, which was requested by the bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_chat_shared.html
 */
export type MessageChatShared = {
	"@type": "messageChatShared";
	/** The shared chat */
	chat: SharedChat;
	/** Identifier of the keyboard button with the request */
	button_id: number;
};

/**
 * The user allowed the bot to send messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_bot_write_access_allowed.html
 */
export type MessageBotWriteAccessAllowed = {
	"@type": "messageBotWriteAccessAllowed";
	/** The reason why the bot was allowed to write messages */
	reason: BotWriteAccessAllowReason;
};

/**
 * Data from a Web App has been sent to a bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_web_app_data_sent.html
 */
export type MessageWebAppDataSent = {
	"@type": "messageWebAppDataSent";
	/** Text of the keyboardButtonTypeWebApp button, which opened the Web App */
	button_text: string;
};

/**
 * Data from a Web App has been received; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_web_app_data_received.html
 */
export type MessageWebAppDataReceived = {
	"@type": "messageWebAppDataReceived";
	/** Text of the keyboardButtonTypeWebApp button, which opened the Web App */
	button_text: string;
	/** The data */
	data: string;
};

/**
 * Telegram Passport data has been sent to a bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_passport_data_sent.html
 */
export type MessagePassportDataSent = {
	"@type": "messagePassportDataSent";
	/** List of Telegram Passport element types sent */
	types: PassportElementType[];
};

/**
 * Telegram Passport data has been received; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_passport_data_received.html
 */
export type MessagePassportDataReceived = {
	"@type": "messagePassportDataReceived";
	/** List of received Telegram Passport elements */
	elements: EncryptedPassportElement[];
	/** Encrypted data credentials */
	credentials: EncryptedCredentials;
};

/**
 * A user in the chat came within proximity alert range
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_proximity_alert_triggered.html
 */
export type MessageProximityAlertTriggered = {
	"@type": "messageProximityAlertTriggered";
	/** The identifier of a user or chat that triggered the proximity alert */
	traveler_id: MessageSender;
	/** The identifier of a user or chat that subscribed for the proximity alert */
	watcher_id: MessageSender;
	/** The distance between the users */
	distance: number;
};

/**
 * A message content that is not supported in the current TDLib version
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_unsupported.html
 */
export type MessageUnsupported = {
	"@type": "messageUnsupported";
};

/**
 * A mention of a user, a supergroup, or a channel by their username
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1text_entity_type_mention.html
 */
export type TextEntityTypeMention = {
	"@type": "textEntityTypeMention";
};

/**
 * A hashtag text, beginning with "#" and optionally containing a chat username at the end
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1text_entity_type_hashtag.html
 */
export type TextEntityTypeHashtag = {
	"@type": "textEntityTypeHashtag";
};

/**
 * A cashtag text, beginning with "$", consisting of capital English letters (e.g., "$USD"), and optionally containing a chat username at the end
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1text_entity_type_cashtag.html
 */
export type TextEntityTypeCashtag = {
	"@type": "textEntityTypeCashtag";
};

/**
 * A bot command, beginning with "/"
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1text_entity_type_bot_command.html
 */
export type TextEntityTypeBotCommand = {
	"@type": "textEntityTypeBotCommand";
};

/**
 * An HTTP URL
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1text_entity_type_url.html
 */
export type TextEntityTypeUrl = {
	"@type": "textEntityTypeUrl";
};

/**
 * An email address
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1text_entity_type_email_address.html
 */
export type TextEntityTypeEmailAddress = {
	"@type": "textEntityTypeEmailAddress";
};

/**
 * A phone number
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1text_entity_type_phone_number.html
 */
export type TextEntityTypePhoneNumber = {
	"@type": "textEntityTypePhoneNumber";
};

/**
 * A bank card number. The getBankCardInfo method can be used to get information about the bank card
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1text_entity_type_bank_card_number.html
 */
export type TextEntityTypeBankCardNumber = {
	"@type": "textEntityTypeBankCardNumber";
};

/**
 * A bold text
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1text_entity_type_bold.html
 */
export type TextEntityTypeBold = {
	"@type": "textEntityTypeBold";
};

/**
 * An italic text
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1text_entity_type_italic.html
 */
export type TextEntityTypeItalic = {
	"@type": "textEntityTypeItalic";
};

/**
 * An underlined text
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1text_entity_type_underline.html
 */
export type TextEntityTypeUnderline = {
	"@type": "textEntityTypeUnderline";
};

/**
 * A strikethrough text
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1text_entity_type_strikethrough.html
 */
export type TextEntityTypeStrikethrough = {
	"@type": "textEntityTypeStrikethrough";
};

/**
 * A spoiler text
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1text_entity_type_spoiler.html
 */
export type TextEntityTypeSpoiler = {
	"@type": "textEntityTypeSpoiler";
};

/**
 * Text that must be formatted as if inside a code HTML tag
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1text_entity_type_code.html
 */
export type TextEntityTypeCode = {
	"@type": "textEntityTypeCode";
};

/**
 * Text that must be formatted as if inside a pre HTML tag
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1text_entity_type_pre.html
 */
export type TextEntityTypePre = {
	"@type": "textEntityTypePre";
};

/**
 * Text that must be formatted as if inside pre, and code HTML tags
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1text_entity_type_pre_code.html
 */
export type TextEntityTypePreCode = {
	"@type": "textEntityTypePreCode";
	/** Programming language of the code; as defined by the sender */
	language: string;
};

/**
 * Text that must be formatted as if inside a blockquote HTML tag; not supported in secret chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1text_entity_type_block_quote.html
 */
export type TextEntityTypeBlockQuote = {
	"@type": "textEntityTypeBlockQuote";
};

/**
 * Text that must be formatted as if inside a blockquote HTML tag and collapsed by default to 3 lines with the ability to show full text; not supported in secret chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1text_entity_type_expandable_block_quote.html
 */
export type TextEntityTypeExpandableBlockQuote = {
	"@type": "textEntityTypeExpandableBlockQuote";
};

/**
 * A text description shown instead of a raw URL
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1text_entity_type_text_url.html
 */
export type TextEntityTypeTextUrl = {
	"@type": "textEntityTypeTextUrl";
	/** HTTP or tg:// URL to be opened when the link is clicked */
	url: string;
};

/**
 * A text shows instead of a raw mention of the user (e.g., when the user has no username)
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1text_entity_type_mention_name.html
 */
export type TextEntityTypeMentionName = {
	"@type": "textEntityTypeMentionName";
	/** Identifier of the mentioned user */
	user_id: number;
};

/**
 * A custom emoji. The text behind a custom emoji must be an emoji. Only premium users can use premium custom emoji
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1text_entity_type_custom_emoji.html
 */
export type TextEntityTypeCustomEmoji = {
	"@type": "textEntityTypeCustomEmoji";
	/** Unique identifier of the custom emoji */
	custom_emoji_id: string;
};

/**
 * A media timestamp
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1text_entity_type_media_timestamp.html
 */
export type TextEntityTypeMediaTimestamp = {
	"@type": "textEntityTypeMediaTimestamp";
	/** Timestamp from which a video/audio/video note/voice note/story playing must start, in seconds. The media can be in the content or the link preview of the current message, or in the same places in the replied message */
	media_timestamp: number;
};

/**
 * A thumbnail to be sent along with a file; must be in JPEG or WEBP format for stickers, and less than 200 KB in size
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_thumbnail.html
 */
export type InputThumbnail = {
	"@type": "inputThumbnail";
	/** Thumbnail file to send. Sending thumbnails by file_id is currently not supported */
	thumbnail: InputFile;
	/** Thumbnail width, usually shouldn't exceed 320. Use 0 if unknown */
	width: number;
	/** Thumbnail height, usually shouldn't exceed 320. Use 0 if unknown */
	height: number;
};

/**
 * The media is a photo. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_paid_media_type_photo.html
 */
export type InputPaidMediaTypePhoto = {
	"@type": "inputPaidMediaTypePhoto";
};

/**
 * The media is a video
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_paid_media_type_video.html
 */
export type InputPaidMediaTypeVideo = {
	"@type": "inputPaidMediaTypeVideo";
	/** Cover of the video; pass null to skip cover uploading */
	cover?: InputFile;
	/** Timestamp from which the video playing must start, in seconds */
	start_timestamp: number;
	/** Duration of the video, in seconds */
	duration: number;
	/** True, if the video is expected to be streamed */
	supports_streaming: boolean;
};

/**
 * Describes a paid media to be sent
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_paid_media.html
 */
export type InputPaidMedia = {
	"@type": "inputPaidMedia";
	/** Type of the media */
	type: InputPaidMediaType;
	/** Photo or video to be sent */
	media: InputFile;
	/** Media thumbnail; pass null to skip thumbnail uploading */
	thumbnail?: InputThumbnail;
	/** File identifiers of the stickers added to the media, if applicable */
	added_sticker_file_ids: number[];
	/** Media width */
	width: number;
	/** Media height */
	height: number;
};

/**
 * The message will be sent at the specified date
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_scheduling_state_send_at_date.html
 */
export type MessageSchedulingStateSendAtDate = {
	"@type": "messageSchedulingStateSendAtDate";
	/** Point in time (Unix timestamp) when the message will be sent. The date must be within 367 days in the future */
	send_date: number;
};

/**
 * The message will be sent when the other user is online. Applicable to private chats only and when the exact online status of the other user is known
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_scheduling_state_send_when_online.html
 */
export type MessageSchedulingStateSendWhenOnline = {
	"@type": "messageSchedulingStateSendWhenOnline";
};

/**
 * The message will be sent when the video in the message is converted and optimized; can be used only by the server
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_scheduling_state_send_when_video_processed.html
 */
export type MessageSchedulingStateSendWhenVideoProcessed = {
	"@type": "messageSchedulingStateSendWhenVideoProcessed";
	/** Approximate point in time (Unix timestamp) when the message is expected to be sent */
	send_date: number;
};

/**
 * The message will be self-destructed in the specified time after its content was opened
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_self_destruct_type_timer.html
 */
export type MessageSelfDestructTypeTimer = {
	"@type": "messageSelfDestructTypeTimer";
	/** The message's self-destruct time, in seconds; must be between 0 and 60 in private chats */
	self_destruct_time: number;
};

/**
 * The message can be opened only once and will be self-destructed once closed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_self_destruct_type_immediately.html
 */
export type MessageSelfDestructTypeImmediately = {
	"@type": "messageSelfDestructTypeImmediately";
};

/**
 * Options to be used when a message is sent
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_send_options.html
 */
export type MessageSendOptions = {
	"@type": "messageSendOptions";
	/** Unique identifier of the topic in a channel direct messages chat administered by the current user; pass 0 if the chat isn't a channel direct messages chat administered by the current user */
	direct_messages_chat_topic_id: number;
	/** Pass true to disable notification for the message */
	disable_notification: boolean;
	/** Pass true if the message is sent from the background */
	from_background: boolean;
	/** Pass true if the content of the message must be protected from forwarding and saving; for bots only */
	protect_content: boolean;
	/** Pass true to allow the message to ignore regular broadcast limits for a small fee; for bots only */
	allow_paid_broadcast: boolean;
	/** The number of Telegram Stars the user agreed to pay to send the messages */
	paid_message_star_count: number;
	/** Pass true if the user explicitly chosen a sticker or a custom emoji from an installed sticker set; applicable only to sendMessage and sendMessageAlbum */
	update_order_of_installed_sticker_sets: boolean;
	/** Message scheduling state; pass null to send message immediately. Messages sent to a secret chat, to a chat with paid messages, to a channel direct messages chat, live location messages and self-destructing messages can't be scheduled */
	scheduling_state?: MessageSchedulingState;
	/** Identifier of the effect to apply to the message; pass 0 if none; applicable only to sendMessage and sendMessageAlbum in private chats */
	effect_id: string;
	/** Non-persistent identifier, which will be returned back in messageSendingStatePending object and can be used to match sent messages and corresponding updateNewMessage updates */
	sending_id: number;
	/** Pass true to get a fake message instead of actually sending them */
	only_preview: boolean;
};

/**
 * Options to be used when a message content is copied without reference to the original sender. Service messages, messages with messageInvoice, messagePaidMedia, messageGiveaway, or messageGiveawayWinners content can't be copied
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_copy_options.html
 */
export type MessageCopyOptions = {
	"@type": "messageCopyOptions";
	/** True, if content of the message needs to be copied without reference to the original sender. Always true if the message is forwarded to a secret chat or is local. Use messageProperties.can_be_copied and messageProperties.can_be_copied_to_secret_chat to check whether the message is suitable */
	send_copy: boolean;
	/** True, if media caption of the message copy needs to be replaced. Ignored if send_copy is false */
	replace_caption: boolean;
	/** New message caption; pass null to copy message without caption. Ignored if replace_caption is false */
	new_caption?: FormattedText;
	/** True, if new caption must be shown above the media; otherwise, new caption must be shown below the media; not supported in secret chats. Ignored if replace_caption is false */
	new_show_caption_above_media: boolean;
};

/**
 * A text message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_message_text.html
 */
export type InputMessageText = {
	"@type": "inputMessageText";
	/** Formatted text to be sent; 0-getOption("message_text_length_max") characters. Only Bold, Italic, Underline, Strikethrough, Spoiler, CustomEmoji, BlockQuote, ExpandableBlockQuote, Code, Pre, PreCode, TextUrl and MentionName entities are allowed to be specified manually */
	text: FormattedText;
	/** Options to be used for generation of a link preview; may be null if none; pass null to use default link preview options */
	link_preview_options?: LinkPreviewOptions;
	/** True, if a chat message draft must be deleted */
	clear_draft: boolean;
};

/**
 * An animation message (GIF-style).
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_message_animation.html
 */
export type InputMessageAnimation = {
	"@type": "inputMessageAnimation";
	/** Animation file to be sent */
	animation: InputFile;
	/** Animation thumbnail; pass null to skip thumbnail uploading */
	thumbnail?: InputThumbnail;
	/** File identifiers of the stickers added to the animation, if applicable */
	added_sticker_file_ids: number[];
	/** Duration of the animation, in seconds */
	duration: number;
	/** Width of the animation; may be replaced by the server */
	width: number;
	/** Height of the animation; may be replaced by the server */
	height: number;
	/** Animation caption; pass null to use an empty caption; 0-getOption("message_caption_length_max") characters */
	caption?: FormattedText;
	/** True, if the caption must be shown above the animation; otherwise, the caption must be shown below the animation; not supported in secret chats */
	show_caption_above_media: boolean;
	/** True, if the animation preview must be covered by a spoiler animation; not supported in secret chats */
	has_spoiler: boolean;
};

/**
 * An audio message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_message_audio.html
 */
export type InputMessageAudio = {
	"@type": "inputMessageAudio";
	/** Audio file to be sent */
	audio: InputFile;
	/** Thumbnail of the cover for the album; pass null to skip thumbnail uploading */
	album_cover_thumbnail?: InputThumbnail;
	/** Duration of the audio, in seconds; may be replaced by the server */
	duration: number;
	/** Title of the audio; 0-64 characters; may be replaced by the server */
	title: string;
	/** Performer of the audio; 0-64 characters, may be replaced by the server */
	performer: string;
	/** Audio caption; pass null to use an empty caption; 0-getOption("message_caption_length_max") characters */
	caption?: FormattedText;
};

/**
 * A document message (general file)
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_message_document.html
 */
export type InputMessageDocument = {
	"@type": "inputMessageDocument";
	/** Document to be sent */
	document: InputFile;
	/** Document thumbnail; pass null to skip thumbnail uploading */
	thumbnail?: InputThumbnail;
	/** Pass true to disable automatic file type detection and send the document as a file. Always true for files sent to secret chats */
	disable_content_type_detection: boolean;
	/** Document caption; pass null to use an empty caption; 0-getOption("message_caption_length_max") characters */
	caption?: FormattedText;
};

/**
 * A message with paid media; can be used only in channel chats with supergroupFullInfo.has_paid_media_allowed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_message_paid_media.html
 */
export type InputMessagePaidMedia = {
	"@type": "inputMessagePaidMedia";
	/** The number of Telegram Stars that must be paid to see the media; 1-getOption("paid_media_message_star_count_max") */
	star_count: number;
	/** The content of the paid media */
	paid_media: InputPaidMedia[];
	/** Message caption; pass null to use an empty caption; 0-getOption("message_caption_length_max") characters */
	caption?: FormattedText;
	/** True, if the caption must be shown above the media; otherwise, the caption must be shown below the media; not supported in secret chats */
	show_caption_above_media: boolean;
	/** Bot-provided data for the paid media; bots only */
	payload: string;
};

/**
 * A photo message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_message_photo.html
 */
export type InputMessagePhoto = {
	"@type": "inputMessagePhoto";
	/** Photo to send. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20 */
	photo: InputFile;
	/** Photo thumbnail to be sent; pass null to skip thumbnail uploading. The thumbnail is sent to the other party only in secret chats */
	thumbnail?: InputThumbnail;
	/** File identifiers of the stickers added to the photo, if applicable */
	added_sticker_file_ids: number[];
	/** Photo width */
	width: number;
	/** Photo height */
	height: number;
	/** Photo caption; pass null to use an empty caption; 0-getOption("message_caption_length_max") characters */
	caption?: FormattedText;
	/** True, if the caption must be shown above the photo; otherwise, the caption must be shown below the photo; not supported in secret chats */
	show_caption_above_media: boolean;
	/** Photo self-destruct type; pass null if none; private chats only */
	self_destruct_type?: MessageSelfDestructType;
	/** True, if the photo preview must be covered by a spoiler animation; not supported in secret chats */
	has_spoiler: boolean;
};

/**
 * A sticker message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_message_sticker.html
 */
export type InputMessageSticker = {
	"@type": "inputMessageSticker";
	/** Sticker to be sent */
	sticker: InputFile;
	/** Sticker thumbnail; pass null to skip thumbnail uploading */
	thumbnail?: InputThumbnail;
	/** Sticker width */
	width: number;
	/** Sticker height */
	height: number;
	/** Emoji used to choose the sticker */
	emoji: string;
};

/**
 * A video message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_message_video.html
 */
export type InputMessageVideo = {
	"@type": "inputMessageVideo";
	/** Video to be sent. The video is expected to be re-encoded to MPEG4 format with H.264 codec by the sender */
	video: InputFile;
	/** Video thumbnail; pass null to skip thumbnail uploading */
	thumbnail?: InputThumbnail;
	/** Cover of the video; pass null to skip cover uploading; not supported in secret chats and for self-destructing messages */
	cover?: InputFile;
	/** Timestamp from which the video playing must start, in seconds */
	start_timestamp: number;
	/** File identifiers of the stickers added to the video, if applicable */
	added_sticker_file_ids: number[];
	/** Duration of the video, in seconds */
	duration: number;
	/** Video width */
	width: number;
	/** Video height */
	height: number;
	/** True, if the video is expected to be streamed */
	supports_streaming: boolean;
	/** Video caption; pass null to use an empty caption; 0-getOption("message_caption_length_max") characters */
	caption?: FormattedText;
	/** True, if the caption must be shown above the video; otherwise, the caption must be shown below the video; not supported in secret chats */
	show_caption_above_media: boolean;
	/** Video self-destruct type; pass null if none; private chats only */
	self_destruct_type?: MessageSelfDestructType;
	/** True, if the video preview must be covered by a spoiler animation; not supported in secret chats */
	has_spoiler: boolean;
};

/**
 * A video note message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_message_video_note.html
 */
export type InputMessageVideoNote = {
	"@type": "inputMessageVideoNote";
	/** Video note to be sent. The video is expected to be encoded to MPEG4 format with H.264 codec and have no data outside of the visible circle */
	video_note: InputFile;
	/** Video thumbnail; may be null if empty; pass null to skip thumbnail uploading */
	thumbnail?: InputThumbnail;
	/** Duration of the video, in seconds; 0-60 */
	duration: number;
	/** Video width and height; must be positive and not greater than 640 */
	length: number;
	/** Video note self-destruct type; may be null if none; pass null if none; private chats only */
	self_destruct_type?: MessageSelfDestructType;
};

/**
 * A voice note message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_message_voice_note.html
 */
export type InputMessageVoiceNote = {
	"@type": "inputMessageVoiceNote";
	/** Voice note to be sent. The voice note must be encoded with the Opus codec and stored inside an OGG container with a single audio channel, or be in MP3 or M4A format as regular audio */
	voice_note: InputFile;
	/** Duration of the voice note, in seconds */
	duration: number;
	/** Waveform representation of the voice note in 5-bit format */
	waveform: string;
	/** Voice note caption; may be null if empty; pass null to use an empty caption; 0-getOption("message_caption_length_max") characters */
	caption?: FormattedText;
	/** Voice note self-destruct type; may be null if none; pass null if none; private chats only */
	self_destruct_type?: MessageSelfDestructType;
};

/**
 * A message with a location
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_message_location.html
 */
export type InputMessageLocation = {
	"@type": "inputMessageLocation";
	/** Location to be sent */
	location: Location;
	/** Period for which the location can be updated, in seconds; must be between 60 and 86400 for a temporary live location, 0x7FFFFFFF for permanent live location, and 0 otherwise */
	live_period: number;
	/** For live locations, a direction in which the location moves, in degrees; 1-360. Pass 0 if unknown */
	heading: number;
	/** For live locations, a maximum distance to another chat member for proximity alerts, in meters (0-100000). Pass 0 if the notification is disabled. Can't be enabled in channels and Saved Messages */
	proximity_alert_radius: number;
};

/**
 * A message with information about a venue
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_message_venue.html
 */
export type InputMessageVenue = {
	"@type": "inputMessageVenue";
	/** Venue to send */
	venue: Venue;
};

/**
 * A message containing a user contact
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_message_contact.html
 */
export type InputMessageContact = {
	"@type": "inputMessageContact";
	/** Contact to send */
	contact: Contact;
};

/**
 * A dice message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_message_dice.html
 */
export type InputMessageDice = {
	"@type": "inputMessageDice";
	/** Emoji on which the dice throw animation is based */
	emoji: string;
	/** True, if the chat message draft must be deleted */
	clear_draft: boolean;
};

/**
 * A message with a game; not supported for channels or secret chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_message_game.html
 */
export type InputMessageGame = {
	"@type": "inputMessageGame";
	/** User identifier of the bot that owns the game */
	bot_user_id: number;
	/** Short name of the game */
	game_short_name: string;
};

/**
 * A message with an invoice; can be used only by bots
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_message_invoice.html
 */
export type InputMessageInvoice = {
	"@type": "inputMessageInvoice";
	/** Invoice */
	invoice: Invoice;
	/** Product title; 1-32 characters */
	title: string;
	/** Product description; 0-255 characters */
	description: string;
	/** Product photo URL; optional */
	photo_url: string;
	/** Product photo size */
	photo_size: number;
	/** Product photo width */
	photo_width: number;
	/** Product photo height */
	photo_height: number;
	/** The invoice payload */
	payload: string;
	/** Payment provider token; may be empty for payments in Telegram Stars */
	provider_token?: string;
	/** JSON-encoded data about the invoice, which will be shared with the payment provider */
	provider_data: string;
	/** Unique invoice bot deep link parameter for the generation of this invoice. If empty, it would be possible to pay directly from forwards of the invoice message */
	start_parameter: string;
	/** The content of paid media attached to the invoice; pass null if none */
	paid_media?: InputPaidMedia;
	/** Paid media caption; pass null to use an empty caption; 0-getOption("message_caption_length_max") characters */
	paid_media_caption?: FormattedText;
};

/**
 * A message with a poll. Polls can't be sent to secret chats and channel direct messages chats. Polls can be sent to a private chat only if the chat is a chat with a bot or the Saved Messages chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_message_poll.html
 */
export type InputMessagePoll = {
	"@type": "inputMessagePoll";
	/** Poll question; 1-255 characters (up to 300 characters for bots). Only custom emoji entities are allowed to be added and only by Premium users */
	question: FormattedText;
	/** List of poll answer options, 2-getOption("poll_answer_count_max") strings 1-100 characters each. Only custom emoji entities are allowed to be added and only by Premium users */
	options: FormattedText[];
	/** True, if the poll voters are anonymous. Non-anonymous polls can't be sent or forwarded to channels */
	is_anonymous: boolean;
	/** Type of the poll */
	type: PollType;
	/** Amount of time the poll will be active after creation, in seconds; for bots only */
	open_period: number;
	/** Point in time (Unix timestamp) when the poll will automatically be closed; for bots only */
	close_date: number;
	/** True, if the poll needs to be sent already closed; for bots only */
	is_closed: boolean;
};

/**
 * A message with a forwarded story. Stories can't be forwarded to secret chats. A story can be forwarded only if story.can_be_forwarded
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_message_story.html
 */
export type InputMessageStory = {
	"@type": "inputMessageStory";
	/** Identifier of the chat that posted the story */
	story_poster_chat_id: number;
	/** Story identifier */
	story_id: number;
};

/**
 * A forwarded message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_message_forwarded.html
 */
export type InputMessageForwarded = {
	"@type": "inputMessageForwarded";
	/** Identifier for the chat this forwarded message came from */
	from_chat_id: number;
	/** Identifier of the message to forward. A message can be forwarded only if messageProperties.can_be_forwarded */
	message_id: number;
	/** Pass true if a game message is being shared from a launched game; applies only to game messages */
	in_game_share: boolean;
	/** Pass true to replace video start timestamp in the forwarded message */
	replace_video_start_timestamp: boolean;
	/** The new video start timestamp; ignored if replace_video_start_timestamp == false */
	new_video_start_timestamp: number;
	/** Options to be used to copy content of the message without reference to the original sender; pass null to forward the message as usual */
	copy_options?: MessageCopyOptions;
};

/**
 * Contains properties of a message and describes actions that can be done with the message right now
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_properties.html
 */
export type MessageProperties = {
	"@type": "messageProperties";
	/** True, if content of the message can be copied using inputMessageForwarded or forwardMessages with copy options */
	can_be_copied: boolean;
	/** True, if content of the message can be copied to a secret chat using inputMessageForwarded or forwardMessages with copy options */
	can_be_copied_to_secret_chat: boolean;
	/** True, if the message can be deleted only for the current user while other users will continue to see it using the method deleteMessages with revoke == false */
	can_be_deleted_only_for_self: boolean;
	/** True, if the message can be deleted for all users using the method deleteMessages with revoke == true */
	can_be_deleted_for_all_users: boolean;
	/** True, if the message can be edited using the methods editMessageText, editMessageCaption, or editMessageReplyMarkup. For live location and poll messages this fields shows whether editMessageLiveLocation or stopPoll can be used with this message */
	can_be_edited: boolean;
	/** True, if the message can be forwarded using inputMessageForwarded or forwardMessages without copy options */
	can_be_forwarded: boolean;
	/** True, if the message can be paid using inputInvoiceMessage */
	can_be_paid: boolean;
	/** True, if the message can be pinned or unpinned in the chat using pinChatMessage or unpinChatMessage */
	can_be_pinned: boolean;
	/** True, if the message can be replied in the same chat and forum topic using inputMessageReplyToMessage */
	can_be_replied: boolean;
	/** True, if the message can be replied in another chat or forum topic using inputMessageReplyToExternalMessage */
	can_be_replied_in_another_chat: boolean;
	/** True, if content of the message can be saved locally */
	can_be_saved: boolean;
	/** True, if the message can be shared in a story using inputStoryAreaTypeMessage */
	can_be_shared_in_story: boolean;
	/** True, if the message can be edited using the method editMessageMedia */
	can_edit_media: boolean;
	/** True, if scheduling state of the message can be edited */
	can_edit_scheduling_state: boolean;
	/** True, if author of the message sent on behalf of a chat can be received through getMessageAuthor */
	can_get_author: boolean;
	/** True, if code for message embedding can be received using getMessageEmbeddingCode */
	can_get_embedding_code: boolean;
	/** True, if a link can be generated for the message using getMessageLink */
	can_get_link: boolean;
	/** True, if media timestamp links can be generated for media timestamp entities in the message text, caption or link preview description using getMessageLink */
	can_get_media_timestamp_links: boolean;
	/** True, if information about the message thread is available through getMessageThread and getMessageThreadHistory */
	can_get_message_thread: boolean;
	/** True, if read date of the message can be received through getMessageReadDate */
	can_get_read_date: boolean;
	/** True, if message statistics are available through getMessageStatistics and message forwards can be received using getMessagePublicForwards */
	can_get_statistics: boolean;
	/** True, if chat members already viewed the message can be received through getMessageViewers */
	can_get_viewers: boolean;
	/** True, if speech can be recognized for the message through recognizeSpeech */
	can_recognize_speech: boolean;
	/** True, if the message can be reported using reportChat */
	can_report_chat: boolean;
	/** True, if reactions on the message can be reported through reportMessageReactions */
	can_report_reactions: boolean;
	/** True, if the message can be reported using reportSupergroupSpam */
	can_report_supergroup_spam: boolean;
	/** True, if fact check for the message can be changed through setMessageFactCheck */
	can_set_fact_check: boolean;
	/** True, if message statistics must be available from context menu of the message */
	need_show_statistics: boolean;
};

/**
 * Returns all found messages, no filter is applied
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_messages_filter_empty.html
 */
export type SearchMessagesFilterEmpty = {
	"@type": "searchMessagesFilterEmpty";
};

/**
 * Returns only animation messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_messages_filter_animation.html
 */
export type SearchMessagesFilterAnimation = {
	"@type": "searchMessagesFilterAnimation";
};

/**
 * Returns only audio messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_messages_filter_audio.html
 */
export type SearchMessagesFilterAudio = {
	"@type": "searchMessagesFilterAudio";
};

/**
 * Returns only document messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_messages_filter_document.html
 */
export type SearchMessagesFilterDocument = {
	"@type": "searchMessagesFilterDocument";
};

/**
 * Returns only photo messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_messages_filter_photo.html
 */
export type SearchMessagesFilterPhoto = {
	"@type": "searchMessagesFilterPhoto";
};

/**
 * Returns only video messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_messages_filter_video.html
 */
export type SearchMessagesFilterVideo = {
	"@type": "searchMessagesFilterVideo";
};

/**
 * Returns only voice note messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_messages_filter_voice_note.html
 */
export type SearchMessagesFilterVoiceNote = {
	"@type": "searchMessagesFilterVoiceNote";
};

/**
 * Returns only photo and video messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_messages_filter_photo_and_video.html
 */
export type SearchMessagesFilterPhotoAndVideo = {
	"@type": "searchMessagesFilterPhotoAndVideo";
};

/**
 * Returns only messages containing URLs
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_messages_filter_url.html
 */
export type SearchMessagesFilterUrl = {
	"@type": "searchMessagesFilterUrl";
};

/**
 * Returns only messages containing chat photos
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_messages_filter_chat_photo.html
 */
export type SearchMessagesFilterChatPhoto = {
	"@type": "searchMessagesFilterChatPhoto";
};

/**
 * Returns only video note messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_messages_filter_video_note.html
 */
export type SearchMessagesFilterVideoNote = {
	"@type": "searchMessagesFilterVideoNote";
};

/**
 * Returns only voice and video note messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_messages_filter_voice_and_video_note.html
 */
export type SearchMessagesFilterVoiceAndVideoNote = {
	"@type": "searchMessagesFilterVoiceAndVideoNote";
};

/**
 * Returns only messages with mentions of the current user, or messages that are replies to their messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_messages_filter_mention.html
 */
export type SearchMessagesFilterMention = {
	"@type": "searchMessagesFilterMention";
};

/**
 * Returns only messages with unread mentions of the current user, or messages that are replies to their messages. When using this filter the results can't be additionally filtered by a query, a message thread or by the sending user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_messages_filter_unread_mention.html
 */
export type SearchMessagesFilterUnreadMention = {
	"@type": "searchMessagesFilterUnreadMention";
};

/**
 * Returns only messages with unread reactions for the current user. When using this filter the results can't be additionally filtered by a query, a message thread or by the sending user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_messages_filter_unread_reaction.html
 */
export type SearchMessagesFilterUnreadReaction = {
	"@type": "searchMessagesFilterUnreadReaction";
};

/**
 * Returns only failed to send messages. This filter can be used only if the message database is used
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_messages_filter_failed_to_send.html
 */
export type SearchMessagesFilterFailedToSend = {
	"@type": "searchMessagesFilterFailedToSend";
};

/**
 * Returns only pinned messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_messages_filter_pinned.html
 */
export type SearchMessagesFilterPinned = {
	"@type": "searchMessagesFilterPinned";
};

/**
 * Returns only messages in private chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_messages_chat_type_filter_private.html
 */
export type SearchMessagesChatTypeFilterPrivate = {
	"@type": "searchMessagesChatTypeFilterPrivate";
};

/**
 * Returns only messages in basic group and supergroup chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_messages_chat_type_filter_group.html
 */
export type SearchMessagesChatTypeFilterGroup = {
	"@type": "searchMessagesChatTypeFilterGroup";
};

/**
 * Returns only messages in channel chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1search_messages_chat_type_filter_channel.html
 */
export type SearchMessagesChatTypeFilterChannel = {
	"@type": "searchMessagesChatTypeFilterChannel";
};

/**
 * The user is typing a message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_action_typing.html
 */
export type ChatActionTyping = {
	"@type": "chatActionTyping";
};

/**
 * The user is recording a video
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_action_recording_video.html
 */
export type ChatActionRecordingVideo = {
	"@type": "chatActionRecordingVideo";
};

/**
 * The user is uploading a video
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_action_uploading_video.html
 */
export type ChatActionUploadingVideo = {
	"@type": "chatActionUploadingVideo";
	/** Upload progress, as a percentage */
	progress: number;
};

/**
 * The user is recording a voice note
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_action_recording_voice_note.html
 */
export type ChatActionRecordingVoiceNote = {
	"@type": "chatActionRecordingVoiceNote";
};

/**
 * The user is uploading a voice note
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_action_uploading_voice_note.html
 */
export type ChatActionUploadingVoiceNote = {
	"@type": "chatActionUploadingVoiceNote";
	/** Upload progress, as a percentage */
	progress: number;
};

/**
 * The user is uploading a photo
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_action_uploading_photo.html
 */
export type ChatActionUploadingPhoto = {
	"@type": "chatActionUploadingPhoto";
	/** Upload progress, as a percentage */
	progress: number;
};

/**
 * The user is uploading a document
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_action_uploading_document.html
 */
export type ChatActionUploadingDocument = {
	"@type": "chatActionUploadingDocument";
	/** Upload progress, as a percentage */
	progress: number;
};

/**
 * The user is picking a sticker to send
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_action_choosing_sticker.html
 */
export type ChatActionChoosingSticker = {
	"@type": "chatActionChoosingSticker";
};

/**
 * The user is picking a location or venue to send
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_action_choosing_location.html
 */
export type ChatActionChoosingLocation = {
	"@type": "chatActionChoosingLocation";
};

/**
 * The user is picking a contact to send
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_action_choosing_contact.html
 */
export type ChatActionChoosingContact = {
	"@type": "chatActionChoosingContact";
};

/**
 * The user has started to play a game
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_action_start_playing_game.html
 */
export type ChatActionStartPlayingGame = {
	"@type": "chatActionStartPlayingGame";
};

/**
 * The user is recording a video note
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_action_recording_video_note.html
 */
export type ChatActionRecordingVideoNote = {
	"@type": "chatActionRecordingVideoNote";
};

/**
 * The user is uploading a video note
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_action_uploading_video_note.html
 */
export type ChatActionUploadingVideoNote = {
	"@type": "chatActionUploadingVideoNote";
	/** Upload progress, as a percentage */
	progress: number;
};

/**
 * The user is watching animations sent by the other party by clicking on an animated emoji
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_action_watching_animations.html
 */
export type ChatActionWatchingAnimations = {
	"@type": "chatActionWatchingAnimations";
	/** The animated emoji */
	emoji: string;
};

/**
 * The user has canceled the previous action
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_action_cancel.html
 */
export type ChatActionCancel = {
	"@type": "chatActionCancel";
};

/**
 * The user's status has never been changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_status_empty.html
 */
export type UserStatusEmpty = {
	"@type": "userStatusEmpty";
};

/**
 * The user is online
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_status_online.html
 */
export type UserStatusOnline = {
	"@type": "userStatusOnline";
	/** Point in time (Unix timestamp) when the user's online status will expire */
	expires: number;
};

/**
 * The user is offline
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_status_offline.html
 */
export type UserStatusOffline = {
	"@type": "userStatusOffline";
	/** Point in time (Unix timestamp) when the user was last online */
	was_online: number;
};

/**
 * The user was online recently
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_status_recently.html
 */
export type UserStatusRecently = {
	"@type": "userStatusRecently";
	/** Exact user's status is hidden because the current user enabled userPrivacySettingShowStatus privacy setting for the user and has no Telegram Premium */
	by_my_privacy_settings: boolean;
};

/**
 * The user is offline, but was online last week
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_status_last_week.html
 */
export type UserStatusLastWeek = {
	"@type": "userStatusLastWeek";
	/** Exact user's status is hidden because the current user enabled userPrivacySettingShowStatus privacy setting for the user and has no Telegram Premium */
	by_my_privacy_settings: boolean;
};

/**
 * The user is offline, but was online last month
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_status_last_month.html
 */
export type UserStatusLastMonth = {
	"@type": "userStatusLastMonth";
	/** Exact user's status is hidden because the current user enabled userPrivacySettingShowStatus privacy setting for the user and has no Telegram Premium */
	by_my_privacy_settings: boolean;
};

/**
 * Represents an emoji with its keyword
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1emoji_keyword.html
 */
export type EmojiKeyword = {
	"@type": "emojiKeyword";
	/** The emoji */
	emoji: string;
	/** The keyword */
	keyword: string;
};

/**
 * Represents a list of emojis with their keywords
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1emoji_keywords.html
 */
export type EmojiKeywords = {
	"@type": "emojiKeywords";
	/** List of emojis with their keywords */
	emoji_keywords: EmojiKeyword[];
};

/**
 * Represents a list of stickers
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1stickers.html
 */
export type Stickers = {
	"@type": "stickers";
	/** List of stickers */
	stickers: Sticker[];
};

/**
 * Represents a list of emojis
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1emojis.html
 */
export type Emojis = {
	"@type": "emojis";
	/** List of emojis */
	emojis: string[];
};

/**
 * Represents a sticker set
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1sticker_set.html
 */
export type StickerSet = {
	"@type": "stickerSet";
	/** Identifier of the sticker set */
	id: string;
	/** Title of the sticker set */
	title: string;
	/** Name of the sticker set */
	name: string;
	/** Sticker set thumbnail in WEBP, TGS, or WEBM format with width and height 100; may be null. The file can be downloaded only before the thumbnail is changed */
	thumbnail?: Thumbnail;
	/** Sticker set thumbnail's outline; may be null if unknown */
	thumbnail_outline?: Outline;
	/** True, if the sticker set is owned by the current user */
	is_owned: boolean;
	/** True, if the sticker set has been installed by the current user */
	is_installed: boolean;
	/** True, if the sticker set has been archived. A sticker set can't be installed and archived simultaneously */
	is_archived: boolean;
	/** True, if the sticker set is official */
	is_official: boolean;
	/** Type of the stickers in the set */
	sticker_type: StickerType;
	/** True, if stickers in the sticker set are custom emoji that must be repainted; for custom emoji sticker sets only */
	needs_repainting: boolean;
	/** True, if stickers in the sticker set are custom emoji that can be used as chat emoji status; for custom emoji sticker sets only */
	is_allowed_as_chat_emoji_status: boolean;
	/** True for already viewed trending sticker sets */
	is_viewed: boolean;
	/** List of stickers in this set */
	stickers: Sticker[];
	/** A list of emojis corresponding to the stickers in the same order. The list is only for informational purposes, because a sticker is always sent with a fixed emoji from the corresponding Sticker object */
	emojis: Emojis[];
};

/**
 * Represents short information about a sticker set
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1sticker_set_info.html
 */
export type StickerSetInfo = {
	"@type": "stickerSetInfo";
	/** Identifier of the sticker set */
	id: string;
	/** Title of the sticker set */
	title: string;
	/** Name of the sticker set */
	name: string;
	/** Sticker set thumbnail in WEBP, TGS, or WEBM format with width and height 100; may be null. The file can be downloaded only before the thumbnail is changed */
	thumbnail?: Thumbnail;
	/** Sticker set thumbnail's outline; may be null if unknown */
	thumbnail_outline?: Outline;
	/** True, if the sticker set is owned by the current user */
	is_owned: boolean;
	/** True, if the sticker set has been installed by the current user */
	is_installed: boolean;
	/** True, if the sticker set has been archived. A sticker set can't be installed and archived simultaneously */
	is_archived: boolean;
	/** True, if the sticker set is official */
	is_official: boolean;
	/** Type of the stickers in the set */
	sticker_type: StickerType;
	/** True, if stickers in the sticker set are custom emoji that must be repainted; for custom emoji sticker sets only */
	needs_repainting: boolean;
	/** True, if stickers in the sticker set are custom emoji that can be used as chat emoji status; for custom emoji sticker sets only */
	is_allowed_as_chat_emoji_status: boolean;
	/** True for already viewed trending sticker sets */
	is_viewed: boolean;
	/** Total number of stickers in the set */
	size: number;
	/** Up to the first 5 stickers from the set, depending on the context. If the application needs more stickers the full sticker set needs to be requested */
	covers: Sticker[];
};

/**
 * Represents a list of sticker sets
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1sticker_sets.html
 */
export type StickerSets = {
	"@type": "stickerSets";
	/** Approximate total number of sticker sets found */
	total_count: number;
	/** List of sticker sets */
	sets: StickerSetInfo[];
};

/**
 * Represents a list of trending sticker sets
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1trending_sticker_sets.html
 */
export type TrendingStickerSets = {
	"@type": "trendingStickerSets";
	/** Approximate total number of trending sticker sets */
	total_count: number;
	/** List of trending sticker sets */
	sets: StickerSetInfo[];
	/** True, if the list contains sticker sets with premium stickers */
	is_premium: boolean;
};

/**
 * The category contains a list of similar emoji to search for in getStickers and searchStickers for stickers, or getInlineQueryResults with the bot getOption("animation_search_bot_username") for animations
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1emoji_category_source_search.html
 */
export type EmojiCategorySourceSearch = {
	"@type": "emojiCategorySourceSearch";
	/** List of emojis to search for */
	emojis: string[];
};

/**
 * The category contains premium stickers that must be found by getPremiumStickers
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1emoji_category_source_premium.html
 */
export type EmojiCategorySourcePremium = {
	"@type": "emojiCategorySourcePremium";
};

/**
 * Describes an emoji category
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1emoji_category.html
 */
export type EmojiCategory = {
	"@type": "emojiCategory";
	/** Name of the category */
	name: string;
	/** Custom emoji sticker, which represents icon of the category */
	icon: Sticker;
	/** Source of stickers for the emoji category */
	source: EmojiCategorySource;
	/** True, if the category must be shown first when choosing a sticker for the start page */
	is_greeting: boolean;
};

/**
 * Represents a list of emoji categories
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1emoji_categories.html
 */
export type EmojiCategories = {
	"@type": "emojiCategories";
	/** List of categories */
	categories: EmojiCategory[];
};

/**
 * The category must be used by default (e.g., for custom emoji or animation search)
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1emoji_category_type_default.html
 */
export type EmojiCategoryTypeDefault = {
	"@type": "emojiCategoryTypeDefault";
};

/**
 * The category must be used by default for regular sticker selection. It may contain greeting emoji category and premium stickers
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1emoji_category_type_regular_stickers.html
 */
export type EmojiCategoryTypeRegularStickers = {
	"@type": "emojiCategoryTypeRegularStickers";
};

/**
 * The category must be used for emoji status selection
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1emoji_category_type_emoji_status.html
 */
export type EmojiCategoryTypeEmojiStatus = {
	"@type": "emojiCategoryTypeEmojiStatus";
};

/**
 * The category must be used for chat photo emoji selection
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1emoji_category_type_chat_photo.html
 */
export type EmojiCategoryTypeChatPhoto = {
	"@type": "emojiCategoryTypeChatPhoto";
};

/**
 * Describes the current weather
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1current_weather.html
 */
export type CurrentWeather = {
	"@type": "currentWeather";
	/** Temperature, in degree Celsius */
	temperature: number;
	/** Emoji representing the weather */
	emoji: string;
};

/**
 * Describes position of a clickable rectangle area on a story media
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1story_area_position.html
 */
export type StoryAreaPosition = {
	"@type": "storyAreaPosition";
	/** The abscissa of the rectangle's center, as a percentage of the media width */
	x_percentage: number;
	/** The ordinate of the rectangle's center, as a percentage of the media height */
	y_percentage: number;
	/** The width of the rectangle, as a percentage of the media width */
	width_percentage: number;
	/** The height of the rectangle, as a percentage of the media height */
	height_percentage: number;
	/** Clockwise rotation angle of the rectangle, in degrees; 0-360 */
	rotation_angle: number;
	/** The radius of the rectangle corner rounding, as a percentage of the media width */
	corner_radius_percentage: number;
};

/**
 * An area pointing to a location
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1story_area_type_location.html
 */
export type StoryAreaTypeLocation = {
	"@type": "storyAreaTypeLocation";
	/** The location */
	location: Location;
	/** Address of the location; may be null if unknown */
	address?: LocationAddress;
};

/**
 * An area pointing to a venue
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1story_area_type_venue.html
 */
export type StoryAreaTypeVenue = {
	"@type": "storyAreaTypeVenue";
	/** Information about the venue */
	venue: Venue;
};

/**
 * An area pointing to a suggested reaction. App needs to show a clickable reaction on the area and call setStoryReaction when the are is clicked
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1story_area_type_suggested_reaction.html
 */
export type StoryAreaTypeSuggestedReaction = {
	"@type": "storyAreaTypeSuggestedReaction";
	/** Type of the reaction */
	reaction_type: ReactionType;
	/** Number of times the reaction was added */
	total_count: number;
	/** True, if reaction has a dark background */
	is_dark: boolean;
	/** True, if reaction corner is flipped */
	is_flipped: boolean;
};

/**
 * An area pointing to a message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1story_area_type_message.html
 */
export type StoryAreaTypeMessage = {
	"@type": "storyAreaTypeMessage";
	/** Identifier of the chat with the message */
	chat_id: number;
	/** Identifier of the message */
	message_id: number;
};

/**
 * An area pointing to a HTTP or tg:// link
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1story_area_type_link.html
 */
export type StoryAreaTypeLink = {
	"@type": "storyAreaTypeLink";
	/** HTTP or tg:// URL to be opened when the area is clicked */
	url: string;
};

/**
 * An area with information about weather
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1story_area_type_weather.html
 */
export type StoryAreaTypeWeather = {
	"@type": "storyAreaTypeWeather";
	/** Temperature, in degree Celsius */
	temperature: number;
	/** Emoji representing the weather */
	emoji: string;
	/** A color of the area background in the ARGB format */
	background_color: number;
};

/**
 * An area with an upgraded gift
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1story_area_type_upgraded_gift.html
 */
export type StoryAreaTypeUpgradedGift = {
	"@type": "storyAreaTypeUpgradedGift";
	/** Unique name of the upgraded gift */
	gift_name: string;
};

/**
 * Describes a clickable rectangle area on a story media
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1story_area.html
 */
export type StoryArea = {
	"@type": "storyArea";
	/** Position of the area */
	position: StoryAreaPosition;
	/** Type of the area */
	type: StoryAreaType;
};

/**
 * An area pointing to a location
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_story_area_type_location.html
 */
export type InputStoryAreaTypeLocation = {
	"@type": "inputStoryAreaTypeLocation";
	/** The location */
	location: Location;
	/** Address of the location; pass null if unknown */
	address?: LocationAddress;
};

/**
 * An area pointing to a venue found by the bot getOption("venue_search_bot_username")
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_story_area_type_found_venue.html
 */
export type InputStoryAreaTypeFoundVenue = {
	"@type": "inputStoryAreaTypeFoundVenue";
	/** Identifier of the inline query, used to found the venue */
	query_id: string;
	/** Identifier of the inline query result */
	result_id: string;
};

/**
 * An area pointing to a venue already added to the story
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_story_area_type_previous_venue.html
 */
export type InputStoryAreaTypePreviousVenue = {
	"@type": "inputStoryAreaTypePreviousVenue";
	/** Provider of the venue */
	venue_provider: string;
	/** Identifier of the venue in the provider database */
	venue_id: string;
};

/**
 * An area pointing to a suggested reaction
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_story_area_type_suggested_reaction.html
 */
export type InputStoryAreaTypeSuggestedReaction = {
	"@type": "inputStoryAreaTypeSuggestedReaction";
	/** Type of the reaction */
	reaction_type: ReactionType;
	/** True, if reaction has a dark background */
	is_dark: boolean;
	/** True, if reaction corner is flipped */
	is_flipped: boolean;
};

/**
 * An area pointing to a message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_story_area_type_message.html
 */
export type InputStoryAreaTypeMessage = {
	"@type": "inputStoryAreaTypeMessage";
	/** Identifier of the chat with the message. Currently, the chat must be a supergroup or a channel chat */
	chat_id: number;
	/** Identifier of the message. Use messageProperties.can_be_shared_in_story to check whether the message is suitable */
	message_id: number;
};

/**
 * An area pointing to a HTTP or tg:// link
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_story_area_type_link.html
 */
export type InputStoryAreaTypeLink = {
	"@type": "inputStoryAreaTypeLink";
	/** HTTP or tg:// URL to be opened when the area is clicked */
	url: string;
};

/**
 * An area with information about weather
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_story_area_type_weather.html
 */
export type InputStoryAreaTypeWeather = {
	"@type": "inputStoryAreaTypeWeather";
	/** Temperature, in degree Celsius */
	temperature: number;
	/** Emoji representing the weather */
	emoji: string;
	/** A color of the area background in the ARGB format */
	background_color: number;
};

/**
 * An area with an upgraded gift
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_story_area_type_upgraded_gift.html
 */
export type InputStoryAreaTypeUpgradedGift = {
	"@type": "inputStoryAreaTypeUpgradedGift";
	/** Unique name of the upgraded gift */
	gift_name: string;
};

/**
 * Describes a clickable rectangle area on a story media to be added
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_story_area.html
 */
export type InputStoryArea = {
	"@type": "inputStoryArea";
	/** Position of the area */
	position: StoryAreaPosition;
	/** Type of the area */
	type: InputStoryAreaType;
};

/**
 * Contains a list of story areas to be added
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_story_areas.html
 */
export type InputStoryAreas = {
	"@type": "inputStoryAreas";
	/** List of input story areas. Currently, a story can have up to 10 inputStoryAreaTypeLocation, inputStoryAreaTypeFoundVenue, and inputStoryAreaTypePreviousVenue areas, up to getOption("story_suggested_reaction_area_count_max") inputStoryAreaTypeSuggestedReaction areas, up to 1 inputStoryAreaTypeMessage area, up to getOption("story_link_area_count_max") inputStoryAreaTypeLink areas if the current user is a Telegram Premium user, up to 3 inputStoryAreaTypeWeather areas, and up to 1 inputStoryAreaTypeUpgradedGift area */
	areas: InputStoryArea[];
};

/**
 * Describes a video file posted as a story
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1story_video.html
 */
export type StoryVideo = {
	"@type": "storyVideo";
	/** Duration of the video, in seconds */
	duration: number;
	/** Video width */
	width: number;
	/** Video height */
	height: number;
	/** True, if stickers were added to the video. The list of corresponding sticker sets can be received using getAttachedStickerSets */
	has_stickers: boolean;
	/** True, if the video has no sound */
	is_animation: boolean;
	/** Video minithumbnail; may be null */
	minithumbnail?: Minithumbnail;
	/** Video thumbnail in JPEG or MPEG4 format; may be null */
	thumbnail?: Thumbnail;
	/** Size of file prefix, which is expected to be preloaded, in bytes */
	preload_prefix_size: number;
	/** Timestamp of the frame used as video thumbnail */
	cover_frame_timestamp: number;
	/** File containing the video */
	video: File;
};

/**
 * A photo story
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1story_content_photo.html
 */
export type StoryContentPhoto = {
	"@type": "storyContentPhoto";
	/** The photo */
	photo: Photo;
};

/**
 * A video story
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1story_content_video.html
 */
export type StoryContentVideo = {
	"@type": "storyContentVideo";
	/** The video in MPEG4 format */
	video: StoryVideo;
	/** Alternative version of the video in MPEG4 format, encoded with H.264 codec; may be null */
	alternative_video?: StoryVideo;
};

/**
 * A story content that is not supported in the current TDLib version
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1story_content_unsupported.html
 */
export type StoryContentUnsupported = {
	"@type": "storyContentUnsupported";
};

/**
 * A photo story
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_story_content_photo.html
 */
export type InputStoryContentPhoto = {
	"@type": "inputStoryContentPhoto";
	/** Photo to send. The photo must be at most 10 MB in size. The photo size must be 1080x1920 */
	photo: InputFile;
	/** File identifiers of the stickers added to the photo, if applicable */
	added_sticker_file_ids: number[];
};

/**
 * A video story
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_story_content_video.html
 */
export type InputStoryContentVideo = {
	"@type": "inputStoryContentVideo";
	/** Video to be sent. The video size must be 720x1280. The video must be streamable and stored in MPEG4 format, after encoding with H.265 codec and key frames added each second */
	video: InputFile;
	/** File identifiers of the stickers added to the video, if applicable */
	added_sticker_file_ids: number[];
	/** Precise duration of the video, in seconds; 0-60 */
	duration: number;
	/** Timestamp of the frame, which will be used as video thumbnail */
	cover_frame_timestamp: number;
	/** True, if the video has no sound */
	is_animation: boolean;
};

/**
 * The list of stories, shown in the main chat list and folder chat lists
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1story_list_main.html
 */
export type StoryListMain = {
	"@type": "storyListMain";
};

/**
 * The list of stories, shown in the Arvhive chat list
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1story_list_archive.html
 */
export type StoryListArchive = {
	"@type": "storyListArchive";
};

/**
 * The original story was a public story that was posted by a known chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1story_origin_public_story.html
 */
export type StoryOriginPublicStory = {
	"@type": "storyOriginPublicStory";
	/** Identifier of the chat that posted original story */
	chat_id: number;
	/** Story identifier of the original story */
	story_id: number;
};

/**
 * The original story was posted by an unknown user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1story_origin_hidden_user.html
 */
export type StoryOriginHiddenUser = {
	"@type": "storyOriginHiddenUser";
	/** Name of the user or the chat that posted the story */
	poster_name: string;
};

/**
 * Contains information about original story that was reposted
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1story_repost_info.html
 */
export type StoryRepostInfo = {
	"@type": "storyRepostInfo";
	/** Origin of the story that was reposted */
	origin: StoryOrigin;
	/** True, if story content was modified during reposting; otherwise, story wasn't modified */
	is_content_modified: boolean;
};

/**
 * Contains information about interactions with a story
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1story_interaction_info.html
 */
export type StoryInteractionInfo = {
	"@type": "storyInteractionInfo";
	/** Number of times the story was viewed */
	view_count: number;
	/** Number of times the story was forwarded; 0 if none or unknown */
	forward_count: number;
	/** Number of reactions added to the story; 0 if none or unknown */
	reaction_count: number;
	/** Identifiers of at most 3 recent viewers of the story */
	recent_viewer_user_ids: number[];
};

/**
 * Represents a story
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1story.html
 */
export type Story = {
	"@type": "story";
	/** Unique story identifier among stories posted by the given chat */
	id: number;
	/** Identifier of the chat that posted the story */
	poster_chat_id: number;
	/** Identifier of the user or chat that posted the story; may be null if the story is posted on behalf of the poster_chat_id */
	poster_id?: MessageSender;
	/** Point in time (Unix timestamp) when the story was published */
	date: number;
	/** True, if the story is being posted by the current user */
	is_being_posted: boolean;
	/** True, if the story is being edited by the current user */
	is_being_edited: boolean;
	/** True, if the story was edited */
	is_edited: boolean;
	/** True, if the story is saved in the profile of the chat that posted it and will be available there after expiration */
	is_posted_to_chat_page: boolean;
	/** True, if the story is visible only for the current user */
	is_visible_only_for_self: boolean;
	/** True, if the story can be deleted */
	can_be_deleted: boolean;
	/** True, if the story can be edited */
	can_be_edited: boolean;
	/** True, if the story can be forwarded as a message. Otherwise, screenshots and saving of the story content must be also forbidden */
	can_be_forwarded: boolean;
	/** True, if the story can be replied in the chat with the user that posted the story */
	can_be_replied: boolean;
	/** True, if the story's is_posted_to_chat_page value can be changed */
	can_toggle_is_posted_to_chat_page: boolean;
	/** True, if the story statistics are available through getStoryStatistics */
	can_get_statistics: boolean;
	/** True, if interactions with the story can be received through getStoryInteractions */
	can_get_interactions: boolean;
	/** True, if users viewed the story can't be received, because the story has expired more than getOption("story_viewers_expiration_delay") seconds ago */
	has_expired_viewers: boolean;
	/** Information about the original story; may be null if the story wasn't reposted */
	repost_info?: StoryRepostInfo;
	/** Information about interactions with the story; may be null if the story isn't owned or there were no interactions */
	interaction_info?: StoryInteractionInfo;
	/** Type of the chosen reaction; may be null if none */
	chosen_reaction_type?: ReactionType;
	/** Privacy rules affecting story visibility; may be approximate for non-owned stories */
	privacy_settings: StoryPrivacySettings;
	/** Content of the story */
	content: StoryContent;
	/** Clickable areas to be shown on the story content */
	areas: StoryArea[];
	/** Caption of the story */
	caption: FormattedText;
};

/**
 * Represents a list of stories
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1stories.html
 */
export type Stories = {
	"@type": "stories";
	/** Approximate total number of stories found */
	total_count: number;
	/** The list of stories */
	stories: Story[];
	/** Identifiers of the pinned stories; returned only in getChatPostedToChatPageStories with from_story_id == 0 */
	pinned_story_ids: number[];
};

/**
 * Contains a list of stories found by a search
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1found_stories.html
 */
export type FoundStories = {
	"@type": "foundStories";
	/** Approximate total number of stories found */
	total_count: number;
	/** List of stories */
	stories: Story[];
	/** The offset for the next request. If empty, then there are no more results */
	next_offset: string;
};

/**
 * Contains identifier of a story along with identifier of the chat that posted it
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1story_full_id.html
 */
export type StoryFullId = {
	"@type": "storyFullId";
	/** Identifier of the chat that posted the story */
	poster_chat_id: number;
	/** Unique story identifier among stories of the chat */
	story_id: number;
};

/**
 * Contains basic information about a story
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1story_info.html
 */
export type StoryInfo = {
	"@type": "storyInfo";
	/** Unique story identifier among stories of the chat */
	story_id: number;
	/** Point in time (Unix timestamp) when the story was published */
	date: number;
	/** True, if the story is available only to close friends */
	is_for_close_friends: boolean;
};

/**
 * Describes active stories posted by a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_active_stories.html
 */
export type ChatActiveStories = {
	"@type": "chatActiveStories";
	/** Identifier of the chat that posted the stories */
	chat_id: number;
	/** Identifier of the story list in which the stories are shown; may be null if the stories aren't shown in a story list */
	list?: StoryList;
	/** A parameter used to determine order of the stories in the story list; 0 if the stories doesn't need to be shown in the story list. Stories must be sorted by the pair (order, story_poster_chat_id) in descending order */
	order: number;
	/** Identifier of the last read active story */
	max_read_story_id: number;
	/** Basic information about the stories; use getStory to get full information about the stories. The stories are in chronological order (i.e., in order of increasing story identifiers) */
	stories: StoryInfo[];
};

/**
 * A view of the story
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1story_interaction_type_view.html
 */
export type StoryInteractionTypeView = {
	"@type": "storyInteractionTypeView";
	/** Type of the reaction that was chosen by the viewer; may be null if none */
	chosen_reaction_type?: ReactionType;
};

/**
 * A forward of the story as a message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1story_interaction_type_forward.html
 */
export type StoryInteractionTypeForward = {
	"@type": "storyInteractionTypeForward";
	/** The message with story forward */
	message: Message;
};

/**
 * A repost of the story as a story
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1story_interaction_type_repost.html
 */
export type StoryInteractionTypeRepost = {
	"@type": "storyInteractionTypeRepost";
	/** The reposted story */
	story: Story;
};

/**
 * Represents interaction with a story
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1story_interaction.html
 */
export type StoryInteraction = {
	"@type": "storyInteraction";
	/** Identifier of the user or chat that made the interaction */
	actor_id: MessageSender;
	/** Approximate point in time (Unix timestamp) when the interaction happened */
	interaction_date: number;
	/** Block list to which the actor is added; may be null if none or for chat stories */
	block_list?: BlockList;
	/** Type of the interaction */
	type: StoryInteractionType;
};

/**
 * Represents a list of interactions with a story
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1story_interactions.html
 */
export type StoryInteractions = {
	"@type": "storyInteractions";
	/** Approximate total number of interactions found */
	total_count: number;
	/** Approximate total number of found forwards and reposts; always 0 for chat stories */
	total_forward_count: number;
	/** Approximate total number of found reactions; always 0 for chat stories */
	total_reaction_count: number;
	/** List of story interactions */
	interactions: StoryInteraction[];
	/** The offset for the next request. If empty, then there are no more results */
	next_offset: string;
};

/**
 * Describes a message that can be used for quick reply
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1quick_reply_message.html
 */
export type QuickReplyMessage = {
	"@type": "quickReplyMessage";
	/** Unique message identifier among all quick replies */
	id: number;
	/** The sending state of the message; may be null if the message isn't being sent and didn't fail to be sent */
	sending_state?: MessageSendingState;
	/** True, if the message can be edited */
	can_be_edited: boolean;
	/** The identifier of the quick reply message to which the message replies; 0 if none */
	reply_to_message_id: number;
	/** If non-zero, the user identifier of the bot through which this message was sent */
	via_bot_user_id: number;
	/** Unique identifier of an album this message belongs to; 0 if none. Only audios, documents, photos and videos can be grouped together in albums */
	media_album_id: string;
	/** Content of the message */
	content: MessageContent;
	/** Inline keyboard reply markup for the message; may be null if none */
	reply_markup?: ReplyMarkup;
};

/**
 * Contains a list of quick reply messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1quick_reply_messages.html
 */
export type QuickReplyMessages = {
	"@type": "quickReplyMessages";
	/** List of quick reply messages; messages may be null */
	messages: QuickReplyMessage[];
};

/**
 * Describes a shortcut that can be used for a quick reply
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1quick_reply_shortcut.html
 */
export type QuickReplyShortcut = {
	"@type": "quickReplyShortcut";
	/** Unique shortcut identifier */
	id: number;
	/** The name of the shortcut that can be used to use the shortcut */
	name: string;
	/** The first shortcut message */
	first_message: QuickReplyMessage;
	/** The total number of messages in the shortcut */
	message_count: number;
};

/**
 * Contains a public forward as a message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1public_forward_message.html
 */
export type PublicForwardMessage = {
	"@type": "publicForwardMessage";
	/** Information about the message */
	message: Message;
};

/**
 * Contains a public repost to a story
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1public_forward_story.html
 */
export type PublicForwardStory = {
	"@type": "publicForwardStory";
	/** Information about the story */
	story: Story;
};

/**
 * Represents a list of public forwards and reposts as a story of a message or a story
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1public_forwards.html
 */
export type PublicForwards = {
	"@type": "publicForwards";
	/** Approximate total number of messages and stories found */
	total_count: number;
	/** List of found public forwards and reposts */
	forwards: PublicForward[];
	/** The offset for the next request. If empty, then there are no more results */
	next_offset: string;
};

/**
 * Describes media previews of a bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1bot_media_preview.html
 */
export type BotMediaPreview = {
	"@type": "botMediaPreview";
	/** Point in time (Unix timestamp) when the preview was added or changed last time */
	date: number;
	/** Content of the preview */
	content: StoryContent;
};

/**
 * Contains a list of media previews of a bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1bot_media_previews.html
 */
export type BotMediaPreviews = {
	"@type": "botMediaPreviews";
	/** List of media previews */
	previews: BotMediaPreview[];
};

/**
 * Contains a list of media previews of a bot for the given language and the list of languages for which the bot has dedicated previews
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1bot_media_preview_info.html
 */
export type BotMediaPreviewInfo = {
	"@type": "botMediaPreviewInfo";
	/** List of media previews */
	previews: BotMediaPreview[];
	/** List of language codes for which the bot has dedicated previews */
	language_codes: string[];
};

/**
 * Contains a list of features available on a specific chat boost level
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_boost_level_features.html
 */
export type ChatBoostLevelFeatures = {
	"@type": "chatBoostLevelFeatures";
	/** Target chat boost level */
	level: number;
	/** Number of stories that the chat can publish daily */
	story_per_day_count: number;
	/** Number of custom emoji reactions that can be added to the list of available reactions */
	custom_emoji_reaction_count: number;
	/** Number of custom colors for chat title */
	title_color_count: number;
	/** Number of custom colors for profile photo background */
	profile_accent_color_count: number;
	/** True, if custom emoji for profile background can be set */
	can_set_profile_background_custom_emoji: boolean;
	/** Number of custom colors for background of empty chat photo, replies to messages and link previews */
	accent_color_count: number;
	/** True, if custom emoji for reply header and link preview background can be set */
	can_set_background_custom_emoji: boolean;
	/** True, if emoji status can be set */
	can_set_emoji_status: boolean;
	/** Number of chat theme backgrounds that can be set as chat background */
	chat_theme_background_count: number;
	/** True, if custom background can be set in the chat for all users */
	can_set_custom_background: boolean;
	/** True, if custom emoji sticker set can be set for the chat */
	can_set_custom_emoji_sticker_set: boolean;
	/** True, if automatic translation of messages can be enabled in the chat */
	can_enable_automatic_translation: boolean;
	/** True, if speech recognition can be used for video note and voice note messages by all users */
	can_recognize_speech: boolean;
	/** True, if sponsored messages can be disabled in the chat */
	can_disable_sponsored_messages: boolean;
};

/**
 * Contains a list of features available on the first chat boost levels
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_boost_features.html
 */
export type ChatBoostFeatures = {
	"@type": "chatBoostFeatures";
	/** The list of features */
	features: ChatBoostLevelFeatures[];
	/** The minimum boost level required to set custom emoji for profile background */
	min_profile_background_custom_emoji_boost_level: number;
	/** The minimum boost level required to set custom emoji for reply header and link preview background; for channel chats only */
	min_background_custom_emoji_boost_level: number;
	/** The minimum boost level required to set emoji status */
	min_emoji_status_boost_level: number;
	/** The minimum boost level required to set a chat theme background as chat background */
	min_chat_theme_background_boost_level: number;
	/** The minimum boost level required to set custom chat background */
	min_custom_background_boost_level: number;
	/** The minimum boost level required to set custom emoji sticker set for the chat; for supergroup chats only */
	min_custom_emoji_sticker_set_boost_level: number;
	/** The minimum boost level allowing to enable automatic translation of messages for non-Premium users; for channel chats only */
	min_automatic_translation_boost_level: number;
	/** The minimum boost level allowing to recognize speech in video note and voice note messages for non-Premium users; for supergroup chats only */
	min_speech_recognition_boost_level: number;
	/** The minimum boost level allowing to disable sponsored messages in the chat; for channel chats only */
	min_sponsored_message_disable_boost_level: number;
};

/**
 * The chat created a Telegram Premium gift code for a user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_boost_source_gift_code.html
 */
export type ChatBoostSourceGiftCode = {
	"@type": "chatBoostSourceGiftCode";
	/** Identifier of a user, for which the gift code was created */
	user_id: number;
	/** The created Telegram Premium gift code, which is known only if this is a gift code for the current user, or it has already been claimed */
	gift_code: string;
};

/**
 * The chat created a giveaway
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_boost_source_giveaway.html
 */
export type ChatBoostSourceGiveaway = {
	"@type": "chatBoostSourceGiveaway";
	/** Identifier of a user that won in the giveaway; 0 if none */
	user_id: number;
	/** The created Telegram Premium gift code if it was used by the user or can be claimed by the current user; an empty string otherwise; for Telegram Premium giveways only */
	gift_code: string;
	/** Number of Telegram Stars distributed among winners of the giveaway */
	star_count: number;
	/** Identifier of the corresponding giveaway message; can be an identifier of a deleted message */
	giveaway_message_id: number;
	/** True, if the winner for the corresponding giveaway prize wasn't chosen, because there were not enough participants */
	is_unclaimed: boolean;
};

/**
 * A user with Telegram Premium subscription or gifted Telegram Premium boosted the chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_boost_source_premium.html
 */
export type ChatBoostSourcePremium = {
	"@type": "chatBoostSourcePremium";
	/** Identifier of the user */
	user_id: number;
};

/**
 * Describes a prepaid giveaway
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1prepaid_giveaway.html
 */
export type PrepaidGiveaway = {
	"@type": "prepaidGiveaway";
	/** Unique identifier of the prepaid giveaway */
	id: string;
	/** Number of users which will receive giveaway prize */
	winner_count: number;
	/** Prize of the giveaway */
	prize: GiveawayPrize;
	/** The number of boosts received by the chat from the giveaway; for Telegram Star giveaways only */
	boost_count: number;
	/** Point in time (Unix timestamp) when the giveaway was paid */
	payment_date: number;
};

/**
 * Describes current boost status of a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_boost_status.html
 */
export type ChatBoostStatus = {
	"@type": "chatBoostStatus";
	/** An HTTP URL, which can be used to boost the chat */
	boost_url: string;
	/** Identifiers of boost slots of the current user applied to the chat */
	applied_slot_ids: number[];
	/** Current boost level of the chat */
	level: number;
	/** The number of boosts received by the chat from created Telegram Premium gift codes and giveaways; always 0 if the current user isn't an administrator in the chat */
	gift_code_boost_count: number;
	/** The number of boosts received by the chat */
	boost_count: number;
	/** The number of boosts added to reach the current level */
	current_level_boost_count: number;
	/** The number of boosts needed to reach the next level; 0 if the next level isn't available */
	next_level_boost_count: number;
	/** Approximate number of Telegram Premium subscribers joined the chat; always 0 if the current user isn't an administrator in the chat */
	premium_member_count: number;
	/** A percentage of Telegram Premium subscribers joined the chat; always 0 if the current user isn't an administrator in the chat */
	premium_member_percentage: number;
	/** The list of prepaid giveaways available for the chat; only for chat administrators */
	prepaid_giveaways: PrepaidGiveaway[];
};

/**
 * Describes a boost applied to a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_boost.html
 */
export type ChatBoost = {
	"@type": "chatBoost";
	/** Unique identifier of the boost */
	id: string;
	/** The number of identical boosts applied */
	count: number;
	/** Source of the boost */
	source: ChatBoostSource;
	/** Point in time (Unix timestamp) when the chat was boosted */
	start_date: number;
	/** Point in time (Unix timestamp) when the boost will expire */
	expiration_date: number;
};

/**
 * Contains a list of boosts applied to a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1found_chat_boosts.html
 */
export type FoundChatBoosts = {
	"@type": "foundChatBoosts";
	/** Total number of boosts applied to the chat */
	total_count: number;
	/** List of boosts */
	boosts: ChatBoost[];
	/** The offset for the next request. If empty, then there are no more results */
	next_offset: string;
};

/**
 * Describes a slot for chat boost
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_boost_slot.html
 */
export type ChatBoostSlot = {
	"@type": "chatBoostSlot";
	/** Unique identifier of the slot */
	slot_id: number;
	/** Identifier of the currently boosted chat; 0 if none */
	currently_boosted_chat_id: number;
	/** Point in time (Unix timestamp) when the chat was boosted; 0 if none */
	start_date: number;
	/** Point in time (Unix timestamp) when the boost will expire */
	expiration_date: number;
	/** Point in time (Unix timestamp) after which the boost can be used for another chat */
	cooldown_until_date: number;
};

/**
 * Contains a list of chat boost slots
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_boost_slots.html
 */
export type ChatBoostSlots = {
	"@type": "chatBoostSlots";
	/** List of boost slots */
	slots: ChatBoostSlot[];
};

/**
 * The user requested to resend the code
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1resend_code_reason_user_request.html
 */
export type ResendCodeReasonUserRequest = {
	"@type": "resendCodeReasonUserRequest";
};

/**
 * The code is re-sent, because device verification has failed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1resend_code_reason_verification_failed.html
 */
export type ResendCodeReasonVerificationFailed = {
	"@type": "resendCodeReasonVerificationFailed";
	/** Cause of the verification failure, for example, "PLAY_SERVICES_NOT_AVAILABLE", "APNS_RECEIVE_TIMEOUT", or "APNS_INIT_FAILED" */
	error_message: string;
};

/**
 * The call wasn't discarded, or the reason is unknown
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1call_discard_reason_empty.html
 */
export type CallDiscardReasonEmpty = {
	"@type": "callDiscardReasonEmpty";
};

/**
 * The call was ended before the conversation started. It was canceled by the caller or missed by the other party
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1call_discard_reason_missed.html
 */
export type CallDiscardReasonMissed = {
	"@type": "callDiscardReasonMissed";
};

/**
 * The call was ended before the conversation started. It was declined by the other party
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1call_discard_reason_declined.html
 */
export type CallDiscardReasonDeclined = {
	"@type": "callDiscardReasonDeclined";
};

/**
 * The call was ended during the conversation because the users were disconnected
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1call_discard_reason_disconnected.html
 */
export type CallDiscardReasonDisconnected = {
	"@type": "callDiscardReasonDisconnected";
};

/**
 * The call was ended because one of the parties hung up
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1call_discard_reason_hung_up.html
 */
export type CallDiscardReasonHungUp = {
	"@type": "callDiscardReasonHungUp";
};

/**
 * The call was ended because it has been upgraded to a group call
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1call_discard_reason_upgrade_to_group_call.html
 */
export type CallDiscardReasonUpgradeToGroupCall = {
	"@type": "callDiscardReasonUpgradeToGroupCall";
	/** Invite link for the group call */
	invite_link: string;
};

/**
 * Specifies the supported call protocols
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1call_protocol.html
 */
export type CallProtocol = {
	"@type": "callProtocol";
	/** True, if UDP peer-to-peer connections are supported */
	udp_p2p: boolean;
	/** True, if connection through UDP reflectors is supported */
	udp_reflector: boolean;
	/** The minimum supported API layer; use 65 */
	min_layer: number;
	/** The maximum supported API layer; use 92 */
	max_layer: number;
	/** List of supported tgcalls versions */
	library_versions: string[];
};

/**
 * A Telegram call reflector
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1call_server_type_telegram_reflector.html
 */
export type CallServerTypeTelegramReflector = {
	"@type": "callServerTypeTelegramReflector";
	/** A peer tag to be used with the reflector */
	peer_tag: string;
	/** True, if the server uses TCP instead of UDP */
	is_tcp: boolean;
};

/**
 * A WebRTC server
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1call_server_type_webrtc.html
 */
export type CallServerTypeWebrtc = {
	"@type": "callServerTypeWebrtc";
	/** Username to be used for authentication */
	username: string;
	/** Authentication password */
	password: string;
	/** True, if the server supports TURN */
	supports_turn: boolean;
	/** True, if the server supports STUN */
	supports_stun: boolean;
};

/**
 * Describes a server for relaying call data
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1call_server.html
 */
export type CallServer = {
	"@type": "callServer";
	/** Server identifier */
	id: string;
	/** Server IPv4 address */
	ip_address: string;
	/** Server IPv6 address */
	ipv6_address: string;
	/** Server port number */
	port: number;
	/** Server type */
	type: CallServerType;
};

/**
 * Contains the call identifier
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1call_id.html
 */
export type CallId = {
	"@type": "callId";
	/** Call identifier */
	id: number;
};

/**
 * Contains the group call identifier
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1group_call_id.html
 */
export type GroupCallId = {
	"@type": "groupCallId";
	/** Group call identifier */
	id: number;
};

/**
 * The call is pending, waiting to be accepted by a user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1call_state_pending.html
 */
export type CallStatePending = {
	"@type": "callStatePending";
	/** True, if the call has already been created by the server */
	is_created: boolean;
	/** True, if the call has already been received by the other party */
	is_received: boolean;
};

/**
 * The call has been answered and encryption keys are being exchanged
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1call_state_exchanging_keys.html
 */
export type CallStateExchangingKeys = {
	"@type": "callStateExchangingKeys";
};

/**
 * The call is ready to use
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1call_state_ready.html
 */
export type CallStateReady = {
	"@type": "callStateReady";
	/** Call protocols supported by the other call participant */
	protocol: CallProtocol;
	/** List of available call servers */
	servers: CallServer[];
	/** A JSON-encoded call config */
	config: string;
	/** Call encryption key */
	encryption_key: string;
	/** Encryption key fingerprint represented as 4 emoji */
	emojis: string[];
	/** True, if peer-to-peer connection is allowed by users privacy settings */
	allow_p2p: boolean;
	/** True, if the other party supports upgrading of the call to a group call */
	is_group_call_supported: boolean;
	/** Custom JSON-encoded call parameters to be passed to tgcalls */
	custom_parameters: string;
};

/**
 * The call is hanging up after discardCall has been called
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1call_state_hanging_up.html
 */
export type CallStateHangingUp = {
	"@type": "callStateHangingUp";
};

/**
 * The call has ended successfully
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1call_state_discarded.html
 */
export type CallStateDiscarded = {
	"@type": "callStateDiscarded";
	/** The reason why the call has ended */
	reason: CallDiscardReason;
	/** True, if the call rating must be sent to the server */
	need_rating: boolean;
	/** True, if the call debug information must be sent to the server */
	need_debug_information: boolean;
	/** True, if the call log must be sent to the server */
	need_log: boolean;
};

/**
 * The call has ended with an error
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1call_state_error.html
 */
export type CallStateError = {
	"@type": "callStateError";
	/** Error. An error with the code 4005000 will be returned if an outgoing call is missed because of an expired timeout */
	error: Error;
};

/**
 * Describes parameters used to join a group call
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1group_call_join_parameters.html
 */
export type GroupCallJoinParameters = {
	"@type": "groupCallJoinParameters";
	/** Audio channel synchronization source identifier; received from tgcalls */
	audio_source_id: number;
	/** Group call join payload; received from tgcalls */
	payload: string;
	/** Pass true to join the call with muted microphone */
	is_muted: boolean;
	/** Pass true if the user's video is enabled */
	is_my_video_enabled: boolean;
};

/**
 * The worst available video quality
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1group_call_video_quality_thumbnail.html
 */
export type GroupCallVideoQualityThumbnail = {
	"@type": "groupCallVideoQualityThumbnail";
};

/**
 * The medium video quality
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1group_call_video_quality_medium.html
 */
export type GroupCallVideoQualityMedium = {
	"@type": "groupCallVideoQualityMedium";
};

/**
 * The best available video quality
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1group_call_video_quality_full.html
 */
export type GroupCallVideoQualityFull = {
	"@type": "groupCallVideoQualityFull";
};

/**
 * Describes an available stream in a video chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1video_chat_stream.html
 */
export type VideoChatStream = {
	"@type": "videoChatStream";
	/** Identifier of an audio/video channel */
	channel_id: number;
	/** Scale of segment durations in the stream. The duration is 1000/(2**scale) milliseconds */
	scale: number;
	/** Point in time when the stream currently ends; Unix timestamp in milliseconds */
	time_offset: number;
};

/**
 * Represents a list of video chat streams
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1video_chat_streams.html
 */
export type VideoChatStreams = {
	"@type": "videoChatStreams";
	/** A list of video chat streams */
	streams: VideoChatStream[];
};

/**
 * Represents an RTMP URL
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1rtmp_url.html
 */
export type RtmpUrl = {
	"@type": "rtmpUrl";
	/** The URL */
	url: string;
	/** Stream key */
	stream_key: string;
};

/**
 * Describes a recently speaking participant in a group call
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1group_call_recent_speaker.html
 */
export type GroupCallRecentSpeaker = {
	"@type": "groupCallRecentSpeaker";
	/** Group call participant identifier */
	participant_id: MessageSender;
	/** True, is the user has spoken recently */
	is_speaking: boolean;
};

/**
 * Describes a group call
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1group_call.html
 */
export type GroupCall = {
	"@type": "groupCall";
	/** Group call identifier */
	id: number;
	/** Group call title; for video chats only */
	title: string;
	/** Invite link for the group call; for group calls that aren't bound to a chat. For video chats call getVideoChatInviteLink to get the link */
	invite_link: string;
	/** Point in time (Unix timestamp) when the group call is expected to be started by an administrator; 0 if it is already active or was ended; for video chats only */
	scheduled_start_date: number;
	/** True, if the group call is scheduled and the current user will receive a notification when the group call starts; for video chats only */
	enabled_start_notification: boolean;
	/** True, if the call is active */
	is_active: boolean;
	/** True, if the call is bound to a chat */
	is_video_chat: boolean;
	/** True, if the call is an RTMP stream instead of an ordinary video chat; for video chats only */
	is_rtmp_stream: boolean;
	/** True, if the call is joined */
	is_joined: boolean;
	/** True, if user was kicked from the call because of network loss and the call needs to be rejoined */
	need_rejoin: boolean;
	/** True, if the user is the owner of the call and can end the call, change volume level of other users, or ban users there; for group calls that aren't bound to a chat */
	is_owned: boolean;
	/** True, if the current user can manage the group call; for video chats only */
	can_be_managed: boolean;
	/** Number of participants in the group call */
	participant_count: number;
	/** True, if group call participants, which are muted, aren't returned in participant list; for video chats only */
	has_hidden_listeners: boolean;
	/** True, if all group call participants are loaded */
	loaded_all_participants: boolean;
	/** At most 3 recently speaking users in the group call */
	recent_speakers: GroupCallRecentSpeaker[];
	/** True, if the current user's video is enabled */
	is_my_video_enabled: boolean;
	/** True, if the current user's video is paused */
	is_my_video_paused: boolean;
	/** True, if the current user can broadcast video or share screen */
	can_enable_video: boolean;
	/** True, if only group call administrators can unmute new participants; for video chats only */
	mute_new_participants: boolean;
	/** True, if the current user can enable or disable mute_new_participants setting; for video chats only */
	can_toggle_mute_new_participants: boolean;
	/** Duration of the ongoing group call recording, in seconds; 0 if none. An updateGroupCall update is not triggered when value of this field changes, but the same recording goes on */
	record_duration: number;
	/** True, if a video file is being recorded for the call */
	is_video_recorded: boolean;
	/** Call duration, in seconds; for ended calls only */
	duration: number;
};

/**
 * Describes a group of video synchronization source identifiers
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1group_call_video_source_group.html
 */
export type GroupCallVideoSourceGroup = {
	"@type": "groupCallVideoSourceGroup";
	/** The semantics of sources, one of "SIM" or "FID" */
	semantics: string;
	/** The list of synchronization source identifiers */
	source_ids: number[];
};

/**
 * Contains information about a group call participant's video channel
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1group_call_participant_video_info.html
 */
export type GroupCallParticipantVideoInfo = {
	"@type": "groupCallParticipantVideoInfo";
	/** List of synchronization source groups of the video */
	source_groups: GroupCallVideoSourceGroup[];
	/** Video channel endpoint identifier */
	endpoint_id: string;
	/** True, if the video is paused. This flag needs to be ignored, if new video frames are received */
	is_paused: boolean;
};

/**
 * Represents a group call participant
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1group_call_participant.html
 */
export type GroupCallParticipant = {
	"@type": "groupCallParticipant";
	/** Identifier of the group call participant */
	participant_id: MessageSender;
	/** User's audio channel synchronization source identifier */
	audio_source_id: number;
	/** User's screen sharing audio channel synchronization source identifier */
	screen_sharing_audio_source_id: number;
	/** Information about user's video channel; may be null if there is no active video */
	video_info?: GroupCallParticipantVideoInfo;
	/** Information about user's screen sharing video channel; may be null if there is no active screen sharing video */
	screen_sharing_video_info?: GroupCallParticipantVideoInfo;
	/** The participant user's bio or the participant chat's description */
	bio: string;
	/** True, if the participant is the current user */
	is_current_user: boolean;
	/** True, if the participant is speaking as set by setGroupCallParticipantIsSpeaking */
	is_speaking: boolean;
	/** True, if the participant hand is raised */
	is_hand_raised: boolean;
	/** True, if the current user can mute the participant for all other group call participants */
	can_be_muted_for_all_users: boolean;
	/** True, if the current user can allow the participant to unmute themselves or unmute the participant (if the participant is the current user) */
	can_be_unmuted_for_all_users: boolean;
	/** True, if the current user can mute the participant only for self */
	can_be_muted_for_current_user: boolean;
	/** True, if the current user can unmute the participant for self */
	can_be_unmuted_for_current_user: boolean;
	/** True, if the participant is muted for all users */
	is_muted_for_all_users: boolean;
	/** True, if the participant is muted for the current user */
	is_muted_for_current_user: boolean;
	/** True, if the participant is muted for all users, but can unmute themselves */
	can_unmute_self: boolean;
	/** Participant's volume level; 1-20000 in hundreds of percents */
	volume_level: number;
	/** User's order in the group call participant list. Orders must be compared lexicographically. The bigger is order, the higher is user in the list. If order is empty, the user must be removed from the participant list */
	order: string;
};

/**
 * Contains identifiers of group call participants
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1group_call_participants.html
 */
export type GroupCallParticipants = {
	"@type": "groupCallParticipants";
	/** Total number of group call participants */
	total_count: number;
	/** Identifiers of the participants */
	participant_ids: MessageSender[];
};

/**
 * Contains information about a just created or just joined group call
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1group_call_info.html
 */
export type GroupCallInfo = {
	"@type": "groupCallInfo";
	/** Identifier of the group call */
	group_call_id: number;
	/** Join response payload for tgcalls; empty if the call isn't joined */
	join_payload: string;
};

/**
 * The user can't be invited due to their privacy settings
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1invite_group_call_participant_result_user_privacy_restricted.html
 */
export type InviteGroupCallParticipantResultUserPrivacyRestricted = {
	"@type": "inviteGroupCallParticipantResultUserPrivacyRestricted";
};

/**
 * The user can't be invited because they are already a participant of the call
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1invite_group_call_participant_result_user_already_participant.html
 */
export type InviteGroupCallParticipantResultUserAlreadyParticipant = {
	"@type": "inviteGroupCallParticipantResultUserAlreadyParticipant";
};

/**
 * The user can't be invited because they were banned by the owner of the call and can be invited back only by the owner of the group call
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1invite_group_call_participant_result_user_was_banned.html
 */
export type InviteGroupCallParticipantResultUserWasBanned = {
	"@type": "inviteGroupCallParticipantResultUserWasBanned";
};

/**
 * The user was invited and a service message of the type messageGroupCall was sent which can be used in declineGroupCallInvitation to cancel the invitation
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1invite_group_call_participant_result_success.html
 */
export type InviteGroupCallParticipantResultSuccess = {
	"@type": "inviteGroupCallParticipantResultSuccess";
	/** Identifier of the chat with the invitation message */
	chat_id: number;
	/** Identifier of the message */
	message_id: number;
};

/**
 * The main data channel for audio and video data
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1group_call_data_channel_main.html
 */
export type GroupCallDataChannelMain = {
	"@type": "groupCallDataChannelMain";
};

/**
 * The data channel for screen sharing
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1group_call_data_channel_screen_sharing.html
 */
export type GroupCallDataChannelScreenSharing = {
	"@type": "groupCallDataChannelScreenSharing";
};

/**
 * The group call is accessible through a link
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_group_call_link.html
 */
export type InputGroupCallLink = {
	"@type": "inputGroupCallLink";
	/** The link for the group call */
	link: string;
};

/**
 * The group call is accessible through a message of the type messageGroupCall
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_group_call_message.html
 */
export type InputGroupCallMessage = {
	"@type": "inputGroupCallMessage";
	/** Identifier of the chat with the message */
	chat_id: number;
	/** Identifier of the message of the type messageGroupCall */
	message_id: number;
};

/**
 * The user heard their own voice
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1call_problem_echo.html
 */
export type CallProblemEcho = {
	"@type": "callProblemEcho";
};

/**
 * The user heard background noise
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1call_problem_noise.html
 */
export type CallProblemNoise = {
	"@type": "callProblemNoise";
};

/**
 * The other side kept disappearing
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1call_problem_interruptions.html
 */
export type CallProblemInterruptions = {
	"@type": "callProblemInterruptions";
};

/**
 * The speech was distorted
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1call_problem_distorted_speech.html
 */
export type CallProblemDistortedSpeech = {
	"@type": "callProblemDistortedSpeech";
};

/**
 * The user couldn't hear the other side
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1call_problem_silent_local.html
 */
export type CallProblemSilentLocal = {
	"@type": "callProblemSilentLocal";
};

/**
 * The other side couldn't hear the user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1call_problem_silent_remote.html
 */
export type CallProblemSilentRemote = {
	"@type": "callProblemSilentRemote";
};

/**
 * The call ended unexpectedly
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1call_problem_dropped.html
 */
export type CallProblemDropped = {
	"@type": "callProblemDropped";
};

/**
 * The video was distorted
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1call_problem_distorted_video.html
 */
export type CallProblemDistortedVideo = {
	"@type": "callProblemDistortedVideo";
};

/**
 * The video was pixelated
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1call_problem_pixelated_video.html
 */
export type CallProblemPixelatedVideo = {
	"@type": "callProblemPixelatedVideo";
};

/**
 * Describes a call
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1call.html
 */
export type Call = {
	"@type": "call";
	/** Call identifier, not persistent */
	id: number;
	/** User identifier of the other call participant */
	user_id: number;
	/** True, if the call is outgoing */
	is_outgoing: boolean;
	/** True, if the call is a video call */
	is_video: boolean;
	/** Call state */
	state: CallState;
};

/**
 * Settings for Firebase Authentication in the official Android application
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1firebase_authentication_settings_android.html
 */
export type FirebaseAuthenticationSettingsAndroid = {
	"@type": "firebaseAuthenticationSettingsAndroid";
};

/**
 * Settings for Firebase Authentication in the official iOS application
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1firebase_authentication_settings_ios.html
 */
export type FirebaseAuthenticationSettingsIos = {
	"@type": "firebaseAuthenticationSettingsIos";
	/** Device token from Apple Push Notification service */
	device_token: string;
	/** True, if App Sandbox is enabled */
	is_app_sandbox: boolean;
};

/**
 * Contains settings for the authentication of the user's phone number
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1phone_number_authentication_settings.html
 */
export type PhoneNumberAuthenticationSettings = {
	"@type": "phoneNumberAuthenticationSettings";
	/** Pass true if the authentication code may be sent via a flash call to the specified phone number */
	allow_flash_call: boolean;
	/** Pass true if the authentication code may be sent via a missed call to the specified phone number */
	allow_missed_call: boolean;
	/** Pass true if the authenticated phone number is used on the current device */
	is_current_phone_number: boolean;
	/** Pass true if there is a SIM card in the current device, but it is not possible to check whether phone number matches */
	has_unknown_phone_number: boolean;
	/** For official applications only. True, if the application can use Android SMS Retriever API (requires Google Play Services >= 10.2) to automatically receive the authentication code from the SMS. See https://developers.google.com/identity/sms-retriever/ for more details */
	allow_sms_retriever_api: boolean;
	/** For official Android and iOS applications only; pass null otherwise. Settings for Firebase Authentication */
	firebase_authentication_settings?: FirebaseAuthenticationSettings;
	/** List of up to 20 authentication tokens, recently received in updateOption("authentication_token") in previously logged out sessions; for setAuthenticationPhoneNumber only */
	authentication_tokens: string[];
};

/**
 * Represents a reaction applied to a message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1added_reaction.html
 */
export type AddedReaction = {
	"@type": "addedReaction";
	/** Type of the reaction */
	type: ReactionType;
	/** Identifier of the chat member, applied the reaction */
	sender_id: MessageSender;
	/** True, if the reaction was added by the current user */
	is_outgoing: boolean;
	/** Point in time (Unix timestamp) when the reaction was added */
	date: number;
};

/**
 * Represents a list of reactions added to a message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1added_reactions.html
 */
export type AddedReactions = {
	"@type": "addedReactions";
	/** The total number of found reactions */
	total_count: number;
	/** The list of added reactions */
	reactions: AddedReaction[];
	/** The offset for the next request. If empty, then there are no more results */
	next_offset: string;
};

/**
 * Represents an available reaction
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1available_reaction.html
 */
export type AvailableReaction = {
	"@type": "availableReaction";
	/** Type of the reaction */
	type: ReactionType;
	/** True, if Telegram Premium is needed to send the reaction */
	needs_premium: boolean;
};

/**
 * Represents a list of reactions that can be added to a message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1available_reactions.html
 */
export type AvailableReactions = {
	"@type": "availableReactions";
	/** List of reactions to be shown at the top */
	top_reactions: AvailableReaction[];
	/** List of recently used reactions */
	recent_reactions: AvailableReaction[];
	/** List of popular reactions */
	popular_reactions: AvailableReaction[];
	/** True, if any custom emoji reaction can be added by Telegram Premium subscribers */
	allow_custom_emoji: boolean;
	/** True, if the reactions will be tags and the message can be found by them */
	are_tags: boolean;
	/** The reason why the current user can't add reactions to the message, despite some other users can; may be null if none */
	unavailability_reason?: ReactionUnavailabilityReason;
};

/**
 * Contains information about an emoji reaction
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1emoji_reaction.html
 */
export type EmojiReaction = {
	"@type": "emojiReaction";
	/** Text representation of the reaction */
	emoji: string;
	/** Reaction title */
	title: string;
	/** True, if the reaction can be added to new messages and enabled in chats */
	is_active: boolean;
	/** Static icon for the reaction */
	static_icon: Sticker;
	/** Appear animation for the reaction */
	appear_animation: Sticker;
	/** Select animation for the reaction */
	select_animation: Sticker;
	/** Activate animation for the reaction */
	activate_animation: Sticker;
	/** Effect animation for the reaction */
	effect_animation: Sticker;
	/** Around animation for the reaction; may be null */
	around_animation?: Sticker;
	/** Center animation for the reaction; may be null */
	center_animation?: Sticker;
};

/**
 * The user is an anonymous administrator in the supergroup, but isn't a creator of it, so they can't vote on behalf of the supergroup
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1reaction_unavailability_reason_anonymous_administrator.html
 */
export type ReactionUnavailabilityReasonAnonymousAdministrator = {
	"@type": "reactionUnavailabilityReasonAnonymousAdministrator";
};

/**
 * The user isn't a member of the supergroup and can't send messages and reactions there without joining
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1reaction_unavailability_reason_guest.html
 */
export type ReactionUnavailabilityReasonGuest = {
	"@type": "reactionUnavailabilityReasonGuest";
};

/**
 * Represents a list of animations
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1animations.html
 */
export type Animations = {
	"@type": "animations";
	/** List of animations */
	animations: Animation[];
};

/**
 * A regular animated sticker
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1dice_stickers_regular.html
 */
export type DiceStickersRegular = {
	"@type": "diceStickersRegular";
	/** The animated sticker with the dice animation */
	sticker: Sticker;
};

/**
 * Animated stickers to be combined into a slot machine
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1dice_stickers_slot_machine.html
 */
export type DiceStickersSlotMachine = {
	"@type": "diceStickersSlotMachine";
	/** The animated sticker with the slot machine background. The background animation must start playing after all reel animations finish */
	background: Sticker;
	/** The animated sticker with the lever animation. The lever animation must play once in the initial dice state */
	lever: Sticker;
	/** The animated sticker with the left reel */
	left_reel: Sticker;
	/** The animated sticker with the center reel */
	center_reel: Sticker;
	/** The animated sticker with the right reel */
	right_reel: Sticker;
};

/**
 * Represents the result of an importContacts request
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1imported_contacts.html
 */
export type ImportedContacts = {
	"@type": "importedContacts";
	/** User identifiers of the imported contacts in the same order as they were specified in the request; 0 if the contact is not yet a registered user */
	user_ids: number[];
	/** The number of users that imported the corresponding contact; 0 for already registered users or if unavailable */
	importer_count: number[];
};

/**
 * The speech recognition is ongoing
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1speech_recognition_result_pending.html
 */
export type SpeechRecognitionResultPending = {
	"@type": "speechRecognitionResultPending";
	/** Partially recognized text */
	partial_text: string;
};

/**
 * The speech recognition successfully finished
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1speech_recognition_result_text.html
 */
export type SpeechRecognitionResultText = {
	"@type": "speechRecognitionResultText";
	/** Recognized text */
	text: string;
};

/**
 * The speech recognition failed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1speech_recognition_result_error.html
 */
export type SpeechRecognitionResultError = {
	"@type": "speechRecognitionResultError";
	/** Recognition error. An error with a message "MSG_VOICE_TOO_LONG" is returned when media duration is too big to be recognized */
	error: Error;
};

/**
 * Describes a connection of the bot with a business account
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1business_connection.html
 */
export type BusinessConnection = {
	"@type": "businessConnection";
	/** Unique identifier of the connection */
	id: string;
	/** Identifier of the business user that created the connection */
	user_id: number;
	/** Chat identifier of the private chat with the user */
	user_chat_id: number;
	/** Point in time (Unix timestamp) when the connection was established */
	date: number;
	/** Rights of the bot; may be null if the connection was disabled */
	rights?: BusinessBotRights;
	/** True, if the connection is enabled; false otherwise */
	is_enabled: boolean;
};

/**
 * Describes a color to highlight a bot added to attachment menu
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1attachment_menu_bot_color.html
 */
export type AttachmentMenuBotColor = {
	"@type": "attachmentMenuBotColor";
	/** Color in the RGB format for light themes */
	light_color: number;
	/** Color in the RGB format for dark themes */
	dark_color: number;
};

/**
 * Represents a bot, which can be added to attachment or side menu
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1attachment_menu_bot.html
 */
export type AttachmentMenuBot = {
	"@type": "attachmentMenuBot";
	/** User identifier of the bot */
	bot_user_id: number;
	/** True, if the bot supports opening from attachment menu in the chat with the bot */
	supports_self_chat: boolean;
	/** True, if the bot supports opening from attachment menu in private chats with ordinary users */
	supports_user_chats: boolean;
	/** True, if the bot supports opening from attachment menu in private chats with other bots */
	supports_bot_chats: boolean;
	/** True, if the bot supports opening from attachment menu in basic group and supergroup chats */
	supports_group_chats: boolean;
	/** True, if the bot supports opening from attachment menu in channel chats */
	supports_channel_chats: boolean;
	/** True, if the user must be asked for the permission to send messages to the bot */
	request_write_access: boolean;
	/** True, if the bot was explicitly added by the user. If the bot isn't added, then on the first bot launch toggleBotIsAddedToAttachmentMenu must be called and the bot must be added or removed */
	is_added: boolean;
	/** True, if the bot must be shown in the attachment menu */
	show_in_attachment_menu: boolean;
	/** True, if the bot must be shown in the side menu */
	show_in_side_menu: boolean;
	/** True, if a disclaimer, why the bot is shown in the side menu, is needed */
	show_disclaimer_in_side_menu: boolean;
	/** Name for the bot in attachment menu */
	name: string;
	/** Color to highlight selected name of the bot if appropriate; may be null */
	name_color?: AttachmentMenuBotColor;
	/** Default icon for the bot in SVG format; may be null */
	default_icon?: File;
	/** Icon for the bot in SVG format for the official iOS app; may be null */
	ios_static_icon?: File;
	/** Icon for the bot in TGS format for the official iOS app; may be null */
	ios_animated_icon?: File;
	/** Icon for the bot in PNG format for the official iOS app side menu; may be null */
	ios_side_menu_icon?: File;
	/** Icon for the bot in TGS format for the official Android app; may be null */
	android_icon?: File;
	/** Icon for the bot in SVG format for the official Android app side menu; may be null */
	android_side_menu_icon?: File;
	/** Icon for the bot in TGS format for the official native macOS app; may be null */
	macos_icon?: File;
	/** Icon for the bot in PNG format for the official macOS app side menu; may be null */
	macos_side_menu_icon?: File;
	/** Color to highlight selected icon of the bot if appropriate; may be null */
	icon_color?: AttachmentMenuBotColor;
	/** Default placeholder for opened Web Apps in SVG format; may be null */
	web_app_placeholder?: File;
};

/**
 * Information about the message sent by answerWebAppQuery
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1sent_web_app_message.html
 */
export type SentWebAppMessage = {
	"@type": "sentWebAppMessage";
	/** Identifier of the sent inline message, if known */
	inline_message_id: string;
};

/**
 * The user connected a website by logging in using Telegram Login Widget on it
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1bot_write_access_allow_reason_connected_website.html
 */
export type BotWriteAccessAllowReasonConnectedWebsite = {
	"@type": "botWriteAccessAllowReasonConnectedWebsite";
	/** Domain name of the connected website */
	domain_name: string;
};

/**
 * The user added the bot to attachment or side menu using toggleBotIsAddedToAttachmentMenu
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1bot_write_access_allow_reason_added_to_attachment_menu.html
 */
export type BotWriteAccessAllowReasonAddedToAttachmentMenu = {
	"@type": "botWriteAccessAllowReasonAddedToAttachmentMenu";
};

/**
 * The user launched a Web App using getWebAppLinkUrl
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1bot_write_access_allow_reason_launched_web_app.html
 */
export type BotWriteAccessAllowReasonLaunchedWebApp = {
	"@type": "botWriteAccessAllowReasonLaunchedWebApp";
	/** Information about the Web App */
	web_app: WebApp;
};

/**
 * The user accepted bot's request to send messages with allowBotToSendMessages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1bot_write_access_allow_reason_accepted_request.html
 */
export type BotWriteAccessAllowReasonAcceptedRequest = {
	"@type": "botWriteAccessAllowReasonAcceptedRequest";
};

/**
 * Contains an HTTP URL
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1http_url.html
 */
export type HttpUrl = {
	"@type": "httpUrl";
	/** The URL */
	url: string;
};

/**
 * Contains an HTTPS URL, which can be used to get information about a user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_link.html
 */
export type UserLink = {
	"@type": "userLink";
	/** The URL */
	url: string;
	/** Left time for which the link is valid, in seconds; 0 if the link is a public username link */
	expires_in: number;
};

/**
 * Describes allowed types for the target chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1target_chat_types.html
 */
export type TargetChatTypes = {
	"@type": "targetChatTypes";
	/** True, if private chats with ordinary users are allowed */
	allow_user_chats: boolean;
	/** True, if private chats with other bots are allowed */
	allow_bot_chats: boolean;
	/** True, if basic group and supergroup chats are allowed */
	allow_group_chats: boolean;
	/** True, if channel chats are allowed */
	allow_channel_chats: boolean;
};

/**
 * The currently opened chat and forum topic must be kept
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1target_chat_current.html
 */
export type TargetChatCurrent = {
	"@type": "targetChatCurrent";
};

/**
 * The chat needs to be chosen by the user among chats of the specified types
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1target_chat_chosen.html
 */
export type TargetChatChosen = {
	"@type": "targetChatChosen";
	/** Allowed types for the chat */
	types: TargetChatTypes;
};

/**
 * The chat needs to be open with the provided internal link
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1target_chat_internal_link.html
 */
export type TargetChatInternalLink = {
	"@type": "targetChatInternalLink";
	/** An internal link pointing to the chat */
	link: InternalLinkType;
};

/**
 * Represents a link to an animated GIF or an animated (i.e., without sound) H.264/MPEG-4 AVC video
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_inline_query_result_animation.html
 */
export type InputInlineQueryResultAnimation = {
	"@type": "inputInlineQueryResultAnimation";
	/** Unique identifier of the query result */
	id: string;
	/** Title of the query result */
	title: string;
	/** URL of the result thumbnail (JPEG, GIF, or MPEG4), if it exists */
	thumbnail_url: string;
	/** MIME type of the video thumbnail. If non-empty, must be one of "image/jpeg", "image/gif" and "video/mp4" */
	thumbnail_mime_type?: string;
	/** The URL of the video file (file size must not exceed 1MB) */
	video_url: string;
	/** MIME type of the video file. Must be one of "image/gif" and "video/mp4" */
	video_mime_type: string;
	/** Duration of the video, in seconds */
	video_duration: number;
	/** Width of the video */
	video_width: number;
	/** Height of the video */
	video_height: number;
	/** The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null */
	reply_markup?: ReplyMarkup;
	/** The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessageAnimation, inputMessageInvoice, inputMessageLocation, inputMessageVenue or inputMessageContact */
	input_message_content: InputMessageContent;
};

/**
 * Represents a link to an article or web page
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_inline_query_result_article.html
 */
export type InputInlineQueryResultArticle = {
	"@type": "inputInlineQueryResultArticle";
	/** Unique identifier of the query result */
	id: string;
	/** URL of the result, if it exists */
	url: string;
	/** Title of the result */
	title: string;
	/** A short description of the result */
	description: string;
	/** URL of the result thumbnail, if it exists */
	thumbnail_url: string;
	/** Thumbnail width, if known */
	thumbnail_width: number;
	/** Thumbnail height, if known */
	thumbnail_height: number;
	/** The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null */
	reply_markup?: ReplyMarkup;
	/** The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessageInvoice, inputMessageLocation, inputMessageVenue or inputMessageContact */
	input_message_content: InputMessageContent;
};

/**
 * Represents a link to an MP3 audio file
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_inline_query_result_audio.html
 */
export type InputInlineQueryResultAudio = {
	"@type": "inputInlineQueryResultAudio";
	/** Unique identifier of the query result */
	id: string;
	/** Title of the audio file */
	title: string;
	/** Performer of the audio file */
	performer: string;
	/** The URL of the audio file */
	audio_url: string;
	/** Audio file duration, in seconds */
	audio_duration: number;
	/** The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null */
	reply_markup?: ReplyMarkup;
	/** The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessageAudio, inputMessageInvoice, inputMessageLocation, inputMessageVenue or inputMessageContact */
	input_message_content: InputMessageContent;
};

/**
 * Represents a user contact
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_inline_query_result_contact.html
 */
export type InputInlineQueryResultContact = {
	"@type": "inputInlineQueryResultContact";
	/** Unique identifier of the query result */
	id: string;
	/** User contact */
	contact: Contact;
	/** URL of the result thumbnail, if it exists */
	thumbnail_url: string;
	/** Thumbnail width, if known */
	thumbnail_width: number;
	/** Thumbnail height, if known */
	thumbnail_height: number;
	/** The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null */
	reply_markup?: ReplyMarkup;
	/** The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessageInvoice, inputMessageLocation, inputMessageVenue or inputMessageContact */
	input_message_content: InputMessageContent;
};

/**
 * Represents a link to a file
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_inline_query_result_document.html
 */
export type InputInlineQueryResultDocument = {
	"@type": "inputInlineQueryResultDocument";
	/** Unique identifier of the query result */
	id: string;
	/** Title of the resulting file */
	title: string;
	/** Short description of the result, if known */
	description: string;
	/** URL of the file */
	document_url: string;
	/** MIME type of the file content; only "application/pdf" and "application/zip" are currently allowed */
	mime_type: string;
	/** The URL of the file thumbnail, if it exists */
	thumbnail_url: string;
	/** Width of the thumbnail */
	thumbnail_width: number;
	/** Height of the thumbnail */
	thumbnail_height: number;
	/** The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null */
	reply_markup?: ReplyMarkup;
	/** The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessageDocument, inputMessageInvoice, inputMessageLocation, inputMessageVenue or inputMessageContact */
	input_message_content: InputMessageContent;
};

/**
 * Represents a game
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_inline_query_result_game.html
 */
export type InputInlineQueryResultGame = {
	"@type": "inputInlineQueryResultGame";
	/** Unique identifier of the query result */
	id: string;
	/** Short name of the game */
	game_short_name: string;
	/** The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null */
	reply_markup?: ReplyMarkup;
};

/**
 * Represents a point on the map
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_inline_query_result_location.html
 */
export type InputInlineQueryResultLocation = {
	"@type": "inputInlineQueryResultLocation";
	/** Unique identifier of the query result */
	id: string;
	/** Location result */
	location: Location;
	/** Amount of time relative to the message sent time until the location can be updated, in seconds */
	live_period: number;
	/** Title of the result */
	title: string;
	/** URL of the result thumbnail, if it exists */
	thumbnail_url: string;
	/** Thumbnail width, if known */
	thumbnail_width: number;
	/** Thumbnail height, if known */
	thumbnail_height: number;
	/** The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null */
	reply_markup?: ReplyMarkup;
	/** The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessageInvoice, inputMessageLocation, inputMessageVenue or inputMessageContact */
	input_message_content: InputMessageContent;
};

/**
 * Represents link to a JPEG image
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_inline_query_result_photo.html
 */
export type InputInlineQueryResultPhoto = {
	"@type": "inputInlineQueryResultPhoto";
	/** Unique identifier of the query result */
	id: string;
	/** Title of the result, if known */
	title: string;
	/** A short description of the result, if known */
	description: string;
	/** URL of the photo thumbnail, if it exists */
	thumbnail_url: string;
	/** The URL of the JPEG photo (photo size must not exceed 5MB) */
	photo_url: string;
	/** Width of the photo */
	photo_width: number;
	/** Height of the photo */
	photo_height: number;
	/** The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null */
	reply_markup?: ReplyMarkup;
	/** The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessagePhoto, inputMessageInvoice, inputMessageLocation, inputMessageVenue or inputMessageContact */
	input_message_content: InputMessageContent;
};

/**
 * Represents a link to a WEBP, TGS, or WEBM sticker
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_inline_query_result_sticker.html
 */
export type InputInlineQueryResultSticker = {
	"@type": "inputInlineQueryResultSticker";
	/** Unique identifier of the query result */
	id: string;
	/** URL of the sticker thumbnail, if it exists */
	thumbnail_url: string;
	/** The URL of the WEBP, TGS, or WEBM sticker (sticker file size must not exceed 5MB) */
	sticker_url: string;
	/** Width of the sticker */
	sticker_width: number;
	/** Height of the sticker */
	sticker_height: number;
	/** The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null */
	reply_markup?: ReplyMarkup;
	/** The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessageSticker, inputMessageInvoice, inputMessageLocation, inputMessageVenue or inputMessageContact */
	input_message_content: InputMessageContent;
};

/**
 * Represents information about a venue
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_inline_query_result_venue.html
 */
export type InputInlineQueryResultVenue = {
	"@type": "inputInlineQueryResultVenue";
	/** Unique identifier of the query result */
	id: string;
	/** Venue result */
	venue: Venue;
	/** URL of the result thumbnail, if it exists */
	thumbnail_url: string;
	/** Thumbnail width, if known */
	thumbnail_width: number;
	/** Thumbnail height, if known */
	thumbnail_height: number;
	/** The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null */
	reply_markup?: ReplyMarkup;
	/** The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessageInvoice, inputMessageLocation, inputMessageVenue or inputMessageContact */
	input_message_content: InputMessageContent;
};

/**
 * Represents a link to a page containing an embedded video player or a video file
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_inline_query_result_video.html
 */
export type InputInlineQueryResultVideo = {
	"@type": "inputInlineQueryResultVideo";
	/** Unique identifier of the query result */
	id: string;
	/** Title of the result */
	title: string;
	/** A short description of the result, if known */
	description: string;
	/** The URL of the video thumbnail (JPEG), if it exists */
	thumbnail_url: string;
	/** URL of the embedded video player or video file */
	video_url: string;
	/** MIME type of the content of the video URL, only "text/html" or "video/mp4" are currently supported */
	mime_type: string;
	/** Width of the video */
	video_width: number;
	/** Height of the video */
	video_height: number;
	/** Video duration, in seconds */
	video_duration: number;
	/** The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null */
	reply_markup?: ReplyMarkup;
	/** The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessageVideo, inputMessageInvoice, inputMessageLocation, inputMessageVenue or inputMessageContact */
	input_message_content: InputMessageContent;
};

/**
 * Represents a link to an opus-encoded audio file within an OGG container, single channel audio
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_inline_query_result_voice_note.html
 */
export type InputInlineQueryResultVoiceNote = {
	"@type": "inputInlineQueryResultVoiceNote";
	/** Unique identifier of the query result */
	id: string;
	/** Title of the voice note */
	title: string;
	/** The URL of the voice note file */
	voice_note_url: string;
	/** Duration of the voice note, in seconds */
	voice_note_duration: number;
	/** The message reply markup; pass null if none. Must be of type replyMarkupInlineKeyboard or null */
	reply_markup?: ReplyMarkup;
	/** The content of the message to be sent. Must be one of the following types: inputMessageText, inputMessageVoiceNote, inputMessageInvoice, inputMessageLocation, inputMessageVenue or inputMessageContact */
	input_message_content: InputMessageContent;
};

/**
 * Represents a link to an article or web page
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1inline_query_result_article.html
 */
export type InlineQueryResultArticle = {
	"@type": "inlineQueryResultArticle";
	/** Unique identifier of the query result */
	id: string;
	/** URL of the result, if it exists */
	url: string;
	/** Title of the result */
	title: string;
	/** A short description of the result */
	description: string;
	/** Result thumbnail in JPEG format; may be null */
	thumbnail?: Thumbnail;
};

/**
 * Represents a user contact
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1inline_query_result_contact.html
 */
export type InlineQueryResultContact = {
	"@type": "inlineQueryResultContact";
	/** Unique identifier of the query result */
	id: string;
	/** A user contact */
	contact: Contact;
	/** Result thumbnail in JPEG format; may be null */
	thumbnail?: Thumbnail;
};

/**
 * Represents a point on the map
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1inline_query_result_location.html
 */
export type InlineQueryResultLocation = {
	"@type": "inlineQueryResultLocation";
	/** Unique identifier of the query result */
	id: string;
	/** Location result */
	location: Location;
	/** Title of the result */
	title: string;
	/** Result thumbnail in JPEG format; may be null */
	thumbnail?: Thumbnail;
};

/**
 * Represents information about a venue
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1inline_query_result_venue.html
 */
export type InlineQueryResultVenue = {
	"@type": "inlineQueryResultVenue";
	/** Unique identifier of the query result */
	id: string;
	/** Venue result */
	venue: Venue;
	/** Result thumbnail in JPEG format; may be null */
	thumbnail?: Thumbnail;
};

/**
 * Represents information about a game
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1inline_query_result_game.html
 */
export type InlineQueryResultGame = {
	"@type": "inlineQueryResultGame";
	/** Unique identifier of the query result */
	id: string;
	/** Game result */
	game: Game;
};

/**
 * Represents an animation file
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1inline_query_result_animation.html
 */
export type InlineQueryResultAnimation = {
	"@type": "inlineQueryResultAnimation";
	/** Unique identifier of the query result */
	id: string;
	/** Animation file */
	animation: Animation;
	/** Animation title */
	title: string;
};

/**
 * Represents an audio file
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1inline_query_result_audio.html
 */
export type InlineQueryResultAudio = {
	"@type": "inlineQueryResultAudio";
	/** Unique identifier of the query result */
	id: string;
	/** Audio file */
	audio: Audio;
};

/**
 * Represents a document
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1inline_query_result_document.html
 */
export type InlineQueryResultDocument = {
	"@type": "inlineQueryResultDocument";
	/** Unique identifier of the query result */
	id: string;
	/** Document */
	document: Document;
	/** Document title */
	title: string;
	/** Document description */
	description: string;
};

/**
 * Represents a photo
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1inline_query_result_photo.html
 */
export type InlineQueryResultPhoto = {
	"@type": "inlineQueryResultPhoto";
	/** Unique identifier of the query result */
	id: string;
	/** Photo */
	photo: Photo;
	/** Title of the result, if known */
	title: string;
	/** A short description of the result, if known */
	description: string;
};

/**
 * Represents a sticker
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1inline_query_result_sticker.html
 */
export type InlineQueryResultSticker = {
	"@type": "inlineQueryResultSticker";
	/** Unique identifier of the query result */
	id: string;
	/** Sticker */
	sticker: Sticker;
};

/**
 * Represents a video
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1inline_query_result_video.html
 */
export type InlineQueryResultVideo = {
	"@type": "inlineQueryResultVideo";
	/** Unique identifier of the query result */
	id: string;
	/** Video */
	video: Video;
	/** Title of the video */
	title: string;
	/** Description of the video */
	description: string;
};

/**
 * Represents a voice note
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1inline_query_result_voice_note.html
 */
export type InlineQueryResultVoiceNote = {
	"@type": "inlineQueryResultVoiceNote";
	/** Unique identifier of the query result */
	id: string;
	/** Voice note */
	voice_note: VoiceNote;
	/** Title of the voice note */
	title: string;
};

/**
 * Describes the button that opens a private chat with the bot and sends a start message to the bot with the given parameter
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1inline_query_results_button_type_start_bot.html
 */
export type InlineQueryResultsButtonTypeStartBot = {
	"@type": "inlineQueryResultsButtonTypeStartBot";
	/** The parameter for the bot start message */
	parameter: string;
};

/**
 * Describes the button that opens a Web App by calling getWebAppUrl
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1inline_query_results_button_type_web_app.html
 */
export type InlineQueryResultsButtonTypeWebApp = {
	"@type": "inlineQueryResultsButtonTypeWebApp";
	/** An HTTP URL to pass to getWebAppUrl */
	url: string;
};

/**
 * Represents a button to be shown above inline query results
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1inline_query_results_button.html
 */
export type InlineQueryResultsButton = {
	"@type": "inlineQueryResultsButton";
	/** The text of the button */
	text: string;
	/** Type of the button */
	type: InlineQueryResultsButtonType;
};

/**
 * Represents the results of the inline query. Use sendInlineQueryResultMessage to send the result of the query
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1inline_query_results.html
 */
export type InlineQueryResults = {
	"@type": "inlineQueryResults";
	/** Unique identifier of the inline query */
	inline_query_id: string;
	/** Button to be shown above inline query results; may be null */
	button?: InlineQueryResultsButton;
	/** Results of the query */
	results: InlineQueryResult[];
	/** The offset for the next request. If empty, then there are no more results */
	next_offset: string;
};

/**
 * Represents an inline message that can be sent via the bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1prepared_inline_message_id.html
 */
export type PreparedInlineMessageId = {
	"@type": "preparedInlineMessageId";
	/** Unique identifier for the message */
	id: string;
	/** Point in time (Unix timestamp) when the message can't be used anymore */
	expiration_date: number;
};

/**
 * Represents a ready to send inline message. Use sendInlineQueryResultMessage to send the message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1prepared_inline_message.html
 */
export type PreparedInlineMessage = {
	"@type": "preparedInlineMessage";
	/** Unique identifier of the inline query to pass to sendInlineQueryResultMessage */
	inline_query_id: string;
	/** Resulted inline message of the query */
	result: InlineQueryResult;
	/** Types of the chats to which the message can be sent */
	chat_types: TargetChatTypes;
};

/**
 * The payload for a general callback button
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1callback_query_payload_data.html
 */
export type CallbackQueryPayloadData = {
	"@type": "callbackQueryPayloadData";
	/** Data that was attached to the callback button */
	data: string;
};

/**
 * The payload for a callback button requiring password
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1callback_query_payload_data_with_password.html
 */
export type CallbackQueryPayloadDataWithPassword = {
	"@type": "callbackQueryPayloadDataWithPassword";
	/** The 2-step verification password for the current user */
	password: string;
	/** Data that was attached to the callback button */
	data: string;
};

/**
 * The payload for a game callback button
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1callback_query_payload_game.html
 */
export type CallbackQueryPayloadGame = {
	"@type": "callbackQueryPayloadGame";
	/** A short name of the game that was attached to the callback button */
	game_short_name: string;
};

/**
 * Contains a bot's answer to a callback query
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1callback_query_answer.html
 */
export type CallbackQueryAnswer = {
	"@type": "callbackQueryAnswer";
	/** Text of the answer */
	text: string;
	/** True, if an alert must be shown to the user instead of a toast notification */
	show_alert: boolean;
	/** URL to be opened */
	url: string;
};

/**
 * Contains the result of a custom request
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1custom_request_result.html
 */
export type CustomRequestResult = {
	"@type": "customRequestResult";
	/** A JSON-serialized result */
	result: string;
};

/**
 * Contains one row of the game high score table
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1game_high_score.html
 */
export type GameHighScore = {
	"@type": "gameHighScore";
	/** Position in the high score table */
	position: number;
	/** User identifier */
	user_id: number;
	/** User score */
	score: number;
};

/**
 * Contains a list of game high scores
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1game_high_scores.html
 */
export type GameHighScores = {
	"@type": "gameHighScores";
	/** A list of game high scores */
	scores: GameHighScore[];
};

/**
 * A message was edited
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_message_edited.html
 */
export type ChatEventMessageEdited = {
	"@type": "chatEventMessageEdited";
	/** The original message before the edit */
	old_message: Message;
	/** The message after it was edited */
	new_message: Message;
};

/**
 * A message was deleted
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_message_deleted.html
 */
export type ChatEventMessageDeleted = {
	"@type": "chatEventMessageDeleted";
	/** Deleted message */
	message: Message;
	/** True, if the message deletion can be reported via reportSupergroupAntiSpamFalsePositive */
	can_report_anti_spam_false_positive: boolean;
};

/**
 * A message was pinned
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_message_pinned.html
 */
export type ChatEventMessagePinned = {
	"@type": "chatEventMessagePinned";
	/** Pinned message */
	message: Message;
};

/**
 * A message was unpinned
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_message_unpinned.html
 */
export type ChatEventMessageUnpinned = {
	"@type": "chatEventMessageUnpinned";
	/** Unpinned message */
	message: Message;
};

/**
 * A poll in a message was stopped
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_poll_stopped.html
 */
export type ChatEventPollStopped = {
	"@type": "chatEventPollStopped";
	/** The message with the poll */
	message: Message;
};

/**
 * A new member joined the chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_member_joined.html
 */
export type ChatEventMemberJoined = {
	"@type": "chatEventMemberJoined";
};

/**
 * A new member joined the chat via an invite link
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_member_joined_by_invite_link.html
 */
export type ChatEventMemberJoinedByInviteLink = {
	"@type": "chatEventMemberJoinedByInviteLink";
	/** Invite link used to join the chat */
	invite_link: ChatInviteLink;
	/** True, if the user has joined the chat using an invite link for a chat folder */
	via_chat_folder_invite_link: boolean;
};

/**
 * A new member was accepted to the chat by an administrator
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_member_joined_by_request.html
 */
export type ChatEventMemberJoinedByRequest = {
	"@type": "chatEventMemberJoinedByRequest";
	/** User identifier of the chat administrator, approved user join request */
	approver_user_id: number;
	/** Invite link used to join the chat; may be null */
	invite_link?: ChatInviteLink;
};

/**
 * A new chat member was invited
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_member_invited.html
 */
export type ChatEventMemberInvited = {
	"@type": "chatEventMemberInvited";
	/** New member user identifier */
	user_id: number;
	/** New member status */
	status: ChatMemberStatus;
};

/**
 * A member left the chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_member_left.html
 */
export type ChatEventMemberLeft = {
	"@type": "chatEventMemberLeft";
};

/**
 * A chat member has gained/lost administrator status, or the list of their administrator privileges has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_member_promoted.html
 */
export type ChatEventMemberPromoted = {
	"@type": "chatEventMemberPromoted";
	/** Affected chat member user identifier */
	user_id: number;
	/** Previous status of the chat member */
	old_status: ChatMemberStatus;
	/** New status of the chat member */
	new_status: ChatMemberStatus;
};

/**
 * A chat member was restricted/unrestricted or banned/unbanned, or the list of their restrictions has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_member_restricted.html
 */
export type ChatEventMemberRestricted = {
	"@type": "chatEventMemberRestricted";
	/** Affected chat member identifier */
	member_id: MessageSender;
	/** Previous status of the chat member */
	old_status: ChatMemberStatus;
	/** New status of the chat member */
	new_status: ChatMemberStatus;
};

/**
 * A chat member extended their subscription to the chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_member_subscription_extended.html
 */
export type ChatEventMemberSubscriptionExtended = {
	"@type": "chatEventMemberSubscriptionExtended";
	/** Affected chat member user identifier */
	user_id: number;
	/** Previous status of the chat member */
	old_status: ChatMemberStatus;
	/** New status of the chat member */
	new_status: ChatMemberStatus;
};

/**
 * The chat available reactions were changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_available_reactions_changed.html
 */
export type ChatEventAvailableReactionsChanged = {
	"@type": "chatEventAvailableReactionsChanged";
	/** Previous chat available reactions */
	old_available_reactions: ChatAvailableReactions;
	/** New chat available reactions */
	new_available_reactions: ChatAvailableReactions;
};

/**
 * The chat background was changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_background_changed.html
 */
export type ChatEventBackgroundChanged = {
	"@type": "chatEventBackgroundChanged";
	/** Previous background; may be null if none */
	old_background?: ChatBackground;
	/** New background; may be null if none */
	new_background?: ChatBackground;
};

/**
 * The chat description was changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_description_changed.html
 */
export type ChatEventDescriptionChanged = {
	"@type": "chatEventDescriptionChanged";
	/** Previous chat description */
	old_description: string;
	/** New chat description */
	new_description: string;
};

/**
 * The chat emoji status was changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_emoji_status_changed.html
 */
export type ChatEventEmojiStatusChanged = {
	"@type": "chatEventEmojiStatusChanged";
	/** Previous emoji status; may be null if none */
	old_emoji_status?: EmojiStatus;
	/** New emoji status; may be null if none */
	new_emoji_status?: EmojiStatus;
};

/**
 * The linked chat of a supergroup was changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_linked_chat_changed.html
 */
export type ChatEventLinkedChatChanged = {
	"@type": "chatEventLinkedChatChanged";
	/** Previous supergroup linked chat identifier */
	old_linked_chat_id: number;
	/** New supergroup linked chat identifier */
	new_linked_chat_id: number;
};

/**
 * The supergroup location was changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_location_changed.html
 */
export type ChatEventLocationChanged = {
	"@type": "chatEventLocationChanged";
	/** Previous location; may be null */
	old_location?: ChatLocation;
	/** New location; may be null */
	new_location?: ChatLocation;
};

/**
 * The message auto-delete timer was changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_message_auto_delete_time_changed.html
 */
export type ChatEventMessageAutoDeleteTimeChanged = {
	"@type": "chatEventMessageAutoDeleteTimeChanged";
	/** Previous value of message_auto_delete_time */
	old_message_auto_delete_time: number;
	/** New value of message_auto_delete_time */
	new_message_auto_delete_time: number;
};

/**
 * The chat permissions were changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_permissions_changed.html
 */
export type ChatEventPermissionsChanged = {
	"@type": "chatEventPermissionsChanged";
	/** Previous chat permissions */
	old_permissions: ChatPermissions;
	/** New chat permissions */
	new_permissions: ChatPermissions;
};

/**
 * The chat photo was changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_photo_changed.html
 */
export type ChatEventPhotoChanged = {
	"@type": "chatEventPhotoChanged";
	/** Previous chat photo value; may be null */
	old_photo?: ChatPhoto;
	/** New chat photo value; may be null */
	new_photo?: ChatPhoto;
};

/**
 * The slow_mode_delay setting of a supergroup was changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_slow_mode_delay_changed.html
 */
export type ChatEventSlowModeDelayChanged = {
	"@type": "chatEventSlowModeDelayChanged";
	/** Previous value of slow_mode_delay, in seconds */
	old_slow_mode_delay: number;
	/** New value of slow_mode_delay, in seconds */
	new_slow_mode_delay: number;
};

/**
 * The supergroup sticker set was changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_sticker_set_changed.html
 */
export type ChatEventStickerSetChanged = {
	"@type": "chatEventStickerSetChanged";
	/** Previous identifier of the chat sticker set; 0 if none */
	old_sticker_set_id: string;
	/** New identifier of the chat sticker set; 0 if none */
	new_sticker_set_id: string;
};

/**
 * The supergroup sticker set with allowed custom emoji was changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_custom_emoji_sticker_set_changed.html
 */
export type ChatEventCustomEmojiStickerSetChanged = {
	"@type": "chatEventCustomEmojiStickerSetChanged";
	/** Previous identifier of the chat sticker set; 0 if none */
	old_sticker_set_id: string;
	/** New identifier of the chat sticker set; 0 if none */
	new_sticker_set_id: string;
};

/**
 * The chat title was changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_title_changed.html
 */
export type ChatEventTitleChanged = {
	"@type": "chatEventTitleChanged";
	/** Previous chat title */
	old_title: string;
	/** New chat title */
	new_title: string;
};

/**
 * The chat editable username was changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_username_changed.html
 */
export type ChatEventUsernameChanged = {
	"@type": "chatEventUsernameChanged";
	/** Previous chat username */
	old_username: string;
	/** New chat username */
	new_username: string;
};

/**
 * The chat active usernames were changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_active_usernames_changed.html
 */
export type ChatEventActiveUsernamesChanged = {
	"@type": "chatEventActiveUsernamesChanged";
	/** Previous list of active usernames */
	old_usernames: string[];
	/** New list of active usernames */
	new_usernames: string[];
};

/**
 * The chat accent color or background custom emoji were changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_accent_color_changed.html
 */
export type ChatEventAccentColorChanged = {
	"@type": "chatEventAccentColorChanged";
	/** Previous identifier of chat accent color */
	old_accent_color_id: number;
	/** Previous identifier of the custom emoji; 0 if none */
	old_background_custom_emoji_id: string;
	/** New identifier of chat accent color */
	new_accent_color_id: number;
	/** New identifier of the custom emoji; 0 if none */
	new_background_custom_emoji_id: string;
};

/**
 * The chat's profile accent color or profile background custom emoji were changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_profile_accent_color_changed.html
 */
export type ChatEventProfileAccentColorChanged = {
	"@type": "chatEventProfileAccentColorChanged";
	/** Previous identifier of chat's profile accent color; -1 if none */
	old_profile_accent_color_id: number;
	/** Previous identifier of the custom emoji; 0 if none */
	old_profile_background_custom_emoji_id: string;
	/** New identifier of chat's profile accent color; -1 if none */
	new_profile_accent_color_id: number;
	/** New identifier of the custom emoji; 0 if none */
	new_profile_background_custom_emoji_id: string;
};

/**
 * The has_protected_content setting of a channel was toggled
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_has_protected_content_toggled.html
 */
export type ChatEventHasProtectedContentToggled = {
	"@type": "chatEventHasProtectedContentToggled";
	/** New value of has_protected_content */
	has_protected_content: boolean;
};

/**
 * The can_invite_users permission of a supergroup chat was toggled
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_invites_toggled.html
 */
export type ChatEventInvitesToggled = {
	"@type": "chatEventInvitesToggled";
	/** New value of can_invite_users permission */
	can_invite_users: boolean;
};

/**
 * The is_all_history_available setting of a supergroup was toggled
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_is_all_history_available_toggled.html
 */
export type ChatEventIsAllHistoryAvailableToggled = {
	"@type": "chatEventIsAllHistoryAvailableToggled";
	/** New value of is_all_history_available */
	is_all_history_available: boolean;
};

/**
 * The has_aggressive_anti_spam_enabled setting of a supergroup was toggled
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_has_aggressive_anti_spam_enabled_toggled.html
 */
export type ChatEventHasAggressiveAntiSpamEnabledToggled = {
	"@type": "chatEventHasAggressiveAntiSpamEnabledToggled";
	/** New value of has_aggressive_anti_spam_enabled */
	has_aggressive_anti_spam_enabled: boolean;
};

/**
 * The sign_messages setting of a channel was toggled
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_sign_messages_toggled.html
 */
export type ChatEventSignMessagesToggled = {
	"@type": "chatEventSignMessagesToggled";
	/** New value of sign_messages */
	sign_messages: boolean;
};

/**
 * The show_message_sender setting of a channel was toggled
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_show_message_sender_toggled.html
 */
export type ChatEventShowMessageSenderToggled = {
	"@type": "chatEventShowMessageSenderToggled";
	/** New value of show_message_sender */
	show_message_sender: boolean;
};

/**
 * The has_automatic_translation setting of a channel was toggled
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_automatic_translation_toggled.html
 */
export type ChatEventAutomaticTranslationToggled = {
	"@type": "chatEventAutomaticTranslationToggled";
	/** New value of has_automatic_translation */
	has_automatic_translation: boolean;
};

/**
 * A chat invite link was edited
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_invite_link_edited.html
 */
export type ChatEventInviteLinkEdited = {
	"@type": "chatEventInviteLinkEdited";
	/** Previous information about the invite link */
	old_invite_link: ChatInviteLink;
	/** New information about the invite link */
	new_invite_link: ChatInviteLink;
};

/**
 * A chat invite link was revoked
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_invite_link_revoked.html
 */
export type ChatEventInviteLinkRevoked = {
	"@type": "chatEventInviteLinkRevoked";
	/** The invite link */
	invite_link: ChatInviteLink;
};

/**
 * A revoked chat invite link was deleted
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_invite_link_deleted.html
 */
export type ChatEventInviteLinkDeleted = {
	"@type": "chatEventInviteLinkDeleted";
	/** The invite link */
	invite_link: ChatInviteLink;
};

/**
 * A video chat was created
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_video_chat_created.html
 */
export type ChatEventVideoChatCreated = {
	"@type": "chatEventVideoChatCreated";
	/** Identifier of the video chat. The video chat can be received through the method getGroupCall */
	group_call_id: number;
};

/**
 * A video chat was ended
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_video_chat_ended.html
 */
export type ChatEventVideoChatEnded = {
	"@type": "chatEventVideoChatEnded";
	/** Identifier of the video chat. The video chat can be received through the method getGroupCall */
	group_call_id: number;
};

/**
 * The mute_new_participants setting of a video chat was toggled
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_video_chat_mute_new_participants_toggled.html
 */
export type ChatEventVideoChatMuteNewParticipantsToggled = {
	"@type": "chatEventVideoChatMuteNewParticipantsToggled";
	/** New value of the mute_new_participants setting */
	mute_new_participants: boolean;
};

/**
 * A video chat participant was muted or unmuted
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_video_chat_participant_is_muted_toggled.html
 */
export type ChatEventVideoChatParticipantIsMutedToggled = {
	"@type": "chatEventVideoChatParticipantIsMutedToggled";
	/** Identifier of the affected group call participant */
	participant_id: MessageSender;
	/** New value of is_muted */
	is_muted: boolean;
};

/**
 * A video chat participant volume level was changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_video_chat_participant_volume_level_changed.html
 */
export type ChatEventVideoChatParticipantVolumeLevelChanged = {
	"@type": "chatEventVideoChatParticipantVolumeLevelChanged";
	/** Identifier of the affected group call participant */
	participant_id: MessageSender;
	/** New value of volume_level; 1-20000 in hundreds of percents */
	volume_level: number;
};

/**
 * The is_forum setting of a channel was toggled
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_is_forum_toggled.html
 */
export type ChatEventIsForumToggled = {
	"@type": "chatEventIsForumToggled";
	/** New value of is_forum */
	is_forum: boolean;
};

/**
 * A new forum topic was created
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_forum_topic_created.html
 */
export type ChatEventForumTopicCreated = {
	"@type": "chatEventForumTopicCreated";
	/** Information about the topic */
	topic_info: ForumTopicInfo;
};

/**
 * A forum topic was edited
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_forum_topic_edited.html
 */
export type ChatEventForumTopicEdited = {
	"@type": "chatEventForumTopicEdited";
	/** Old information about the topic */
	old_topic_info: ForumTopicInfo;
	/** New information about the topic */
	new_topic_info: ForumTopicInfo;
};

/**
 * A forum topic was closed or reopened
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_forum_topic_toggle_is_closed.html
 */
export type ChatEventForumTopicToggleIsClosed = {
	"@type": "chatEventForumTopicToggleIsClosed";
	/** New information about the topic */
	topic_info: ForumTopicInfo;
};

/**
 * The General forum topic was hidden or unhidden
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_forum_topic_toggle_is_hidden.html
 */
export type ChatEventForumTopicToggleIsHidden = {
	"@type": "chatEventForumTopicToggleIsHidden";
	/** New information about the topic */
	topic_info: ForumTopicInfo;
};

/**
 * A forum topic was deleted
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_forum_topic_deleted.html
 */
export type ChatEventForumTopicDeleted = {
	"@type": "chatEventForumTopicDeleted";
	/** Information about the topic */
	topic_info: ForumTopicInfo;
};

/**
 * A pinned forum topic was changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_forum_topic_pinned.html
 */
export type ChatEventForumTopicPinned = {
	"@type": "chatEventForumTopicPinned";
	/** Information about the old pinned topic; may be null */
	old_topic_info?: ForumTopicInfo;
	/** Information about the new pinned topic; may be null */
	new_topic_info?: ForumTopicInfo;
};

/**
 * Represents a chat event
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event.html
 */
export type ChatEvent = {
	"@type": "chatEvent";
	/** Chat event identifier */
	id: string;
	/** Point in time (Unix timestamp) when the event happened */
	date: number;
	/** Identifier of the user or chat who performed the action */
	member_id: MessageSender;
	/** The action */
	action: ChatEventAction;
};

/**
 * Contains a list of chat events
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_events.html
 */
export type ChatEvents = {
	"@type": "chatEvents";
	/** List of events */
	events: ChatEvent[];
};

/**
 * Represents a set of filters used to obtain a chat event log
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_event_log_filters.html
 */
export type ChatEventLogFilters = {
	"@type": "chatEventLogFilters";
	/** True, if message edits need to be returned */
	message_edits: boolean;
	/** True, if message deletions need to be returned */
	message_deletions: boolean;
	/** True, if pin/unpin events need to be returned */
	message_pins: boolean;
	/** True, if members joining events need to be returned */
	member_joins: boolean;
	/** True, if members leaving events need to be returned */
	member_leaves: boolean;
	/** True, if invited member events need to be returned */
	member_invites: boolean;
	/** True, if member promotion/demotion events need to be returned */
	member_promotions: boolean;
	/** True, if member restricted/unrestricted/banned/unbanned events need to be returned */
	member_restrictions: boolean;
	/** True, if changes in chat information need to be returned */
	info_changes: boolean;
	/** True, if changes in chat settings need to be returned */
	setting_changes: boolean;
	/** True, if changes to invite links need to be returned */
	invite_link_changes: boolean;
	/** True, if video chat actions need to be returned */
	video_chat_changes: boolean;
	/** True, if forum-related actions need to be returned */
	forum_changes: boolean;
	/** True, if subscription extensions need to be returned */
	subscription_extensions: boolean;
};

/**
 * An ordinary language pack string
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1language_pack_string_value_ordinary.html
 */
export type LanguagePackStringValueOrdinary = {
	"@type": "languagePackStringValueOrdinary";
	/** String value */
	value: string;
};

/**
 * A language pack string which has different forms based on the number of some object it mentions. See https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html for more information
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1language_pack_string_value_pluralized.html
 */
export type LanguagePackStringValuePluralized = {
	"@type": "languagePackStringValuePluralized";
	/** Value for zero objects */
	zero_value: string;
	/** Value for one object */
	one_value: string;
	/** Value for two objects */
	two_value: string;
	/** Value for few objects */
	few_value: string;
	/** Value for many objects */
	many_value: string;
	/** Default value */
	other_value: string;
};

/**
 * A deleted language pack string, the value must be taken from the built-in English language pack
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1language_pack_string_value_deleted.html
 */
export type LanguagePackStringValueDeleted = {
	"@type": "languagePackStringValueDeleted";
};

/**
 * Represents one language pack string
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1language_pack_string.html
 */
export type LanguagePackString = {
	"@type": "languagePackString";
	/** String key */
	key: string;
	/** String value; pass null if the string needs to be taken from the built-in English language pack */
	value?: LanguagePackStringValue;
};

/**
 * Contains a list of language pack strings
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1language_pack_strings.html
 */
export type LanguagePackStrings = {
	"@type": "languagePackStrings";
	/** A list of language pack strings */
	strings: LanguagePackString[];
};

/**
 * Contains information about a language pack
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1language_pack_info.html
 */
export type LanguagePackInfo = {
	"@type": "languagePackInfo";
	/** Unique language pack identifier */
	id: string;
	/** Identifier of a base language pack; may be empty. If a string is missed in the language pack, then it must be fetched from base language pack. Unsupported in custom language packs */
	base_language_pack_id?: string;
	/** Language name */
	name: string;
	/** Name of the language in that language */
	native_name: string;
	/** A language code to be used to apply plural forms. See https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html for more information */
	plural_code: string;
	/** True, if the language pack is official */
	is_official: boolean;
	/** True, if the language pack strings are RTL */
	is_rtl: boolean;
	/** True, if the language pack is a beta language pack */
	is_beta: boolean;
	/** True, if the language pack is installed by the current user */
	is_installed: boolean;
	/** Total number of non-deleted strings from the language pack */
	total_string_count: number;
	/** Total number of translated strings from the language pack */
	translated_string_count: number;
	/** Total number of non-deleted strings from the language pack available locally */
	local_string_count: number;
	/** Link to language translation interface; empty for custom local language packs */
	translation_url: string;
};

/**
 * Contains information about the current localization target
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1localization_target_info.html
 */
export type LocalizationTargetInfo = {
	"@type": "localizationTargetInfo";
	/** List of available language packs for this application */
	language_packs: LanguagePackInfo[];
};

/**
 * The maximum number of joined supergroups and channels
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_limit_type_supergroup_count.html
 */
export type PremiumLimitTypeSupergroupCount = {
	"@type": "premiumLimitTypeSupergroupCount";
};

/**
 * The maximum number of pinned chats in the main chat list
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_limit_type_pinned_chat_count.html
 */
export type PremiumLimitTypePinnedChatCount = {
	"@type": "premiumLimitTypePinnedChatCount";
};

/**
 * The maximum number of created public chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_limit_type_created_public_chat_count.html
 */
export type PremiumLimitTypeCreatedPublicChatCount = {
	"@type": "premiumLimitTypeCreatedPublicChatCount";
};

/**
 * The maximum number of saved animations
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_limit_type_saved_animation_count.html
 */
export type PremiumLimitTypeSavedAnimationCount = {
	"@type": "premiumLimitTypeSavedAnimationCount";
};

/**
 * The maximum number of favorite stickers
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_limit_type_favorite_sticker_count.html
 */
export type PremiumLimitTypeFavoriteStickerCount = {
	"@type": "premiumLimitTypeFavoriteStickerCount";
};

/**
 * The maximum number of chat folders
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_limit_type_chat_folder_count.html
 */
export type PremiumLimitTypeChatFolderCount = {
	"@type": "premiumLimitTypeChatFolderCount";
};

/**
 * The maximum number of pinned and always included, or always excluded chats in a chat folder
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_limit_type_chat_folder_chosen_chat_count.html
 */
export type PremiumLimitTypeChatFolderChosenChatCount = {
	"@type": "premiumLimitTypeChatFolderChosenChatCount";
};

/**
 * The maximum number of pinned chats in the archive chat list
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_limit_type_pinned_archived_chat_count.html
 */
export type PremiumLimitTypePinnedArchivedChatCount = {
	"@type": "premiumLimitTypePinnedArchivedChatCount";
};

/**
 * The maximum number of pinned Saved Messages topics
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_limit_type_pinned_saved_messages_topic_count.html
 */
export type PremiumLimitTypePinnedSavedMessagesTopicCount = {
	"@type": "premiumLimitTypePinnedSavedMessagesTopicCount";
};

/**
 * The maximum length of sent media caption
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_limit_type_caption_length.html
 */
export type PremiumLimitTypeCaptionLength = {
	"@type": "premiumLimitTypeCaptionLength";
};

/**
 * The maximum length of the user's bio
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_limit_type_bio_length.html
 */
export type PremiumLimitTypeBioLength = {
	"@type": "premiumLimitTypeBioLength";
};

/**
 * The maximum number of invite links for a chat folder
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_limit_type_chat_folder_invite_link_count.html
 */
export type PremiumLimitTypeChatFolderInviteLinkCount = {
	"@type": "premiumLimitTypeChatFolderInviteLinkCount";
};

/**
 * The maximum number of added shareable chat folders
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_limit_type_shareable_chat_folder_count.html
 */
export type PremiumLimitTypeShareableChatFolderCount = {
	"@type": "premiumLimitTypeShareableChatFolderCount";
};

/**
 * The maximum number of active stories
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_limit_type_active_story_count.html
 */
export type PremiumLimitTypeActiveStoryCount = {
	"@type": "premiumLimitTypeActiveStoryCount";
};

/**
 * The maximum number of stories posted per week
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_limit_type_weekly_posted_story_count.html
 */
export type PremiumLimitTypeWeeklyPostedStoryCount = {
	"@type": "premiumLimitTypeWeeklyPostedStoryCount";
};

/**
 * The maximum number of stories posted per month
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_limit_type_monthly_posted_story_count.html
 */
export type PremiumLimitTypeMonthlyPostedStoryCount = {
	"@type": "premiumLimitTypeMonthlyPostedStoryCount";
};

/**
 * The maximum length of captions of posted stories
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_limit_type_story_caption_length.html
 */
export type PremiumLimitTypeStoryCaptionLength = {
	"@type": "premiumLimitTypeStoryCaptionLength";
};

/**
 * The maximum number of suggested reaction areas on a story
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_limit_type_story_suggested_reaction_area_count.html
 */
export type PremiumLimitTypeStorySuggestedReactionAreaCount = {
	"@type": "premiumLimitTypeStorySuggestedReactionAreaCount";
};

/**
 * The maximum number of received similar chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_limit_type_similar_chat_count.html
 */
export type PremiumLimitTypeSimilarChatCount = {
	"@type": "premiumLimitTypeSimilarChatCount";
};

/**
 * Increased limits
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_feature_increased_limits.html
 */
export type PremiumFeatureIncreasedLimits = {
	"@type": "premiumFeatureIncreasedLimits";
};

/**
 * Increased maximum upload file size
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_feature_increased_upload_file_size.html
 */
export type PremiumFeatureIncreasedUploadFileSize = {
	"@type": "premiumFeatureIncreasedUploadFileSize";
};

/**
 * Improved download speed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_feature_improved_download_speed.html
 */
export type PremiumFeatureImprovedDownloadSpeed = {
	"@type": "premiumFeatureImprovedDownloadSpeed";
};

/**
 * The ability to convert voice notes to text
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_feature_voice_recognition.html
 */
export type PremiumFeatureVoiceRecognition = {
	"@type": "premiumFeatureVoiceRecognition";
};

/**
 * Disabled ads
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_feature_disabled_ads.html
 */
export type PremiumFeatureDisabledAds = {
	"@type": "premiumFeatureDisabledAds";
};

/**
 * Allowed to use more reactions
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_feature_unique_reactions.html
 */
export type PremiumFeatureUniqueReactions = {
	"@type": "premiumFeatureUniqueReactions";
};

/**
 * Allowed to use premium stickers with unique effects
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_feature_unique_stickers.html
 */
export type PremiumFeatureUniqueStickers = {
	"@type": "premiumFeatureUniqueStickers";
};

/**
 * Allowed to use custom emoji stickers in message texts and captions
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_feature_custom_emoji.html
 */
export type PremiumFeatureCustomEmoji = {
	"@type": "premiumFeatureCustomEmoji";
};

/**
 * Ability to change position of the main chat list, archive and mute all new chats from non-contacts, and completely disable notifications about the user's contacts joined Telegram
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_feature_advanced_chat_management.html
 */
export type PremiumFeatureAdvancedChatManagement = {
	"@type": "premiumFeatureAdvancedChatManagement";
};

/**
 * A badge in the user's profile
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_feature_profile_badge.html
 */
export type PremiumFeatureProfileBadge = {
	"@type": "premiumFeatureProfileBadge";
};

/**
 * The ability to show an emoji status along with the user's name
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_feature_emoji_status.html
 */
export type PremiumFeatureEmojiStatus = {
	"@type": "premiumFeatureEmojiStatus";
};

/**
 * Profile photo animation on message and chat screens
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_feature_animated_profile_photo.html
 */
export type PremiumFeatureAnimatedProfilePhoto = {
	"@type": "premiumFeatureAnimatedProfilePhoto";
};

/**
 * The ability to set a custom emoji as a forum topic icon
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_feature_forum_topic_icon.html
 */
export type PremiumFeatureForumTopicIcon = {
	"@type": "premiumFeatureForumTopicIcon";
};

/**
 * Allowed to set a premium application icons
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_feature_app_icons.html
 */
export type PremiumFeatureAppIcons = {
	"@type": "premiumFeatureAppIcons";
};

/**
 * Allowed to translate chat messages real-time
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_feature_real_time_chat_translation.html
 */
export type PremiumFeatureRealTimeChatTranslation = {
	"@type": "premiumFeatureRealTimeChatTranslation";
};

/**
 * Allowed to use many additional features for stories
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_feature_upgraded_stories.html
 */
export type PremiumFeatureUpgradedStories = {
	"@type": "premiumFeatureUpgradedStories";
};

/**
 * The ability to boost chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_feature_chat_boost.html
 */
export type PremiumFeatureChatBoost = {
	"@type": "premiumFeatureChatBoost";
};

/**
 * The ability to choose accent color for replies and user profile
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_feature_accent_color.html
 */
export type PremiumFeatureAccentColor = {
	"@type": "premiumFeatureAccentColor";
};

/**
 * The ability to set private chat background for both users
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_feature_background_for_both.html
 */
export type PremiumFeatureBackgroundForBoth = {
	"@type": "premiumFeatureBackgroundForBoth";
};

/**
 * The ability to use tags in Saved Messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_feature_saved_messages_tags.html
 */
export type PremiumFeatureSavedMessagesTags = {
	"@type": "premiumFeatureSavedMessagesTags";
};

/**
 * The ability to disallow incoming voice and video note messages in private chats using setUserPrivacySettingRules with userPrivacySettingAllowPrivateVoiceAndVideoNoteMessages and to restrict incoming messages from non-contacts using setNewChatPrivacySettings
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_feature_message_privacy.html
 */
export type PremiumFeatureMessagePrivacy = {
	"@type": "premiumFeatureMessagePrivacy";
};

/**
 * The ability to view last seen and read times of other users even they can't view last seen or read time for the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_feature_last_seen_times.html
 */
export type PremiumFeatureLastSeenTimes = {
	"@type": "premiumFeatureLastSeenTimes";
};

/**
 * The ability to use Business features
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_feature_business.html
 */
export type PremiumFeatureBusiness = {
	"@type": "premiumFeatureBusiness";
};

/**
 * The ability to use all available message effects
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_feature_message_effects.html
 */
export type PremiumFeatureMessageEffects = {
	"@type": "premiumFeatureMessageEffects";
};

/**
 * The ability to set location
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1business_feature_location.html
 */
export type BusinessFeatureLocation = {
	"@type": "businessFeatureLocation";
};

/**
 * The ability to set opening hours
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1business_feature_opening_hours.html
 */
export type BusinessFeatureOpeningHours = {
	"@type": "businessFeatureOpeningHours";
};

/**
 * The ability to use quick replies
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1business_feature_quick_replies.html
 */
export type BusinessFeatureQuickReplies = {
	"@type": "businessFeatureQuickReplies";
};

/**
 * The ability to set up a greeting message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1business_feature_greeting_message.html
 */
export type BusinessFeatureGreetingMessage = {
	"@type": "businessFeatureGreetingMessage";
};

/**
 * The ability to set up an away message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1business_feature_away_message.html
 */
export type BusinessFeatureAwayMessage = {
	"@type": "businessFeatureAwayMessage";
};

/**
 * The ability to create links to the business account with predefined message text
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1business_feature_account_links.html
 */
export type BusinessFeatureAccountLinks = {
	"@type": "businessFeatureAccountLinks";
};

/**
 * The ability to customize start page
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1business_feature_start_page.html
 */
export type BusinessFeatureStartPage = {
	"@type": "businessFeatureStartPage";
};

/**
 * The ability to connect a bot to the account
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1business_feature_bots.html
 */
export type BusinessFeatureBots = {
	"@type": "businessFeatureBots";
};

/**
 * The ability to show an emoji status along with the business name
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1business_feature_emoji_status.html
 */
export type BusinessFeatureEmojiStatus = {
	"@type": "businessFeatureEmojiStatus";
};

/**
 * The ability to display folder names for each chat in the chat list
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1business_feature_chat_folder_tags.html
 */
export type BusinessFeatureChatFolderTags = {
	"@type": "businessFeatureChatFolderTags";
};

/**
 * Allowed to use many additional features for stories
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1business_feature_upgraded_stories.html
 */
export type BusinessFeatureUpgradedStories = {
	"@type": "businessFeatureUpgradedStories";
};

/**
 * Stories of the current user are displayed before stories of non-Premium contacts, supergroups, and channels
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_story_feature_priority_order.html
 */
export type PremiumStoryFeaturePriorityOrder = {
	"@type": "premiumStoryFeaturePriorityOrder";
};

/**
 * The ability to hide the fact that the user viewed other's stories
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_story_feature_stealth_mode.html
 */
export type PremiumStoryFeatureStealthMode = {
	"@type": "premiumStoryFeatureStealthMode";
};

/**
 * The ability to check who opened the current user's stories after they expire
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_story_feature_permanent_views_history.html
 */
export type PremiumStoryFeaturePermanentViewsHistory = {
	"@type": "premiumStoryFeaturePermanentViewsHistory";
};

/**
 * The ability to set custom expiration duration for stories
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_story_feature_custom_expiration_duration.html
 */
export type PremiumStoryFeatureCustomExpirationDuration = {
	"@type": "premiumStoryFeatureCustomExpirationDuration";
};

/**
 * The ability to save other's unprotected stories
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_story_feature_save_stories.html
 */
export type PremiumStoryFeatureSaveStories = {
	"@type": "premiumStoryFeatureSaveStories";
};

/**
 * The ability to use links and formatting in story caption, and use inputStoryAreaTypeLink areas
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_story_feature_links_and_formatting.html
 */
export type PremiumStoryFeatureLinksAndFormatting = {
	"@type": "premiumStoryFeatureLinksAndFormatting";
};

/**
 * The ability to choose better quality for viewed stories
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_story_feature_video_quality.html
 */
export type PremiumStoryFeatureVideoQuality = {
	"@type": "premiumStoryFeatureVideoQuality";
};

/**
 * Contains information about a limit, increased for Premium users
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_limit.html
 */
export type PremiumLimit = {
	"@type": "premiumLimit";
	/** The type of the limit */
	type: PremiumLimitType;
	/** Default value of the limit */
	default_value: number;
	/** Value of the limit for Premium users */
	premium_value: number;
};

/**
 * Contains information about features, available to Premium users
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_features.html
 */
export type PremiumFeatures = {
	"@type": "premiumFeatures";
	/** The list of available features */
	features: PremiumFeature[];
	/** The list of limits, increased for Premium users */
	limits: PremiumLimit[];
	/** An internal link to be opened to pay for Telegram Premium if store payment isn't possible; may be null if direct payment isn't available */
	payment_link?: InternalLinkType;
};

/**
 * Contains information about features, available to Business user accounts
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1business_features.html
 */
export type BusinessFeatures = {
	"@type": "businessFeatures";
	/** The list of available business features */
	features: BusinessFeature[];
};

/**
 * A limit was exceeded
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_source_limit_exceeded.html
 */
export type PremiumSourceLimitExceeded = {
	"@type": "premiumSourceLimitExceeded";
	/** Type of the exceeded limit */
	limit_type: PremiumLimitType;
};

/**
 * A user tried to use a Premium feature
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_source_feature.html
 */
export type PremiumSourceFeature = {
	"@type": "premiumSourceFeature";
	/** The used feature */
	feature: PremiumFeature;
};

/**
 * A user tried to use a Business feature
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_source_business_feature.html
 */
export type PremiumSourceBusinessFeature = {
	"@type": "premiumSourceBusinessFeature";
	/** The used feature; pass null if none specific feature was used */
	feature?: BusinessFeature;
};

/**
 * A user tried to use a Premium story feature
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_source_story_feature.html
 */
export type PremiumSourceStoryFeature = {
	"@type": "premiumSourceStoryFeature";
	/** The used feature */
	feature: PremiumStoryFeature;
};

/**
 * A user opened an internal link of the type internalLinkTypePremiumFeatures
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_source_link.html
 */
export type PremiumSourceLink = {
	"@type": "premiumSourceLink";
	/** The referrer from the link */
	referrer: string;
};

/**
 * A user opened the Premium features screen from settings
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_source_settings.html
 */
export type PremiumSourceSettings = {
	"@type": "premiumSourceSettings";
};

/**
 * Describes a promotion animation for a Premium feature
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_feature_promotion_animation.html
 */
export type PremiumFeaturePromotionAnimation = {
	"@type": "premiumFeaturePromotionAnimation";
	/** Premium feature */
	feature: PremiumFeature;
	/** Promotion animation for the feature */
	animation: Animation;
};

/**
 * Describes a promotion animation for a Business feature
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1business_feature_promotion_animation.html
 */
export type BusinessFeaturePromotionAnimation = {
	"@type": "businessFeaturePromotionAnimation";
	/** Business feature */
	feature: BusinessFeature;
	/** Promotion animation for the feature */
	animation: Animation;
};

/**
 * Contains state of Telegram Premium subscription and promotion videos for Premium features
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1premium_state.html
 */
export type PremiumState = {
	"@type": "premiumState";
	/** Text description of the state of the current Premium subscription; may be empty if the current user has no Telegram Premium subscription */
	state?: FormattedText;
	/** The list of available options for buying Telegram Premium */
	payment_options: PremiumStatePaymentOption[];
	/** The list of available promotion animations for Premium features */
	animations: PremiumFeaturePromotionAnimation[];
	/** The list of available promotion animations for Business features */
	business_animations: BusinessFeaturePromotionAnimation[];
};

/**
 * The user subscribing to Telegram Premium
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1store_payment_purpose_premium_subscription.html
 */
export type StorePaymentPurposePremiumSubscription = {
	"@type": "storePaymentPurposePremiumSubscription";
	/** Pass true if this is a restore of a Telegram Premium purchase; only for App Store */
	is_restore: boolean;
	/** Pass true if this is an upgrade from a monthly subscription to early subscription; only for App Store */
	is_upgrade: boolean;
};

/**
 * The user gifting Telegram Premium to another user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1store_payment_purpose_premium_gift.html
 */
export type StorePaymentPurposePremiumGift = {
	"@type": "storePaymentPurposePremiumGift";
	/** ISO 4217 currency code of the payment currency */
	currency: string;
	/** Paid amount, in the smallest units of the currency */
	amount: number;
	/** Identifiers of the user which will receive Telegram Premium */
	user_id: number;
	/** Text to show along with the gift codes; 0-getOption("gift_text_length_max") characters. Only Bold, Italic, Underline, Strikethrough, Spoiler, and CustomEmoji entities are allowed */
	text: FormattedText;
};

/**
 * The user boosting a chat by creating Telegram Premium gift codes for other users
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1store_payment_purpose_premium_gift_codes.html
 */
export type StorePaymentPurposePremiumGiftCodes = {
	"@type": "storePaymentPurposePremiumGiftCodes";
	/** Identifier of the supergroup or channel chat, which will be automatically boosted by the users for duration of the Premium subscription and which is administered by the user */
	boosted_chat_id: number;
	/** ISO 4217 currency code of the payment currency */
	currency: string;
	/** Paid amount, in the smallest units of the currency */
	amount: number;
	/** Identifiers of the users which can activate the gift codes */
	user_ids: number[];
	/** Text to show along with the gift codes; 0-getOption("gift_text_length_max") characters. Only Bold, Italic, Underline, Strikethrough, Spoiler, and CustomEmoji entities are allowed */
	text: FormattedText;
};

/**
 * The user creating a Telegram Premium giveaway
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1store_payment_purpose_premium_giveaway.html
 */
export type StorePaymentPurposePremiumGiveaway = {
	"@type": "storePaymentPurposePremiumGiveaway";
	/** Giveaway parameters */
	parameters: GiveawayParameters;
	/** ISO 4217 currency code of the payment currency */
	currency: string;
	/** Paid amount, in the smallest units of the currency */
	amount: number;
};

/**
 * The user creating a Telegram Star giveaway
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1store_payment_purpose_star_giveaway.html
 */
export type StorePaymentPurposeStarGiveaway = {
	"@type": "storePaymentPurposeStarGiveaway";
	/** Giveaway parameters */
	parameters: GiveawayParameters;
	/** ISO 4217 currency code of the payment currency */
	currency: string;
	/** Paid amount, in the smallest units of the currency */
	amount: number;
	/** The number of users to receive Telegram Stars */
	winner_count: number;
	/** The number of Telegram Stars to be distributed through the giveaway */
	star_count: number;
};

/**
 * The user buying Telegram Stars
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1store_payment_purpose_stars.html
 */
export type StorePaymentPurposeStars = {
	"@type": "storePaymentPurposeStars";
	/** ISO 4217 currency code of the payment currency */
	currency: string;
	/** Paid amount, in the smallest units of the currency */
	amount: number;
	/** Number of bought Telegram Stars */
	star_count: number;
};

/**
 * The user buying Telegram Stars for other users
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1store_payment_purpose_gifted_stars.html
 */
export type StorePaymentPurposeGiftedStars = {
	"@type": "storePaymentPurposeGiftedStars";
	/** Identifier of the user to which Telegram Stars are gifted */
	user_id: number;
	/** ISO 4217 currency code of the payment currency */
	currency: string;
	/** Paid amount, in the smallest units of the currency */
	amount: number;
	/** Number of bought Telegram Stars */
	star_count: number;
};

/**
 * A purchase through App Store
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1store_transaction_app_store.html
 */
export type StoreTransactionAppStore = {
	"@type": "storeTransactionAppStore";
	/** App Store receipt */
	receipt: string;
};

/**
 * A purchase through Google Play
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1store_transaction_google_play.html
 */
export type StoreTransactionGooglePlay = {
	"@type": "storeTransactionGooglePlay";
	/** Application package name */
	package_name: string;
	/** Identifier of the purchased store product */
	store_product_id: string;
	/** Google Play purchase token */
	purchase_token: string;
};

/**
 * The user gifting Telegram Premium to another user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1telegram_payment_purpose_premium_gift.html
 */
export type TelegramPaymentPurposePremiumGift = {
	"@type": "telegramPaymentPurposePremiumGift";
	/** ISO 4217 currency code of the payment currency, or "XTR" for payments in Telegram Stars */
	currency: string;
	/** Paid amount, in the smallest units of the currency */
	amount: number;
	/** Identifier of the user which will receive Telegram Premium */
	user_id: number;
	/** Number of months the Telegram Premium subscription will be active for the user */
	month_count: number;
	/** Text to show to the user receiving Telegram Premium; 0-getOption("gift_text_length_max") characters. Only Bold, Italic, Underline, Strikethrough, Spoiler, and CustomEmoji entities are allowed */
	text: FormattedText;
};

/**
 * The user boosting a chat by creating Telegram Premium gift codes for other users
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1telegram_payment_purpose_premium_gift_codes.html
 */
export type TelegramPaymentPurposePremiumGiftCodes = {
	"@type": "telegramPaymentPurposePremiumGiftCodes";
	/** Identifier of the supergroup or channel chat, which will be automatically boosted by the users for duration of the Premium subscription and which is administered by the user */
	boosted_chat_id: number;
	/** ISO 4217 currency code of the payment currency */
	currency: string;
	/** Paid amount, in the smallest units of the currency */
	amount: number;
	/** Identifiers of the users which can activate the gift codes */
	user_ids: number[];
	/** Number of months the Telegram Premium subscription will be active for the users */
	month_count: number;
	/** Text to show along with the gift codes; 0-getOption("gift_text_length_max") characters. Only Bold, Italic, Underline, Strikethrough, Spoiler, and CustomEmoji entities are allowed */
	text: FormattedText;
};

/**
 * The user creating a Telegram Premium giveaway
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1telegram_payment_purpose_premium_giveaway.html
 */
export type TelegramPaymentPurposePremiumGiveaway = {
	"@type": "telegramPaymentPurposePremiumGiveaway";
	/** Giveaway parameters */
	parameters: GiveawayParameters;
	/** ISO 4217 currency code of the payment currency */
	currency: string;
	/** Paid amount, in the smallest units of the currency */
	amount: number;
	/** Number of users which will be able to activate the gift codes */
	winner_count: number;
	/** Number of months the Telegram Premium subscription will be active for the users */
	month_count: number;
};

/**
 * The user buying Telegram Stars
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1telegram_payment_purpose_stars.html
 */
export type TelegramPaymentPurposeStars = {
	"@type": "telegramPaymentPurposeStars";
	/** ISO 4217 currency code of the payment currency */
	currency: string;
	/** Paid amount, in the smallest units of the currency */
	amount: number;
	/** Number of bought Telegram Stars */
	star_count: number;
};

/**
 * The user buying Telegram Stars for other users
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1telegram_payment_purpose_gifted_stars.html
 */
export type TelegramPaymentPurposeGiftedStars = {
	"@type": "telegramPaymentPurposeGiftedStars";
	/** Identifier of the user to which Telegram Stars are gifted */
	user_id: number;
	/** ISO 4217 currency code of the payment currency */
	currency: string;
	/** Paid amount, in the smallest units of the currency */
	amount: number;
	/** Number of bought Telegram Stars */
	star_count: number;
};

/**
 * The user creating a Telegram Star giveaway
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1telegram_payment_purpose_star_giveaway.html
 */
export type TelegramPaymentPurposeStarGiveaway = {
	"@type": "telegramPaymentPurposeStarGiveaway";
	/** Giveaway parameters */
	parameters: GiveawayParameters;
	/** ISO 4217 currency code of the payment currency */
	currency: string;
	/** Paid amount, in the smallest units of the currency */
	amount: number;
	/** The number of users to receive Telegram Stars */
	winner_count: number;
	/** The number of Telegram Stars to be distributed through the giveaway */
	star_count: number;
};

/**
 * The user joins a chat and subscribes to regular payments in Telegram Stars
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1telegram_payment_purpose_join_chat.html
 */
export type TelegramPaymentPurposeJoinChat = {
	"@type": "telegramPaymentPurposeJoinChat";
	/** Invite link to use */
	invite_link: string;
};

/**
 * A token for Firebase Cloud Messaging
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1device_token_firebase_cloud_messaging.html
 */
export type DeviceTokenFirebaseCloudMessaging = {
	"@type": "deviceTokenFirebaseCloudMessaging";
	/** Device registration token; may be empty to deregister a device */
	token?: string;
	/** True, if push notifications must be additionally encrypted */
	encrypt: boolean;
};

/**
 * A token for Apple Push Notification service
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1device_token_apple_push.html
 */
export type DeviceTokenApplePush = {
	"@type": "deviceTokenApplePush";
	/** Device token; may be empty to deregister a device */
	device_token?: string;
	/** True, if App Sandbox is enabled */
	is_app_sandbox: boolean;
};

/**
 * A token for Apple Push Notification service VoIP notifications
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1device_token_apple_push_vo_i_p.html
 */
export type DeviceTokenApplePushVoIP = {
	"@type": "deviceTokenApplePushVoIP";
	/** Device token; may be empty to deregister a device */
	device_token?: string;
	/** True, if App Sandbox is enabled */
	is_app_sandbox: boolean;
	/** True, if push notifications must be additionally encrypted */
	encrypt: boolean;
};

/**
 * A token for Windows Push Notification Services
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1device_token_windows_push.html
 */
export type DeviceTokenWindowsPush = {
	"@type": "deviceTokenWindowsPush";
	/** The access token that will be used to send notifications; may be empty to deregister a device */
	access_token?: string;
};

/**
 * A token for Microsoft Push Notification Service
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1device_token_microsoft_push.html
 */
export type DeviceTokenMicrosoftPush = {
	"@type": "deviceTokenMicrosoftPush";
	/** Push notification channel URI; may be empty to deregister a device */
	channel_uri?: string;
};

/**
 * A token for Microsoft Push Notification Service VoIP channel
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1device_token_microsoft_push_vo_i_p.html
 */
export type DeviceTokenMicrosoftPushVoIP = {
	"@type": "deviceTokenMicrosoftPushVoIP";
	/** Push notification channel URI; may be empty to deregister a device */
	channel_uri?: string;
};

/**
 * A token for web Push API
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1device_token_web_push.html
 */
export type DeviceTokenWebPush = {
	"@type": "deviceTokenWebPush";
	/** Absolute URL exposed by the push service where the application server can send push messages; may be empty to deregister a device */
	endpoint?: string;
	/** Base64url-encoded P-256 elliptic curve Diffie-Hellman public key */
	p256dh_base64url: string;
	/** Base64url-encoded authentication secret */
	auth_base64url: string;
};

/**
 * A token for Simple Push API for Firefox OS
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1device_token_simple_push.html
 */
export type DeviceTokenSimplePush = {
	"@type": "deviceTokenSimplePush";
	/** Absolute URL exposed by the push service where the application server can send push messages; may be empty to deregister a device */
	endpoint?: string;
};

/**
 * A token for Ubuntu Push Client service
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1device_token_ubuntu_push.html
 */
export type DeviceTokenUbuntuPush = {
	"@type": "deviceTokenUbuntuPush";
	/** Token; may be empty to deregister a device */
	token?: string;
};

/**
 * A token for BlackBerry Push Service
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1device_token_black_berry_push.html
 */
export type DeviceTokenBlackBerryPush = {
	"@type": "deviceTokenBlackBerryPush";
	/** Token; may be empty to deregister a device */
	token?: string;
};

/**
 * A token for Tizen Push Service
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1device_token_tizen_push.html
 */
export type DeviceTokenTizenPush = {
	"@type": "deviceTokenTizenPush";
	/** Push service registration identifier; may be empty to deregister a device */
	reg_id?: string;
};

/**
 * A token for HUAWEI Push Service
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1device_token_huawei_push.html
 */
export type DeviceTokenHuaweiPush = {
	"@type": "deviceTokenHuaweiPush";
	/** Device registration token; may be empty to deregister a device */
	token?: string;
	/** True, if push notifications must be additionally encrypted */
	encrypt: boolean;
};

/**
 * Contains a globally unique push receiver identifier, which can be used to identify which account has received a push notification
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_receiver_id.html
 */
export type PushReceiverId = {
	"@type": "pushReceiverId";
	/** The globally unique identifier of push notification subscription */
	id: string;
};

/**
 * Describes a solid fill of a background
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1background_fill_solid.html
 */
export type BackgroundFillSolid = {
	"@type": "backgroundFillSolid";
	/** A color of the background in the RGB format */
	color: number;
};

/**
 * Describes a gradient fill of a background
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1background_fill_gradient.html
 */
export type BackgroundFillGradient = {
	"@type": "backgroundFillGradient";
	/** A top color of the background in the RGB format */
	top_color: number;
	/** A bottom color of the background in the RGB format */
	bottom_color: number;
	/** Clockwise rotation angle of the gradient, in degrees; 0-359. Must always be divisible by 45 */
	rotation_angle: number;
};

/**
 * Describes a freeform gradient fill of a background
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1background_fill_freeform_gradient.html
 */
export type BackgroundFillFreeformGradient = {
	"@type": "backgroundFillFreeformGradient";
	/** A list of 3 or 4 colors of the freeform gradient in the RGB format */
	colors: number[];
};

/**
 * A wallpaper in JPEG format
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1background_type_wallpaper.html
 */
export type BackgroundTypeWallpaper = {
	"@type": "backgroundTypeWallpaper";
	/** True, if the wallpaper must be downscaled to fit in 450x450 square and then box-blurred with radius 12 */
	is_blurred: boolean;
	/** True, if the background needs to be slightly moved when device is tilted */
	is_moving: boolean;
};

/**
 * A PNG or TGV (gzipped subset of SVG with MIME type "application/x-tgwallpattern") pattern to be combined with the background fill chosen by the user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1background_type_pattern.html
 */
export type BackgroundTypePattern = {
	"@type": "backgroundTypePattern";
	/** Fill of the background */
	fill: BackgroundFill;
	/** Intensity of the pattern when it is shown above the filled background; 0-100 */
	intensity: number;
	/** True, if the background fill must be applied only to the pattern itself. All other pixels are black in this case. For dark themes only */
	is_inverted: boolean;
	/** True, if the background needs to be slightly moved when device is tilted */
	is_moving: boolean;
};

/**
 * A filled background
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1background_type_fill.html
 */
export type BackgroundTypeFill = {
	"@type": "backgroundTypeFill";
	/** The background fill */
	fill: BackgroundFill;
};

/**
 * A background from a chat theme; can be used only as a chat background in channels
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1background_type_chat_theme.html
 */
export type BackgroundTypeChatTheme = {
	"@type": "backgroundTypeChatTheme";
	/** Name of the chat theme */
	theme_name: string;
};

/**
 * A background from a local file
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_background_local.html
 */
export type InputBackgroundLocal = {
	"@type": "inputBackgroundLocal";
	/** Background file to use. Only inputFileLocal and inputFileGenerated are supported. The file must be in JPEG format for wallpapers and in PNG format for patterns */
	background: InputFile;
};

/**
 * A background from the server
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_background_remote.html
 */
export type InputBackgroundRemote = {
	"@type": "inputBackgroundRemote";
	/** The background identifier */
	background_id: string;
};

/**
 * A background previously set in the chat; for chat backgrounds only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_background_previous.html
 */
export type InputBackgroundPrevious = {
	"@type": "inputBackgroundPrevious";
	/** Identifier of the message with the background */
	message_id: number;
};

/**
 * Describes a chat theme
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_theme.html
 */
export type ChatTheme = {
	"@type": "chatTheme";
	/** Theme name */
	name: string;
	/** Theme settings for a light chat theme */
	light_settings: ThemeSettings;
	/** Theme settings for a dark chat theme */
	dark_settings: ThemeSettings;
};

/**
 * Describes a time zone
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1time_zone.html
 */
export type TimeZone = {
	"@type": "timeZone";
	/** Unique time zone identifier */
	id: string;
	/** Time zone name */
	name: string;
	/** Current UTC time offset for the time zone */
	utc_time_offset: number;
};

/**
 * Contains a list of time zones
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1time_zones.html
 */
export type TimeZones = {
	"@type": "timeZones";
	/** A list of time zones */
	time_zones: TimeZone[];
};

/**
 * Contains a list of hashtags
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1hashtags.html
 */
export type Hashtags = {
	"@type": "hashtags";
	/** A list of hashtags */
	hashtags: string[];
};

/**
 * A story can be sent
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1can_post_story_result_ok.html
 */
export type CanPostStoryResultOk = {
	"@type": "canPostStoryResultOk";
	/** Number of stories that can be posted by the user */
	story_count: number;
};

/**
 * The user must subscribe to Telegram Premium to be able to post stories
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1can_post_story_result_premium_needed.html
 */
export type CanPostStoryResultPremiumNeeded = {
	"@type": "canPostStoryResultPremiumNeeded";
};

/**
 * The chat must be boosted first by Telegram Premium subscribers to post more stories. Call getChatBoostStatus to get current boost status of the chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1can_post_story_result_boost_needed.html
 */
export type CanPostStoryResultBoostNeeded = {
	"@type": "canPostStoryResultBoostNeeded";
};

/**
 * The limit for the number of active stories exceeded. The user can buy Telegram Premium, delete an active story, or wait for the oldest story to expire
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1can_post_story_result_active_story_limit_exceeded.html
 */
export type CanPostStoryResultActiveStoryLimitExceeded = {
	"@type": "canPostStoryResultActiveStoryLimitExceeded";
};

/**
 * The weekly limit for the number of posted stories exceeded. The user needs to buy Telegram Premium or wait specified time
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1can_post_story_result_weekly_limit_exceeded.html
 */
export type CanPostStoryResultWeeklyLimitExceeded = {
	"@type": "canPostStoryResultWeeklyLimitExceeded";
	/** Time left before the user can post the next story */
	retry_after: number;
};

/**
 * The monthly limit for the number of posted stories exceeded. The user needs to buy Telegram Premium or wait specified time
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1can_post_story_result_monthly_limit_exceeded.html
 */
export type CanPostStoryResultMonthlyLimitExceeded = {
	"@type": "canPostStoryResultMonthlyLimitExceeded";
	/** Time left before the user can post the next story */
	retry_after: number;
};

/**
 * The session can be used
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1can_transfer_ownership_result_ok.html
 */
export type CanTransferOwnershipResultOk = {
	"@type": "canTransferOwnershipResultOk";
};

/**
 * The 2-step verification needs to be enabled first
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1can_transfer_ownership_result_password_needed.html
 */
export type CanTransferOwnershipResultPasswordNeeded = {
	"@type": "canTransferOwnershipResultPasswordNeeded";
};

/**
 * The 2-step verification was enabled recently, user needs to wait
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1can_transfer_ownership_result_password_too_fresh.html
 */
export type CanTransferOwnershipResultPasswordTooFresh = {
	"@type": "canTransferOwnershipResultPasswordTooFresh";
	/** Time left before the session can be used to transfer ownership of a chat, in seconds */
	retry_after: number;
};

/**
 * The session was created recently, user needs to wait
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1can_transfer_ownership_result_session_too_fresh.html
 */
export type CanTransferOwnershipResultSessionTooFresh = {
	"@type": "canTransferOwnershipResultSessionTooFresh";
	/** Time left before the session can be used to transfer ownership of a chat, in seconds */
	retry_after: number;
};

/**
 * The username can be set
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1check_chat_username_result_ok.html
 */
export type CheckChatUsernameResultOk = {
	"@type": "checkChatUsernameResultOk";
};

/**
 * The username is invalid
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1check_chat_username_result_username_invalid.html
 */
export type CheckChatUsernameResultUsernameInvalid = {
	"@type": "checkChatUsernameResultUsernameInvalid";
};

/**
 * The username is occupied
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1check_chat_username_result_username_occupied.html
 */
export type CheckChatUsernameResultUsernameOccupied = {
	"@type": "checkChatUsernameResultUsernameOccupied";
};

/**
 * The username can be purchased at https://fragment.com. Information about the username can be received using getCollectibleItemInfo
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1check_chat_username_result_username_purchasable.html
 */
export type CheckChatUsernameResultUsernamePurchasable = {
	"@type": "checkChatUsernameResultUsernamePurchasable";
};

/**
 * The user has too many chats with username, one of them must be made private first
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1check_chat_username_result_public_chats_too_many.html
 */
export type CheckChatUsernameResultPublicChatsTooMany = {
	"@type": "checkChatUsernameResultPublicChatsTooMany";
};

/**
 * The user can't be a member of a public supergroup
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1check_chat_username_result_public_groups_unavailable.html
 */
export type CheckChatUsernameResultPublicGroupsUnavailable = {
	"@type": "checkChatUsernameResultPublicGroupsUnavailable";
};

/**
 * The name can be set
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1check_sticker_set_name_result_ok.html
 */
export type CheckStickerSetNameResultOk = {
	"@type": "checkStickerSetNameResultOk";
};

/**
 * The name is invalid
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1check_sticker_set_name_result_name_invalid.html
 */
export type CheckStickerSetNameResultNameInvalid = {
	"@type": "checkStickerSetNameResultNameInvalid";
};

/**
 * The name is occupied
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1check_sticker_set_name_result_name_occupied.html
 */
export type CheckStickerSetNameResultNameOccupied = {
	"@type": "checkStickerSetNameResultNameOccupied";
};

/**
 * The password was reset
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1reset_password_result_ok.html
 */
export type ResetPasswordResultOk = {
	"@type": "resetPasswordResultOk";
};

/**
 * The password reset request is pending
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1reset_password_result_pending.html
 */
export type ResetPasswordResultPending = {
	"@type": "resetPasswordResultPending";
	/** Point in time (Unix timestamp) after which the password can be reset immediately using resetPassword */
	pending_reset_date: number;
};

/**
 * The password reset request was declined
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1reset_password_result_declined.html
 */
export type ResetPasswordResultDeclined = {
	"@type": "resetPasswordResultDeclined";
	/** Point in time (Unix timestamp) when the password reset can be retried */
	retry_date: number;
};

/**
 * The messages were exported from a private chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_file_type_private.html
 */
export type MessageFileTypePrivate = {
	"@type": "messageFileTypePrivate";
	/** Name of the other party; may be empty if unrecognized */
	name?: string;
};

/**
 * The messages were exported from a group chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_file_type_group.html
 */
export type MessageFileTypeGroup = {
	"@type": "messageFileTypeGroup";
	/** Title of the group chat; may be empty if unrecognized */
	title?: string;
};

/**
 * The messages were exported from a chat of unknown type
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_file_type_unknown.html
 */
export type MessageFileTypeUnknown = {
	"@type": "messageFileTypeUnknown";
};

/**
 * A general message with hidden content
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_hidden.html
 */
export type PushMessageContentHidden = {
	"@type": "pushMessageContentHidden";
	/** True, if the message is a pinned message with the specified content */
	is_pinned: boolean;
};

/**
 * An animation message (GIF-style).
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_animation.html
 */
export type PushMessageContentAnimation = {
	"@type": "pushMessageContentAnimation";
	/** Message content; may be null */
	animation?: Animation;
	/** Animation caption */
	caption: string;
	/** True, if the message is a pinned message with the specified content */
	is_pinned: boolean;
};

/**
 * An audio message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_audio.html
 */
export type PushMessageContentAudio = {
	"@type": "pushMessageContentAudio";
	/** Message content; may be null */
	audio?: Audio;
	/** True, if the message is a pinned message with the specified content */
	is_pinned: boolean;
};

/**
 * A message with a user contact
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_contact.html
 */
export type PushMessageContentContact = {
	"@type": "pushMessageContentContact";
	/** Contact's name */
	name: string;
	/** True, if the message is a pinned message with the specified content */
	is_pinned: boolean;
};

/**
 * A contact has registered with Telegram
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_contact_registered.html
 */
export type PushMessageContentContactRegistered = {
	"@type": "pushMessageContentContactRegistered";
};

/**
 * A document message (a general file)
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_document.html
 */
export type PushMessageContentDocument = {
	"@type": "pushMessageContentDocument";
	/** Message content; may be null */
	document?: Document;
	/** True, if the message is a pinned message with the specified content */
	is_pinned: boolean;
};

/**
 * A message with a game
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_game.html
 */
export type PushMessageContentGame = {
	"@type": "pushMessageContentGame";
	/** Game title, empty for pinned game message */
	title: string;
	/** True, if the message is a pinned message with the specified content */
	is_pinned: boolean;
};

/**
 * A new high score was achieved in a game
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_game_score.html
 */
export type PushMessageContentGameScore = {
	"@type": "pushMessageContentGameScore";
	/** Game title, empty for pinned message */
	title: string;
	/** New score, 0 for pinned message */
	score: number;
	/** True, if the message is a pinned message with the specified content */
	is_pinned: boolean;
};

/**
 * A message with an invoice from a bot
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_invoice.html
 */
export type PushMessageContentInvoice = {
	"@type": "pushMessageContentInvoice";
	/** Product price */
	price: string;
	/** True, if the message is a pinned message with the specified content */
	is_pinned: boolean;
};

/**
 * A message with a location
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_location.html
 */
export type PushMessageContentLocation = {
	"@type": "pushMessageContentLocation";
	/** True, if the location is live */
	is_live: boolean;
	/** True, if the message is a pinned message with the specified content */
	is_pinned: boolean;
};

/**
 * A message with paid media
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_paid_media.html
 */
export type PushMessageContentPaidMedia = {
	"@type": "pushMessageContentPaidMedia";
	/** Number of Telegram Stars needed to buy access to the media in the message; 0 for pinned message */
	star_count: number;
	/** True, if the message is a pinned message with the specified content */
	is_pinned: boolean;
};

/**
 * A photo message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_photo.html
 */
export type PushMessageContentPhoto = {
	"@type": "pushMessageContentPhoto";
	/** Message content; may be null */
	photo?: Photo;
	/** Photo caption */
	caption: string;
	/** True, if the photo is secret */
	is_secret: boolean;
	/** True, if the message is a pinned message with the specified content */
	is_pinned: boolean;
};

/**
 * A message with a poll
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_poll.html
 */
export type PushMessageContentPoll = {
	"@type": "pushMessageContentPoll";
	/** Poll question */
	question: string;
	/** True, if the poll is regular and not in quiz mode */
	is_regular: boolean;
	/** True, if the message is a pinned message with the specified content */
	is_pinned: boolean;
};

/**
 * A message with a Telegram Premium gift code created for the user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_premium_gift_code.html
 */
export type PushMessageContentPremiumGiftCode = {
	"@type": "pushMessageContentPremiumGiftCode";
	/** Number of months the Telegram Premium subscription will be active after code activation */
	month_count: number;
};

/**
 * A message with a giveaway
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_giveaway.html
 */
export type PushMessageContentGiveaway = {
	"@type": "pushMessageContentGiveaway";
	/** Number of users which will receive giveaway prizes; 0 for pinned message */
	winner_count: number;
	/** Prize of the giveaway; may be null for pinned message */
	prize?: GiveawayPrize;
	/** True, if the message is a pinned message with the specified content */
	is_pinned: boolean;
};

/**
 * A message with a gift
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_gift.html
 */
export type PushMessageContentGift = {
	"@type": "pushMessageContentGift";
	/** Number of Telegram Stars that sender paid for the gift */
	star_count: number;
};

/**
 * A message with an upgraded gift
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_upgraded_gift.html
 */
export type PushMessageContentUpgradedGift = {
	"@type": "pushMessageContentUpgradedGift";
	/** True, if the gift was obtained by upgrading of a previously received gift; otherwise, this is a transferred or resold gift */
	is_upgrade: boolean;
};

/**
 * A screenshot of a message in the chat has been taken
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_screenshot_taken.html
 */
export type PushMessageContentScreenshotTaken = {
	"@type": "pushMessageContentScreenshotTaken";
};

/**
 * A message with a sticker
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_sticker.html
 */
export type PushMessageContentSticker = {
	"@type": "pushMessageContentSticker";
	/** Message content; may be null */
	sticker?: Sticker;
	/** Emoji corresponding to the sticker; may be empty */
	emoji?: string;
	/** True, if the message is a pinned message with the specified content */
	is_pinned: boolean;
};

/**
 * A message with a story
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_story.html
 */
export type PushMessageContentStory = {
	"@type": "pushMessageContentStory";
	/** True, if the user was mentioned in the story */
	is_mention: boolean;
	/** True, if the message is a pinned message with the specified content */
	is_pinned: boolean;
};

/**
 * A text message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_text.html
 */
export type PushMessageContentText = {
	"@type": "pushMessageContentText";
	/** Message text */
	text: string;
	/** True, if the message is a pinned message with the specified content */
	is_pinned: boolean;
};

/**
 * A video message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_video.html
 */
export type PushMessageContentVideo = {
	"@type": "pushMessageContentVideo";
	/** Message content; may be null */
	video?: Video;
	/** Video caption */
	caption: string;
	/** True, if the video is secret */
	is_secret: boolean;
	/** True, if the message is a pinned message with the specified content */
	is_pinned: boolean;
};

/**
 * A video note message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_video_note.html
 */
export type PushMessageContentVideoNote = {
	"@type": "pushMessageContentVideoNote";
	/** Message content; may be null */
	video_note?: VideoNote;
	/** True, if the message is a pinned message with the specified content */
	is_pinned: boolean;
};

/**
 * A voice note message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_voice_note.html
 */
export type PushMessageContentVoiceNote = {
	"@type": "pushMessageContentVoiceNote";
	/** Message content; may be null */
	voice_note?: VoiceNote;
	/** True, if the message is a pinned message with the specified content */
	is_pinned: boolean;
};

/**
 * A newly created basic group
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_basic_group_chat_create.html
 */
export type PushMessageContentBasicGroupChatCreate = {
	"@type": "pushMessageContentBasicGroupChatCreate";
};

/**
 * A video chat or live stream was started
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_video_chat_started.html
 */
export type PushMessageContentVideoChatStarted = {
	"@type": "pushMessageContentVideoChatStarted";
};

/**
 * A video chat or live stream has ended
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_video_chat_ended.html
 */
export type PushMessageContentVideoChatEnded = {
	"@type": "pushMessageContentVideoChatEnded";
};

/**
 * An invitation of participants to a video chat or live stream
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_invite_video_chat_participants.html
 */
export type PushMessageContentInviteVideoChatParticipants = {
	"@type": "pushMessageContentInviteVideoChatParticipants";
	/** True, if the current user was invited to the video chat or the live stream */
	is_current_user: boolean;
};

/**
 * New chat members were invited to a group
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_chat_add_members.html
 */
export type PushMessageContentChatAddMembers = {
	"@type": "pushMessageContentChatAddMembers";
	/** Name of the added member */
	member_name: string;
	/** True, if the current user was added to the group */
	is_current_user: boolean;
	/** True, if the user has returned to the group themselves */
	is_returned: boolean;
};

/**
 * A chat photo was edited
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_chat_change_photo.html
 */
export type PushMessageContentChatChangePhoto = {
	"@type": "pushMessageContentChatChangePhoto";
};

/**
 * A chat title was edited
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_chat_change_title.html
 */
export type PushMessageContentChatChangeTitle = {
	"@type": "pushMessageContentChatChangeTitle";
	/** New chat title */
	title: string;
};

/**
 * A chat background was edited
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_chat_set_background.html
 */
export type PushMessageContentChatSetBackground = {
	"@type": "pushMessageContentChatSetBackground";
	/** True, if the set background is the same as the background of the current user */
	is_same: boolean;
};

/**
 * A chat theme was edited
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_chat_set_theme.html
 */
export type PushMessageContentChatSetTheme = {
	"@type": "pushMessageContentChatSetTheme";
	/** If non-empty, name of a new theme, set for the chat. Otherwise, the chat theme was reset to the default one */
	theme_name?: string;
};

/**
 * A chat member was deleted
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_chat_delete_member.html
 */
export type PushMessageContentChatDeleteMember = {
	"@type": "pushMessageContentChatDeleteMember";
	/** Name of the deleted member */
	member_name: string;
	/** True, if the current user was deleted from the group */
	is_current_user: boolean;
	/** True, if the user has left the group themselves */
	is_left: boolean;
};

/**
 * A new member joined the chat via an invite link
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_chat_join_by_link.html
 */
export type PushMessageContentChatJoinByLink = {
	"@type": "pushMessageContentChatJoinByLink";
};

/**
 * A new member was accepted to the chat by an administrator
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_chat_join_by_request.html
 */
export type PushMessageContentChatJoinByRequest = {
	"@type": "pushMessageContentChatJoinByRequest";
};

/**
 * A new recurring payment was made by the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_recurring_payment.html
 */
export type PushMessageContentRecurringPayment = {
	"@type": "pushMessageContentRecurringPayment";
	/** The paid amount */
	amount: string;
};

/**
 * A profile photo was suggested to the user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_suggest_profile_photo.html
 */
export type PushMessageContentSuggestProfilePhoto = {
	"@type": "pushMessageContentSuggestProfilePhoto";
};

/**
 * A user in the chat came within proximity alert range from the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_proximity_alert_triggered.html
 */
export type PushMessageContentProximityAlertTriggered = {
	"@type": "pushMessageContentProximityAlertTriggered";
	/** The distance to the user */
	distance: number;
};

/**
 * A forwarded messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_message_forwards.html
 */
export type PushMessageContentMessageForwards = {
	"@type": "pushMessageContentMessageForwards";
	/** Number of forwarded messages */
	total_count: number;
};

/**
 * A media album
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1push_message_content_media_album.html
 */
export type PushMessageContentMediaAlbum = {
	"@type": "pushMessageContentMediaAlbum";
	/** Number of messages in the album */
	total_count: number;
	/** True, if the album has at least one photo */
	has_photos: boolean;
	/** True, if the album has at least one video file */
	has_videos: boolean;
	/** True, if the album has at least one audio file */
	has_audios: boolean;
	/** True, if the album has at least one document */
	has_documents: boolean;
};

/**
 * New message was received
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1notification_type_new_message.html
 */
export type NotificationTypeNewMessage = {
	"@type": "notificationTypeNewMessage";
	/** The message */
	message: Message;
	/** True, if message content must be displayed in notifications */
	show_preview: boolean;
};

/**
 * New secret chat was created
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1notification_type_new_secret_chat.html
 */
export type NotificationTypeNewSecretChat = {
	"@type": "notificationTypeNewSecretChat";
};

/**
 * New call was received
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1notification_type_new_call.html
 */
export type NotificationTypeNewCall = {
	"@type": "notificationTypeNewCall";
	/** Call identifier */
	call_id: number;
};

/**
 * New message was received through a push notification
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1notification_type_new_push_message.html
 */
export type NotificationTypeNewPushMessage = {
	"@type": "notificationTypeNewPushMessage";
	/** The message identifier. The message will not be available in the chat history, but the identifier can be used in viewMessages, or as a message to be replied in the same chat */
	message_id: number;
	/** Identifier of the sender of the message. Corresponding user or chat may be inaccessible */
	sender_id: MessageSender;
	/** Name of the sender */
	sender_name: string;
	/** True, if the message is outgoing */
	is_outgoing: boolean;
	/** Push message content */
	content: PushMessageContent;
};

/**
 * A group containing notifications of type notificationTypeNewMessage and notificationTypeNewPushMessage with ordinary unread messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1notification_group_type_messages.html
 */
export type NotificationGroupTypeMessages = {
	"@type": "notificationGroupTypeMessages";
};

/**
 * A group containing notifications of type notificationTypeNewMessage and notificationTypeNewPushMessage with unread mentions of the current user, replies to their messages, or a pinned message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1notification_group_type_mentions.html
 */
export type NotificationGroupTypeMentions = {
	"@type": "notificationGroupTypeMentions";
};

/**
 * A group containing a notification of type notificationTypeNewSecretChat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1notification_group_type_secret_chat.html
 */
export type NotificationGroupTypeSecretChat = {
	"@type": "notificationGroupTypeSecretChat";
};

/**
 * A group containing notifications of type notificationTypeNewCall
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1notification_group_type_calls.html
 */
export type NotificationGroupTypeCalls = {
	"@type": "notificationGroupTypeCalls";
};

/**
 * Describes a notification sound in MP3 format
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1notification_sound.html
 */
export type NotificationSound = {
	"@type": "notificationSound";
	/** Unique identifier of the notification sound */
	id: string;
	/** Duration of the sound, in seconds */
	duration: number;
	/** Point in time (Unix timestamp) when the sound was created */
	date: number;
	/** Title of the notification sound */
	title: string;
	/** Arbitrary data, defined while the sound was uploaded */
	data: string;
	/** File containing the sound */
	sound: File;
};

/**
 * Contains a list of notification sounds
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1notification_sounds.html
 */
export type NotificationSounds = {
	"@type": "notificationSounds";
	/** A list of notification sounds */
	notification_sounds: NotificationSound[];
};

/**
 * Contains information about a notification
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1notification.html
 */
export type Notification = {
	"@type": "notification";
	/** Unique persistent identifier of this notification */
	id: number;
	/** Notification date */
	date: number;
	/** True, if the notification was explicitly sent without sound */
	is_silent: boolean;
	/** Notification type */
	type: NotificationType;
};

/**
 * Describes a group of notifications
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1notification_group.html
 */
export type NotificationGroup = {
	"@type": "notificationGroup";
	/** Unique persistent auto-incremented from 1 identifier of the notification group */
	id: number;
	/** Type of the group */
	type: NotificationGroupType;
	/** Identifier of a chat to which all notifications in the group belong */
	chat_id: number;
	/** Total number of active notifications in the group */
	total_count: number;
	/** The list of active notifications */
	notifications: Notification[];
};

/**
 * Represents a boolean option
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1option_value_boolean.html
 */
export type OptionValueBoolean = {
	"@type": "optionValueBoolean";
	/** The value of the option */
	value: boolean;
};

/**
 * Represents an unknown option or an option which has a default value
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1option_value_empty.html
 */
export type OptionValueEmpty = {
	"@type": "optionValueEmpty";
};

/**
 * Represents an integer option
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1option_value_integer.html
 */
export type OptionValueInteger = {
	"@type": "optionValueInteger";
	/** The value of the option */
	value: string;
};

/**
 * Represents a string option
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1option_value_string.html
 */
export type OptionValueString = {
	"@type": "optionValueString";
	/** The value of the option */
	value: string;
};

/**
 * Represents one member of a JSON object
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1json_object_member.html
 */
export type JsonObjectMember = {
	"@type": "jsonObjectMember";
	/** Member's key */
	key: string;
	/** Member's value */
	value: JsonValue;
};

/**
 * Represents a null JSON value
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1json_value_null.html
 */
export type JsonValueNull = {
	"@type": "jsonValueNull";
};

/**
 * Represents a boolean JSON value
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1json_value_boolean.html
 */
export type JsonValueBoolean = {
	"@type": "jsonValueBoolean";
	/** The value */
	value: boolean;
};

/**
 * Represents a numeric JSON value
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1json_value_number.html
 */
export type JsonValueNumber = {
	"@type": "jsonValueNumber";
	/** The value */
	value: number;
};

/**
 * Represents a string JSON value
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1json_value_string.html
 */
export type JsonValueString = {
	"@type": "jsonValueString";
	/** The value */
	value: string;
};

/**
 * Represents a JSON array
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1json_value_array.html
 */
export type JsonValueArray = {
	"@type": "jsonValueArray";
	/** The list of array elements */
	values: JsonValue[];
};

/**
 * Represents a JSON object
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1json_value_object.html
 */
export type JsonValueObject = {
	"@type": "jsonValueObject";
	/** The list of object members */
	members: JsonObjectMember[];
};

/**
 * The story can be viewed by everyone
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1story_privacy_settings_everyone.html
 */
export type StoryPrivacySettingsEveryone = {
	"@type": "storyPrivacySettingsEveryone";
	/** Identifiers of the users that can't see the story; always unknown and empty for non-owned stories */
	except_user_ids: number[];
};

/**
 * The story can be viewed by all contacts except chosen users
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1story_privacy_settings_contacts.html
 */
export type StoryPrivacySettingsContacts = {
	"@type": "storyPrivacySettingsContacts";
	/** User identifiers of the contacts that can't see the story; always unknown and empty for non-owned stories */
	except_user_ids: number[];
};

/**
 * The story can be viewed by all close friends
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1story_privacy_settings_close_friends.html
 */
export type StoryPrivacySettingsCloseFriends = {
	"@type": "storyPrivacySettingsCloseFriends";
};

/**
 * The story can be viewed by certain specified users
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1story_privacy_settings_selected_users.html
 */
export type StoryPrivacySettingsSelectedUsers = {
	"@type": "storyPrivacySettingsSelectedUsers";
	/** Identifiers of the users; always unknown and empty for non-owned stories */
	user_ids: number[];
};

/**
 * A rule to allow all users to do something
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_privacy_setting_rule_allow_all.html
 */
export type UserPrivacySettingRuleAllowAll = {
	"@type": "userPrivacySettingRuleAllowAll";
};

/**
 * A rule to allow all contacts of the user to do something
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_privacy_setting_rule_allow_contacts.html
 */
export type UserPrivacySettingRuleAllowContacts = {
	"@type": "userPrivacySettingRuleAllowContacts";
};

/**
 * A rule to allow all bots to do something
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_privacy_setting_rule_allow_bots.html
 */
export type UserPrivacySettingRuleAllowBots = {
	"@type": "userPrivacySettingRuleAllowBots";
};

/**
 * A rule to allow all Premium Users to do something; currently, allowed only for userPrivacySettingAllowChatInvites
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_privacy_setting_rule_allow_premium_users.html
 */
export type UserPrivacySettingRuleAllowPremiumUsers = {
	"@type": "userPrivacySettingRuleAllowPremiumUsers";
};

/**
 * A rule to allow certain specified users to do something
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_privacy_setting_rule_allow_users.html
 */
export type UserPrivacySettingRuleAllowUsers = {
	"@type": "userPrivacySettingRuleAllowUsers";
	/** The user identifiers, total number of users in all rules must not exceed 1000 */
	user_ids: number[];
};

/**
 * A rule to allow all members of certain specified basic groups and supergroups to doing something
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_privacy_setting_rule_allow_chat_members.html
 */
export type UserPrivacySettingRuleAllowChatMembers = {
	"@type": "userPrivacySettingRuleAllowChatMembers";
	/** The chat identifiers, total number of chats in all rules must not exceed 20 */
	chat_ids: number[];
};

/**
 * A rule to restrict all users from doing something
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_privacy_setting_rule_restrict_all.html
 */
export type UserPrivacySettingRuleRestrictAll = {
	"@type": "userPrivacySettingRuleRestrictAll";
};

/**
 * A rule to restrict all contacts of the user from doing something
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_privacy_setting_rule_restrict_contacts.html
 */
export type UserPrivacySettingRuleRestrictContacts = {
	"@type": "userPrivacySettingRuleRestrictContacts";
};

/**
 * A rule to restrict all bots from doing something
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_privacy_setting_rule_restrict_bots.html
 */
export type UserPrivacySettingRuleRestrictBots = {
	"@type": "userPrivacySettingRuleRestrictBots";
};

/**
 * A rule to restrict all specified users from doing something
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_privacy_setting_rule_restrict_users.html
 */
export type UserPrivacySettingRuleRestrictUsers = {
	"@type": "userPrivacySettingRuleRestrictUsers";
	/** The user identifiers, total number of users in all rules must not exceed 1000 */
	user_ids: number[];
};

/**
 * A rule to restrict all members of specified basic groups and supergroups from doing something
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_privacy_setting_rule_restrict_chat_members.html
 */
export type UserPrivacySettingRuleRestrictChatMembers = {
	"@type": "userPrivacySettingRuleRestrictChatMembers";
	/** The chat identifiers, total number of chats in all rules must not exceed 20 */
	chat_ids: number[];
};

/**
 * A list of privacy rules. Rules are matched in the specified order. The first matched rule defines the privacy setting for a given user. If no rule matches, the action is not allowed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_privacy_setting_rules.html
 */
export type UserPrivacySettingRules = {
	"@type": "userPrivacySettingRules";
	/** A list of rules */
	rules: UserPrivacySettingRule[];
};

/**
 * A privacy setting for managing whether the user's online status is visible
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_privacy_setting_show_status.html
 */
export type UserPrivacySettingShowStatus = {
	"@type": "userPrivacySettingShowStatus";
};

/**
 * A privacy setting for managing whether the user's profile photo is visible
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_privacy_setting_show_profile_photo.html
 */
export type UserPrivacySettingShowProfilePhoto = {
	"@type": "userPrivacySettingShowProfilePhoto";
};

/**
 * A privacy setting for managing whether a link to the user's account is included in forwarded messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_privacy_setting_show_link_in_forwarded_messages.html
 */
export type UserPrivacySettingShowLinkInForwardedMessages = {
	"@type": "userPrivacySettingShowLinkInForwardedMessages";
};

/**
 * A privacy setting for managing whether the user's phone number is visible
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_privacy_setting_show_phone_number.html
 */
export type UserPrivacySettingShowPhoneNumber = {
	"@type": "userPrivacySettingShowPhoneNumber";
};

/**
 * A privacy setting for managing whether the user's bio is visible
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_privacy_setting_show_bio.html
 */
export type UserPrivacySettingShowBio = {
	"@type": "userPrivacySettingShowBio";
};

/**
 * A privacy setting for managing whether the user's birthdate is visible
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_privacy_setting_show_birthdate.html
 */
export type UserPrivacySettingShowBirthdate = {
	"@type": "userPrivacySettingShowBirthdate";
};

/**
 * A privacy setting for managing whether the user can be invited to chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_privacy_setting_allow_chat_invites.html
 */
export type UserPrivacySettingAllowChatInvites = {
	"@type": "userPrivacySettingAllowChatInvites";
};

/**
 * A privacy setting for managing whether the user can be called
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_privacy_setting_allow_calls.html
 */
export type UserPrivacySettingAllowCalls = {
	"@type": "userPrivacySettingAllowCalls";
};

/**
 * A privacy setting for managing whether peer-to-peer connections can be used for calls
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_privacy_setting_allow_peer_to_peer_calls.html
 */
export type UserPrivacySettingAllowPeerToPeerCalls = {
	"@type": "userPrivacySettingAllowPeerToPeerCalls";
};

/**
 * A privacy setting for managing whether the user can be found by their phone number. Checked only if the phone number is not known to the other user. Can be set only to "Allow contacts" or "Allow all"
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_privacy_setting_allow_finding_by_phone_number.html
 */
export type UserPrivacySettingAllowFindingByPhoneNumber = {
	"@type": "userPrivacySettingAllowFindingByPhoneNumber";
};

/**
 * A privacy setting for managing whether the user can receive voice and video messages in private chats; for Telegram Premium users only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_privacy_setting_allow_private_voice_and_video_note_messages.html
 */
export type UserPrivacySettingAllowPrivateVoiceAndVideoNoteMessages = {
	"@type": "userPrivacySettingAllowPrivateVoiceAndVideoNoteMessages";
};

/**
 * A privacy setting for managing whether received gifts are automatically shown on the user's profile page
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_privacy_setting_autosave_gifts.html
 */
export type UserPrivacySettingAutosaveGifts = {
	"@type": "userPrivacySettingAutosaveGifts";
};

/**
 * A privacy setting for managing whether the user can receive messages without additional payment
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_privacy_setting_allow_unpaid_messages.html
 */
export type UserPrivacySettingAllowUnpaidMessages = {
	"@type": "userPrivacySettingAllowUnpaidMessages";
};

/**
 * Contains privacy settings for message read date in private chats. Read dates are always shown to the users that can see online status of the current user regardless of this setting
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1read_date_privacy_settings.html
 */
export type ReadDatePrivacySettings = {
	"@type": "readDatePrivacySettings";
	/** True, if message read date is shown to other users in private chats. If false and the current user isn't a Telegram Premium user, then they will not be able to see other's message read date */
	show_read_date: boolean;
};

/**
 * Contains privacy settings for chats with non-contacts
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1new_chat_privacy_settings.html
 */
export type NewChatPrivacySettings = {
	"@type": "newChatPrivacySettings";
	/** True, if non-contacts users are able to write first to the current user. Telegram Premium subscribers are able to write first regardless of this setting */
	allow_new_chats_from_unknown_users: boolean;
	/** Number of Telegram Stars that must be paid for every incoming private message by non-contacts; 0-getOption("paid_message_star_count_max"). If positive, then allow_new_chats_from_unknown_users must be true. The current user will receive getOption("paid_message_earnings_per_mille") Telegram Stars for each 1000 Telegram Stars paid for message sending. Can be positive, only if getOption("can_enable_paid_messages") is true */
	incoming_paid_message_star_count: number;
};

/**
 * The user can be messaged
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1can_send_message_to_user_result_ok.html
 */
export type CanSendMessageToUserResultOk = {
	"@type": "canSendMessageToUserResultOk";
};

/**
 * The user can be messaged, but the messages are paid
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1can_send_message_to_user_result_user_has_paid_messages.html
 */
export type CanSendMessageToUserResultUserHasPaidMessages = {
	"@type": "canSendMessageToUserResultUserHasPaidMessages";
	/** Number of Telegram Stars that must be paid by the current user for each sent message to the user */
	outgoing_paid_message_star_count: number;
};

/**
 * The user can't be messaged, because they are deleted or unknown
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1can_send_message_to_user_result_user_is_deleted.html
 */
export type CanSendMessageToUserResultUserIsDeleted = {
	"@type": "canSendMessageToUserResultUserIsDeleted";
};

/**
 * The user can't be messaged, because they restrict new chats with non-contacts
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1can_send_message_to_user_result_user_restricts_new_chats.html
 */
export type CanSendMessageToUserResultUserRestrictsNewChats = {
	"@type": "canSendMessageToUserResultUserRestrictsNewChats";
};

/**
 * Contains information about the period of inactivity after which the current user's account will automatically be deleted
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1account_ttl.html
 */
export type AccountTtl = {
	"@type": "accountTtl";
	/** Number of days of inactivity before the account will be flagged for deletion; 30-730 days */
	days: number;
};

/**
 * Contains default auto-delete timer setting for new chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_auto_delete_time.html
 */
export type MessageAutoDeleteTime = {
	"@type": "messageAutoDeleteTime";
	/** Message auto-delete time, in seconds. If 0, then messages aren't deleted automatically */
	time: number;
};

/**
 * The session is running on an Android device
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1session_type_android.html
 */
export type SessionTypeAndroid = {
	"@type": "sessionTypeAndroid";
};

/**
 * The session is running on a generic Apple device
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1session_type_apple.html
 */
export type SessionTypeApple = {
	"@type": "sessionTypeApple";
};

/**
 * The session is running on the Brave browser
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1session_type_brave.html
 */
export type SessionTypeBrave = {
	"@type": "sessionTypeBrave";
};

/**
 * The session is running on the Chrome browser
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1session_type_chrome.html
 */
export type SessionTypeChrome = {
	"@type": "sessionTypeChrome";
};

/**
 * The session is running on the Edge browser
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1session_type_edge.html
 */
export type SessionTypeEdge = {
	"@type": "sessionTypeEdge";
};

/**
 * The session is running on the Firefox browser
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1session_type_firefox.html
 */
export type SessionTypeFirefox = {
	"@type": "sessionTypeFirefox";
};

/**
 * The session is running on an iPad device
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1session_type_ipad.html
 */
export type SessionTypeIpad = {
	"@type": "sessionTypeIpad";
};

/**
 * The session is running on an iPhone device
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1session_type_iphone.html
 */
export type SessionTypeIphone = {
	"@type": "sessionTypeIphone";
};

/**
 * The session is running on a Linux device
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1session_type_linux.html
 */
export type SessionTypeLinux = {
	"@type": "sessionTypeLinux";
};

/**
 * The session is running on a Mac device
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1session_type_mac.html
 */
export type SessionTypeMac = {
	"@type": "sessionTypeMac";
};

/**
 * The session is running on the Opera browser
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1session_type_opera.html
 */
export type SessionTypeOpera = {
	"@type": "sessionTypeOpera";
};

/**
 * The session is running on the Safari browser
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1session_type_safari.html
 */
export type SessionTypeSafari = {
	"@type": "sessionTypeSafari";
};

/**
 * The session is running on an Ubuntu device
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1session_type_ubuntu.html
 */
export type SessionTypeUbuntu = {
	"@type": "sessionTypeUbuntu";
};

/**
 * The session is running on an unknown type of device
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1session_type_unknown.html
 */
export type SessionTypeUnknown = {
	"@type": "sessionTypeUnknown";
};

/**
 * The session is running on the Vivaldi browser
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1session_type_vivaldi.html
 */
export type SessionTypeVivaldi = {
	"@type": "sessionTypeVivaldi";
};

/**
 * The session is running on a Windows device
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1session_type_windows.html
 */
export type SessionTypeWindows = {
	"@type": "sessionTypeWindows";
};

/**
 * The session is running on an Xbox console
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1session_type_xbox.html
 */
export type SessionTypeXbox = {
	"@type": "sessionTypeXbox";
};

/**
 * Contains information about one session in a Telegram application used by the current user. Sessions must be shown to the user in the returned order
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1session.html
 */
export type Session = {
	"@type": "session";
	/** Session identifier */
	id: string;
	/** True, if this session is the current session */
	is_current: boolean;
	/** True, if a 2-step verification password is needed to complete authorization of the session */
	is_password_pending: boolean;
	/** True, if the session wasn't confirmed from another session */
	is_unconfirmed: boolean;
	/** True, if incoming secret chats can be accepted by the session */
	can_accept_secret_chats: boolean;
	/** True, if incoming calls can be accepted by the session */
	can_accept_calls: boolean;
	/** Session type based on the system and application version, which can be used to display a corresponding icon */
	type: SessionType;
	/** Telegram API identifier, as provided by the application */
	api_id: number;
	/** Name of the application, as provided by the application */
	application_name: string;
	/** The version of the application, as provided by the application */
	application_version: string;
	/** True, if the application is an official application or uses the api_id of an official application */
	is_official_application: boolean;
	/** Model of the device the application has been run or is running on, as provided by the application */
	device_model: string;
	/** Operating system the application has been run or is running on, as provided by the application */
	platform: string;
	/** Version of the operating system the application has been run or is running on, as provided by the application */
	system_version: string;
	/** Point in time (Unix timestamp) when the user has logged in */
	log_in_date: number;
	/** Point in time (Unix timestamp) when the session was last used */
	last_active_date: number;
	/** IP address from which the session was created, in human-readable format */
	ip_address: string;
	/** A human-readable description of the location from which the session was created, based on the IP address */
	location: string;
};

/**
 * Contains a list of sessions
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1sessions.html
 */
export type Sessions = {
	"@type": "sessions";
	/** List of sessions */
	sessions: Session[];
	/** Number of days of inactivity before sessions will automatically be terminated; 1-366 days */
	inactive_session_ttl_days: number;
};

/**
 * Contains information about an unconfirmed session
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1unconfirmed_session.html
 */
export type UnconfirmedSession = {
	"@type": "unconfirmedSession";
	/** Session identifier */
	id: string;
	/** Point in time (Unix timestamp) when the user has logged in */
	log_in_date: number;
	/** Model of the device that was used for the session creation, as provided by the application */
	device_model: string;
	/** A human-readable description of the location from which the session was created, based on the IP address */
	location: string;
};

/**
 * Contains information about one website the current user is logged in with Telegram
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1connected_website.html
 */
export type ConnectedWebsite = {
	"@type": "connectedWebsite";
	/** Website identifier */
	id: string;
	/** The domain name of the website */
	domain_name: string;
	/** User identifier of a bot linked with the website */
	bot_user_id: number;
	/** The version of a browser used to log in */
	browser: string;
	/** Operating system the browser is running on */
	platform: string;
	/** Point in time (Unix timestamp) when the user was logged in */
	log_in_date: number;
	/** Point in time (Unix timestamp) when obtained authorization was last used */
	last_active_date: number;
	/** IP address from which the user was logged in, in human-readable format */
	ip_address: string;
	/** Human-readable description of a country and a region from which the user was logged in, based on the IP address */
	location: string;
};

/**
 * Contains a list of websites the current user is logged in with Telegram
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1connected_websites.html
 */
export type ConnectedWebsites = {
	"@type": "connectedWebsites";
	/** List of connected websites */
	websites: ConnectedWebsite[];
};

/**
 * The chat contains spam messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1report_reason_spam.html
 */
export type ReportReasonSpam = {
	"@type": "reportReasonSpam";
};

/**
 * The chat promotes violence
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1report_reason_violence.html
 */
export type ReportReasonViolence = {
	"@type": "reportReasonViolence";
};

/**
 * The chat contains pornographic messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1report_reason_pornography.html
 */
export type ReportReasonPornography = {
	"@type": "reportReasonPornography";
};

/**
 * The chat has child abuse related content
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1report_reason_child_abuse.html
 */
export type ReportReasonChildAbuse = {
	"@type": "reportReasonChildAbuse";
};

/**
 * The chat contains copyrighted content
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1report_reason_copyright.html
 */
export type ReportReasonCopyright = {
	"@type": "reportReasonCopyright";
};

/**
 * The location-based chat is unrelated to its stated location
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1report_reason_unrelated_location.html
 */
export type ReportReasonUnrelatedLocation = {
	"@type": "reportReasonUnrelatedLocation";
};

/**
 * The chat represents a fake account
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1report_reason_fake.html
 */
export type ReportReasonFake = {
	"@type": "reportReasonFake";
};

/**
 * The chat has illegal drugs related content
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1report_reason_illegal_drugs.html
 */
export type ReportReasonIllegalDrugs = {
	"@type": "reportReasonIllegalDrugs";
};

/**
 * The chat contains messages with personal details
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1report_reason_personal_details.html
 */
export type ReportReasonPersonalDetails = {
	"@type": "reportReasonPersonalDetails";
};

/**
 * A custom reason provided by the user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1report_reason_custom.html
 */
export type ReportReasonCustom = {
	"@type": "reportReasonCustom";
};

/**
 * The chat was reported successfully
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1report_chat_result_ok.html
 */
export type ReportChatResultOk = {
	"@type": "reportChatResultOk";
};

/**
 * The user must choose an option to report the chat and repeat request with the chosen option
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1report_chat_result_option_required.html
 */
export type ReportChatResultOptionRequired = {
	"@type": "reportChatResultOptionRequired";
	/** Title for the option choice */
	title: string;
	/** List of available options */
	options: ReportOption[];
};

/**
 * The user must add additional text details to the report
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1report_chat_result_text_required.html
 */
export type ReportChatResultTextRequired = {
	"@type": "reportChatResultTextRequired";
	/** Option identifier for the next reportChat request */
	option_id: string;
	/** True, if the user can skip text adding */
	is_optional: boolean;
};

/**
 * The user must choose messages to report and repeat the reportChat request with the chosen messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1report_chat_result_messages_required.html
 */
export type ReportChatResultMessagesRequired = {
	"@type": "reportChatResultMessagesRequired";
};

/**
 * The story was reported successfully
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1report_story_result_ok.html
 */
export type ReportStoryResultOk = {
	"@type": "reportStoryResultOk";
};

/**
 * The user must choose an option to report the story and repeat request with the chosen option
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1report_story_result_option_required.html
 */
export type ReportStoryResultOptionRequired = {
	"@type": "reportStoryResultOptionRequired";
	/** Title for the option choice */
	title: string;
	/** List of available options */
	options: ReportOption[];
};

/**
 * The user must add additional text details to the report
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1report_story_result_text_required.html
 */
export type ReportStoryResultTextRequired = {
	"@type": "reportStoryResultTextRequired";
	/** Option identifier for the next reportStory request */
	option_id: string;
	/** True, if the user can skip text adding */
	is_optional: boolean;
};

/**
 * The link is a link to the Devices section of the application. Use getActiveSessions to get the list of active sessions and show them to the user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_active_sessions.html
 */
export type InternalLinkTypeActiveSessions = {
	"@type": "internalLinkTypeActiveSessions";
};

/**
 * The link is a link to an attachment menu bot to be opened in the specified or a chosen chat. Process given target_chat to open the chat. Then, call searchPublicChat with the given bot username, check that the user is a bot and can be added to attachment menu. Then, use getAttachmentMenuBot to receive information about the bot. If the bot isn't added to attachment menu, then show a disclaimer about Mini Apps being third-party applications, ask the user to accept their Terms of service and confirm adding the bot to side and attachment menu. If the user accept the terms and confirms adding, then use toggleBotIsAddedToAttachmentMenu to add the bot. If the attachment menu bot can't be used in the opened chat, show an error to the user. If the bot is added to attachment menu and can be used in the chat, then use openWebApp with the given URL
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_attachment_menu_bot.html
 */
export type InternalLinkTypeAttachmentMenuBot = {
	"@type": "internalLinkTypeAttachmentMenuBot";
	/** Target chat to be opened */
	target_chat: TargetChat;
	/** Username of the bot */
	bot_username: string;
	/** URL to be passed to openWebApp */
	url: string;
};

/**
 * The link contains an authentication code. Call checkAuthenticationCode with the code if the current authorization state is authorizationStateWaitCode
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_authentication_code.html
 */
export type InternalLinkTypeAuthenticationCode = {
	"@type": "internalLinkTypeAuthenticationCode";
	/** The authentication code */
	code: string;
};

/**
 * The link is a link to a background. Call searchBackground with the given background name to process the link. If background is found and the user wants to apply it, then call setDefaultBackground
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_background.html
 */
export type InternalLinkTypeBackground = {
	"@type": "internalLinkTypeBackground";
	/** Name of the background */
	background_name: string;
};

/**
 * The link is a link to a Telegram bot, which is expected to be added to a channel chat as an administrator. Call searchPublicChat with the given bot username and check that the user is a bot, ask the current user to select a channel chat to add the bot to as an administrator. Then, call getChatMember to receive the current bot rights in the chat and if the bot already is an administrator, check that the current user can edit its administrator rights and combine received rights with the requested administrator rights. Then, show confirmation box to the user, and call setChatMemberStatus with the chosen chat and confirmed rights
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_bot_add_to_channel.html
 */
export type InternalLinkTypeBotAddToChannel = {
	"@type": "internalLinkTypeBotAddToChannel";
	/** Username of the bot */
	bot_username: string;
	/** Expected administrator rights for the bot */
	administrator_rights: ChatAdministratorRights;
};

/**
 * The link is a link to a chat with a Telegram bot. Call searchPublicChat with the given bot username, check that the user is a bot, show START button in the chat with the bot, and then call sendBotStartMessage with the given start parameter after the button is pressed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_bot_start.html
 */
export type InternalLinkTypeBotStart = {
	"@type": "internalLinkTypeBotStart";
	/** Username of the bot */
	bot_username: string;
	/** The parameter to be passed to sendBotStartMessage */
	start_parameter: string;
	/** True, if sendBotStartMessage must be called automatically without showing the START button */
	autostart: boolean;
};

/**
 * The link is a link to a Telegram bot, which is expected to be added to a group chat. Call searchPublicChat with the given bot username, check that the user is a bot and can be added to groups, ask the current user to select a basic group or a supergroup chat to add the bot to, taking into account that bots can be added to a public supergroup only by administrators of the supergroup. If administrator rights are provided by the link, call getChatMember to receive the current bot rights in the chat and if the bot already is an administrator, check that the current user can edit its administrator rights, combine received rights with the requested administrator rights, show confirmation box to the user, and call setChatMemberStatus with the chosen chat and confirmed administrator rights. Before call to setChatMemberStatus it may be required to upgrade the chosen basic group chat to a supergroup chat. Then, if start_parameter isn't empty, call sendBotStartMessage with the given start parameter and the chosen chat; otherwise, just send /start message with bot's username added to the chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_bot_start_in_group.html
 */
export type InternalLinkTypeBotStartInGroup = {
	"@type": "internalLinkTypeBotStartInGroup";
	/** Username of the bot */
	bot_username: string;
	/** The parameter to be passed to sendBotStartMessage */
	start_parameter: string;
	/** Expected administrator rights for the bot; may be null */
	administrator_rights?: ChatAdministratorRights;
};

/**
 * The link is a link to a business chat. Use getBusinessChatLinkInfo with the provided link name to get information about the link, then open received private chat and replace chat draft with the provided text
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_business_chat.html
 */
export type InternalLinkTypeBusinessChat = {
	"@type": "internalLinkTypeBusinessChat";
	/** Name of the link */
	link_name: string;
};

/**
 * The link is a link to the Telegram Star purchase section of the application
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_buy_stars.html
 */
export type InternalLinkTypeBuyStars = {
	"@type": "internalLinkTypeBuyStars";
	/** The number of Telegram Stars that must be owned by the user */
	star_count: number;
	/** Purpose of Telegram Star purchase. Arbitrary string specified by the server, for example, "subs" if the Telegram Stars are required to extend channel subscriptions */
	purpose: string;
};

/**
 * The link is a link to the change phone number section of the application
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_change_phone_number.html
 */
export type InternalLinkTypeChangePhoneNumber = {
	"@type": "internalLinkTypeChangePhoneNumber";
};

/**
 * The link is an affiliate program link. Call searchChatAffiliateProgram with the given username and referrer to process the link
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_chat_affiliate_program.html
 */
export type InternalLinkTypeChatAffiliateProgram = {
	"@type": "internalLinkTypeChatAffiliateProgram";
	/** Username to be passed to searchChatAffiliateProgram */
	username: string;
	/** Referrer to be passed to searchChatAffiliateProgram */
	referrer: string;
};

/**
 * The link is a link to boost a Telegram chat. Call getChatBoostLinkInfo with the given URL to process the link. If the chat is found, then call getChatBoostStatus and getAvailableChatBoostSlots to get the current boost status and check whether the chat can be boosted. If the user wants to boost the chat and the chat can be boosted, then call boostChat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_chat_boost.html
 */
export type InternalLinkTypeChatBoost = {
	"@type": "internalLinkTypeChatBoost";
	/** URL to be passed to getChatBoostLinkInfo */
	url: string;
};

/**
 * The link is an invite link to a chat folder. Call checkChatFolderInviteLink with the given invite link to process the link. If the link is valid and the user wants to join the chat folder, then call addChatFolderByInviteLink
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_chat_folder_invite.html
 */
export type InternalLinkTypeChatFolderInvite = {
	"@type": "internalLinkTypeChatFolderInvite";
	/** Internal representation of the invite link */
	invite_link: string;
};

/**
 * The link is a link to the folder section of the application settings
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_chat_folder_settings.html
 */
export type InternalLinkTypeChatFolderSettings = {
	"@type": "internalLinkTypeChatFolderSettings";
};

/**
 * The link is a chat invite link. Call checkChatInviteLink with the given invite link to process the link. If the link is valid and the user wants to join the chat, then call joinChatByInviteLink
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_chat_invite.html
 */
export type InternalLinkTypeChatInvite = {
	"@type": "internalLinkTypeChatInvite";
	/** Internal representation of the invite link */
	invite_link: string;
};

/**
 * The link is a link to the default message auto-delete timer settings section of the application settings
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_default_message_auto_delete_timer_settings.html
 */
export type InternalLinkTypeDefaultMessageAutoDeleteTimerSettings = {
	"@type": "internalLinkTypeDefaultMessageAutoDeleteTimerSettings";
};

/**
 * The link is a link to the edit profile section of the application settings
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_edit_profile_settings.html
 */
export type InternalLinkTypeEditProfileSettings = {
	"@type": "internalLinkTypeEditProfileSettings";
};

/**
 * The link is a link to a game. Call searchPublicChat with the given bot username, check that the user is a bot, ask the current user to select a chat to send the game, and then call sendMessage with inputMessageGame
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_game.html
 */
export type InternalLinkTypeGame = {
	"@type": "internalLinkTypeGame";
	/** Username of the bot that owns the game */
	bot_username: string;
	/** Short name of the game */
	game_short_name: string;
};

/**
 * The link is a link to a group call that isn't bound to a chat. Use getGroupCallParticipants to get the list of group call participants and show them on the join group call screen. Call joinGroupCall with the given invite_link to join the call
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_group_call.html
 */
export type InternalLinkTypeGroupCall = {
	"@type": "internalLinkTypeGroupCall";
	/** Internal representation of the invite link */
	invite_link: string;
};

/**
 * The link must be opened in an Instant View. Call getWebPageInstantView with the given URL to process the link. If Instant View is found, then show it, otherwise, open the fallback URL in an external browser
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_instant_view.html
 */
export type InternalLinkTypeInstantView = {
	"@type": "internalLinkTypeInstantView";
	/** URL to be passed to getWebPageInstantView */
	url: string;
	/** An URL to open if getWebPageInstantView fails */
	fallback_url: string;
};

/**
 * The link is a link to an invoice. Call getPaymentForm with the given invoice name to process the link
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_invoice.html
 */
export type InternalLinkTypeInvoice = {
	"@type": "internalLinkTypeInvoice";
	/** Name of the invoice */
	invoice_name: string;
};

/**
 * The link is a link to a language pack. Call getLanguagePackInfo with the given language pack identifier to process the link. If the language pack is found and the user wants to apply it, then call setOption for the option "language_pack_id"
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_language_pack.html
 */
export type InternalLinkTypeLanguagePack = {
	"@type": "internalLinkTypeLanguagePack";
	/** Language pack identifier */
	language_pack_id: string;
};

/**
 * The link is a link to the language section of the application settings
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_language_settings.html
 */
export type InternalLinkTypeLanguageSettings = {
	"@type": "internalLinkTypeLanguageSettings";
};

/**
 * The link is a link to the main Web App of a bot. Call searchPublicChat with the given bot username, check that the user is a bot and has the main Web App. If the bot can be added to attachment menu, then use getAttachmentMenuBot to receive information about the bot, then if the bot isn't added to side menu, show a disclaimer about Mini Apps being third-party applications, ask the user to accept their Terms of service and confirm adding the bot to side and attachment menu, then if the user accepts the terms and confirms adding, use toggleBotIsAddedToAttachmentMenu to add the bot. Then, use getMainWebApp with the given start parameter and mode and open the returned URL as a Web App
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_main_web_app.html
 */
export type InternalLinkTypeMainWebApp = {
	"@type": "internalLinkTypeMainWebApp";
	/** Username of the bot */
	bot_username: string;
	/** Start parameter to be passed to getMainWebApp */
	start_parameter: string;
	/** The mode to be passed to getMainWebApp */
	mode: WebAppOpenMode;
};

/**
 * The link is a link to a Telegram message or a forum topic. Call getMessageLinkInfo with the given URL to process the link, and then open received forum topic or chat and show the message there
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_message.html
 */
export type InternalLinkTypeMessage = {
	"@type": "internalLinkTypeMessage";
	/** URL to be passed to getMessageLinkInfo */
	url: string;
};

/**
 * The link contains a message draft text. A share screen needs to be shown to the user, then the chosen chat must be opened and the text is added to the input field
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_message_draft.html
 */
export type InternalLinkTypeMessageDraft = {
	"@type": "internalLinkTypeMessageDraft";
	/** Message draft text */
	text: FormattedText;
	/** True, if the first line of the text contains a link. If true, the input field needs to be focused and the text after the link must be selected */
	contains_link: boolean;
};

/**
 * The link is a link to the screen with information about Telegram Star balance and transactions of the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_my_stars.html
 */
export type InternalLinkTypeMyStars = {
	"@type": "internalLinkTypeMyStars";
};

/**
 * The link contains a request of Telegram passport data. Call getPassportAuthorizationForm with the given parameters to process the link if the link was received from outside of the application; otherwise, ignore it
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_passport_data_request.html
 */
export type InternalLinkTypePassportDataRequest = {
	"@type": "internalLinkTypePassportDataRequest";
	/** User identifier of the service's bot; the corresponding user may be unknown yet */
	bot_user_id: number;
	/** Telegram Passport element types requested by the service */
	scope: string;
	/** Service's public key */
	public_key: string;
	/** Unique request identifier provided by the service */
	nonce: string;
	/** An HTTP URL to open once the request is finished, canceled, or failed with the parameters tg_passport=success, tg_passport=cancel, or tg_passport=error&error=... respectively. If empty, then onActivityResult method must be used to return response on Android, or the link tgbot{bot_user_id}://passport/success or tgbot{bot_user_id}://passport/cancel must be opened otherwise */
	callback_url: string;
};

/**
 * The link can be used to confirm ownership of a phone number to prevent account deletion. Call sendPhoneNumberCode with the given phone number and with phoneNumberCodeTypeConfirmOwnership with the given hash to process the link. If succeeded, call checkPhoneNumberCode to check entered by the user code, or resendPhoneNumberCode to resend it
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_phone_number_confirmation.html
 */
export type InternalLinkTypePhoneNumberConfirmation = {
	"@type": "internalLinkTypePhoneNumberConfirmation";
	/** Hash value from the link */
	hash: string;
	/** Phone number value from the link */
	phone_number: string;
};

/**
 * The link is a link to the Premium features screen of the application from which the user can subscribe to Telegram Premium. Call getPremiumFeatures with the given referrer to process the link
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_premium_features.html
 */
export type InternalLinkTypePremiumFeatures = {
	"@type": "internalLinkTypePremiumFeatures";
	/** Referrer specified in the link */
	referrer: string;
};

/**
 * The link is a link to the screen for gifting Telegram Premium subscriptions to friends via inputInvoiceTelegram with telegramPaymentPurposePremiumGift payments or in-store purchases
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_premium_gift.html
 */
export type InternalLinkTypePremiumGift = {
	"@type": "internalLinkTypePremiumGift";
	/** Referrer specified in the link */
	referrer: string;
};

/**
 * The link is a link with a Telegram Premium gift code. Call checkPremiumGiftCode with the given code to process the link. If the code is valid and the user wants to apply it, then call applyPremiumGiftCode
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_premium_gift_code.html
 */
export type InternalLinkTypePremiumGiftCode = {
	"@type": "internalLinkTypePremiumGiftCode";
	/** The Telegram Premium gift code */
	code: string;
};

/**
 * The link is a link to the privacy and security section of the application settings
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_privacy_and_security_settings.html
 */
export type InternalLinkTypePrivacyAndSecuritySettings = {
	"@type": "internalLinkTypePrivacyAndSecuritySettings";
};

/**
 * The link is a link to a proxy. Call addProxy with the given parameters to process the link and add the proxy
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_proxy.html
 */
export type InternalLinkTypeProxy = {
	"@type": "internalLinkTypeProxy";
	/** Proxy server domain or IP address */
	server: string;
	/** Proxy server port */
	port: number;
	/** Type of the proxy */
	type: ProxyType;
};

/**
 * The link is a link to a chat by its username. Call searchPublicChat with the given chat username to process the link. If the chat is found, open its profile information screen or the chat itself. If draft text isn't empty and the chat is a private chat with a regular user, then put the draft text in the input field
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_public_chat.html
 */
export type InternalLinkTypePublicChat = {
	"@type": "internalLinkTypePublicChat";
	/** Username of the chat */
	chat_username: string;
	/** Draft text for message to send in the chat */
	draft_text: string;
	/** True, if chat profile information screen must be opened; otherwise, the chat itself must be opened */
	open_profile: boolean;
};

/**
 * The link can be used to login the current user on another device, but it must be scanned from QR-code using in-app camera. An alert similar to "This code can be used to allow someone to log in to your Telegram account. To confirm Telegram login, please go to Settings > Devices > Scan QR and scan the code" needs to be shown
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_qr_code_authentication.html
 */
export type InternalLinkTypeQrCodeAuthentication = {
	"@type": "internalLinkTypeQrCodeAuthentication";
};

/**
 * The link forces restore of App Store purchases when opened. For official iOS application only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_restore_purchases.html
 */
export type InternalLinkTypeRestorePurchases = {
	"@type": "internalLinkTypeRestorePurchases";
};

/**
 * The link is a link to application settings
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_settings.html
 */
export type InternalLinkTypeSettings = {
	"@type": "internalLinkTypeSettings";
};

/**
 * The link is a link to a sticker set. Call searchStickerSet with the given sticker set name to process the link and show the sticker set. If the sticker set is found and the user wants to add it, then call changeStickerSet
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_sticker_set.html
 */
export type InternalLinkTypeStickerSet = {
	"@type": "internalLinkTypeStickerSet";
	/** Name of the sticker set */
	sticker_set_name: string;
	/** True, if the sticker set is expected to contain custom emoji */
	expect_custom_emoji: boolean;
};

/**
 * The link is a link to a story. Call searchPublicChat with the given poster username, then call getStory with the received chat identifier and the given story identifier, then show the story if received
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_story.html
 */
export type InternalLinkTypeStory = {
	"@type": "internalLinkTypeStory";
	/** Username of the poster of the story */
	story_poster_username: string;
	/** Story identifier */
	story_id: number;
};

/**
 * The link is a link to a cloud theme. TDLib has no theme support yet
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_theme.html
 */
export type InternalLinkTypeTheme = {
	"@type": "internalLinkTypeTheme";
	/** Name of the theme */
	theme_name: string;
};

/**
 * The link is a link to the theme section of the application settings
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_theme_settings.html
 */
export type InternalLinkTypeThemeSettings = {
	"@type": "internalLinkTypeThemeSettings";
};

/**
 * The link is an unknown tg: link. Call getDeepLinkInfo to process the link
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_unknown_deep_link.html
 */
export type InternalLinkTypeUnknownDeepLink = {
	"@type": "internalLinkTypeUnknownDeepLink";
	/** Link to be passed to getDeepLinkInfo */
	link: string;
};

/**
 * The link is a link to an unsupported proxy. An alert can be shown to the user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_unsupported_proxy.html
 */
export type InternalLinkTypeUnsupportedProxy = {
	"@type": "internalLinkTypeUnsupportedProxy";
};

/**
 * The link is a link to an upgraded gift. Call getUpgradedGift with the given name to process the link
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_upgraded_gift.html
 */
export type InternalLinkTypeUpgradedGift = {
	"@type": "internalLinkTypeUpgradedGift";
	/** Name of the unique gift */
	name: string;
};

/**
 * The link is a link to a user by its phone number. Call searchUserByPhoneNumber with the given phone number to process the link. If the user is found, then call createPrivateChat and open user's profile information screen or the chat itself. If draft text isn't empty, then put the draft text in the input field
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_user_phone_number.html
 */
export type InternalLinkTypeUserPhoneNumber = {
	"@type": "internalLinkTypeUserPhoneNumber";
	/** Phone number of the user */
	phone_number: string;
	/** Draft text for message to send in the chat */
	draft_text: string;
	/** True, if user's profile information screen must be opened; otherwise, the chat itself must be opened */
	open_profile: boolean;
};

/**
 * The link is a link to a user by a temporary token. Call searchUserByToken with the given token to process the link. If the user is found, then call createPrivateChat and open the chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_user_token.html
 */
export type InternalLinkTypeUserToken = {
	"@type": "internalLinkTypeUserToken";
	/** The token */
	token: string;
};

/**
 * The link is a link to a video chat. Call searchPublicChat with the given chat username, and then joinVideoChat with the given invite hash to process the link
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_video_chat.html
 */
export type InternalLinkTypeVideoChat = {
	"@type": "internalLinkTypeVideoChat";
	/** Username of the chat with the video chat */
	chat_username: string;
	/** If non-empty, invite hash to be used to join the video chat without being muted by administrators */
	invite_hash?: string;
	/** True, if the video chat is expected to be a live stream in a channel or a broadcast group */
	is_live_stream: boolean;
};

/**
 * The link is a link to a Web App. Call searchPublicChat with the given bot username, check that the user is a bot. If the bot is restricted for the current user, then show an error message. Otherwise, call searchWebApp with the received bot and the given web_app_short_name. Process received foundWebApp by showing a confirmation dialog if needed. If the bot can be added to attachment or side menu, but isn't added yet, then show a disclaimer about Mini Apps being third-party applications instead of the dialog and ask the user to accept their Terms of service. If the user accept the terms and confirms adding, then use toggleBotIsAddedToAttachmentMenu to add the bot. Then, call getWebAppLinkUrl and open the returned URL as a Web App
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1internal_link_type_web_app.html
 */
export type InternalLinkTypeWebApp = {
	"@type": "internalLinkTypeWebApp";
	/** Username of the bot that owns the Web App */
	bot_username: string;
	/** Short name of the Web App */
	web_app_short_name: string;
	/** Start parameter to be passed to getWebAppLinkUrl */
	start_parameter: string;
	/** The mode in which the Web App must be opened */
	mode: WebAppOpenMode;
};

/**
 * Contains an HTTPS link to a message in a supergroup or channel, or a forum topic
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_link.html
 */
export type MessageLink = {
	"@type": "messageLink";
	/** The link */
	link: string;
	/** True, if the link will work for non-members of the chat */
	is_public: boolean;
};

/**
 * Contains information about a link to a message or a forum topic in a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_link_info.html
 */
export type MessageLinkInfo = {
	"@type": "messageLinkInfo";
	/** True, if the link is a public link for a message or a forum topic in a chat */
	is_public: boolean;
	/** If found, identifier of the chat to which the link points, 0 otherwise */
	chat_id: number;
	/** If found, identifier of the message thread in which to open the message, or a forum topic to open if the message is missing */
	message_thread_id: number;
	/** If found, the linked message; may be null */
	message?: Message;
	/** Timestamp from which the video/audio/video note/voice note/story playing must start, in seconds; 0 if not specified. The media can be in the message content or in its link preview */
	media_timestamp: number;
	/** True, if the whole media album to which the message belongs is linked */
	for_album: boolean;
};

/**
 * Contains an HTTPS link to boost a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_boost_link.html
 */
export type ChatBoostLink = {
	"@type": "chatBoostLink";
	/** The link */
	link: string;
	/** True, if the link will work for non-members of the chat */
	is_public: boolean;
};

/**
 * Contains information about a link to boost a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_boost_link_info.html
 */
export type ChatBoostLinkInfo = {
	"@type": "chatBoostLinkInfo";
	/** True, if the link will work for non-members of the chat */
	is_public: boolean;
	/** Identifier of the chat to which the link points; 0 if the chat isn't found */
	chat_id: number;
};

/**
 * The main block list that disallows writing messages to the current user, receiving their status and photo, viewing of stories, and some other actions
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1block_list_main.html
 */
export type BlockListMain = {
	"@type": "blockListMain";
};

/**
 * The block list that disallows viewing of stories of the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1block_list_stories.html
 */
export type BlockListStories = {
	"@type": "blockListStories";
};

/**
 * The data is not a file
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1file_type_none.html
 */
export type FileTypeNone = {
	"@type": "fileTypeNone";
};

/**
 * The file is an animation
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1file_type_animation.html
 */
export type FileTypeAnimation = {
	"@type": "fileTypeAnimation";
};

/**
 * The file is an audio file
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1file_type_audio.html
 */
export type FileTypeAudio = {
	"@type": "fileTypeAudio";
};

/**
 * The file is a document
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1file_type_document.html
 */
export type FileTypeDocument = {
	"@type": "fileTypeDocument";
};

/**
 * The file is a notification sound
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1file_type_notification_sound.html
 */
export type FileTypeNotificationSound = {
	"@type": "fileTypeNotificationSound";
};

/**
 * The file is a photo
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1file_type_photo.html
 */
export type FileTypePhoto = {
	"@type": "fileTypePhoto";
};

/**
 * The file is a photo published as a story
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1file_type_photo_story.html
 */
export type FileTypePhotoStory = {
	"@type": "fileTypePhotoStory";
};

/**
 * The file is a profile photo
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1file_type_profile_photo.html
 */
export type FileTypeProfilePhoto = {
	"@type": "fileTypeProfilePhoto";
};

/**
 * The file was sent to a secret chat (the file type is not known to the server)
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1file_type_secret.html
 */
export type FileTypeSecret = {
	"@type": "fileTypeSecret";
};

/**
 * The file is a thumbnail of a file from a secret chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1file_type_secret_thumbnail.html
 */
export type FileTypeSecretThumbnail = {
	"@type": "fileTypeSecretThumbnail";
};

/**
 * The file is a file from Secure storage used for storing Telegram Passport files
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1file_type_secure.html
 */
export type FileTypeSecure = {
	"@type": "fileTypeSecure";
};

/**
 * The file is a self-destructing photo in a private chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1file_type_self_destructing_photo.html
 */
export type FileTypeSelfDestructingPhoto = {
	"@type": "fileTypeSelfDestructingPhoto";
};

/**
 * The file is a self-destructing video in a private chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1file_type_self_destructing_video.html
 */
export type FileTypeSelfDestructingVideo = {
	"@type": "fileTypeSelfDestructingVideo";
};

/**
 * The file is a self-destructing video note in a private chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1file_type_self_destructing_video_note.html
 */
export type FileTypeSelfDestructingVideoNote = {
	"@type": "fileTypeSelfDestructingVideoNote";
};

/**
 * The file is a self-destructing voice note in a private chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1file_type_self_destructing_voice_note.html
 */
export type FileTypeSelfDestructingVoiceNote = {
	"@type": "fileTypeSelfDestructingVoiceNote";
};

/**
 * The file is a sticker
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1file_type_sticker.html
 */
export type FileTypeSticker = {
	"@type": "fileTypeSticker";
};

/**
 * The file is a thumbnail of another file
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1file_type_thumbnail.html
 */
export type FileTypeThumbnail = {
	"@type": "fileTypeThumbnail";
};

/**
 * The file type is not yet known
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1file_type_unknown.html
 */
export type FileTypeUnknown = {
	"@type": "fileTypeUnknown";
};

/**
 * The file is a video
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1file_type_video.html
 */
export type FileTypeVideo = {
	"@type": "fileTypeVideo";
};

/**
 * The file is a video note
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1file_type_video_note.html
 */
export type FileTypeVideoNote = {
	"@type": "fileTypeVideoNote";
};

/**
 * The file is a video published as a story
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1file_type_video_story.html
 */
export type FileTypeVideoStory = {
	"@type": "fileTypeVideoStory";
};

/**
 * The file is a voice note
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1file_type_voice_note.html
 */
export type FileTypeVoiceNote = {
	"@type": "fileTypeVoiceNote";
};

/**
 * The file is a wallpaper or a background pattern
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1file_type_wallpaper.html
 */
export type FileTypeWallpaper = {
	"@type": "fileTypeWallpaper";
};

/**
 * Contains the storage usage statistics for a specific file type
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1storage_statistics_by_file_type.html
 */
export type StorageStatisticsByFileType = {
	"@type": "storageStatisticsByFileType";
	/** File type */
	file_type: FileType;
	/** Total size of the files, in bytes */
	size: number;
	/** Total number of files */
	count: number;
};

/**
 * Contains the storage usage statistics for a specific chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1storage_statistics_by_chat.html
 */
export type StorageStatisticsByChat = {
	"@type": "storageStatisticsByChat";
	/** Chat identifier; 0 if none */
	chat_id: number;
	/** Total size of the files in the chat, in bytes */
	size: number;
	/** Total number of files in the chat */
	count: number;
	/** Statistics split by file types */
	by_file_type: StorageStatisticsByFileType[];
};

/**
 * Contains the exact storage usage statistics split by chats and file type
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1storage_statistics.html
 */
export type StorageStatistics = {
	"@type": "storageStatistics";
	/** Total size of files, in bytes */
	size: number;
	/** Total number of files */
	count: number;
	/** Statistics split by chats */
	by_chat: StorageStatisticsByChat[];
};

/**
 * Contains approximate storage usage statistics, excluding files of unknown file type
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1storage_statistics_fast.html
 */
export type StorageStatisticsFast = {
	"@type": "storageStatisticsFast";
	/** Approximate total size of files, in bytes */
	files_size: number;
	/** Approximate number of files */
	file_count: number;
	/** Size of the database */
	database_size: number;
	/** Size of the language pack database */
	language_pack_database_size: number;
	/** Size of the TDLib internal log */
	log_size: number;
};

/**
 * Contains database statistics
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1database_statistics.html
 */
export type DatabaseStatistics = {
	"@type": "databaseStatistics";
	/** Database statistics in an unspecified human-readable format */
	statistics: string;
};

/**
 * The network is not available
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1network_type_none.html
 */
export type NetworkTypeNone = {
	"@type": "networkTypeNone";
};

/**
 * A mobile network
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1network_type_mobile.html
 */
export type NetworkTypeMobile = {
	"@type": "networkTypeMobile";
};

/**
 * A mobile roaming network
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1network_type_mobile_roaming.html
 */
export type NetworkTypeMobileRoaming = {
	"@type": "networkTypeMobileRoaming";
};

/**
 * A Wi-Fi network
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1network_type_wi_fi.html
 */
export type NetworkTypeWiFi = {
	"@type": "networkTypeWiFi";
};

/**
 * A different network type (e.g., Ethernet network)
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1network_type_other.html
 */
export type NetworkTypeOther = {
	"@type": "networkTypeOther";
};

/**
 * Contains information about the total amount of data that was used to send and receive files
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1network_statistics_entry_file.html
 */
export type NetworkStatisticsEntryFile = {
	"@type": "networkStatisticsEntryFile";
	/** Type of the file the data is part of; pass null if the data isn't related to files */
	file_type?: FileType;
	/** Type of the network the data was sent through. Call setNetworkType to maintain the actual network type */
	network_type: NetworkType;
	/** Total number of bytes sent */
	sent_bytes: number;
	/** Total number of bytes received */
	received_bytes: number;
};

/**
 * Contains information about the total amount of data that was used for calls
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1network_statistics_entry_call.html
 */
export type NetworkStatisticsEntryCall = {
	"@type": "networkStatisticsEntryCall";
	/** Type of the network the data was sent through. Call setNetworkType to maintain the actual network type */
	network_type: NetworkType;
	/** Total number of bytes sent */
	sent_bytes: number;
	/** Total number of bytes received */
	received_bytes: number;
	/** Total call duration, in seconds */
	duration: number;
};

/**
 * A full list of available network statistic entries
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1network_statistics.html
 */
export type NetworkStatistics = {
	"@type": "networkStatistics";
	/** Point in time (Unix timestamp) from which the statistics are collected */
	since_date: number;
	/** Network statistics entries */
	entries: NetworkStatisticsEntry[];
};

/**
 * Contains auto-download settings
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1auto_download_settings.html
 */
export type AutoDownloadSettings = {
	"@type": "autoDownloadSettings";
	/** True, if the auto-download is enabled */
	is_auto_download_enabled: boolean;
	/** The maximum size of a photo file to be auto-downloaded, in bytes */
	max_photo_file_size: number;
	/** The maximum size of a video file to be auto-downloaded, in bytes */
	max_video_file_size: number;
	/** The maximum size of other file types to be auto-downloaded, in bytes */
	max_other_file_size: number;
	/** The maximum suggested bitrate for uploaded videos, in kbit/s */
	video_upload_bitrate: number;
	/** True, if the beginning of video files needs to be preloaded for instant playback */
	preload_large_videos: boolean;
	/** True, if the next audio track needs to be preloaded while the user is listening to an audio file */
	preload_next_audio: boolean;
	/** True, if stories needs to be preloaded */
	preload_stories: boolean;
	/** True, if "use less data for calls" option needs to be enabled */
	use_less_data_for_calls: boolean;
};

/**
 * Contains auto-download settings presets for the current user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1auto_download_settings_presets.html
 */
export type AutoDownloadSettingsPresets = {
	"@type": "autoDownloadSettingsPresets";
	/** Preset with lowest settings; expected to be used by default when roaming */
	low: AutoDownloadSettings;
	/** Preset with medium settings; expected to be used by default when using mobile data */
	medium: AutoDownloadSettings;
	/** Preset with highest settings; expected to be used by default when connected on Wi-Fi */
	high: AutoDownloadSettings;
};

/**
 * Autosave settings applied to all private chats without chat-specific settings
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1autosave_settings_scope_private_chats.html
 */
export type AutosaveSettingsScopePrivateChats = {
	"@type": "autosaveSettingsScopePrivateChats";
};

/**
 * Autosave settings applied to all basic group and supergroup chats without chat-specific settings
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1autosave_settings_scope_group_chats.html
 */
export type AutosaveSettingsScopeGroupChats = {
	"@type": "autosaveSettingsScopeGroupChats";
};

/**
 * Autosave settings applied to all channel chats without chat-specific settings
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1autosave_settings_scope_channel_chats.html
 */
export type AutosaveSettingsScopeChannelChats = {
	"@type": "autosaveSettingsScopeChannelChats";
};

/**
 * Autosave settings applied to a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1autosave_settings_scope_chat.html
 */
export type AutosaveSettingsScopeChat = {
	"@type": "autosaveSettingsScopeChat";
	/** Chat identifier */
	chat_id: number;
};

/**
 * Contains autosave settings for an autosave settings scope
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1scope_autosave_settings.html
 */
export type ScopeAutosaveSettings = {
	"@type": "scopeAutosaveSettings";
	/** True, if photo autosave is enabled */
	autosave_photos: boolean;
	/** True, if video autosave is enabled */
	autosave_videos: boolean;
	/** The maximum size of a video file to be autosaved, in bytes; 512 KB - 4000 MB */
	max_video_file_size: number;
};

/**
 * Contains autosave settings for a chat, which overrides default settings for the corresponding scope
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1autosave_settings_exception.html
 */
export type AutosaveSettingsException = {
	"@type": "autosaveSettingsException";
	/** Chat identifier */
	chat_id: number;
	/** Autosave settings for the chat */
	settings: ScopeAutosaveSettings;
};

/**
 * Describes autosave settings
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1autosave_settings.html
 */
export type AutosaveSettings = {
	"@type": "autosaveSettings";
	/** Default autosave settings for private chats */
	private_chat_settings: ScopeAutosaveSettings;
	/** Default autosave settings for basic group and supergroup chats */
	group_settings: ScopeAutosaveSettings;
	/** Default autosave settings for channel chats */
	channel_settings: ScopeAutosaveSettings;
	/** Autosave settings for specific chats */
	exceptions: AutosaveSettingsException[];
};

/**
 * Waiting for the network to become available. Use setNetworkType to change the available network type
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1connection_state_waiting_for_network.html
 */
export type ConnectionStateWaitingForNetwork = {
	"@type": "connectionStateWaitingForNetwork";
};

/**
 * Establishing a connection with a proxy server
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1connection_state_connecting_to_proxy.html
 */
export type ConnectionStateConnectingToProxy = {
	"@type": "connectionStateConnectingToProxy";
};

/**
 * Establishing a connection to the Telegram servers
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1connection_state_connecting.html
 */
export type ConnectionStateConnecting = {
	"@type": "connectionStateConnecting";
};

/**
 * Downloading data expected to be received while the application was offline
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1connection_state_updating.html
 */
export type ConnectionStateUpdating = {
	"@type": "connectionStateUpdating";
};

/**
 * There is a working connection to the Telegram servers
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1connection_state_ready.html
 */
export type ConnectionStateReady = {
	"@type": "connectionStateReady";
};

/**
 * A category containing frequently used private chats with non-bot users
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1top_chat_category_users.html
 */
export type TopChatCategoryUsers = {
	"@type": "topChatCategoryUsers";
};

/**
 * A category containing frequently used private chats with bot users
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1top_chat_category_bots.html
 */
export type TopChatCategoryBots = {
	"@type": "topChatCategoryBots";
};

/**
 * A category containing frequently used basic groups and supergroups
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1top_chat_category_groups.html
 */
export type TopChatCategoryGroups = {
	"@type": "topChatCategoryGroups";
};

/**
 * A category containing frequently used channels
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1top_chat_category_channels.html
 */
export type TopChatCategoryChannels = {
	"@type": "topChatCategoryChannels";
};

/**
 * A category containing frequently used chats with inline bots sorted by their usage in inline mode
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1top_chat_category_inline_bots.html
 */
export type TopChatCategoryInlineBots = {
	"@type": "topChatCategoryInlineBots";
};

/**
 * A category containing frequently used chats with bots, which Web Apps were opened
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1top_chat_category_web_app_bots.html
 */
export type TopChatCategoryWebAppBots = {
	"@type": "topChatCategoryWebAppBots";
};

/**
 * A category containing frequently used chats used for calls
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1top_chat_category_calls.html
 */
export type TopChatCategoryCalls = {
	"@type": "topChatCategoryCalls";
};

/**
 * A category containing frequently used chats used to forward messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1top_chat_category_forward_chats.html
 */
export type TopChatCategoryForwardChats = {
	"@type": "topChatCategoryForwardChats";
};

/**
 * Contains 0-based match position
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1found_position.html
 */
export type FoundPosition = {
	"@type": "foundPosition";
	/** The position of the match */
	position: number;
};

/**
 * Contains 0-based positions of matched objects
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1found_positions.html
 */
export type FoundPositions = {
	"@type": "foundPositions";
	/** Total number of matched objects */
	total_count: number;
	/** The positions of the matched objects */
	positions: number[];
};

/**
 * A URL linking to a user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1t_me_url_type_user.html
 */
export type TMeUrlTypeUser = {
	"@type": "tMeUrlTypeUser";
	/** Identifier of the user */
	user_id: number;
};

/**
 * A URL linking to a public supergroup or channel
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1t_me_url_type_supergroup.html
 */
export type TMeUrlTypeSupergroup = {
	"@type": "tMeUrlTypeSupergroup";
	/** Identifier of the supergroup or channel */
	supergroup_id: number;
};

/**
 * A chat invite link
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1t_me_url_type_chat_invite.html
 */
export type TMeUrlTypeChatInvite = {
	"@type": "tMeUrlTypeChatInvite";
	/** Information about the chat invite link */
	info: ChatInviteLinkInfo;
};

/**
 * A URL linking to a sticker set
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1t_me_url_type_sticker_set.html
 */
export type TMeUrlTypeStickerSet = {
	"@type": "tMeUrlTypeStickerSet";
	/** Identifier of the sticker set */
	sticker_set_id: string;
};

/**
 * Represents a URL linking to an internal Telegram entity
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1t_me_url.html
 */
export type TMeUrl = {
	"@type": "tMeUrl";
	/** URL */
	url: string;
	/** Type of the URL */
	type: TMeUrlType;
};

/**
 * Contains a list of t.me URLs
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1t_me_urls.html
 */
export type TMeUrls = {
	"@type": "tMeUrls";
	/** List of URLs */
	urls: TMeUrl[];
};

/**
 * Suggests the user to enable archive_and_mute_new_chats_from_unknown_users setting in archiveChatListSettings
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1suggested_action_enable_archive_and_mute_new_chats.html
 */
export type SuggestedActionEnableArchiveAndMuteNewChats = {
	"@type": "suggestedActionEnableArchiveAndMuteNewChats";
};

/**
 * Suggests the user to check whether they still remember their 2-step verification password
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1suggested_action_check_password.html
 */
export type SuggestedActionCheckPassword = {
	"@type": "suggestedActionCheckPassword";
};

/**
 * Suggests the user to check whether authorization phone number is correct and change the phone number if it is inaccessible
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1suggested_action_check_phone_number.html
 */
export type SuggestedActionCheckPhoneNumber = {
	"@type": "suggestedActionCheckPhoneNumber";
};

/**
 * Suggests the user to view a hint about the meaning of one and two check marks on sent messages
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1suggested_action_view_checks_hint.html
 */
export type SuggestedActionViewChecksHint = {
	"@type": "suggestedActionViewChecksHint";
};

/**
 * Suggests the user to convert specified supergroup to a broadcast group
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1suggested_action_convert_to_broadcast_group.html
 */
export type SuggestedActionConvertToBroadcastGroup = {
	"@type": "suggestedActionConvertToBroadcastGroup";
	/** Supergroup identifier */
	supergroup_id: number;
};

/**
 * Suggests the user to set a 2-step verification password to be able to log in again
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1suggested_action_set_password.html
 */
export type SuggestedActionSetPassword = {
	"@type": "suggestedActionSetPassword";
	/** The number of days to pass between consecutive authorizations if the user declines to set password; if 0, then the user is advised to set the password for security reasons */
	authorization_delay: number;
};

/**
 * Suggests the user to upgrade the Premium subscription from monthly payments to annual payments
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1suggested_action_upgrade_premium.html
 */
export type SuggestedActionUpgradePremium = {
	"@type": "suggestedActionUpgradePremium";
};

/**
 * Suggests the user to restore a recently expired Premium subscription
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1suggested_action_restore_premium.html
 */
export type SuggestedActionRestorePremium = {
	"@type": "suggestedActionRestorePremium";
};

/**
 * Suggests the user to subscribe to the Premium subscription with annual payments
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1suggested_action_subscribe_to_annual_premium.html
 */
export type SuggestedActionSubscribeToAnnualPremium = {
	"@type": "suggestedActionSubscribeToAnnualPremium";
};

/**
 * Suggests the user to gift Telegram Premium to friends for Christmas
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1suggested_action_gift_premium_for_christmas.html
 */
export type SuggestedActionGiftPremiumForChristmas = {
	"@type": "suggestedActionGiftPremiumForChristmas";
};

/**
 * Suggests the user to set birthdate
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1suggested_action_set_birthdate.html
 */
export type SuggestedActionSetBirthdate = {
	"@type": "suggestedActionSetBirthdate";
};

/**
 * Suggests the user to set profile photo
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1suggested_action_set_profile_photo.html
 */
export type SuggestedActionSetProfilePhoto = {
	"@type": "suggestedActionSetProfilePhoto";
};

/**
 * Suggests the user to extend their expiring Telegram Premium subscription
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1suggested_action_extend_premium.html
 */
export type SuggestedActionExtendPremium = {
	"@type": "suggestedActionExtendPremium";
	/** A URL for managing Telegram Premium subscription */
	manage_premium_subscription_url: string;
};

/**
 * Suggests the user to extend their expiring Telegram Star subscriptions. Call getStarSubscriptions with only_expiring == true to get the number of expiring subscriptions and the number of required to buy Telegram Stars
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1suggested_action_extend_star_subscriptions.html
 */
export type SuggestedActionExtendStarSubscriptions = {
	"@type": "suggestedActionExtendStarSubscriptions";
};

/**
 * A custom suggestion to be shown at the top of the chat list
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1suggested_action_custom.html
 */
export type SuggestedActionCustom = {
	"@type": "suggestedActionCustom";
	/** Unique name of the suggestion */
	name: string;
	/** Title of the suggestion */
	title: FormattedText;
	/** Description of the suggestion */
	description: FormattedText;
	/** The link to open when the suggestion is clicked */
	url: string;
};

/**
 * Contains a counter
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1count.html
 */
export type Count = {
	"@type": "count";
	/** Count */
	count: number;
};

/**
 * Contains some text
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1text.html
 */
export type Text = {
	"@type": "text";
	/** Text */
	text: string;
};

/**
 * Contains some binary data
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1data.html
 */
export type Data = {
	"@type": "data";
	/** Data */
	data: string;
};

/**
 * Contains a value representing a number of seconds
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1seconds.html
 */
export type Seconds = {
	"@type": "seconds";
	/** Number of seconds */
	seconds: number;
};

/**
 * Contains size of downloaded prefix of a file
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1file_downloaded_prefix_size.html
 */
export type FileDownloadedPrefixSize = {
	"@type": "fileDownloadedPrefixSize";
	/** The prefix size, in bytes */
	size: number;
};

/**
 * Contains a number of Telegram Stars
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_count.html
 */
export type StarCount = {
	"@type": "starCount";
	/** Number of Telegram Stars */
	star_count: number;
};

/**
 * Contains information about a tg: deep link
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1deep_link_info.html
 */
export type DeepLinkInfo = {
	"@type": "deepLinkInfo";
	/** Text to be shown to the user */
	text: FormattedText;
	/** True, if the user must be asked to update the application */
	need_update_application: boolean;
};

/**
 * The text uses Markdown-style formatting
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1text_parse_mode_markdown.html
 */
export type TextParseModeMarkdown = {
	"@type": "textParseModeMarkdown";
	/** Version of the parser: 0 or 1 - Telegram Bot API "Markdown" parse mode, 2 - Telegram Bot API "MarkdownV2" parse mode */
	version: number;
};

/**
 * The text uses HTML-style formatting. The same as Telegram Bot API "HTML" parse mode
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1text_parse_mode_h_t_m_l.html
 */
export type TextParseModeHTML = {
	"@type": "textParseModeHTML";
};

/**
 * A SOCKS5 proxy server
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1proxy_type_socks5.html
 */
export type ProxyTypeSocks5 = {
	"@type": "proxyTypeSocks5";
	/** Username for logging in; may be empty */
	username?: string;
	/** Password for logging in; may be empty */
	password?: string;
};

/**
 * A HTTP transparent proxy server
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1proxy_type_http.html
 */
export type ProxyTypeHttp = {
	"@type": "proxyTypeHttp";
	/** Username for logging in; may be empty */
	username?: string;
	/** Password for logging in; may be empty */
	password?: string;
	/** Pass true if the proxy supports only HTTP requests and doesn't support transparent TCP connections via HTTP CONNECT method */
	http_only: boolean;
};

/**
 * An MTProto proxy server
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1proxy_type_mtproto.html
 */
export type ProxyTypeMtproto = {
	"@type": "proxyTypeMtproto";
	/** The proxy's secret in hexadecimal encoding */
	secret: string;
};

/**
 * Contains information about a proxy server
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1proxy.html
 */
export type Proxy = {
	"@type": "proxy";
	/** Unique identifier of the proxy */
	id: number;
	/** Proxy server domain or IP address */
	server: string;
	/** Proxy server port */
	port: number;
	/** Point in time (Unix timestamp) when the proxy was last used; 0 if never */
	last_used_date: number;
	/** True, if the proxy is enabled now */
	is_enabled: boolean;
	/** Type of the proxy */
	type: ProxyType;
};

/**
 * Represents a list of proxy servers
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1proxies.html
 */
export type Proxies = {
	"@type": "proxies";
	/** List of proxy servers */
	proxies: Proxy[];
};

/**
 * A sticker to be added to a sticker set
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1input_sticker.html
 */
export type InputSticker = {
	"@type": "inputSticker";
	/** File with the sticker; must fit in a 512x512 square. For WEBP stickers the file must be in WEBP or PNG format, which will be converted to WEBP server-side. See https://core.telegram.org/animated_stickers#technical-requirements for technical requirements */
	sticker: InputFile;
	/** Format of the sticker */
	format: StickerFormat;
	/** String with 1-20 emoji corresponding to the sticker */
	emojis: string;
	/** Position where the mask is placed; pass null if not specified */
	mask_position?: MaskPosition;
	/** List of up to 20 keywords with total length up to 64 characters, which can be used to find the sticker */
	keywords: string[];
};

/**
 * Represents a date range
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1date_range.html
 */
export type DateRange = {
	"@type": "dateRange";
	/** Point in time (Unix timestamp) at which the date range begins */
	start_date: number;
	/** Point in time (Unix timestamp) at which the date range ends */
	end_date: number;
};

/**
 * A value with information about its recent changes
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1statistical_value.html
 */
export type StatisticalValue = {
	"@type": "statisticalValue";
	/** The current value */
	value: number;
	/** The value for the previous day */
	previous_value: number;
	/** The growth rate of the value, as a percentage */
	growth_rate_percentage: number;
};

/**
 * A graph data
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1statistical_graph_data.html
 */
export type StatisticalGraphData = {
	"@type": "statisticalGraphData";
	/** Graph data in JSON format */
	json_data: string;
	/** If non-empty, a token which can be used to receive a zoomed in graph */
	zoom_token?: string;
};

/**
 * The graph data to be asynchronously loaded through getStatisticalGraph
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1statistical_graph_async.html
 */
export type StatisticalGraphAsync = {
	"@type": "statisticalGraphAsync";
	/** The token to use for data loading */
	token: string;
};

/**
 * An error message to be shown to the user instead of the graph
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1statistical_graph_error.html
 */
export type StatisticalGraphError = {
	"@type": "statisticalGraphError";
	/** The error message */
	error_message: string;
};

/**
 * Describes a message sent in the chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_statistics_object_type_message.html
 */
export type ChatStatisticsObjectTypeMessage = {
	"@type": "chatStatisticsObjectTypeMessage";
	/** Message identifier */
	message_id: number;
};

/**
 * Describes a story posted on behalf of the chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_statistics_object_type_story.html
 */
export type ChatStatisticsObjectTypeStory = {
	"@type": "chatStatisticsObjectTypeStory";
	/** Story identifier */
	story_id: number;
};

/**
 * Contains statistics about interactions with a message sent in the chat or a story posted on behalf of the chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_statistics_interaction_info.html
 */
export type ChatStatisticsInteractionInfo = {
	"@type": "chatStatisticsInteractionInfo";
	/** Type of the object */
	object_type: ChatStatisticsObjectType;
	/** Number of times the object was viewed */
	view_count: number;
	/** Number of times the object was forwarded */
	forward_count: number;
	/** Number of times reactions were added to the object */
	reaction_count: number;
};

/**
 * Contains statistics about messages sent by a user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_statistics_message_sender_info.html
 */
export type ChatStatisticsMessageSenderInfo = {
	"@type": "chatStatisticsMessageSenderInfo";
	/** User identifier */
	user_id: number;
	/** Number of sent messages */
	sent_message_count: number;
	/** Average number of characters in sent messages; 0 if unknown */
	average_character_count: number;
};

/**
 * Contains statistics about administrator actions done by a user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_statistics_administrator_actions_info.html
 */
export type ChatStatisticsAdministratorActionsInfo = {
	"@type": "chatStatisticsAdministratorActionsInfo";
	/** Administrator user identifier */
	user_id: number;
	/** Number of messages deleted by the administrator */
	deleted_message_count: number;
	/** Number of users banned by the administrator */
	banned_user_count: number;
	/** Number of users restricted by the administrator */
	restricted_user_count: number;
};

/**
 * Contains statistics about number of new members invited by a user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_statistics_inviter_info.html
 */
export type ChatStatisticsInviterInfo = {
	"@type": "chatStatisticsInviterInfo";
	/** User identifier */
	user_id: number;
	/** Number of new members invited by the user */
	added_member_count: number;
};

/**
 * A detailed statistics about a supergroup chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_statistics_supergroup.html
 */
export type ChatStatisticsSupergroup = {
	"@type": "chatStatisticsSupergroup";
	/** A period to which the statistics applies */
	period: DateRange;
	/** Number of members in the chat */
	member_count: StatisticalValue;
	/** Number of messages sent to the chat */
	message_count: StatisticalValue;
	/** Number of users who viewed messages in the chat */
	viewer_count: StatisticalValue;
	/** Number of users who sent messages to the chat */
	sender_count: StatisticalValue;
	/** A graph containing number of members in the chat */
	member_count_graph: StatisticalGraph;
	/** A graph containing number of members joined and left the chat */
	join_graph: StatisticalGraph;
	/** A graph containing number of new member joins per source */
	join_by_source_graph: StatisticalGraph;
	/** A graph containing distribution of active users per language */
	language_graph: StatisticalGraph;
	/** A graph containing distribution of sent messages by content type */
	message_content_graph: StatisticalGraph;
	/** A graph containing number of different actions in the chat */
	action_graph: StatisticalGraph;
	/** A graph containing distribution of message views per hour */
	day_graph: StatisticalGraph;
	/** A graph containing distribution of message views per day of week */
	week_graph: StatisticalGraph;
	/** List of users sent most messages in the last week */
	top_senders: ChatStatisticsMessageSenderInfo[];
	/** List of most active administrators in the last week */
	top_administrators: ChatStatisticsAdministratorActionsInfo[];
	/** List of most active inviters of new members in the last week */
	top_inviters: ChatStatisticsInviterInfo[];
};

/**
 * A detailed statistics about a channel chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_statistics_channel.html
 */
export type ChatStatisticsChannel = {
	"@type": "chatStatisticsChannel";
	/** A period to which the statistics applies */
	period: DateRange;
	/** Number of members in the chat */
	member_count: StatisticalValue;
	/** Mean number of times the recently sent messages were viewed */
	mean_message_view_count: StatisticalValue;
	/** Mean number of times the recently sent messages were shared */
	mean_message_share_count: StatisticalValue;
	/** Mean number of times reactions were added to the recently sent messages */
	mean_message_reaction_count: StatisticalValue;
	/** Mean number of times the recently posted stories were viewed */
	mean_story_view_count: StatisticalValue;
	/** Mean number of times the recently posted stories were shared */
	mean_story_share_count: StatisticalValue;
	/** Mean number of times reactions were added to the recently posted stories */
	mean_story_reaction_count: StatisticalValue;
	/** A percentage of users with enabled notifications for the chat; 0-100 */
	enabled_notifications_percentage: number;
	/** A graph containing number of members in the chat */
	member_count_graph: StatisticalGraph;
	/** A graph containing number of members joined and left the chat */
	join_graph: StatisticalGraph;
	/** A graph containing number of members muted and unmuted the chat */
	mute_graph: StatisticalGraph;
	/** A graph containing number of message views in a given hour in the last two weeks */
	view_count_by_hour_graph: StatisticalGraph;
	/** A graph containing number of message views per source */
	view_count_by_source_graph: StatisticalGraph;
	/** A graph containing number of new member joins per source */
	join_by_source_graph: StatisticalGraph;
	/** A graph containing number of users viewed chat messages per language */
	language_graph: StatisticalGraph;
	/** A graph containing number of chat message views and shares */
	message_interaction_graph: StatisticalGraph;
	/** A graph containing number of reactions on messages */
	message_reaction_graph: StatisticalGraph;
	/** A graph containing number of story views and shares */
	story_interaction_graph: StatisticalGraph;
	/** A graph containing number of reactions on stories */
	story_reaction_graph: StatisticalGraph;
	/** A graph containing number of views of associated with the chat instant views */
	instant_view_interaction_graph: StatisticalGraph;
	/** Detailed statistics about number of views and shares of recently sent messages and posted stories */
	recent_interactions: ChatStatisticsInteractionInfo[];
};

/**
 * Contains information about revenue earned from sponsored messages in a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_revenue_amount.html
 */
export type ChatRevenueAmount = {
	"@type": "chatRevenueAmount";
	/** Cryptocurrency in which revenue is calculated */
	cryptocurrency: string;
	/** Total amount of the cryptocurrency earned, in the smallest units of the cryptocurrency */
	total_amount: string;
	/** Amount of the cryptocurrency that isn't withdrawn yet, in the smallest units of the cryptocurrency */
	balance_amount: string;
	/** Amount of the cryptocurrency available for withdrawal, in the smallest units of the cryptocurrency */
	available_amount: string;
	/** True, if Telegram Stars can be withdrawn now or later */
	withdrawal_enabled: boolean;
};

/**
 * A detailed statistics about revenue earned from sponsored messages in a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_revenue_statistics.html
 */
export type ChatRevenueStatistics = {
	"@type": "chatRevenueStatistics";
	/** A graph containing amount of revenue in a given hour */
	revenue_by_hour_graph: StatisticalGraph;
	/** A graph containing amount of revenue */
	revenue_graph: StatisticalGraph;
	/** Amount of earned revenue */
	revenue_amount: ChatRevenueAmount;
	/** Current conversion rate of the cryptocurrency in which revenue is calculated to USD */
	usd_rate: number;
};

/**
 * A detailed statistics about a message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1message_statistics.html
 */
export type MessageStatistics = {
	"@type": "messageStatistics";
	/** A graph containing number of message views and shares */
	message_interaction_graph: StatisticalGraph;
	/** A graph containing number of message reactions */
	message_reaction_graph: StatisticalGraph;
};

/**
 * A detailed statistics about a story
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1story_statistics.html
 */
export type StoryStatistics = {
	"@type": "storyStatistics";
	/** A graph containing number of story views and shares */
	story_interaction_graph: StatisticalGraph;
	/** A graph containing number of story reactions */
	story_reaction_graph: StatisticalGraph;
};

/**
 * Withdrawal is pending
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1revenue_withdrawal_state_pending.html
 */
export type RevenueWithdrawalStatePending = {
	"@type": "revenueWithdrawalStatePending";
};

/**
 * Withdrawal succeeded
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1revenue_withdrawal_state_succeeded.html
 */
export type RevenueWithdrawalStateSucceeded = {
	"@type": "revenueWithdrawalStateSucceeded";
	/** Point in time (Unix timestamp) when the withdrawal was completed */
	date: number;
	/** The URL where the withdrawal transaction can be viewed */
	url: string;
};

/**
 * Withdrawal failed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1revenue_withdrawal_state_failed.html
 */
export type RevenueWithdrawalStateFailed = {
	"@type": "revenueWithdrawalStateFailed";
};

/**
 * Describes earnings from sponsored messages in a chat in some time frame
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_revenue_transaction_type_earnings.html
 */
export type ChatRevenueTransactionTypeEarnings = {
	"@type": "chatRevenueTransactionTypeEarnings";
	/** Point in time (Unix timestamp) when the earnings started */
	start_date: number;
	/** Point in time (Unix timestamp) when the earnings ended */
	end_date: number;
};

/**
 * Describes a withdrawal of earnings
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_revenue_transaction_type_withdrawal.html
 */
export type ChatRevenueTransactionTypeWithdrawal = {
	"@type": "chatRevenueTransactionTypeWithdrawal";
	/** Point in time (Unix timestamp) when the earnings withdrawal started */
	withdrawal_date: number;
	/** Name of the payment provider */
	provider: string;
	/** State of the withdrawal */
	state: RevenueWithdrawalState;
};

/**
 * Describes a refund for failed withdrawal of earnings
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_revenue_transaction_type_refund.html
 */
export type ChatRevenueTransactionTypeRefund = {
	"@type": "chatRevenueTransactionTypeRefund";
	/** Point in time (Unix timestamp) when the transaction was refunded */
	refund_date: number;
	/** Name of the payment provider */
	provider: string;
};

/**
 * Contains a chat revenue transactions
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_revenue_transaction.html
 */
export type ChatRevenueTransaction = {
	"@type": "chatRevenueTransaction";
	/** Cryptocurrency in which revenue is calculated */
	cryptocurrency: string;
	/** The withdrawn amount, in the smallest units of the cryptocurrency */
	cryptocurrency_amount: string;
	/** Type of the transaction */
	type: ChatRevenueTransactionType;
};

/**
 * Contains a list of chat revenue transactions
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1chat_revenue_transactions.html
 */
export type ChatRevenueTransactions = {
	"@type": "chatRevenueTransactions";
	/** Total number of transactions */
	total_count: number;
	/** List of transactions */
	transactions: ChatRevenueTransaction[];
};

/**
 * Contains information about Telegram Stars earned by a bot or a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_revenue_status.html
 */
export type StarRevenueStatus = {
	"@type": "starRevenueStatus";
	/** Total amount of Telegram Stars earned */
	total_amount: StarAmount;
	/** The amount of Telegram Stars that aren't withdrawn yet */
	current_amount: StarAmount;
	/** The amount of Telegram Stars that are available for withdrawal */
	available_amount: StarAmount;
	/** True, if Telegram Stars can be withdrawn now or later */
	withdrawal_enabled: boolean;
	/** Time left before the next withdrawal can be started, in seconds; 0 if withdrawal can be started now */
	next_withdrawal_in: number;
};

/**
 * A detailed statistics about Telegram Stars earned by a bot or a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1star_revenue_statistics.html
 */
export type StarRevenueStatistics = {
	"@type": "starRevenueStatistics";
	/** A graph containing amount of revenue in a given day */
	revenue_by_day_graph: StatisticalGraph;
	/** Telegram Star revenue status */
	status: StarRevenueStatus;
	/** Current conversion rate of a Telegram Star to USD */
	usd_rate: number;
};

/**
 * A point on a Cartesian plane
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1point.html
 */
export type Point = {
	"@type": "point";
	/** The point's first coordinate */
	x: number;
	/** The point's second coordinate */
	y: number;
};

/**
 * A straight line to a given point
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1vector_path_command_line.html
 */
export type VectorPathCommandLine = {
	"@type": "vectorPathCommandLine";
	/** The end point of the straight line */
	end_point: Point;
};

/**
 * A cubic Bézier curve to a given point
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1vector_path_command_cubic_bezier_curve.html
 */
export type VectorPathCommandCubicBezierCurve = {
	"@type": "vectorPathCommandCubicBezierCurve";
	/** The start control point of the curve */
	start_control_point: Point;
	/** The end control point of the curve */
	end_control_point: Point;
	/** The end point of the curve */
	end_point: Point;
};

/**
 * A scope covering all users
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1bot_command_scope_default.html
 */
export type BotCommandScopeDefault = {
	"@type": "botCommandScopeDefault";
};

/**
 * A scope covering all private chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1bot_command_scope_all_private_chats.html
 */
export type BotCommandScopeAllPrivateChats = {
	"@type": "botCommandScopeAllPrivateChats";
};

/**
 * A scope covering all group and supergroup chats
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1bot_command_scope_all_group_chats.html
 */
export type BotCommandScopeAllGroupChats = {
	"@type": "botCommandScopeAllGroupChats";
};

/**
 * A scope covering all group and supergroup chat administrators
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1bot_command_scope_all_chat_administrators.html
 */
export type BotCommandScopeAllChatAdministrators = {
	"@type": "botCommandScopeAllChatAdministrators";
};

/**
 * A scope covering all members of a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1bot_command_scope_chat.html
 */
export type BotCommandScopeChat = {
	"@type": "botCommandScopeChat";
	/** Chat identifier */
	chat_id: number;
};

/**
 * A scope covering all administrators of a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1bot_command_scope_chat_administrators.html
 */
export type BotCommandScopeChatAdministrators = {
	"@type": "botCommandScopeChatAdministrators";
	/** Chat identifier */
	chat_id: number;
};

/**
 * A scope covering a member of a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1bot_command_scope_chat_member.html
 */
export type BotCommandScopeChatMember = {
	"@type": "botCommandScopeChatMember";
	/** Chat identifier */
	chat_id: number;
	/** User identifier */
	user_id: number;
};

/**
 * Checks ownership of a new phone number to change the user's authentication phone number; for official Android and iOS applications only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1phone_number_code_type_change.html
 */
export type PhoneNumberCodeTypeChange = {
	"@type": "phoneNumberCodeTypeChange";
};

/**
 * Verifies ownership of a phone number to be added to the user's Telegram Passport
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1phone_number_code_type_verify.html
 */
export type PhoneNumberCodeTypeVerify = {
	"@type": "phoneNumberCodeTypeVerify";
};

/**
 * Confirms ownership of a phone number to prevent account deletion while handling links of the type internalLinkTypePhoneNumberConfirmation
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1phone_number_code_type_confirm_ownership.html
 */
export type PhoneNumberCodeTypeConfirmOwnership = {
	"@type": "phoneNumberCodeTypeConfirmOwnership";
	/** Hash value from the link */
	hash: string;
};

/**
 * The log is written to stderr or an OS specific log
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1log_stream_default.html
 */
export type LogStreamDefault = {
	"@type": "logStreamDefault";
};

/**
 * The log is written to a file
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1log_stream_file.html
 */
export type LogStreamFile = {
	"@type": "logStreamFile";
	/** Path to the file to where the internal TDLib log will be written */
	path: string;
	/** The maximum size of the file to where the internal TDLib log is written before the file will automatically be rotated, in bytes */
	max_file_size: number;
	/** Pass true to additionally redirect stderr to the log file. Ignored on Windows */
	redirect_stderr: boolean;
};

/**
 * The log is written nowhere
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1log_stream_empty.html
 */
export type LogStreamEmpty = {
	"@type": "logStreamEmpty";
};

/**
 * Contains a TDLib internal log verbosity level
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1log_verbosity_level.html
 */
export type LogVerbosityLevel = {
	"@type": "logVerbosityLevel";
	/** Log verbosity level */
	verbosity_level: number;
};

/**
 * Contains a list of available TDLib internal log tags
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1log_tags.html
 */
export type LogTags = {
	"@type": "logTags";
	/** List of log tags */
	tags: string[];
};

/**
 * Contains custom information about the user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1user_support_info.html
 */
export type UserSupportInfo = {
	"@type": "userSupportInfo";
	/** Information message */
	message: FormattedText;
	/** Information author */
	author: string;
	/** Information change date */
	date: number;
};

/**
 * A simple object containing a number; for testing only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1test_int.html
 */
export type TestInt = {
	"@type": "testInt";
	/** Number */
	value: number;
};

/**
 * A simple object containing a string; for testing only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1test_string.html
 */
export type TestString = {
	"@type": "testString";
	/** String */
	value: string;
};

/**
 * A simple object containing a sequence of bytes; for testing only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1test_bytes.html
 */
export type TestBytes = {
	"@type": "testBytes";
	/** Bytes */
	value: string;
};

/**
 * A simple object containing a vector of numbers; for testing only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1test_vector_int.html
 */
export type TestVectorInt = {
	"@type": "testVectorInt";
	/** Vector of numbers */
	value: number[];
};

/**
 * A simple object containing a vector of objects that hold a number; for testing only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1test_vector_int_object.html
 */
export type TestVectorIntObject = {
	"@type": "testVectorIntObject";
	/** Vector of objects */
	value: TestInt[];
};

/**
 * A simple object containing a vector of strings; for testing only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1test_vector_string.html
 */
export type TestVectorString = {
	"@type": "testVectorString";
	/** Vector of strings */
	value: string[];
};

/**
 * A simple object containing a vector of objects that hold a string; for testing only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1test_vector_string_object.html
 */
export type TestVectorStringObject = {
	"@type": "testVectorStringObject";
	/** Vector of objects */
	value: TestString[];
};

/**
 * The user authorization state has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_authorization_state.html
 */
export type UpdateAuthorizationState = {
	"@type": "updateAuthorizationState";
	/** New authorization state */
	authorization_state: AuthorizationState;
};

/**
 * A new message was received; can also be an outgoing message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_new_message.html
 */
export type UpdateNewMessage = {
	"@type": "updateNewMessage";
	/** The new message */
	message: Message;
};

/**
 * A request to send a message has reached the Telegram server. This doesn't mean that the message will be sent successfully. This update is sent only if the option "use_quick_ack" is set to true. This update may be sent multiple times for the same message
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_message_send_acknowledged.html
 */
export type UpdateMessageSendAcknowledged = {
	"@type": "updateMessageSendAcknowledged";
	/** The chat identifier of the sent message */
	chat_id: number;
	/** A temporary message identifier */
	message_id: number;
};

/**
 * A message has been successfully sent
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_message_send_succeeded.html
 */
export type UpdateMessageSendSucceeded = {
	"@type": "updateMessageSendSucceeded";
	/** The sent message. Almost any field of the new message can be different from the corresponding field of the original message. For example, the field scheduling_state may change, making the message scheduled, or non-scheduled */
	message: Message;
	/** The previous temporary message identifier */
	old_message_id: number;
};

/**
 * A message failed to send. Be aware that some messages being sent can be irrecoverably deleted, in which case updateDeleteMessages will be received instead of this update
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_message_send_failed.html
 */
export type UpdateMessageSendFailed = {
	"@type": "updateMessageSendFailed";
	/** The failed to send message */
	message: Message;
	/** The previous temporary message identifier */
	old_message_id: number;
	/** The cause of the message sending failure */
	error: Error;
};

/**
 * The message content has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_message_content.html
 */
export type UpdateMessageContent = {
	"@type": "updateMessageContent";
	/** Chat identifier */
	chat_id: number;
	/** Message identifier */
	message_id: number;
	/** New message content */
	new_content: MessageContent;
};

/**
 * A message was edited. Changes in the message content will come in a separate updateMessageContent
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_message_edited.html
 */
export type UpdateMessageEdited = {
	"@type": "updateMessageEdited";
	/** Chat identifier */
	chat_id: number;
	/** Message identifier */
	message_id: number;
	/** Point in time (Unix timestamp) when the message was edited */
	edit_date: number;
	/** New message reply markup; may be null */
	reply_markup?: ReplyMarkup;
};

/**
 * The message pinned state was changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_message_is_pinned.html
 */
export type UpdateMessageIsPinned = {
	"@type": "updateMessageIsPinned";
	/** Chat identifier */
	chat_id: number;
	/** The message identifier */
	message_id: number;
	/** True, if the message is pinned */
	is_pinned: boolean;
};

/**
 * The information about interactions with a message has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_message_interaction_info.html
 */
export type UpdateMessageInteractionInfo = {
	"@type": "updateMessageInteractionInfo";
	/** Chat identifier */
	chat_id: number;
	/** Message identifier */
	message_id: number;
	/** New information about interactions with the message; may be null */
	interaction_info?: MessageInteractionInfo;
};

/**
 * The message content was opened. Updates voice note messages to "listened", video note messages to "viewed" and starts the self-destruct timer
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_message_content_opened.html
 */
export type UpdateMessageContentOpened = {
	"@type": "updateMessageContentOpened";
	/** Chat identifier */
	chat_id: number;
	/** Message identifier */
	message_id: number;
};

/**
 * A message with an unread mention was read
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_message_mention_read.html
 */
export type UpdateMessageMentionRead = {
	"@type": "updateMessageMentionRead";
	/** Chat identifier */
	chat_id: number;
	/** Message identifier */
	message_id: number;
	/** The new number of unread mention messages left in the chat */
	unread_mention_count: number;
};

/**
 * The list of unread reactions added to a message was changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_message_unread_reactions.html
 */
export type UpdateMessageUnreadReactions = {
	"@type": "updateMessageUnreadReactions";
	/** Chat identifier */
	chat_id: number;
	/** Message identifier */
	message_id: number;
	/** The new list of unread reactions */
	unread_reactions: UnreadReaction[];
	/** The new number of messages with unread reactions left in the chat */
	unread_reaction_count: number;
};

/**
 * A fact-check added to a message was changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_message_fact_check.html
 */
export type UpdateMessageFactCheck = {
	"@type": "updateMessageFactCheck";
	/** Chat identifier */
	chat_id: number;
	/** Message identifier */
	message_id: number;
	/** The new fact-check */
	fact_check: FactCheck;
};

/**
 * A message with a live location was viewed. When the update is received, the application is expected to update the live location
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_message_live_location_viewed.html
 */
export type UpdateMessageLiveLocationViewed = {
	"@type": "updateMessageLiveLocationViewed";
	/** Identifier of the chat with the live location message */
	chat_id: number;
	/** Identifier of the message with live location */
	message_id: number;
};

/**
 * An automatically scheduled message with video has been successfully sent after conversion
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_video_published.html
 */
export type UpdateVideoPublished = {
	"@type": "updateVideoPublished";
	/** Identifier of the chat with the message */
	chat_id: number;
	/** Identifier of the sent message */
	message_id: number;
};

/**
 * A new chat has been loaded/created. This update is guaranteed to come before the chat identifier is returned to the application. The chat field changes will be reported through separate updates
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_new_chat.html
 */
export type UpdateNewChat = {
	"@type": "updateNewChat";
	/** The chat */
	chat: Chat;
};

/**
 * The title of a chat was changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_title.html
 */
export type UpdateChatTitle = {
	"@type": "updateChatTitle";
	/** Chat identifier */
	chat_id: number;
	/** The new chat title */
	title: string;
};

/**
 * A chat photo was changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_photo.html
 */
export type UpdateChatPhoto = {
	"@type": "updateChatPhoto";
	/** Chat identifier */
	chat_id: number;
	/** The new chat photo; may be null */
	photo?: ChatPhotoInfo;
};

/**
 * Chat accent colors have changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_accent_colors.html
 */
export type UpdateChatAccentColors = {
	"@type": "updateChatAccentColors";
	/** Chat identifier */
	chat_id: number;
	/** The new chat accent color identifier */
	accent_color_id: number;
	/** The new identifier of a custom emoji to be shown on the reply header and link preview background; 0 if none */
	background_custom_emoji_id: string;
	/** The new chat profile accent color identifier; -1 if none */
	profile_accent_color_id: number;
	/** The new identifier of a custom emoji to be shown on the profile background; 0 if none */
	profile_background_custom_emoji_id: string;
};

/**
 * Chat permissions were changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_permissions.html
 */
export type UpdateChatPermissions = {
	"@type": "updateChatPermissions";
	/** Chat identifier */
	chat_id: number;
	/** The new chat permissions */
	permissions: ChatPermissions;
};

/**
 * The last message of a chat was changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_last_message.html
 */
export type UpdateChatLastMessage = {
	"@type": "updateChatLastMessage";
	/** Chat identifier */
	chat_id: number;
	/** The new last message in the chat; may be null if the last message became unknown. While the last message is unknown, new messages can be added to the chat without corresponding updateNewMessage update */
	last_message?: Message;
	/** The new chat positions in the chat lists */
	positions: ChatPosition[];
};

/**
 * The position of a chat in a chat list has changed. An updateChatLastMessage or updateChatDraftMessage update might be sent instead of the update
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_position.html
 */
export type UpdateChatPosition = {
	"@type": "updateChatPosition";
	/** Chat identifier */
	chat_id: number;
	/** New chat position. If new order is 0, then the chat needs to be removed from the list */
	position: ChatPosition;
};

/**
 * A chat was added to a chat list
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_added_to_list.html
 */
export type UpdateChatAddedToList = {
	"@type": "updateChatAddedToList";
	/** Chat identifier */
	chat_id: number;
	/** The chat list to which the chat was added */
	chat_list: ChatList;
};

/**
 * A chat was removed from a chat list
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_removed_from_list.html
 */
export type UpdateChatRemovedFromList = {
	"@type": "updateChatRemovedFromList";
	/** Chat identifier */
	chat_id: number;
	/** The chat list from which the chat was removed */
	chat_list: ChatList;
};

/**
 * Incoming messages were read or the number of unread messages has been changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_read_inbox.html
 */
export type UpdateChatReadInbox = {
	"@type": "updateChatReadInbox";
	/** Chat identifier */
	chat_id: number;
	/** Identifier of the last read incoming message */
	last_read_inbox_message_id: number;
	/** The number of unread messages left in the chat */
	unread_count: number;
};

/**
 * Outgoing messages were read
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_read_outbox.html
 */
export type UpdateChatReadOutbox = {
	"@type": "updateChatReadOutbox";
	/** Chat identifier */
	chat_id: number;
	/** Identifier of last read outgoing message */
	last_read_outbox_message_id: number;
};

/**
 * The chat action bar was changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_action_bar.html
 */
export type UpdateChatActionBar = {
	"@type": "updateChatActionBar";
	/** Chat identifier */
	chat_id: number;
	/** The new value of the action bar; may be null */
	action_bar?: ChatActionBar;
};

/**
 * The bar for managing business bot was changed in a chat
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_business_bot_manage_bar.html
 */
export type UpdateChatBusinessBotManageBar = {
	"@type": "updateChatBusinessBotManageBar";
	/** Chat identifier */
	chat_id: number;
	/** The new value of the business bot manage bar; may be null */
	business_bot_manage_bar?: BusinessBotManageBar;
};

/**
 * The chat available reactions were changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_available_reactions.html
 */
export type UpdateChatAvailableReactions = {
	"@type": "updateChatAvailableReactions";
	/** Chat identifier */
	chat_id: number;
	/** The new reactions, available in the chat */
	available_reactions: ChatAvailableReactions;
};

/**
 * A chat draft has changed. Be aware that the update may come in the currently opened chat but with old content of the draft. If the user has changed the content of the draft, this update mustn't be applied
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_draft_message.html
 */
export type UpdateChatDraftMessage = {
	"@type": "updateChatDraftMessage";
	/** Chat identifier */
	chat_id: number;
	/** The new draft message; may be null if none */
	draft_message?: DraftMessage;
	/** The new chat positions in the chat lists */
	positions: ChatPosition[];
};

/**
 * Chat emoji status has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_emoji_status.html
 */
export type UpdateChatEmojiStatus = {
	"@type": "updateChatEmojiStatus";
	/** Chat identifier */
	chat_id: number;
	/** The new chat emoji status; may be null */
	emoji_status?: EmojiStatus;
};

/**
 * The message sender that is selected to send messages in a chat has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_message_sender.html
 */
export type UpdateChatMessageSender = {
	"@type": "updateChatMessageSender";
	/** Chat identifier */
	chat_id: number;
	/** New value of message_sender_id; may be null if the user can't change message sender */
	message_sender_id?: MessageSender;
};

/**
 * The message auto-delete or self-destruct timer setting for a chat was changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_message_auto_delete_time.html
 */
export type UpdateChatMessageAutoDeleteTime = {
	"@type": "updateChatMessageAutoDeleteTime";
	/** Chat identifier */
	chat_id: number;
	/** New value of message_auto_delete_time */
	message_auto_delete_time: number;
};

/**
 * Notification settings for a chat were changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_notification_settings.html
 */
export type UpdateChatNotificationSettings = {
	"@type": "updateChatNotificationSettings";
	/** Chat identifier */
	chat_id: number;
	/** The new notification settings */
	notification_settings: ChatNotificationSettings;
};

/**
 * The chat pending join requests were changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_pending_join_requests.html
 */
export type UpdateChatPendingJoinRequests = {
	"@type": "updateChatPendingJoinRequests";
	/** Chat identifier */
	chat_id: number;
	/** The new data about pending join requests; may be null */
	pending_join_requests?: ChatJoinRequestsInfo;
};

/**
 * The default chat reply markup was changed. Can occur because new messages with reply markup were received or because an old reply markup was hidden by the user
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_reply_markup.html
 */
export type UpdateChatReplyMarkup = {
	"@type": "updateChatReplyMarkup";
	/** Chat identifier */
	chat_id: number;
	/** Identifier of the message from which reply markup needs to be used; 0 if there is no default custom reply markup in the chat */
	reply_markup_message_id: number;
};

/**
 * The chat background was changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_background.html
 */
export type UpdateChatBackground = {
	"@type": "updateChatBackground";
	/** Chat identifier */
	chat_id: number;
	/** The new chat background; may be null if background was reset to default */
	background?: ChatBackground;
};

/**
 * The chat theme was changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_theme.html
 */
export type UpdateChatTheme = {
	"@type": "updateChatTheme";
	/** Chat identifier */
	chat_id: number;
	/** The new name of the chat theme; may be empty if theme was reset to default */
	theme_name?: string;
};

/**
 * The chat unread_mention_count has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_unread_mention_count.html
 */
export type UpdateChatUnreadMentionCount = {
	"@type": "updateChatUnreadMentionCount";
	/** Chat identifier */
	chat_id: number;
	/** The number of unread mention messages left in the chat */
	unread_mention_count: number;
};

/**
 * The chat unread_reaction_count has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_unread_reaction_count.html
 */
export type UpdateChatUnreadReactionCount = {
	"@type": "updateChatUnreadReactionCount";
	/** Chat identifier */
	chat_id: number;
	/** The number of messages with unread reactions left in the chat */
	unread_reaction_count: number;
};

/**
 * A chat video chat state has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_video_chat.html
 */
export type UpdateChatVideoChat = {
	"@type": "updateChatVideoChat";
	/** Chat identifier */
	chat_id: number;
	/** New value of video_chat */
	video_chat: VideoChat;
};

/**
 * The value of the default disable_notification parameter, used when a message is sent to the chat, was changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_default_disable_notification.html
 */
export type UpdateChatDefaultDisableNotification = {
	"@type": "updateChatDefaultDisableNotification";
	/** Chat identifier */
	chat_id: number;
	/** The new default_disable_notification value */
	default_disable_notification: boolean;
};

/**
 * A chat content was allowed or restricted for saving
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_has_protected_content.html
 */
export type UpdateChatHasProtectedContent = {
	"@type": "updateChatHasProtectedContent";
	/** Chat identifier */
	chat_id: number;
	/** New value of has_protected_content */
	has_protected_content: boolean;
};

/**
 * Translation of chat messages was enabled or disabled
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_is_translatable.html
 */
export type UpdateChatIsTranslatable = {
	"@type": "updateChatIsTranslatable";
	/** Chat identifier */
	chat_id: number;
	/** New value of is_translatable */
	is_translatable: boolean;
};

/**
 * A chat was marked as unread or was read
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_is_marked_as_unread.html
 */
export type UpdateChatIsMarkedAsUnread = {
	"@type": "updateChatIsMarkedAsUnread";
	/** Chat identifier */
	chat_id: number;
	/** New value of is_marked_as_unread */
	is_marked_as_unread: boolean;
};

/**
 * A chat default appearance has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_view_as_topics.html
 */
export type UpdateChatViewAsTopics = {
	"@type": "updateChatViewAsTopics";
	/** Chat identifier */
	chat_id: number;
	/** New value of view_as_topics */
	view_as_topics: boolean;
};

/**
 * A chat was blocked or unblocked
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_block_list.html
 */
export type UpdateChatBlockList = {
	"@type": "updateChatBlockList";
	/** Chat identifier */
	chat_id: number;
	/** Block list to which the chat is added; may be null if none */
	block_list?: BlockList;
};

/**
 * A chat's has_scheduled_messages field has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_has_scheduled_messages.html
 */
export type UpdateChatHasScheduledMessages = {
	"@type": "updateChatHasScheduledMessages";
	/** Chat identifier */
	chat_id: number;
	/** New value of has_scheduled_messages */
	has_scheduled_messages: boolean;
};

/**
 * The list of chat folders or a chat folder has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_folders.html
 */
export type UpdateChatFolders = {
	"@type": "updateChatFolders";
	/** The new list of chat folders */
	chat_folders: ChatFolderInfo[];
	/** Position of the main chat list among chat folders, 0-based */
	main_chat_list_position: number;
	/** True, if folder tags are enabled */
	are_tags_enabled: boolean;
};

/**
 * The number of online group members has changed. This update with non-zero number of online group members is sent only for currently opened chats. There is no guarantee that it is sent just after the number of online users has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_online_member_count.html
 */
export type UpdateChatOnlineMemberCount = {
	"@type": "updateChatOnlineMemberCount";
	/** Identifier of the chat */
	chat_id: number;
	/** New number of online members in the chat, or 0 if unknown */
	online_member_count: number;
};

/**
 * Basic information about a Saved Messages topic has changed. This update is guaranteed to come before the topic identifier is returned to the application
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_saved_messages_topic.html
 */
export type UpdateSavedMessagesTopic = {
	"@type": "updateSavedMessagesTopic";
	/** New data about the topic */
	topic: SavedMessagesTopic;
};

/**
 * Number of Saved Messages topics has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_saved_messages_topic_count.html
 */
export type UpdateSavedMessagesTopicCount = {
	"@type": "updateSavedMessagesTopicCount";
	/** Approximate total number of Saved Messages topics */
	topic_count: number;
};

/**
 * Basic information about a topic in a channel direct messages chat administered by the current user has changed. This update is guaranteed to come before the topic identifier is returned to the application
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_direct_messages_chat_topic.html
 */
export type UpdateDirectMessagesChatTopic = {
	"@type": "updateDirectMessagesChatTopic";
	/** New data about the topic */
	topic: DirectMessagesChatTopic;
};

/**
 * Number of messages in a topic has changed; for Saved Messages and channel direct messages chat topics only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_topic_message_count.html
 */
export type UpdateTopicMessageCount = {
	"@type": "updateTopicMessageCount";
	/** Identifier of the chat in topic of which the number of messages has changed */
	chat_id: number;
	/** Identifier of the topic */
	topic_id: MessageTopic;
	/** Approximate number of messages in the topics */
	message_count: number;
};

/**
 * Basic information about a quick reply shortcut has changed. This update is guaranteed to come before the quick shortcut name is returned to the application
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_quick_reply_shortcut.html
 */
export type UpdateQuickReplyShortcut = {
	"@type": "updateQuickReplyShortcut";
	/** New data about the shortcut */
	shortcut: QuickReplyShortcut;
};

/**
 * A quick reply shortcut and all its messages were deleted
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_quick_reply_shortcut_deleted.html
 */
export type UpdateQuickReplyShortcutDeleted = {
	"@type": "updateQuickReplyShortcutDeleted";
	/** The identifier of the deleted shortcut */
	shortcut_id: number;
};

/**
 * The list of quick reply shortcuts has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_quick_reply_shortcuts.html
 */
export type UpdateQuickReplyShortcuts = {
	"@type": "updateQuickReplyShortcuts";
	/** The new list of identifiers of quick reply shortcuts */
	shortcut_ids: number[];
};

/**
 * The list of quick reply shortcut messages has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_quick_reply_shortcut_messages.html
 */
export type UpdateQuickReplyShortcutMessages = {
	"@type": "updateQuickReplyShortcutMessages";
	/** The identifier of the shortcut */
	shortcut_id: number;
	/** The new list of quick reply messages for the shortcut in order from the first to the last sent */
	messages: QuickReplyMessage[];
};

/**
 * Basic information about a topic in a forum chat was changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_forum_topic_info.html
 */
export type UpdateForumTopicInfo = {
	"@type": "updateForumTopicInfo";
	/** New information about the topic */
	info: ForumTopicInfo;
};

/**
 * Information about a topic in a forum chat was changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_forum_topic.html
 */
export type UpdateForumTopic = {
	"@type": "updateForumTopic";
	/** Chat identifier */
	chat_id: number;
	/** Message thread identifier of the topic */
	message_thread_id: number;
	/** True, if the topic is pinned in the topic list */
	is_pinned: boolean;
	/** Identifier of the last read incoming message */
	last_read_inbox_message_id: number;
	/** Identifier of the last read outgoing message */
	last_read_outbox_message_id: number;
	/** Number of unread messages with a mention/reply in the topic */
	unread_mention_count: number;
	/** Number of messages with unread reactions in the topic */
	unread_reaction_count: number;
	/** Notification settings for the topic */
	notification_settings: ChatNotificationSettings;
};

/**
 * Notification settings for some type of chats were updated
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_scope_notification_settings.html
 */
export type UpdateScopeNotificationSettings = {
	"@type": "updateScopeNotificationSettings";
	/** Types of chats for which notification settings were updated */
	scope: NotificationSettingsScope;
	/** The new notification settings */
	notification_settings: ScopeNotificationSettings;
};

/**
 * Notification settings for reactions were updated
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_reaction_notification_settings.html
 */
export type UpdateReactionNotificationSettings = {
	"@type": "updateReactionNotificationSettings";
	/** The new notification settings */
	notification_settings: ReactionNotificationSettings;
};

/**
 * A notification was changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_notification.html
 */
export type UpdateNotification = {
	"@type": "updateNotification";
	/** Unique notification group identifier */
	notification_group_id: number;
	/** Changed notification */
	notification: Notification;
};

/**
 * A list of active notifications in a notification group has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_notification_group.html
 */
export type UpdateNotificationGroup = {
	"@type": "updateNotificationGroup";
	/** Unique notification group identifier */
	notification_group_id: number;
	/** New type of the notification group */
	type: NotificationGroupType;
	/** Identifier of a chat to which all notifications in the group belong */
	chat_id: number;
	/** Chat identifier, which notification settings must be applied to the added notifications */
	notification_settings_chat_id: number;
	/** Identifier of the notification sound to be played; 0 if sound is disabled */
	notification_sound_id: string;
	/** Total number of unread notifications in the group, can be bigger than number of active notifications */
	total_count: number;
	/** List of added group notifications, sorted by notification identifier */
	added_notifications: Notification[];
	/** Identifiers of removed group notifications, sorted by notification identifier */
	removed_notification_ids: number[];
};

/**
 * Contains active notifications that were shown on previous application launches. This update is sent only if the message database is used. In that case it comes once before any updateNotification and updateNotificationGroup update
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_active_notifications.html
 */
export type UpdateActiveNotifications = {
	"@type": "updateActiveNotifications";
	/** Lists of active notification groups */
	groups: NotificationGroup[];
};

/**
 * Describes whether there are some pending notification updates. Can be used to prevent application from killing, while there are some pending notifications
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_have_pending_notifications.html
 */
export type UpdateHavePendingNotifications = {
	"@type": "updateHavePendingNotifications";
	/** True, if there are some delayed notification updates, which will be sent soon */
	have_delayed_notifications: boolean;
	/** True, if there can be some yet unreceived notifications, which are being fetched from the server */
	have_unreceived_notifications: boolean;
};

/**
 * Some messages were deleted
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_delete_messages.html
 */
export type UpdateDeleteMessages = {
	"@type": "updateDeleteMessages";
	/** Chat identifier */
	chat_id: number;
	/** Identifiers of the deleted messages */
	message_ids: number[];
	/** True, if the messages are permanently deleted by a user (as opposed to just becoming inaccessible) */
	is_permanent: boolean;
	/** True, if the messages are deleted only from the cache and can possibly be retrieved again in the future */
	from_cache: boolean;
};

/**
 * A message sender activity in the chat has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_action.html
 */
export type UpdateChatAction = {
	"@type": "updateChatAction";
	/** Chat identifier */
	chat_id: number;
	/** If not 0, the message thread identifier in which the action was performed */
	message_thread_id: number;
	/** Identifier of a message sender performing the action */
	sender_id: MessageSender;
	/** The action */
	action: ChatAction;
};

/**
 * The user went online or offline
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_user_status.html
 */
export type UpdateUserStatus = {
	"@type": "updateUserStatus";
	/** User identifier */
	user_id: number;
	/** New status of the user */
	status: UserStatus;
};

/**
 * Some data of a user has changed. This update is guaranteed to come before the user identifier is returned to the application
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_user.html
 */
export type UpdateUser = {
	"@type": "updateUser";
	/** New data about the user */
	user: User;
};

/**
 * Some data of a basic group has changed. This update is guaranteed to come before the basic group identifier is returned to the application
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_basic_group.html
 */
export type UpdateBasicGroup = {
	"@type": "updateBasicGroup";
	/** New data about the group */
	basic_group: BasicGroup;
};

/**
 * Some data of a supergroup or a channel has changed. This update is guaranteed to come before the supergroup identifier is returned to the application
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_supergroup.html
 */
export type UpdateSupergroup = {
	"@type": "updateSupergroup";
	/** New data about the supergroup */
	supergroup: Supergroup;
};

/**
 * Some data of a secret chat has changed. This update is guaranteed to come before the secret chat identifier is returned to the application
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_secret_chat.html
 */
export type UpdateSecretChat = {
	"@type": "updateSecretChat";
	/** New data about the secret chat */
	secret_chat: SecretChat;
};

/**
 * Some data in userFullInfo has been changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_user_full_info.html
 */
export type UpdateUserFullInfo = {
	"@type": "updateUserFullInfo";
	/** User identifier */
	user_id: number;
	/** New full information about the user */
	user_full_info: UserFullInfo;
};

/**
 * Some data in basicGroupFullInfo has been changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_basic_group_full_info.html
 */
export type UpdateBasicGroupFullInfo = {
	"@type": "updateBasicGroupFullInfo";
	/** Identifier of a basic group */
	basic_group_id: number;
	/** New full information about the group */
	basic_group_full_info: BasicGroupFullInfo;
};

/**
 * Some data in supergroupFullInfo has been changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_supergroup_full_info.html
 */
export type UpdateSupergroupFullInfo = {
	"@type": "updateSupergroupFullInfo";
	/** Identifier of the supergroup or channel */
	supergroup_id: number;
	/** New full information about the supergroup */
	supergroup_full_info: SupergroupFullInfo;
};

/**
 * A service notification from the server was received. Upon receiving this the application must show a popup with the content of the notification
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_service_notification.html
 */
export type UpdateServiceNotification = {
	"@type": "updateServiceNotification";
	/** Notification type. If type begins with "AUTH_KEY_DROP_", then two buttons "Cancel" and "Log out" must be shown under notification; if user presses the second, all local data must be destroyed using Destroy method */
	type: string;
	/** Notification content */
	content: MessageContent;
};

/**
 * Information about a file was updated
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_file.html
 */
export type UpdateFile = {
	"@type": "updateFile";
	/** New data about the file */
	file: File;
};

/**
 * The file generation process needs to be started by the application. Use setFileGenerationProgress and finishFileGeneration to generate the file
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_file_generation_start.html
 */
export type UpdateFileGenerationStart = {
	"@type": "updateFileGenerationStart";
	/** Unique identifier for the generation process */
	generation_id: string;
	/** The original path specified by the application in inputFileGenerated */
	original_path: string;
	/** The path to a file that must be created and where the new file must be generated by the application. If the application has no access to the path, it can use writeGeneratedFilePart to generate the file */
	destination_path: string;
	/** If the conversion is "#url#" than original_path contains an HTTP/HTTPS URL of a file that must be downloaded by the application. Otherwise, this is the conversion specified by the application in inputFileGenerated */
	conversion: string;
};

/**
 * File generation is no longer needed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_file_generation_stop.html
 */
export type UpdateFileGenerationStop = {
	"@type": "updateFileGenerationStop";
	/** Unique identifier for the generation process */
	generation_id: string;
};

/**
 * The state of the file download list has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_file_downloads.html
 */
export type UpdateFileDownloads = {
	"@type": "updateFileDownloads";
	/** Total size of files in the file download list, in bytes */
	total_size: number;
	/** Total number of files in the file download list */
	total_count: number;
	/** Total downloaded size of files in the file download list, in bytes */
	downloaded_size: number;
};

/**
 * A file was added to the file download list. This update is sent only after file download list is loaded for the first time
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_file_added_to_downloads.html
 */
export type UpdateFileAddedToDownloads = {
	"@type": "updateFileAddedToDownloads";
	/** The added file download */
	file_download: FileDownload;
	/** New number of being downloaded and recently downloaded files found */
	counts: DownloadedFileCounts;
};

/**
 * A file download was changed. This update is sent only after file download list is loaded for the first time
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_file_download.html
 */
export type UpdateFileDownload = {
	"@type": "updateFileDownload";
	/** File identifier */
	file_id: number;
	/** Point in time (Unix timestamp) when the file downloading was completed; 0 if the file downloading isn't completed */
	complete_date: number;
	/** True, if downloading of the file is paused */
	is_paused: boolean;
	/** New number of being downloaded and recently downloaded files found */
	counts: DownloadedFileCounts;
};

/**
 * A file was removed from the file download list. This update is sent only after file download list is loaded for the first time
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_file_removed_from_downloads.html
 */
export type UpdateFileRemovedFromDownloads = {
	"@type": "updateFileRemovedFromDownloads";
	/** File identifier */
	file_id: number;
	/** New number of being downloaded and recently downloaded files found */
	counts: DownloadedFileCounts;
};

/**
 * A request can't be completed unless application verification is performed; for official mobile applications only. The method setApplicationVerificationToken must be called once the verification is completed or failed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_application_verification_required.html
 */
export type UpdateApplicationVerificationRequired = {
	"@type": "updateApplicationVerificationRequired";
	/** Unique identifier for the verification process */
	verification_id: number;
	/** Unique base64url-encoded nonce for the classic Play Integrity verification (https://developer.android.com/google/play/integrity/classic) for Android, or a unique string to compare with verify_nonce field from a push notification for iOS */
	nonce: string;
	/** Cloud project number to pass to the Play Integrity API on Android */
	cloud_project_number: string;
};

/**
 * A request can't be completed unless reCAPTCHA verification is performed; for official mobile applications only. The method setApplicationVerificationToken must be called once the verification is completed or failed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_application_recaptcha_verification_required.html
 */
export type UpdateApplicationRecaptchaVerificationRequired = {
	"@type": "updateApplicationRecaptchaVerificationRequired";
	/** Unique identifier for the verification process */
	verification_id: number;
	/** The action for the check */
	action: string;
	/** Identifier of the reCAPTCHA key */
	recaptcha_key_id: string;
};

/**
 * New call was created or information about a call was updated
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_call.html
 */
export type UpdateCall = {
	"@type": "updateCall";
	/** New data about a call */
	call: Call;
};

/**
 * Information about a group call was updated
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_group_call.html
 */
export type UpdateGroupCall = {
	"@type": "updateGroupCall";
	/** New data about the group call */
	group_call: GroupCall;
};

/**
 * Information about a group call participant was changed. The updates are sent only after the group call is received through getGroupCall and only if the call is joined or being joined
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_group_call_participant.html
 */
export type UpdateGroupCallParticipant = {
	"@type": "updateGroupCallParticipant";
	/** Identifier of the group call */
	group_call_id: number;
	/** New data about the participant */
	participant: GroupCallParticipant;
};

/**
 * The list of group call participants that can send and receive encrypted call data has changed; for group calls not bound to a chat only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_group_call_participants.html
 */
export type UpdateGroupCallParticipants = {
	"@type": "updateGroupCallParticipants";
	/** Identifier of the group call */
	group_call_id: number;
	/** New list of group call participant user identifiers. The identifiers may be invalid or the corresponding users may be unknown. The participants must be shown in the list of group call participants even there is no information about them */
	participant_user_ids: string[];
};

/**
 * The verification state of an encrypted group call has changed; for group calls not bound to a chat only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_group_call_verification_state.html
 */
export type UpdateGroupCallVerificationState = {
	"@type": "updateGroupCallVerificationState";
	/** Identifier of the group call */
	group_call_id: number;
	/** The call state generation to which the emoji corresponds. If generation is different for two users, then their emoji may be also different */
	generation: number;
	/** Group call state fingerprint represented as 4 emoji; may be empty if the state isn't verified yet */
	emojis?: string[];
};

/**
 * New call signaling data arrived
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_new_call_signaling_data.html
 */
export type UpdateNewCallSignalingData = {
	"@type": "updateNewCallSignalingData";
	/** The call identifier */
	call_id: number;
	/** The data */
	data: string;
};

/**
 * Some privacy setting rules have been changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_user_privacy_setting_rules.html
 */
export type UpdateUserPrivacySettingRules = {
	"@type": "updateUserPrivacySettingRules";
	/** The privacy setting */
	setting: UserPrivacySetting;
	/** New privacy rules */
	rules: UserPrivacySettingRules;
};

/**
 * Number of unread messages in a chat list has changed. This update is sent only if the message database is used
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_unread_message_count.html
 */
export type UpdateUnreadMessageCount = {
	"@type": "updateUnreadMessageCount";
	/** The chat list with changed number of unread messages */
	chat_list: ChatList;
	/** Total number of unread messages */
	unread_count: number;
	/** Total number of unread messages in unmuted chats */
	unread_unmuted_count: number;
};

/**
 * Number of unread chats, i.e. with unread messages or marked as unread, has changed. This update is sent only if the message database is used
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_unread_chat_count.html
 */
export type UpdateUnreadChatCount = {
	"@type": "updateUnreadChatCount";
	/** The chat list with changed number of unread messages */
	chat_list: ChatList;
	/** Approximate total number of chats in the chat list */
	total_count: number;
	/** Total number of unread chats */
	unread_count: number;
	/** Total number of unread unmuted chats */
	unread_unmuted_count: number;
	/** Total number of chats marked as unread */
	marked_as_unread_count: number;
	/** Total number of unmuted chats marked as unread */
	marked_as_unread_unmuted_count: number;
};

/**
 * A story was changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_story.html
 */
export type UpdateStory = {
	"@type": "updateStory";
	/** The new information about the story */
	story: Story;
};

/**
 * A story became inaccessible
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_story_deleted.html
 */
export type UpdateStoryDeleted = {
	"@type": "updateStoryDeleted";
	/** Identifier of the chat that posted the story */
	story_poster_chat_id: number;
	/** Story identifier */
	story_id: number;
};

/**
 * A story has been successfully posted
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_story_post_succeeded.html
 */
export type UpdateStoryPostSucceeded = {
	"@type": "updateStoryPostSucceeded";
	/** The posted story */
	story: Story;
	/** The previous temporary story identifier */
	old_story_id: number;
};

/**
 * A story failed to post. If the story posting is canceled, then updateStoryDeleted will be received instead of this update
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_story_post_failed.html
 */
export type UpdateStoryPostFailed = {
	"@type": "updateStoryPostFailed";
	/** The failed to post story */
	story: Story;
	/** The cause of the story posting failure */
	error: Error;
	/** Type of the error; may be null if unknown */
	error_type?: CanPostStoryResult;
};

/**
 * The list of active stories posted by a specific chat has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_active_stories.html
 */
export type UpdateChatActiveStories = {
	"@type": "updateChatActiveStories";
	/** The new list of active stories */
	active_stories: ChatActiveStories;
};

/**
 * Number of chats in a story list has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_story_list_chat_count.html
 */
export type UpdateStoryListChatCount = {
	"@type": "updateStoryListChatCount";
	/** The story list */
	story_list: StoryList;
	/** Approximate total number of chats with active stories in the list */
	chat_count: number;
};

/**
 * Story stealth mode settings have changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_story_stealth_mode.html
 */
export type UpdateStoryStealthMode = {
	"@type": "updateStoryStealthMode";
	/** Point in time (Unix timestamp) until stealth mode is active; 0 if it is disabled */
	active_until_date: number;
	/** Point in time (Unix timestamp) when stealth mode can be enabled again; 0 if there is no active cooldown */
	cooldown_until_date: number;
};

/**
 * An option changed its value
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_option.html
 */
export type UpdateOption = {
	"@type": "updateOption";
	/** The option name */
	name: string;
	/** The new option value */
	value: OptionValue;
};

/**
 * A sticker set has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_sticker_set.html
 */
export type UpdateStickerSet = {
	"@type": "updateStickerSet";
	/** The sticker set */
	sticker_set: StickerSet;
};

/**
 * The list of installed sticker sets was updated
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_installed_sticker_sets.html
 */
export type UpdateInstalledStickerSets = {
	"@type": "updateInstalledStickerSets";
	/** Type of the affected stickers */
	sticker_type: StickerType;
	/** The new list of installed ordinary sticker sets */
	sticker_set_ids: string[];
};

/**
 * The list of trending sticker sets was updated or some of them were viewed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_trending_sticker_sets.html
 */
export type UpdateTrendingStickerSets = {
	"@type": "updateTrendingStickerSets";
	/** Type of the affected stickers */
	sticker_type: StickerType;
	/** The prefix of the list of trending sticker sets with the newest trending sticker sets */
	sticker_sets: TrendingStickerSets;
};

/**
 * The list of recently used stickers was updated
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_recent_stickers.html
 */
export type UpdateRecentStickers = {
	"@type": "updateRecentStickers";
	/** True, if the list of stickers attached to photo or video files was updated; otherwise, the list of sent stickers is updated */
	is_attached: boolean;
	/** The new list of file identifiers of recently used stickers */
	sticker_ids: number[];
};

/**
 * The list of favorite stickers was updated
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_favorite_stickers.html
 */
export type UpdateFavoriteStickers = {
	"@type": "updateFavoriteStickers";
	/** The new list of file identifiers of favorite stickers */
	sticker_ids: number[];
};

/**
 * The list of saved animations was updated
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_saved_animations.html
 */
export type UpdateSavedAnimations = {
	"@type": "updateSavedAnimations";
	/** The new list of file identifiers of saved animations */
	animation_ids: number[];
};

/**
 * The list of saved notification sounds was updated. This update may not be sent until information about a notification sound was requested for the first time
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_saved_notification_sounds.html
 */
export type UpdateSavedNotificationSounds = {
	"@type": "updateSavedNotificationSounds";
	/** The new list of identifiers of saved notification sounds */
	notification_sound_ids: string[];
};

/**
 * The default background has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_default_background.html
 */
export type UpdateDefaultBackground = {
	"@type": "updateDefaultBackground";
	/** True, if default background for dark theme has changed */
	for_dark_theme: boolean;
	/** The new default background; may be null */
	background?: Background;
};

/**
 * The list of available chat themes has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_themes.html
 */
export type UpdateChatThemes = {
	"@type": "updateChatThemes";
	/** The new list of chat themes */
	chat_themes: ChatTheme[];
};

/**
 * The list of supported accent colors has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_accent_colors.html
 */
export type UpdateAccentColors = {
	"@type": "updateAccentColors";
	/** Information about supported colors; colors with identifiers 0 (red), 1 (orange), 2 (purple/violet), 3 (green), 4 (cyan), 5 (blue), 6 (pink) must always be supported and aren't included in the list. The exact colors for the accent colors with identifiers 0-6 must be taken from the app theme */
	colors: AccentColor[];
	/** The list of accent color identifiers, which can be set through setAccentColor and setChatAccentColor. The colors must be shown in the specified order */
	available_accent_color_ids: number[];
};

/**
 * The list of supported accent colors for user profiles has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_profile_accent_colors.html
 */
export type UpdateProfileAccentColors = {
	"@type": "updateProfileAccentColors";
	/** Information about supported colors */
	colors: ProfileAccentColor[];
	/** The list of accent color identifiers, which can be set through setProfileAccentColor and setChatProfileAccentColor. The colors must be shown in the specified order */
	available_accent_color_ids: number[];
};

/**
 * Some language pack strings have been updated
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_language_pack_strings.html
 */
export type UpdateLanguagePackStrings = {
	"@type": "updateLanguagePackStrings";
	/** Localization target to which the language pack belongs */
	localization_target: string;
	/** Identifier of the updated language pack */
	language_pack_id: string;
	/** List of changed language pack strings; empty if all strings have changed */
	strings: LanguagePackString[];
};

/**
 * The connection state has changed. This update must be used only to show a human-readable description of the connection state
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_connection_state.html
 */
export type UpdateConnectionState = {
	"@type": "updateConnectionState";
	/** The new connection state */
	state: ConnectionState;
};

/**
 * The freeze state of the current user's account has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_freeze_state.html
 */
export type UpdateFreezeState = {
	"@type": "updateFreezeState";
	/** True, if the account is frozen */
	is_frozen: boolean;
	/** Point in time (Unix timestamp) when the account was frozen; 0 if the account isn't frozen */
	freezing_date: number;
	/** Point in time (Unix timestamp) when the account will be deleted and can't be unfrozen; 0 if the account isn't frozen */
	deletion_date: number;
	/** The link to open to send an appeal to unfreeze the account */
	appeal_link: string;
};

/**
 * New terms of service must be accepted by the user. If the terms of service are declined, then the deleteAccount method must be called with the reason "Decline ToS update"
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_terms_of_service.html
 */
export type UpdateTermsOfService = {
	"@type": "updateTermsOfService";
	/** Identifier of the terms of service */
	terms_of_service_id: string;
	/** The new terms of service */
	terms_of_service: TermsOfService;
};

/**
 * The first unconfirmed session has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_unconfirmed_session.html
 */
export type UpdateUnconfirmedSession = {
	"@type": "updateUnconfirmedSession";
	/** The unconfirmed session; may be null if none */
	session?: UnconfirmedSession;
};

/**
 * The list of bots added to attachment or side menu has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_attachment_menu_bots.html
 */
export type UpdateAttachmentMenuBots = {
	"@type": "updateAttachmentMenuBots";
	/** The new list of bots. The bots must not be shown on scheduled messages screen */
	bots: AttachmentMenuBot[];
};

/**
 * A message was sent by an opened Web App, so the Web App needs to be closed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_web_app_message_sent.html
 */
export type UpdateWebAppMessageSent = {
	"@type": "updateWebAppMessageSent";
	/** Identifier of Web App launch */
	web_app_launch_id: string;
};

/**
 * The list of active emoji reactions has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_active_emoji_reactions.html
 */
export type UpdateActiveEmojiReactions = {
	"@type": "updateActiveEmojiReactions";
	/** The new list of active emoji reactions */
	emojis: string[];
};

/**
 * The list of available message effects has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_available_message_effects.html
 */
export type UpdateAvailableMessageEffects = {
	"@type": "updateAvailableMessageEffects";
	/** The new list of available message effects from emoji reactions */
	reaction_effect_ids: string[];
	/** The new list of available message effects from Premium stickers */
	sticker_effect_ids: string[];
};

/**
 * The type of default reaction has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_default_reaction_type.html
 */
export type UpdateDefaultReactionType = {
	"@type": "updateDefaultReactionType";
	/** The new type of the default reaction */
	reaction_type: ReactionType;
};

/**
 * The type of default paid reaction has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_default_paid_reaction_type.html
 */
export type UpdateDefaultPaidReactionType = {
	"@type": "updateDefaultPaidReactionType";
	/** The new type of the default paid reaction */
	type: PaidReactionType;
};

/**
 * Tags used in Saved Messages or a Saved Messages topic have changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_saved_messages_tags.html
 */
export type UpdateSavedMessagesTags = {
	"@type": "updateSavedMessagesTags";
	/** Identifier of Saved Messages topic which tags were changed; 0 if tags for the whole chat has changed */
	saved_messages_topic_id: number;
	/** The new tags */
	tags: SavedMessagesTags;
};

/**
 * The list of messages with active live location that need to be updated by the application has changed. The list is persistent across application restarts only if the message database is used
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_active_live_location_messages.html
 */
export type UpdateActiveLiveLocationMessages = {
	"@type": "updateActiveLiveLocationMessages";
	/** The list of messages with active live locations */
	messages: Message[];
};

/**
 * The number of Telegram Stars owned by the current user has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_owned_star_count.html
 */
export type UpdateOwnedStarCount = {
	"@type": "updateOwnedStarCount";
	/** The new amount of owned Telegram Stars */
	star_amount: StarAmount;
};

/**
 * The revenue earned from sponsored messages in a chat has changed. If chat revenue screen is opened, then getChatRevenueTransactions may be called to fetch new transactions
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_revenue_amount.html
 */
export type UpdateChatRevenueAmount = {
	"@type": "updateChatRevenueAmount";
	/** Identifier of the chat */
	chat_id: number;
	/** New amount of earned revenue */
	revenue_amount: ChatRevenueAmount;
};

/**
 * The Telegram Star revenue earned by a bot or a chat has changed. If Telegram Star transaction screen of the chat is opened, then getStarTransactions may be called to fetch new transactions
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_star_revenue_status.html
 */
export type UpdateStarRevenueStatus = {
	"@type": "updateStarRevenueStatus";
	/** Identifier of the owner of the Telegram Stars */
	owner_id: MessageSender;
	/** New Telegram Star revenue status */
	status: StarRevenueStatus;
};

/**
 * The parameters of speech recognition without Telegram Premium subscription has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_speech_recognition_trial.html
 */
export type UpdateSpeechRecognitionTrial = {
	"@type": "updateSpeechRecognitionTrial";
	/** The maximum allowed duration of media for speech recognition without Telegram Premium subscription, in seconds */
	max_media_duration: number;
	/** The total number of allowed speech recognitions per week; 0 if none */
	weekly_count: number;
	/** Number of left speech recognition attempts this week */
	left_count: number;
	/** Point in time (Unix timestamp) when the weekly number of tries will reset; 0 if unknown */
	next_reset_date: number;
};

/**
 * The list of supported dice emojis has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_dice_emojis.html
 */
export type UpdateDiceEmojis = {
	"@type": "updateDiceEmojis";
	/** The new list of supported dice emojis */
	emojis: string[];
};

/**
 * Some animated emoji message was clicked and a big animated sticker must be played if the message is visible on the screen. chatActionWatchingAnimations with the text of the message needs to be sent if the sticker is played
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_animated_emoji_message_clicked.html
 */
export type UpdateAnimatedEmojiMessageClicked = {
	"@type": "updateAnimatedEmojiMessageClicked";
	/** Chat identifier */
	chat_id: number;
	/** Message identifier */
	message_id: number;
	/** The animated sticker to be played */
	sticker: Sticker;
};

/**
 * The parameters of animation search through getOption("animation_search_bot_username") bot has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_animation_search_parameters.html
 */
export type UpdateAnimationSearchParameters = {
	"@type": "updateAnimationSearchParameters";
	/** Name of the animation search provider */
	provider: string;
	/** The new list of emojis suggested for searching */
	emojis: string[];
};

/**
 * The list of suggested to the user actions has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_suggested_actions.html
 */
export type UpdateSuggestedActions = {
	"@type": "updateSuggestedActions";
	/** Added suggested actions */
	added_actions: SuggestedAction[];
	/** Removed suggested actions */
	removed_actions: SuggestedAction[];
};

/**
 * Download or upload file speed for the user was limited, but it can be restored by subscription to Telegram Premium. The notification can be postponed until a being downloaded or uploaded file is visible to the user. Use getOption("premium_download_speedup") or getOption("premium_upload_speedup") to get expected speedup after subscription to Telegram Premium
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_speed_limit_notification.html
 */
export type UpdateSpeedLimitNotification = {
	"@type": "updateSpeedLimitNotification";
	/** True, if upload speed was limited; false, if download speed was limited */
	is_upload: boolean;
};

/**
 * The list of contacts that had birthdays recently or will have birthday soon has changed
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_contact_close_birthdays.html
 */
export type UpdateContactCloseBirthdays = {
	"@type": "updateContactCloseBirthdays";
	/** List of contact users with close birthday */
	close_birthday_users: CloseBirthdayUser[];
};

/**
 * Autosave settings for some type of chats were updated
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_autosave_settings.html
 */
export type UpdateAutosaveSettings = {
	"@type": "updateAutosaveSettings";
	/** Type of chats for which autosave settings were updated */
	scope: AutosaveSettingsScope;
	/** The new autosave settings; may be null if the settings are reset to default */
	settings?: ScopeAutosaveSettings;
};

/**
 * A business connection has changed; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_business_connection.html
 */
export type UpdateBusinessConnection = {
	"@type": "updateBusinessConnection";
	/** New data about the connection */
	connection: BusinessConnection;
};

/**
 * A new message was added to a business account; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_new_business_message.html
 */
export type UpdateNewBusinessMessage = {
	"@type": "updateNewBusinessMessage";
	/** Unique identifier of the business connection */
	connection_id: string;
	/** The new message */
	message: BusinessMessage;
};

/**
 * A message in a business account was edited; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_business_message_edited.html
 */
export type UpdateBusinessMessageEdited = {
	"@type": "updateBusinessMessageEdited";
	/** Unique identifier of the business connection */
	connection_id: string;
	/** The edited message */
	message: BusinessMessage;
};

/**
 * Messages in a business account were deleted; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_business_messages_deleted.html
 */
export type UpdateBusinessMessagesDeleted = {
	"@type": "updateBusinessMessagesDeleted";
	/** Unique identifier of the business connection */
	connection_id: string;
	/** Identifier of a chat in the business account in which messages were deleted */
	chat_id: number;
	/** Unique message identifiers of the deleted messages */
	message_ids: number[];
};

/**
 * A new incoming inline query; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_new_inline_query.html
 */
export type UpdateNewInlineQuery = {
	"@type": "updateNewInlineQuery";
	/** Unique query identifier */
	id: string;
	/** Identifier of the user who sent the query */
	sender_user_id: number;
	/** User location; may be null */
	user_location?: Location;
	/** The type of the chat from which the query originated; may be null if unknown */
	chat_type?: ChatType;
	/** Text of the query */
	query: string;
	/** Offset of the first entry to return */
	offset: string;
};

/**
 * The user has chosen a result of an inline query; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_new_chosen_inline_result.html
 */
export type UpdateNewChosenInlineResult = {
	"@type": "updateNewChosenInlineResult";
	/** Identifier of the user who sent the query */
	sender_user_id: number;
	/** User location; may be null */
	user_location?: Location;
	/** Text of the query */
	query: string;
	/** Identifier of the chosen result */
	result_id: string;
	/** Identifier of the sent inline message, if known */
	inline_message_id: string;
};

/**
 * A new incoming callback query; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_new_callback_query.html
 */
export type UpdateNewCallbackQuery = {
	"@type": "updateNewCallbackQuery";
	/** Unique query identifier */
	id: string;
	/** Identifier of the user who sent the query */
	sender_user_id: number;
	/** Identifier of the chat where the query was sent */
	chat_id: number;
	/** Identifier of the message from which the query originated */
	message_id: number;
	/** Identifier that uniquely corresponds to the chat to which the message was sent */
	chat_instance: string;
	/** Query payload */
	payload: CallbackQueryPayload;
};

/**
 * A new incoming callback query from a message sent via a bot; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_new_inline_callback_query.html
 */
export type UpdateNewInlineCallbackQuery = {
	"@type": "updateNewInlineCallbackQuery";
	/** Unique query identifier */
	id: string;
	/** Identifier of the user who sent the query */
	sender_user_id: number;
	/** Identifier of the inline message from which the query originated */
	inline_message_id: string;
	/** An identifier uniquely corresponding to the chat a message was sent to */
	chat_instance: string;
	/** Query payload */
	payload: CallbackQueryPayload;
};

/**
 * A new incoming callback query from a business message; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_new_business_callback_query.html
 */
export type UpdateNewBusinessCallbackQuery = {
	"@type": "updateNewBusinessCallbackQuery";
	/** Unique query identifier */
	id: string;
	/** Identifier of the user who sent the query */
	sender_user_id: number;
	/** Unique identifier of the business connection */
	connection_id: string;
	/** The message from the business account from which the query originated */
	message: BusinessMessage;
	/** An identifier uniquely corresponding to the chat a message was sent to */
	chat_instance: string;
	/** Query payload */
	payload: CallbackQueryPayload;
};

/**
 * A new incoming shipping query; for bots only. Only for invoices with flexible price
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_new_shipping_query.html
 */
export type UpdateNewShippingQuery = {
	"@type": "updateNewShippingQuery";
	/** Unique query identifier */
	id: string;
	/** Identifier of the user who sent the query */
	sender_user_id: number;
	/** Invoice payload */
	invoice_payload: string;
	/** User shipping address */
	shipping_address: Address;
};

/**
 * A new incoming pre-checkout query; for bots only. Contains full information about a checkout
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_new_pre_checkout_query.html
 */
export type UpdateNewPreCheckoutQuery = {
	"@type": "updateNewPreCheckoutQuery";
	/** Unique query identifier */
	id: string;
	/** Identifier of the user who sent the query */
	sender_user_id: number;
	/** Currency for the product price */
	currency: string;
	/** Total price for the product, in the smallest units of the currency */
	total_amount: number;
	/** Invoice payload */
	invoice_payload: string;
	/** Identifier of a shipping option chosen by the user; may be empty if not applicable */
	shipping_option_id?: string;
	/** Information about the order; may be null */
	order_info?: OrderInfo;
};

/**
 * A new incoming event; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_new_custom_event.html
 */
export type UpdateNewCustomEvent = {
	"@type": "updateNewCustomEvent";
	/** A JSON-serialized event */
	event: string;
};

/**
 * A new incoming query; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_new_custom_query.html
 */
export type UpdateNewCustomQuery = {
	"@type": "updateNewCustomQuery";
	/** The query identifier */
	id: string;
	/** JSON-serialized query data */
	data: string;
	/** Query timeout */
	timeout: number;
};

/**
 * A poll was updated; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_poll.html
 */
export type UpdatePoll = {
	"@type": "updatePoll";
	/** New data about the poll */
	poll: Poll;
};

/**
 * A user changed the answer to a poll; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_poll_answer.html
 */
export type UpdatePollAnswer = {
	"@type": "updatePollAnswer";
	/** Unique poll identifier */
	poll_id: string;
	/** Identifier of the message sender that changed the answer to the poll */
	voter_id: MessageSender;
	/** 0-based identifiers of answer options, chosen by the user */
	option_ids: number[];
};

/**
 * User rights changed in a chat; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_member.html
 */
export type UpdateChatMember = {
	"@type": "updateChatMember";
	/** Chat identifier */
	chat_id: number;
	/** Identifier of the user, changing the rights */
	actor_user_id: number;
	/** Point in time (Unix timestamp) when the user rights were changed */
	date: number;
	/** If user has joined the chat using an invite link, the invite link; may be null */
	invite_link?: ChatInviteLink;
	/** True, if the user has joined the chat after sending a join request and being approved by an administrator */
	via_join_request: boolean;
	/** True, if the user has joined the chat using an invite link for a chat folder */
	via_chat_folder_invite_link: boolean;
	/** Previous chat member */
	old_chat_member: ChatMember;
	/** New chat member */
	new_chat_member: ChatMember;
};

/**
 * A user sent a join request to a chat; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_new_chat_join_request.html
 */
export type UpdateNewChatJoinRequest = {
	"@type": "updateNewChatJoinRequest";
	/** Chat identifier */
	chat_id: number;
	/** Join request */
	request: ChatJoinRequest;
	/** Chat identifier of the private chat with the user */
	user_chat_id: number;
	/** The invite link, which was used to send join request; may be null */
	invite_link?: ChatInviteLink;
};

/**
 * A chat boost has changed; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_chat_boost.html
 */
export type UpdateChatBoost = {
	"@type": "updateChatBoost";
	/** Chat identifier */
	chat_id: number;
	/** New information about the boost */
	boost: ChatBoost;
};

/**
 * User changed its reactions on a message with public reactions; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_message_reaction.html
 */
export type UpdateMessageReaction = {
	"@type": "updateMessageReaction";
	/** Chat identifier */
	chat_id: number;
	/** Message identifier */
	message_id: number;
	/** Identifier of the user or chat that changed reactions */
	actor_id: MessageSender;
	/** Point in time (Unix timestamp) when the reactions were changed */
	date: number;
	/** Old list of chosen reactions */
	old_reaction_types: ReactionType[];
	/** New list of chosen reactions */
	new_reaction_types: ReactionType[];
};

/**
 * Reactions added to a message with anonymous reactions have changed; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_message_reactions.html
 */
export type UpdateMessageReactions = {
	"@type": "updateMessageReactions";
	/** Chat identifier */
	chat_id: number;
	/** Message identifier */
	message_id: number;
	/** Point in time (Unix timestamp) when the reactions were changed */
	date: number;
	/** The list of reactions added to the message */
	reactions: MessageReaction[];
};

/**
 * Paid media were purchased by a user; for bots only
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1update_paid_media_purchased.html
 */
export type UpdatePaidMediaPurchased = {
	"@type": "updatePaidMediaPurchased";
	/** User identifier */
	user_id: number;
	/** Bot-specified payload for the paid media */
	payload: string;
};

/**
 * Contains a list of updates
 * @see https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1updates.html
 */
export type Updates = {
	"@type": "updates";
	/** List of updates */
	updates: Update[];
};

export type AuthenticationCodeType =
	| AuthenticationCodeTypeTelegramMessage
	| AuthenticationCodeTypeSms
	| AuthenticationCodeTypeSmsWord
	| AuthenticationCodeTypeSmsPhrase
	| AuthenticationCodeTypeCall
	| AuthenticationCodeTypeFlashCall
	| AuthenticationCodeTypeMissedCall
	| AuthenticationCodeTypeFragment
	| AuthenticationCodeTypeFirebaseAndroid
	| AuthenticationCodeTypeFirebaseIos;

export type EmailAddressAuthentication =
	| EmailAddressAuthenticationCode
	| EmailAddressAuthenticationAppleId
	| EmailAddressAuthenticationGoogleId;

export type EmailAddressResetState =
	| EmailAddressResetStateAvailable
	| EmailAddressResetStatePending;

export type AuthorizationState =
	| AuthorizationStateWaitTdlibParameters
	| AuthorizationStateWaitPhoneNumber
	| AuthorizationStateWaitPremiumPurchase
	| AuthorizationStateWaitEmailAddress
	| AuthorizationStateWaitEmailCode
	| AuthorizationStateWaitCode
	| AuthorizationStateWaitOtherDeviceConfirmation
	| AuthorizationStateWaitRegistration
	| AuthorizationStateWaitPassword
	| AuthorizationStateReady
	| AuthorizationStateLoggingOut
	| AuthorizationStateClosing
	| AuthorizationStateClosed;

export type FirebaseDeviceVerificationParameters =
	| FirebaseDeviceVerificationParametersSafetyNet
	| FirebaseDeviceVerificationParametersPlayIntegrity;

export type InputFile =
	| InputFileId
	| InputFileRemote
	| InputFileLocal
	| InputFileGenerated;

export type ThumbnailFormat =
	| ThumbnailFormatJpeg
	| ThumbnailFormatGif
	| ThumbnailFormatMpeg4
	| ThumbnailFormatPng
	| ThumbnailFormatTgs
	| ThumbnailFormatWebm
	| ThumbnailFormatWebp;

export type MaskPoint =
	| MaskPointForehead
	| MaskPointEyes
	| MaskPointMouth
	| MaskPointChin;

export type StickerFormat =
	| StickerFormatWebp
	| StickerFormatTgs
	| StickerFormatWebm;

export type StickerType =
	| StickerTypeRegular
	| StickerTypeMask
	| StickerTypeCustomEmoji;

export type StickerFullType =
	| StickerFullTypeRegular
	| StickerFullTypeMask
	| StickerFullTypeCustomEmoji;

export type PollType = PollTypeRegular | PollTypeQuiz;

export type UserType =
	| UserTypeRegular
	| UserTypeDeleted
	| UserTypeBot
	| UserTypeUnknown;

export type BusinessAwayMessageSchedule =
	| BusinessAwayMessageScheduleAlways
	| BusinessAwayMessageScheduleOutsideOfOpeningHours
	| BusinessAwayMessageScheduleCustom;

export type ChatPhotoStickerType =
	| ChatPhotoStickerTypeRegularOrMask
	| ChatPhotoStickerTypeCustomEmoji;

export type InputChatPhoto =
	| InputChatPhotoPrevious
	| InputChatPhotoStatic
	| InputChatPhotoAnimation
	| InputChatPhotoSticker;

export type StarSubscriptionType =
	| StarSubscriptionTypeChannel
	| StarSubscriptionTypeBot;

export type AffiliateType =
	| AffiliateTypeCurrentUser
	| AffiliateTypeBot
	| AffiliateTypeChannel;

export type AffiliateProgramSortOrder =
	| AffiliateProgramSortOrderProfitability
	| AffiliateProgramSortOrderCreationDate
	| AffiliateProgramSortOrderRevenue;

export type UpgradedGiftAttributeId =
	| UpgradedGiftAttributeIdModel
	| UpgradedGiftAttributeIdSymbol
	| UpgradedGiftAttributeIdBackdrop;

export type GiftForResaleOrder =
	| GiftForResaleOrderPrice
	| GiftForResaleOrderPriceChangeDate
	| GiftForResaleOrderNumber;

export type SentGift = SentGiftRegular | SentGiftUpgraded;

export type StarTransactionDirection =
	| StarTransactionDirectionIncoming
	| StarTransactionDirectionOutgoing;

export type StarTransactionType =
	| StarTransactionTypePremiumBotDeposit
	| StarTransactionTypeAppStoreDeposit
	| StarTransactionTypeGooglePlayDeposit
	| StarTransactionTypeFragmentDeposit
	| StarTransactionTypeUserDeposit
	| StarTransactionTypeGiveawayDeposit
	| StarTransactionTypeFragmentWithdrawal
	| StarTransactionTypeTelegramAdsWithdrawal
	| StarTransactionTypeTelegramApiUsage
	| StarTransactionTypeBotPaidMediaPurchase
	| StarTransactionTypeBotPaidMediaSale
	| StarTransactionTypeChannelPaidMediaPurchase
	| StarTransactionTypeChannelPaidMediaSale
	| StarTransactionTypeBotInvoicePurchase
	| StarTransactionTypeBotInvoiceSale
	| StarTransactionTypeBotSubscriptionPurchase
	| StarTransactionTypeBotSubscriptionSale
	| StarTransactionTypeChannelSubscriptionPurchase
	| StarTransactionTypeChannelSubscriptionSale
	| StarTransactionTypeGiftPurchase
	| StarTransactionTypeGiftTransfer
	| StarTransactionTypeGiftSale
	| StarTransactionTypeGiftUpgrade
	| StarTransactionTypeUpgradedGiftPurchase
	| StarTransactionTypeUpgradedGiftSale
	| StarTransactionTypeChannelPaidReactionSend
	| StarTransactionTypeChannelPaidReactionReceive
	| StarTransactionTypeAffiliateProgramCommission
	| StarTransactionTypePaidMessageSend
	| StarTransactionTypePaidMessageReceive
	| StarTransactionTypePremiumPurchase
	| StarTransactionTypeBusinessBotTransferSend
	| StarTransactionTypeBusinessBotTransferReceive
	| StarTransactionTypeUnsupported;

export type GiveawayParticipantStatus =
	| GiveawayParticipantStatusEligible
	| GiveawayParticipantStatusParticipating
	| GiveawayParticipantStatusAlreadyWasMember
	| GiveawayParticipantStatusAdministrator
	| GiveawayParticipantStatusDisallowedCountry;

export type GiveawayInfo = GiveawayInfoOngoing | GiveawayInfoCompleted;

export type GiveawayPrize = GiveawayPrizePremium | GiveawayPrizeStars;

export type EmojiStatusType =
	| EmojiStatusTypeCustomEmoji
	| EmojiStatusTypeUpgradedGift;

export type ChatMemberStatus =
	| ChatMemberStatusCreator
	| ChatMemberStatusAdministrator
	| ChatMemberStatusMember
	| ChatMemberStatusRestricted
	| ChatMemberStatusLeft
	| ChatMemberStatusBanned;

export type ChatMembersFilter =
	| ChatMembersFilterContacts
	| ChatMembersFilterAdministrators
	| ChatMembersFilterMembers
	| ChatMembersFilterMention
	| ChatMembersFilterRestricted
	| ChatMembersFilterBanned
	| ChatMembersFilterBots;

export type SupergroupMembersFilter =
	| SupergroupMembersFilterRecent
	| SupergroupMembersFilterContacts
	| SupergroupMembersFilterAdministrators
	| SupergroupMembersFilterSearch
	| SupergroupMembersFilterRestricted
	| SupergroupMembersFilterBanned
	| SupergroupMembersFilterMention
	| SupergroupMembersFilterBots;

export type InviteLinkChatType =
	| InviteLinkChatTypeBasicGroup
	| InviteLinkChatTypeSupergroup
	| InviteLinkChatTypeChannel;

export type SecretChatState =
	| SecretChatStatePending
	| SecretChatStateReady
	| SecretChatStateClosed;

export type MessageSender = MessageSenderUser | MessageSenderChat;

export type MessageReadDate =
	| MessageReadDateRead
	| MessageReadDateUnread
	| MessageReadDateTooOld
	| MessageReadDateUserPrivacyRestricted
	| MessageReadDateMyPrivacyRestricted;

export type MessageOrigin =
	| MessageOriginUser
	| MessageOriginHiddenUser
	| MessageOriginChat
	| MessageOriginChannel;

export type ReactionType =
	| ReactionTypeEmoji
	| ReactionTypeCustomEmoji
	| ReactionTypePaid;

export type PaidReactionType =
	| PaidReactionTypeRegular
	| PaidReactionTypeAnonymous
	| PaidReactionTypeChat;

export type MessageTopic =
	| MessageTopicForum
	| MessageTopicDirectMessages
	| MessageTopicSavedMessages;

export type MessageEffectType =
	| MessageEffectTypeEmojiReaction
	| MessageEffectTypePremiumSticker;

export type MessageSendingState =
	| MessageSendingStatePending
	| MessageSendingStateFailed;

export type MessageReplyTo = MessageReplyToMessage | MessageReplyToStory;

export type InputMessageReplyTo =
	| InputMessageReplyToMessage
	| InputMessageReplyToExternalMessage
	| InputMessageReplyToStory;

export type MessageSource =
	| MessageSourceChatHistory
	| MessageSourceMessageThreadHistory
	| MessageSourceForumTopicHistory
	| MessageSourceDirectMessagesChatTopicHistory
	| MessageSourceHistoryPreview
	| MessageSourceChatList
	| MessageSourceSearch
	| MessageSourceChatEventLog
	| MessageSourceNotification
	| MessageSourceScreenshot
	| MessageSourceOther;

export type ReportSponsoredResult =
	| ReportSponsoredResultOk
	| ReportSponsoredResultFailed
	| ReportSponsoredResultOptionRequired
	| ReportSponsoredResultAdsHidden
	| ReportSponsoredResultPremiumRequired;

export type NotificationSettingsScope =
	| NotificationSettingsScopePrivateChats
	| NotificationSettingsScopeGroupChats
	| NotificationSettingsScopeChannelChats;

export type ReactionNotificationSource =
	| ReactionNotificationSourceNone
	| ReactionNotificationSourceContacts
	| ReactionNotificationSourceAll;

export type ChatType =
	| ChatTypePrivate
	| ChatTypeBasicGroup
	| ChatTypeSupergroup
	| ChatTypeSecret;

export type ChatList = ChatListMain | ChatListArchive | ChatListFolder;

export type ChatSource =
	| ChatSourceMtprotoProxy
	| ChatSourcePublicServiceAnnouncement;

export type ChatAvailableReactions =
	| ChatAvailableReactionsAll
	| ChatAvailableReactionsSome;

export type PublicChatType =
	| PublicChatTypeHasUsername
	| PublicChatTypeIsLocationBased;

export type ChatActionBar =
	| ChatActionBarReportSpam
	| ChatActionBarInviteMembers
	| ChatActionBarReportAddBlock
	| ChatActionBarAddContact
	| ChatActionBarSharePhoneNumber
	| ChatActionBarJoinRequest;

export type KeyboardButtonType =
	| KeyboardButtonTypeText
	| KeyboardButtonTypeRequestPhoneNumber
	| KeyboardButtonTypeRequestLocation
	| KeyboardButtonTypeRequestPoll
	| KeyboardButtonTypeRequestUsers
	| KeyboardButtonTypeRequestChat
	| KeyboardButtonTypeWebApp;

export type InlineKeyboardButtonType =
	| InlineKeyboardButtonTypeUrl
	| InlineKeyboardButtonTypeLoginUrl
	| InlineKeyboardButtonTypeWebApp
	| InlineKeyboardButtonTypeCallback
	| InlineKeyboardButtonTypeCallbackWithPassword
	| InlineKeyboardButtonTypeCallbackGame
	| InlineKeyboardButtonTypeSwitchInline
	| InlineKeyboardButtonTypeBuy
	| InlineKeyboardButtonTypeUser
	| InlineKeyboardButtonTypeCopyText;

export type ReplyMarkup =
	| ReplyMarkupRemoveKeyboard
	| ReplyMarkupForceReply
	| ReplyMarkupShowKeyboard
	| ReplyMarkupInlineKeyboard;

export type LoginUrlInfo = LoginUrlInfoOpen | LoginUrlInfoRequestConfirmation;

export type WebAppOpenMode =
	| WebAppOpenModeCompact
	| WebAppOpenModeFullSize
	| WebAppOpenModeFullScreen;

export type SavedMessagesTopicType =
	| SavedMessagesTopicTypeMyNotes
	| SavedMessagesTopicTypeAuthorHidden
	| SavedMessagesTopicTypeSavedFromChat;

export type RichText =
	| RichTextPlain
	| RichTextBold
	| RichTextItalic
	| RichTextUnderline
	| RichTextStrikethrough
	| RichTextFixed
	| RichTextUrl
	| RichTextEmailAddress
	| RichTextSubscript
	| RichTextSuperscript
	| RichTextMarked
	| RichTextPhoneNumber
	| RichTextIcon
	| RichTextReference
	| RichTextAnchor
	| RichTextAnchorLink
	| RichTexts;

export type PageBlockHorizontalAlignment =
	| PageBlockHorizontalAlignmentLeft
	| PageBlockHorizontalAlignmentCenter
	| PageBlockHorizontalAlignmentRight;

export type PageBlockVerticalAlignment =
	| PageBlockVerticalAlignmentTop
	| PageBlockVerticalAlignmentMiddle
	| PageBlockVerticalAlignmentBottom;

export type PageBlock =
	| PageBlockTitle
	| PageBlockSubtitle
	| PageBlockAuthorDate
	| PageBlockHeader
	| PageBlockSubheader
	| PageBlockKicker
	| PageBlockParagraph
	| PageBlockPreformatted
	| PageBlockFooter
	| PageBlockDivider
	| PageBlockAnchor
	| PageBlockList
	| PageBlockBlockQuote
	| PageBlockPullQuote
	| PageBlockAnimation
	| PageBlockAudio
	| PageBlockPhoto
	| PageBlockVideo
	| PageBlockVoiceNote
	| PageBlockCover
	| PageBlockEmbedded
	| PageBlockEmbeddedPost
	| PageBlockCollage
	| PageBlockSlideshow
	| PageBlockChatLink
	| PageBlockTable
	| PageBlockDetails
	| PageBlockRelatedArticles
	| PageBlockMap;

export type LinkPreviewAlbumMedia =
	| LinkPreviewAlbumMediaPhoto
	| LinkPreviewAlbumMediaVideo;

export type LinkPreviewType =
	| LinkPreviewTypeAlbum
	| LinkPreviewTypeAnimation
	| LinkPreviewTypeApp
	| LinkPreviewTypeArticle
	| LinkPreviewTypeAudio
	| LinkPreviewTypeBackground
	| LinkPreviewTypeChannelBoost
	| LinkPreviewTypeChat
	| LinkPreviewTypeDocument
	| LinkPreviewTypeEmbeddedAnimationPlayer
	| LinkPreviewTypeEmbeddedAudioPlayer
	| LinkPreviewTypeEmbeddedVideoPlayer
	| LinkPreviewTypeExternalAudio
	| LinkPreviewTypeExternalVideo
	| LinkPreviewTypeGroupCall
	| LinkPreviewTypeInvoice
	| LinkPreviewTypeMessage
	| LinkPreviewTypePhoto
	| LinkPreviewTypePremiumGiftCode
	| LinkPreviewTypeShareableChatFolder
	| LinkPreviewTypeSticker
	| LinkPreviewTypeStickerSet
	| LinkPreviewTypeStory
	| LinkPreviewTypeSupergroupBoost
	| LinkPreviewTypeTheme
	| LinkPreviewTypeUnsupported
	| LinkPreviewTypeUpgradedGift
	| LinkPreviewTypeUser
	| LinkPreviewTypeVideo
	| LinkPreviewTypeVideoChat
	| LinkPreviewTypeVideoNote
	| LinkPreviewTypeVoiceNote
	| LinkPreviewTypeWebApp;

export type CollectibleItemType =
	| CollectibleItemTypeUsername
	| CollectibleItemTypePhoneNumber;

export type InputCredentials =
	| InputCredentialsSaved
	| InputCredentialsNew
	| InputCredentialsApplePay
	| InputCredentialsGooglePay;

export type PaymentProvider =
	| PaymentProviderSmartGlocal
	| PaymentProviderStripe
	| PaymentProviderOther;

export type PaymentFormType =
	| PaymentFormTypeRegular
	| PaymentFormTypeStars
	| PaymentFormTypeStarSubscription;

export type PaymentReceiptType =
	| PaymentReceiptTypeRegular
	| PaymentReceiptTypeStars;

export type InputInvoice =
	| InputInvoiceMessage
	| InputInvoiceName
	| InputInvoiceTelegram;

export type PaidMedia =
	| PaidMediaPreview
	| PaidMediaPhoto
	| PaidMediaVideo
	| PaidMediaUnsupported;

export type PassportElementType =
	| PassportElementTypePersonalDetails
	| PassportElementTypePassport
	| PassportElementTypeDriverLicense
	| PassportElementTypeIdentityCard
	| PassportElementTypeInternalPassport
	| PassportElementTypeAddress
	| PassportElementTypeUtilityBill
	| PassportElementTypeBankStatement
	| PassportElementTypeRentalAgreement
	| PassportElementTypePassportRegistration
	| PassportElementTypeTemporaryRegistration
	| PassportElementTypePhoneNumber
	| PassportElementTypeEmailAddress;

export type PassportElement =
	| PassportElementPersonalDetails
	| PassportElementPassport
	| PassportElementDriverLicense
	| PassportElementIdentityCard
	| PassportElementInternalPassport
	| PassportElementAddress
	| PassportElementUtilityBill
	| PassportElementBankStatement
	| PassportElementRentalAgreement
	| PassportElementPassportRegistration
	| PassportElementTemporaryRegistration
	| PassportElementPhoneNumber
	| PassportElementEmailAddress;

export type InputPassportElement =
	| InputPassportElementPersonalDetails
	| InputPassportElementPassport
	| InputPassportElementDriverLicense
	| InputPassportElementIdentityCard
	| InputPassportElementInternalPassport
	| InputPassportElementAddress
	| InputPassportElementUtilityBill
	| InputPassportElementBankStatement
	| InputPassportElementRentalAgreement
	| InputPassportElementPassportRegistration
	| InputPassportElementTemporaryRegistration
	| InputPassportElementPhoneNumber
	| InputPassportElementEmailAddress;

export type PassportElementErrorSource =
	| PassportElementErrorSourceUnspecified
	| PassportElementErrorSourceDataField
	| PassportElementErrorSourceFrontSide
	| PassportElementErrorSourceReverseSide
	| PassportElementErrorSourceSelfie
	| PassportElementErrorSourceTranslationFile
	| PassportElementErrorSourceTranslationFiles
	| PassportElementErrorSourceFile
	| PassportElementErrorSourceFiles;

export type InputPassportElementErrorSource =
	| InputPassportElementErrorSourceUnspecified
	| InputPassportElementErrorSourceDataField
	| InputPassportElementErrorSourceFrontSide
	| InputPassportElementErrorSourceReverseSide
	| InputPassportElementErrorSourceSelfie
	| InputPassportElementErrorSourceTranslationFile
	| InputPassportElementErrorSourceTranslationFiles
	| InputPassportElementErrorSourceFile
	| InputPassportElementErrorSourceFiles;

export type MessageContent =
	| MessageText
	| MessageAnimation
	| MessageAudio
	| MessageDocument
	| MessagePaidMedia
	| MessagePhoto
	| MessageSticker
	| MessageVideo
	| MessageVideoNote
	| MessageVoiceNote
	| MessageExpiredPhoto
	| MessageExpiredVideo
	| MessageExpiredVideoNote
	| MessageExpiredVoiceNote
	| MessageLocation
	| MessageVenue
	| MessageContact
	| MessageAnimatedEmoji
	| MessageDice
	| MessageGame
	| MessagePoll
	| MessageStory
	| MessageInvoice
	| MessageCall
	| MessageGroupCall
	| MessageVideoChatScheduled
	| MessageVideoChatStarted
	| MessageVideoChatEnded
	| MessageInviteVideoChatParticipants
	| MessageBasicGroupChatCreate
	| MessageSupergroupChatCreate
	| MessageChatChangeTitle
	| MessageChatChangePhoto
	| MessageChatDeletePhoto
	| MessageChatAddMembers
	| MessageChatJoinByLink
	| MessageChatJoinByRequest
	| MessageChatDeleteMember
	| MessageChatUpgradeTo
	| MessageChatUpgradeFrom
	| MessagePinMessage
	| MessageScreenshotTaken
	| MessageChatSetBackground
	| MessageChatSetTheme
	| MessageChatSetMessageAutoDeleteTime
	| MessageChatBoost
	| MessageForumTopicCreated
	| MessageForumTopicEdited
	| MessageForumTopicIsClosedToggled
	| MessageForumTopicIsHiddenToggled
	| MessageSuggestProfilePhoto
	| MessageCustomServiceAction
	| MessageGameScore
	| MessagePaymentSuccessful
	| MessagePaymentSuccessfulBot
	| MessagePaymentRefunded
	| MessageGiftedPremium
	| MessagePremiumGiftCode
	| MessageGiveawayCreated
	| MessageGiveaway
	| MessageGiveawayCompleted
	| MessageGiveawayWinners
	| MessageGiftedStars
	| MessageGiveawayPrizeStars
	| MessageGift
	| MessageUpgradedGift
	| MessageRefundedUpgradedGift
	| MessagePaidMessagesRefunded
	| MessagePaidMessagePriceChanged
	| MessageDirectMessagePriceChanged
	| MessageContactRegistered
	| MessageUsersShared
	| MessageChatShared
	| MessageBotWriteAccessAllowed
	| MessageWebAppDataSent
	| MessageWebAppDataReceived
	| MessagePassportDataSent
	| MessagePassportDataReceived
	| MessageProximityAlertTriggered
	| MessageUnsupported;

export type TextEntityType =
	| TextEntityTypeMention
	| TextEntityTypeHashtag
	| TextEntityTypeCashtag
	| TextEntityTypeBotCommand
	| TextEntityTypeUrl
	| TextEntityTypeEmailAddress
	| TextEntityTypePhoneNumber
	| TextEntityTypeBankCardNumber
	| TextEntityTypeBold
	| TextEntityTypeItalic
	| TextEntityTypeUnderline
	| TextEntityTypeStrikethrough
	| TextEntityTypeSpoiler
	| TextEntityTypeCode
	| TextEntityTypePre
	| TextEntityTypePreCode
	| TextEntityTypeBlockQuote
	| TextEntityTypeExpandableBlockQuote
	| TextEntityTypeTextUrl
	| TextEntityTypeMentionName
	| TextEntityTypeCustomEmoji
	| TextEntityTypeMediaTimestamp;

export type InputPaidMediaType =
	| InputPaidMediaTypePhoto
	| InputPaidMediaTypeVideo;

export type MessageSchedulingState =
	| MessageSchedulingStateSendAtDate
	| MessageSchedulingStateSendWhenOnline
	| MessageSchedulingStateSendWhenVideoProcessed;

export type MessageSelfDestructType =
	| MessageSelfDestructTypeTimer
	| MessageSelfDestructTypeImmediately;

export type InputMessageContent =
	| InputMessageText
	| InputMessageAnimation
	| InputMessageAudio
	| InputMessageDocument
	| InputMessagePaidMedia
	| InputMessagePhoto
	| InputMessageSticker
	| InputMessageVideo
	| InputMessageVideoNote
	| InputMessageVoiceNote
	| InputMessageLocation
	| InputMessageVenue
	| InputMessageContact
	| InputMessageDice
	| InputMessageGame
	| InputMessageInvoice
	| InputMessagePoll
	| InputMessageStory
	| InputMessageForwarded;

export type SearchMessagesFilter =
	| SearchMessagesFilterEmpty
	| SearchMessagesFilterAnimation
	| SearchMessagesFilterAudio
	| SearchMessagesFilterDocument
	| SearchMessagesFilterPhoto
	| SearchMessagesFilterVideo
	| SearchMessagesFilterVoiceNote
	| SearchMessagesFilterPhotoAndVideo
	| SearchMessagesFilterUrl
	| SearchMessagesFilterChatPhoto
	| SearchMessagesFilterVideoNote
	| SearchMessagesFilterVoiceAndVideoNote
	| SearchMessagesFilterMention
	| SearchMessagesFilterUnreadMention
	| SearchMessagesFilterUnreadReaction
	| SearchMessagesFilterFailedToSend
	| SearchMessagesFilterPinned;

export type SearchMessagesChatTypeFilter =
	| SearchMessagesChatTypeFilterPrivate
	| SearchMessagesChatTypeFilterGroup
	| SearchMessagesChatTypeFilterChannel;

export type ChatAction =
	| ChatActionTyping
	| ChatActionRecordingVideo
	| ChatActionUploadingVideo
	| ChatActionRecordingVoiceNote
	| ChatActionUploadingVoiceNote
	| ChatActionUploadingPhoto
	| ChatActionUploadingDocument
	| ChatActionChoosingSticker
	| ChatActionChoosingLocation
	| ChatActionChoosingContact
	| ChatActionStartPlayingGame
	| ChatActionRecordingVideoNote
	| ChatActionUploadingVideoNote
	| ChatActionWatchingAnimations
	| ChatActionCancel;

export type UserStatus =
	| UserStatusEmpty
	| UserStatusOnline
	| UserStatusOffline
	| UserStatusRecently
	| UserStatusLastWeek
	| UserStatusLastMonth;

export type EmojiCategorySource =
	| EmojiCategorySourceSearch
	| EmojiCategorySourcePremium;

export type EmojiCategoryType =
	| EmojiCategoryTypeDefault
	| EmojiCategoryTypeRegularStickers
	| EmojiCategoryTypeEmojiStatus
	| EmojiCategoryTypeChatPhoto;

export type StoryAreaType =
	| StoryAreaTypeLocation
	| StoryAreaTypeVenue
	| StoryAreaTypeSuggestedReaction
	| StoryAreaTypeMessage
	| StoryAreaTypeLink
	| StoryAreaTypeWeather
	| StoryAreaTypeUpgradedGift;

export type InputStoryAreaType =
	| InputStoryAreaTypeLocation
	| InputStoryAreaTypeFoundVenue
	| InputStoryAreaTypePreviousVenue
	| InputStoryAreaTypeSuggestedReaction
	| InputStoryAreaTypeMessage
	| InputStoryAreaTypeLink
	| InputStoryAreaTypeWeather
	| InputStoryAreaTypeUpgradedGift;

export type StoryContent =
	| StoryContentPhoto
	| StoryContentVideo
	| StoryContentUnsupported;

export type InputStoryContent = InputStoryContentPhoto | InputStoryContentVideo;

export type StoryList = StoryListMain | StoryListArchive;

export type StoryOrigin = StoryOriginPublicStory | StoryOriginHiddenUser;

export type StoryInteractionType =
	| StoryInteractionTypeView
	| StoryInteractionTypeForward
	| StoryInteractionTypeRepost;

export type PublicForward = PublicForwardMessage | PublicForwardStory;

export type ChatBoostSource =
	| ChatBoostSourceGiftCode
	| ChatBoostSourceGiveaway
	| ChatBoostSourcePremium;

export type ResendCodeReason =
	| ResendCodeReasonUserRequest
	| ResendCodeReasonVerificationFailed;

export type CallDiscardReason =
	| CallDiscardReasonEmpty
	| CallDiscardReasonMissed
	| CallDiscardReasonDeclined
	| CallDiscardReasonDisconnected
	| CallDiscardReasonHungUp
	| CallDiscardReasonUpgradeToGroupCall;

export type CallServerType =
	| CallServerTypeTelegramReflector
	| CallServerTypeWebrtc;

export type CallState =
	| CallStatePending
	| CallStateExchangingKeys
	| CallStateReady
	| CallStateHangingUp
	| CallStateDiscarded
	| CallStateError;

export type GroupCallVideoQuality =
	| GroupCallVideoQualityThumbnail
	| GroupCallVideoQualityMedium
	| GroupCallVideoQualityFull;

export type InviteGroupCallParticipantResult =
	| InviteGroupCallParticipantResultUserPrivacyRestricted
	| InviteGroupCallParticipantResultUserAlreadyParticipant
	| InviteGroupCallParticipantResultUserWasBanned
	| InviteGroupCallParticipantResultSuccess;

export type GroupCallDataChannel =
	| GroupCallDataChannelMain
	| GroupCallDataChannelScreenSharing;

export type InputGroupCall = InputGroupCallLink | InputGroupCallMessage;

export type CallProblem =
	| CallProblemEcho
	| CallProblemNoise
	| CallProblemInterruptions
	| CallProblemDistortedSpeech
	| CallProblemSilentLocal
	| CallProblemSilentRemote
	| CallProblemDropped
	| CallProblemDistortedVideo
	| CallProblemPixelatedVideo;

export type FirebaseAuthenticationSettings =
	| FirebaseAuthenticationSettingsAndroid
	| FirebaseAuthenticationSettingsIos;

export type ReactionUnavailabilityReason =
	| ReactionUnavailabilityReasonAnonymousAdministrator
	| ReactionUnavailabilityReasonGuest;

export type DiceStickers = DiceStickersRegular | DiceStickersSlotMachine;

export type SpeechRecognitionResult =
	| SpeechRecognitionResultPending
	| SpeechRecognitionResultText
	| SpeechRecognitionResultError;

export type BotWriteAccessAllowReason =
	| BotWriteAccessAllowReasonConnectedWebsite
	| BotWriteAccessAllowReasonAddedToAttachmentMenu
	| BotWriteAccessAllowReasonLaunchedWebApp
	| BotWriteAccessAllowReasonAcceptedRequest;

export type TargetChat =
	| TargetChatCurrent
	| TargetChatChosen
	| TargetChatInternalLink;

export type InputInlineQueryResult =
	| InputInlineQueryResultAnimation
	| InputInlineQueryResultArticle
	| InputInlineQueryResultAudio
	| InputInlineQueryResultContact
	| InputInlineQueryResultDocument
	| InputInlineQueryResultGame
	| InputInlineQueryResultLocation
	| InputInlineQueryResultPhoto
	| InputInlineQueryResultSticker
	| InputInlineQueryResultVenue
	| InputInlineQueryResultVideo
	| InputInlineQueryResultVoiceNote;

export type InlineQueryResult =
	| InlineQueryResultArticle
	| InlineQueryResultContact
	| InlineQueryResultLocation
	| InlineQueryResultVenue
	| InlineQueryResultGame
	| InlineQueryResultAnimation
	| InlineQueryResultAudio
	| InlineQueryResultDocument
	| InlineQueryResultPhoto
	| InlineQueryResultSticker
	| InlineQueryResultVideo
	| InlineQueryResultVoiceNote;

export type InlineQueryResultsButtonType =
	| InlineQueryResultsButtonTypeStartBot
	| InlineQueryResultsButtonTypeWebApp;

export type CallbackQueryPayload =
	| CallbackQueryPayloadData
	| CallbackQueryPayloadDataWithPassword
	| CallbackQueryPayloadGame;

export type ChatEventAction =
	| ChatEventMessageEdited
	| ChatEventMessageDeleted
	| ChatEventMessagePinned
	| ChatEventMessageUnpinned
	| ChatEventPollStopped
	| ChatEventMemberJoined
	| ChatEventMemberJoinedByInviteLink
	| ChatEventMemberJoinedByRequest
	| ChatEventMemberInvited
	| ChatEventMemberLeft
	| ChatEventMemberPromoted
	| ChatEventMemberRestricted
	| ChatEventMemberSubscriptionExtended
	| ChatEventAvailableReactionsChanged
	| ChatEventBackgroundChanged
	| ChatEventDescriptionChanged
	| ChatEventEmojiStatusChanged
	| ChatEventLinkedChatChanged
	| ChatEventLocationChanged
	| ChatEventMessageAutoDeleteTimeChanged
	| ChatEventPermissionsChanged
	| ChatEventPhotoChanged
	| ChatEventSlowModeDelayChanged
	| ChatEventStickerSetChanged
	| ChatEventCustomEmojiStickerSetChanged
	| ChatEventTitleChanged
	| ChatEventUsernameChanged
	| ChatEventActiveUsernamesChanged
	| ChatEventAccentColorChanged
	| ChatEventProfileAccentColorChanged
	| ChatEventHasProtectedContentToggled
	| ChatEventInvitesToggled
	| ChatEventIsAllHistoryAvailableToggled
	| ChatEventHasAggressiveAntiSpamEnabledToggled
	| ChatEventSignMessagesToggled
	| ChatEventShowMessageSenderToggled
	| ChatEventAutomaticTranslationToggled
	| ChatEventInviteLinkEdited
	| ChatEventInviteLinkRevoked
	| ChatEventInviteLinkDeleted
	| ChatEventVideoChatCreated
	| ChatEventVideoChatEnded
	| ChatEventVideoChatMuteNewParticipantsToggled
	| ChatEventVideoChatParticipantIsMutedToggled
	| ChatEventVideoChatParticipantVolumeLevelChanged
	| ChatEventIsForumToggled
	| ChatEventForumTopicCreated
	| ChatEventForumTopicEdited
	| ChatEventForumTopicToggleIsClosed
	| ChatEventForumTopicToggleIsHidden
	| ChatEventForumTopicDeleted
	| ChatEventForumTopicPinned;

export type LanguagePackStringValue =
	| LanguagePackStringValueOrdinary
	| LanguagePackStringValuePluralized
	| LanguagePackStringValueDeleted;

export type PremiumLimitType =
	| PremiumLimitTypeSupergroupCount
	| PremiumLimitTypePinnedChatCount
	| PremiumLimitTypeCreatedPublicChatCount
	| PremiumLimitTypeSavedAnimationCount
	| PremiumLimitTypeFavoriteStickerCount
	| PremiumLimitTypeChatFolderCount
	| PremiumLimitTypeChatFolderChosenChatCount
	| PremiumLimitTypePinnedArchivedChatCount
	| PremiumLimitTypePinnedSavedMessagesTopicCount
	| PremiumLimitTypeCaptionLength
	| PremiumLimitTypeBioLength
	| PremiumLimitTypeChatFolderInviteLinkCount
	| PremiumLimitTypeShareableChatFolderCount
	| PremiumLimitTypeActiveStoryCount
	| PremiumLimitTypeWeeklyPostedStoryCount
	| PremiumLimitTypeMonthlyPostedStoryCount
	| PremiumLimitTypeStoryCaptionLength
	| PremiumLimitTypeStorySuggestedReactionAreaCount
	| PremiumLimitTypeSimilarChatCount;

export type PremiumFeature =
	| PremiumFeatureIncreasedLimits
	| PremiumFeatureIncreasedUploadFileSize
	| PremiumFeatureImprovedDownloadSpeed
	| PremiumFeatureVoiceRecognition
	| PremiumFeatureDisabledAds
	| PremiumFeatureUniqueReactions
	| PremiumFeatureUniqueStickers
	| PremiumFeatureCustomEmoji
	| PremiumFeatureAdvancedChatManagement
	| PremiumFeatureProfileBadge
	| PremiumFeatureEmojiStatus
	| PremiumFeatureAnimatedProfilePhoto
	| PremiumFeatureForumTopicIcon
	| PremiumFeatureAppIcons
	| PremiumFeatureRealTimeChatTranslation
	| PremiumFeatureUpgradedStories
	| PremiumFeatureChatBoost
	| PremiumFeatureAccentColor
	| PremiumFeatureBackgroundForBoth
	| PremiumFeatureSavedMessagesTags
	| PremiumFeatureMessagePrivacy
	| PremiumFeatureLastSeenTimes
	| PremiumFeatureBusiness
	| PremiumFeatureMessageEffects;

export type BusinessFeature =
	| BusinessFeatureLocation
	| BusinessFeatureOpeningHours
	| BusinessFeatureQuickReplies
	| BusinessFeatureGreetingMessage
	| BusinessFeatureAwayMessage
	| BusinessFeatureAccountLinks
	| BusinessFeatureStartPage
	| BusinessFeatureBots
	| BusinessFeatureEmojiStatus
	| BusinessFeatureChatFolderTags
	| BusinessFeatureUpgradedStories;

export type PremiumStoryFeature =
	| PremiumStoryFeaturePriorityOrder
	| PremiumStoryFeatureStealthMode
	| PremiumStoryFeaturePermanentViewsHistory
	| PremiumStoryFeatureCustomExpirationDuration
	| PremiumStoryFeatureSaveStories
	| PremiumStoryFeatureLinksAndFormatting
	| PremiumStoryFeatureVideoQuality;

export type PremiumSource =
	| PremiumSourceLimitExceeded
	| PremiumSourceFeature
	| PremiumSourceBusinessFeature
	| PremiumSourceStoryFeature
	| PremiumSourceLink
	| PremiumSourceSettings;

export type StorePaymentPurpose =
	| StorePaymentPurposePremiumSubscription
	| StorePaymentPurposePremiumGift
	| StorePaymentPurposePremiumGiftCodes
	| StorePaymentPurposePremiumGiveaway
	| StorePaymentPurposeStarGiveaway
	| StorePaymentPurposeStars
	| StorePaymentPurposeGiftedStars;

export type StoreTransaction =
	| StoreTransactionAppStore
	| StoreTransactionGooglePlay;

export type TelegramPaymentPurpose =
	| TelegramPaymentPurposePremiumGift
	| TelegramPaymentPurposePremiumGiftCodes
	| TelegramPaymentPurposePremiumGiveaway
	| TelegramPaymentPurposeStars
	| TelegramPaymentPurposeGiftedStars
	| TelegramPaymentPurposeStarGiveaway
	| TelegramPaymentPurposeJoinChat;

export type DeviceToken =
	| DeviceTokenFirebaseCloudMessaging
	| DeviceTokenApplePush
	| DeviceTokenApplePushVoIP
	| DeviceTokenWindowsPush
	| DeviceTokenMicrosoftPush
	| DeviceTokenMicrosoftPushVoIP
	| DeviceTokenWebPush
	| DeviceTokenSimplePush
	| DeviceTokenUbuntuPush
	| DeviceTokenBlackBerryPush
	| DeviceTokenTizenPush
	| DeviceTokenHuaweiPush;

export type BackgroundFill =
	| BackgroundFillSolid
	| BackgroundFillGradient
	| BackgroundFillFreeformGradient;

export type BackgroundType =
	| BackgroundTypeWallpaper
	| BackgroundTypePattern
	| BackgroundTypeFill
	| BackgroundTypeChatTheme;

export type InputBackground =
	| InputBackgroundLocal
	| InputBackgroundRemote
	| InputBackgroundPrevious;

export type CanPostStoryResult =
	| CanPostStoryResultOk
	| CanPostStoryResultPremiumNeeded
	| CanPostStoryResultBoostNeeded
	| CanPostStoryResultActiveStoryLimitExceeded
	| CanPostStoryResultWeeklyLimitExceeded
	| CanPostStoryResultMonthlyLimitExceeded;

export type CanTransferOwnershipResult =
	| CanTransferOwnershipResultOk
	| CanTransferOwnershipResultPasswordNeeded
	| CanTransferOwnershipResultPasswordTooFresh
	| CanTransferOwnershipResultSessionTooFresh;

export type CheckChatUsernameResult =
	| CheckChatUsernameResultOk
	| CheckChatUsernameResultUsernameInvalid
	| CheckChatUsernameResultUsernameOccupied
	| CheckChatUsernameResultUsernamePurchasable
	| CheckChatUsernameResultPublicChatsTooMany
	| CheckChatUsernameResultPublicGroupsUnavailable;

export type CheckStickerSetNameResult =
	| CheckStickerSetNameResultOk
	| CheckStickerSetNameResultNameInvalid
	| CheckStickerSetNameResultNameOccupied;

export type ResetPasswordResult =
	| ResetPasswordResultOk
	| ResetPasswordResultPending
	| ResetPasswordResultDeclined;

export type MessageFileType =
	| MessageFileTypePrivate
	| MessageFileTypeGroup
	| MessageFileTypeUnknown;

export type PushMessageContent =
	| PushMessageContentHidden
	| PushMessageContentAnimation
	| PushMessageContentAudio
	| PushMessageContentContact
	| PushMessageContentContactRegistered
	| PushMessageContentDocument
	| PushMessageContentGame
	| PushMessageContentGameScore
	| PushMessageContentInvoice
	| PushMessageContentLocation
	| PushMessageContentPaidMedia
	| PushMessageContentPhoto
	| PushMessageContentPoll
	| PushMessageContentPremiumGiftCode
	| PushMessageContentGiveaway
	| PushMessageContentGift
	| PushMessageContentUpgradedGift
	| PushMessageContentScreenshotTaken
	| PushMessageContentSticker
	| PushMessageContentStory
	| PushMessageContentText
	| PushMessageContentVideo
	| PushMessageContentVideoNote
	| PushMessageContentVoiceNote
	| PushMessageContentBasicGroupChatCreate
	| PushMessageContentVideoChatStarted
	| PushMessageContentVideoChatEnded
	| PushMessageContentInviteVideoChatParticipants
	| PushMessageContentChatAddMembers
	| PushMessageContentChatChangePhoto
	| PushMessageContentChatChangeTitle
	| PushMessageContentChatSetBackground
	| PushMessageContentChatSetTheme
	| PushMessageContentChatDeleteMember
	| PushMessageContentChatJoinByLink
	| PushMessageContentChatJoinByRequest
	| PushMessageContentRecurringPayment
	| PushMessageContentSuggestProfilePhoto
	| PushMessageContentProximityAlertTriggered
	| PushMessageContentMessageForwards
	| PushMessageContentMediaAlbum;

export type NotificationType =
	| NotificationTypeNewMessage
	| NotificationTypeNewSecretChat
	| NotificationTypeNewCall
	| NotificationTypeNewPushMessage;

export type NotificationGroupType =
	| NotificationGroupTypeMessages
	| NotificationGroupTypeMentions
	| NotificationGroupTypeSecretChat
	| NotificationGroupTypeCalls;

export type OptionValue =
	| OptionValueBoolean
	| OptionValueEmpty
	| OptionValueInteger
	| OptionValueString;

export type JsonValue =
	| JsonValueNull
	| JsonValueBoolean
	| JsonValueNumber
	| JsonValueString
	| JsonValueArray
	| JsonValueObject;

export type StoryPrivacySettings =
	| StoryPrivacySettingsEveryone
	| StoryPrivacySettingsContacts
	| StoryPrivacySettingsCloseFriends
	| StoryPrivacySettingsSelectedUsers;

export type UserPrivacySettingRule =
	| UserPrivacySettingRuleAllowAll
	| UserPrivacySettingRuleAllowContacts
	| UserPrivacySettingRuleAllowBots
	| UserPrivacySettingRuleAllowPremiumUsers
	| UserPrivacySettingRuleAllowUsers
	| UserPrivacySettingRuleAllowChatMembers
	| UserPrivacySettingRuleRestrictAll
	| UserPrivacySettingRuleRestrictContacts
	| UserPrivacySettingRuleRestrictBots
	| UserPrivacySettingRuleRestrictUsers
	| UserPrivacySettingRuleRestrictChatMembers;

export type UserPrivacySetting =
	| UserPrivacySettingShowStatus
	| UserPrivacySettingShowProfilePhoto
	| UserPrivacySettingShowLinkInForwardedMessages
	| UserPrivacySettingShowPhoneNumber
	| UserPrivacySettingShowBio
	| UserPrivacySettingShowBirthdate
	| UserPrivacySettingAllowChatInvites
	| UserPrivacySettingAllowCalls
	| UserPrivacySettingAllowPeerToPeerCalls
	| UserPrivacySettingAllowFindingByPhoneNumber
	| UserPrivacySettingAllowPrivateVoiceAndVideoNoteMessages
	| UserPrivacySettingAutosaveGifts
	| UserPrivacySettingAllowUnpaidMessages;

export type CanSendMessageToUserResult =
	| CanSendMessageToUserResultOk
	| CanSendMessageToUserResultUserHasPaidMessages
	| CanSendMessageToUserResultUserIsDeleted
	| CanSendMessageToUserResultUserRestrictsNewChats;

export type SessionType =
	| SessionTypeAndroid
	| SessionTypeApple
	| SessionTypeBrave
	| SessionTypeChrome
	| SessionTypeEdge
	| SessionTypeFirefox
	| SessionTypeIpad
	| SessionTypeIphone
	| SessionTypeLinux
	| SessionTypeMac
	| SessionTypeOpera
	| SessionTypeSafari
	| SessionTypeUbuntu
	| SessionTypeUnknown
	| SessionTypeVivaldi
	| SessionTypeWindows
	| SessionTypeXbox;

export type ReportReason =
	| ReportReasonSpam
	| ReportReasonViolence
	| ReportReasonPornography
	| ReportReasonChildAbuse
	| ReportReasonCopyright
	| ReportReasonUnrelatedLocation
	| ReportReasonFake
	| ReportReasonIllegalDrugs
	| ReportReasonPersonalDetails
	| ReportReasonCustom;

export type ReportChatResult =
	| ReportChatResultOk
	| ReportChatResultOptionRequired
	| ReportChatResultTextRequired
	| ReportChatResultMessagesRequired;

export type ReportStoryResult =
	| ReportStoryResultOk
	| ReportStoryResultOptionRequired
	| ReportStoryResultTextRequired;

export type InternalLinkType =
	| InternalLinkTypeActiveSessions
	| InternalLinkTypeAttachmentMenuBot
	| InternalLinkTypeAuthenticationCode
	| InternalLinkTypeBackground
	| InternalLinkTypeBotAddToChannel
	| InternalLinkTypeBotStart
	| InternalLinkTypeBotStartInGroup
	| InternalLinkTypeBusinessChat
	| InternalLinkTypeBuyStars
	| InternalLinkTypeChangePhoneNumber
	| InternalLinkTypeChatAffiliateProgram
	| InternalLinkTypeChatBoost
	| InternalLinkTypeChatFolderInvite
	| InternalLinkTypeChatFolderSettings
	| InternalLinkTypeChatInvite
	| InternalLinkTypeDefaultMessageAutoDeleteTimerSettings
	| InternalLinkTypeEditProfileSettings
	| InternalLinkTypeGame
	| InternalLinkTypeGroupCall
	| InternalLinkTypeInstantView
	| InternalLinkTypeInvoice
	| InternalLinkTypeLanguagePack
	| InternalLinkTypeLanguageSettings
	| InternalLinkTypeMainWebApp
	| InternalLinkTypeMessage
	| InternalLinkTypeMessageDraft
	| InternalLinkTypeMyStars
	| InternalLinkTypePassportDataRequest
	| InternalLinkTypePhoneNumberConfirmation
	| InternalLinkTypePremiumFeatures
	| InternalLinkTypePremiumGift
	| InternalLinkTypePremiumGiftCode
	| InternalLinkTypePrivacyAndSecuritySettings
	| InternalLinkTypeProxy
	| InternalLinkTypePublicChat
	| InternalLinkTypeQrCodeAuthentication
	| InternalLinkTypeRestorePurchases
	| InternalLinkTypeSettings
	| InternalLinkTypeStickerSet
	| InternalLinkTypeStory
	| InternalLinkTypeTheme
	| InternalLinkTypeThemeSettings
	| InternalLinkTypeUnknownDeepLink
	| InternalLinkTypeUnsupportedProxy
	| InternalLinkTypeUpgradedGift
	| InternalLinkTypeUserPhoneNumber
	| InternalLinkTypeUserToken
	| InternalLinkTypeVideoChat
	| InternalLinkTypeWebApp;

export type BlockList = BlockListMain | BlockListStories;

export type FileType =
	| FileTypeNone
	| FileTypeAnimation
	| FileTypeAudio
	| FileTypeDocument
	| FileTypeNotificationSound
	| FileTypePhoto
	| FileTypePhotoStory
	| FileTypeProfilePhoto
	| FileTypeSecret
	| FileTypeSecretThumbnail
	| FileTypeSecure
	| FileTypeSelfDestructingPhoto
	| FileTypeSelfDestructingVideo
	| FileTypeSelfDestructingVideoNote
	| FileTypeSelfDestructingVoiceNote
	| FileTypeSticker
	| FileTypeThumbnail
	| FileTypeUnknown
	| FileTypeVideo
	| FileTypeVideoNote
	| FileTypeVideoStory
	| FileTypeVoiceNote
	| FileTypeWallpaper;

export type NetworkType =
	| NetworkTypeNone
	| NetworkTypeMobile
	| NetworkTypeMobileRoaming
	| NetworkTypeWiFi
	| NetworkTypeOther;

export type NetworkStatisticsEntry =
	| NetworkStatisticsEntryFile
	| NetworkStatisticsEntryCall;

export type AutosaveSettingsScope =
	| AutosaveSettingsScopePrivateChats
	| AutosaveSettingsScopeGroupChats
	| AutosaveSettingsScopeChannelChats
	| AutosaveSettingsScopeChat;

export type ConnectionState =
	| ConnectionStateWaitingForNetwork
	| ConnectionStateConnectingToProxy
	| ConnectionStateConnecting
	| ConnectionStateUpdating
	| ConnectionStateReady;

export type TopChatCategory =
	| TopChatCategoryUsers
	| TopChatCategoryBots
	| TopChatCategoryGroups
	| TopChatCategoryChannels
	| TopChatCategoryInlineBots
	| TopChatCategoryWebAppBots
	| TopChatCategoryCalls
	| TopChatCategoryForwardChats;

export type TMeUrlType =
	| TMeUrlTypeUser
	| TMeUrlTypeSupergroup
	| TMeUrlTypeChatInvite
	| TMeUrlTypeStickerSet;

export type SuggestedAction =
	| SuggestedActionEnableArchiveAndMuteNewChats
	| SuggestedActionCheckPassword
	| SuggestedActionCheckPhoneNumber
	| SuggestedActionViewChecksHint
	| SuggestedActionConvertToBroadcastGroup
	| SuggestedActionSetPassword
	| SuggestedActionUpgradePremium
	| SuggestedActionRestorePremium
	| SuggestedActionSubscribeToAnnualPremium
	| SuggestedActionGiftPremiumForChristmas
	| SuggestedActionSetBirthdate
	| SuggestedActionSetProfilePhoto
	| SuggestedActionExtendPremium
	| SuggestedActionExtendStarSubscriptions
	| SuggestedActionCustom;

export type TextParseMode = TextParseModeMarkdown | TextParseModeHTML;

export type ProxyType = ProxyTypeSocks5 | ProxyTypeHttp | ProxyTypeMtproto;

export type StatisticalGraph =
	| StatisticalGraphData
	| StatisticalGraphAsync
	| StatisticalGraphError;

export type ChatStatisticsObjectType =
	| ChatStatisticsObjectTypeMessage
	| ChatStatisticsObjectTypeStory;

export type ChatStatistics = ChatStatisticsSupergroup | ChatStatisticsChannel;

export type RevenueWithdrawalState =
	| RevenueWithdrawalStatePending
	| RevenueWithdrawalStateSucceeded
	| RevenueWithdrawalStateFailed;

export type ChatRevenueTransactionType =
	| ChatRevenueTransactionTypeEarnings
	| ChatRevenueTransactionTypeWithdrawal
	| ChatRevenueTransactionTypeRefund;

export type VectorPathCommand =
	| VectorPathCommandLine
	| VectorPathCommandCubicBezierCurve;

export type BotCommandScope =
	| BotCommandScopeDefault
	| BotCommandScopeAllPrivateChats
	| BotCommandScopeAllGroupChats
	| BotCommandScopeAllChatAdministrators
	| BotCommandScopeChat
	| BotCommandScopeChatAdministrators
	| BotCommandScopeChatMember;

export type PhoneNumberCodeType =
	| PhoneNumberCodeTypeChange
	| PhoneNumberCodeTypeVerify
	| PhoneNumberCodeTypeConfirmOwnership;

export type Update =
	| UpdateAuthorizationState
	| UpdateNewMessage
	| UpdateMessageSendAcknowledged
	| UpdateMessageSendSucceeded
	| UpdateMessageSendFailed
	| UpdateMessageContent
	| UpdateMessageEdited
	| UpdateMessageIsPinned
	| UpdateMessageInteractionInfo
	| UpdateMessageContentOpened
	| UpdateMessageMentionRead
	| UpdateMessageUnreadReactions
	| UpdateMessageFactCheck
	| UpdateMessageLiveLocationViewed
	| UpdateVideoPublished
	| UpdateNewChat
	| UpdateChatTitle
	| UpdateChatPhoto
	| UpdateChatAccentColors
	| UpdateChatPermissions
	| UpdateChatLastMessage
	| UpdateChatPosition
	| UpdateChatAddedToList
	| UpdateChatRemovedFromList
	| UpdateChatReadInbox
	| UpdateChatReadOutbox
	| UpdateChatActionBar
	| UpdateChatBusinessBotManageBar
	| UpdateChatAvailableReactions
	| UpdateChatDraftMessage
	| UpdateChatEmojiStatus
	| UpdateChatMessageSender
	| UpdateChatMessageAutoDeleteTime
	| UpdateChatNotificationSettings
	| UpdateChatPendingJoinRequests
	| UpdateChatReplyMarkup
	| UpdateChatBackground
	| UpdateChatTheme
	| UpdateChatUnreadMentionCount
	| UpdateChatUnreadReactionCount
	| UpdateChatVideoChat
	| UpdateChatDefaultDisableNotification
	| UpdateChatHasProtectedContent
	| UpdateChatIsTranslatable
	| UpdateChatIsMarkedAsUnread
	| UpdateChatViewAsTopics
	| UpdateChatBlockList
	| UpdateChatHasScheduledMessages
	| UpdateChatFolders
	| UpdateChatOnlineMemberCount
	| UpdateSavedMessagesTopic
	| UpdateSavedMessagesTopicCount
	| UpdateDirectMessagesChatTopic
	| UpdateTopicMessageCount
	| UpdateQuickReplyShortcut
	| UpdateQuickReplyShortcutDeleted
	| UpdateQuickReplyShortcuts
	| UpdateQuickReplyShortcutMessages
	| UpdateForumTopicInfo
	| UpdateForumTopic
	| UpdateScopeNotificationSettings
	| UpdateReactionNotificationSettings
	| UpdateNotification
	| UpdateNotificationGroup
	| UpdateActiveNotifications
	| UpdateHavePendingNotifications
	| UpdateDeleteMessages
	| UpdateChatAction
	| UpdateUserStatus
	| UpdateUser
	| UpdateBasicGroup
	| UpdateSupergroup
	| UpdateSecretChat
	| UpdateUserFullInfo
	| UpdateBasicGroupFullInfo
	| UpdateSupergroupFullInfo
	| UpdateServiceNotification
	| UpdateFile
	| UpdateFileGenerationStart
	| UpdateFileGenerationStop
	| UpdateFileDownloads
	| UpdateFileAddedToDownloads
	| UpdateFileDownload
	| UpdateFileRemovedFromDownloads
	| UpdateApplicationVerificationRequired
	| UpdateApplicationRecaptchaVerificationRequired
	| UpdateCall
	| UpdateGroupCall
	| UpdateGroupCallParticipant
	| UpdateGroupCallParticipants
	| UpdateGroupCallVerificationState
	| UpdateNewCallSignalingData
	| UpdateUserPrivacySettingRules
	| UpdateUnreadMessageCount
	| UpdateUnreadChatCount
	| UpdateStory
	| UpdateStoryDeleted
	| UpdateStoryPostSucceeded
	| UpdateStoryPostFailed
	| UpdateChatActiveStories
	| UpdateStoryListChatCount
	| UpdateStoryStealthMode
	| UpdateOption
	| UpdateStickerSet
	| UpdateInstalledStickerSets
	| UpdateTrendingStickerSets
	| UpdateRecentStickers
	| UpdateFavoriteStickers
	| UpdateSavedAnimations
	| UpdateSavedNotificationSounds
	| UpdateDefaultBackground
	| UpdateChatThemes
	| UpdateAccentColors
	| UpdateProfileAccentColors
	| UpdateLanguagePackStrings
	| UpdateConnectionState
	| UpdateFreezeState
	| UpdateTermsOfService
	| UpdateUnconfirmedSession
	| UpdateAttachmentMenuBots
	| UpdateWebAppMessageSent
	| UpdateActiveEmojiReactions
	| UpdateAvailableMessageEffects
	| UpdateDefaultReactionType
	| UpdateDefaultPaidReactionType
	| UpdateSavedMessagesTags
	| UpdateActiveLiveLocationMessages
	| UpdateOwnedStarCount
	| UpdateChatRevenueAmount
	| UpdateStarRevenueStatus
	| UpdateSpeechRecognitionTrial
	| UpdateDiceEmojis
	| UpdateAnimatedEmojiMessageClicked
	| UpdateAnimationSearchParameters
	| UpdateSuggestedActions
	| UpdateSpeedLimitNotification
	| UpdateContactCloseBirthdays
	| UpdateAutosaveSettings
	| UpdateBusinessConnection
	| UpdateNewBusinessMessage
	| UpdateBusinessMessageEdited
	| UpdateBusinessMessagesDeleted
	| UpdateNewInlineQuery
	| UpdateNewChosenInlineResult
	| UpdateNewCallbackQuery
	| UpdateNewInlineCallbackQuery
	| UpdateNewBusinessCallbackQuery
	| UpdateNewShippingQuery
	| UpdateNewPreCheckoutQuery
	| UpdateNewCustomEvent
	| UpdateNewCustomQuery
	| UpdatePoll
	| UpdatePollAnswer
	| UpdateChatMember
	| UpdateNewChatJoinRequest
	| UpdateChatBoost
	| UpdateMessageReaction
	| UpdateMessageReactions
	| UpdatePaidMediaPurchased;

export type LogStream = LogStreamDefault | LogStreamFile | LogStreamEmpty;
