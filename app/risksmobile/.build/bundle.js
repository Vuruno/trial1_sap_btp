(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/risksmobile/i18n/i18n.properties":
/*!************************************************************!*\
  !*** ./build.definitions/risksmobile/i18n/i18n.properties ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "Draft_DraftAdministrativeData=Draft_DraftAdministrativeData\nDraft_DraftUUID=Draft_DraftUUID\nDraft_CreationDateTime=Draft_CreationDateTime\nDraft_CreatedByUser=Draft_CreatedByUser\nDraft_DraftIsCreatedByMe=Draft_DraftIsCreatedByMe\nDraft_LastChangeDateTime=Draft_LastChangeDateTime\nDraft_LastChangedByUser=Draft_LastChangedByUser\nDraft_InProcessByUser=Draft_InProcessByUser\nDraft_DraftIsProcessedByMe=Draft_DraftIsProcessedByMe\n"

/***/ }),

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let risksmobile_actions_application_appupdate_action = __webpack_require__(/*! ./risksmobile/Actions/Application/AppUpdate.action */ "./build.definitions/risksmobile/Actions/Application/AppUpdate.action")
let risksmobile_actions_application_appupdatefailuremessage_action = __webpack_require__(/*! ./risksmobile/Actions/Application/AppUpdateFailureMessage.action */ "./build.definitions/risksmobile/Actions/Application/AppUpdateFailureMessage.action")
let risksmobile_actions_application_appupdateprogressbanner_action = __webpack_require__(/*! ./risksmobile/Actions/Application/AppUpdateProgressBanner.action */ "./build.definitions/risksmobile/Actions/Application/AppUpdateProgressBanner.action")
let risksmobile_actions_application_appupdatesuccessmessage_action = __webpack_require__(/*! ./risksmobile/Actions/Application/AppUpdateSuccessMessage.action */ "./build.definitions/risksmobile/Actions/Application/AppUpdateSuccessMessage.action")
let risksmobile_actions_application_logout_action = __webpack_require__(/*! ./risksmobile/Actions/Application/Logout.action */ "./build.definitions/risksmobile/Actions/Application/Logout.action")
let risksmobile_actions_application_navtoabout_action = __webpack_require__(/*! ./risksmobile/Actions/Application/NavToAbout.action */ "./build.definitions/risksmobile/Actions/Application/NavToAbout.action")
let risksmobile_actions_application_navtoactivitylog_action = __webpack_require__(/*! ./risksmobile/Actions/Application/NavToActivityLog.action */ "./build.definitions/risksmobile/Actions/Application/NavToActivityLog.action")
let risksmobile_actions_application_navtosupport_action = __webpack_require__(/*! ./risksmobile/Actions/Application/NavToSupport.action */ "./build.definitions/risksmobile/Actions/Application/NavToSupport.action")
let risksmobile_actions_application_onwillupdate_action = __webpack_require__(/*! ./risksmobile/Actions/Application/OnWillUpdate.action */ "./build.definitions/risksmobile/Actions/Application/OnWillUpdate.action")
let risksmobile_actions_application_reset_action = __webpack_require__(/*! ./risksmobile/Actions/Application/Reset.action */ "./build.definitions/risksmobile/Actions/Application/Reset.action")
let risksmobile_actions_application_resetmessage_action = __webpack_require__(/*! ./risksmobile/Actions/Application/ResetMessage.action */ "./build.definitions/risksmobile/Actions/Application/ResetMessage.action")
let risksmobile_actions_application_usermenupopover_action = __webpack_require__(/*! ./risksmobile/Actions/Application/UserMenuPopover.action */ "./build.definitions/risksmobile/Actions/Application/UserMenuPopover.action")
let risksmobile_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./risksmobile/Actions/CloseModalPage_Cancel.action */ "./build.definitions/risksmobile/Actions/CloseModalPage_Cancel.action")
let risksmobile_actions_closemodalpage_complete_action = __webpack_require__(/*! ./risksmobile/Actions/CloseModalPage_Complete.action */ "./build.definitions/risksmobile/Actions/CloseModalPage_Complete.action")
let risksmobile_actions_closepage_action = __webpack_require__(/*! ./risksmobile/Actions/ClosePage.action */ "./build.definitions/risksmobile/Actions/ClosePage.action")
let risksmobile_actions_createentityfailuremessage_action = __webpack_require__(/*! ./risksmobile/Actions/CreateEntityFailureMessage.action */ "./build.definitions/risksmobile/Actions/CreateEntityFailureMessage.action")
let risksmobile_actions_createentitysuccessmessage_action = __webpack_require__(/*! ./risksmobile/Actions/CreateEntitySuccessMessage.action */ "./build.definitions/risksmobile/Actions/CreateEntitySuccessMessage.action")
let risksmobile_actions_deleteconfirmation_action = __webpack_require__(/*! ./risksmobile/Actions/DeleteConfirmation.action */ "./build.definitions/risksmobile/Actions/DeleteConfirmation.action")
let risksmobile_actions_deleteentityfailuremessage_action = __webpack_require__(/*! ./risksmobile/Actions/DeleteEntityFailureMessage.action */ "./build.definitions/risksmobile/Actions/DeleteEntityFailureMessage.action")
let risksmobile_actions_deleteentitysuccessmessage_action = __webpack_require__(/*! ./risksmobile/Actions/DeleteEntitySuccessMessage.action */ "./build.definitions/risksmobile/Actions/DeleteEntitySuccessMessage.action")
let risksmobile_actions_draftdiscardentity_action = __webpack_require__(/*! ./risksmobile/Actions/DraftDiscardEntity.action */ "./build.definitions/risksmobile/Actions/DraftDiscardEntity.action")
let risksmobile_actions_drafteditentity_action = __webpack_require__(/*! ./risksmobile/Actions/DraftEditEntity.action */ "./build.definitions/risksmobile/Actions/DraftEditEntity.action")
let risksmobile_actions_draftsaveentity_action = __webpack_require__(/*! ./risksmobile/Actions/DraftSaveEntity.action */ "./build.definitions/risksmobile/Actions/DraftSaveEntity.action")
let risksmobile_actions_genericbannermessage_action = __webpack_require__(/*! ./risksmobile/Actions/GenericBannerMessage.action */ "./build.definitions/risksmobile/Actions/GenericBannerMessage.action")
let risksmobile_actions_genericmessagebox_action = __webpack_require__(/*! ./risksmobile/Actions/GenericMessageBox.action */ "./build.definitions/risksmobile/Actions/GenericMessageBox.action")
let risksmobile_actions_genericnavigation_action = __webpack_require__(/*! ./risksmobile/Actions/GenericNavigation.action */ "./build.definitions/risksmobile/Actions/GenericNavigation.action")
let risksmobile_actions_generictoastmessage_action = __webpack_require__(/*! ./risksmobile/Actions/GenericToastMessage.action */ "./build.definitions/risksmobile/Actions/GenericToastMessage.action")
let risksmobile_actions_logging_loguploadfailure_action = __webpack_require__(/*! ./risksmobile/Actions/Logging/LogUploadFailure.action */ "./build.definitions/risksmobile/Actions/Logging/LogUploadFailure.action")
let risksmobile_actions_logging_loguploadsuccessful_action = __webpack_require__(/*! ./risksmobile/Actions/Logging/LogUploadSuccessful.action */ "./build.definitions/risksmobile/Actions/Logging/LogUploadSuccessful.action")
let risksmobile_actions_logging_uploadlog_action = __webpack_require__(/*! ./risksmobile/Actions/Logging/UploadLog.action */ "./build.definitions/risksmobile/Actions/Logging/UploadLog.action")
let risksmobile_actions_logging_uploadlogprogress_action = __webpack_require__(/*! ./risksmobile/Actions/Logging/UploadLogProgress.action */ "./build.definitions/risksmobile/Actions/Logging/UploadLogProgress.action")
let risksmobile_actions_riskmanagementservice_migrations_migrations_createentity_action = __webpack_require__(/*! ./risksmobile/Actions/RiskManagementService/Migrations/Migrations_CreateEntity.action */ "./build.definitions/risksmobile/Actions/RiskManagementService/Migrations/Migrations_CreateEntity.action")
let risksmobile_actions_riskmanagementservice_migrations_migrations_createrisks_action = __webpack_require__(/*! ./risksmobile/Actions/RiskManagementService/Migrations/Migrations_CreateRisks.action */ "./build.definitions/risksmobile/Actions/RiskManagementService/Migrations/Migrations_CreateRisks.action")
let risksmobile_actions_riskmanagementservice_migrations_migrations_deleteentity_action = __webpack_require__(/*! ./risksmobile/Actions/RiskManagementService/Migrations/Migrations_DeleteEntity.action */ "./build.definitions/risksmobile/Actions/RiskManagementService/Migrations/Migrations_DeleteEntity.action")
let risksmobile_actions_riskmanagementservice_migrations_migrations_detailpopover_action = __webpack_require__(/*! ./risksmobile/Actions/RiskManagementService/Migrations/Migrations_DetailPopover.action */ "./build.definitions/risksmobile/Actions/RiskManagementService/Migrations/Migrations_DetailPopover.action")
let risksmobile_actions_riskmanagementservice_migrations_migrations_updateentity_action = __webpack_require__(/*! ./risksmobile/Actions/RiskManagementService/Migrations/Migrations_UpdateEntity.action */ "./build.definitions/risksmobile/Actions/RiskManagementService/Migrations/Migrations_UpdateEntity.action")
let risksmobile_actions_riskmanagementservice_migrations_navtomigrations_create_action = __webpack_require__(/*! ./risksmobile/Actions/RiskManagementService/Migrations/NavToMigrations_Create.action */ "./build.definitions/risksmobile/Actions/RiskManagementService/Migrations/NavToMigrations_Create.action")
let risksmobile_actions_riskmanagementservice_migrations_navtomigrations_createrisks_action = __webpack_require__(/*! ./risksmobile/Actions/RiskManagementService/Migrations/NavToMigrations_CreateRisks.action */ "./build.definitions/risksmobile/Actions/RiskManagementService/Migrations/NavToMigrations_CreateRisks.action")
let risksmobile_actions_riskmanagementservice_migrations_navtomigrations_detail_action = __webpack_require__(/*! ./risksmobile/Actions/RiskManagementService/Migrations/NavToMigrations_Detail.action */ "./build.definitions/risksmobile/Actions/RiskManagementService/Migrations/NavToMigrations_Detail.action")
let risksmobile_actions_riskmanagementservice_migrations_navtomigrations_edit_action = __webpack_require__(/*! ./risksmobile/Actions/RiskManagementService/Migrations/NavToMigrations_Edit.action */ "./build.definitions/risksmobile/Actions/RiskManagementService/Migrations/NavToMigrations_Edit.action")
let risksmobile_actions_riskmanagementservice_migrations_navtomigrations_list_action = __webpack_require__(/*! ./risksmobile/Actions/RiskManagementService/Migrations/NavToMigrations_List.action */ "./build.definitions/risksmobile/Actions/RiskManagementService/Migrations/NavToMigrations_List.action")
let risksmobile_actions_riskmanagementservice_risks_navtorisks_create_action = __webpack_require__(/*! ./risksmobile/Actions/RiskManagementService/Risks/NavToRisks_Create.action */ "./build.definitions/risksmobile/Actions/RiskManagementService/Risks/NavToRisks_Create.action")
let risksmobile_actions_riskmanagementservice_risks_navtorisks_detail_action = __webpack_require__(/*! ./risksmobile/Actions/RiskManagementService/Risks/NavToRisks_Detail.action */ "./build.definitions/risksmobile/Actions/RiskManagementService/Risks/NavToRisks_Detail.action")
let risksmobile_actions_riskmanagementservice_risks_navtorisks_edit_action = __webpack_require__(/*! ./risksmobile/Actions/RiskManagementService/Risks/NavToRisks_Edit.action */ "./build.definitions/risksmobile/Actions/RiskManagementService/Risks/NavToRisks_Edit.action")
let risksmobile_actions_riskmanagementservice_risks_navtorisks_list_action = __webpack_require__(/*! ./risksmobile/Actions/RiskManagementService/Risks/NavToRisks_List.action */ "./build.definitions/risksmobile/Actions/RiskManagementService/Risks/NavToRisks_List.action")
let risksmobile_actions_riskmanagementservice_risks_risks_createentity_action = __webpack_require__(/*! ./risksmobile/Actions/RiskManagementService/Risks/Risks_CreateEntity.action */ "./build.definitions/risksmobile/Actions/RiskManagementService/Risks/Risks_CreateEntity.action")
let risksmobile_actions_riskmanagementservice_risks_risks_deleteentity_action = __webpack_require__(/*! ./risksmobile/Actions/RiskManagementService/Risks/Risks_DeleteEntity.action */ "./build.definitions/risksmobile/Actions/RiskManagementService/Risks/Risks_DeleteEntity.action")
let risksmobile_actions_riskmanagementservice_risks_risks_updateentity_action = __webpack_require__(/*! ./risksmobile/Actions/RiskManagementService/Risks/Risks_UpdateEntity.action */ "./build.definitions/risksmobile/Actions/RiskManagementService/Risks/Risks_UpdateEntity.action")
let risksmobile_actions_riskmanagementservice_service_initializeonline_action = __webpack_require__(/*! ./risksmobile/Actions/RiskManagementService/Service/InitializeOnline.action */ "./build.definitions/risksmobile/Actions/RiskManagementService/Service/InitializeOnline.action")
let risksmobile_actions_riskmanagementservice_service_initializeonlinefailuremessage_action = __webpack_require__(/*! ./risksmobile/Actions/RiskManagementService/Service/InitializeOnlineFailureMessage.action */ "./build.definitions/risksmobile/Actions/RiskManagementService/Service/InitializeOnlineFailureMessage.action")
let risksmobile_actions_updateentityfailuremessage_action = __webpack_require__(/*! ./risksmobile/Actions/UpdateEntityFailureMessage.action */ "./build.definitions/risksmobile/Actions/UpdateEntityFailureMessage.action")
let risksmobile_actions_updateentitysuccessmessage_action = __webpack_require__(/*! ./risksmobile/Actions/UpdateEntitySuccessMessage.action */ "./build.definitions/risksmobile/Actions/UpdateEntitySuccessMessage.action")
let risksmobile_globals_application_appdefinition_version_global = __webpack_require__(/*! ./risksmobile/Globals/Application/AppDefinition_Version.global */ "./build.definitions/risksmobile/Globals/Application/AppDefinition_Version.global")
let risksmobile_globals_application_applicationname_global = __webpack_require__(/*! ./risksmobile/Globals/Application/ApplicationName.global */ "./build.definitions/risksmobile/Globals/Application/ApplicationName.global")
let risksmobile_globals_application_supportemail_global = __webpack_require__(/*! ./risksmobile/Globals/Application/SupportEmail.global */ "./build.definitions/risksmobile/Globals/Application/SupportEmail.global")
let risksmobile_globals_application_supportphone_global = __webpack_require__(/*! ./risksmobile/Globals/Application/SupportPhone.global */ "./build.definitions/risksmobile/Globals/Application/SupportPhone.global")
let risksmobile_i18n_i18n_properties = __webpack_require__(/*! ./risksmobile/i18n/i18n.properties */ "./build.definitions/risksmobile/i18n/i18n.properties")
let risksmobile_jsconfig_json = __webpack_require__(/*! ./risksmobile/jsconfig.json */ "./build.definitions/risksmobile/jsconfig.json")
let risksmobile_pages_application_about_page = __webpack_require__(/*! ./risksmobile/Pages/Application/About.page */ "./build.definitions/risksmobile/Pages/Application/About.page")
let risksmobile_pages_application_support_page = __webpack_require__(/*! ./risksmobile/Pages/Application/Support.page */ "./build.definitions/risksmobile/Pages/Application/Support.page")
let risksmobile_pages_application_useractivitylog_page = __webpack_require__(/*! ./risksmobile/Pages/Application/UserActivityLog.page */ "./build.definitions/risksmobile/Pages/Application/UserActivityLog.page")
let risksmobile_pages_main_page = __webpack_require__(/*! ./risksmobile/Pages/Main.page */ "./build.definitions/risksmobile/Pages/Main.page")
let risksmobile_pages_riskmanagementservice_migrations_migrations_create_page = __webpack_require__(/*! ./risksmobile/Pages/RiskManagementService_Migrations/Migrations_Create.page */ "./build.definitions/risksmobile/Pages/RiskManagementService_Migrations/Migrations_Create.page")
let risksmobile_pages_riskmanagementservice_migrations_migrations_createrisks_page = __webpack_require__(/*! ./risksmobile/Pages/RiskManagementService_Migrations/Migrations_CreateRisks.page */ "./build.definitions/risksmobile/Pages/RiskManagementService_Migrations/Migrations_CreateRisks.page")
let risksmobile_pages_riskmanagementservice_migrations_migrations_detail_page = __webpack_require__(/*! ./risksmobile/Pages/RiskManagementService_Migrations/Migrations_Detail.page */ "./build.definitions/risksmobile/Pages/RiskManagementService_Migrations/Migrations_Detail.page")
let risksmobile_pages_riskmanagementservice_migrations_migrations_edit_page = __webpack_require__(/*! ./risksmobile/Pages/RiskManagementService_Migrations/Migrations_Edit.page */ "./build.definitions/risksmobile/Pages/RiskManagementService_Migrations/Migrations_Edit.page")
let risksmobile_pages_riskmanagementservice_migrations_migrations_list_page = __webpack_require__(/*! ./risksmobile/Pages/RiskManagementService_Migrations/Migrations_List.page */ "./build.definitions/risksmobile/Pages/RiskManagementService_Migrations/Migrations_List.page")
let risksmobile_pages_riskmanagementservice_risks_risks_create_page = __webpack_require__(/*! ./risksmobile/Pages/RiskManagementService_Risks/Risks_Create.page */ "./build.definitions/risksmobile/Pages/RiskManagementService_Risks/Risks_Create.page")
let risksmobile_pages_riskmanagementservice_risks_risks_detail_page = __webpack_require__(/*! ./risksmobile/Pages/RiskManagementService_Risks/Risks_Detail.page */ "./build.definitions/risksmobile/Pages/RiskManagementService_Risks/Risks_Detail.page")
let risksmobile_pages_riskmanagementservice_risks_risks_edit_page = __webpack_require__(/*! ./risksmobile/Pages/RiskManagementService_Risks/Risks_Edit.page */ "./build.definitions/risksmobile/Pages/RiskManagementService_Risks/Risks_Edit.page")
let risksmobile_pages_riskmanagementservice_risks_risks_list_page = __webpack_require__(/*! ./risksmobile/Pages/RiskManagementService_Risks/Risks_List.page */ "./build.definitions/risksmobile/Pages/RiskManagementService_Risks/Risks_List.page")
let risksmobile_rules_application_appupdatefailure_js = __webpack_require__(/*! ./risksmobile/Rules/Application/AppUpdateFailure.js */ "./build.definitions/risksmobile/Rules/Application/AppUpdateFailure.js")
let risksmobile_rules_application_appupdatesuccess_js = __webpack_require__(/*! ./risksmobile/Rules/Application/AppUpdateSuccess.js */ "./build.definitions/risksmobile/Rules/Application/AppUpdateSuccess.js")
let risksmobile_rules_application_clientismultiusermode_js = __webpack_require__(/*! ./risksmobile/Rules/Application/ClientIsMultiUserMode.js */ "./build.definitions/risksmobile/Rules/Application/ClientIsMultiUserMode.js")
let risksmobile_rules_application_getclientsupportversions_js = __webpack_require__(/*! ./risksmobile/Rules/Application/GetClientSupportVersions.js */ "./build.definitions/risksmobile/Rules/Application/GetClientSupportVersions.js")
let risksmobile_rules_application_getclientversion_js = __webpack_require__(/*! ./risksmobile/Rules/Application/GetClientVersion.js */ "./build.definitions/risksmobile/Rules/Application/GetClientVersion.js")
let risksmobile_rules_application_onwillupdate_js = __webpack_require__(/*! ./risksmobile/Rules/Application/OnWillUpdate.js */ "./build.definitions/risksmobile/Rules/Application/OnWillUpdate.js")
let risksmobile_rules_application_resetappsettingsandlogout_js = __webpack_require__(/*! ./risksmobile/Rules/Application/ResetAppSettingsAndLogout.js */ "./build.definitions/risksmobile/Rules/Application/ResetAppSettingsAndLogout.js")
let risksmobile_rules_logging_loglevels_js = __webpack_require__(/*! ./risksmobile/Rules/Logging/LogLevels.js */ "./build.definitions/risksmobile/Rules/Logging/LogLevels.js")
let risksmobile_rules_logging_settracecategories_js = __webpack_require__(/*! ./risksmobile/Rules/Logging/SetTraceCategories.js */ "./build.definitions/risksmobile/Rules/Logging/SetTraceCategories.js")
let risksmobile_rules_logging_setuserloglevel_js = __webpack_require__(/*! ./risksmobile/Rules/Logging/SetUserLogLevel.js */ "./build.definitions/risksmobile/Rules/Logging/SetUserLogLevel.js")
let risksmobile_rules_logging_togglelogging_js = __webpack_require__(/*! ./risksmobile/Rules/Logging/ToggleLogging.js */ "./build.definitions/risksmobile/Rules/Logging/ToggleLogging.js")
let risksmobile_rules_logging_tracecategories_js = __webpack_require__(/*! ./risksmobile/Rules/Logging/TraceCategories.js */ "./build.definitions/risksmobile/Rules/Logging/TraceCategories.js")
let risksmobile_rules_logging_userlogsetting_js = __webpack_require__(/*! ./risksmobile/Rules/Logging/UserLogSetting.js */ "./build.definitions/risksmobile/Rules/Logging/UserLogSetting.js")
let risksmobile_rules_riskmanagementservice_migrations_migrations_cancel_js = __webpack_require__(/*! ./risksmobile/Rules/RiskManagementService/Migrations/Migrations_Cancel.js */ "./build.definitions/risksmobile/Rules/RiskManagementService/Migrations/Migrations_Cancel.js")
let risksmobile_rules_riskmanagementservice_migrations_migrations_createentity_js = __webpack_require__(/*! ./risksmobile/Rules/RiskManagementService/Migrations/Migrations_CreateEntity.js */ "./build.definitions/risksmobile/Rules/RiskManagementService/Migrations/Migrations_CreateEntity.js")
let risksmobile_rules_riskmanagementservice_migrations_migrations_createrisks_js = __webpack_require__(/*! ./risksmobile/Rules/RiskManagementService/Migrations/Migrations_CreateRisks.js */ "./build.definitions/risksmobile/Rules/RiskManagementService/Migrations/Migrations_CreateRisks.js")
let risksmobile_rules_riskmanagementservice_migrations_migrations_deleteconfirmation_js = __webpack_require__(/*! ./risksmobile/Rules/RiskManagementService/Migrations/Migrations_DeleteConfirmation.js */ "./build.definitions/risksmobile/Rules/RiskManagementService/Migrations/Migrations_DeleteConfirmation.js")
let risksmobile_rules_riskmanagementservice_migrations_migrations_updateentity_js = __webpack_require__(/*! ./risksmobile/Rules/RiskManagementService/Migrations/Migrations_UpdateEntity.js */ "./build.definitions/risksmobile/Rules/RiskManagementService/Migrations/Migrations_UpdateEntity.js")
let risksmobile_rules_riskmanagementservice_migrations_navtomigrations_createrisks_js = __webpack_require__(/*! ./risksmobile/Rules/RiskManagementService/Migrations/NavToMigrations_CreateRisks.js */ "./build.definitions/risksmobile/Rules/RiskManagementService/Migrations/NavToMigrations_CreateRisks.js")
let risksmobile_rules_riskmanagementservice_migrations_navtomigrations_edit_js = __webpack_require__(/*! ./risksmobile/Rules/RiskManagementService/Migrations/NavToMigrations_Edit.js */ "./build.definitions/risksmobile/Rules/RiskManagementService/Migrations/NavToMigrations_Edit.js")
let risksmobile_rules_riskmanagementservice_risks_navtorisks_edit_js = __webpack_require__(/*! ./risksmobile/Rules/RiskManagementService/Risks/NavToRisks_Edit.js */ "./build.definitions/risksmobile/Rules/RiskManagementService/Risks/NavToRisks_Edit.js")
let risksmobile_rules_riskmanagementservice_risks_risks_cancel_js = __webpack_require__(/*! ./risksmobile/Rules/RiskManagementService/Risks/Risks_Cancel.js */ "./build.definitions/risksmobile/Rules/RiskManagementService/Risks/Risks_Cancel.js")
let risksmobile_rules_riskmanagementservice_risks_risks_createentity_js = __webpack_require__(/*! ./risksmobile/Rules/RiskManagementService/Risks/Risks_CreateEntity.js */ "./build.definitions/risksmobile/Rules/RiskManagementService/Risks/Risks_CreateEntity.js")
let risksmobile_rules_riskmanagementservice_risks_risks_deleteconfirmation_js = __webpack_require__(/*! ./risksmobile/Rules/RiskManagementService/Risks/Risks_DeleteConfirmation.js */ "./build.definitions/risksmobile/Rules/RiskManagementService/Risks/Risks_DeleteConfirmation.js")
let risksmobile_rules_riskmanagementservice_risks_risks_updateentity_js = __webpack_require__(/*! ./risksmobile/Rules/RiskManagementService/Risks/Risks_UpdateEntity.js */ "./build.definitions/risksmobile/Rules/RiskManagementService/Risks/Risks_UpdateEntity.js")
let risksmobile_rules_service_initialize_js = __webpack_require__(/*! ./risksmobile/Rules/Service/Initialize.js */ "./build.definitions/risksmobile/Rules/Service/Initialize.js")
let risksmobile_services_riskmanagementservice_service = __webpack_require__(/*! ./risksmobile/Services/RiskManagementService.service */ "./build.definitions/risksmobile/Services/RiskManagementService.service")
let risksmobile_styles_styles_css = __webpack_require__(/*! ./risksmobile/Styles/Styles.css */ "./build.definitions/risksmobile/Styles/Styles.css")
let risksmobile_styles_styles_less = __webpack_require__(/*! ./risksmobile/Styles/Styles.less */ "./build.definitions/risksmobile/Styles/Styles.less")
let risksmobile_styles_styles_light_css = __webpack_require__(/*! ./risksmobile/Styles/Styles.light.css */ "./build.definitions/risksmobile/Styles/Styles.light.css")
let risksmobile_styles_styles_light_json = __webpack_require__(/*! ./risksmobile/Styles/Styles.light.json */ "./build.definitions/risksmobile/Styles/Styles.light.json")
let risksmobile_styles_styles_light_nss = __webpack_require__(/*! ./risksmobile/Styles/Styles.light.nss */ "./build.definitions/risksmobile/Styles/Styles.light.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	risksmobile_actions_application_appupdate_action : risksmobile_actions_application_appupdate_action,
	risksmobile_actions_application_appupdatefailuremessage_action : risksmobile_actions_application_appupdatefailuremessage_action,
	risksmobile_actions_application_appupdateprogressbanner_action : risksmobile_actions_application_appupdateprogressbanner_action,
	risksmobile_actions_application_appupdatesuccessmessage_action : risksmobile_actions_application_appupdatesuccessmessage_action,
	risksmobile_actions_application_logout_action : risksmobile_actions_application_logout_action,
	risksmobile_actions_application_navtoabout_action : risksmobile_actions_application_navtoabout_action,
	risksmobile_actions_application_navtoactivitylog_action : risksmobile_actions_application_navtoactivitylog_action,
	risksmobile_actions_application_navtosupport_action : risksmobile_actions_application_navtosupport_action,
	risksmobile_actions_application_onwillupdate_action : risksmobile_actions_application_onwillupdate_action,
	risksmobile_actions_application_reset_action : risksmobile_actions_application_reset_action,
	risksmobile_actions_application_resetmessage_action : risksmobile_actions_application_resetmessage_action,
	risksmobile_actions_application_usermenupopover_action : risksmobile_actions_application_usermenupopover_action,
	risksmobile_actions_closemodalpage_cancel_action : risksmobile_actions_closemodalpage_cancel_action,
	risksmobile_actions_closemodalpage_complete_action : risksmobile_actions_closemodalpage_complete_action,
	risksmobile_actions_closepage_action : risksmobile_actions_closepage_action,
	risksmobile_actions_createentityfailuremessage_action : risksmobile_actions_createentityfailuremessage_action,
	risksmobile_actions_createentitysuccessmessage_action : risksmobile_actions_createentitysuccessmessage_action,
	risksmobile_actions_deleteconfirmation_action : risksmobile_actions_deleteconfirmation_action,
	risksmobile_actions_deleteentityfailuremessage_action : risksmobile_actions_deleteentityfailuremessage_action,
	risksmobile_actions_deleteentitysuccessmessage_action : risksmobile_actions_deleteentitysuccessmessage_action,
	risksmobile_actions_draftdiscardentity_action : risksmobile_actions_draftdiscardentity_action,
	risksmobile_actions_drafteditentity_action : risksmobile_actions_drafteditentity_action,
	risksmobile_actions_draftsaveentity_action : risksmobile_actions_draftsaveentity_action,
	risksmobile_actions_genericbannermessage_action : risksmobile_actions_genericbannermessage_action,
	risksmobile_actions_genericmessagebox_action : risksmobile_actions_genericmessagebox_action,
	risksmobile_actions_genericnavigation_action : risksmobile_actions_genericnavigation_action,
	risksmobile_actions_generictoastmessage_action : risksmobile_actions_generictoastmessage_action,
	risksmobile_actions_logging_loguploadfailure_action : risksmobile_actions_logging_loguploadfailure_action,
	risksmobile_actions_logging_loguploadsuccessful_action : risksmobile_actions_logging_loguploadsuccessful_action,
	risksmobile_actions_logging_uploadlog_action : risksmobile_actions_logging_uploadlog_action,
	risksmobile_actions_logging_uploadlogprogress_action : risksmobile_actions_logging_uploadlogprogress_action,
	risksmobile_actions_riskmanagementservice_migrations_migrations_createentity_action : risksmobile_actions_riskmanagementservice_migrations_migrations_createentity_action,
	risksmobile_actions_riskmanagementservice_migrations_migrations_createrisks_action : risksmobile_actions_riskmanagementservice_migrations_migrations_createrisks_action,
	risksmobile_actions_riskmanagementservice_migrations_migrations_deleteentity_action : risksmobile_actions_riskmanagementservice_migrations_migrations_deleteentity_action,
	risksmobile_actions_riskmanagementservice_migrations_migrations_detailpopover_action : risksmobile_actions_riskmanagementservice_migrations_migrations_detailpopover_action,
	risksmobile_actions_riskmanagementservice_migrations_migrations_updateentity_action : risksmobile_actions_riskmanagementservice_migrations_migrations_updateentity_action,
	risksmobile_actions_riskmanagementservice_migrations_navtomigrations_create_action : risksmobile_actions_riskmanagementservice_migrations_navtomigrations_create_action,
	risksmobile_actions_riskmanagementservice_migrations_navtomigrations_createrisks_action : risksmobile_actions_riskmanagementservice_migrations_navtomigrations_createrisks_action,
	risksmobile_actions_riskmanagementservice_migrations_navtomigrations_detail_action : risksmobile_actions_riskmanagementservice_migrations_navtomigrations_detail_action,
	risksmobile_actions_riskmanagementservice_migrations_navtomigrations_edit_action : risksmobile_actions_riskmanagementservice_migrations_navtomigrations_edit_action,
	risksmobile_actions_riskmanagementservice_migrations_navtomigrations_list_action : risksmobile_actions_riskmanagementservice_migrations_navtomigrations_list_action,
	risksmobile_actions_riskmanagementservice_risks_navtorisks_create_action : risksmobile_actions_riskmanagementservice_risks_navtorisks_create_action,
	risksmobile_actions_riskmanagementservice_risks_navtorisks_detail_action : risksmobile_actions_riskmanagementservice_risks_navtorisks_detail_action,
	risksmobile_actions_riskmanagementservice_risks_navtorisks_edit_action : risksmobile_actions_riskmanagementservice_risks_navtorisks_edit_action,
	risksmobile_actions_riskmanagementservice_risks_navtorisks_list_action : risksmobile_actions_riskmanagementservice_risks_navtorisks_list_action,
	risksmobile_actions_riskmanagementservice_risks_risks_createentity_action : risksmobile_actions_riskmanagementservice_risks_risks_createentity_action,
	risksmobile_actions_riskmanagementservice_risks_risks_deleteentity_action : risksmobile_actions_riskmanagementservice_risks_risks_deleteentity_action,
	risksmobile_actions_riskmanagementservice_risks_risks_updateentity_action : risksmobile_actions_riskmanagementservice_risks_risks_updateentity_action,
	risksmobile_actions_riskmanagementservice_service_initializeonline_action : risksmobile_actions_riskmanagementservice_service_initializeonline_action,
	risksmobile_actions_riskmanagementservice_service_initializeonlinefailuremessage_action : risksmobile_actions_riskmanagementservice_service_initializeonlinefailuremessage_action,
	risksmobile_actions_updateentityfailuremessage_action : risksmobile_actions_updateentityfailuremessage_action,
	risksmobile_actions_updateentitysuccessmessage_action : risksmobile_actions_updateentitysuccessmessage_action,
	risksmobile_globals_application_appdefinition_version_global : risksmobile_globals_application_appdefinition_version_global,
	risksmobile_globals_application_applicationname_global : risksmobile_globals_application_applicationname_global,
	risksmobile_globals_application_supportemail_global : risksmobile_globals_application_supportemail_global,
	risksmobile_globals_application_supportphone_global : risksmobile_globals_application_supportphone_global,
	risksmobile_i18n_i18n_properties : risksmobile_i18n_i18n_properties,
	risksmobile_jsconfig_json : risksmobile_jsconfig_json,
	risksmobile_pages_application_about_page : risksmobile_pages_application_about_page,
	risksmobile_pages_application_support_page : risksmobile_pages_application_support_page,
	risksmobile_pages_application_useractivitylog_page : risksmobile_pages_application_useractivitylog_page,
	risksmobile_pages_main_page : risksmobile_pages_main_page,
	risksmobile_pages_riskmanagementservice_migrations_migrations_create_page : risksmobile_pages_riskmanagementservice_migrations_migrations_create_page,
	risksmobile_pages_riskmanagementservice_migrations_migrations_createrisks_page : risksmobile_pages_riskmanagementservice_migrations_migrations_createrisks_page,
	risksmobile_pages_riskmanagementservice_migrations_migrations_detail_page : risksmobile_pages_riskmanagementservice_migrations_migrations_detail_page,
	risksmobile_pages_riskmanagementservice_migrations_migrations_edit_page : risksmobile_pages_riskmanagementservice_migrations_migrations_edit_page,
	risksmobile_pages_riskmanagementservice_migrations_migrations_list_page : risksmobile_pages_riskmanagementservice_migrations_migrations_list_page,
	risksmobile_pages_riskmanagementservice_risks_risks_create_page : risksmobile_pages_riskmanagementservice_risks_risks_create_page,
	risksmobile_pages_riskmanagementservice_risks_risks_detail_page : risksmobile_pages_riskmanagementservice_risks_risks_detail_page,
	risksmobile_pages_riskmanagementservice_risks_risks_edit_page : risksmobile_pages_riskmanagementservice_risks_risks_edit_page,
	risksmobile_pages_riskmanagementservice_risks_risks_list_page : risksmobile_pages_riskmanagementservice_risks_risks_list_page,
	risksmobile_rules_application_appupdatefailure_js : risksmobile_rules_application_appupdatefailure_js,
	risksmobile_rules_application_appupdatesuccess_js : risksmobile_rules_application_appupdatesuccess_js,
	risksmobile_rules_application_clientismultiusermode_js : risksmobile_rules_application_clientismultiusermode_js,
	risksmobile_rules_application_getclientsupportversions_js : risksmobile_rules_application_getclientsupportversions_js,
	risksmobile_rules_application_getclientversion_js : risksmobile_rules_application_getclientversion_js,
	risksmobile_rules_application_onwillupdate_js : risksmobile_rules_application_onwillupdate_js,
	risksmobile_rules_application_resetappsettingsandlogout_js : risksmobile_rules_application_resetappsettingsandlogout_js,
	risksmobile_rules_logging_loglevels_js : risksmobile_rules_logging_loglevels_js,
	risksmobile_rules_logging_settracecategories_js : risksmobile_rules_logging_settracecategories_js,
	risksmobile_rules_logging_setuserloglevel_js : risksmobile_rules_logging_setuserloglevel_js,
	risksmobile_rules_logging_togglelogging_js : risksmobile_rules_logging_togglelogging_js,
	risksmobile_rules_logging_tracecategories_js : risksmobile_rules_logging_tracecategories_js,
	risksmobile_rules_logging_userlogsetting_js : risksmobile_rules_logging_userlogsetting_js,
	risksmobile_rules_riskmanagementservice_migrations_migrations_cancel_js : risksmobile_rules_riskmanagementservice_migrations_migrations_cancel_js,
	risksmobile_rules_riskmanagementservice_migrations_migrations_createentity_js : risksmobile_rules_riskmanagementservice_migrations_migrations_createentity_js,
	risksmobile_rules_riskmanagementservice_migrations_migrations_createrisks_js : risksmobile_rules_riskmanagementservice_migrations_migrations_createrisks_js,
	risksmobile_rules_riskmanagementservice_migrations_migrations_deleteconfirmation_js : risksmobile_rules_riskmanagementservice_migrations_migrations_deleteconfirmation_js,
	risksmobile_rules_riskmanagementservice_migrations_migrations_updateentity_js : risksmobile_rules_riskmanagementservice_migrations_migrations_updateentity_js,
	risksmobile_rules_riskmanagementservice_migrations_navtomigrations_createrisks_js : risksmobile_rules_riskmanagementservice_migrations_navtomigrations_createrisks_js,
	risksmobile_rules_riskmanagementservice_migrations_navtomigrations_edit_js : risksmobile_rules_riskmanagementservice_migrations_navtomigrations_edit_js,
	risksmobile_rules_riskmanagementservice_risks_navtorisks_edit_js : risksmobile_rules_riskmanagementservice_risks_navtorisks_edit_js,
	risksmobile_rules_riskmanagementservice_risks_risks_cancel_js : risksmobile_rules_riskmanagementservice_risks_risks_cancel_js,
	risksmobile_rules_riskmanagementservice_risks_risks_createentity_js : risksmobile_rules_riskmanagementservice_risks_risks_createentity_js,
	risksmobile_rules_riskmanagementservice_risks_risks_deleteconfirmation_js : risksmobile_rules_riskmanagementservice_risks_risks_deleteconfirmation_js,
	risksmobile_rules_riskmanagementservice_risks_risks_updateentity_js : risksmobile_rules_riskmanagementservice_risks_risks_updateentity_js,
	risksmobile_rules_service_initialize_js : risksmobile_rules_service_initialize_js,
	risksmobile_services_riskmanagementservice_service : risksmobile_services_riskmanagementservice_service,
	risksmobile_styles_styles_css : risksmobile_styles_styles_css,
	risksmobile_styles_styles_less : risksmobile_styles_styles_less,
	risksmobile_styles_styles_light_css : risksmobile_styles_styles_light_css,
	risksmobile_styles_styles_light_json : risksmobile_styles_styles_light_json,
	risksmobile_styles_styles_light_nss : risksmobile_styles_styles_light_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/risksmobile/Rules/Application/AppUpdateFailure.js":
/*!*****************************************************************************!*\
  !*** ./build.definitions/risksmobile/Rules/Application/AppUpdateFailure.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
    let result = clientAPI.actionResults.AppUpdate.error.toString();
    var message;
    console.log(result);
    if (result.startsWith('Error: Uncaught app extraction failure:')) {
        result = 'Error: Uncaught app extraction failure:';
    }
    if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
        result = 'Application instance is not up or running';
    }
    if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
        result = 'Service instance not found.';
    }

    switch (result) {
        case 'Service instance not found.':
            message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
            break;
        case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
            message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
            break;
        case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
            message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
            break;
        case 'Error: Uncaught app extraction failure:':
            message = 'Error extracting metadata. Please redeploy and try again.';
            break;
        case 'Application instance is not up or running':
            message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
            break;
        default:
            message = result;
            break;
    }
    return clientAPI.getPageProxy().executeAction({
        "Name": "/risksmobile/Actions/Application/AppUpdateFailureMessage.action",
        "Properties": {
            "Duration": 0,
            "Message": message
        }
    });
}

/***/ }),

