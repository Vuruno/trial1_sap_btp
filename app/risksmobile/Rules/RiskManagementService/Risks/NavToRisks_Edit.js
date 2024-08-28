export default function NavToEdit(clientAPI) {
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