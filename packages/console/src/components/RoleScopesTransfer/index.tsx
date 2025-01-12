import type { ScopeResponse, RoleType } from '@logto/schemas';
import classNames from 'classnames';

import * as transferLayout from '@/scss/transfer.module.scss';

import SourceScopesBox from './components/SourceScopesBox';
import TargetScopesBox from './components/TargetScopesBox';
import * as styles from './index.module.scss';

type Props = {
  roleId?: string;
  roleType: RoleType;
  value: ScopeResponse[];
  onChange: (value: ScopeResponse[]) => void;
};

function RoleScopesTransfer({ roleId, roleType, value, onChange }: Props) {
  return (
    <div className={classNames(transferLayout.container, styles.roleScopesTransfer)}>
      <SourceScopesBox
        roleId={roleId}
        roleType={roleType}
        selectedScopes={value}
        onChange={onChange}
      />
      <div className={transferLayout.verticalBar} />
      <TargetScopesBox selectedScopes={value} onChange={onChange} />
    </div>
  );
}

export default RoleScopesTransfer;