/***/ "./build.definitions/risksmobile/Rules/Application/AppUpdateSuccess.js":
/*!*****************************************************************************!*\
  !*** ./build.definitions/risksmobile/Rules/Application/AppUpdateSuccess.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
    return (new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, ms);
    }));
}
function AppUpdateSuccess(clientAPI) {
    var message;
    // Force a small pause to let the progress banner show in case there is no new version available
    return sleep(500).then(function() {
        let result = clientAPI.actionResults.AppUpdate.data;
        console.log(result);

        let versionNum = result.split(': ')[1];
        if (result.startsWith('Current version is already up to date')) {
            return clientAPI.getPageProxy().executeAction({
                "Name": "/risksmobile/Actions/Application/AppUpdateSuccessMessage.action",
                "Properties": {
                    "Message": `You are already using the latest version: ${versionNum}`,
                    "NumberOfLines": 2
                }
            });
        } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
            message = 'No Application metadata found. Please deploy your application and try again.';
            return clientAPI.getPageProxy().executeAction({
                "Name": "/risksmobile/Actions/Application/AppUpdateSuccessMessage.action",
                "Properties": {
                    "Duration": 5,
                    "Message": message,
                    "NumberOfLines": 2
                }
            });
        }
    });
}

/***/ }),

/***/ "./build.definitions/risksmobile/Rules/Application/ClientIsMultiUserMode.js":
/*!**********************************************************************************!*\
  !*** ./build.definitions/risksmobile/Rules/Application/ClientIsMultiUserMode.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientIsMultiUserMode)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ClientIsMultiUserMode(clientAPI) {
    return clientAPI.isAppInMultiUserMode();
}

/***/ }),

