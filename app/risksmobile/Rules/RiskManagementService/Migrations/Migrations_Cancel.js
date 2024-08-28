export default function Cancel(clientAPI) {
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