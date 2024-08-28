export default function NavToEdit(clientAPI) {
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