/***/ "./build.definitions/risksmobile/Rules/Application/GetClientSupportVersions.js":
/*!*************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Rules/Application/GetClientSupportVersions.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientSupportVersions)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientSupportVersions(clientAPI) {
    let versionInfo = clientAPI.getVersionInfo();
    let versionStr = '';
    Object.keys(versionInfo).forEach(function(key, index) {
        // key: the name of the object key
        // index: the ordinal position of the key within the object
        //console.log(`Key: ${key}   Index: ${index}`);
        if (key != 'Application Version') {
            versionStr += `${key}: ${versionInfo[key]}\n`;
        }
    });
    return versionStr;
}

/***/ }),

/***/ "./build.definitions/risksmobile/Rules/Application/GetClientVersion.js":
/*!*****************************************************************************!*\
  !*** ./build.definitions/risksmobile/Rules/Application/GetClientVersion.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientVersion)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientVersion(clientAPI) {
    let versionInfo = clientAPI.getVersionInfo();
    if (versionInfo.hasOwnProperty('Application Version')) {
        return versionInfo['Application Version'];
    }
}

/***/ }),

/***/ "./build.definitions/risksmobile/Rules/Application/OnWillUpdate.js":
/*!*************************************************************************!*\
  !*** ./build.definitions/risksmobile/Rules/Application/OnWillUpdate.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
    return clientAPI.executeAction('/risksmobile/Actions/Application/OnWillUpdate.action').then((result) => {
        if (result.data) {
            return Promise.resolve();
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/risksmobile/Rules/Application/ResetAppSettingsAndLogout.js":
/*!**************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Rules/Application/ResetAppSettingsAndLogout.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ResetAppSettingsAndLogout(clientAPI) {
    let logger = clientAPI.getLogger();
    let platform = clientAPI.nativescript.platformModule;
    let appSettings = clientAPI.nativescript.appSettingsModule;
    var appId;
    if (platform && (platform.isIOS || platform.isAndroid)) {
        appId = clientAPI.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
    } else {
        appId = 'WindowsClient';
    }
    try {
        // Remove any other app specific settings
        appSettings.getAllKeys().forEach(key => {
            if (key.substring(0, appId.length) === appId) {
                appSettings.remove(key);
            }
        });
    } catch (err) {
        logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
    } finally {
        // Logout 
        return clientAPI.getPageProxy().executeAction('/risksmobile/Actions/Application/Reset.action');
    }
}

/***/ }),

