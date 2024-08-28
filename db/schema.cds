namespace RiskManagement;

using { BusinessPartnerA2X } from '../srv/external/BusinessPartnerA2X.cds';

entity Risks
{
    key ID : UUID;
    title : String(100);
    prio : String(5);
    description : String(100);
    impact : Integer;
    criticality : Integer;
    miti : Association to one Migrations;
    supplier : Association to one BusinessPartnerA2X.A_BusinessPartner;
}

entity Migrations
{
    key ID : UUID;
    createdAt : String(100);
    createdBy : String(100);
    description : String(100);
    owner : String(100);
    timeline : String(100);
    risks : Association to many Risks on risks.miti = $self;
}
