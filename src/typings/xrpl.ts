export interface AccountLinesRequest {
  method: 'account_lines';
  params: { account: String }[];
}

export interface AccountCurrienciesRequest {
  method: 'account_currencies';
  params: { account: String }[];
}

export interface AccountInfoRequest {
  method: 'account_info';
  params: { account: String }[];
}

export interface AccountObjectsRequest {
  method: 'account_objects';
  params: {
    account: string;
    ledger_index?: 'validated';
    type?:
      | 'check'
      | 'deposit_preauth'
      | 'escrow'
      | 'offer'
      | 'payment_channel'
      | 'signer_list'
      | 'ticket'
      | 'state';
    deletion_blockers_only?: boolean;
    limit?: number;
  }[];
}

export interface LedgerRequest {
  method: 'ledger';
  params: {
    ledger_hash?: string;
    ledger_index?: string | number;
    accounts?: boolean;
    full?: boolean;
    transactions?: boolean;
    expand?: boolean;
    owner_funds?: boolean;
    binary?: boolean;
    queue?: boolean;
  }[];
}