/***/ "./build.definitions/risksmobile/Rules/Logging/LogLevels.js":
/*!******************************************************************!*\
  !*** ./build.definitions/risksmobile/Rules/Logging/LogLevels.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogLevels)
/* harmony export */ });
function LogLevels(clientAPI) {
    var levels = [];
    levels.push({
        'DisplayValue': 'Error',
        'ReturnValue': 'Error',
    });
    levels.push({
        'DisplayValue': 'Warning',
        'ReturnValue': 'Warn',
    });
    levels.push({
        'DisplayValue': 'Info',
        'ReturnValue': 'Info',
    });
    levels.push({
        'DisplayValue': 'Debug',
        'ReturnValue': 'Debug',
    });
    levels.push({
        'DisplayValue': 'Trace',
        'ReturnValue': 'Trace',
    });
    return levels;
}

/***/ }),

/***/ "./build.definitions/risksmobile/Rules/Logging/SetTraceCategories.js":
/*!***************************************************************************!*\
  !*** ./build.definitions/risksmobile/Rules/Logging/SetTraceCategories.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetTraceCategories)
/* harmony export */ });
function SetTraceCategories(clientAPI) {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
    const odataTrace = fcsection.getControl('odataTrace');

    try {
        if (traceCategory.getValue()) {
            var values = traceCategory.getValue();
            var categories = [];

            if (values && values.length) {
                categories = values.map((value) => {
                    return 'mdk.trace.' + value.ReturnValue;
                });
            }
            clientAPI.setDebugSettings(odataTrace.getValue(), true, categories);
        }
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

/***/ }),

