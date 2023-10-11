export interface AccountObjectsRequestInput {
  account: string;
  ledger_index?: 'validated' | number;
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
  ledger_hash?: string;
}

export interface LedgerRequestInput {
  ledger_hash?: string;
  ledger_index?: string | number;
  accounts?: boolean;
  full?: boolean;
  transactions?: boolean;
  expand?: boolean;
  owner_funds?: boolean;
  binary?: boolean;
  queue?: boolean;
}
