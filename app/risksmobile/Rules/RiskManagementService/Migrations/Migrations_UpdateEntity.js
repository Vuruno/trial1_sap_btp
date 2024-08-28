export default function UpdateEntity(clientAPI) {
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