/***/ "./build.definitions/risksmobile/Rules/Logging/SetUserLogLevel.js":
/*!************************************************************************!*\
  !*** ./build.definitions/risksmobile/Rules/Logging/SetUserLogLevel.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetUserLogLevel)
/* harmony export */ });
function SetUserLogLevel(clientAPI) {
    try {
        if (clientAPI.getValue() && clientAPI.getValue()[0]) {
            var logger = clientAPI.getLogger();
            var listPickerValue = clientAPI.getValue()[0].ReturnValue;
            if (listPickerValue) {
                switch (listPickerValue) {
                    case 'Debug':
                        logger.setLevel('Debug');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Error':
                        logger.setLevel('Error');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Warn':
                        logger.setLevel('Warn');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Info':
                        logger.setLevel('Info');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Trace':
                        logger.setLevel('Trace');
                        ShowTraceOptions(clientAPI, true);
                        break;
                    default:
                        // eslint-disable-next-line no-console
                        console.log(`unrecognized key ${listPickerValue}`);
                }
                return listPickerValue;
            }
        }
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

function ShowTraceOptions(clientAPI, tracingEnabled) {
    let categories = clientAPI.getPageProxy().getControl('SectionedTable').getControl('TracingCategoriesListPicker');
    let odataTrace = clientAPI.getPageProxy().getControl('SectionedTable').getControl('odataTrace');

    categories.setVisible(tracingEnabled);
    odataTrace.setVisible(tracingEnabled);
}

/***/ }),

/***/ "./build.definitions/risksmobile/Rules/Logging/ToggleLogging.js":
/*!**********************************************************************!*\
  !*** ./build.definitions/risksmobile/Rules/Logging/ToggleLogging.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleLogging)
/* harmony export */ });
function ToggleLogging(clientAPI) {
    try {
        var logger = clientAPI.getLogger();
        const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
        const fcsection = sectionedTable.getSection('FormCellSection0');
        const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
        const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
        let switchValue = enableLogSwitch.getValue();
        if (switchValue) {
            logger.on();
            logLevelListPicker.setVisible(true);
            logLevelListPicker.setEditable(true);
            logLevelListPicker.redraw();
        } else {
            logger.off();
            logLevelListPicker.setEditable(false);
            logLevelListPicker.setVisible(false);
            logLevelListPicker.redraw();
        }
        return switchValue;
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

/***/ }),

/***/ "./build.definitions/risksmobile/Rules/Logging/TraceCategories.js":
/*!************************************************************************!*\
  !*** ./build.definitions/risksmobile/Rules/Logging/TraceCategories.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TraceCategories)
/* harmony export */ });
function TraceCategories(clientAPI) {
    var categories = ['action', 'api', 'app', 'binding', 'branding',
        'core', 'i18n', 'lcms', 'logging', 'odata', 'onboarding', 'profiling', 'push',
        'restservice', 'settings', 'targetpath', 'ui'
    ];

    var values = [];
    categories.forEach((category) => {
        values.push({
            'DisplayValue': category,
            'ReturnValue': category,
        });
    });

    return values;
}

/***/ }),

/***/ "./build.definitions/risksmobile/Rules/Logging/UserLogSetting.js":
/*!***********************************************************************!*\
  !*** ./build.definitions/risksmobile/Rules/Logging/UserLogSetting.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserLogSetting)
/* harmony export */ });
function UserLogSetting(clientAPI) {

    try {
        var logger = clientAPI.getLogger();

        const sectionedTable = clientAPI.getControl('SectionedTable');
        const fcsection = sectionedTable.getSection('FormCellSection0');
        const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
        const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
        const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
        const odataTrace = fcsection.getControl('odataTrace');


        //Persist the user logging preferences
        if (logger) {
            console.log("in logger state");
            if (logger.isTurnedOn()) {
                if (enableLogSwitch) {
                    enableLogSwitch.setValue(true);
                }
                if (logLevelListPicker) {
                    logLevelListPicker.setEditable(true);
                }
            } else {
                if (enableLogSwitch) {
                    enableLogSwitch.setValue(false);
                }
                if (logLevelListPicker) {
                    logLevelListPicker.setEditable(false);
                }
            }
            var logLevel = logger.getLevel();
            if (logLevel) {
                if (logLevelListPicker) {
                    logLevelListPicker.setValue([logLevel]);
                }
            }
            if (logLevel === 'Trace') {
                traceCategory.setVisible(true);
                odataTrace.setVisible(true);
            }

            //Upon selecting a value in the List picker and clicking the back button 
            //will enable the onload page rule. This will set the selected value
            //in the control
            if (logLevelListPicker.getValue()[0]) {
                var returnValue = logLevelListPicker.getValue()[0].ReturnValue;
                if (returnValue) {
                    logLevelListPicker.setValue([returnValue]);
                    logger.setLevel(returnValue);
                }
            }
        }
    } catch (exception) {
        // eslint-disable-next-line no-console
        console.log(String(exception), 'Error User Logger could not be set');
    }
}

/***/ }),

/***/ "./build.definitions/risksmobile/Rules/RiskManagementService/Migrations/Migrations_Cancel.js":
/*!***************************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Rules/RiskManagementService/Migrations/Migrations_Cancel.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cancel)
/* harmony export */ });
function Cancel(clientAPI) {
    if (clientAPI.getODataProvider('/risksmobile/Services/RiskManagementService.service').isDraftEnabled('Migrations')) {
        return clientAPI.executeAction({
            'Name': '/risksmobile/Actions/DraftDiscardEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Migrations'
                },
                'OnSuccess': '/risksmobile/Actions/CloseModalPage_Cancel.action'
            }
        });
    } else {
        return clientAPI.executeAction('/risksmobile/Actions/CloseModalPage_Cancel.action');
    }
}

/***/ }),

/***/ "./build.definitions/risksmobile/Rules/RiskManagementService/Migrations/Migrations_CreateEntity.js":
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Rules/RiskManagementService/Migrations/Migrations_CreateEntity.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateEntity)
/* harmony export */ });
function CreateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/risksmobile/Services/RiskManagementService.service').isDraftEnabled('Migrations')) {
        return clientAPI.executeAction({
            'Name': '/risksmobile/Actions/RiskManagementService/Migrations/Migrations_CreateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            let newEntity = JSON.parse(result.data);
            return clientAPI.executeAction({
                'Name': '/risksmobile/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Migrations',
                        'ReadLink': newEntity['@odata.readLink']
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/risksmobile/Actions/RiskManagementService/Migrations/Migrations_CreateEntity.action');
    }
}

/***/ }),

/***/ "./build.definitions/risksmobile/Rules/RiskManagementService/Migrations/Migrations_CreateRisks.js":
/*!********************************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Rules/RiskManagementService/Migrations/Migrations_CreateRisks.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateRelatedEntity)
/* harmony export */ });
function CreateRelatedEntity(clientAPI) {
    if (clientAPI.getODataProvider('/risksmobile/Services/RiskManagementService.service').isDraftEnabled('Migrations')) {
        let readLink = clientAPI.binding['@odata.readLink'];
        return clientAPI.executeAction({
            'Name': '/risksmobile/Actions/RiskManagementService/Migrations/Migrations_CreateRisks.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/risksmobile/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Migrations',
                        'ReadLink': readLink
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/risksmobile/Actions/RiskManagementService/Migrations/Migrations_CreateRisks.action');
    }
}

/***/ }),

/***/ "./build.definitions/risksmobile/Rules/RiskManagementService/Migrations/Migrations_DeleteConfirmation.js":
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Rules/RiskManagementService/Migrations/Migrations_DeleteConfirmation.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/risksmobile/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/risksmobile/Actions/RiskManagementService/Migrations/Migrations_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/risksmobile/Rules/RiskManagementService/Migrations/Migrations_UpdateEntity.js":
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Rules/RiskManagementService/Migrations/Migrations_UpdateEntity.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UpdateEntity)
/* harmony export */ });
function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/risksmobile/Services/RiskManagementService.service').isDraftEnabled('Migrations')) {
        return clientAPI.executeAction({
            'Name': '/risksmobile/Actions/RiskManagementService/Migrations/Migrations_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/risksmobile/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Migrations'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/risksmobile/Actions/RiskManagementService/Migrations/Migrations_UpdateEntity.action');
    }
}

/***/ }),

/***/ "./build.definitions/risksmobile/Rules/RiskManagementService/Migrations/NavToMigrations_CreateRisks.js":
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Rules/RiskManagementService/Migrations/NavToMigrations_CreateRisks.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavToCreate)
/* harmony export */ });
function NavToCreate(clientAPI) {
    if (clientAPI.getODataProvider('/risksmobile/Services/RiskManagementService.service').isDraftEnabled('Migrations')) {
        return clientAPI.executeAction({
            'Name': '/risksmobile/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Migrations'
                },
                'OnSuccess': '/risksmobile/Actions/RiskManagementService/Migrations/NavToMigrations_CreateRisks.action'
            }
        });
    } else {
        return clientAPI.executeAction('/risksmobile/Actions/RiskManagementService/Migrations/NavToMigrations_CreateRisks.action');
    }
}

/***/ }),

/***/ "./build.definitions/risksmobile/Rules/RiskManagementService/Migrations/NavToMigrations_Edit.js":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Rules/RiskManagementService/Migrations/NavToMigrations_Edit.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavToEdit)
/* harmony export */ });
function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/risksmobile/Services/RiskManagementService.service').isDraftEnabled('Migrations')) {
        return clientAPI.executeAction({
            'Name': '/risksmobile/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Migrations'
                },
                'OnSuccess': '/risksmobile/Actions/RiskManagementService/Migrations/NavToMigrations_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/risksmobile/Actions/RiskManagementService/Migrations/NavToMigrations_Edit.action');
    }
}

/***/ }),

/***/ "./build.definitions/risksmobile/Rules/RiskManagementService/Risks/NavToRisks_Edit.js":
/*!********************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Rules/RiskManagementService/Risks/NavToRisks_Edit.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavToEdit)
/* harmony export */ });
function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/risksmobile/Services/RiskManagementService.service').isDraftEnabled('Risks')) {
        return clientAPI.executeAction({
            'Name': '/risksmobile/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Risks'
                },
                'OnSuccess': '/risksmobile/Actions/RiskManagementService/Risks/NavToRisks_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/risksmobile/Actions/RiskManagementService/Risks/NavToRisks_Edit.action');
    }
}

/***/ }),

