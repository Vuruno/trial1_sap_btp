export default function CreateRelatedEntity(clientAPI) {
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