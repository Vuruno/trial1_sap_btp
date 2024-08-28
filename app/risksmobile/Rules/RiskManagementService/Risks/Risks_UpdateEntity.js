export default function UpdateEntity(clientAPI) {
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