/***/ "./build.definitions/risksmobile/Rules/RiskManagementService/Risks/Risks_Cancel.js":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Rules/RiskManagementService/Risks/Risks_Cancel.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cancel)
/* harmony export */ });
function Cancel(clientAPI) {
    if (clientAPI.getODataProvider('/risksmobile/Services/RiskManagementService.service').isDraftEnabled('Risks')) {
        return clientAPI.executeAction({
            'Name': '/risksmobile/Actions/DraftDiscardEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Risks'
                },
                'OnSuccess': '/risksmobile/Actions/CloseModalPage_Cancel.action'
            }
        });
    } else {
        return clientAPI.executeAction('/risksmobile/Actions/CloseModalPage_Cancel.action');
    }
}

/***/ }),

/***/ "./build.definitions/risksmobile/Rules/RiskManagementService/Risks/Risks_CreateEntity.js":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Rules/RiskManagementService/Risks/Risks_CreateEntity.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateEntity)
/* harmony export */ });
function CreateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/risksmobile/Services/RiskManagementService.service').isDraftEnabled('Risks')) {
        return clientAPI.executeAction({
            'Name': '/risksmobile/Actions/RiskManagementService/Risks/Risks_CreateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            let newEntity = JSON.parse(result.data);
            return clientAPI.executeAction({
                'Name': '/risksmobile/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Risks',
                        'ReadLink': newEntity['@odata.readLink']
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/risksmobile/Actions/RiskManagementService/Risks/Risks_CreateEntity.action');
    }
}

/***/ }),

/***/ "./build.definitions/risksmobile/Rules/RiskManagementService/Risks/Risks_DeleteConfirmation.js":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Rules/RiskManagementService/Risks/Risks_DeleteConfirmation.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/risksmobile/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/risksmobile/Actions/RiskManagementService/Risks/Risks_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/risksmobile/Rules/RiskManagementService/Risks/Risks_UpdateEntity.js":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Rules/RiskManagementService/Risks/Risks_UpdateEntity.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UpdateEntity)
/* harmony export */ });
function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/risksmobile/Services/RiskManagementService.service').isDraftEnabled('Risks')) {
        return clientAPI.executeAction({
            'Name': '/risksmobile/Actions/RiskManagementService/Risks/Risks_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/risksmobile/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Risks'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/risksmobile/Actions/RiskManagementService/Risks/Risks_UpdateEntity.action');
    }
}

/***/ }),

/***/ "./build.definitions/risksmobile/Rules/Service/Initialize.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/risksmobile/Rules/Service/Initialize.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Initialize)
/* harmony export */ });
function Initialize(context) {

    // Perform pre data initialization task

    // Initialize all your Data sources
    let _RiskManagementService = context.executeAction('/risksmobile/Actions/RiskManagementService/Service/InitializeOnline.action');

    //You can add more service initialize actions here

    return Promise.all([_RiskManagementService]).then(() => {
        // After Initializing the DB connections

        // Display successful initialization  message to the user
        return context.executeAction({

            "Name": "/risksmobile/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": "Application Services Initialized",
                "Animated": true,
                "Duration": 1,
                "IsIconHidden": true,
                "NumberOfLines": 1
            }
        });
    }).catch(() => {
        return false;
    });
}

/***/ }),

/***/ "./build.definitions/risksmobile/Styles/Styles.css":
/*!*********************************************************!*\
  !*** ./build.definitions/risksmobile/Styles/Styles.css ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/noSourceMaps.js */ "../../../../css-loader/dist/runtime/noSourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/
`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/risksmobile/Styles/Styles.less":
/*!**********************************************************!*\
  !*** ./build.definitions/risksmobile/Styles/Styles.less ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/noSourceMaps.js */ "../../../../css-loader/dist/runtime/noSourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/risksmobile/Styles/Styles.light.css":
/*!***************************************************************!*\
  !*** ./build.definitions/risksmobile/Styles/Styles.light.css ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/noSourceMaps.js */ "../../../../css-loader/dist/runtime/noSourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/risksmobile/Styles/Styles.light.nss":
/*!***************************************************************!*\
  !*** ./build.definitions/risksmobile/Styles/Styles.light.nss ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/noSourceMaps.js */ "../../../../css-loader/dist/runtime/noSourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../../../css-loader/dist/runtime/api.js":
/*!**************************************************!*\
  !*** ../../../../css-loader/dist/runtime/api.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../../../css-loader/dist/runtime/noSourceMaps.js":
/*!***********************************************************!*\
  !*** ../../../../css-loader/dist/runtime/noSourceMaps.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./build.definitions/risksmobile/Pages/Application/About.page":
/*!********************************************************************!*\
  !*** ./build.definitions/risksmobile/Pages/Application/About.page ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"KeyAndValues":[{"_Name":"KeyValue0","KeyName":"User ID","Value":"#Application/#AppData/UserId","Visible":true},{"Value":"#Application/#AppData/DeviceId","_Name":"KeyValue1","KeyName":"Device ID","Visible":true},{"Value":"/risksmobile/Globals/Application/ApplicationName.global","_Name":"KeyValue2","KeyName":"Application","Visible":true},{"Value":"/risksmobile/Globals/Application/AppDefinition_Version.global","_Name":"KeyValue3","KeyName":"Application Metadata Version","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}},{"KeyAndValues":[{"Value":"/risksmobile/Rules/Application/GetClientVersion.js","_Name":"KeyValue4","KeyName":"Client Version","Visible":"$(PLT,true,true,false)"},{"Value":"/risksmobile/Rules/Application/GetClientSupportVersions.js","_Name":"KeyValue5","KeyName":"Client Support Versions","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue1","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"About","Caption":"About","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/risksmobile/Actions/CloseModalPage_Complete.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/risksmobile/Pages/Application/Support.page":
/*!**********************************************************************!*\
  !*** ./build.definitions/risksmobile/Pages/Application/Support.page ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ContactCell","_Name":"SectionContactCellTable1","EmptySection":{"FooterVisible":false},"ContactCells":[{"ContactCell":{"_Name":"ContactCellItem0","Headline":"Contact Support","ActivityItems":[{"ActivityType":"Phone","ActivityValue":"/risksmobile/Globals/Application/SupportPhone.global"},{"ActivityType":"Email","ActivityValue":"/risksmobile/Globals/Application/SupportEmail.global"},{"ActivityType":"Message","ActivityValue":"/risksmobile/Globals/Application/SupportPhone.global"}]}}]},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":false,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.SimplePropertyCollection","_Name":"SectionSimplePropertyCollection0","Visible":"$(PLT,true,true,false)","EmptySection":{"FooterVisible":false},"SimplePropertyCells":[{"SimplePropertyCell":{"_Name":"SectionSimplePropertyCell0","KeyName":"Activity Log","AccessoryType":"DisclosureIndicator","Visible":"$(PLT,true,true,false)","OnPress":"/risksmobile/Actions/Application/NavToActivityLog.action"}}],"Layout":{"NumberOfColumns":1,"MinimumInteritemSpacing":66}}]}],"_Type":"Page","_Name":"Settings","Caption":"Settings","PrefersLargeCaption":false,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/risksmobile/Actions/CloseModalPage_Complete.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/risksmobile/Pages/Application/UserActivityLog.page":
/*!******************************************************************************!*\
  !*** ./build.definitions/risksmobile/Pages/Application/UserActivityLog.page ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Controls":[{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"EnableLogSwitch","IsVisible":true,"Separator":true,"Caption":"Enable Logging","OnValueChange":"/risksmobile/Rules/Logging/ToggleLogging.js","IsEditable":true},{"IsSearchEnabled":false,"_Type":"Control.Type.FormCell.ListPicker","_Name":"LogLevelListPicker","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Log Level","OnValueChange":"/risksmobile/Rules/Logging/SetUserLogLevel.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":false,"PickerItems":"/risksmobile/Rules/Logging/LogLevels.js"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"TracingCategoriesListPicker","IsVisible":false,"Separator":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Tracing Categories","PickerPrompt":"Select Categories for Tracing","OnValueChange":"/risksmobile/Rules/Logging/SetTraceCategories.js","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":"/risksmobile/Rules/Logging/TraceCategories.js"},{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"odataTrace","IsVisible":false,"Separator":true,"Caption":"OData Tracing","OnValueChange":"/risksmobile/Rules/Logging/SetTraceCategories.js","IsEditable":true}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection0"},{"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"Send","IsVisible":true,"Separator":true,"Title":"Send Activity Log","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Enabled":true,"OnPress":"/risksmobile/Actions/Logging/UploadLogProgress.action"}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection1"}]}],"_Type":"Page","_Name":"UserActivityLog","Caption":"Activity Log","PrefersLargeCaption":false,"OnLoaded":"/risksmobile/Rules/Logging/UserLogSetting.js"}

/***/ }),

/***/ "./build.definitions/risksmobile/Pages/Main.page":
/*!*******************************************************!*\
  !*** ./build.definitions/risksmobile/Pages/Main.page ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ButtonTable","_Name":"SectionButtonTable_RiskManagementService","Header":{"_Type":"SectionCommon.Type.Header","_Name":"SectionHeader_RiskManagementService","AccessoryType":"None","UseTopPadding":true,"Caption":"RiskManagementService"},"Visible":true,"EmptySection":{"FooterVisible":false},"Buttons":[{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton0","Title":"Migrations","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/risksmobile/Actions/RiskManagementService/Migrations/NavToMigrations_List.action"},{"_Type":"ButtonTable.Type.Button","_Name":"ButtonTableTypeButton1","Title":"Risks","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/risksmobile/Actions/RiskManagementService/Risks/NavToRisks_List.action"}],"Layout":{"LayoutType":"Vertical","HorizontalAlignment":"Leading"}}]}],"_Type":"Page","_Name":"RiskManagement","Caption":"Risk Management","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"User Menu","Icon":"sap-icon://customer","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/risksmobile/Actions/Application/UserMenuPopover.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/risksmobile/Pages/RiskManagementService_Migrations/Migrations_Create.page":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Pages/RiskManagementService_Migrations/Migrations_Create.page ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/risksmobile/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/risksmobile/Rules/RiskManagementService/Migrations/Migrations_CreateEntity.js","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Migrations Detail","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"createdAt","_Name":"createdAt","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"createdBy","_Name":"createdBy","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"description","_Name":"description","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"owner","_Name":"owner","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"timeline","_Name":"timeline","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Migrations_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/risksmobile/Pages/RiskManagementService_Migrations/Migrations_CreateRisks.page":
/*!**********************************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Pages/RiskManagementService_Migrations/Migrations_CreateRisks.page ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/risksmobile/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/risksmobile/Rules/RiskManagementService/Migrations/Migrations_CreateRisks.js","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Risks","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"title","_Name":"title","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"prio","_Name":"prio","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"description","_Name":"description","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"impact","KeyboardType":"Number","_Name":"impact","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"criticality","KeyboardType":"Number","_Name":"criticality","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"supplier_BusinessPartner","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{BusinessPartner}","ReturnValue":"{BusinessPartner}","Target":{"EntitySet":"A_BusinessPartner","Service":"/risksmobile/Services/RiskManagementService.service"}},"_Name":"supplier_BusinessPartner","_Type":"Control.Type.FormCell.ListPicker"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Migrations_CreateRisks","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/risksmobile/Pages/RiskManagementService_Migrations/Migrations_Detail.page":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Pages/RiskManagementService_Migrations/Migrations_Detail.page ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Migrations Detail","DesignTimeTarget":{"Service":"/risksmobile/Services/RiskManagementService.service","EntitySet":"Migrations","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/risksmobile/Rules/RiskManagementService/Migrations/NavToMigrations_Edit.js","Position":"Right","SystemItem":"Edit"},{"OnPress":"/risksmobile/Actions/RiskManagementService/Migrations/Migrations_DetailPopover.action","Position":"Right","Caption":"More"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{ID}","Subhead":"{createdAt}","BodyText":"","Footnote":"{description}","Description":"{createdBy}","StatusText":"{owner}","StatusImage":"","SubstatusImage":"","SubstatusText":"{timeline}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"createdAt","Value":"{createdAt}"},{"KeyName":"createdBy","Value":"{createdBy}"},{"KeyName":"description","Value":"{description}"},{"KeyName":"owner","Value":"{owner}"},{"KeyName":"timeline","Value":"{timeline}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"risks","_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{description}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{title}","Footnote":"{impact}","PreserveIconStackSpacing":false,"StatusText":"{criticality}","Subhead":"{prio}","SubstatusText":"{supplier_BusinessPartner}","OnPress":"/risksmobile/Actions/RiskManagementService/Risks/NavToRisks_Detail.action"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/risks","Service":"/risksmobile/Services/RiskManagementService.service"},"_Type":"Section.Type.ObjectTable"}],"DataSubscriptions":["Risks"],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Migrations_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/risksmobile/Pages/RiskManagementService_Migrations/Migrations_Edit.page":
/*!***************************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Pages/RiskManagementService_Migrations/Migrations_Edit.page ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update Migrations Detail","DesignTimeTarget":{"Service":"/risksmobile/Services/RiskManagementService.service","EntitySet":"Migrations","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","Caption":"Cancel","OnPress":"/risksmobile/Rules/RiskManagementService/Migrations/Migrations_Cancel.js"},{"Position":"Right","SystemItem":"Save","OnPress":"/risksmobile/Rules/RiskManagementService/Migrations/Migrations_UpdateEntity.js"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"createdAt","_Name":"createdAt","Value":"{createdAt}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"createdBy","_Name":"createdBy","Value":"{createdBy}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"description","_Name":"description","Value":"{description}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"owner","_Name":"owner","Value":"{owner}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"timeline","_Name":"timeline","Value":"{timeline}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Migrations_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/risksmobile/Pages/RiskManagementService_Migrations/Migrations_List.page":
/*!***************************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Pages/RiskManagementService_Migrations/Migrations_List.page ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Migrations","ActionBar":{"Items":[{"OnPress":"/risksmobile/Actions/RiskManagementService/Migrations/NavToMigrations_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{createdBy}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/risksmobile/Actions/RiskManagementService/Migrations/NavToMigrations_Detail.action","StatusImage":"","Title":"{ID}","Footnote":"{description}","PreserveIconStackSpacing":false,"StatusText":"{owner}","Subhead":"{createdAt}","SubstatusText":"{timeline}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Migrations","Service":"/risksmobile/Services/RiskManagementService.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Migrations_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/risksmobile/Pages/RiskManagementService_Risks/Risks_Create.page":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Pages/RiskManagementService_Risks/Risks_Create.page ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/risksmobile/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/risksmobile/Rules/RiskManagementService/Risks/Risks_CreateEntity.js","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Risks Detail","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"title","_Name":"title","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"prio","_Name":"prio","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"description","_Name":"description","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"impact","KeyboardType":"Number","_Name":"impact","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"criticality","KeyboardType":"Number","_Name":"criticality","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"supplier_BusinessPartner","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{BusinessPartner}","ReturnValue":"{BusinessPartner}","Target":{"EntitySet":"A_BusinessPartner","Service":"/risksmobile/Services/RiskManagementService.service"}},"_Name":"supplier_BusinessPartner","_Type":"Control.Type.FormCell.ListPicker"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Risks_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/risksmobile/Pages/RiskManagementService_Risks/Risks_Detail.page":
/*!*******************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Pages/RiskManagementService_Risks/Risks_Detail.page ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Risks Detail","DesignTimeTarget":{"Service":"/risksmobile/Services/RiskManagementService.service","EntitySet":"Risks","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/risksmobile/Rules/RiskManagementService/Risks/NavToRisks_Edit.js","Position":"Right","SystemItem":"Edit"},{"OnPress":"/risksmobile/Rules/RiskManagementService/Risks/Risks_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{title}","Subhead":"{prio}","BodyText":"","Footnote":"{impact}","Description":"{description}","StatusText":"{criticality}","StatusImage":"","SubstatusImage":"","SubstatusText":"{supplier_BusinessPartner}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"title","Value":"{title}"},{"KeyName":"prio","Value":"{prio}"},{"KeyName":"description","Value":"{description}"},{"KeyName":"impact","Value":"{impact}"},{"KeyName":"criticality","Value":"{criticality}"},{"KeyName":"supplier_BusinessPartner","Value":"{supplier_BusinessPartner}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Risks_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/risksmobile/Pages/RiskManagementService_Risks/Risks_Edit.page":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Pages/RiskManagementService_Risks/Risks_Edit.page ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update Risks Detail","DesignTimeTarget":{"Service":"/risksmobile/Services/RiskManagementService.service","EntitySet":"Risks","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","Caption":"Cancel","OnPress":"/risksmobile/Rules/RiskManagementService/Risks/Risks_Cancel.js"},{"Position":"Right","SystemItem":"Save","OnPress":"/risksmobile/Rules/RiskManagementService/Risks/Risks_UpdateEntity.js"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"title","_Name":"title","Value":"{title}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"prio","_Name":"prio","Value":"{prio}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"description","_Name":"description","Value":"{description}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"impact","_Name":"impact","Value":"{impact}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"criticality","_Name":"criticality","Value":"{criticality}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"supplier_BusinessPartner","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{BusinessPartner}","ReturnValue":"{BusinessPartner}","Target":{"EntitySet":"A_BusinessPartner","Service":"/risksmobile/Services/RiskManagementService.service"}},"Value":"{supplier_BusinessPartner}","_Name":"supplier_BusinessPartner","_Type":"Control.Type.FormCell.ListPicker"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Risks_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/risksmobile/Pages/RiskManagementService_Risks/Risks_List.page":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Pages/RiskManagementService_Risks/Risks_List.page ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Risks","ActionBar":{"Items":[{"OnPress":"/risksmobile/Actions/RiskManagementService/Risks/NavToRisks_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{description}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/risksmobile/Actions/RiskManagementService/Risks/NavToRisks_Detail.action","StatusImage":"","Title":"{title}","Footnote":"{impact}","PreserveIconStackSpacing":false,"StatusText":"{criticality}","Subhead":"{prio}","SubstatusText":"{supplier_BusinessPartner}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Risks","Service":"/risksmobile/Services/RiskManagementService.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Risks_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"_Name":"risksmobile","Version":"/risksmobile/Globals/Application/AppDefinition_Version.global","MainPage":"/risksmobile/Pages/Main.page","OnLaunch":"/risksmobile/Rules/Service/Initialize.js","OnWillUpdate":"/risksmobile/Rules/Application/OnWillUpdate.js","OnDidUpdate":"/risksmobile/Rules/Service/Initialize.js","Styles":"/risksmobile/Styles/Styles.css","Localization":"/risksmobile/i18n/i18n.properties","_SchemaVersion":"24.7","StyleSheets":{"Styles":{"css":"/risksmobile/Styles/Styles.light.css","ios":"/risksmobile/Styles/Styles.light.nss","android":"/risksmobile/Styles/Styles.light.json"}},"SDKStyles":{"ios":"/risksmobile/Styles/Styles.light.nss","android":"/risksmobile/Styles/Styles.light.json"}}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/Application/AppUpdate.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/Application/AppUpdate.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/risksmobile/Rules/Application/AppUpdateFailure.js","OnSuccess":"/risksmobile/Rules/Application/AppUpdateSuccess.js"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/Application/AppUpdateFailureMessage.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/Application/AppUpdateFailureMessage.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to update application - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/Application/AppUpdateProgressBanner.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/Application/AppUpdateProgressBanner.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/risksmobile/Actions/Application/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/Application/AppUpdateSuccessMessage.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/Application/AppUpdateSuccessMessage.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Update application complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/Application/Logout.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/Application/Logout.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":true}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/Application/NavToAbout.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/Application/NavToAbout.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/risksmobile/Pages/Application/About.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/Application/NavToActivityLog.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/Application/NavToActivityLog.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/risksmobile/Pages/Application/UserActivityLog.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/Application/NavToSupport.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/Application/NavToSupport.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"NavigationType":"Cross","PageToOpen":"/risksmobile/Pages/Application/Support.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/Application/OnWillUpdate.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/Application/OnWillUpdate.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"A new version of the application is now ready to apply. Do you want to update to this version?","Title":"New Version Available!","OKCaption":"Now","CancelCaption":"Later","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/Application/Reset.action":
/*!************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/Application/Reset.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":false}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/Application/ResetMessage.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/Application/ResetMessage.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?","Title":"Reset","OKCaption":"Yes","OnOK":"/risksmobile/Rules/Application/ResetAppSettingsAndLogout.js","CancelCaption":"No"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/Application/UserMenuPopover.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/Application/UserMenuPopover.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Enabled":true,"Icon":"sap-icon://headset","OnPress":"/risksmobile/Actions/Application/NavToSupport.action","Title":"Support","Visible":true},{"Enabled":true,"Icon":"sap-icon://refresh","OnPress":"/risksmobile/Actions/Application/AppUpdateProgressBanner.action","Title":"Check for Updates","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://hint","OnPress":"/risksmobile/Actions/Application/NavToAbout.action","Title":"About","Visible":true},{"Enabled":true,"Icon":"sap-icon://reset","OnPress":"/risksmobile/Actions/Application/ResetMessage.action","Title":"Reset","Visible":true},{"Enabled":true,"Icon":"sap-icon://log","OnPress":"/risksmobile/Actions/Application/Logout.action","Title":"Logout","Visible":"/risksmobile/Rules/Application/ClientIsMultiUserMode.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/CloseModalPage_Cancel.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/CloseModalPage_Cancel.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/CloseModalPage_Complete.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/CloseModalPage_Complete.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/ClosePage.action":
/*!****************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/ClosePage.action ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/CreateEntityFailureMessage.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/CreateEntityFailureMessage.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Create entity failure - {#ActionResults:create/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/CreateEntitySuccessMessage.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/CreateEntitySuccessMessage.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity created","IsIconHidden":true,"OnSuccess":"/risksmobile/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/DeleteConfirmation.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/DeleteConfirmation.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"Delete current entity?","Title":"Confirmation","OKCaption":"OK","CancelCaption":"Cancel","ActionResult":{"_Name":"DeleteConfirmation"}}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/DeleteEntityFailureMessage.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/DeleteEntityFailureMessage.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Delete entity failure - {#ActionResults:delete/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/DeleteEntitySuccessMessage.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/DeleteEntitySuccessMessage.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity deleted","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/risksmobile/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/DraftDiscardEntity.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/DraftDiscardEntity.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.DraftEnabled.Discard","Target":{"Service":"/risksmobile/Services/RiskManagementService.service","EntitySet":"Migrations","ReadLink":"{@odata.readLink}"},"ShowActivityIndicator":true,"ActionResult":{"_Name":"update"},"OnSuccess":{"Name":"/risksmobile/Actions/UpdateEntitySuccessMessage.action","Properties":{"Message":"Draft Discarded"}},"OnFailure":"/risksmobile/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/DraftEditEntity.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/DraftEditEntity.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.DraftEnabled.Edit","Target":{"Service":"/risksmobile/Services/RiskManagementService.service","EntitySet":"Migrations","ReadLink":"{@odata.readLink}"},"ShowActivityIndicator":true,"ActionResult":{"_Name":"update"},"OnSuccess":{"Name":"/risksmobile/Actions/UpdateEntitySuccessMessage.action","Properties":{"Message":"Draft Edit"}},"OnFailure":"/risksmobile/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/DraftSaveEntity.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/DraftSaveEntity.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.DraftEnabled.Save","Target":{"Service":"/risksmobile/Services/RiskManagementService.service","EntitySet":"Migrations","ReadLink":"{@odata.readLink}"},"ShowActivityIndicator":true,"ActionResult":{"_Name":"update"},"OnSuccess":{"Name":"/risksmobile/Actions/UpdateEntitySuccessMessage.action","Properties":{"Message":"Draft Saved"}},"OnFailure":"/risksmobile/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/GenericBannerMessage.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/GenericBannerMessage.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","ActionResult":{"_Name":"GenericBannerMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/GenericMessageBox.action":
/*!************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/GenericMessageBox.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"GenericMessageBox"},"Message":"Message","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/GenericNavigation.action":
/*!************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/GenericNavigation.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"GenericNavigation"},"PageToOpen":"/risksmobile/Pages/Main.page"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/GenericToastMessage.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/GenericToastMessage.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ToastMessage","ActionResult":{"_Name":"GenericToastMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/Logging/LogUploadFailure.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/Logging/LogUploadFailure.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Uploading log file failed with error: {#ActionResults:UploadLog/error}","OKCaption":"OK","Title":"Log Upload Failed","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/Logging/LogUploadSuccessful.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/Logging/LogUploadSuccessful.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":3,"IsIconHidden":false,"MaxNumberOfLines":1,"Message":"Log File Uploaded","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/Logging/UploadLog.action":
/*!************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/Logging/UploadLog.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"ActionResult":{"_Name":"UploadLog"},"ActivityIndicatorText":"Uploading...","OnFailure":"/risksmobile/Actions/Logging/LogUploadFailure.action","OnSuccess":"/risksmobile/Actions/Logging/LogUploadSuccessful.action","ShowActivityIndicator":false,"_Type":"Action.Type.Logger.Upload"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/Logging/UploadLogProgress.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/Logging/UploadLogProgress.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionMessage":"Logs Uploaded","CompletionTimeout":2,"Message":"Uploading Log Files...","OnSuccess":"/risksmobile/Actions/Logging/UploadLog.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/RiskManagementService/Migrations/Migrations_CreateEntity.action":
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/RiskManagementService/Migrations/Migrations_CreateEntity.action ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/risksmobile/Actions/CreateEntityFailureMessage.action","OnSuccess":"/risksmobile/Actions/CreateEntitySuccessMessage.action","Properties":{"createdAt":"#Control:createdAt/#Value","createdBy":"#Control:createdBy/#Value","description":"#Control:description/#Value","owner":"#Control:owner/#Value","timeline":"#Control:timeline/#Value"},"Target":{"EntitySet":"Migrations","Service":"/risksmobile/Services/RiskManagementService.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/RiskManagementService/Migrations/Migrations_CreateRisks.action":
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/RiskManagementService/Migrations/Migrations_CreateRisks.action ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"risks","Target":{"EntitySet":"Migrations","ReadLink":"{@odata.readLink}"}},"OnFailure":"/risksmobile/Actions/CreateEntityFailureMessage.action","OnSuccess":"/risksmobile/Actions/CreateEntitySuccessMessage.action","Properties":{"title":"#Control:title/#Value","prio":"#Control:prio/#Value","description":"#Control:description/#Value","impact":"#Control:impact/#Value","criticality":"#Control:criticality/#Value","supplier_BusinessPartner":"#Control:supplier_BusinessPartner/#SelectedValue"},"Target":{"EntitySet":"Risks","Service":"/risksmobile/Services/RiskManagementService.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/RiskManagementService/Migrations/Migrations_DeleteEntity.action":
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/RiskManagementService/Migrations/Migrations_DeleteEntity.action ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Migrations","Service":"/risksmobile/Services/RiskManagementService.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/risksmobile/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/risksmobile/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/RiskManagementService/Migrations/Migrations_DetailPopover.action":
/*!****************************************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/RiskManagementService/Migrations/Migrations_DetailPopover.action ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Title":"Add Risks","OnPress":"/risksmobile/Rules/RiskManagementService/Migrations/NavToMigrations_CreateRisks.js"},{"Title":"Delete","OnPress":"/risksmobile/Rules/RiskManagementService/Migrations/Migrations_DeleteConfirmation.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/RiskManagementService/Migrations/Migrations_UpdateEntity.action":
/*!***************************************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/RiskManagementService/Migrations/Migrations_UpdateEntity.action ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Migrations","Service":"/risksmobile/Services/RiskManagementService.service","ReadLink":"{@odata.readLink}"},"Properties":{"createdAt":"#Control:createdAt/#Value","createdBy":"#Control:createdBy/#Value","description":"#Control:description/#Value","owner":"#Control:owner/#Value","timeline":"#Control:timeline/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/risksmobile/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/risksmobile/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/RiskManagementService/Migrations/NavToMigrations_Create.action":
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/RiskManagementService/Migrations/NavToMigrations_Create.action ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/risksmobile/Pages/RiskManagementService_Migrations/Migrations_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/RiskManagementService/Migrations/NavToMigrations_CreateRisks.action":
/*!*******************************************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/RiskManagementService/Migrations/NavToMigrations_CreateRisks.action ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/risksmobile/Pages/RiskManagementService_Migrations/Migrations_CreateRisks.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/RiskManagementService/Migrations/NavToMigrations_Detail.action":
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/RiskManagementService/Migrations/NavToMigrations_Detail.action ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/risksmobile/Pages/RiskManagementService_Migrations/Migrations_Detail.page"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/RiskManagementService/Migrations/NavToMigrations_Edit.action":
/*!************************************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/RiskManagementService/Migrations/NavToMigrations_Edit.action ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/risksmobile/Pages/RiskManagementService_Migrations/Migrations_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/RiskManagementService/Migrations/NavToMigrations_List.action":
/*!************************************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/RiskManagementService/Migrations/NavToMigrations_List.action ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/risksmobile/Pages/RiskManagementService_Migrations/Migrations_List.page"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/RiskManagementService/Risks/NavToRisks_Create.action":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/RiskManagementService/Risks/NavToRisks_Create.action ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/risksmobile/Pages/RiskManagementService_Risks/Risks_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/RiskManagementService/Risks/NavToRisks_Detail.action":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/RiskManagementService/Risks/NavToRisks_Detail.action ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/risksmobile/Pages/RiskManagementService_Risks/Risks_Detail.page"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/RiskManagementService/Risks/NavToRisks_Edit.action":
/*!**************************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/RiskManagementService/Risks/NavToRisks_Edit.action ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/risksmobile/Pages/RiskManagementService_Risks/Risks_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/RiskManagementService/Risks/NavToRisks_List.action":
/*!**************************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/RiskManagementService/Risks/NavToRisks_List.action ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/risksmobile/Pages/RiskManagementService_Risks/Risks_List.page"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/RiskManagementService/Risks/Risks_CreateEntity.action":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/RiskManagementService/Risks/Risks_CreateEntity.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/risksmobile/Actions/CreateEntityFailureMessage.action","OnSuccess":"/risksmobile/Actions/CreateEntitySuccessMessage.action","Properties":{"title":"#Control:title/#Value","prio":"#Control:prio/#Value","description":"#Control:description/#Value","impact":"#Control:impact/#Value","criticality":"#Control:criticality/#Value","supplier_BusinessPartner":"#Control:supplier_BusinessPartner/#SelectedValue"},"Target":{"EntitySet":"Risks","Service":"/risksmobile/Services/RiskManagementService.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/RiskManagementService/Risks/Risks_DeleteEntity.action":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/RiskManagementService/Risks/Risks_DeleteEntity.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Risks","Service":"/risksmobile/Services/RiskManagementService.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/risksmobile/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/risksmobile/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/RiskManagementService/Risks/Risks_UpdateEntity.action":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/RiskManagementService/Risks/Risks_UpdateEntity.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Risks","Service":"/risksmobile/Services/RiskManagementService.service","ReadLink":"{@odata.readLink}"},"Properties":{"title":"#Control:title/#Value","prio":"#Control:prio/#Value","description":"#Control:description/#Value","impact":"#Control:impact/#Value","criticality":"#Control:criticality/#Value","supplier_BusinessPartner":"#Control:supplier_BusinessPartner/#SelectedValue"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/risksmobile/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/risksmobile/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/RiskManagementService/Service/InitializeOnline.action":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/RiskManagementService/Service/InitializeOnline.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/risksmobile/Services/RiskManagementService.service","_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"OnFailure":"/risksmobile/Actions/RiskManagementService/Service/InitializeOnlineFailureMessage.action","ActionResult":{"_Name":"init"}}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/RiskManagementService/Service/InitializeOnlineFailureMessage.action":
/*!*******************************************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/RiskManagementService/Service/InitializeOnlineFailureMessage.action ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/UpdateEntityFailureMessage.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/UpdateEntityFailureMessage.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Update entity failure - {#ActionResults:update/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/risksmobile/Actions/UpdateEntitySuccessMessage.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/risksmobile/Actions/UpdateEntitySuccessMessage.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity updated","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/risksmobile/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/risksmobile/Globals/Application/AppDefinition_Version.global":
/*!****************************************************************************************!*\
  !*** ./build.definitions/risksmobile/Globals/Application/AppDefinition_Version.global ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/risksmobile/Globals/Application/ApplicationName.global":
/*!**********************************************************************************!*\
  !*** ./build.definitions/risksmobile/Globals/Application/ApplicationName.global ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"MDK App","_Type":"String"}

/***/ }),

/***/ "./build.definitions/risksmobile/Globals/Application/SupportEmail.global":
/*!*******************************************************************************!*\
  !*** ./build.definitions/risksmobile/Globals/Application/SupportEmail.global ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"support@mycompany.com","_Type":"String"}

/***/ }),

/***/ "./build.definitions/risksmobile/Globals/Application/SupportPhone.global":
/*!*******************************************************************************!*\
  !*** ./build.definitions/risksmobile/Globals/Application/SupportPhone.global ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1-800-677-7271","_Type":"String"}

/***/ }),

/***/ "./build.definitions/risksmobile/Services/RiskManagementService.service":
/*!******************************************************************************!*\
  !*** ./build.definitions/risksmobile/Services/RiskManagementService.service ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"RiskManagementService","OfflineEnabled":false,"LanguageURLParam":"","OnlineOptions":{},"OfflineOptions":{},"PathSuffix":"","SourceType":"Cloud","ServiceUrl":""}

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "1.1\n";

/***/ }),

/***/ "./build.definitions/risksmobile/Styles/Styles.light.json":
/*!****************************************************************!*\
  !*** ./build.definitions/risksmobile/Styles/Styles.light.json ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "./build.definitions/risksmobile/jsconfig.json":
/*!*****************************************************!*\
  !*** ./build.definitions/risksmobile/jsconfig.json ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"compilerOptions":{"module":"esnext","target":"es2019","moduleResolution":"node","lib":["esnext","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./build.definitions/application-index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});